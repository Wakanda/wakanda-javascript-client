import HttpClient from '../../http/http-client';
import { ICurrentUserDBO } from '../../../business/directory-business';
export interface ILoginParams {
    httpClient: HttpClient;
    username: string;
    password: string;
    duration: number;
}
export interface ICurrentUserBelongsToParams {
    httpClient: HttpClient;
    group: string;
}
export declare class DirectoryBaseService {
    static login({ httpClient, username, password, duration }: {
        httpClient: HttpClient;
        username: string;
        password: string;
        duration?: number;
    }): Promise<boolean>;
    static logout({ httpClient }: {
        httpClient: HttpClient;
    }): Promise<boolean>;
    static getCurrentUser({ httpClient }: {
        httpClient: HttpClient;
    }): Promise<ICurrentUserDBO>;
    static getCurrentUserBelongsTo({ httpClient, group }: ICurrentUserBelongsToParams): Promise<boolean>;
}
