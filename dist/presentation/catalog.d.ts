import { DataClass } from './dataclass';
declare class Catalog {
    [key: string]: DataClass;
    constructor({ dataClasses }: {
        dataClasses: DataClass[];
    });
}
export default Catalog;
