import HttpClient from '../../http/http-client';
import { QueryOption } from '../../../presentation/query-option';
import { IEntityDBO } from '../../../business/entity-business';
import { ICollectionDBO } from '../../../business/collection-business';
import Util from '../../util';

export interface IFindParams {
  httpClient: HttpClient;
  key: number | string;
  options: QueryOption;
  dataURI: string;
}

export interface IQueryParams {
  httpClient: HttpClient;
  options: QueryOption;
  dataURI: string;
}

export interface ICallMethodParams {
  httpClient: HttpClient;
  methodName: string;
  parameters: any[];
  dataURI: string;
}

export class DataClassBaseService {
  public static find({ httpClient, key, options, dataURI }: IFindParams) {
    if (typeof key !== 'string' && typeof key !== 'number') {
      throw new Error('DataClass.find: Invalid id type');
    }

    let optString = Util.handleOptions(options);

    return httpClient
      .get({
        uri: dataURI + '(' + key + ')' + optString,
      })
      .then(res => {
        let entity = JSON.parse(res.body);
        delete entity.__entityModel;

        Util.removeRestInfoFromEntity(entity);

        return entity as IEntityDBO;
      });
  }

  public static query({ httpClient, options, dataURI }: IQueryParams) {
    options.method = 'entityset';

    if (Array.isArray(options.params)) {
      options.params = this._sanitizeOptionParams(options.params);
    }

    let optString = Util.handleOptions(options);

    return httpClient
      .get({
        uri: dataURI + optString,
      })
      .then(res => {
        let collection = JSON.parse(res.body);
        delete collection.__entityModel;

        for (let entity of collection.__ENTITIES) {
          Util.removeRestInfoFromEntity(entity);
        }

        return collection as ICollectionDBO;
      });
  }

  public static callMethod({ httpClient, methodName, parameters, dataURI }: ICallMethodParams) {
    return httpClient
      .post({
        uri: dataURI + '/' + methodName,
        data: parameters,
      })
      .then(res => {
        let obj = JSON.parse(res.body);
        return obj.result || obj || null;
      });
  }

  private static _sanitizeOptionParams(params: any[]): any[] {
    return params.map(element => {
      if (element instanceof Date) {
        return element.toISOString();
      } else {
        return element;
      }
    });
  }
}
