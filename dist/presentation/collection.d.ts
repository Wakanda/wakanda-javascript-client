import Entity from './entity';
import { DataClass } from './dataclass';
import { QueryOption } from './query-option';
declare class Collection {
    entities: Entity[];
    _deferred: boolean;
    _count: number;
    _first: number;
    _sent: number;
    _pageSize: number;
    [key: string]: any;
    private _dataClass;
    fetch: (options?: QueryOption) => Promise<Collection>;
    nextPage: () => Promise<Collection>;
    prevPage: () => Promise<Collection>;
    more: () => Promise<Collection>;
    constructor({ deferred, dataClass }: {
        deferred: boolean;
        dataClass: DataClass;
    });
}
export default Collection;
