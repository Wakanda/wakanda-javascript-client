/* tslint:disable variable-name */

import { DataClass } from './dataclass';
import { IQueryOption } from './query-option';

class Entity {
  public _key: string;
  public _stamp: number;
  public _deferred: boolean;
  public _dataClass: DataClass;

  [key: string]: any;

  public save: <T extends Entity>() => Promise<T>;
  public delete: () => Promise<void>;
  public fetch: <T extends Entity>(options?: IQueryOption) => Promise<T>;
  public recompute: <T extends Entity>() => Promise<T>;

  constructor({
    key: entityKey,
    deferred,
    dataClass,
  }: {
    key: string;
    deferred: boolean;
    dataClass: DataClass;
  }) {
    this._key = entityKey;
    this._deferred = deferred === true;

    Object.defineProperty(this, '_dataClass', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: dataClass,
    });
  }
}

export default Entity;
