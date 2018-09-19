import WakandaClient from '../wakanda-client';
import AbstractBusiness from './abstract-business';
export interface ICurrentUserDBO {
    userName: string;
    fullName: string;
    ID: string | number;
}
declare class DirectoryBusiness extends AbstractBusiness {
    private service;
    constructor({ wakJSC }: {
        wakJSC: WakandaClient;
    });
    login(username: string, password: string, duration?: number): Promise<boolean>;
    logout(): Promise<boolean>;
    getCurrentUser(): Promise<ICurrentUserDBO>;
    getCurrentUserBelongsTo(group: string): Promise<boolean>;
}
export default DirectoryBusiness;
