import { ICollectionDBO } from "../../business/collection-business";
import DataClassBusiness from "../../business/dataclass-business";
import { Entity } from "../../presentation";
import Collection from "../../presentation/collection";
import { IQueryOption } from "../../presentation/query-option";
import WakandaClient from "../../wakanda-client";
import AbstractService from "./abstract-service";
import { CollectionBaseService, isEntitySetUri } from "./base/collection-base-service";

class CollectionService extends AbstractService {
  private collection: Collection<Entity>;
  private dataClassBusiness: DataClassBusiness;
  private collectionUri: string;
  private isEntitySet: boolean;

  constructor({
    wakJSC,
    collection,
    dataClassBusiness,
    collectionUri,
  }: {
    wakJSC: WakandaClient;
    collection: Collection<Entity>;
    dataClassBusiness: DataClassBusiness;
    collectionUri: string;
  }) {
    super({ wakJSC });

    this.collection = collection;
    this.dataClassBusiness = dataClassBusiness;
    this.collectionUri = collectionUri;
    this.isEntitySet = isEntitySetUri(collectionUri);
  }

  public fetch(options: IQueryOption): Promise<ICollectionDBO> {
    return CollectionBaseService.fetch({
      httpClient: this.httpClient,
      collectionUri: this.collectionUri,
      isEntitySet: this.isEntitySet,
      options,
    }).then((dbo) => {
      if (dbo.__ENTITYSET) {
        this.collectionUri = dbo.__ENTITYSET;
        this.isEntitySet = isEntitySetUri(dbo.__ENTITYSET);
      }

      return dbo;
    });
  }

  public callMethod(methodName: string, parameters: any[]): Promise<any> {
    return CollectionBaseService.callMethod({
      httpClient: this.httpClient,
      collectionUri: this.collectionUri,
      isEntitySet: this.isEntitySet,
      methodName,
      parameters,
    });
  }
}

export default CollectionService;
