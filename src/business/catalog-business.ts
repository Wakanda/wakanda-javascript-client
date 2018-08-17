import AbstractBusiness from './abstract-business';
import CatalogService from '../data-access/service/catalog-service';
import Catalog from '../presentation/catalog';
import {DataClass, Attribute, AttributeRelated, AttributeCollection} from '../presentation/dataclass';
import DataClassBusiness from './dataclass-business';

export interface IDataClassDBO {
  name: string;
  collectionName: string;
  dataURI: string;
  attributes: {
    name: string,
    type: string,
    kind: string,
    readOnly: boolean,
    simpleDate: boolean,
    identifying: boolean,
    path: string
  }[];
  methods: {
    name: string,
    applyTo: string
  }[];
}

class CatalogBusiness extends AbstractBusiness {

  private service: CatalogService;
  private seenDataClasses: string[];

  constructor(obj: any) {
    super(obj);

    this.service = new CatalogService({
      wakJSC: this.wakJSC
    });
  }

  private needDataClass(dcName: string) {
    if (this.seenDataClasses.indexOf(dcName) === -1) {
      this.seenDataClasses.push(dcName);
    }
  }

  public get(dataClasses?: string[]): Promise<Catalog> {

    this.seenDataClasses = [];

    return this.service.get(dataClasses).then((dataClassDBOArray: IDataClassDBO[]) => {

      let dcArray: DataClass[] = [];

      for (let dcDBO of dataClassDBOArray) {
        let attributes: Attribute[] = [];

        for (let attr of dcDBO.attributes) {
          switch (attr.kind) {
            case 'relatedEntity':
              attributes.push(new AttributeRelated({
                name: attr.name,
                type: attr.type,
                kind: attr.kind,
                path: attr.path
              }));
              this.needDataClass(attr.type);
              break;
            case 'storage':
            case 'calculated':
            case 'alias':
              let readOnly = attr.readOnly || (attr.type === 'image' || attr.type === 'blob');
              let simpleDate = attr.simpleDate !== undefined ? attr.simpleDate : undefined;
              attributes.push(new Attribute({
                name: attr.name,
                type: attr.type,
                readOnly,
                kind: attr.kind,
                identifying: attr.identifying,
                simpleDate: simpleDate
              }));
              break;
            case 'relatedEntities':
              let entityType: string;
              dataClassDBOArray.some((_dataClass) => {
                if (_dataClass.collectionName === attr.type) {
                  entityType = _dataClass.name;
                  return true;
                }
              });
              let attrCollection = new AttributeCollection({
                name: attr.name,
                type: attr.type,
                kind: attr.kind,
                entityType: entityType,
                path: attr.path
              });
              attributes.push(attrCollection);
              this.needDataClass(attrCollection.entityType);
              break;
            default:
              throw new Error('[WakandaClient] Unhandled ' + attr.kind + ' attribute type');
          }
        }

        let methods: {
          entity: string[],
          collection: string[],
          dataClass: string[]
        } = {
          entity: [],
          collection: [],
          dataClass: []
        };

        for (let method of dcDBO.methods) {
          switch (method.applyTo) {
            case 'entity':
              methods.entity.push(method.name);
              break;
            case 'entityCollection':
              methods.collection.push(method.name);
              break;
            case 'dataClass':
              methods.dataClass.push(method.name);
              break;
            default:
              throw new Error('[WakandaClient] Unrecognized ' + method.applyTo + ' method type');
          }
        }

        let dataClass = new DataClass({
          name: dcDBO.name,
          collectionName: dcDBO.collectionName,
          attributes,
          methods
        });

        //Binding framework methods to the dataclass
        let dataClassBusiness = new DataClassBusiness({
          wakJSC: this.wakJSC,
          dataClass,
          methods,
          dataURI: dcDBO.dataURI
        });
        dataClassBusiness._decorateDataClass();

        dcArray.push(dataClass);
      }

      let catalog = new Catalog({
        dataClasses: dcArray
      });

      //Check if we have all needed dataClasses on the catalog
      for (let dcName of this.seenDataClasses) {
        if (!catalog[dcName]) {
          throw new Error('Needed ' + dcName + ' dataClass is not present on catalog');
        }
      }

      return catalog;
    });
  }
}

export default CatalogBusiness;
