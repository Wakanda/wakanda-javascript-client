import { IQueryOption } from '../presentation/query-option';

class Util {
  public static handleOptions(options: IQueryOption) {
    if (!options) {
      return '';
    }

    const { select, filter, params, pageSize, start, orderBy, method, emMethod } = options;

    let ret = '?';

    if (select) {
      ret += '&$expand=' + select;
    }

    if (filter) {
      ret += '&$filter="' + filter + '"';
    }

    if (orderBy) {
      ret += '&$orderby=' + orderBy;
    }

    if (params) {
      if (!Array.isArray(params)) {
        throw new Error('params option must be an array');
      }

      if (params.length > 0) {
        let p = '[';

        for (const elt of params) {
          if (typeof elt === 'string') {
            p += '"' + elt + '",';
          } else {
            p += (typeof elt === 'string' ? elt : JSON.stringify(elt)) + ',';
          }
        }

        p = p.slice(0, -1);
        p += ']';
        ret += "&$params='" + p + "'";
      }
    }

    if (pageSize) {
      if (!this.isInteger(pageSize)) {
        throw new Error('pageSize option must be an integer');
      }

      ret += '&$limit=' + pageSize;
    }

    if (start) {
      if (!this.isInteger(start)) {
        throw new Error('start option must be an integer');
      }

      ret += '&$skip=' + start;
    }

    if (method) {
      ret += '&$method=' + method;
    }

    if (emMethod) {
      ret += '&$emMethod=' + emMethod;
    }

    if (ret.length > 1 && ret[1] === '&') {
      ret = ret.replace('?&', '?');
    }

    return ret === '?' ? '' : ret;
  }

  public static isInteger(n: any): boolean {
    return typeof n === 'number' && !isNaN(n) && n % 1 === 0;
  }

  public static removeRestInfoFromEntity(entity: any): void {
    for (const prop in entity) {
      if (Object.prototype.hasOwnProperty.call(entity, prop)) {
        const p = entity[prop];
        if (p && p.__deferred && p.__deferred.__KEY) {
          // Do not remove uri for collection
          delete p.__deferred.uri;
        }
      }
    }
  }
}

export default Util;
