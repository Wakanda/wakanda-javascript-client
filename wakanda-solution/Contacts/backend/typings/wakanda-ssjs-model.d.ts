interface ModelDataClassAttribute {
    /**
	*(String attributes only) true if Wakanda automatically builds a list of possible values based on existing values
	* `model.City.country.autoComplete = true`
	*/
	autoComplete: Boolean;
	
	
	
	/**
	*(UUID attributes only) true if the attribute has the autogenerate property on
	* `model.Article.IDCode.autogenerate = true;`
	*/
	autogenerate: Boolean;
	
	
	/**
	*(number attributes only) true if the attribute has the autosequence property on
	* `model.Company.ID.autosequence = true;`
	*/
	autosequence: Boolean;
	
	
	
	/**
	*Size in bytes below which the data of the BLOB attribute will be stored within entities (default=0)
	*
	*/
	blob_switch_size: Number;
	/**
	*(Image and Blob attributes only) Client-side cache duration (seconds)
	*/
	cacheDuration: Number;
	/**
	*(relation attributes only) true to generate an array (instead of an entity collection)
	*/
	composition: Boolean;
	
	
	
	/**
	*Default format properties
	*/
	defaultFormat: Object;
	
	
	
	
	
	/**
	*(Number, Long, Long64 attributes only) Default value for the attribute
	* ```model.Person.age.defaultValue = 20;```
	*/
	defaultValue: Number;
	
	
	
	/**
	*Object containing events for the attribute
	* For a description of the events handlers [visit the dedicated section here] (attributeevent.html)
	*/
	events: ModelAttributeEvent;
	
	
	
	
	/**
	*(String attributes only) Length of the attribute value
	*
	* ```javascript 
	* model.Person.phone.fixedLength = 10;
	* ```
	*/
	fixedLength: Number;
	
	
	
	
	/**
	*Index kind of the attribute: "btree", "cluster", "keywords", "auto" or "objectPath"
	* The following values are available:
	* - "btree": associates a B-Tree type index with the attribute. This multipurpose index type meets most indexing requirements.
	* - "cluster": associates a B-Tree type index using clusters with the attribute. This architecture is more efficient when the index does not contain a large number of keys, i.e., when the same values occur frequently in the data.
	* - "keywords": (only available for attributes of type String) associates a keyword type index to the attribute. This index type facilitates fast searching of individual words inside of these attributes.
	* - "auto": Wakanda automatically selects an index type according to the attribute type.
	* - objectPath": (only available for attributes of type Object) associates an index to the object attribute. All object property paths are automatically indexed.
	*
	* ```javascript
	* model.Employee.lastname.indexKind = "btree";
	* ```
	*/
	indexKind: String;
	
	
	
	/**
	*Attribute kind: "storage", "calculated", "alias", "relatedEntity", "relatedEntities", or "removed"
	* Available values are:
	* - "storage": to store simple scalar values such as strings, longs, etc.
	* - "calculated": to store scalar values based on a calculation, such as lastName+name
	* - "alias": an attribute built upon a relation attribute
	* - "relatedEntity": a N->1 relation attribute
	* - "relatedEntities": a 1->N relation attribute
	* - "removed": in the context of a derived datastore class, to remove the inherited attribute from the class
	*
	* ```javascript
	* - model.Employee.manager.kind = "relatedEntity"
	* ```
	*/
	kind: String;
	
	
	/**
	*Length limit of the entered text (the rest will be truncated)
	* ```javascript
	* model.Article.code.limiting_length = 10;
	* ``` 
	* 
	*/
	limiting_length: Number;
	
	
	
	
	/**
	*Previous name(s) for the attribute at the database level
	*/
	matchColumn: String;
	
	
	
	/**
	*(String attributes only) Maximum length allowed for the attribute
	* ```javascript
	* model.Article.comment.maxLength = 100;
	*```
	* @warning If the text entered is longer than the value defined for this property, an error is returned.
	*/
	maxLength: Number;
	
	/**
	*(String attributes only) Minimum length allowed for the attribute
	* @warning If the text entered is longer than the value defined for this property, an error is returned.
	* ```javascript
	* model.Article.comment.maxLength = 100;
	* ```
	*/
	minLength: Number;
	
	
	
	/**
	*(Number, Long, Long64 attributes only) Maximum value for the attribute
	*  @warning If the value entered is more than this property, an error is returned.
	* ```javascript
	* model.Person.score.maxValue= 5000;
	* ```
	*/
	maxValue: Number;
	
	
	
	/**
	* (Number attributes only) Minimum value for the attribute
	* @warning If the value entered is less than this property, an error is returned.
	* ```javascript
	* model.Article.comment.maxLength = 100;
	* ```
	*/
	minValue: Number;
	
	
	
	
	/**
	*true if the attribute contains multi-line values
	* ```javascript
	* model.Employee.comments.multiLine = true
	* ```
	*/
	multiLine: Boolean;
	
	
	
	
	/**
	*true = attribute value cannot be null
	* ```javascript
	* model.Country.name.not_null = true;
	* ```
	*/
	not_null: Boolean;
	
	
	/**
	* (calcutaled Attributes) JavaScript  function to call for evaluating a calculated attribute
	* ### Example :
	* ```javascript
	* //We define the 'onGet' method for the hired Boolean attribute:
	* model.Employee = new DataClass("Employees");
	* model.Employee.hiringDate = new Attribute("storage", "date");
	* model.Employee.hired = new Attribute("calculated", "bool");
    * // onGet function
	* model.Employee.hired.onGet = function()
* {
*    return this.hiringDate != null;
* }
* ```

	*/
	onGet: Function;
	
	
	
	/**
	* (calcutaled Attributes)JavaScript function to call for processing a value entered in a calculated attribute
	* ### Example 
	* ```javascript
	* model.Employee = new DataClass("Employees");
	* model.Employee.lastName = new Attribute("storage", "string");
	* model.Employee.firstName = new Attribute("storage", "string");
	* model.Employee.fullName = new Attribute("calculated", "string");
    // onSet function
	* model.Employee.fullName.onSet = function(value)
* { 
  *  var names = value.split(' '); //split value into an array 
  *  this.firstName = names[0];  
  *  this.lastName = names[1];
* }
* ```
	*/
	onSet: Function;
	
	
	/**
	* (calcutaled Attributes) JavaScript function to call when a query uses the calculated attribute
	* ### Note  
	* The function will receive two parameters: the comparison operator (e.g. “>”, “>=”, etc.) and the compared value.
	*
	* ### Example :
	* ```javascript
	* model.Employee = new DataClass("Employees");
	* model.Employee.hiringDate = new Attribute("storage", "date");
	* model.Employee.hired = new Attribute("calculated", "bool");
    * // onGet function
	* model.Employee.hired.onGet = function()
* {
 *   return this.hiringDate != null;
* }
*  // onQuery function
* model.Employee.hired.onQuery = function(compareOperator, compareValue)
* {
*    var newOper;
*    if (compareOperator === "=" || compareOperator === "==")
*    {
*        if (compareValue === true)
*            newOper = "is not";
*        else
*            newOper = "is";
*    }
*    else
*    {
*        if (compareValue === true)
*            newOper = "is";
*        else
*            newOper = "is not";
*    }
*    return "hiringDate "+newOper+" null";
* }
* ```
	*/
	onQuery: Function;
	
	
	/**
	*(calcutaled Attributes) JavaScript function to call when a calculated attribute is sorted
	* ### Example
	* ```javascript
	* This example shows how to sort an age calculated attribute on a birthdate storage value:
* model.Employee = new DataClass("Employees");
* model.Employee.birthdate = new Attribute("storage", "date", "btree");
* model.Employee.age = new Attribute("calculated", "long");
*    // onGet function
* model.Employee.age.onGet = function()
* {
*    if (this.birthdate == null)
*        return null;
*    else
*    {
*        var today = new Date();
*        var interval = today.getTime() - this.birthdate.getTime();
*        var nbYears = Math.floor(interval / (1000 * 60 * 60 * 24 * 365.25));
*        return nbYears;
*    }
* }
*
*    // onSort function
* model.Employee.age.onSort = function(ascending)
 * {
*    if (ascending)
*        return "birthdate";
*    else
*        return "birthdate desc";
* }
* ```
	*/
	onSort: Function;
	
	
	
	
	
	/**
	*true to store BLOB data outside of the data file (default=false)
	* ```javascript
	* model.Article.techDoc.outside_blob = true;
	* ```
	*/
	outside_blob: Boolean;
	
	
	
	/**
	*Path for a related or an alias attribute
	* ```javascript
	* model.Employee.workingPlace = new Attribute("relatedEntity", "City");
	* model.Employee.workingPlace.path = "employer.location"; // relation to the City class
	* ```
	*/
	path: String;
	
	
	/**
	*(String attributes only) RegEx pattern to control data entry
	* ```javascript
	* model.Article.code.pattern = "^[A-Za-z]+$" // only letters
	* ```
	*/
	pattern: String;
	
	
	/**
	*true if the attribute is the primary key
	* ```javascript
	* model.Company.name.primKey = true;
	* ```
	*/
	primKey: Boolean;
	
	
	
	/**
	*Attribute is read-only (can only be set by the code - i.e Not via the Model Designer)
	* ```javascript
	*  model.Company.name.primKey = true;
	* ```
	*/
	readOnly: Boolean;
	
	
	/**
	* (relation attributes only) true if the relation attribute uses the reverse path of an existing relation
	* 
*  More information are available in [Model API - Attribute section here](http://doc.wakanda.org/Model/Attribute-Constructor/Attribute.301-995679.en.html)
	* 
	*/
	reversePath: Boolean;
	
	
	
	
	/**
	*"public" (default) or "publicOnServer"
	* ```javascript
	* model.Employee.salary.scope = "publicOnServer";
	* ```
	*/
	scope: String;
	
	
	/**
	*(Date attributes only) true if the date attribute stores only the "MM/DD/YYYY" format (Otherwise, date values include the time, stored in UTC)
	* ```javascript
	* model.Employee.birthdate.simpleDate = true;
	* ```
	*/
	simpleDate: Boolean;
	
	
	
	
	/**
	*true if queries and sorts carried out in the data stored in the attribute do not take any style tags into account
	* ```javascript
	* model.Employee.comments.styled_text = true
	* ```
	*/
	styled_text: Boolean;
	
	
	
	/**
	*Type of the attribute
	* ### description
	* For storage, calculated or alias attributes, type can be one of the standard supported Wakanda data types:
* - "blob"
* - "bool"
* - "byte"
* - "date"
* - "duration"
* - "image"
* - "long"
* - "long64"
* - "number"
* - "string"
* - "uuid"
* - "word"
* - "object"
*
*  Note :
*  - For relatedEntity attributes, type is the datastore class name corresponding to the 'one' class
*  - For relatedEntities attributes, type is the datastore class name corresponding to the 'many' class
*
* ```javascript
* model.Employee.birthdate.type = "date";
* ```
*
	*/
	type: String;
	
	
	/**
	*true if values in the attribute must be unique
	* @warning When this property is true, Wakanda returns an error when an entered value is duplicated.
	*
	* ```javascript
	*  model.Country.name.unique =  true;
	* ```
	*/
	unique: Boolean;
	
	
	
	
	/**
	*associate an event listener function with the attribute
	* See the [event section](attributeevent.html) for more information
	* ### Note:
	* You can define events through the events property of the attribute. 
	* However, using the addEventListener( ) method, you can define several event listeners for the same event compared to the events property, which can only define one handler for an event
	*
	* ### Exemple
	* ```javascript
	* model.Person.name.addEventListener("set", function(event) { 
    * this.name = this.name.capitalize();
	* });
	*
	* model.Person.name.addEventListener("set", function(event) { 
    * this.name = this.name+"_";
	* })
	* ```
	*/
	addEventListener(event: String, jsCode: Function) : void;
}

declare var Attribute : {
	new (name:String, kind:String, type:String , indexOrPath?:String, options?:Object): ModelDataClassAttribute;
}
interface ModelAttributeEvent {
	clientRefresh(event:ModelAttributeEventObject):any;
	init(event:ModelAttributeEventObject):any;
	load(event:ModelAttributeEventObject):any;
	remove(event:ModelAttributeEventObject):any;
	save(event:ModelAttributeEventObject):any;
	set(event:ModelAttributeEventObject):any;
	validate(event:ModelAttributeEventObject):any;
	validateremove(event:ModelAttributeEventObject):any;
}

interface ModelAttributeEventObject {
	
}

class ModelDataClass {
	/**
	*Methods of the Datastore class applied to Collection objects
	*/
	collectionMethods: Object;
	/**
	*Methods of the Datastore class applied to Entity objects
	*/
	entityMethods: Object;
	/**
	*Object containing events for the datastore class
	*/
	events: Object;
	/**
	*Methods of the Datastore class applied to Class object
	*/
	methods: Object;
	/**
	*Object containing properties for the datastore class
	*/
	properties: Object;
	/**
	*adds a new attribute to the datastore class
	*/
	addAttribute(name: String, kind: String, type: String, indexOrPath?: String, options?: Object) : ModelDataClassAttribute;
	/**
	*adds a new attribute to the datastore class
	*/
	addAttribute(name: String, kind: any, type: String, indexOrPath?: String, options?: Object) : ModelDataClassAttribute;
	/**
	*associate an event listener function with the datastore class
	*/
	addEventListener(event: String, jsCode: Function) : void;
	/**
	*define a datastore class method and add it to the current class
	*/
	addMethod(name: String, type: String, jsCode: Function, scope?: String) : void;
	/**
	*
	*/
	addRelatedEntities(name: String, type: String, path?: String, option?: Object) : void;
	/**
	*adds a new relatedEntity attribute to the datastore class
	*/
	addRelatedEntity(name: String, type: String, path?: String, option?: Object) : void;
	/**
	*removes the name attribute from the datastore class for the model object
	*/
	removeAttribute(name: String) : void;
	/**
	*define one or several properties for the datastore class
	*/
	setProperties(properties: Object) : void;
	/**
	*associate a restricting query with the datastore class
	*/
	setRestrictingQuery(queryStatement: String) : void;
}

declare var DataClass : {
	new ( collectionName?:String, scope?:String, extendedClass?:String, properties?:Object) : ModelDataClass;
}




interface Model {
	/**
	*adds a new datastore class to the current procedural model
	*/
	addClass(className: String, collectionName: String, scope: String, extendedClass: String, properties?: Object) : ModelDataClass;
	/**
	*allows you to reference and use a remote catalog in your current Wakanda model reference
	*/
	
	/**
	 * deprecated  
	 * mergeOutsideCatalog(localName: String, mergeInfo: String, user: String, password?: String) : void;
	/**
	*allows you to reference and use a remote catalog in your current Wakanda model reference
	*/ 
	/** DEPERECATED 
	 * mergeOutsideCatalog(localName: String, mergeInfo: Object, user: String, password?: String) : void;
	/**
	*allows you to reference and use a remote catalog in your current Wakanda model reference
	*/
	/** DEPERECATED
	 *mergeOutsideCatalog(localName: String, mergeInfo: String, user: String, password?: String) : void; 
	 */
	
	/**
	 *allows you to reference and use a remote SQL catalog in your current Wakanda model
	 mergeSQLCatalog(localName: String, mergeInfo: SQLConnectionOptions) : void;
	 */
}/** 
   interface SQLConnectionOptions {
    /**
     * Address of the remote SQL server you want to connect to
     *
	hostname: string,
    /**
     * Port number of the SQL server
     *
    port: number,
    /**
     * User name required to login to the SQL server for opening an outside session
     *
    user: string, 
    /**
     * Password required to login to the SQL server for opening an outside session
     *
    password: string,
    /**
     * Name of the remote SQL database from which you want to replicate the catalog
     *
    database: string,
    /**
     *  (optional) custom name for the JavaScript configuration file to associate with the localName catalog
     *
    jsFile: string,
    /**
     *  true to open a secured connection to the SQL server, and false or omit the property to open a standard connection
     *
    ssl: boolean,
    /**
     * Kind of the remote SQL database. Currently, only "mysql" is supported
     *
    dbType: "mysql"
}
*/






interface controlMethods {

/**
 * #### GENERAL INFORMATION
 *  ControlMethods are mandatory when you create a custom model (also named virtual Model) to map the Wakanda API to the remote service. 
 *  These control methods must be coded for each dataclass created. 
 *  When done, it allows to use all the Wakanda API (backend API, REST API, and Front End methods) and to benefit from the Model features (event, methods, permission, ...)
 * 
 *  Most of the control methods are MANDATORY and must be coded in the `controller.js` (which is automatically scaffolded for you when you create a Virtual Model)
 *  
 *  We should implement  all the methods (4 methods) of read bundle ( there is a dependency between the four methods )
 *  
 *  All the examples provided below are based on Mapping the Trello Public API
 *  The Custom Model created in the `model.js` file contains 
 * - a Board dataclass
 * - a List dataclass
 * - a Card dataclass
 * - a Member dataclass
 * 
 *   Here's bellow a description of the model.js file 
 *   ```javascript
 *  model.Board = new DataClass("Boards", "public");
 *  model.Board.ID = new Attribute("storage", "string", "key", {readOnly: true});
 *  model.Board.name = new Attribute("storage","string");
 *  model.Board.desc = new Attribute("storage","string");
 *  model.Board.children = new Attribute("relatedEntities", "Lists", "parent", {reversePath: true}); 
 

 *  model.List=new DataClass("Lists","public");
 *  model.List.ID=new Attribute("storage","string","key",{readOnly:true});
 *  model.List.name=new Attribute("storage","string");
 *  model.List.isClosed=new Attribute("storage","bool");
 *  model.List.idBoard=new Attribute("storage","string");
 *  model.List.parent = new Attribute("relatedEntity", "Board", "Board");


 *  model.Card= new DataClass("Cards","public");
 *  model.Card.ID=new Attribute("storage","string","key",{readOnly :true});
 *  model.Card.name= new Attribute("storage","string");
 *  model.Card.isClosed=new Attribute("storage","bool");
 *  model.Card.desc= new Attribute("storage","string");

 *  model.Member = new DataClass("Members", "public");
 *  model.Member.ID = new Attribute("storage", "string", "key", {readOnly: true});
 *  model.Member.fullname = new Attribute("storage","string");
 *  model.Member.username = new Attribute("storage","string");
 * 

 *  #### Note
 *  The API will be described following this order :
 *   **READ Operations** :
 *  - getEntityByGey
 *  - getEntityByPos
 *  - allEntities
 *  - getAttributeValue
 *  - loadEntity
 * 
 * 
 *   **CREATE/SAVE OPERATIONS**
 *  - newEntity (instanciation (ds))
 *  - setAttributeValue (projection )
 *  - saveEntity (save (ds) )
 *  - refreshEntity
 * 
 *  **DROP OPERATIONS**
 *  - dropEntity
 *  - dropEntities 
 * 
 *  **QUERY**
 *  - searchByString
 *  - searchByCriteria
 * 
 *  **Relationship Management**
 *  - getRelatedKey
 *  - getRelatedEntity-
 *  - getRelatedEntities   
 * 
 *  **Collections Operations**
 *  - newCollection
 *  - addEntityToCollection
 *  - getCollectionLength
 *  - countEntities
 *  - orderBy
 *  - compute
 *  - collectionToArray
 *  - nextInCollection
 * 
 * 
 *  **Others**
 *  - getStamp 
 */ 


 
/** 
* 
* Method getEntityByKey  - Method to get the Remote entity KEY (**mandatory**)
* 
* ```javascript
* model.Board.controlMethods.getEntityByKey = function(event) {
* }
* ```
* In the event, you have access to : 
*  `dataclass, entity , entityStorage , [optionnal : key]`
* 
*
* #### Example
* ```javascript
*    model.Board.controlMethods.getEntityByKey = function(event) {
*    var element;
*    var idBoard = event.key[0];
*    try {
*
*        element = wakTrello.getBoardByID(process.env.appkey, process.env.token, idBoard);
*    }
*    catch (e) {
*        throw e;
*    }
*    if (element && element.id) {
*        event.entityStorage.ID = element.id;
*        event.entityStorage.name = element.name;
*        event.entityStorage.desc = element.desc;
*        return true;
*    }
*    return false;
* }
* ```
*/
getEntityByKey(event:Object):any;


 /* Method allEntities - Method to get all the Remote entities from a dataclass (**mandatory**)
* ```javascript
* model.Board.controlMethods.allEntities = function(event) {
*		 }
In the event you have access to :
* `collectionStorage, collection, dataclass`
* 
* #### Example 
* ```javascript
* model.Board.controlMethods.allEntities = function(event) {
*	 
*        var elements = [];
*        try {
*            Monmodule.APIgetBoards(process.env.appkey, process.env.token, process.env.userName).forEach(function(item) {
*                var elem = {};
*                elem.ID = item.id;
*                elem.name = item.name;
*                elem.desc = item.desc;
*                elements.push(elem);
*            });
*        }
*        catch (e) {
*            throw e;
*        }
*        event.collectionStorage.elements = elements;
*    }
* ```
*/
allEntities(event:Object):EntityCollection;







/** 
*Method  getEntityByPos - Method to retrive an entity by its position in a collection
*
* 
* model.Board.controlMethods.getEntityByPos = function(event) {
* }
* In the event you have access to :
* dataClass, dataClassStorage,  entity, entityStorage , collection , CollectionStorage ,position[n ]
*
* #### Example
* ```javascript
* model.Board.controlMethods.getEntityByPos = function(event) {
*    var pos = event.position;
*    var elements = event.collectionStorage.elements;
*    var element = elements[pos];
*
*    for (var i in element) {
*        event.entityStorage[i] = element[i];
*    }
* };
* ```
*/
getEntityByPos(event:Object):entity;


/** Method getAttributeValue - Get the entity's attribute value
*
* model.Board.controlMethods.getAttributeValue = function(event) {  
* }
* In the event you have access to :
* entity, entityStorage, dataClass, attribute, attributeName , onlyLightValue
*
*  Note : onlyLightValue (bool) , if true return defered=true (do not retrieve the Related Collection and Blob)
*  INSERT LINK HERE
*
* #### Example
* ```javascript
*model.Board.controlMethods.getAttributeValue = function(event) {
*        if (event.attributeName === 'children') {
*            if(event.onlyLightValue){
*                return {deferred: true};
*            } else {
*            	if(event.entityStorage.ID!=null)
*                return ds.List.query('+' + event.entityStorage.ID)
*            };            
*        } else {
*            return event.entityStorage[event.attributeName];
*        }            
*    };
* ```
*/
getAttributeValue(event:Object):any;

/** Method loadEntity - Works by default (can be overided)
 *  model.Board.controlMethod.loadEntity = function(event){};
 * 
 * Works by default, but can be overided if needed
 * 
 */
loadEntity(event:object);entity;




/** 
* Method newEntity - Method to create a remote entity
*
* Works by default (though it must be declared on the controller ) 
* However it can be enhanced/overided for specific needs
*
* model.Board.controlMethods.newEntity = function() {
*   // nothing do do here,  already built by Wakanda
* };
* Are available in the event :
* `dataClass, dataClassStorage,  entity, entityStorage`
*/
newEntity(object:event):entity;



/*Method setAttributeValue - Method to set values to attributes
* ```javascript
* model.Board.controlMethods.setAttributeValue = function(event) {
*	 }
*```
* Are available :
* `entity,entityStorage , dataclass, attribute, attributeName`
*
* #### Example 
* ```javascript
* model.Board.controlMethods.setAttributeValue = function(event) {
*
*    event.entityStorage[event.attributeName] = event.value;
* };
* ```
*/ 
setAttributeValue(event:object):any;



/** 
* Methode saveEntity - Method to save the remote entity
*
* model.Board.controlMethods.saveEntity = function(event) {
*
* }
Are available 
`dataClass, entity, entityStorage, attributes , attributeName`

* #### Example
* ```javascript
* model.Board.controlMethods.saveEntity = function(event) {
	  
 *   var board = {
 *           name: event.entityStorage[event.dataClass.attributes.name.name],
 *           desc: event.entityStorage[event.dataClass.attributes.desc.name]
 *       }
 *       // if ID = null we create a new card 
 *   if (event.entityStorage[event.dataClass.attributes.ID.name] == null) {
 * 
*
*        try {
*
*           wakTrello.createNewBoard(process.env.appkey, process.env.token, board)
*        }
*        catch (e) {
*            throw e;
*        }
*    }
*    // if ID not null we update an existing card
*    else {
*        try {
*            wakTrello.renameBoard(process.env.appkey, process.env.token, event.entityStorage[event.dataClass.attributes.ID.name], event.entityStorage[event.dataClass.attributes.name.name]);
*        }
*        catch (e) {
*            throw e;
*        }
*    }
* };
* ```
*/
saveEntity(event:object):entity;




/** Method refreshENtity - Refresh the remote entity -> OPTIONNAL
 * model.dataClass1.controlMethods.refreshEntity=function(){};
 * 
*/
refreshEntity(event:object):entity;






/** 
* Method dropEntity - Remove a remote Entity
*
* model.Card.controlMethods.dropEntity = function(event) {};
*
* Are available in the event :
* `Dataclass, entity, entityStorage`
*
* #### Example 
* ```javascript
* model.Card.controlMethods.dropEntity = function(event) {
*
*        console.log("drop entity")
*        if (event.entityStorage.ID != null) {
*            try {
*                wakTrello.deleteCardByID(process.env.appkey, process.env.token, event.entityStorage.ID);
*            }
*            catch (e) {
*                throw e;
*            }
*        }
*    }
* ```
*/
dropEntity(event:object): void;

/** Method dropEntities - Remove a remote Collection
*
* model.Card.controlMethods.dropEntities = function(event) {};
*
* Are avaiable in the event :
* `dataclass, entity, entityStora, collection, collectionStorage`
*
* #### Example
* ```javascript
* model.Card.controlMethods.dropEntities = function(event) {
*
*    var allCards = event.collectionStorage.elements;
*    allCards.forEach(function(item) {
*        try {
*            wakTrello.deleteCardByID(process.env.appkey, process.env.token, item.ID)
*        }
*        catch (e) {
*            throw e;
*        }
*    });
*   }
*/
dropEntities(event:object):void;




/*
* Method QueryByString - Method to query a remote collection with a pre-defined string
* 
* model.List.controlMethods.queryByString = function(event) {};
* 
* Is available in the event :
* `collectionStorage`
* 
* #### Note
* If the queryByString return false then it automatically falls back in the QueryByCriteria method
*
* 
*

* #### Example
* ```javascript
* model.List.controlMethods.queryByString = function(event) {
*
*    if (event.queryString[0] === "+") {
*        var elements = [];
*        var idBoard = event.queryString.split("+")[1];
*        wakTrello.getListsOfABoard(process.env.appkey, process.env.token, idBoard).forEach(function(item) {
*            var list = {};
*            list.ID = item.id;
*            list.name = item.name;
*            list.isClosed = item.closed;
*            list.idBoard = item.idBoard;
*            elements.push(list);
*        })
*        event.collectionStorage.elements = elements;
*        return true;
*    }
*    else
*        return false; // falls back on queryByCriteria()
*}
* ```
*/
queryString(event:object):entityCollection;


/**
 * Method queryByCriteria - Method that allows full management of query
 * 
 *


* model.List.controlMethods.queryByCriteria = function(event) {};
*
* Is avaiable in the event :
* `collectionStorage`

* #### Example <details> <summary> Click to Expand </summary>
* ```javascript
* model.List.controlMethods.queryByCriteria = function(event) {
*  
*    var listsToBeReturned=[];
*    var criterias = event.query;
*    if (criterias.length == 1)
*	{
*		var criteria = criterias[0]; 
*		var val ;   
*		var attributeName=criteria.attributeName;
*		var beginWith = false;
*		var endWith = false;
*		var equal=false;
*		if (criteria.value[0] == '*')
*		{
*			endWith = true;
*			val = criteria.value.substring(1, criteria.value.length);
*		}
*		else if (criteria.value[criteria.value.length-1] == '*')
*		{
*			beginWith = true;
*			val = criteria.value.substring(0, criteria.value.length-1);
*		}
*		else {
*			equal=true;
*			val = criteria.value;
*			
*		}
*      if(beginWith){
*      var lists=ds.List.all();
 *     

 *     	
 *     	lists.forEach(function(item){
 *     		var ok=false;
 *     			var subname = item[attributeName].substring(0,val.length);
 *     		if(subname.toLowerCase()==val.toLowerCase()) 
 *     		  ok=true;
 *     		
 *        if(ok){
 *        	
 *        	var list = {};
 *           list.ID = item.ID;
 *           list.name = item.name;
 *           list.isClosed = item.closed;
 *           list.idBoard = item.idBoard;
 *           listsToBeReturned.push(list);
 *        }	
 *     	})
 *     }else if(endWith){
 *     		
 *     	var lists=ds.List.all();
 *     	
 *     	lists.forEach(function(item){
 *     		var ok=false;
 *     		
 *     		var subname = item[attributeName].substring(item[attributeName].length-val.length);
 *     		if(subname.toLowerCase()==val.toLowerCase()) 
 *     		  ok=true;
 *     		
 *        if(ok){
 *        	 
 *        	var list = {};
 *           list.ID = item.ID;
 *           list.name = item.name;
 *           list.isClosed = item.closed;
 *           list.idBoard = item.idBoard;
 *           listsToBeReturned.push(list);
 *        }
 *     		
 *     	})
 *     }
 *     else {
 *     	
 *     	var lists=ds.List.all();
 *     	
 *     	lists.forEach(function(item){
 *     		var ok=false;
 *     		 
 *     		var subname = item[attributeName].substring(item[attributeName].length-val.length);
 *     		if(subname.toLowerCase()==val.toLowerCase()) 
 *     		  ok=true;
 *     		
 *        if(ok){
 *        	 
 *        	var list = {};
 *           list.ID = item.ID;
 *           list.name = item.name;
 *           list.isClosed = item.closed;
 *           list.idBoard = item.idBoard;
 *           listsToBeReturned.push(list);
 *        }
 *     		
 *     	})
 *     	
  *    }
* 
 *    event.collectionStorage.elements = listsToBeReturned;
 *    return true;
 *  }
 *  return false;
* }
* ```
*/
queryByCriteria(event:object):EntityCollection;




/** Method getRelatedKey - Mandatory for managing Relations 
* 
* model.List.controlMethods.getRelatedKey = function(event) {};
*
* Is available in the event :
*`dataClass, entity, entityStorage`


* #### Example
* ```javascript
* model.List.controlMethods.getRelatedKey = function(event) {
*    return event.entityStorage.idBoard 
* }
* ```
* #### Note
* For now the method returns the key, but in the near future it might return an array of values for composite keys [] too

*/
getRelatedKey(event:object):any;




/** Method getRelatedEntities - Method to retrieve the Related Collections

* model.Board.controlMethods.getRelatedEntities = function(event) {}

* Is available in the event :
* `dataClass, entity, entityStorage, attributes, attributeName`

* Example:
* ```javascript
* model.Board.controlMethods.getRelatedEntities = function(event) {
*    return event.entityStorage.Children;
* }
* ```

*/
getRelatedEntities(event:object):EntityCollection;



/** Method getRelatedEntity - Allows Alias management and necessary (in addition to getRelatedEntities) for level 2 relations 
*
* model.List.controlMethods.getRelatedEntity = function(event) {};
*
* Is available in the event :
* `dataClass, entity, entityStorage, attributes , attributeName`
*
* Note : it must Return an Entity

* #### Example
* ```javascript
* model.List.controlMethods.getRelatedEntity = function(event) {
*
*    return event.entityStorage.parent;
* }
* ```
*/
getRelatedEntity(event : object): Entity;





 



 

/** Method NewCollection - For creating new collections
*
* model.List.controlMethods.newCollection = function(event) {};
* 
* Is available in the event : 
* `dataclass, collection, collectionStorage`
*
*
* #### Example:
* ```javascript
* model.List.controlMethods.newCollection = function(event) {
*    event.collectionStorage.elements = [];
*
* }
* ```
*/
newCollection(event:object):EntityCollection;


/** Method addEntityToCollection - Add Entity to a Collection
*
* model.List.controlMethods.addEntityToCollection = function(event) {};
* Is available in the event :
* `dataClass, collection,collectionStorage,entity, entityStorage `
*
* #### Example
* ```javascript
* model.List.controlMethods.addEntityToCollection = function(event) {
*	var item = event.entity;
*	var elements = event.collectionStorage.elements;
*    var list = {};
*    list.ID = item.ID;
*    list.name = item.name;
*    list.isClosed = item.closed;
*    list.idBoard = item.idBoard;
*    elements.push(list);
*    event.collectionStorage.elements = elements;
* }
* ```
*/
addEntityToCollection(event:object):EntityCollection;




/** Method  getCollectionLength - Method to retrieve the collection length
* ```javascript
* model.Board.controlMethods.getCollectionLength = function(event) {  
* }
*  In the event, you have access to the following object : 
* `collectionStorage, collection, dataclass`
* 
* #### Example
* ```javascript
* model.Board.controlMethods.getCollectionLength = function(event) {
*	
*   return event.collectionStorage.elements.length;
* };
* ```
*/
getCollectionLength(event:Object):number;


/** Method countEntities - Count Number of entities in a dataclass 
* 
*model.Board.controlMethods.countEntities = function(event) {}
*
* #### Note
* It’s different from getCollectionLenght (collection level) as countEntities works at the Dataclass level. 
*
* #### Example : 
* ```javascript
* model.Board.controlMethods.countEntities = function(event) {
*
*   var coll = wakTrello.getBoards(process.env.appkey, process.env.token, process.env.userNameTrello);
*    return coll.length
* };
* ```
*/
countEntities(event:object):number;



/** 
*Method orderby - Method used to order by the remote collection
* ```
* model.Board.controlMethods.orderBy = function(event) {
* } ```
*  Are available in the event :
* `collectionStorage  , sortedCollectionStorage, dataclass, collection, attributeNames`
*  Doing this we receive an array of objects attributeNames[] containing the properties :
* ```{
* attname : string ,
* sort : bool (ascending, descending) 
* } ```

* #### Example
* ```javascript
* model.Board.controlMethods.orderBy = function(event) {
*
* //Get unsort entityCollection
*    var elements = event.collectionStorage.elements;
*    var orderBy1 = event.attributeNames[0];
*    var orderBy2 = event.attributeNames[1];
*    // Sort entityCollection
*    elements.sort(function(s1, s2) {
*        if (orderBy1.ascending) {
*            if (s1[orderBy1.attname] < s2[orderBy1.attname])
*                return -1;
*            else if (s1[orderBy1.attname] == s2[orderBy1.attname]) {
*                // if we have an ambiguity  we sort by the second attribute (in general ID)
*                if (orderBy2 != undefined) {
*                    if (orderBy2.ascending) {
*
*                        if (s1[orderBy2.attname] < s2[orderBy2.attname]) {
*                            return -1;
*                        }
*                        else
*                            return 1;
*                    }
*                }
*            }
*            else
*                return 1;
*        }
*        else {
*            if (s2[orderBy1.attname] < s1[orderBy1.attname])
*                return -1;
*            else if (s2[orderBy1.attname] == s1[orderBy1.attname]) {
*                if (orderBy2 != undefined) {
*                    if (orderBy2.ascending) {
*
*                        if (s1[orderBy2.attname] < s2[orderBy2.attname]) {
*                            return -1;
*                        }
*                        else
*                            return 1;
*                    }
*                }
*            }
*            else
*                return 1;
*        }
*    });
*    // Set sort entityCollection
*    event.sortedCollectionStorage.elements = elements;
* };
*/
 orderBy(event:object):entityCollection;


/** Method computeAttribute - Method for using the Wakanda statistical API. Works by default
 * 
 * model.List.controlMethods.computeAttribute = function() {};
 *  
 * Works by default - However it needs to be declared in the controller.js file (like all the methods)
 */
 computeAttribute(event:object):object;


/** Method collectionToArray - Transform a collection to an array - Works by default
*
* model.Dataclass1.controlMethods.collectionToArray = function(event) {};
* Is available in the method :
* `collectionStorage`
* 
* #### Note
* The toArray method do work by default but you may want to override this behaviour for specific or optimization purpose
* 
*/
collectionToArray(event:object):[any];



/** Method nextInCollection - Returns the next entity in the collection - Works by default
* 
* model.Board.controlMethods.nextInCollection = function(event) {};
* In the event is available :
* `dataclass,entityCollection, entityCollectionStorage, entity`
* A default behaviour already works and allow you to use the next() method when working with collection. 
* If you want/need to override or optimize it you need to use this method
*/
nextInCollection(object:event):entity;








 /**OTHER METHODS */


/** Method getStamp - Returns the _stampValue
*
* model.List.controlMethods.getStamp = function() {};
* 
* In the event are available :
* `dataClass, entity``
*
* #### Note
* If not coded getStamp() returns 0
* Working with Stamps allows optimistic Locking 
*/
getStamp(event:object):Number

}

