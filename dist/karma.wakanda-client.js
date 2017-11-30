/*! version: 2.3.0 - date: 2017-11-30 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WakandaClient"] = factory();
	else
		root["WakandaClient"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 80);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(49)('wks');
var uid = __webpack_require__(21);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(4);
var hide = __webpack_require__(10);
var redefine = __webpack_require__(11);
var ctx = __webpack_require__(6);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(12);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(43);
var toPrimitive = __webpack_require__(44);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(19)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(20);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var hide = __webpack_require__(10);
var has = __webpack_require__(9);
var SRC = __webpack_require__(21)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(4).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_9nf702grz=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/business/abstract-business.ts",hash="5694774787ecf935c4e2ae9cf5f75e4f4907d640",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/business/abstract-business.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:38},end:{line:9,column:3}},"2":{start:{line:5,column:21},end:{line:5,column:30}},"3":{start:{line:6,column:8},end:{line:6,column:29}},"4":{start:{line:8,column:4},end:{line:8,column:28}},"5":{start:{line:10,column:0},end:{line:10,column:35}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:38},end:{line:3,column:39}},loc:{start:{line:3,column:50},end:{line:9,column:1}},line:3},"1":{name:"AbstractBusiness",decl:{start:{line:4,column:13},end:{line:4,column:29}},loc:{start:{line:4,column:34},end:{line:7,column:5}},line:4}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},f:{"0":0,"1":0},b:{},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/business/abstract-business.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/business/abstract-business.ts"],names:[],mappings:";;AAEA;IAIE,0BAAY,EAAiC;YAAhC,kBAAM;QACjB,IAAI,CAAC,MAAM,GAAG,MAAM,CAAC;IACvB,CAAC;IACH,uBAAC;AAAD,CAAC,AAPD,IAOC;AAED,kBAAe,gBAAgB,CAAC",sourcesContent:["import WakandaClient from '../wakanda-client';\n\nabstract class AbstractBusiness {\n\n  public wakJSC: WakandaClient;\n\n  constructor({wakJSC}: {wakJSC: WakandaClient}) {\n    this.wakJSC = wakJSC;\n  }\n}\n\nexport default AbstractBusiness;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_9nf702grz.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var AbstractBusiness=(/** @class */cov_9nf702grz.s[1]++,function(){cov_9nf702grz.f[0]++;function AbstractBusiness(_a){cov_9nf702grz.f[1]++;var wakJSC=(cov_9nf702grz.s[2]++,_a.wakJSC);cov_9nf702grz.s[3]++;this.wakJSC=wakJSC;}cov_9nf702grz.s[4]++;return AbstractBusiness;}());cov_9nf702grz.s[5]++;exports.default=AbstractBusiness;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_93c7njy3i=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/abstract-service.ts",hash="8aa68ac609cfc9ea0f12b467f8b011662d4f446f",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/abstract-service.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:37},end:{line:10,column:3}},"2":{start:{line:5,column:21},end:{line:5,column:30}},"3":{start:{line:6,column:8},end:{line:6,column:29}},"4":{start:{line:7,column:8},end:{line:7,column:45}},"5":{start:{line:9,column:4},end:{line:9,column:27}},"6":{start:{line:11,column:0},end:{line:11,column:34}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:37},end:{line:3,column:38}},loc:{start:{line:3,column:49},end:{line:10,column:1}},line:3},"1":{name:"AbstractService",decl:{start:{line:4,column:13},end:{line:4,column:28}},loc:{start:{line:4,column:33},end:{line:8,column:5}},line:4}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},f:{"0":0,"1":0},b:{},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/abstract-service.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/abstract-service.ts"],names:[],mappings:";;AAGA;IAKE,yBAAY,EAAiC;YAAhC,kBAAM;QACjB,IAAI,CAAC,MAAM,GAAG,MAAM,CAAC;QACrB,IAAI,CAAC,UAAU,GAAG,MAAM,CAAC,WAAW,CAAC;IACvC,CAAC;IACH,sBAAC;AAAD,CAAC,AATD,IASC;AAED,kBAAe,eAAe,CAAC",sourcesContent:["import WakandaClient from '../../wakanda-client';\nimport HttpClient from '../http/http-client';\n\nabstract class AbstractService {\n\n  protected httpClient: HttpClient;\n  protected wakJSC: WakandaClient;\n\n  constructor({wakJSC}: {wakJSC: WakandaClient}) {\n    this.wakJSC = wakJSC;\n    this.httpClient = wakJSC._httpClient;\n  }\n}\n\nexport default AbstractService;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_93c7njy3i.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var AbstractService=(/** @class */cov_93c7njy3i.s[1]++,function(){cov_93c7njy3i.f[0]++;function AbstractService(_a){cov_93c7njy3i.f[1]++;var wakJSC=(cov_93c7njy3i.s[2]++,_a.wakJSC);cov_93c7njy3i.s[3]++;this.wakJSC=wakJSC;cov_93c7njy3i.s[4]++;this.httpClient=wakJSC._httpClient;}cov_93c7njy3i.s[5]++;return AbstractService;}());cov_93c7njy3i.s[6]++;exports.default=AbstractService;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(6);
var call = __webpack_require__(53);
var isArrayIter = __webpack_require__(54);
var anObject = __webpack_require__(5);
var toLength = __webpack_require__(30);
var getIterFn = __webpack_require__(55);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Headers = exports.Headers = function () {
  function Headers() {
    var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Headers);

    this.headers = headers;
  }

  _createClass(Headers, [{
    key: 'add',
    value: function add(key, value) {
      this.headers[key] = value;
    }
  }, {
    key: 'get',
    value: function get(key) {
      return this.headers[key];
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.headers = {};
    }
  }, {
    key: 'configureXHR',
    value: function configureXHR(xhr) {
      var headers = this.headers,
          key;

      for (key in headers) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }

    /**
     * XmlHttpRequest's getAllResponseHeaders() method returns a string of response
     * headers according to the format described here:
     * http://www.w3.org/TR/XMLHttpRequest/#the-getallresponseheaders-method
     * This method parses that string into a user-friendly key/value pair object.
     */

  }], [{
    key: 'parse',
    value: function parse(headerStr) {
      var headers = new Headers();
      if (!headerStr) {
        return headers;
      }

      var headerPairs = headerStr.split('\r\n');
      for (var i = 0; i < headerPairs.length; i++) {
        var headerPair = headerPairs[i];
        // Can't use split() here because it does the wrong thing
        // if the header value has the string ": " in it.
        var index = headerPair.indexOf(': ');
        if (index > 0) {
          var key = headerPair.substring(0, index);
          var val = headerPair.substring(index + 2);
          headers.add(key, val);
        }
      }

      return headers;
    }
  }]);

  return Headers;
}();

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(90);
var defined = __webpack_require__(28);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f;
var has = __webpack_require__(9);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(16);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(86)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(29)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(46);
var $export = __webpack_require__(2);
var redefine = __webpack_require__(11);
var hide = __webpack_require__(10);
var has = __webpack_require__(9);
var Iterators = __webpack_require__(15);
var $iterCreate = __webpack_require__(87);
var setToStringTag = __webpack_require__(23);
var getPrototypeOf = __webpack_require__(93);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(27);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(49)('keys');
var uid = __webpack_require__(21);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(11);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(12);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_12nlw4lqcp=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/presentation/dataclass.ts",hash="b7395d59ce1b0cd51fcb3c24fbf6ae89466a70b6",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/presentation/dataclass.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:31},end:{line:22,column:3}},"12":{start:{line:15,column:19},end:{line:15,column:26}},"13":{start:{line:15,column:45},end:{line:15,column:62}},"14":{start:{line:15,column:77},end:{line:15,column:90}},"15":{start:{line:15,column:102},end:{line:15,column:112}},"16":{start:{line:16,column:8},end:{line:16,column:25}},"17":{start:{line:17,column:8},end:{line:17,column:45}},"18":{start:{line:18,column:8},end:{line:18,column:37}},"19":{start:{line:19,column:8},end:{line:19,column:31}},"20":{start:{line:21,column:4},end:{line:21,column:21}},"21":{start:{line:23,column:0},end:{line:23,column:30}},"22":{start:{line:24,column:31},end:{line:34,column:3}},"23":{start:{line:26,column:19},end:{line:26,column:26}},"24":{start:{line:26,column:35},end:{line:26,column:42}},"25":{start:{line:26,column:55},end:{line:26,column:66}},"26":{start:{line:26,column:75},end:{line:26,column:82}},"27":{start:{line:26,column:97},end:{line:26,column:110}},"28":{start:{line:27,column:8},end:{line:27,column:25}},"29":{start:{line:28,column:8},end:{line:28,column:25}},"30":{start:{line:29,column:8},end:{line:29,column:42}},"31":{start:{line:30,column:8},end:{line:30,column:25}},"32":{start:{line:31,column:8},end:{line:31,column:37}},"33":{start:{line:33,column:4},end:{line:33,column:21}},"34":{start:{line:35,column:0},end:{line:35,column:30}},"35":{start:{line:36,column:38},end:{line:42,column:12}},"36":{start:{line:37,column:4},end:{line:37,column:40}},"37":{start:{line:39,column:8},end:{line:39,column:72}},"38":{start:{line:41,column:4},end:{line:41,column:28}},"39":{start:{line:43,column:0},end:{line:43,column:44}},"40":{start:{line:44,column:41},end:{line:53,column:12}},"41":{start:{line:45,column:4},end:{line:45,column:43}},"42":{start:{line:47,column:19},end:{line:47,column:26}},"43":{start:{line:47,column:35},end:{line:47,column:42}},"44":{start:{line:47,column:55},end:{line:47,column:66}},"45":{start:{line:47,column:75},end:{line:47,column:82}},"46":{start:{line:47,column:97},end:{line:47,column:110}},"47":{start:{line:48,column:20},end:{line:48,column:105}},"48":{start:{line:49,column:8},end:{line:49,column:38}},"49":{start:{line:50,column:8},end:{line:50,column:21}},"50":{start:{line:52,column:4},end:{line:52,column:31}},"51":{start:{line:54,column:0},end:{line:54,column:50}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:13,column:31},end:{line:13,column:32}},loc:{start:{line:13,column:43},end:{line:22,column:1}},line:13},"6":{name:"DataClass",decl:{start:{line:14,column:13},end:{line:14,column:22}},loc:{start:{line:14,column:27},end:{line:20,column:5}},line:14},"7":{name:"(anonymous_7)",decl:{start:{line:24,column:31},end:{line:24,column:32}},loc:{start:{line:24,column:43},end:{line:34,column:1}},line:24},"8":{name:"Attribute",decl:{start:{line:25,column:13},end:{line:25,column:22}},loc:{start:{line:25,column:27},end:{line:32,column:5}},line:25},"9":{name:"(anonymous_9)",decl:{start:{line:36,column:38},end:{line:36,column:39}},loc:{start:{line:36,column:56},end:{line:42,column:1}},line:36},"10":{name:"AttributeRelated",decl:{start:{line:38,column:13},end:{line:38,column:29}},loc:{start:{line:38,column:32},end:{line:40,column:5}},line:38},"11":{name:"(anonymous_11)",decl:{start:{line:44,column:41},end:{line:44,column:42}},loc:{start:{line:44,column:59},end:{line:53,column:1}},line:44},"12":{name:"AttributeCollection",decl:{start:{line:46,column:13},end:{line:46,column:32}},loc:{start:{line:46,column:37},end:{line:51,column:5}},line:46}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:39,column:15},end:{line:39,column:71}},type:"binary-expr",locations:[{start:{line:39,column:15},end:{line:39,column:30}},{start:{line:39,column:34},end:{line:39,column:63}},{start:{line:39,column:67},end:{line:39,column:71}}],line:39},"5":{loc:{start:{line:48,column:20},end:{line:48,column:105}},type:"binary-expr",locations:[{start:{line:48,column:20},end:{line:48,column:97}},{start:{line:48,column:101},end:{line:48,column:105}}],line:48}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0,0],"5":[0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/presentation/dataclass.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/presentation/dataclass.ts"],names:[],mappings:";;;;;;;;;;;;AAIA;IAiBE,mBAAY,EAMT;YANU,cAAI,EAAE,kCAAc,EAAE,0BAAU,EAAE,oBAAO;QAQpD,IAAI,CAAC,IAAI,GAAG,IAAI,CAAC;QACjB,IAAI,CAAC,cAAc,GAAG,cAAc,CAAC;QACrC,IAAI,CAAC,UAAU,GAAG,UAAU,CAAC;QAC7B,IAAI,CAAC,OAAO,GAAG,OAAO,CAAC;IACzB,CAAC;IACH,gBAAC;AAAD,CAAC,AA9BD,IA8BC;AA9BY,8BAAS;AAgCtB;IAQE,mBAAY,EACyE;YADxE,cAAI,EAAE,cAAI,EAAE,sBAAQ,EAAE,cAAI,EAAE,0BAAU;QAGjD,IAAI,CAAC,IAAI,GAAG,IAAI,CAAC;QACjB,IAAI,CAAC,IAAI,GAAG,IAAI,CAAC;QACjB,IAAI,CAAC,QAAQ,GAAG,QAAQ,KAAK,IAAI,CAAC;QAClC,IAAI,CAAC,IAAI,GAAG,IAAI,CAAC;QACjB,IAAI,CAAC,UAAU,GAAG,UAAU,CAAC;IAC/B,CAAC;IACH,gBAAC;AAAD,CAAC,AAjBD,IAiBC;AAjBY,8BAAS;AAmBtB;IAAsC,oCAAS;IAA/C;;IAEA,CAAC;IAAD,uBAAC;AAAD,CAAC,AAFD,CAAsC,SAAS,GAE9C;AAFY,4CAAgB;AAI7B;IAAyC,uCAAS;IAIhD,6BAAY,EACwE;YADvE,cAAI,EAAE,cAAI,EAAE,sBAAQ,EAAE,cAAI,EAAE,0BAAU;QAAnD,YAGE,kBAAM,EAAC,IAAI,MAAA,EAAE,IAAI,MAAA,EAAE,QAAQ,UAAA,EAAE,IAAI,MAAA,EAAC,CAAC,SAEpC;QADC,KAAI,CAAC,UAAU,GAAG,UAAU,CAAC;;IAC/B,CAAC;IACH,0BAAC;AAAD,CAAC,AAVD,CAAyC,SAAS,GAUjD;AAVY,kDAAmB",sourcesContent:["import Entity from './entity';\nimport Collection from './collection';\nimport {QueryOption} from './query-option';\n\nexport class DataClass {\n\n  public name: string;\n  public collectionName: string;\n  public attributes: Attribute[];\n  public methods: {\n    entity: string[],\n    collection: string[],\n    dataClass: string[]\n  };\n\n  public find: (id: string|number, options?: QueryOption) => Promise<Entity>;\n  public query: (options?: QueryOption) => Promise<Collection>;\n  public create: (pojo?: any) => Entity;\n\n  [key: string]: any;\n\n  constructor({name, collectionName, attributes, methods}:\n    {\n      name: string,\n      collectionName: string,\n      attributes: Attribute[],\n      methods: {entity: string[], collection: string[], dataClass: string[]}\n    }) {\n\n    this.name = name;\n    this.collectionName = collectionName;\n    this.attributes = attributes;\n    this.methods = methods;\n  }\n}\n\nexport class Attribute {\n\n  public name: string;\n  public type: string;\n  public readOnly: boolean;\n  public kind: string;\n  public simpleDate: boolean;\n\n  constructor({name, type, readOnly, kind, simpleDate}:\n   {name: string, type: string, readOnly?: boolean, kind: string, simpleDate?: boolean}) {\n\n    this.name = name;\n    this.type = type;\n    this.readOnly = readOnly === true;\n    this.kind = kind;\n    this.simpleDate = simpleDate;\n  }\n}\n\nexport class AttributeRelated extends Attribute {\n\n}\n\nexport class AttributeCollection extends Attribute {\n\n  public entityType: string;\n\n  constructor({name, type, readOnly, kind, entityType}:\n    {name: string, type: string, readOnly?: boolean, kind: string, entityType: string}) {\n\n    super({name, type, readOnly, kind});\n    this.entityType = entityType;\n  }\n}\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_12nlw4lqcp.s[0]++,(cov_12nlw4lqcp.b[0][0]++,this)&&(cov_12nlw4lqcp.b[0][1]++,this.__extends)||(cov_12nlw4lqcp.b[0][2]++,function(){cov_12nlw4lqcp.f[0]++;var extendStatics=(cov_12nlw4lqcp.s[1]++,(cov_12nlw4lqcp.b[1][0]++,Object.setPrototypeOf)||(cov_12nlw4lqcp.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_12nlw4lqcp.b[1][2]++,function(d,b){cov_12nlw4lqcp.f[1]++;cov_12nlw4lqcp.s[2]++;d.__proto__=b;})||(cov_12nlw4lqcp.b[1][3]++,function(d,b){cov_12nlw4lqcp.f[2]++;cov_12nlw4lqcp.s[3]++;for(var p in b){cov_12nlw4lqcp.s[4]++;if(b.hasOwnProperty(p)){cov_12nlw4lqcp.b[2][0]++;cov_12nlw4lqcp.s[5]++;d[p]=b[p];}else{cov_12nlw4lqcp.b[2][1]++;}}}));cov_12nlw4lqcp.s[6]++;return function(d,b){cov_12nlw4lqcp.f[3]++;cov_12nlw4lqcp.s[7]++;extendStatics(d,b);function __(){cov_12nlw4lqcp.f[4]++;cov_12nlw4lqcp.s[8]++;this.constructor=d;}cov_12nlw4lqcp.s[9]++;d.prototype=b===null?(cov_12nlw4lqcp.b[3][0]++,Object.create(b)):(cov_12nlw4lqcp.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_12nlw4lqcp.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var DataClass=(/** @class */cov_12nlw4lqcp.s[11]++,function(){cov_12nlw4lqcp.f[5]++;function DataClass(_a){cov_12nlw4lqcp.f[6]++;var name=(cov_12nlw4lqcp.s[12]++,_a.name),collectionName=(cov_12nlw4lqcp.s[13]++,_a.collectionName),attributes=(cov_12nlw4lqcp.s[14]++,_a.attributes),methods=(cov_12nlw4lqcp.s[15]++,_a.methods);cov_12nlw4lqcp.s[16]++;this.name=name;cov_12nlw4lqcp.s[17]++;this.collectionName=collectionName;cov_12nlw4lqcp.s[18]++;this.attributes=attributes;cov_12nlw4lqcp.s[19]++;this.methods=methods;}cov_12nlw4lqcp.s[20]++;return DataClass;}());cov_12nlw4lqcp.s[21]++;exports.DataClass=DataClass;var Attribute=(/** @class */cov_12nlw4lqcp.s[22]++,function(){cov_12nlw4lqcp.f[7]++;function Attribute(_a){cov_12nlw4lqcp.f[8]++;var name=(cov_12nlw4lqcp.s[23]++,_a.name),type=(cov_12nlw4lqcp.s[24]++,_a.type),readOnly=(cov_12nlw4lqcp.s[25]++,_a.readOnly),kind=(cov_12nlw4lqcp.s[26]++,_a.kind),simpleDate=(cov_12nlw4lqcp.s[27]++,_a.simpleDate);cov_12nlw4lqcp.s[28]++;this.name=name;cov_12nlw4lqcp.s[29]++;this.type=type;cov_12nlw4lqcp.s[30]++;this.readOnly=readOnly===true;cov_12nlw4lqcp.s[31]++;this.kind=kind;cov_12nlw4lqcp.s[32]++;this.simpleDate=simpleDate;}cov_12nlw4lqcp.s[33]++;return Attribute;}());cov_12nlw4lqcp.s[34]++;exports.Attribute=Attribute;var AttributeRelated=(/** @class */cov_12nlw4lqcp.s[35]++,function(_super){cov_12nlw4lqcp.f[9]++;cov_12nlw4lqcp.s[36]++;__extends(AttributeRelated,_super);function AttributeRelated(){cov_12nlw4lqcp.f[10]++;cov_12nlw4lqcp.s[37]++;return(cov_12nlw4lqcp.b[4][0]++,_super!==null)&&(cov_12nlw4lqcp.b[4][1]++,_super.apply(this,arguments))||(cov_12nlw4lqcp.b[4][2]++,this);}cov_12nlw4lqcp.s[38]++;return AttributeRelated;}(Attribute));cov_12nlw4lqcp.s[39]++;exports.AttributeRelated=AttributeRelated;var AttributeCollection=(/** @class */cov_12nlw4lqcp.s[40]++,function(_super){cov_12nlw4lqcp.f[11]++;cov_12nlw4lqcp.s[41]++;__extends(AttributeCollection,_super);function AttributeCollection(_a){cov_12nlw4lqcp.f[12]++;var name=(cov_12nlw4lqcp.s[42]++,_a.name),type=(cov_12nlw4lqcp.s[43]++,_a.type),readOnly=(cov_12nlw4lqcp.s[44]++,_a.readOnly),kind=(cov_12nlw4lqcp.s[45]++,_a.kind),entityType=(cov_12nlw4lqcp.s[46]++,_a.entityType);var _this=(cov_12nlw4lqcp.s[47]++,(cov_12nlw4lqcp.b[5][0]++,_super.call(this,{name:name,type:type,readOnly:readOnly,kind:kind}))||(cov_12nlw4lqcp.b[5][1]++,this));cov_12nlw4lqcp.s[48]++;_this.entityType=entityType;cov_12nlw4lqcp.s[49]++;return _this;}cov_12nlw4lqcp.s[50]++;return AttributeCollection;}(Attribute));cov_12nlw4lqcp.s[51]++;exports.AttributeCollection=AttributeCollection;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_1kbrsnf70m=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/data-access/util.ts",hash="87e79120855dfad0ce7341beecdd85d04758f291",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/util.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:26},end:{line:78,column:3}},"2":{start:{line:6,column:4},end:{line:63,column:6}},"3":{start:{line:7,column:8},end:{line:9,column:9}},"4":{start:{line:8,column:12},end:{line:8,column:22}},"5":{start:{line:10,column:21},end:{line:10,column:35}},"6":{start:{line:10,column:46},end:{line:10,column:60}},"7":{start:{line:10,column:71},end:{line:10,column:85}},"8":{start:{line:10,column:98},end:{line:10,column:114}},"9":{start:{line:10,column:124},end:{line:10,column:137}},"10":{start:{line:10,column:149},end:{line:10,column:164}},"11":{start:{line:10,column:175},end:{line:10,column:189}},"12":{start:{line:10,column:202},end:{line:10,column:218}},"13":{start:{line:11,column:18},end:{line:11,column:21}},"14":{start:{line:12,column:8},end:{line:14,column:9}},"15":{start:{line:13,column:12},end:{line:13,column:40}},"16":{start:{line:15,column:8},end:{line:17,column:9}},"17":{start:{line:16,column:12},end:{line:16,column:49}},"18":{start:{line:18,column:8},end:{line:20,column:9}},"19":{start:{line:19,column:12},end:{line:19,column:42}},"20":{start:{line:21,column:8},end:{line:40,column:9}},"21":{start:{line:22,column:12},end:{line:24,column:13}},"22":{start:{line:23,column:16},end:{line:23,column:66}},"23":{start:{line:25,column:12},end:{line:39,column:13}},"24":{start:{line:26,column:24},end:{line:26,column:27}},"25":{start:{line:27,column:16},end:{line:35,column:17}},"26":{start:{line:28,column:30},end:{line:28,column:42}},"27":{start:{line:29,column:20},end:{line:34,column:21}},"28":{start:{line:30,column:24},end:{line:30,column:48}},"29":{start:{line:33,column:24},end:{line:33,column:39}},"30":{start:{line:36,column:16},end:{line:36,column:35}},"31":{start:{line:37,column:16},end:{line:37,column:25}},"32":{start:{line:38,column:16},end:{line:38,column:48}},"33":{start:{line:41,column:8},end:{line:46,column:9}},"34":{start:{line:42,column:12},end:{line:44,column:13}},"35":{start:{line:43,column:16},end:{line:43,column:70}},"36":{start:{line:45,column:12},end:{line:45,column:41}},"37":{start:{line:47,column:8},end:{line:52,column:9}},"38":{start:{line:48,column:12},end:{line:50,column:13}},"39":{start:{line:49,column:16},end:{line:49,column:67}},"40":{start:{line:51,column:12},end:{line:51,column:37}},"41":{start:{line:53,column:8},end:{line:55,column:9}},"42":{start:{line:54,column:12},end:{line:54,column:40}},"43":{start:{line:56,column:8},end:{line:58,column:9}},"44":{start:{line:57,column:12},end:{line:57,column:44}},"45":{start:{line:59,column:8},end:{line:61,column:9}},"46":{start:{line:60,column:12},end:{line:60,column:41}},"47":{start:{line:62,column:8},end:{line:62,column:38}},"48":{start:{line:64,column:4},end:{line:66,column:6}},"49":{start:{line:65,column:8},end:{line:65,column:67}},"50":{start:{line:67,column:4},end:{line:76,column:6}},"51":{start:{line:68,column:8},end:{line:75,column:9}},"52":{start:{line:69,column:12},end:{line:74,column:13}},"53":{start:{line:70,column:24},end:{line:70,column:36}},"54":{start:{line:71,column:16},end:{line:73,column:17}},"55":{start:{line:72,column:20},end:{line:72,column:44}},"56":{start:{line:77,column:4},end:{line:77,column:16}},"57":{start:{line:79,column:0},end:{line:79,column:23}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:26},end:{line:3,column:27}},loc:{start:{line:3,column:38},end:{line:78,column:1}},line:3},"1":{name:"Util",decl:{start:{line:4,column:13},end:{line:4,column:17}},loc:{start:{line:4,column:20},end:{line:5,column:5}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:6,column:25},end:{line:6,column:26}},loc:{start:{line:6,column:44},end:{line:63,column:5}},line:6},"3":{name:"(anonymous_3)",decl:{start:{line:64,column:21},end:{line:64,column:22}},loc:{start:{line:64,column:34},end:{line:66,column:5}},line:64},"4":{name:"(anonymous_4)",decl:{start:{line:67,column:36},end:{line:67,column:37}},loc:{start:{line:67,column:54},end:{line:76,column:5}},line:67}},branchMap:{"0":{loc:{start:{line:7,column:8},end:{line:9,column:9}},type:"if",locations:[{start:{line:7,column:8},end:{line:9,column:9}},{start:{line:7,column:8},end:{line:9,column:9}}],line:7},"1":{loc:{start:{line:12,column:8},end:{line:14,column:9}},type:"if",locations:[{start:{line:12,column:8},end:{line:14,column:9}},{start:{line:12,column:8},end:{line:14,column:9}}],line:12},"2":{loc:{start:{line:15,column:8},end:{line:17,column:9}},type:"if",locations:[{start:{line:15,column:8},end:{line:17,column:9}},{start:{line:15,column:8},end:{line:17,column:9}}],line:15},"3":{loc:{start:{line:18,column:8},end:{line:20,column:9}},type:"if",locations:[{start:{line:18,column:8},end:{line:20,column:9}},{start:{line:18,column:8},end:{line:20,column:9}}],line:18},"4":{loc:{start:{line:21,column:8},end:{line:40,column:9}},type:"if",locations:[{start:{line:21,column:8},end:{line:40,column:9}},{start:{line:21,column:8},end:{line:40,column:9}}],line:21},"5":{loc:{start:{line:22,column:12},end:{line:24,column:13}},type:"if",locations:[{start:{line:22,column:12},end:{line:24,column:13}},{start:{line:22,column:12},end:{line:24,column:13}}],line:22},"6":{loc:{start:{line:25,column:12},end:{line:39,column:13}},type:"if",locations:[{start:{line:25,column:12},end:{line:39,column:13}},{start:{line:25,column:12},end:{line:39,column:13}}],line:25},"7":{loc:{start:{line:29,column:20},end:{line:34,column:21}},type:"if",locations:[{start:{line:29,column:20},end:{line:34,column:21}},{start:{line:29,column:20},end:{line:34,column:21}}],line:29},"8":{loc:{start:{line:41,column:8},end:{line:46,column:9}},type:"if",locations:[{start:{line:41,column:8},end:{line:46,column:9}},{start:{line:41,column:8},end:{line:46,column:9}}],line:41},"9":{loc:{start:{line:42,column:12},end:{line:44,column:13}},type:"if",locations:[{start:{line:42,column:12},end:{line:44,column:13}},{start:{line:42,column:12},end:{line:44,column:13}}],line:42},"10":{loc:{start:{line:47,column:8},end:{line:52,column:9}},type:"if",locations:[{start:{line:47,column:8},end:{line:52,column:9}},{start:{line:47,column:8},end:{line:52,column:9}}],line:47},"11":{loc:{start:{line:48,column:12},end:{line:50,column:13}},type:"if",locations:[{start:{line:48,column:12},end:{line:50,column:13}},{start:{line:48,column:12},end:{line:50,column:13}}],line:48},"12":{loc:{start:{line:53,column:8},end:{line:55,column:9}},type:"if",locations:[{start:{line:53,column:8},end:{line:55,column:9}},{start:{line:53,column:8},end:{line:55,column:9}}],line:53},"13":{loc:{start:{line:56,column:8},end:{line:58,column:9}},type:"if",locations:[{start:{line:56,column:8},end:{line:58,column:9}},{start:{line:56,column:8},end:{line:58,column:9}}],line:56},"14":{loc:{start:{line:59,column:8},end:{line:61,column:9}},type:"if",locations:[{start:{line:59,column:8},end:{line:61,column:9}},{start:{line:59,column:8},end:{line:61,column:9}}],line:59},"15":{loc:{start:{line:59,column:12},end:{line:59,column:44}},type:"binary-expr",locations:[{start:{line:59,column:12},end:{line:59,column:26}},{start:{line:59,column:30},end:{line:59,column:44}}],line:59},"16":{loc:{start:{line:62,column:15},end:{line:62,column:37}},type:"cond-expr",locations:[{start:{line:62,column:29},end:{line:62,column:31}},{start:{line:62,column:34},end:{line:62,column:37}}],line:62},"17":{loc:{start:{line:65,column:15},end:{line:65,column:66}},type:"binary-expr",locations:[{start:{line:65,column:15},end:{line:65,column:36}},{start:{line:65,column:40},end:{line:65,column:49}},{start:{line:65,column:53},end:{line:65,column:66}}],line:65},"18":{loc:{start:{line:69,column:12},end:{line:74,column:13}},type:"if",locations:[{start:{line:69,column:12},end:{line:74,column:13}},{start:{line:69,column:12},end:{line:74,column:13}}],line:69},"19":{loc:{start:{line:71,column:16},end:{line:73,column:17}},type:"if",locations:[{start:{line:71,column:16},end:{line:73,column:17}},{start:{line:71,column:16},end:{line:73,column:17}}],line:71},"20":{loc:{start:{line:71,column:20},end:{line:71,column:59}},type:"binary-expr",locations:[{start:{line:71,column:20},end:{line:71,column:21}},{start:{line:71,column:25},end:{line:71,column:37}},{start:{line:71,column:41},end:{line:71,column:59}}],line:71}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0,0],"18":[0,0],"19":[0,0],"20":[0,0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/util.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/data-access/util.ts"],names:[],mappings:"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",sourcesContent:["import {QueryOption} from '../presentation/query-option';\n\nclass Util {\n  public static handleOptions(options: QueryOption) {\n\n    if (!options) {\n      return '';\n    }\n\n    let {\n      select,\n      filter,\n      params,\n      pageSize,\n      start,\n      orderBy,\n      method,\n      emMethod\n    } = options;\n\n    let ret = '?';\n\n    if (select) {\n      ret += '&$expand=' + select;\n    }\n\n    if (filter) {\n      ret += '&$filter=\\\"' + filter + '\\\"';\n    }\n\n    if (orderBy) {\n      ret += '&$orderby=' + orderBy;\n    }\n\n    if (params) {\n      if (!Array.isArray(params)) {\n        throw new Error('params option must be an array');\n      }\n\n      if (params.length > 0) {\n        let p = '[';\n\n        for (let elt of params) {\n          if (typeof elt === 'string') {\n            p += '\\\"' + elt + '\\\",';\n          }\n          else {\n            p += elt + ',';\n          }\n        }\n\n        p   = p.slice(0, -1);\n        p   += ']';\n        ret += '&$params=\\'' + p + '\\'';\n      }\n    }\n\n    if (pageSize) {\n      if (!this.isInteger(pageSize)) {\n        throw new Error('pageSize option must be an integer');\n      }\n\n      ret += '&$limit=' + pageSize;\n    }\n\n    if (start) {\n      if (!this.isInteger(start)) {\n        throw new Error('start option must be an integer');\n      }\n\n      ret += '&$skip=' + start;\n    }\n\n    if (method) {\n      ret += '&$method=' + method;\n    }\n\n    if (emMethod) {\n      ret += '&$emMethod=' + emMethod;\n    }\n\n    if (ret.length > 1 && ret[1] === '&') {\n      ret = ret.replace('?&', '?');\n    }\n\n    return ret === '?' ? '' : ret;\n  }\n\n  public static isInteger(n: any): boolean {\n    return typeof n === 'number' && !isNaN(n) && (n % 1) === 0;\n  }\n\n  public static removeRestInfoFromEntity(entity: any): void {\n    for (let prop in entity) {\n      if (Object.prototype.hasOwnProperty.call(entity, prop)) {\n        let p = entity[prop];\n        if (p && p.__deferred && p.__deferred.__KEY) { //Do not remove uri for collection\n          delete p.__deferred.uri;\n        }\n      }\n    }\n  }\n}\n\nexport default Util;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1kbrsnf70m.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var Util=(/** @class */cov_1kbrsnf70m.s[1]++,function(){cov_1kbrsnf70m.f[0]++;function Util(){cov_1kbrsnf70m.f[1]++;}cov_1kbrsnf70m.s[2]++;Util.handleOptions=function(options){cov_1kbrsnf70m.f[2]++;cov_1kbrsnf70m.s[3]++;if(!options){cov_1kbrsnf70m.b[0][0]++;cov_1kbrsnf70m.s[4]++;return'';}else{cov_1kbrsnf70m.b[0][1]++;}var select=(cov_1kbrsnf70m.s[5]++,options.select),filter=(cov_1kbrsnf70m.s[6]++,options.filter),params=(cov_1kbrsnf70m.s[7]++,options.params),pageSize=(cov_1kbrsnf70m.s[8]++,options.pageSize),start=(cov_1kbrsnf70m.s[9]++,options.start),orderBy=(cov_1kbrsnf70m.s[10]++,options.orderBy),method=(cov_1kbrsnf70m.s[11]++,options.method),emMethod=(cov_1kbrsnf70m.s[12]++,options.emMethod);var ret=(cov_1kbrsnf70m.s[13]++,'?');cov_1kbrsnf70m.s[14]++;if(select){cov_1kbrsnf70m.b[1][0]++;cov_1kbrsnf70m.s[15]++;ret+='&$expand='+select;}else{cov_1kbrsnf70m.b[1][1]++;}cov_1kbrsnf70m.s[16]++;if(filter){cov_1kbrsnf70m.b[2][0]++;cov_1kbrsnf70m.s[17]++;ret+='&$filter=\"'+filter+'\"';}else{cov_1kbrsnf70m.b[2][1]++;}cov_1kbrsnf70m.s[18]++;if(orderBy){cov_1kbrsnf70m.b[3][0]++;cov_1kbrsnf70m.s[19]++;ret+='&$orderby='+orderBy;}else{cov_1kbrsnf70m.b[3][1]++;}cov_1kbrsnf70m.s[20]++;if(params){cov_1kbrsnf70m.b[4][0]++;cov_1kbrsnf70m.s[21]++;if(!Array.isArray(params)){cov_1kbrsnf70m.b[5][0]++;cov_1kbrsnf70m.s[22]++;throw new Error('params option must be an array');}else{cov_1kbrsnf70m.b[5][1]++;}cov_1kbrsnf70m.s[23]++;if(params.length>0){cov_1kbrsnf70m.b[6][0]++;var p=(cov_1kbrsnf70m.s[24]++,'[');cov_1kbrsnf70m.s[25]++;for(var _i=0,params_1=params;_i<params_1.length;_i++){var elt=(cov_1kbrsnf70m.s[26]++,params_1[_i]);cov_1kbrsnf70m.s[27]++;if(typeof elt==='string'){cov_1kbrsnf70m.b[7][0]++;cov_1kbrsnf70m.s[28]++;p+='\"'+elt+'\",';}else{cov_1kbrsnf70m.b[7][1]++;cov_1kbrsnf70m.s[29]++;p+=elt+',';}}cov_1kbrsnf70m.s[30]++;p=p.slice(0,-1);cov_1kbrsnf70m.s[31]++;p+=']';cov_1kbrsnf70m.s[32]++;ret+='&$params=\''+p+'\'';}else{cov_1kbrsnf70m.b[6][1]++;}}else{cov_1kbrsnf70m.b[4][1]++;}cov_1kbrsnf70m.s[33]++;if(pageSize){cov_1kbrsnf70m.b[8][0]++;cov_1kbrsnf70m.s[34]++;if(!this.isInteger(pageSize)){cov_1kbrsnf70m.b[9][0]++;cov_1kbrsnf70m.s[35]++;throw new Error('pageSize option must be an integer');}else{cov_1kbrsnf70m.b[9][1]++;}cov_1kbrsnf70m.s[36]++;ret+='&$limit='+pageSize;}else{cov_1kbrsnf70m.b[8][1]++;}cov_1kbrsnf70m.s[37]++;if(start){cov_1kbrsnf70m.b[10][0]++;cov_1kbrsnf70m.s[38]++;if(!this.isInteger(start)){cov_1kbrsnf70m.b[11][0]++;cov_1kbrsnf70m.s[39]++;throw new Error('start option must be an integer');}else{cov_1kbrsnf70m.b[11][1]++;}cov_1kbrsnf70m.s[40]++;ret+='&$skip='+start;}else{cov_1kbrsnf70m.b[10][1]++;}cov_1kbrsnf70m.s[41]++;if(method){cov_1kbrsnf70m.b[12][0]++;cov_1kbrsnf70m.s[42]++;ret+='&$method='+method;}else{cov_1kbrsnf70m.b[12][1]++;}cov_1kbrsnf70m.s[43]++;if(emMethod){cov_1kbrsnf70m.b[13][0]++;cov_1kbrsnf70m.s[44]++;ret+='&$emMethod='+emMethod;}else{cov_1kbrsnf70m.b[13][1]++;}cov_1kbrsnf70m.s[45]++;if((cov_1kbrsnf70m.b[15][0]++,ret.length>1)&&(cov_1kbrsnf70m.b[15][1]++,ret[1]==='&')){cov_1kbrsnf70m.b[14][0]++;cov_1kbrsnf70m.s[46]++;ret=ret.replace('?&','?');}else{cov_1kbrsnf70m.b[14][1]++;}cov_1kbrsnf70m.s[47]++;return ret==='?'?(cov_1kbrsnf70m.b[16][0]++,''):(cov_1kbrsnf70m.b[16][1]++,ret);};cov_1kbrsnf70m.s[48]++;Util.isInteger=function(n){cov_1kbrsnf70m.f[3]++;cov_1kbrsnf70m.s[49]++;return(cov_1kbrsnf70m.b[17][0]++,typeof n==='number')&&(cov_1kbrsnf70m.b[17][1]++,!isNaN(n))&&(cov_1kbrsnf70m.b[17][2]++,n%1===0);};cov_1kbrsnf70m.s[50]++;Util.removeRestInfoFromEntity=function(entity){cov_1kbrsnf70m.f[4]++;cov_1kbrsnf70m.s[51]++;for(var prop in entity){cov_1kbrsnf70m.s[52]++;if(Object.prototype.hasOwnProperty.call(entity,prop)){cov_1kbrsnf70m.b[18][0]++;var p=(cov_1kbrsnf70m.s[53]++,entity[prop]);cov_1kbrsnf70m.s[54]++;if((cov_1kbrsnf70m.b[20][0]++,p)&&(cov_1kbrsnf70m.b[20][1]++,p.__deferred)&&(cov_1kbrsnf70m.b[20][2]++,p.__deferred.__KEY)){cov_1kbrsnf70m.b[19][0]++;cov_1kbrsnf70m.s[55]++;delete p.__deferred.uri;}else{cov_1kbrsnf70m.b[19][1]++;}}else{cov_1kbrsnf70m.b[18][1]++;}}};cov_1kbrsnf70m.s[56]++;return Util;}());cov_1kbrsnf70m.s[57]++;exports.default=Util;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_htatvu14d=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/presentation/entity.ts",hash="1b44d18da11bb78f13f80ded7c87652ca564e571",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/presentation/entity.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:28},end:{line:16,column:3}},"2":{start:{line:5,column:24},end:{line:5,column:30}},"3":{start:{line:5,column:43},end:{line:5,column:54}},"4":{start:{line:5,column:68},end:{line:5,column:80}},"5":{start:{line:6,column:8},end:{line:6,column:30}},"6":{start:{line:7,column:8},end:{line:7,column:43}},"7":{start:{line:8,column:8},end:{line:13,column:11}},"8":{start:{line:15,column:4},end:{line:15,column:18}},"9":{start:{line:17,column:0},end:{line:17,column:25}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:28},end:{line:3,column:29}},loc:{start:{line:3,column:40},end:{line:16,column:1}},line:3},"1":{name:"Entity",decl:{start:{line:4,column:13},end:{line:4,column:19}},loc:{start:{line:4,column:24},end:{line:14,column:5}},line:4}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},f:{"0":0,"1":0},b:{},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/presentation/entity.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/presentation/entity.ts"],names:[],mappings:";;AAGA;IAcE,gBAAY,EAC2C;YAD1C,kBAAc,EAAE,sBAAQ,EAAE,wBAAS;QAG9C,IAAI,CAAC,IAAI,GAAG,SAAS,CAAC;QACtB,IAAI,CAAC,SAAS,GAAG,QAAQ,KAAK,IAAI,CAAC;QAEnC,MAAM,CAAC,cAAc,CAAC,IAAI,EAAE,YAAY,EAAE;YACxC,UAAU,EAAE,KAAK;YACjB,YAAY,EAAE,KAAK;YACnB,QAAQ,EAAE,KAAK;YACf,KAAK,EAAE,SAAS;SACjB,CAAC,CAAC;IACL,CAAC;IACH,aAAC;AAAD,CAAC,AA3BD,IA2BC;AAED,kBAAe,MAAM,CAAC",sourcesContent:["import {DataClass} from './dataclass';\nimport {QueryOption} from './query-option';\n\nclass Entity {\n\n  public _key: string;\n  public _stamp: number;\n  public _deferred: boolean;\n  public _dataClass: DataClass;\n\n  [key: string]: any;\n\n  public save: () => Promise<Entity>;\n  public delete: () => Promise<void>;\n  public fetch: (options?: QueryOption) => Promise<Entity>;\n  public recompute: () => Promise<Entity>;\n\n  constructor({key: entityKey, deferred, dataClass}:\n   {key: string, deferred: boolean, dataClass: DataClass}) {\n\n    this._key = entityKey;\n    this._deferred = deferred === true;\n\n    Object.defineProperty(this, '_dataClass', {\n      enumerable: false,\n      configurable: false,\n      writable: false,\n      value: dataClass\n    });\n  }\n}\n\nexport default Entity;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_htatvu14d.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var Entity=(/** @class */cov_htatvu14d.s[1]++,function(){cov_htatvu14d.f[0]++;function Entity(_a){cov_htatvu14d.f[1]++;var entityKey=(cov_htatvu14d.s[2]++,_a.key),deferred=(cov_htatvu14d.s[3]++,_a.deferred),dataClass=(cov_htatvu14d.s[4]++,_a.dataClass);cov_htatvu14d.s[5]++;this._key=entityKey;cov_htatvu14d.s[6]++;this._deferred=deferred===true;cov_htatvu14d.s[7]++;Object.defineProperty(this,'_dataClass',{enumerable:false,configurable:false,writable:false,value:dataClass});}cov_htatvu14d.s[8]++;return Entity;}());cov_htatvu14d.s[9]++;exports.default=Entity;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_euouhtzg1=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/business/method-adapter.ts",hash="475fd249035a058b3f9c70975a6559810d354cee",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/business/method-adapter.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:35},end:{line:29,column:3}},"2":{start:{line:6,column:4},end:{line:27,column:6}},"3":{start:{line:7,column:8},end:{line:25,column:9}},"4":{start:{line:8,column:27},end:{line:8,column:66}},"5":{start:{line:9,column:12},end:{line:24,column:13}},"6":{start:{line:11,column:16},end:{line:23,column:17}},"7":{start:{line:15,column:20},end:{line:17,column:23}},"8":{start:{line:19,column:21},end:{line:23,column:17}},"9":{start:{line:20,column:20},end:{line:22,column:23}},"10":{start:{line:26,column:8},end:{line:26,column:22}},"11":{start:{line:28,column:4},end:{line:28,column:25}},"12":{start:{line:30,column:0},end:{line:30,column:38}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:35},end:{line:3,column:36}},loc:{start:{line:3,column:47},end:{line:29,column:1}},line:3},"1":{name:"MethodAdapter",decl:{start:{line:4,column:13},end:{line:4,column:26}},loc:{start:{line:4,column:29},end:{line:5,column:5}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:6,column:30},end:{line:6,column:31}},loc:{start:{line:6,column:63},end:{line:27,column:5}},line:6}},branchMap:{"0":{loc:{start:{line:7,column:8},end:{line:25,column:9}},type:"if",locations:[{start:{line:7,column:8},end:{line:25,column:9}},{start:{line:7,column:8},end:{line:25,column:9}}],line:7},"1":{loc:{start:{line:7,column:12},end:{line:7,column:42}},type:"binary-expr",locations:[{start:{line:7,column:12},end:{line:7,column:18}},{start:{line:7,column:22},end:{line:7,column:42}}],line:7},"2":{loc:{start:{line:9,column:12},end:{line:24,column:13}},type:"if",locations:[{start:{line:9,column:12},end:{line:24,column:13}},{start:{line:9,column:12},end:{line:24,column:13}}],line:9},"3":{loc:{start:{line:11,column:16},end:{line:23,column:17}},type:"if",locations:[{start:{line:11,column:16},end:{line:23,column:17}},{start:{line:11,column:16},end:{line:23,column:17}}],line:11},"4":{loc:{start:{line:11,column:20},end:{line:14,column:56}},type:"binary-expr",locations:[{start:{line:11,column:20},end:{line:11,column:57}},{start:{line:12,column:20},end:{line:12,column:60}},{start:{line:13,column:20},end:{line:13,column:57}},{start:{line:14,column:20},end:{line:14,column:56}}],line:11},"5":{loc:{start:{line:19,column:21},end:{line:23,column:17}},type:"if",locations:[{start:{line:19,column:21},end:{line:23,column:17}},{start:{line:19,column:21},end:{line:23,column:17}}],line:19},"6":{loc:{start:{line:19,column:25},end:{line:19,column:55}},type:"binary-expr",locations:[{start:{line:19,column:25},end:{line:19,column:37}},{start:{line:19,column:41},end:{line:19,column:55}}],line:19}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},f:{"0":0,"1":0,"2":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0,0,0],"5":[0,0],"6":[0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/business/method-adapter.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/business/method-adapter.ts"],names:[],mappings:";;AAEA;IAAA;IA2BA,CAAC;IAzBe,uBAAS,GAAvB,UAAwB,MAAW,EAAE,aAA6C;QAChF,EAAE,CAAC,CAAC,MAAM,IAAI,MAAM,CAAC,aAAa,CAAC,CAAC,CAAC;YACnC,IAAI,QAAQ,GAAG,aAAa,CAAC,GAAG,CAAC,MAAM,CAAC,aAAa,CAAC,CAAC;YAEvD,EAAE,CAAC,CAAC,QAAQ,CAAC,CAAC,CAAC;gBACb,iCAAiC;gBACjC,EAAE,CAAC,CAAC,OAAO,MAAM,CAAC,OAAO,KAAK,WAAW;oBACrC,OAAO,MAAM,CAAC,UAAU,KAAK,WAAW;oBACxC,OAAO,MAAM,CAAC,OAAO,KAAK,WAAW;oBACrC,OAAO,MAAM,CAAC,MAAM,KAAK,WAAW,CAAC,CAAC,CAAC;oBACzC,MAAM,CAAC,QAAQ,CAAC,8BAA8B,CAAC;wBAC7C,GAAG,EAAE,MAAM;qBACZ,CAAC,CAAC;gBACL,CAAC;gBAED,IAAI,CAAC,EAAE,CAAC,CAAC,MAAM,CAAC,KAAK,IAAI,MAAM,CAAC,OAAO,CAAC,CAAC,CAAC;oBACxC,MAAM,CAAC,QAAQ,CAAC,0BAA0B,CAAC;wBACzC,GAAG,EAAE,MAAM;qBACZ,CAAC,CAAC;gBACL,CAAC;YACH,CAAC;QACH,CAAC;QAED,MAAM,CAAC,MAAM,CAAC;IAChB,CAAC;IACH,oBAAC;AAAD,CAAC,AA3BD,IA2BC;AA3BY,sCAAa",sourcesContent:["import DataClassBusiness from './dataclass-business';\n\nexport class MethodAdapter {\n\n  public static transform(object: any, dcBusinessMap: Map<string, DataClassBusiness>): any {\n    if (object && object.__entityModel) {\n      let business = dcBusinessMap.get(object.__entityModel);\n\n      if (business) {\n        //Returned object is a collection\n        if (typeof object.__COUNT !== 'undefined' &&\n            typeof object.__ENTITIES !== 'undefined' &&\n            typeof object.__FIRST !== 'undefined' &&\n            typeof object.__SENT !== 'undefined') {\n          return business._presentationCollectionFromDbo({\n            dbo: object\n          });\n        }\n        //Returned object is an entity\n        else if (object.__KEY && object.__STAMP) {\n          return business._presentationEntityFromDbo({\n            dbo: object\n          });\n        }\n      }\n    }\n\n    return object;\n  }\n}\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_euouhtzg1.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var MethodAdapter=(/** @class */cov_euouhtzg1.s[1]++,function(){cov_euouhtzg1.f[0]++;function MethodAdapter(){cov_euouhtzg1.f[1]++;}cov_euouhtzg1.s[2]++;MethodAdapter.transform=function(object,dcBusinessMap){cov_euouhtzg1.f[2]++;cov_euouhtzg1.s[3]++;if((cov_euouhtzg1.b[1][0]++,object)&&(cov_euouhtzg1.b[1][1]++,object.__entityModel)){cov_euouhtzg1.b[0][0]++;var business=(cov_euouhtzg1.s[4]++,dcBusinessMap.get(object.__entityModel));cov_euouhtzg1.s[5]++;if(business){cov_euouhtzg1.b[2][0]++;cov_euouhtzg1.s[6]++;//Returned object is a collection
if((cov_euouhtzg1.b[4][0]++,typeof object.__COUNT!=='undefined')&&(cov_euouhtzg1.b[4][1]++,typeof object.__ENTITIES!=='undefined')&&(cov_euouhtzg1.b[4][2]++,typeof object.__FIRST!=='undefined')&&(cov_euouhtzg1.b[4][3]++,typeof object.__SENT!=='undefined')){cov_euouhtzg1.b[3][0]++;cov_euouhtzg1.s[7]++;return business._presentationCollectionFromDbo({dbo:object});}else{cov_euouhtzg1.b[3][1]++;cov_euouhtzg1.s[8]++;if((cov_euouhtzg1.b[6][0]++,object.__KEY)&&(cov_euouhtzg1.b[6][1]++,object.__STAMP)){cov_euouhtzg1.b[5][0]++;cov_euouhtzg1.s[9]++;return business._presentationEntityFromDbo({dbo:object});}else{cov_euouhtzg1.b[5][1]++;}}}else{cov_euouhtzg1.b[2][1]++;}}else{cov_euouhtzg1.b[0][1]++;}cov_euouhtzg1.s[10]++;return object;};cov_euouhtzg1.s[11]++;return MethodAdapter;}());cov_euouhtzg1.s[12]++;exports.MethodAdapter=MethodAdapter;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_2a0qkrolyj=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/const.ts",hash="a1ece3ab211508237fafcd430de829cee9c172d7",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/const.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:0},end:{line:6,column:2}}},fnMap:{},branchMap:{},s:{"0":0,"1":0},f:{},b:{},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/const.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/const.ts"],names:[],mappings:";;AAAA,kBAAe;IACb,iBAAiB,EAAE,EAAE;IACrB,wBAAwB,EAAE,IAAI,CAAC,SAAS;CACzC,CAAC",sourcesContent:["export default {\n  DEFAULT_PAGE_SIZE: 40,\n  DEFAULT_SESSION_DURATION: 3600 //seconds\n};\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_2a0qkrolyj.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});cov_2a0qkrolyj.s[1]++;exports.default={DEFAULT_PAGE_SIZE:40,DEFAULT_SESSION_DURATION:3600//seconds
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HttpRequestMessage = undefined;
exports.createHttpRequestMessageProcessor = createHttpRequestMessageProcessor;

var _headers = __webpack_require__(18);

var _requestMessageProcessor = __webpack_require__(77);

var _transformers = __webpack_require__(79);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HttpRequestMessage = exports.HttpRequestMessage = function HttpRequestMessage(method, uri, content, headers) {
  _classCallCheck(this, HttpRequestMessage);

  this.method = method;
  this.uri = uri;
  this.content = content;
  this.headers = headers || new _headers.Headers();
  this.responseType = 'json'; //text, arraybuffer, blob, document
};

function createHttpRequestMessageProcessor() {
  return new _requestMessageProcessor.RequestMessageProcessor(XMLHttpRequest, [_transformers.timeoutTransformer, _transformers.credentialsTransformer, _transformers.progressTransformer, _transformers.responseTypeTransformer, _transformers.headerTransformer, _transformers.contentTransformer]);
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JSONPRequestMessage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.createJSONPRequestMessageProcessor = createJSONPRequestMessageProcessor;

var _headers = __webpack_require__(18);

var _requestMessageProcessor = __webpack_require__(77);

var _transformers = __webpack_require__(79);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSONPRequestMessage = exports.JSONPRequestMessage = function JSONPRequestMessage(uri, callbackParameterName) {
  _classCallCheck(this, JSONPRequestMessage);

  this.method = 'JSONP';
  this.uri = uri;
  this.content = undefined;
  this.headers = new _headers.Headers();
  this.responseType = 'jsonp';
  this.callbackParameterName = callbackParameterName;
};

var JSONPXHR = function () {
  function JSONPXHR() {
    _classCallCheck(this, JSONPXHR);
  }

  _createClass(JSONPXHR, [{
    key: 'open',
    value: function open(method, uri) {
      this.method = method;
      this.uri = uri;
      this.callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    }
  }, {
    key: 'send',
    value: function send() {
      var _this = this;

      var uri = this.uri + (this.uri.indexOf('?') >= 0 ? '&' : '?') + this.callbackParameterName + '=' + this.callbackName;

      window[this.callbackName] = function (data) {
        delete window[_this.callbackName];
        document.body.removeChild(script);

        if (_this.status === undefined) {
          _this.status = 200;
          _this.statusText = 'OK';
          _this.response = data;
          _this.onload(_this);
        }
      };

      var script = document.createElement('script');
      script.src = uri;
      document.body.appendChild(script);

      if (this.timeout !== undefined) {
        setTimeout(function () {
          if (_this.status === undefined) {
            _this.status = 0;
            _this.ontimeout(new Error('timeout'));
          }
        }, this.timeout);
      }
    }
  }, {
    key: 'abort',
    value: function abort() {
      if (this.status === undefined) {
        this.status = 0;
        this.onabort(new Error('abort'));
      }
    }
  }, {
    key: 'setRequestHeader',
    value: function setRequestHeader() {}
  }]);

  return JSONPXHR;
}();

function createJSONPRequestMessageProcessor() {
  return new _requestMessageProcessor.RequestMessageProcessor(JSONPXHR, [_transformers.timeoutTransformer, _transformers.callbackParameterNameTransformer]);
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(19)(function () {
  return Object.defineProperty(__webpack_require__(25)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(3);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(5);
var dPs = __webpack_require__(88);
var enumBugKeys = __webpack_require__(50);
var IE_PROTO = __webpack_require__(31)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(25)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(51).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(89);
var enumBugKeys = __webpack_require__(50);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(28);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(15);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(24);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(15);
module.exports = __webpack_require__(4).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(24);
var test = {};
test[__webpack_require__(1)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(11)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(100);
var getKeys = __webpack_require__(48);
var redefine = __webpack_require__(11);
var global = __webpack_require__(0);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(15);
var wks = __webpack_require__(1);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(0);
var dP = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(8);
var SPECIES = __webpack_require__(1)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(21)('meta');
var isObject = __webpack_require__(3);
var has = __webpack_require__(9);
var setDesc = __webpack_require__(7).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(19)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(5);
var aFunction = __webpack_require__(12);
var SPECIES = __webpack_require__(1)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(6);
var invoke = __webpack_require__(45);
var html = __webpack_require__(51);
var cel = __webpack_require__(25);
var global = __webpack_require__(0);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(16)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var isObject = __webpack_require__(3);
var newPromiseCapability = __webpack_require__(35);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_148mv12ydj=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/catalog-base-service.ts",hash="0d8419dc9911d84d3a1a594cf1063db672baaa20",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/catalog-base-service.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:40},end:{line:62,column:3}},"2":{start:{line:6,column:4},end:{line:60,column:6}},"3":{start:{line:7,column:25},end:{line:7,column:38}},"4":{start:{line:7,column:54},end:{line:7,column:68}},"5":{start:{line:7,column:80},end:{line:7,column:90}},"6":{start:{line:8,column:29},end:{line:8,column:32}},"7":{start:{line:9,column:8},end:{line:17,column:9}},"8":{start:{line:10,column:12},end:{line:10,column:49}},"9":{start:{line:12,column:13},end:{line:17,column:9}},"10":{start:{line:13,column:12},end:{line:13,column:37}},"11":{start:{line:16,column:12},end:{line:16,column:79}},"12":{start:{line:18,column:25},end:{line:18,column:53}},"13":{start:{line:19,column:8},end:{line:59,column:11}},"14":{start:{line:21,column:33},end:{line:21,column:35}},"15":{start:{line:22,column:25},end:{line:22,column:45}},"16":{start:{line:23,column:12},end:{line:57,column:13}},"17":{start:{line:24,column:16},end:{line:56,column:17}},"18":{start:{line:25,column:28},end:{line:25,column:34}},"19":{start:{line:26,column:37},end:{line:26,column:39}},"20":{start:{line:27,column:20},end:{line:38,column:21}},"21":{start:{line:28,column:24},end:{line:37,column:25}},"22":{start:{line:29,column:39},end:{line:29,column:45}},"23":{start:{line:30,column:28},end:{line:36,column:31}},"24":{start:{line:39,column:34},end:{line:39,column:36}},"25":{start:{line:40,column:20},end:{line:48,column:21}},"26":{start:{line:41,column:24},end:{line:47,column:25}},"27":{start:{line:42,column:36},end:{line:42,column:42}},"28":{start:{line:43,column:28},end:{line:46,column:31}},"29":{start:{line:49,column:20},end:{line:55,column:23}},"30":{start:{line:58,column:12},end:{line:58,column:34}},"31":{start:{line:61,column:4},end:{line:61,column:30}},"32":{start:{line:63,column:0},end:{line:63,column:48}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:40},end:{line:3,column:41}},loc:{start:{line:3,column:52},end:{line:62,column:1}},line:3},"1":{name:"CatalogBaseService",decl:{start:{line:4,column:13},end:{line:4,column:31}},loc:{start:{line:4,column:34},end:{line:5,column:5}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:6,column:29},end:{line:6,column:30}},loc:{start:{line:6,column:43},end:{line:60,column:5}},line:6},"3":{name:"(anonymous_3)",decl:{start:{line:20,column:18},end:{line:20,column:19}},loc:{start:{line:20,column:33},end:{line:59,column:9}},line:20}},branchMap:{"0":{loc:{start:{line:9,column:8},end:{line:17,column:9}},type:"if",locations:[{start:{line:9,column:8},end:{line:17,column:9}},{start:{line:9,column:8},end:{line:17,column:9}}],line:9},"1":{loc:{start:{line:12,column:13},end:{line:17,column:9}},type:"if",locations:[{start:{line:12,column:13},end:{line:17,column:9}},{start:{line:12,column:13},end:{line:17,column:9}}],line:12},"2":{loc:{start:{line:18,column:25},end:{line:18,column:53}},type:"cond-expr",locations:[{start:{line:18,column:35},end:{line:18,column:48}},{start:{line:18,column:51},end:{line:18,column:53}}],line:18},"3":{loc:{start:{line:23,column:12},end:{line:57,column:13}},type:"if",locations:[{start:{line:23,column:12},end:{line:57,column:13}},{start:{line:23,column:12},end:{line:57,column:13}}],line:23},"4":{loc:{start:{line:27,column:20},end:{line:38,column:21}},type:"if",locations:[{start:{line:27,column:20},end:{line:38,column:21}},{start:{line:27,column:20},end:{line:38,column:21}}],line:27},"5":{loc:{start:{line:35,column:44},end:{line:35,column:103}},type:"cond-expr",locations:[{start:{line:35,column:76},end:{line:35,column:85}},{start:{line:35,column:88},end:{line:35,column:103}}],line:35},"6":{loc:{start:{line:40,column:20},end:{line:48,column:21}},type:"if",locations:[{start:{line:40,column:20},end:{line:48,column:21}},{start:{line:40,column:20},end:{line:48,column:21}}],line:40}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0},f:{"0":0,"1":0,"2":0,"3":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/catalog-base-service.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/catalog-base-service.ts"],names:[],mappings:";;AAGA;IAAA;IA6DA,CAAC;IA3De,sBAAG,GAAjB,UAAkB,EAA4G;YAA3G,0BAAU,EAAE,4BAAW,EAAE,oBAAO;QACjD,IAAI,cAAc,GAAG,GAAG,CAAC;QAEzB,EAAE,CAAC,CAAC,KAAK,CAAC,OAAO,CAAC,WAAW,CAAC,CAAC,CAAC,CAAC;YAC/B,cAAc,IAAI,WAAW,CAAC,IAAI,EAAE,CAAC;QACvC,CAAC;QACD,IAAI,CAAC,EAAE,CAAC,CAAC,OAAO,WAAW,KAAK,WAAW,CAAC,CAAC,CAAC;YAC5C,cAAc,IAAI,MAAM,CAAC;QAC3B,CAAC;QACD,IAAI,CAAC,CAAC;YACJ,MAAM,IAAI,KAAK,CAAC,iDAAiD,CAAC,CAAC;QACrE,CAAC;QAED,IAAI,UAAU,GAAG,OAAO,CAAC,CAAC,CAAC,GAAG,GAAG,OAAO,CAAC,CAAC,CAAC,EAAE,CAAC;QAE9C,MAAM,CAAC,UAAU,CAAC,GAAG,CAAC,EAAC,GAAG,EAAE,gBAAgB,GAAG,UAAU,GAAG,cAAc,EAAC,CAAC;aACzE,IAAI,CAAC,UAAA,GAAG;YACP,IAAI,cAAc,GAAoB,EAAE,CAAC;YACzC,IAAI,MAAM,GAAG,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;YAElC,EAAE,CAAC,CAAC,MAAM,CAAC,WAAW,CAAC,CAAC,CAAC;gBACvB,GAAG,CAAC,CAAU,UAAkB,EAAlB,KAAA,MAAM,CAAC,WAAW,EAAlB,cAAkB,EAAlB,IAAkB;oBAA3B,IAAI,CAAC,SAAA;oBAER,IAAI,UAAU,GAAU,EAAE,CAAC;oBAC3B,EAAE,CAAC,CAAC,CAAC,CAAC,UAAU,CAAC,CAAC,CAAC;wBACjB,GAAG,CAAC,CAAa,UAAY,EAAZ,KAAA,CAAC,CAAC,UAAU,EAAZ,cAAY,EAAZ,IAAY;4BAAxB,IAAI,IAAI,SAAA;4BACX,UAAU,CAAC,IAAI,CAAC;gCACd,IAAI,EAAE,IAAI,CAAC,IAAI;gCACf,IAAI,EAAE,IAAI,CAAC,IAAI;gCACf,IAAI,EAAE,IAAI,CAAC,IAAI;gCACf,QAAQ,EAAE,IAAI,CAAC,QAAQ;gCACvB,UAAU,EAAE,IAAI,CAAC,UAAU,KAAK,SAAS,CAAC,CAAC,CAAC,SAAS,CAAC,CAAC,CAAC,IAAI,CAAC,UAAU;6BACxE,CAAC,CAAC;yBACJ;oBACH,CAAC;oBAED,IAAI,OAAO,GAAU,EAAE,CAAC;oBACxB,EAAE,CAAC,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC;wBACd,GAAG,CAAC,CAAU,UAAS,EAAT,KAAA,CAAC,CAAC,OAAO,EAAT,cAAS,EAAT,IAAS;4BAAlB,IAAI,CAAC,SAAA;4BACR,OAAO,CAAC,IAAI,CAAC;gCACX,IAAI,EAAE,CAAC,CAAC,IAAI;gCACZ,OAAO,EAAE,CAAC,CAAC,OAAO;6BACnB,CAAC,CAAC;yBACJ;oBACH,CAAC;oBAED,cAAc,CAAC,IAAI,CAAC;wBAClB,IAAI,EAAE,CAAC,CAAC,IAAI;wBACZ,cAAc,EAAE,CAAC,CAAC,cAAc;wBAChC,UAAU,YAAA;wBACV,OAAO,SAAA;wBACP,OAAO,EAAE,CAAC,CAAC,OAAO;qBACnB,CAAC,CAAC;iBACJ;YACH,CAAC;YAED,MAAM,CAAC,cAAc,CAAC;QACxB,CAAC,CAAC,CAAC;IACP,CAAC;IACH,yBAAC;AAAD,CAAC,AA7DD,IA6DC;AA7DY,gDAAkB",sourcesContent:["import HttpClient from '../../http/http-client';\nimport {IDataClassDBO} from '../../../business/catalog-business';\n\nexport class CatalogBaseService {\n\n  public static get({httpClient, dataClasses, catalog}: {httpClient: HttpClient, dataClasses?: string|string[], catalog: string}) {\n    let strDataclasses = '/';\n\n    if (Array.isArray(dataClasses)) {\n      strDataclasses += dataClasses.join();\n    }\n    else if (typeof dataClasses === 'undefined') {\n      strDataclasses += '$all';\n    }\n    else {\n      throw new Error('Catalog.get: first parameter should be an array');\n    }\n\n    let strCatalog = catalog ? '/' + catalog : '';\n\n    return httpClient.get({uri: '/rest/$catalog' + strCatalog + strDataclasses})\n      .then(res => {\n        let catalogContent: IDataClassDBO[] = [];\n        let rawObj = JSON.parse(res.body);\n\n        if (rawObj.dataClasses) {\n          for (let d of rawObj.dataClasses) {\n\n            let attributes: any[] = [];\n            if (d.attributes) { //Seriously? :)\n              for (let attr of d.attributes) {\n                attributes.push({\n                  name: attr.name,\n                  kind: attr.kind,\n                  type: attr.type,\n                  readOnly: attr.readOnly,\n                  simpleDate: attr.simpleDate === undefined ? undefined : attr.simpleDate\n                });\n              }\n            }\n\n            let methods: any[] = [];\n            if (d.methods) {\n              for (let m of d.methods) {\n                methods.push({\n                  name: m.name,\n                  applyTo: m.applyTo\n                });\n              }\n            }\n\n            catalogContent.push({\n              name: d.name,\n              collectionName: d.collectionName,\n              attributes,\n              methods,\n              dataURI: d.dataURI\n            });\n          }\n        }\n\n        return catalogContent;\n      });\n  }\n}\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_148mv12ydj.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var CatalogBaseService=(/** @class */cov_148mv12ydj.s[1]++,function(){cov_148mv12ydj.f[0]++;function CatalogBaseService(){cov_148mv12ydj.f[1]++;}cov_148mv12ydj.s[2]++;CatalogBaseService.get=function(_a){cov_148mv12ydj.f[2]++;var httpClient=(cov_148mv12ydj.s[3]++,_a.httpClient),dataClasses=(cov_148mv12ydj.s[4]++,_a.dataClasses),catalog=(cov_148mv12ydj.s[5]++,_a.catalog);var strDataclasses=(cov_148mv12ydj.s[6]++,'/');cov_148mv12ydj.s[7]++;if(Array.isArray(dataClasses)){cov_148mv12ydj.b[0][0]++;cov_148mv12ydj.s[8]++;strDataclasses+=dataClasses.join();}else{cov_148mv12ydj.b[0][1]++;cov_148mv12ydj.s[9]++;if(typeof dataClasses==='undefined'){cov_148mv12ydj.b[1][0]++;cov_148mv12ydj.s[10]++;strDataclasses+='$all';}else{cov_148mv12ydj.b[1][1]++;cov_148mv12ydj.s[11]++;throw new Error('Catalog.get: first parameter should be an array');}}var strCatalog=(cov_148mv12ydj.s[12]++,catalog?(cov_148mv12ydj.b[2][0]++,'/'+catalog):(cov_148mv12ydj.b[2][1]++,''));cov_148mv12ydj.s[13]++;return httpClient.get({uri:'/rest/$catalog'+strCatalog+strDataclasses}).then(function(res){cov_148mv12ydj.f[3]++;var catalogContent=(cov_148mv12ydj.s[14]++,[]);var rawObj=(cov_148mv12ydj.s[15]++,JSON.parse(res.body));cov_148mv12ydj.s[16]++;if(rawObj.dataClasses){cov_148mv12ydj.b[3][0]++;cov_148mv12ydj.s[17]++;for(var _i=0,_a=rawObj.dataClasses;_i<_a.length;_i++){var d=(cov_148mv12ydj.s[18]++,_a[_i]);var attributes=(cov_148mv12ydj.s[19]++,[]);cov_148mv12ydj.s[20]++;if(d.attributes){cov_148mv12ydj.b[4][0]++;cov_148mv12ydj.s[21]++;for(var _b=0,_c=d.attributes;_b<_c.length;_b++){var attr=(cov_148mv12ydj.s[22]++,_c[_b]);cov_148mv12ydj.s[23]++;attributes.push({name:attr.name,kind:attr.kind,type:attr.type,readOnly:attr.readOnly,simpleDate:attr.simpleDate===undefined?(cov_148mv12ydj.b[5][0]++,undefined):(cov_148mv12ydj.b[5][1]++,attr.simpleDate)});}}else{cov_148mv12ydj.b[4][1]++;}var methods=(cov_148mv12ydj.s[24]++,[]);cov_148mv12ydj.s[25]++;if(d.methods){cov_148mv12ydj.b[6][0]++;cov_148mv12ydj.s[26]++;for(var _d=0,_e=d.methods;_d<_e.length;_d++){var m=(cov_148mv12ydj.s[27]++,_e[_d]);cov_148mv12ydj.s[28]++;methods.push({name:m.name,applyTo:m.applyTo});}}else{cov_148mv12ydj.b[6][1]++;}cov_148mv12ydj.s[29]++;catalogContent.push({name:d.name,collectionName:d.collectionName,attributes:attributes,methods:methods,dataURI:d.dataURI});}}else{cov_148mv12ydj.b[3][1]++;}cov_148mv12ydj.s[30]++;return catalogContent;});};cov_148mv12ydj.s[31]++;return CatalogBaseService;}());cov_148mv12ydj.s[32]++;exports.CatalogBaseService=CatalogBaseService;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_6h8aoh0z1=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/entity-base-service.ts",hash="82a21fe7f5eaefd29c553db58cd21c98bab5ad07",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/entity-base-service.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:13},end:{line:3,column:34}},"2":{start:{line:4,column:39},end:{line:60,column:3}},"3":{start:{line:7,column:4},end:{line:22,column:6}},"4":{start:{line:8,column:25},end:{line:8,column:38}},"5":{start:{line:8,column:47},end:{line:8,column:54}},"6":{start:{line:8,column:65},end:{line:8,column:74}},"7":{start:{line:8,column:86},end:{line:8,column:96}},"8":{start:{line:9,column:24},end:{line:9,column:26}},"9":{start:{line:10,column:8},end:{line:12,column:9}},"10":{start:{line:11,column:12},end:{line:11,column:45}},"11":{start:{line:13,column:8},end:{line:21,column:11}},"12":{start:{line:17,column:25},end:{line:17,column:45}},"13":{start:{line:18,column:12},end:{line:18,column:40}},"14":{start:{line:19,column:12},end:{line:19,column:60}},"15":{start:{line:20,column:12},end:{line:20,column:26}},"16":{start:{line:23,column:4},end:{line:34,column:6}},"17":{start:{line:24,column:25},end:{line:24,column:38}},"18":{start:{line:24,column:50},end:{line:24,column:60}},"19":{start:{line:24,column:69},end:{line:24,column:76}},"20":{start:{line:25,column:8},end:{line:33,column:11}},"21":{start:{line:29,column:22},end:{line:29,column:42}},"22":{start:{line:30,column:12},end:{line:30,column:37}},"23":{start:{line:31,column:12},end:{line:31,column:57}},"24":{start:{line:32,column:12},end:{line:32,column:23}},"25":{start:{line:35,column:4},end:{line:44,column:6}},"26":{start:{line:36,column:25},end:{line:36,column:38}},"27":{start:{line:36,column:50},end:{line:36,column:60}},"28":{start:{line:36,column:75},end:{line:36,column:88}},"29":{start:{line:36,column:103},end:{line:36,column:116}},"30":{start:{line:36,column:130},end:{line:36,column:142}},"31":{start:{line:37,column:8},end:{line:43,column:11}},"32":{start:{line:41,column:22},end:{line:41,column:42}},"33":{start:{line:42,column:12},end:{line:42,column:45}},"34":{start:{line:45,column:4},end:{line:58,column:6}},"35":{start:{line:46,column:25},end:{line:46,column:38}},"36":{start:{line:46,column:50},end:{line:46,column:60}},"37":{start:{line:46,column:74},end:{line:46,column:86}},"38":{start:{line:47,column:8},end:{line:57,column:11}},"39":{start:{line:50,column:22},end:{line:50,column:42}},"40":{start:{line:51,column:12},end:{line:56,column:13}},"41":{start:{line:52,column:16},end:{line:52,column:51}},"42":{start:{line:55,column:16},end:{line:55,column:28}},"43":{start:{line:59,column:4},end:{line:59,column:29}},"44":{start:{line:61,column:0},end:{line:61,column:46}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:4,column:39},end:{line:4,column:40}},loc:{start:{line:4,column:51},end:{line:60,column:1}},line:4},"1":{name:"EntityBaseService",decl:{start:{line:5,column:13},end:{line:5,column:30}},loc:{start:{line:5,column:33},end:{line:6,column:5}},line:5},"2":{name:"(anonymous_2)",decl:{start:{line:7,column:29},end:{line:7,column:30}},loc:{start:{line:7,column:43},end:{line:22,column:5}},line:7},"3":{name:"(anonymous_3)",decl:{start:{line:16,column:16},end:{line:16,column:17}},loc:{start:{line:16,column:31},end:{line:21,column:9}},line:16},"4":{name:"(anonymous_4)",decl:{start:{line:23,column:34},end:{line:23,column:35}},loc:{start:{line:23,column:48},end:{line:34,column:5}},line:23},"5":{name:"(anonymous_5)",decl:{start:{line:28,column:16},end:{line:28,column:17}},loc:{start:{line:28,column:31},end:{line:33,column:9}},line:28},"6":{name:"(anonymous_6)",decl:{start:{line:35,column:35},end:{line:35,column:36}},loc:{start:{line:35,column:49},end:{line:44,column:5}},line:35},"7":{name:"(anonymous_7)",decl:{start:{line:40,column:16},end:{line:40,column:17}},loc:{start:{line:40,column:31},end:{line:43,column:9}},line:40},"8":{name:"(anonymous_8)",decl:{start:{line:45,column:31},end:{line:45,column:32}},loc:{start:{line:45,column:45},end:{line:58,column:5}},line:45},"9":{name:"(anonymous_9)",decl:{start:{line:49,column:16},end:{line:49,column:17}},loc:{start:{line:49,column:31},end:{line:57,column:9}},line:49}},branchMap:{"0":{loc:{start:{line:10,column:8},end:{line:12,column:9}},type:"if",locations:[{start:{line:10,column:8},end:{line:12,column:9}},{start:{line:10,column:8},end:{line:12,column:9}}],line:10},"1":{loc:{start:{line:42,column:19},end:{line:42,column:44}},type:"binary-expr",locations:[{start:{line:42,column:19},end:{line:42,column:29}},{start:{line:42,column:33},end:{line:42,column:36}},{start:{line:42,column:40},end:{line:42,column:44}}],line:42},"2":{loc:{start:{line:51,column:12},end:{line:56,column:13}},type:"if",locations:[{start:{line:51,column:12},end:{line:56,column:13}},{start:{line:51,column:12},end:{line:56,column:13}}],line:51},"3":{loc:{start:{line:51,column:18},end:{line:51,column:40}},type:"binary-expr",locations:[{start:{line:51,column:18},end:{line:51,column:21}},{start:{line:51,column:25},end:{line:51,column:40}}],line:51}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},b:{"0":[0,0],"1":[0,0,0],"2":[0,0],"3":[0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/entity-base-service.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/entity-base-service.ts"],names:[],mappings:";;AAEA,mCAA8B;AA6B9B;IAAA;IA6DA,CAAC;IA3De,sBAAI,GAAlB,UAAmB,EAAgD;YAA/C,0BAAU,EAAE,cAAI,EAAE,kBAAM,EAAE,oBAAO;QAEnD,IAAI,SAAS,GAAG,EAAE,CAAC;QACnB,EAAE,CAAC,CAAC,MAAM,CAAC,CAAC,CAAC;YACX,SAAS,GAAG,WAAW,GAAG,MAAM,CAAC;QACnC,CAAC;QAED,MAAM,CAAC,UAAU,CAAC,IAAI,CAAC;YACrB,GAAG,EAAE,OAAO,GAAG,iBAAiB,GAAG,SAAS;YAC5C,IAAI,MAAA;SACL,CAAC,CAAC,IAAI,CAAC,UAAA,GAAG;YACT,IAAI,MAAM,GAAG,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;YAClC,OAAO,MAAM,CAAC,aAAa,CAAC;YAC5B,cAAI,CAAC,wBAAwB,CAAC,MAAM,CAAC,CAAC;YAEtC,MAAM,CAAC,MAAoB,CAAC;QAC9B,CAAC,CAAC,CAAC;IACL,CAAC;IAEa,2BAAS,GAAvB,UAAwB,EAA6C;YAA5C,0BAAU,EAAE,oBAAO,EAAE,cAAI;QAEhD,MAAM,CAAC,UAAU,CAAC,IAAI,CAAC;YACrB,GAAG,EAAE,OAAO,GAAG,+BAA+B;YAC9C,IAAI,MAAA;SACL,CAAC,CAAC,IAAI,CAAC,UAAA,GAAG;YACT,IAAI,GAAG,GAAG,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;YAC/B,OAAO,GAAG,CAAC,aAAa,CAAC;YACzB,cAAI,CAAC,wBAAwB,CAAC,GAAG,CAAC,CAAC;YAEnC,MAAM,CAAC,GAAiB,CAAC;QAC3B,CAAC,CAAC,CAAC;IACL,CAAC;IAEa,4BAAU,GAAxB,UAAyB,EAA2E;YAA1E,0BAAU,EAAE,oBAAO,EAAE,0BAAU,EAAE,0BAAU,EAAE,wBAAS;QAE9E,MAAM,CAAC,UAAU,CAAC,IAAI,CAAC;YACrB,GAAG,EAAE,OAAO,GAAG,GAAG,GAAG,SAAS,GAAG,IAAI,GAAG,UAAU;YAClD,IAAI,EAAE,UAAU;SACjB,CAAC,CAAC,IAAI,CAAC,UAAA,GAAG;YACT,IAAI,GAAG,GAAG,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;YAC/B,MAAM,CAAC,GAAG,CAAC,MAAM,IAAI,GAAG,IAAI,IAAI,CAAC;QACnC,CAAC,CAAC,CAAC;IACL,CAAC;IAEa,wBAAM,GAApB,UAAqB,EAA+C;YAA9C,0BAAU,EAAE,oBAAO,EAAE,wBAAS;QAElD,MAAM,CAAC,UAAU,CAAC,IAAI,CAAC;YACrB,GAAG,EAAE,OAAO,GAAG,GAAG,GAAG,SAAS,GAAG,kBAAkB;SACpD,CAAC,CAAC,IAAI,CAAC,UAAA,GAAG;YACT,IAAI,GAAG,GAAG,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;YAE/B,EAAE,CAAC,CAAC,CAAC,CAAC,GAAG,IAAI,GAAG,CAAC,EAAE,KAAK,IAAI,CAAC,CAAC,CAAC,CAAC;gBAC9B,MAAM,CAAM,OAAO,CAAC,MAAM,CAAC,IAAI,KAAK,EAAE,CAAC,CAAC;YAC1C,CAAC;YACD,IAAI,CAAC,CAAC;gBACJ,MAAM,CAAC,IAAI,CAAC;YACd,CAAC;QACH,CAAC,CAAC,CAAC;IACL,CAAC;IACH,wBAAC;AAAD,CAAC,AA7DD,IA6DC;AA7DY,8CAAiB",sourcesContent:["import HttpClient from '../../http/http-client';\nimport {IEntityDBO} from '../../../business/entity-business';\nimport Util from '../../util';\n\nexport interface ISaveParams {\n  httpClient: HttpClient;\n  data: IEntityDBO;\n  expand: string;\n  dataURI: string;\n}\n\nexport interface IRecomputeParams {\n  httpClient: HttpClient;\n  data: IEntityDBO;\n  dataURI: string;\n}\n\nexport interface ICallMethodParams {\n  httpClient: HttpClient;\n  dataURI: string;\n  methodName: string;\n  parameters: any[];\n  entityKey: string;\n}\n\nexport interface IDeleteParams {\n  httpClient: HttpClient;\n  entityKey: string;\n  dataURI: string;\n}\n\nexport class EntityBaseService {\n\n  public static save({httpClient, data, expand, dataURI}: ISaveParams) {\n\n    let expandStr = '';\n    if (expand) {\n      expandStr = '&$expand=' + expand;\n    }\n\n    return httpClient.post({\n      uri: dataURI + '?$method=update' + expandStr,\n      data\n    }).then(res => {\n      let entity = JSON.parse(res.body);\n      delete entity.__entityModel;\n      Util.removeRestInfoFromEntity(entity);\n\n      return entity as IEntityDBO;\n    });\n  }\n\n  public static recompute({httpClient, dataURI, data}: IRecomputeParams) {\n\n    return httpClient.post({\n      uri: dataURI + '?$method=update&$refresh=true',\n      data\n    }).then(res => {\n      let dbo = JSON.parse(res.body);\n      delete dbo.__entityModel;\n      Util.removeRestInfoFromEntity(dbo);\n\n      return dbo as IEntityDBO;\n    });\n  }\n\n  public static callMethod({httpClient, dataURI, methodName, parameters, entityKey}: ICallMethodParams) {\n\n    return httpClient.post({\n      uri: dataURI + '(' + entityKey + ')/' + methodName,\n      data: parameters\n    }).then(res => {\n      let obj = JSON.parse(res.body);\n      return obj.result || obj || null;\n    });\n  }\n\n  public static delete({httpClient, dataURI, entityKey}: IDeleteParams): Promise<boolean> {\n\n    return httpClient.post({\n      uri: dataURI + '(' + entityKey + ')?$method=delete'\n    }).then(res => {\n      let obj = JSON.parse(res.body);\n\n      if (!(obj && obj.ok === true)) {\n        return <any>Promise.reject(new Error());\n      }\n      else {\n        return true;\n      }\n    });\n  }\n}\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_6h8aoh0z1.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var util_1=(cov_6h8aoh0z1.s[1]++,__webpack_require__(37));var EntityBaseService=(/** @class */cov_6h8aoh0z1.s[2]++,function(){cov_6h8aoh0z1.f[0]++;function EntityBaseService(){cov_6h8aoh0z1.f[1]++;}cov_6h8aoh0z1.s[3]++;EntityBaseService.save=function(_a){cov_6h8aoh0z1.f[2]++;var httpClient=(cov_6h8aoh0z1.s[4]++,_a.httpClient),data=(cov_6h8aoh0z1.s[5]++,_a.data),expand=(cov_6h8aoh0z1.s[6]++,_a.expand),dataURI=(cov_6h8aoh0z1.s[7]++,_a.dataURI);var expandStr=(cov_6h8aoh0z1.s[8]++,'');cov_6h8aoh0z1.s[9]++;if(expand){cov_6h8aoh0z1.b[0][0]++;cov_6h8aoh0z1.s[10]++;expandStr='&$expand='+expand;}else{cov_6h8aoh0z1.b[0][1]++;}cov_6h8aoh0z1.s[11]++;return httpClient.post({uri:dataURI+'?$method=update'+expandStr,data:data}).then(function(res){cov_6h8aoh0z1.f[3]++;var entity=(cov_6h8aoh0z1.s[12]++,JSON.parse(res.body));cov_6h8aoh0z1.s[13]++;delete entity.__entityModel;cov_6h8aoh0z1.s[14]++;util_1.default.removeRestInfoFromEntity(entity);cov_6h8aoh0z1.s[15]++;return entity;});};cov_6h8aoh0z1.s[16]++;EntityBaseService.recompute=function(_a){cov_6h8aoh0z1.f[4]++;var httpClient=(cov_6h8aoh0z1.s[17]++,_a.httpClient),dataURI=(cov_6h8aoh0z1.s[18]++,_a.dataURI),data=(cov_6h8aoh0z1.s[19]++,_a.data);cov_6h8aoh0z1.s[20]++;return httpClient.post({uri:dataURI+'?$method=update&$refresh=true',data:data}).then(function(res){cov_6h8aoh0z1.f[5]++;var dbo=(cov_6h8aoh0z1.s[21]++,JSON.parse(res.body));cov_6h8aoh0z1.s[22]++;delete dbo.__entityModel;cov_6h8aoh0z1.s[23]++;util_1.default.removeRestInfoFromEntity(dbo);cov_6h8aoh0z1.s[24]++;return dbo;});};cov_6h8aoh0z1.s[25]++;EntityBaseService.callMethod=function(_a){cov_6h8aoh0z1.f[6]++;var httpClient=(cov_6h8aoh0z1.s[26]++,_a.httpClient),dataURI=(cov_6h8aoh0z1.s[27]++,_a.dataURI),methodName=(cov_6h8aoh0z1.s[28]++,_a.methodName),parameters=(cov_6h8aoh0z1.s[29]++,_a.parameters),entityKey=(cov_6h8aoh0z1.s[30]++,_a.entityKey);cov_6h8aoh0z1.s[31]++;return httpClient.post({uri:dataURI+'('+entityKey+')/'+methodName,data:parameters}).then(function(res){cov_6h8aoh0z1.f[7]++;var obj=(cov_6h8aoh0z1.s[32]++,JSON.parse(res.body));cov_6h8aoh0z1.s[33]++;return(cov_6h8aoh0z1.b[1][0]++,obj.result)||(cov_6h8aoh0z1.b[1][1]++,obj)||(cov_6h8aoh0z1.b[1][2]++,null);});};cov_6h8aoh0z1.s[34]++;EntityBaseService.delete=function(_a){cov_6h8aoh0z1.f[8]++;var httpClient=(cov_6h8aoh0z1.s[35]++,_a.httpClient),dataURI=(cov_6h8aoh0z1.s[36]++,_a.dataURI),entityKey=(cov_6h8aoh0z1.s[37]++,_a.entityKey);cov_6h8aoh0z1.s[38]++;return httpClient.post({uri:dataURI+'('+entityKey+')?$method=delete'}).then(function(res){cov_6h8aoh0z1.f[9]++;var obj=(cov_6h8aoh0z1.s[39]++,JSON.parse(res.body));cov_6h8aoh0z1.s[40]++;if(!((cov_6h8aoh0z1.b[3][0]++,obj)&&(cov_6h8aoh0z1.b[3][1]++,obj.ok===true))){cov_6h8aoh0z1.b[2][0]++;cov_6h8aoh0z1.s[41]++;return Promise.reject(new Error());}else{cov_6h8aoh0z1.b[2][1]++;cov_6h8aoh0z1.s[42]++;return true;}});};cov_6h8aoh0z1.s[43]++;return EntityBaseService;}());cov_6h8aoh0z1.s[44]++;exports.EntityBaseService=EntityBaseService;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_2axkrltee5=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/presentation/media.ts",hash="8b7ced1dd3dca43d10ce50c2052e6f7d09a46008",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/presentation/media.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:27},end:{line:9,column:3}},"2":{start:{line:5,column:18},end:{line:5,column:24}},"3":{start:{line:6,column:8},end:{line:6,column:23}},"4":{start:{line:8,column:4},end:{line:8,column:17}},"5":{start:{line:10,column:0},end:{line:10,column:24}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:27},end:{line:3,column:28}},loc:{start:{line:3,column:39},end:{line:9,column:1}},line:3},"1":{name:"Media",decl:{start:{line:4,column:13},end:{line:4,column:18}},loc:{start:{line:4,column:23},end:{line:7,column:5}},line:4}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},f:{"0":0,"1":0},b:{},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/presentation/media.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/presentation/media.ts"],names:[],mappings:";;AAEA;IAOE,eAAY,EAAoB;YAAnB,YAAG;QACd,IAAI,CAAC,GAAG,GAAG,GAAG,CAAC;IACjB,CAAC;IACH,YAAC;AAAD,CAAC,AAVD,IAUC;AAED,kBAAe,KAAK,CAAC",sourcesContent:["import Entity from './entity';\n\nclass Media {\n\n  public uri: string;\n\n  public upload: (file: any, mimeType?: string) => Promise<Entity>;\n  public delete: () => Promise<Entity>;\n\n  constructor({uri}: {uri: string}) {\n    this.uri = uri;\n  }\n}\n\nexport default Media;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_2axkrltee5.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var Media=(/** @class */cov_2axkrltee5.s[1]++,function(){cov_2axkrltee5.f[0]++;function Media(_a){cov_2axkrltee5.f[1]++;var uri=(cov_2axkrltee5.s[2]++,_a.uri);cov_2axkrltee5.s[3]++;this.uri=uri;}cov_2axkrltee5.s[4]++;return Media;}());cov_2axkrltee5.s[5]++;exports.default=Media;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_2dz7krvnch=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/business/util.ts",hash="aada98e6aec5ef71a2ecc1e5f63e6e3dede4c509",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/business/util.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:26},end:{line:29,column:3}},"2":{start:{line:6,column:4},end:{line:19,column:6}},"3":{start:{line:9,column:8},end:{line:11,column:9}},"4":{start:{line:10,column:12},end:{line:10,column:24}},"5":{start:{line:12,column:18},end:{line:12,column:39}},"6":{start:{line:13,column:8},end:{line:16,column:9}},"7":{start:{line:15,column:12},end:{line:15,column:24}},"8":{start:{line:17,column:19},end:{line:17,column:107}},"9":{start:{line:18,column:8},end:{line:18,column:20}},"10":{start:{line:20,column:4},end:{line:27,column:6}},"11":{start:{line:22,column:8},end:{line:24,column:9}},"12":{start:{line:23,column:12},end:{line:23,column:24}},"13":{start:{line:25,column:8},end:{line:25,column:105}},"14":{start:{line:26,column:8},end:{line:26,column:29}},"15":{start:{line:28,column:4},end:{line:28,column:16}},"16":{start:{line:30,column:0},end:{line:30,column:23}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:26},end:{line:3,column:27}},loc:{start:{line:3,column:38},end:{line:29,column:1}},line:3},"1":{name:"Util",decl:{start:{line:4,column:13},end:{line:4,column:17}},loc:{start:{line:4,column:20},end:{line:5,column:5}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:6,column:30},end:{line:6,column:31}},loc:{start:{line:6,column:52},end:{line:19,column:5}},line:6},"3":{name:"(anonymous_3)",decl:{start:{line:20,column:33},end:{line:20,column:34}},loc:{start:{line:20,column:49},end:{line:27,column:5}},line:20}},branchMap:{"0":{loc:{start:{line:9,column:8},end:{line:11,column:9}},type:"if",locations:[{start:{line:9,column:8},end:{line:11,column:9}},{start:{line:9,column:8},end:{line:11,column:9}}],line:9},"1":{loc:{start:{line:13,column:8},end:{line:16,column:9}},type:"if",locations:[{start:{line:13,column:8},end:{line:16,column:9}},{start:{line:13,column:8},end:{line:16,column:9}}],line:13},"2":{loc:{start:{line:22,column:8},end:{line:24,column:9}},type:"if",locations:[{start:{line:22,column:8},end:{line:24,column:9}},{start:{line:22,column:8},end:{line:24,column:9}}],line:22}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0},f:{"0":0,"1":0,"2":0,"3":0},b:{"0":[0,0],"1":[0,0],"2":[0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/business/util.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/business/util.ts"],names:[],mappings:";;AAAA;IAAA;IA4BA,CAAC;IA1Be,uBAAkB,GAAhC,UAAiC,UAAkB;QACjD,mEAAmE;QACnE,8BAA8B;QAC9B,EAAE,CAAC,CAAC,CAAC,UAAU,CAAC,CAAC,CAAC;YAChB,MAAM,CAAC,IAAI,CAAC;QACd,CAAC;QAED,IAAI,GAAG,GAAG,UAAU,CAAC,KAAK,CAAC,GAAG,CAAC,CAAC;QAChC,EAAE,CAAC,CAAC,GAAG,CAAC,MAAM,KAAK,CAAC,CAAC,CAAC,CAAC;YACrB,0DAA0D;YAC1D,MAAM,CAAC,IAAI,CAAC;QACd,CAAC;QACD,IAAI,IAAI,GAAS,IAAI,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,QAAQ,CAAC,GAAG,CAAC,CAAC,CAAC,EAAE,EAAE,CAAC,EAAE,QAAQ,CAAC,GAAG,CAAC,CAAC,CAAC,EAAE,EAAE,CAAC,GAAG,CAAC,EAAE,QAAQ,CAAC,GAAG,CAAC,CAAC,CAAC,EAAE,EAAE,CAAC,CAAC,CAAC,CAAC;QAC1G,MAAM,CAAC,IAAI,CAAC;IACd,CAAC;IAEa,0BAAqB,GAAnC,UAAoC,IAAU;QAC5C,IAAI,aAAqB,CAAC;QAE1B,EAAE,CAAC,CAAC,CAAC,CAAC,IAAI,YAAY,IAAI,CAAC,CAAC,CAAC,CAAC;YAC5B,MAAM,CAAC,IAAI,CAAC;QACd,CAAC;QAED,aAAa,GAAG,IAAI,CAAC,UAAU,EAAE,GAAG,GAAG,GAAG,CAAC,IAAI,CAAC,WAAW,EAAE,GAAG,CAAC,CAAC,GAAG,GAAG,GAAG,IAAI,CAAC,cAAc,EAAE,CAAC;QACjG,MAAM,CAAC,aAAa,CAAC;IACvB,CAAC;IACH,WAAC;AAAD,CAAC,AA5BD,IA4BC;AAED,kBAAe,IAAI,CAAC",sourcesContent:["class Util {\n\n  public static wakParseSimpleDate(stringDate: string): Date {\n    // In wakanda, simple date is a date with only year, month and hour\n    // in this format : DD!MM!YYYY\n    if (!stringDate) {\n      return null;\n    }\n\n    let arr = stringDate.split('!');\n    if (arr.length !== 3) {\n      // return null or throw an error, simple date format is ko\n      return null;\n    }\n    let date: Date = new Date(Date.UTC(parseInt(arr[2], 10), parseInt(arr[1], 10) - 1, parseInt(arr[0], 10)));\n    return date;\n  }\n\n  public static wakToStringSimpleDate(date: Date): String {\n    let wakSimpleDate: String;\n\n    if (!(date instanceof Date)) {\n      return null;\n    }\n\n    wakSimpleDate = date.getUTCDate() + '!' + (date.getUTCMonth() + 1) + '!' + date.getUTCFullYear();\n    return wakSimpleDate;\n  }\n}\n\nexport default Util;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_2dz7krvnch.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var Util=(/** @class */cov_2dz7krvnch.s[1]++,function(){cov_2dz7krvnch.f[0]++;function Util(){cov_2dz7krvnch.f[1]++;}cov_2dz7krvnch.s[2]++;Util.wakParseSimpleDate=function(stringDate){cov_2dz7krvnch.f[2]++;cov_2dz7krvnch.s[3]++;// In wakanda, simple date is a date with only year, month and hour
// in this format : DD!MM!YYYY
if(!stringDate){cov_2dz7krvnch.b[0][0]++;cov_2dz7krvnch.s[4]++;return null;}else{cov_2dz7krvnch.b[0][1]++;}var arr=(cov_2dz7krvnch.s[5]++,stringDate.split('!'));cov_2dz7krvnch.s[6]++;if(arr.length!==3){cov_2dz7krvnch.b[1][0]++;cov_2dz7krvnch.s[7]++;// return null or throw an error, simple date format is ko
return null;}else{cov_2dz7krvnch.b[1][1]++;}var date=(cov_2dz7krvnch.s[8]++,new Date(Date.UTC(parseInt(arr[2],10),parseInt(arr[1],10)-1,parseInt(arr[0],10))));cov_2dz7krvnch.s[9]++;return date;};cov_2dz7krvnch.s[10]++;Util.wakToStringSimpleDate=function(date){cov_2dz7krvnch.f[3]++;var wakSimpleDate;cov_2dz7krvnch.s[11]++;if(!(date instanceof Date)){cov_2dz7krvnch.b[2][0]++;cov_2dz7krvnch.s[12]++;return null;}else{cov_2dz7krvnch.b[2][1]++;}cov_2dz7krvnch.s[13]++;wakSimpleDate=date.getUTCDate()+'!'+(date.getUTCMonth()+1)+'!'+date.getUTCFullYear();cov_2dz7krvnch.s[14]++;return wakSimpleDate;};cov_2dz7krvnch.s[15]++;return Util;}());cov_2dz7krvnch.s[16]++;exports.default=Util;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_dbomedbip=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/dataclass-base-service.ts",hash="375305e860eed42a852a2a69476a638644716216",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/dataclass-base-service.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:13},end:{line:3,column:34}},"2":{start:{line:4,column:42},end:{line:63,column:3}},"3":{start:{line:7,column:4},end:{line:22,column:6}},"4":{start:{line:8,column:25},end:{line:8,column:38}},"5":{start:{line:8,column:46},end:{line:8,column:52}},"6":{start:{line:8,column:64},end:{line:8,column:74}},"7":{start:{line:8,column:86},end:{line:8,column:96}},"8":{start:{line:9,column:8},end:{line:11,column:9}},"9":{start:{line:10,column:12},end:{line:10,column:63}},"10":{start:{line:12,column:24},end:{line:12,column:61}},"11":{start:{line:13,column:8},end:{line:21,column:11}},"12":{start:{line:17,column:25},end:{line:17,column:45}},"13":{start:{line:18,column:12},end:{line:18,column:40}},"14":{start:{line:19,column:12},end:{line:19,column:60}},"15":{start:{line:20,column:12},end:{line:20,column:26}},"16":{start:{line:23,column:4},end:{line:41,column:6}},"17":{start:{line:24,column:25},end:{line:24,column:38}},"18":{start:{line:24,column:50},end:{line:24,column:60}},"19":{start:{line:24,column:72},end:{line:24,column:82}},"20":{start:{line:25,column:8},end:{line:25,column:37}},"21":{start:{line:26,column:8},end:{line:28,column:9}},"22":{start:{line:27,column:12},end:{line:27,column:72}},"23":{start:{line:29,column:24},end:{line:29,column:61}},"24":{start:{line:30,column:8},end:{line:40,column:11}},"25":{start:{line:33,column:29},end:{line:33,column:49}},"26":{start:{line:34,column:12},end:{line:34,column:44}},"27":{start:{line:35,column:12},end:{line:38,column:13}},"28":{start:{line:36,column:29},end:{line:36,column:35}},"29":{start:{line:37,column:16},end:{line:37,column:64}},"30":{start:{line:39,column:12},end:{line:39,column:30}},"31":{start:{line:42,column:4},end:{line:51,column:6}},"32":{start:{line:43,column:25},end:{line:43,column:38}},"33":{start:{line:43,column:53},end:{line:43,column:66}},"34":{start:{line:43,column:81},end:{line:43,column:94}},"35":{start:{line:43,column:106},end:{line:43,column:116}},"36":{start:{line:44,column:8},end:{line:50,column:11}},"37":{start:{line:48,column:22},end:{line:48,column:42}},"38":{start:{line:49,column:12},end:{line:49,column:45}},"39":{start:{line:52,column:4},end:{line:61,column:6}},"40":{start:{line:53,column:8},end:{line:60,column:11}},"41":{start:{line:54,column:12},end:{line:59,column:13}},"42":{start:{line:55,column:16},end:{line:55,column:45}},"43":{start:{line:58,column:16},end:{line:58,column:31}},"44":{start:{line:62,column:4},end:{line:62,column:32}},"45":{start:{line:64,column:0},end:{line:64,column:52}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:4,column:42},end:{line:4,column:43}},loc:{start:{line:4,column:54},end:{line:63,column:1}},line:4},"1":{name:"DataClassBaseService",decl:{start:{line:5,column:13},end:{line:5,column:33}},loc:{start:{line:5,column:36},end:{line:6,column:5}},line:5},"2":{name:"(anonymous_2)",decl:{start:{line:7,column:32},end:{line:7,column:33}},loc:{start:{line:7,column:46},end:{line:22,column:5}},line:7},"3":{name:"(anonymous_3)",decl:{start:{line:16,column:18},end:{line:16,column:19}},loc:{start:{line:16,column:33},end:{line:21,column:9}},line:16},"4":{name:"(anonymous_4)",decl:{start:{line:23,column:33},end:{line:23,column:34}},loc:{start:{line:23,column:47},end:{line:41,column:5}},line:23},"5":{name:"(anonymous_5)",decl:{start:{line:32,column:16},end:{line:32,column:17}},loc:{start:{line:32,column:31},end:{line:40,column:9}},line:32},"6":{name:"(anonymous_6)",decl:{start:{line:42,column:38},end:{line:42,column:39}},loc:{start:{line:42,column:52},end:{line:51,column:5}},line:42},"7":{name:"(anonymous_7)",decl:{start:{line:47,column:16},end:{line:47,column:17}},loc:{start:{line:47,column:31},end:{line:50,column:9}},line:47},"8":{name:"(anonymous_8)",decl:{start:{line:52,column:49},end:{line:52,column:50}},loc:{start:{line:52,column:67},end:{line:61,column:5}},line:52},"9":{name:"(anonymous_9)",decl:{start:{line:53,column:26},end:{line:53,column:27}},loc:{start:{line:53,column:45},end:{line:60,column:9}},line:53}},branchMap:{"0":{loc:{start:{line:9,column:8},end:{line:11,column:9}},type:"if",locations:[{start:{line:9,column:8},end:{line:11,column:9}},{start:{line:9,column:8},end:{line:11,column:9}}],line:9},"1":{loc:{start:{line:9,column:12},end:{line:9,column:62}},type:"binary-expr",locations:[{start:{line:9,column:12},end:{line:9,column:35}},{start:{line:9,column:39},end:{line:9,column:62}}],line:9},"2":{loc:{start:{line:26,column:8},end:{line:28,column:9}},type:"if",locations:[{start:{line:26,column:8},end:{line:28,column:9}},{start:{line:26,column:8},end:{line:28,column:9}}],line:26},"3":{loc:{start:{line:49,column:19},end:{line:49,column:44}},type:"binary-expr",locations:[{start:{line:49,column:19},end:{line:49,column:29}},{start:{line:49,column:33},end:{line:49,column:36}},{start:{line:49,column:40},end:{line:49,column:44}}],line:49},"4":{loc:{start:{line:54,column:12},end:{line:59,column:13}},type:"if",locations:[{start:{line:54,column:12},end:{line:59,column:13}},{start:{line:54,column:12},end:{line:59,column:13}}],line:54}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0,0],"4":[0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/dataclass-base-service.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/dataclass-base-service.ts"],names:[],mappings:"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",sourcesContent:["import HttpClient from '../../http/http-client';\nimport {QueryOption} from '../../../presentation/query-option';\nimport {IEntityDBO} from '../../../business/entity-business';\nimport {ICollectionDBO} from '../../../business/collection-business';\nimport Util from '../../util';\n\nexport interface IFindParams {\n  httpClient: HttpClient;\n  key: number|string;\n  options: QueryOption;\n  dataURI: string;\n}\n\nexport interface IQueryParams {\n  httpClient: HttpClient;\n  options: QueryOption;\n  dataURI: string;\n}\n\nexport interface ICallMethodParams {\n  httpClient: HttpClient;\n  methodName: string;\n  parameters: any[];\n  dataURI: string;\n}\n\nexport class DataClassBaseService {\n\n  public static find({httpClient, key, options, dataURI}: IFindParams) {\n\n    if (typeof key !== 'string' && typeof key !== 'number') {\n      throw new Error('DataClass.find: Invalid id type');\n    }\n\n    let optString = Util.handleOptions(options);\n\n    return httpClient.get({\n      uri: dataURI + '(' + key + ')' + optString\n    })\n      .then(res => {\n        let entity = JSON.parse(res.body);\n        delete entity.__entityModel;\n\n        Util.removeRestInfoFromEntity(entity);\n\n        return entity as IEntityDBO;\n      });\n  }\n\n  public static query({httpClient, options, dataURI}: IQueryParams) {\n\n    options.method = 'entityset';\n\n    if (Array.isArray(options.params)) {\n      options.params = this._sanitizeOptionParams(options.params);\n    }\n\n    let optString = Util.handleOptions(options);\n\n    return httpClient.get({\n      uri: dataURI + optString\n    }).then(res => {\n      let collection = JSON.parse(res.body);\n      delete collection.__entityModel;\n\n      for (let entity of collection.__ENTITIES) {\n        Util.removeRestInfoFromEntity(entity);\n      }\n\n      return collection as ICollectionDBO;\n    });\n  }\n\n  public static callMethod({httpClient, methodName, parameters, dataURI}: ICallMethodParams) {\n\n    return httpClient.post({\n      uri: dataURI + '/' + methodName,\n      data: parameters\n    }).then(res => {\n      let obj = JSON.parse(res.body);\n      return obj.result || obj || null;\n    });\n  }\n\n  private static _sanitizeOptionParams(params: any[]): any[] {\n    return params.map(element => {\n      if (element instanceof Date) {\n        return element.toISOString();\n      }\n      else {\n        return element;\n      }\n    });\n  }\n}\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_dbomedbip.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var util_1=(cov_dbomedbip.s[1]++,__webpack_require__(37));var DataClassBaseService=(/** @class */cov_dbomedbip.s[2]++,function(){cov_dbomedbip.f[0]++;function DataClassBaseService(){cov_dbomedbip.f[1]++;}cov_dbomedbip.s[3]++;DataClassBaseService.find=function(_a){cov_dbomedbip.f[2]++;var httpClient=(cov_dbomedbip.s[4]++,_a.httpClient),key=(cov_dbomedbip.s[5]++,_a.key),options=(cov_dbomedbip.s[6]++,_a.options),dataURI=(cov_dbomedbip.s[7]++,_a.dataURI);cov_dbomedbip.s[8]++;if((cov_dbomedbip.b[1][0]++,typeof key!=='string')&&(cov_dbomedbip.b[1][1]++,typeof key!=='number')){cov_dbomedbip.b[0][0]++;cov_dbomedbip.s[9]++;throw new Error('DataClass.find: Invalid id type');}else{cov_dbomedbip.b[0][1]++;}var optString=(cov_dbomedbip.s[10]++,util_1.default.handleOptions(options));cov_dbomedbip.s[11]++;return httpClient.get({uri:dataURI+'('+key+')'+optString}).then(function(res){cov_dbomedbip.f[3]++;var entity=(cov_dbomedbip.s[12]++,JSON.parse(res.body));cov_dbomedbip.s[13]++;delete entity.__entityModel;cov_dbomedbip.s[14]++;util_1.default.removeRestInfoFromEntity(entity);cov_dbomedbip.s[15]++;return entity;});};cov_dbomedbip.s[16]++;DataClassBaseService.query=function(_a){cov_dbomedbip.f[4]++;var httpClient=(cov_dbomedbip.s[17]++,_a.httpClient),options=(cov_dbomedbip.s[18]++,_a.options),dataURI=(cov_dbomedbip.s[19]++,_a.dataURI);cov_dbomedbip.s[20]++;options.method='entityset';cov_dbomedbip.s[21]++;if(Array.isArray(options.params)){cov_dbomedbip.b[2][0]++;cov_dbomedbip.s[22]++;options.params=this._sanitizeOptionParams(options.params);}else{cov_dbomedbip.b[2][1]++;}var optString=(cov_dbomedbip.s[23]++,util_1.default.handleOptions(options));cov_dbomedbip.s[24]++;return httpClient.get({uri:dataURI+optString}).then(function(res){cov_dbomedbip.f[5]++;var collection=(cov_dbomedbip.s[25]++,JSON.parse(res.body));cov_dbomedbip.s[26]++;delete collection.__entityModel;cov_dbomedbip.s[27]++;for(var _i=0,_a=collection.__ENTITIES;_i<_a.length;_i++){var entity=(cov_dbomedbip.s[28]++,_a[_i]);cov_dbomedbip.s[29]++;util_1.default.removeRestInfoFromEntity(entity);}cov_dbomedbip.s[30]++;return collection;});};cov_dbomedbip.s[31]++;DataClassBaseService.callMethod=function(_a){cov_dbomedbip.f[6]++;var httpClient=(cov_dbomedbip.s[32]++,_a.httpClient),methodName=(cov_dbomedbip.s[33]++,_a.methodName),parameters=(cov_dbomedbip.s[34]++,_a.parameters),dataURI=(cov_dbomedbip.s[35]++,_a.dataURI);cov_dbomedbip.s[36]++;return httpClient.post({uri:dataURI+'/'+methodName,data:parameters}).then(function(res){cov_dbomedbip.f[7]++;var obj=(cov_dbomedbip.s[37]++,JSON.parse(res.body));cov_dbomedbip.s[38]++;return(cov_dbomedbip.b[3][0]++,obj.result)||(cov_dbomedbip.b[3][1]++,obj)||(cov_dbomedbip.b[3][2]++,null);});};cov_dbomedbip.s[39]++;DataClassBaseService._sanitizeOptionParams=function(params){cov_dbomedbip.f[8]++;cov_dbomedbip.s[40]++;return params.map(function(element){cov_dbomedbip.f[9]++;cov_dbomedbip.s[41]++;if(element instanceof Date){cov_dbomedbip.b[4][0]++;cov_dbomedbip.s[42]++;return element.toISOString();}else{cov_dbomedbip.b[4][1]++;cov_dbomedbip.s[43]++;return element;}});};cov_dbomedbip.s[44]++;return DataClassBaseService;}());cov_dbomedbip.s[45]++;exports.DataClassBaseService=DataClassBaseService;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_1usmqqjk9f=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/collection-base-service.ts",hash="827ae5da8d67558adc897bd98695db454af9b5ae",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/collection-base-service.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:13},end:{line:3,column:34}},"2":{start:{line:4,column:43},end:{line:56,column:3}},"3":{start:{line:7,column:4},end:{line:33,column:6}},"4":{start:{line:8,column:25},end:{line:8,column:38}},"5":{start:{line:8,column:56},end:{line:8,column:72}},"6":{start:{line:8,column:88},end:{line:8,column:102}},"7":{start:{line:8,column:114},end:{line:8,column:124}},"8":{start:{line:9,column:8},end:{line:13,column:9}},"9":{start:{line:10,column:12},end:{line:12,column:13}},"10":{start:{line:11,column:16},end:{line:11,column:110}},"11":{start:{line:14,column:8},end:{line:14,column:40}},"12":{start:{line:15,column:24},end:{line:15,column:61}},"13":{start:{line:18,column:8},end:{line:20,column:9}},"14":{start:{line:19,column:12},end:{line:19,column:49}},"15":{start:{line:21,column:18},end:{line:21,column:31}},"16":{start:{line:22,column:8},end:{line:32,column:11}},"17":{start:{line:25,column:22},end:{line:25,column:42}},"18":{start:{line:26,column:12},end:{line:26,column:37}},"19":{start:{line:27,column:12},end:{line:30,column:13}},"20":{start:{line:28,column:29},end:{line:28,column:35}},"21":{start:{line:29,column:16},end:{line:29,column:64}},"22":{start:{line:31,column:12},end:{line:31,column:23}},"23":{start:{line:34,column:4},end:{line:54,column:6}},"24":{start:{line:35,column:25},end:{line:35,column:38}},"25":{start:{line:35,column:56},end:{line:35,column:72}},"26":{start:{line:35,column:88},end:{line:35,column:102}},"27":{start:{line:35,column:117},end:{line:35,column:130}},"28":{start:{line:35,column:145},end:{line:35,column:158}},"29":{start:{line:36,column:18},end:{line:36,column:31}},"30":{start:{line:37,column:8},end:{line:46,column:9}},"31":{start:{line:38,column:12},end:{line:38,column:36}},"32":{start:{line:41,column:28},end:{line:44,column:14}},"33":{start:{line:45,column:12},end:{line:45,column:44}},"34":{start:{line:47,column:8},end:{line:53,column:11}},"35":{start:{line:51,column:22},end:{line:51,column:42}},"36":{start:{line:52,column:12},end:{line:52,column:45}},"37":{start:{line:55,column:4},end:{line:55,column:33}},"38":{start:{line:57,column:0},end:{line:57,column:54}},"39":{start:{line:59,column:4},end:{line:59,column:69}},"40":{start:{line:61,column:0},end:{line:61,column:40}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:4,column:43},end:{line:4,column:44}},loc:{start:{line:4,column:55},end:{line:56,column:1}},line:4},"1":{name:"CollectionBaseService",decl:{start:{line:5,column:13},end:{line:5,column:34}},loc:{start:{line:5,column:37},end:{line:6,column:5}},line:5},"2":{name:"(anonymous_2)",decl:{start:{line:7,column:34},end:{line:7,column:35}},loc:{start:{line:7,column:48},end:{line:33,column:5}},line:7},"3":{name:"(anonymous_3)",decl:{start:{line:24,column:16},end:{line:24,column:17}},loc:{start:{line:24,column:31},end:{line:32,column:9}},line:24},"4":{name:"(anonymous_4)",decl:{start:{line:34,column:39},end:{line:34,column:40}},loc:{start:{line:34,column:53},end:{line:54,column:5}},line:34},"5":{name:"(anonymous_5)",decl:{start:{line:50,column:16},end:{line:50,column:17}},loc:{start:{line:50,column:31},end:{line:53,column:9}},line:50},"6":{name:"isEntitySetUri",decl:{start:{line:58,column:9},end:{line:58,column:23}},loc:{start:{line:58,column:29},end:{line:60,column:1}},line:58}},branchMap:{"0":{loc:{start:{line:9,column:8},end:{line:13,column:9}},type:"if",locations:[{start:{line:9,column:8},end:{line:13,column:9}},{start:{line:9,column:8},end:{line:13,column:9}}],line:9},"1":{loc:{start:{line:10,column:12},end:{line:12,column:13}},type:"if",locations:[{start:{line:10,column:12},end:{line:12,column:13}},{start:{line:10,column:12},end:{line:12,column:13}}],line:10},"2":{loc:{start:{line:10,column:16},end:{line:10,column:59}},type:"binary-expr",locations:[{start:{line:10,column:16},end:{line:10,column:30}},{start:{line:10,column:34},end:{line:10,column:59}}],line:10},"3":{loc:{start:{line:18,column:8},end:{line:20,column:9}},type:"if",locations:[{start:{line:18,column:8},end:{line:20,column:9}},{start:{line:18,column:8},end:{line:20,column:9}}],line:18},"4":{loc:{start:{line:37,column:8},end:{line:46,column:9}},type:"if",locations:[{start:{line:37,column:8},end:{line:46,column:9}},{start:{line:37,column:8},end:{line:46,column:9}}],line:37},"5":{loc:{start:{line:52,column:19},end:{line:52,column:44}},type:"binary-expr",locations:[{start:{line:52,column:19},end:{line:52,column:29}},{start:{line:52,column:33},end:{line:52,column:36}},{start:{line:52,column:40},end:{line:52,column:44}}],line:52}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/collection-base-service.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/collection-base-service.ts"],names:[],mappings:";;AAGA,mCAA8B;AAiB9B;IAAA;IA4DA,CAAC;IA1De,2BAAK,GAAnB,UAAoB,EAA+D;YAA9D,0BAAU,EAAE,gCAAa,EAAE,4BAAW,EAAE,oBAAO;QAElE,EAAE,CAAC,CAAC,CAAC,WAAW,CAAC,CAAC,CAAC;YACjB,EAAE,CAAC,CAAC,OAAO,CAAC,MAAM,IAAI,OAAO,CAAC,MAAM,CAAC,MAAM,GAAG,CAAC,CAAC,CAAC,CAAC;gBAChD,MAAM,IAAI,KAAK,CAAC,4EAA4E,CAAC,CAAC;YAChG,CAAC;QACH,CAAC;QAED,OAAO,CAAC,MAAM,GAAG,cAAc,CAAC;QAEhC,IAAI,SAAS,GAAG,cAAI,CAAC,aAAa,CAAC,OAAO,CAAC,CAAC;QAE5C,iFAAiF;QACjF,6CAA6C;QAC7C,EAAE,CAAC,CAAC,CAAC,WAAW,CAAC,CAAC,CAAC;YACjB,SAAS,GAAG,GAAG,GAAG,SAAS,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC;QACvC,CAAC;QAED,IAAI,GAAG,GAAG,aAAa,CAAC;QAExB,MAAM,CAAC,UAAU,CAAC,GAAG,CAAC;YACpB,GAAG,EAAE,GAAG,GAAG,SAAS;SACrB,CAAC,CAAC,IAAI,CAAC,UAAA,GAAG;YACT,IAAI,GAAG,GAAG,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;YAE/B,OAAO,GAAG,CAAC,aAAa,CAAC;YAEzB,GAAG,CAAC,CAAe,UAAc,EAAd,KAAA,GAAG,CAAC,UAAU,EAAd,cAAc,EAAd,IAAc;gBAA5B,IAAI,MAAM,SAAA;gBACb,cAAI,CAAC,wBAAwB,CAAC,MAAM,CAAC,CAAC;aACvC;YAED,MAAM,CAAC,GAAqB,CAAC;QAC/B,CAAC,CAAC,CAAC;IACL,CAAC;IAEa,gCAAU,GAAxB,UAAyB,EAAmF;YAAlF,0BAAU,EAAE,gCAAa,EAAE,4BAAW,EAAE,0BAAU,EAAE,0BAAU;QACtF,IAAI,GAAG,GAAG,aAAa,CAAC;QAExB,EAAE,CAAC,CAAC,WAAW,CAAC,CAAC,CAAC;YAChB,GAAG,IAAI,GAAG,GAAG,UAAU,CAAC;QAC1B,CAAC;QACD,IAAI,CAAC,CAAC;YACJ,IAAI,SAAS,GAAG,cAAI,CAAC,aAAa,CAAC;gBACjC,MAAM,EAAE,cAAc;gBACtB,QAAQ,EAAE,UAAU;aACrB,CAAC,CAAC;YAEH,GAAG,IAAI,GAAG,GAAG,SAAS,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC;QAClC,CAAC;QAED,MAAM,CAAC,UAAU,CAAC,IAAI,CAAC;YACnB,GAAG,KAAA;YACH,IAAI,EAAE,UAAU;SACjB,CAAC,CAAC,IAAI,CAAC,UAAC,GAAQ;YACf,IAAI,GAAG,GAAG,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;YAC/B,MAAM,CAAC,GAAG,CAAC,MAAM,IAAI,GAAG,IAAI,IAAI,CAAC;QACnC,CAAC,CAAC,CAAC;IACP,CAAC;IACH,4BAAC;AAAD,CAAC,AA5DD,IA4DC;AA5DY,sDAAqB;AA8DlC,wBAA+B,GAAW;IACxC,MAAM,CAAC,+CAA+C,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC;AACnE,CAAC;AAFD,wCAEC",sourcesContent:["import HttpClient from '../../http/http-client';\nimport {QueryOption} from '../../../presentation/query-option';\nimport {ICollectionDBO} from '../../../business/collection-business';\nimport Util from '../../util';\n\nexport interface IBaseParams {\n  httpClient: HttpClient;\n  collectionUri: string;\n  isEntitySet: boolean;\n}\n\nexport interface IFetchParams extends IBaseParams {\n  options: QueryOption;\n}\n\nexport interface ICallMethodParams extends IBaseParams {\n  methodName: string;\n  parameters: any[];\n}\n\nexport class CollectionBaseService {\n\n  public static fetch({httpClient, collectionUri, isEntitySet, options}: IFetchParams) {\n\n    if (!isEntitySet) {\n      if (options.select && options.select.length > 0) {\n        throw new Error('Collection.fetch: option select is not allowed when collection is deferred');\n      }\n    }\n\n    options.method = 'subentityset';\n\n    let optString = Util.handleOptions(options);\n\n    //Remove the first ? on optString if it's not an entitySet (because there is also\n    //?$expand=... on collectionUri), and add a &\n    if (!isEntitySet) {\n      optString = '&' + optString.slice(1);\n    }\n\n    let uri = collectionUri;\n\n    return httpClient.get({\n      uri: uri + optString\n    }).then(res => {\n      let obj = JSON.parse(res.body);\n\n      delete obj.__entityModel;\n\n      for (let entity of obj.__ENTITIES) {\n        Util.removeRestInfoFromEntity(entity);\n      }\n\n      return obj as ICollectionDBO;\n    });\n  }\n\n  public static callMethod({httpClient, collectionUri, isEntitySet, methodName, parameters}: ICallMethodParams) {\n    let uri = collectionUri;\n\n    if (isEntitySet) {\n      uri += '/' + methodName;\n    }\n    else {\n      let optString = Util.handleOptions({\n        method: 'subentityset',\n        emMethod: methodName\n      });\n\n      uri += '&' + optString.slice(1);\n    }\n\n    return httpClient.post({\n        uri,\n        data: parameters\n      }).then((res: any) => {\n        let obj = JSON.parse(res.body);\n        return obj.result || obj || null;\n      });\n  }\n}\n\nexport function isEntitySetUri(uri: string): boolean {\n  return /^\\/rest\\/\\w+\\/\\$entityset\\/[A-Z0-9]+(\\?.*)?$/i.test(uri);\n}\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1usmqqjk9f.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var util_1=(cov_1usmqqjk9f.s[1]++,__webpack_require__(37));var CollectionBaseService=(/** @class */cov_1usmqqjk9f.s[2]++,function(){cov_1usmqqjk9f.f[0]++;function CollectionBaseService(){cov_1usmqqjk9f.f[1]++;}cov_1usmqqjk9f.s[3]++;CollectionBaseService.fetch=function(_a){cov_1usmqqjk9f.f[2]++;var httpClient=(cov_1usmqqjk9f.s[4]++,_a.httpClient),collectionUri=(cov_1usmqqjk9f.s[5]++,_a.collectionUri),isEntitySet=(cov_1usmqqjk9f.s[6]++,_a.isEntitySet),options=(cov_1usmqqjk9f.s[7]++,_a.options);cov_1usmqqjk9f.s[8]++;if(!isEntitySet){cov_1usmqqjk9f.b[0][0]++;cov_1usmqqjk9f.s[9]++;if((cov_1usmqqjk9f.b[2][0]++,options.select)&&(cov_1usmqqjk9f.b[2][1]++,options.select.length>0)){cov_1usmqqjk9f.b[1][0]++;cov_1usmqqjk9f.s[10]++;throw new Error('Collection.fetch: option select is not allowed when collection is deferred');}else{cov_1usmqqjk9f.b[1][1]++;}}else{cov_1usmqqjk9f.b[0][1]++;}cov_1usmqqjk9f.s[11]++;options.method='subentityset';var optString=(cov_1usmqqjk9f.s[12]++,util_1.default.handleOptions(options));//Remove the first ? on optString if it's not an entitySet (because there is also
//?$expand=... on collectionUri), and add a &
cov_1usmqqjk9f.s[13]++;if(!isEntitySet){cov_1usmqqjk9f.b[3][0]++;cov_1usmqqjk9f.s[14]++;optString='&'+optString.slice(1);}else{cov_1usmqqjk9f.b[3][1]++;}var uri=(cov_1usmqqjk9f.s[15]++,collectionUri);cov_1usmqqjk9f.s[16]++;return httpClient.get({uri:uri+optString}).then(function(res){cov_1usmqqjk9f.f[3]++;var obj=(cov_1usmqqjk9f.s[17]++,JSON.parse(res.body));cov_1usmqqjk9f.s[18]++;delete obj.__entityModel;cov_1usmqqjk9f.s[19]++;for(var _i=0,_a=obj.__ENTITIES;_i<_a.length;_i++){var entity=(cov_1usmqqjk9f.s[20]++,_a[_i]);cov_1usmqqjk9f.s[21]++;util_1.default.removeRestInfoFromEntity(entity);}cov_1usmqqjk9f.s[22]++;return obj;});};cov_1usmqqjk9f.s[23]++;CollectionBaseService.callMethod=function(_a){cov_1usmqqjk9f.f[4]++;var httpClient=(cov_1usmqqjk9f.s[24]++,_a.httpClient),collectionUri=(cov_1usmqqjk9f.s[25]++,_a.collectionUri),isEntitySet=(cov_1usmqqjk9f.s[26]++,_a.isEntitySet),methodName=(cov_1usmqqjk9f.s[27]++,_a.methodName),parameters=(cov_1usmqqjk9f.s[28]++,_a.parameters);var uri=(cov_1usmqqjk9f.s[29]++,collectionUri);cov_1usmqqjk9f.s[30]++;if(isEntitySet){cov_1usmqqjk9f.b[4][0]++;cov_1usmqqjk9f.s[31]++;uri+='/'+methodName;}else{cov_1usmqqjk9f.b[4][1]++;var optString=(cov_1usmqqjk9f.s[32]++,util_1.default.handleOptions({method:'subentityset',emMethod:methodName}));cov_1usmqqjk9f.s[33]++;uri+='&'+optString.slice(1);}cov_1usmqqjk9f.s[34]++;return httpClient.post({uri:uri,data:parameters}).then(function(res){cov_1usmqqjk9f.f[5]++;var obj=(cov_1usmqqjk9f.s[35]++,JSON.parse(res.body));cov_1usmqqjk9f.s[36]++;return(cov_1usmqqjk9f.b[5][0]++,obj.result)||(cov_1usmqqjk9f.b[5][1]++,obj)||(cov_1usmqqjk9f.b[5][2]++,null);});};cov_1usmqqjk9f.s[37]++;return CollectionBaseService;}());cov_1usmqqjk9f.s[38]++;exports.CollectionBaseService=CollectionBaseService;function isEntitySetUri(uri){cov_1usmqqjk9f.f[6]++;cov_1usmqqjk9f.s[39]++;return /^\/rest\/\w+\/\$entityset\/[A-Z0-9]+(\?.*)?$/i.test(uri);}cov_1usmqqjk9f.s[40]++;exports.isEntitySetUri=isEntitySetUri;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_s3778795a=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/media-base-service.ts",hash="d71dedfdbeb40cdfce3fea603532db472ec110de",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/media-base-service.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:38},end:{line:37,column:3}},"2":{start:{line:6,column:4},end:{line:18,column:6}},"3":{start:{line:7,column:25},end:{line:7,column:38}},"4":{start:{line:7,column:50},end:{line:7,column:60}},"5":{start:{line:7,column:74},end:{line:7,column:86}},"6":{start:{line:7,column:104},end:{line:7,column:120}},"7":{start:{line:7,column:129},end:{line:7,column:136}},"8":{start:{line:7,column:148},end:{line:7,column:158}},"9":{start:{line:8,column:18},end:{line:8,column:67}},"10":{start:{line:9,column:8},end:{line:11,column:9}},"11":{start:{line:10,column:12},end:{line:10,column:44}},"12":{start:{line:13,column:8},end:{line:17,column:11}},"13":{start:{line:19,column:4},end:{line:32,column:6}},"14":{start:{line:20,column:25},end:{line:20,column:38}},"15":{start:{line:20,column:50},end:{line:20,column:60}},"16":{start:{line:20,column:74},end:{line:20,column:86}},"17":{start:{line:20,column:102},end:{line:20,column:116}},"18":{start:{line:20,column:134},end:{line:20,column:150}},"19":{start:{line:21,column:18},end:{line:21,column:49}},"20":{start:{line:22,column:19},end:{line:25,column:9}},"21":{start:{line:26,column:8},end:{line:26,column:35}},"22":{start:{line:28,column:8},end:{line:31,column:11}},"23":{start:{line:33,column:4},end:{line:35,column:6}},"24":{start:{line:34,column:8},end:{line:34,column:69}},"25":{start:{line:36,column:4},end:{line:36,column:28}},"26":{start:{line:38,column:0},end:{line:38,column:44}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:38},end:{line:3,column:39}},loc:{start:{line:3,column:50},end:{line:37,column:1}},line:3},"1":{name:"MediaBaseService",decl:{start:{line:4,column:13},end:{line:4,column:29}},loc:{start:{line:4,column:32},end:{line:5,column:5}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:6,column:30},end:{line:6,column:31}},loc:{start:{line:6,column:44},end:{line:18,column:5}},line:6},"3":{name:"(anonymous_3)",decl:{start:{line:19,column:30},end:{line:19,column:31}},loc:{start:{line:19,column:44},end:{line:32,column:5}},line:19},"4":{name:"(anonymous_4)",decl:{start:{line:33,column:33},end:{line:33,column:34}},loc:{start:{line:33,column:78},end:{line:35,column:5}},line:33}},branchMap:{"0":{loc:{start:{line:9,column:8},end:{line:11,column:9}},type:"if",locations:[{start:{line:9,column:8},end:{line:11,column:9}},{start:{line:9,column:8},end:{line:11,column:9}}],line:9}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0},b:{"0":[0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/media-base-service.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/media-base-service.ts"],names:[],mappings:";;AAoBA;IAAA;IAqCA,CAAC;IAnCe,uBAAM,GAApB,UAAqB,EAA6E;YAA5E,0BAAU,EAAE,oBAAO,EAAE,wBAAS,EAAE,gCAAa,EAAE,cAAI,EAAE,oBAAO;QAEhF,IAAI,GAAG,GAAG,IAAI,CAAC,SAAS,CAAC,OAAO,EAAE,SAAS,EAAE,aAAa,CAAC,CAAC;QAE5D,EAAE,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC;YACZ,GAAG,IAAI,YAAY,GAAG,IAAI,CAAC,IAAI,CAAC;QAClC,CAAC;QAED,+EAA+E;QAC/E,MAAM,CAAC,UAAU,CAAC,IAAI,CAAC;YACrB,GAAG,KAAA;YACH,IAAI,EAAE,IAAI;YACV,MAAM,EAAE,IAAI;SACb,CAAC,CAAC;IACL,CAAC;IAEa,uBAAM,GAApB,UAAqB,EAA2E;YAA1E,0BAAU,EAAE,oBAAO,EAAE,wBAAS,EAAE,4BAAW,EAAE,gCAAa;QAC9E,IAAI,GAAG,GAAG,OAAO,GAAG,GAAG,GAAG,SAAS,GAAG,GAAG,CAAC;QAC1C,IAAI,IAAI,GAAQ;YACd,KAAK,EAAE,SAAS;YAChB,OAAO,EAAE,WAAW;SACrB,CAAC;QAEF,IAAI,CAAC,aAAa,CAAC,GAAG,IAAI,CAAC;QAE3B,gBAAgB;QAChB,MAAM,CAAC,UAAU,CAAC,IAAI,CAAC;YACrB,GAAG,KAAA;YACH,IAAI,MAAA;SACL,CAAC,CAAC;IACL,CAAC;IAEc,0BAAS,GAAxB,UAAyB,OAAe,EAAE,SAAiB,EAAE,aAAqB;QAChF,MAAM,CAAC,OAAO,GAAG,GAAG,GAAG,SAAS,GAAG,GAAG,GAAG,GAAG,GAAG,aAAa,CAAC;IAC/D,CAAC;IACH,uBAAC;AAAD,CAAC,AArCD,IAqCC;AArCY,4CAAgB",sourcesContent:["import HttpClient from '../../http/http-client';\nimport HttpResponse from '../../http/http-response';\n\nexport interface IUploadParams {\n  httpClient: HttpClient;\n  dataURI: string;\n  entityKey: string;\n  attributeName: string;\n  file: File;\n  isImage: boolean;\n}\n\nexport interface IDeleteParams {\n  httpClient: HttpClient;\n  dataURI: string;\n  entityKey: string;\n  entityStamp: number;\n  attributeName: string;\n}\n\nexport class MediaBaseService {\n\n  public static upload({httpClient, dataURI, entityKey, attributeName, file, isImage}: IUploadParams): Promise<HttpResponse> {\n\n    let uri = this._buildUri(dataURI, entityKey, attributeName);\n\n    if (isImage) {\n      uri += '?$rawPict=' + file.type;\n    }\n\n    //FIXME - real crappy not to return some piece of information to refresh entity\n    return httpClient.post({\n      uri,\n      data: file,\n      binary: true\n    });\n  }\n\n  public static delete({httpClient, dataURI, entityKey, entityStamp, attributeName}: IDeleteParams): Promise<HttpResponse> {\n    let uri = dataURI + '(' + entityKey + ')';\n    let data: any = {\n      __KEY: entityKey,\n      __STAMP: entityStamp\n    };\n\n    data[attributeName] = null;\n\n    //FIXME - crappy\n    return httpClient.post({\n      uri,\n      data\n    });\n  }\n\n  private static _buildUri(dataURI: string, entityKey: string, attributeName: string): string {\n    return dataURI + '(' + entityKey + ')' + '/' + attributeName;\n  }\n}\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_s3778795a.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var MediaBaseService=(/** @class */cov_s3778795a.s[1]++,function(){cov_s3778795a.f[0]++;function MediaBaseService(){cov_s3778795a.f[1]++;}cov_s3778795a.s[2]++;MediaBaseService.upload=function(_a){cov_s3778795a.f[2]++;var httpClient=(cov_s3778795a.s[3]++,_a.httpClient),dataURI=(cov_s3778795a.s[4]++,_a.dataURI),entityKey=(cov_s3778795a.s[5]++,_a.entityKey),attributeName=(cov_s3778795a.s[6]++,_a.attributeName),file=(cov_s3778795a.s[7]++,_a.file),isImage=(cov_s3778795a.s[8]++,_a.isImage);var uri=(cov_s3778795a.s[9]++,this._buildUri(dataURI,entityKey,attributeName));cov_s3778795a.s[10]++;if(isImage){cov_s3778795a.b[0][0]++;cov_s3778795a.s[11]++;uri+='?$rawPict='+file.type;}else{cov_s3778795a.b[0][1]++;}//FIXME - real crappy not to return some piece of information to refresh entity
cov_s3778795a.s[12]++;return httpClient.post({uri:uri,data:file,binary:true});};cov_s3778795a.s[13]++;MediaBaseService.delete=function(_a){cov_s3778795a.f[3]++;var httpClient=(cov_s3778795a.s[14]++,_a.httpClient),dataURI=(cov_s3778795a.s[15]++,_a.dataURI),entityKey=(cov_s3778795a.s[16]++,_a.entityKey),entityStamp=(cov_s3778795a.s[17]++,_a.entityStamp),attributeName=(cov_s3778795a.s[18]++,_a.attributeName);var uri=(cov_s3778795a.s[19]++,dataURI+'('+entityKey+')');var data=(cov_s3778795a.s[20]++,{__KEY:entityKey,__STAMP:entityStamp});cov_s3778795a.s[21]++;data[attributeName]=null;//FIXME - crappy
cov_s3778795a.s[22]++;return httpClient.post({uri:uri,data:data});};cov_s3778795a.s[23]++;MediaBaseService._buildUri=function(dataURI,entityKey,attributeName){cov_s3778795a.f[4]++;cov_s3778795a.s[24]++;return dataURI+'('+entityKey+')'+'/'+attributeName;};cov_s3778795a.s[25]++;return MediaBaseService;}());cov_s3778795a.s[26]++;exports.MediaBaseService=MediaBaseService;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_1wbss6nqyu=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/presentation/collection.ts",hash="d503ab45e2c6e9ea840c17c52e1ec95dc77e31cc",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/presentation/collection.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:32},end:{line:16,column:3}},"2":{start:{line:5,column:23},end:{line:5,column:34}},"3":{start:{line:5,column:48},end:{line:5,column:60}},"4":{start:{line:6,column:8},end:{line:6,column:27}},"5":{start:{line:7,column:8},end:{line:7,column:43}},"6":{start:{line:8,column:8},end:{line:13,column:11}},"7":{start:{line:15,column:4},end:{line:15,column:22}},"8":{start:{line:17,column:0},end:{line:17,column:29}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:32},end:{line:3,column:33}},loc:{start:{line:3,column:44},end:{line:16,column:1}},line:3},"1":{name:"Collection",decl:{start:{line:4,column:13},end:{line:4,column:23}},loc:{start:{line:4,column:28},end:{line:14,column:5}},line:4}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},f:{"0":0,"1":0},b:{},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/presentation/collection.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/presentation/collection.ts"],names:[],mappings:";;AAIA;IAoBE,oBAAY,EAAgE;YAA/D,sBAAQ,EAAE,wBAAS;QAC9B,IAAI,CAAC,QAAQ,GAAG,EAAE,CAAC;QACnB,IAAI,CAAC,SAAS,GAAG,QAAQ,KAAK,IAAI,CAAC;QAEnC,MAAM,CAAC,cAAc,CAAC,IAAI,EAAE,YAAY,EAAE;YACxC,UAAU,EAAE,KAAK;YACjB,YAAY,EAAE,KAAK;YACnB,QAAQ,EAAE,KAAK;YACf,KAAK,EAAE,SAAS;SACjB,CAAC,CAAC;IACL,CAAC;IACH,iBAAC;AAAD,CAAC,AA/BD,IA+BC;AACD,kBAAe,UAAU,CAAC",sourcesContent:["import Entity from './entity';\nimport {DataClass} from './dataclass';\nimport {QueryOption} from './query-option';\n\nclass Collection {\n\n  public entities: Entity[];\n  public _deferred: boolean;\n  public _count: number;\n  public _first: number;\n  public _sent: number;\n  public _pageSize: number;\n\n  [key: string]: any;\n\n  /* tslint:disable */\n  private _dataClass: DataClass;\n  /* tslint:enable */\n\n  public fetch: (options?: QueryOption) => Promise<Collection>;\n  public nextPage: () => Promise<Collection>;\n  public prevPage: () => Promise<Collection>;\n  public more: () => Promise<Collection>;\n\n  constructor({deferred, dataClass}: {deferred: boolean, dataClass: DataClass}) {\n    this.entities = [];\n    this._deferred = deferred === true;\n\n    Object.defineProperty(this, '_dataClass', {\n      enumerable: false,\n      configurable: false,\n      writable: false,\n      value: dataClass\n    });\n  }\n}\nexport default Collection;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1wbss6nqyu.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var Collection=(/** @class */cov_1wbss6nqyu.s[1]++,function(){cov_1wbss6nqyu.f[0]++;function Collection(_a){cov_1wbss6nqyu.f[1]++;var deferred=(cov_1wbss6nqyu.s[2]++,_a.deferred),dataClass=(cov_1wbss6nqyu.s[3]++,_a.dataClass);cov_1wbss6nqyu.s[4]++;this.entities=[];cov_1wbss6nqyu.s[5]++;this._deferred=deferred===true;cov_1wbss6nqyu.s[6]++;Object.defineProperty(this,'_dataClass',{enumerable:false,configurable:false,writable:false,value:dataClass});}cov_1wbss6nqyu.s[7]++;return Collection;}());cov_1wbss6nqyu.s[8]++;exports.default=Collection;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_14xw4vjf91=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/directory-base-service.ts",hash="0bd339472020598d7c41cfbb0fcb9fde8717579c",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/directory-base-service.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:42},end:{line:60,column:3}},"2":{start:{line:6,column:4},end:{line:14,column:6}},"3":{start:{line:7,column:25},end:{line:7,column:38}},"4":{start:{line:7,column:51},end:{line:7,column:62}},"5":{start:{line:7,column:75},end:{line:7,column:86}},"6":{start:{line:7,column:99},end:{line:7,column:110}},"7":{start:{line:8,column:8},end:{line:13,column:11}},"8":{start:{line:12,column:12},end:{line:12,column:24}},"9":{start:{line:15,column:4},end:{line:28,column:6}},"10":{start:{line:16,column:25},end:{line:16,column:38}},"11":{start:{line:17,column:8},end:{line:27,column:11}},"12":{start:{line:20,column:22},end:{line:20,column:42}},"13":{start:{line:21,column:12},end:{line:26,column:13}},"14":{start:{line:22,column:16},end:{line:22,column:28}},"15":{start:{line:25,column:16},end:{line:25,column:51}},"16":{start:{line:29,column:4},end:{line:43,column:6}},"17":{start:{line:30,column:25},end:{line:30,column:38}},"18":{start:{line:31,column:8},end:{line:42,column:11}},"19":{start:{line:35,column:22},end:{line:35,column:42}},"20":{start:{line:36,column:12},end:{line:41,column:13}},"21":{start:{line:37,column:16},end:{line:37,column:34}},"22":{start:{line:40,column:16},end:{line:40,column:51}},"23":{start:{line:44,column:4},end:{line:58,column:6}},"24":{start:{line:45,column:25},end:{line:45,column:38}},"25":{start:{line:45,column:48},end:{line:45,column:56}},"26":{start:{line:46,column:8},end:{line:57,column:11}},"27":{start:{line:50,column:22},end:{line:50,column:42}},"28":{start:{line:51,column:12},end:{line:56,column:13}},"29":{start:{line:52,column:16},end:{line:52,column:28}},"30":{start:{line:55,column:16},end:{line:55,column:51}},"31":{start:{line:59,column:4},end:{line:59,column:32}},"32":{start:{line:61,column:0},end:{line:61,column:52}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:42},end:{line:3,column:43}},loc:{start:{line:3,column:54},end:{line:60,column:1}},line:3},"1":{name:"DirectoryBaseService",decl:{start:{line:4,column:13},end:{line:4,column:33}},loc:{start:{line:4,column:36},end:{line:5,column:5}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:6,column:33},end:{line:6,column:34}},loc:{start:{line:6,column:47},end:{line:14,column:5}},line:6},"3":{name:"(anonymous_3)",decl:{start:{line:11,column:16},end:{line:11,column:17}},loc:{start:{line:11,column:28},end:{line:13,column:9}},line:11},"4":{name:"(anonymous_4)",decl:{start:{line:15,column:34},end:{line:15,column:35}},loc:{start:{line:15,column:48},end:{line:28,column:5}},line:15},"5":{name:"(anonymous_5)",decl:{start:{line:19,column:16},end:{line:19,column:17}},loc:{start:{line:19,column:31},end:{line:27,column:9}},line:19},"6":{name:"(anonymous_6)",decl:{start:{line:29,column:42},end:{line:29,column:43}},loc:{start:{line:29,column:56},end:{line:43,column:5}},line:29},"7":{name:"(anonymous_7)",decl:{start:{line:34,column:18},end:{line:34,column:19}},loc:{start:{line:34,column:33},end:{line:42,column:9}},line:34},"8":{name:"(anonymous_8)",decl:{start:{line:44,column:51},end:{line:44,column:52}},loc:{start:{line:44,column:65},end:{line:58,column:5}},line:44},"9":{name:"(anonymous_9)",decl:{start:{line:49,column:16},end:{line:49,column:17}},loc:{start:{line:49,column:31},end:{line:57,column:9}},line:49}},branchMap:{"0":{loc:{start:{line:21,column:12},end:{line:26,column:13}},type:"if",locations:[{start:{line:21,column:12},end:{line:26,column:13}},{start:{line:21,column:12},end:{line:26,column:13}}],line:21},"1":{loc:{start:{line:21,column:16},end:{line:21,column:49}},type:"binary-expr",locations:[{start:{line:21,column:16},end:{line:21,column:26}},{start:{line:21,column:30},end:{line:21,column:49}}],line:21},"2":{loc:{start:{line:36,column:12},end:{line:41,column:13}},type:"if",locations:[{start:{line:36,column:12},end:{line:41,column:13}},{start:{line:36,column:12},end:{line:41,column:13}}],line:36},"3":{loc:{start:{line:36,column:16},end:{line:36,column:43}},type:"binary-expr",locations:[{start:{line:36,column:16},end:{line:36,column:26}},{start:{line:36,column:30},end:{line:36,column:43}}],line:36},"4":{loc:{start:{line:51,column:12},end:{line:56,column:13}},type:"if",locations:[{start:{line:51,column:12},end:{line:56,column:13}},{start:{line:51,column:12},end:{line:56,column:13}}],line:51},"5":{loc:{start:{line:51,column:16},end:{line:51,column:56}},type:"binary-expr",locations:[{start:{line:51,column:16},end:{line:51,column:19}},{start:{line:51,column:23},end:{line:51,column:33}},{start:{line:51,column:37},end:{line:51,column:56}}],line:51}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/directory-base-service.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/base/directory-base-service.ts"],names:[],mappings:";;AAeA;IAAA;IA0DA,CAAC;IAxDe,0BAAK,GAAnB,UAAoB,EAC2D;YAD1D,0BAAU,EAAE,sBAAQ,EAAE,sBAAQ,EAAE,sBAAQ;QAG3D,MAAM,CAAC,UAAU,CAAC,IAAI,CAAC;YACrB,GAAG,EAAE,wBAAwB;YAC7B,IAAI,EAAE,CAAC,QAAQ,EAAE,QAAQ,EAAE,QAAQ,CAAC;SACrC,CAAC,CAAC,IAAI,CAAC;YACJ,MAAM,CAAC,IAAI,CAAC;QACd,CAAC,CAAC,CAAC;IACP,CAAC;IAEa,2BAAM,GAApB,UAAqB,EAAsC;YAArC,0BAAU;QAC9B,MAAM,CAAC,UAAU,CAAC,GAAG,CAAC;YACpB,GAAG,EAAE,yBAAyB;SAC/B,CAAC,CAAC,IAAI,CAAC,UAAA,GAAG;YACT,IAAI,GAAG,GAAG,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;YAC/B,EAAE,CAAC,CAAC,GAAG,CAAC,MAAM,IAAI,GAAG,CAAC,MAAM,KAAK,IAAI,CAAC,CAAC,CAAC;gBACtC,MAAM,CAAC,IAAI,CAAC;YACd,CAAC;YACD,IAAI,CAAC,CAAC;gBACJ,MAAM,CAAM,OAAO,CAAC,MAAM,CAAC,IAAI,KAAK,EAAE,CAAC,CAAC;YAC1C,CAAC;QACH,CAAC,CAAC,CAAC;IACL,CAAC;IAEa,mCAAc,GAA5B,UAA6B,EAAsC;YAArC,0BAAU;QACtC,MAAM,CAAC,UAAU,CAAC,GAAG,CAAC;YACpB,GAAG,EAAE,8BAA8B;SACpC,CAAC;aACC,IAAI,CAAC,UAAA,GAAG;YACP,IAAI,GAAG,GAAG,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;YAE/B,EAAE,CAAC,CAAC,GAAG,CAAC,MAAM,IAAI,GAAG,CAAC,MAAM,CAAC,EAAE,CAAC,CAAC,CAAC;gBAChC,MAAM,CAAC,GAAG,CAAC,MAAM,CAAC;YACpB,CAAC;YACD,IAAI,CAAC,CAAC;gBACJ,MAAM,CAAC,OAAO,CAAC,MAAM,CAAC,IAAI,KAAK,EAAE,CAAC,CAAC;YACrC,CAAC;QACH,CAAC,CAAC,CAAC;IACP,CAAC;IAEa,4CAAuB,GAArC,UAAsC,EAAgD;YAA/C,0BAAU,EAAE,gBAAK;QACtD,MAAM,CAAC,UAAU,CAAC,IAAI,CAAC;YACrB,GAAG,EAAE,uCAAuC;YAC5C,IAAI,EAAE,CAAC,KAAK,CAAC;SACd,CAAC,CAAC,IAAI,CAAC,UAAA,GAAG;YACT,IAAI,GAAG,GAAG,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;YAE/B,EAAE,CAAC,CAAC,GAAG,IAAI,GAAG,CAAC,MAAM,IAAI,GAAG,CAAC,MAAM,KAAK,IAAI,CAAC,CAAC,CAAC;gBAC7C,MAAM,CAAC,IAAI,CAAC;YACd,CAAC;YACD,IAAI,CAAC,CAAC;gBACJ,MAAM,CAAM,OAAO,CAAC,MAAM,CAAC,IAAI,KAAK,EAAE,CAAC,CAAC;YAC1C,CAAC;QACH,CAAC,CAAC,CAAC;IACL,CAAC;IACH,2BAAC;AAAD,CAAC,AA1DD,IA0DC;AA1DY,oDAAoB",sourcesContent:["import HttpClient from '../../http/http-client';\nimport {ICurrentUserDBO} from '../../../business/directory-business';\n\nexport interface ILoginParams {\n  httpClient: HttpClient;\n  username: string;\n  password: string;\n  duration: number;\n}\n\nexport interface ICurrentUserBelongsToParams {\n  httpClient: HttpClient;\n  group: string;\n}\n\nexport class DirectoryBaseService {\n\n  public static login({httpClient, username, password, duration}:\n  {httpClient: HttpClient, username: string, password: string, duration?: number}): Promise<boolean> {\n\n    return httpClient.post({\n      uri: '/rest/$directory/login',\n      data: [username, password, duration]\n    }).then(() => {\n        return true;\n      });\n  }\n\n  public static logout({httpClient}: {httpClient: HttpClient}): Promise<boolean> {\n    return httpClient.get({\n      uri: '/rest/$directory/logout'\n    }).then(res => {\n      let obj = JSON.parse(res.body);\n      if (obj.result && obj.result === true) {\n        return true;\n      }\n      else {\n        return <any>Promise.reject(new Error());\n      }\n    });\n  }\n\n  public static getCurrentUser({httpClient}: {httpClient: HttpClient}): Promise<ICurrentUserDBO> {\n    return httpClient.get({\n      uri: '/rest/$directory/currentUser'\n    })\n      .then(res => {\n        let obj = JSON.parse(res.body);\n\n        if (obj.result && obj.result.ID) {\n          return obj.result;\n        }\n        else {\n          return Promise.reject(new Error());\n        }\n      });\n  }\n\n  public static getCurrentUserBelongsTo({httpClient, group}: ICurrentUserBelongsToParams): Promise<boolean> {\n    return httpClient.post({\n      uri: '/rest/$directory/currentUserBelongsTo',\n      data: [group]\n    }).then(res => {\n      let obj = JSON.parse(res.body);\n\n      if (obj && obj.result && obj.result === true) {\n        return true;\n      }\n      else {\n        return <any>Promise.reject(new Error());\n      }\n    });\n  }\n}\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_14xw4vjf91.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var DirectoryBaseService=(/** @class */cov_14xw4vjf91.s[1]++,function(){cov_14xw4vjf91.f[0]++;function DirectoryBaseService(){cov_14xw4vjf91.f[1]++;}cov_14xw4vjf91.s[2]++;DirectoryBaseService.login=function(_a){cov_14xw4vjf91.f[2]++;var httpClient=(cov_14xw4vjf91.s[3]++,_a.httpClient),username=(cov_14xw4vjf91.s[4]++,_a.username),password=(cov_14xw4vjf91.s[5]++,_a.password),duration=(cov_14xw4vjf91.s[6]++,_a.duration);cov_14xw4vjf91.s[7]++;return httpClient.post({uri:'/rest/$directory/login',data:[username,password,duration]}).then(function(){cov_14xw4vjf91.f[3]++;cov_14xw4vjf91.s[8]++;return true;});};cov_14xw4vjf91.s[9]++;DirectoryBaseService.logout=function(_a){cov_14xw4vjf91.f[4]++;var httpClient=(cov_14xw4vjf91.s[10]++,_a.httpClient);cov_14xw4vjf91.s[11]++;return httpClient.get({uri:'/rest/$directory/logout'}).then(function(res){cov_14xw4vjf91.f[5]++;var obj=(cov_14xw4vjf91.s[12]++,JSON.parse(res.body));cov_14xw4vjf91.s[13]++;if((cov_14xw4vjf91.b[1][0]++,obj.result)&&(cov_14xw4vjf91.b[1][1]++,obj.result===true)){cov_14xw4vjf91.b[0][0]++;cov_14xw4vjf91.s[14]++;return true;}else{cov_14xw4vjf91.b[0][1]++;cov_14xw4vjf91.s[15]++;return Promise.reject(new Error());}});};cov_14xw4vjf91.s[16]++;DirectoryBaseService.getCurrentUser=function(_a){cov_14xw4vjf91.f[6]++;var httpClient=(cov_14xw4vjf91.s[17]++,_a.httpClient);cov_14xw4vjf91.s[18]++;return httpClient.get({uri:'/rest/$directory/currentUser'}).then(function(res){cov_14xw4vjf91.f[7]++;var obj=(cov_14xw4vjf91.s[19]++,JSON.parse(res.body));cov_14xw4vjf91.s[20]++;if((cov_14xw4vjf91.b[3][0]++,obj.result)&&(cov_14xw4vjf91.b[3][1]++,obj.result.ID)){cov_14xw4vjf91.b[2][0]++;cov_14xw4vjf91.s[21]++;return obj.result;}else{cov_14xw4vjf91.b[2][1]++;cov_14xw4vjf91.s[22]++;return Promise.reject(new Error());}});};cov_14xw4vjf91.s[23]++;DirectoryBaseService.getCurrentUserBelongsTo=function(_a){cov_14xw4vjf91.f[8]++;var httpClient=(cov_14xw4vjf91.s[24]++,_a.httpClient),group=(cov_14xw4vjf91.s[25]++,_a.group);cov_14xw4vjf91.s[26]++;return httpClient.post({uri:'/rest/$directory/currentUserBelongsTo',data:[group]}).then(function(res){cov_14xw4vjf91.f[9]++;var obj=(cov_14xw4vjf91.s[27]++,JSON.parse(res.body));cov_14xw4vjf91.s[28]++;if((cov_14xw4vjf91.b[5][0]++,obj)&&(cov_14xw4vjf91.b[5][1]++,obj.result)&&(cov_14xw4vjf91.b[5][2]++,obj.result===true)){cov_14xw4vjf91.b[4][0]++;cov_14xw4vjf91.s[29]++;return true;}else{cov_14xw4vjf91.b[4][1]++;cov_14xw4vjf91.s[30]++;return Promise.reject(new Error());}});};cov_14xw4vjf91.s[31]++;return DirectoryBaseService;}());cov_14xw4vjf91.s[32]++;exports.DirectoryBaseService=DirectoryBaseService;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.RequestBuilder = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _aureliaPath = __webpack_require__(76);

var _httpRequestMessage = __webpack_require__(41);

var _jsonpRequestMessage = __webpack_require__(42);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* A builder class allowing fluent composition of HTTP requests.
*
* @class RequestBuilder
* @constructor
*/
var RequestBuilder = exports.RequestBuilder = function () {
	function RequestBuilder(client) {
		_classCallCheck(this, RequestBuilder);

		this.client = client;
		this.transformers = client.requestTransformers.slice(0);
		this.useJsonp = false;
	}

	/**
 * Adds a user-defined request transformer to the RequestBuilder.
 *
 * @method addHelper
 * @param {String} name The name of the helper to add.
 * @param {Function} fn The helper function.
 * @chainable
 */


	_createClass(RequestBuilder, [{
		key: 'send',


		/**
  * Sends the request.
  *
  * @method send
  * @return {Promise} A cancellable promise object.
  */
		value: function send() {
			var message = this.useJsonp ? new _jsonpRequestMessage.JSONPRequestMessage() : new _httpRequestMessage.HttpRequestMessage();
			return this.client.send(message, this.transformers);
		}
	}], [{
		key: 'addHelper',
		value: function addHelper(name, fn) {
			RequestBuilder.prototype[name] = function () {
				this.transformers.push(fn.apply(this, arguments));
				return this;
			};
		}
	}]);

	return RequestBuilder;
}();

RequestBuilder.addHelper('asDelete', function () {
	return function (client, processor, message) {
		message.method = 'DELETE';
	};
});

RequestBuilder.addHelper('asGet', function () {
	return function (client, processor, message) {
		message.method = 'GET';
	};
});

RequestBuilder.addHelper('asHead', function () {
	return function (client, processor, message) {
		message.method = 'HEAD';
	};
});

RequestBuilder.addHelper('asOptions', function () {
	return function (client, processor, message) {
		message.method = 'OPTIONS';
	};
});

RequestBuilder.addHelper('asPatch', function () {
	return function (client, processor, message) {
		message.method = 'PATCH';
	};
});

RequestBuilder.addHelper('asPost', function () {
	return function (client, processor, message) {
		message.method = 'POST';
	};
});

RequestBuilder.addHelper('asPut', function () {
	return function (client, processor, message) {
		message.method = 'PUT';
	};
});

RequestBuilder.addHelper('asJsonp', function (callbackParameterName) {
	this.useJsonp = true;
	return function (client, processor, message) {
		message.callbackParameterName = callbackParameterName;
	};
});

RequestBuilder.addHelper('withUri', function (uri) {
	return function (client, processor, message) {
		message.uri = uri;
	};
});

RequestBuilder.addHelper('withContent', function (content) {
	return function (client, processor, message) {
		message.content = content;
	};
});

RequestBuilder.addHelper('withBaseUri', function (baseUri) {
	return function (client, processor, message) {
		message.baseUri = baseUri;
	};
});

RequestBuilder.addHelper('withParams', function (params) {
	return function (client, processor, message) {
		message.params = params;
	};
});

RequestBuilder.addHelper('withResponseType', function (responseType) {
	return function (client, processor, message) {
		message.responseType = responseType;
	};
});

RequestBuilder.addHelper('withTimeout', function (timeout) {
	return function (client, processor, message) {
		message.timeout = timeout;
	};
});

RequestBuilder.addHelper('withHeader', function (key, value) {
	return function (client, processor, message) {
		message.headers.add(key, value);
	};
});

RequestBuilder.addHelper('withCredentials', function (value) {
	return function (client, processor, message) {
		message.withCredentials = value;
	};
});

RequestBuilder.addHelper('withReviver', function (reviver) {
	return function (client, processor, message) {
		message.reviver = reviver;
	};
});

RequestBuilder.addHelper('withReplacer', function (replacer) {
	return function (client, processor, message) {
		message.replacer = replacer;
	};
});

RequestBuilder.addHelper('withProgressCallback', function (progressCallback) {
	return function (client, processor, message) {
		message.progressCallback = progressCallback;
	};
});

RequestBuilder.addHelper('withCallbackParameterName', function (callbackParameterName) {
	return function (client, processor, message) {
		message.callbackParameterName = callbackParameterName;
	};
});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.relativeToFile = relativeToFile;
exports.join = join;
exports.buildQueryString = buildQueryString;
function trimDots(ary) {
  var i, part;
  for (i = 0; i < ary.length; ++i) {
    part = ary[i];
    if (part === '.') {
      ary.splice(i, 1);
      i -= 1;
    } else if (part === '..') {
      // If at the start, or previous value is still ..,
      // keep them so that when converted to a path it may
      // still work when converted to a path, even though
      // as an ID it is less than ideal. In larger point
      // releases, may be better to just kick out an error.
      if (i === 0 || i == 1 && ary[2] === '..' || ary[i - 1] === '..') {
        continue;
      } else if (i > 0) {
        ary.splice(i - 1, 2);
        i -= 2;
      }
    }
  }
}

function relativeToFile(name, file) {
  var lastIndex,
      normalizedBaseParts,
      fileParts = file && file.split('/');

  name = name.trim();
  name = name.split('/');

  if (name[0].charAt(0) === '.' && fileParts) {
    //Convert file to array, and lop off the last part,
    //so that . matches that 'directory' and not name of the file's
    //module. For instance, file of 'one/two/three', maps to
    //'one/two/three.js', but we want the directory, 'one/two' for
    //this normalization.
    normalizedBaseParts = fileParts.slice(0, fileParts.length - 1);
    name = normalizedBaseParts.concat(name);
  }

  trimDots(name);

  return name.join('/');
}

function join(path1, path2) {
  var url1, url2, url3, i, ii, urlPrefix;

  if (!path1) {
    return path2;
  }

  if (!path2) {
    return path1;
  }

  urlPrefix = path1.indexOf('//') === 0 ? '//' : path1.indexOf('/') === 0 ? '/' : '';

  url1 = path1.split('/');
  url2 = path2.split('/');
  url3 = [];

  for (i = 0, ii = url1.length; i < ii; ++i) {
    if (url1[i] == '..') {
      url3.pop();
    } else if (url1[i] == '.' || url1[i] == '') {
      continue;
    } else {
      url3.push(url1[i]);
    }
  }

  for (i = 0, ii = url2.length; i < ii; ++i) {
    if (url2[i] == '..') {
      url3.pop();
    } else if (url2[i] == '.' || url2[i] == '') {
      continue;
    } else {
      url3.push(url2[i]);
    }
  }

  return urlPrefix + url3.join('/').replace(/\:\//g, '://');;
}

var r20 = /%20/g,
    rbracket = /\[\]$/,
    class2type = {};

'Boolean Number String Function Array Date RegExp Object Error'.split(' ').forEach(function (name, i) {
  class2type['[object ' + name + ']'] = name.toLowerCase();
});

function type(obj) {
  if (obj == null) {
    return obj + "";
  }

  // Support: Android<4.0 (functionish RegExp)
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function' ? class2type[toString.call(obj)] || 'object' : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
}

function buildQueryString(a, traditional) {
  var prefix,
      s = [],
      add = function add(key, value) {
    // If value is a function, invoke it and return its value
    value = typeof value === 'function' ? value() : value == null ? '' : value;
    s[s.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value);
  };

  for (prefix in a) {
    _buildQueryString(prefix, a[prefix], traditional, add);
  }

  // Return the resulting serialization
  return s.join('&').replace(r20, '+');
}

function _buildQueryString(prefix, obj, traditional, add) {
  var name;

  if (Array.isArray(obj)) {
    // Serialize array item.
    obj.forEach(function (v, i) {
      if (traditional || rbracket.test(prefix)) {
        // Treat each array item as a scalar.
        add(prefix, v);
      } else {
        // Item is non-scalar (array or object), encode its numeric index.
        _buildQueryString(prefix + '[' + ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' ? i : '') + ']', v, traditional, add);
      }
    });
  } else if (!traditional && type(obj) === 'object') {
    // Serialize object item.
    for (name in obj) {
      _buildQueryString(prefix + '[' + name + ']', obj[name], traditional, add);
    }
  } else {
    // Serialize scalar item.
    add(prefix, obj);
  }
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestMessageProcessor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _httpResponseMessage = __webpack_require__(78);

var _aureliaPath = __webpack_require__(76);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function buildFullUri(message) {
  var uri = (0, _aureliaPath.join)(message.baseUri, message.uri),
      qs;

  if (message.params) {
    qs = (0, _aureliaPath.buildQueryString)(message.params);
    uri = qs ? uri + '?' + qs : uri;
  }

  message.fullUri = uri;
}

var RequestMessageProcessor = exports.RequestMessageProcessor = function () {
  function RequestMessageProcessor(xhrType, transformers) {
    _classCallCheck(this, RequestMessageProcessor);

    this.XHRType = xhrType;
    this.transformers = transformers;
  }

  _createClass(RequestMessageProcessor, [{
    key: 'abort',
    value: function abort() {
      //The logic here is if the xhr object is not set then there is nothing to abort so the intent was carried out
      if (this.xhr) {
        this.xhr.abort();
      }
    }
  }, {
    key: 'process',
    value: function process(client, message) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var xhr = _this.xhr = new _this.XHRType(),
            transformers = _this.transformers,
            i,
            ii;

        buildFullUri(message);
        xhr.open(message.method, message.fullUri, true);

        for (i = 0, ii = transformers.length; i < ii; ++i) {
          transformers[i](client, _this, message, xhr);
        }

        xhr.onload = function (e) {
          var response = new _httpResponseMessage.HttpResponseMessage(message, xhr, message.responseType, message.reviver);
          if (response.isSuccess) {
            resolve(response);
          } else {
            reject(response);
          }
        };

        xhr.ontimeout = function (e) {
          reject(new _httpResponseMessage.HttpResponseMessage(message, {
            response: e,
            status: xhr.status,
            statusText: xhr.statusText
          }, 'timeout'));
        };

        xhr.onerror = function (e) {
          reject(new _httpResponseMessage.HttpResponseMessage(message, {
            response: e,
            status: xhr.status,
            statusText: xhr.statusText
          }, 'error'));
        };

        xhr.onabort = function (e) {
          reject(new _httpResponseMessage.HttpResponseMessage(message, {
            response: e,
            status: xhr.status,
            statusText: xhr.statusText
          }, 'abort'));
        };

        xhr.send(message.content);
      });
    }
  }]);

  return RequestMessageProcessor;
}();

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HttpResponseMessage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _headers = __webpack_require__(18);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HttpResponseMessage = exports.HttpResponseMessage = function () {
  function HttpResponseMessage(requestMessage, xhr, responseType, reviver) {
    _classCallCheck(this, HttpResponseMessage);

    this.requestMessage = requestMessage;
    this.statusCode = xhr.status;
    this.response = xhr.response;
    this.isSuccess = xhr.status >= 200 && xhr.status < 400;
    this.statusText = xhr.statusText;
    this.responseType = responseType;
    this.reviver = reviver;

    if (xhr.getAllResponseHeaders) {
      this.headers = _headers.Headers.parse(xhr.getAllResponseHeaders());
    } else {
      this.headers = new _headers.Headers();
    }
  }

  _createClass(HttpResponseMessage, [{
    key: 'content',
    get: function get() {
      try {
        if (this._content !== undefined) {
          return this._content;
        }

        if (this.response === undefined || this.response === null) {
          return this._content = this.response;
        }

        if (this.responseType === 'json') {
          return this._content = JSON.parse(this.response, this.reviver);
        }

        if (this.reviver) {
          return this._content = this.reviver(this.response);
        }

        return this._content = this.response;
      } catch (e) {
        if (this.isSuccess) {
          throw e;
        }

        return this._content = null;
      }
    }
  }]);

  return HttpResponseMessage;
}();

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeoutTransformer = timeoutTransformer;
exports.callbackParameterNameTransformer = callbackParameterNameTransformer;
exports.credentialsTransformer = credentialsTransformer;
exports.progressTransformer = progressTransformer;
exports.responseTypeTransformer = responseTypeTransformer;
exports.headerTransformer = headerTransformer;
exports.contentTransformer = contentTransformer;
function timeoutTransformer(client, processor, message, xhr) {
  if (message.timeout !== undefined) {
    xhr.timeout = message.timeout;
  }
}

function callbackParameterNameTransformer(client, processor, message, xhr) {
  if (message.callbackParameterName !== undefined) {
    xhr.callbackParameterName = message.callbackParameterName;
  }
}

function credentialsTransformer(client, processor, message, xhr) {
  if (message.withCredentials !== undefined) {
    xhr.withCredentials = message.withCredentials;
  }
}

function progressTransformer(client, processor, message, xhr) {
  if (message.progressCallback) {
    xhr.upload.onprogress = message.progressCallback;
  }
}

function responseTypeTransformer(client, processor, message, xhr) {
  var responseType = message.responseType;

  if (responseType === 'json') {
    responseType = 'text'; //IE does not support json
  }

  xhr.responseType = responseType;
}

function headerTransformer(client, processor, message, xhr) {
  message.headers.configureXHR(xhr);
}

function contentTransformer(client, processor, message, xhr) {
  if (window.FormData && message.content instanceof FormData) {
    return;
  }

  if (window.Blob && message.content instanceof Blob) {
    return;
  }

  if (window.ArrayBufferView && message.content instanceof ArrayBufferView) {
    return;
  }

  if (message.content instanceof Document) {
    return;
  }

  if (typeof message.content === 'string') {
    return;
  }

  if (message.content === null || message.content === undefined) {
    return;
  }

  message.content = JSON.stringify(message.content, message.replacer);
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(81);


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_29thfqdwa5=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/browser.ts",hash="273b5086564fafa082de163f8898763a23d36de1",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/browser.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:0},end:{line:3,column:36}},"2":{start:{line:4,column:0},end:{line:4,column:33}},"3":{start:{line:5,column:0},end:{line:5,column:37}},"4":{start:{line:6,column:0},end:{line:6,column:26}},"5":{start:{line:7,column:0},end:{line:7,column:30}},"6":{start:{line:8,column:0},end:{line:8,column:44}},"7":{start:{line:9,column:23},end:{line:9,column:50}},"8":{start:{line:10,column:0},end:{line:10,column:49}},"9":{start:{line:11,column:28},end:{line:11,column:77}},"10":{start:{line:12,column:29},end:{line:12,column:87}},"11":{start:{line:13,column:0},end:{line:13,column:71}},"12":{start:{line:14,column:32},end:{line:14,column:93}},"13":{start:{line:15,column:0},end:{line:15,column:80}},"14":{start:{line:16,column:31},end:{line:16,column:91}},"15":{start:{line:17,column:0},end:{line:17,column:77}},"16":{start:{line:18,column:31},end:{line:18,column:91}},"17":{start:{line:19,column:0},end:{line:19,column:77}},"18":{start:{line:20,column:28},end:{line:20,column:85}},"19":{start:{line:21,column:0},end:{line:21,column:68}},"20":{start:{line:22,column:27},end:{line:22,column:83}},"21":{start:{line:23,column:0},end:{line:23,column:65}},"22":{start:{line:24,column:0},end:{line:24,column:68}}},fnMap:{},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0},f:{},b:{},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/browser.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/browser.ts"],names:[],mappings:";;AAAA,oCAAkC;AAClC,iCAA+B;AAC/B,qCAAmC;AACnC,0BAAwB;AACxB,8BAA4B;AAC5B,4CAA0C;AAE1C,mDAA6C;AAc3C,wBAdK,wBAAa,CAcL;AAbf,8EAAuE;AAEvE,wFAAmF;AAYjF,6BAZM,yCAAkB,CAYN;AAXpB,8FAAyF;AAYvF,gCAZM,+CAAqB,CAYN;AAXvB,4FAAuF;AAYrF,+BAZM,6CAAoB,CAYN;AAXtB,4FAAuF;AAYrF,+BAZM,6CAAoB,CAYN;AAXtB,sFAAiF;AAY/E,4BAZM,uCAAiB,CAYN;AAXnB,oFAA+E;AAY7E,2BAZM,qCAAgB,CAYN;AATlB,wBAAa,CAAC,UAAU,GAAG,6BAAiB,CAAC",sourcesContent:["import 'core-js/fn/function/bind';\nimport 'core-js/fn/array/from';\nimport 'core-js/fn/array/is-array';\nimport 'core-js/fn/map';\nimport 'core-js/fn/promise';\nimport './polyfills/customevent-polyfill';\n\nimport WakandaClient from './wakanda-client';\nimport BrowserHttpClient from './data-access/http/browser-http-client';\n\nimport {CatalogBaseService} from './data-access/service/base/catalog-base-service';\nimport {CollectionBaseService} from './data-access/service/base/collection-base-service';\nimport {DataClassBaseService} from './data-access/service/base/dataclass-base-service';\nimport {DirectoryBaseService} from './data-access/service/base/directory-base-service';\nimport {EntityBaseService} from './data-access/service/base/entity-base-service';\nimport {MediaBaseService} from './data-access/service/base/media-base-service';\n\n\nWakandaClient.HttpClient = BrowserHttpClient;\n\nexport {\n  WakandaClient,\n  CatalogBaseService,\n  CollectionBaseService,\n  DataClassBaseService,\n  DirectoryBaseService,\n  EntityBaseService,\n  MediaBaseService\n};\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_29thfqdwa5.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});cov_29thfqdwa5.s[1]++;__webpack_require__(82);cov_29thfqdwa5.s[2]++;__webpack_require__(85);cov_29thfqdwa5.s[3]++;__webpack_require__(96);cov_29thfqdwa5.s[4]++;__webpack_require__(99);cov_29thfqdwa5.s[5]++;__webpack_require__(116);cov_29thfqdwa5.s[6]++;__webpack_require__(121);var wakanda_client_1=(cov_29thfqdwa5.s[7]++,__webpack_require__(122));cov_29thfqdwa5.s[8]++;exports.WakandaClient=wakanda_client_1.default;var browser_http_client_1=(cov_29thfqdwa5.s[9]++,__webpack_require__(137));var catalog_base_service_1=(cov_29thfqdwa5.s[10]++,__webpack_require__(66));cov_29thfqdwa5.s[11]++;exports.CatalogBaseService=catalog_base_service_1.CatalogBaseService;var collection_base_service_1=(cov_29thfqdwa5.s[12]++,__webpack_require__(71));cov_29thfqdwa5.s[13]++;exports.CollectionBaseService=collection_base_service_1.CollectionBaseService;var dataclass_base_service_1=(cov_29thfqdwa5.s[14]++,__webpack_require__(70));cov_29thfqdwa5.s[15]++;exports.DataClassBaseService=dataclass_base_service_1.DataClassBaseService;var directory_base_service_1=(cov_29thfqdwa5.s[16]++,__webpack_require__(74));cov_29thfqdwa5.s[17]++;exports.DirectoryBaseService=directory_base_service_1.DirectoryBaseService;var entity_base_service_1=(cov_29thfqdwa5.s[18]++,__webpack_require__(67));cov_29thfqdwa5.s[19]++;exports.EntityBaseService=entity_base_service_1.EntityBaseService;var media_base_service_1=(cov_29thfqdwa5.s[20]++,__webpack_require__(72));cov_29thfqdwa5.s[21]++;exports.MediaBaseService=media_base_service_1.MediaBaseService;cov_29thfqdwa5.s[22]++;wakanda_client_1.default.HttpClient=browser_http_client_1.default;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(83);
module.exports = __webpack_require__(4).Function.bind;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(2);

$export($export.P, 'Function', { bind: __webpack_require__(84) });


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(12);
var isObject = __webpack_require__(3);
var invoke = __webpack_require__(45);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26);
__webpack_require__(94);
module.exports = __webpack_require__(4).Array.from;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27);
var defined = __webpack_require__(28);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(47);
var descriptor = __webpack_require__(20);
var setToStringTag = __webpack_require__(23);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(10)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var anObject = __webpack_require__(5);
var getKeys = __webpack_require__(48);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(9);
var toIObject = __webpack_require__(22);
var arrayIndexOf = __webpack_require__(91)(false);
var IE_PROTO = __webpack_require__(31)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(16);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(22);
var toLength = __webpack_require__(30);
var toAbsoluteIndex = __webpack_require__(92);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(9);
var toObject = __webpack_require__(52);
var IE_PROTO = __webpack_require__(31)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(6);
var $export = __webpack_require__(2);
var toObject = __webpack_require__(52);
var call = __webpack_require__(53);
var isArrayIter = __webpack_require__(54);
var toLength = __webpack_require__(30);
var createProperty = __webpack_require__(95);
var getIterFn = __webpack_require__(55);

$export($export.S + $export.F * !__webpack_require__(32)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7);
var createDesc = __webpack_require__(20);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);
module.exports = __webpack_require__(4).Array.isArray;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(2);

$export($export.S, 'Array', { isArray: __webpack_require__(98) });


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(16);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
__webpack_require__(26);
__webpack_require__(57);
__webpack_require__(102);
__webpack_require__(109);
__webpack_require__(112);
__webpack_require__(114);
module.exports = __webpack_require__(4).Map;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(101);
var step = __webpack_require__(58);
var Iterators = __webpack_require__(15);
var toIObject = __webpack_require__(22);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(29)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(1)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(103);
var validate = __webpack_require__(61);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(104)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(7).f;
var create = __webpack_require__(47);
var redefineAll = __webpack_require__(33);
var ctx = __webpack_require__(6);
var anInstance = __webpack_require__(34);
var forOf = __webpack_require__(17);
var $iterDefine = __webpack_require__(29);
var step = __webpack_require__(58);
var setSpecies = __webpack_require__(59);
var DESCRIPTORS = __webpack_require__(8);
var fastKey = __webpack_require__(60).fastKey;
var validate = __webpack_require__(61);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(0);
var $export = __webpack_require__(2);
var redefine = __webpack_require__(11);
var redefineAll = __webpack_require__(33);
var meta = __webpack_require__(60);
var forOf = __webpack_require__(17);
var anInstance = __webpack_require__(34);
var isObject = __webpack_require__(3);
var fails = __webpack_require__(19);
var $iterDetect = __webpack_require__(32);
var setToStringTag = __webpack_require__(23);
var inheritIfRequired = __webpack_require__(105);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
var setPrototypeOf = __webpack_require__(106).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(3);
var anObject = __webpack_require__(5);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(6)(Function.call, __webpack_require__(107).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(108);
var createDesc = __webpack_require__(20);
var toIObject = __webpack_require__(22);
var toPrimitive = __webpack_require__(44);
var has = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(43);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 108 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(2);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(110)('Map') });


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(24);
var from = __webpack_require__(111);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(17);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(113)('Map');


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(2);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(115)('Map');


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(2);
var aFunction = __webpack_require__(12);
var ctx = __webpack_require__(6);
var forOf = __webpack_require__(17);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
__webpack_require__(26);
__webpack_require__(57);
__webpack_require__(117);
__webpack_require__(119);
__webpack_require__(120);
module.exports = __webpack_require__(4).Promise;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(46);
var global = __webpack_require__(0);
var ctx = __webpack_require__(6);
var classof = __webpack_require__(24);
var $export = __webpack_require__(2);
var isObject = __webpack_require__(3);
var aFunction = __webpack_require__(12);
var anInstance = __webpack_require__(34);
var forOf = __webpack_require__(17);
var speciesConstructor = __webpack_require__(62);
var task = __webpack_require__(63).set;
var microtask = __webpack_require__(118)();
var newPromiseCapabilityModule = __webpack_require__(35);
var perform = __webpack_require__(64);
var promiseResolve = __webpack_require__(65);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(33)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(23)($Promise, PROMISE);
__webpack_require__(59)(PROMISE);
Wrapper = __webpack_require__(4)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(32)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var macrotask = __webpack_require__(63).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(16)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(2);
var core = __webpack_require__(4);
var global = __webpack_require__(0);
var speciesConstructor = __webpack_require__(62);
var promiseResolve = __webpack_require__(65);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(2);
var newPromiseCapability = __webpack_require__(35);
var perform = __webpack_require__(64);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
var cov_1k1cnvo9k0=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/polyfills/customevent-polyfill.js",hash="cc983c52a8460690683a8922cbc9b75822397b80",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/polyfills/customevent-polyfill.js",statementMap:{"0":{start:{line:4,column:0},end:{line:18,column:5}},"1":{start:{line:6,column:2},end:{line:6,column:61}},"2":{start:{line:6,column:48},end:{line:6,column:61}},"3":{start:{line:9,column:4},end:{line:9,column:80}},"4":{start:{line:10,column:14},end:{line:10,column:49}},"5":{start:{line:11,column:4},end:{line:11,column:81}},"6":{start:{line:12,column:4},end:{line:12,column:15}},"7":{start:{line:15,column:2},end:{line:15,column:49}},"8":{start:{line:17,column:2},end:{line:17,column:35}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:4,column:1},end:{line:4,column:2}},loc:{start:{line:4,column:13},end:{line:18,column:1}},line:4},"1":{name:"CustomEvent",decl:{start:{line:8,column:11},end:{line:8,column:22}},loc:{start:{line:8,column:38},end:{line:13,column:3}},line:8}},branchMap:{"0":{loc:{start:{line:6,column:2},end:{line:6,column:61}},type:"if",locations:[{start:{line:6,column:2},end:{line:6,column:61}},{start:{line:6,column:2},end:{line:6,column:61}}],line:6},"1":{loc:{start:{line:9,column:13},end:{line:9,column:79}},type:"binary-expr",locations:[{start:{line:9,column:13},end:{line:9,column:19}},{start:{line:9,column:23},end:{line:9,column:79}}],line:9}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},f:{"0":0,"1":0},b:{"0":[0,0],"1":[0,0]},inputSourceMap:{version:3,sources:["src/polyfills/customevent-polyfill.js"],names:["window","CustomEvent","event","params","bubbles","cancelable","detail","undefined","evt","document","createEvent","initCustomEvent","prototype","Event"],mappings:";;AAAA;AACA,CAAC,YAAY;;AAEX,MAAK,OAAOA,OAAOC,WAAd,KAA8B,UAAnC,EAAgD,OAAO,KAAP;;AAEhD,WAASA,WAAT,CAAuBC,KAAvB,EAA8BC,MAA9B,EAAuC;AACrCA,aAASA,UAAU,EAAEC,SAAS,KAAX,EAAkBC,YAAY,KAA9B,EAAqCC,QAAQC,SAA7C,EAAnB;AACA,QAAIC,MAAMC,SAASC,WAAT,CAAsB,aAAtB,CAAV;AACAF,QAAIG,eAAJ,CAAqBT,KAArB,EAA4BC,OAAOC,OAAnC,EAA4CD,OAAOE,UAAnD,EAA+DF,OAAOG,MAAtE;AACA,WAAOE,GAAP;AACA;;AAEFP,cAAYW,SAAZ,GAAwBZ,OAAOa,KAAP,CAAaD,SAArC;;AAEAZ,SAAOC,WAAP,GAAqBA,WAArB;AACD,CAdD",file:"customevent-polyfill.js",sourceRoot:"/Users/hamza/Documents/wakanda-javascript-client",sourcesContent:["// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent\n(function () {\n\n  if ( typeof window.CustomEvent === \"function\" ) return false;\n\n  function CustomEvent ( event, params ) {\n    params = params || { bubbles: false, cancelable: false, detail: undefined };\n    var evt = document.createEvent( 'CustomEvent' );\n    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );\n    return evt;\n   }\n\n  CustomEvent.prototype = window.Event.prototype;\n\n  window.CustomEvent = CustomEvent;\n})();"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1k1cnvo9k0.s[0]++;(function(){cov_1k1cnvo9k0.f[0]++;cov_1k1cnvo9k0.s[1]++;if(typeof window.CustomEvent==="function"){cov_1k1cnvo9k0.b[0][0]++;cov_1k1cnvo9k0.s[2]++;return false;}else{cov_1k1cnvo9k0.b[0][1]++;}function CustomEvent(event,params){cov_1k1cnvo9k0.f[1]++;cov_1k1cnvo9k0.s[3]++;params=(cov_1k1cnvo9k0.b[1][0]++,params)||(cov_1k1cnvo9k0.b[1][1]++,{bubbles:false,cancelable:false,detail:undefined});var evt=(cov_1k1cnvo9k0.s[4]++,document.createEvent('CustomEvent'));cov_1k1cnvo9k0.s[5]++;evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);cov_1k1cnvo9k0.s[6]++;return evt;}cov_1k1cnvo9k0.s[7]++;CustomEvent.prototype=window.Event.prototype;cov_1k1cnvo9k0.s[8]++;window.CustomEvent=CustomEvent;})();

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_4s1bs1oy7=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/wakanda-client.ts",hash="2781505e36deaa77de9e5eba63136c52610e3056",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/wakanda-client.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:25},end:{line:3,column:63}},"2":{start:{line:4,column:27},end:{line:4,column:67}},"3":{start:{line:5,column:15},end:{line:5,column:47}},"4":{start:{line:6,column:19},end:{line:6,column:55}},"5":{start:{line:7,column:21},end:{line:7,column:47}},"6":{start:{line:8,column:35},end:{line:52,column:3}},"7":{start:{line:10,column:19},end:{line:10,column:73}},"8":{start:{line:11,column:22},end:{line:11,column:79}},"9":{start:{line:12,column:8},end:{line:14,column:11}},"10":{start:{line:15,column:8},end:{line:15,column:31}},"11":{start:{line:16,column:32},end:{line:18,column:10}},"12":{start:{line:19,column:8},end:{line:32,column:10}},"13":{start:{line:21,column:16},end:{line:21,column:77}},"14":{start:{line:24,column:16},end:{line:24,column:50}},"15":{start:{line:27,column:16},end:{line:27,column:58}},"16":{start:{line:30,column:16},end:{line:30,column:72}},"17":{start:{line:33,column:8},end:{line:40,column:10}},"18":{start:{line:35,column:16},end:{line:35,column:58}},"19":{start:{line:38,column:16},end:{line:38,column:62}},"20":{start:{line:42,column:4},end:{line:47,column:6}},"21":{start:{line:43,column:30},end:{line:45,column:10}},"22":{start:{line:46,column:8},end:{line:46,column:48}},"23":{start:{line:48,column:4},end:{line:50,column:6}},"24":{start:{line:49,column:8},end:{line:49,column:38}},"25":{start:{line:51,column:4},end:{line:51,column:25}},"26":{start:{line:53,column:0},end:{line:53,column:32}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:8,column:35},end:{line:8,column:36}},loc:{start:{line:8,column:47},end:{line:52,column:1}},line:8},"1":{name:"WakandaClient",decl:{start:{line:9,column:13},end:{line:9,column:26}},loc:{start:{line:9,column:35},end:{line:41,column:5}},line:9},"2":{name:"(anonymous_2)",decl:{start:{line:20,column:19},end:{line:20,column:20}},loc:{start:{line:20,column:59},end:{line:22,column:13}},line:20},"3":{name:"(anonymous_3)",decl:{start:{line:23,column:20},end:{line:23,column:21}},loc:{start:{line:23,column:32},end:{line:25,column:13}},line:23},"4":{name:"(anonymous_4)",decl:{start:{line:26,column:28},end:{line:26,column:29}},loc:{start:{line:26,column:40},end:{line:28,column:13}},line:26},"5":{name:"(anonymous_5)",decl:{start:{line:29,column:37},end:{line:29,column:38}},loc:{start:{line:29,column:54},end:{line:31,column:13}},line:29},"6":{name:"(anonymous_6)",decl:{start:{line:34,column:22},end:{line:34,column:23}},loc:{start:{line:34,column:40},end:{line:36,column:13}},line:34},"7":{name:"(anonymous_7)",decl:{start:{line:37,column:26},end:{line:37,column:27}},loc:{start:{line:37,column:44},end:{line:39,column:13}},line:37},"8":{name:"(anonymous_8)",decl:{start:{line:42,column:41},end:{line:42,column:42}},loc:{start:{line:42,column:64},end:{line:47,column:5}},line:42},"9":{name:"(anonymous_9)",decl:{start:{line:48,column:38},end:{line:48,column:39}},loc:{start:{line:48,column:50},end:{line:50,column:5}},line:48}},branchMap:{"0":{loc:{start:{line:10,column:19},end:{line:10,column:73}},type:"cond-expr",locations:[{start:{line:10,column:50},end:{line:10,column:61}},{start:{line:10,column:64},end:{line:10,column:73}}],line:10},"1":{loc:{start:{line:11,column:22},end:{line:11,column:79}},type:"cond-expr",locations:[{start:{line:11,column:53},end:{line:11,column:67}},{start:{line:11,column:70},end:{line:11,column:79}}],line:11},"2":{loc:{start:{line:13,column:24},end:{line:13,column:34}},type:"binary-expr",locations:[{start:{line:13,column:24},end:{line:13,column:28}},{start:{line:13,column:32},end:{line:13,column:34}}],line:13}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},b:{"0":[0,0],"1":[0,0],"2":[0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/wakanda-client.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/wakanda-client.ts"],names:[],mappings:";;AAAA,gEAA0D;AAC1D,oEAA8D;AAC9D,gDAA2C;AAC3C,wDAAmD;AAMnD,IAAM,cAAc,GAAQ,OAAO,CAAC,iBAAiB,CAAC,CAAC;AAcvD;IASE,uBAAY,MAA6C;QACvD,IAAI,IAAI,GAAG,OAAM,CAAC,MAAM,CAAC,KAAK,QAAQ,CAAC,CAAC,CAAC,MAAM,CAAC,IAAI,CAAC,CAAC,CAAC,SAAS,CAAC;QACjE,IAAI,OAAO,GAAG,OAAM,CAAC,MAAM,CAAC,KAAK,QAAQ,CAAC,CAAC,CAAC,MAAM,CAAC,OAAO,CAAC,CAAC,CAAC,SAAS,CAAC;QAEvE,IAAI,CAAC,WAAW,GAAG,IAAI,aAAa,CAAC,UAAU,CAAC;YAC9C,SAAS,EAAE,CAAC,IAAI,IAAI,EAAE,CAAC;SACxB,CAAC,CAAC;QAEH,IAAI,CAAC,OAAO,GAAG,OAAO,CAAC;QAEvB,IAAI,iBAAiB,GAAG,IAAI,4BAAiB,CAAC;YAC5C,MAAM,EAAE,IAAI;SACb,CAAC,CAAC;QAEH,IAAI,CAAC,SAAS,GAAG;YACf,KAAK,EAAE,UAAC,QAAQ,EAAE,QAAQ,EAAE,QAAQ;gBAClC,MAAM,CAAC,iBAAiB,CAAC,KAAK,CAAC,QAAQ,EAAE,QAAQ,EAAE,QAAQ,CAAC,CAAC;YAC/D,CAAC;YACD,MAAM,EAAE;gBACN,MAAM,CAAC,iBAAiB,CAAC,MAAM,EAAE,CAAC;YACpC,CAAC;YACD,cAAc,EAAE;gBACd,MAAM,CAAC,iBAAiB,CAAC,cAAc,EAAE,CAAC;YAC5C,CAAC;YACD,uBAAuB,EAAE,UAAC,KAAK;gBAC7B,MAAM,CAAC,iBAAiB,CAAC,uBAAuB,CAAC,KAAK,CAAC,CAAC;YAC1D,CAAC;SACF,CAAC;QAEF,IAAI,CAAC,MAAM,GAAG;YACZ,QAAQ,EAAE,UAAA,MAAM;gBACd,MAAM,CAAC,MAAM,YAAY,gBAAM,CAAC;YAClC,CAAC;YACD,YAAY,EAAE,UAAA,MAAM;gBAClB,MAAM,CAAC,MAAM,YAAY,oBAAU,CAAC;YACtC,CAAC;SACF,CAAC;IACJ,CAAC;IAEM,kCAAU,GAAjB,UAAkB,WAAsB;QACtC,IAAI,eAAe,GAAG,IAAI,0BAAe,CAAC;YACxC,MAAM,EAAE,IAAI;SACb,CAAC,CAAC;QAEH,MAAM,CAAC,eAAe,CAAC,GAAG,CAAC,WAAW,CAAC,CAAC;IAC1C,CAAC;IAEM,+BAAO,GAAd;QACE,MAAM,CAAC,cAAc,CAAC,OAAO,CAAC;IAChC,CAAC;IACH,oBAAC;AAAD,CAAC,AA3DD,IA2DC;AAED,kBAAe,aAAa,CAAC",sourcesContent:["import CatalogBusiness from './business/catalog-business';\nimport DirectoryBusiness from './business/directory-business';\nimport Entity from './presentation/entity';\nimport Collection from './presentation/collection';\nimport HttpClient from './data-access/http/http-client';\nimport Catalog from './presentation/catalog';\nimport BrowserHttpClient from './data-access/http/browser-http-client';\nimport NodeHttpClient from './data-access/http/node-http-client';\n\nconst packageOptions: any = require('../package.json');\n\nexport interface IDirectory {\n  login(username: string, password: string, duration?: number): Promise<boolean>;\n  logout(): Promise<boolean>;\n  getCurrentUser(): Promise<any>;\n  getCurrentUserBelongsTo(groupName: string): Promise<boolean>;\n}\n\nexport interface IHelper {\n  isEntity(object: any): boolean;\n  isCollection(object: any): boolean;\n}\n\nclass WakandaClient {\n\n  public static HttpClient: typeof BrowserHttpClient|typeof NodeHttpClient;\n\n  public _httpClient: HttpClient;\n  public directory: IDirectory;\n  public helper: IHelper;\n  public catalog: string;\n\n  constructor(params: {host?: string, catalog?: string}|any) {\n    let host = typeof(params) === 'object' ? params.host : undefined;\n    let catalog = typeof(params) === 'object' ? params.catalog : undefined;\n\n    this._httpClient = new WakandaClient.HttpClient({\n      apiPrefix: (host || '')\n    });\n\n    this.catalog = catalog;\n\n    let directoryBusiness = new DirectoryBusiness({\n      wakJSC: this\n    });\n\n    this.directory = {\n      login: (username, password, duration) => {\n        return directoryBusiness.login(username, password, duration);\n      },\n      logout: () => {\n        return directoryBusiness.logout();\n      },\n      getCurrentUser: () => {\n        return directoryBusiness.getCurrentUser();\n      },\n      getCurrentUserBelongsTo: (group) => {\n        return directoryBusiness.getCurrentUserBelongsTo(group);\n      }\n    };\n\n    this.helper = {\n      isEntity: object => {\n        return object instanceof Entity;\n      },\n      isCollection: object => {\n        return object instanceof Collection;\n      }\n    };\n  }\n\n  public getCatalog(dataClasses?: string[]): Promise<Catalog> {\n    let catalogBusiness = new CatalogBusiness({\n      wakJSC: this\n    });\n\n    return catalogBusiness.get(dataClasses);\n  }\n\n  public version(): string {\n    return packageOptions.version;\n  }\n}\n\nexport default WakandaClient;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_4s1bs1oy7.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var catalog_business_1=(cov_4s1bs1oy7.s[1]++,__webpack_require__(123));var directory_business_1=(cov_4s1bs1oy7.s[2]++,__webpack_require__(134));var entity_1=(cov_4s1bs1oy7.s[3]++,__webpack_require__(38));var collection_1=(cov_4s1bs1oy7.s[4]++,__webpack_require__(73));var packageOptions=(cov_4s1bs1oy7.s[5]++,__webpack_require__(136));var WakandaClient=(/** @class */cov_4s1bs1oy7.s[6]++,function(){cov_4s1bs1oy7.f[0]++;function WakandaClient(params){cov_4s1bs1oy7.f[1]++;var host=(cov_4s1bs1oy7.s[7]++,typeof params==='object'?(cov_4s1bs1oy7.b[0][0]++,params.host):(cov_4s1bs1oy7.b[0][1]++,undefined));var catalog=(cov_4s1bs1oy7.s[8]++,typeof params==='object'?(cov_4s1bs1oy7.b[1][0]++,params.catalog):(cov_4s1bs1oy7.b[1][1]++,undefined));cov_4s1bs1oy7.s[9]++;this._httpClient=new WakandaClient.HttpClient({apiPrefix:(cov_4s1bs1oy7.b[2][0]++,host)||(cov_4s1bs1oy7.b[2][1]++,'')});cov_4s1bs1oy7.s[10]++;this.catalog=catalog;var directoryBusiness=(cov_4s1bs1oy7.s[11]++,new directory_business_1.default({wakJSC:this}));cov_4s1bs1oy7.s[12]++;this.directory={login:function(username,password,duration){cov_4s1bs1oy7.f[2]++;cov_4s1bs1oy7.s[13]++;return directoryBusiness.login(username,password,duration);},logout:function(){cov_4s1bs1oy7.f[3]++;cov_4s1bs1oy7.s[14]++;return directoryBusiness.logout();},getCurrentUser:function(){cov_4s1bs1oy7.f[4]++;cov_4s1bs1oy7.s[15]++;return directoryBusiness.getCurrentUser();},getCurrentUserBelongsTo:function(group){cov_4s1bs1oy7.f[5]++;cov_4s1bs1oy7.s[16]++;return directoryBusiness.getCurrentUserBelongsTo(group);}};cov_4s1bs1oy7.s[17]++;this.helper={isEntity:function(object){cov_4s1bs1oy7.f[6]++;cov_4s1bs1oy7.s[18]++;return object instanceof entity_1.default;},isCollection:function(object){cov_4s1bs1oy7.f[7]++;cov_4s1bs1oy7.s[19]++;return object instanceof collection_1.default;}};}cov_4s1bs1oy7.s[20]++;WakandaClient.prototype.getCatalog=function(dataClasses){cov_4s1bs1oy7.f[8]++;var catalogBusiness=(cov_4s1bs1oy7.s[21]++,new catalog_business_1.default({wakJSC:this}));cov_4s1bs1oy7.s[22]++;return catalogBusiness.get(dataClasses);};cov_4s1bs1oy7.s[23]++;WakandaClient.prototype.version=function(){cov_4s1bs1oy7.f[9]++;cov_4s1bs1oy7.s[24]++;return packageOptions.version;};cov_4s1bs1oy7.s[25]++;return WakandaClient;}());cov_4s1bs1oy7.s[26]++;exports.default=WakandaClient;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_zvd0ijnfo=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/business/catalog-business.ts",hash="f771dc0de8f77891350c57aa1ea9dd79ab2f2eb9",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/business/catalog-business.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:26},end:{line:13,column:56}},"12":{start:{line:14,column:24},end:{line:14,column:73}},"13":{start:{line:15,column:16},end:{line:15,column:50}},"14":{start:{line:16,column:18},end:{line:16,column:54}},"15":{start:{line:17,column:27},end:{line:17,column:58}},"16":{start:{line:18,column:37},end:{line:139,column:30}},"17":{start:{line:19,column:4},end:{line:19,column:39}},"18":{start:{line:21,column:20},end:{line:21,column:50}},"19":{start:{line:22,column:8},end:{line:24,column:11}},"20":{start:{line:25,column:8},end:{line:25,column:21}},"21":{start:{line:27,column:4},end:{line:31,column:6}},"22":{start:{line:28,column:8},end:{line:30,column:9}},"23":{start:{line:29,column:12},end:{line:29,column:46}},"24":{start:{line:32,column:4},end:{line:137,column:6}},"25":{start:{line:33,column:20},end:{line:33,column:24}},"26":{start:{line:34,column:8},end:{line:34,column:34}},"27":{start:{line:35,column:8},end:{line:136,column:11}},"28":{start:{line:36,column:26},end:{line:36,column:28}},"29":{start:{line:37,column:12},end:{line:124,column:13}},"30":{start:{line:38,column:28},end:{line:38,column:51}},"31":{start:{line:39,column:33},end:{line:39,column:35}},"32":{start:{line:40,column:30},end:{line:83,column:17}},"33":{start:{line:41,column:20},end:{line:82,column:21}},"34":{start:{line:43,column:28},end:{line:47,column:32}},"35":{start:{line:48,column:28},end:{line:48,column:59}},"36":{start:{line:49,column:28},end:{line:49,column:34}},"37":{start:{line:53,column:43},end:{line:53,column:107}},"38":{start:{line:54,column:45},end:{line:54,column:104}},"39":{start:{line:55,column:28},end:{line:61,column:32}},"40":{start:{line:62,column:28},end:{line:62,column:34}},"41":{start:{line:65,column:28},end:{line:70,column:31}},"42":{start:{line:66,column:32},end:{line:69,column:33}},"43":{start:{line:67,column:36},end:{line:67,column:67}},"44":{start:{line:68,column:36},end:{line:68,column:48}},"45":{start:{line:71,column:49},end:{line:76,column:30}},"46":{start:{line:77,column:28},end:{line:77,column:60}},"47":{start:{line:78,column:28},end:{line:78,column:75}},"48":{start:{line:79,column:28},end:{line:79,column:34}},"49":{start:{line:81,column:28},end:{line:81,column:106}},"50":{start:{line:84,column:16},end:{line:87,column:17}},"51":{start:{line:85,column:31},end:{line:85,column:37}},"52":{start:{line:86,column:20},end:{line:86,column:34}},"53":{start:{line:88,column:30},end:{line:92,column:17}},"54":{start:{line:93,column:16},end:{line:108,column:17}},"55":{start:{line:94,column:33},end:{line:94,column:39}},"56":{start:{line:95,column:20},end:{line:107,column:21}},"57":{start:{line:97,column:28},end:{line:97,column:61}},"58":{start:{line:98,column:28},end:{line:98,column:34}},"59":{start:{line:100,column:28},end:{line:100,column:65}},"60":{start:{line:101,column:28},end:{line:101,column:34}},"61":{start:{line:103,column:28},end:{line:103,column:64}},"62":{start:{line:104,column:28},end:{line:104,column:34}},"63":{start:{line:106,column:28},end:{line:106,column:111}},"64":{start:{line:109,column:32},end:{line:114,column:18}},"65":{start:{line:116,column:40},end:{line:121,column:18}},"66":{start:{line:122,column:16},end:{line:122,column:55}},"67":{start:{line:123,column:16},end:{line:123,column:40}},"68":{start:{line:125,column:26},end:{line:127,column:14}},"69":{start:{line:129,column:12},end:{line:134,column:13}},"70":{start:{line:130,column:29},end:{line:130,column:35}},"71":{start:{line:131,column:16},end:{line:133,column:17}},"72":{start:{line:132,column:20},end:{line:132,column:97}},"73":{start:{line:135,column:12},end:{line:135,column:27}},"74":{start:{line:138,column:4},end:{line:138,column:27}},"75":{start:{line:140,column:0},end:{line:140,column:34}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:18,column:37},end:{line:18,column:38}},loc:{start:{line:18,column:55},end:{line:139,column:1}},line:18},"6":{name:"CatalogBusiness",decl:{start:{line:20,column:13},end:{line:20,column:28}},loc:{start:{line:20,column:34},end:{line:26,column:5}},line:20},"7":{name:"(anonymous_7)",decl:{start:{line:27,column:46},end:{line:27,column:47}},loc:{start:{line:27,column:64},end:{line:31,column:5}},line:27},"8":{name:"(anonymous_8)",decl:{start:{line:32,column:36},end:{line:32,column:37}},loc:{start:{line:32,column:59},end:{line:137,column:5}},line:32},"9":{name:"(anonymous_9)",decl:{start:{line:35,column:50},end:{line:35,column:51}},loc:{start:{line:35,column:79},end:{line:136,column:9}},line:35},"10":{name:"(anonymous_10)",decl:{start:{line:40,column:30},end:{line:40,column:31}},loc:{start:{line:40,column:46},end:{line:83,column:17}},line:40},"11":{name:"(anonymous_11)",decl:{start:{line:65,column:51},end:{line:65,column:52}},loc:{start:{line:65,column:73},end:{line:70,column:29}},line:65}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:21,column:20},end:{line:21,column:50}},type:"binary-expr",locations:[{start:{line:21,column:20},end:{line:21,column:42}},{start:{line:21,column:46},end:{line:21,column:50}}],line:21},"5":{loc:{start:{line:28,column:8},end:{line:30,column:9}},type:"if",locations:[{start:{line:28,column:8},end:{line:30,column:9}},{start:{line:28,column:8},end:{line:30,column:9}}],line:28},"6":{loc:{start:{line:41,column:20},end:{line:82,column:21}},type:"switch",locations:[{start:{line:42,column:24},end:{line:49,column:34}},{start:{line:50,column:24},end:{line:50,column:39}},{start:{line:51,column:24},end:{line:51,column:42}},{start:{line:52,column:24},end:{line:62,column:34}},{start:{line:63,column:24},end:{line:79,column:34}},{start:{line:80,column:24},end:{line:81,column:106}}],line:41},"7":{loc:{start:{line:53,column:43},end:{line:53,column:107}},type:"binary-expr",locations:[{start:{line:53,column:43},end:{line:53,column:56}},{start:{line:53,column:61},end:{line:53,column:82}},{start:{line:53,column:86},end:{line:53,column:106}}],line:53},"8":{loc:{start:{line:54,column:45},end:{line:54,column:104}},type:"cond-expr",locations:[{start:{line:54,column:77},end:{line:54,column:92}},{start:{line:54,column:95},end:{line:54,column:104}}],line:54},"9":{loc:{start:{line:66,column:32},end:{line:69,column:33}},type:"if",locations:[{start:{line:66,column:32},end:{line:69,column:33}},{start:{line:66,column:32},end:{line:69,column:33}}],line:66},"10":{loc:{start:{line:95,column:20},end:{line:107,column:21}},type:"switch",locations:[{start:{line:96,column:24},end:{line:98,column:34}},{start:{line:99,column:24},end:{line:101,column:34}},{start:{line:102,column:24},end:{line:104,column:34}},{start:{line:105,column:24},end:{line:106,column:111}}],line:95},"11":{loc:{start:{line:131,column:16},end:{line:133,column:17}},type:"if",locations:[{start:{line:131,column:16},end:{line:133,column:17}},{start:{line:131,column:16},end:{line:133,column:17}}],line:131}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0,0,0,0,0],"7":[0,0,0],"8":[0,0],"9":[0,0],"10":[0,0,0,0],"11":[0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/business/catalog-business.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/business/catalog-business.ts"],names:[],mappings:"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",sourcesContent:["import AbstractBusiness from './abstract-business';\nimport CatalogService from '../data-access/service/catalog-service';\nimport Catalog from '../presentation/catalog';\nimport {DataClass, Attribute, AttributeRelated, AttributeCollection} from '../presentation/dataclass';\nimport DataClassBusiness from './dataclass-business';\n\nexport interface IDataClassDBO {\n  name: string;\n  collectionName: string;\n  dataURI: string;\n  attributes: {\n    name: string,\n    type: string,\n    kind: string,\n    readOnly: boolean,\n    simpleDate: boolean\n  }[];\n  methods: {\n    name: string,\n    applyTo: string\n  }[];\n}\n\nclass CatalogBusiness extends AbstractBusiness {\n\n  private service: CatalogService;\n  private seenDataClasses: string[];\n\n  constructor(obj: any) {\n    super(obj);\n\n    this.service = new CatalogService({\n      wakJSC: this.wakJSC\n    });\n  }\n\n  private needDataClass(dcName: string) {\n    if (this.seenDataClasses.indexOf(dcName) === -1) {\n      this.seenDataClasses.push(dcName);\n    }\n  }\n\n  public get(dataClasses?: string[]): Promise<Catalog> {\n\n    this.seenDataClasses = [];\n\n    return this.service.get(dataClasses).then((dataClassDBOArray: IDataClassDBO[]) => {\n\n      let dcArray: DataClass[] = [];\n\n      for (let dcDBO of dataClassDBOArray) {\n        let attributes: Attribute[] = [];\n\n        for (let attr of dcDBO.attributes) {\n          switch (attr.kind) {\n            case 'relatedEntity':\n              attributes.push(new AttributeRelated({\n                name: attr.name,\n                type: attr.type,\n                kind: attr.kind\n              }));\n              this.needDataClass(attr.type);\n              break;\n            case 'storage':\n            case 'calculated':\n            case 'alias':\n              let readOnly = attr.readOnly || (attr.type === 'image' || attr.type === 'blob');\n              let simpleDate = attr.simpleDate !== undefined ? attr.simpleDate : undefined;\n              attributes.push(new Attribute({\n                name: attr.name,\n                type: attr.type,\n                readOnly,\n                kind: attr.kind,\n                simpleDate: simpleDate\n              }));\n              break;\n            case 'relatedEntities':\n              let entityType: string;\n              dataClassDBOArray.some((_dataClass) => {\n                if (_dataClass.collectionName === attr.type) {\n                  entityType = _dataClass.name;\n                  return true;\n                }\n              });\n              let attrCollection = new AttributeCollection({\n                name: attr.name,\n                type: attr.type,\n                kind: attr.kind,\n                entityType: entityType\n              });\n              attributes.push(attrCollection);\n              this.needDataClass(attrCollection.entityType);\n              break;\n            default:\n              throw new Error('[WakandaClient] Unhandled ' + attr.kind + ' attribute type');\n          }\n        }\n\n        let methods: {\n          entity: string[],\n          collection: string[],\n          dataClass: string[]\n        } = {\n          entity: [],\n          collection: [],\n          dataClass: []\n        };\n\n        for (let method of dcDBO.methods) {\n          switch (method.applyTo) {\n            case 'entity':\n              methods.entity.push(method.name);\n              break;\n            case 'entityCollection':\n              methods.collection.push(method.name);\n              break;\n            case 'dataClass':\n              methods.dataClass.push(method.name);\n              break;\n            default:\n              throw new Error('[WakandaClient] Unrecognized ' + method.applyTo + ' method type');\n          }\n        }\n\n        let dataClass = new DataClass({\n          name: dcDBO.name,\n          collectionName: dcDBO.collectionName,\n          attributes,\n          methods\n        });\n\n        //Binding framework methods to the dataclass\n        let dataClassBusiness = new DataClassBusiness({\n          wakJSC: this.wakJSC,\n          dataClass,\n          methods,\n          dataURI: dcDBO.dataURI\n        });\n        dataClassBusiness._decorateDataClass();\n\n        dcArray.push(dataClass);\n      }\n\n      let catalog = new Catalog({\n        dataClasses: dcArray\n      });\n\n      //Check if we have all needed dataClasses on the catalog\n      for (let dcName of this.seenDataClasses) {\n        if (!catalog[dcName]) {\n          throw new Error('Needed ' + dcName + ' dataClass is not present on catalog');\n        }\n      }\n\n      return catalog;\n    });\n  }\n}\n\nexport default CatalogBusiness;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_zvd0ijnfo.s[0]++,(cov_zvd0ijnfo.b[0][0]++,this)&&(cov_zvd0ijnfo.b[0][1]++,this.__extends)||(cov_zvd0ijnfo.b[0][2]++,function(){cov_zvd0ijnfo.f[0]++;var extendStatics=(cov_zvd0ijnfo.s[1]++,(cov_zvd0ijnfo.b[1][0]++,Object.setPrototypeOf)||(cov_zvd0ijnfo.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_zvd0ijnfo.b[1][2]++,function(d,b){cov_zvd0ijnfo.f[1]++;cov_zvd0ijnfo.s[2]++;d.__proto__=b;})||(cov_zvd0ijnfo.b[1][3]++,function(d,b){cov_zvd0ijnfo.f[2]++;cov_zvd0ijnfo.s[3]++;for(var p in b){cov_zvd0ijnfo.s[4]++;if(b.hasOwnProperty(p)){cov_zvd0ijnfo.b[2][0]++;cov_zvd0ijnfo.s[5]++;d[p]=b[p];}else{cov_zvd0ijnfo.b[2][1]++;}}}));cov_zvd0ijnfo.s[6]++;return function(d,b){cov_zvd0ijnfo.f[3]++;cov_zvd0ijnfo.s[7]++;extendStatics(d,b);function __(){cov_zvd0ijnfo.f[4]++;cov_zvd0ijnfo.s[8]++;this.constructor=d;}cov_zvd0ijnfo.s[9]++;d.prototype=b===null?(cov_zvd0ijnfo.b[3][0]++,Object.create(b)):(cov_zvd0ijnfo.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_zvd0ijnfo.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_business_1=(cov_zvd0ijnfo.s[11]++,__webpack_require__(13));var catalog_service_1=(cov_zvd0ijnfo.s[12]++,__webpack_require__(124));var catalog_1=(cov_zvd0ijnfo.s[13]++,__webpack_require__(125));var dataclass_1=(cov_zvd0ijnfo.s[14]++,__webpack_require__(36));var dataclass_business_1=(cov_zvd0ijnfo.s[15]++,__webpack_require__(126));var CatalogBusiness=(/** @class */cov_zvd0ijnfo.s[16]++,function(_super){cov_zvd0ijnfo.f[5]++;cov_zvd0ijnfo.s[17]++;__extends(CatalogBusiness,_super);function CatalogBusiness(obj){cov_zvd0ijnfo.f[6]++;var _this=(cov_zvd0ijnfo.s[18]++,(cov_zvd0ijnfo.b[4][0]++,_super.call(this,obj))||(cov_zvd0ijnfo.b[4][1]++,this));cov_zvd0ijnfo.s[19]++;_this.service=new catalog_service_1.default({wakJSC:_this.wakJSC});cov_zvd0ijnfo.s[20]++;return _this;}cov_zvd0ijnfo.s[21]++;CatalogBusiness.prototype.needDataClass=function(dcName){cov_zvd0ijnfo.f[7]++;cov_zvd0ijnfo.s[22]++;if(this.seenDataClasses.indexOf(dcName)===-1){cov_zvd0ijnfo.b[5][0]++;cov_zvd0ijnfo.s[23]++;this.seenDataClasses.push(dcName);}else{cov_zvd0ijnfo.b[5][1]++;}};cov_zvd0ijnfo.s[24]++;CatalogBusiness.prototype.get=function(dataClasses){cov_zvd0ijnfo.f[8]++;var _this=(cov_zvd0ijnfo.s[25]++,this);cov_zvd0ijnfo.s[26]++;this.seenDataClasses=[];cov_zvd0ijnfo.s[27]++;return this.service.get(dataClasses).then(function(dataClassDBOArray){cov_zvd0ijnfo.f[9]++;var dcArray=(cov_zvd0ijnfo.s[28]++,[]);cov_zvd0ijnfo.s[29]++;for(var _i=0,dataClassDBOArray_1=dataClassDBOArray;_i<dataClassDBOArray_1.length;_i++){var dcDBO=(cov_zvd0ijnfo.s[30]++,dataClassDBOArray_1[_i]);var attributes=(cov_zvd0ijnfo.s[31]++,[]);cov_zvd0ijnfo.s[32]++;var _loop_1=function(attr){cov_zvd0ijnfo.f[10]++;cov_zvd0ijnfo.s[33]++;switch(attr.kind){case'relatedEntity':cov_zvd0ijnfo.b[6][0]++;cov_zvd0ijnfo.s[34]++;attributes.push(new dataclass_1.AttributeRelated({name:attr.name,type:attr.type,kind:attr.kind}));cov_zvd0ijnfo.s[35]++;_this.needDataClass(attr.type);cov_zvd0ijnfo.s[36]++;break;case'storage':cov_zvd0ijnfo.b[6][1]++;case'calculated':cov_zvd0ijnfo.b[6][2]++;case'alias':cov_zvd0ijnfo.b[6][3]++;var readOnly=(cov_zvd0ijnfo.s[37]++,(cov_zvd0ijnfo.b[7][0]++,attr.readOnly)||(cov_zvd0ijnfo.b[7][1]++,attr.type==='image')||(cov_zvd0ijnfo.b[7][2]++,attr.type==='blob'));var simpleDate=(cov_zvd0ijnfo.s[38]++,attr.simpleDate!==undefined?(cov_zvd0ijnfo.b[8][0]++,attr.simpleDate):(cov_zvd0ijnfo.b[8][1]++,undefined));cov_zvd0ijnfo.s[39]++;attributes.push(new dataclass_1.Attribute({name:attr.name,type:attr.type,readOnly:readOnly,kind:attr.kind,simpleDate:simpleDate}));cov_zvd0ijnfo.s[40]++;break;case'relatedEntities':cov_zvd0ijnfo.b[6][4]++;var entityType_1;cov_zvd0ijnfo.s[41]++;dataClassDBOArray.some(function(_dataClass){cov_zvd0ijnfo.f[11]++;cov_zvd0ijnfo.s[42]++;if(_dataClass.collectionName===attr.type){cov_zvd0ijnfo.b[9][0]++;cov_zvd0ijnfo.s[43]++;entityType_1=_dataClass.name;cov_zvd0ijnfo.s[44]++;return true;}else{cov_zvd0ijnfo.b[9][1]++;}});var attrCollection=(cov_zvd0ijnfo.s[45]++,new dataclass_1.AttributeCollection({name:attr.name,type:attr.type,kind:attr.kind,entityType:entityType_1}));cov_zvd0ijnfo.s[46]++;attributes.push(attrCollection);cov_zvd0ijnfo.s[47]++;_this.needDataClass(attrCollection.entityType);cov_zvd0ijnfo.s[48]++;break;default:cov_zvd0ijnfo.b[6][5]++;cov_zvd0ijnfo.s[49]++;throw new Error('[WakandaClient] Unhandled '+attr.kind+' attribute type');}};cov_zvd0ijnfo.s[50]++;for(var _a=0,_b=dcDBO.attributes;_a<_b.length;_a++){var attr=(cov_zvd0ijnfo.s[51]++,_b[_a]);cov_zvd0ijnfo.s[52]++;_loop_1(attr);}var methods=(cov_zvd0ijnfo.s[53]++,{entity:[],collection:[],dataClass:[]});cov_zvd0ijnfo.s[54]++;for(var _c=0,_d=dcDBO.methods;_c<_d.length;_c++){var method=(cov_zvd0ijnfo.s[55]++,_d[_c]);cov_zvd0ijnfo.s[56]++;switch(method.applyTo){case'entity':cov_zvd0ijnfo.b[10][0]++;cov_zvd0ijnfo.s[57]++;methods.entity.push(method.name);cov_zvd0ijnfo.s[58]++;break;case'entityCollection':cov_zvd0ijnfo.b[10][1]++;cov_zvd0ijnfo.s[59]++;methods.collection.push(method.name);cov_zvd0ijnfo.s[60]++;break;case'dataClass':cov_zvd0ijnfo.b[10][2]++;cov_zvd0ijnfo.s[61]++;methods.dataClass.push(method.name);cov_zvd0ijnfo.s[62]++;break;default:cov_zvd0ijnfo.b[10][3]++;cov_zvd0ijnfo.s[63]++;throw new Error('[WakandaClient] Unrecognized '+method.applyTo+' method type');}}var dataClass=(cov_zvd0ijnfo.s[64]++,new dataclass_1.DataClass({name:dcDBO.name,collectionName:dcDBO.collectionName,attributes:attributes,methods:methods}));//Binding framework methods to the dataclass
var dataClassBusiness=(cov_zvd0ijnfo.s[65]++,new dataclass_business_1.default({wakJSC:_this.wakJSC,dataClass:dataClass,methods:methods,dataURI:dcDBO.dataURI}));cov_zvd0ijnfo.s[66]++;dataClassBusiness._decorateDataClass();cov_zvd0ijnfo.s[67]++;dcArray.push(dataClass);}var catalog=(cov_zvd0ijnfo.s[68]++,new catalog_1.default({dataClasses:dcArray}));//Check if we have all needed dataClasses on the catalog
cov_zvd0ijnfo.s[69]++;for(var _e=0,_f=_this.seenDataClasses;_e<_f.length;_e++){var dcName=(cov_zvd0ijnfo.s[70]++,_f[_e]);cov_zvd0ijnfo.s[71]++;if(!catalog[dcName]){cov_zvd0ijnfo.b[11][0]++;cov_zvd0ijnfo.s[72]++;throw new Error('Needed '+dcName+' dataClass is not present on catalog');}else{cov_zvd0ijnfo.b[11][1]++;}}cov_zvd0ijnfo.s[73]++;return catalog;});};cov_zvd0ijnfo.s[74]++;return CatalogBusiness;}(abstract_business_1.default));cov_zvd0ijnfo.s[75]++;exports.default=CatalogBusiness;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_1x4yskawai=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/catalog-service.ts",hash="f37abab1304f2b519ce46f57c1d7bed85d9f28aa",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/catalog-service.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:25},end:{line:13,column:54}},"12":{start:{line:14,column:29},end:{line:14,column:67}},"13":{start:{line:15,column:36},end:{line:28,column:29}},"14":{start:{line:16,column:4},end:{line:16,column:38}},"15":{start:{line:18,column:8},end:{line:18,column:72}},"16":{start:{line:20,column:4},end:{line:26,column:6}},"17":{start:{line:21,column:8},end:{line:25,column:11}},"18":{start:{line:27,column:4},end:{line:27,column:26}},"19":{start:{line:29,column:0},end:{line:29,column:33}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:15,column:36},end:{line:15,column:37}},loc:{start:{line:15,column:54},end:{line:28,column:1}},line:15},"6":{name:"CatalogService",decl:{start:{line:17,column:13},end:{line:17,column:27}},loc:{start:{line:17,column:30},end:{line:19,column:5}},line:17},"7":{name:"(anonymous_7)",decl:{start:{line:20,column:35},end:{line:20,column:36}},loc:{start:{line:20,column:58},end:{line:26,column:5}},line:20}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:18,column:15},end:{line:18,column:71}},type:"binary-expr",locations:[{start:{line:18,column:15},end:{line:18,column:30}},{start:{line:18,column:34},end:{line:18,column:63}},{start:{line:18,column:67},end:{line:18,column:71}}],line:18}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/catalog-service.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/catalog-service.ts"],names:[],mappings:";;;;;;;;;;;;AAAA,uDAAiD;AAEjD,oEAA+D;AAE/D;IAA6B,kCAAe;IAA5C;;IASA,CAAC;IAPQ,4BAAG,GAAV,UAAW,WAA8B;QACvC,MAAM,CAAC,yCAAkB,CAAC,GAAG,CAAC;YAC5B,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,WAAW,aAAA;YACX,OAAO,EAAE,IAAI,CAAC,MAAM,CAAC,OAAO;SAC7B,CAAC,CAAC;IACL,CAAC;IACH,qBAAC;AAAD,CAAC,AATD,CAA6B,0BAAe,GAS3C;AAED,kBAAe,cAAc,CAAC",sourcesContent:["import AbstractService from './abstract-service';\nimport {IDataClassDBO} from '../../business/catalog-business';\nimport {CatalogBaseService} from './base/catalog-base-service';\n\nclass CatalogService extends AbstractService {\n\n  public get(dataClasses?: string| string[]): Promise<IDataClassDBO[]> {\n    return CatalogBaseService.get({\n      httpClient: this.httpClient,\n      dataClasses,\n      catalog: this.wakJSC.catalog\n    });\n  }\n}\n\nexport default CatalogService;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_1x4yskawai.s[0]++,(cov_1x4yskawai.b[0][0]++,this)&&(cov_1x4yskawai.b[0][1]++,this.__extends)||(cov_1x4yskawai.b[0][2]++,function(){cov_1x4yskawai.f[0]++;var extendStatics=(cov_1x4yskawai.s[1]++,(cov_1x4yskawai.b[1][0]++,Object.setPrototypeOf)||(cov_1x4yskawai.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_1x4yskawai.b[1][2]++,function(d,b){cov_1x4yskawai.f[1]++;cov_1x4yskawai.s[2]++;d.__proto__=b;})||(cov_1x4yskawai.b[1][3]++,function(d,b){cov_1x4yskawai.f[2]++;cov_1x4yskawai.s[3]++;for(var p in b){cov_1x4yskawai.s[4]++;if(b.hasOwnProperty(p)){cov_1x4yskawai.b[2][0]++;cov_1x4yskawai.s[5]++;d[p]=b[p];}else{cov_1x4yskawai.b[2][1]++;}}}));cov_1x4yskawai.s[6]++;return function(d,b){cov_1x4yskawai.f[3]++;cov_1x4yskawai.s[7]++;extendStatics(d,b);function __(){cov_1x4yskawai.f[4]++;cov_1x4yskawai.s[8]++;this.constructor=d;}cov_1x4yskawai.s[9]++;d.prototype=b===null?(cov_1x4yskawai.b[3][0]++,Object.create(b)):(cov_1x4yskawai.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_1x4yskawai.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_service_1=(cov_1x4yskawai.s[11]++,__webpack_require__(14));var catalog_base_service_1=(cov_1x4yskawai.s[12]++,__webpack_require__(66));var CatalogService=(/** @class */cov_1x4yskawai.s[13]++,function(_super){cov_1x4yskawai.f[5]++;cov_1x4yskawai.s[14]++;__extends(CatalogService,_super);function CatalogService(){cov_1x4yskawai.f[6]++;cov_1x4yskawai.s[15]++;return(cov_1x4yskawai.b[4][0]++,_super!==null)&&(cov_1x4yskawai.b[4][1]++,_super.apply(this,arguments))||(cov_1x4yskawai.b[4][2]++,this);}cov_1x4yskawai.s[16]++;CatalogService.prototype.get=function(dataClasses){cov_1x4yskawai.f[7]++;cov_1x4yskawai.s[17]++;return catalog_base_service_1.CatalogBaseService.get({httpClient:this.httpClient,dataClasses:dataClasses,catalog:this.wakJSC.catalog});};cov_1x4yskawai.s[18]++;return CatalogService;}(abstract_service_1.default));cov_1x4yskawai.s[19]++;exports.default=CatalogService;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_b7g8a4srk=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/presentation/catalog.ts",hash="bc1441e633c71b969d13ffc15083336efa6c2ac1",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/presentation/catalog.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:29},end:{line:12,column:3}},"2":{start:{line:5,column:26},end:{line:5,column:40}},"3":{start:{line:6,column:8},end:{line:9,column:9}},"4":{start:{line:7,column:21},end:{line:7,column:38}},"5":{start:{line:8,column:12},end:{line:8,column:31}},"6":{start:{line:11,column:4},end:{line:11,column:19}},"7":{start:{line:13,column:0},end:{line:13,column:26}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:29},end:{line:3,column:30}},loc:{start:{line:3,column:41},end:{line:12,column:1}},line:3},"1":{name:"Catalog",decl:{start:{line:4,column:13},end:{line:4,column:20}},loc:{start:{line:4,column:25},end:{line:10,column:5}},line:4}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},f:{"0":0,"1":0},b:{},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/presentation/catalog.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/presentation/catalog.ts"],names:[],mappings:";;AAEA;IAIE,iBAAY,EAAyC;YAAxC,4BAAW;QACtB,GAAG,CAAC,CAAW,UAAW,EAAX,2BAAW,EAAX,yBAAW,EAAX,IAAW;YAArB,IAAI,EAAE,oBAAA;YACT,IAAI,CAAC,EAAE,CAAC,IAAI,CAAC,GAAG,EAAE,CAAC;SACpB;IACH,CAAC;IACH,cAAC;AAAD,CAAC,AATD,IASC;AAED,kBAAe,OAAO,CAAC",sourcesContent:["import {DataClass} from './dataclass';\n\nclass Catalog {\n\n  [key: string]: DataClass;\n\n  constructor({dataClasses}: {dataClasses: DataClass[]}) {\n    for (let dc of dataClasses) {\n      this[dc.name] = dc;\n    }\n  }\n}\n\nexport default Catalog;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_b7g8a4srk.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var Catalog=(/** @class */cov_b7g8a4srk.s[1]++,function(){cov_b7g8a4srk.f[0]++;function Catalog(_a){cov_b7g8a4srk.f[1]++;var dataClasses=(cov_b7g8a4srk.s[2]++,_a.dataClasses);cov_b7g8a4srk.s[3]++;for(var _i=0,dataClasses_1=dataClasses;_i<dataClasses_1.length;_i++){var dc=(cov_b7g8a4srk.s[4]++,dataClasses_1[_i]);cov_b7g8a4srk.s[5]++;this[dc.name]=dc;}}cov_b7g8a4srk.s[6]++;return Catalog;}());cov_b7g8a4srk.s[7]++;exports.default=Catalog;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_1pgbpemb4k=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/business/dataclass-business.ts",hash="c69bc284c52a89b82eacdd042854696641ec33aa",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/business/dataclass-business.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:26},end:{line:13,column:56}},"12":{start:{line:14,column:24},end:{line:14,column:52}},"13":{start:{line:15,column:26},end:{line:15,column:77}},"14":{start:{line:16,column:28},end:{line:16,column:60}},"15":{start:{line:17,column:23},end:{line:17,column:50}},"16":{start:{line:18,column:15},end:{line:18,column:48}},"17":{start:{line:19,column:19},end:{line:19,column:56}},"18":{start:{line:20,column:18},end:{line:20,column:54}},"19":{start:{line:21,column:14},end:{line:21,column:46}},"20":{start:{line:22,column:14},end:{line:22,column:33}},"21":{start:{line:23,column:23},end:{line:23,column:50}},"22":{start:{line:24,column:13},end:{line:24,column:30}},"23":{start:{line:26,column:28},end:{line:26,column:37}},"24":{start:{line:27,column:39},end:{line:293,column:30}},"25":{start:{line:28,column:4},end:{line:28,column:41}},"26":{start:{line:30,column:21},end:{line:30,column:30}},"27":{start:{line:30,column:44},end:{line:30,column:56}},"28":{start:{line:30,column:68},end:{line:30,column:78}},"29":{start:{line:30,column:90},end:{line:30,column:100}},"30":{start:{line:31,column:20},end:{line:31,column:65}},"31":{start:{line:32,column:8},end:{line:32,column:36}},"32":{start:{line:33,column:8},end:{line:33,column:32}},"33":{start:{line:34,column:8},end:{line:37,column:11}},"34":{start:{line:38,column:8},end:{line:38,column:32}},"35":{start:{line:39,column:8},end:{line:39,column:57}},"36":{start:{line:40,column:8},end:{line:40,column:60}},"37":{start:{line:41,column:8},end:{line:41,column:21}},"38":{start:{line:43,column:4},end:{line:50,column:6}},"39":{start:{line:46,column:8},end:{line:46,column:51}},"40":{start:{line:47,column:8},end:{line:47,column:53}},"41":{start:{line:48,column:8},end:{line:48,column:55}},"42":{start:{line:49,column:8},end:{line:49,column:38}},"43":{start:{line:51,column:4},end:{line:61,column:6}},"44":{start:{line:52,column:20},end:{line:52,column:24}},"45":{start:{line:53,column:19},end:{line:53,column:23}},"46":{start:{line:54,column:8},end:{line:60,column:11}},"47":{start:{line:56,column:12},end:{line:59,column:14}},"48":{start:{line:57,column:29},end:{line:57,column:50}},"49":{start:{line:58,column:16},end:{line:58,column:55}},"50":{start:{line:62,column:4},end:{line:68,column:6}},"51":{start:{line:63,column:20},end:{line:63,column:24}},"52":{start:{line:64,column:8},end:{line:67,column:11}},"53":{start:{line:66,column:12},end:{line:66,column:94}},"54":{start:{line:69,column:4},end:{line:81,column:6}},"55":{start:{line:70,column:20},end:{line:70,column:24}},"56":{start:{line:71,column:18},end:{line:71,column:31}},"57":{start:{line:72,column:8},end:{line:75,column:9}},"58":{start:{line:74,column:12},end:{line:74,column:115}},"59":{start:{line:76,column:8},end:{line:80,column:11}},"60":{start:{line:77,column:12},end:{line:79,column:15}},"61":{start:{line:82,column:4},end:{line:99,column:6}},"62":{start:{line:83,column:20},end:{line:83,column:24}},"63":{start:{line:84,column:18},end:{line:84,column:31}},"64":{start:{line:85,column:28},end:{line:85,column:38}},"65":{start:{line:86,column:8},end:{line:88,column:9}},"66":{start:{line:87,column:12},end:{line:87,column:77}},"67":{start:{line:89,column:8},end:{line:91,column:9}},"68":{start:{line:90,column:12},end:{line:90,column:61}},"69":{start:{line:92,column:8},end:{line:98,column:11}},"70":{start:{line:93,column:12},end:{line:97,column:15}},"71":{start:{line:100,column:4},end:{line:119,column:6}},"72":{start:{line:101,column:29},end:{line:101,column:31}},"73":{start:{line:102,column:8},end:{line:109,column:9}},"74":{start:{line:103,column:12},end:{line:108,column:13}},"75":{start:{line:104,column:16},end:{line:107,column:17}},"76":{start:{line:105,column:20},end:{line:105,column:54}},"77":{start:{line:106,column:20},end:{line:106,column:38}},"78":{start:{line:110,column:21},end:{line:112,column:10}},"79":{start:{line:113,column:8},end:{line:117,column:9}},"80":{start:{line:114,column:12},end:{line:116,column:13}},"81":{start:{line:115,column:16},end:{line:115,column:52}},"82":{start:{line:118,column:8},end:{line:118,column:22}},"83":{start:{line:120,column:4},end:{line:142,column:6}},"84":{start:{line:121,column:18},end:{line:121,column:24}},"85":{start:{line:121,column:37},end:{line:121,column:48}},"86":{start:{line:121,column:56},end:{line:121,column:62}},"87":{start:{line:122,column:21},end:{line:126,column:10}},"88":{start:{line:127,column:23},end:{line:132,column:10}},"89":{start:{line:133,column:8},end:{line:133,column:35}},"90":{start:{line:134,column:8},end:{line:140,column:9}},"91":{start:{line:135,column:12},end:{line:138,column:15}},"92":{start:{line:139,column:12},end:{line:139,column:42}},"93":{start:{line:141,column:8},end:{line:141,column:22}},"94":{start:{line:143,column:4},end:{line:160,column:6}},"95":{start:{line:144,column:18},end:{line:144,column:24}},"96":{start:{line:144,column:37},end:{line:144,column:48}},"97":{start:{line:144,column:61},end:{line:144,column:72}},"98":{start:{line:144,column:90},end:{line:144,column:106}},"99":{start:{line:145,column:25},end:{line:148,column:10}},"100":{start:{line:149,column:23},end:{line:157,column:10}},"101":{start:{line:158,column:8},end:{line:158,column:39}},"102":{start:{line:159,column:8},end:{line:159,column:26}},"103":{start:{line:161,column:4},end:{line:174,column:6}},"104":{start:{line:162,column:18},end:{line:162,column:24}},"105":{start:{line:162,column:36},end:{line:162,column:46}},"106":{start:{line:162,column:64},end:{line:162,column:80}},"107":{start:{line:162,column:91},end:{line:162,column:100}},"108":{start:{line:163,column:20},end:{line:163,column:53}},"109":{start:{line:164,column:23},end:{line:171,column:10}},"110":{start:{line:172,column:8},end:{line:172,column:34}},"111":{start:{line:173,column:8},end:{line:173,column:21}},"112":{start:{line:175,column:4},end:{line:240,column:6}},"113":{start:{line:176,column:18},end:{line:176,column:24}},"114":{start:{line:176,column:35},end:{line:176,column:44}},"115":{start:{line:177,column:8},end:{line:177,column:36}},"116":{start:{line:178,column:8},end:{line:238,column:9}},"117":{start:{line:179,column:23},end:{line:179,column:29}},"118":{start:{line:180,column:31},end:{line:180,column:45}},"119":{start:{line:181,column:12},end:{line:237,column:13}},"120":{start:{line:182,column:16},end:{line:221,column:17}},"121":{start:{line:185,column:35},end:{line:185,column:71}},"122":{start:{line:186,column:20},end:{line:188,column:23}},"123":{start:{line:190,column:21},end:{line:221,column:17}},"124":{start:{line:191,column:35},end:{line:191,column:77}},"125":{start:{line:192,column:20},end:{line:194,column:23}},"126":{start:{line:196,column:21},end:{line:221,column:17}},"127":{start:{line:197,column:30},end:{line:197,column:36}},"128":{start:{line:198,column:20},end:{line:203,column:21}},"129":{start:{line:199,column:24},end:{line:199,column:58}},"130":{start:{line:202,column:24},end:{line:202,column:35}},"131":{start:{line:204,column:20},end:{line:209,column:23}},"132":{start:{line:211,column:21},end:{line:221,column:17}},"133":{start:{line:212,column:20},end:{line:217,column:21}},"134":{start:{line:213,column:24},end:{line:213,column:49}},"135":{start:{line:216,column:24},end:{line:216,column:135}},"136":{start:{line:220,column:20},end:{line:220,column:53}},"137":{start:{line:226,column:16},end:{line:236,column:17}},"138":{start:{line:227,column:20},end:{line:232,column:23}},"139":{start:{line:235,column:20},end:{line:235,column:45}},"140":{start:{line:239,column:8},end:{line:239,column:22}},"141":{start:{line:241,column:4},end:{line:260,column:6}},"142":{start:{line:242,column:18},end:{line:242,column:24}},"143":{start:{line:244,column:8},end:{line:246,column:9}},"144":{start:{line:245,column:12},end:{line:245,column:26}},"145":{start:{line:247,column:8},end:{line:258,column:9}},"146":{start:{line:248,column:12},end:{line:251,column:15}},"147":{start:{line:254,column:12},end:{line:257,column:15}},"148":{start:{line:259,column:8},end:{line:259,column:22}},"149":{start:{line:261,column:4},end:{line:291,column:6}},"150":{start:{line:262,column:18},end:{line:262,column:24}},"151":{start:{line:262,column:37},end:{line:262,column:48}},"152":{start:{line:262,column:66},end:{line:262,column:82}},"153":{start:{line:264,column:8},end:{line:289,column:9}},"154":{start:{line:265,column:12},end:{line:265,column:30}},"155":{start:{line:267,column:13},end:{line:289,column:9}},"156":{start:{line:268,column:12},end:{line:271,column:15}},"157":{start:{line:274,column:12},end:{line:278,column:15}},"158":{start:{line:279,column:12},end:{line:279,column:44}},"159":{start:{line:280,column:12},end:{line:280,column:44}},"160":{start:{line:281,column:12},end:{line:281,column:42}},"161":{start:{line:282,column:12},end:{line:282,column:44}},"162":{start:{line:283,column:12},end:{line:288,column:13}},"163":{start:{line:284,column:32},end:{line:284,column:38}},"164":{start:{line:285,column:16},end:{line:287,column:20}},"165":{start:{line:290,column:8},end:{line:290,column:26}},"166":{start:{line:292,column:4},end:{line:292,column:29}},"167":{start:{line:294,column:0},end:{line:294,column:36}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:27,column:39},end:{line:27,column:40}},loc:{start:{line:27,column:57},end:{line:293,column:1}},line:27},"6":{name:"DataClassBusiness",decl:{start:{line:29,column:13},end:{line:29,column:30}},loc:{start:{line:29,column:35},end:{line:42,column:5}},line:29},"7":{name:"(anonymous_7)",decl:{start:{line:43,column:53},end:{line:43,column:54}},loc:{start:{line:43,column:65},end:{line:50,column:5}},line:43},"8":{name:"(anonymous_8)",decl:{start:{line:51,column:57},end:{line:51,column:58}},loc:{start:{line:51,column:69},end:{line:61,column:5}},line:51},"9":{name:"(anonymous_9)",decl:{start:{line:54,column:39},end:{line:54,column:40}},loc:{start:{line:54,column:57},end:{line:60,column:9}},line:54},"10":{name:"(anonymous_10)",decl:{start:{line:56,column:38},end:{line:56,column:39}},loc:{start:{line:56,column:50},end:{line:59,column:13}},line:56},"11":{name:"(anonymous_11)",decl:{start:{line:62,column:45},end:{line:62,column:46}},loc:{start:{line:62,column:79},end:{line:68,column:5}},line:62},"12":{name:"(anonymous_12)",decl:{start:{line:65,column:18},end:{line:65,column:19}},loc:{start:{line:65,column:33},end:{line:67,column:9}},line:65},"13":{name:"(anonymous_13)",decl:{start:{line:69,column:39},end:{line:69,column:40}},loc:{start:{line:69,column:62},end:{line:81,column:5}},line:69},"14":{name:"(anonymous_14)",decl:{start:{line:76,column:47},end:{line:76,column:48}},loc:{start:{line:76,column:65},end:{line:80,column:9}},line:76},"15":{name:"(anonymous_15)",decl:{start:{line:82,column:40},end:{line:82,column:41}},loc:{start:{line:82,column:59},end:{line:99,column:5}},line:82},"16":{name:"(anonymous_16)",decl:{start:{line:92,column:44},end:{line:92,column:45}},loc:{start:{line:92,column:66},end:{line:98,column:9}},line:92},"17":{name:"(anonymous_17)",decl:{start:{line:100,column:41},end:{line:100,column:42}},loc:{start:{line:100,column:57},end:{line:119,column:5}},line:100},"18":{name:"(anonymous_18)",decl:{start:{line:120,column:48},end:{line:120,column:49}},loc:{start:{line:120,column:62},end:{line:142,column:5}},line:120},"19":{name:"(anonymous_19)",decl:{start:{line:143,column:52},end:{line:143,column:53}},loc:{start:{line:143,column:66},end:{line:160,column:5}},line:143},"20":{name:"(anonymous_20)",decl:{start:{line:161,column:47},end:{line:161,column:48}},loc:{start:{line:161,column:61},end:{line:174,column:5}},line:161},"21":{name:"(anonymous_21)",decl:{start:{line:175,column:61},end:{line:175,column:62}},loc:{start:{line:175,column:75},end:{line:240,column:5}},line:175},"22":{name:"(anonymous_22)",decl:{start:{line:241,column:61},end:{line:241,column:62}},loc:{start:{line:241,column:75},end:{line:260,column:5}},line:241},"23":{name:"(anonymous_23)",decl:{start:{line:261,column:65},end:{line:261,column:66}},loc:{start:{line:261,column:79},end:{line:291,column:5}},line:261}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:31,column:20},end:{line:31,column:65}},type:"binary-expr",locations:[{start:{line:31,column:20},end:{line:31,column:57}},{start:{line:31,column:61},end:{line:31,column:65}}],line:31},"5":{loc:{start:{line:71,column:18},end:{line:71,column:31}},type:"binary-expr",locations:[{start:{line:71,column:18},end:{line:71,column:25}},{start:{line:71,column:29},end:{line:71,column:31}}],line:71},"6":{loc:{start:{line:72,column:8},end:{line:75,column:9}},type:"if",locations:[{start:{line:72,column:8},end:{line:75,column:9}},{start:{line:72,column:8},end:{line:75,column:9}}],line:72},"7":{loc:{start:{line:72,column:12},end:{line:73,column:64}},type:"binary-expr",locations:[{start:{line:72,column:12},end:{line:72,column:36}},{start:{line:72,column:40},end:{line:72,column:64}},{start:{line:72,column:68},end:{line:72,column:94}},{start:{line:73,column:12},end:{line:73,column:35}},{start:{line:73,column:39},end:{line:73,column:64}}],line:72},"8":{loc:{start:{line:84,column:18},end:{line:84,column:31}},type:"binary-expr",locations:[{start:{line:84,column:18},end:{line:84,column:25}},{start:{line:84,column:29},end:{line:84,column:31}}],line:84},"9":{loc:{start:{line:86,column:8},end:{line:88,column:9}},type:"if",locations:[{start:{line:86,column:8},end:{line:88,column:9}},{start:{line:86,column:8},end:{line:88,column:9}}],line:86},"10":{loc:{start:{line:86,column:12},end:{line:86,column:47}},type:"binary-expr",locations:[{start:{line:86,column:12},end:{line:86,column:22}},{start:{line:86,column:26},end:{line:86,column:47}}],line:86},"11":{loc:{start:{line:89,column:8},end:{line:91,column:9}},type:"if",locations:[{start:{line:89,column:8},end:{line:91,column:9}},{start:{line:89,column:8},end:{line:91,column:9}}],line:89},"12":{loc:{start:{line:102,column:8},end:{line:109,column:9}},type:"if",locations:[{start:{line:102,column:8},end:{line:109,column:9}},{start:{line:102,column:8},end:{line:109,column:9}}],line:102},"13":{loc:{start:{line:104,column:16},end:{line:107,column:17}},type:"if",locations:[{start:{line:104,column:16},end:{line:107,column:17}},{start:{line:104,column:16},end:{line:107,column:17}}],line:104},"14":{loc:{start:{line:111,column:17},end:{line:111,column:27}},type:"binary-expr",locations:[{start:{line:111,column:17},end:{line:111,column:21}},{start:{line:111,column:25},end:{line:111,column:27}}],line:111},"15":{loc:{start:{line:114,column:12},end:{line:116,column:13}},type:"if",locations:[{start:{line:114,column:12},end:{line:116,column:13}},{start:{line:114,column:12},end:{line:116,column:13}}],line:114},"16":{loc:{start:{line:134,column:8},end:{line:140,column:9}},type:"if",locations:[{start:{line:134,column:8},end:{line:140,column:9}},{start:{line:134,column:8},end:{line:140,column:9}}],line:134},"17":{loc:{start:{line:181,column:12},end:{line:237,column:13}},type:"if",locations:[{start:{line:181,column:12},end:{line:237,column:13}},{start:{line:181,column:12},end:{line:237,column:13}}],line:181},"18":{loc:{start:{line:181,column:16},end:{line:181,column:67}},type:"binary-expr",locations:[{start:{line:181,column:16},end:{line:181,column:37}},{start:{line:181,column:41},end:{line:181,column:67}}],line:181},"19":{loc:{start:{line:182,column:16},end:{line:221,column:17}},type:"if",locations:[{start:{line:182,column:16},end:{line:221,column:17}},{start:{line:182,column:16},end:{line:221,column:17}}],line:182},"20":{loc:{start:{line:190,column:21},end:{line:221,column:17}},type:"if",locations:[{start:{line:190,column:21},end:{line:221,column:17}},{start:{line:190,column:21},end:{line:221,column:17}}],line:190},"21":{loc:{start:{line:196,column:21},end:{line:221,column:17}},type:"if",locations:[{start:{line:196,column:21},end:{line:221,column:17}},{start:{line:196,column:21},end:{line:221,column:17}}],line:196},"22":{loc:{start:{line:196,column:25},end:{line:196,column:70}},type:"binary-expr",locations:[{start:{line:196,column:25},end:{line:196,column:46}},{start:{line:196,column:50},end:{line:196,column:70}}],line:196},"23":{loc:{start:{line:198,column:20},end:{line:203,column:21}},type:"if",locations:[{start:{line:198,column:20},end:{line:203,column:21}},{start:{line:198,column:20},end:{line:203,column:21}}],line:198},"24":{loc:{start:{line:198,column:24},end:{line:198,column:94}},type:"binary-expr",locations:[{start:{line:198,column:24},end:{line:198,column:36}},{start:{line:198,column:40},end:{line:198,column:63}},{start:{line:198,column:67},end:{line:198,column:94}}],line:198},"25":{loc:{start:{line:211,column:21},end:{line:221,column:17}},type:"if",locations:[{start:{line:211,column:21},end:{line:221,column:17}},{start:{line:211,column:21},end:{line:221,column:17}}],line:211},"26":{loc:{start:{line:212,column:20},end:{line:217,column:21}},type:"if",locations:[{start:{line:212,column:20},end:{line:217,column:21}},{start:{line:212,column:20},end:{line:217,column:21}}],line:212},"27":{loc:{start:{line:216,column:44},end:{line:216,column:134}},type:"cond-expr",locations:[{start:{line:216,column:62},end:{line:216,column:109}},{start:{line:216,column:112},end:{line:216,column:134}}],line:216},"28":{loc:{start:{line:226,column:16},end:{line:236,column:17}},type:"if",locations:[{start:{line:226,column:16},end:{line:236,column:17}},{start:{line:226,column:16},end:{line:236,column:17}}],line:226},"29":{loc:{start:{line:226,column:20},end:{line:226,column:65}},type:"binary-expr",locations:[{start:{line:226,column:20},end:{line:226,column:41}},{start:{line:226,column:45},end:{line:226,column:65}}],line:226},"30":{loc:{start:{line:244,column:8},end:{line:246,column:9}},type:"if",locations:[{start:{line:244,column:8},end:{line:246,column:9}},{start:{line:244,column:8},end:{line:246,column:9}}],line:244},"31":{loc:{start:{line:247,column:8},end:{line:258,column:9}},type:"if",locations:[{start:{line:247,column:8},end:{line:258,column:9}},{start:{line:247,column:8},end:{line:258,column:9}}],line:247},"32":{loc:{start:{line:264,column:8},end:{line:289,column:9}},type:"if",locations:[{start:{line:264,column:8},end:{line:289,column:9}},{start:{line:264,column:8},end:{line:289,column:9}}],line:264},"33":{loc:{start:{line:267,column:13},end:{line:289,column:9}},type:"if",locations:[{start:{line:267,column:13},end:{line:289,column:9}},{start:{line:267,column:13},end:{line:289,column:9}}],line:267},"34":{loc:{start:{line:276,column:26},end:{line:276,column:59}},type:"binary-expr",locations:[{start:{line:276,column:26},end:{line:276,column:34}},{start:{line:276,column:38},end:{line:276,column:59}}],line:276}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":0,"95":0,"96":0,"97":0,"98":0,"99":0,"100":0,"101":0,"102":0,"103":0,"104":0,"105":0,"106":0,"107":0,"108":0,"109":0,"110":0,"111":0,"112":0,"113":0,"114":0,"115":0,"116":0,"117":0,"118":0,"119":0,"120":0,"121":0,"122":0,"123":0,"124":0,"125":0,"126":0,"127":0,"128":0,"129":0,"130":0,"131":0,"132":0,"133":0,"134":0,"135":0,"136":0,"137":0,"138":0,"139":0,"140":0,"141":0,"142":0,"143":0,"144":0,"145":0,"146":0,"147":0,"148":0,"149":0,"150":0,"151":0,"152":0,"153":0,"154":0,"155":0,"156":0,"157":0,"158":0,"159":0,"160":0,"161":0,"162":0,"163":0,"164":0,"165":0,"166":0,"167":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0,0,0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0],"23":[0,0],"24":[0,0,0],"25":[0,0],"26":[0,0],"27":[0,0],"28":[0,0],"29":[0,0],"30":[0,0],"31":[0,0],"32":[0,0],"33":[0,0],"34":[0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/business/dataclass-business.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/business/dataclass-business.ts"],names:[],mappings:"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",sourcesContent:["import AbstractBusiness from './abstract-business';\nimport EntityBusiness from './entity-business';\nimport DataClassService from '../data-access/service/dataclass-service';\nimport CollectionBusiness from './collection-business';\nimport MediaBusiness from './media-business';\nimport Entity from '../presentation/entity';\nimport Collection from '../presentation/collection';\nimport {AttributeRelated, AttributeCollection} from '../presentation/dataclass';\nimport Media from '../presentation/media';\nimport Const from '../const';\nimport {ICollectionDBO} from './collection-business';\nimport {DataClass} from '../presentation/dataclass';\nimport {QueryOption} from '../presentation/query-option';\nimport {IEntityDBO} from './entity-business';\nimport {MethodAdapter} from './method-adapter';\nimport WakandaClient from '../wakanda-client';\nimport Util from './util';\n\n\n//This map stores all DataClassBusiness instances of existing dataClasses\nlet _dataClassBusinessMap = new Map<string, DataClassBusiness>();\n\nexport interface IMethodsArray {\n  entity: string[];\n  collection: string[];\n  dataClass: string[];\n}\n\nclass DataClassBusiness extends AbstractBusiness {\n\n  public dataClass: DataClass;\n  public methods: IMethodsArray;\n  public _dataClassBusinessMap: Map<string, DataClassBusiness>;\n  public dataURI: string;\n\n  private service: DataClassService;\n\n  constructor({wakJSC, dataClass, methods, dataURI}:\n  {wakJSC: WakandaClient, dataClass: DataClass, methods: IMethodsArray, dataURI: string}) {\n    super({wakJSC});\n\n    this.dataClass = dataClass;\n    this.methods = methods;\n    this.service = new DataClassService({\n      wakJSC: this.wakJSC,\n      dataClassBusiness: this\n    });\n    this.dataURI = dataURI;\n\n    _dataClassBusinessMap.set(dataClass.name, this);\n    this._dataClassBusinessMap = _dataClassBusinessMap;\n  }\n\n  public _decorateDataClass() {\n    //Do not forget to bind(this) to have \"this\" pointing on business instance\n    //instead of given dataclass instance\n    this.dataClass.find    = this.find.bind(this);\n    this.dataClass.query   = this.query.bind(this);\n    this.dataClass.create  = this.create.bind(this);\n\n    this._addUserDefinedMethods();\n  }\n\n  private _addUserDefinedMethods() {\n    let self = this;\n\n    this.methods.dataClass.forEach(method => {\n      //Voluntary don't use fat arrow notation to use arguments object without a bug\n      this.dataClass[method] = function() {\n        let params = Array.from(arguments);\n        return self.callMethod(method, params);\n      };\n    });\n  }\n\n  public callMethod(methodName: string, parameters: any[]): Promise<Entity|Collection|any> {\n    return this.service.callMethod(methodName, parameters)\n      .then(obj => {\n        return MethodAdapter.transform(obj, this._dataClassBusinessMap);\n      });\n  }\n\n  public find(id: string|number, options?: QueryOption): Promise<Entity> {\n    let opt = options || {};\n\n    if (opt.filter !== undefined || opt.params !== undefined || opt.pageSize !== undefined ||\n      opt.start !== undefined || opt.orderBy !== undefined) {\n      throw new Error('Dataclass.find: options filter, params, pageSize, start and orderBy are not allowed');\n    }\n\n    return this.service.find(id, opt).then(entity => {\n      return this._presentationEntityFromDbo({\n        dbo: entity\n      });\n    });\n  }\n\n  public query(options?: QueryOption): Promise<Collection> {\n    let opt = options || {};\n    let initialSelect = opt.select;\n\n    if (opt.method && opt.method.length > 0) {\n      throw new Error('Dataclass.query: option method is not allowed');\n    }\n\n    if (!opt.pageSize) {\n      opt.pageSize = Const.DEFAULT_PAGE_SIZE;\n    }\n\n    return this.service.query(opt).then(collection => {\n      return this._presentationCollectionFromDbo({\n        dbo: collection,\n        pageSize: opt.pageSize,\n        initialSelect\n      });\n    });\n  }\n\n  public create(pojo?: any): Entity {\n    let entityToAttach: any = {};\n\n    if (pojo) {\n      for (let prop in pojo) {\n        if (pojo[prop] instanceof Entity) {\n          entityToAttach[prop] = pojo[prop];\n          delete pojo[prop];\n        }\n      }\n    }\n\n    let entity = this._presentationEntityFromDbo({\n      dbo: pojo || {}\n    });\n\n    for (let prop in entityToAttach) {\n      if (Object.prototype.hasOwnProperty.call(entityToAttach, prop)) {\n        entity[prop] = entityToAttach[prop];\n      }\n    }\n\n    return entity;\n  }\n\n  private _createEntity({key, deferred, dbo}: {key: string, deferred?: boolean, dbo?: IEntityDBO}): Entity {\n\n    let entity = new Entity({\n      key,\n      deferred,\n      dataClass: this.dataClass\n    });\n    let business = new EntityBusiness({\n      wakJSC: this.wakJSC,\n      dataClass: this.dataClass,\n      entity,\n      dataClassBusiness: this\n    });\n    business._decorateEntity();\n\n    if (!deferred) {\n      this._populateEntityDataFromDbo({\n        dbo: dbo,\n        entity: entity\n      });\n      business._flashEntityValues();\n    }\n    return entity;\n  }\n\n  private _createCollection({uri, deferred, pageSize, initialSelect}:\n    {uri: string, deferred?: boolean, pageSize?: number, initialSelect?: string}): Collection {\n\n    let collection = new Collection({\n        deferred: deferred,\n        dataClass: this.dataClass\n      });\n    let business = new CollectionBusiness({\n      wakJSC: this.wakJSC,\n      dataClass: this.dataClass,\n      dataClassBusiness: this,\n      collection,\n      collectionUri: uri,\n      pageSize,\n      initialSelect\n    });\n    business._decorateCollection();\n\n    return collection;\n  }\n\n  public _createMedia({uri, isImage, attributeName, entity}:\n   {uri: string, isImage: boolean, attributeName: string, entity: Entity}): Media {\n\n    let media = new Media({uri});\n    let business = new MediaBusiness({\n      wakJSC: this.wakJSC,\n      media,\n      dataClassBusiness: this,\n      isImage,\n      attributeName,\n      entity\n    });\n\n    business._decorateMedia();\n\n    return media;\n  }\n\n  private _populateEntityDataFromDbo({dbo, entity}: {dbo: IEntityDBO, entity: Entity}): Entity {\n      entity._stamp = dbo.__STAMP;\n      for (let attr of this.dataClass.attributes) {\n\n        let dboAttribute = dbo[attr.name];\n\n        if (dboAttribute !== null && dboAttribute !== undefined) {\n          if (attr instanceof AttributeRelated) {\n            //Kind of recursive call with a potententialy different instance of\n            //DataClassBusiness\n            let business = _dataClassBusinessMap.get(attr.type);\n            entity[attr.name] = business._presentationEntityFromDbo({\n              dbo: dboAttribute\n            });\n          }\n          else if (attr instanceof AttributeCollection) {\n            let business = _dataClassBusinessMap.get(attr.entityType);\n            entity[attr.name] = business._presentationCollectionFromDbo({\n              dbo: dboAttribute\n            });\n          }\n          else if (attr.type === 'image' || attr.type === 'blob') {\n            let uri: string;\n\n            if (dboAttribute && dboAttribute.__deferred && dboAttribute.__deferred.uri) {\n              uri = dboAttribute.__deferred.uri;\n            }\n            else {\n              uri = null;\n            }\n            entity[attr.name] = this._createMedia({\n              uri,\n              isImage: attr.type === 'image',\n              attributeName: attr.name,\n              entity\n            });\n          }\n          else if (attr.type === 'date') {\n            if (!dboAttribute) {\n              entity[attr.name] = null;\n            } else {\n              entity[attr.name] = attr.simpleDate ? Util.wakParseSimpleDate(dboAttribute) : new Date(dboAttribute);\n            }\n          }\n          else {\n            entity[attr.name] = dboAttribute;\n          }\n        }\n        else {\n          //Even if the property is null, we need a media for this kind of attributes\n          //to handle the upload part\n          if (attr.type === 'image' || attr.type === 'blob') {\n            entity[attr.name] = this._createMedia({\n              uri: null,\n              isImage: attr.type === 'image',\n              attributeName: attr.name,\n              entity\n            });\n          }\n          else {\n            entity[attr.name] = null;\n          }\n        }\n      }\n      return entity;\n  }\n\n  public _presentationEntityFromDbo({dbo}: {dbo: IEntityDBO}): Entity {\n    let entity: Entity;\n\n    if (!dbo) {\n      entity = null;\n    }\n    if (dbo.__deferred) {\n      entity = this._createEntity({\n        key: dbo.__deferred.__KEY,\n        deferred: true\n      });\n    }\n    else {\n      entity = this._createEntity({\n        key: dbo.__KEY,\n        dbo: dbo\n      });\n    }\n\n    return entity;\n  }\n\n  public _presentationCollectionFromDbo({dbo, pageSize, initialSelect}:\n    {dbo: ICollectionDBO, pageSize?: number, initialSelect?: string}): Collection {\n\n    let collection: Collection;\n\n    if (!dbo) {\n      collection = null;\n    }\n    else if (dbo.__deferred) {\n      collection = this._createCollection({\n        deferred: true,\n        uri: dbo.__deferred.uri\n      });\n    }\n    else {\n      collection = this._createCollection({\n        uri: dbo.__ENTITYSET,\n        pageSize: pageSize || dbo.__ENTITIES.length,\n        initialSelect\n      });\n      collection._count     = dbo.__COUNT;\n      collection._first     = dbo.__FIRST;\n      collection._sent      = dbo.__SENT;\n      collection._pageSize  = pageSize;\n\n      for (let dboEntity of dbo.__ENTITIES) {\n        collection.entities.push(this._presentationEntityFromDbo({\n          dbo: dboEntity\n        }));\n      }\n    }\n\n    return collection;\n  }\n}\n\nexport default DataClassBusiness;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_1pgbpemb4k.s[0]++,(cov_1pgbpemb4k.b[0][0]++,this)&&(cov_1pgbpemb4k.b[0][1]++,this.__extends)||(cov_1pgbpemb4k.b[0][2]++,function(){cov_1pgbpemb4k.f[0]++;var extendStatics=(cov_1pgbpemb4k.s[1]++,(cov_1pgbpemb4k.b[1][0]++,Object.setPrototypeOf)||(cov_1pgbpemb4k.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_1pgbpemb4k.b[1][2]++,function(d,b){cov_1pgbpemb4k.f[1]++;cov_1pgbpemb4k.s[2]++;d.__proto__=b;})||(cov_1pgbpemb4k.b[1][3]++,function(d,b){cov_1pgbpemb4k.f[2]++;cov_1pgbpemb4k.s[3]++;for(var p in b){cov_1pgbpemb4k.s[4]++;if(b.hasOwnProperty(p)){cov_1pgbpemb4k.b[2][0]++;cov_1pgbpemb4k.s[5]++;d[p]=b[p];}else{cov_1pgbpemb4k.b[2][1]++;}}}));cov_1pgbpemb4k.s[6]++;return function(d,b){cov_1pgbpemb4k.f[3]++;cov_1pgbpemb4k.s[7]++;extendStatics(d,b);function __(){cov_1pgbpemb4k.f[4]++;cov_1pgbpemb4k.s[8]++;this.constructor=d;}cov_1pgbpemb4k.s[9]++;d.prototype=b===null?(cov_1pgbpemb4k.b[3][0]++,Object.create(b)):(cov_1pgbpemb4k.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_1pgbpemb4k.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_business_1=(cov_1pgbpemb4k.s[11]++,__webpack_require__(13));var entity_business_1=(cov_1pgbpemb4k.s[12]++,__webpack_require__(127));var dataclass_service_1=(cov_1pgbpemb4k.s[13]++,__webpack_require__(129));var collection_business_1=(cov_1pgbpemb4k.s[14]++,__webpack_require__(130));var media_business_1=(cov_1pgbpemb4k.s[15]++,__webpack_require__(132));var entity_1=(cov_1pgbpemb4k.s[16]++,__webpack_require__(38));var collection_1=(cov_1pgbpemb4k.s[17]++,__webpack_require__(73));var dataclass_1=(cov_1pgbpemb4k.s[18]++,__webpack_require__(36));var media_1=(cov_1pgbpemb4k.s[19]++,__webpack_require__(68));var const_1=(cov_1pgbpemb4k.s[20]++,__webpack_require__(40));var method_adapter_1=(cov_1pgbpemb4k.s[21]++,__webpack_require__(39));var util_1=(cov_1pgbpemb4k.s[22]++,__webpack_require__(69));//This map stores all DataClassBusiness instances of existing dataClasses
var _dataClassBusinessMap=(cov_1pgbpemb4k.s[23]++,new Map());var DataClassBusiness=(/** @class */cov_1pgbpemb4k.s[24]++,function(_super){cov_1pgbpemb4k.f[5]++;cov_1pgbpemb4k.s[25]++;__extends(DataClassBusiness,_super);function DataClassBusiness(_a){cov_1pgbpemb4k.f[6]++;var wakJSC=(cov_1pgbpemb4k.s[26]++,_a.wakJSC),dataClass=(cov_1pgbpemb4k.s[27]++,_a.dataClass),methods=(cov_1pgbpemb4k.s[28]++,_a.methods),dataURI=(cov_1pgbpemb4k.s[29]++,_a.dataURI);var _this=(cov_1pgbpemb4k.s[30]++,(cov_1pgbpemb4k.b[4][0]++,_super.call(this,{wakJSC:wakJSC}))||(cov_1pgbpemb4k.b[4][1]++,this));cov_1pgbpemb4k.s[31]++;_this.dataClass=dataClass;cov_1pgbpemb4k.s[32]++;_this.methods=methods;cov_1pgbpemb4k.s[33]++;_this.service=new dataclass_service_1.default({wakJSC:_this.wakJSC,dataClassBusiness:_this});cov_1pgbpemb4k.s[34]++;_this.dataURI=dataURI;cov_1pgbpemb4k.s[35]++;_dataClassBusinessMap.set(dataClass.name,_this);cov_1pgbpemb4k.s[36]++;_this._dataClassBusinessMap=_dataClassBusinessMap;cov_1pgbpemb4k.s[37]++;return _this;}cov_1pgbpemb4k.s[38]++;DataClassBusiness.prototype._decorateDataClass=function(){cov_1pgbpemb4k.f[7]++;cov_1pgbpemb4k.s[39]++;//Do not forget to bind(this) to have "this" pointing on business instance
//instead of given dataclass instance
this.dataClass.find=this.find.bind(this);cov_1pgbpemb4k.s[40]++;this.dataClass.query=this.query.bind(this);cov_1pgbpemb4k.s[41]++;this.dataClass.create=this.create.bind(this);cov_1pgbpemb4k.s[42]++;this._addUserDefinedMethods();};cov_1pgbpemb4k.s[43]++;DataClassBusiness.prototype._addUserDefinedMethods=function(){cov_1pgbpemb4k.f[8]++;var _this=(cov_1pgbpemb4k.s[44]++,this);var self=(cov_1pgbpemb4k.s[45]++,this);cov_1pgbpemb4k.s[46]++;this.methods.dataClass.forEach(function(method){cov_1pgbpemb4k.f[9]++;cov_1pgbpemb4k.s[47]++;//Voluntary don't use fat arrow notation to use arguments object without a bug
_this.dataClass[method]=function(){cov_1pgbpemb4k.f[10]++;var params=(cov_1pgbpemb4k.s[48]++,Array.from(arguments));cov_1pgbpemb4k.s[49]++;return self.callMethod(method,params);};});};cov_1pgbpemb4k.s[50]++;DataClassBusiness.prototype.callMethod=function(methodName,parameters){cov_1pgbpemb4k.f[11]++;var _this=(cov_1pgbpemb4k.s[51]++,this);cov_1pgbpemb4k.s[52]++;return this.service.callMethod(methodName,parameters).then(function(obj){cov_1pgbpemb4k.f[12]++;cov_1pgbpemb4k.s[53]++;return method_adapter_1.MethodAdapter.transform(obj,_this._dataClassBusinessMap);});};cov_1pgbpemb4k.s[54]++;DataClassBusiness.prototype.find=function(id,options){cov_1pgbpemb4k.f[13]++;var _this=(cov_1pgbpemb4k.s[55]++,this);var opt=(cov_1pgbpemb4k.s[56]++,(cov_1pgbpemb4k.b[5][0]++,options)||(cov_1pgbpemb4k.b[5][1]++,{}));cov_1pgbpemb4k.s[57]++;if((cov_1pgbpemb4k.b[7][0]++,opt.filter!==undefined)||(cov_1pgbpemb4k.b[7][1]++,opt.params!==undefined)||(cov_1pgbpemb4k.b[7][2]++,opt.pageSize!==undefined)||(cov_1pgbpemb4k.b[7][3]++,opt.start!==undefined)||(cov_1pgbpemb4k.b[7][4]++,opt.orderBy!==undefined)){cov_1pgbpemb4k.b[6][0]++;cov_1pgbpemb4k.s[58]++;throw new Error('Dataclass.find: options filter, params, pageSize, start and orderBy are not allowed');}else{cov_1pgbpemb4k.b[6][1]++;}cov_1pgbpemb4k.s[59]++;return this.service.find(id,opt).then(function(entity){cov_1pgbpemb4k.f[14]++;cov_1pgbpemb4k.s[60]++;return _this._presentationEntityFromDbo({dbo:entity});});};cov_1pgbpemb4k.s[61]++;DataClassBusiness.prototype.query=function(options){cov_1pgbpemb4k.f[15]++;var _this=(cov_1pgbpemb4k.s[62]++,this);var opt=(cov_1pgbpemb4k.s[63]++,(cov_1pgbpemb4k.b[8][0]++,options)||(cov_1pgbpemb4k.b[8][1]++,{}));var initialSelect=(cov_1pgbpemb4k.s[64]++,opt.select);cov_1pgbpemb4k.s[65]++;if((cov_1pgbpemb4k.b[10][0]++,opt.method)&&(cov_1pgbpemb4k.b[10][1]++,opt.method.length>0)){cov_1pgbpemb4k.b[9][0]++;cov_1pgbpemb4k.s[66]++;throw new Error('Dataclass.query: option method is not allowed');}else{cov_1pgbpemb4k.b[9][1]++;}cov_1pgbpemb4k.s[67]++;if(!opt.pageSize){cov_1pgbpemb4k.b[11][0]++;cov_1pgbpemb4k.s[68]++;opt.pageSize=const_1.default.DEFAULT_PAGE_SIZE;}else{cov_1pgbpemb4k.b[11][1]++;}cov_1pgbpemb4k.s[69]++;return this.service.query(opt).then(function(collection){cov_1pgbpemb4k.f[16]++;cov_1pgbpemb4k.s[70]++;return _this._presentationCollectionFromDbo({dbo:collection,pageSize:opt.pageSize,initialSelect:initialSelect});});};cov_1pgbpemb4k.s[71]++;DataClassBusiness.prototype.create=function(pojo){cov_1pgbpemb4k.f[17]++;var entityToAttach=(cov_1pgbpemb4k.s[72]++,{});cov_1pgbpemb4k.s[73]++;if(pojo){cov_1pgbpemb4k.b[12][0]++;cov_1pgbpemb4k.s[74]++;for(var prop in pojo){cov_1pgbpemb4k.s[75]++;if(pojo[prop]instanceof entity_1.default){cov_1pgbpemb4k.b[13][0]++;cov_1pgbpemb4k.s[76]++;entityToAttach[prop]=pojo[prop];cov_1pgbpemb4k.s[77]++;delete pojo[prop];}else{cov_1pgbpemb4k.b[13][1]++;}}}else{cov_1pgbpemb4k.b[12][1]++;}var entity=(cov_1pgbpemb4k.s[78]++,this._presentationEntityFromDbo({dbo:(cov_1pgbpemb4k.b[14][0]++,pojo)||(cov_1pgbpemb4k.b[14][1]++,{})}));cov_1pgbpemb4k.s[79]++;for(var prop in entityToAttach){cov_1pgbpemb4k.s[80]++;if(Object.prototype.hasOwnProperty.call(entityToAttach,prop)){cov_1pgbpemb4k.b[15][0]++;cov_1pgbpemb4k.s[81]++;entity[prop]=entityToAttach[prop];}else{cov_1pgbpemb4k.b[15][1]++;}}cov_1pgbpemb4k.s[82]++;return entity;};cov_1pgbpemb4k.s[83]++;DataClassBusiness.prototype._createEntity=function(_a){cov_1pgbpemb4k.f[18]++;var key=(cov_1pgbpemb4k.s[84]++,_a.key),deferred=(cov_1pgbpemb4k.s[85]++,_a.deferred),dbo=(cov_1pgbpemb4k.s[86]++,_a.dbo);var entity=(cov_1pgbpemb4k.s[87]++,new entity_1.default({key:key,deferred:deferred,dataClass:this.dataClass}));var business=(cov_1pgbpemb4k.s[88]++,new entity_business_1.default({wakJSC:this.wakJSC,dataClass:this.dataClass,entity:entity,dataClassBusiness:this}));cov_1pgbpemb4k.s[89]++;business._decorateEntity();cov_1pgbpemb4k.s[90]++;if(!deferred){cov_1pgbpemb4k.b[16][0]++;cov_1pgbpemb4k.s[91]++;this._populateEntityDataFromDbo({dbo:dbo,entity:entity});cov_1pgbpemb4k.s[92]++;business._flashEntityValues();}else{cov_1pgbpemb4k.b[16][1]++;}cov_1pgbpemb4k.s[93]++;return entity;};cov_1pgbpemb4k.s[94]++;DataClassBusiness.prototype._createCollection=function(_a){cov_1pgbpemb4k.f[19]++;var uri=(cov_1pgbpemb4k.s[95]++,_a.uri),deferred=(cov_1pgbpemb4k.s[96]++,_a.deferred),pageSize=(cov_1pgbpemb4k.s[97]++,_a.pageSize),initialSelect=(cov_1pgbpemb4k.s[98]++,_a.initialSelect);var collection=(cov_1pgbpemb4k.s[99]++,new collection_1.default({deferred:deferred,dataClass:this.dataClass}));var business=(cov_1pgbpemb4k.s[100]++,new collection_business_1.default({wakJSC:this.wakJSC,dataClass:this.dataClass,dataClassBusiness:this,collection:collection,collectionUri:uri,pageSize:pageSize,initialSelect:initialSelect}));cov_1pgbpemb4k.s[101]++;business._decorateCollection();cov_1pgbpemb4k.s[102]++;return collection;};cov_1pgbpemb4k.s[103]++;DataClassBusiness.prototype._createMedia=function(_a){cov_1pgbpemb4k.f[20]++;var uri=(cov_1pgbpemb4k.s[104]++,_a.uri),isImage=(cov_1pgbpemb4k.s[105]++,_a.isImage),attributeName=(cov_1pgbpemb4k.s[106]++,_a.attributeName),entity=(cov_1pgbpemb4k.s[107]++,_a.entity);var media=(cov_1pgbpemb4k.s[108]++,new media_1.default({uri:uri}));var business=(cov_1pgbpemb4k.s[109]++,new media_business_1.default({wakJSC:this.wakJSC,media:media,dataClassBusiness:this,isImage:isImage,attributeName:attributeName,entity:entity}));cov_1pgbpemb4k.s[110]++;business._decorateMedia();cov_1pgbpemb4k.s[111]++;return media;};cov_1pgbpemb4k.s[112]++;DataClassBusiness.prototype._populateEntityDataFromDbo=function(_a){cov_1pgbpemb4k.f[21]++;var dbo=(cov_1pgbpemb4k.s[113]++,_a.dbo),entity=(cov_1pgbpemb4k.s[114]++,_a.entity);cov_1pgbpemb4k.s[115]++;entity._stamp=dbo.__STAMP;cov_1pgbpemb4k.s[116]++;for(var _i=0,_b=this.dataClass.attributes;_i<_b.length;_i++){var attr=(cov_1pgbpemb4k.s[117]++,_b[_i]);var dboAttribute=(cov_1pgbpemb4k.s[118]++,dbo[attr.name]);cov_1pgbpemb4k.s[119]++;if((cov_1pgbpemb4k.b[18][0]++,dboAttribute!==null)&&(cov_1pgbpemb4k.b[18][1]++,dboAttribute!==undefined)){cov_1pgbpemb4k.b[17][0]++;cov_1pgbpemb4k.s[120]++;if(attr instanceof dataclass_1.AttributeRelated){cov_1pgbpemb4k.b[19][0]++;//Kind of recursive call with a potententialy different instance of
//DataClassBusiness
var business=(cov_1pgbpemb4k.s[121]++,_dataClassBusinessMap.get(attr.type));cov_1pgbpemb4k.s[122]++;entity[attr.name]=business._presentationEntityFromDbo({dbo:dboAttribute});}else{cov_1pgbpemb4k.b[19][1]++;cov_1pgbpemb4k.s[123]++;if(attr instanceof dataclass_1.AttributeCollection){cov_1pgbpemb4k.b[20][0]++;var business=(cov_1pgbpemb4k.s[124]++,_dataClassBusinessMap.get(attr.entityType));cov_1pgbpemb4k.s[125]++;entity[attr.name]=business._presentationCollectionFromDbo({dbo:dboAttribute});}else{cov_1pgbpemb4k.b[20][1]++;cov_1pgbpemb4k.s[126]++;if((cov_1pgbpemb4k.b[22][0]++,attr.type==='image')||(cov_1pgbpemb4k.b[22][1]++,attr.type==='blob')){cov_1pgbpemb4k.b[21][0]++;var uri=(cov_1pgbpemb4k.s[127]++,void 0);cov_1pgbpemb4k.s[128]++;if((cov_1pgbpemb4k.b[24][0]++,dboAttribute)&&(cov_1pgbpemb4k.b[24][1]++,dboAttribute.__deferred)&&(cov_1pgbpemb4k.b[24][2]++,dboAttribute.__deferred.uri)){cov_1pgbpemb4k.b[23][0]++;cov_1pgbpemb4k.s[129]++;uri=dboAttribute.__deferred.uri;}else{cov_1pgbpemb4k.b[23][1]++;cov_1pgbpemb4k.s[130]++;uri=null;}cov_1pgbpemb4k.s[131]++;entity[attr.name]=this._createMedia({uri:uri,isImage:attr.type==='image',attributeName:attr.name,entity:entity});}else{cov_1pgbpemb4k.b[21][1]++;cov_1pgbpemb4k.s[132]++;if(attr.type==='date'){cov_1pgbpemb4k.b[25][0]++;cov_1pgbpemb4k.s[133]++;if(!dboAttribute){cov_1pgbpemb4k.b[26][0]++;cov_1pgbpemb4k.s[134]++;entity[attr.name]=null;}else{cov_1pgbpemb4k.b[26][1]++;cov_1pgbpemb4k.s[135]++;entity[attr.name]=attr.simpleDate?(cov_1pgbpemb4k.b[27][0]++,util_1.default.wakParseSimpleDate(dboAttribute)):(cov_1pgbpemb4k.b[27][1]++,new Date(dboAttribute));}}else{cov_1pgbpemb4k.b[25][1]++;cov_1pgbpemb4k.s[136]++;entity[attr.name]=dboAttribute;}}}}}else{cov_1pgbpemb4k.b[17][1]++;cov_1pgbpemb4k.s[137]++;//Even if the property is null, we need a media for this kind of attributes
//to handle the upload part
if((cov_1pgbpemb4k.b[29][0]++,attr.type==='image')||(cov_1pgbpemb4k.b[29][1]++,attr.type==='blob')){cov_1pgbpemb4k.b[28][0]++;cov_1pgbpemb4k.s[138]++;entity[attr.name]=this._createMedia({uri:null,isImage:attr.type==='image',attributeName:attr.name,entity:entity});}else{cov_1pgbpemb4k.b[28][1]++;cov_1pgbpemb4k.s[139]++;entity[attr.name]=null;}}}cov_1pgbpemb4k.s[140]++;return entity;};cov_1pgbpemb4k.s[141]++;DataClassBusiness.prototype._presentationEntityFromDbo=function(_a){cov_1pgbpemb4k.f[22]++;var dbo=(cov_1pgbpemb4k.s[142]++,_a.dbo);var entity;cov_1pgbpemb4k.s[143]++;if(!dbo){cov_1pgbpemb4k.b[30][0]++;cov_1pgbpemb4k.s[144]++;entity=null;}else{cov_1pgbpemb4k.b[30][1]++;}cov_1pgbpemb4k.s[145]++;if(dbo.__deferred){cov_1pgbpemb4k.b[31][0]++;cov_1pgbpemb4k.s[146]++;entity=this._createEntity({key:dbo.__deferred.__KEY,deferred:true});}else{cov_1pgbpemb4k.b[31][1]++;cov_1pgbpemb4k.s[147]++;entity=this._createEntity({key:dbo.__KEY,dbo:dbo});}cov_1pgbpemb4k.s[148]++;return entity;};cov_1pgbpemb4k.s[149]++;DataClassBusiness.prototype._presentationCollectionFromDbo=function(_a){cov_1pgbpemb4k.f[23]++;var dbo=(cov_1pgbpemb4k.s[150]++,_a.dbo),pageSize=(cov_1pgbpemb4k.s[151]++,_a.pageSize),initialSelect=(cov_1pgbpemb4k.s[152]++,_a.initialSelect);var collection;cov_1pgbpemb4k.s[153]++;if(!dbo){cov_1pgbpemb4k.b[32][0]++;cov_1pgbpemb4k.s[154]++;collection=null;}else{cov_1pgbpemb4k.b[32][1]++;cov_1pgbpemb4k.s[155]++;if(dbo.__deferred){cov_1pgbpemb4k.b[33][0]++;cov_1pgbpemb4k.s[156]++;collection=this._createCollection({deferred:true,uri:dbo.__deferred.uri});}else{cov_1pgbpemb4k.b[33][1]++;cov_1pgbpemb4k.s[157]++;collection=this._createCollection({uri:dbo.__ENTITYSET,pageSize:(cov_1pgbpemb4k.b[34][0]++,pageSize)||(cov_1pgbpemb4k.b[34][1]++,dbo.__ENTITIES.length),initialSelect:initialSelect});cov_1pgbpemb4k.s[158]++;collection._count=dbo.__COUNT;cov_1pgbpemb4k.s[159]++;collection._first=dbo.__FIRST;cov_1pgbpemb4k.s[160]++;collection._sent=dbo.__SENT;cov_1pgbpemb4k.s[161]++;collection._pageSize=pageSize;cov_1pgbpemb4k.s[162]++;for(var _i=0,_b=dbo.__ENTITIES;_i<_b.length;_i++){var dboEntity=(cov_1pgbpemb4k.s[163]++,_b[_i]);cov_1pgbpemb4k.s[164]++;collection.entities.push(this._presentationEntityFromDbo({dbo:dboEntity}));}}}cov_1pgbpemb4k.s[165]++;return collection;};cov_1pgbpemb4k.s[166]++;return DataClassBusiness;}(abstract_business_1.default));cov_1pgbpemb4k.s[167]++;exports.default=DataClassBusiness;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_reb5zrglw=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/business/entity-business.ts",hash="dde1a2acf4c2fd4cf6d54501b1c3a2eb63b7896a",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/business/entity-business.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:26},end:{line:13,column:56}},"12":{start:{line:14,column:23},end:{line:14,column:71}},"13":{start:{line:15,column:18},end:{line:15,column:54}},"14":{start:{line:16,column:15},end:{line:16,column:48}},"15":{start:{line:17,column:23},end:{line:17,column:50}},"16":{start:{line:18,column:14},end:{line:18,column:46}},"17":{start:{line:19,column:13},end:{line:19,column:30}},"18":{start:{line:20,column:36},end:{line:241,column:30}},"19":{start:{line:21,column:4},end:{line:21,column:38}},"20":{start:{line:23,column:21},end:{line:23,column:30}},"21":{start:{line:23,column:41},end:{line:23,column:50}},"22":{start:{line:23,column:64},end:{line:23,column:76}},"23":{start:{line:23,column:98},end:{line:23,column:118}},"24":{start:{line:24,column:20},end:{line:24,column:65}},"25":{start:{line:25,column:8},end:{line:25,column:30}},"26":{start:{line:26,column:8},end:{line:26,column:36}},"27":{start:{line:27,column:8},end:{line:27,column:52}},"28":{start:{line:28,column:8},end:{line:32,column:11}},"29":{start:{line:33,column:8},end:{line:33,column:21}},"30":{start:{line:35,column:4},end:{line:41,column:6}},"31":{start:{line:36,column:8},end:{line:36,column:48}},"32":{start:{line:37,column:8},end:{line:37,column:52}},"33":{start:{line:38,column:8},end:{line:38,column:50}},"34":{start:{line:39,column:8},end:{line:39,column:58}},"35":{start:{line:40,column:8},end:{line:40,column:38}},"36":{start:{line:42,column:4},end:{line:77,column:6}},"37":{start:{line:43,column:19},end:{line:43,column:21}},"38":{start:{line:44,column:21},end:{line:44,column:32}},"39":{start:{line:45,column:8},end:{line:75,column:9}},"40":{start:{line:46,column:23},end:{line:46,column:29}},"41":{start:{line:47,column:26},end:{line:47,column:43}},"42":{start:{line:48,column:12},end:{line:50,column:13}},"43":{start:{line:49,column:16},end:{line:49,column:25}},"44":{start:{line:51,column:12},end:{line:74,column:13}},"45":{start:{line:52,column:16},end:{line:52,column:64}},"46":{start:{line:55,column:16},end:{line:73,column:17}},"47":{start:{line:58,column:24},end:{line:58,column:63}},"48":{start:{line:59,column:24},end:{line:59,column:30}},"49":{start:{line:61,column:24},end:{line:61,column:66}},"50":{start:{line:62,column:24},end:{line:62,column:30}},"51":{start:{line:64,column:24},end:{line:69,column:25}},"52":{start:{line:65,column:28},end:{line:65,column:51}},"53":{start:{line:68,column:28},end:{line:68,column:129}},"54":{start:{line:70,column:24},end:{line:70,column:30}},"55":{start:{line:72,column:24},end:{line:72,column:50}},"56":{start:{line:76,column:8},end:{line:76,column:37}},"57":{start:{line:78,column:4},end:{line:88,column:6}},"58":{start:{line:79,column:20},end:{line:79,column:24}},"59":{start:{line:80,column:19},end:{line:80,column:23}},"60":{start:{line:81,column:8},end:{line:87,column:11}},"61":{start:{line:83,column:12},end:{line:86,column:14}},"62":{start:{line:84,column:29},end:{line:84,column:50}},"63":{start:{line:85,column:16},end:{line:85,column:55}},"64":{start:{line:89,column:4},end:{line:101,column:6}},"65":{start:{line:90,column:20},end:{line:90,column:24}},"66":{start:{line:91,column:18},end:{line:91,column:31}},"67":{start:{line:92,column:8},end:{line:95,column:9}},"68":{start:{line:94,column:12},end:{line:94,column:113}},"69":{start:{line:96,column:8},end:{line:100,column:11}},"70":{start:{line:97,column:12},end:{line:97,column:67}},"71":{start:{line:98,column:12},end:{line:98,column:39}},"72":{start:{line:99,column:12},end:{line:99,column:32}},"73":{start:{line:102,column:4},end:{line:111,column:6}},"74":{start:{line:103,column:20},end:{line:103,column:24}},"75":{start:{line:104,column:8},end:{line:106,column:9}},"76":{start:{line:105,column:12},end:{line:105,column:97}},"77":{start:{line:107,column:8},end:{line:110,column:11}},"78":{start:{line:109,column:12},end:{line:109,column:112}},"79":{start:{line:112,column:4},end:{line:120,column:6}},"80":{start:{line:113,column:20},end:{line:113,column:24}},"81":{start:{line:114,column:8},end:{line:116,column:9}},"82":{start:{line:115,column:12},end:{line:115,column:76}},"83":{start:{line:117,column:8},end:{line:119,column:11}},"84":{start:{line:118,column:12},end:{line:118,column:32}},"85":{start:{line:121,column:4},end:{line:136,column:6}},"86":{start:{line:122,column:20},end:{line:122,column:24}},"87":{start:{line:123,column:19},end:{line:123,column:44}},"88":{start:{line:127,column:21},end:{line:127,column:44}},"89":{start:{line:128,column:8},end:{line:135,column:11}},"90":{start:{line:129,column:32},end:{line:131,column:14}},"91":{start:{line:132,column:12},end:{line:132,column:67}},"92":{start:{line:133,column:12},end:{line:133,column:39}},"93":{start:{line:134,column:12},end:{line:134,column:32}},"94":{start:{line:137,column:4},end:{line:148,column:6}},"95":{start:{line:138,column:20},end:{line:138,column:24}},"96":{start:{line:139,column:19},end:{line:139,column:44}},"97":{start:{line:140,column:8},end:{line:147,column:11}},"98":{start:{line:142,column:32},end:{line:144,column:14}},"99":{start:{line:145,column:12},end:{line:145,column:67}},"100":{start:{line:146,column:12},end:{line:146,column:32}},"101":{start:{line:149,column:4},end:{line:214,column:6}},"102":{start:{line:150,column:19},end:{line:150,column:21}},"103":{start:{line:151,column:26},end:{line:151,column:31}},"104":{start:{line:152,column:8},end:{line:158,column:9}},"105":{start:{line:153,column:12},end:{line:153,column:42}},"106":{start:{line:154,column:12},end:{line:154,column:46}},"107":{start:{line:157,column:12},end:{line:157,column:31}},"108":{start:{line:159,column:8},end:{line:186,column:9}},"109":{start:{line:160,column:23},end:{line:160,column:29}},"110":{start:{line:161,column:26},end:{line:161,column:48}},"111":{start:{line:162,column:12},end:{line:164,column:13}},"112":{start:{line:163,column:16},end:{line:163,column:31}},"113":{start:{line:165,column:12},end:{line:185,column:13}},"114":{start:{line:166,column:16},end:{line:166,column:64}},"115":{start:{line:168,column:17},end:{line:185,column:13}},"116":{start:{line:169,column:16},end:{line:169,column:25}},"117":{start:{line:171,column:17},end:{line:185,column:13}},"118":{start:{line:172,column:16},end:{line:177,column:17}},"119":{start:{line:173,column:20},end:{line:173,column:46}},"120":{start:{line:176,column:20},end:{line:176,column:121}},"121":{start:{line:179,column:17},end:{line:185,column:13}},"122":{start:{line:182,column:16},end:{line:184,column:17}},"123":{start:{line:183,column:20},end:{line:183,column:46}},"124":{start:{line:187,column:8},end:{line:212,column:9}},"125":{start:{line:188,column:26},end:{line:188,column:53}},"126":{start:{line:189,column:12},end:{line:211,column:13}},"127":{start:{line:190,column:27},end:{line:190,column:33}},"128":{start:{line:191,column:16},end:{line:193,column:17}},"129":{start:{line:192,column:20},end:{line:192,column:29}},"130":{start:{line:194,column:16},end:{line:210,column:17}},"131":{start:{line:197,column:24},end:{line:199,column:25}},"132":{start:{line:198,column:28},end:{line:198,column:51}},"133":{start:{line:200,column:24},end:{line:200,column:30}},"134":{start:{line:202,column:24},end:{line:204,column:25}},"135":{start:{line:203,column:28},end:{line:203,column:51}},"136":{start:{line:205,column:24},end:{line:205,column:30}},"137":{start:{line:207,column:24},end:{line:209,column:25}},"138":{start:{line:208,column:28},end:{line:208,column:51}},"139":{start:{line:213,column:8},end:{line:213,column:20}},"140":{start:{line:215,column:4},end:{line:227,column:6}},"141":{start:{line:216,column:28},end:{line:216,column:44}},"142":{start:{line:217,column:8},end:{line:226,column:9}},"143":{start:{line:218,column:12},end:{line:225,column:13}},"144":{start:{line:219,column:16},end:{line:224,column:17}},"145":{start:{line:220,column:20},end:{line:220,column:68}},"146":{start:{line:223,column:20},end:{line:223,column:60}},"147":{start:{line:228,column:4},end:{line:239,column:6}},"148":{start:{line:229,column:21},end:{line:229,column:23}},"149":{start:{line:230,column:8},end:{line:237,column:9}},"150":{start:{line:231,column:23},end:{line:231,column:29}},"151":{start:{line:232,column:12},end:{line:236,column:13}},"152":{start:{line:233,column:16},end:{line:235,column:17}},"153":{start:{line:234,column:20},end:{line:234,column:46}},"154":{start:{line:238,column:8},end:{line:238,column:62}},"155":{start:{line:240,column:4},end:{line:240,column:26}},"156":{start:{line:242,column:0},end:{line:242,column:33}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:20,column:36},end:{line:20,column:37}},loc:{start:{line:20,column:54},end:{line:241,column:1}},line:20},"6":{name:"EntityBusiness",decl:{start:{line:22,column:13},end:{line:22,column:27}},loc:{start:{line:22,column:32},end:{line:34,column:5}},line:22},"7":{name:"(anonymous_7)",decl:{start:{line:35,column:47},end:{line:35,column:48}},loc:{start:{line:35,column:59},end:{line:41,column:5}},line:35},"8":{name:"(anonymous_8)",decl:{start:{line:42,column:50},end:{line:42,column:51}},loc:{start:{line:42,column:62},end:{line:77,column:5}},line:42},"9":{name:"(anonymous_9)",decl:{start:{line:78,column:54},end:{line:78,column:55}},loc:{start:{line:78,column:66},end:{line:88,column:5}},line:78},"10":{name:"(anonymous_10)",decl:{start:{line:81,column:54},end:{line:81,column:55}},loc:{start:{line:81,column:72},end:{line:87,column:9}},line:81},"11":{name:"(anonymous_11)",decl:{start:{line:83,column:35},end:{line:83,column:36}},loc:{start:{line:83,column:47},end:{line:86,column:13}},line:83},"12":{name:"(anonymous_12)",decl:{start:{line:89,column:37},end:{line:89,column:38}},loc:{start:{line:89,column:56},end:{line:101,column:5}},line:89},"13":{name:"(anonymous_13)",decl:{start:{line:96,column:75},end:{line:96,column:76}},loc:{start:{line:96,column:100},end:{line:100,column:9}},line:96},"14":{name:"(anonymous_14)",decl:{start:{line:102,column:42},end:{line:102,column:43}},loc:{start:{line:102,column:76},end:{line:111,column:5}},line:102},"15":{name:"(anonymous_15)",decl:{start:{line:108,column:18},end:{line:108,column:19}},loc:{start:{line:108,column:33},end:{line:110,column:9}},line:108},"16":{name:"(anonymous_16)",decl:{start:{line:112,column:38},end:{line:112,column:39}},loc:{start:{line:112,column:50},end:{line:120,column:5}},line:112},"17":{name:"(anonymous_17)",decl:{start:{line:117,column:42},end:{line:117,column:43}},loc:{start:{line:117,column:54},end:{line:119,column:9}},line:117},"18":{name:"(anonymous_18)",decl:{start:{line:121,column:36},end:{line:121,column:37}},loc:{start:{line:121,column:48},end:{line:136,column:5}},line:121},"19":{name:"(anonymous_19)",decl:{start:{line:128,column:52},end:{line:128,column:53}},loc:{start:{line:128,column:73},end:{line:135,column:9}},line:128},"20":{name:"(anonymous_20)",decl:{start:{line:137,column:41},end:{line:137,column:42}},loc:{start:{line:137,column:53},end:{line:148,column:5}},line:137},"21":{name:"(anonymous_21)",decl:{start:{line:141,column:18},end:{line:141,column:19}},loc:{start:{line:141,column:33},end:{line:147,column:9}},line:141},"22":{name:"(anonymous_22)",decl:{start:{line:149,column:50},end:{line:149,column:51}},loc:{start:{line:149,column:62},end:{line:214,column:5}},line:149},"23":{name:"(anonymous_23)",decl:{start:{line:215,column:46},end:{line:215,column:47}},loc:{start:{line:215,column:60},end:{line:227,column:5}},line:215},"24":{name:"(anonymous_24)",decl:{start:{line:228,column:48},end:{line:228,column:49}},loc:{start:{line:228,column:60},end:{line:239,column:5}},line:228}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:24,column:20},end:{line:24,column:65}},type:"binary-expr",locations:[{start:{line:24,column:20},end:{line:24,column:57}},{start:{line:24,column:61},end:{line:24,column:65}}],line:24},"5":{loc:{start:{line:48,column:12},end:{line:50,column:13}},type:"if",locations:[{start:{line:48,column:12},end:{line:50,column:13}},{start:{line:48,column:12},end:{line:50,column:13}}],line:48},"6":{loc:{start:{line:51,column:12},end:{line:74,column:13}},type:"if",locations:[{start:{line:51,column:12},end:{line:74,column:13}},{start:{line:51,column:12},end:{line:74,column:13}}],line:51},"7":{loc:{start:{line:52,column:34},end:{line:52,column:63}},type:"cond-expr",locations:[{start:{line:52,column:44},end:{line:52,column:56}},{start:{line:52,column:59},end:{line:52,column:63}}],line:52},"8":{loc:{start:{line:55,column:16},end:{line:73,column:17}},type:"switch",locations:[{start:{line:56,column:20},end:{line:56,column:33}},{start:{line:57,column:20},end:{line:59,column:30}},{start:{line:60,column:20},end:{line:62,column:30}},{start:{line:63,column:20},end:{line:70,column:30}},{start:{line:71,column:20},end:{line:72,column:50}}],line:55},"9":{loc:{start:{line:64,column:24},end:{line:69,column:25}},type:"if",locations:[{start:{line:64,column:24},end:{line:69,column:25}},{start:{line:64,column:24},end:{line:69,column:25}}],line:64},"10":{loc:{start:{line:68,column:46},end:{line:68,column:128}},type:"cond-expr",locations:[{start:{line:68,column:64},end:{line:68,column:109}},{start:{line:68,column:112},end:{line:68,column:128}}],line:68},"11":{loc:{start:{line:91,column:18},end:{line:91,column:31}},type:"binary-expr",locations:[{start:{line:91,column:18},end:{line:91,column:25}},{start:{line:91,column:29},end:{line:91,column:31}}],line:91},"12":{loc:{start:{line:92,column:8},end:{line:95,column:9}},type:"if",locations:[{start:{line:92,column:8},end:{line:95,column:9}},{start:{line:92,column:8},end:{line:95,column:9}}],line:92},"13":{loc:{start:{line:92,column:12},end:{line:93,column:64}},type:"binary-expr",locations:[{start:{line:92,column:12},end:{line:92,column:36}},{start:{line:92,column:40},end:{line:92,column:64}},{start:{line:92,column:68},end:{line:92,column:94}},{start:{line:93,column:12},end:{line:93,column:35}},{start:{line:93,column:39},end:{line:93,column:64}}],line:92},"14":{loc:{start:{line:104,column:8},end:{line:106,column:9}},type:"if",locations:[{start:{line:104,column:8},end:{line:106,column:9}},{start:{line:104,column:8},end:{line:106,column:9}}],line:104},"15":{loc:{start:{line:114,column:8},end:{line:116,column:9}},type:"if",locations:[{start:{line:114,column:8},end:{line:116,column:9}},{start:{line:114,column:8},end:{line:116,column:9}}],line:114},"16":{loc:{start:{line:152,column:8},end:{line:158,column:9}},type:"if",locations:[{start:{line:152,column:8},end:{line:158,column:9}},{start:{line:152,column:8},end:{line:158,column:9}}],line:152},"17":{loc:{start:{line:152,column:12},end:{line:152,column:50}},type:"binary-expr",locations:[{start:{line:152,column:12},end:{line:152,column:28}},{start:{line:152,column:32},end:{line:152,column:50}}],line:152},"18":{loc:{start:{line:162,column:12},end:{line:164,column:13}},type:"if",locations:[{start:{line:162,column:12},end:{line:164,column:13}},{start:{line:162,column:12},end:{line:164,column:13}}],line:162},"19":{loc:{start:{line:165,column:12},end:{line:185,column:13}},type:"if",locations:[{start:{line:165,column:12},end:{line:185,column:13}},{start:{line:165,column:12},end:{line:185,column:13}}],line:165},"20":{loc:{start:{line:166,column:34},end:{line:166,column:63}},type:"cond-expr",locations:[{start:{line:166,column:44},end:{line:166,column:56}},{start:{line:166,column:59},end:{line:166,column:63}}],line:166},"21":{loc:{start:{line:168,column:17},end:{line:185,column:13}},type:"if",locations:[{start:{line:168,column:17},end:{line:185,column:13}},{start:{line:168,column:17},end:{line:185,column:13}}],line:168},"22":{loc:{start:{line:171,column:17},end:{line:185,column:13}},type:"if",locations:[{start:{line:171,column:17},end:{line:185,column:13}},{start:{line:171,column:17},end:{line:185,column:13}}],line:171},"23":{loc:{start:{line:172,column:16},end:{line:177,column:17}},type:"if",locations:[{start:{line:172,column:16},end:{line:177,column:17}},{start:{line:172,column:16},end:{line:177,column:17}}],line:172},"24":{loc:{start:{line:176,column:38},end:{line:176,column:120}},type:"cond-expr",locations:[{start:{line:176,column:56},end:{line:176,column:101}},{start:{line:176,column:104},end:{line:176,column:120}}],line:176},"25":{loc:{start:{line:179,column:17},end:{line:185,column:13}},type:"if",locations:[{start:{line:179,column:17},end:{line:185,column:13}},{start:{line:179,column:17},end:{line:185,column:13}}],line:179},"26":{loc:{start:{line:182,column:16},end:{line:184,column:17}},type:"if",locations:[{start:{line:182,column:16},end:{line:184,column:17}},{start:{line:182,column:16},end:{line:184,column:17}}],line:182},"27":{loc:{start:{line:182,column:20},end:{line:182,column:74}},type:"binary-expr",locations:[{start:{line:182,column:20},end:{line:182,column:32}},{start:{line:182,column:36},end:{line:182,column:52}},{start:{line:182,column:56},end:{line:182,column:74}}],line:182},"28":{loc:{start:{line:187,column:8},end:{line:212,column:9}},type:"if",locations:[{start:{line:187,column:8},end:{line:212,column:9}},{start:{line:187,column:8},end:{line:212,column:9}}],line:187},"29":{loc:{start:{line:188,column:26},end:{line:188,column:53}},type:"binary-expr",locations:[{start:{line:188,column:26},end:{line:188,column:47}},{start:{line:188,column:51},end:{line:188,column:53}}],line:188},"30":{loc:{start:{line:191,column:16},end:{line:193,column:17}},type:"if",locations:[{start:{line:191,column:16},end:{line:193,column:17}},{start:{line:191,column:16},end:{line:193,column:17}}],line:191},"31":{loc:{start:{line:191,column:20},end:{line:191,column:71}},type:"binary-expr",locations:[{start:{line:191,column:20},end:{line:191,column:49}},{start:{line:191,column:53},end:{line:191,column:71}}],line:191},"32":{loc:{start:{line:194,column:16},end:{line:210,column:17}},type:"switch",locations:[{start:{line:195,column:20},end:{line:195,column:33}},{start:{line:196,column:20},end:{line:200,column:30}},{start:{line:201,column:20},end:{line:205,column:30}},{start:{line:206,column:20},end:{line:209,column:25}}],line:194},"33":{loc:{start:{line:197,column:24},end:{line:199,column:25}},type:"if",locations:[{start:{line:197,column:24},end:{line:199,column:25}},{start:{line:197,column:24},end:{line:199,column:25}}],line:197},"34":{loc:{start:{line:202,column:24},end:{line:204,column:25}},type:"if",locations:[{start:{line:202,column:24},end:{line:204,column:25}},{start:{line:202,column:24},end:{line:204,column:25}}],line:202},"35":{loc:{start:{line:207,column:24},end:{line:209,column:25}},type:"if",locations:[{start:{line:207,column:24},end:{line:209,column:25}},{start:{line:207,column:24},end:{line:209,column:25}}],line:207},"36":{loc:{start:{line:218,column:12},end:{line:225,column:13}},type:"if",locations:[{start:{line:218,column:12},end:{line:225,column:13}},{start:{line:218,column:12},end:{line:225,column:13}}],line:218},"37":{loc:{start:{line:218,column:16},end:{line:218,column:97}},type:"binary-expr",locations:[{start:{line:218,column:16},end:{line:218,column:50}},{start:{line:218,column:55},end:{line:218,column:96}}],line:218},"38":{loc:{start:{line:219,column:16},end:{line:224,column:17}},type:"if",locations:[{start:{line:219,column:16},end:{line:224,column:17}},{start:{line:219,column:16},end:{line:224,column:17}}],line:219},"39":{loc:{start:{line:232,column:12},end:{line:236,column:13}},type:"if",locations:[{start:{line:232,column:12},end:{line:236,column:13}},{start:{line:232,column:12},end:{line:236,column:13}}],line:232},"40":{loc:{start:{line:232,column:16},end:{line:232,column:111}},type:"binary-expr",locations:[{start:{line:232,column:16},end:{line:232,column:60}},{start:{line:232,column:64},end:{line:232,column:111}}],line:232},"41":{loc:{start:{line:233,column:16},end:{line:235,column:17}},type:"if",locations:[{start:{line:233,column:16},end:{line:235,column:17}},{start:{line:233,column:16},end:{line:235,column:17}}],line:233},"42":{loc:{start:{line:233,column:20},end:{line:233,column:107}},type:"binary-expr",locations:[{start:{line:233,column:20},end:{line:233,column:70}},{start:{line:233,column:74},end:{line:233,column:107}}],line:233},"43":{loc:{start:{line:238,column:15},end:{line:238,column:61}},type:"cond-expr",locations:[{start:{line:238,column:35},end:{line:238,column:54}},{start:{line:238,column:57},end:{line:238,column:61}}],line:238}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":0,"95":0,"96":0,"97":0,"98":0,"99":0,"100":0,"101":0,"102":0,"103":0,"104":0,"105":0,"106":0,"107":0,"108":0,"109":0,"110":0,"111":0,"112":0,"113":0,"114":0,"115":0,"116":0,"117":0,"118":0,"119":0,"120":0,"121":0,"122":0,"123":0,"124":0,"125":0,"126":0,"127":0,"128":0,"129":0,"130":0,"131":0,"132":0,"133":0,"134":0,"135":0,"136":0,"137":0,"138":0,"139":0,"140":0,"141":0,"142":0,"143":0,"144":0,"145":0,"146":0,"147":0,"148":0,"149":0,"150":0,"151":0,"152":0,"153":0,"154":0,"155":0,"156":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0,0,0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0,0,0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0],"23":[0,0],"24":[0,0],"25":[0,0],"26":[0,0],"27":[0,0,0],"28":[0,0],"29":[0,0],"30":[0,0],"31":[0,0],"32":[0,0,0,0],"33":[0,0],"34":[0,0],"35":[0,0],"36":[0,0],"37":[0,0],"38":[0,0],"39":[0,0],"40":[0,0],"41":[0,0],"42":[0,0],"43":[0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/business/entity-business.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/business/entity-business.ts"],names:[],mappings:"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",sourcesContent:["import AbstractBusiness from './abstract-business';\nimport EntityService from '../data-access/service/entity-service';\nimport {AttributeRelated, AttributeCollection} from '../presentation/dataclass';\nimport Entity from '../presentation/entity';\nimport {DataClass} from '../presentation/dataclass';\nimport DataClassBusiness from './dataclass-business';\nimport {QueryOption} from '../presentation/query-option';\nimport {MethodAdapter} from './method-adapter';\nimport WakandaClient from '../wakanda-client';\nimport Media from '../presentation/media';\nimport Util from './util';\n\n\nexport interface IEntityDBO {\n  __KEY?: string;\n  __STAMP?: number;\n  __deferred?: {uri: string, __KEY: string};\n\n  [key: string]: any;\n}\n\nclass EntityBusiness extends AbstractBusiness {\n\n  private entity: Entity;\n  private dataClass: DataClass;\n  private dataClassBusiness: DataClassBusiness;\n  private service: EntityService;\n  private _oldEntityValues: IEntityDBO;\n\n  constructor({wakJSC, entity, dataClass, dataClassBusiness}:\n  {wakJSC: WakandaClient, entity: Entity, dataClass: DataClass, dataClassBusiness: DataClassBusiness}) {\n    super({wakJSC});\n\n    this.entity = entity;\n    this.dataClass = dataClass;\n    this.dataClassBusiness = dataClassBusiness;\n    this.service = new EntityService({\n      wakJSC,\n      entity,\n      dataClassBusiness\n    });\n  }\n\n  public _decorateEntity() {\n    this.entity.save        = this.save.bind(this);\n    this.entity.delete      = this.delete.bind(this);\n    this.entity.fetch       = this.fetch.bind(this);\n    this.entity.recompute   = this.recompute.bind(this);\n\n    this._addUserDefinedMethods();\n  }\n\n  public _flashEntityValues(): void {\n    let data: IEntityDBO = {};\n    let entity = this.entity;\n\n    for (let attr of this.dataClass.attributes) {\n      let objAttr = entity[attr.name];\n\n      if (attr instanceof AttributeCollection) {\n        continue;\n      }\n\n      if (attr instanceof AttributeRelated) {\n        data[attr.name] = objAttr ? objAttr._key : null;\n      } else {\n        switch (attr.type) {\n          case 'image':\n          case 'blob':\n            data[attr.name] = {\xA0uri: objAttr.uri };\n            break;\n          case 'object':\n            data[attr.name] = JSON.stringify(objAttr);\n            break;\n          case 'date':\n            if (!objAttr) {\n              data[attr.name] = null;\n            } else {\n              data[attr.name] = attr.simpleDate ? Util.wakToStringSimpleDate(objAttr) : objAttr.toJSON();\n            }\n            break;\n          default:\n            data[attr.name] = objAttr;\n        }\n      }\n    }\n\n    this._oldEntityValues = data;\n  }\n\n  private _addUserDefinedMethods() {\n    let self = this;\n    this.dataClassBusiness.methods.entity.forEach(method => {\n      //Voluntary don't use fat arrow notation to use arguments object without a bug\n      this.entity[method] = function() {\n        let params = Array.from(arguments);\n        return self.callMethod(method, params);\n      };\n    });\n  }\n\n  public fetch(options?: QueryOption): Promise<Entity> {\n    let opt = options || {};\n\n    if (opt.filter !== undefined || opt.params !== undefined || opt.pageSize !== undefined ||\n      opt.start !== undefined || opt.orderBy !== undefined) {\n      throw new Error('Entity.fetch: options filter, params, pageSize, start and orderBy are not allowed');\n    }\n\n    return this.dataClassBusiness.find(this.entity._key, options).then(fresherEntity => {\n      this._refreshEntity({fresherEntity});\n      this._flashEntityValues();\n      return this.entity;\n    });\n  }\n\n  public callMethod(methodName: string, parameters: any[]): Promise<any> {\n    if (!this.entity._key) {\n      throw new Error('Entity.' + methodName + ': can not be called on an unsaved entity');\n    }\n\n    return this.service.callMethod(methodName, parameters)\n    .then(obj => {\n\n      return MethodAdapter.transform(obj, this.dataClassBusiness._dataClassBusinessMap);\n    });\n  }\n\n  public delete(): Promise<void> {\n    if (!this.entity._key) {\n      throw new Error('Entity.delete: can not delete unsaved entity');\n    }\n\n    return this.service.delete().then(() => {\n      this.entity = null;\n    });\n  }\n\n  public save(): Promise<Entity> {\n    let data = this.prepareDataForSave();\n\n    //If first-level related entities were already expanded, we will save the\n    //entity and ask the server to expand theses attributes on its response\n    //So, the user keeps its entities expanded\n    let expand = this._getExpandString();\n\n    return this.service.save(data, expand).then(entityDbo => {\n      let fresherEntity = this.dataClassBusiness._presentationEntityFromDbo({\n        dbo: entityDbo\n      });\n\n      this._refreshEntity({fresherEntity});\n      this._flashEntityValues();\n      return this.entity;\n    });\n  }\n\n  public recompute(): Promise<Entity> {\n    let data = this.prepareDataForSave();\n\n    return this.service.recompute(data)\n      .then(dbo => {\n        let fresherEntity = this.dataClassBusiness._presentationEntityFromDbo({\n          dbo\n        });\n\n        this._refreshEntity({fresherEntity});\n        return this.entity;\n      });\n  }\n\n  private prepareDataForSave(): IEntityDBO {\n    let data: IEntityDBO = {};\n    let entityIsNew = false;\n\n    if (this.entity._key && this.entity._stamp) {\n      data.__KEY   = this.entity._key;\n      data.__STAMP = this.entity._stamp;\n    }\n    else {\n      entityIsNew = true;\n    }\n\n    for (let attr of this.dataClass.attributes) {\n      let objAttr = this.entity[attr.name];\n\n      if (objAttr === undefined) {\n        objAttr = null;\n      }\n\n      if (attr instanceof AttributeRelated) {\n        data[attr.name] = objAttr ? objAttr._key : null;\n      }\n      else if (attr.readOnly) {\n        continue;\n      }\n      else if (attr.type === 'date') {\n        if (! objAttr) {\n          data[attr.name] = objAttr;\n        } else {\n          data[attr.name] = attr.simpleDate ? Util.wakToStringSimpleDate(objAttr) : objAttr.toJSON();\n        }\n      }\n      else if (!(attr instanceof AttributeCollection)) {\n        //Don't send null value for a newly created attribute (to don't override value eventually set on init event)\n        //except for ID (which is null), because if an empty object is send, save is ignored\n        if (!entityIsNew || objAttr !== null || attr.name === 'ID') {\n          data[attr.name] = objAttr;\n        }\n      }\n    }\n\n    if (!entityIsNew) {\n      let oldData = this._oldEntityValues || {};\n      for (let attr of this.dataClass.attributes) {\n        if (data[attr.name] === undefined || attr.name === 'ID') {\n          continue;\n        }\n\n        switch (attr.type) {\n          case 'image':\n          case 'blob':\n            if (data[attr.name].uri === oldData[attr.name].uri) {\n              delete data[attr.name];\n            }\n            break;\n          case 'object':\n            if (JSON.stringify(data[attr.name]) === oldData[attr.name]) {\n              delete data[attr.name];\n            }\n            break;\n          default:\n            if (data[attr.name] === oldData[attr.name]) {\n              delete data[attr.name];\n            }\n        }\n      }\n    }\n\n    return data;\n  }\n\n  private _refreshEntity({fresherEntity}: {fresherEntity: Entity}) {\n    for (let prop in fresherEntity) {\n      if (fresherEntity.hasOwnProperty(prop) && (typeof fresherEntity[prop] !== 'function')) {\n        if (fresherEntity[prop] instanceof Media) {\n          this.entity[prop].uri = fresherEntity[prop].uri;\n        } else {\n          this.entity[prop] = fresherEntity[prop];\n        }\n      }\n    }\n  }\n\n  private _getExpandString(): string {\n    let expand = '';\n    for (let attr of this.dataClass.attributes) {\n      if (attr instanceof AttributeRelated || attr instanceof AttributeCollection) {\n        if (this.entity[attr.name] instanceof Entity && !this.entity[attr.name]._deferred) {\n          expand += attr.name + ',';\n        }\n      }\n    }\n\n    return expand.length > 0 ? expand.slice(0, -1) : null;\n  }\n}\n\nexport default EntityBusiness;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_reb5zrglw.s[0]++,(cov_reb5zrglw.b[0][0]++,this)&&(cov_reb5zrglw.b[0][1]++,this.__extends)||(cov_reb5zrglw.b[0][2]++,function(){cov_reb5zrglw.f[0]++;var extendStatics=(cov_reb5zrglw.s[1]++,(cov_reb5zrglw.b[1][0]++,Object.setPrototypeOf)||(cov_reb5zrglw.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_reb5zrglw.b[1][2]++,function(d,b){cov_reb5zrglw.f[1]++;cov_reb5zrglw.s[2]++;d.__proto__=b;})||(cov_reb5zrglw.b[1][3]++,function(d,b){cov_reb5zrglw.f[2]++;cov_reb5zrglw.s[3]++;for(var p in b){cov_reb5zrglw.s[4]++;if(b.hasOwnProperty(p)){cov_reb5zrglw.b[2][0]++;cov_reb5zrglw.s[5]++;d[p]=b[p];}else{cov_reb5zrglw.b[2][1]++;}}}));cov_reb5zrglw.s[6]++;return function(d,b){cov_reb5zrglw.f[3]++;cov_reb5zrglw.s[7]++;extendStatics(d,b);function __(){cov_reb5zrglw.f[4]++;cov_reb5zrglw.s[8]++;this.constructor=d;}cov_reb5zrglw.s[9]++;d.prototype=b===null?(cov_reb5zrglw.b[3][0]++,Object.create(b)):(cov_reb5zrglw.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_reb5zrglw.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_business_1=(cov_reb5zrglw.s[11]++,__webpack_require__(13));var entity_service_1=(cov_reb5zrglw.s[12]++,__webpack_require__(128));var dataclass_1=(cov_reb5zrglw.s[13]++,__webpack_require__(36));var entity_1=(cov_reb5zrglw.s[14]++,__webpack_require__(38));var method_adapter_1=(cov_reb5zrglw.s[15]++,__webpack_require__(39));var media_1=(cov_reb5zrglw.s[16]++,__webpack_require__(68));var util_1=(cov_reb5zrglw.s[17]++,__webpack_require__(69));var EntityBusiness=(/** @class */cov_reb5zrglw.s[18]++,function(_super){cov_reb5zrglw.f[5]++;cov_reb5zrglw.s[19]++;__extends(EntityBusiness,_super);function EntityBusiness(_a){cov_reb5zrglw.f[6]++;var wakJSC=(cov_reb5zrglw.s[20]++,_a.wakJSC),entity=(cov_reb5zrglw.s[21]++,_a.entity),dataClass=(cov_reb5zrglw.s[22]++,_a.dataClass),dataClassBusiness=(cov_reb5zrglw.s[23]++,_a.dataClassBusiness);var _this=(cov_reb5zrglw.s[24]++,(cov_reb5zrglw.b[4][0]++,_super.call(this,{wakJSC:wakJSC}))||(cov_reb5zrglw.b[4][1]++,this));cov_reb5zrglw.s[25]++;_this.entity=entity;cov_reb5zrglw.s[26]++;_this.dataClass=dataClass;cov_reb5zrglw.s[27]++;_this.dataClassBusiness=dataClassBusiness;cov_reb5zrglw.s[28]++;_this.service=new entity_service_1.default({wakJSC:wakJSC,entity:entity,dataClassBusiness:dataClassBusiness});cov_reb5zrglw.s[29]++;return _this;}cov_reb5zrglw.s[30]++;EntityBusiness.prototype._decorateEntity=function(){cov_reb5zrglw.f[7]++;cov_reb5zrglw.s[31]++;this.entity.save=this.save.bind(this);cov_reb5zrglw.s[32]++;this.entity.delete=this.delete.bind(this);cov_reb5zrglw.s[33]++;this.entity.fetch=this.fetch.bind(this);cov_reb5zrglw.s[34]++;this.entity.recompute=this.recompute.bind(this);cov_reb5zrglw.s[35]++;this._addUserDefinedMethods();};cov_reb5zrglw.s[36]++;EntityBusiness.prototype._flashEntityValues=function(){cov_reb5zrglw.f[8]++;var data=(cov_reb5zrglw.s[37]++,{});var entity=(cov_reb5zrglw.s[38]++,this.entity);cov_reb5zrglw.s[39]++;for(var _i=0,_a=this.dataClass.attributes;_i<_a.length;_i++){var attr=(cov_reb5zrglw.s[40]++,_a[_i]);var objAttr=(cov_reb5zrglw.s[41]++,entity[attr.name]);cov_reb5zrglw.s[42]++;if(attr instanceof dataclass_1.AttributeCollection){cov_reb5zrglw.b[5][0]++;cov_reb5zrglw.s[43]++;continue;}else{cov_reb5zrglw.b[5][1]++;}cov_reb5zrglw.s[44]++;if(attr instanceof dataclass_1.AttributeRelated){cov_reb5zrglw.b[6][0]++;cov_reb5zrglw.s[45]++;data[attr.name]=objAttr?(cov_reb5zrglw.b[7][0]++,objAttr._key):(cov_reb5zrglw.b[7][1]++,null);}else{cov_reb5zrglw.b[6][1]++;cov_reb5zrglw.s[46]++;switch(attr.type){case'image':cov_reb5zrglw.b[8][0]++;case'blob':cov_reb5zrglw.b[8][1]++;cov_reb5zrglw.s[47]++;data[attr.name]={uri:objAttr.uri};cov_reb5zrglw.s[48]++;break;case'object':cov_reb5zrglw.b[8][2]++;cov_reb5zrglw.s[49]++;data[attr.name]=JSON.stringify(objAttr);cov_reb5zrglw.s[50]++;break;case'date':cov_reb5zrglw.b[8][3]++;cov_reb5zrglw.s[51]++;if(!objAttr){cov_reb5zrglw.b[9][0]++;cov_reb5zrglw.s[52]++;data[attr.name]=null;}else{cov_reb5zrglw.b[9][1]++;cov_reb5zrglw.s[53]++;data[attr.name]=attr.simpleDate?(cov_reb5zrglw.b[10][0]++,util_1.default.wakToStringSimpleDate(objAttr)):(cov_reb5zrglw.b[10][1]++,objAttr.toJSON());}cov_reb5zrglw.s[54]++;break;default:cov_reb5zrglw.b[8][4]++;cov_reb5zrglw.s[55]++;data[attr.name]=objAttr;}}}cov_reb5zrglw.s[56]++;this._oldEntityValues=data;};cov_reb5zrglw.s[57]++;EntityBusiness.prototype._addUserDefinedMethods=function(){cov_reb5zrglw.f[9]++;var _this=(cov_reb5zrglw.s[58]++,this);var self=(cov_reb5zrglw.s[59]++,this);cov_reb5zrglw.s[60]++;this.dataClassBusiness.methods.entity.forEach(function(method){cov_reb5zrglw.f[10]++;cov_reb5zrglw.s[61]++;//Voluntary don't use fat arrow notation to use arguments object without a bug
_this.entity[method]=function(){cov_reb5zrglw.f[11]++;var params=(cov_reb5zrglw.s[62]++,Array.from(arguments));cov_reb5zrglw.s[63]++;return self.callMethod(method,params);};});};cov_reb5zrglw.s[64]++;EntityBusiness.prototype.fetch=function(options){cov_reb5zrglw.f[12]++;var _this=(cov_reb5zrglw.s[65]++,this);var opt=(cov_reb5zrglw.s[66]++,(cov_reb5zrglw.b[11][0]++,options)||(cov_reb5zrglw.b[11][1]++,{}));cov_reb5zrglw.s[67]++;if((cov_reb5zrglw.b[13][0]++,opt.filter!==undefined)||(cov_reb5zrglw.b[13][1]++,opt.params!==undefined)||(cov_reb5zrglw.b[13][2]++,opt.pageSize!==undefined)||(cov_reb5zrglw.b[13][3]++,opt.start!==undefined)||(cov_reb5zrglw.b[13][4]++,opt.orderBy!==undefined)){cov_reb5zrglw.b[12][0]++;cov_reb5zrglw.s[68]++;throw new Error('Entity.fetch: options filter, params, pageSize, start and orderBy are not allowed');}else{cov_reb5zrglw.b[12][1]++;}cov_reb5zrglw.s[69]++;return this.dataClassBusiness.find(this.entity._key,options).then(function(fresherEntity){cov_reb5zrglw.f[13]++;cov_reb5zrglw.s[70]++;_this._refreshEntity({fresherEntity:fresherEntity});cov_reb5zrglw.s[71]++;_this._flashEntityValues();cov_reb5zrglw.s[72]++;return _this.entity;});};cov_reb5zrglw.s[73]++;EntityBusiness.prototype.callMethod=function(methodName,parameters){cov_reb5zrglw.f[14]++;var _this=(cov_reb5zrglw.s[74]++,this);cov_reb5zrglw.s[75]++;if(!this.entity._key){cov_reb5zrglw.b[14][0]++;cov_reb5zrglw.s[76]++;throw new Error('Entity.'+methodName+': can not be called on an unsaved entity');}else{cov_reb5zrglw.b[14][1]++;}cov_reb5zrglw.s[77]++;return this.service.callMethod(methodName,parameters).then(function(obj){cov_reb5zrglw.f[15]++;cov_reb5zrglw.s[78]++;return method_adapter_1.MethodAdapter.transform(obj,_this.dataClassBusiness._dataClassBusinessMap);});};cov_reb5zrglw.s[79]++;EntityBusiness.prototype.delete=function(){cov_reb5zrglw.f[16]++;var _this=(cov_reb5zrglw.s[80]++,this);cov_reb5zrglw.s[81]++;if(!this.entity._key){cov_reb5zrglw.b[15][0]++;cov_reb5zrglw.s[82]++;throw new Error('Entity.delete: can not delete unsaved entity');}else{cov_reb5zrglw.b[15][1]++;}cov_reb5zrglw.s[83]++;return this.service.delete().then(function(){cov_reb5zrglw.f[17]++;cov_reb5zrglw.s[84]++;_this.entity=null;});};cov_reb5zrglw.s[85]++;EntityBusiness.prototype.save=function(){cov_reb5zrglw.f[18]++;var _this=(cov_reb5zrglw.s[86]++,this);var data=(cov_reb5zrglw.s[87]++,this.prepareDataForSave());//If first-level related entities were already expanded, we will save the
//entity and ask the server to expand theses attributes on its response
//So, the user keeps its entities expanded
var expand=(cov_reb5zrglw.s[88]++,this._getExpandString());cov_reb5zrglw.s[89]++;return this.service.save(data,expand).then(function(entityDbo){cov_reb5zrglw.f[19]++;var fresherEntity=(cov_reb5zrglw.s[90]++,_this.dataClassBusiness._presentationEntityFromDbo({dbo:entityDbo}));cov_reb5zrglw.s[91]++;_this._refreshEntity({fresherEntity:fresherEntity});cov_reb5zrglw.s[92]++;_this._flashEntityValues();cov_reb5zrglw.s[93]++;return _this.entity;});};cov_reb5zrglw.s[94]++;EntityBusiness.prototype.recompute=function(){cov_reb5zrglw.f[20]++;var _this=(cov_reb5zrglw.s[95]++,this);var data=(cov_reb5zrglw.s[96]++,this.prepareDataForSave());cov_reb5zrglw.s[97]++;return this.service.recompute(data).then(function(dbo){cov_reb5zrglw.f[21]++;var fresherEntity=(cov_reb5zrglw.s[98]++,_this.dataClassBusiness._presentationEntityFromDbo({dbo:dbo}));cov_reb5zrglw.s[99]++;_this._refreshEntity({fresherEntity:fresherEntity});cov_reb5zrglw.s[100]++;return _this.entity;});};cov_reb5zrglw.s[101]++;EntityBusiness.prototype.prepareDataForSave=function(){cov_reb5zrglw.f[22]++;var data=(cov_reb5zrglw.s[102]++,{});var entityIsNew=(cov_reb5zrglw.s[103]++,false);cov_reb5zrglw.s[104]++;if((cov_reb5zrglw.b[17][0]++,this.entity._key)&&(cov_reb5zrglw.b[17][1]++,this.entity._stamp)){cov_reb5zrglw.b[16][0]++;cov_reb5zrglw.s[105]++;data.__KEY=this.entity._key;cov_reb5zrglw.s[106]++;data.__STAMP=this.entity._stamp;}else{cov_reb5zrglw.b[16][1]++;cov_reb5zrglw.s[107]++;entityIsNew=true;}cov_reb5zrglw.s[108]++;for(var _i=0,_a=this.dataClass.attributes;_i<_a.length;_i++){var attr=(cov_reb5zrglw.s[109]++,_a[_i]);var objAttr=(cov_reb5zrglw.s[110]++,this.entity[attr.name]);cov_reb5zrglw.s[111]++;if(objAttr===undefined){cov_reb5zrglw.b[18][0]++;cov_reb5zrglw.s[112]++;objAttr=null;}else{cov_reb5zrglw.b[18][1]++;}cov_reb5zrglw.s[113]++;if(attr instanceof dataclass_1.AttributeRelated){cov_reb5zrglw.b[19][0]++;cov_reb5zrglw.s[114]++;data[attr.name]=objAttr?(cov_reb5zrglw.b[20][0]++,objAttr._key):(cov_reb5zrglw.b[20][1]++,null);}else{cov_reb5zrglw.b[19][1]++;cov_reb5zrglw.s[115]++;if(attr.readOnly){cov_reb5zrglw.b[21][0]++;cov_reb5zrglw.s[116]++;continue;}else{cov_reb5zrglw.b[21][1]++;cov_reb5zrglw.s[117]++;if(attr.type==='date'){cov_reb5zrglw.b[22][0]++;cov_reb5zrglw.s[118]++;if(!objAttr){cov_reb5zrglw.b[23][0]++;cov_reb5zrglw.s[119]++;data[attr.name]=objAttr;}else{cov_reb5zrglw.b[23][1]++;cov_reb5zrglw.s[120]++;data[attr.name]=attr.simpleDate?(cov_reb5zrglw.b[24][0]++,util_1.default.wakToStringSimpleDate(objAttr)):(cov_reb5zrglw.b[24][1]++,objAttr.toJSON());}}else{cov_reb5zrglw.b[22][1]++;cov_reb5zrglw.s[121]++;if(!(attr instanceof dataclass_1.AttributeCollection)){cov_reb5zrglw.b[25][0]++;cov_reb5zrglw.s[122]++;//Don't send null value for a newly created attribute (to don't override value eventually set on init event)
//except for ID (which is null), because if an empty object is send, save is ignored
if((cov_reb5zrglw.b[27][0]++,!entityIsNew)||(cov_reb5zrglw.b[27][1]++,objAttr!==null)||(cov_reb5zrglw.b[27][2]++,attr.name==='ID')){cov_reb5zrglw.b[26][0]++;cov_reb5zrglw.s[123]++;data[attr.name]=objAttr;}else{cov_reb5zrglw.b[26][1]++;}}else{cov_reb5zrglw.b[25][1]++;}}}}}cov_reb5zrglw.s[124]++;if(!entityIsNew){cov_reb5zrglw.b[28][0]++;var oldData=(cov_reb5zrglw.s[125]++,(cov_reb5zrglw.b[29][0]++,this._oldEntityValues)||(cov_reb5zrglw.b[29][1]++,{}));cov_reb5zrglw.s[126]++;for(var _b=0,_c=this.dataClass.attributes;_b<_c.length;_b++){var attr=(cov_reb5zrglw.s[127]++,_c[_b]);cov_reb5zrglw.s[128]++;if((cov_reb5zrglw.b[31][0]++,data[attr.name]===undefined)||(cov_reb5zrglw.b[31][1]++,attr.name==='ID')){cov_reb5zrglw.b[30][0]++;cov_reb5zrglw.s[129]++;continue;}else{cov_reb5zrglw.b[30][1]++;}cov_reb5zrglw.s[130]++;switch(attr.type){case'image':cov_reb5zrglw.b[32][0]++;case'blob':cov_reb5zrglw.b[32][1]++;cov_reb5zrglw.s[131]++;if(data[attr.name].uri===oldData[attr.name].uri){cov_reb5zrglw.b[33][0]++;cov_reb5zrglw.s[132]++;delete data[attr.name];}else{cov_reb5zrglw.b[33][1]++;}cov_reb5zrglw.s[133]++;break;case'object':cov_reb5zrglw.b[32][2]++;cov_reb5zrglw.s[134]++;if(JSON.stringify(data[attr.name])===oldData[attr.name]){cov_reb5zrglw.b[34][0]++;cov_reb5zrglw.s[135]++;delete data[attr.name];}else{cov_reb5zrglw.b[34][1]++;}cov_reb5zrglw.s[136]++;break;default:cov_reb5zrglw.b[32][3]++;cov_reb5zrglw.s[137]++;if(data[attr.name]===oldData[attr.name]){cov_reb5zrglw.b[35][0]++;cov_reb5zrglw.s[138]++;delete data[attr.name];}else{cov_reb5zrglw.b[35][1]++;}}}}else{cov_reb5zrglw.b[28][1]++;}cov_reb5zrglw.s[139]++;return data;};cov_reb5zrglw.s[140]++;EntityBusiness.prototype._refreshEntity=function(_a){cov_reb5zrglw.f[23]++;var fresherEntity=(cov_reb5zrglw.s[141]++,_a.fresherEntity);cov_reb5zrglw.s[142]++;for(var prop in fresherEntity){cov_reb5zrglw.s[143]++;if((cov_reb5zrglw.b[37][0]++,fresherEntity.hasOwnProperty(prop))&&(cov_reb5zrglw.b[37][1]++,typeof fresherEntity[prop]!=='function')){cov_reb5zrglw.b[36][0]++;cov_reb5zrglw.s[144]++;if(fresherEntity[prop]instanceof media_1.default){cov_reb5zrglw.b[38][0]++;cov_reb5zrglw.s[145]++;this.entity[prop].uri=fresherEntity[prop].uri;}else{cov_reb5zrglw.b[38][1]++;cov_reb5zrglw.s[146]++;this.entity[prop]=fresherEntity[prop];}}else{cov_reb5zrglw.b[36][1]++;}}};cov_reb5zrglw.s[147]++;EntityBusiness.prototype._getExpandString=function(){cov_reb5zrglw.f[24]++;var expand=(cov_reb5zrglw.s[148]++,'');cov_reb5zrglw.s[149]++;for(var _i=0,_a=this.dataClass.attributes;_i<_a.length;_i++){var attr=(cov_reb5zrglw.s[150]++,_a[_i]);cov_reb5zrglw.s[151]++;if((cov_reb5zrglw.b[40][0]++,attr instanceof dataclass_1.AttributeRelated)||(cov_reb5zrglw.b[40][1]++,attr instanceof dataclass_1.AttributeCollection)){cov_reb5zrglw.b[39][0]++;cov_reb5zrglw.s[152]++;if((cov_reb5zrglw.b[42][0]++,this.entity[attr.name]instanceof entity_1.default)&&(cov_reb5zrglw.b[42][1]++,!this.entity[attr.name]._deferred)){cov_reb5zrglw.b[41][0]++;cov_reb5zrglw.s[153]++;expand+=attr.name+',';}else{cov_reb5zrglw.b[41][1]++;}}else{cov_reb5zrglw.b[39][1]++;}}cov_reb5zrglw.s[154]++;return expand.length>0?(cov_reb5zrglw.b[43][0]++,expand.slice(0,-1)):(cov_reb5zrglw.b[43][1]++,null);};cov_reb5zrglw.s[155]++;return EntityBusiness;}(abstract_business_1.default));cov_reb5zrglw.s[156]++;exports.default=EntityBusiness;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_1vzx97h4sg=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/entity-service.ts",hash="35e6bf7e8f22a274f199608ce1ed9548fdf452fd",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/entity-service.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:25},end:{line:13,column:54}},"12":{start:{line:14,column:28},end:{line:14,column:65}},"13":{start:{line:15,column:35},end:{line:56,column:29}},"14":{start:{line:16,column:4},end:{line:16,column:37}},"15":{start:{line:18,column:21},end:{line:18,column:30}},"16":{start:{line:18,column:41},end:{line:18,column:50}},"17":{start:{line:18,column:72},end:{line:18,column:92}},"18":{start:{line:19,column:20},end:{line:19,column:65}},"19":{start:{line:20,column:8},end:{line:20,column:30}},"20":{start:{line:21,column:8},end:{line:21,column:52}},"21":{start:{line:22,column:8},end:{line:22,column:21}},"22":{start:{line:24,column:4},end:{line:31,column:6}},"23":{start:{line:25,column:8},end:{line:30,column:11}},"24":{start:{line:32,column:4},end:{line:38,column:6}},"25":{start:{line:33,column:8},end:{line:37,column:11}},"26":{start:{line:39,column:4},end:{line:47,column:6}},"27":{start:{line:40,column:8},end:{line:46,column:11}},"28":{start:{line:48,column:4},end:{line:54,column:6}},"29":{start:{line:49,column:8},end:{line:53,column:11}},"30":{start:{line:55,column:4},end:{line:55,column:25}},"31":{start:{line:57,column:0},end:{line:57,column:32}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:15,column:35},end:{line:15,column:36}},loc:{start:{line:15,column:53},end:{line:56,column:1}},line:15},"6":{name:"EntityService",decl:{start:{line:17,column:13},end:{line:17,column:26}},loc:{start:{line:17,column:31},end:{line:23,column:5}},line:17},"7":{name:"(anonymous_7)",decl:{start:{line:24,column:35},end:{line:24,column:36}},loc:{start:{line:24,column:59},end:{line:31,column:5}},line:24},"8":{name:"(anonymous_8)",decl:{start:{line:32,column:40},end:{line:32,column:41}},loc:{start:{line:32,column:56},end:{line:38,column:5}},line:32},"9":{name:"(anonymous_9)",decl:{start:{line:39,column:41},end:{line:39,column:42}},loc:{start:{line:39,column:75},end:{line:47,column:5}},line:39},"10":{name:"(anonymous_10)",decl:{start:{line:48,column:37},end:{line:48,column:38}},loc:{start:{line:48,column:49},end:{line:54,column:5}},line:48}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:19,column:20},end:{line:19,column:65}},type:"binary-expr",locations:[{start:{line:19,column:20},end:{line:19,column:57}},{start:{line:19,column:61},end:{line:19,column:65}}],line:19}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/entity-service.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/entity-service.ts"],names:[],mappings:";;;;;;;;;;;;AAAA,uDAAiD;AAIjD,kEAA6D;AAG7D;IAA4B,iCAAe;IAKzC,uBAAY,EACiE;YADhE,kBAAM,EAAE,kBAAM,EAAE,wCAAiB;QAA9C,YAEE,kBAAM,EAAC,MAAM,QAAA,EAAC,CAAC,SAIhB;QAFC,KAAI,CAAC,MAAM,GAAG,MAAM,CAAC;QACrB,KAAI,CAAC,iBAAiB,GAAG,iBAAiB,CAAC;;IAC7C,CAAC;IAEM,4BAAI,GAAX,UAAY,IAAgB,EAAE,MAAc;QAC1C,MAAM,CAAC,uCAAiB,CAAC,IAAI,CAAC;YAC5B,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,OAAO,EAAE,IAAI,CAAC,iBAAiB,CAAC,OAAO;YACvC,MAAM,QAAA;YACN,IAAI,MAAA;SACL,CAAC,CAAC;IACL,CAAC;IAEM,iCAAS,GAAhB,UAAiB,IAAgB;QAChC,MAAM,CAAC,uCAAiB,CAAC,SAAS,CAAC;YAChC,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,OAAO,EAAE,IAAI,CAAC,iBAAiB,CAAC,OAAO;YACvC,IAAI,MAAA;SACL,CAAC,CAAC;IACL,CAAC;IAEM,kCAAU,GAAjB,UAAkB,UAAkB,EAAE,UAAiB;QACrD,MAAM,CAAC,uCAAiB,CAAC,UAAU,CAAC;YAClC,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,OAAO,EAAE,IAAI,CAAC,iBAAiB,CAAC,OAAO;YACvC,UAAU,YAAA;YACV,UAAU,YAAA;YACV,SAAS,EAAE,IAAI,CAAC,MAAM,CAAC,IAAI;SAC5B,CAAC,CAAC;IACL,CAAC;IAEM,8BAAM,GAAb;QACE,MAAM,CAAC,uCAAiB,CAAC,MAAM,CAAC;YAC9B,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,OAAO,EAAE,IAAI,CAAC,iBAAiB,CAAC,OAAO;YACvC,SAAS,EAAE,IAAI,CAAC,MAAM,CAAC,IAAI;SAC5B,CAAC,CAAC;IACL,CAAC;IACH,oBAAC;AAAD,CAAC,AA/CD,CAA4B,0BAAe,GA+C1C;AAED,kBAAe,aAAa,CAAC",sourcesContent:["import AbstractService from './abstract-service';\nimport Entity from '../../presentation/entity';\nimport DataClassBusiness from '../../business/dataclass-business';\nimport {IEntityDBO} from '../../business/entity-business';\nimport {EntityBaseService} from './base/entity-base-service';\nimport WakandaClient from '../../wakanda-client';\n\nclass EntityService extends AbstractService {\n\n  private entity: Entity;\n  private dataClassBusiness: DataClassBusiness;\n\n  constructor({wakJSC, entity, dataClassBusiness}:\n  {wakJSC: WakandaClient, entity: Entity, dataClassBusiness: DataClassBusiness}) {\n    super({wakJSC});\n\n    this.entity = entity;\n    this.dataClassBusiness = dataClassBusiness;\n  }\n\n  public save(data: IEntityDBO, expand: string) {\n    return EntityBaseService.save({\n      httpClient: this.httpClient,\n      dataURI: this.dataClassBusiness.dataURI,\n      expand,\n      data\n    });\n  }\n\n  public recompute(data: IEntityDBO) {\n   return EntityBaseService.recompute({\n      httpClient: this.httpClient,\n      dataURI: this.dataClassBusiness.dataURI,\n      data\n    });\n  }\n\n  public callMethod(methodName: string, parameters: any[]) {\n    return EntityBaseService.callMethod({\n      httpClient: this.httpClient,\n      dataURI: this.dataClassBusiness.dataURI,\n      methodName,\n      parameters,\n      entityKey: this.entity._key\n    });\n  }\n\n  public delete() {\n    return EntityBaseService.delete({\n      httpClient: this.httpClient,\n      dataURI: this.dataClassBusiness.dataURI,\n      entityKey: this.entity._key\n    });\n  }\n}\n\nexport default EntityService;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_1vzx97h4sg.s[0]++,(cov_1vzx97h4sg.b[0][0]++,this)&&(cov_1vzx97h4sg.b[0][1]++,this.__extends)||(cov_1vzx97h4sg.b[0][2]++,function(){cov_1vzx97h4sg.f[0]++;var extendStatics=(cov_1vzx97h4sg.s[1]++,(cov_1vzx97h4sg.b[1][0]++,Object.setPrototypeOf)||(cov_1vzx97h4sg.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_1vzx97h4sg.b[1][2]++,function(d,b){cov_1vzx97h4sg.f[1]++;cov_1vzx97h4sg.s[2]++;d.__proto__=b;})||(cov_1vzx97h4sg.b[1][3]++,function(d,b){cov_1vzx97h4sg.f[2]++;cov_1vzx97h4sg.s[3]++;for(var p in b){cov_1vzx97h4sg.s[4]++;if(b.hasOwnProperty(p)){cov_1vzx97h4sg.b[2][0]++;cov_1vzx97h4sg.s[5]++;d[p]=b[p];}else{cov_1vzx97h4sg.b[2][1]++;}}}));cov_1vzx97h4sg.s[6]++;return function(d,b){cov_1vzx97h4sg.f[3]++;cov_1vzx97h4sg.s[7]++;extendStatics(d,b);function __(){cov_1vzx97h4sg.f[4]++;cov_1vzx97h4sg.s[8]++;this.constructor=d;}cov_1vzx97h4sg.s[9]++;d.prototype=b===null?(cov_1vzx97h4sg.b[3][0]++,Object.create(b)):(cov_1vzx97h4sg.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_1vzx97h4sg.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_service_1=(cov_1vzx97h4sg.s[11]++,__webpack_require__(14));var entity_base_service_1=(cov_1vzx97h4sg.s[12]++,__webpack_require__(67));var EntityService=(/** @class */cov_1vzx97h4sg.s[13]++,function(_super){cov_1vzx97h4sg.f[5]++;cov_1vzx97h4sg.s[14]++;__extends(EntityService,_super);function EntityService(_a){cov_1vzx97h4sg.f[6]++;var wakJSC=(cov_1vzx97h4sg.s[15]++,_a.wakJSC),entity=(cov_1vzx97h4sg.s[16]++,_a.entity),dataClassBusiness=(cov_1vzx97h4sg.s[17]++,_a.dataClassBusiness);var _this=(cov_1vzx97h4sg.s[18]++,(cov_1vzx97h4sg.b[4][0]++,_super.call(this,{wakJSC:wakJSC}))||(cov_1vzx97h4sg.b[4][1]++,this));cov_1vzx97h4sg.s[19]++;_this.entity=entity;cov_1vzx97h4sg.s[20]++;_this.dataClassBusiness=dataClassBusiness;cov_1vzx97h4sg.s[21]++;return _this;}cov_1vzx97h4sg.s[22]++;EntityService.prototype.save=function(data,expand){cov_1vzx97h4sg.f[7]++;cov_1vzx97h4sg.s[23]++;return entity_base_service_1.EntityBaseService.save({httpClient:this.httpClient,dataURI:this.dataClassBusiness.dataURI,expand:expand,data:data});};cov_1vzx97h4sg.s[24]++;EntityService.prototype.recompute=function(data){cov_1vzx97h4sg.f[8]++;cov_1vzx97h4sg.s[25]++;return entity_base_service_1.EntityBaseService.recompute({httpClient:this.httpClient,dataURI:this.dataClassBusiness.dataURI,data:data});};cov_1vzx97h4sg.s[26]++;EntityService.prototype.callMethod=function(methodName,parameters){cov_1vzx97h4sg.f[9]++;cov_1vzx97h4sg.s[27]++;return entity_base_service_1.EntityBaseService.callMethod({httpClient:this.httpClient,dataURI:this.dataClassBusiness.dataURI,methodName:methodName,parameters:parameters,entityKey:this.entity._key});};cov_1vzx97h4sg.s[28]++;EntityService.prototype.delete=function(){cov_1vzx97h4sg.f[10]++;cov_1vzx97h4sg.s[29]++;return entity_base_service_1.EntityBaseService.delete({httpClient:this.httpClient,dataURI:this.dataClassBusiness.dataURI,entityKey:this.entity._key});};cov_1vzx97h4sg.s[30]++;return EntityService;}(abstract_service_1.default));cov_1vzx97h4sg.s[31]++;exports.default=EntityService;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_xhqm59pcq=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/dataclass-service.ts",hash="679779a7d969a9ee06468a46a1fab3f0948eeaef",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/dataclass-service.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:25},end:{line:13,column:54}},"12":{start:{line:14,column:31},end:{line:14,column:71}},"13":{start:{line:15,column:38},end:{line:47,column:29}},"14":{start:{line:16,column:4},end:{line:16,column:40}},"15":{start:{line:18,column:21},end:{line:18,column:30}},"16":{start:{line:18,column:52},end:{line:18,column:72}},"17":{start:{line:19,column:20},end:{line:19,column:65}},"18":{start:{line:20,column:8},end:{line:20,column:52}},"19":{start:{line:21,column:8},end:{line:21,column:21}},"20":{start:{line:23,column:4},end:{line:30,column:6}},"21":{start:{line:24,column:8},end:{line:29,column:11}},"22":{start:{line:31,column:4},end:{line:37,column:6}},"23":{start:{line:32,column:8},end:{line:36,column:11}},"24":{start:{line:38,column:4},end:{line:45,column:6}},"25":{start:{line:39,column:8},end:{line:44,column:11}},"26":{start:{line:46,column:4},end:{line:46,column:28}},"27":{start:{line:48,column:0},end:{line:48,column:35}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:15,column:38},end:{line:15,column:39}},loc:{start:{line:15,column:56},end:{line:47,column:1}},line:15},"6":{name:"DataClassService",decl:{start:{line:17,column:13},end:{line:17,column:29}},loc:{start:{line:17,column:34},end:{line:22,column:5}},line:17},"7":{name:"(anonymous_7)",decl:{start:{line:23,column:38},end:{line:23,column:39}},loc:{start:{line:23,column:61},end:{line:30,column:5}},line:23},"8":{name:"(anonymous_8)",decl:{start:{line:31,column:39},end:{line:31,column:40}},loc:{start:{line:31,column:58},end:{line:37,column:5}},line:31},"9":{name:"(anonymous_9)",decl:{start:{line:38,column:44},end:{line:38,column:45}},loc:{start:{line:38,column:78},end:{line:45,column:5}},line:38}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:19,column:20},end:{line:19,column:65}},type:"binary-expr",locations:[{start:{line:19,column:20},end:{line:19,column:57}},{start:{line:19,column:61},end:{line:19,column:65}}],line:19}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/dataclass-service.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/dataclass-service.ts"],names:[],mappings:";;;;;;;;;;;;AAAA,uDAAiD;AAKjD,wEAAmE;AAGnE;IAA+B,oCAAe;IAI5C,0BAAY,EAA0F;YAAzF,kBAAM,EAAE,wCAAiB;QAAtC,YACE,kBAAM,EAAC,MAAM,QAAA,EAAC,CAAC,SAGhB;QADC,KAAI,CAAC,iBAAiB,GAAG,iBAAiB,CAAC;;IAC7C,CAAC;IAEM,+BAAI,GAAX,UAAY,EAAiB,EAAE,OAAoB;QACjD,MAAM,CAAC,6CAAoB,CAAC,IAAI,CAAC;YAC/B,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,GAAG,EAAE,EAAE;YACP,OAAO,SAAA;YACP,OAAO,EAAE,IAAI,CAAC,iBAAiB,CAAC,OAAO;SACxC,CAAC,CAAC;IACL,CAAC;IAEM,gCAAK,GAAZ,UAAa,OAAoB;QAC/B,MAAM,CAAC,6CAAoB,CAAC,KAAK,CAAC;YAChC,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,OAAO,SAAA;YACP,OAAO,EAAE,IAAI,CAAC,iBAAiB,CAAC,OAAO;SACxC,CAAC,CAAC;IACL,CAAC;IAEM,qCAAU,GAAjB,UAAkB,UAAkB,EAAE,UAAiB;QACrD,MAAM,CAAC,6CAAoB,CAAC,UAAU,CAAC;YACrC,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,OAAO,EAAE,IAAI,CAAC,iBAAiB,CAAC,OAAO;YACvC,UAAU,YAAA;YACV,UAAU,YAAA;SACX,CAAC,CAAC;IACL,CAAC;IACH,uBAAC;AAAD,CAAC,AAnCD,CAA+B,0BAAe,GAmC7C;AAED,kBAAe,gBAAgB,CAAC",sourcesContent:["import AbstractService from './abstract-service';\nimport {QueryOption} from '../../presentation/query-option';\nimport DataClassBusiness from '../../business/dataclass-business';\nimport {IEntityDBO} from '../../business/entity-business';\nimport {ICollectionDBO} from '../../business/collection-business';\nimport {DataClassBaseService} from './base/dataclass-base-service';\nimport WakandaClient from '../../wakanda-client';\n\nclass DataClassService extends AbstractService {\n\n  private dataClassBusiness: DataClassBusiness;\n\n  constructor({wakJSC, dataClassBusiness}: {wakJSC: WakandaClient, dataClassBusiness: DataClassBusiness}) {\n    super({wakJSC});\n\n    this.dataClassBusiness = dataClassBusiness;\n  }\n\n  public find(id: string|number, options: QueryOption): Promise<IEntityDBO> {\n    return DataClassBaseService.find({\n      httpClient: this.httpClient,\n      key: id,\n      options,\n      dataURI: this.dataClassBusiness.dataURI\n    });\n  }\n\n  public query(options: QueryOption): Promise<ICollectionDBO> {\n    return DataClassBaseService.query({\n      httpClient: this.httpClient,\n      options,\n      dataURI: this.dataClassBusiness.dataURI\n    });\n  }\n\n  public callMethod(methodName: string, parameters: any[]): Promise<any> {\n    return DataClassBaseService.callMethod({\n      httpClient: this.httpClient,\n      dataURI: this.dataClassBusiness.dataURI,\n      methodName,\n      parameters\n    });\n  }\n}\n\nexport default DataClassService;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_xhqm59pcq.s[0]++,(cov_xhqm59pcq.b[0][0]++,this)&&(cov_xhqm59pcq.b[0][1]++,this.__extends)||(cov_xhqm59pcq.b[0][2]++,function(){cov_xhqm59pcq.f[0]++;var extendStatics=(cov_xhqm59pcq.s[1]++,(cov_xhqm59pcq.b[1][0]++,Object.setPrototypeOf)||(cov_xhqm59pcq.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_xhqm59pcq.b[1][2]++,function(d,b){cov_xhqm59pcq.f[1]++;cov_xhqm59pcq.s[2]++;d.__proto__=b;})||(cov_xhqm59pcq.b[1][3]++,function(d,b){cov_xhqm59pcq.f[2]++;cov_xhqm59pcq.s[3]++;for(var p in b){cov_xhqm59pcq.s[4]++;if(b.hasOwnProperty(p)){cov_xhqm59pcq.b[2][0]++;cov_xhqm59pcq.s[5]++;d[p]=b[p];}else{cov_xhqm59pcq.b[2][1]++;}}}));cov_xhqm59pcq.s[6]++;return function(d,b){cov_xhqm59pcq.f[3]++;cov_xhqm59pcq.s[7]++;extendStatics(d,b);function __(){cov_xhqm59pcq.f[4]++;cov_xhqm59pcq.s[8]++;this.constructor=d;}cov_xhqm59pcq.s[9]++;d.prototype=b===null?(cov_xhqm59pcq.b[3][0]++,Object.create(b)):(cov_xhqm59pcq.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_xhqm59pcq.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_service_1=(cov_xhqm59pcq.s[11]++,__webpack_require__(14));var dataclass_base_service_1=(cov_xhqm59pcq.s[12]++,__webpack_require__(70));var DataClassService=(/** @class */cov_xhqm59pcq.s[13]++,function(_super){cov_xhqm59pcq.f[5]++;cov_xhqm59pcq.s[14]++;__extends(DataClassService,_super);function DataClassService(_a){cov_xhqm59pcq.f[6]++;var wakJSC=(cov_xhqm59pcq.s[15]++,_a.wakJSC),dataClassBusiness=(cov_xhqm59pcq.s[16]++,_a.dataClassBusiness);var _this=(cov_xhqm59pcq.s[17]++,(cov_xhqm59pcq.b[4][0]++,_super.call(this,{wakJSC:wakJSC}))||(cov_xhqm59pcq.b[4][1]++,this));cov_xhqm59pcq.s[18]++;_this.dataClassBusiness=dataClassBusiness;cov_xhqm59pcq.s[19]++;return _this;}cov_xhqm59pcq.s[20]++;DataClassService.prototype.find=function(id,options){cov_xhqm59pcq.f[7]++;cov_xhqm59pcq.s[21]++;return dataclass_base_service_1.DataClassBaseService.find({httpClient:this.httpClient,key:id,options:options,dataURI:this.dataClassBusiness.dataURI});};cov_xhqm59pcq.s[22]++;DataClassService.prototype.query=function(options){cov_xhqm59pcq.f[8]++;cov_xhqm59pcq.s[23]++;return dataclass_base_service_1.DataClassBaseService.query({httpClient:this.httpClient,options:options,dataURI:this.dataClassBusiness.dataURI});};cov_xhqm59pcq.s[24]++;DataClassService.prototype.callMethod=function(methodName,parameters){cov_xhqm59pcq.f[9]++;cov_xhqm59pcq.s[25]++;return dataclass_base_service_1.DataClassBaseService.callMethod({httpClient:this.httpClient,dataURI:this.dataClassBusiness.dataURI,methodName:methodName,parameters:parameters});};cov_xhqm59pcq.s[26]++;return DataClassService;}(abstract_service_1.default));cov_xhqm59pcq.s[27]++;exports.default=DataClassService;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_4r6k3n6dp=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/business/collection-business.ts",hash="11e513918f33b39339fd2388382717278e4511e1",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/business/collection-business.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:26},end:{line:13,column:56}},"12":{start:{line:14,column:27},end:{line:14,column:79}},"13":{start:{line:15,column:14},end:{line:15,column:33}},"14":{start:{line:16,column:23},end:{line:16,column:50}},"15":{start:{line:17,column:40},end:{line:146,column:30}},"16":{start:{line:18,column:4},end:{line:18,column:42}},"17":{start:{line:20,column:21},end:{line:20,column:30}},"18":{start:{line:20,column:44},end:{line:20,column:56}},"19":{start:{line:20,column:71},end:{line:20,column:84}},"20":{start:{line:20,column:106},end:{line:20,column:126}},"21":{start:{line:20,column:144},end:{line:20,column:160}},"22":{start:{line:20,column:173},end:{line:20,column:184}},"23":{start:{line:20,column:202},end:{line:20,column:218}},"24":{start:{line:21,column:20},end:{line:21,column:65}},"25":{start:{line:22,column:8},end:{line:22,column:38}},"26":{start:{line:23,column:8},end:{line:23,column:36}},"27":{start:{line:24,column:8},end:{line:24,column:52}},"28":{start:{line:25,column:8},end:{line:30,column:11}},"29":{start:{line:31,column:8},end:{line:31,column:34}},"30":{start:{line:32,column:8},end:{line:32,column:44}},"31":{start:{line:33,column:8},end:{line:33,column:21}},"32":{start:{line:35,column:4},end:{line:41,column:6}},"33":{start:{line:36,column:8},end:{line:36,column:54}},"34":{start:{line:37,column:8},end:{line:37,column:60}},"35":{start:{line:38,column:8},end:{line:38,column:60}},"36":{start:{line:39,column:8},end:{line:39,column:52}},"37":{start:{line:40,column:8},end:{line:40,column:38}},"38":{start:{line:42,column:4},end:{line:63,column:6}},"39":{start:{line:43,column:20},end:{line:43,column:24}},"40":{start:{line:44,column:18},end:{line:44,column:31}},"41":{start:{line:45,column:8},end:{line:47,column:9}},"42":{start:{line:46,column:12},end:{line:46,column:78}},"43":{start:{line:48,column:8},end:{line:50,column:9}},"44":{start:{line:49,column:12},end:{line:49,column:93}},"45":{start:{line:51,column:8},end:{line:53,column:9}},"46":{start:{line:52,column:12},end:{line:52,column:44}},"47":{start:{line:54,column:8},end:{line:54,column:37}},"48":{start:{line:55,column:8},end:{line:62,column:11}},"49":{start:{line:56,column:36},end:{line:59,column:14}},"50":{start:{line:60,column:12},end:{line:60,column:79}},"51":{start:{line:61,column:12},end:{line:61,column:36}},"52":{start:{line:64,column:4},end:{line:87,column:6}},"53":{start:{line:65,column:20},end:{line:65,column:24}},"54":{start:{line:66,column:8},end:{line:68,column:9}},"55":{start:{line:67,column:12},end:{line:67,column:91}},"56":{start:{line:69,column:22},end:{line:72,column:9}},"57":{start:{line:73,column:8},end:{line:75,column:9}},"58":{start:{line:74,column:12},end:{line:74,column:48}},"59":{start:{line:76,column:8},end:{line:86,column:11}},"60":{start:{line:78,column:12},end:{line:78,column:60}},"61":{start:{line:79,column:12},end:{line:84,column:13}},"62":{start:{line:80,column:29},end:{line:80,column:35}},"63":{start:{line:81,column:16},end:{line:83,column:20}},"64":{start:{line:85,column:12},end:{line:85,column:36}},"65":{start:{line:88,column:4},end:{line:100,column:6}},"66":{start:{line:89,column:8},end:{line:91,column:9}},"67":{start:{line:90,column:12},end:{line:90,column:99}},"68":{start:{line:92,column:22},end:{line:95,column:9}},"69":{start:{line:96,column:8},end:{line:98,column:9}},"70":{start:{line:97,column:12},end:{line:97,column:48}},"71":{start:{line:99,column:8},end:{line:99,column:35}},"72":{start:{line:101,column:4},end:{line:113,column:6}},"73":{start:{line:102,column:8},end:{line:104,column:9}},"74":{start:{line:103,column:12},end:{line:103,column:99}},"75":{start:{line:105,column:22},end:{line:108,column:9}},"76":{start:{line:109,column:8},end:{line:111,column:9}},"77":{start:{line:110,column:12},end:{line:110,column:48}},"78":{start:{line:112,column:8},end:{line:112,column:35}},"79":{start:{line:114,column:4},end:{line:124,column:6}},"80":{start:{line:115,column:20},end:{line:115,column:24}},"81":{start:{line:116,column:19},end:{line:116,column:23}},"82":{start:{line:117,column:8},end:{line:123,column:11}},"83":{start:{line:119,column:12},end:{line:122,column:14}},"84":{start:{line:120,column:29},end:{line:120,column:50}},"85":{start:{line:121,column:16},end:{line:121,column:55}},"86":{start:{line:125,column:4},end:{line:134,column:6}},"87":{start:{line:126,column:20},end:{line:126,column:24}},"88":{start:{line:127,column:8},end:{line:129,column:9}},"89":{start:{line:128,column:12},end:{line:128,column:105}},"90":{start:{line:130,column:8},end:{line:133,column:11}},"91":{start:{line:132,column:12},end:{line:132,column:112}},"92":{start:{line:135,column:4},end:{line:144,column:6}},"93":{start:{line:136,column:32},end:{line:136,column:52}},"94":{start:{line:137,column:8},end:{line:143,column:9}},"95":{start:{line:138,column:12},end:{line:142,column:13}},"96":{start:{line:139,column:16},end:{line:141,column:17}},"97":{start:{line:140,column:20},end:{line:140,column:68}},"98":{start:{line:145,column:4},end:{line:145,column:30}},"99":{start:{line:147,column:0},end:{line:147,column:37}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:17,column:40},end:{line:17,column:41}},loc:{start:{line:17,column:58},end:{line:146,column:1}},line:17},"6":{name:"CollectionBusiness",decl:{start:{line:19,column:13},end:{line:19,column:31}},loc:{start:{line:19,column:36},end:{line:34,column:5}},line:19},"7":{name:"(anonymous_7)",decl:{start:{line:35,column:55},end:{line:35,column:56}},loc:{start:{line:35,column:67},end:{line:41,column:5}},line:35},"8":{name:"(anonymous_8)",decl:{start:{line:42,column:41},end:{line:42,column:42}},loc:{start:{line:42,column:60},end:{line:63,column:5}},line:42},"9":{name:"(anonymous_9)",decl:{start:{line:55,column:44},end:{line:55,column:45}},loc:{start:{line:55,column:69},end:{line:62,column:9}},line:55},"10":{name:"(anonymous_10)",decl:{start:{line:64,column:40},end:{line:64,column:41}},loc:{start:{line:64,column:52},end:{line:87,column:5}},line:64},"11":{name:"(anonymous_11)",decl:{start:{line:77,column:18},end:{line:77,column:19}},loc:{start:{line:77,column:33},end:{line:86,column:9}},line:77},"12":{name:"(anonymous_12)",decl:{start:{line:88,column:44},end:{line:88,column:45}},loc:{start:{line:88,column:56},end:{line:100,column:5}},line:88},"13":{name:"(anonymous_13)",decl:{start:{line:101,column:44},end:{line:101,column:45}},loc:{start:{line:101,column:56},end:{line:113,column:5}},line:101},"14":{name:"(anonymous_14)",decl:{start:{line:114,column:58},end:{line:114,column:59}},loc:{start:{line:114,column:70},end:{line:124,column:5}},line:114},"15":{name:"(anonymous_15)",decl:{start:{line:117,column:58},end:{line:117,column:59}},loc:{start:{line:117,column:76},end:{line:123,column:9}},line:117},"16":{name:"(anonymous_16)",decl:{start:{line:119,column:39},end:{line:119,column:40}},loc:{start:{line:119,column:51},end:{line:122,column:13}},line:119},"17":{name:"(anonymous_17)",decl:{start:{line:125,column:46},end:{line:125,column:47}},loc:{start:{line:125,column:80},end:{line:134,column:5}},line:125},"18":{name:"(anonymous_18)",decl:{start:{line:131,column:18},end:{line:131,column:19}},loc:{start:{line:131,column:33},end:{line:133,column:9}},line:131},"19":{name:"(anonymous_19)",decl:{start:{line:135,column:54},end:{line:135,column:55}},loc:{start:{line:135,column:68},end:{line:144,column:5}},line:135}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:21,column:20},end:{line:21,column:65}},type:"binary-expr",locations:[{start:{line:21,column:20},end:{line:21,column:57}},{start:{line:21,column:61},end:{line:21,column:65}}],line:21},"5":{loc:{start:{line:44,column:18},end:{line:44,column:31}},type:"binary-expr",locations:[{start:{line:44,column:18},end:{line:44,column:25}},{start:{line:44,column:29},end:{line:44,column:31}}],line:44},"6":{loc:{start:{line:45,column:8},end:{line:47,column:9}},type:"if",locations:[{start:{line:45,column:8},end:{line:47,column:9}},{start:{line:45,column:8},end:{line:47,column:9}}],line:45},"7":{loc:{start:{line:45,column:12},end:{line:45,column:47}},type:"binary-expr",locations:[{start:{line:45,column:12},end:{line:45,column:22}},{start:{line:45,column:26},end:{line:45,column:47}}],line:45},"8":{loc:{start:{line:48,column:8},end:{line:50,column:9}},type:"if",locations:[{start:{line:48,column:8},end:{line:50,column:9}},{start:{line:48,column:8},end:{line:50,column:9}}],line:48},"9":{loc:{start:{line:49,column:27},end:{line:49,column:92}},type:"cond-expr",locations:[{start:{line:49,column:43},end:{line:49,column:56}},{start:{line:49,column:59},end:{line:49,column:92}}],line:49},"10":{loc:{start:{line:51,column:8},end:{line:53,column:9}},type:"if",locations:[{start:{line:51,column:8},end:{line:53,column:9}},{start:{line:51,column:8},end:{line:53,column:9}}],line:51},"11":{loc:{start:{line:66,column:8},end:{line:68,column:9}},type:"if",locations:[{start:{line:66,column:8},end:{line:68,column:9}},{start:{line:66,column:8},end:{line:68,column:9}}],line:66},"12":{loc:{start:{line:73,column:8},end:{line:75,column:9}},type:"if",locations:[{start:{line:73,column:8},end:{line:75,column:9}},{start:{line:73,column:8},end:{line:75,column:9}}],line:73},"13":{loc:{start:{line:89,column:8},end:{line:91,column:9}},type:"if",locations:[{start:{line:89,column:8},end:{line:91,column:9}},{start:{line:89,column:8},end:{line:91,column:9}}],line:89},"14":{loc:{start:{line:96,column:8},end:{line:98,column:9}},type:"if",locations:[{start:{line:96,column:8},end:{line:98,column:9}},{start:{line:96,column:8},end:{line:98,column:9}}],line:96},"15":{loc:{start:{line:102,column:8},end:{line:104,column:9}},type:"if",locations:[{start:{line:102,column:8},end:{line:104,column:9}},{start:{line:102,column:8},end:{line:104,column:9}}],line:102},"16":{loc:{start:{line:109,column:8},end:{line:111,column:9}},type:"if",locations:[{start:{line:109,column:8},end:{line:111,column:9}},{start:{line:109,column:8},end:{line:111,column:9}}],line:109},"17":{loc:{start:{line:127,column:8},end:{line:129,column:9}},type:"if",locations:[{start:{line:127,column:8},end:{line:129,column:9}},{start:{line:127,column:8},end:{line:129,column:9}}],line:127},"18":{loc:{start:{line:138,column:12},end:{line:142,column:13}},type:"if",locations:[{start:{line:138,column:12},end:{line:142,column:13}},{start:{line:138,column:12},end:{line:142,column:13}}],line:138},"19":{loc:{start:{line:139,column:16},end:{line:141,column:17}},type:"if",locations:[{start:{line:139,column:16},end:{line:141,column:17}},{start:{line:139,column:16},end:{line:141,column:17}}],line:139}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":0,"95":0,"96":0,"97":0,"98":0,"99":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/business/collection-business.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/business/collection-business.ts"],names:[],mappings:"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",sourcesContent:["import AbstractBusiness from './abstract-business';\nimport CollectionService from '../data-access/service/collection-service';\nimport Const from '../const';\nimport {IEntityDBO} from './entity-business';\nimport Collection from '../presentation/collection';\nimport {DataClass} from '../presentation/dataclass';\nimport DataClassBusiness from './dataclass-business';\nimport {QueryOption} from '../presentation/query-option';\nimport {MethodAdapter} from './method-adapter';\nimport WakandaClient from '../wakanda-client';\n\nexport interface ICollectionDBO {\n  __ENTITYSET: string;\n  __COUNT: number;\n  __FIRST: number;\n  __SENT: number;\n  __ENTITIES: IEntityDBO[];\n  __deferred: {uri: string};\n\n  [key: string]: any;\n}\n\nexport interface ICollectionBusinessConstructor {\n  wakJSC: WakandaClient;\n  dataClass: DataClass;\n  collection: Collection;\n  dataClassBusiness: DataClassBusiness;\n  collectionUri: string;\n  pageSize: number;\n  initialSelect: string;\n}\n\nclass CollectionBusiness extends AbstractBusiness {\n\n  private collection: Collection;\n  private dataClass: DataClass;\n  private dataClassBusiness: DataClassBusiness;\n  private service: CollectionService;\n  private pageSize: number;\n  private initialSelect: string;\n\n  constructor({wakJSC, dataClass, collection, dataClassBusiness, collectionUri, pageSize, initialSelect}: ICollectionBusinessConstructor) {\n    super({wakJSC});\n\n    this.collection = collection;\n    this.dataClass = dataClass;\n    this.dataClassBusiness = dataClassBusiness;\n    this.service = new CollectionService({\n      wakJSC,\n      collection,\n      dataClassBusiness,\n      collectionUri\n    });\n    this.pageSize = pageSize;\n    this.initialSelect = initialSelect;\n  }\n\n  public _decorateCollection() {\n    this.collection.fetch = this.fetch.bind(this);\n    this.collection.nextPage = this.nextPage.bind(this);\n    this.collection.prevPage = this.prevPage.bind(this);\n    this.collection.more = this.more.bind(this);\n\n    this._addUserDefinedMethods();\n  }\n\n  public fetch(options?: QueryOption): Promise<Collection> {\n    let opt = options || {};\n\n    if (opt.method && opt.method.length > 0) {\n      throw new Error('Collection.fetch: option method is not allowed');\n    }\n\n    if (!opt.pageSize) {\n      opt.pageSize = this.pageSize ? this.pageSize : Const.DEFAULT_PAGE_SIZE;\n    }\n\n    if (opt.select) {\n      this.initialSelect = opt.select;\n    }\n\n    this.pageSize = opt.pageSize;\n\n    return this.service.fetch(opt).then(collectionDBO => {\n      let fresherCollection = this.dataClassBusiness._presentationCollectionFromDbo({\n        dbo: collectionDBO,\n        pageSize: this.pageSize\n      });\n\n      this._refreshCollection({fresherCollection});\n      return this.collection;\n    });\n  }\n\n  public more(): Promise<Collection> {\n\n    if (this.collection._deferred === true) {\n      throw new Error('Collection.more: can not call more on a deferred collection');\n    }\n\n    let options: QueryOption = {\n      start: this.collection._first + this.collection._sent,\n      pageSize: this.pageSize\n    };\n\n    if (this.initialSelect) {\n      options.select = this.initialSelect;\n    }\n\n    return this.service.fetch(options)\n      .then(dbo => {\n        this.collection._sent += dbo.__ENTITIES.length;\n\n        for (let entity of dbo.__ENTITIES) {\n          this.collection.entities.push(this.dataClassBusiness._presentationEntityFromDbo({\n            dbo: entity\n          }));\n        }\n\n        return this.collection;\n      });\n  }\n\n  public nextPage(): Promise<Collection> {\n\n    if (this.collection._deferred === true) {\n      throw new Error('Collection.nextPage: can not call nextPage on a deferred collection');\n    }\n\n    let options: QueryOption = {\n      start: this.collection._first + this.pageSize,\n      pageSize: this.pageSize\n    };\n\n    if (this.initialSelect) {\n      options.select = this.initialSelect;\n    }\n\n    return this.fetch(options);\n  }\n\n  public prevPage(): Promise<Collection> {\n\n    if (this.collection._deferred === true) {\n      throw new Error('Collection.prevPage: can not call prevPage on a deferred collection');\n    }\n\n    let options: QueryOption = {\n      start: this.collection._first - this.pageSize,\n      pageSize: this.pageSize\n    };\n\n    if (this.initialSelect) {\n      options.select = this.initialSelect;\n    }\n\n    return this.fetch(options);\n  }\n\n  private _addUserDefinedMethods() {\n    let self = this;\n    this.dataClassBusiness.methods.collection.forEach(method => {\n      //Voluntary don't use fat arrow notation to use arguments object without a bug\n      this.collection[method] = function() {\n        let params = Array.from(arguments);\n        return self.callMethod(method, params);\n      };\n    });\n  }\n\n  public callMethod(methodName: string, parameters: any[]) {\n    if (this.collection._deferred) {\n      throw new Error('Collection.' + methodName + ': can not be called on a deferred collection');\n    }\n\n    return this.service.callMethod(methodName, parameters)\n      .then((obj: any) => {\n        return MethodAdapter.transform(obj, this.dataClassBusiness._dataClassBusinessMap);\n      });\n  }\n\n  private _refreshCollection({fresherCollection}: {fresherCollection: Collection}) {\n    for (let prop in fresherCollection) {\n      if (Object.prototype.hasOwnProperty.call(fresherCollection, prop)) {\n        if (typeof fresherCollection[prop] !== 'function') {\n          this.collection[prop] = fresherCollection[prop];\n        }\n      }\n    }\n  }\n}\n\nexport default CollectionBusiness;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_4r6k3n6dp.s[0]++,(cov_4r6k3n6dp.b[0][0]++,this)&&(cov_4r6k3n6dp.b[0][1]++,this.__extends)||(cov_4r6k3n6dp.b[0][2]++,function(){cov_4r6k3n6dp.f[0]++;var extendStatics=(cov_4r6k3n6dp.s[1]++,(cov_4r6k3n6dp.b[1][0]++,Object.setPrototypeOf)||(cov_4r6k3n6dp.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_4r6k3n6dp.b[1][2]++,function(d,b){cov_4r6k3n6dp.f[1]++;cov_4r6k3n6dp.s[2]++;d.__proto__=b;})||(cov_4r6k3n6dp.b[1][3]++,function(d,b){cov_4r6k3n6dp.f[2]++;cov_4r6k3n6dp.s[3]++;for(var p in b){cov_4r6k3n6dp.s[4]++;if(b.hasOwnProperty(p)){cov_4r6k3n6dp.b[2][0]++;cov_4r6k3n6dp.s[5]++;d[p]=b[p];}else{cov_4r6k3n6dp.b[2][1]++;}}}));cov_4r6k3n6dp.s[6]++;return function(d,b){cov_4r6k3n6dp.f[3]++;cov_4r6k3n6dp.s[7]++;extendStatics(d,b);function __(){cov_4r6k3n6dp.f[4]++;cov_4r6k3n6dp.s[8]++;this.constructor=d;}cov_4r6k3n6dp.s[9]++;d.prototype=b===null?(cov_4r6k3n6dp.b[3][0]++,Object.create(b)):(cov_4r6k3n6dp.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_4r6k3n6dp.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_business_1=(cov_4r6k3n6dp.s[11]++,__webpack_require__(13));var collection_service_1=(cov_4r6k3n6dp.s[12]++,__webpack_require__(131));var const_1=(cov_4r6k3n6dp.s[13]++,__webpack_require__(40));var method_adapter_1=(cov_4r6k3n6dp.s[14]++,__webpack_require__(39));var CollectionBusiness=(/** @class */cov_4r6k3n6dp.s[15]++,function(_super){cov_4r6k3n6dp.f[5]++;cov_4r6k3n6dp.s[16]++;__extends(CollectionBusiness,_super);function CollectionBusiness(_a){cov_4r6k3n6dp.f[6]++;var wakJSC=(cov_4r6k3n6dp.s[17]++,_a.wakJSC),dataClass=(cov_4r6k3n6dp.s[18]++,_a.dataClass),collection=(cov_4r6k3n6dp.s[19]++,_a.collection),dataClassBusiness=(cov_4r6k3n6dp.s[20]++,_a.dataClassBusiness),collectionUri=(cov_4r6k3n6dp.s[21]++,_a.collectionUri),pageSize=(cov_4r6k3n6dp.s[22]++,_a.pageSize),initialSelect=(cov_4r6k3n6dp.s[23]++,_a.initialSelect);var _this=(cov_4r6k3n6dp.s[24]++,(cov_4r6k3n6dp.b[4][0]++,_super.call(this,{wakJSC:wakJSC}))||(cov_4r6k3n6dp.b[4][1]++,this));cov_4r6k3n6dp.s[25]++;_this.collection=collection;cov_4r6k3n6dp.s[26]++;_this.dataClass=dataClass;cov_4r6k3n6dp.s[27]++;_this.dataClassBusiness=dataClassBusiness;cov_4r6k3n6dp.s[28]++;_this.service=new collection_service_1.default({wakJSC:wakJSC,collection:collection,dataClassBusiness:dataClassBusiness,collectionUri:collectionUri});cov_4r6k3n6dp.s[29]++;_this.pageSize=pageSize;cov_4r6k3n6dp.s[30]++;_this.initialSelect=initialSelect;cov_4r6k3n6dp.s[31]++;return _this;}cov_4r6k3n6dp.s[32]++;CollectionBusiness.prototype._decorateCollection=function(){cov_4r6k3n6dp.f[7]++;cov_4r6k3n6dp.s[33]++;this.collection.fetch=this.fetch.bind(this);cov_4r6k3n6dp.s[34]++;this.collection.nextPage=this.nextPage.bind(this);cov_4r6k3n6dp.s[35]++;this.collection.prevPage=this.prevPage.bind(this);cov_4r6k3n6dp.s[36]++;this.collection.more=this.more.bind(this);cov_4r6k3n6dp.s[37]++;this._addUserDefinedMethods();};cov_4r6k3n6dp.s[38]++;CollectionBusiness.prototype.fetch=function(options){cov_4r6k3n6dp.f[8]++;var _this=(cov_4r6k3n6dp.s[39]++,this);var opt=(cov_4r6k3n6dp.s[40]++,(cov_4r6k3n6dp.b[5][0]++,options)||(cov_4r6k3n6dp.b[5][1]++,{}));cov_4r6k3n6dp.s[41]++;if((cov_4r6k3n6dp.b[7][0]++,opt.method)&&(cov_4r6k3n6dp.b[7][1]++,opt.method.length>0)){cov_4r6k3n6dp.b[6][0]++;cov_4r6k3n6dp.s[42]++;throw new Error('Collection.fetch: option method is not allowed');}else{cov_4r6k3n6dp.b[6][1]++;}cov_4r6k3n6dp.s[43]++;if(!opt.pageSize){cov_4r6k3n6dp.b[8][0]++;cov_4r6k3n6dp.s[44]++;opt.pageSize=this.pageSize?(cov_4r6k3n6dp.b[9][0]++,this.pageSize):(cov_4r6k3n6dp.b[9][1]++,const_1.default.DEFAULT_PAGE_SIZE);}else{cov_4r6k3n6dp.b[8][1]++;}cov_4r6k3n6dp.s[45]++;if(opt.select){cov_4r6k3n6dp.b[10][0]++;cov_4r6k3n6dp.s[46]++;this.initialSelect=opt.select;}else{cov_4r6k3n6dp.b[10][1]++;}cov_4r6k3n6dp.s[47]++;this.pageSize=opt.pageSize;cov_4r6k3n6dp.s[48]++;return this.service.fetch(opt).then(function(collectionDBO){cov_4r6k3n6dp.f[9]++;var fresherCollection=(cov_4r6k3n6dp.s[49]++,_this.dataClassBusiness._presentationCollectionFromDbo({dbo:collectionDBO,pageSize:_this.pageSize}));cov_4r6k3n6dp.s[50]++;_this._refreshCollection({fresherCollection:fresherCollection});cov_4r6k3n6dp.s[51]++;return _this.collection;});};cov_4r6k3n6dp.s[52]++;CollectionBusiness.prototype.more=function(){cov_4r6k3n6dp.f[10]++;var _this=(cov_4r6k3n6dp.s[53]++,this);cov_4r6k3n6dp.s[54]++;if(this.collection._deferred===true){cov_4r6k3n6dp.b[11][0]++;cov_4r6k3n6dp.s[55]++;throw new Error('Collection.more: can not call more on a deferred collection');}else{cov_4r6k3n6dp.b[11][1]++;}var options=(cov_4r6k3n6dp.s[56]++,{start:this.collection._first+this.collection._sent,pageSize:this.pageSize});cov_4r6k3n6dp.s[57]++;if(this.initialSelect){cov_4r6k3n6dp.b[12][0]++;cov_4r6k3n6dp.s[58]++;options.select=this.initialSelect;}else{cov_4r6k3n6dp.b[12][1]++;}cov_4r6k3n6dp.s[59]++;return this.service.fetch(options).then(function(dbo){cov_4r6k3n6dp.f[11]++;cov_4r6k3n6dp.s[60]++;_this.collection._sent+=dbo.__ENTITIES.length;cov_4r6k3n6dp.s[61]++;for(var _i=0,_a=dbo.__ENTITIES;_i<_a.length;_i++){var entity=(cov_4r6k3n6dp.s[62]++,_a[_i]);cov_4r6k3n6dp.s[63]++;_this.collection.entities.push(_this.dataClassBusiness._presentationEntityFromDbo({dbo:entity}));}cov_4r6k3n6dp.s[64]++;return _this.collection;});};cov_4r6k3n6dp.s[65]++;CollectionBusiness.prototype.nextPage=function(){cov_4r6k3n6dp.f[12]++;cov_4r6k3n6dp.s[66]++;if(this.collection._deferred===true){cov_4r6k3n6dp.b[13][0]++;cov_4r6k3n6dp.s[67]++;throw new Error('Collection.nextPage: can not call nextPage on a deferred collection');}else{cov_4r6k3n6dp.b[13][1]++;}var options=(cov_4r6k3n6dp.s[68]++,{start:this.collection._first+this.pageSize,pageSize:this.pageSize});cov_4r6k3n6dp.s[69]++;if(this.initialSelect){cov_4r6k3n6dp.b[14][0]++;cov_4r6k3n6dp.s[70]++;options.select=this.initialSelect;}else{cov_4r6k3n6dp.b[14][1]++;}cov_4r6k3n6dp.s[71]++;return this.fetch(options);};cov_4r6k3n6dp.s[72]++;CollectionBusiness.prototype.prevPage=function(){cov_4r6k3n6dp.f[13]++;cov_4r6k3n6dp.s[73]++;if(this.collection._deferred===true){cov_4r6k3n6dp.b[15][0]++;cov_4r6k3n6dp.s[74]++;throw new Error('Collection.prevPage: can not call prevPage on a deferred collection');}else{cov_4r6k3n6dp.b[15][1]++;}var options=(cov_4r6k3n6dp.s[75]++,{start:this.collection._first-this.pageSize,pageSize:this.pageSize});cov_4r6k3n6dp.s[76]++;if(this.initialSelect){cov_4r6k3n6dp.b[16][0]++;cov_4r6k3n6dp.s[77]++;options.select=this.initialSelect;}else{cov_4r6k3n6dp.b[16][1]++;}cov_4r6k3n6dp.s[78]++;return this.fetch(options);};cov_4r6k3n6dp.s[79]++;CollectionBusiness.prototype._addUserDefinedMethods=function(){cov_4r6k3n6dp.f[14]++;var _this=(cov_4r6k3n6dp.s[80]++,this);var self=(cov_4r6k3n6dp.s[81]++,this);cov_4r6k3n6dp.s[82]++;this.dataClassBusiness.methods.collection.forEach(function(method){cov_4r6k3n6dp.f[15]++;cov_4r6k3n6dp.s[83]++;//Voluntary don't use fat arrow notation to use arguments object without a bug
_this.collection[method]=function(){cov_4r6k3n6dp.f[16]++;var params=(cov_4r6k3n6dp.s[84]++,Array.from(arguments));cov_4r6k3n6dp.s[85]++;return self.callMethod(method,params);};});};cov_4r6k3n6dp.s[86]++;CollectionBusiness.prototype.callMethod=function(methodName,parameters){cov_4r6k3n6dp.f[17]++;var _this=(cov_4r6k3n6dp.s[87]++,this);cov_4r6k3n6dp.s[88]++;if(this.collection._deferred){cov_4r6k3n6dp.b[17][0]++;cov_4r6k3n6dp.s[89]++;throw new Error('Collection.'+methodName+': can not be called on a deferred collection');}else{cov_4r6k3n6dp.b[17][1]++;}cov_4r6k3n6dp.s[90]++;return this.service.callMethod(methodName,parameters).then(function(obj){cov_4r6k3n6dp.f[18]++;cov_4r6k3n6dp.s[91]++;return method_adapter_1.MethodAdapter.transform(obj,_this.dataClassBusiness._dataClassBusinessMap);});};cov_4r6k3n6dp.s[92]++;CollectionBusiness.prototype._refreshCollection=function(_a){cov_4r6k3n6dp.f[19]++;var fresherCollection=(cov_4r6k3n6dp.s[93]++,_a.fresherCollection);cov_4r6k3n6dp.s[94]++;for(var prop in fresherCollection){cov_4r6k3n6dp.s[95]++;if(Object.prototype.hasOwnProperty.call(fresherCollection,prop)){cov_4r6k3n6dp.b[18][0]++;cov_4r6k3n6dp.s[96]++;if(typeof fresherCollection[prop]!=='function'){cov_4r6k3n6dp.b[19][0]++;cov_4r6k3n6dp.s[97]++;this.collection[prop]=fresherCollection[prop];}else{cov_4r6k3n6dp.b[19][1]++;}}else{cov_4r6k3n6dp.b[18][1]++;}}};cov_4r6k3n6dp.s[98]++;return CollectionBusiness;}(abstract_business_1.default));cov_4r6k3n6dp.s[99]++;exports.default=CollectionBusiness;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_c14mtok4e=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/collection-service.ts",hash="d1269f255650a4d47484dd74655b0624a3e89aec",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/collection-service.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:25},end:{line:13,column:54}},"12":{start:{line:14,column:32},end:{line:14,column:73}},"13":{start:{line:15,column:39},end:{line:52,column:29}},"14":{start:{line:16,column:4},end:{line:16,column:41}},"15":{start:{line:18,column:21},end:{line:18,column:30}},"16":{start:{line:18,column:45},end:{line:18,column:58}},"17":{start:{line:18,column:80},end:{line:18,column:100}},"18":{start:{line:18,column:118},end:{line:18,column:134}},"19":{start:{line:19,column:20},end:{line:19,column:65}},"20":{start:{line:20,column:8},end:{line:20,column:38}},"21":{start:{line:21,column:8},end:{line:21,column:52}},"22":{start:{line:22,column:8},end:{line:22,column:44}},"23":{start:{line:23,column:8},end:{line:23,column:84}},"24":{start:{line:24,column:8},end:{line:24,column:21}},"25":{start:{line:26,column:4},end:{line:41,column:6}},"26":{start:{line:27,column:20},end:{line:27,column:24}},"27":{start:{line:28,column:8},end:{line:40,column:11}},"28":{start:{line:35,column:12},end:{line:38,column:13}},"29":{start:{line:36,column:16},end:{line:36,column:54}},"30":{start:{line:37,column:16},end:{line:37,column:94}},"31":{start:{line:39,column:12},end:{line:39,column:23}},"32":{start:{line:42,column:4},end:{line:50,column:6}},"33":{start:{line:43,column:8},end:{line:49,column:11}},"34":{start:{line:51,column:4},end:{line:51,column:29}},"35":{start:{line:53,column:0},end:{line:53,column:36}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:15,column:39},end:{line:15,column:40}},loc:{start:{line:15,column:57},end:{line:52,column:1}},line:15},"6":{name:"CollectionService",decl:{start:{line:17,column:13},end:{line:17,column:30}},loc:{start:{line:17,column:35},end:{line:25,column:5}},line:17},"7":{name:"(anonymous_7)",decl:{start:{line:26,column:40},end:{line:26,column:41}},loc:{start:{line:26,column:59},end:{line:41,column:5}},line:26},"8":{name:"(anonymous_8)",decl:{start:{line:34,column:18},end:{line:34,column:19}},loc:{start:{line:34,column:33},end:{line:40,column:9}},line:34},"9":{name:"(anonymous_9)",decl:{start:{line:42,column:45},end:{line:42,column:46}},loc:{start:{line:42,column:79},end:{line:50,column:5}},line:42}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:19,column:20},end:{line:19,column:65}},type:"binary-expr",locations:[{start:{line:19,column:20},end:{line:19,column:57}},{start:{line:19,column:61},end:{line:19,column:65}}],line:19},"5":{loc:{start:{line:35,column:12},end:{line:38,column:13}},type:"if",locations:[{start:{line:35,column:12},end:{line:38,column:13}},{start:{line:35,column:12},end:{line:38,column:13}}],line:35}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/collection-service.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/collection-service.ts"],names:[],mappings:";;;;;;;;;;;;AAAA,uDAAiD;AAKjD,0EAAqF;AAGrF;IAAgC,qCAAe;IAO7C,2BAAY,EACkG;YADjG,kBAAM,EAAE,0BAAU,EAAE,wCAAiB,EAAE,gCAAa;QAAjE,YAEE,kBAAM,EAAC,MAAM,QAAA,EAAC,CAAC,SAMhB;QAJC,KAAI,CAAC,UAAU,GAAG,UAAU,CAAC;QAC7B,KAAI,CAAC,iBAAiB,GAAG,iBAAiB,CAAC;QAC3C,KAAI,CAAC,aAAa,GAAG,aAAa,CAAC;QACnC,KAAI,CAAC,WAAW,GAAG,wCAAc,CAAC,aAAa,CAAC,CAAC;;IACnD,CAAC;IAEM,iCAAK,GAAZ,UAAa,OAAoB;QAAjC,iBAiBC;QAfC,MAAM,CAAC,+CAAqB,CAAC,KAAK,CAAC;YACjC,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,aAAa,EAAE,IAAI,CAAC,aAAa;YACjC,WAAW,EAAE,IAAI,CAAC,WAAW;YAC7B,OAAO,SAAA;SACR,CAAC;aACC,IAAI,CAAC,UAAA,GAAG;YAEP,EAAE,CAAC,CAAC,GAAG,CAAC,WAAW,CAAC,CAAC,CAAC;gBACpB,KAAI,CAAC,aAAa,GAAG,GAAG,CAAC,WAAW,CAAC;gBACrC,KAAI,CAAC,WAAW,GAAG,wCAAc,CAAC,GAAG,CAAC,WAAW,CAAC,CAAC;YACrD,CAAC;YAED,MAAM,CAAC,GAAG,CAAC;QACb,CAAC,CAAC,CAAC;IACP,CAAC;IAGM,sCAAU,GAAjB,UAAkB,UAAkB,EAAE,UAAiB;QACrD,MAAM,CAAC,+CAAqB,CAAC,UAAU,CAAC;YACtC,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,aAAa,EAAE,IAAI,CAAC,aAAa;YACjC,WAAW,EAAE,IAAI,CAAC,WAAW;YAC7B,UAAU,YAAA;YACV,UAAU,YAAA;SACX,CAAC,CAAC;IACL,CAAC;IACH,wBAAC;AAAD,CAAC,AA9CD,CAAgC,0BAAe,GA8C9C;AAED,kBAAe,iBAAiB,CAAC",sourcesContent:["import AbstractService from './abstract-service';\nimport Collection from '../../presentation/collection';\nimport DataClassBusiness from '../../business/dataclass-business';\nimport {QueryOption} from '../../presentation/query-option';\nimport {ICollectionDBO} from '../../business/collection-business';\nimport {CollectionBaseService, isEntitySetUri} from './base/collection-base-service';\nimport WakandaClient from '../../wakanda-client';\n\nclass CollectionService extends AbstractService {\n\n  private collection: Collection;\n  private dataClassBusiness: DataClassBusiness;\n  private collectionUri: string;\n  private isEntitySet: boolean;\n\n  constructor({wakJSC, collection, dataClassBusiness, collectionUri}:\n    {wakJSC: WakandaClient, collection: Collection, dataClassBusiness: DataClassBusiness, collectionUri: string}) {\n    super({wakJSC});\n\n    this.collection = collection;\n    this.dataClassBusiness = dataClassBusiness;\n    this.collectionUri = collectionUri;\n    this.isEntitySet = isEntitySetUri(collectionUri);\n  }\n\n  public fetch(options: QueryOption): Promise<ICollectionDBO> {\n\n    return CollectionBaseService.fetch({\n      httpClient: this.httpClient,\n      collectionUri: this.collectionUri,\n      isEntitySet: this.isEntitySet,\n      options\n    })\n      .then(dbo => {\n\n        if (dbo.__ENTITYSET) {\n          this.collectionUri = dbo.__ENTITYSET;\n          this.isEntitySet = isEntitySetUri(dbo.__ENTITYSET);\n        }\n\n        return dbo;\n      });\n  }\n\n\n  public callMethod(methodName: string, parameters: any[]): Promise<any> {\n    return CollectionBaseService.callMethod({\n      httpClient: this.httpClient,\n      collectionUri: this.collectionUri,\n      isEntitySet: this.isEntitySet,\n      methodName,\n      parameters\n    });\n  }\n}\n\nexport default CollectionService;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_c14mtok4e.s[0]++,(cov_c14mtok4e.b[0][0]++,this)&&(cov_c14mtok4e.b[0][1]++,this.__extends)||(cov_c14mtok4e.b[0][2]++,function(){cov_c14mtok4e.f[0]++;var extendStatics=(cov_c14mtok4e.s[1]++,(cov_c14mtok4e.b[1][0]++,Object.setPrototypeOf)||(cov_c14mtok4e.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_c14mtok4e.b[1][2]++,function(d,b){cov_c14mtok4e.f[1]++;cov_c14mtok4e.s[2]++;d.__proto__=b;})||(cov_c14mtok4e.b[1][3]++,function(d,b){cov_c14mtok4e.f[2]++;cov_c14mtok4e.s[3]++;for(var p in b){cov_c14mtok4e.s[4]++;if(b.hasOwnProperty(p)){cov_c14mtok4e.b[2][0]++;cov_c14mtok4e.s[5]++;d[p]=b[p];}else{cov_c14mtok4e.b[2][1]++;}}}));cov_c14mtok4e.s[6]++;return function(d,b){cov_c14mtok4e.f[3]++;cov_c14mtok4e.s[7]++;extendStatics(d,b);function __(){cov_c14mtok4e.f[4]++;cov_c14mtok4e.s[8]++;this.constructor=d;}cov_c14mtok4e.s[9]++;d.prototype=b===null?(cov_c14mtok4e.b[3][0]++,Object.create(b)):(cov_c14mtok4e.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_c14mtok4e.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_service_1=(cov_c14mtok4e.s[11]++,__webpack_require__(14));var collection_base_service_1=(cov_c14mtok4e.s[12]++,__webpack_require__(71));var CollectionService=(/** @class */cov_c14mtok4e.s[13]++,function(_super){cov_c14mtok4e.f[5]++;cov_c14mtok4e.s[14]++;__extends(CollectionService,_super);function CollectionService(_a){cov_c14mtok4e.f[6]++;var wakJSC=(cov_c14mtok4e.s[15]++,_a.wakJSC),collection=(cov_c14mtok4e.s[16]++,_a.collection),dataClassBusiness=(cov_c14mtok4e.s[17]++,_a.dataClassBusiness),collectionUri=(cov_c14mtok4e.s[18]++,_a.collectionUri);var _this=(cov_c14mtok4e.s[19]++,(cov_c14mtok4e.b[4][0]++,_super.call(this,{wakJSC:wakJSC}))||(cov_c14mtok4e.b[4][1]++,this));cov_c14mtok4e.s[20]++;_this.collection=collection;cov_c14mtok4e.s[21]++;_this.dataClassBusiness=dataClassBusiness;cov_c14mtok4e.s[22]++;_this.collectionUri=collectionUri;cov_c14mtok4e.s[23]++;_this.isEntitySet=collection_base_service_1.isEntitySetUri(collectionUri);cov_c14mtok4e.s[24]++;return _this;}cov_c14mtok4e.s[25]++;CollectionService.prototype.fetch=function(options){cov_c14mtok4e.f[7]++;var _this=(cov_c14mtok4e.s[26]++,this);cov_c14mtok4e.s[27]++;return collection_base_service_1.CollectionBaseService.fetch({httpClient:this.httpClient,collectionUri:this.collectionUri,isEntitySet:this.isEntitySet,options:options}).then(function(dbo){cov_c14mtok4e.f[8]++;cov_c14mtok4e.s[28]++;if(dbo.__ENTITYSET){cov_c14mtok4e.b[5][0]++;cov_c14mtok4e.s[29]++;_this.collectionUri=dbo.__ENTITYSET;cov_c14mtok4e.s[30]++;_this.isEntitySet=collection_base_service_1.isEntitySetUri(dbo.__ENTITYSET);}else{cov_c14mtok4e.b[5][1]++;}cov_c14mtok4e.s[31]++;return dbo;});};cov_c14mtok4e.s[32]++;CollectionService.prototype.callMethod=function(methodName,parameters){cov_c14mtok4e.f[9]++;cov_c14mtok4e.s[33]++;return collection_base_service_1.CollectionBaseService.callMethod({httpClient:this.httpClient,collectionUri:this.collectionUri,isEntitySet:this.isEntitySet,methodName:methodName,parameters:parameters});};cov_c14mtok4e.s[34]++;return CollectionService;}(abstract_service_1.default));cov_c14mtok4e.s[35]++;exports.default=CollectionService;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_pnub7ts4v=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/business/media-business.ts",hash="295ced65649020b13a5d465d5758334bcaada6db",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/business/media-business.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:26},end:{line:13,column:56}},"12":{start:{line:14,column:22},end:{line:14,column:69}},"13":{start:{line:15,column:35},end:{line:60,column:30}},"14":{start:{line:16,column:4},end:{line:16,column:37}},"15":{start:{line:18,column:21},end:{line:18,column:30}},"16":{start:{line:18,column:40},end:{line:18,column:48}},"17":{start:{line:18,column:70},end:{line:18,column:90}},"18":{start:{line:18,column:102},end:{line:18,column:112}},"19":{start:{line:18,column:130},end:{line:18,column:146}},"20":{start:{line:18,column:157},end:{line:18,column:166}},"21":{start:{line:19,column:20},end:{line:19,column:65}},"22":{start:{line:20,column:8},end:{line:20,column:28}},"23":{start:{line:21,column:8},end:{line:21,column:30}},"24":{start:{line:22,column:8},end:{line:22,column:52}},"25":{start:{line:23,column:8},end:{line:23,column:41}},"26":{start:{line:24,column:8},end:{line:30,column:11}},"27":{start:{line:31,column:8},end:{line:31,column:21}},"28":{start:{line:33,column:4},end:{line:36,column:6}},"29":{start:{line:34,column:8},end:{line:34,column:51}},"30":{start:{line:35,column:8},end:{line:35,column:51}},"31":{start:{line:37,column:4},end:{line:48,column:6}},"32":{start:{line:38,column:20},end:{line:38,column:24}},"33":{start:{line:39,column:8},end:{line:41,column:9}},"34":{start:{line:40,column:12},end:{line:40,column:91}},"35":{start:{line:42,column:8},end:{line:47,column:11}},"36":{start:{line:43,column:12},end:{line:43,column:23}},"37":{start:{line:46,column:12},end:{line:46,column:40}},"38":{start:{line:49,column:4},end:{line:58,column:6}},"39":{start:{line:50,column:20},end:{line:50,column:24}},"40":{start:{line:51,column:8},end:{line:53,column:9}},"41":{start:{line:52,column:12},end:{line:52,column:90}},"42":{start:{line:54,column:8},end:{line:57,column:11}},"43":{start:{line:56,column:12},end:{line:56,column:40}},"44":{start:{line:59,column:4},end:{line:59,column:25}},"45":{start:{line:61,column:0},end:{line:61,column:32}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:15,column:35},end:{line:15,column:36}},loc:{start:{line:15,column:53},end:{line:60,column:1}},line:15},"6":{name:"MediaBusiness",decl:{start:{line:17,column:13},end:{line:17,column:26}},loc:{start:{line:17,column:31},end:{line:32,column:5}},line:17},"7":{name:"(anonymous_7)",decl:{start:{line:33,column:45},end:{line:33,column:46}},loc:{start:{line:33,column:57},end:{line:36,column:5}},line:33},"8":{name:"(anonymous_8)",decl:{start:{line:37,column:37},end:{line:37,column:38}},loc:{start:{line:37,column:53},end:{line:48,column:5}},line:37},"9":{name:"(anonymous_9)",decl:{start:{line:42,column:57},end:{line:42,column:58}},loc:{start:{line:42,column:72},end:{line:44,column:9}},line:42},"10":{name:"(anonymous_10)",decl:{start:{line:44,column:16},end:{line:44,column:17}},loc:{start:{line:44,column:28},end:{line:47,column:9}},line:44},"11":{name:"(anonymous_11)",decl:{start:{line:49,column:37},end:{line:49,column:38}},loc:{start:{line:49,column:49},end:{line:58,column:5}},line:49},"12":{name:"(anonymous_12)",decl:{start:{line:54,column:42},end:{line:54,column:43}},loc:{start:{line:54,column:54},end:{line:57,column:9}},line:54}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:19,column:20},end:{line:19,column:65}},type:"binary-expr",locations:[{start:{line:19,column:20},end:{line:19,column:57}},{start:{line:19,column:61},end:{line:19,column:65}}],line:19},"5":{loc:{start:{line:39,column:8},end:{line:41,column:9}},type:"if",locations:[{start:{line:39,column:8},end:{line:41,column:9}},{start:{line:39,column:8},end:{line:41,column:9}}],line:39},"6":{loc:{start:{line:51,column:8},end:{line:53,column:9}},type:"if",locations:[{start:{line:51,column:8},end:{line:53,column:9}},{start:{line:51,column:8},end:{line:53,column:9}}],line:51}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/business/media-business.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/business/media-business.ts"],names:[],mappings:";;;;;;;;;;;;AAAA,yDAAmD;AACnD,sEAAgE;AAMhE;IAA4B,iCAAgB;IAS1C,uBAAY,EACwH;YADvH,kBAAM,EAAE,gBAAK,EAAE,wCAAiB,EAAE,oBAAO,EAAE,gCAAa,EAAE,kBAAM;QAA7E,YAEE,kBAAM,EAAC,MAAM,QAAA,EAAC,CAAC,SAahB;QAXC,KAAI,CAAC,KAAK,GAAG,KAAK,CAAC;QACnB,KAAI,CAAC,MAAM,GAAG,MAAM,CAAC;QACrB,KAAI,CAAC,iBAAiB,GAAG,iBAAiB,CAAC;QAC3C,KAAI,CAAC,OAAO,GAAG,OAAO,KAAK,IAAI,CAAC;QAChC,KAAI,CAAC,OAAO,GAAG,IAAI,uBAAY,CAAC;YAC9B,MAAM,QAAA;YACN,aAAa,EAAE,KAAI;YACnB,KAAK,OAAA;YACL,aAAa,eAAA;YACb,iBAAiB,mBAAA;SAClB,CAAC,CAAC;;IACL,CAAC;IAEM,sCAAc,GAArB;QACE,IAAI,CAAC,KAAK,CAAC,MAAM,GAAG,IAAI,CAAC,MAAM,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC;QAC3C,IAAI,CAAC,KAAK,CAAC,MAAM,GAAG,IAAI,CAAC,MAAM,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC;IAC7C,CAAC;IAEM,8BAAM,GAAb,UAAc,IAAS;QAAvB,iBAYC;QAVC,EAAE,CAAC,CAAC,CAAC,IAAI,CAAC,MAAM,CAAC,IAAI,CAAC,CAAC,CAAC;YACtB,MAAM,IAAI,KAAK,CAAC,6DAA6D,CAAC,CAAC;QACjF,CAAC;QAED,MAAM,CAAC,IAAI,CAAC,OAAO,CAAC,MAAM,CAAC,IAAI,EAAE,IAAI,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,UAAA,GAAG;YAClD,MAAM,CAAC,GAAG,CAAC,CAAC,OAAO;QACrB,CAAC,CAAC,CAAC,IAAI,CAAC;YACN,iFAAiF;YACjF,MAAM,CAAC,KAAI,CAAC,MAAM,CAAC,KAAK,EAAE,CAAC;QAC7B,CAAC,CAAC,CAAC;IACL,CAAC;IAEM,8BAAM,GAAb;QAAA,iBAUC;QARC,EAAE,CAAC,CAAC,CAAC,IAAI,CAAC,MAAM,CAAC,IAAI,CAAC,CAAC,CAAC;YACtB,MAAM,IAAI,KAAK,CAAC,4DAA4D,CAAC,CAAC;QAChF,CAAC;QAED,MAAM,CAAC,IAAI,CAAC,OAAO,CAAC,MAAM,EAAE,CAAC,IAAI,CAAC;YAChC,iFAAiF;YACjF,MAAM,CAAC,KAAI,CAAC,MAAM,CAAC,KAAK,EAAE,CAAC;QAC7B,CAAC,CAAC,CAAC;IACL,CAAC;IACH,oBAAC;AAAD,CAAC,AAxDD,CAA4B,2BAAgB,GAwD3C;AAED,kBAAe,aAAa,CAAC",sourcesContent:["import AbstractBusiness from './abstract-business';\nimport MediaService from '../data-access/service/media-service';\nimport Media from '../presentation/media';\nimport Entity from '../presentation/entity';\nimport DataClassBusiness from './dataclass-business';\nimport WakandaClient from '../wakanda-client';\n\nclass MediaBusiness extends AbstractBusiness {\n\n  public entity: Entity;\n  public isImage: boolean;\n\n  private media: Media;\n  private dataClassBusiness: DataClassBusiness;\n  private service: MediaService;\n\n  constructor({wakJSC, media, dataClassBusiness, isImage, attributeName, entity}:\n  {wakJSC: WakandaClient, media: Media, dataClassBusiness: DataClassBusiness, isImage: boolean, attributeName: string, entity: Entity}) {\n    super({wakJSC});\n\n    this.media = media;\n    this.entity = entity;\n    this.dataClassBusiness = dataClassBusiness;\n    this.isImage = isImage === true;\n    this.service = new MediaService({\n      wakJSC,\n      mediaBusiness: this,\n      media,\n      attributeName,\n      dataClassBusiness\n    });\n  }\n\n  public _decorateMedia() {\n    this.media.upload = this.upload.bind(this);\n    this.media.delete = this.delete.bind(this);\n  }\n\n  public upload(file: any): Promise<Entity> {\n\n    if (!this.entity._key) {\n      throw new Error('Media.upload: entity must be saved before uploading a media');\n    }\n\n    return this.service.upload(file, file.type).then(dbo => {\n      return dbo; //FIXME\n    }).then(() => {\n      //FIXME - crappy, force a refresh of the entity to get proper stamp and media uri\n      return this.entity.fetch();\n    });\n  }\n\n  public delete(): Promise<Entity> {\n\n    if (!this.entity._key) {\n      throw new Error('Media.upload: entity must be saved before deleting a media');\n    }\n\n    return this.service.delete().then(() => {\n      //FIXME - crappy, force a refresh of the entity to get proper stamp and media uri\n      return this.entity.fetch();\n    });\n  }\n}\n\nexport default MediaBusiness;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_pnub7ts4v.s[0]++,(cov_pnub7ts4v.b[0][0]++,this)&&(cov_pnub7ts4v.b[0][1]++,this.__extends)||(cov_pnub7ts4v.b[0][2]++,function(){cov_pnub7ts4v.f[0]++;var extendStatics=(cov_pnub7ts4v.s[1]++,(cov_pnub7ts4v.b[1][0]++,Object.setPrototypeOf)||(cov_pnub7ts4v.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_pnub7ts4v.b[1][2]++,function(d,b){cov_pnub7ts4v.f[1]++;cov_pnub7ts4v.s[2]++;d.__proto__=b;})||(cov_pnub7ts4v.b[1][3]++,function(d,b){cov_pnub7ts4v.f[2]++;cov_pnub7ts4v.s[3]++;for(var p in b){cov_pnub7ts4v.s[4]++;if(b.hasOwnProperty(p)){cov_pnub7ts4v.b[2][0]++;cov_pnub7ts4v.s[5]++;d[p]=b[p];}else{cov_pnub7ts4v.b[2][1]++;}}}));cov_pnub7ts4v.s[6]++;return function(d,b){cov_pnub7ts4v.f[3]++;cov_pnub7ts4v.s[7]++;extendStatics(d,b);function __(){cov_pnub7ts4v.f[4]++;cov_pnub7ts4v.s[8]++;this.constructor=d;}cov_pnub7ts4v.s[9]++;d.prototype=b===null?(cov_pnub7ts4v.b[3][0]++,Object.create(b)):(cov_pnub7ts4v.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_pnub7ts4v.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_business_1=(cov_pnub7ts4v.s[11]++,__webpack_require__(13));var media_service_1=(cov_pnub7ts4v.s[12]++,__webpack_require__(133));var MediaBusiness=(/** @class */cov_pnub7ts4v.s[13]++,function(_super){cov_pnub7ts4v.f[5]++;cov_pnub7ts4v.s[14]++;__extends(MediaBusiness,_super);function MediaBusiness(_a){cov_pnub7ts4v.f[6]++;var wakJSC=(cov_pnub7ts4v.s[15]++,_a.wakJSC),media=(cov_pnub7ts4v.s[16]++,_a.media),dataClassBusiness=(cov_pnub7ts4v.s[17]++,_a.dataClassBusiness),isImage=(cov_pnub7ts4v.s[18]++,_a.isImage),attributeName=(cov_pnub7ts4v.s[19]++,_a.attributeName),entity=(cov_pnub7ts4v.s[20]++,_a.entity);var _this=(cov_pnub7ts4v.s[21]++,(cov_pnub7ts4v.b[4][0]++,_super.call(this,{wakJSC:wakJSC}))||(cov_pnub7ts4v.b[4][1]++,this));cov_pnub7ts4v.s[22]++;_this.media=media;cov_pnub7ts4v.s[23]++;_this.entity=entity;cov_pnub7ts4v.s[24]++;_this.dataClassBusiness=dataClassBusiness;cov_pnub7ts4v.s[25]++;_this.isImage=isImage===true;cov_pnub7ts4v.s[26]++;_this.service=new media_service_1.default({wakJSC:wakJSC,mediaBusiness:_this,media:media,attributeName:attributeName,dataClassBusiness:dataClassBusiness});cov_pnub7ts4v.s[27]++;return _this;}cov_pnub7ts4v.s[28]++;MediaBusiness.prototype._decorateMedia=function(){cov_pnub7ts4v.f[7]++;cov_pnub7ts4v.s[29]++;this.media.upload=this.upload.bind(this);cov_pnub7ts4v.s[30]++;this.media.delete=this.delete.bind(this);};cov_pnub7ts4v.s[31]++;MediaBusiness.prototype.upload=function(file){cov_pnub7ts4v.f[8]++;var _this=(cov_pnub7ts4v.s[32]++,this);cov_pnub7ts4v.s[33]++;if(!this.entity._key){cov_pnub7ts4v.b[5][0]++;cov_pnub7ts4v.s[34]++;throw new Error('Media.upload: entity must be saved before uploading a media');}else{cov_pnub7ts4v.b[5][1]++;}cov_pnub7ts4v.s[35]++;return this.service.upload(file,file.type).then(function(dbo){cov_pnub7ts4v.f[9]++;cov_pnub7ts4v.s[36]++;return dbo;//FIXME
}).then(function(){cov_pnub7ts4v.f[10]++;cov_pnub7ts4v.s[37]++;//FIXME - crappy, force a refresh of the entity to get proper stamp and media uri
return _this.entity.fetch();});};cov_pnub7ts4v.s[38]++;MediaBusiness.prototype.delete=function(){cov_pnub7ts4v.f[11]++;var _this=(cov_pnub7ts4v.s[39]++,this);cov_pnub7ts4v.s[40]++;if(!this.entity._key){cov_pnub7ts4v.b[6][0]++;cov_pnub7ts4v.s[41]++;throw new Error('Media.upload: entity must be saved before deleting a media');}else{cov_pnub7ts4v.b[6][1]++;}cov_pnub7ts4v.s[42]++;return this.service.delete().then(function(){cov_pnub7ts4v.f[12]++;cov_pnub7ts4v.s[43]++;//FIXME - crappy, force a refresh of the entity to get proper stamp and media uri
return _this.entity.fetch();});};cov_pnub7ts4v.s[44]++;return MediaBusiness;}(abstract_business_1.default));cov_pnub7ts4v.s[45]++;exports.default=MediaBusiness;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_240i3wyp37=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/media-service.ts",hash="15637114ee5895fdb6bda21fdc02a0b59109b3ee",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/media-service.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:25},end:{line:13,column:54}},"12":{start:{line:14,column:27},end:{line:14,column:63}},"13":{start:{line:15,column:34},end:{line:48,column:29}},"14":{start:{line:16,column:4},end:{line:16,column:36}},"15":{start:{line:18,column:21},end:{line:18,column:30}},"16":{start:{line:18,column:48},end:{line:18,column:64}},"17":{start:{line:18,column:74},end:{line:18,column:82}},"18":{start:{line:18,column:100},end:{line:18,column:116}},"19":{start:{line:18,column:138},end:{line:18,column:158}},"20":{start:{line:19,column:20},end:{line:19,column:65}},"21":{start:{line:20,column:8},end:{line:20,column:63}},"22":{start:{line:21,column:8},end:{line:21,column:50}},"23":{start:{line:22,column:8},end:{line:22,column:44}},"24":{start:{line:23,column:8},end:{line:23,column:46}},"25":{start:{line:24,column:8},end:{line:24,column:28}},"26":{start:{line:25,column:8},end:{line:25,column:44}},"27":{start:{line:26,column:8},end:{line:26,column:21}},"28":{start:{line:28,column:4},end:{line:37,column:6}},"29":{start:{line:29,column:8},end:{line:36,column:11}},"30":{start:{line:38,column:4},end:{line:46,column:6}},"31":{start:{line:39,column:8},end:{line:45,column:11}},"32":{start:{line:47,column:4},end:{line:47,column:24}},"33":{start:{line:49,column:0},end:{line:49,column:31}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:15,column:34},end:{line:15,column:35}},loc:{start:{line:15,column:52},end:{line:48,column:1}},line:15},"6":{name:"MediaService",decl:{start:{line:17,column:13},end:{line:17,column:25}},loc:{start:{line:17,column:30},end:{line:27,column:5}},line:17},"7":{name:"(anonymous_7)",decl:{start:{line:28,column:36},end:{line:28,column:37}},loc:{start:{line:28,column:62},end:{line:37,column:5}},line:28},"8":{name:"(anonymous_8)",decl:{start:{line:38,column:36},end:{line:38,column:37}},loc:{start:{line:38,column:48},end:{line:46,column:5}},line:38}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:19,column:20},end:{line:19,column:65}},type:"binary-expr",locations:[{start:{line:19,column:20},end:{line:19,column:57}},{start:{line:19,column:61},end:{line:19,column:65}}],line:19}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/media-service.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/media-service.ts"],names:[],mappings:";;;;;;;;;;;;AACA,uDAAiD;AAIjD,gEAA2D;AAI3D;IAA2B,gCAAe;IASxC,sBAAY,EACsH;YADrH,kBAAM,EAAE,gCAAa,EAAE,gBAAK,EAAE,gCAAa,EAAE,wCAAiB;QAA3E,YAGE,kBAAM,EAAC,MAAM,QAAA,EAAC,CAAC,SAQhB;QANC,KAAI,CAAC,aAAa,GAAG,iBAAiB,CAAC,SAAS,CAAC,IAAI,CAAC;QACtD,KAAI,CAAC,OAAO,GAAG,iBAAiB,CAAC,OAAO,CAAC;QACzC,KAAI,CAAC,MAAM,GAAG,aAAa,CAAC,MAAM,CAAC;QACnC,KAAI,CAAC,OAAO,GAAG,aAAa,CAAC,OAAO,CAAC;QACrC,KAAI,CAAC,KAAK,GAAG,KAAK,CAAC;QACnB,KAAI,CAAC,aAAa,GAAG,aAAa,CAAC;;IACrC,CAAC;IAEM,6BAAM,GAAb,UAAc,IAAS,EAAE,QAAgB;QACvC,MAAM,CAAC,qCAAgB,CAAC,MAAM,CAAC;YAC7B,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,OAAO,EAAE,IAAI,CAAC,OAAO;YACrB,SAAS,EAAE,IAAI,CAAC,MAAM,CAAC,IAAI;YAC3B,aAAa,EAAE,IAAI,CAAC,aAAa;YACjC,OAAO,EAAE,IAAI,CAAC,OAAO;YACrB,IAAI,MAAA;SACL,CAAC,CAAC;IACL,CAAC;IAEM,6BAAM,GAAb;QACE,MAAM,CAAC,qCAAgB,CAAC,MAAM,CAAC;YAC7B,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,OAAO,EAAE,IAAI,CAAC,OAAO;YACrB,SAAS,EAAE,IAAI,CAAC,MAAM,CAAC,IAAI;YAC3B,WAAW,EAAE,IAAI,CAAC,MAAM,CAAC,MAAM;YAC/B,aAAa,EAAE,IAAI,CAAC,aAAa;SAClC,CAAC,CAAC;IACL,CAAC;IACH,mBAAC;AAAD,CAAC,AA1CD,CAA2B,0BAAe,GA0CzC;AAED,kBAAe,YAAY,CAAC",sourcesContent:["import WakandaClient from '../../wakanda-client';\nimport AbstractService from './abstract-service';\nimport Entity from '../../presentation/entity';\nimport Media from '../../presentation/media';\nimport HttpResponse from '../http/http-response';\nimport {MediaBaseService} from './base/media-base-service';\nimport MediaBusiness from '../../business/media-business';\nimport DataClassBusiness from '../../business/dataclass-business';\n\nclass MediaService extends AbstractService {\n\n  private dataClassName: string;\n  private entity: Entity;\n  private isImage: boolean;\n  private media: Media;\n  private attributeName: string;\n  private dataURI: string;\n\n  constructor({wakJSC, mediaBusiness, media, attributeName, dataClassBusiness}:\n    {wakJSC: WakandaClient, mediaBusiness: MediaBusiness, media: Media, attributeName: string, dataClassBusiness: DataClassBusiness}) {\n\n    super({wakJSC});\n\n    this.dataClassName = dataClassBusiness.dataClass.name;\n    this.dataURI = dataClassBusiness.dataURI;\n    this.entity = mediaBusiness.entity;\n    this.isImage = mediaBusiness.isImage;\n    this.media = media;\n    this.attributeName = attributeName;\n  }\n\n  public upload(file: any, mimeType: string): Promise<HttpResponse> {\n    return MediaBaseService.upload({\n      httpClient: this.httpClient,\n      dataURI: this.dataURI,\n      entityKey: this.entity._key,\n      attributeName: this.attributeName,\n      isImage: this.isImage,\n      file\n    });\n  }\n\n  public delete(): Promise<HttpResponse> {\n    return MediaBaseService.delete({\n      httpClient: this.httpClient,\n      dataURI: this.dataURI,\n      entityKey: this.entity._key,\n      entityStamp: this.entity._stamp,\n      attributeName: this.attributeName\n    });\n  }\n}\n\nexport default MediaService;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_240i3wyp37.s[0]++,(cov_240i3wyp37.b[0][0]++,this)&&(cov_240i3wyp37.b[0][1]++,this.__extends)||(cov_240i3wyp37.b[0][2]++,function(){cov_240i3wyp37.f[0]++;var extendStatics=(cov_240i3wyp37.s[1]++,(cov_240i3wyp37.b[1][0]++,Object.setPrototypeOf)||(cov_240i3wyp37.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_240i3wyp37.b[1][2]++,function(d,b){cov_240i3wyp37.f[1]++;cov_240i3wyp37.s[2]++;d.__proto__=b;})||(cov_240i3wyp37.b[1][3]++,function(d,b){cov_240i3wyp37.f[2]++;cov_240i3wyp37.s[3]++;for(var p in b){cov_240i3wyp37.s[4]++;if(b.hasOwnProperty(p)){cov_240i3wyp37.b[2][0]++;cov_240i3wyp37.s[5]++;d[p]=b[p];}else{cov_240i3wyp37.b[2][1]++;}}}));cov_240i3wyp37.s[6]++;return function(d,b){cov_240i3wyp37.f[3]++;cov_240i3wyp37.s[7]++;extendStatics(d,b);function __(){cov_240i3wyp37.f[4]++;cov_240i3wyp37.s[8]++;this.constructor=d;}cov_240i3wyp37.s[9]++;d.prototype=b===null?(cov_240i3wyp37.b[3][0]++,Object.create(b)):(cov_240i3wyp37.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_240i3wyp37.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_service_1=(cov_240i3wyp37.s[11]++,__webpack_require__(14));var media_base_service_1=(cov_240i3wyp37.s[12]++,__webpack_require__(72));var MediaService=(/** @class */cov_240i3wyp37.s[13]++,function(_super){cov_240i3wyp37.f[5]++;cov_240i3wyp37.s[14]++;__extends(MediaService,_super);function MediaService(_a){cov_240i3wyp37.f[6]++;var wakJSC=(cov_240i3wyp37.s[15]++,_a.wakJSC),mediaBusiness=(cov_240i3wyp37.s[16]++,_a.mediaBusiness),media=(cov_240i3wyp37.s[17]++,_a.media),attributeName=(cov_240i3wyp37.s[18]++,_a.attributeName),dataClassBusiness=(cov_240i3wyp37.s[19]++,_a.dataClassBusiness);var _this=(cov_240i3wyp37.s[20]++,(cov_240i3wyp37.b[4][0]++,_super.call(this,{wakJSC:wakJSC}))||(cov_240i3wyp37.b[4][1]++,this));cov_240i3wyp37.s[21]++;_this.dataClassName=dataClassBusiness.dataClass.name;cov_240i3wyp37.s[22]++;_this.dataURI=dataClassBusiness.dataURI;cov_240i3wyp37.s[23]++;_this.entity=mediaBusiness.entity;cov_240i3wyp37.s[24]++;_this.isImage=mediaBusiness.isImage;cov_240i3wyp37.s[25]++;_this.media=media;cov_240i3wyp37.s[26]++;_this.attributeName=attributeName;cov_240i3wyp37.s[27]++;return _this;}cov_240i3wyp37.s[28]++;MediaService.prototype.upload=function(file,mimeType){cov_240i3wyp37.f[7]++;cov_240i3wyp37.s[29]++;return media_base_service_1.MediaBaseService.upload({httpClient:this.httpClient,dataURI:this.dataURI,entityKey:this.entity._key,attributeName:this.attributeName,isImage:this.isImage,file:file});};cov_240i3wyp37.s[30]++;MediaService.prototype.delete=function(){cov_240i3wyp37.f[8]++;cov_240i3wyp37.s[31]++;return media_base_service_1.MediaBaseService.delete({httpClient:this.httpClient,dataURI:this.dataURI,entityKey:this.entity._key,entityStamp:this.entity._stamp,attributeName:this.attributeName});};cov_240i3wyp37.s[32]++;return MediaService;}(abstract_service_1.default));cov_240i3wyp37.s[33]++;exports.default=MediaService;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_1eimmgzrqw=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/business/directory-business.ts",hash="f2c4130b4dbffab747748732ea6f06464e23cbfa",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/business/directory-business.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:26},end:{line:13,column:56}},"12":{start:{line:14,column:26},end:{line:14,column:77}},"13":{start:{line:15,column:14},end:{line:15,column:33}},"14":{start:{line:16,column:39},end:{line:62,column:30}},"15":{start:{line:17,column:4},end:{line:17,column:41}},"16":{start:{line:19,column:21},end:{line:19,column:30}},"17":{start:{line:20,column:20},end:{line:20,column:65}},"18":{start:{line:21,column:8},end:{line:21,column:76}},"19":{start:{line:22,column:8},end:{line:22,column:21}},"20":{start:{line:24,column:4},end:{line:33,column:6}},"21":{start:{line:25,column:27},end:{line:25,column:79}},"22":{start:{line:26,column:8},end:{line:28,column:9}},"23":{start:{line:27,column:12},end:{line:27,column:75}},"24":{start:{line:29,column:8},end:{line:32,column:11}},"25":{start:{line:31,column:12},end:{line:31,column:78}},"26":{start:{line:34,column:4},end:{line:39,column:6}},"27":{start:{line:35,column:8},end:{line:38,column:11}},"28":{start:{line:37,column:12},end:{line:37,column:80}},"29":{start:{line:40,column:4},end:{line:48,column:6}},"30":{start:{line:41,column:8},end:{line:47,column:11}},"31":{start:{line:43,column:12},end:{line:43,column:23}},"32":{start:{line:46,column:12},end:{line:46,column:96}},"33":{start:{line:49,column:4},end:{line:60,column:6}},"34":{start:{line:50,column:8},end:{line:52,column:9}},"35":{start:{line:51,column:12},end:{line:51,column:89}},"36":{start:{line:53,column:8},end:{line:59,column:11}},"37":{start:{line:55,column:12},end:{line:55,column:24}},"38":{start:{line:58,column:12},end:{line:58,column:25}},"39":{start:{line:61,column:4},end:{line:61,column:29}},"40":{start:{line:63,column:0},end:{line:63,column:36}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:16,column:39},end:{line:16,column:40}},loc:{start:{line:16,column:57},end:{line:62,column:1}},line:16},"6":{name:"DirectoryBusiness",decl:{start:{line:18,column:13},end:{line:18,column:30}},loc:{start:{line:18,column:35},end:{line:23,column:5}},line:18},"7":{name:"(anonymous_7)",decl:{start:{line:24,column:40},end:{line:24,column:41}},loc:{start:{line:24,column:80},end:{line:33,column:5}},line:24},"8":{name:"(anonymous_8)",decl:{start:{line:30,column:19},end:{line:30,column:20}},loc:{start:{line:30,column:31},end:{line:32,column:9}},line:30},"9":{name:"(anonymous_9)",decl:{start:{line:34,column:41},end:{line:34,column:42}},loc:{start:{line:34,column:53},end:{line:39,column:5}},line:34},"10":{name:"(anonymous_10)",decl:{start:{line:36,column:19},end:{line:36,column:20}},loc:{start:{line:36,column:31},end:{line:38,column:9}},line:36},"11":{name:"(anonymous_11)",decl:{start:{line:40,column:49},end:{line:40,column:50}},loc:{start:{line:40,column:61},end:{line:48,column:5}},line:40},"12":{name:"(anonymous_12)",decl:{start:{line:42,column:18},end:{line:42,column:19}},loc:{start:{line:42,column:33},end:{line:44,column:9}},line:42},"13":{name:"(anonymous_13)",decl:{start:{line:45,column:19},end:{line:45,column:20}},loc:{start:{line:45,column:31},end:{line:47,column:9}},line:45},"14":{name:"(anonymous_14)",decl:{start:{line:49,column:58},end:{line:49,column:59}},loc:{start:{line:49,column:75},end:{line:60,column:5}},line:49},"15":{name:"(anonymous_15)",decl:{start:{line:54,column:18},end:{line:54,column:19}},loc:{start:{line:54,column:30},end:{line:56,column:9}},line:54},"16":{name:"(anonymous_16)",decl:{start:{line:57,column:19},end:{line:57,column:20}},loc:{start:{line:57,column:31},end:{line:59,column:9}},line:57}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:20,column:20},end:{line:20,column:65}},type:"binary-expr",locations:[{start:{line:20,column:20},end:{line:20,column:57}},{start:{line:20,column:61},end:{line:20,column:65}}],line:20},"5":{loc:{start:{line:25,column:27},end:{line:25,column:79}},type:"binary-expr",locations:[{start:{line:25,column:27},end:{line:25,column:35}},{start:{line:25,column:39},end:{line:25,column:79}}],line:25},"6":{loc:{start:{line:26,column:8},end:{line:28,column:9}},type:"if",locations:[{start:{line:26,column:8},end:{line:28,column:9}},{start:{line:26,column:8},end:{line:28,column:9}}],line:26},"7":{loc:{start:{line:26,column:12},end:{line:26,column:68}},type:"binary-expr",locations:[{start:{line:26,column:12},end:{line:26,column:47}},{start:{line:26,column:51},end:{line:26,column:68}}],line:26},"8":{loc:{start:{line:50,column:8},end:{line:52,column:9}},type:"if",locations:[{start:{line:50,column:8},end:{line:52,column:9}},{start:{line:50,column:8},end:{line:52,column:9}}],line:50}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/business/directory-business.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/business/directory-business.ts"],names:[],mappings:";;;;;;;;;;;;AACA,yDAAmD;AACnD,8EAAwE;AACxE,kCAA6B;AAQ7B;IAAgC,qCAAgB;IAI9C,2BAAY,EAAiC;YAAhC,kBAAM;QAAnB,YACE,kBAAM,EAAC,MAAM,QAAA,EAAC,CAAC,SAGhB;QADC,KAAI,CAAC,OAAO,GAAG,IAAI,2BAAgB,CAAC,EAAC,MAAM,QAAA,EAAC,CAAC,CAAC;;IAChD,CAAC;IAEM,iCAAK,GAAZ,UAAa,QAAgB,EAAE,QAAgB,EAAE,QAAiB;QAEhE,IAAI,YAAY,GAAG,QAAQ,IAAI,eAAK,CAAC,wBAAwB,CAAC;QAE9D,EAAE,CAAC,CAAC,CAAC,CAAC,OAAO,YAAY,KAAK,QAAQ,CAAC,IAAI,YAAY,IAAI,CAAC,CAAC,CAAC,CAAC;YAC7D,MAAM,IAAI,KAAK,CAAC,6CAA6C,CAAC,CAAC;QACjE,CAAC;QAED,MAAM,CAAC,IAAI,CAAC,OAAO,CAAC,KAAK,CAAC,QAAQ,EAAE,QAAQ,EAAE,YAAY,CAAC;aACxD,KAAK,CAAC;YACL,MAAM,CAAC,OAAO,CAAC,MAAM,CAAC,IAAI,KAAK,CAAC,+BAA+B,CAAC,CAAC,CAAC;QACpE,CAAC,CAAC,CAAC;IACP,CAAC;IAEM,kCAAM,GAAb;QACE,MAAM,CAAC,IAAI,CAAC,OAAO,CAAC,MAAM,EAAE;aACzB,KAAK,CAAC;YACL,MAAM,CAAC,OAAO,CAAC,MAAM,CAAC,IAAI,KAAK,CAAC,iCAAiC,CAAC,CAAC,CAAC;QACtE,CAAC,CAAC,CAAC;IACP,CAAC;IAEM,0CAAc,GAArB;QACE,MAAM,CAAC,IAAI,CAAC,OAAO,CAAC,cAAc,EAAE;aACjC,IAAI,CAAC,UAAA,GAAG;YACP,MAAM,CAAC,GAAG,CAAC;QACb,CAAC,CAAC;aACD,KAAK,CAAC;YACL,MAAM,CAAC,OAAO,CAAC,MAAM,CAAC,IAAI,KAAK,CAAC,iDAAiD,CAAC,CAAC,CAAC;QACtF,CAAC,CAAC,CAAC;IACP,CAAC;IAEM,mDAAuB,GAA9B,UAA+B,KAAa;QAE1C,EAAE,CAAC,CAAC,CAAC,CAAC,OAAO,KAAK,KAAK,QAAQ,CAAC,CAAC,CAAC,CAAC;YACjC,MAAM,IAAI,KAAK,CAAC,2DAA2D,CAAC,CAAC;QAC/E,CAAC;QAED,MAAM,CAAC,IAAI,CAAC,OAAO,CAAC,uBAAuB,CAAC,KAAK,CAAC;aAC/C,IAAI,CAAC;YACJ,MAAM,CAAC,IAAI,CAAC;QACd,CAAC,CAAC;aACD,KAAK,CAAC;YACL,MAAM,CAAC,KAAK,CAAC;QACf,CAAC,CAAC,CAAC;IACP,CAAC;IACH,wBAAC;AAAD,CAAC,AAvDD,CAAgC,2BAAgB,GAuD/C;AAED,kBAAe,iBAAiB,CAAC",sourcesContent:["import WakandaClient from '../wakanda-client';\nimport AbstractBusiness from './abstract-business';\nimport DirectoryService from '../data-access/service/directory-service';\nimport Const from '../const';\n\nexport interface ICurrentUserDBO {\n  userName: string;\n  fullName: string;\n  ID: string|number;\n}\n\nclass DirectoryBusiness extends AbstractBusiness {\n\n  private service: DirectoryService;\n\n  constructor({wakJSC}: {wakJSC: WakandaClient}) {\n    super({wakJSC});\n\n    this.service = new DirectoryService({wakJSC});\n  }\n\n  public login(username: string, password: string, duration?: number): Promise<boolean> {\n\n    let durationTime = duration || Const.DEFAULT_SESSION_DURATION;\n\n    if (!(typeof durationTime === 'number') || durationTime <= 0) {\n      throw new Error('Directory.login: invalid duration parameter');\n    }\n\n    return this.service.login(username, password, durationTime)\n      .catch(() => {\n        return Promise.reject(new Error('Directory.login: Unauthorized'));\n      });\n  }\n\n  public logout(): Promise<boolean> {\n    return this.service.logout()\n      .catch(() => {\n        return Promise.reject(new Error('Directory.logout: logout failed'));\n      });\n  }\n\n  public getCurrentUser(): Promise<ICurrentUserDBO> {\n    return this.service.getCurrentUser()\n      .then(dbo => {\n        return dbo;\n      })\n      .catch(() => {\n        return Promise.reject(new Error('Directory.getCurrentUser: user is not logged in'));\n      });\n  }\n\n  public getCurrentUserBelongsTo(group: string): Promise<boolean> {\n\n    if (!(typeof group === 'string')) {\n      throw new Error('Directory.getCurrentUserBelongsTo: group must be a string');\n    }\n\n    return this.service.getCurrentUserBelongsTo(group)\n      .then(() => {\n        return true;\n      })\n      .catch(() => {\n        return false;\n      });\n  }\n}\n\nexport default DirectoryBusiness;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_1eimmgzrqw.s[0]++,(cov_1eimmgzrqw.b[0][0]++,this)&&(cov_1eimmgzrqw.b[0][1]++,this.__extends)||(cov_1eimmgzrqw.b[0][2]++,function(){cov_1eimmgzrqw.f[0]++;var extendStatics=(cov_1eimmgzrqw.s[1]++,(cov_1eimmgzrqw.b[1][0]++,Object.setPrototypeOf)||(cov_1eimmgzrqw.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_1eimmgzrqw.b[1][2]++,function(d,b){cov_1eimmgzrqw.f[1]++;cov_1eimmgzrqw.s[2]++;d.__proto__=b;})||(cov_1eimmgzrqw.b[1][3]++,function(d,b){cov_1eimmgzrqw.f[2]++;cov_1eimmgzrqw.s[3]++;for(var p in b){cov_1eimmgzrqw.s[4]++;if(b.hasOwnProperty(p)){cov_1eimmgzrqw.b[2][0]++;cov_1eimmgzrqw.s[5]++;d[p]=b[p];}else{cov_1eimmgzrqw.b[2][1]++;}}}));cov_1eimmgzrqw.s[6]++;return function(d,b){cov_1eimmgzrqw.f[3]++;cov_1eimmgzrqw.s[7]++;extendStatics(d,b);function __(){cov_1eimmgzrqw.f[4]++;cov_1eimmgzrqw.s[8]++;this.constructor=d;}cov_1eimmgzrqw.s[9]++;d.prototype=b===null?(cov_1eimmgzrqw.b[3][0]++,Object.create(b)):(cov_1eimmgzrqw.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_1eimmgzrqw.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_business_1=(cov_1eimmgzrqw.s[11]++,__webpack_require__(13));var directory_service_1=(cov_1eimmgzrqw.s[12]++,__webpack_require__(135));var const_1=(cov_1eimmgzrqw.s[13]++,__webpack_require__(40));var DirectoryBusiness=(/** @class */cov_1eimmgzrqw.s[14]++,function(_super){cov_1eimmgzrqw.f[5]++;cov_1eimmgzrqw.s[15]++;__extends(DirectoryBusiness,_super);function DirectoryBusiness(_a){cov_1eimmgzrqw.f[6]++;var wakJSC=(cov_1eimmgzrqw.s[16]++,_a.wakJSC);var _this=(cov_1eimmgzrqw.s[17]++,(cov_1eimmgzrqw.b[4][0]++,_super.call(this,{wakJSC:wakJSC}))||(cov_1eimmgzrqw.b[4][1]++,this));cov_1eimmgzrqw.s[18]++;_this.service=new directory_service_1.default({wakJSC:wakJSC});cov_1eimmgzrqw.s[19]++;return _this;}cov_1eimmgzrqw.s[20]++;DirectoryBusiness.prototype.login=function(username,password,duration){cov_1eimmgzrqw.f[7]++;var durationTime=(cov_1eimmgzrqw.s[21]++,(cov_1eimmgzrqw.b[5][0]++,duration)||(cov_1eimmgzrqw.b[5][1]++,const_1.default.DEFAULT_SESSION_DURATION));cov_1eimmgzrqw.s[22]++;if((cov_1eimmgzrqw.b[7][0]++,!(typeof durationTime==='number'))||(cov_1eimmgzrqw.b[7][1]++,durationTime<=0)){cov_1eimmgzrqw.b[6][0]++;cov_1eimmgzrqw.s[23]++;throw new Error('Directory.login: invalid duration parameter');}else{cov_1eimmgzrqw.b[6][1]++;}cov_1eimmgzrqw.s[24]++;return this.service.login(username,password,durationTime).catch(function(){cov_1eimmgzrqw.f[8]++;cov_1eimmgzrqw.s[25]++;return Promise.reject(new Error('Directory.login: Unauthorized'));});};cov_1eimmgzrqw.s[26]++;DirectoryBusiness.prototype.logout=function(){cov_1eimmgzrqw.f[9]++;cov_1eimmgzrqw.s[27]++;return this.service.logout().catch(function(){cov_1eimmgzrqw.f[10]++;cov_1eimmgzrqw.s[28]++;return Promise.reject(new Error('Directory.logout: logout failed'));});};cov_1eimmgzrqw.s[29]++;DirectoryBusiness.prototype.getCurrentUser=function(){cov_1eimmgzrqw.f[11]++;cov_1eimmgzrqw.s[30]++;return this.service.getCurrentUser().then(function(dbo){cov_1eimmgzrqw.f[12]++;cov_1eimmgzrqw.s[31]++;return dbo;}).catch(function(){cov_1eimmgzrqw.f[13]++;cov_1eimmgzrqw.s[32]++;return Promise.reject(new Error('Directory.getCurrentUser: user is not logged in'));});};cov_1eimmgzrqw.s[33]++;DirectoryBusiness.prototype.getCurrentUserBelongsTo=function(group){cov_1eimmgzrqw.f[14]++;cov_1eimmgzrqw.s[34]++;if(!(typeof group==='string')){cov_1eimmgzrqw.b[8][0]++;cov_1eimmgzrqw.s[35]++;throw new Error('Directory.getCurrentUserBelongsTo: group must be a string');}else{cov_1eimmgzrqw.b[8][1]++;}cov_1eimmgzrqw.s[36]++;return this.service.getCurrentUserBelongsTo(group).then(function(){cov_1eimmgzrqw.f[15]++;cov_1eimmgzrqw.s[37]++;return true;}).catch(function(){cov_1eimmgzrqw.f[16]++;cov_1eimmgzrqw.s[38]++;return false;});};cov_1eimmgzrqw.s[39]++;return DirectoryBusiness;}(abstract_business_1.default));cov_1eimmgzrqw.s[40]++;exports.default=DirectoryBusiness;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_25g0hv5hzs=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/directory-service.ts",hash="186e383c4f94ab9d44e880db6bc859c5152c5a76",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/directory-service.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:25},end:{line:13,column:54}},"12":{start:{line:14,column:31},end:{line:14,column:71}},"13":{start:{line:15,column:38},end:{line:45,column:29}},"14":{start:{line:16,column:4},end:{line:16,column:40}},"15":{start:{line:18,column:8},end:{line:18,column:72}},"16":{start:{line:20,column:4},end:{line:27,column:6}},"17":{start:{line:21,column:8},end:{line:26,column:11}},"18":{start:{line:28,column:4},end:{line:32,column:6}},"19":{start:{line:29,column:8},end:{line:31,column:11}},"20":{start:{line:33,column:4},end:{line:37,column:6}},"21":{start:{line:34,column:8},end:{line:36,column:11}},"22":{start:{line:38,column:4},end:{line:43,column:6}},"23":{start:{line:39,column:8},end:{line:42,column:11}},"24":{start:{line:44,column:4},end:{line:44,column:28}},"25":{start:{line:46,column:0},end:{line:46,column:35}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:15,column:38},end:{line:15,column:39}},loc:{start:{line:15,column:56},end:{line:45,column:1}},line:15},"6":{name:"DirectoryService",decl:{start:{line:17,column:13},end:{line:17,column:29}},loc:{start:{line:17,column:32},end:{line:19,column:5}},line:17},"7":{name:"(anonymous_7)",decl:{start:{line:20,column:39},end:{line:20,column:40}},loc:{start:{line:20,column:79},end:{line:27,column:5}},line:20},"8":{name:"(anonymous_8)",decl:{start:{line:28,column:40},end:{line:28,column:41}},loc:{start:{line:28,column:52},end:{line:32,column:5}},line:28},"9":{name:"(anonymous_9)",decl:{start:{line:33,column:48},end:{line:33,column:49}},loc:{start:{line:33,column:60},end:{line:37,column:5}},line:33},"10":{name:"(anonymous_10)",decl:{start:{line:38,column:57},end:{line:38,column:58}},loc:{start:{line:38,column:74},end:{line:43,column:5}},line:38}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:18,column:15},end:{line:18,column:71}},type:"binary-expr",locations:[{start:{line:18,column:15},end:{line:18,column:30}},{start:{line:18,column:34},end:{line:18,column:63}},{start:{line:18,column:67},end:{line:18,column:71}}],line:18}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/directory-service.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/data-access/service/directory-service.ts"],names:[],mappings:";;;;;;;;;;;;AAAA,uDAAiD;AAEjD,wEAAmE;AAEnE;IAA+B,oCAAe;IAA9C;;IA6BA,CAAC;IA3BQ,gCAAK,GAAZ,UAAa,QAAgB,EAAE,QAAgB,EAAE,QAAgB;QAC/D,MAAM,CAAC,6CAAoB,CAAC,KAAK,CAAC;YAChC,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,QAAQ,UAAA;YACR,QAAQ,UAAA;YACR,QAAQ,UAAA;SACT,CAAC,CAAC;IACL,CAAC;IAEM,iCAAM,GAAb;QACE,MAAM,CAAC,6CAAoB,CAAC,MAAM,CAAC;YACjC,UAAU,EAAE,IAAI,CAAC,UAAU;SAC5B,CAAC,CAAC;IACL,CAAC;IAEM,yCAAc,GAArB;QACE,MAAM,CAAC,6CAAoB,CAAC,cAAc,CAAC;YACzC,UAAU,EAAE,IAAI,CAAC,UAAU;SAC5B,CAAC,CAAC;IACL,CAAC;IAEM,kDAAuB,GAA9B,UAA+B,KAAa;QAC1C,MAAM,CAAC,6CAAoB,CAAC,uBAAuB,CAAC;YAClD,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,KAAK,OAAA;SACN,CAAC,CAAC;IACL,CAAC;IACH,uBAAC;AAAD,CAAC,AA7BD,CAA+B,0BAAe,GA6B7C;AAED,kBAAe,gBAAgB,CAAC",sourcesContent:["import AbstractService from './abstract-service';\nimport {ICurrentUserDBO} from '../../business/directory-business';\nimport {DirectoryBaseService} from './base/directory-base-service';\n\nclass DirectoryService extends AbstractService {\n\n  public login(username: string, password: string, duration: number): Promise<boolean> {\n    return DirectoryBaseService.login({\n      httpClient: this.httpClient,\n      username,\n      password,\n      duration\n    });\n  }\n\n  public logout(): Promise<boolean> {\n    return DirectoryBaseService.logout({\n      httpClient: this.httpClient\n    });\n  }\n\n  public getCurrentUser(): Promise<ICurrentUserDBO> {\n    return DirectoryBaseService.getCurrentUser({\n      httpClient: this.httpClient\n    });\n  }\n\n  public getCurrentUserBelongsTo(group: string): Promise<boolean> {\n    return DirectoryBaseService.getCurrentUserBelongsTo({\n      httpClient: this.httpClient,\n      group\n    });\n  }\n}\n\nexport default DirectoryService;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_25g0hv5hzs.s[0]++,(cov_25g0hv5hzs.b[0][0]++,this)&&(cov_25g0hv5hzs.b[0][1]++,this.__extends)||(cov_25g0hv5hzs.b[0][2]++,function(){cov_25g0hv5hzs.f[0]++;var extendStatics=(cov_25g0hv5hzs.s[1]++,(cov_25g0hv5hzs.b[1][0]++,Object.setPrototypeOf)||(cov_25g0hv5hzs.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_25g0hv5hzs.b[1][2]++,function(d,b){cov_25g0hv5hzs.f[1]++;cov_25g0hv5hzs.s[2]++;d.__proto__=b;})||(cov_25g0hv5hzs.b[1][3]++,function(d,b){cov_25g0hv5hzs.f[2]++;cov_25g0hv5hzs.s[3]++;for(var p in b){cov_25g0hv5hzs.s[4]++;if(b.hasOwnProperty(p)){cov_25g0hv5hzs.b[2][0]++;cov_25g0hv5hzs.s[5]++;d[p]=b[p];}else{cov_25g0hv5hzs.b[2][1]++;}}}));cov_25g0hv5hzs.s[6]++;return function(d,b){cov_25g0hv5hzs.f[3]++;cov_25g0hv5hzs.s[7]++;extendStatics(d,b);function __(){cov_25g0hv5hzs.f[4]++;cov_25g0hv5hzs.s[8]++;this.constructor=d;}cov_25g0hv5hzs.s[9]++;d.prototype=b===null?(cov_25g0hv5hzs.b[3][0]++,Object.create(b)):(cov_25g0hv5hzs.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_25g0hv5hzs.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_service_1=(cov_25g0hv5hzs.s[11]++,__webpack_require__(14));var directory_base_service_1=(cov_25g0hv5hzs.s[12]++,__webpack_require__(74));var DirectoryService=(/** @class */cov_25g0hv5hzs.s[13]++,function(_super){cov_25g0hv5hzs.f[5]++;cov_25g0hv5hzs.s[14]++;__extends(DirectoryService,_super);function DirectoryService(){cov_25g0hv5hzs.f[6]++;cov_25g0hv5hzs.s[15]++;return(cov_25g0hv5hzs.b[4][0]++,_super!==null)&&(cov_25g0hv5hzs.b[4][1]++,_super.apply(this,arguments))||(cov_25g0hv5hzs.b[4][2]++,this);}cov_25g0hv5hzs.s[16]++;DirectoryService.prototype.login=function(username,password,duration){cov_25g0hv5hzs.f[7]++;cov_25g0hv5hzs.s[17]++;return directory_base_service_1.DirectoryBaseService.login({httpClient:this.httpClient,username:username,password:password,duration:duration});};cov_25g0hv5hzs.s[18]++;DirectoryService.prototype.logout=function(){cov_25g0hv5hzs.f[8]++;cov_25g0hv5hzs.s[19]++;return directory_base_service_1.DirectoryBaseService.logout({httpClient:this.httpClient});};cov_25g0hv5hzs.s[20]++;DirectoryService.prototype.getCurrentUser=function(){cov_25g0hv5hzs.f[9]++;cov_25g0hv5hzs.s[21]++;return directory_base_service_1.DirectoryBaseService.getCurrentUser({httpClient:this.httpClient});};cov_25g0hv5hzs.s[22]++;DirectoryService.prototype.getCurrentUserBelongsTo=function(group){cov_25g0hv5hzs.f[10]++;cov_25g0hv5hzs.s[23]++;return directory_base_service_1.DirectoryBaseService.getCurrentUserBelongsTo({httpClient:this.httpClient,group:group});};cov_25g0hv5hzs.s[24]++;return DirectoryService;}(abstract_service_1.default));cov_25g0hv5hzs.s[25]++;exports.default=DirectoryService;

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = {"name":"wakanda-client","main":"dist/node.js","version":"2.3.0","description":"Wakanda Client allows you to easily interact with Wakanda Server on a JavaScript (browser or node) environment","browser":"browser/wakanda-client.min.js","repository":"wakanda/wakanda-javascript-client","scripts":{"watch":"webpack --progress --colors --watch","build":"webpack --progress --colors","test:all":"npm run test:karma && npm run test:node","test:karma":"karma start","test:node":"mocha test/bootstrap.js test/spec/**/*.spec.js","test":"node runTests.js","test-server:record":"node test/connect/server.js record","serve":"concurrently -r \"npm run watch\" \"gulp serve\"","tsc":"tsc","codecov":"cat coverage/*/lcov.info | codecov"},"author":"Wakanda SAS","license":"MIT","devDependencies":{"babel-core":"^6.26.0","babel-loader":"^7.1.2","babel-preset-env":"^1.6.1","chai":"^4.1.2","chalk":"^2.3.0","clean-webpack-plugin":"^0.1.17","codecov.io":"^0.1.6","concurrently":"^3.5.0","connect":"^3.6.5","connect-prism":"git+https://git@github.com/seglo/connect-prism.git","eslint":"^4.11.0","eslint-loader":"^1.9.0","gulp":"^3.9.1","gulp-connect":"^5.0.0","http-proxy-middleware":"^0.17.4","istanbul-instrumenter-loader":"^3.0.0","karma":"^1.7.1","karma-chai":"^0.1.0","karma-coverage":"^1.1.1","karma-coverage-istanbul-reporter":"^1.3.0","karma-mocha":"^1.3.0","karma-phantomjs-launcher":"^1.0.4","karma-verbose-reporter":"0.0.6","lodash":"^4.17.4","mocha":"^4.0.1","path":"^0.12.7","phantomjs-prebuilt":"^2.1.16","ts-loader":"^3.1.1","tslint":"^5.8.0","tslint-loader":"^3.5.3","typescript":"^2.6.1","webpack":"^3.8.1"},"dependencies":{"core-js":"^2.5.1","request":"^2.83.0"}}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_13nvuqghyq=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/data-access/http/browser-http-client.ts",hash="c2f0aa62ac162e7c0db7e929e3397a5d352496ba",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/http/browser-http-client.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:20},end:{line:13,column:44}},"12":{start:{line:14,column:22},end:{line:14,column:48}},"13":{start:{line:15,column:24},end:{line:15,column:65}},"14":{start:{line:16,column:39},end:{line:76,column:27}},"15":{start:{line:17,column:4},end:{line:17,column:41}},"16":{start:{line:19,column:24},end:{line:19,column:36}},"17":{start:{line:20,column:20},end:{line:20,column:71}},"18":{start:{line:21,column:8},end:{line:21,column:47}},"19":{start:{line:22,column:8},end:{line:22,column:21}},"20":{start:{line:24,column:4},end:{line:37,column:6}},"21":{start:{line:25,column:18},end:{line:25,column:24}},"22":{start:{line:25,column:35},end:{line:25,column:44}},"23":{start:{line:26,column:8},end:{line:34,column:9}},"24":{start:{line:27,column:22},end:{line:27,column:83}},"25":{start:{line:28,column:12},end:{line:30,column:13}},"26":{start:{line:29,column:16},end:{line:29,column:44}},"27":{start:{line:33,column:12},end:{line:33,column:37}},"28":{start:{line:35,column:21},end:{line:35,column:78}},"29":{start:{line:36,column:8},end:{line:36,column:68}},"30":{start:{line:38,column:4},end:{line:45,column:6}},"31":{start:{line:39,column:18},end:{line:39,column:24}},"32":{start:{line:40,column:22},end:{line:43,column:19}},"33":{start:{line:44,column:8},end:{line:44,column:63}},"34":{start:{line:46,column:4},end:{line:64,column:6}},"35":{start:{line:47,column:18},end:{line:47,column:24}},"36":{start:{line:47,column:33},end:{line:47,column:40}},"37":{start:{line:47,column:51},end:{line:47,column:60}},"38":{start:{line:48,column:8},end:{line:56,column:9}},"39":{start:{line:49,column:22},end:{line:49,column:96}},"40":{start:{line:50,column:12},end:{line:52,column:13}},"41":{start:{line:51,column:16},end:{line:51,column:44}},"42":{start:{line:55,column:12},end:{line:55,column:37}},"43":{start:{line:57,column:22},end:{line:61,column:19}},"44":{start:{line:62,column:21},end:{line:62,column:68}},"45":{start:{line:63,column:8},end:{line:63,column:69}},"46":{start:{line:65,column:4},end:{line:74,column:6}},"47":{start:{line:66,column:22},end:{line:66,column:32}},"48":{start:{line:67,column:8},end:{line:73,column:11}},"49":{start:{line:68,column:12},end:{line:72,column:15}},"50":{start:{line:75,column:4},end:{line:75,column:29}},"51":{start:{line:77,column:0},end:{line:77,column:36}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:16,column:39},end:{line:16,column:40}},loc:{start:{line:16,column:57},end:{line:76,column:1}},line:16},"6":{name:"BrowserHttpClient",decl:{start:{line:18,column:13},end:{line:18,column:30}},loc:{start:{line:18,column:35},end:{line:23,column:5}},line:18},"7":{name:"(anonymous_7)",decl:{start:{line:24,column:38},end:{line:24,column:39}},loc:{start:{line:24,column:52},end:{line:37,column:5}},line:24},"8":{name:"(anonymous_8)",decl:{start:{line:38,column:57},end:{line:38,column:58}},loc:{start:{line:38,column:71},end:{line:45,column:5}},line:38},"9":{name:"(anonymous_9)",decl:{start:{line:46,column:39},end:{line:46,column:40}},loc:{start:{line:46,column:53},end:{line:64,column:5}},line:46},"10":{name:"(anonymous_10)",decl:{start:{line:65,column:55},end:{line:65,column:56}},loc:{start:{line:65,column:69},end:{line:74,column:5}},line:65},"11":{name:"(anonymous_11)",decl:{start:{line:67,column:28},end:{line:67,column:29}},loc:{start:{line:67,column:43},end:{line:73,column:9}},line:67}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:20,column:20},end:{line:20,column:71}},type:"binary-expr",locations:[{start:{line:20,column:20},end:{line:20,column:63}},{start:{line:20,column:67},end:{line:20,column:71}}],line:20},"5":{loc:{start:{line:28,column:12},end:{line:30,column:13}},type:"if",locations:[{start:{line:28,column:12},end:{line:30,column:13}},{start:{line:28,column:12},end:{line:30,column:13}}],line:28},"6":{loc:{start:{line:50,column:12},end:{line:52,column:13}},type:"if",locations:[{start:{line:50,column:12},end:{line:52,column:13}},{start:{line:50,column:12},end:{line:52,column:13}}],line:50}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/http/browser-http-client.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/data-access/http/browser-http-client.ts"],names:[],mappings:"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",sourcesContent:["import {HttpClient, IGetRequestOption, IPostRequestOption} from './http-client';\nimport HttpResponse from './http-response';\n\nconst AureliaHttpClient: any = require('aurelia-http-client').HttpClient;\n\nclass BrowserHttpClient extends HttpClient {\n\n  private client: any;\n\n  constructor({apiPrefix}: {apiPrefix: string}) {\n    super({apiPrefix});\n    this.client = new AureliaHttpClient();\n  }\n\n  public get({uri, params}: IGetRequestOption): Promise<HttpResponse> {\n    try {\n      let res = super.get({uri, params});\n      if (res !== null) {\n        return Promise.resolve(res);\n      }\n    }\n    catch (e) {\n      return <any>Promise.reject(e);\n    }\n\n    let result = this._getWithoutInterceptor({uri, params});\n    return super.responseGet(uri, result);\n  }\n\n  private _getWithoutInterceptor({uri}: IGetRequestOption): Promise<HttpResponse> {\n    let request = this.client.createRequest(this.prefix + uri)\n      .asGet()\n      .withCredentials(true)\n      .send();\n\n    return this._httpResponseAdaptor({request});\n  }\n\n  public post({uri, data, binary}: IPostRequestOption): Promise<HttpResponse> {\n    try {\n      let res = super.post({uri, data, binary});\n      if (res !== null) {\n        return Promise.resolve(res);\n      }\n    }\n    catch (e) {\n      return <any>Promise.reject(e);\n    }\n\n    let request = this.client.createRequest(this.prefix + uri)\n      .asPost()\n      .withContent(data)\n      .withCredentials(true)\n      .send();\n\n    let result = this._httpResponseAdaptor({request});\n    return super.responsePost(uri, result);\n  }\n\n  private _httpResponseAdaptor({request}: {request: any}): Promise<HttpResponse> {\n    return request.then((res: any) => {\n      return new HttpResponse({\n        statusCode: res.statusCode,\n        headers: [],\n        body: res.response\n      });\n    });\n  }\n}\n\nexport default BrowserHttpClient;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_13nvuqghyq.s[0]++,(cov_13nvuqghyq.b[0][0]++,this)&&(cov_13nvuqghyq.b[0][1]++,this.__extends)||(cov_13nvuqghyq.b[0][2]++,function(){cov_13nvuqghyq.f[0]++;var extendStatics=(cov_13nvuqghyq.s[1]++,(cov_13nvuqghyq.b[1][0]++,Object.setPrototypeOf)||(cov_13nvuqghyq.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_13nvuqghyq.b[1][2]++,function(d,b){cov_13nvuqghyq.f[1]++;cov_13nvuqghyq.s[2]++;d.__proto__=b;})||(cov_13nvuqghyq.b[1][3]++,function(d,b){cov_13nvuqghyq.f[2]++;cov_13nvuqghyq.s[3]++;for(var p in b){cov_13nvuqghyq.s[4]++;if(b.hasOwnProperty(p)){cov_13nvuqghyq.b[2][0]++;cov_13nvuqghyq.s[5]++;d[p]=b[p];}else{cov_13nvuqghyq.b[2][1]++;}}}));cov_13nvuqghyq.s[6]++;return function(d,b){cov_13nvuqghyq.f[3]++;cov_13nvuqghyq.s[7]++;extendStatics(d,b);function __(){cov_13nvuqghyq.f[4]++;cov_13nvuqghyq.s[8]++;this.constructor=d;}cov_13nvuqghyq.s[9]++;d.prototype=b===null?(cov_13nvuqghyq.b[3][0]++,Object.create(b)):(cov_13nvuqghyq.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_13nvuqghyq.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var http_client_1=(cov_13nvuqghyq.s[11]++,__webpack_require__(138));var http_response_1=(cov_13nvuqghyq.s[12]++,__webpack_require__(139));var AureliaHttpClient=(cov_13nvuqghyq.s[13]++,__webpack_require__(140).HttpClient);var BrowserHttpClient=(/** @class */cov_13nvuqghyq.s[14]++,function(_super){cov_13nvuqghyq.f[5]++;cov_13nvuqghyq.s[15]++;__extends(BrowserHttpClient,_super);function BrowserHttpClient(_a){cov_13nvuqghyq.f[6]++;var apiPrefix=(cov_13nvuqghyq.s[16]++,_a.apiPrefix);var _this=(cov_13nvuqghyq.s[17]++,(cov_13nvuqghyq.b[4][0]++,_super.call(this,{apiPrefix:apiPrefix}))||(cov_13nvuqghyq.b[4][1]++,this));cov_13nvuqghyq.s[18]++;_this.client=new AureliaHttpClient();cov_13nvuqghyq.s[19]++;return _this;}cov_13nvuqghyq.s[20]++;BrowserHttpClient.prototype.get=function(_a){cov_13nvuqghyq.f[7]++;var uri=(cov_13nvuqghyq.s[21]++,_a.uri),params=(cov_13nvuqghyq.s[22]++,_a.params);cov_13nvuqghyq.s[23]++;try{var res=(cov_13nvuqghyq.s[24]++,_super.prototype.get.call(this,{uri:uri,params:params}));cov_13nvuqghyq.s[25]++;if(res!==null){cov_13nvuqghyq.b[5][0]++;cov_13nvuqghyq.s[26]++;return Promise.resolve(res);}else{cov_13nvuqghyq.b[5][1]++;}}catch(e){cov_13nvuqghyq.s[27]++;return Promise.reject(e);}var result=(cov_13nvuqghyq.s[28]++,this._getWithoutInterceptor({uri:uri,params:params}));cov_13nvuqghyq.s[29]++;return _super.prototype.responseGet.call(this,uri,result);};cov_13nvuqghyq.s[30]++;BrowserHttpClient.prototype._getWithoutInterceptor=function(_a){cov_13nvuqghyq.f[8]++;var uri=(cov_13nvuqghyq.s[31]++,_a.uri);var request=(cov_13nvuqghyq.s[32]++,this.client.createRequest(this.prefix+uri).asGet().withCredentials(true).send());cov_13nvuqghyq.s[33]++;return this._httpResponseAdaptor({request:request});};cov_13nvuqghyq.s[34]++;BrowserHttpClient.prototype.post=function(_a){cov_13nvuqghyq.f[9]++;var uri=(cov_13nvuqghyq.s[35]++,_a.uri),data=(cov_13nvuqghyq.s[36]++,_a.data),binary=(cov_13nvuqghyq.s[37]++,_a.binary);cov_13nvuqghyq.s[38]++;try{var res=(cov_13nvuqghyq.s[39]++,_super.prototype.post.call(this,{uri:uri,data:data,binary:binary}));cov_13nvuqghyq.s[40]++;if(res!==null){cov_13nvuqghyq.b[6][0]++;cov_13nvuqghyq.s[41]++;return Promise.resolve(res);}else{cov_13nvuqghyq.b[6][1]++;}}catch(e){cov_13nvuqghyq.s[42]++;return Promise.reject(e);}var request=(cov_13nvuqghyq.s[43]++,this.client.createRequest(this.prefix+uri).asPost().withContent(data).withCredentials(true).send());var result=(cov_13nvuqghyq.s[44]++,this._httpResponseAdaptor({request:request}));cov_13nvuqghyq.s[45]++;return _super.prototype.responsePost.call(this,uri,result);};cov_13nvuqghyq.s[46]++;BrowserHttpClient.prototype._httpResponseAdaptor=function(_a){cov_13nvuqghyq.f[10]++;var request=(cov_13nvuqghyq.s[47]++,_a.request);cov_13nvuqghyq.s[48]++;return request.then(function(res){cov_13nvuqghyq.f[11]++;cov_13nvuqghyq.s[49]++;return new http_response_1.default({statusCode:res.statusCode,headers:[],body:res.response});});};cov_13nvuqghyq.s[50]++;return BrowserHttpClient;}(http_client_1.HttpClient));cov_13nvuqghyq.s[51]++;exports.default=BrowserHttpClient;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_2kfk79hokl=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/data-access/http/http-client.ts",hash="1df6d499ab22de9a6f82e03f8ddd76ca783f2cb6",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/http/http-client.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:32},end:{line:120,column:3}},"2":{start:{line:5,column:24},end:{line:5,column:36}},"3":{start:{line:6,column:8},end:{line:6,column:32}},"4":{start:{line:7,column:8},end:{line:7,column:42}},"5":{start:{line:8,column:8},end:{line:8,column:43}},"6":{start:{line:9,column:8},end:{line:9,column:43}},"7":{start:{line:10,column:8},end:{line:10,column:44}},"8":{start:{line:12,column:4},end:{line:21,column:6}},"9":{start:{line:13,column:8},end:{line:19,column:9}},"10":{start:{line:14,column:30},end:{line:14,column:61}},"11":{start:{line:15,column:22},end:{line:15,column:42}},"12":{start:{line:16,column:12},end:{line:18,column:13}},"13":{start:{line:17,column:16},end:{line:17,column:27}},"14":{start:{line:20,column:8},end:{line:20,column:20}},"15":{start:{line:22,column:4},end:{line:31,column:6}},"16":{start:{line:23,column:8},end:{line:29,column:9}},"17":{start:{line:24,column:30},end:{line:24,column:62}},"18":{start:{line:25,column:22},end:{line:25,column:42}},"19":{start:{line:26,column:12},end:{line:28,column:13}},"20":{start:{line:27,column:16},end:{line:27,column:27}},"21":{start:{line:30,column:8},end:{line:30,column:20}},"22":{start:{line:35,column:4},end:{line:45,column:6}},"23":{start:{line:37,column:8},end:{line:43,column:9}},"24":{start:{line:38,column:30},end:{line:38,column:36}},"25":{start:{line:39,column:22},end:{line:39,column:54}},"26":{start:{line:40,column:12},end:{line:42,column:13}},"27":{start:{line:41,column:16},end:{line:41,column:27}},"28":{start:{line:44,column:8},end:{line:44,column:23}},"29":{start:{line:49,column:4},end:{line:59,column:6}},"30":{start:{line:51,column:8},end:{line:57,column:9}},"31":{start:{line:52,column:30},end:{line:52,column:36}},"32":{start:{line:53,column:22},end:{line:53,column:54}},"33":{start:{line:54,column:12},end:{line:56,column:13}},"34":{start:{line:55,column:16},end:{line:55,column:27}},"35":{start:{line:58,column:8},end:{line:58,column:23}},"36":{start:{line:65,column:4},end:{line:76,column:6}},"37":{start:{line:66,column:20},end:{line:66,column:24}},"38":{start:{line:67,column:30},end:{line:67,column:64}},"39":{start:{line:68,column:8},end:{line:75,column:11}},"40":{start:{line:69,column:12},end:{line:74,column:13}},"41":{start:{line:70,column:16},end:{line:70,column:61}},"42":{start:{line:72,column:17},end:{line:74,column:13}},"43":{start:{line:73,column:16},end:{line:73,column:62}},"44":{start:{line:77,column:4},end:{line:88,column:6}},"45":{start:{line:78,column:20},end:{line:78,column:24}},"46":{start:{line:79,column:30},end:{line:79,column:64}},"47":{start:{line:80,column:8},end:{line:87,column:11}},"48":{start:{line:81,column:12},end:{line:86,column:13}},"49":{start:{line:82,column:16},end:{line:82,column:62}},"50":{start:{line:84,column:17},end:{line:86,column:13}},"51":{start:{line:85,column:16},end:{line:85,column:63}},"52":{start:{line:89,column:4},end:{line:114,column:6}},"53":{start:{line:90,column:20},end:{line:90,column:24}},"54":{start:{line:91,column:30},end:{line:91,column:32}},"55":{start:{line:92,column:8},end:{line:112,column:9}},"56":{start:{line:93,column:12},end:{line:98,column:13}},"57":{start:{line:94,column:16},end:{line:94,column:92}},"58":{start:{line:97,column:16},end:{line:97,column:57}},"59":{start:{line:100,column:13},end:{line:112,column:9}},"60":{start:{line:101,column:12},end:{line:108,column:15}},"61":{start:{line:102,column:16},end:{line:107,column:17}},"62":{start:{line:103,column:20},end:{line:103,column:96}},"63":{start:{line:106,column:20},end:{line:106,column:58}},"64":{start:{line:111,column:12},end:{line:111,column:97}},"65":{start:{line:113,column:8},end:{line:113,column:31}},"66":{start:{line:115,column:4},end:{line:118,column:6}},"67":{start:{line:116,column:25},end:{line:116,column:40}},"68":{start:{line:117,column:8},end:{line:117,column:47}},"69":{start:{line:119,column:4},end:{line:119,column:22}},"70":{start:{line:121,column:0},end:{line:121,column:32}},"71":{start:{line:122,column:0},end:{line:122,column:29}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:32},end:{line:3,column:33}},loc:{start:{line:3,column:44},end:{line:120,column:1}},line:3},"1":{name:"HttpClient",decl:{start:{line:4,column:13},end:{line:4,column:23}},loc:{start:{line:4,column:28},end:{line:11,column:5}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:12,column:31},end:{line:12,column:32}},loc:{start:{line:12,column:50},end:{line:21,column:5}},line:12},"3":{name:"(anonymous_3)",decl:{start:{line:22,column:32},end:{line:22,column:33}},loc:{start:{line:22,column:51},end:{line:31,column:5}},line:22},"4":{name:"(anonymous_4)",decl:{start:{line:35,column:39},end:{line:35,column:40}},loc:{start:{line:35,column:70},end:{line:45,column:5}},line:35},"5":{name:"(anonymous_5)",decl:{start:{line:49,column:40},end:{line:49,column:41}},loc:{start:{line:49,column:71},end:{line:59,column:5}},line:49},"6":{name:"(anonymous_6)",decl:{start:{line:65,column:54},end:{line:65,column:55}},loc:{start:{line:65,column:80},end:{line:76,column:5}},line:65},"7":{name:"(anonymous_7)",decl:{start:{line:68,column:32},end:{line:68,column:33}},loc:{start:{line:68,column:45},end:{line:75,column:9}},line:68},"8":{name:"(anonymous_8)",decl:{start:{line:77,column:55},end:{line:77,column:56}},loc:{start:{line:77,column:81},end:{line:88,column:5}},line:77},"9":{name:"(anonymous_9)",decl:{start:{line:80,column:32},end:{line:80,column:33}},loc:{start:{line:80,column:45},end:{line:87,column:9}},line:80},"10":{name:"(anonymous_10)",decl:{start:{line:89,column:51},end:{line:89,column:52}},loc:{start:{line:89,column:67},end:{line:114,column:5}},line:89},"11":{name:"(anonymous_11)",decl:{start:{line:101,column:25},end:{line:101,column:26}},loc:{start:{line:101,column:38},end:{line:108,column:13}},line:101},"12":{name:"(anonymous_12)",decl:{start:{line:115,column:51},end:{line:115,column:52}},loc:{start:{line:115,column:67},end:{line:118,column:5}},line:115}},branchMap:{"0":{loc:{start:{line:16,column:12},end:{line:18,column:13}},type:"if",locations:[{start:{line:16,column:12},end:{line:18,column:13}},{start:{line:16,column:12},end:{line:18,column:13}}],line:16},"1":{loc:{start:{line:16,column:16},end:{line:16,column:60}},type:"binary-expr",locations:[{start:{line:16,column:16},end:{line:16,column:28}},{start:{line:16,column:33},end:{line:16,column:59}}],line:16},"2":{loc:{start:{line:26,column:12},end:{line:28,column:13}},type:"if",locations:[{start:{line:26,column:12},end:{line:28,column:13}},{start:{line:26,column:12},end:{line:28,column:13}}],line:26},"3":{loc:{start:{line:26,column:16},end:{line:26,column:60}},type:"binary-expr",locations:[{start:{line:26,column:16},end:{line:26,column:28}},{start:{line:26,column:33},end:{line:26,column:59}}],line:26},"4":{loc:{start:{line:40,column:12},end:{line:42,column:13}},type:"if",locations:[{start:{line:40,column:12},end:{line:42,column:13}},{start:{line:40,column:12},end:{line:42,column:13}}],line:40},"5":{loc:{start:{line:54,column:12},end:{line:56,column:13}},type:"if",locations:[{start:{line:54,column:12},end:{line:56,column:13}},{start:{line:54,column:12},end:{line:56,column:13}}],line:54},"6":{loc:{start:{line:69,column:12},end:{line:74,column:13}},type:"if",locations:[{start:{line:69,column:12},end:{line:74,column:13}},{start:{line:69,column:12},end:{line:74,column:13}}],line:69},"7":{loc:{start:{line:72,column:17},end:{line:74,column:13}},type:"if",locations:[{start:{line:72,column:17},end:{line:74,column:13}},{start:{line:72,column:17},end:{line:74,column:13}}],line:72},"8":{loc:{start:{line:81,column:12},end:{line:86,column:13}},type:"if",locations:[{start:{line:81,column:12},end:{line:86,column:13}},{start:{line:81,column:12},end:{line:86,column:13}}],line:81},"9":{loc:{start:{line:84,column:17},end:{line:86,column:13}},type:"if",locations:[{start:{line:84,column:17},end:{line:86,column:13}},{start:{line:84,column:17},end:{line:86,column:13}}],line:84},"10":{loc:{start:{line:92,column:8},end:{line:112,column:9}},type:"if",locations:[{start:{line:92,column:8},end:{line:112,column:9}},{start:{line:92,column:8},end:{line:112,column:9}}],line:92},"11":{loc:{start:{line:93,column:12},end:{line:98,column:13}},type:"if",locations:[{start:{line:93,column:12},end:{line:98,column:13}},{start:{line:93,column:12},end:{line:98,column:13}}],line:93},"12":{loc:{start:{line:100,column:13},end:{line:112,column:9}},type:"if",locations:[{start:{line:100,column:13},end:{line:112,column:9}},{start:{line:100,column:13},end:{line:112,column:9}}],line:100},"13":{loc:{start:{line:102,column:16},end:{line:107,column:17}},type:"if",locations:[{start:{line:102,column:16},end:{line:107,column:17}},{start:{line:102,column:16},end:{line:107,column:17}}],line:102}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/http/http-client.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/data-access/http/http-client.ts"],names:[],mappings:"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",sourcesContent:["import HttpResponse from './http-response';\n\nexport interface IRequestOption {\n  uri: string;\n}\n\nexport interface IGetRequestOption extends IRequestOption {\n  params?: any;\n}\n\nexport interface IPostRequestOption extends IRequestOption {\n  data?: any;\n  binary?: boolean;\n}\n\nexport type RequestInterceptor<T extends IRequestOption> = (options: T) => any;\nexport type ResponseInterceptor = (requestUri: string, promise: Promise<HttpResponse>) => Promise<HttpResponse>;\n\nexport abstract class HttpClient {\n\n  public prefix: string;\n\n  private _getRequestInterceptors: RequestInterceptor<IGetRequestOption>[];\n  private _postRequestInterceptors: RequestInterceptor<IPostRequestOption>[];\n  private _getResponseInterceptors: ResponseInterceptor[];\n  private _postResponseInterceptors: ResponseInterceptor[];\n\n  constructor({apiPrefix}: {apiPrefix: string}) {\n    this.prefix = apiPrefix;\n\n    this._getRequestInterceptors = [];\n    this._postRequestInterceptors = [];\n    this._getResponseInterceptors = [];\n    this._postResponseInterceptors = [];\n  }\n\n  public get(options: IGetRequestOption): Promise<HttpResponse> {\n    for (let i = 0; i < this._getRequestInterceptors.length; i++) {\n      let interceptor = this._getRequestInterceptors[i];\n      let res = interceptor(options);\n\n      if (res !== null && (typeof res !== 'undefined')) {\n        return res;\n      }\n    }\n\n    return null;\n  }\n\n  public post(options: IPostRequestOption): Promise<HttpResponse> {\n    for (let i = 0; i < this._postRequestInterceptors.length; i++) {\n      let interceptor = this._postRequestInterceptors[i];\n      let res = interceptor(options);\n\n      if (res !== null && (typeof res !== 'undefined')) {\n        return res;\n      }\n    }\n\n    return null;\n  }\n\n  /**\n   * @return {Promise} Returns either the underlying HTTP request result, or the promise returned by the interceptor if any\n   */\n  protected responseGet(requestUri: string, promise: Promise<HttpResponse>): Promise<HttpResponse> {\n    //Execute response interceptors\n\n    for (let interceptor of this._getResponseInterceptors) {\n      let res = interceptor(requestUri, promise);\n\n      if (res) {\n        return res;\n      }\n    }\n\n    return promise;\n  }\n\n  /**\n   * @return {Promise} Returns either the underlying HTTP request result, or the promise returned by the interceptor if any\n   */\n  protected responsePost(requestUri: string, promise: Promise<HttpResponse>): Promise<HttpResponse> {\n    //Execute response interceptors\n    for (let interceptor of this._postResponseInterceptors) {\n      let res = interceptor(requestUri, promise);\n\n      if (res) {\n        return res;\n      }\n    }\n\n    return promise;\n  }\n\n  /**\n   * @param {array|string} type - HTTP verb of the request to intercept\n   * @param {function} callback - The interceptor function to execute before HTTP request. If it returns something different than null, the underlying HTTP request won't be executed\n   * @returns {null|object} Returns null or an object, if an object is returned, the underlying HTTP request won't be executed\n   */\n  public registerRequestInterceptor(type: string|string[], callback: RequestInterceptor<IRequestOption>) {\n\n    let interceptorType = this._interceptorTypeToArray(type);\n\n    interceptorType.forEach(t => {\n      if (t === 'get') {\n        this._getRequestInterceptors.push(callback);\n      }\n      else if (t === 'post') {\n        this._postRequestInterceptors.push(callback);\n      }\n    });\n  }\n\n  public registerResponseInterceptor(type: string|string[], callback: ResponseInterceptor) {\n\n    let interceptorType = this._interceptorTypeToArray(type);\n\n    interceptorType.forEach(t => {\n      if (t === 'get') {\n        this._getResponseInterceptors.push(callback);\n      }\n      else if (t === 'post') {\n        this._postResponseInterceptors.push(callback);\n      }\n    });\n  }\n\n  private _interceptorTypeToArray(type: string|string[]): string[] {\n    let interceptorType: string[] = [];\n\n    if (typeof type === 'string') {\n      if (!this._isValidInterceptorType(type.toLowerCase())) {\n        throw new Error('HttpClient.registerInterceptor: invalid interceptor type');\n      }\n      else {\n        interceptorType.push(type.toLowerCase());\n      }\n    }\n    else if (Array.isArray(type)) {\n      type.forEach(t => {\n        if (!this._isValidInterceptorType(t.toLowerCase())) {\n          throw new Error('HttpClient.registerInterceptor: invalid interceptor type');\n        }\n        else {\n          interceptorType.push(t.toLowerCase());\n        }\n      });\n    }\n    else {\n      throw new Error('HttpClient.registerInterceptor: type must be a string or an array');\n    }\n\n    return interceptorType;\n  }\n\n  private _isValidInterceptorType(type: string): boolean {\n    let validTypes = ['get', 'post'];\n\n    return validTypes.indexOf(type) !== -1;\n  }\n}\n\nexport default HttpClient;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_2kfk79hokl.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var HttpClient=(/** @class */cov_2kfk79hokl.s[1]++,function(){cov_2kfk79hokl.f[0]++;function HttpClient(_a){cov_2kfk79hokl.f[1]++;var apiPrefix=(cov_2kfk79hokl.s[2]++,_a.apiPrefix);cov_2kfk79hokl.s[3]++;this.prefix=apiPrefix;cov_2kfk79hokl.s[4]++;this._getRequestInterceptors=[];cov_2kfk79hokl.s[5]++;this._postRequestInterceptors=[];cov_2kfk79hokl.s[6]++;this._getResponseInterceptors=[];cov_2kfk79hokl.s[7]++;this._postResponseInterceptors=[];}cov_2kfk79hokl.s[8]++;HttpClient.prototype.get=function(options){cov_2kfk79hokl.f[2]++;cov_2kfk79hokl.s[9]++;for(var i=0;i<this._getRequestInterceptors.length;i++){var interceptor=(cov_2kfk79hokl.s[10]++,this._getRequestInterceptors[i]);var res=(cov_2kfk79hokl.s[11]++,interceptor(options));cov_2kfk79hokl.s[12]++;if((cov_2kfk79hokl.b[1][0]++,res!==null)&&(cov_2kfk79hokl.b[1][1]++,typeof res!=='undefined')){cov_2kfk79hokl.b[0][0]++;cov_2kfk79hokl.s[13]++;return res;}else{cov_2kfk79hokl.b[0][1]++;}}cov_2kfk79hokl.s[14]++;return null;};cov_2kfk79hokl.s[15]++;HttpClient.prototype.post=function(options){cov_2kfk79hokl.f[3]++;cov_2kfk79hokl.s[16]++;for(var i=0;i<this._postRequestInterceptors.length;i++){var interceptor=(cov_2kfk79hokl.s[17]++,this._postRequestInterceptors[i]);var res=(cov_2kfk79hokl.s[18]++,interceptor(options));cov_2kfk79hokl.s[19]++;if((cov_2kfk79hokl.b[3][0]++,res!==null)&&(cov_2kfk79hokl.b[3][1]++,typeof res!=='undefined')){cov_2kfk79hokl.b[2][0]++;cov_2kfk79hokl.s[20]++;return res;}else{cov_2kfk79hokl.b[2][1]++;}}cov_2kfk79hokl.s[21]++;return null;};/**
     * @return {Promise} Returns either the underlying HTTP request result, or the promise returned by the interceptor if any
     */cov_2kfk79hokl.s[22]++;HttpClient.prototype.responseGet=function(requestUri,promise){cov_2kfk79hokl.f[4]++;cov_2kfk79hokl.s[23]++;//Execute response interceptors
for(var _i=0,_a=this._getResponseInterceptors;_i<_a.length;_i++){var interceptor=(cov_2kfk79hokl.s[24]++,_a[_i]);var res=(cov_2kfk79hokl.s[25]++,interceptor(requestUri,promise));cov_2kfk79hokl.s[26]++;if(res){cov_2kfk79hokl.b[4][0]++;cov_2kfk79hokl.s[27]++;return res;}else{cov_2kfk79hokl.b[4][1]++;}}cov_2kfk79hokl.s[28]++;return promise;};/**
     * @return {Promise} Returns either the underlying HTTP request result, or the promise returned by the interceptor if any
     */cov_2kfk79hokl.s[29]++;HttpClient.prototype.responsePost=function(requestUri,promise){cov_2kfk79hokl.f[5]++;cov_2kfk79hokl.s[30]++;//Execute response interceptors
for(var _i=0,_a=this._postResponseInterceptors;_i<_a.length;_i++){var interceptor=(cov_2kfk79hokl.s[31]++,_a[_i]);var res=(cov_2kfk79hokl.s[32]++,interceptor(requestUri,promise));cov_2kfk79hokl.s[33]++;if(res){cov_2kfk79hokl.b[5][0]++;cov_2kfk79hokl.s[34]++;return res;}else{cov_2kfk79hokl.b[5][1]++;}}cov_2kfk79hokl.s[35]++;return promise;};/**
     * @param {array|string} type - HTTP verb of the request to intercept
     * @param {function} callback - The interceptor function to execute before HTTP request. If it returns something different than null, the underlying HTTP request won't be executed
     * @returns {null|object} Returns null or an object, if an object is returned, the underlying HTTP request won't be executed
     */cov_2kfk79hokl.s[36]++;HttpClient.prototype.registerRequestInterceptor=function(type,callback){cov_2kfk79hokl.f[6]++;var _this=(cov_2kfk79hokl.s[37]++,this);var interceptorType=(cov_2kfk79hokl.s[38]++,this._interceptorTypeToArray(type));cov_2kfk79hokl.s[39]++;interceptorType.forEach(function(t){cov_2kfk79hokl.f[7]++;cov_2kfk79hokl.s[40]++;if(t==='get'){cov_2kfk79hokl.b[6][0]++;cov_2kfk79hokl.s[41]++;_this._getRequestInterceptors.push(callback);}else{cov_2kfk79hokl.b[6][1]++;cov_2kfk79hokl.s[42]++;if(t==='post'){cov_2kfk79hokl.b[7][0]++;cov_2kfk79hokl.s[43]++;_this._postRequestInterceptors.push(callback);}else{cov_2kfk79hokl.b[7][1]++;}}});};cov_2kfk79hokl.s[44]++;HttpClient.prototype.registerResponseInterceptor=function(type,callback){cov_2kfk79hokl.f[8]++;var _this=(cov_2kfk79hokl.s[45]++,this);var interceptorType=(cov_2kfk79hokl.s[46]++,this._interceptorTypeToArray(type));cov_2kfk79hokl.s[47]++;interceptorType.forEach(function(t){cov_2kfk79hokl.f[9]++;cov_2kfk79hokl.s[48]++;if(t==='get'){cov_2kfk79hokl.b[8][0]++;cov_2kfk79hokl.s[49]++;_this._getResponseInterceptors.push(callback);}else{cov_2kfk79hokl.b[8][1]++;cov_2kfk79hokl.s[50]++;if(t==='post'){cov_2kfk79hokl.b[9][0]++;cov_2kfk79hokl.s[51]++;_this._postResponseInterceptors.push(callback);}else{cov_2kfk79hokl.b[9][1]++;}}});};cov_2kfk79hokl.s[52]++;HttpClient.prototype._interceptorTypeToArray=function(type){cov_2kfk79hokl.f[10]++;var _this=(cov_2kfk79hokl.s[53]++,this);var interceptorType=(cov_2kfk79hokl.s[54]++,[]);cov_2kfk79hokl.s[55]++;if(typeof type==='string'){cov_2kfk79hokl.b[10][0]++;cov_2kfk79hokl.s[56]++;if(!this._isValidInterceptorType(type.toLowerCase())){cov_2kfk79hokl.b[11][0]++;cov_2kfk79hokl.s[57]++;throw new Error('HttpClient.registerInterceptor: invalid interceptor type');}else{cov_2kfk79hokl.b[11][1]++;cov_2kfk79hokl.s[58]++;interceptorType.push(type.toLowerCase());}}else{cov_2kfk79hokl.b[10][1]++;cov_2kfk79hokl.s[59]++;if(Array.isArray(type)){cov_2kfk79hokl.b[12][0]++;cov_2kfk79hokl.s[60]++;type.forEach(function(t){cov_2kfk79hokl.f[11]++;cov_2kfk79hokl.s[61]++;if(!_this._isValidInterceptorType(t.toLowerCase())){cov_2kfk79hokl.b[13][0]++;cov_2kfk79hokl.s[62]++;throw new Error('HttpClient.registerInterceptor: invalid interceptor type');}else{cov_2kfk79hokl.b[13][1]++;cov_2kfk79hokl.s[63]++;interceptorType.push(t.toLowerCase());}});}else{cov_2kfk79hokl.b[12][1]++;cov_2kfk79hokl.s[64]++;throw new Error('HttpClient.registerInterceptor: type must be a string or an array');}}cov_2kfk79hokl.s[65]++;return interceptorType;};cov_2kfk79hokl.s[66]++;HttpClient.prototype._isValidInterceptorType=function(type){cov_2kfk79hokl.f[12]++;var validTypes=(cov_2kfk79hokl.s[67]++,['get','post']);cov_2kfk79hokl.s[68]++;return validTypes.indexOf(type)!==-1;};cov_2kfk79hokl.s[69]++;return HttpClient;}());cov_2kfk79hokl.s[70]++;exports.HttpClient=HttpClient;cov_2kfk79hokl.s[71]++;exports.default=HttpClient;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_11yvwlzav1=function(){var path="/Users/hamza/Documents/wakanda-javascript-client/src/data-access/http/http-response.ts",hash="acca48e00e99ebf90ec2f5cfb8d4071cc48f0db3",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/http/http-response.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:34},end:{line:11,column:3}},"2":{start:{line:5,column:25},end:{line:5,column:38}},"3":{start:{line:5,column:50},end:{line:5,column:60}},"4":{start:{line:5,column:69},end:{line:5,column:76}},"5":{start:{line:6,column:8},end:{line:6,column:37}},"6":{start:{line:7,column:8},end:{line:7,column:37}},"7":{start:{line:8,column:8},end:{line:8,column:25}},"8":{start:{line:10,column:4},end:{line:10,column:24}},"9":{start:{line:12,column:0},end:{line:12,column:31}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:34},end:{line:3,column:35}},loc:{start:{line:3,column:46},end:{line:11,column:1}},line:3},"1":{name:"HttpResponse",decl:{start:{line:4,column:13},end:{line:4,column:25}},loc:{start:{line:4,column:30},end:{line:9,column:5}},line:4}},branchMap:{"0":{loc:{start:{line:7,column:23},end:{line:7,column:36}},type:"binary-expr",locations:[{start:{line:7,column:23},end:{line:7,column:30}},{start:{line:7,column:34},end:{line:7,column:36}}],line:7}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},f:{"0":0,"1":0},b:{"0":[0,0]},inputSourceMap:{version:3,file:"/Users/hamza/Documents/wakanda-javascript-client/src/data-access/http/http-response.ts",sourceRoot:"",sources:["/Users/hamza/Documents/wakanda-javascript-client/node_modules/tslint-loader/index.js??ref--0!/Users/hamza/Documents/wakanda-javascript-client/src/data-access/http/http-response.ts"],names:[],mappings:";;AAAA;IAME,sBAAY,EACwC;YADvC,0BAAU,EAAE,oBAAO,EAAE,cAAI;QAEpC,IAAI,CAAC,UAAU,GAAG,UAAU,CAAC;QAC7B,IAAI,CAAC,OAAO,GAAG,OAAO,IAAI,EAAE,CAAC;QAC7B,IAAI,CAAC,IAAI,GAAG,IAAI,CAAC;IACnB,CAAC;IACH,mBAAC;AAAD,CAAC,AAZD,IAYC;AAED,kBAAe,YAAY,CAAC",sourcesContent:["class HttpResponse {\n\n  public statusCode: number;\n  public headers: any[];\n  public body: string;\n\n  constructor({statusCode, headers, body}:\n    {statusCode: number, headers: any[], body: string}) {\n    this.statusCode = statusCode;\n    this.headers = headers || [];\n    this.body = body;\n  }\n}\n\nexport default HttpResponse;\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_11yvwlzav1.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var HttpResponse=(/** @class */cov_11yvwlzav1.s[1]++,function(){cov_11yvwlzav1.f[0]++;function HttpResponse(_a){cov_11yvwlzav1.f[1]++;var statusCode=(cov_11yvwlzav1.s[2]++,_a.statusCode),headers=(cov_11yvwlzav1.s[3]++,_a.headers),body=(cov_11yvwlzav1.s[4]++,_a.body);cov_11yvwlzav1.s[5]++;this.statusCode=statusCode;cov_11yvwlzav1.s[6]++;this.headers=(cov_11yvwlzav1.b[0][0]++,headers)||(cov_11yvwlzav1.b[0][1]++,[]);cov_11yvwlzav1.s[7]++;this.body=body;}cov_11yvwlzav1.s[8]++;return HttpResponse;}());cov_11yvwlzav1.s[9]++;exports.default=HttpResponse;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _httpClient = __webpack_require__(141);

Object.defineProperty(exports, 'HttpClient', {
  enumerable: true,
  get: function get() {
    return _httpClient.HttpClient;
  }
});

var _httpRequestMessage = __webpack_require__(41);

Object.defineProperty(exports, 'HttpRequestMessage', {
  enumerable: true,
  get: function get() {
    return _httpRequestMessage.HttpRequestMessage;
  }
});

var _httpResponseMessage = __webpack_require__(78);

Object.defineProperty(exports, 'HttpResponseMessage', {
  enumerable: true,
  get: function get() {
    return _httpResponseMessage.HttpResponseMessage;
  }
});

var _jsonpRequestMessage = __webpack_require__(42);

Object.defineProperty(exports, 'JSONPRequestMessage', {
  enumerable: true,
  get: function get() {
    return _jsonpRequestMessage.JSONPRequestMessage;
  }
});

var _headers = __webpack_require__(18);

Object.defineProperty(exports, 'Headers', {
  enumerable: true,
  get: function get() {
    return _headers.Headers;
  }
});

var _requestBuilder = __webpack_require__(75);

Object.defineProperty(exports, 'RequestBuilder', {
  enumerable: true,
  get: function get() {
    return _requestBuilder.RequestBuilder;
  }
});

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HttpClient = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _headers = __webpack_require__(18);

var _requestBuilder = __webpack_require__(75);

var _httpRequestMessage = __webpack_require__(41);

var _jsonpRequestMessage = __webpack_require__(42);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function trackRequestStart(client, processor) {
  client.pendingRequests.push(processor);
  client.isRequesting = true;
}

function trackRequestEnd(client, processor) {
  var index = client.pendingRequests.indexOf(processor);

  client.pendingRequests.splice(index, 1);
  client.isRequesting = client.pendingRequests.length > 0;

  if (!client.isRequesting) {
    var evt = new window.CustomEvent('aurelia-http-client-requests-drained', { bubbles: true, cancelable: true });
    setTimeout(function () {
      return document.dispatchEvent(evt);
    }, 1);
  }
}

/**
* The main HTTP client object.
*
* @class HttpClient
* @constructor
*/

var HttpClient = exports.HttpClient = function () {
  function HttpClient() {
    _classCallCheck(this, HttpClient);

    this.requestTransformers = [];
    this.requestProcessorFactories = new Map();
    this.requestProcessorFactories.set(_httpRequestMessage.HttpRequestMessage, _httpRequestMessage.createHttpRequestMessageProcessor);
    this.requestProcessorFactories.set(_jsonpRequestMessage.JSONPRequestMessage, _jsonpRequestMessage.createJSONPRequestMessageProcessor);
    this.pendingRequests = [];
    this.isRequesting = false;
  }

  /**
   * Configure this HttpClient with default settings to be used by all requests.
   *
   * @method configure
   * @param {Function} fn A function that takes a RequestBuilder as an argument.
   * @chainable
   */


  _createClass(HttpClient, [{
    key: 'configure',
    value: function configure(fn) {
      var builder = new _requestBuilder.RequestBuilder(this);
      fn(builder);
      this.requestTransformers = builder.transformers;
      return this;
    }

    /**
     * Returns a new RequestBuilder for this HttpClient instance that can be used to build and send HTTP requests.
     *
     * @method createRequest
     * @param uri The target URI.
     * @type RequestBuilder
     */

  }, {
    key: 'createRequest',
    value: function createRequest(uri) {
      var builder = new _requestBuilder.RequestBuilder(this);

      if (uri) {
        builder.withUri(uri);
      }

      return builder;
    }

    /**
     * Sends a message using the underlying networking stack.
     *
     * @method send
     * @param message A configured HttpRequestMessage or JSONPRequestMessage.
     * @param {Array} transformers A collection of transformers to apply to the HTTP request.
     * @return {Promise} A cancellable promise object.
     */

  }, {
    key: 'send',
    value: function send(message, transformers) {
      var _this = this;

      var createProcessor = this.requestProcessorFactories.get(message.constructor),
          processor,
          promise,
          i,
          ii;

      if (!createProcessor) {
        throw new Error('No request message processor factory for ' + message.constructor + '.');
      }

      processor = createProcessor();
      trackRequestStart(this, processor);

      transformers = transformers || this.requestTransformers;

      for (i = 0, ii = transformers.length; i < ii; ++i) {
        transformers[i](this, processor, message);
      }

      promise = processor.process(this, message);

      promise.abort = promise.cancel = function () {
        processor.abort();
      };

      return promise.then(function (response) {
        trackRequestEnd(_this, processor);
        return response;
      }).catch(function (response) {
        trackRequestEnd(_this, processor);
        throw response;
      });
    }

    /**
     * Sends an HTTP DELETE request.
     *
     * @method delete
     * @param {String} uri The target URI.
     * @return {Promise} A cancellable promise object.
     */

  }, {
    key: 'delete',
    value: function _delete(uri) {
      return this.createRequest(uri).asDelete().send();
    }

    /**
     * Sends an HTTP GET request.
     *
     * @method get
     * @param {String} uri The target URI.
     * @return {Promise} A cancellable promise object.
     */

  }, {
    key: 'get',
    value: function get(uri) {
      return this.createRequest(uri).asGet().send();
    }

    /**
     * Sends an HTTP HEAD request.
     *
     * @method head
     * @param {String} uri The target URI.
     * @return {Promise} A cancellable promise object.
     */

  }, {
    key: 'head',
    value: function head(uri) {
      return this.createRequest(uri).asHead().send();
    }

    /**
     * Sends a JSONP request.
     *
     * @method jsonp
     * @param {String} uri The target URI.
     * @return {Promise} A cancellable promise object.
     */

  }, {
    key: 'jsonp',
    value: function jsonp(uri) {
      var callbackParameterName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'jsoncallback';

      return this.createRequest(uri).asJsonp(callbackParameterName).send();
    }

    /**
     * Sends an HTTP OPTIONS request.
     *
     * @method options
     * @param {String} uri The target URI.
     * @return {Promise} A cancellable promise object.
     */

  }, {
    key: 'options',
    value: function options(uri) {
      return this.createRequest(uri).asOptions().send();
    }

    /**
     * Sends an HTTP PUT request.
     *
     * @method put
     * @param {String} uri The target URI.
     * @param {Object} uri The request payload.
     * @return {Promise} A cancellable promise object.
     */

  }, {
    key: 'put',
    value: function put(uri, content) {
      return this.createRequest(uri).asPut().withContent(content).send();
    }

    /**
     * Sends an HTTP PATCH request.
     *
     * @method patch
     * @param {String} uri The target URI.
     * @param {Object} uri The request payload.
     * @return {Promise} A cancellable promise object.
     */

  }, {
    key: 'patch',
    value: function patch(uri, content) {
      return this.createRequest(uri).asPatch().withContent(content).send();
    }

    /**
     * Sends an HTTP POST request.
     *
     * @method post
     * @param {String} uri The target URI.
     * @param {Object} uri The request payload.
     * @return {Promise} A cancellable promise object.
     */

  }, {
    key: 'post',
    value: function post(uri, content) {
      return this.createRequest(uri).asPost().withContent(content).send();
    }
  }]);

  return HttpClient;
}();

/***/ })
/******/ ]);
});
//# sourceMappingURL=karma.wakanda-client.js.map