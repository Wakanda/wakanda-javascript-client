import DataClassBusiness from './dataclass-business';

export class MethodAdapter {
  public static transform(object: any, dcBusinessMap: Map<string, DataClassBusiness>): any {
    if (object && object.__entityModel) {
      let business = dcBusinessMap.get(object.__entityModel);

      if (business) {
        //Returned object is a collection
        if (
          typeof object.__COUNT !== 'undefined' &&
          typeof object.__ENTITIES !== 'undefined' &&
          typeof object.__FIRST !== 'undefined' &&
          typeof object.__SENT !== 'undefined'
        ) {
          return business._presentationCollectionFromDbo({
            dbo: object,
          });
        }
        //Returned object is an entity
        else if (object.__KEY && object.__STAMP) {
          return business._presentationEntityFromDbo({
            dbo: object,
          });
        }
      }
    }

    return object;
  }
}
