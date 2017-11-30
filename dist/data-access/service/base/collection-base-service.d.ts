import HttpClient from '../../http/http-client';
import { QueryOption } from '../../../presentation/query-option';
import { ICollectionDBO } from '../../../business/collection-business';
export interface IBaseParams {
    httpClient: HttpClient;
    collectionUri: string;
    isEntitySet: boolean;
}
export interface IFetchParams extends IBaseParams {
    options: QueryOption;
}
export interface ICallMethodParams extends IBaseParams {
    methodName: string;
    parameters: any[];
}
export declare class CollectionBaseService {
    static fetch({httpClient, collectionUri, isEntitySet, options}: IFetchParams): Promise<ICollectionDBO>;
    static callMethod({httpClient, collectionUri, isEntitySet, methodName, parameters}: ICallMethodParams): Promise<any>;
}
export declare function isEntitySetUri(uri: string): boolean;
