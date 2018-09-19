import AbstractService from './abstract-service';
import { QueryOption } from '../../presentation/query-option';
import DataClassBusiness from '../../business/dataclass-business';
import { IEntityDBO } from '../../business/entity-business';
import { ICollectionDBO } from '../../business/collection-business';
import { DataClassBaseService } from './base/dataclass-base-service';
import WakandaClient from '../../wakanda-client';

class DataClassService extends AbstractService {
  private dataClassBusiness: DataClassBusiness;

  constructor({
    wakJSC,
    dataClassBusiness,
  }: {
    wakJSC: WakandaClient;
    dataClassBusiness: DataClassBusiness;
  }) {
    super({ wakJSC });

    this.dataClassBusiness = dataClassBusiness;
  }

  public find(id: string | number, options: QueryOption): Promise<IEntityDBO> {
    return DataClassBaseService.find({
      httpClient: this.httpClient,
      key: id,
      options,
      dataURI: this.dataClassBusiness.dataURI,
    });
  }

  public query(options: QueryOption): Promise<ICollectionDBO> {
    return DataClassBaseService.query({
      httpClient: this.httpClient,
      options,
      dataURI: this.dataClassBusiness.dataURI,
    });
  }

  public callMethod(methodName: string, parameters: any[]): Promise<any> {
    return DataClassBaseService.callMethod({
      httpClient: this.httpClient,
      dataURI: this.dataClassBusiness.dataURI,
      methodName,
      parameters,
    });
  }
}

export default DataClassService;
