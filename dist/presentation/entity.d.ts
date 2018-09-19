import { DataClass } from './dataclass';
import { QueryOption } from './query-option';
declare class Entity {
    _key: string;
    _stamp: number;
    _deferred: boolean;
    _dataClass: DataClass;
    [key: string]: any;
    save: () => Promise<Entity>;
    delete: () => Promise<void>;
    fetch: (options?: QueryOption) => Promise<Entity>;
    recompute: () => Promise<Entity>;
    constructor({ key: entityKey, deferred, dataClass }: {
        key: string;
        deferred: boolean;
        dataClass: DataClass;
    });
}
export default Entity;
