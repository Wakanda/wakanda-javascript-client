import AbstractBusiness from './abstract-business';
import { IEntityDBO } from './entity-business';
import Collection from '../presentation/collection';
import { DataClass } from '../presentation/dataclass';
import DataClassBusiness from './dataclass-business';
import { QueryOption } from '../presentation/query-option';
import WakandaClient from '../wakanda-client';
export interface ICollectionDBO {
    __ENTITYSET: string;
    __COUNT: number;
    __FIRST: number;
    __SENT: number;
    __ENTITIES: IEntityDBO[];
    __deferred: {
        uri: string;
    };
    [key: string]: any;
}
export interface ICollectionBusinessConstructor {
    wakJSC: WakandaClient;
    dataClass: DataClass;
    collection: Collection;
    dataClassBusiness: DataClassBusiness;
    collectionUri: string;
    pageSize: number;
    initialSelect: string;
}
declare class CollectionBusiness extends AbstractBusiness {
    private collection;
    private dataClass;
    private dataClassBusiness;
    private service;
    private pageSize;
    private initialSelect;
    constructor({ wakJSC, dataClass, collection, dataClassBusiness, collectionUri, pageSize, initialSelect }: ICollectionBusinessConstructor);
    _decorateCollection(): void;
    fetch(options?: QueryOption): Promise<Collection>;
    more(): Promise<Collection>;
    nextPage(): Promise<Collection>;
    prevPage(): Promise<Collection>;
    private _addUserDefinedMethods;
    callMethod(methodName: string, parameters: any[]): Promise<any>;
    private _refreshCollection;
}
export default CollectionBusiness;
