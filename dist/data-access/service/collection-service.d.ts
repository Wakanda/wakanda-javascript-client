import AbstractService from './abstract-service';
import Collection from '../../presentation/collection';
import DataClassBusiness from '../../business/dataclass-business';
import { QueryOption } from '../../presentation/query-option';
import { ICollectionDBO } from '../../business/collection-business';
import WakandaClient from '../../wakanda-client';
declare class CollectionService extends AbstractService {
    private collection;
    private dataClassBusiness;
    private collectionUri;
    private isEntitySet;
    constructor({wakJSC, collection, dataClassBusiness, collectionUri}: {
        wakJSC: WakandaClient;
        collection: Collection;
        dataClassBusiness: DataClassBusiness;
        collectionUri: string;
    });
    fetch(options: QueryOption): Promise<ICollectionDBO>;
    callMethod(methodName: string, parameters: any[]): Promise<any>;
}
export default CollectionService;
