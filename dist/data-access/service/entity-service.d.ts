import AbstractService from './abstract-service';
import Entity from '../../presentation/entity';
import DataClassBusiness from '../../business/dataclass-business';
import { IEntityDBO } from '../../business/entity-business';
import WakandaClient from '../../wakanda-client';
declare class EntityService extends AbstractService {
    private entity;
    private dataClassBusiness;
    constructor({ wakJSC, entity, dataClassBusiness }: {
        wakJSC: WakandaClient;
        entity: Entity;
        dataClassBusiness: DataClassBusiness;
    });
    save(data: IEntityDBO, expand: string): Promise<IEntityDBO>;
    recompute(data: IEntityDBO): Promise<IEntityDBO>;
    callMethod(methodName: string, parameters: any[]): Promise<any>;
    delete(): Promise<boolean>;
}
export default EntityService;
