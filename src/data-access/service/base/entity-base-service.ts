import { IEntityDBO } from "../../../business/entity-business";
import HttpClient from "../../http/http-client";
import Util from "../../util";

export interface ISaveParams {
  httpClient: HttpClient;
  data: IEntityDBO;
  expand: string;
  dataURI: string;
}

export interface IRecomputeParams {
  httpClient: HttpClient;
  data: IEntityDBO;
  dataURI: string;
}

export interface ICallMethodParams {
  httpClient: HttpClient;
  dataURI: string;
  methodName: string;
  parameters: any[];
  entityKey: string;
}

export interface IDeleteParams {
  httpClient: HttpClient;
  entityKey: string;
  dataURI: string;
}

export class EntityBaseService {
  public static save({ httpClient, data, expand, dataURI }: ISaveParams) {
    let expandStr = "";
    if (expand) {
      expandStr = "&$expand=" + expand;
    }

    return httpClient
      .post({
        uri: dataURI + "?$method=update" + expandStr,
        data,
      })
      .then((res) => {
        const entity = JSON.parse(res.body);
        delete entity.__entityModel;
        Util.removeRestInfoFromEntity(entity);

        return entity as IEntityDBO;
      });
  }

  public static recompute({ httpClient, dataURI, data }: IRecomputeParams) {
    return httpClient
      .post({
        uri: dataURI + "?$method=update&$refresh=true",
        data,
      })
      .then((res) => {
        const dbo = JSON.parse(res.body);
        delete dbo.__entityModel;
        Util.removeRestInfoFromEntity(dbo);

        return dbo as IEntityDBO;
      });
  }

  public static callMethod({
    httpClient,
    dataURI,
    methodName,
    parameters,
    entityKey,
  }: ICallMethodParams) {
    return httpClient
      .post({
        uri: dataURI + "(" + entityKey + ")/" + methodName,
        data: parameters,
      })
      .then((res) => {
        const obj = JSON.parse(res.body);
        return obj.result || obj || null;
      });
  }

  public static delete({ httpClient, dataURI, entityKey }: IDeleteParams): Promise<boolean> {
    return httpClient
      .post({
        uri: dataURI + "(" + entityKey + ")?$method=delete",
      })
      .then((res) => {
        const obj = JSON.parse(res.body);

        if (!(obj && obj.ok === true)) {
          return Promise.reject(new Error()) as any;
        } else {
          return true;
        }
      });
  }
}
