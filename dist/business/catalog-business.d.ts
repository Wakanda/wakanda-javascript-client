import AbstractBusiness from './abstract-business';
import Catalog from '../presentation/catalog';
export interface IDataClassDBO {
    name: string;
    collectionName: string;
    dataURI: string;
    attributes: {
        name: string;
        type: string;
        kind: string;
        readOnly: boolean;
        simpleDate: boolean;
        identifying: boolean;
        path: string;
    }[];
    methods: {
        name: string;
        applyTo: string;
    }[];
}
declare class CatalogBusiness extends AbstractBusiness {
    private service;
    private seenDataClasses;
    constructor(obj: any);
    private needDataClass(dcName);
    get(dataClasses?: string[]): Promise<Catalog>;
}
export default CatalogBusiness;
