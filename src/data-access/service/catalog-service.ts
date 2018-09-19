import AbstractService from './abstract-service';
import { IDataClassDBO } from '../../business/catalog-business';
import { CatalogBaseService } from './base/catalog-base-service';

class CatalogService extends AbstractService {
  public get(dataClasses?: string | string[]): Promise<IDataClassDBO[]> {
    return CatalogBaseService.get({
      httpClient: this.httpClient,
      dataClasses,
      catalog: this.wakJSC.catalog,
    });
  }
}

export default CatalogService;
