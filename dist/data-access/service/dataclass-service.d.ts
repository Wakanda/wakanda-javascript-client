import AbstractService from './abstract-service';
import { QueryOption } from '../../presentation/query-option';
import DataClassBusiness from '../../business/dataclass-business';
import { IEntityDBO } from '../../business/entity-business';
import { ICollectionDBO } from '../../business/collection-business';
import WakandaClient from '../../wakanda-client';
declare class DataClassService extends AbstractService {
    private dataClassBusiness;
    constructor({ wakJSC, dataClassBusiness }: {
        wakJSC: WakandaClient;
        dataClassBusiness: DataClassBusiness;
    });
    find(id: string | number, options: QueryOption): Promise<IEntityDBO>;
    query(options: QueryOption): Promise<ICollectionDBO>;
    callMethod(methodName: string, parameters: any[]): Promise<any>;
}
export default DataClassService;
