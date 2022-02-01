import EntityService from '../data-access/service/entity-service';
import { AttributeCollection, AttributeRelated } from '../presentation/dataclass';
import { DataClass } from '../presentation/dataclass';
import Entity from '../presentation/entity';
import Media from '../presentation/media';
import { IQueryOption } from '../presentation/query-option';
import WakandaClient from '../wakanda-client';
import AbstractBusiness from './abstract-business';
import DataClassBusiness from './dataclass-business';
import { MethodAdapter } from './method-adapter';
import Util from './util';

export interface IEntityDBO {
  __KEY?: string;
  __STAMP?: number;
  __deferred?: { uri: string; __KEY: string };

  [key: string]: any;
}

class EntityBusiness extends AbstractBusiness {
  private entity: Entity;
  private dataClass: DataClass;
  private dataClassBusiness: DataClassBusiness;
  private service: EntityService;
  private oldEntityValues: IEntityDBO;

  constructor({
    wakJSC,
    entity,
    dataClass,
    dataClassBusiness,
  }: {
    wakJSC: WakandaClient;
    entity: Entity;
    dataClass: DataClass;
    dataClassBusiness: DataClassBusiness;
  }) {
    super({ wakJSC });

    this.entity = entity;
    this.dataClass = dataClass;
    this.dataClassBusiness = dataClassBusiness;
    this.service = new EntityService({
      wakJSC,
      entity,
      dataClassBusiness,
    });
  }

  public _decorateEntity() {
    this.entity.save = this.save.bind(this);
    this.entity.delete = this.delete.bind(this);
    this.entity.fetch = this.fetch.bind(this);
    this.entity.recompute = this.recompute.bind(this);

    this._addUserDefinedMethods();
  }

  public _flashEntityValues(): void {
    const data: IEntityDBO = {};
    const entity = this.entity;

    for (const attr of this.dataClass.attributes) {
      const objAttr = entity[attr.name];

      if (attr instanceof AttributeCollection) {
        continue;
      }

      if (attr instanceof AttributeRelated) {
        data[attr.name] = objAttr ? objAttr._key : null;
      } else {
        switch (attr.type) {
          case 'image':
          case 'blob':
            data[attr.name] = { uri: objAttr.uri };
            break;
          case 'object':
            data[attr.name] = JSON.stringify(objAttr);
            break;
          case 'date':
            if (!objAttr) {
              data[attr.name] = null;
            } else {
              data[attr.name] = attr.simpleDate
                ? Util.wakToStringSimpleDate(objAttr)
                : objAttr.toJSON();
            }
            break;
          default:
            data[attr.name] = objAttr;
        }
      }
    }

    this.oldEntityValues = data;
  }

  public fetch(options?: IQueryOption): Promise<Entity> {
    const opt = options || {};

    if (
      opt.filter !== undefined ||
      opt.params !== undefined ||
      opt.pageSize !== undefined ||
      opt.start !== undefined ||
      opt.orderBy !== undefined
    ) {
      throw new Error(
        'Entity.fetch: options filter, params, pageSize, start and orderBy are not allowed'
      );
    }

    return this.dataClassBusiness.find(this.entity._key, options).then((fresherEntity) => {
      this._refreshEntity({ fresherEntity });
      this._flashEntityValues();
      return this.entity;
    });
  }

  public callMethod(methodName: string, parameters: any[]): Promise<any> {
    if (!this.entity._key) {
      throw new Error('Entity.' + methodName + ': can not be called on an unsaved entity');
    }

    return this.service.callMethod(methodName, parameters).then((obj) => {
      return MethodAdapter.transform(obj, this.dataClassBusiness._dataClassBusinessMap);
    });
  }

  public delete(): Promise<void> {
    if (!this.entity._key) {
      throw new Error('Entity.delete: can not delete unsaved entity');
    }

    return this.service.delete().then(() => {
      this.entity = null;
    });
  }

  public save(): Promise<Entity> {
    const data = this.prepareDataForSave();

    // If first-level related entities were already expanded, we will save the
    // entity and ask the server to expand theses attributes on its response
    // So, the user keeps its entities expanded
    const expand = this._getExpandString();

    return this.service.save(data, expand).then((entityDbo) => {
      const fresherEntity = this.dataClassBusiness._presentationEntityFromDbo({
        dbo: entityDbo,
      });

      this._refreshEntity({ fresherEntity });
      this._flashEntityValues();
      return this.entity;
    });
  }

  public recompute(): Promise<Entity> {
    const data = this.prepareDataForSave();

    return this.service.recompute(data).then((dbo) => {
      const fresherEntity = this.dataClassBusiness._presentationEntityFromDbo({
        dbo,
      });

      this._refreshEntity({ fresherEntity });
      return this.entity;
    });
  }

  private _addUserDefinedMethods() {
    this.dataClassBusiness.methods.entity.forEach((method) => {
      // Voluntary don't use fat arrow notation to use arguments object without a bug
      this.entity[method] = (...args: any[]) => this.callMethod(method, args);
    });
  }

  private prepareDataForSave(): IEntityDBO {
    const data: IEntityDBO = {};
    let entityIsNew = false;

    if (this.entity._key && this.entity._stamp) {
      data.__KEY = this.entity._key;
      data.__STAMP = this.entity._stamp;
    } else {
      entityIsNew = true;
    }

    for (const attr of this.dataClass.attributes) {
      let objAttr = this.entity[attr.name];

      if (objAttr === undefined) {
        objAttr = null;
      }

      if (attr instanceof AttributeRelated) {
        data[attr.name] = objAttr ? objAttr._key : null;
      } else if (attr.readOnly) {
        continue;
      } else if (attr.type === 'date') {
        if (!objAttr) {
          data[attr.name] = objAttr;
        } else {
          data[attr.name] = attr.simpleDate
            ? Util.wakToStringSimpleDate(objAttr)
            : objAttr.toJSON();
        }
      } else if (!(attr instanceof AttributeCollection)) {
        // Don't send null value for a newly created attribute (to don't override value eventually set on init event)
        // except for ID (which is null), because if an empty object is send, save is ignored
        if (!entityIsNew || objAttr !== null || attr.name === 'ID') {
          data[attr.name] = objAttr;
        }
      }
    }

    if (!entityIsNew) {
      const oldData = this.oldEntityValues || {};
      for (const attr of this.dataClass.attributes) {
        if (data[attr.name] === undefined || attr.name === 'ID') {
          continue;
        }

        switch (attr.type) {
          case 'image':
          case 'blob':
            if (data[attr.name].uri === oldData[attr.name].uri) {
              delete data[attr.name];
            }
            break;
          case 'object':
            if (JSON.stringify(data[attr.name]) === oldData[attr.name]) {
              delete data[attr.name];
            }
            break;
          default:
            if (data[attr.name] === oldData[attr.name]) {
              delete data[attr.name];
            }
        }
      }
    }

    return data;
  }

  private _refreshEntity({ fresherEntity }: { fresherEntity: Entity }) {
    for (const prop in fresherEntity) {
      if (fresherEntity.hasOwnProperty(prop) && typeof fresherEntity[prop] !== 'function') {
        if (fresherEntity[prop] instanceof Media) {
          this.entity[prop].uri = fresherEntity[prop].uri;
        } else {
          this.entity[prop] = fresherEntity[prop];
        }
      }
    }
  }

  private _getExpandString(): string {
    let expand = '';
    for (const attr of this.dataClass.attributes) {
      if (attr instanceof AttributeRelated || attr instanceof AttributeCollection) {
        if (this.entity[attr.name] instanceof Entity && !this.entity[attr.name]._deferred) {
          expand += attr.name + ',';
        }
      }
    }

    return expand.length > 0 ? expand.slice(0, -1) : null;
  }
}

export default EntityBusiness;
