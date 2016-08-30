(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("request"));
	else if(typeof define === 'function' && define.amd)
		define(["request"], factory);
	else if(typeof exports === 'object')
		exports["WakandaClient"] = factory(require("request"));
	else
		root["WakandaClient"] = factory(root["request"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_33__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var wakanda_client_1 = __webpack_require__(2);
	exports.WakandaClient = wakanda_client_1.default;
	var node_http_client_1 = __webpack_require__(32);
	var catalog_base_service_1 = __webpack_require__(7);
	exports.CatalogBaseService = catalog_base_service_1.CatalogBaseService;
	var collection_base_service_1 = __webpack_require__(21);
	exports.CollectionBaseService = collection_base_service_1.CollectionBaseService;
	var dataclass_base_service_1 = __webpack_require__(18);
	exports.DataClassBaseService = dataclass_base_service_1.DataClassBaseService;
	var directory_base_service_1 = __webpack_require__(30);
	exports.DirectoryBaseService = directory_base_service_1.DirectoryBaseService;
	var entity_base_service_1 = __webpack_require__(13);
	exports.EntityBaseService = entity_base_service_1.EntityBaseService;
	var media_base_service_1 = __webpack_require__(25);
	exports.MediaBaseService = media_base_service_1.MediaBaseService;
	wakanda_client_1.default.HttpClient = node_http_client_1.default;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var catalog_business_1 = __webpack_require__(3);
	var directory_business_1 = __webpack_require__(28);
	var entity_1 = __webpack_require__(15);
	var collection_1 = __webpack_require__(26);
	var packageOptions = __webpack_require__(31);
	var WakandaClient = (function () {
	    function WakandaClient(host) {
	        this._httpClient = new WakandaClient.HttpClient({
	            apiPrefix: (host || '') + '/rest'
	        });
	        var directoryBusiness = new directory_business_1.default({
	            wakJSC: this
	        });
	        this.directory = {
	            login: function (username, password, duration) {
	                return directoryBusiness.login(username, password, duration);
	            },
	            logout: function () {
	                return directoryBusiness.logout();
	            },
	            currentUser: function () {
	                return directoryBusiness.currentUser();
	            },
	            currentUserBelongsTo: function (group) {
	                return directoryBusiness.currentUserBelongsTo(group);
	            }
	        };
	        this.helper = {
	            isEntity: function (object) {
	                return object instanceof entity_1.default;
	            },
	            isCollection: function (object) {
	                return object instanceof collection_1.default;
	            }
	        };
	    }
	    WakandaClient.prototype.getCatalog = function (dataClasses) {
	        var catalogBusiness = new catalog_business_1.default({
	            wakJSC: this
	        });
	        return catalogBusiness.get(dataClasses);
	    };
	    WakandaClient.prototype.version = function () {
	        return packageOptions.version;
	    };
	    return WakandaClient;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = WakandaClient;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_business_1 = __webpack_require__(4);
	var catalog_service_1 = __webpack_require__(5);
	var catalog_1 = __webpack_require__(8);
	var dataclass_1 = __webpack_require__(9);
	var dataclass_business_1 = __webpack_require__(10);
	var CatalogBusiness = (function (_super) {
	    __extends(CatalogBusiness, _super);
	    function CatalogBusiness(obj) {
	        _super.call(this, obj);
	        this.service = new catalog_service_1.default({
	            wakJSC: this.wakJSC
	        });
	    }
	    CatalogBusiness.prototype.needDataClass = function (dcName) {
	        if (this.seenDataClasses.indexOf(dcName) === -1) {
	            this.seenDataClasses.push(dcName);
	        }
	    };
	    CatalogBusiness.prototype.get = function (dataClasses) {
	        var _this = this;
	        this.seenDataClasses = [];
	        return this.service.get(dataClasses).then(function (dataClassDBOArray) {
	            var dcArray = [];
	            for (var _i = 0, dataClassDBOArray_1 = dataClassDBOArray; _i < dataClassDBOArray_1.length; _i++) {
	                var dcDBO = dataClassDBOArray_1[_i];
	                var attributes = [];
	                var _loop_1 = function(attr) {
	                    switch (attr.kind) {
	                        case 'relatedEntity':
	                            attributes.push(new dataclass_1.AttributeRelated({
	                                name: attr.name,
	                                type: attr.type,
	                                kind: attr.kind
	                            }));
	                            _this.needDataClass(attr.type);
	                            break;
	                        case 'storage':
	                        case 'calculated':
	                        case 'alias':
	                            var readOnly = attr.readOnly || (attr.type === 'image' || attr.type === 'blob');
	                            attributes.push(new dataclass_1.Attribute({
	                                name: attr.name,
	                                type: attr.type,
	                                readOnly: readOnly,
	                                kind: attr.kind
	                            }));
	                            break;
	                        case 'relatedEntities':
	                            var entityType_1;
	                            dataClassDBOArray.some(function (_dataClass) {
	                                if (_dataClass.collectionName === attr.type) {
	                                    entityType_1 = _dataClass.name;
	                                    return true;
	                                }
	                            });
	                            var attrCollection = new dataclass_1.AttributeCollection({
	                                name: attr.name,
	                                type: attr.type,
	                                kind: attr.kind,
	                                entityType: entityType_1
	                            });
	                            attributes.push(attrCollection);
	                            _this.needDataClass(attrCollection.entityType);
	                            break;
	                        default:
	                            throw new Error('[WakandaClient] Unhandled ' + attr.kind + ' attribute type');
	                    }
	                };
	                for (var _a = 0, _b = dcDBO.attributes; _a < _b.length; _a++) {
	                    var attr = _b[_a];
	                    _loop_1(attr);
	                }
	                var methods = {
	                    entity: [],
	                    collection: [],
	                    dataClass: []
	                };
	                for (var _c = 0, _d = dcDBO.methods; _c < _d.length; _c++) {
	                    var method = _d[_c];
	                    switch (method.applyTo) {
	                        case 'entity':
	                            methods.entity.push(method.name);
	                            break;
	                        case 'entityCollection':
	                            methods.collection.push(method.name);
	                            break;
	                        case 'dataClass':
	                            methods.dataClass.push(method.name);
	                            break;
	                        default:
	                            throw new Error('[WakandaClient] Unrecognized ' + method.applyTo + ' method type');
	                    }
	                }
	                var dataClass = new dataclass_1.DataClass({
	                    name: dcDBO.name,
	                    collectionName: dcDBO.collectionName,
	                    attributes: attributes,
	                    methods: methods
	                });
	                //Binding framework methods to the dataclass
	                var dataClassBusiness = new dataclass_business_1.default({
	                    wakJSC: _this.wakJSC,
	                    dataClass: dataClass,
	                    methods: methods
	                });
	                dataClassBusiness._decorateDataClass();
	                dcArray.push(dataClass);
	            }
	            var catalog = new catalog_1.default({
	                dataClasses: dcArray
	            });
	            //Check if we have all needed dataClasses on the catalog
	            for (var _e = 0, _f = _this.seenDataClasses; _e < _f.length; _e++) {
	                var dcName = _f[_e];
	                if (!catalog[dcName]) {
	                    throw new Error('Needed ' + dcName + ' dataClass is not present on catalog');
	                }
	            }
	            return catalog;
	        });
	    };
	    return CatalogBusiness;
	}(abstract_business_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = CatalogBusiness;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	var AbstractBusiness = (function () {
	    function AbstractBusiness(_a) {
	        var wakJSC = _a.wakJSC;
	        this.wakJSC = wakJSC;
	    }
	    return AbstractBusiness;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AbstractBusiness;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_service_1 = __webpack_require__(6);
	var catalog_base_service_1 = __webpack_require__(7);
	var CatalogService = (function (_super) {
	    __extends(CatalogService, _super);
	    function CatalogService() {
	        _super.apply(this, arguments);
	    }
	    CatalogService.prototype.get = function (dataClasses) {
	        return catalog_base_service_1.CatalogBaseService.get({
	            httpClient: this.httpClient,
	            dataClasses: dataClasses
	        });
	    };
	    return CatalogService;
	}(abstract_service_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = CatalogService;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	var AbstractService = (function () {
	    function AbstractService(_a) {
	        var wakJSC = _a.wakJSC;
	        this.wakJSC = wakJSC;
	        this.httpClient = wakJSC._httpClient;
	    }
	    return AbstractService;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AbstractService;


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	var CatalogBaseService = (function () {
	    function CatalogBaseService() {
	    }
	    CatalogBaseService.get = function (_a) {
	        var httpClient = _a.httpClient, dataClasses = _a.dataClasses;
	        var strDataclasses = '/';
	        if (Array.isArray(dataClasses)) {
	            strDataclasses += dataClasses.join();
	        }
	        else if (typeof dataClasses === 'undefined') {
	            strDataclasses += '$all';
	        }
	        else {
	            throw new Error('Catalog.get: first parameter should be an array');
	        }
	        return httpClient.get({ uri: '/$catalog' + strDataclasses })
	            .then(function (res) {
	            var catalog = [];
	            var rawObj = JSON.parse(res.body);
	            if (rawObj.dataClasses) {
	                for (var _i = 0, _a = rawObj.dataClasses; _i < _a.length; _i++) {
	                    var d = _a[_i];
	                    var attributes = [];
	                    if (d.attributes) {
	                        for (var _b = 0, _c = d.attributes; _b < _c.length; _b++) {
	                            var attr = _c[_b];
	                            attributes.push({
	                                name: attr.name,
	                                kind: attr.kind,
	                                type: attr.type,
	                                readOnly: attr.readOnly
	                            });
	                        }
	                    }
	                    var methods = [];
	                    if (d.methods) {
	                        for (var _d = 0, _e = d.methods; _d < _e.length; _d++) {
	                            var m = _e[_d];
	                            methods.push({
	                                name: m.name,
	                                applyTo: m.applyTo
	                            });
	                        }
	                    }
	                    catalog.push({
	                        name: d.name,
	                        collectionName: d.collectionName,
	                        attributes: attributes,
	                        methods: methods
	                    });
	                }
	            }
	            return catalog;
	        });
	    };
	    return CatalogBaseService;
	}());
	exports.CatalogBaseService = CatalogBaseService;


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	var Catalog = (function () {
	    function Catalog(_a) {
	        var dataClasses = _a.dataClasses;
	        for (var _i = 0, dataClasses_1 = dataClasses; _i < dataClasses_1.length; _i++) {
	            var dc = dataClasses_1[_i];
	            this[dc.name] = dc;
	        }
	    }
	    return Catalog;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Catalog;


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var DataClass = (function () {
	    function DataClass(_a) {
	        var name = _a.name, collectionName = _a.collectionName, attributes = _a.attributes, methods = _a.methods;
	        this.name = name;
	        this.collectionName = collectionName;
	        this.attributes = attributes;
	        this.methods = methods;
	    }
	    return DataClass;
	}());
	exports.DataClass = DataClass;
	var Attribute = (function () {
	    function Attribute(_a) {
	        var name = _a.name, type = _a.type, readOnly = _a.readOnly, kind = _a.kind;
	        this.name = name;
	        this.type = type;
	        this.readOnly = readOnly === true;
	        this.kind = kind;
	    }
	    return Attribute;
	}());
	exports.Attribute = Attribute;
	var AttributeRelated = (function (_super) {
	    __extends(AttributeRelated, _super);
	    function AttributeRelated() {
	        _super.apply(this, arguments);
	    }
	    return AttributeRelated;
	}(Attribute));
	exports.AttributeRelated = AttributeRelated;
	var AttributeCollection = (function (_super) {
	    __extends(AttributeCollection, _super);
	    function AttributeCollection(_a) {
	        var name = _a.name, type = _a.type, readOnly = _a.readOnly, kind = _a.kind, entityType = _a.entityType;
	        _super.call(this, { name: name, type: type, readOnly: readOnly, kind: kind });
	        this.entityType = entityType;
	    }
	    return AttributeCollection;
	}(Attribute));
	exports.AttributeCollection = AttributeCollection;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_business_1 = __webpack_require__(4);
	var entity_business_1 = __webpack_require__(11);
	var dataclass_service_1 = __webpack_require__(17);
	var collection_business_1 = __webpack_require__(19);
	var media_business_1 = __webpack_require__(23);
	var entity_1 = __webpack_require__(15);
	var collection_1 = __webpack_require__(26);
	var dataclass_1 = __webpack_require__(9);
	var media_1 = __webpack_require__(27);
	var const_1 = __webpack_require__(22);
	var method_adapter_1 = __webpack_require__(16);
	//This map stores all DataClassBusiness instances of existing dataClasses
	var _dataClassBusinessMap = new Map();
	var DataClassBusiness = (function (_super) {
	    __extends(DataClassBusiness, _super);
	    function DataClassBusiness(_a) {
	        var wakJSC = _a.wakJSC, dataClass = _a.dataClass, methods = _a.methods;
	        _super.call(this, { wakJSC: wakJSC });
	        this.dataClass = dataClass;
	        this.methods = methods;
	        this.service = new dataclass_service_1.default({
	            wakJSC: this.wakJSC,
	            dataClass: dataClass
	        });
	        _dataClassBusinessMap.set(dataClass.name, this);
	        this._dataClassBusinessMap = _dataClassBusinessMap;
	    }
	    DataClassBusiness.prototype._decorateDataClass = function () {
	        //Do not forget to bind(this) to have "this" pointing on business instance
	        //instead of given dataclass instance
	        this.dataClass.find = this.find.bind(this);
	        this.dataClass.query = this.query.bind(this);
	        this.dataClass.create = this.create.bind(this);
	        this._addUserDefinedMethods();
	    };
	    DataClassBusiness.prototype._addUserDefinedMethods = function () {
	        var _this = this;
	        var self = this;
	        this.methods.dataClass.forEach(function (method) {
	            //Voluntary don't use fat arrow notation to use arguments object without a bug
	            _this.dataClass[method] = function () {
	                var params = Array.from(arguments);
	                return self.callMethod(method, params);
	            };
	        });
	    };
	    DataClassBusiness.prototype.callMethod = function (methodName, parameters) {
	        var _this = this;
	        return this.service.callMethod(methodName, parameters)
	            .then(function (obj) {
	            return method_adapter_1.MethodAdapter.transform(obj, _this._dataClassBusinessMap);
	        });
	    };
	    DataClassBusiness.prototype.find = function (id, options) {
	        var _this = this;
	        var opt = options || {};
	        if (opt.filter !== undefined || opt.params !== undefined || opt.pageSize !== undefined ||
	            opt.start !== undefined || opt.orderBy !== undefined) {
	            throw new Error('Dataclass.find: options filter, params, pageSize, start and orderBy are not allowed');
	        }
	        return this.service.find(id, opt).then(function (entity) {
	            return _this._presentationEntityFromDbo({
	                dbo: entity
	            });
	        });
	    };
	    DataClassBusiness.prototype.query = function (options) {
	        var _this = this;
	        var opt = options || {};
	        var initialSelect = opt.select;
	        if (opt.method && opt.method.length > 0) {
	            throw new Error('Dataclass.query: option method is not allowed');
	        }
	        if (!opt.pageSize) {
	            opt.pageSize = const_1.default.DEFAULT_PAGE_SIZE;
	        }
	        return this.service.query(opt).then(function (collection) {
	            return _this._presentationCollectionFromDbo({
	                dbo: collection,
	                pageSize: opt.pageSize,
	                initialSelect: initialSelect
	            });
	        });
	    };
	    DataClassBusiness.prototype.create = function (pojo) {
	        var entityToAttach = {};
	        if (pojo) {
	            for (var prop in pojo) {
	                if (pojo[prop] instanceof entity_1.default) {
	                    entityToAttach[prop] = pojo[prop];
	                    delete pojo[prop];
	                }
	            }
	        }
	        var entity = this._presentationEntityFromDbo({
	            dbo: pojo || {}
	        });
	        for (var prop in entityToAttach) {
	            if (Object.prototype.hasOwnProperty.call(entityToAttach, prop)) {
	                entity[prop] = entityToAttach[prop];
	            }
	        }
	        return entity;
	    };
	    DataClassBusiness.prototype._createEntity = function (_a) {
	        var key = _a.key, deferred = _a.deferred;
	        var entity = new entity_1.default({
	            key: key,
	            deferred: deferred,
	            dataClass: this.dataClass
	        });
	        var business = new entity_business_1.default({
	            wakJSC: this.wakJSC,
	            dataClass: this.dataClass,
	            entity: entity,
	            dataClassBusiness: this
	        });
	        business._decorateEntity();
	        return entity;
	    };
	    DataClassBusiness.prototype._createCollection = function (_a) {
	        var uri = _a.uri, deferred = _a.deferred, pageSize = _a.pageSize, initialSelect = _a.initialSelect;
	        var collection = new collection_1.default({
	            deferred: deferred,
	            dataClass: this.dataClass
	        });
	        var business = new collection_business_1.default({
	            wakJSC: this.wakJSC,
	            dataClass: this.dataClass,
	            dataClassBusiness: this,
	            collection: collection,
	            collectionUri: uri,
	            pageSize: pageSize,
	            initialSelect: initialSelect
	        });
	        business._decorateCollection();
	        return collection;
	    };
	    DataClassBusiness.prototype._createMedia = function (_a) {
	        var uri = _a.uri, isImage = _a.isImage, attributeName = _a.attributeName, entity = _a.entity;
	        var media = new media_1.default({ uri: uri });
	        var business = new media_business_1.default({
	            wakJSC: this.wakJSC,
	            media: media,
	            dataClassBusiness: this,
	            isImage: isImage,
	            attributeName: attributeName,
	            entity: entity
	        });
	        business._decorateMedia();
	        return media;
	    };
	    DataClassBusiness.prototype._presentationEntityFromDbo = function (_a) {
	        var dbo = _a.dbo;
	        var entity;
	        if (!dbo) {
	            entity = null;
	        }
	        if (dbo.__deferred) {
	            entity = this._createEntity({
	                key: dbo.__deferred.__KEY,
	                deferred: true
	            });
	        }
	        else {
	            entity = this._createEntity({
	                key: dbo.__KEY
	            });
	            entity._stamp = dbo.__STAMP;
	            for (var _i = 0, _b = this.dataClass.attributes; _i < _b.length; _i++) {
	                var attr = _b[_i];
	                var dboAttribute = dbo[attr.name];
	                if (dboAttribute !== null && dboAttribute !== undefined) {
	                    if (attr instanceof dataclass_1.AttributeRelated) {
	                        //Kind of recursive call with a potententialy different instance of
	                        //DataClassBusiness
	                        var business = _dataClassBusinessMap.get(attr.type);
	                        entity[attr.name] = business._presentationEntityFromDbo({
	                            dbo: dboAttribute
	                        });
	                    }
	                    else if (attr instanceof dataclass_1.AttributeCollection) {
	                        var business = _dataClassBusinessMap.get(attr.entityType);
	                        entity[attr.name] = business._presentationCollectionFromDbo({
	                            dbo: dboAttribute
	                        });
	                    }
	                    else if (attr.type === 'image' || attr.type === 'blob') {
	                        var uri = void 0;
	                        if (dboAttribute && dboAttribute.__deferred && dboAttribute.__deferred.uri) {
	                            uri = dboAttribute.__deferred.uri;
	                        }
	                        else {
	                            uri = null;
	                        }
	                        entity[attr.name] = this._createMedia({
	                            uri: uri,
	                            isImage: attr.type === 'image',
	                            attributeName: attr.name,
	                            entity: entity
	                        });
	                    }
	                    else {
	                        entity[attr.name] = dboAttribute;
	                    }
	                }
	                else {
	                    //Even if the property is null, we need a media for this kind of attributes
	                    //to handle the upload part
	                    if (attr.type === 'image' || attr.type === 'blob') {
	                        entity[attr.name] = this._createMedia({
	                            uri: null,
	                            isImage: attr.type === 'image',
	                            attributeName: attr.name,
	                            entity: entity
	                        });
	                    }
	                    else {
	                        entity[attr.name] = null;
	                    }
	                }
	            }
	        }
	        return entity;
	    };
	    DataClassBusiness.prototype._presentationCollectionFromDbo = function (_a) {
	        var dbo = _a.dbo, pageSize = _a.pageSize, initialSelect = _a.initialSelect;
	        var collection;
	        if (!dbo) {
	            collection = null;
	        }
	        else if (dbo.__deferred) {
	            collection = this._createCollection({
	                deferred: true,
	                uri: dbo.__deferred.uri
	            });
	        }
	        else {
	            collection = this._createCollection({
	                uri: dbo.__ENTITYSET,
	                pageSize: pageSize || dbo.__ENTITIES.length,
	                initialSelect: initialSelect
	            });
	            collection._count = dbo.__COUNT;
	            collection._first = dbo.__FIRST;
	            collection._sent = dbo.__SENT;
	            collection._pageSize = pageSize;
	            for (var _i = 0, _b = dbo.__ENTITIES; _i < _b.length; _i++) {
	                var dboEntity = _b[_i];
	                collection.entities.push(this._presentationEntityFromDbo({
	                    dbo: dboEntity
	                }));
	            }
	        }
	        return collection;
	    };
	    return DataClassBusiness;
	}(abstract_business_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DataClassBusiness;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_business_1 = __webpack_require__(4);
	var entity_service_1 = __webpack_require__(12);
	var dataclass_1 = __webpack_require__(9);
	var entity_1 = __webpack_require__(15);
	var method_adapter_1 = __webpack_require__(16);
	var EntityBusiness = (function (_super) {
	    __extends(EntityBusiness, _super);
	    function EntityBusiness(_a) {
	        var wakJSC = _a.wakJSC, entity = _a.entity, dataClass = _a.dataClass, dataClassBusiness = _a.dataClassBusiness;
	        _super.call(this, { wakJSC: wakJSC });
	        this.entity = entity;
	        this.dataClass = dataClass;
	        this.dataClassBusiness = dataClassBusiness;
	        this.service = new entity_service_1.default({
	            wakJSC: wakJSC,
	            entity: entity,
	            dataClass: dataClass
	        });
	    }
	    EntityBusiness.prototype._decorateEntity = function () {
	        this.entity.save = this.save.bind(this);
	        this.entity.delete = this.delete.bind(this);
	        this.entity.fetch = this.fetch.bind(this);
	        this.entity.recompute = this.recompute.bind(this);
	        this._addUserDefinedMethods();
	    };
	    EntityBusiness.prototype._addUserDefinedMethods = function () {
	        var _this = this;
	        var self = this;
	        this.dataClassBusiness.methods.entity.forEach(function (method) {
	            //Voluntary don't use fat arrow notation to use arguments object without a bug
	            _this.entity[method] = function () {
	                var params = Array.from(arguments);
	                return self.callMethod(method, params);
	            };
	        });
	    };
	    EntityBusiness.prototype.fetch = function (options) {
	        var _this = this;
	        var opt = options || {};
	        if (opt.filter !== undefined || opt.params !== undefined || opt.pageSize !== undefined ||
	            opt.start !== undefined || opt.orderBy !== undefined) {
	            throw new Error('Entity.fetch: options filter, params, pageSize, start and orderBy are not allowed');
	        }
	        return this.dataClassBusiness.find(this.entity._key, options).then(function (fresherEntity) {
	            _this._refreshEntity({ fresherEntity: fresherEntity });
	            return _this.entity;
	        });
	    };
	    EntityBusiness.prototype.callMethod = function (methodName, parameters) {
	        var _this = this;
	        if (!this.entity._key) {
	            throw new Error('Entity.' + methodName + ': can not be called on an unsaved entity');
	        }
	        return this.service.callMethod(methodName, parameters)
	            .then(function (obj) {
	            return method_adapter_1.MethodAdapter.transform(obj, _this.dataClassBusiness._dataClassBusinessMap);
	        });
	    };
	    EntityBusiness.prototype.delete = function () {
	        var _this = this;
	        if (!this.entity._key) {
	            throw new Error('Entity.delete: can not delete unsaved entity');
	        }
	        return this.service.delete().then(function () {
	            _this.entity = null;
	        });
	    };
	    EntityBusiness.prototype.save = function () {
	        var _this = this;
	        var data = this.prepareDataForSave();
	        //If first-level related entities were already expanded, we will save the
	        //entity and ask the server to expand theses attributes on its response
	        //So, the user keeps its entities expanded
	        var expand = this._getExpandString();
	        return this.service.save(data, expand).then(function (entityDbo) {
	            var fresherEntity = _this.dataClassBusiness._presentationEntityFromDbo({
	                dbo: entityDbo
	            });
	            _this._refreshEntity({ fresherEntity: fresherEntity });
	            return _this.entity;
	        });
	    };
	    EntityBusiness.prototype.recompute = function () {
	        var _this = this;
	        var data = this.prepareDataForSave();
	        return this.service.recompute(data)
	            .then(function (dbo) {
	            var fresherEntity = _this.dataClassBusiness._presentationEntityFromDbo({
	                dbo: dbo
	            });
	            _this._refreshEntity({ fresherEntity: fresherEntity });
	            return _this.entity;
	        });
	    };
	    EntityBusiness.prototype.prepareDataForSave = function () {
	        var data = {};
	        var entityIsNew = false;
	        if (this.entity._key && this.entity._stamp) {
	            data.__KEY = this.entity._key;
	            data.__STAMP = this.entity._stamp;
	        }
	        else {
	            entityIsNew = true;
	        }
	        for (var _i = 0, _a = this.dataClass.attributes; _i < _a.length; _i++) {
	            var attr = _a[_i];
	            var objAttr = this.entity[attr.name];
	            if (objAttr === undefined) {
	                objAttr = null;
	            }
	            if (attr instanceof dataclass_1.AttributeRelated) {
	                data[attr.name] = objAttr ? objAttr._key : null;
	            }
	            else if (!(attr instanceof dataclass_1.AttributeCollection) && !attr.readOnly) {
	                //Don't send null value for a newly created attribute (to don't override value eventually set on init event)
	                //except for ID (which is null), because if an empty object is send, save is ignored
	                if (!entityIsNew || objAttr !== null || attr.name === 'ID') {
	                    data[attr.name] = objAttr;
	                }
	            }
	        }
	        return data;
	    };
	    EntityBusiness.prototype._refreshEntity = function (_a) {
	        var fresherEntity = _a.fresherEntity;
	        for (var prop in fresherEntity) {
	            if (fresherEntity.hasOwnProperty(prop) && (typeof fresherEntity[prop] !== 'function')) {
	                this.entity[prop] = fresherEntity[prop];
	            }
	        }
	    };
	    EntityBusiness.prototype._getExpandString = function () {
	        var expand = '';
	        for (var _i = 0, _a = this.dataClass.attributes; _i < _a.length; _i++) {
	            var attr = _a[_i];
	            if (attr instanceof dataclass_1.AttributeRelated || attr instanceof dataclass_1.AttributeCollection) {
	                if (this.entity[attr.name] instanceof entity_1.default) {
	                    expand += attr.name + ',';
	                }
	            }
	        }
	        return expand.length > 0 ? expand.slice(0, -1) : null;
	    };
	    return EntityBusiness;
	}(abstract_business_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = EntityBusiness;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_service_1 = __webpack_require__(6);
	var entity_base_service_1 = __webpack_require__(13);
	var EntityService = (function (_super) {
	    __extends(EntityService, _super);
	    function EntityService(_a) {
	        var wakJSC = _a.wakJSC, entity = _a.entity, dataClass = _a.dataClass;
	        _super.call(this, { wakJSC: wakJSC });
	        this.entity = entity;
	        this.dataClass = dataClass;
	    }
	    EntityService.prototype.save = function (data, expand) {
	        return entity_base_service_1.EntityBaseService.save({
	            httpClient: this.httpClient,
	            dataClassName: this.dataClass.name,
	            expand: expand,
	            data: data
	        });
	    };
	    EntityService.prototype.recompute = function (data) {
	        return entity_base_service_1.EntityBaseService.recompute({
	            httpClient: this.httpClient,
	            dataClassName: this.dataClass.name,
	            data: data
	        });
	    };
	    EntityService.prototype.callMethod = function (methodName, parameters) {
	        return entity_base_service_1.EntityBaseService.callMethod({
	            httpClient: this.httpClient,
	            dataClassName: this.dataClass.name,
	            methodName: methodName,
	            parameters: parameters,
	            entityKey: this.entity._key
	        });
	    };
	    EntityService.prototype.delete = function () {
	        return entity_base_service_1.EntityBaseService.delete({
	            httpClient: this.httpClient,
	            dataClassName: this.dataClass.name,
	            entityKey: this.entity._key
	        });
	    };
	    return EntityService;
	}(abstract_service_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = EntityService;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var util_1 = __webpack_require__(14);
	var EntityBaseService = (function () {
	    function EntityBaseService() {
	    }
	    EntityBaseService.save = function (_a) {
	        var httpClient = _a.httpClient, data = _a.data, expand = _a.expand, dataClassName = _a.dataClassName;
	        var expandStr = '';
	        if (expand) {
	            expandStr = '&$expand=' + expand;
	        }
	        return httpClient.post({
	            uri: '/' + dataClassName + '?$method=update' + expandStr,
	            data: data
	        }).then(function (res) {
	            var entity = JSON.parse(res.body);
	            delete entity.__entityModel;
	            util_1.default.removeRestInfoFromEntity(entity);
	            return entity;
	        });
	    };
	    EntityBaseService.recompute = function (_a) {
	        var httpClient = _a.httpClient, dataClassName = _a.dataClassName, data = _a.data;
	        return httpClient.post({
	            uri: '/' + dataClassName + '?$method=update&$refresh=true',
	            data: data
	        }).then(function (res) {
	            var dbo = JSON.parse(res.body);
	            delete dbo.__entityModel;
	            util_1.default.removeRestInfoFromEntity(dbo);
	            return dbo;
	        });
	    };
	    EntityBaseService.callMethod = function (_a) {
	        var httpClient = _a.httpClient, dataClassName = _a.dataClassName, methodName = _a.methodName, parameters = _a.parameters, entityKey = _a.entityKey;
	        return httpClient.post({
	            uri: '/' + dataClassName + '(' + entityKey + ')/' + methodName,
	            data: parameters
	        }).then(function (res) {
	            var obj = JSON.parse(res.body);
	            return obj.result || obj || null;
	        });
	    };
	    EntityBaseService.delete = function (_a) {
	        var httpClient = _a.httpClient, dataClassName = _a.dataClassName, entityKey = _a.entityKey;
	        return httpClient.post({
	            uri: '/' + dataClassName + '(' + entityKey + ')?$method=delete'
	        }).then(function (res) {
	            var obj = JSON.parse(res.body);
	            if (!(obj && obj.ok === true)) {
	                return Promise.reject(new Error());
	            }
	            else {
	                return true;
	            }
	        });
	    };
	    return EntityBaseService;
	}());
	exports.EntityBaseService = EntityBaseService;


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	var Util = (function () {
	    function Util() {
	    }
	    Util.handleOptions = function (options) {
	        if (!options) {
	            return '';
	        }
	        var select = options.select, filter = options.filter, params = options.params, pageSize = options.pageSize, start = options.start, orderBy = options.orderBy, method = options.method, emMethod = options.emMethod;
	        var ret = '?';
	        if (select) {
	            ret += '&$expand=' + select;
	        }
	        if (filter) {
	            ret += '&$filter=\"' + filter + '\"';
	        }
	        if (orderBy) {
	            ret += '&$orderby=' + orderBy;
	        }
	        if (params) {
	            if (!Array.isArray(params)) {
	                throw new Error('params option must be an array');
	            }
	            if (params.length > 0) {
	                var p = '[';
	                for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
	                    var elt = params_1[_i];
	                    if (typeof elt === 'string') {
	                        p += '\"' + elt + '\",';
	                    }
	                    else {
	                        p += elt + ',';
	                    }
	                }
	                p = p.slice(0, -1);
	                p += ']';
	                ret += '&$params=\'' + p + '\'';
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
	    };
	    Util.isInteger = function (n) {
	        return typeof n === 'number' && !isNaN(n) && (n % 1) === 0;
	    };
	    Util.removeRestInfoFromEntity = function (entity) {
	        for (var prop in entity) {
	            if (Object.prototype.hasOwnProperty.call(entity, prop)) {
	                var p = entity[prop];
	                if (p && p.__deferred && p.__deferred.__KEY) {
	                    delete p.__deferred.uri;
	                }
	            }
	        }
	    };
	    return Util;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Util;


/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	var Entity = (function () {
	    function Entity(_a) {
	        var entityKey = _a.key, deferred = _a.deferred, dataClass = _a.dataClass;
	        this._key = entityKey;
	        this._deferred = deferred === true;
	        Object.defineProperty(this, '_dataClass', {
	            enumerable: false,
	            configurable: false,
	            writable: false,
	            value: dataClass
	        });
	    }
	    return Entity;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Entity;


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	var MethodAdapter = (function () {
	    function MethodAdapter() {
	    }
	    MethodAdapter.transform = function (object, dcBusinessMap) {
	        if (object && object.__entityModel) {
	            var business = dcBusinessMap.get(object.__entityModel);
	            if (business) {
	                //Returned object is a collection
	                if (typeof object.__COUNT !== 'undefined' &&
	                    typeof object.__ENTITIES !== 'undefined' &&
	                    typeof object.__FIRST !== 'undefined' &&
	                    typeof object.__SENT !== 'undefined') {
	                    return business._presentationCollectionFromDbo({
	                        dbo: object
	                    });
	                }
	                else if (object.__KEY && object.__STAMP) {
	                    return business._presentationEntityFromDbo({
	                        dbo: object
	                    });
	                }
	            }
	        }
	        return object;
	    };
	    return MethodAdapter;
	}());
	exports.MethodAdapter = MethodAdapter;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_service_1 = __webpack_require__(6);
	var dataclass_base_service_1 = __webpack_require__(18);
	var DataClassService = (function (_super) {
	    __extends(DataClassService, _super);
	    function DataClassService(_a) {
	        var wakJSC = _a.wakJSC, dataClass = _a.dataClass;
	        _super.call(this, { wakJSC: wakJSC });
	        this.dataClass = dataClass;
	    }
	    DataClassService.prototype.find = function (id, options) {
	        return dataclass_base_service_1.DataClassBaseService.find({
	            httpClient: this.httpClient,
	            key: id,
	            options: options,
	            dataClassName: this.dataClass.name
	        });
	    };
	    DataClassService.prototype.query = function (options) {
	        return dataclass_base_service_1.DataClassBaseService.query({
	            httpClient: this.httpClient,
	            options: options,
	            dataClassName: this.dataClass.name
	        });
	    };
	    DataClassService.prototype.callMethod = function (methodName, parameters) {
	        return dataclass_base_service_1.DataClassBaseService.callMethod({
	            httpClient: this.httpClient,
	            dataClassName: this.dataClass.name,
	            methodName: methodName,
	            parameters: parameters
	        });
	    };
	    return DataClassService;
	}(abstract_service_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DataClassService;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var util_1 = __webpack_require__(14);
	var DataClassBaseService = (function () {
	    function DataClassBaseService() {
	    }
	    DataClassBaseService.find = function (_a) {
	        var httpClient = _a.httpClient, key = _a.key, options = _a.options, dataClassName = _a.dataClassName;
	        if (typeof key !== 'string' && typeof key !== 'number') {
	            throw new Error('DataClass.find: Invalid id type');
	        }
	        var optString = util_1.default.handleOptions(options);
	        return httpClient.get({
	            uri: '/' + dataClassName + '(' + key + ')' + optString
	        })
	            .then(function (res) {
	            var entity = JSON.parse(res.body);
	            delete entity.__entityModel;
	            util_1.default.removeRestInfoFromEntity(entity);
	            return entity;
	        });
	    };
	    DataClassBaseService.query = function (_a) {
	        var httpClient = _a.httpClient, options = _a.options, dataClassName = _a.dataClassName;
	        options.method = 'entityset';
	        if (Array.isArray(options.params)) {
	            options.params = this._sanitizeOptionParams(options.params);
	        }
	        var optString = util_1.default.handleOptions(options);
	        return httpClient.get({
	            uri: '/' + dataClassName + optString
	        }).then(function (res) {
	            var collection = JSON.parse(res.body);
	            delete collection.__entityModel;
	            for (var _i = 0, _a = collection.__ENTITIES; _i < _a.length; _i++) {
	                var entity = _a[_i];
	                util_1.default.removeRestInfoFromEntity(entity);
	            }
	            return collection;
	        });
	    };
	    DataClassBaseService.callMethod = function (_a) {
	        var httpClient = _a.httpClient, methodName = _a.methodName, parameters = _a.parameters, dataClassName = _a.dataClassName;
	        return httpClient.post({
	            uri: '/' + dataClassName + '/' + methodName,
	            data: parameters
	        }).then(function (res) {
	            var obj = JSON.parse(res.body);
	            return obj.result || obj || null;
	        });
	    };
	    DataClassBaseService._sanitizeOptionParams = function (params) {
	        return params.map(function (element) {
	            if (element instanceof Date) {
	                return element.toISOString();
	            }
	            else {
	                return element;
	            }
	        });
	    };
	    return DataClassBaseService;
	}());
	exports.DataClassBaseService = DataClassBaseService;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_business_1 = __webpack_require__(4);
	var collection_service_1 = __webpack_require__(20);
	var const_1 = __webpack_require__(22);
	var method_adapter_1 = __webpack_require__(16);
	var CollectionBusiness = (function (_super) {
	    __extends(CollectionBusiness, _super);
	    function CollectionBusiness(_a) {
	        var wakJSC = _a.wakJSC, dataClass = _a.dataClass, collection = _a.collection, dataClassBusiness = _a.dataClassBusiness, collectionUri = _a.collectionUri, pageSize = _a.pageSize, initialSelect = _a.initialSelect;
	        _super.call(this, { wakJSC: wakJSC });
	        this.collection = collection;
	        this.dataClass = dataClass;
	        this.dataClassBusiness = dataClassBusiness;
	        this.service = new collection_service_1.default({
	            wakJSC: wakJSC,
	            collection: collection,
	            dataClass: dataClass,
	            collectionUri: collectionUri
	        });
	        this.pageSize = pageSize;
	        this.initialSelect = initialSelect;
	    }
	    CollectionBusiness.prototype._decorateCollection = function () {
	        this.collection.fetch = this.fetch.bind(this);
	        this.collection.nextPage = this.nextPage.bind(this);
	        this.collection.prevPage = this.prevPage.bind(this);
	        this.collection.more = this.more.bind(this);
	        this._addUserDefinedMethods();
	    };
	    CollectionBusiness.prototype.fetch = function (options) {
	        var _this = this;
	        var opt = options || {};
	        if (opt.method && opt.method.length > 0) {
	            throw new Error('Collection.fetch: option method is not allowed');
	        }
	        if (!opt.pageSize) {
	            opt.pageSize = this.pageSize ? this.pageSize : const_1.default.DEFAULT_PAGE_SIZE;
	        }
	        if (opt.select) {
	            this.initialSelect = opt.select;
	        }
	        this.pageSize = opt.pageSize;
	        return this.service.fetch(opt).then(function (collectionDBO) {
	            var fresherCollection = _this.dataClassBusiness._presentationCollectionFromDbo({
	                dbo: collectionDBO,
	                pageSize: _this.pageSize
	            });
	            _this._refreshCollection({ fresherCollection: fresherCollection });
	            return _this.collection;
	        });
	    };
	    CollectionBusiness.prototype.more = function () {
	        var _this = this;
	        if (this.collection._deferred === true) {
	            throw new Error('Collection.more: can not call more on a deferred collection');
	        }
	        var options = {
	            start: this.collection._first + this.collection._sent,
	            pageSize: this.pageSize
	        };
	        if (this.initialSelect) {
	            options.select = this.initialSelect;
	        }
	        return this.service.fetch(options)
	            .then(function (dbo) {
	            _this.collection._sent += dbo.__ENTITIES.length;
	            for (var _i = 0, _a = dbo.__ENTITIES; _i < _a.length; _i++) {
	                var entity = _a[_i];
	                _this.collection.entities.push(_this.dataClassBusiness._presentationEntityFromDbo({
	                    dbo: entity
	                }));
	            }
	            return _this.collection;
	        });
	    };
	    CollectionBusiness.prototype.nextPage = function () {
	        if (this.collection._deferred === true) {
	            throw new Error('Collection.nextPage: can not call nextPage on a deferred collection');
	        }
	        var options = {
	            start: this.collection._first + this.pageSize,
	            pageSize: this.pageSize
	        };
	        if (this.initialSelect) {
	            options.select = this.initialSelect;
	        }
	        return this.fetch(options);
	    };
	    CollectionBusiness.prototype.prevPage = function () {
	        if (this.collection._deferred === true) {
	            throw new Error('Collection.prevPage: can not call prevPage on a deferred collection');
	        }
	        var options = {
	            start: this.collection._first - this.pageSize,
	            pageSize: this.pageSize
	        };
	        if (this.initialSelect) {
	            options.select = this.initialSelect;
	        }
	        return this.fetch(options);
	    };
	    CollectionBusiness.prototype._addUserDefinedMethods = function () {
	        var _this = this;
	        var self = this;
	        this.dataClassBusiness.methods.collection.forEach(function (method) {
	            //Voluntary don't use fat arrow notation to use arguments object without a bug
	            _this.collection[method] = function () {
	                var params = Array.from(arguments);
	                return self.callMethod(method, params);
	            };
	        });
	    };
	    CollectionBusiness.prototype.callMethod = function (methodName, parameters) {
	        var _this = this;
	        if (this.collection._deferred) {
	            throw new Error('Collection.' + methodName + ': can not be called on a deferred collection');
	        }
	        return this.service.callMethod(methodName, parameters)
	            .then(function (obj) {
	            return method_adapter_1.MethodAdapter.transform(obj, _this.dataClassBusiness._dataClassBusinessMap);
	        });
	    };
	    CollectionBusiness.prototype._refreshCollection = function (_a) {
	        var fresherCollection = _a.fresherCollection;
	        for (var prop in fresherCollection) {
	            if (Object.prototype.hasOwnProperty.call(fresherCollection, prop)) {
	                if (typeof fresherCollection[prop] !== 'function') {
	                    this.collection[prop] = fresherCollection[prop];
	                }
	            }
	        }
	    };
	    return CollectionBusiness;
	}(abstract_business_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = CollectionBusiness;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_service_1 = __webpack_require__(6);
	var collection_base_service_1 = __webpack_require__(21);
	var CollectionService = (function (_super) {
	    __extends(CollectionService, _super);
	    function CollectionService(_a) {
	        var wakJSC = _a.wakJSC, collection = _a.collection, dataClass = _a.dataClass, collectionUri = _a.collectionUri;
	        _super.call(this, { wakJSC: wakJSC });
	        this.collection = collection;
	        this.dataClass = dataClass;
	        this.collectionUri = collectionUri;
	        this.isEntitySet = collection_base_service_1.isEntitySetUri(collectionUri);
	    }
	    CollectionService.prototype.fetch = function (options) {
	        var _this = this;
	        return collection_base_service_1.CollectionBaseService.fetch({
	            httpClient: this.httpClient,
	            collectionUri: this.collectionUri,
	            isEntitySet: this.isEntitySet,
	            options: options
	        })
	            .then(function (dbo) {
	            if (dbo.__ENTITYSET) {
	                _this.collectionUri = dbo.__ENTITYSET;
	                _this.isEntitySet = collection_base_service_1.isEntitySetUri(dbo.__ENTITYSET);
	            }
	            return dbo;
	        });
	    };
	    CollectionService.prototype.callMethod = function (methodName, parameters) {
	        return collection_base_service_1.CollectionBaseService.callMethod({
	            httpClient: this.httpClient,
	            collectionUri: this.collectionUri,
	            isEntitySet: this.isEntitySet,
	            methodName: methodName,
	            parameters: parameters
	        });
	    };
	    return CollectionService;
	}(abstract_service_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = CollectionService;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var util_1 = __webpack_require__(14);
	var CollectionBaseService = (function () {
	    function CollectionBaseService() {
	    }
	    CollectionBaseService.fetch = function (_a) {
	        var httpClient = _a.httpClient, collectionUri = _a.collectionUri, isEntitySet = _a.isEntitySet, options = _a.options;
	        if (!isEntitySet) {
	            if (options.select && options.select.length > 0) {
	                throw new Error('Collection.fetch: option select is not allowed when collection is deferred');
	            }
	        }
	        options.method = 'subentityset';
	        var optString = util_1.default.handleOptions(options);
	        //Remove the first ? on optString if it's not an entitySet (because there is also
	        //?$expand=... on collectionUri), and add a &
	        if (!isEntitySet) {
	            optString = '&' + optString.slice(1);
	        }
	        //Remove the /rest/ part of the URI as our service will add it on its own
	        // let uri = this.collectionUri.slice(5);
	        var uri = this._removeRestFromUri(collectionUri);
	        return httpClient.get({
	            uri: uri + optString
	        }).then(function (res) {
	            var obj = JSON.parse(res.body);
	            delete obj.__entityModel;
	            for (var _i = 0, _a = obj.__ENTITIES; _i < _a.length; _i++) {
	                var entity = _a[_i];
	                util_1.default.removeRestInfoFromEntity(entity);
	            }
	            return obj;
	        });
	    };
	    CollectionBaseService.callMethod = function (_a) {
	        var httpClient = _a.httpClient, collectionUri = _a.collectionUri, isEntitySet = _a.isEntitySet, methodName = _a.methodName, parameters = _a.parameters;
	        //Two cases. If it's an entity set, just call the method
	        //If not, call it with emMethod and subentityset parameters
	        var uri = this._removeRestFromUri(collectionUri);
	        if (isEntitySet) {
	            uri += '/' + methodName;
	        }
	        else {
	            var optString = util_1.default.handleOptions({
	                method: 'subentityset',
	                emMethod: methodName
	            });
	            uri += '&' + optString.slice(1);
	        }
	        return httpClient.post({
	            uri: uri,
	            data: parameters
	        }).then(function (res) {
	            var obj = JSON.parse(res.body);
	            return obj.result || obj || null;
	        });
	    };
	    CollectionBaseService._removeRestFromUri = function (uri) {
	        return uri.slice(5);
	    };
	    return CollectionBaseService;
	}());
	exports.CollectionBaseService = CollectionBaseService;
	function isEntitySetUri(uri) {
	    return /^\/rest\/\w+\/\$entityset\/[A-Z0-9]+(\?.*)?$/i.test(uri);
	}
	exports.isEntitySetUri = isEntitySetUri;


/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    DEFAULT_PAGE_SIZE: 40,
	    DEFAULT_SESSION_DURATION: 3600 //seconds
	};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_business_1 = __webpack_require__(4);
	var media_service_1 = __webpack_require__(24);
	var MediaBusiness = (function (_super) {
	    __extends(MediaBusiness, _super);
	    function MediaBusiness(_a) {
	        var wakJSC = _a.wakJSC, media = _a.media, dataClassBusiness = _a.dataClassBusiness, isImage = _a.isImage, attributeName = _a.attributeName, entity = _a.entity;
	        _super.call(this, { wakJSC: wakJSC });
	        this.media = media;
	        this.entity = entity;
	        this.dataClassBusiness = dataClassBusiness;
	        this.isImage = isImage === true;
	        this.service = new media_service_1.default({
	            wakJSC: wakJSC,
	            mediaBusiness: this,
	            media: media,
	            attributeName: attributeName,
	            dataClassBusiness: dataClassBusiness
	        });
	    }
	    MediaBusiness.prototype._decorateMedia = function () {
	        this.media.upload = this.upload.bind(this);
	        this.media.delete = this.delete.bind(this);
	    };
	    MediaBusiness.prototype.upload = function (file) {
	        var _this = this;
	        if (!this.entity._key) {
	            throw new Error('Media.upload: entity must be saved before uploading a media');
	        }
	        return this.service.upload(file, file.type).then(function (dbo) {
	            return dbo; //FIXME
	        }).then(function () {
	            //FIXME - crappy, force a refresh of the entity to get proper stamp and media uri
	            return _this.entity.fetch();
	        });
	    };
	    MediaBusiness.prototype.delete = function () {
	        var _this = this;
	        if (!this.entity._key) {
	            throw new Error('Media.upload: entity must be saved before deleting a media');
	        }
	        return this.service.delete().then(function () {
	            //FIXME - crappy, force a refresh of the entity to get proper stamp and media uri
	            return _this.entity.fetch();
	        });
	    };
	    return MediaBusiness;
	}(abstract_business_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MediaBusiness;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_service_1 = __webpack_require__(6);
	var media_base_service_1 = __webpack_require__(25);
	var MediaService = (function (_super) {
	    __extends(MediaService, _super);
	    function MediaService(_a) {
	        var wakJSC = _a.wakJSC, mediaBusiness = _a.mediaBusiness, media = _a.media, attributeName = _a.attributeName, dataClassBusiness = _a.dataClassBusiness;
	        _super.call(this, { wakJSC: wakJSC });
	        this.dataClassName = dataClassBusiness.dataClass.name;
	        this.entity = mediaBusiness.entity;
	        this.isImage = mediaBusiness.isImage;
	        this.media = media;
	        this.attributeName = attributeName;
	    }
	    MediaService.prototype.upload = function (file, mimeType) {
	        return media_base_service_1.MediaBaseService.upload({
	            httpClient: this.httpClient,
	            dataClassName: this.dataClassName,
	            entityKey: this.entity._key,
	            attributeName: this.attributeName,
	            isImage: this.isImage,
	            file: file
	        });
	    };
	    MediaService.prototype.delete = function () {
	        return media_base_service_1.MediaBaseService.delete({
	            httpClient: this.httpClient,
	            dataClassName: this.dataClassName,
	            entityKey: this.entity._key,
	            entityStamp: this.entity._stamp,
	            attributeName: this.attributeName
	        });
	    };
	    return MediaService;
	}(abstract_service_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MediaService;


/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	var MediaBaseService = (function () {
	    function MediaBaseService() {
	    }
	    MediaBaseService.upload = function (_a) {
	        var httpClient = _a.httpClient, dataClassName = _a.dataClassName, entityKey = _a.entityKey, attributeName = _a.attributeName, file = _a.file, isImage = _a.isImage;
	        var uri = this._buildUri(dataClassName, entityKey, attributeName);
	        if (isImage) {
	            uri += '?$rawPict=' + file.type;
	        }
	        //FIXME - real crappy not to return some piece of information to refresh entity
	        return httpClient.post({
	            uri: uri,
	            data: file,
	            binary: true
	        });
	    };
	    MediaBaseService.delete = function (_a) {
	        var httpClient = _a.httpClient, dataClassName = _a.dataClassName, entityKey = _a.entityKey, entityStamp = _a.entityStamp, attributeName = _a.attributeName;
	        var uri = '/' + dataClassName + '(' + entityKey + ')';
	        var data = {
	            __KEY: entityKey,
	            __STAMP: entityStamp
	        };
	        data[attributeName] = null;
	        //FIXME - crappy
	        return httpClient.post({
	            uri: uri,
	            data: data
	        });
	    };
	    MediaBaseService._buildUri = function (dataClassName, entityKey, attributeName) {
	        return '/' + dataClassName + '(' + entityKey + ')' + '/' + attributeName;
	    };
	    return MediaBaseService;
	}());
	exports.MediaBaseService = MediaBaseService;


/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	var Collection = (function () {
	    function Collection(_a) {
	        var deferred = _a.deferred, dataClass = _a.dataClass;
	        this.entities = [];
	        this._deferred = deferred === true;
	        Object.defineProperty(this, '_dataClass', {
	            enumerable: false,
	            configurable: false,
	            writable: false,
	            value: dataClass
	        });
	    }
	    return Collection;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Collection;


/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	var Media = (function () {
	    function Media(_a) {
	        var uri = _a.uri;
	        this.uri = uri;
	    }
	    return Media;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Media;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_business_1 = __webpack_require__(4);
	var directory_service_1 = __webpack_require__(29);
	var const_1 = __webpack_require__(22);
	var DirectoryBusiness = (function (_super) {
	    __extends(DirectoryBusiness, _super);
	    function DirectoryBusiness(_a) {
	        var wakJSC = _a.wakJSC;
	        _super.call(this, { wakJSC: wakJSC });
	        this.service = new directory_service_1.default({ wakJSC: wakJSC });
	    }
	    DirectoryBusiness.prototype.login = function (username, password, duration) {
	        var durationTime = duration || const_1.default.DEFAULT_SESSION_DURATION;
	        if (!(typeof durationTime === 'number') || durationTime <= 0) {
	            throw new Error('Directory.login: invalid duration parameter');
	        }
	        return this.service.login(username, password, durationTime)
	            .catch(function () {
	            return Promise.reject(new Error('Directory.login: Unauthorized'));
	        });
	    };
	    DirectoryBusiness.prototype.logout = function () {
	        return this.service.logout()
	            .catch(function () {
	            return Promise.reject(new Error('Directory.logout: logout failed'));
	        });
	    };
	    DirectoryBusiness.prototype.currentUser = function () {
	        return this.service.currentUser()
	            .then(function (dbo) {
	            return dbo;
	        })
	            .catch(function () {
	            return Promise.reject(new Error('Directory.currentUser: user is not logged in'));
	        });
	    };
	    DirectoryBusiness.prototype.currentUserBelongsTo = function (group) {
	        if (!(typeof group === 'string')) {
	            throw new Error('Directory.currentUserBelongsTo: group must be a string');
	        }
	        return this.service.currentUserBelongsTo(group)
	            .then(function () {
	            return true;
	        })
	            .catch(function () {
	            return false;
	        });
	    };
	    return DirectoryBusiness;
	}(abstract_business_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DirectoryBusiness;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_service_1 = __webpack_require__(6);
	var directory_base_service_1 = __webpack_require__(30);
	var DirectoryService = (function (_super) {
	    __extends(DirectoryService, _super);
	    function DirectoryService() {
	        _super.apply(this, arguments);
	    }
	    DirectoryService.prototype.login = function (username, password, duration) {
	        return directory_base_service_1.DirectoryBaseService.login({
	            httpClient: this.httpClient,
	            username: username,
	            password: password,
	            duration: duration
	        });
	    };
	    DirectoryService.prototype.logout = function () {
	        return directory_base_service_1.DirectoryBaseService.logout({
	            httpClient: this.httpClient
	        });
	    };
	    DirectoryService.prototype.currentUser = function () {
	        return directory_base_service_1.DirectoryBaseService.currentUser({
	            httpClient: this.httpClient
	        });
	    };
	    DirectoryService.prototype.currentUserBelongsTo = function (group) {
	        return directory_base_service_1.DirectoryBaseService.currentUserBelongsTo({
	            httpClient: this.httpClient,
	            group: group
	        });
	    };
	    return DirectoryService;
	}(abstract_service_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DirectoryService;


/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	var DirectoryBaseService = (function () {
	    function DirectoryBaseService() {
	    }
	    DirectoryBaseService.login = function (_a) {
	        var httpClient = _a.httpClient, username = _a.username, password = _a.password, duration = _a.duration;
	        return httpClient.post({
	            uri: '/$directory/login',
	            data: [username, password, duration]
	        }).then(function () {
	            return true;
	        });
	    };
	    DirectoryBaseService.logout = function (_a) {
	        var httpClient = _a.httpClient;
	        return httpClient.get({
	            uri: '/$directory/logout'
	        }).then(function (res) {
	            var obj = JSON.parse(res.body);
	            if (obj.result && obj.result === true) {
	                return true;
	            }
	            else {
	                return Promise.reject(new Error());
	            }
	        });
	    };
	    DirectoryBaseService.currentUser = function (_a) {
	        var httpClient = _a.httpClient;
	        return httpClient.get({
	            uri: '/$directory/currentUser'
	        })
	            .then(function (res) {
	            var obj = JSON.parse(res.body);
	            if (obj.result && obj.result.ID) {
	                return obj.result;
	            }
	            else {
	                return Promise.reject(new Error());
	            }
	        });
	    };
	    DirectoryBaseService.currentUserBelongsTo = function (_a) {
	        var httpClient = _a.httpClient, group = _a.group;
	        return httpClient.post({
	            uri: '/$directory/currentUserBelongsTo',
	            data: [group]
	        }).then(function (res) {
	            var obj = JSON.parse(res.body);
	            if (obj && obj.result && obj.result === true) {
	                return true;
	            }
	            else {
	                return Promise.reject(new Error());
	            }
	        });
	    };
	    return DirectoryBaseService;
	}());
	exports.DirectoryBaseService = DirectoryBaseService;


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = {
		"name": "wakanda-client",
		"main": "dist/wakanda-client.node.js",
		"version": "0.3.5",
		"description": "Wakanda Client allows you to easily interact with Wakanda Server on a JavaScript (browser or node) environment",
		"typings": "dist/wakanda-client.d.ts",
		"browser": "dist/wakanda-client.min.js",
		"repository": "wakanda/wakanda-javascript-client",
		"scripts": {
			"webpack-watch": "node ./node_modules/webpack/bin/webpack.js --progress --colors --watch",
			"webpack-build": "node ./node_modules/webpack/bin/webpack.js --progress --colors",
			"webpack-build:ci": "node ./node_modules/webpack/bin/webpack.js --progress --colors --config webpack.ci.js",
			"webpack-build:prod": "node ./node_modules/webpack/bin/webpack.js --progress --colors --config webpack.prod.js",
			"test:karma:single": "node ./node_modules/karma/bin/karma start",
			"test:karma:full": "npm run webpack-build && npm run test:karma:single",
			"test:node:single": "http_proxy=\"\" node ./node_modules/mocha/bin/mocha test/bootstrap.js test/spec/**/*.spec.js",
			"test:node:full": "npm run webpack-build && npm run test:node:single",
			"test-single": "./test.sh single",
			"test": "./test.sh",
			"test-server:start": "node test/connect/server.js & echo $! > testserver.pid && sleep 1",
			"test-server:stop": "kill `cat testserver.pid` && rm testserver.pid",
			"test-server:record": "node test/connect/server.js record & echo $! > testserver.pid",
			"test-server:init": "rm -rf test/connect/mocks && npm run test-server:record && npm run webpack-build && npm run test:node:single && npm run test:karma:single && npm run test-server:stop",
			"codecov": "cat coverage/*/lcov.info | codecov",
			"tsc": "node ./node_modules/typescript/bin/tsc",
			"serve": "node ./node_modules/.bin/concurrently -r \"npm run webpack-watch\" \"node ./node_modules/.bin/gulp serve\""
		},
		"author": "Wakanda SAS",
		"license": "MIT",
		"devDependencies": {
			"babel-core": "^6.3.17",
			"babel-loader": "^6.2.0",
			"babel-polyfill": "^6.3.14",
			"babel-preset-es2015": "^6.3.13",
			"body-parser": "^1.14.2",
			"chai": "^3.4.1",
			"chalk": "^1.1.1",
			"codecov.io": "^0.1.6",
			"concurrently": "^2.0.0",
			"connect": "^3.4.0",
			"connect-prism": "mrblackus/connect-prism",
			"eslint": "^1.10.3",
			"eslint-loader": "^1.2.0",
			"express": "^4.13.3",
			"grunt": "^0.4.5",
			"gulp": "^3.9.0",
			"gulp-connect": "^2.2.0",
			"http-proxy-middleware": "^0.9.0",
			"isparta": "^4.0.0",
			"isparta-loader": "^2.0.0",
			"json-loader": "^0.5.4",
			"karma": "^0.13.15",
			"karma-chai": "^0.1.0",
			"karma-coverage": "^0.5.3",
			"karma-mocha": "^0.2.1",
			"karma-phantomjs-launcher": "^0.2.1",
			"karma-verbose-reporter": "0.0.3",
			"mocha": "^2.3.4",
			"path": "^0.12.7",
			"phantomjs": "^1.9.19",
			"serve-static": "^1.10.2",
			"ts-loader": "0.8.1",
			"tslint": "^3.9.0",
			"tslint-loader": "^2.1.4",
			"typescript": "^1.8.10",
			"webpack": "^1.12.15"
		},
		"dependencies": {
			"core-js": "^2.1.2",
			"request": "^2.67.0"
		}
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var request = __webpack_require__(33);
	var http_client_1 = __webpack_require__(34);
	var http_response_1 = __webpack_require__(35);
	var NodeHttpClient = (function (_super) {
	    __extends(NodeHttpClient, _super);
	    function NodeHttpClient(_a) {
	        var apiPrefix = _a.apiPrefix;
	        _super.call(this, { apiPrefix: apiPrefix });
	        this.request = request;
	        this.cookieJar = this.request.jar();
	    }
	    NodeHttpClient.prototype._clearCookie = function () {
	        this.cookieJar = this.request.jar();
	    };
	    NodeHttpClient.prototype.get = function (_a) {
	        var uri = _a.uri, params = _a.params;
	        try {
	            var res = _super.prototype.get.call(this, { uri: uri, params: params });
	            if (res !== null) {
	                return Promise.resolve(res);
	            }
	        }
	        catch (e) {
	            return Promise.reject(e);
	        }
	        var result = this._getWithoutInterceptor({ uri: uri, params: params });
	        return _super.prototype.responseGet.call(this, uri, result);
	    };
	    NodeHttpClient.prototype._getWithoutInterceptor = function (_a) {
	        var uri = _a.uri, params = _a.params;
	        var options = {
	            url: this.prefix + uri,
	            method: 'GET',
	            qs: params,
	            jar: this.cookieJar
	        };
	        return this._httpResponseAdaptor({ requestOptions: options });
	    };
	    NodeHttpClient.prototype.post = function (_a) {
	        var uri = _a.uri, data = _a.data, binary = _a.binary;
	        try {
	            var res = _super.prototype.post.call(this, { uri: uri, data: data, binary: binary });
	            if (res !== null) {
	                return Promise.resolve(res);
	            }
	        }
	        catch (e) {
	            return Promise.reject(e);
	        }
	        var options = {
	            url: this.prefix + uri,
	            method: 'POST',
	            form: data,
	            jar: this.cookieJar
	        };
	        try {
	            if (!binary) {
	                options.headers = {
	                    'Content-Type': 'application/json'
	                };
	                options.form = JSON.stringify(data);
	            }
	        }
	        catch (e) {
	            return Promise.reject(e);
	        }
	        var result = this._httpResponseAdaptor({ requestOptions: options });
	        return _super.prototype.responsePost.call(this, uri, result);
	    };
	    NodeHttpClient.prototype._httpResponseAdaptor = function (_a) {
	        var _this = this;
	        var requestOptions = _a.requestOptions;
	        return new Promise(function (resolve, reject) {
	            _this.request(requestOptions, function (error, response, body) {
	                if (error || response.statusCode >= 400) {
	                    reject(error || { statusMessage: response.statusMessage, body: body });
	                }
	                else {
	                    resolve(new http_response_1.default({
	                        statusCode: response.statusCode,
	                        headers: [],
	                        body: body
	                    }));
	                }
	            });
	        });
	    };
	    return NodeHttpClient;
	}(http_client_1.HttpClient));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = NodeHttpClient;


/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("request");

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	var HttpClient = (function () {
	    function HttpClient(_a) {
	        var apiPrefix = _a.apiPrefix;
	        this.prefix = apiPrefix;
	        this._getRequestInterceptors = [];
	        this._postRequestInterceptors = [];
	        this._getResponseInterceptors = [];
	        this._postResponseInterceptors = [];
	    }
	    HttpClient.prototype.get = function (options) {
	        for (var i = 0; i < this._getRequestInterceptors.length; i++) {
	            var interceptor = this._getRequestInterceptors[i];
	            var res = interceptor(options);
	            if (res !== null && (typeof res !== 'undefined')) {
	                return res;
	            }
	        }
	        return null;
	    };
	    HttpClient.prototype.post = function (options) {
	        for (var i = 0; i < this._postRequestInterceptors.length; i++) {
	            var interceptor = this._postRequestInterceptors[i];
	            var res = interceptor(options);
	            if (res !== null && (typeof res !== 'undefined')) {
	                return res;
	            }
	        }
	        return null;
	    };
	    /**
	     * @return {Promise} Returns either the underlying HTTP request result, or the promise returned by the interceptor if any
	     */
	    HttpClient.prototype.responseGet = function (requestUri, promise) {
	        //Execute response interceptors
	        for (var _i = 0, _a = this._getResponseInterceptors; _i < _a.length; _i++) {
	            var interceptor = _a[_i];
	            var res = interceptor(requestUri, promise);
	            if (res) {
	                return res;
	            }
	        }
	        return promise;
	    };
	    /**
	     * @return {Promise} Returns either the underlying HTTP request result, or the promise returned by the interceptor if any
	     */
	    HttpClient.prototype.responsePost = function (requestUri, promise) {
	        //Execute response interceptors
	        for (var _i = 0, _a = this._postResponseInterceptors; _i < _a.length; _i++) {
	            var interceptor = _a[_i];
	            var res = interceptor(requestUri, promise);
	            if (res) {
	                return res;
	            }
	        }
	        return promise;
	    };
	    /**
	     * @param {array|string} type - HTTP verb of the request to intercept
	     * @param {function} callback - The interceptor function to execute before HTTP request. If it returns something different than null, the underlying HTTP request won't be executed
	     * @returns {null|object} Returns null or an object, if an object is returned, the underlying HTTP request won't be executed
	     */
	    HttpClient.prototype.registerRequestInterceptor = function (type, callback) {
	        var _this = this;
	        var interceptorType = this._interceptorTypeToArray(type);
	        interceptorType.forEach(function (t) {
	            if (t === 'get') {
	                _this._getRequestInterceptors.push(callback);
	            }
	            else if (t === 'post') {
	                _this._postRequestInterceptors.push(callback);
	            }
	        });
	    };
	    HttpClient.prototype.registerResponseInterceptor = function (type, callback) {
	        var _this = this;
	        var interceptorType = this._interceptorTypeToArray(type);
	        interceptorType.forEach(function (t) {
	            if (t === 'get') {
	                _this._getResponseInterceptors.push(callback);
	            }
	            else if (t === 'post') {
	                _this._postResponseInterceptors.push(callback);
	            }
	        });
	    };
	    HttpClient.prototype._interceptorTypeToArray = function (type) {
	        var _this = this;
	        var interceptorType = [];
	        if (typeof type === 'string') {
	            if (!this._isValidInterceptorType(type.toLowerCase())) {
	                throw new Error('HttpClient.registerInterceptor: invalid interceptor type');
	            }
	            else {
	                interceptorType.push(type.toLowerCase());
	            }
	        }
	        else if (Array.isArray(type)) {
	            type.forEach(function (t) {
	                if (!_this._isValidInterceptorType(t.toLowerCase())) {
	                    throw new Error('HttpClient.registerInterceptor: invalid interceptor type');
	                }
	                else {
	                    interceptorType.push(t.toLowerCase());
	                }
	            });
	        }
	        else {
	            throw new Error('HttpClient.registerInterceptor: type must be a string or an array');
	        }
	        return interceptorType;
	    };
	    HttpClient.prototype._isValidInterceptorType = function (type) {
	        var validTypes = ['get', 'post'];
	        return validTypes.indexOf(type) !== -1;
	    };
	    return HttpClient;
	}());
	exports.HttpClient = HttpClient;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = HttpClient;


/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	var HttpResponse = (function () {
	    function HttpResponse(_a) {
	        var statusCode = _a.statusCode, headers = _a.headers, body = _a.body;
	        this.statusCode = statusCode;
	        this.headers = headers || [];
	        this.body = body;
	    }
	    return HttpResponse;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = HttpResponse;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=wakanda-client.node.js.map