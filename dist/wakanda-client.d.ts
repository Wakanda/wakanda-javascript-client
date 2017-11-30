import HttpClient from './data-access/http/http-client';
import Catalog from './presentation/catalog';
import BrowserHttpClient from './data-access/http/browser-http-client';
import NodeHttpClient from './data-access/http/node-http-client';
export interface IDirectory {
    login(username: string, password: string, duration?: number): Promise<boolean>;
    logout(): Promise<boolean>;
    getCurrentUser(): Promise<any>;
    getCurrentUserBelongsTo(groupName: string): Promise<boolean>;
}
export interface IHelper {
    isEntity(object: any): boolean;
    isCollection(object: any): boolean;
}
declare class WakandaClient {
    static HttpClient: typeof BrowserHttpClient | typeof NodeHttpClient;
    _httpClient: HttpClient;
    directory: IDirectory;
    helper: IHelper;
    catalog: string;
    constructor(params: {
        host?: string;
        catalog?: string;
    } | any);
    getCatalog(dataClasses?: string[]): Promise<Catalog>;
    version(): string;
}
export default WakandaClient;
