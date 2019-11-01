/* tslint:disable variable-name */

import { DataClass } from "./dataclass";
import Entity from "./entity";
import { IQueryOption } from "./query-option";

class Collection<T extends Entity> {

  [key: string]: any;
  public entities: T[];
  public _deferred: boolean;
  public _count: number;
  public _first: number;
  public _sent: number;
  public _pageSize: number;

  public fetch: (options?: IQueryOption) => Promise<Collection<T>>;
  public nextPage: () => Promise<Collection<T>>;
  public prevPage: () => Promise<Collection<T>>;
  public more: () => Promise<Collection<T>>;

  private _dataClass: DataClass;

  constructor({ deferred, dataClass }: { deferred: boolean; dataClass: DataClass }) {
    this.entities = [];
    this._deferred = deferred === true;

    Object.defineProperty(this, "_dataClass", {
      enumerable: false,
      configurable: false,
      writable: false,
      value: dataClass,
    });
  }
}
export default Collection;
