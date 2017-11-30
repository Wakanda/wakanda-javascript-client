import AbstractBusiness from './abstract-business';
import Entity from '../presentation/entity';
import { DataClass } from '../presentation/dataclass';
import DataClassBusiness from './dataclass-business';
import { QueryOption } from '../presentation/query-option';
import WakandaClient from '../wakanda-client';
export interface IEntityDBO {
    __KEY?: string;
    __STAMP?: number;
    __deferred?: {
        uri: string;
        __KEY: string;
    };
    [key: string]: any;
}
declare class EntityBusiness extends AbstractBusiness {
    private entity;
    private dataClass;
    private dataClassBusiness;
    private service;
    private _oldEntityValues;
    constructor({wakJSC, entity, dataClass, dataClassBusiness}: {
        wakJSC: WakandaClient;
        entity: Entity;
        dataClass: DataClass;
        dataClassBusiness: DataClassBusiness;
    });
    _decorateEntity(): void;
    _flashEntityValues(): void;
    private _addUserDefinedMethods();
    fetch(options?: QueryOption): Promise<Entity>;
    callMethod(methodName: string, parameters: any[]): Promise<any>;
    delete(): Promise<void>;
    save(): Promise<Entity>;
    recompute(): Promise<Entity>;
    private prepareDataForSave();
    private _refreshEntity({fresherEntity});
    private _getExpandString();
}
export default EntityBusiness;
