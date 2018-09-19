import HttpClient from '../../http/http-client';
import { QueryOption } from '../../../presentation/query-option';
import { IEntityDBO } from '../../../business/entity-business';
import { ICollectionDBO } from '../../../business/collection-business';
export interface IFindParams {
    httpClient: HttpClient;
    key: number | string;
    options: QueryOption;
    dataURI: string;
}
export interface IQueryParams {
    httpClient: HttpClient;
    options: QueryOption;
    dataURI: string;
}
export interface ICallMethodParams {
    httpClient: HttpClient;
    methodName: string;
    parameters: any[];
    dataURI: string;
}
export declare class DataClassBaseService {
    static find({ httpClient, key, options, dataURI }: IFindParams): Promise<IEntityDBO>;
    static query({ httpClient, options, dataURI }: IQueryParams): Promise<ICollectionDBO>;
    static callMethod({ httpClient, methodName, parameters, dataURI }: ICallMethodParams): Promise<any>;
    private static _sanitizeOptionParams;
}
