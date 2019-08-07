import DataClassBusiness from "../../business/dataclass-business";
import { IEntityDBO } from "../../business/entity-business";
import Entity from "../../presentation/entity";
import WakandaClient from "../../wakanda-client";
import AbstractService from "./abstract-service";
import { EntityBaseService } from "./base/entity-base-service";

class EntityService extends AbstractService {
  private entity: Entity;
  private dataClassBusiness: DataClassBusiness;

  constructor({
    wakJSC,
    entity,
    dataClassBusiness,
  }: {
    wakJSC: WakandaClient;
    entity: Entity;
    dataClassBusiness: DataClassBusiness;
  }) {
    super({ wakJSC });

    this.entity = entity;
    this.dataClassBusiness = dataClassBusiness;
  }

  public save(data: IEntityDBO, expand: string) {
    return EntityBaseService.save({
      httpClient: this.httpClient,
      dataURI: this.dataClassBusiness.dataURI,
      expand,
      data,
    });
  }

  public recompute(data: IEntityDBO) {
    return EntityBaseService.recompute({
      httpClient: this.httpClient,
      dataURI: this.dataClassBusiness.dataURI,
      data,
    });
  }

  public callMethod(methodName: string, parameters: any[]) {
    return EntityBaseService.callMethod({
      httpClient: this.httpClient,
      dataURI: this.dataClassBusiness.dataURI,
      methodName,
      parameters,
      entityKey: this.entity._key,
    });
  }

  public delete() {
    return EntityBaseService.delete({
      httpClient: this.httpClient,
      dataURI: this.dataClassBusiness.dataURI,
      entityKey: this.entity._key,
    });
  }
}

export default EntityService;
