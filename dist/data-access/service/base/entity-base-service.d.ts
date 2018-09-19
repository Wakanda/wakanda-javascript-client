import HttpClient from '../../http/http-client';
import { IEntityDBO } from '../../../business/entity-business';
export interface ISaveParams {
    httpClient: HttpClient;
    data: IEntityDBO;
    expand: string;
    dataURI: string;
}
export interface IRecomputeParams {
    httpClient: HttpClient;
    data: IEntityDBO;
    dataURI: string;
}
export interface ICallMethodParams {
    httpClient: HttpClient;
    dataURI: string;
    methodName: string;
    parameters: any[];
    entityKey: string;
}
export interface IDeleteParams {
    httpClient: HttpClient;
    entityKey: string;
    dataURI: string;
}
export declare class EntityBaseService {
    static save({ httpClient, data, expand, dataURI }: ISaveParams): Promise<IEntityDBO>;
    static recompute({ httpClient, dataURI, data }: IRecomputeParams): Promise<IEntityDBO>;
    static callMethod({ httpClient, dataURI, methodName, parameters, entityKey }: ICallMethodParams): Promise<any>;
    static delete({ httpClient, dataURI, entityKey }: IDeleteParams): Promise<boolean>;
}
