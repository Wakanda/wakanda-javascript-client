interface IEmployee extends DatastoreClass {

}

interface ICompany extends DatastoreClass {

}

interface IProduct extends DatastoreClass {

}

interface IMyDataStore extends Datastore {
    Employee:IEmployee;
    Company:ICompany;
    Product:IProduct;
}

declare var ds: IMyDataStore;