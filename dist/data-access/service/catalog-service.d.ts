import AbstractService from './abstract-service';
import { IDataClassDBO } from '../../business/catalog-business';
declare class CatalogService extends AbstractService {
    get(dataClasses?: string | string[]): Promise<IDataClassDBO[]>;
}
export default CatalogService;
