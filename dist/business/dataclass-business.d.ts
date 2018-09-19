import AbstractBusiness from './abstract-business';
import Entity from '../presentation/entity';
import Collection from '../presentation/collection';
import Media from '../presentation/media';
import { ICollectionDBO } from './collection-business';
import { DataClass } from '../presentation/dataclass';
import { QueryOption } from '../presentation/query-option';
import { IEntityDBO } from './entity-business';
import WakandaClient from '../wakanda-client';
export interface IMethodsArray {
    entity: string[];
    collection: string[];
    dataClass: string[];
}
declare class DataClassBusiness extends AbstractBusiness {
    dataClass: DataClass;
    methods: IMethodsArray;
    _dataClassBusinessMap: Map<string, DataClassBusiness>;
    dataURI: string;
    private service;
    constructor({ wakJSC, dataClass, methods, dataURI }: {
        wakJSC: WakandaClient;
        dataClass: DataClass;
        methods: IMethodsArray;
        dataURI: string;
    });
    _decorateDataClass(): void;
    private _addUserDefinedMethods;
    callMethod(methodName: string, parameters: any[]): Promise<Entity | Collection | any>;
    find(id: string | number, options?: QueryOption): Promise<Entity>;
    query(options?: QueryOption): Promise<Collection>;
    create(pojo?: any): Entity;
    private _createEntity;
    private _createCollection;
    _createMedia({ uri, isImage, attributeName, entity }: {
        uri: string;
        isImage: boolean;
        attributeName: string;
        entity: Entity;
    }): Media;
    private _populateEntityDataFromDbo;
    _presentationEntityFromDbo({ dbo }: {
        dbo: IEntityDBO;
    }): Entity;
    _presentationCollectionFromDbo({ dbo, pageSize, initialSelect }: {
        dbo: ICollectionDBO;
        pageSize?: number;
        initialSelect?: string;
    }): Collection;
}
export default DataClassBusiness;
