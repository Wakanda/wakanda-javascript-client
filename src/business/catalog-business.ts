import AbstractBusiness from './abstract-business';
import CatalogService from '../data-access/service/catalog-service';
import Catalog from '../presentation/catalog';
import {DataClass, Attribute, AttributeRelated, AttributeCollection} from '../presentation/dataclass';
import DataClassBusiness from './dataclass-business';

class CatalogBusiness extends AbstractBusiness {
  constructor(obj) {
    super(obj);

    this.service = new CatalogService({
      wakJSC: this.wakJSC
    });
  }

  get(dataClasses) {
    return this.service.get(dataClasses).then(dataClassDBOArray => {

      let dcArray = [];

      for (let dcDBO of dataClassDBOArray) {
        let attributes = [];

        for(let attr of dcDBO.attributes) {
          switch (attr.kind) {
            case 'relatedEntity':
              attributes.push(new AttributeRelated({
                name: attr.name,
                type: attr.type,
                kind: attr.kind
              }));
              break;
            case 'storage':
            case 'calculated':
            case 'alias':
              let readOnly = attr.readOnly || (attr.type === 'image' || attr.type === 'blob');
              attributes.push(new Attribute({
                name: attr.name,
                type: attr.type,
                readOnly,
                kind: attr.kind
              }));
              break;
            case 'relatedEntities':
              attributes.push(new AttributeCollection({
                name: attr.name,
                type: attr.type,
                kind: attr.kind
              }));
              break;
            default:
              throw new Error('[WakJSC] Unhandled ' + attr.kind + ' attribute type');
          }
        }

        let methods = {
          entity: [],
          collection: [],
          dataClass: []
        };

        for (let method of dcDBO.methods) {
          switch(method.applyTo) {
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
              throw new Error('Unrecognized method type');
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
          methods
        });
        dataClassBusiness._decorateDataClass();

        dcArray.push(dataClass);
      }

      return new Catalog({
        dataClasses: dcArray
      });
    });
  }
}

export default CatalogBusiness;