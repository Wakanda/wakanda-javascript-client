import AbstractService from './abstract-service';
import Collection from '../../presentation/collection';
import DataClassBusiness from '../../business/dataclass-business';
import { QueryOption } from '../../presentation/query-option';
import { ICollectionDBO } from '../../business/collection-business';
import { CollectionBaseService, isEntitySetUri } from './base/collection-base-service';
import WakandaClient from '../../wakanda-client';

class CollectionService extends AbstractService {
  private collection: Collection;
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
    collection: Collection;
    dataClassBusiness: DataClassBusiness;
    collectionUri: string;
  }) {
    super({ wakJSC });

    this.collection = collection;
    this.dataClassBusiness = dataClassBusiness;
    this.collectionUri = collectionUri;
    this.isEntitySet = isEntitySetUri(collectionUri);
  }

  public fetch(options: QueryOption): Promise<ICollectionDBO> {
    return CollectionBaseService.fetch({
      httpClient: this.httpClient,
      collectionUri: this.collectionUri,
      isEntitySet: this.isEntitySet,
      options,
    }).then(dbo => {
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
