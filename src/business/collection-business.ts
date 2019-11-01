import Const from "../const";
import CollectionService from "../data-access/service/collection-service";
import { Entity } from "../presentation";
import Collection from "../presentation/collection";
import { DataClass } from "../presentation/dataclass";
import { IQueryOption } from "../presentation/query-option";
import WakandaClient from "../wakanda-client";
import AbstractBusiness from "./abstract-business";
import DataClassBusiness from "./dataclass-business";
import { IEntityDBO } from "./entity-business";
import { MethodAdapter } from "./method-adapter";

export interface ICollectionDBO {
  __ENTITYSET: string;
  __COUNT: number;
  __FIRST: number;
  __SENT: number;
  __ENTITIES: IEntityDBO[];
  __deferred: { uri: string };

  [key: string]: any;
}

export interface ICollectionBusinessConstructor {
  wakJSC: WakandaClient;
  dataClass: DataClass;
  collection: Collection<Entity>;
  dataClassBusiness: DataClassBusiness;
  collectionUri: string;
  pageSize: number;
  initialSelect: string;
}

class CollectionBusiness extends AbstractBusiness {
  private collection: Collection<Entity>;
  private dataClass: DataClass;
  private dataClassBusiness: DataClassBusiness;
  private service: CollectionService;
  private pageSize: number;
  private initialSelect: string;

  constructor({
    wakJSC,
    dataClass,
    collection,
    dataClassBusiness,
    collectionUri,
    pageSize,
    initialSelect,
  }: ICollectionBusinessConstructor) {
    super({ wakJSC });

    this.collection = collection;
    this.dataClass = dataClass;
    this.dataClassBusiness = dataClassBusiness;
    this.service = new CollectionService({
      wakJSC,
      collection,
      dataClassBusiness,
      collectionUri,
    });
    this.pageSize = pageSize;
    this.initialSelect = initialSelect;
  }

  public _decorateCollection() {
    this.collection.fetch = this.fetch.bind(this);
    this.collection.nextPage = this.nextPage.bind(this);
    this.collection.prevPage = this.prevPage.bind(this);
    this.collection.more = this.more.bind(this);

    this._addUserDefinedMethods();
  }

  public fetch(options?: IQueryOption): Promise<Collection<Entity>> {
    const opt = options || {};

    if (opt.method && opt.method.length > 0) {
      throw new Error("Collection.fetch: option method is not allowed");
    }

    if (!opt.pageSize) {
      opt.pageSize = this.pageSize ? this.pageSize : Const.DEFAULT_PAGE_SIZE;
    }

    if (opt.select) {
      this.initialSelect = opt.select;
    }

    this.pageSize = opt.pageSize;

    return this.service.fetch(opt).then((collectionDBO) => {
      const fresherCollection = this.dataClassBusiness._presentationCollectionFromDbo({
        dbo: collectionDBO,
        pageSize: this.pageSize,
      });

      this._refreshCollection({ fresherCollection });
      return this.collection;
    });
  }

  public more(): Promise<Collection<Entity>> {
    if (this.collection._deferred === true) {
      throw new Error("Collection.more: can not call more on a deferred collection");
    }

    const options: IQueryOption = {
      start: this.collection._first + this.collection._sent,
      pageSize: this.pageSize,
    };

    if (this.initialSelect) {
      options.select = this.initialSelect;
    }

    return this.service.fetch(options).then((dbo) => {
      this.collection._sent += dbo.__ENTITIES.length;

      for (const entity of dbo.__ENTITIES) {
        this.collection.entities.push(
          this.dataClassBusiness._presentationEntityFromDbo({
            dbo: entity,
          }),
        );
      }

      return this.collection;
    });
  }

  public nextPage(): Promise<Collection<Entity>> {
    if (this.collection._deferred === true) {
      throw new Error("Collection.nextPage: can not call nextPage on a deferred collection");
    }

    const options: IQueryOption = {
      start: this.collection._first + this.pageSize,
      pageSize: this.pageSize,
    };

    if (this.initialSelect) {
      options.select = this.initialSelect;
    }

    return this.fetch(options);
  }

  public prevPage(): Promise<Collection<Entity>> {
    if (this.collection._deferred === true) {
      throw new Error("Collection.prevPage: can not call prevPage on a deferred collection");
    }

    const options: IQueryOption = {
      start: this.collection._first - this.pageSize,
      pageSize: this.pageSize,
    };

    if (this.initialSelect) {
      options.select = this.initialSelect;
    }

    return this.fetch(options);
  }

  public callMethod(methodName: string, parameters: any[]) {
    if (this.collection._deferred) {
      throw new Error("Collection." + methodName + ": can not be called on a deferred collection");
    }

    return this.service.callMethod(methodName, parameters).then((obj: any) => {
      return MethodAdapter.transform(obj, this.dataClassBusiness._dataClassBusinessMap);
    });
  }

  private _addUserDefinedMethods() {
    this.dataClassBusiness.methods.collection.forEach((method) => {
      // Voluntary don't use fat arrow notation to use arguments object without a bug
      this.collection[method] = (...args: any[]) => this.callMethod(method, args);
    });
  }

  private _refreshCollection({ fresherCollection }: { fresherCollection: Collection<Entity> }) {
    for (const prop in fresherCollection) {
      if (Object.prototype.hasOwnProperty.call(fresherCollection, prop)) {
        if (typeof fresherCollection[prop] !== "function") {
          this.collection[prop] = fresherCollection[prop];
        }
      }
    }
  }
}

export default CollectionBusiness;
