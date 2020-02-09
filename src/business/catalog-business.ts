import CatalogService from "../data-access/service/catalog-service";
import Catalog from "../presentation/catalog";
import {
  Attribute,
  AttributeCollection,
  AttributeRelated,
  DataClass,
} from "../presentation/dataclass";
import AbstractBusiness from "./abstract-business";
import DataClassBusiness from "./dataclass-business";

export interface IDataClassDBO {
  name: string;
  collectionName: string;
  dataURI: string;
  attributes: {
    name: string;
    type: string;
    kind: string;
    readOnly: boolean;
    simpleDate: boolean;
  }[];
  methods: {
    name: string;
    applyTo: string;
  }[];
}

class CatalogBusiness extends AbstractBusiness {
  private service: CatalogService;
  private seenDataClasses: string[];

  constructor(obj: any) {
    super(obj);

    this.service = new CatalogService({
      wakJSC: this.wakJSC,
    });
  }

  public get(dataClasses?: string[]): Promise<Catalog> {
    this.seenDataClasses = [];

    return this.service.get(dataClasses).then((dataClassDBOArray: IDataClassDBO[]) => {
      const dcArray: DataClass[] = [];

      for (const dcDBO of dataClassDBOArray) {
        const attributes: Attribute[] = [];

        for (const attr of dcDBO.attributes) {
          switch (attr.kind) {
            case "relatedEntity":
              attributes.push(
                new AttributeRelated({
                  name: attr.name,
                  type: attr.type,
                  kind: attr.kind,
                }),
              );
              this.needDataClass(attr.type);
              break;
            case "storage":
            case "calculated":
            case "alias":
              const readOnly = attr.readOnly || (attr.type === "image" || attr.type === "blob");
              const simpleDate = attr.simpleDate !== undefined ? attr.simpleDate : undefined;
              attributes.push(
                new Attribute({
                  name: attr.name,
                  type: attr.type,
                  readOnly,
                  kind: attr.kind,
                  simpleDate,
                }),
              );
              break;
            case "relatedEntities":
              let entityType: string;
              dataClassDBOArray.some((dc) => {
                if (dc.collectionName === attr.type) {
                  entityType = dc.name;
                  return true;
                }
              });
              const attrCollection = new AttributeCollection({
                name: attr.name,
                type: attr.type,
                kind: attr.kind,
                entityType,
              });
              attributes.push(attrCollection);
              this.needDataClass(attrCollection.entityType);
              break;
            default:
              throw new Error("[WakandaClient] Unhandled " + attr.kind + " attribute type");
          }
        }

        const methods: {
          entity: string[];
          collection: string[];
          dataClass: string[];
        } = {
          entity: [],
          collection: [],
          dataClass: [],
        };

        for (const method of dcDBO.methods) {
          switch (method.applyTo) {
            case "entity":
              methods.entity.push(method.name);
              break;
            case "entityCollection":
              methods.collection.push(method.name);
              break;
            case "dataClass":
              methods.dataClass.push(method.name);
              break;
            default:
              throw new Error("[WakandaClient] Unrecognized " + method.applyTo + " method type");
          }
        }

        const dataClass = new DataClass({
          name: dcDBO.name,
          collectionName: dcDBO.collectionName,
          attributes,
          methods,
        });

        // Binding framework methods to the dataclass
        const dataClassBusiness = new DataClassBusiness({
          wakJSC: this.wakJSC,
          dataClass,
          methods,
          dataURI: dcDBO.dataURI,
        });
        dataClassBusiness._decorateDataClass();

        dcArray.push(dataClass);
      }

      const catalog = new Catalog({
        dataClasses: dcArray,
      });

      // Check if we have all needed dataClasses on the catalog
      for (const dcName of this.seenDataClasses) {
        if (!catalog[dcName]) {
          throw new Error("Needed " + dcName + " dataClass is not present on catalog");
        }
      }

      return catalog;
    });
  }

  private needDataClass(dcName: string) {
    if (this.seenDataClasses.indexOf(dcName) === -1) {
      this.seenDataClasses.push(dcName);
    }
  }
}

export default CatalogBusiness;
