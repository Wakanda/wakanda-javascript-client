import HttpClient from '../../http/http-client';
import { QueryOption } from '../../../presentation/query-option';
import { ICollectionDBO } from '../../../business/collection-business';
import Util from '../../util';

export interface IBaseParams {
  httpClient: HttpClient;
  collectionUri: string;
  isEntitySet: boolean;
}

export interface IFetchParams extends IBaseParams {
  options: QueryOption;
}

export interface ICallMethodParams extends IBaseParams {
  methodName: string;
  parameters: any[];
}

export class CollectionBaseService {
  public static fetch({ httpClient, collectionUri, isEntitySet, options }: IFetchParams) {
    if (!isEntitySet) {
      if (options.select && options.select.length > 0) {
        throw new Error(
          'Collection.fetch: option select is not allowed when collection is deferred'
        );
      }
    }

    options.method = 'subentityset';

    let optString = Util.handleOptions(options);

    //Remove the first ? on optString if it's not an entitySet (because there is also
    //?$expand=... on collectionUri), and add a &
    if (!isEntitySet) {
      optString = '&' + optString.slice(1);
    }

    let uri = collectionUri;

    return httpClient
      .get({
        uri: uri + optString,
      })
      .then(res => {
        let obj = JSON.parse(res.body);

        delete obj.__entityModel;

        for (let entity of obj.__ENTITIES) {
          Util.removeRestInfoFromEntity(entity);
        }

        return obj as ICollectionDBO;
      });
  }

  public static callMethod({
    httpClient,
    collectionUri,
    isEntitySet,
    methodName,
    parameters,
  }: ICallMethodParams) {
    let uri = collectionUri;

    if (isEntitySet) {
      uri += '/' + methodName;
    } else {
      let optString = Util.handleOptions({
        method: 'subentityset',
        emMethod: methodName,
      });

      uri += '&' + optString.slice(1);
    }

    return httpClient
      .post({
        uri,
        data: parameters,
      })
      .then((res: any) => {
        let obj = JSON.parse(res.body);
        return obj.result || obj || null;
      });
  }
}

export function isEntitySetUri(uri: string): boolean {
  return /^\/rest\/\w+\/\$entityset\/[A-Z0-9]+(\?.*)?$/i.test(uri);
}
