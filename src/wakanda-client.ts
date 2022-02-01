/* tslint:disable variable-name */

import CatalogBusiness from './business/catalog-business';
import DirectoryBusiness from './business/directory-business';
import BrowserHttpClient from './data-access/http/browser-http-client';
import HttpClient from './data-access/http/http-client';
import NodeHttpClient from './data-access/http/node-http-client';
import Catalog from './presentation/catalog';
import Collection from './presentation/collection';
import Entity from './presentation/entity';

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

class WakandaClient {
  public static HttpClient: typeof BrowserHttpClient | typeof NodeHttpClient;

  public _httpClient: HttpClient;
  public directory: IDirectory;
  public helper: IHelper;
  public catalog: string;

  constructor(
    params: {
      host?: string;
      catalog?: string;
      client?: HttpClient;
    } = {}
  ) {
    const { host, catalog } = params;

    this._httpClient =
      (params && params.client ? params.client : false) ||
      new WakandaClient.HttpClient({
        apiPrefix: host || '',
      });

    this.catalog = catalog;

    const directoryBusiness = new DirectoryBusiness({
      wakJSC: this,
    });

    this.directory = {
      login: (username, password, duration) => {
        return directoryBusiness.login(username, password, duration);
      },
      logout: () => {
        return directoryBusiness.logout();
      },
      getCurrentUser: () => {
        return directoryBusiness.getCurrentUser();
      },
      getCurrentUserBelongsTo: (group) => {
        return directoryBusiness.getCurrentUserBelongsTo(group);
      },
    };

    this.helper = {
      isEntity: (object) => {
        return object instanceof Entity;
      },
      isCollection: (object) => {
        return object instanceof Collection;
      },
    };
  }

  public getCatalog(dataClasses?: string[]): Promise<Catalog> {
    const catalogBusiness = new CatalogBusiness({
      wakJSC: this,
    });

    return catalogBusiness.get(dataClasses);
  }

  public version(): string {
    return '3.0.0';
  }
}

export default WakandaClient;
