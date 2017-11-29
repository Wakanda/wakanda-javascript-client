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
var cov_1ur1aelk56=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\abstract-business.ts",hash="8d5772534bb993923571d7bfe707680848d435b3",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\abstract-business.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:38},end:{line:9,column:3}},"2":{start:{line:5,column:21},end:{line:5,column:30}},"3":{start:{line:6,column:8},end:{line:6,column:29}},"4":{start:{line:8,column:4},end:{line:8,column:28}},"5":{start:{line:10,column:0},end:{line:10,column:35}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:38},end:{line:3,column:39}},loc:{start:{line:3,column:50},end:{line:9,column:1}},line:3},"1":{name:"AbstractBusiness",decl:{start:{line:4,column:13},end:{line:4,column:29}},loc:{start:{line:4,column:34},end:{line:7,column:5}},line:4}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},f:{"0":0,"1":0},b:{},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\abstract-business.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\abstract-business.ts"],names:[],mappings:";;AAEA;IAIE,0BAAY,EAAiC;YAAhC,kBAAM;QACjB,IAAI,CAAC,MAAM,GAAG,MAAM,CAAC;IACvB,CAAC;IACH,uBAAC;AAAD,CAAC,AAPD,IAOC;AAED,kBAAe,gBAAgB,CAAC",sourcesContent:["import WakandaClient from '../wakanda-client';\r\n\r\nabstract class AbstractBusiness {\r\n\r\n  public wakJSC: WakandaClient;\r\n\r\n  constructor({wakJSC}: {wakJSC: WakandaClient}) {\r\n    this.wakJSC = wakJSC;\r\n  }\r\n}\r\n\r\nexport default AbstractBusiness;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1ur1aelk56.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var AbstractBusiness=(/** @class */cov_1ur1aelk56.s[1]++,function(){cov_1ur1aelk56.f[0]++;function AbstractBusiness(_a){cov_1ur1aelk56.f[1]++;var wakJSC=(cov_1ur1aelk56.s[2]++,_a.wakJSC);cov_1ur1aelk56.s[3]++;this.wakJSC=wakJSC;}cov_1ur1aelk56.s[4]++;return AbstractBusiness;}());cov_1ur1aelk56.s[5]++;exports.default=AbstractBusiness;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_l83298qy7=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\abstract-service.ts",hash="272eccda20ed3a9da8a3f6ba7e557848455e3284",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\abstract-service.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:37},end:{line:10,column:3}},"2":{start:{line:5,column:21},end:{line:5,column:30}},"3":{start:{line:6,column:8},end:{line:6,column:29}},"4":{start:{line:7,column:8},end:{line:7,column:45}},"5":{start:{line:9,column:4},end:{line:9,column:27}},"6":{start:{line:11,column:0},end:{line:11,column:34}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:37},end:{line:3,column:38}},loc:{start:{line:3,column:49},end:{line:10,column:1}},line:3},"1":{name:"AbstractService",decl:{start:{line:4,column:13},end:{line:4,column:28}},loc:{start:{line:4,column:33},end:{line:8,column:5}},line:4}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},f:{"0":0,"1":0},b:{},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\abstract-service.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\abstract-service.ts"],names:[],mappings:";;AAGA;IAKE,yBAAY,EAAiC;YAAhC,kBAAM;QACjB,IAAI,CAAC,MAAM,GAAG,MAAM,CAAC;QACrB,IAAI,CAAC,UAAU,GAAG,MAAM,CAAC,WAAW,CAAC;IACvC,CAAC;IACH,sBAAC;AAAD,CAAC,AATD,IASC;AAED,kBAAe,eAAe,CAAC",sourcesContent:["import WakandaClient from '../../wakanda-client';\r\nimport HttpClient from '../http/http-client';\r\n\r\nabstract class AbstractService {\r\n\r\n  protected httpClient: HttpClient;\r\n  protected wakJSC: WakandaClient;\r\n\r\n  constructor({wakJSC}: {wakJSC: WakandaClient}) {\r\n    this.wakJSC = wakJSC;\r\n    this.httpClient = wakJSC._httpClient;\r\n  }\r\n}\r\n\r\nexport default AbstractService;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_l83298qy7.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var AbstractService=(/** @class */cov_l83298qy7.s[1]++,function(){cov_l83298qy7.f[0]++;function AbstractService(_a){cov_l83298qy7.f[1]++;var wakJSC=(cov_l83298qy7.s[2]++,_a.wakJSC);cov_l83298qy7.s[3]++;this.wakJSC=wakJSC;cov_l83298qy7.s[4]++;this.httpClient=wakJSC._httpClient;}cov_l83298qy7.s[5]++;return AbstractService;}());cov_l83298qy7.s[6]++;exports.default=AbstractService;

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
var cov_1fzwfhxioa=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\presentation\\dataclass.ts",hash="275bf0f9ae05ad825d365fc971d66bf225c3878f",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\presentation\\dataclass.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:31},end:{line:22,column:3}},"12":{start:{line:15,column:19},end:{line:15,column:26}},"13":{start:{line:15,column:45},end:{line:15,column:62}},"14":{start:{line:15,column:77},end:{line:15,column:90}},"15":{start:{line:15,column:102},end:{line:15,column:112}},"16":{start:{line:16,column:8},end:{line:16,column:25}},"17":{start:{line:17,column:8},end:{line:17,column:45}},"18":{start:{line:18,column:8},end:{line:18,column:37}},"19":{start:{line:19,column:8},end:{line:19,column:31}},"20":{start:{line:21,column:4},end:{line:21,column:21}},"21":{start:{line:23,column:0},end:{line:23,column:30}},"22":{start:{line:24,column:31},end:{line:34,column:3}},"23":{start:{line:26,column:19},end:{line:26,column:26}},"24":{start:{line:26,column:35},end:{line:26,column:42}},"25":{start:{line:26,column:55},end:{line:26,column:66}},"26":{start:{line:26,column:75},end:{line:26,column:82}},"27":{start:{line:26,column:97},end:{line:26,column:110}},"28":{start:{line:27,column:8},end:{line:27,column:25}},"29":{start:{line:28,column:8},end:{line:28,column:25}},"30":{start:{line:29,column:8},end:{line:29,column:42}},"31":{start:{line:30,column:8},end:{line:30,column:25}},"32":{start:{line:31,column:8},end:{line:31,column:37}},"33":{start:{line:33,column:4},end:{line:33,column:21}},"34":{start:{line:35,column:0},end:{line:35,column:30}},"35":{start:{line:36,column:38},end:{line:42,column:12}},"36":{start:{line:37,column:4},end:{line:37,column:40}},"37":{start:{line:39,column:8},end:{line:39,column:72}},"38":{start:{line:41,column:4},end:{line:41,column:28}},"39":{start:{line:43,column:0},end:{line:43,column:44}},"40":{start:{line:44,column:41},end:{line:53,column:12}},"41":{start:{line:45,column:4},end:{line:45,column:43}},"42":{start:{line:47,column:19},end:{line:47,column:26}},"43":{start:{line:47,column:35},end:{line:47,column:42}},"44":{start:{line:47,column:55},end:{line:47,column:66}},"45":{start:{line:47,column:75},end:{line:47,column:82}},"46":{start:{line:47,column:97},end:{line:47,column:110}},"47":{start:{line:48,column:20},end:{line:48,column:105}},"48":{start:{line:49,column:8},end:{line:49,column:38}},"49":{start:{line:50,column:8},end:{line:50,column:21}},"50":{start:{line:52,column:4},end:{line:52,column:31}},"51":{start:{line:54,column:0},end:{line:54,column:50}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:13,column:31},end:{line:13,column:32}},loc:{start:{line:13,column:43},end:{line:22,column:1}},line:13},"6":{name:"DataClass",decl:{start:{line:14,column:13},end:{line:14,column:22}},loc:{start:{line:14,column:27},end:{line:20,column:5}},line:14},"7":{name:"(anonymous_7)",decl:{start:{line:24,column:31},end:{line:24,column:32}},loc:{start:{line:24,column:43},end:{line:34,column:1}},line:24},"8":{name:"Attribute",decl:{start:{line:25,column:13},end:{line:25,column:22}},loc:{start:{line:25,column:27},end:{line:32,column:5}},line:25},"9":{name:"(anonymous_9)",decl:{start:{line:36,column:38},end:{line:36,column:39}},loc:{start:{line:36,column:56},end:{line:42,column:1}},line:36},"10":{name:"AttributeRelated",decl:{start:{line:38,column:13},end:{line:38,column:29}},loc:{start:{line:38,column:32},end:{line:40,column:5}},line:38},"11":{name:"(anonymous_11)",decl:{start:{line:44,column:41},end:{line:44,column:42}},loc:{start:{line:44,column:59},end:{line:53,column:1}},line:44},"12":{name:"AttributeCollection",decl:{start:{line:46,column:13},end:{line:46,column:32}},loc:{start:{line:46,column:37},end:{line:51,column:5}},line:46}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:39,column:15},end:{line:39,column:71}},type:"binary-expr",locations:[{start:{line:39,column:15},end:{line:39,column:30}},{start:{line:39,column:34},end:{line:39,column:63}},{start:{line:39,column:67},end:{line:39,column:71}}],line:39},"5":{loc:{start:{line:48,column:20},end:{line:48,column:105}},type:"binary-expr",locations:[{start:{line:48,column:20},end:{line:48,column:97}},{start:{line:48,column:101},end:{line:48,column:105}}],line:48}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0,0],"5":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\presentation\\dataclass.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\presentation\\dataclass.ts"],names:[],mappings:";;;;;;;;;;;;AAIA;IAiBE,mBAAY,EAMT;YANU,cAAI,EAAE,kCAAc,EAAE,0BAAU,EAAE,oBAAO;QAQpD,IAAI,CAAC,IAAI,GAAG,IAAI,CAAC;QACjB,IAAI,CAAC,cAAc,GAAG,cAAc,CAAC;QACrC,IAAI,CAAC,UAAU,GAAG,UAAU,CAAC;QAC7B,IAAI,CAAC,OAAO,GAAG,OAAO,CAAC;IACzB,CAAC;IACH,gBAAC;AAAD,CAAC,AA9BD,IA8BC;AA9BY,8BAAS;AAgCtB;IAQE,mBAAY,EACyE;YADxE,cAAI,EAAE,cAAI,EAAE,sBAAQ,EAAE,cAAI,EAAE,0BAAU;QAGjD,IAAI,CAAC,IAAI,GAAG,IAAI,CAAC;QACjB,IAAI,CAAC,IAAI,GAAG,IAAI,CAAC;QACjB,IAAI,CAAC,QAAQ,GAAG,QAAQ,KAAK,IAAI,CAAC;QAClC,IAAI,CAAC,IAAI,GAAG,IAAI,CAAC;QACjB,IAAI,CAAC,UAAU,GAAG,UAAU,CAAC;IAC/B,CAAC;IACH,gBAAC;AAAD,CAAC,AAjBD,IAiBC;AAjBY,8BAAS;AAmBtB;IAAsC,oCAAS;IAA/C;;IAEA,CAAC;IAAD,uBAAC;AAAD,CAAC,AAFD,CAAsC,SAAS,GAE9C;AAFY,4CAAgB;AAI7B;IAAyC,uCAAS;IAIhD,6BAAY,EACwE;YADvE,cAAI,EAAE,cAAI,EAAE,sBAAQ,EAAE,cAAI,EAAE,0BAAU;QAAnD,YAGE,kBAAM,EAAC,IAAI,MAAA,EAAE,IAAI,MAAA,EAAE,QAAQ,UAAA,EAAE,IAAI,MAAA,EAAC,CAAC,SAEpC;QADC,KAAI,CAAC,UAAU,GAAG,UAAU,CAAC;;IAC/B,CAAC;IACH,0BAAC;AAAD,CAAC,AAVD,CAAyC,SAAS,GAUjD;AAVY,kDAAmB",sourcesContent:["import Entity from './entity';\r\nimport Collection from './collection';\r\nimport {QueryOption} from './query-option';\r\n\r\nexport class DataClass {\r\n\r\n  public name: string;\r\n  public collectionName: string;\r\n  public attributes: Attribute[];\r\n  public methods: {\r\n    entity: string[],\r\n    collection: string[],\r\n    dataClass: string[]\r\n  };\r\n\r\n  public find: (id: string|number, options?: QueryOption) => Promise<Entity>;\r\n  public query: (options?: QueryOption) => Promise<Collection>;\r\n  public create: (pojo?: any) => Entity;\r\n\r\n  [key: string]: any;\r\n\r\n  constructor({name, collectionName, attributes, methods}:\r\n    {\r\n      name: string,\r\n      collectionName: string,\r\n      attributes: Attribute[],\r\n      methods: {entity: string[], collection: string[], dataClass: string[]}\r\n    }) {\r\n\r\n    this.name = name;\r\n    this.collectionName = collectionName;\r\n    this.attributes = attributes;\r\n    this.methods = methods;\r\n  }\r\n}\r\n\r\nexport class Attribute {\r\n\r\n  public name: string;\r\n  public type: string;\r\n  public readOnly: boolean;\r\n  public kind: string;\r\n  public simpleDate: boolean;\r\n\r\n  constructor({name, type, readOnly, kind, simpleDate}:\r\n   {name: string, type: string, readOnly?: boolean, kind: string, simpleDate?: boolean}) {\r\n\r\n    this.name = name;\r\n    this.type = type;\r\n    this.readOnly = readOnly === true;\r\n    this.kind = kind;\r\n    this.simpleDate = simpleDate;\r\n  }\r\n}\r\n\r\nexport class AttributeRelated extends Attribute {\r\n\r\n}\r\n\r\nexport class AttributeCollection extends Attribute {\r\n\r\n  public entityType: string;\r\n\r\n  constructor({name, type, readOnly, kind, entityType}:\r\n    {name: string, type: string, readOnly?: boolean, kind: string, entityType: string}) {\r\n\r\n    super({name, type, readOnly, kind});\r\n    this.entityType = entityType;\r\n  }\r\n}\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_1fzwfhxioa.s[0]++,(cov_1fzwfhxioa.b[0][0]++,this)&&(cov_1fzwfhxioa.b[0][1]++,this.__extends)||(cov_1fzwfhxioa.b[0][2]++,function(){cov_1fzwfhxioa.f[0]++;var extendStatics=(cov_1fzwfhxioa.s[1]++,(cov_1fzwfhxioa.b[1][0]++,Object.setPrototypeOf)||(cov_1fzwfhxioa.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_1fzwfhxioa.b[1][2]++,function(d,b){cov_1fzwfhxioa.f[1]++;cov_1fzwfhxioa.s[2]++;d.__proto__=b;})||(cov_1fzwfhxioa.b[1][3]++,function(d,b){cov_1fzwfhxioa.f[2]++;cov_1fzwfhxioa.s[3]++;for(var p in b){cov_1fzwfhxioa.s[4]++;if(b.hasOwnProperty(p)){cov_1fzwfhxioa.b[2][0]++;cov_1fzwfhxioa.s[5]++;d[p]=b[p];}else{cov_1fzwfhxioa.b[2][1]++;}}}));cov_1fzwfhxioa.s[6]++;return function(d,b){cov_1fzwfhxioa.f[3]++;cov_1fzwfhxioa.s[7]++;extendStatics(d,b);function __(){cov_1fzwfhxioa.f[4]++;cov_1fzwfhxioa.s[8]++;this.constructor=d;}cov_1fzwfhxioa.s[9]++;d.prototype=b===null?(cov_1fzwfhxioa.b[3][0]++,Object.create(b)):(cov_1fzwfhxioa.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_1fzwfhxioa.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var DataClass=(/** @class */cov_1fzwfhxioa.s[11]++,function(){cov_1fzwfhxioa.f[5]++;function DataClass(_a){cov_1fzwfhxioa.f[6]++;var name=(cov_1fzwfhxioa.s[12]++,_a.name),collectionName=(cov_1fzwfhxioa.s[13]++,_a.collectionName),attributes=(cov_1fzwfhxioa.s[14]++,_a.attributes),methods=(cov_1fzwfhxioa.s[15]++,_a.methods);cov_1fzwfhxioa.s[16]++;this.name=name;cov_1fzwfhxioa.s[17]++;this.collectionName=collectionName;cov_1fzwfhxioa.s[18]++;this.attributes=attributes;cov_1fzwfhxioa.s[19]++;this.methods=methods;}cov_1fzwfhxioa.s[20]++;return DataClass;}());cov_1fzwfhxioa.s[21]++;exports.DataClass=DataClass;var Attribute=(/** @class */cov_1fzwfhxioa.s[22]++,function(){cov_1fzwfhxioa.f[7]++;function Attribute(_a){cov_1fzwfhxioa.f[8]++;var name=(cov_1fzwfhxioa.s[23]++,_a.name),type=(cov_1fzwfhxioa.s[24]++,_a.type),readOnly=(cov_1fzwfhxioa.s[25]++,_a.readOnly),kind=(cov_1fzwfhxioa.s[26]++,_a.kind),simpleDate=(cov_1fzwfhxioa.s[27]++,_a.simpleDate);cov_1fzwfhxioa.s[28]++;this.name=name;cov_1fzwfhxioa.s[29]++;this.type=type;cov_1fzwfhxioa.s[30]++;this.readOnly=readOnly===true;cov_1fzwfhxioa.s[31]++;this.kind=kind;cov_1fzwfhxioa.s[32]++;this.simpleDate=simpleDate;}cov_1fzwfhxioa.s[33]++;return Attribute;}());cov_1fzwfhxioa.s[34]++;exports.Attribute=Attribute;var AttributeRelated=(/** @class */cov_1fzwfhxioa.s[35]++,function(_super){cov_1fzwfhxioa.f[9]++;cov_1fzwfhxioa.s[36]++;__extends(AttributeRelated,_super);function AttributeRelated(){cov_1fzwfhxioa.f[10]++;cov_1fzwfhxioa.s[37]++;return(cov_1fzwfhxioa.b[4][0]++,_super!==null)&&(cov_1fzwfhxioa.b[4][1]++,_super.apply(this,arguments))||(cov_1fzwfhxioa.b[4][2]++,this);}cov_1fzwfhxioa.s[38]++;return AttributeRelated;}(Attribute));cov_1fzwfhxioa.s[39]++;exports.AttributeRelated=AttributeRelated;var AttributeCollection=(/** @class */cov_1fzwfhxioa.s[40]++,function(_super){cov_1fzwfhxioa.f[11]++;cov_1fzwfhxioa.s[41]++;__extends(AttributeCollection,_super);function AttributeCollection(_a){cov_1fzwfhxioa.f[12]++;var name=(cov_1fzwfhxioa.s[42]++,_a.name),type=(cov_1fzwfhxioa.s[43]++,_a.type),readOnly=(cov_1fzwfhxioa.s[44]++,_a.readOnly),kind=(cov_1fzwfhxioa.s[45]++,_a.kind),entityType=(cov_1fzwfhxioa.s[46]++,_a.entityType);var _this=(cov_1fzwfhxioa.s[47]++,(cov_1fzwfhxioa.b[5][0]++,_super.call(this,{name:name,type:type,readOnly:readOnly,kind:kind}))||(cov_1fzwfhxioa.b[5][1]++,this));cov_1fzwfhxioa.s[48]++;_this.entityType=entityType;cov_1fzwfhxioa.s[49]++;return _this;}cov_1fzwfhxioa.s[50]++;return AttributeCollection;}(Attribute));cov_1fzwfhxioa.s[51]++;exports.AttributeCollection=AttributeCollection;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_2089jrvfv5=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\util.ts",hash="afe83742bb0ba9739689fab019ecb3b25d3dc84a",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\util.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:26},end:{line:78,column:3}},"2":{start:{line:6,column:4},end:{line:63,column:6}},"3":{start:{line:7,column:8},end:{line:9,column:9}},"4":{start:{line:8,column:12},end:{line:8,column:22}},"5":{start:{line:10,column:21},end:{line:10,column:35}},"6":{start:{line:10,column:46},end:{line:10,column:60}},"7":{start:{line:10,column:71},end:{line:10,column:85}},"8":{start:{line:10,column:98},end:{line:10,column:114}},"9":{start:{line:10,column:124},end:{line:10,column:137}},"10":{start:{line:10,column:149},end:{line:10,column:164}},"11":{start:{line:10,column:175},end:{line:10,column:189}},"12":{start:{line:10,column:202},end:{line:10,column:218}},"13":{start:{line:11,column:18},end:{line:11,column:21}},"14":{start:{line:12,column:8},end:{line:14,column:9}},"15":{start:{line:13,column:12},end:{line:13,column:40}},"16":{start:{line:15,column:8},end:{line:17,column:9}},"17":{start:{line:16,column:12},end:{line:16,column:49}},"18":{start:{line:18,column:8},end:{line:20,column:9}},"19":{start:{line:19,column:12},end:{line:19,column:42}},"20":{start:{line:21,column:8},end:{line:40,column:9}},"21":{start:{line:22,column:12},end:{line:24,column:13}},"22":{start:{line:23,column:16},end:{line:23,column:66}},"23":{start:{line:25,column:12},end:{line:39,column:13}},"24":{start:{line:26,column:24},end:{line:26,column:27}},"25":{start:{line:27,column:16},end:{line:35,column:17}},"26":{start:{line:28,column:30},end:{line:28,column:42}},"27":{start:{line:29,column:20},end:{line:34,column:21}},"28":{start:{line:30,column:24},end:{line:30,column:48}},"29":{start:{line:33,column:24},end:{line:33,column:39}},"30":{start:{line:36,column:16},end:{line:36,column:35}},"31":{start:{line:37,column:16},end:{line:37,column:25}},"32":{start:{line:38,column:16},end:{line:38,column:48}},"33":{start:{line:41,column:8},end:{line:46,column:9}},"34":{start:{line:42,column:12},end:{line:44,column:13}},"35":{start:{line:43,column:16},end:{line:43,column:70}},"36":{start:{line:45,column:12},end:{line:45,column:41}},"37":{start:{line:47,column:8},end:{line:52,column:9}},"38":{start:{line:48,column:12},end:{line:50,column:13}},"39":{start:{line:49,column:16},end:{line:49,column:67}},"40":{start:{line:51,column:12},end:{line:51,column:37}},"41":{start:{line:53,column:8},end:{line:55,column:9}},"42":{start:{line:54,column:12},end:{line:54,column:40}},"43":{start:{line:56,column:8},end:{line:58,column:9}},"44":{start:{line:57,column:12},end:{line:57,column:44}},"45":{start:{line:59,column:8},end:{line:61,column:9}},"46":{start:{line:60,column:12},end:{line:60,column:41}},"47":{start:{line:62,column:8},end:{line:62,column:38}},"48":{start:{line:64,column:4},end:{line:66,column:6}},"49":{start:{line:65,column:8},end:{line:65,column:67}},"50":{start:{line:67,column:4},end:{line:76,column:6}},"51":{start:{line:68,column:8},end:{line:75,column:9}},"52":{start:{line:69,column:12},end:{line:74,column:13}},"53":{start:{line:70,column:24},end:{line:70,column:36}},"54":{start:{line:71,column:16},end:{line:73,column:17}},"55":{start:{line:72,column:20},end:{line:72,column:44}},"56":{start:{line:77,column:4},end:{line:77,column:16}},"57":{start:{line:79,column:0},end:{line:79,column:23}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:26},end:{line:3,column:27}},loc:{start:{line:3,column:38},end:{line:78,column:1}},line:3},"1":{name:"Util",decl:{start:{line:4,column:13},end:{line:4,column:17}},loc:{start:{line:4,column:20},end:{line:5,column:5}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:6,column:25},end:{line:6,column:26}},loc:{start:{line:6,column:44},end:{line:63,column:5}},line:6},"3":{name:"(anonymous_3)",decl:{start:{line:64,column:21},end:{line:64,column:22}},loc:{start:{line:64,column:34},end:{line:66,column:5}},line:64},"4":{name:"(anonymous_4)",decl:{start:{line:67,column:36},end:{line:67,column:37}},loc:{start:{line:67,column:54},end:{line:76,column:5}},line:67}},branchMap:{"0":{loc:{start:{line:7,column:8},end:{line:9,column:9}},type:"if",locations:[{start:{line:7,column:8},end:{line:9,column:9}},{start:{line:7,column:8},end:{line:9,column:9}}],line:7},"1":{loc:{start:{line:12,column:8},end:{line:14,column:9}},type:"if",locations:[{start:{line:12,column:8},end:{line:14,column:9}},{start:{line:12,column:8},end:{line:14,column:9}}],line:12},"2":{loc:{start:{line:15,column:8},end:{line:17,column:9}},type:"if",locations:[{start:{line:15,column:8},end:{line:17,column:9}},{start:{line:15,column:8},end:{line:17,column:9}}],line:15},"3":{loc:{start:{line:18,column:8},end:{line:20,column:9}},type:"if",locations:[{start:{line:18,column:8},end:{line:20,column:9}},{start:{line:18,column:8},end:{line:20,column:9}}],line:18},"4":{loc:{start:{line:21,column:8},end:{line:40,column:9}},type:"if",locations:[{start:{line:21,column:8},end:{line:40,column:9}},{start:{line:21,column:8},end:{line:40,column:9}}],line:21},"5":{loc:{start:{line:22,column:12},end:{line:24,column:13}},type:"if",locations:[{start:{line:22,column:12},end:{line:24,column:13}},{start:{line:22,column:12},end:{line:24,column:13}}],line:22},"6":{loc:{start:{line:25,column:12},end:{line:39,column:13}},type:"if",locations:[{start:{line:25,column:12},end:{line:39,column:13}},{start:{line:25,column:12},end:{line:39,column:13}}],line:25},"7":{loc:{start:{line:29,column:20},end:{line:34,column:21}},type:"if",locations:[{start:{line:29,column:20},end:{line:34,column:21}},{start:{line:29,column:20},end:{line:34,column:21}}],line:29},"8":{loc:{start:{line:41,column:8},end:{line:46,column:9}},type:"if",locations:[{start:{line:41,column:8},end:{line:46,column:9}},{start:{line:41,column:8},end:{line:46,column:9}}],line:41},"9":{loc:{start:{line:42,column:12},end:{line:44,column:13}},type:"if",locations:[{start:{line:42,column:12},end:{line:44,column:13}},{start:{line:42,column:12},end:{line:44,column:13}}],line:42},"10":{loc:{start:{line:47,column:8},end:{line:52,column:9}},type:"if",locations:[{start:{line:47,column:8},end:{line:52,column:9}},{start:{line:47,column:8},end:{line:52,column:9}}],line:47},"11":{loc:{start:{line:48,column:12},end:{line:50,column:13}},type:"if",locations:[{start:{line:48,column:12},end:{line:50,column:13}},{start:{line:48,column:12},end:{line:50,column:13}}],line:48},"12":{loc:{start:{line:53,column:8},end:{line:55,column:9}},type:"if",locations:[{start:{line:53,column:8},end:{line:55,column:9}},{start:{line:53,column:8},end:{line:55,column:9}}],line:53},"13":{loc:{start:{line:56,column:8},end:{line:58,column:9}},type:"if",locations:[{start:{line:56,column:8},end:{line:58,column:9}},{start:{line:56,column:8},end:{line:58,column:9}}],line:56},"14":{loc:{start:{line:59,column:8},end:{line:61,column:9}},type:"if",locations:[{start:{line:59,column:8},end:{line:61,column:9}},{start:{line:59,column:8},end:{line:61,column:9}}],line:59},"15":{loc:{start:{line:59,column:12},end:{line:59,column:44}},type:"binary-expr",locations:[{start:{line:59,column:12},end:{line:59,column:26}},{start:{line:59,column:30},end:{line:59,column:44}}],line:59},"16":{loc:{start:{line:62,column:15},end:{line:62,column:37}},type:"cond-expr",locations:[{start:{line:62,column:29},end:{line:62,column:31}},{start:{line:62,column:34},end:{line:62,column:37}}],line:62},"17":{loc:{start:{line:65,column:15},end:{line:65,column:66}},type:"binary-expr",locations:[{start:{line:65,column:15},end:{line:65,column:36}},{start:{line:65,column:40},end:{line:65,column:49}},{start:{line:65,column:53},end:{line:65,column:66}}],line:65},"18":{loc:{start:{line:69,column:12},end:{line:74,column:13}},type:"if",locations:[{start:{line:69,column:12},end:{line:74,column:13}},{start:{line:69,column:12},end:{line:74,column:13}}],line:69},"19":{loc:{start:{line:71,column:16},end:{line:73,column:17}},type:"if",locations:[{start:{line:71,column:16},end:{line:73,column:17}},{start:{line:71,column:16},end:{line:73,column:17}}],line:71},"20":{loc:{start:{line:71,column:20},end:{line:71,column:59}},type:"binary-expr",locations:[{start:{line:71,column:20},end:{line:71,column:21}},{start:{line:71,column:25},end:{line:71,column:37}},{start:{line:71,column:41},end:{line:71,column:59}}],line:71}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0,0],"18":[0,0],"19":[0,0],"20":[0,0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\util.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\util.ts"],names:[],mappings:"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",sourcesContent:["import {QueryOption} from '../presentation/query-option';\r\n\r\nclass Util {\r\n  public static handleOptions(options: QueryOption) {\r\n\r\n    if (!options) {\r\n      return '';\r\n    }\r\n\r\n    let {\r\n      select,\r\n      filter,\r\n      params,\r\n      pageSize,\r\n      start,\r\n      orderBy,\r\n      method,\r\n      emMethod\r\n    } = options;\r\n\r\n    let ret = '?';\r\n\r\n    if (select) {\r\n      ret += '&$expand=' + select;\r\n    }\r\n\r\n    if (filter) {\r\n      ret += '&$filter=\\\"' + filter + '\\\"';\r\n    }\r\n\r\n    if (orderBy) {\r\n      ret += '&$orderby=' + orderBy;\r\n    }\r\n\r\n    if (params) {\r\n      if (!Array.isArray(params)) {\r\n        throw new Error('params option must be an array');\r\n      }\r\n\r\n      if (params.length > 0) {\r\n        let p = '[';\r\n\r\n        for (let elt of params) {\r\n          if (typeof elt === 'string') {\r\n            p += '\\\"' + elt + '\\\",';\r\n          }\r\n          else {\r\n            p += elt + ',';\r\n          }\r\n        }\r\n\r\n        p   = p.slice(0, -1);\r\n        p   += ']';\r\n        ret += '&$params=\\'' + p + '\\'';\r\n      }\r\n    }\r\n\r\n    if (pageSize) {\r\n      if (!this.isInteger(pageSize)) {\r\n        throw new Error('pageSize option must be an integer');\r\n      }\r\n\r\n      ret += '&$limit=' + pageSize;\r\n    }\r\n\r\n    if (start) {\r\n      if (!this.isInteger(start)) {\r\n        throw new Error('start option must be an integer');\r\n      }\r\n\r\n      ret += '&$skip=' + start;\r\n    }\r\n\r\n    if (method) {\r\n      ret += '&$method=' + method;\r\n    }\r\n\r\n    if (emMethod) {\r\n      ret += '&$emMethod=' + emMethod;\r\n    }\r\n\r\n    if (ret.length > 1 && ret[1] === '&') {\r\n      ret = ret.replace('?&', '?');\r\n    }\r\n\r\n    return ret === '?' ? '' : ret;\r\n  }\r\n\r\n  public static isInteger(n: any): boolean {\r\n    return typeof n === 'number' && !isNaN(n) && (n % 1) === 0;\r\n  }\r\n\r\n  public static removeRestInfoFromEntity(entity: any): void {\r\n    for (let prop in entity) {\r\n      if (Object.prototype.hasOwnProperty.call(entity, prop)) {\r\n        let p = entity[prop];\r\n        if (p && p.__deferred && p.__deferred.__KEY) { //Do not remove uri for collection\r\n          delete p.__deferred.uri;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nexport default Util;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_2089jrvfv5.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var Util=(/** @class */cov_2089jrvfv5.s[1]++,function(){cov_2089jrvfv5.f[0]++;function Util(){cov_2089jrvfv5.f[1]++;}cov_2089jrvfv5.s[2]++;Util.handleOptions=function(options){cov_2089jrvfv5.f[2]++;cov_2089jrvfv5.s[3]++;if(!options){cov_2089jrvfv5.b[0][0]++;cov_2089jrvfv5.s[4]++;return'';}else{cov_2089jrvfv5.b[0][1]++;}var select=(cov_2089jrvfv5.s[5]++,options.select),filter=(cov_2089jrvfv5.s[6]++,options.filter),params=(cov_2089jrvfv5.s[7]++,options.params),pageSize=(cov_2089jrvfv5.s[8]++,options.pageSize),start=(cov_2089jrvfv5.s[9]++,options.start),orderBy=(cov_2089jrvfv5.s[10]++,options.orderBy),method=(cov_2089jrvfv5.s[11]++,options.method),emMethod=(cov_2089jrvfv5.s[12]++,options.emMethod);var ret=(cov_2089jrvfv5.s[13]++,'?');cov_2089jrvfv5.s[14]++;if(select){cov_2089jrvfv5.b[1][0]++;cov_2089jrvfv5.s[15]++;ret+='&$expand='+select;}else{cov_2089jrvfv5.b[1][1]++;}cov_2089jrvfv5.s[16]++;if(filter){cov_2089jrvfv5.b[2][0]++;cov_2089jrvfv5.s[17]++;ret+='&$filter=\"'+filter+'\"';}else{cov_2089jrvfv5.b[2][1]++;}cov_2089jrvfv5.s[18]++;if(orderBy){cov_2089jrvfv5.b[3][0]++;cov_2089jrvfv5.s[19]++;ret+='&$orderby='+orderBy;}else{cov_2089jrvfv5.b[3][1]++;}cov_2089jrvfv5.s[20]++;if(params){cov_2089jrvfv5.b[4][0]++;cov_2089jrvfv5.s[21]++;if(!Array.isArray(params)){cov_2089jrvfv5.b[5][0]++;cov_2089jrvfv5.s[22]++;throw new Error('params option must be an array');}else{cov_2089jrvfv5.b[5][1]++;}cov_2089jrvfv5.s[23]++;if(params.length>0){cov_2089jrvfv5.b[6][0]++;var p=(cov_2089jrvfv5.s[24]++,'[');cov_2089jrvfv5.s[25]++;for(var _i=0,params_1=params;_i<params_1.length;_i++){var elt=(cov_2089jrvfv5.s[26]++,params_1[_i]);cov_2089jrvfv5.s[27]++;if(typeof elt==='string'){cov_2089jrvfv5.b[7][0]++;cov_2089jrvfv5.s[28]++;p+='\"'+elt+'\",';}else{cov_2089jrvfv5.b[7][1]++;cov_2089jrvfv5.s[29]++;p+=elt+',';}}cov_2089jrvfv5.s[30]++;p=p.slice(0,-1);cov_2089jrvfv5.s[31]++;p+=']';cov_2089jrvfv5.s[32]++;ret+='&$params=\''+p+'\'';}else{cov_2089jrvfv5.b[6][1]++;}}else{cov_2089jrvfv5.b[4][1]++;}cov_2089jrvfv5.s[33]++;if(pageSize){cov_2089jrvfv5.b[8][0]++;cov_2089jrvfv5.s[34]++;if(!this.isInteger(pageSize)){cov_2089jrvfv5.b[9][0]++;cov_2089jrvfv5.s[35]++;throw new Error('pageSize option must be an integer');}else{cov_2089jrvfv5.b[9][1]++;}cov_2089jrvfv5.s[36]++;ret+='&$limit='+pageSize;}else{cov_2089jrvfv5.b[8][1]++;}cov_2089jrvfv5.s[37]++;if(start){cov_2089jrvfv5.b[10][0]++;cov_2089jrvfv5.s[38]++;if(!this.isInteger(start)){cov_2089jrvfv5.b[11][0]++;cov_2089jrvfv5.s[39]++;throw new Error('start option must be an integer');}else{cov_2089jrvfv5.b[11][1]++;}cov_2089jrvfv5.s[40]++;ret+='&$skip='+start;}else{cov_2089jrvfv5.b[10][1]++;}cov_2089jrvfv5.s[41]++;if(method){cov_2089jrvfv5.b[12][0]++;cov_2089jrvfv5.s[42]++;ret+='&$method='+method;}else{cov_2089jrvfv5.b[12][1]++;}cov_2089jrvfv5.s[43]++;if(emMethod){cov_2089jrvfv5.b[13][0]++;cov_2089jrvfv5.s[44]++;ret+='&$emMethod='+emMethod;}else{cov_2089jrvfv5.b[13][1]++;}cov_2089jrvfv5.s[45]++;if((cov_2089jrvfv5.b[15][0]++,ret.length>1)&&(cov_2089jrvfv5.b[15][1]++,ret[1]==='&')){cov_2089jrvfv5.b[14][0]++;cov_2089jrvfv5.s[46]++;ret=ret.replace('?&','?');}else{cov_2089jrvfv5.b[14][1]++;}cov_2089jrvfv5.s[47]++;return ret==='?'?(cov_2089jrvfv5.b[16][0]++,''):(cov_2089jrvfv5.b[16][1]++,ret);};cov_2089jrvfv5.s[48]++;Util.isInteger=function(n){cov_2089jrvfv5.f[3]++;cov_2089jrvfv5.s[49]++;return(cov_2089jrvfv5.b[17][0]++,typeof n==='number')&&(cov_2089jrvfv5.b[17][1]++,!isNaN(n))&&(cov_2089jrvfv5.b[17][2]++,n%1===0);};cov_2089jrvfv5.s[50]++;Util.removeRestInfoFromEntity=function(entity){cov_2089jrvfv5.f[4]++;cov_2089jrvfv5.s[51]++;for(var prop in entity){cov_2089jrvfv5.s[52]++;if(Object.prototype.hasOwnProperty.call(entity,prop)){cov_2089jrvfv5.b[18][0]++;var p=(cov_2089jrvfv5.s[53]++,entity[prop]);cov_2089jrvfv5.s[54]++;if((cov_2089jrvfv5.b[20][0]++,p)&&(cov_2089jrvfv5.b[20][1]++,p.__deferred)&&(cov_2089jrvfv5.b[20][2]++,p.__deferred.__KEY)){cov_2089jrvfv5.b[19][0]++;cov_2089jrvfv5.s[55]++;delete p.__deferred.uri;}else{cov_2089jrvfv5.b[19][1]++;}}else{cov_2089jrvfv5.b[18][1]++;}}};cov_2089jrvfv5.s[56]++;return Util;}());cov_2089jrvfv5.s[57]++;exports.default=Util;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_miqi33ctk=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\presentation\\entity.ts",hash="3ef0edd85ca287e151ca1429ad87078bdb3aacd7",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\presentation\\entity.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:28},end:{line:16,column:3}},"2":{start:{line:5,column:24},end:{line:5,column:30}},"3":{start:{line:5,column:43},end:{line:5,column:54}},"4":{start:{line:5,column:68},end:{line:5,column:80}},"5":{start:{line:6,column:8},end:{line:6,column:30}},"6":{start:{line:7,column:8},end:{line:7,column:43}},"7":{start:{line:8,column:8},end:{line:13,column:11}},"8":{start:{line:15,column:4},end:{line:15,column:18}},"9":{start:{line:17,column:0},end:{line:17,column:25}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:28},end:{line:3,column:29}},loc:{start:{line:3,column:40},end:{line:16,column:1}},line:3},"1":{name:"Entity",decl:{start:{line:4,column:13},end:{line:4,column:19}},loc:{start:{line:4,column:24},end:{line:14,column:5}},line:4}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},f:{"0":0,"1":0},b:{},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\presentation\\entity.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\presentation\\entity.ts"],names:[],mappings:";;AAGA;IAcE,gBAAY,EAC2C;YAD1C,kBAAc,EAAE,sBAAQ,EAAE,wBAAS;QAG9C,IAAI,CAAC,IAAI,GAAG,SAAS,CAAC;QACtB,IAAI,CAAC,SAAS,GAAG,QAAQ,KAAK,IAAI,CAAC;QAEnC,MAAM,CAAC,cAAc,CAAC,IAAI,EAAE,YAAY,EAAE;YACxC,UAAU,EAAE,KAAK;YACjB,YAAY,EAAE,KAAK;YACnB,QAAQ,EAAE,KAAK;YACf,KAAK,EAAE,SAAS;SACjB,CAAC,CAAC;IACL,CAAC;IACH,aAAC;AAAD,CAAC,AA3BD,IA2BC;AAED,kBAAe,MAAM,CAAC",sourcesContent:["import {DataClass} from './dataclass';\r\nimport {QueryOption} from './query-option';\r\n\r\nclass Entity {\r\n\r\n  public _key: string;\r\n  public _stamp: number;\r\n  public _deferred: boolean;\r\n  public _dataClass: DataClass;\r\n\r\n  [key: string]: any;\r\n\r\n  public save: () => Promise<Entity>;\r\n  public delete: () => Promise<void>;\r\n  public fetch: (options?: QueryOption) => Promise<Entity>;\r\n  public recompute: () => Promise<Entity>;\r\n\r\n  constructor({key: entityKey, deferred, dataClass}:\r\n   {key: string, deferred: boolean, dataClass: DataClass}) {\r\n\r\n    this._key = entityKey;\r\n    this._deferred = deferred === true;\r\n\r\n    Object.defineProperty(this, '_dataClass', {\r\n      enumerable: false,\r\n      configurable: false,\r\n      writable: false,\r\n      value: dataClass\r\n    });\r\n  }\r\n}\r\n\r\nexport default Entity;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_miqi33ctk.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var Entity=(/** @class */cov_miqi33ctk.s[1]++,function(){cov_miqi33ctk.f[0]++;function Entity(_a){cov_miqi33ctk.f[1]++;var entityKey=(cov_miqi33ctk.s[2]++,_a.key),deferred=(cov_miqi33ctk.s[3]++,_a.deferred),dataClass=(cov_miqi33ctk.s[4]++,_a.dataClass);cov_miqi33ctk.s[5]++;this._key=entityKey;cov_miqi33ctk.s[6]++;this._deferred=deferred===true;cov_miqi33ctk.s[7]++;Object.defineProperty(this,'_dataClass',{enumerable:false,configurable:false,writable:false,value:dataClass});}cov_miqi33ctk.s[8]++;return Entity;}());cov_miqi33ctk.s[9]++;exports.default=Entity;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_1gqxfgm64c=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\method-adapter.ts",hash="9a2afbaea8694a4c053c62526e06cfdc4690f0e9",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\method-adapter.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:35},end:{line:29,column:3}},"2":{start:{line:6,column:4},end:{line:27,column:6}},"3":{start:{line:7,column:8},end:{line:25,column:9}},"4":{start:{line:8,column:27},end:{line:8,column:66}},"5":{start:{line:9,column:12},end:{line:24,column:13}},"6":{start:{line:11,column:16},end:{line:23,column:17}},"7":{start:{line:15,column:20},end:{line:17,column:23}},"8":{start:{line:19,column:21},end:{line:23,column:17}},"9":{start:{line:20,column:20},end:{line:22,column:23}},"10":{start:{line:26,column:8},end:{line:26,column:22}},"11":{start:{line:28,column:4},end:{line:28,column:25}},"12":{start:{line:30,column:0},end:{line:30,column:38}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:35},end:{line:3,column:36}},loc:{start:{line:3,column:47},end:{line:29,column:1}},line:3},"1":{name:"MethodAdapter",decl:{start:{line:4,column:13},end:{line:4,column:26}},loc:{start:{line:4,column:29},end:{line:5,column:5}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:6,column:30},end:{line:6,column:31}},loc:{start:{line:6,column:63},end:{line:27,column:5}},line:6}},branchMap:{"0":{loc:{start:{line:7,column:8},end:{line:25,column:9}},type:"if",locations:[{start:{line:7,column:8},end:{line:25,column:9}},{start:{line:7,column:8},end:{line:25,column:9}}],line:7},"1":{loc:{start:{line:7,column:12},end:{line:7,column:42}},type:"binary-expr",locations:[{start:{line:7,column:12},end:{line:7,column:18}},{start:{line:7,column:22},end:{line:7,column:42}}],line:7},"2":{loc:{start:{line:9,column:12},end:{line:24,column:13}},type:"if",locations:[{start:{line:9,column:12},end:{line:24,column:13}},{start:{line:9,column:12},end:{line:24,column:13}}],line:9},"3":{loc:{start:{line:11,column:16},end:{line:23,column:17}},type:"if",locations:[{start:{line:11,column:16},end:{line:23,column:17}},{start:{line:11,column:16},end:{line:23,column:17}}],line:11},"4":{loc:{start:{line:11,column:20},end:{line:14,column:56}},type:"binary-expr",locations:[{start:{line:11,column:20},end:{line:11,column:57}},{start:{line:12,column:20},end:{line:12,column:60}},{start:{line:13,column:20},end:{line:13,column:57}},{start:{line:14,column:20},end:{line:14,column:56}}],line:11},"5":{loc:{start:{line:19,column:21},end:{line:23,column:17}},type:"if",locations:[{start:{line:19,column:21},end:{line:23,column:17}},{start:{line:19,column:21},end:{line:23,column:17}}],line:19},"6":{loc:{start:{line:19,column:25},end:{line:19,column:55}},type:"binary-expr",locations:[{start:{line:19,column:25},end:{line:19,column:37}},{start:{line:19,column:41},end:{line:19,column:55}}],line:19}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},f:{"0":0,"1":0,"2":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0,0,0],"5":[0,0],"6":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\method-adapter.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\method-adapter.ts"],names:[],mappings:";;AAEA;IAAA;IA2BA,CAAC;IAzBe,uBAAS,GAAvB,UAAwB,MAAW,EAAE,aAA6C;QAChF,EAAE,CAAC,CAAC,MAAM,IAAI,MAAM,CAAC,aAAa,CAAC,CAAC,CAAC;YACnC,IAAI,QAAQ,GAAG,aAAa,CAAC,GAAG,CAAC,MAAM,CAAC,aAAa,CAAC,CAAC;YAEvD,EAAE,CAAC,CAAC,QAAQ,CAAC,CAAC,CAAC;gBACb,iCAAiC;gBACjC,EAAE,CAAC,CAAC,OAAO,MAAM,CAAC,OAAO,KAAK,WAAW;oBACrC,OAAO,MAAM,CAAC,UAAU,KAAK,WAAW;oBACxC,OAAO,MAAM,CAAC,OAAO,KAAK,WAAW;oBACrC,OAAO,MAAM,CAAC,MAAM,KAAK,WAAW,CAAC,CAAC,CAAC;oBACzC,MAAM,CAAC,QAAQ,CAAC,8BAA8B,CAAC;wBAC7C,GAAG,EAAE,MAAM;qBACZ,CAAC,CAAC;gBACL,CAAC;gBAED,IAAI,CAAC,EAAE,CAAC,CAAC,MAAM,CAAC,KAAK,IAAI,MAAM,CAAC,OAAO,CAAC,CAAC,CAAC;oBACxC,MAAM,CAAC,QAAQ,CAAC,0BAA0B,CAAC;wBACzC,GAAG,EAAE,MAAM;qBACZ,CAAC,CAAC;gBACL,CAAC;YACH,CAAC;QACH,CAAC;QAED,MAAM,CAAC,MAAM,CAAC;IAChB,CAAC;IACH,oBAAC;AAAD,CAAC,AA3BD,IA2BC;AA3BY,sCAAa",sourcesContent:["import DataClassBusiness from './dataclass-business';\r\n\r\nexport class MethodAdapter {\r\n\r\n  public static transform(object: any, dcBusinessMap: Map<string, DataClassBusiness>): any {\r\n    if (object && object.__entityModel) {\r\n      let business = dcBusinessMap.get(object.__entityModel);\r\n\r\n      if (business) {\r\n        //Returned object is a collection\r\n        if (typeof object.__COUNT !== 'undefined' &&\r\n            typeof object.__ENTITIES !== 'undefined' &&\r\n            typeof object.__FIRST !== 'undefined' &&\r\n            typeof object.__SENT !== 'undefined') {\r\n          return business._presentationCollectionFromDbo({\r\n            dbo: object\r\n          });\r\n        }\r\n        //Returned object is an entity\r\n        else if (object.__KEY && object.__STAMP) {\r\n          return business._presentationEntityFromDbo({\r\n            dbo: object\r\n          });\r\n        }\r\n      }\r\n    }\r\n\r\n    return object;\r\n  }\r\n}\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1gqxfgm64c.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var MethodAdapter=(/** @class */cov_1gqxfgm64c.s[1]++,function(){cov_1gqxfgm64c.f[0]++;function MethodAdapter(){cov_1gqxfgm64c.f[1]++;}cov_1gqxfgm64c.s[2]++;MethodAdapter.transform=function(object,dcBusinessMap){cov_1gqxfgm64c.f[2]++;cov_1gqxfgm64c.s[3]++;if((cov_1gqxfgm64c.b[1][0]++,object)&&(cov_1gqxfgm64c.b[1][1]++,object.__entityModel)){cov_1gqxfgm64c.b[0][0]++;var business=(cov_1gqxfgm64c.s[4]++,dcBusinessMap.get(object.__entityModel));cov_1gqxfgm64c.s[5]++;if(business){cov_1gqxfgm64c.b[2][0]++;cov_1gqxfgm64c.s[6]++;//Returned object is a collection
if((cov_1gqxfgm64c.b[4][0]++,typeof object.__COUNT!=='undefined')&&(cov_1gqxfgm64c.b[4][1]++,typeof object.__ENTITIES!=='undefined')&&(cov_1gqxfgm64c.b[4][2]++,typeof object.__FIRST!=='undefined')&&(cov_1gqxfgm64c.b[4][3]++,typeof object.__SENT!=='undefined')){cov_1gqxfgm64c.b[3][0]++;cov_1gqxfgm64c.s[7]++;return business._presentationCollectionFromDbo({dbo:object});}else{cov_1gqxfgm64c.b[3][1]++;cov_1gqxfgm64c.s[8]++;if((cov_1gqxfgm64c.b[6][0]++,object.__KEY)&&(cov_1gqxfgm64c.b[6][1]++,object.__STAMP)){cov_1gqxfgm64c.b[5][0]++;cov_1gqxfgm64c.s[9]++;return business._presentationEntityFromDbo({dbo:object});}else{cov_1gqxfgm64c.b[5][1]++;}}}else{cov_1gqxfgm64c.b[2][1]++;}}else{cov_1gqxfgm64c.b[0][1]++;}cov_1gqxfgm64c.s[10]++;return object;};cov_1gqxfgm64c.s[11]++;return MethodAdapter;}());cov_1gqxfgm64c.s[12]++;exports.MethodAdapter=MethodAdapter;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_nq4r1go53=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\const.ts",hash="6984249f916f73e4df60b20e90e58ddfd970c214",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\const.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:0},end:{line:6,column:2}}},fnMap:{},branchMap:{},s:{"0":0,"1":0},f:{},b:{},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\const.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\const.ts"],names:[],mappings:";;AAAA,kBAAe;IACb,iBAAiB,EAAE,EAAE;IACrB,wBAAwB,EAAE,IAAI,CAAC,SAAS;CACzC,CAAC",sourcesContent:["export default {\r\n  DEFAULT_PAGE_SIZE: 40,\r\n  DEFAULT_SESSION_DURATION: 3600 //seconds\r\n};\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_nq4r1go53.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});cov_nq4r1go53.s[1]++;exports.default={DEFAULT_PAGE_SIZE:40,DEFAULT_SESSION_DURATION:3600//seconds
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
var cov_1pq4fpkh9b=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\catalog-base-service.ts",hash="ef8d9e4317e90aeea84dbea4efae64216b8f727f",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\catalog-base-service.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:40},end:{line:62,column:3}},"2":{start:{line:6,column:4},end:{line:60,column:6}},"3":{start:{line:7,column:25},end:{line:7,column:38}},"4":{start:{line:7,column:54},end:{line:7,column:68}},"5":{start:{line:7,column:80},end:{line:7,column:90}},"6":{start:{line:8,column:29},end:{line:8,column:32}},"7":{start:{line:9,column:8},end:{line:17,column:9}},"8":{start:{line:10,column:12},end:{line:10,column:49}},"9":{start:{line:12,column:13},end:{line:17,column:9}},"10":{start:{line:13,column:12},end:{line:13,column:37}},"11":{start:{line:16,column:12},end:{line:16,column:79}},"12":{start:{line:18,column:25},end:{line:18,column:53}},"13":{start:{line:19,column:8},end:{line:59,column:11}},"14":{start:{line:21,column:33},end:{line:21,column:35}},"15":{start:{line:22,column:25},end:{line:22,column:45}},"16":{start:{line:23,column:12},end:{line:57,column:13}},"17":{start:{line:24,column:16},end:{line:56,column:17}},"18":{start:{line:25,column:28},end:{line:25,column:34}},"19":{start:{line:26,column:37},end:{line:26,column:39}},"20":{start:{line:27,column:20},end:{line:38,column:21}},"21":{start:{line:28,column:24},end:{line:37,column:25}},"22":{start:{line:29,column:39},end:{line:29,column:45}},"23":{start:{line:30,column:28},end:{line:36,column:31}},"24":{start:{line:39,column:34},end:{line:39,column:36}},"25":{start:{line:40,column:20},end:{line:48,column:21}},"26":{start:{line:41,column:24},end:{line:47,column:25}},"27":{start:{line:42,column:36},end:{line:42,column:42}},"28":{start:{line:43,column:28},end:{line:46,column:31}},"29":{start:{line:49,column:20},end:{line:55,column:23}},"30":{start:{line:58,column:12},end:{line:58,column:34}},"31":{start:{line:61,column:4},end:{line:61,column:30}},"32":{start:{line:63,column:0},end:{line:63,column:48}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:40},end:{line:3,column:41}},loc:{start:{line:3,column:52},end:{line:62,column:1}},line:3},"1":{name:"CatalogBaseService",decl:{start:{line:4,column:13},end:{line:4,column:31}},loc:{start:{line:4,column:34},end:{line:5,column:5}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:6,column:29},end:{line:6,column:30}},loc:{start:{line:6,column:43},end:{line:60,column:5}},line:6},"3":{name:"(anonymous_3)",decl:{start:{line:20,column:18},end:{line:20,column:19}},loc:{start:{line:20,column:33},end:{line:59,column:9}},line:20}},branchMap:{"0":{loc:{start:{line:9,column:8},end:{line:17,column:9}},type:"if",locations:[{start:{line:9,column:8},end:{line:17,column:9}},{start:{line:9,column:8},end:{line:17,column:9}}],line:9},"1":{loc:{start:{line:12,column:13},end:{line:17,column:9}},type:"if",locations:[{start:{line:12,column:13},end:{line:17,column:9}},{start:{line:12,column:13},end:{line:17,column:9}}],line:12},"2":{loc:{start:{line:18,column:25},end:{line:18,column:53}},type:"cond-expr",locations:[{start:{line:18,column:35},end:{line:18,column:48}},{start:{line:18,column:51},end:{line:18,column:53}}],line:18},"3":{loc:{start:{line:23,column:12},end:{line:57,column:13}},type:"if",locations:[{start:{line:23,column:12},end:{line:57,column:13}},{start:{line:23,column:12},end:{line:57,column:13}}],line:23},"4":{loc:{start:{line:27,column:20},end:{line:38,column:21}},type:"if",locations:[{start:{line:27,column:20},end:{line:38,column:21}},{start:{line:27,column:20},end:{line:38,column:21}}],line:27},"5":{loc:{start:{line:35,column:44},end:{line:35,column:103}},type:"cond-expr",locations:[{start:{line:35,column:76},end:{line:35,column:85}},{start:{line:35,column:88},end:{line:35,column:103}}],line:35},"6":{loc:{start:{line:40,column:20},end:{line:48,column:21}},type:"if",locations:[{start:{line:40,column:20},end:{line:48,column:21}},{start:{line:40,column:20},end:{line:48,column:21}}],line:40}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0},f:{"0":0,"1":0,"2":0,"3":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\catalog-base-service.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\catalog-base-service.ts"],names:[],mappings:";;AAGA;IAAA;IA6DA,CAAC;IA3De,sBAAG,GAAjB,UAAkB,EAA4G;YAA3G,0BAAU,EAAE,4BAAW,EAAE,oBAAO;QACjD,IAAI,cAAc,GAAG,GAAG,CAAC;QAEzB,EAAE,CAAC,CAAC,KAAK,CAAC,OAAO,CAAC,WAAW,CAAC,CAAC,CAAC,CAAC;YAC/B,cAAc,IAAI,WAAW,CAAC,IAAI,EAAE,CAAC;QACvC,CAAC;QACD,IAAI,CAAC,EAAE,CAAC,CAAC,OAAO,WAAW,KAAK,WAAW,CAAC,CAAC,CAAC;YAC5C,cAAc,IAAI,MAAM,CAAC;QAC3B,CAAC;QACD,IAAI,CAAC,CAAC;YACJ,MAAM,IAAI,KAAK,CAAC,iDAAiD,CAAC,CAAC;QACrE,CAAC;QAED,IAAI,UAAU,GAAG,OAAO,CAAC,CAAC,CAAC,GAAG,GAAG,OAAO,CAAC,CAAC,CAAC,EAAE,CAAC;QAE9C,MAAM,CAAC,UAAU,CAAC,GAAG,CAAC,EAAC,GAAG,EAAE,gBAAgB,GAAG,UAAU,GAAG,cAAc,EAAC,CAAC;aACzE,IAAI,CAAC,UAAA,GAAG;YACP,IAAI,cAAc,GAAoB,EAAE,CAAC;YACzC,IAAI,MAAM,GAAG,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;YAElC,EAAE,CAAC,CAAC,MAAM,CAAC,WAAW,CAAC,CAAC,CAAC;gBACvB,GAAG,CAAC,CAAU,UAAkB,EAAlB,KAAA,MAAM,CAAC,WAAW,EAAlB,cAAkB,EAAlB,IAAkB;oBAA3B,IAAI,CAAC,SAAA;oBAER,IAAI,UAAU,GAAU,EAAE,CAAC;oBAC3B,EAAE,CAAC,CAAC,CAAC,CAAC,UAAU,CAAC,CAAC,CAAC;wBACjB,GAAG,CAAC,CAAa,UAAY,EAAZ,KAAA,CAAC,CAAC,UAAU,EAAZ,cAAY,EAAZ,IAAY;4BAAxB,IAAI,IAAI,SAAA;4BACX,UAAU,CAAC,IAAI,CAAC;gCACd,IAAI,EAAE,IAAI,CAAC,IAAI;gCACf,IAAI,EAAE,IAAI,CAAC,IAAI;gCACf,IAAI,EAAE,IAAI,CAAC,IAAI;gCACf,QAAQ,EAAE,IAAI,CAAC,QAAQ;gCACvB,UAAU,EAAE,IAAI,CAAC,UAAU,KAAK,SAAS,CAAC,CAAC,CAAC,SAAS,CAAC,CAAC,CAAC,IAAI,CAAC,UAAU;6BACxE,CAAC,CAAC;yBACJ;oBACH,CAAC;oBAED,IAAI,OAAO,GAAU,EAAE,CAAC;oBACxB,EAAE,CAAC,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC;wBACd,GAAG,CAAC,CAAU,UAAS,EAAT,KAAA,CAAC,CAAC,OAAO,EAAT,cAAS,EAAT,IAAS;4BAAlB,IAAI,CAAC,SAAA;4BACR,OAAO,CAAC,IAAI,CAAC;gCACX,IAAI,EAAE,CAAC,CAAC,IAAI;gCACZ,OAAO,EAAE,CAAC,CAAC,OAAO;6BACnB,CAAC,CAAC;yBACJ;oBACH,CAAC;oBAED,cAAc,CAAC,IAAI,CAAC;wBAClB,IAAI,EAAE,CAAC,CAAC,IAAI;wBACZ,cAAc,EAAE,CAAC,CAAC,cAAc;wBAChC,UAAU,YAAA;wBACV,OAAO,SAAA;wBACP,OAAO,EAAE,CAAC,CAAC,OAAO;qBACnB,CAAC,CAAC;iBACJ;YACH,CAAC;YAED,MAAM,CAAC,cAAc,CAAC;QACxB,CAAC,CAAC,CAAC;IACP,CAAC;IACH,yBAAC;AAAD,CAAC,AA7DD,IA6DC;AA7DY,gDAAkB",sourcesContent:["import HttpClient from '../../http/http-client';\r\nimport {IDataClassDBO} from '../../../business/catalog-business';\r\n\r\nexport class CatalogBaseService {\r\n\r\n  public static get({httpClient, dataClasses, catalog}: {httpClient: HttpClient, dataClasses?: string|string[], catalog: string}) {\r\n    let strDataclasses = '/';\r\n\r\n    if (Array.isArray(dataClasses)) {\r\n      strDataclasses += dataClasses.join();\r\n    }\r\n    else if (typeof dataClasses === 'undefined') {\r\n      strDataclasses += '$all';\r\n    }\r\n    else {\r\n      throw new Error('Catalog.get: first parameter should be an array');\r\n    }\r\n\r\n    let strCatalog = catalog ? '/' + catalog : '';\r\n\r\n    return httpClient.get({uri: '/rest/$catalog' + strCatalog + strDataclasses})\r\n      .then(res => {\r\n        let catalogContent: IDataClassDBO[] = [];\r\n        let rawObj = JSON.parse(res.body);\r\n\r\n        if (rawObj.dataClasses) {\r\n          for (let d of rawObj.dataClasses) {\r\n\r\n            let attributes: any[] = [];\r\n            if (d.attributes) { //Seriously? :)\r\n              for (let attr of d.attributes) {\r\n                attributes.push({\r\n                  name: attr.name,\r\n                  kind: attr.kind,\r\n                  type: attr.type,\r\n                  readOnly: attr.readOnly,\r\n                  simpleDate: attr.simpleDate === undefined ? undefined : attr.simpleDate\r\n                });\r\n              }\r\n            }\r\n\r\n            let methods: any[] = [];\r\n            if (d.methods) {\r\n              for (let m of d.methods) {\r\n                methods.push({\r\n                  name: m.name,\r\n                  applyTo: m.applyTo\r\n                });\r\n              }\r\n            }\r\n\r\n            catalogContent.push({\r\n              name: d.name,\r\n              collectionName: d.collectionName,\r\n              attributes,\r\n              methods,\r\n              dataURI: d.dataURI\r\n            });\r\n          }\r\n        }\r\n\r\n        return catalogContent;\r\n      });\r\n  }\r\n}\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1pq4fpkh9b.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var CatalogBaseService=(/** @class */cov_1pq4fpkh9b.s[1]++,function(){cov_1pq4fpkh9b.f[0]++;function CatalogBaseService(){cov_1pq4fpkh9b.f[1]++;}cov_1pq4fpkh9b.s[2]++;CatalogBaseService.get=function(_a){cov_1pq4fpkh9b.f[2]++;var httpClient=(cov_1pq4fpkh9b.s[3]++,_a.httpClient),dataClasses=(cov_1pq4fpkh9b.s[4]++,_a.dataClasses),catalog=(cov_1pq4fpkh9b.s[5]++,_a.catalog);var strDataclasses=(cov_1pq4fpkh9b.s[6]++,'/');cov_1pq4fpkh9b.s[7]++;if(Array.isArray(dataClasses)){cov_1pq4fpkh9b.b[0][0]++;cov_1pq4fpkh9b.s[8]++;strDataclasses+=dataClasses.join();}else{cov_1pq4fpkh9b.b[0][1]++;cov_1pq4fpkh9b.s[9]++;if(typeof dataClasses==='undefined'){cov_1pq4fpkh9b.b[1][0]++;cov_1pq4fpkh9b.s[10]++;strDataclasses+='$all';}else{cov_1pq4fpkh9b.b[1][1]++;cov_1pq4fpkh9b.s[11]++;throw new Error('Catalog.get: first parameter should be an array');}}var strCatalog=(cov_1pq4fpkh9b.s[12]++,catalog?(cov_1pq4fpkh9b.b[2][0]++,'/'+catalog):(cov_1pq4fpkh9b.b[2][1]++,''));cov_1pq4fpkh9b.s[13]++;return httpClient.get({uri:'/rest/$catalog'+strCatalog+strDataclasses}).then(function(res){cov_1pq4fpkh9b.f[3]++;var catalogContent=(cov_1pq4fpkh9b.s[14]++,[]);var rawObj=(cov_1pq4fpkh9b.s[15]++,JSON.parse(res.body));cov_1pq4fpkh9b.s[16]++;if(rawObj.dataClasses){cov_1pq4fpkh9b.b[3][0]++;cov_1pq4fpkh9b.s[17]++;for(var _i=0,_a=rawObj.dataClasses;_i<_a.length;_i++){var d=(cov_1pq4fpkh9b.s[18]++,_a[_i]);var attributes=(cov_1pq4fpkh9b.s[19]++,[]);cov_1pq4fpkh9b.s[20]++;if(d.attributes){cov_1pq4fpkh9b.b[4][0]++;cov_1pq4fpkh9b.s[21]++;for(var _b=0,_c=d.attributes;_b<_c.length;_b++){var attr=(cov_1pq4fpkh9b.s[22]++,_c[_b]);cov_1pq4fpkh9b.s[23]++;attributes.push({name:attr.name,kind:attr.kind,type:attr.type,readOnly:attr.readOnly,simpleDate:attr.simpleDate===undefined?(cov_1pq4fpkh9b.b[5][0]++,undefined):(cov_1pq4fpkh9b.b[5][1]++,attr.simpleDate)});}}else{cov_1pq4fpkh9b.b[4][1]++;}var methods=(cov_1pq4fpkh9b.s[24]++,[]);cov_1pq4fpkh9b.s[25]++;if(d.methods){cov_1pq4fpkh9b.b[6][0]++;cov_1pq4fpkh9b.s[26]++;for(var _d=0,_e=d.methods;_d<_e.length;_d++){var m=(cov_1pq4fpkh9b.s[27]++,_e[_d]);cov_1pq4fpkh9b.s[28]++;methods.push({name:m.name,applyTo:m.applyTo});}}else{cov_1pq4fpkh9b.b[6][1]++;}cov_1pq4fpkh9b.s[29]++;catalogContent.push({name:d.name,collectionName:d.collectionName,attributes:attributes,methods:methods,dataURI:d.dataURI});}}else{cov_1pq4fpkh9b.b[3][1]++;}cov_1pq4fpkh9b.s[30]++;return catalogContent;});};cov_1pq4fpkh9b.s[31]++;return CatalogBaseService;}());cov_1pq4fpkh9b.s[32]++;exports.CatalogBaseService=CatalogBaseService;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_w8bz9q8gb=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\entity-base-service.ts",hash="9b3bb91742703f83da0cc365d5640654d9ef6fd8",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\entity-base-service.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:13},end:{line:3,column:34}},"2":{start:{line:4,column:39},end:{line:60,column:3}},"3":{start:{line:7,column:4},end:{line:22,column:6}},"4":{start:{line:8,column:25},end:{line:8,column:38}},"5":{start:{line:8,column:47},end:{line:8,column:54}},"6":{start:{line:8,column:65},end:{line:8,column:74}},"7":{start:{line:8,column:86},end:{line:8,column:96}},"8":{start:{line:9,column:24},end:{line:9,column:26}},"9":{start:{line:10,column:8},end:{line:12,column:9}},"10":{start:{line:11,column:12},end:{line:11,column:45}},"11":{start:{line:13,column:8},end:{line:21,column:11}},"12":{start:{line:17,column:25},end:{line:17,column:45}},"13":{start:{line:18,column:12},end:{line:18,column:40}},"14":{start:{line:19,column:12},end:{line:19,column:60}},"15":{start:{line:20,column:12},end:{line:20,column:26}},"16":{start:{line:23,column:4},end:{line:34,column:6}},"17":{start:{line:24,column:25},end:{line:24,column:38}},"18":{start:{line:24,column:50},end:{line:24,column:60}},"19":{start:{line:24,column:69},end:{line:24,column:76}},"20":{start:{line:25,column:8},end:{line:33,column:11}},"21":{start:{line:29,column:22},end:{line:29,column:42}},"22":{start:{line:30,column:12},end:{line:30,column:37}},"23":{start:{line:31,column:12},end:{line:31,column:57}},"24":{start:{line:32,column:12},end:{line:32,column:23}},"25":{start:{line:35,column:4},end:{line:44,column:6}},"26":{start:{line:36,column:25},end:{line:36,column:38}},"27":{start:{line:36,column:50},end:{line:36,column:60}},"28":{start:{line:36,column:75},end:{line:36,column:88}},"29":{start:{line:36,column:103},end:{line:36,column:116}},"30":{start:{line:36,column:130},end:{line:36,column:142}},"31":{start:{line:37,column:8},end:{line:43,column:11}},"32":{start:{line:41,column:22},end:{line:41,column:42}},"33":{start:{line:42,column:12},end:{line:42,column:45}},"34":{start:{line:45,column:4},end:{line:58,column:6}},"35":{start:{line:46,column:25},end:{line:46,column:38}},"36":{start:{line:46,column:50},end:{line:46,column:60}},"37":{start:{line:46,column:74},end:{line:46,column:86}},"38":{start:{line:47,column:8},end:{line:57,column:11}},"39":{start:{line:50,column:22},end:{line:50,column:42}},"40":{start:{line:51,column:12},end:{line:56,column:13}},"41":{start:{line:52,column:16},end:{line:52,column:51}},"42":{start:{line:55,column:16},end:{line:55,column:28}},"43":{start:{line:59,column:4},end:{line:59,column:29}},"44":{start:{line:61,column:0},end:{line:61,column:46}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:4,column:39},end:{line:4,column:40}},loc:{start:{line:4,column:51},end:{line:60,column:1}},line:4},"1":{name:"EntityBaseService",decl:{start:{line:5,column:13},end:{line:5,column:30}},loc:{start:{line:5,column:33},end:{line:6,column:5}},line:5},"2":{name:"(anonymous_2)",decl:{start:{line:7,column:29},end:{line:7,column:30}},loc:{start:{line:7,column:43},end:{line:22,column:5}},line:7},"3":{name:"(anonymous_3)",decl:{start:{line:16,column:16},end:{line:16,column:17}},loc:{start:{line:16,column:31},end:{line:21,column:9}},line:16},"4":{name:"(anonymous_4)",decl:{start:{line:23,column:34},end:{line:23,column:35}},loc:{start:{line:23,column:48},end:{line:34,column:5}},line:23},"5":{name:"(anonymous_5)",decl:{start:{line:28,column:16},end:{line:28,column:17}},loc:{start:{line:28,column:31},end:{line:33,column:9}},line:28},"6":{name:"(anonymous_6)",decl:{start:{line:35,column:35},end:{line:35,column:36}},loc:{start:{line:35,column:49},end:{line:44,column:5}},line:35},"7":{name:"(anonymous_7)",decl:{start:{line:40,column:16},end:{line:40,column:17}},loc:{start:{line:40,column:31},end:{line:43,column:9}},line:40},"8":{name:"(anonymous_8)",decl:{start:{line:45,column:31},end:{line:45,column:32}},loc:{start:{line:45,column:45},end:{line:58,column:5}},line:45},"9":{name:"(anonymous_9)",decl:{start:{line:49,column:16},end:{line:49,column:17}},loc:{start:{line:49,column:31},end:{line:57,column:9}},line:49}},branchMap:{"0":{loc:{start:{line:10,column:8},end:{line:12,column:9}},type:"if",locations:[{start:{line:10,column:8},end:{line:12,column:9}},{start:{line:10,column:8},end:{line:12,column:9}}],line:10},"1":{loc:{start:{line:42,column:19},end:{line:42,column:44}},type:"binary-expr",locations:[{start:{line:42,column:19},end:{line:42,column:29}},{start:{line:42,column:33},end:{line:42,column:36}},{start:{line:42,column:40},end:{line:42,column:44}}],line:42},"2":{loc:{start:{line:51,column:12},end:{line:56,column:13}},type:"if",locations:[{start:{line:51,column:12},end:{line:56,column:13}},{start:{line:51,column:12},end:{line:56,column:13}}],line:51},"3":{loc:{start:{line:51,column:18},end:{line:51,column:40}},type:"binary-expr",locations:[{start:{line:51,column:18},end:{line:51,column:21}},{start:{line:51,column:25},end:{line:51,column:40}}],line:51}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},b:{"0":[0,0],"1":[0,0,0],"2":[0,0],"3":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\entity-base-service.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\entity-base-service.ts"],names:[],mappings:";;AAEA,mCAA8B;AA6B9B;IAAA;IA6DA,CAAC;IA3De,sBAAI,GAAlB,UAAmB,EAAgD;YAA/C,0BAAU,EAAE,cAAI,EAAE,kBAAM,EAAE,oBAAO;QAEnD,IAAI,SAAS,GAAG,EAAE,CAAC;QACnB,EAAE,CAAC,CAAC,MAAM,CAAC,CAAC,CAAC;YACX,SAAS,GAAG,WAAW,GAAG,MAAM,CAAC;QACnC,CAAC;QAED,MAAM,CAAC,UAAU,CAAC,IAAI,CAAC;YACrB,GAAG,EAAE,OAAO,GAAG,iBAAiB,GAAG,SAAS;YAC5C,IAAI,MAAA;SACL,CAAC,CAAC,IAAI,CAAC,UAAA,GAAG;YACT,IAAI,MAAM,GAAG,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;YAClC,OAAO,MAAM,CAAC,aAAa,CAAC;YAC5B,cAAI,CAAC,wBAAwB,CAAC,MAAM,CAAC,CAAC;YAEtC,MAAM,CAAC,MAAoB,CAAC;QAC9B,CAAC,CAAC,CAAC;IACL,CAAC;IAEa,2BAAS,GAAvB,UAAwB,EAA6C;YAA5C,0BAAU,EAAE,oBAAO,EAAE,cAAI;QAEhD,MAAM,CAAC,UAAU,CAAC,IAAI,CAAC;YACrB,GAAG,EAAE,OAAO,GAAG,+BAA+B;YAC9C,IAAI,MAAA;SACL,CAAC,CAAC,IAAI,CAAC,UAAA,GAAG;YACT,IAAI,GAAG,GAAG,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;YAC/B,OAAO,GAAG,CAAC,aAAa,CAAC;YACzB,cAAI,CAAC,wBAAwB,CAAC,GAAG,CAAC,CAAC;YAEnC,MAAM,CAAC,GAAiB,CAAC;QAC3B,CAAC,CAAC,CAAC;IACL,CAAC;IAEa,4BAAU,GAAxB,UAAyB,EAA2E;YAA1E,0BAAU,EAAE,oBAAO,EAAE,0BAAU,EAAE,0BAAU,EAAE,wBAAS;QAE9E,MAAM,CAAC,UAAU,CAAC,IAAI,CAAC;YACrB,GAAG,EAAE,OAAO,GAAG,GAAG,GAAG,SAAS,GAAG,IAAI,GAAG,UAAU;YAClD,IAAI,EAAE,UAAU;SACjB,CAAC,CAAC,IAAI,CAAC,UAAA,GAAG;YACT,IAAI,GAAG,GAAG,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;YAC/B,MAAM,CAAC,GAAG,CAAC,MAAM,IAAI,GAAG,IAAI,IAAI,CAAC;QACnC,CAAC,CAAC,CAAC;IACL,CAAC;IAEa,wBAAM,GAApB,UAAqB,EAA+C;YAA9C,0BAAU,EAAE,oBAAO,EAAE,wBAAS;QAElD,MAAM,CAAC,UAAU,CAAC,IAAI,CAAC;YACrB,GAAG,EAAE,OAAO,GAAG,GAAG,GAAG,SAAS,GAAG,kBAAkB;SACpD,CAAC,CAAC,IAAI,CAAC,UAAA,GAAG;YACT,IAAI,GAAG,GAAG,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;YAE/B,EAAE,CAAC,CAAC,CAAC,CAAC,GAAG,IAAI,GAAG,CAAC,EAAE,KAAK,IAAI,CAAC,CAAC,CAAC,CAAC;gBAC9B,MAAM,CAAM,OAAO,CAAC,MAAM,CAAC,IAAI,KAAK,EAAE,CAAC,CAAC;YAC1C,CAAC;YACD,IAAI,CAAC,CAAC;gBACJ,MAAM,CAAC,IAAI,CAAC;YACd,CAAC;QACH,CAAC,CAAC,CAAC;IACL,CAAC;IACH,wBAAC;AAAD,CAAC,AA7DD,IA6DC;AA7DY,8CAAiB",sourcesContent:["import HttpClient from '../../http/http-client';\r\nimport {IEntityDBO} from '../../../business/entity-business';\r\nimport Util from '../../util';\r\n\r\nexport interface ISaveParams {\r\n  httpClient: HttpClient;\r\n  data: IEntityDBO;\r\n  expand: string;\r\n  dataURI: string;\r\n}\r\n\r\nexport interface IRecomputeParams {\r\n  httpClient: HttpClient;\r\n  data: IEntityDBO;\r\n  dataURI: string;\r\n}\r\n\r\nexport interface ICallMethodParams {\r\n  httpClient: HttpClient;\r\n  dataURI: string;\r\n  methodName: string;\r\n  parameters: any[];\r\n  entityKey: string;\r\n}\r\n\r\nexport interface IDeleteParams {\r\n  httpClient: HttpClient;\r\n  entityKey: string;\r\n  dataURI: string;\r\n}\r\n\r\nexport class EntityBaseService {\r\n\r\n  public static save({httpClient, data, expand, dataURI}: ISaveParams) {\r\n\r\n    let expandStr = '';\r\n    if (expand) {\r\n      expandStr = '&$expand=' + expand;\r\n    }\r\n\r\n    return httpClient.post({\r\n      uri: dataURI + '?$method=update' + expandStr,\r\n      data\r\n    }).then(res => {\r\n      let entity = JSON.parse(res.body);\r\n      delete entity.__entityModel;\r\n      Util.removeRestInfoFromEntity(entity);\r\n\r\n      return entity as IEntityDBO;\r\n    });\r\n  }\r\n\r\n  public static recompute({httpClient, dataURI, data}: IRecomputeParams) {\r\n\r\n    return httpClient.post({\r\n      uri: dataURI + '?$method=update&$refresh=true',\r\n      data\r\n    }).then(res => {\r\n      let dbo = JSON.parse(res.body);\r\n      delete dbo.__entityModel;\r\n      Util.removeRestInfoFromEntity(dbo);\r\n\r\n      return dbo as IEntityDBO;\r\n    });\r\n  }\r\n\r\n  public static callMethod({httpClient, dataURI, methodName, parameters, entityKey}: ICallMethodParams) {\r\n\r\n    return httpClient.post({\r\n      uri: dataURI + '(' + entityKey + ')/' + methodName,\r\n      data: parameters\r\n    }).then(res => {\r\n      let obj = JSON.parse(res.body);\r\n      return obj.result || obj || null;\r\n    });\r\n  }\r\n\r\n  public static delete({httpClient, dataURI, entityKey}: IDeleteParams): Promise<boolean> {\r\n\r\n    return httpClient.post({\r\n      uri: dataURI + '(' + entityKey + ')?$method=delete'\r\n    }).then(res => {\r\n      let obj = JSON.parse(res.body);\r\n\r\n      if (!(obj && obj.ok === true)) {\r\n        return <any>Promise.reject(new Error());\r\n      }\r\n      else {\r\n        return true;\r\n      }\r\n    });\r\n  }\r\n}\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_w8bz9q8gb.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var util_1=(cov_w8bz9q8gb.s[1]++,__webpack_require__(37));var EntityBaseService=(/** @class */cov_w8bz9q8gb.s[2]++,function(){cov_w8bz9q8gb.f[0]++;function EntityBaseService(){cov_w8bz9q8gb.f[1]++;}cov_w8bz9q8gb.s[3]++;EntityBaseService.save=function(_a){cov_w8bz9q8gb.f[2]++;var httpClient=(cov_w8bz9q8gb.s[4]++,_a.httpClient),data=(cov_w8bz9q8gb.s[5]++,_a.data),expand=(cov_w8bz9q8gb.s[6]++,_a.expand),dataURI=(cov_w8bz9q8gb.s[7]++,_a.dataURI);var expandStr=(cov_w8bz9q8gb.s[8]++,'');cov_w8bz9q8gb.s[9]++;if(expand){cov_w8bz9q8gb.b[0][0]++;cov_w8bz9q8gb.s[10]++;expandStr='&$expand='+expand;}else{cov_w8bz9q8gb.b[0][1]++;}cov_w8bz9q8gb.s[11]++;return httpClient.post({uri:dataURI+'?$method=update'+expandStr,data:data}).then(function(res){cov_w8bz9q8gb.f[3]++;var entity=(cov_w8bz9q8gb.s[12]++,JSON.parse(res.body));cov_w8bz9q8gb.s[13]++;delete entity.__entityModel;cov_w8bz9q8gb.s[14]++;util_1.default.removeRestInfoFromEntity(entity);cov_w8bz9q8gb.s[15]++;return entity;});};cov_w8bz9q8gb.s[16]++;EntityBaseService.recompute=function(_a){cov_w8bz9q8gb.f[4]++;var httpClient=(cov_w8bz9q8gb.s[17]++,_a.httpClient),dataURI=(cov_w8bz9q8gb.s[18]++,_a.dataURI),data=(cov_w8bz9q8gb.s[19]++,_a.data);cov_w8bz9q8gb.s[20]++;return httpClient.post({uri:dataURI+'?$method=update&$refresh=true',data:data}).then(function(res){cov_w8bz9q8gb.f[5]++;var dbo=(cov_w8bz9q8gb.s[21]++,JSON.parse(res.body));cov_w8bz9q8gb.s[22]++;delete dbo.__entityModel;cov_w8bz9q8gb.s[23]++;util_1.default.removeRestInfoFromEntity(dbo);cov_w8bz9q8gb.s[24]++;return dbo;});};cov_w8bz9q8gb.s[25]++;EntityBaseService.callMethod=function(_a){cov_w8bz9q8gb.f[6]++;var httpClient=(cov_w8bz9q8gb.s[26]++,_a.httpClient),dataURI=(cov_w8bz9q8gb.s[27]++,_a.dataURI),methodName=(cov_w8bz9q8gb.s[28]++,_a.methodName),parameters=(cov_w8bz9q8gb.s[29]++,_a.parameters),entityKey=(cov_w8bz9q8gb.s[30]++,_a.entityKey);cov_w8bz9q8gb.s[31]++;return httpClient.post({uri:dataURI+'('+entityKey+')/'+methodName,data:parameters}).then(function(res){cov_w8bz9q8gb.f[7]++;var obj=(cov_w8bz9q8gb.s[32]++,JSON.parse(res.body));cov_w8bz9q8gb.s[33]++;return(cov_w8bz9q8gb.b[1][0]++,obj.result)||(cov_w8bz9q8gb.b[1][1]++,obj)||(cov_w8bz9q8gb.b[1][2]++,null);});};cov_w8bz9q8gb.s[34]++;EntityBaseService.delete=function(_a){cov_w8bz9q8gb.f[8]++;var httpClient=(cov_w8bz9q8gb.s[35]++,_a.httpClient),dataURI=(cov_w8bz9q8gb.s[36]++,_a.dataURI),entityKey=(cov_w8bz9q8gb.s[37]++,_a.entityKey);cov_w8bz9q8gb.s[38]++;return httpClient.post({uri:dataURI+'('+entityKey+')?$method=delete'}).then(function(res){cov_w8bz9q8gb.f[9]++;var obj=(cov_w8bz9q8gb.s[39]++,JSON.parse(res.body));cov_w8bz9q8gb.s[40]++;if(!((cov_w8bz9q8gb.b[3][0]++,obj)&&(cov_w8bz9q8gb.b[3][1]++,obj.ok===true))){cov_w8bz9q8gb.b[2][0]++;cov_w8bz9q8gb.s[41]++;return Promise.reject(new Error());}else{cov_w8bz9q8gb.b[2][1]++;cov_w8bz9q8gb.s[42]++;return true;}});};cov_w8bz9q8gb.s[43]++;return EntityBaseService;}());cov_w8bz9q8gb.s[44]++;exports.EntityBaseService=EntityBaseService;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_vp3quukpc=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\presentation\\media.ts",hash="37e1f12b3fef986421cd6604842c3ed34fe30df7",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\presentation\\media.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:27},end:{line:9,column:3}},"2":{start:{line:5,column:18},end:{line:5,column:24}},"3":{start:{line:6,column:8},end:{line:6,column:23}},"4":{start:{line:8,column:4},end:{line:8,column:17}},"5":{start:{line:10,column:0},end:{line:10,column:24}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:27},end:{line:3,column:28}},loc:{start:{line:3,column:39},end:{line:9,column:1}},line:3},"1":{name:"Media",decl:{start:{line:4,column:13},end:{line:4,column:18}},loc:{start:{line:4,column:23},end:{line:7,column:5}},line:4}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},f:{"0":0,"1":0},b:{},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\presentation\\media.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\presentation\\media.ts"],names:[],mappings:";;AAEA;IAOE,eAAY,EAAoB;YAAnB,YAAG;QACd,IAAI,CAAC,GAAG,GAAG,GAAG,CAAC;IACjB,CAAC;IACH,YAAC;AAAD,CAAC,AAVD,IAUC;AAED,kBAAe,KAAK,CAAC",sourcesContent:["import Entity from './entity';\r\n\r\nclass Media {\r\n\r\n  public uri: string;\r\n\r\n  public upload: (file: any, mimeType?: string) => Promise<Entity>;\r\n  public delete: () => Promise<Entity>;\r\n\r\n  constructor({uri}: {uri: string}) {\r\n    this.uri = uri;\r\n  }\r\n}\r\n\r\nexport default Media;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_vp3quukpc.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var Media=(/** @class */cov_vp3quukpc.s[1]++,function(){cov_vp3quukpc.f[0]++;function Media(_a){cov_vp3quukpc.f[1]++;var uri=(cov_vp3quukpc.s[2]++,_a.uri);cov_vp3quukpc.s[3]++;this.uri=uri;}cov_vp3quukpc.s[4]++;return Media;}());cov_vp3quukpc.s[5]++;exports.default=Media;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_nilzo4sxx=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\util.ts",hash="2e1bde3924bb8610dbbed2fd24d5ce9527ad7c49",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\util.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:26},end:{line:29,column:3}},"2":{start:{line:6,column:4},end:{line:19,column:6}},"3":{start:{line:9,column:8},end:{line:11,column:9}},"4":{start:{line:10,column:12},end:{line:10,column:24}},"5":{start:{line:12,column:18},end:{line:12,column:39}},"6":{start:{line:13,column:8},end:{line:16,column:9}},"7":{start:{line:15,column:12},end:{line:15,column:24}},"8":{start:{line:17,column:19},end:{line:17,column:107}},"9":{start:{line:18,column:8},end:{line:18,column:20}},"10":{start:{line:20,column:4},end:{line:27,column:6}},"11":{start:{line:22,column:8},end:{line:24,column:9}},"12":{start:{line:23,column:12},end:{line:23,column:24}},"13":{start:{line:25,column:8},end:{line:25,column:105}},"14":{start:{line:26,column:8},end:{line:26,column:29}},"15":{start:{line:28,column:4},end:{line:28,column:16}},"16":{start:{line:30,column:0},end:{line:30,column:23}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:26},end:{line:3,column:27}},loc:{start:{line:3,column:38},end:{line:29,column:1}},line:3},"1":{name:"Util",decl:{start:{line:4,column:13},end:{line:4,column:17}},loc:{start:{line:4,column:20},end:{line:5,column:5}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:6,column:30},end:{line:6,column:31}},loc:{start:{line:6,column:52},end:{line:19,column:5}},line:6},"3":{name:"(anonymous_3)",decl:{start:{line:20,column:33},end:{line:20,column:34}},loc:{start:{line:20,column:49},end:{line:27,column:5}},line:20}},branchMap:{"0":{loc:{start:{line:9,column:8},end:{line:11,column:9}},type:"if",locations:[{start:{line:9,column:8},end:{line:11,column:9}},{start:{line:9,column:8},end:{line:11,column:9}}],line:9},"1":{loc:{start:{line:13,column:8},end:{line:16,column:9}},type:"if",locations:[{start:{line:13,column:8},end:{line:16,column:9}},{start:{line:13,column:8},end:{line:16,column:9}}],line:13},"2":{loc:{start:{line:22,column:8},end:{line:24,column:9}},type:"if",locations:[{start:{line:22,column:8},end:{line:24,column:9}},{start:{line:22,column:8},end:{line:24,column:9}}],line:22}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0},f:{"0":0,"1":0,"2":0,"3":0},b:{"0":[0,0],"1":[0,0],"2":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\util.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\util.ts"],names:[],mappings:";;AAAA;IAAA;IA4BA,CAAC;IA1Be,uBAAkB,GAAhC,UAAiC,UAAkB;QACjD,mEAAmE;QACnE,8BAA8B;QAC9B,EAAE,CAAC,CAAC,CAAC,UAAU,CAAC,CAAC,CAAC;YAChB,MAAM,CAAC,IAAI,CAAC;QACd,CAAC;QAED,IAAI,GAAG,GAAG,UAAU,CAAC,KAAK,CAAC,GAAG,CAAC,CAAC;QAChC,EAAE,CAAC,CAAC,GAAG,CAAC,MAAM,KAAK,CAAC,CAAC,CAAC,CAAC;YACrB,0DAA0D;YAC1D,MAAM,CAAC,IAAI,CAAC;QACd,CAAC;QACD,IAAI,IAAI,GAAS,IAAI,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,QAAQ,CAAC,GAAG,CAAC,CAAC,CAAC,EAAE,EAAE,CAAC,EAAE,QAAQ,CAAC,GAAG,CAAC,CAAC,CAAC,EAAE,EAAE,CAAC,GAAG,CAAC,EAAE,QAAQ,CAAC,GAAG,CAAC,CAAC,CAAC,EAAE,EAAE,CAAC,CAAC,CAAC,CAAC;QAC1G,MAAM,CAAC,IAAI,CAAC;IACd,CAAC;IAEa,0BAAqB,GAAnC,UAAoC,IAAU;QAC5C,IAAI,aAAqB,CAAC;QAE1B,EAAE,CAAC,CAAC,CAAC,CAAC,IAAI,YAAY,IAAI,CAAC,CAAC,CAAC,CAAC;YAC5B,MAAM,CAAC,IAAI,CAAC;QACd,CAAC;QAED,aAAa,GAAG,IAAI,CAAC,UAAU,EAAE,GAAG,GAAG,GAAG,CAAC,IAAI,CAAC,WAAW,EAAE,GAAG,CAAC,CAAC,GAAG,GAAG,GAAG,IAAI,CAAC,cAAc,EAAE,CAAC;QACjG,MAAM,CAAC,aAAa,CAAC;IACvB,CAAC;IACH,WAAC;AAAD,CAAC,AA5BD,IA4BC;AAED,kBAAe,IAAI,CAAC",sourcesContent:["class Util {\r\n\r\n  public static wakParseSimpleDate(stringDate: string): Date {\r\n    // In wakanda, simple date is a date with only year, month and hour\r\n    // in this format : DD!MM!YYYY\r\n    if (!stringDate) {\r\n      return null;\r\n    }\r\n\r\n    let arr = stringDate.split('!');\r\n    if (arr.length !== 3) {\r\n      // return null or throw an error, simple date format is ko\r\n      return null;\r\n    }\r\n    let date: Date = new Date(Date.UTC(parseInt(arr[2], 10), parseInt(arr[1], 10) - 1, parseInt(arr[0], 10)));\r\n    return date;\r\n  }\r\n\r\n  public static wakToStringSimpleDate(date: Date): String {\r\n    let wakSimpleDate: String;\r\n\r\n    if (!(date instanceof Date)) {\r\n      return null;\r\n    }\r\n\r\n    wakSimpleDate = date.getUTCDate() + '!' + (date.getUTCMonth() + 1) + '!' + date.getUTCFullYear();\r\n    return wakSimpleDate;\r\n  }\r\n}\r\n\r\nexport default Util;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_nilzo4sxx.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var Util=(/** @class */cov_nilzo4sxx.s[1]++,function(){cov_nilzo4sxx.f[0]++;function Util(){cov_nilzo4sxx.f[1]++;}cov_nilzo4sxx.s[2]++;Util.wakParseSimpleDate=function(stringDate){cov_nilzo4sxx.f[2]++;cov_nilzo4sxx.s[3]++;// In wakanda, simple date is a date with only year, month and hour
// in this format : DD!MM!YYYY
if(!stringDate){cov_nilzo4sxx.b[0][0]++;cov_nilzo4sxx.s[4]++;return null;}else{cov_nilzo4sxx.b[0][1]++;}var arr=(cov_nilzo4sxx.s[5]++,stringDate.split('!'));cov_nilzo4sxx.s[6]++;if(arr.length!==3){cov_nilzo4sxx.b[1][0]++;cov_nilzo4sxx.s[7]++;// return null or throw an error, simple date format is ko
return null;}else{cov_nilzo4sxx.b[1][1]++;}var date=(cov_nilzo4sxx.s[8]++,new Date(Date.UTC(parseInt(arr[2],10),parseInt(arr[1],10)-1,parseInt(arr[0],10))));cov_nilzo4sxx.s[9]++;return date;};cov_nilzo4sxx.s[10]++;Util.wakToStringSimpleDate=function(date){cov_nilzo4sxx.f[3]++;var wakSimpleDate;cov_nilzo4sxx.s[11]++;if(!(date instanceof Date)){cov_nilzo4sxx.b[2][0]++;cov_nilzo4sxx.s[12]++;return null;}else{cov_nilzo4sxx.b[2][1]++;}cov_nilzo4sxx.s[13]++;wakSimpleDate=date.getUTCDate()+'!'+(date.getUTCMonth()+1)+'!'+date.getUTCFullYear();cov_nilzo4sxx.s[14]++;return wakSimpleDate;};cov_nilzo4sxx.s[15]++;return Util;}());cov_nilzo4sxx.s[16]++;exports.default=Util;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_2iporng7bv=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\dataclass-base-service.ts",hash="52678e33c085a184d53b062a55527cdceba77f33",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\dataclass-base-service.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:13},end:{line:3,column:34}},"2":{start:{line:4,column:42},end:{line:63,column:3}},"3":{start:{line:7,column:4},end:{line:22,column:6}},"4":{start:{line:8,column:25},end:{line:8,column:38}},"5":{start:{line:8,column:46},end:{line:8,column:52}},"6":{start:{line:8,column:64},end:{line:8,column:74}},"7":{start:{line:8,column:86},end:{line:8,column:96}},"8":{start:{line:9,column:8},end:{line:11,column:9}},"9":{start:{line:10,column:12},end:{line:10,column:63}},"10":{start:{line:12,column:24},end:{line:12,column:61}},"11":{start:{line:13,column:8},end:{line:21,column:11}},"12":{start:{line:17,column:25},end:{line:17,column:45}},"13":{start:{line:18,column:12},end:{line:18,column:40}},"14":{start:{line:19,column:12},end:{line:19,column:60}},"15":{start:{line:20,column:12},end:{line:20,column:26}},"16":{start:{line:23,column:4},end:{line:41,column:6}},"17":{start:{line:24,column:25},end:{line:24,column:38}},"18":{start:{line:24,column:50},end:{line:24,column:60}},"19":{start:{line:24,column:72},end:{line:24,column:82}},"20":{start:{line:25,column:8},end:{line:25,column:37}},"21":{start:{line:26,column:8},end:{line:28,column:9}},"22":{start:{line:27,column:12},end:{line:27,column:72}},"23":{start:{line:29,column:24},end:{line:29,column:61}},"24":{start:{line:30,column:8},end:{line:40,column:11}},"25":{start:{line:33,column:29},end:{line:33,column:49}},"26":{start:{line:34,column:12},end:{line:34,column:44}},"27":{start:{line:35,column:12},end:{line:38,column:13}},"28":{start:{line:36,column:29},end:{line:36,column:35}},"29":{start:{line:37,column:16},end:{line:37,column:64}},"30":{start:{line:39,column:12},end:{line:39,column:30}},"31":{start:{line:42,column:4},end:{line:51,column:6}},"32":{start:{line:43,column:25},end:{line:43,column:38}},"33":{start:{line:43,column:53},end:{line:43,column:66}},"34":{start:{line:43,column:81},end:{line:43,column:94}},"35":{start:{line:43,column:106},end:{line:43,column:116}},"36":{start:{line:44,column:8},end:{line:50,column:11}},"37":{start:{line:48,column:22},end:{line:48,column:42}},"38":{start:{line:49,column:12},end:{line:49,column:45}},"39":{start:{line:52,column:4},end:{line:61,column:6}},"40":{start:{line:53,column:8},end:{line:60,column:11}},"41":{start:{line:54,column:12},end:{line:59,column:13}},"42":{start:{line:55,column:16},end:{line:55,column:45}},"43":{start:{line:58,column:16},end:{line:58,column:31}},"44":{start:{line:62,column:4},end:{line:62,column:32}},"45":{start:{line:64,column:0},end:{line:64,column:52}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:4,column:42},end:{line:4,column:43}},loc:{start:{line:4,column:54},end:{line:63,column:1}},line:4},"1":{name:"DataClassBaseService",decl:{start:{line:5,column:13},end:{line:5,column:33}},loc:{start:{line:5,column:36},end:{line:6,column:5}},line:5},"2":{name:"(anonymous_2)",decl:{start:{line:7,column:32},end:{line:7,column:33}},loc:{start:{line:7,column:46},end:{line:22,column:5}},line:7},"3":{name:"(anonymous_3)",decl:{start:{line:16,column:18},end:{line:16,column:19}},loc:{start:{line:16,column:33},end:{line:21,column:9}},line:16},"4":{name:"(anonymous_4)",decl:{start:{line:23,column:33},end:{line:23,column:34}},loc:{start:{line:23,column:47},end:{line:41,column:5}},line:23},"5":{name:"(anonymous_5)",decl:{start:{line:32,column:16},end:{line:32,column:17}},loc:{start:{line:32,column:31},end:{line:40,column:9}},line:32},"6":{name:"(anonymous_6)",decl:{start:{line:42,column:38},end:{line:42,column:39}},loc:{start:{line:42,column:52},end:{line:51,column:5}},line:42},"7":{name:"(anonymous_7)",decl:{start:{line:47,column:16},end:{line:47,column:17}},loc:{start:{line:47,column:31},end:{line:50,column:9}},line:47},"8":{name:"(anonymous_8)",decl:{start:{line:52,column:49},end:{line:52,column:50}},loc:{start:{line:52,column:67},end:{line:61,column:5}},line:52},"9":{name:"(anonymous_9)",decl:{start:{line:53,column:26},end:{line:53,column:27}},loc:{start:{line:53,column:45},end:{line:60,column:9}},line:53}},branchMap:{"0":{loc:{start:{line:9,column:8},end:{line:11,column:9}},type:"if",locations:[{start:{line:9,column:8},end:{line:11,column:9}},{start:{line:9,column:8},end:{line:11,column:9}}],line:9},"1":{loc:{start:{line:9,column:12},end:{line:9,column:62}},type:"binary-expr",locations:[{start:{line:9,column:12},end:{line:9,column:35}},{start:{line:9,column:39},end:{line:9,column:62}}],line:9},"2":{loc:{start:{line:26,column:8},end:{line:28,column:9}},type:"if",locations:[{start:{line:26,column:8},end:{line:28,column:9}},{start:{line:26,column:8},end:{line:28,column:9}}],line:26},"3":{loc:{start:{line:49,column:19},end:{line:49,column:44}},type:"binary-expr",locations:[{start:{line:49,column:19},end:{line:49,column:29}},{start:{line:49,column:33},end:{line:49,column:36}},{start:{line:49,column:40},end:{line:49,column:44}}],line:49},"4":{loc:{start:{line:54,column:12},end:{line:59,column:13}},type:"if",locations:[{start:{line:54,column:12},end:{line:59,column:13}},{start:{line:54,column:12},end:{line:59,column:13}}],line:54}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0,0],"4":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\dataclass-base-service.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\dataclass-base-service.ts"],names:[],mappings:"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",sourcesContent:["import HttpClient from '../../http/http-client';\r\nimport {QueryOption} from '../../../presentation/query-option';\r\nimport {IEntityDBO} from '../../../business/entity-business';\r\nimport {ICollectionDBO} from '../../../business/collection-business';\r\nimport Util from '../../util';\r\n\r\nexport interface IFindParams {\r\n  httpClient: HttpClient;\r\n  key: number|string;\r\n  options: QueryOption;\r\n  dataURI: string;\r\n}\r\n\r\nexport interface IQueryParams {\r\n  httpClient: HttpClient;\r\n  options: QueryOption;\r\n  dataURI: string;\r\n}\r\n\r\nexport interface ICallMethodParams {\r\n  httpClient: HttpClient;\r\n  methodName: string;\r\n  parameters: any[];\r\n  dataURI: string;\r\n}\r\n\r\nexport class DataClassBaseService {\r\n\r\n  public static find({httpClient, key, options, dataURI}: IFindParams) {\r\n\r\n    if (typeof key !== 'string' && typeof key !== 'number') {\r\n      throw new Error('DataClass.find: Invalid id type');\r\n    }\r\n\r\n    let optString = Util.handleOptions(options);\r\n\r\n    return httpClient.get({\r\n      uri: dataURI + '(' + key + ')' + optString\r\n    })\r\n      .then(res => {\r\n        let entity = JSON.parse(res.body);\r\n        delete entity.__entityModel;\r\n\r\n        Util.removeRestInfoFromEntity(entity);\r\n\r\n        return entity as IEntityDBO;\r\n      });\r\n  }\r\n\r\n  public static query({httpClient, options, dataURI}: IQueryParams) {\r\n\r\n    options.method = 'entityset';\r\n\r\n    if (Array.isArray(options.params)) {\r\n      options.params = this._sanitizeOptionParams(options.params);\r\n    }\r\n\r\n    let optString = Util.handleOptions(options);\r\n\r\n    return httpClient.get({\r\n      uri: dataURI + optString\r\n    }).then(res => {\r\n      let collection = JSON.parse(res.body);\r\n      delete collection.__entityModel;\r\n\r\n      for (let entity of collection.__ENTITIES) {\r\n        Util.removeRestInfoFromEntity(entity);\r\n      }\r\n\r\n      return collection as ICollectionDBO;\r\n    });\r\n  }\r\n\r\n  public static callMethod({httpClient, methodName, parameters, dataURI}: ICallMethodParams) {\r\n\r\n    return httpClient.post({\r\n      uri: dataURI + '/' + methodName,\r\n      data: parameters\r\n    }).then(res => {\r\n      let obj = JSON.parse(res.body);\r\n      return obj.result || obj || null;\r\n    });\r\n  }\r\n\r\n  private static _sanitizeOptionParams(params: any[]): any[] {\r\n    return params.map(element => {\r\n      if (element instanceof Date) {\r\n        return element.toISOString();\r\n      }\r\n      else {\r\n        return element;\r\n      }\r\n    });\r\n  }\r\n}\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_2iporng7bv.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var util_1=(cov_2iporng7bv.s[1]++,__webpack_require__(37));var DataClassBaseService=(/** @class */cov_2iporng7bv.s[2]++,function(){cov_2iporng7bv.f[0]++;function DataClassBaseService(){cov_2iporng7bv.f[1]++;}cov_2iporng7bv.s[3]++;DataClassBaseService.find=function(_a){cov_2iporng7bv.f[2]++;var httpClient=(cov_2iporng7bv.s[4]++,_a.httpClient),key=(cov_2iporng7bv.s[5]++,_a.key),options=(cov_2iporng7bv.s[6]++,_a.options),dataURI=(cov_2iporng7bv.s[7]++,_a.dataURI);cov_2iporng7bv.s[8]++;if((cov_2iporng7bv.b[1][0]++,typeof key!=='string')&&(cov_2iporng7bv.b[1][1]++,typeof key!=='number')){cov_2iporng7bv.b[0][0]++;cov_2iporng7bv.s[9]++;throw new Error('DataClass.find: Invalid id type');}else{cov_2iporng7bv.b[0][1]++;}var optString=(cov_2iporng7bv.s[10]++,util_1.default.handleOptions(options));cov_2iporng7bv.s[11]++;return httpClient.get({uri:dataURI+'('+key+')'+optString}).then(function(res){cov_2iporng7bv.f[3]++;var entity=(cov_2iporng7bv.s[12]++,JSON.parse(res.body));cov_2iporng7bv.s[13]++;delete entity.__entityModel;cov_2iporng7bv.s[14]++;util_1.default.removeRestInfoFromEntity(entity);cov_2iporng7bv.s[15]++;return entity;});};cov_2iporng7bv.s[16]++;DataClassBaseService.query=function(_a){cov_2iporng7bv.f[4]++;var httpClient=(cov_2iporng7bv.s[17]++,_a.httpClient),options=(cov_2iporng7bv.s[18]++,_a.options),dataURI=(cov_2iporng7bv.s[19]++,_a.dataURI);cov_2iporng7bv.s[20]++;options.method='entityset';cov_2iporng7bv.s[21]++;if(Array.isArray(options.params)){cov_2iporng7bv.b[2][0]++;cov_2iporng7bv.s[22]++;options.params=this._sanitizeOptionParams(options.params);}else{cov_2iporng7bv.b[2][1]++;}var optString=(cov_2iporng7bv.s[23]++,util_1.default.handleOptions(options));cov_2iporng7bv.s[24]++;return httpClient.get({uri:dataURI+optString}).then(function(res){cov_2iporng7bv.f[5]++;var collection=(cov_2iporng7bv.s[25]++,JSON.parse(res.body));cov_2iporng7bv.s[26]++;delete collection.__entityModel;cov_2iporng7bv.s[27]++;for(var _i=0,_a=collection.__ENTITIES;_i<_a.length;_i++){var entity=(cov_2iporng7bv.s[28]++,_a[_i]);cov_2iporng7bv.s[29]++;util_1.default.removeRestInfoFromEntity(entity);}cov_2iporng7bv.s[30]++;return collection;});};cov_2iporng7bv.s[31]++;DataClassBaseService.callMethod=function(_a){cov_2iporng7bv.f[6]++;var httpClient=(cov_2iporng7bv.s[32]++,_a.httpClient),methodName=(cov_2iporng7bv.s[33]++,_a.methodName),parameters=(cov_2iporng7bv.s[34]++,_a.parameters),dataURI=(cov_2iporng7bv.s[35]++,_a.dataURI);cov_2iporng7bv.s[36]++;return httpClient.post({uri:dataURI+'/'+methodName,data:parameters}).then(function(res){cov_2iporng7bv.f[7]++;var obj=(cov_2iporng7bv.s[37]++,JSON.parse(res.body));cov_2iporng7bv.s[38]++;return(cov_2iporng7bv.b[3][0]++,obj.result)||(cov_2iporng7bv.b[3][1]++,obj)||(cov_2iporng7bv.b[3][2]++,null);});};cov_2iporng7bv.s[39]++;DataClassBaseService._sanitizeOptionParams=function(params){cov_2iporng7bv.f[8]++;cov_2iporng7bv.s[40]++;return params.map(function(element){cov_2iporng7bv.f[9]++;cov_2iporng7bv.s[41]++;if(element instanceof Date){cov_2iporng7bv.b[4][0]++;cov_2iporng7bv.s[42]++;return element.toISOString();}else{cov_2iporng7bv.b[4][1]++;cov_2iporng7bv.s[43]++;return element;}});};cov_2iporng7bv.s[44]++;return DataClassBaseService;}());cov_2iporng7bv.s[45]++;exports.DataClassBaseService=DataClassBaseService;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_239wwtu367=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\collection-base-service.ts",hash="099e81bd8ea2b76bfb5b94015536ee1be02c49f3",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\collection-base-service.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:13},end:{line:3,column:34}},"2":{start:{line:4,column:43},end:{line:56,column:3}},"3":{start:{line:7,column:4},end:{line:33,column:6}},"4":{start:{line:8,column:25},end:{line:8,column:38}},"5":{start:{line:8,column:56},end:{line:8,column:72}},"6":{start:{line:8,column:88},end:{line:8,column:102}},"7":{start:{line:8,column:114},end:{line:8,column:124}},"8":{start:{line:9,column:8},end:{line:13,column:9}},"9":{start:{line:10,column:12},end:{line:12,column:13}},"10":{start:{line:11,column:16},end:{line:11,column:110}},"11":{start:{line:14,column:8},end:{line:14,column:40}},"12":{start:{line:15,column:24},end:{line:15,column:61}},"13":{start:{line:18,column:8},end:{line:20,column:9}},"14":{start:{line:19,column:12},end:{line:19,column:49}},"15":{start:{line:21,column:18},end:{line:21,column:31}},"16":{start:{line:22,column:8},end:{line:32,column:11}},"17":{start:{line:25,column:22},end:{line:25,column:42}},"18":{start:{line:26,column:12},end:{line:26,column:37}},"19":{start:{line:27,column:12},end:{line:30,column:13}},"20":{start:{line:28,column:29},end:{line:28,column:35}},"21":{start:{line:29,column:16},end:{line:29,column:64}},"22":{start:{line:31,column:12},end:{line:31,column:23}},"23":{start:{line:34,column:4},end:{line:54,column:6}},"24":{start:{line:35,column:25},end:{line:35,column:38}},"25":{start:{line:35,column:56},end:{line:35,column:72}},"26":{start:{line:35,column:88},end:{line:35,column:102}},"27":{start:{line:35,column:117},end:{line:35,column:130}},"28":{start:{line:35,column:145},end:{line:35,column:158}},"29":{start:{line:36,column:18},end:{line:36,column:31}},"30":{start:{line:37,column:8},end:{line:46,column:9}},"31":{start:{line:38,column:12},end:{line:38,column:36}},"32":{start:{line:41,column:28},end:{line:44,column:14}},"33":{start:{line:45,column:12},end:{line:45,column:44}},"34":{start:{line:47,column:8},end:{line:53,column:11}},"35":{start:{line:51,column:22},end:{line:51,column:42}},"36":{start:{line:52,column:12},end:{line:52,column:45}},"37":{start:{line:55,column:4},end:{line:55,column:33}},"38":{start:{line:57,column:0},end:{line:57,column:54}},"39":{start:{line:59,column:4},end:{line:59,column:69}},"40":{start:{line:61,column:0},end:{line:61,column:40}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:4,column:43},end:{line:4,column:44}},loc:{start:{line:4,column:55},end:{line:56,column:1}},line:4},"1":{name:"CollectionBaseService",decl:{start:{line:5,column:13},end:{line:5,column:34}},loc:{start:{line:5,column:37},end:{line:6,column:5}},line:5},"2":{name:"(anonymous_2)",decl:{start:{line:7,column:34},end:{line:7,column:35}},loc:{start:{line:7,column:48},end:{line:33,column:5}},line:7},"3":{name:"(anonymous_3)",decl:{start:{line:24,column:16},end:{line:24,column:17}},loc:{start:{line:24,column:31},end:{line:32,column:9}},line:24},"4":{name:"(anonymous_4)",decl:{start:{line:34,column:39},end:{line:34,column:40}},loc:{start:{line:34,column:53},end:{line:54,column:5}},line:34},"5":{name:"(anonymous_5)",decl:{start:{line:50,column:16},end:{line:50,column:17}},loc:{start:{line:50,column:31},end:{line:53,column:9}},line:50},"6":{name:"isEntitySetUri",decl:{start:{line:58,column:9},end:{line:58,column:23}},loc:{start:{line:58,column:29},end:{line:60,column:1}},line:58}},branchMap:{"0":{loc:{start:{line:9,column:8},end:{line:13,column:9}},type:"if",locations:[{start:{line:9,column:8},end:{line:13,column:9}},{start:{line:9,column:8},end:{line:13,column:9}}],line:9},"1":{loc:{start:{line:10,column:12},end:{line:12,column:13}},type:"if",locations:[{start:{line:10,column:12},end:{line:12,column:13}},{start:{line:10,column:12},end:{line:12,column:13}}],line:10},"2":{loc:{start:{line:10,column:16},end:{line:10,column:59}},type:"binary-expr",locations:[{start:{line:10,column:16},end:{line:10,column:30}},{start:{line:10,column:34},end:{line:10,column:59}}],line:10},"3":{loc:{start:{line:18,column:8},end:{line:20,column:9}},type:"if",locations:[{start:{line:18,column:8},end:{line:20,column:9}},{start:{line:18,column:8},end:{line:20,column:9}}],line:18},"4":{loc:{start:{line:37,column:8},end:{line:46,column:9}},type:"if",locations:[{start:{line:37,column:8},end:{line:46,column:9}},{start:{line:37,column:8},end:{line:46,column:9}}],line:37},"5":{loc:{start:{line:52,column:19},end:{line:52,column:44}},type:"binary-expr",locations:[{start:{line:52,column:19},end:{line:52,column:29}},{start:{line:52,column:33},end:{line:52,column:36}},{start:{line:52,column:40},end:{line:52,column:44}}],line:52}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\collection-base-service.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\collection-base-service.ts"],names:[],mappings:";;AAGA,mCAA8B;AAiB9B;IAAA;IA4DA,CAAC;IA1De,2BAAK,GAAnB,UAAoB,EAA+D;YAA9D,0BAAU,EAAE,gCAAa,EAAE,4BAAW,EAAE,oBAAO;QAElE,EAAE,CAAC,CAAC,CAAC,WAAW,CAAC,CAAC,CAAC;YACjB,EAAE,CAAC,CAAC,OAAO,CAAC,MAAM,IAAI,OAAO,CAAC,MAAM,CAAC,MAAM,GAAG,CAAC,CAAC,CAAC,CAAC;gBAChD,MAAM,IAAI,KAAK,CAAC,4EAA4E,CAAC,CAAC;YAChG,CAAC;QACH,CAAC;QAED,OAAO,CAAC,MAAM,GAAG,cAAc,CAAC;QAEhC,IAAI,SAAS,GAAG,cAAI,CAAC,aAAa,CAAC,OAAO,CAAC,CAAC;QAE5C,iFAAiF;QACjF,6CAA6C;QAC7C,EAAE,CAAC,CAAC,CAAC,WAAW,CAAC,CAAC,CAAC;YACjB,SAAS,GAAG,GAAG,GAAG,SAAS,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC;QACvC,CAAC;QAED,IAAI,GAAG,GAAG,aAAa,CAAC;QAExB,MAAM,CAAC,UAAU,CAAC,GAAG,CAAC;YACpB,GAAG,EAAE,GAAG,GAAG,SAAS;SACrB,CAAC,CAAC,IAAI,CAAC,UAAA,GAAG;YACT,IAAI,GAAG,GAAG,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;YAE/B,OAAO,GAAG,CAAC,aAAa,CAAC;YAEzB,GAAG,CAAC,CAAe,UAAc,EAAd,KAAA,GAAG,CAAC,UAAU,EAAd,cAAc,EAAd,IAAc;gBAA5B,IAAI,MAAM,SAAA;gBACb,cAAI,CAAC,wBAAwB,CAAC,MAAM,CAAC,CAAC;aACvC;YAED,MAAM,CAAC,GAAqB,CAAC;QAC/B,CAAC,CAAC,CAAC;IACL,CAAC;IAEa,gCAAU,GAAxB,UAAyB,EAAmF;YAAlF,0BAAU,EAAE,gCAAa,EAAE,4BAAW,EAAE,0BAAU,EAAE,0BAAU;QACtF,IAAI,GAAG,GAAG,aAAa,CAAC;QAExB,EAAE,CAAC,CAAC,WAAW,CAAC,CAAC,CAAC;YAChB,GAAG,IAAI,GAAG,GAAG,UAAU,CAAC;QAC1B,CAAC;QACD,IAAI,CAAC,CAAC;YACJ,IAAI,SAAS,GAAG,cAAI,CAAC,aAAa,CAAC;gBACjC,MAAM,EAAE,cAAc;gBACtB,QAAQ,EAAE,UAAU;aACrB,CAAC,CAAC;YAEH,GAAG,IAAI,GAAG,GAAG,SAAS,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC;QAClC,CAAC;QAED,MAAM,CAAC,UAAU,CAAC,IAAI,CAAC;YACnB,GAAG,KAAA;YACH,IAAI,EAAE,UAAU;SACjB,CAAC,CAAC,IAAI,CAAC,UAAC,GAAQ;YACf,IAAI,GAAG,GAAG,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;YAC/B,MAAM,CAAC,GAAG,CAAC,MAAM,IAAI,GAAG,IAAI,IAAI,CAAC;QACnC,CAAC,CAAC,CAAC;IACP,CAAC;IACH,4BAAC;AAAD,CAAC,AA5DD,IA4DC;AA5DY,sDAAqB;AA8DlC,wBAA+B,GAAW;IACxC,MAAM,CAAC,+CAA+C,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC;AACnE,CAAC;AAFD,wCAEC",sourcesContent:["import HttpClient from '../../http/http-client';\r\nimport {QueryOption} from '../../../presentation/query-option';\r\nimport {ICollectionDBO} from '../../../business/collection-business';\r\nimport Util from '../../util';\r\n\r\nexport interface IBaseParams {\r\n  httpClient: HttpClient;\r\n  collectionUri: string;\r\n  isEntitySet: boolean;\r\n}\r\n\r\nexport interface IFetchParams extends IBaseParams {\r\n  options: QueryOption;\r\n}\r\n\r\nexport interface ICallMethodParams extends IBaseParams {\r\n  methodName: string;\r\n  parameters: any[];\r\n}\r\n\r\nexport class CollectionBaseService {\r\n\r\n  public static fetch({httpClient, collectionUri, isEntitySet, options}: IFetchParams) {\r\n\r\n    if (!isEntitySet) {\r\n      if (options.select && options.select.length > 0) {\r\n        throw new Error('Collection.fetch: option select is not allowed when collection is deferred');\r\n      }\r\n    }\r\n\r\n    options.method = 'subentityset';\r\n\r\n    let optString = Util.handleOptions(options);\r\n\r\n    //Remove the first ? on optString if it's not an entitySet (because there is also\r\n    //?$expand=... on collectionUri), and add a &\r\n    if (!isEntitySet) {\r\n      optString = '&' + optString.slice(1);\r\n    }\r\n\r\n    let uri = collectionUri;\r\n\r\n    return httpClient.get({\r\n      uri: uri + optString\r\n    }).then(res => {\r\n      let obj = JSON.parse(res.body);\r\n\r\n      delete obj.__entityModel;\r\n\r\n      for (let entity of obj.__ENTITIES) {\r\n        Util.removeRestInfoFromEntity(entity);\r\n      }\r\n\r\n      return obj as ICollectionDBO;\r\n    });\r\n  }\r\n\r\n  public static callMethod({httpClient, collectionUri, isEntitySet, methodName, parameters}: ICallMethodParams) {\r\n    let uri = collectionUri;\r\n\r\n    if (isEntitySet) {\r\n      uri += '/' + methodName;\r\n    }\r\n    else {\r\n      let optString = Util.handleOptions({\r\n        method: 'subentityset',\r\n        emMethod: methodName\r\n      });\r\n\r\n      uri += '&' + optString.slice(1);\r\n    }\r\n\r\n    return httpClient.post({\r\n        uri,\r\n        data: parameters\r\n      }).then((res: any) => {\r\n        let obj = JSON.parse(res.body);\r\n        return obj.result || obj || null;\r\n      });\r\n  }\r\n}\r\n\r\nexport function isEntitySetUri(uri: string): boolean {\r\n  return /^\\/rest\\/\\w+\\/\\$entityset\\/[A-Z0-9]+(\\?.*)?$/i.test(uri);\r\n}\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_239wwtu367.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var util_1=(cov_239wwtu367.s[1]++,__webpack_require__(37));var CollectionBaseService=(/** @class */cov_239wwtu367.s[2]++,function(){cov_239wwtu367.f[0]++;function CollectionBaseService(){cov_239wwtu367.f[1]++;}cov_239wwtu367.s[3]++;CollectionBaseService.fetch=function(_a){cov_239wwtu367.f[2]++;var httpClient=(cov_239wwtu367.s[4]++,_a.httpClient),collectionUri=(cov_239wwtu367.s[5]++,_a.collectionUri),isEntitySet=(cov_239wwtu367.s[6]++,_a.isEntitySet),options=(cov_239wwtu367.s[7]++,_a.options);cov_239wwtu367.s[8]++;if(!isEntitySet){cov_239wwtu367.b[0][0]++;cov_239wwtu367.s[9]++;if((cov_239wwtu367.b[2][0]++,options.select)&&(cov_239wwtu367.b[2][1]++,options.select.length>0)){cov_239wwtu367.b[1][0]++;cov_239wwtu367.s[10]++;throw new Error('Collection.fetch: option select is not allowed when collection is deferred');}else{cov_239wwtu367.b[1][1]++;}}else{cov_239wwtu367.b[0][1]++;}cov_239wwtu367.s[11]++;options.method='subentityset';var optString=(cov_239wwtu367.s[12]++,util_1.default.handleOptions(options));//Remove the first ? on optString if it's not an entitySet (because there is also
//?$expand=... on collectionUri), and add a &
cov_239wwtu367.s[13]++;if(!isEntitySet){cov_239wwtu367.b[3][0]++;cov_239wwtu367.s[14]++;optString='&'+optString.slice(1);}else{cov_239wwtu367.b[3][1]++;}var uri=(cov_239wwtu367.s[15]++,collectionUri);cov_239wwtu367.s[16]++;return httpClient.get({uri:uri+optString}).then(function(res){cov_239wwtu367.f[3]++;var obj=(cov_239wwtu367.s[17]++,JSON.parse(res.body));cov_239wwtu367.s[18]++;delete obj.__entityModel;cov_239wwtu367.s[19]++;for(var _i=0,_a=obj.__ENTITIES;_i<_a.length;_i++){var entity=(cov_239wwtu367.s[20]++,_a[_i]);cov_239wwtu367.s[21]++;util_1.default.removeRestInfoFromEntity(entity);}cov_239wwtu367.s[22]++;return obj;});};cov_239wwtu367.s[23]++;CollectionBaseService.callMethod=function(_a){cov_239wwtu367.f[4]++;var httpClient=(cov_239wwtu367.s[24]++,_a.httpClient),collectionUri=(cov_239wwtu367.s[25]++,_a.collectionUri),isEntitySet=(cov_239wwtu367.s[26]++,_a.isEntitySet),methodName=(cov_239wwtu367.s[27]++,_a.methodName),parameters=(cov_239wwtu367.s[28]++,_a.parameters);var uri=(cov_239wwtu367.s[29]++,collectionUri);cov_239wwtu367.s[30]++;if(isEntitySet){cov_239wwtu367.b[4][0]++;cov_239wwtu367.s[31]++;uri+='/'+methodName;}else{cov_239wwtu367.b[4][1]++;var optString=(cov_239wwtu367.s[32]++,util_1.default.handleOptions({method:'subentityset',emMethod:methodName}));cov_239wwtu367.s[33]++;uri+='&'+optString.slice(1);}cov_239wwtu367.s[34]++;return httpClient.post({uri:uri,data:parameters}).then(function(res){cov_239wwtu367.f[5]++;var obj=(cov_239wwtu367.s[35]++,JSON.parse(res.body));cov_239wwtu367.s[36]++;return(cov_239wwtu367.b[5][0]++,obj.result)||(cov_239wwtu367.b[5][1]++,obj)||(cov_239wwtu367.b[5][2]++,null);});};cov_239wwtu367.s[37]++;return CollectionBaseService;}());cov_239wwtu367.s[38]++;exports.CollectionBaseService=CollectionBaseService;function isEntitySetUri(uri){cov_239wwtu367.f[6]++;cov_239wwtu367.s[39]++;return /^\/rest\/\w+\/\$entityset\/[A-Z0-9]+(\?.*)?$/i.test(uri);}cov_239wwtu367.s[40]++;exports.isEntitySetUri=isEntitySetUri;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_1fido325oq=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\media-base-service.ts",hash="30a24b36706bf8f7609d1e125d785e0a29c47e46",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\media-base-service.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:38},end:{line:37,column:3}},"2":{start:{line:6,column:4},end:{line:18,column:6}},"3":{start:{line:7,column:25},end:{line:7,column:38}},"4":{start:{line:7,column:50},end:{line:7,column:60}},"5":{start:{line:7,column:74},end:{line:7,column:86}},"6":{start:{line:7,column:104},end:{line:7,column:120}},"7":{start:{line:7,column:129},end:{line:7,column:136}},"8":{start:{line:7,column:148},end:{line:7,column:158}},"9":{start:{line:8,column:18},end:{line:8,column:67}},"10":{start:{line:9,column:8},end:{line:11,column:9}},"11":{start:{line:10,column:12},end:{line:10,column:44}},"12":{start:{line:13,column:8},end:{line:17,column:11}},"13":{start:{line:19,column:4},end:{line:32,column:6}},"14":{start:{line:20,column:25},end:{line:20,column:38}},"15":{start:{line:20,column:50},end:{line:20,column:60}},"16":{start:{line:20,column:74},end:{line:20,column:86}},"17":{start:{line:20,column:102},end:{line:20,column:116}},"18":{start:{line:20,column:134},end:{line:20,column:150}},"19":{start:{line:21,column:18},end:{line:21,column:49}},"20":{start:{line:22,column:19},end:{line:25,column:9}},"21":{start:{line:26,column:8},end:{line:26,column:35}},"22":{start:{line:28,column:8},end:{line:31,column:11}},"23":{start:{line:33,column:4},end:{line:35,column:6}},"24":{start:{line:34,column:8},end:{line:34,column:69}},"25":{start:{line:36,column:4},end:{line:36,column:28}},"26":{start:{line:38,column:0},end:{line:38,column:44}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:38},end:{line:3,column:39}},loc:{start:{line:3,column:50},end:{line:37,column:1}},line:3},"1":{name:"MediaBaseService",decl:{start:{line:4,column:13},end:{line:4,column:29}},loc:{start:{line:4,column:32},end:{line:5,column:5}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:6,column:30},end:{line:6,column:31}},loc:{start:{line:6,column:44},end:{line:18,column:5}},line:6},"3":{name:"(anonymous_3)",decl:{start:{line:19,column:30},end:{line:19,column:31}},loc:{start:{line:19,column:44},end:{line:32,column:5}},line:19},"4":{name:"(anonymous_4)",decl:{start:{line:33,column:33},end:{line:33,column:34}},loc:{start:{line:33,column:78},end:{line:35,column:5}},line:33}},branchMap:{"0":{loc:{start:{line:9,column:8},end:{line:11,column:9}},type:"if",locations:[{start:{line:9,column:8},end:{line:11,column:9}},{start:{line:9,column:8},end:{line:11,column:9}}],line:9}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0},b:{"0":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\media-base-service.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\media-base-service.ts"],names:[],mappings:";;AAoBA;IAAA;IAqCA,CAAC;IAnCe,uBAAM,GAApB,UAAqB,EAA6E;YAA5E,0BAAU,EAAE,oBAAO,EAAE,wBAAS,EAAE,gCAAa,EAAE,cAAI,EAAE,oBAAO;QAEhF,IAAI,GAAG,GAAG,IAAI,CAAC,SAAS,CAAC,OAAO,EAAE,SAAS,EAAE,aAAa,CAAC,CAAC;QAE5D,EAAE,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC;YACZ,GAAG,IAAI,YAAY,GAAG,IAAI,CAAC,IAAI,CAAC;QAClC,CAAC;QAED,+EAA+E;QAC/E,MAAM,CAAC,UAAU,CAAC,IAAI,CAAC;YACrB,GAAG,KAAA;YACH,IAAI,EAAE,IAAI;YACV,MAAM,EAAE,IAAI;SACb,CAAC,CAAC;IACL,CAAC;IAEa,uBAAM,GAApB,UAAqB,EAA2E;YAA1E,0BAAU,EAAE,oBAAO,EAAE,wBAAS,EAAE,4BAAW,EAAE,gCAAa;QAC9E,IAAI,GAAG,GAAG,OAAO,GAAG,GAAG,GAAG,SAAS,GAAG,GAAG,CAAC;QAC1C,IAAI,IAAI,GAAQ;YACd,KAAK,EAAE,SAAS;YAChB,OAAO,EAAE,WAAW;SACrB,CAAC;QAEF,IAAI,CAAC,aAAa,CAAC,GAAG,IAAI,CAAC;QAE3B,gBAAgB;QAChB,MAAM,CAAC,UAAU,CAAC,IAAI,CAAC;YACrB,GAAG,KAAA;YACH,IAAI,MAAA;SACL,CAAC,CAAC;IACL,CAAC;IAEc,0BAAS,GAAxB,UAAyB,OAAe,EAAE,SAAiB,EAAE,aAAqB;QAChF,MAAM,CAAC,OAAO,GAAG,GAAG,GAAG,SAAS,GAAG,GAAG,GAAG,GAAG,GAAG,aAAa,CAAC;IAC/D,CAAC;IACH,uBAAC;AAAD,CAAC,AArCD,IAqCC;AArCY,4CAAgB",sourcesContent:["import HttpClient from '../../http/http-client';\r\nimport HttpResponse from '../../http/http-response';\r\n\r\nexport interface IUploadParams {\r\n  httpClient: HttpClient;\r\n  dataURI: string;\r\n  entityKey: string;\r\n  attributeName: string;\r\n  file: File;\r\n  isImage: boolean;\r\n}\r\n\r\nexport interface IDeleteParams {\r\n  httpClient: HttpClient;\r\n  dataURI: string;\r\n  entityKey: string;\r\n  entityStamp: number;\r\n  attributeName: string;\r\n}\r\n\r\nexport class MediaBaseService {\r\n\r\n  public static upload({httpClient, dataURI, entityKey, attributeName, file, isImage}: IUploadParams): Promise<HttpResponse> {\r\n\r\n    let uri = this._buildUri(dataURI, entityKey, attributeName);\r\n\r\n    if (isImage) {\r\n      uri += '?$rawPict=' + file.type;\r\n    }\r\n\r\n    //FIXME - real crappy not to return some piece of information to refresh entity\r\n    return httpClient.post({\r\n      uri,\r\n      data: file,\r\n      binary: true\r\n    });\r\n  }\r\n\r\n  public static delete({httpClient, dataURI, entityKey, entityStamp, attributeName}: IDeleteParams): Promise<HttpResponse> {\r\n    let uri = dataURI + '(' + entityKey + ')';\r\n    let data: any = {\r\n      __KEY: entityKey,\r\n      __STAMP: entityStamp\r\n    };\r\n\r\n    data[attributeName] = null;\r\n\r\n    //FIXME - crappy\r\n    return httpClient.post({\r\n      uri,\r\n      data\r\n    });\r\n  }\r\n\r\n  private static _buildUri(dataURI: string, entityKey: string, attributeName: string): string {\r\n    return dataURI + '(' + entityKey + ')' + '/' + attributeName;\r\n  }\r\n}\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1fido325oq.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var MediaBaseService=(/** @class */cov_1fido325oq.s[1]++,function(){cov_1fido325oq.f[0]++;function MediaBaseService(){cov_1fido325oq.f[1]++;}cov_1fido325oq.s[2]++;MediaBaseService.upload=function(_a){cov_1fido325oq.f[2]++;var httpClient=(cov_1fido325oq.s[3]++,_a.httpClient),dataURI=(cov_1fido325oq.s[4]++,_a.dataURI),entityKey=(cov_1fido325oq.s[5]++,_a.entityKey),attributeName=(cov_1fido325oq.s[6]++,_a.attributeName),file=(cov_1fido325oq.s[7]++,_a.file),isImage=(cov_1fido325oq.s[8]++,_a.isImage);var uri=(cov_1fido325oq.s[9]++,this._buildUri(dataURI,entityKey,attributeName));cov_1fido325oq.s[10]++;if(isImage){cov_1fido325oq.b[0][0]++;cov_1fido325oq.s[11]++;uri+='?$rawPict='+file.type;}else{cov_1fido325oq.b[0][1]++;}//FIXME - real crappy not to return some piece of information to refresh entity
cov_1fido325oq.s[12]++;return httpClient.post({uri:uri,data:file,binary:true});};cov_1fido325oq.s[13]++;MediaBaseService.delete=function(_a){cov_1fido325oq.f[3]++;var httpClient=(cov_1fido325oq.s[14]++,_a.httpClient),dataURI=(cov_1fido325oq.s[15]++,_a.dataURI),entityKey=(cov_1fido325oq.s[16]++,_a.entityKey),entityStamp=(cov_1fido325oq.s[17]++,_a.entityStamp),attributeName=(cov_1fido325oq.s[18]++,_a.attributeName);var uri=(cov_1fido325oq.s[19]++,dataURI+'('+entityKey+')');var data=(cov_1fido325oq.s[20]++,{__KEY:entityKey,__STAMP:entityStamp});cov_1fido325oq.s[21]++;data[attributeName]=null;//FIXME - crappy
cov_1fido325oq.s[22]++;return httpClient.post({uri:uri,data:data});};cov_1fido325oq.s[23]++;MediaBaseService._buildUri=function(dataURI,entityKey,attributeName){cov_1fido325oq.f[4]++;cov_1fido325oq.s[24]++;return dataURI+'('+entityKey+')'+'/'+attributeName;};cov_1fido325oq.s[25]++;return MediaBaseService;}());cov_1fido325oq.s[26]++;exports.MediaBaseService=MediaBaseService;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_1g5tm9eiah=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\presentation\\collection.ts",hash="b13c23a2296dc23d855fe9c204c4e653c26d88b9",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\presentation\\collection.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:32},end:{line:16,column:3}},"2":{start:{line:5,column:23},end:{line:5,column:34}},"3":{start:{line:5,column:48},end:{line:5,column:60}},"4":{start:{line:6,column:8},end:{line:6,column:27}},"5":{start:{line:7,column:8},end:{line:7,column:43}},"6":{start:{line:8,column:8},end:{line:13,column:11}},"7":{start:{line:15,column:4},end:{line:15,column:22}},"8":{start:{line:17,column:0},end:{line:17,column:29}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:32},end:{line:3,column:33}},loc:{start:{line:3,column:44},end:{line:16,column:1}},line:3},"1":{name:"Collection",decl:{start:{line:4,column:13},end:{line:4,column:23}},loc:{start:{line:4,column:28},end:{line:14,column:5}},line:4}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},f:{"0":0,"1":0},b:{},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\presentation\\collection.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\presentation\\collection.ts"],names:[],mappings:";;AAIA;IAoBE,oBAAY,EAAgE;YAA/D,sBAAQ,EAAE,wBAAS;QAC9B,IAAI,CAAC,QAAQ,GAAG,EAAE,CAAC;QACnB,IAAI,CAAC,SAAS,GAAG,QAAQ,KAAK,IAAI,CAAC;QAEnC,MAAM,CAAC,cAAc,CAAC,IAAI,EAAE,YAAY,EAAE;YACxC,UAAU,EAAE,KAAK;YACjB,YAAY,EAAE,KAAK;YACnB,QAAQ,EAAE,KAAK;YACf,KAAK,EAAE,SAAS;SACjB,CAAC,CAAC;IACL,CAAC;IACH,iBAAC;AAAD,CAAC,AA/BD,IA+BC;AACD,kBAAe,UAAU,CAAC",sourcesContent:["import Entity from './entity';\r\nimport {DataClass} from './dataclass';\r\nimport {QueryOption} from './query-option';\r\n\r\nclass Collection {\r\n\r\n  public entities: Entity[];\r\n  public _deferred: boolean;\r\n  public _count: number;\r\n  public _first: number;\r\n  public _sent: number;\r\n  public _pageSize: number;\r\n\r\n  [key: string]: any;\r\n\r\n  /* tslint:disable */\r\n  private _dataClass: DataClass;\r\n  /* tslint:enable */\r\n\r\n  public fetch: (options?: QueryOption) => Promise<Collection>;\r\n  public nextPage: () => Promise<Collection>;\r\n  public prevPage: () => Promise<Collection>;\r\n  public more: () => Promise<Collection>;\r\n\r\n  constructor({deferred, dataClass}: {deferred: boolean, dataClass: DataClass}) {\r\n    this.entities = [];\r\n    this._deferred = deferred === true;\r\n\r\n    Object.defineProperty(this, '_dataClass', {\r\n      enumerable: false,\r\n      configurable: false,\r\n      writable: false,\r\n      value: dataClass\r\n    });\r\n  }\r\n}\r\nexport default Collection;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1g5tm9eiah.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var Collection=(/** @class */cov_1g5tm9eiah.s[1]++,function(){cov_1g5tm9eiah.f[0]++;function Collection(_a){cov_1g5tm9eiah.f[1]++;var deferred=(cov_1g5tm9eiah.s[2]++,_a.deferred),dataClass=(cov_1g5tm9eiah.s[3]++,_a.dataClass);cov_1g5tm9eiah.s[4]++;this.entities=[];cov_1g5tm9eiah.s[5]++;this._deferred=deferred===true;cov_1g5tm9eiah.s[6]++;Object.defineProperty(this,'_dataClass',{enumerable:false,configurable:false,writable:false,value:dataClass});}cov_1g5tm9eiah.s[7]++;return Collection;}());cov_1g5tm9eiah.s[8]++;exports.default=Collection;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_1zdnplw1vn=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\directory-base-service.ts",hash="302841bd8025388fb15cc28fd876246b2f0fd729",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\directory-base-service.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:42},end:{line:60,column:3}},"2":{start:{line:6,column:4},end:{line:14,column:6}},"3":{start:{line:7,column:25},end:{line:7,column:38}},"4":{start:{line:7,column:51},end:{line:7,column:62}},"5":{start:{line:7,column:75},end:{line:7,column:86}},"6":{start:{line:7,column:99},end:{line:7,column:110}},"7":{start:{line:8,column:8},end:{line:13,column:11}},"8":{start:{line:12,column:12},end:{line:12,column:24}},"9":{start:{line:15,column:4},end:{line:28,column:6}},"10":{start:{line:16,column:25},end:{line:16,column:38}},"11":{start:{line:17,column:8},end:{line:27,column:11}},"12":{start:{line:20,column:22},end:{line:20,column:42}},"13":{start:{line:21,column:12},end:{line:26,column:13}},"14":{start:{line:22,column:16},end:{line:22,column:28}},"15":{start:{line:25,column:16},end:{line:25,column:51}},"16":{start:{line:29,column:4},end:{line:43,column:6}},"17":{start:{line:30,column:25},end:{line:30,column:38}},"18":{start:{line:31,column:8},end:{line:42,column:11}},"19":{start:{line:35,column:22},end:{line:35,column:42}},"20":{start:{line:36,column:12},end:{line:41,column:13}},"21":{start:{line:37,column:16},end:{line:37,column:34}},"22":{start:{line:40,column:16},end:{line:40,column:51}},"23":{start:{line:44,column:4},end:{line:58,column:6}},"24":{start:{line:45,column:25},end:{line:45,column:38}},"25":{start:{line:45,column:48},end:{line:45,column:56}},"26":{start:{line:46,column:8},end:{line:57,column:11}},"27":{start:{line:50,column:22},end:{line:50,column:42}},"28":{start:{line:51,column:12},end:{line:56,column:13}},"29":{start:{line:52,column:16},end:{line:52,column:28}},"30":{start:{line:55,column:16},end:{line:55,column:51}},"31":{start:{line:59,column:4},end:{line:59,column:32}},"32":{start:{line:61,column:0},end:{line:61,column:52}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:42},end:{line:3,column:43}},loc:{start:{line:3,column:54},end:{line:60,column:1}},line:3},"1":{name:"DirectoryBaseService",decl:{start:{line:4,column:13},end:{line:4,column:33}},loc:{start:{line:4,column:36},end:{line:5,column:5}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:6,column:33},end:{line:6,column:34}},loc:{start:{line:6,column:47},end:{line:14,column:5}},line:6},"3":{name:"(anonymous_3)",decl:{start:{line:11,column:16},end:{line:11,column:17}},loc:{start:{line:11,column:28},end:{line:13,column:9}},line:11},"4":{name:"(anonymous_4)",decl:{start:{line:15,column:34},end:{line:15,column:35}},loc:{start:{line:15,column:48},end:{line:28,column:5}},line:15},"5":{name:"(anonymous_5)",decl:{start:{line:19,column:16},end:{line:19,column:17}},loc:{start:{line:19,column:31},end:{line:27,column:9}},line:19},"6":{name:"(anonymous_6)",decl:{start:{line:29,column:42},end:{line:29,column:43}},loc:{start:{line:29,column:56},end:{line:43,column:5}},line:29},"7":{name:"(anonymous_7)",decl:{start:{line:34,column:18},end:{line:34,column:19}},loc:{start:{line:34,column:33},end:{line:42,column:9}},line:34},"8":{name:"(anonymous_8)",decl:{start:{line:44,column:51},end:{line:44,column:52}},loc:{start:{line:44,column:65},end:{line:58,column:5}},line:44},"9":{name:"(anonymous_9)",decl:{start:{line:49,column:16},end:{line:49,column:17}},loc:{start:{line:49,column:31},end:{line:57,column:9}},line:49}},branchMap:{"0":{loc:{start:{line:21,column:12},end:{line:26,column:13}},type:"if",locations:[{start:{line:21,column:12},end:{line:26,column:13}},{start:{line:21,column:12},end:{line:26,column:13}}],line:21},"1":{loc:{start:{line:21,column:16},end:{line:21,column:49}},type:"binary-expr",locations:[{start:{line:21,column:16},end:{line:21,column:26}},{start:{line:21,column:30},end:{line:21,column:49}}],line:21},"2":{loc:{start:{line:36,column:12},end:{line:41,column:13}},type:"if",locations:[{start:{line:36,column:12},end:{line:41,column:13}},{start:{line:36,column:12},end:{line:41,column:13}}],line:36},"3":{loc:{start:{line:36,column:16},end:{line:36,column:43}},type:"binary-expr",locations:[{start:{line:36,column:16},end:{line:36,column:26}},{start:{line:36,column:30},end:{line:36,column:43}}],line:36},"4":{loc:{start:{line:51,column:12},end:{line:56,column:13}},type:"if",locations:[{start:{line:51,column:12},end:{line:56,column:13}},{start:{line:51,column:12},end:{line:56,column:13}}],line:51},"5":{loc:{start:{line:51,column:16},end:{line:51,column:56}},type:"binary-expr",locations:[{start:{line:51,column:16},end:{line:51,column:19}},{start:{line:51,column:23},end:{line:51,column:33}},{start:{line:51,column:37},end:{line:51,column:56}}],line:51}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\directory-base-service.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\base\\directory-base-service.ts"],names:[],mappings:";;AAeA;IAAA;IA0DA,CAAC;IAxDe,0BAAK,GAAnB,UAAoB,EAC2D;YAD1D,0BAAU,EAAE,sBAAQ,EAAE,sBAAQ,EAAE,sBAAQ;QAG3D,MAAM,CAAC,UAAU,CAAC,IAAI,CAAC;YACrB,GAAG,EAAE,wBAAwB;YAC7B,IAAI,EAAE,CAAC,QAAQ,EAAE,QAAQ,EAAE,QAAQ,CAAC;SACrC,CAAC,CAAC,IAAI,CAAC;YACJ,MAAM,CAAC,IAAI,CAAC;QACd,CAAC,CAAC,CAAC;IACP,CAAC;IAEa,2BAAM,GAApB,UAAqB,EAAsC;YAArC,0BAAU;QAC9B,MAAM,CAAC,UAAU,CAAC,GAAG,CAAC;YACpB,GAAG,EAAE,yBAAyB;SAC/B,CAAC,CAAC,IAAI,CAAC,UAAA,GAAG;YACT,IAAI,GAAG,GAAG,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;YAC/B,EAAE,CAAC,CAAC,GAAG,CAAC,MAAM,IAAI,GAAG,CAAC,MAAM,KAAK,IAAI,CAAC,CAAC,CAAC;gBACtC,MAAM,CAAC,IAAI,CAAC;YACd,CAAC;YACD,IAAI,CAAC,CAAC;gBACJ,MAAM,CAAM,OAAO,CAAC,MAAM,CAAC,IAAI,KAAK,EAAE,CAAC,CAAC;YAC1C,CAAC;QACH,CAAC,CAAC,CAAC;IACL,CAAC;IAEa,mCAAc,GAA5B,UAA6B,EAAsC;YAArC,0BAAU;QACtC,MAAM,CAAC,UAAU,CAAC,GAAG,CAAC;YACpB,GAAG,EAAE,8BAA8B;SACpC,CAAC;aACC,IAAI,CAAC,UAAA,GAAG;YACP,IAAI,GAAG,GAAG,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;YAE/B,EAAE,CAAC,CAAC,GAAG,CAAC,MAAM,IAAI,GAAG,CAAC,MAAM,CAAC,EAAE,CAAC,CAAC,CAAC;gBAChC,MAAM,CAAC,GAAG,CAAC,MAAM,CAAC;YACpB,CAAC;YACD,IAAI,CAAC,CAAC;gBACJ,MAAM,CAAC,OAAO,CAAC,MAAM,CAAC,IAAI,KAAK,EAAE,CAAC,CAAC;YACrC,CAAC;QACH,CAAC,CAAC,CAAC;IACP,CAAC;IAEa,4CAAuB,GAArC,UAAsC,EAAgD;YAA/C,0BAAU,EAAE,gBAAK;QACtD,MAAM,CAAC,UAAU,CAAC,IAAI,CAAC;YACrB,GAAG,EAAE,uCAAuC;YAC5C,IAAI,EAAE,CAAC,KAAK,CAAC;SACd,CAAC,CAAC,IAAI,CAAC,UAAA,GAAG;YACT,IAAI,GAAG,GAAG,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;YAE/B,EAAE,CAAC,CAAC,GAAG,IAAI,GAAG,CAAC,MAAM,IAAI,GAAG,CAAC,MAAM,KAAK,IAAI,CAAC,CAAC,CAAC;gBAC7C,MAAM,CAAC,IAAI,CAAC;YACd,CAAC;YACD,IAAI,CAAC,CAAC;gBACJ,MAAM,CAAM,OAAO,CAAC,MAAM,CAAC,IAAI,KAAK,EAAE,CAAC,CAAC;YAC1C,CAAC;QACH,CAAC,CAAC,CAAC;IACL,CAAC;IACH,2BAAC;AAAD,CAAC,AA1DD,IA0DC;AA1DY,oDAAoB",sourcesContent:["import HttpClient from '../../http/http-client';\r\nimport {ICurrentUserDBO} from '../../../business/directory-business';\r\n\r\nexport interface ILoginParams {\r\n  httpClient: HttpClient;\r\n  username: string;\r\n  password: string;\r\n  duration: number;\r\n}\r\n\r\nexport interface ICurrentUserBelongsToParams {\r\n  httpClient: HttpClient;\r\n  group: string;\r\n}\r\n\r\nexport class DirectoryBaseService {\r\n\r\n  public static login({httpClient, username, password, duration}:\r\n  {httpClient: HttpClient, username: string, password: string, duration?: number}): Promise<boolean> {\r\n\r\n    return httpClient.post({\r\n      uri: '/rest/$directory/login',\r\n      data: [username, password, duration]\r\n    }).then(() => {\r\n        return true;\r\n      });\r\n  }\r\n\r\n  public static logout({httpClient}: {httpClient: HttpClient}): Promise<boolean> {\r\n    return httpClient.get({\r\n      uri: '/rest/$directory/logout'\r\n    }).then(res => {\r\n      let obj = JSON.parse(res.body);\r\n      if (obj.result && obj.result === true) {\r\n        return true;\r\n      }\r\n      else {\r\n        return <any>Promise.reject(new Error());\r\n      }\r\n    });\r\n  }\r\n\r\n  public static getCurrentUser({httpClient}: {httpClient: HttpClient}): Promise<ICurrentUserDBO> {\r\n    return httpClient.get({\r\n      uri: '/rest/$directory/currentUser'\r\n    })\r\n      .then(res => {\r\n        let obj = JSON.parse(res.body);\r\n\r\n        if (obj.result && obj.result.ID) {\r\n          return obj.result;\r\n        }\r\n        else {\r\n          return Promise.reject(new Error());\r\n        }\r\n      });\r\n  }\r\n\r\n  public static getCurrentUserBelongsTo({httpClient, group}: ICurrentUserBelongsToParams): Promise<boolean> {\r\n    return httpClient.post({\r\n      uri: '/rest/$directory/currentUserBelongsTo',\r\n      data: [group]\r\n    }).then(res => {\r\n      let obj = JSON.parse(res.body);\r\n\r\n      if (obj && obj.result && obj.result === true) {\r\n        return true;\r\n      }\r\n      else {\r\n        return <any>Promise.reject(new Error());\r\n      }\r\n    });\r\n  }\r\n}\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1zdnplw1vn.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var DirectoryBaseService=(/** @class */cov_1zdnplw1vn.s[1]++,function(){cov_1zdnplw1vn.f[0]++;function DirectoryBaseService(){cov_1zdnplw1vn.f[1]++;}cov_1zdnplw1vn.s[2]++;DirectoryBaseService.login=function(_a){cov_1zdnplw1vn.f[2]++;var httpClient=(cov_1zdnplw1vn.s[3]++,_a.httpClient),username=(cov_1zdnplw1vn.s[4]++,_a.username),password=(cov_1zdnplw1vn.s[5]++,_a.password),duration=(cov_1zdnplw1vn.s[6]++,_a.duration);cov_1zdnplw1vn.s[7]++;return httpClient.post({uri:'/rest/$directory/login',data:[username,password,duration]}).then(function(){cov_1zdnplw1vn.f[3]++;cov_1zdnplw1vn.s[8]++;return true;});};cov_1zdnplw1vn.s[9]++;DirectoryBaseService.logout=function(_a){cov_1zdnplw1vn.f[4]++;var httpClient=(cov_1zdnplw1vn.s[10]++,_a.httpClient);cov_1zdnplw1vn.s[11]++;return httpClient.get({uri:'/rest/$directory/logout'}).then(function(res){cov_1zdnplw1vn.f[5]++;var obj=(cov_1zdnplw1vn.s[12]++,JSON.parse(res.body));cov_1zdnplw1vn.s[13]++;if((cov_1zdnplw1vn.b[1][0]++,obj.result)&&(cov_1zdnplw1vn.b[1][1]++,obj.result===true)){cov_1zdnplw1vn.b[0][0]++;cov_1zdnplw1vn.s[14]++;return true;}else{cov_1zdnplw1vn.b[0][1]++;cov_1zdnplw1vn.s[15]++;return Promise.reject(new Error());}});};cov_1zdnplw1vn.s[16]++;DirectoryBaseService.getCurrentUser=function(_a){cov_1zdnplw1vn.f[6]++;var httpClient=(cov_1zdnplw1vn.s[17]++,_a.httpClient);cov_1zdnplw1vn.s[18]++;return httpClient.get({uri:'/rest/$directory/currentUser'}).then(function(res){cov_1zdnplw1vn.f[7]++;var obj=(cov_1zdnplw1vn.s[19]++,JSON.parse(res.body));cov_1zdnplw1vn.s[20]++;if((cov_1zdnplw1vn.b[3][0]++,obj.result)&&(cov_1zdnplw1vn.b[3][1]++,obj.result.ID)){cov_1zdnplw1vn.b[2][0]++;cov_1zdnplw1vn.s[21]++;return obj.result;}else{cov_1zdnplw1vn.b[2][1]++;cov_1zdnplw1vn.s[22]++;return Promise.reject(new Error());}});};cov_1zdnplw1vn.s[23]++;DirectoryBaseService.getCurrentUserBelongsTo=function(_a){cov_1zdnplw1vn.f[8]++;var httpClient=(cov_1zdnplw1vn.s[24]++,_a.httpClient),group=(cov_1zdnplw1vn.s[25]++,_a.group);cov_1zdnplw1vn.s[26]++;return httpClient.post({uri:'/rest/$directory/currentUserBelongsTo',data:[group]}).then(function(res){cov_1zdnplw1vn.f[9]++;var obj=(cov_1zdnplw1vn.s[27]++,JSON.parse(res.body));cov_1zdnplw1vn.s[28]++;if((cov_1zdnplw1vn.b[5][0]++,obj)&&(cov_1zdnplw1vn.b[5][1]++,obj.result)&&(cov_1zdnplw1vn.b[5][2]++,obj.result===true)){cov_1zdnplw1vn.b[4][0]++;cov_1zdnplw1vn.s[29]++;return true;}else{cov_1zdnplw1vn.b[4][1]++;cov_1zdnplw1vn.s[30]++;return Promise.reject(new Error());}});};cov_1zdnplw1vn.s[31]++;return DirectoryBaseService;}());cov_1zdnplw1vn.s[32]++;exports.DirectoryBaseService=DirectoryBaseService;

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
var cov_14mfn916qp=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\entry.browser.ts",hash="247d5fb95f302afbf480f9e563df601b3beb57af",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\entry.browser.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:0},end:{line:3,column:36}},"2":{start:{line:4,column:0},end:{line:4,column:33}},"3":{start:{line:5,column:0},end:{line:5,column:37}},"4":{start:{line:6,column:0},end:{line:6,column:26}},"5":{start:{line:7,column:0},end:{line:7,column:30}},"6":{start:{line:8,column:0},end:{line:8,column:44}},"7":{start:{line:9,column:23},end:{line:9,column:50}},"8":{start:{line:10,column:0},end:{line:10,column:49}},"9":{start:{line:11,column:28},end:{line:11,column:77}},"10":{start:{line:12,column:29},end:{line:12,column:87}},"11":{start:{line:13,column:0},end:{line:13,column:71}},"12":{start:{line:14,column:32},end:{line:14,column:93}},"13":{start:{line:15,column:0},end:{line:15,column:80}},"14":{start:{line:16,column:31},end:{line:16,column:91}},"15":{start:{line:17,column:0},end:{line:17,column:77}},"16":{start:{line:18,column:31},end:{line:18,column:91}},"17":{start:{line:19,column:0},end:{line:19,column:77}},"18":{start:{line:20,column:28},end:{line:20,column:85}},"19":{start:{line:21,column:0},end:{line:21,column:68}},"20":{start:{line:22,column:27},end:{line:22,column:83}},"21":{start:{line:23,column:0},end:{line:23,column:65}},"22":{start:{line:24,column:0},end:{line:24,column:68}}},fnMap:{},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0},f:{},b:{},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\entry.browser.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\entry.browser.ts"],names:[],mappings:";;AAAA,oCAAkC;AAClC,iCAA+B;AAC/B,qCAAmC;AACnC,0BAAwB;AACxB,8BAA4B;AAC5B,4CAA0C;AAE1C,mDAA6C;AAc3C,wBAdK,wBAAa,CAcL;AAbf,8EAAuE;AAEvE,wFAAmF;AAYjF,6BAZM,yCAAkB,CAYN;AAXpB,8FAAyF;AAYvF,gCAZM,+CAAqB,CAYN;AAXvB,4FAAuF;AAYrF,+BAZM,6CAAoB,CAYN;AAXtB,4FAAuF;AAYrF,+BAZM,6CAAoB,CAYN;AAXtB,sFAAiF;AAY/E,4BAZM,uCAAiB,CAYN;AAXnB,oFAA+E;AAY7E,2BAZM,qCAAgB,CAYN;AATlB,wBAAa,CAAC,UAAU,GAAG,6BAAiB,CAAC",sourcesContent:["import 'core-js/fn/function/bind';\r\nimport 'core-js/fn/array/from';\r\nimport 'core-js/fn/array/is-array';\r\nimport 'core-js/fn/map';\r\nimport 'core-js/fn/promise';\r\nimport './polyfills/customevent-polyfill';\r\n\r\nimport WakandaClient from './wakanda-client';\r\nimport BrowserHttpClient from './data-access/http/browser-http-client';\r\n\r\nimport {CatalogBaseService} from './data-access/service/base/catalog-base-service';\r\nimport {CollectionBaseService} from './data-access/service/base/collection-base-service';\r\nimport {DataClassBaseService} from './data-access/service/base/dataclass-base-service';\r\nimport {DirectoryBaseService} from './data-access/service/base/directory-base-service';\r\nimport {EntityBaseService} from './data-access/service/base/entity-base-service';\r\nimport {MediaBaseService} from './data-access/service/base/media-base-service';\r\n\r\n\r\nWakandaClient.HttpClient = BrowserHttpClient;\r\n\r\nexport {\r\n  WakandaClient,\r\n  CatalogBaseService,\r\n  CollectionBaseService,\r\n  DataClassBaseService,\r\n  DirectoryBaseService,\r\n  EntityBaseService,\r\n  MediaBaseService\r\n};\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_14mfn916qp.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});cov_14mfn916qp.s[1]++;__webpack_require__(82);cov_14mfn916qp.s[2]++;__webpack_require__(85);cov_14mfn916qp.s[3]++;__webpack_require__(96);cov_14mfn916qp.s[4]++;__webpack_require__(99);cov_14mfn916qp.s[5]++;__webpack_require__(116);cov_14mfn916qp.s[6]++;__webpack_require__(121);var wakanda_client_1=(cov_14mfn916qp.s[7]++,__webpack_require__(122));cov_14mfn916qp.s[8]++;exports.WakandaClient=wakanda_client_1.default;var browser_http_client_1=(cov_14mfn916qp.s[9]++,__webpack_require__(137));var catalog_base_service_1=(cov_14mfn916qp.s[10]++,__webpack_require__(66));cov_14mfn916qp.s[11]++;exports.CatalogBaseService=catalog_base_service_1.CatalogBaseService;var collection_base_service_1=(cov_14mfn916qp.s[12]++,__webpack_require__(71));cov_14mfn916qp.s[13]++;exports.CollectionBaseService=collection_base_service_1.CollectionBaseService;var dataclass_base_service_1=(cov_14mfn916qp.s[14]++,__webpack_require__(70));cov_14mfn916qp.s[15]++;exports.DataClassBaseService=dataclass_base_service_1.DataClassBaseService;var directory_base_service_1=(cov_14mfn916qp.s[16]++,__webpack_require__(74));cov_14mfn916qp.s[17]++;exports.DirectoryBaseService=directory_base_service_1.DirectoryBaseService;var entity_base_service_1=(cov_14mfn916qp.s[18]++,__webpack_require__(67));cov_14mfn916qp.s[19]++;exports.EntityBaseService=entity_base_service_1.EntityBaseService;var media_base_service_1=(cov_14mfn916qp.s[20]++,__webpack_require__(72));cov_14mfn916qp.s[21]++;exports.MediaBaseService=media_base_service_1.MediaBaseService;cov_14mfn916qp.s[22]++;wakanda_client_1.default.HttpClient=browser_http_client_1.default;

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
var cov_542nvq3ep=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\polyfills\\customevent-polyfill.js",hash="998a172bdb265c28435fc9468dc955c356c26734",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\polyfills\\customevent-polyfill.js",statementMap:{"0":{start:{line:4,column:0},end:{line:18,column:5}},"1":{start:{line:6,column:2},end:{line:6,column:61}},"2":{start:{line:6,column:48},end:{line:6,column:61}},"3":{start:{line:9,column:4},end:{line:9,column:80}},"4":{start:{line:10,column:14},end:{line:10,column:49}},"5":{start:{line:11,column:4},end:{line:11,column:81}},"6":{start:{line:12,column:4},end:{line:12,column:15}},"7":{start:{line:15,column:2},end:{line:15,column:49}},"8":{start:{line:17,column:2},end:{line:17,column:35}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:4,column:1},end:{line:4,column:2}},loc:{start:{line:4,column:13},end:{line:18,column:1}},line:4},"1":{name:"CustomEvent",decl:{start:{line:8,column:11},end:{line:8,column:22}},loc:{start:{line:8,column:38},end:{line:13,column:3}},line:8}},branchMap:{"0":{loc:{start:{line:6,column:2},end:{line:6,column:61}},type:"if",locations:[{start:{line:6,column:2},end:{line:6,column:61}},{start:{line:6,column:2},end:{line:6,column:61}}],line:6},"1":{loc:{start:{line:9,column:13},end:{line:9,column:79}},type:"binary-expr",locations:[{start:{line:9,column:13},end:{line:9,column:19}},{start:{line:9,column:23},end:{line:9,column:79}}],line:9}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},f:{"0":0,"1":0},b:{"0":[0,0],"1":[0,0]},inputSourceMap:{version:3,sources:["src\\polyfills\\customevent-polyfill.js"],names:["window","CustomEvent","event","params","bubbles","cancelable","detail","undefined","evt","document","createEvent","initCustomEvent","prototype","Event"],mappings:";;AAAA;AACA,CAAC,YAAY;;AAEX,MAAK,OAAOA,OAAOC,WAAd,KAA8B,UAAnC,EAAgD,OAAO,KAAP;;AAEhD,WAASA,WAAT,CAAuBC,KAAvB,EAA8BC,MAA9B,EAAuC;AACrCA,aAASA,UAAU,EAAEC,SAAS,KAAX,EAAkBC,YAAY,KAA9B,EAAqCC,QAAQC,SAA7C,EAAnB;AACA,QAAIC,MAAMC,SAASC,WAAT,CAAsB,aAAtB,CAAV;AACAF,QAAIG,eAAJ,CAAqBT,KAArB,EAA4BC,OAAOC,OAAnC,EAA4CD,OAAOE,UAAnD,EAA+DF,OAAOG,MAAtE;AACA,WAAOE,GAAP;AACA;;AAEFP,cAAYW,SAAZ,GAAwBZ,OAAOa,KAAP,CAAaD,SAArC;;AAEAZ,SAAOC,WAAP,GAAqBA,WAArB;AACD,CAdD",file:"customevent-polyfill.js",sourceRoot:"C:/Users/hamza/Documents/Projects/wakanda-javascript-client",sourcesContent:["// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent\r\n(function () {\r\n\r\n  if ( typeof window.CustomEvent === \"function\" ) return false;\r\n\r\n  function CustomEvent ( event, params ) {\r\n    params = params || { bubbles: false, cancelable: false, detail: undefined };\r\n    var evt = document.createEvent( 'CustomEvent' );\r\n    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );\r\n    return evt;\r\n   }\r\n\r\n  CustomEvent.prototype = window.Event.prototype;\r\n\r\n  window.CustomEvent = CustomEvent;\r\n})();"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_542nvq3ep.s[0]++;(function(){cov_542nvq3ep.f[0]++;cov_542nvq3ep.s[1]++;if(typeof window.CustomEvent==="function"){cov_542nvq3ep.b[0][0]++;cov_542nvq3ep.s[2]++;return false;}else{cov_542nvq3ep.b[0][1]++;}function CustomEvent(event,params){cov_542nvq3ep.f[1]++;cov_542nvq3ep.s[3]++;params=(cov_542nvq3ep.b[1][0]++,params)||(cov_542nvq3ep.b[1][1]++,{bubbles:false,cancelable:false,detail:undefined});var evt=(cov_542nvq3ep.s[4]++,document.createEvent('CustomEvent'));cov_542nvq3ep.s[5]++;evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);cov_542nvq3ep.s[6]++;return evt;}cov_542nvq3ep.s[7]++;CustomEvent.prototype=window.Event.prototype;cov_542nvq3ep.s[8]++;window.CustomEvent=CustomEvent;})();

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_1ww6ocedrx=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\wakanda-client.ts",hash="2ece0766e7f5e47147cacebff3fadcadeaaead57",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\wakanda-client.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:25},end:{line:3,column:63}},"2":{start:{line:4,column:27},end:{line:4,column:67}},"3":{start:{line:5,column:15},end:{line:5,column:47}},"4":{start:{line:6,column:19},end:{line:6,column:55}},"5":{start:{line:7,column:21},end:{line:7,column:47}},"6":{start:{line:8,column:35},end:{line:52,column:3}},"7":{start:{line:10,column:19},end:{line:10,column:73}},"8":{start:{line:11,column:22},end:{line:11,column:79}},"9":{start:{line:12,column:8},end:{line:14,column:11}},"10":{start:{line:15,column:8},end:{line:15,column:31}},"11":{start:{line:16,column:32},end:{line:18,column:10}},"12":{start:{line:19,column:8},end:{line:32,column:10}},"13":{start:{line:21,column:16},end:{line:21,column:77}},"14":{start:{line:24,column:16},end:{line:24,column:50}},"15":{start:{line:27,column:16},end:{line:27,column:58}},"16":{start:{line:30,column:16},end:{line:30,column:72}},"17":{start:{line:33,column:8},end:{line:40,column:10}},"18":{start:{line:35,column:16},end:{line:35,column:58}},"19":{start:{line:38,column:16},end:{line:38,column:62}},"20":{start:{line:42,column:4},end:{line:47,column:6}},"21":{start:{line:43,column:30},end:{line:45,column:10}},"22":{start:{line:46,column:8},end:{line:46,column:48}},"23":{start:{line:48,column:4},end:{line:50,column:6}},"24":{start:{line:49,column:8},end:{line:49,column:38}},"25":{start:{line:51,column:4},end:{line:51,column:25}},"26":{start:{line:53,column:0},end:{line:53,column:32}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:8,column:35},end:{line:8,column:36}},loc:{start:{line:8,column:47},end:{line:52,column:1}},line:8},"1":{name:"WakandaClient",decl:{start:{line:9,column:13},end:{line:9,column:26}},loc:{start:{line:9,column:35},end:{line:41,column:5}},line:9},"2":{name:"(anonymous_2)",decl:{start:{line:20,column:19},end:{line:20,column:20}},loc:{start:{line:20,column:59},end:{line:22,column:13}},line:20},"3":{name:"(anonymous_3)",decl:{start:{line:23,column:20},end:{line:23,column:21}},loc:{start:{line:23,column:32},end:{line:25,column:13}},line:23},"4":{name:"(anonymous_4)",decl:{start:{line:26,column:28},end:{line:26,column:29}},loc:{start:{line:26,column:40},end:{line:28,column:13}},line:26},"5":{name:"(anonymous_5)",decl:{start:{line:29,column:37},end:{line:29,column:38}},loc:{start:{line:29,column:54},end:{line:31,column:13}},line:29},"6":{name:"(anonymous_6)",decl:{start:{line:34,column:22},end:{line:34,column:23}},loc:{start:{line:34,column:40},end:{line:36,column:13}},line:34},"7":{name:"(anonymous_7)",decl:{start:{line:37,column:26},end:{line:37,column:27}},loc:{start:{line:37,column:44},end:{line:39,column:13}},line:37},"8":{name:"(anonymous_8)",decl:{start:{line:42,column:41},end:{line:42,column:42}},loc:{start:{line:42,column:64},end:{line:47,column:5}},line:42},"9":{name:"(anonymous_9)",decl:{start:{line:48,column:38},end:{line:48,column:39}},loc:{start:{line:48,column:50},end:{line:50,column:5}},line:48}},branchMap:{"0":{loc:{start:{line:10,column:19},end:{line:10,column:73}},type:"cond-expr",locations:[{start:{line:10,column:50},end:{line:10,column:61}},{start:{line:10,column:64},end:{line:10,column:73}}],line:10},"1":{loc:{start:{line:11,column:22},end:{line:11,column:79}},type:"cond-expr",locations:[{start:{line:11,column:53},end:{line:11,column:67}},{start:{line:11,column:70},end:{line:11,column:79}}],line:11},"2":{loc:{start:{line:13,column:24},end:{line:13,column:34}},type:"binary-expr",locations:[{start:{line:13,column:24},end:{line:13,column:28}},{start:{line:13,column:32},end:{line:13,column:34}}],line:13}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},b:{"0":[0,0],"1":[0,0],"2":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\wakanda-client.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\wakanda-client.ts"],names:[],mappings:";;AAAA,gEAA0D;AAC1D,oEAA8D;AAC9D,gDAA2C;AAC3C,wDAAmD;AAMnD,IAAM,cAAc,GAAQ,OAAO,CAAC,iBAAiB,CAAC,CAAC;AAcvD;IASE,uBAAY,MAA6C;QACvD,IAAI,IAAI,GAAG,OAAM,CAAC,MAAM,CAAC,KAAK,QAAQ,CAAC,CAAC,CAAC,MAAM,CAAC,IAAI,CAAC,CAAC,CAAC,SAAS,CAAC;QACjE,IAAI,OAAO,GAAG,OAAM,CAAC,MAAM,CAAC,KAAK,QAAQ,CAAC,CAAC,CAAC,MAAM,CAAC,OAAO,CAAC,CAAC,CAAC,SAAS,CAAC;QAEvE,IAAI,CAAC,WAAW,GAAG,IAAI,aAAa,CAAC,UAAU,CAAC;YAC9C,SAAS,EAAE,CAAC,IAAI,IAAI,EAAE,CAAC;SACxB,CAAC,CAAC;QAEH,IAAI,CAAC,OAAO,GAAG,OAAO,CAAC;QAEvB,IAAI,iBAAiB,GAAG,IAAI,4BAAiB,CAAC;YAC5C,MAAM,EAAE,IAAI;SACb,CAAC,CAAC;QAEH,IAAI,CAAC,SAAS,GAAG;YACf,KAAK,EAAE,UAAC,QAAQ,EAAE,QAAQ,EAAE,QAAQ;gBAClC,MAAM,CAAC,iBAAiB,CAAC,KAAK,CAAC,QAAQ,EAAE,QAAQ,EAAE,QAAQ,CAAC,CAAC;YAC/D,CAAC;YACD,MAAM,EAAE;gBACN,MAAM,CAAC,iBAAiB,CAAC,MAAM,EAAE,CAAC;YACpC,CAAC;YACD,cAAc,EAAE;gBACd,MAAM,CAAC,iBAAiB,CAAC,cAAc,EAAE,CAAC;YAC5C,CAAC;YACD,uBAAuB,EAAE,UAAC,KAAK;gBAC7B,MAAM,CAAC,iBAAiB,CAAC,uBAAuB,CAAC,KAAK,CAAC,CAAC;YAC1D,CAAC;SACF,CAAC;QAEF,IAAI,CAAC,MAAM,GAAG;YACZ,QAAQ,EAAE,UAAA,MAAM;gBACd,MAAM,CAAC,MAAM,YAAY,gBAAM,CAAC;YAClC,CAAC;YACD,YAAY,EAAE,UAAA,MAAM;gBAClB,MAAM,CAAC,MAAM,YAAY,oBAAU,CAAC;YACtC,CAAC;SACF,CAAC;IACJ,CAAC;IAEM,kCAAU,GAAjB,UAAkB,WAAsB;QACtC,IAAI,eAAe,GAAG,IAAI,0BAAe,CAAC;YACxC,MAAM,EAAE,IAAI;SACb,CAAC,CAAC;QAEH,MAAM,CAAC,eAAe,CAAC,GAAG,CAAC,WAAW,CAAC,CAAC;IAC1C,CAAC;IAEM,+BAAO,GAAd;QACE,MAAM,CAAC,cAAc,CAAC,OAAO,CAAC;IAChC,CAAC;IACH,oBAAC;AAAD,CAAC,AA3DD,IA2DC;AAED,kBAAe,aAAa,CAAC",sourcesContent:["import CatalogBusiness from './business/catalog-business';\r\nimport DirectoryBusiness from './business/directory-business';\r\nimport Entity from './presentation/entity';\r\nimport Collection from './presentation/collection';\r\nimport HttpClient from './data-access/http/http-client';\r\nimport Catalog from './presentation/catalog';\r\nimport BrowserHttpClient from './data-access/http/browser-http-client';\r\nimport NodeHttpClient from './data-access/http/node-http-client';\r\n\r\nconst packageOptions: any = require('../package.json');\r\n\r\nexport interface IDirectory {\r\n  login(username: string, password: string, duration?: number): Promise<boolean>;\r\n  logout(): Promise<boolean>;\r\n  getCurrentUser(): Promise<any>;\r\n  getCurrentUserBelongsTo(groupName: string): Promise<boolean>;\r\n}\r\n\r\nexport interface IHelper {\r\n  isEntity(object: any): boolean;\r\n  isCollection(object: any): boolean;\r\n}\r\n\r\nclass WakandaClient {\r\n\r\n  public static HttpClient: typeof BrowserHttpClient|typeof NodeHttpClient;\r\n\r\n  public _httpClient: HttpClient;\r\n  public directory: IDirectory;\r\n  public helper: IHelper;\r\n  public catalog: string;\r\n\r\n  constructor(params: {host?: string, catalog?: string}|any) {\r\n    let host = typeof(params) === 'object' ? params.host : undefined;\r\n    let catalog = typeof(params) === 'object' ? params.catalog : undefined;\r\n\r\n    this._httpClient = new WakandaClient.HttpClient({\r\n      apiPrefix: (host || '')\r\n    });\r\n\r\n    this.catalog = catalog;\r\n\r\n    let directoryBusiness = new DirectoryBusiness({\r\n      wakJSC: this\r\n    });\r\n\r\n    this.directory = {\r\n      login: (username, password, duration) => {\r\n        return directoryBusiness.login(username, password, duration);\r\n      },\r\n      logout: () => {\r\n        return directoryBusiness.logout();\r\n      },\r\n      getCurrentUser: () => {\r\n        return directoryBusiness.getCurrentUser();\r\n      },\r\n      getCurrentUserBelongsTo: (group) => {\r\n        return directoryBusiness.getCurrentUserBelongsTo(group);\r\n      }\r\n    };\r\n\r\n    this.helper = {\r\n      isEntity: object => {\r\n        return object instanceof Entity;\r\n      },\r\n      isCollection: object => {\r\n        return object instanceof Collection;\r\n      }\r\n    };\r\n  }\r\n\r\n  public getCatalog(dataClasses?: string[]): Promise<Catalog> {\r\n    let catalogBusiness = new CatalogBusiness({\r\n      wakJSC: this\r\n    });\r\n\r\n    return catalogBusiness.get(dataClasses);\r\n  }\r\n\r\n  public version(): string {\r\n    return packageOptions.version;\r\n  }\r\n}\r\n\r\nexport default WakandaClient;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1ww6ocedrx.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var catalog_business_1=(cov_1ww6ocedrx.s[1]++,__webpack_require__(123));var directory_business_1=(cov_1ww6ocedrx.s[2]++,__webpack_require__(134));var entity_1=(cov_1ww6ocedrx.s[3]++,__webpack_require__(38));var collection_1=(cov_1ww6ocedrx.s[4]++,__webpack_require__(73));var packageOptions=(cov_1ww6ocedrx.s[5]++,__webpack_require__(136));var WakandaClient=(/** @class */cov_1ww6ocedrx.s[6]++,function(){cov_1ww6ocedrx.f[0]++;function WakandaClient(params){cov_1ww6ocedrx.f[1]++;var host=(cov_1ww6ocedrx.s[7]++,typeof params==='object'?(cov_1ww6ocedrx.b[0][0]++,params.host):(cov_1ww6ocedrx.b[0][1]++,undefined));var catalog=(cov_1ww6ocedrx.s[8]++,typeof params==='object'?(cov_1ww6ocedrx.b[1][0]++,params.catalog):(cov_1ww6ocedrx.b[1][1]++,undefined));cov_1ww6ocedrx.s[9]++;this._httpClient=new WakandaClient.HttpClient({apiPrefix:(cov_1ww6ocedrx.b[2][0]++,host)||(cov_1ww6ocedrx.b[2][1]++,'')});cov_1ww6ocedrx.s[10]++;this.catalog=catalog;var directoryBusiness=(cov_1ww6ocedrx.s[11]++,new directory_business_1.default({wakJSC:this}));cov_1ww6ocedrx.s[12]++;this.directory={login:function(username,password,duration){cov_1ww6ocedrx.f[2]++;cov_1ww6ocedrx.s[13]++;return directoryBusiness.login(username,password,duration);},logout:function(){cov_1ww6ocedrx.f[3]++;cov_1ww6ocedrx.s[14]++;return directoryBusiness.logout();},getCurrentUser:function(){cov_1ww6ocedrx.f[4]++;cov_1ww6ocedrx.s[15]++;return directoryBusiness.getCurrentUser();},getCurrentUserBelongsTo:function(group){cov_1ww6ocedrx.f[5]++;cov_1ww6ocedrx.s[16]++;return directoryBusiness.getCurrentUserBelongsTo(group);}};cov_1ww6ocedrx.s[17]++;this.helper={isEntity:function(object){cov_1ww6ocedrx.f[6]++;cov_1ww6ocedrx.s[18]++;return object instanceof entity_1.default;},isCollection:function(object){cov_1ww6ocedrx.f[7]++;cov_1ww6ocedrx.s[19]++;return object instanceof collection_1.default;}};}cov_1ww6ocedrx.s[20]++;WakandaClient.prototype.getCatalog=function(dataClasses){cov_1ww6ocedrx.f[8]++;var catalogBusiness=(cov_1ww6ocedrx.s[21]++,new catalog_business_1.default({wakJSC:this}));cov_1ww6ocedrx.s[22]++;return catalogBusiness.get(dataClasses);};cov_1ww6ocedrx.s[23]++;WakandaClient.prototype.version=function(){cov_1ww6ocedrx.f[9]++;cov_1ww6ocedrx.s[24]++;return packageOptions.version;};cov_1ww6ocedrx.s[25]++;return WakandaClient;}());cov_1ww6ocedrx.s[26]++;exports.default=WakandaClient;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_j6gth03vs=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\catalog-business.ts",hash="bba42701a71f4adbd29993e0da5d59b7ae2dc5f5",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\catalog-business.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:26},end:{line:13,column:56}},"12":{start:{line:14,column:24},end:{line:14,column:73}},"13":{start:{line:15,column:16},end:{line:15,column:50}},"14":{start:{line:16,column:18},end:{line:16,column:54}},"15":{start:{line:17,column:27},end:{line:17,column:58}},"16":{start:{line:18,column:37},end:{line:139,column:30}},"17":{start:{line:19,column:4},end:{line:19,column:39}},"18":{start:{line:21,column:20},end:{line:21,column:50}},"19":{start:{line:22,column:8},end:{line:24,column:11}},"20":{start:{line:25,column:8},end:{line:25,column:21}},"21":{start:{line:27,column:4},end:{line:31,column:6}},"22":{start:{line:28,column:8},end:{line:30,column:9}},"23":{start:{line:29,column:12},end:{line:29,column:46}},"24":{start:{line:32,column:4},end:{line:137,column:6}},"25":{start:{line:33,column:20},end:{line:33,column:24}},"26":{start:{line:34,column:8},end:{line:34,column:34}},"27":{start:{line:35,column:8},end:{line:136,column:11}},"28":{start:{line:36,column:26},end:{line:36,column:28}},"29":{start:{line:37,column:12},end:{line:124,column:13}},"30":{start:{line:38,column:28},end:{line:38,column:51}},"31":{start:{line:39,column:33},end:{line:39,column:35}},"32":{start:{line:40,column:30},end:{line:83,column:17}},"33":{start:{line:41,column:20},end:{line:82,column:21}},"34":{start:{line:43,column:28},end:{line:47,column:32}},"35":{start:{line:48,column:28},end:{line:48,column:59}},"36":{start:{line:49,column:28},end:{line:49,column:34}},"37":{start:{line:53,column:43},end:{line:53,column:107}},"38":{start:{line:54,column:45},end:{line:54,column:104}},"39":{start:{line:55,column:28},end:{line:61,column:32}},"40":{start:{line:62,column:28},end:{line:62,column:34}},"41":{start:{line:65,column:28},end:{line:70,column:31}},"42":{start:{line:66,column:32},end:{line:69,column:33}},"43":{start:{line:67,column:36},end:{line:67,column:67}},"44":{start:{line:68,column:36},end:{line:68,column:48}},"45":{start:{line:71,column:49},end:{line:76,column:30}},"46":{start:{line:77,column:28},end:{line:77,column:60}},"47":{start:{line:78,column:28},end:{line:78,column:75}},"48":{start:{line:79,column:28},end:{line:79,column:34}},"49":{start:{line:81,column:28},end:{line:81,column:106}},"50":{start:{line:84,column:16},end:{line:87,column:17}},"51":{start:{line:85,column:31},end:{line:85,column:37}},"52":{start:{line:86,column:20},end:{line:86,column:34}},"53":{start:{line:88,column:30},end:{line:92,column:17}},"54":{start:{line:93,column:16},end:{line:108,column:17}},"55":{start:{line:94,column:33},end:{line:94,column:39}},"56":{start:{line:95,column:20},end:{line:107,column:21}},"57":{start:{line:97,column:28},end:{line:97,column:61}},"58":{start:{line:98,column:28},end:{line:98,column:34}},"59":{start:{line:100,column:28},end:{line:100,column:65}},"60":{start:{line:101,column:28},end:{line:101,column:34}},"61":{start:{line:103,column:28},end:{line:103,column:64}},"62":{start:{line:104,column:28},end:{line:104,column:34}},"63":{start:{line:106,column:28},end:{line:106,column:111}},"64":{start:{line:109,column:32},end:{line:114,column:18}},"65":{start:{line:116,column:40},end:{line:121,column:18}},"66":{start:{line:122,column:16},end:{line:122,column:55}},"67":{start:{line:123,column:16},end:{line:123,column:40}},"68":{start:{line:125,column:26},end:{line:127,column:14}},"69":{start:{line:129,column:12},end:{line:134,column:13}},"70":{start:{line:130,column:29},end:{line:130,column:35}},"71":{start:{line:131,column:16},end:{line:133,column:17}},"72":{start:{line:132,column:20},end:{line:132,column:97}},"73":{start:{line:135,column:12},end:{line:135,column:27}},"74":{start:{line:138,column:4},end:{line:138,column:27}},"75":{start:{line:140,column:0},end:{line:140,column:34}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:18,column:37},end:{line:18,column:38}},loc:{start:{line:18,column:55},end:{line:139,column:1}},line:18},"6":{name:"CatalogBusiness",decl:{start:{line:20,column:13},end:{line:20,column:28}},loc:{start:{line:20,column:34},end:{line:26,column:5}},line:20},"7":{name:"(anonymous_7)",decl:{start:{line:27,column:46},end:{line:27,column:47}},loc:{start:{line:27,column:64},end:{line:31,column:5}},line:27},"8":{name:"(anonymous_8)",decl:{start:{line:32,column:36},end:{line:32,column:37}},loc:{start:{line:32,column:59},end:{line:137,column:5}},line:32},"9":{name:"(anonymous_9)",decl:{start:{line:35,column:50},end:{line:35,column:51}},loc:{start:{line:35,column:79},end:{line:136,column:9}},line:35},"10":{name:"(anonymous_10)",decl:{start:{line:40,column:30},end:{line:40,column:31}},loc:{start:{line:40,column:46},end:{line:83,column:17}},line:40},"11":{name:"(anonymous_11)",decl:{start:{line:65,column:51},end:{line:65,column:52}},loc:{start:{line:65,column:73},end:{line:70,column:29}},line:65}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:21,column:20},end:{line:21,column:50}},type:"binary-expr",locations:[{start:{line:21,column:20},end:{line:21,column:42}},{start:{line:21,column:46},end:{line:21,column:50}}],line:21},"5":{loc:{start:{line:28,column:8},end:{line:30,column:9}},type:"if",locations:[{start:{line:28,column:8},end:{line:30,column:9}},{start:{line:28,column:8},end:{line:30,column:9}}],line:28},"6":{loc:{start:{line:41,column:20},end:{line:82,column:21}},type:"switch",locations:[{start:{line:42,column:24},end:{line:49,column:34}},{start:{line:50,column:24},end:{line:50,column:39}},{start:{line:51,column:24},end:{line:51,column:42}},{start:{line:52,column:24},end:{line:62,column:34}},{start:{line:63,column:24},end:{line:79,column:34}},{start:{line:80,column:24},end:{line:81,column:106}}],line:41},"7":{loc:{start:{line:53,column:43},end:{line:53,column:107}},type:"binary-expr",locations:[{start:{line:53,column:43},end:{line:53,column:56}},{start:{line:53,column:61},end:{line:53,column:82}},{start:{line:53,column:86},end:{line:53,column:106}}],line:53},"8":{loc:{start:{line:54,column:45},end:{line:54,column:104}},type:"cond-expr",locations:[{start:{line:54,column:77},end:{line:54,column:92}},{start:{line:54,column:95},end:{line:54,column:104}}],line:54},"9":{loc:{start:{line:66,column:32},end:{line:69,column:33}},type:"if",locations:[{start:{line:66,column:32},end:{line:69,column:33}},{start:{line:66,column:32},end:{line:69,column:33}}],line:66},"10":{loc:{start:{line:95,column:20},end:{line:107,column:21}},type:"switch",locations:[{start:{line:96,column:24},end:{line:98,column:34}},{start:{line:99,column:24},end:{line:101,column:34}},{start:{line:102,column:24},end:{line:104,column:34}},{start:{line:105,column:24},end:{line:106,column:111}}],line:95},"11":{loc:{start:{line:131,column:16},end:{line:133,column:17}},type:"if",locations:[{start:{line:131,column:16},end:{line:133,column:17}},{start:{line:131,column:16},end:{line:133,column:17}}],line:131}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0,0,0,0,0],"7":[0,0,0],"8":[0,0],"9":[0,0],"10":[0,0,0,0],"11":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\catalog-business.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\catalog-business.ts"],names:[],mappings:"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",sourcesContent:["import AbstractBusiness from './abstract-business';\r\nimport CatalogService from '../data-access/service/catalog-service';\r\nimport Catalog from '../presentation/catalog';\r\nimport {DataClass, Attribute, AttributeRelated, AttributeCollection} from '../presentation/dataclass';\r\nimport DataClassBusiness from './dataclass-business';\r\n\r\nexport interface IDataClassDBO {\r\n  name: string;\r\n  collectionName: string;\r\n  dataURI: string;\r\n  attributes: {\r\n    name: string,\r\n    type: string,\r\n    kind: string,\r\n    readOnly: boolean,\r\n    simpleDate: boolean\r\n  }[];\r\n  methods: {\r\n    name: string,\r\n    applyTo: string\r\n  }[];\r\n}\r\n\r\nclass CatalogBusiness extends AbstractBusiness {\r\n\r\n  private service: CatalogService;\r\n  private seenDataClasses: string[];\r\n\r\n  constructor(obj: any) {\r\n    super(obj);\r\n\r\n    this.service = new CatalogService({\r\n      wakJSC: this.wakJSC\r\n    });\r\n  }\r\n\r\n  private needDataClass(dcName: string) {\r\n    if (this.seenDataClasses.indexOf(dcName) === -1) {\r\n      this.seenDataClasses.push(dcName);\r\n    }\r\n  }\r\n\r\n  public get(dataClasses?: string[]): Promise<Catalog> {\r\n\r\n    this.seenDataClasses = [];\r\n\r\n    return this.service.get(dataClasses).then((dataClassDBOArray: IDataClassDBO[]) => {\r\n\r\n      let dcArray: DataClass[] = [];\r\n\r\n      for (let dcDBO of dataClassDBOArray) {\r\n        let attributes: Attribute[] = [];\r\n\r\n        for (let attr of dcDBO.attributes) {\r\n          switch (attr.kind) {\r\n            case 'relatedEntity':\r\n              attributes.push(new AttributeRelated({\r\n                name: attr.name,\r\n                type: attr.type,\r\n                kind: attr.kind\r\n              }));\r\n              this.needDataClass(attr.type);\r\n              break;\r\n            case 'storage':\r\n            case 'calculated':\r\n            case 'alias':\r\n              let readOnly = attr.readOnly || (attr.type === 'image' || attr.type === 'blob');\r\n              let simpleDate = attr.simpleDate !== undefined ? attr.simpleDate : undefined;\r\n              attributes.push(new Attribute({\r\n                name: attr.name,\r\n                type: attr.type,\r\n                readOnly,\r\n                kind: attr.kind,\r\n                simpleDate: simpleDate\r\n              }));\r\n              break;\r\n            case 'relatedEntities':\r\n              let entityType: string;\r\n              dataClassDBOArray.some((_dataClass) => {\r\n                if (_dataClass.collectionName === attr.type) {\r\n                  entityType = _dataClass.name;\r\n                  return true;\r\n                }\r\n              });\r\n              let attrCollection = new AttributeCollection({\r\n                name: attr.name,\r\n                type: attr.type,\r\n                kind: attr.kind,\r\n                entityType: entityType\r\n              });\r\n              attributes.push(attrCollection);\r\n              this.needDataClass(attrCollection.entityType);\r\n              break;\r\n            default:\r\n              throw new Error('[WakandaClient] Unhandled ' + attr.kind + ' attribute type');\r\n          }\r\n        }\r\n\r\n        let methods: {\r\n          entity: string[],\r\n          collection: string[],\r\n          dataClass: string[]\r\n        } = {\r\n          entity: [],\r\n          collection: [],\r\n          dataClass: []\r\n        };\r\n\r\n        for (let method of dcDBO.methods) {\r\n          switch (method.applyTo) {\r\n            case 'entity':\r\n              methods.entity.push(method.name);\r\n              break;\r\n            case 'entityCollection':\r\n              methods.collection.push(method.name);\r\n              break;\r\n            case 'dataClass':\r\n              methods.dataClass.push(method.name);\r\n              break;\r\n            default:\r\n              throw new Error('[WakandaClient] Unrecognized ' + method.applyTo + ' method type');\r\n          }\r\n        }\r\n\r\n        let dataClass = new DataClass({\r\n          name: dcDBO.name,\r\n          collectionName: dcDBO.collectionName,\r\n          attributes,\r\n          methods\r\n        });\r\n\r\n        //Binding framework methods to the dataclass\r\n        let dataClassBusiness = new DataClassBusiness({\r\n          wakJSC: this.wakJSC,\r\n          dataClass,\r\n          methods,\r\n          dataURI: dcDBO.dataURI\r\n        });\r\n        dataClassBusiness._decorateDataClass();\r\n\r\n        dcArray.push(dataClass);\r\n      }\r\n\r\n      let catalog = new Catalog({\r\n        dataClasses: dcArray\r\n      });\r\n\r\n      //Check if we have all needed dataClasses on the catalog\r\n      for (let dcName of this.seenDataClasses) {\r\n        if (!catalog[dcName]) {\r\n          throw new Error('Needed ' + dcName + ' dataClass is not present on catalog');\r\n        }\r\n      }\r\n\r\n      return catalog;\r\n    });\r\n  }\r\n}\r\n\r\nexport default CatalogBusiness;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_j6gth03vs.s[0]++,(cov_j6gth03vs.b[0][0]++,this)&&(cov_j6gth03vs.b[0][1]++,this.__extends)||(cov_j6gth03vs.b[0][2]++,function(){cov_j6gth03vs.f[0]++;var extendStatics=(cov_j6gth03vs.s[1]++,(cov_j6gth03vs.b[1][0]++,Object.setPrototypeOf)||(cov_j6gth03vs.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_j6gth03vs.b[1][2]++,function(d,b){cov_j6gth03vs.f[1]++;cov_j6gth03vs.s[2]++;d.__proto__=b;})||(cov_j6gth03vs.b[1][3]++,function(d,b){cov_j6gth03vs.f[2]++;cov_j6gth03vs.s[3]++;for(var p in b){cov_j6gth03vs.s[4]++;if(b.hasOwnProperty(p)){cov_j6gth03vs.b[2][0]++;cov_j6gth03vs.s[5]++;d[p]=b[p];}else{cov_j6gth03vs.b[2][1]++;}}}));cov_j6gth03vs.s[6]++;return function(d,b){cov_j6gth03vs.f[3]++;cov_j6gth03vs.s[7]++;extendStatics(d,b);function __(){cov_j6gth03vs.f[4]++;cov_j6gth03vs.s[8]++;this.constructor=d;}cov_j6gth03vs.s[9]++;d.prototype=b===null?(cov_j6gth03vs.b[3][0]++,Object.create(b)):(cov_j6gth03vs.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_j6gth03vs.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_business_1=(cov_j6gth03vs.s[11]++,__webpack_require__(13));var catalog_service_1=(cov_j6gth03vs.s[12]++,__webpack_require__(124));var catalog_1=(cov_j6gth03vs.s[13]++,__webpack_require__(125));var dataclass_1=(cov_j6gth03vs.s[14]++,__webpack_require__(36));var dataclass_business_1=(cov_j6gth03vs.s[15]++,__webpack_require__(126));var CatalogBusiness=(/** @class */cov_j6gth03vs.s[16]++,function(_super){cov_j6gth03vs.f[5]++;cov_j6gth03vs.s[17]++;__extends(CatalogBusiness,_super);function CatalogBusiness(obj){cov_j6gth03vs.f[6]++;var _this=(cov_j6gth03vs.s[18]++,(cov_j6gth03vs.b[4][0]++,_super.call(this,obj))||(cov_j6gth03vs.b[4][1]++,this));cov_j6gth03vs.s[19]++;_this.service=new catalog_service_1.default({wakJSC:_this.wakJSC});cov_j6gth03vs.s[20]++;return _this;}cov_j6gth03vs.s[21]++;CatalogBusiness.prototype.needDataClass=function(dcName){cov_j6gth03vs.f[7]++;cov_j6gth03vs.s[22]++;if(this.seenDataClasses.indexOf(dcName)===-1){cov_j6gth03vs.b[5][0]++;cov_j6gth03vs.s[23]++;this.seenDataClasses.push(dcName);}else{cov_j6gth03vs.b[5][1]++;}};cov_j6gth03vs.s[24]++;CatalogBusiness.prototype.get=function(dataClasses){cov_j6gth03vs.f[8]++;var _this=(cov_j6gth03vs.s[25]++,this);cov_j6gth03vs.s[26]++;this.seenDataClasses=[];cov_j6gth03vs.s[27]++;return this.service.get(dataClasses).then(function(dataClassDBOArray){cov_j6gth03vs.f[9]++;var dcArray=(cov_j6gth03vs.s[28]++,[]);cov_j6gth03vs.s[29]++;for(var _i=0,dataClassDBOArray_1=dataClassDBOArray;_i<dataClassDBOArray_1.length;_i++){var dcDBO=(cov_j6gth03vs.s[30]++,dataClassDBOArray_1[_i]);var attributes=(cov_j6gth03vs.s[31]++,[]);cov_j6gth03vs.s[32]++;var _loop_1=function(attr){cov_j6gth03vs.f[10]++;cov_j6gth03vs.s[33]++;switch(attr.kind){case'relatedEntity':cov_j6gth03vs.b[6][0]++;cov_j6gth03vs.s[34]++;attributes.push(new dataclass_1.AttributeRelated({name:attr.name,type:attr.type,kind:attr.kind}));cov_j6gth03vs.s[35]++;_this.needDataClass(attr.type);cov_j6gth03vs.s[36]++;break;case'storage':cov_j6gth03vs.b[6][1]++;case'calculated':cov_j6gth03vs.b[6][2]++;case'alias':cov_j6gth03vs.b[6][3]++;var readOnly=(cov_j6gth03vs.s[37]++,(cov_j6gth03vs.b[7][0]++,attr.readOnly)||(cov_j6gth03vs.b[7][1]++,attr.type==='image')||(cov_j6gth03vs.b[7][2]++,attr.type==='blob'));var simpleDate=(cov_j6gth03vs.s[38]++,attr.simpleDate!==undefined?(cov_j6gth03vs.b[8][0]++,attr.simpleDate):(cov_j6gth03vs.b[8][1]++,undefined));cov_j6gth03vs.s[39]++;attributes.push(new dataclass_1.Attribute({name:attr.name,type:attr.type,readOnly:readOnly,kind:attr.kind,simpleDate:simpleDate}));cov_j6gth03vs.s[40]++;break;case'relatedEntities':cov_j6gth03vs.b[6][4]++;var entityType_1;cov_j6gth03vs.s[41]++;dataClassDBOArray.some(function(_dataClass){cov_j6gth03vs.f[11]++;cov_j6gth03vs.s[42]++;if(_dataClass.collectionName===attr.type){cov_j6gth03vs.b[9][0]++;cov_j6gth03vs.s[43]++;entityType_1=_dataClass.name;cov_j6gth03vs.s[44]++;return true;}else{cov_j6gth03vs.b[9][1]++;}});var attrCollection=(cov_j6gth03vs.s[45]++,new dataclass_1.AttributeCollection({name:attr.name,type:attr.type,kind:attr.kind,entityType:entityType_1}));cov_j6gth03vs.s[46]++;attributes.push(attrCollection);cov_j6gth03vs.s[47]++;_this.needDataClass(attrCollection.entityType);cov_j6gth03vs.s[48]++;break;default:cov_j6gth03vs.b[6][5]++;cov_j6gth03vs.s[49]++;throw new Error('[WakandaClient] Unhandled '+attr.kind+' attribute type');}};cov_j6gth03vs.s[50]++;for(var _a=0,_b=dcDBO.attributes;_a<_b.length;_a++){var attr=(cov_j6gth03vs.s[51]++,_b[_a]);cov_j6gth03vs.s[52]++;_loop_1(attr);}var methods=(cov_j6gth03vs.s[53]++,{entity:[],collection:[],dataClass:[]});cov_j6gth03vs.s[54]++;for(var _c=0,_d=dcDBO.methods;_c<_d.length;_c++){var method=(cov_j6gth03vs.s[55]++,_d[_c]);cov_j6gth03vs.s[56]++;switch(method.applyTo){case'entity':cov_j6gth03vs.b[10][0]++;cov_j6gth03vs.s[57]++;methods.entity.push(method.name);cov_j6gth03vs.s[58]++;break;case'entityCollection':cov_j6gth03vs.b[10][1]++;cov_j6gth03vs.s[59]++;methods.collection.push(method.name);cov_j6gth03vs.s[60]++;break;case'dataClass':cov_j6gth03vs.b[10][2]++;cov_j6gth03vs.s[61]++;methods.dataClass.push(method.name);cov_j6gth03vs.s[62]++;break;default:cov_j6gth03vs.b[10][3]++;cov_j6gth03vs.s[63]++;throw new Error('[WakandaClient] Unrecognized '+method.applyTo+' method type');}}var dataClass=(cov_j6gth03vs.s[64]++,new dataclass_1.DataClass({name:dcDBO.name,collectionName:dcDBO.collectionName,attributes:attributes,methods:methods}));//Binding framework methods to the dataclass
var dataClassBusiness=(cov_j6gth03vs.s[65]++,new dataclass_business_1.default({wakJSC:_this.wakJSC,dataClass:dataClass,methods:methods,dataURI:dcDBO.dataURI}));cov_j6gth03vs.s[66]++;dataClassBusiness._decorateDataClass();cov_j6gth03vs.s[67]++;dcArray.push(dataClass);}var catalog=(cov_j6gth03vs.s[68]++,new catalog_1.default({dataClasses:dcArray}));//Check if we have all needed dataClasses on the catalog
cov_j6gth03vs.s[69]++;for(var _e=0,_f=_this.seenDataClasses;_e<_f.length;_e++){var dcName=(cov_j6gth03vs.s[70]++,_f[_e]);cov_j6gth03vs.s[71]++;if(!catalog[dcName]){cov_j6gth03vs.b[11][0]++;cov_j6gth03vs.s[72]++;throw new Error('Needed '+dcName+' dataClass is not present on catalog');}else{cov_j6gth03vs.b[11][1]++;}}cov_j6gth03vs.s[73]++;return catalog;});};cov_j6gth03vs.s[74]++;return CatalogBusiness;}(abstract_business_1.default));cov_j6gth03vs.s[75]++;exports.default=CatalogBusiness;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_2ita96vi2w=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\catalog-service.ts",hash="030f40f80de80f10c57e51117e7439a46407629c",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\catalog-service.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:25},end:{line:13,column:54}},"12":{start:{line:14,column:29},end:{line:14,column:67}},"13":{start:{line:15,column:36},end:{line:28,column:29}},"14":{start:{line:16,column:4},end:{line:16,column:38}},"15":{start:{line:18,column:8},end:{line:18,column:72}},"16":{start:{line:20,column:4},end:{line:26,column:6}},"17":{start:{line:21,column:8},end:{line:25,column:11}},"18":{start:{line:27,column:4},end:{line:27,column:26}},"19":{start:{line:29,column:0},end:{line:29,column:33}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:15,column:36},end:{line:15,column:37}},loc:{start:{line:15,column:54},end:{line:28,column:1}},line:15},"6":{name:"CatalogService",decl:{start:{line:17,column:13},end:{line:17,column:27}},loc:{start:{line:17,column:30},end:{line:19,column:5}},line:17},"7":{name:"(anonymous_7)",decl:{start:{line:20,column:35},end:{line:20,column:36}},loc:{start:{line:20,column:58},end:{line:26,column:5}},line:20}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:18,column:15},end:{line:18,column:71}},type:"binary-expr",locations:[{start:{line:18,column:15},end:{line:18,column:30}},{start:{line:18,column:34},end:{line:18,column:63}},{start:{line:18,column:67},end:{line:18,column:71}}],line:18}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\catalog-service.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\catalog-service.ts"],names:[],mappings:";;;;;;;;;;;;AAAA,uDAAiD;AAEjD,oEAA+D;AAE/D;IAA6B,kCAAe;IAA5C;;IASA,CAAC;IAPQ,4BAAG,GAAV,UAAW,WAA8B;QACvC,MAAM,CAAC,yCAAkB,CAAC,GAAG,CAAC;YAC5B,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,WAAW,aAAA;YACX,OAAO,EAAE,IAAI,CAAC,MAAM,CAAC,OAAO;SAC7B,CAAC,CAAC;IACL,CAAC;IACH,qBAAC;AAAD,CAAC,AATD,CAA6B,0BAAe,GAS3C;AAED,kBAAe,cAAc,CAAC",sourcesContent:["import AbstractService from './abstract-service';\r\nimport {IDataClassDBO} from '../../business/catalog-business';\r\nimport {CatalogBaseService} from './base/catalog-base-service';\r\n\r\nclass CatalogService extends AbstractService {\r\n\r\n  public get(dataClasses?: string| string[]): Promise<IDataClassDBO[]> {\r\n    return CatalogBaseService.get({\r\n      httpClient: this.httpClient,\r\n      dataClasses,\r\n      catalog: this.wakJSC.catalog\r\n    });\r\n  }\r\n}\r\n\r\nexport default CatalogService;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_2ita96vi2w.s[0]++,(cov_2ita96vi2w.b[0][0]++,this)&&(cov_2ita96vi2w.b[0][1]++,this.__extends)||(cov_2ita96vi2w.b[0][2]++,function(){cov_2ita96vi2w.f[0]++;var extendStatics=(cov_2ita96vi2w.s[1]++,(cov_2ita96vi2w.b[1][0]++,Object.setPrototypeOf)||(cov_2ita96vi2w.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_2ita96vi2w.b[1][2]++,function(d,b){cov_2ita96vi2w.f[1]++;cov_2ita96vi2w.s[2]++;d.__proto__=b;})||(cov_2ita96vi2w.b[1][3]++,function(d,b){cov_2ita96vi2w.f[2]++;cov_2ita96vi2w.s[3]++;for(var p in b){cov_2ita96vi2w.s[4]++;if(b.hasOwnProperty(p)){cov_2ita96vi2w.b[2][0]++;cov_2ita96vi2w.s[5]++;d[p]=b[p];}else{cov_2ita96vi2w.b[2][1]++;}}}));cov_2ita96vi2w.s[6]++;return function(d,b){cov_2ita96vi2w.f[3]++;cov_2ita96vi2w.s[7]++;extendStatics(d,b);function __(){cov_2ita96vi2w.f[4]++;cov_2ita96vi2w.s[8]++;this.constructor=d;}cov_2ita96vi2w.s[9]++;d.prototype=b===null?(cov_2ita96vi2w.b[3][0]++,Object.create(b)):(cov_2ita96vi2w.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_2ita96vi2w.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_service_1=(cov_2ita96vi2w.s[11]++,__webpack_require__(14));var catalog_base_service_1=(cov_2ita96vi2w.s[12]++,__webpack_require__(66));var CatalogService=(/** @class */cov_2ita96vi2w.s[13]++,function(_super){cov_2ita96vi2w.f[5]++;cov_2ita96vi2w.s[14]++;__extends(CatalogService,_super);function CatalogService(){cov_2ita96vi2w.f[6]++;cov_2ita96vi2w.s[15]++;return(cov_2ita96vi2w.b[4][0]++,_super!==null)&&(cov_2ita96vi2w.b[4][1]++,_super.apply(this,arguments))||(cov_2ita96vi2w.b[4][2]++,this);}cov_2ita96vi2w.s[16]++;CatalogService.prototype.get=function(dataClasses){cov_2ita96vi2w.f[7]++;cov_2ita96vi2w.s[17]++;return catalog_base_service_1.CatalogBaseService.get({httpClient:this.httpClient,dataClasses:dataClasses,catalog:this.wakJSC.catalog});};cov_2ita96vi2w.s[18]++;return CatalogService;}(abstract_service_1.default));cov_2ita96vi2w.s[19]++;exports.default=CatalogService;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_219ekz231i=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\presentation\\catalog.ts",hash="1077bbd43a174b44f63cec5d21c93c863e9e31b5",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\presentation\\catalog.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:29},end:{line:12,column:3}},"2":{start:{line:5,column:26},end:{line:5,column:40}},"3":{start:{line:6,column:8},end:{line:9,column:9}},"4":{start:{line:7,column:21},end:{line:7,column:38}},"5":{start:{line:8,column:12},end:{line:8,column:31}},"6":{start:{line:11,column:4},end:{line:11,column:19}},"7":{start:{line:13,column:0},end:{line:13,column:26}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:29},end:{line:3,column:30}},loc:{start:{line:3,column:41},end:{line:12,column:1}},line:3},"1":{name:"Catalog",decl:{start:{line:4,column:13},end:{line:4,column:20}},loc:{start:{line:4,column:25},end:{line:10,column:5}},line:4}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},f:{"0":0,"1":0},b:{},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\presentation\\catalog.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\presentation\\catalog.ts"],names:[],mappings:";;AAEA;IAIE,iBAAY,EAAyC;YAAxC,4BAAW;QACtB,GAAG,CAAC,CAAW,UAAW,EAAX,2BAAW,EAAX,yBAAW,EAAX,IAAW;YAArB,IAAI,EAAE,oBAAA;YACT,IAAI,CAAC,EAAE,CAAC,IAAI,CAAC,GAAG,EAAE,CAAC;SACpB;IACH,CAAC;IACH,cAAC;AAAD,CAAC,AATD,IASC;AAED,kBAAe,OAAO,CAAC",sourcesContent:["import {DataClass} from './dataclass';\r\n\r\nclass Catalog {\r\n\r\n  [key: string]: DataClass;\r\n\r\n  constructor({dataClasses}: {dataClasses: DataClass[]}) {\r\n    for (let dc of dataClasses) {\r\n      this[dc.name] = dc;\r\n    }\r\n  }\r\n}\r\n\r\nexport default Catalog;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_219ekz231i.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var Catalog=(/** @class */cov_219ekz231i.s[1]++,function(){cov_219ekz231i.f[0]++;function Catalog(_a){cov_219ekz231i.f[1]++;var dataClasses=(cov_219ekz231i.s[2]++,_a.dataClasses);cov_219ekz231i.s[3]++;for(var _i=0,dataClasses_1=dataClasses;_i<dataClasses_1.length;_i++){var dc=(cov_219ekz231i.s[4]++,dataClasses_1[_i]);cov_219ekz231i.s[5]++;this[dc.name]=dc;}}cov_219ekz231i.s[6]++;return Catalog;}());cov_219ekz231i.s[7]++;exports.default=Catalog;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_24e24p8jw0=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\dataclass-business.ts",hash="6157ee26e6b0362a330eabbc58893df257f97798",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\dataclass-business.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:26},end:{line:13,column:56}},"12":{start:{line:14,column:24},end:{line:14,column:52}},"13":{start:{line:15,column:26},end:{line:15,column:77}},"14":{start:{line:16,column:28},end:{line:16,column:60}},"15":{start:{line:17,column:23},end:{line:17,column:50}},"16":{start:{line:18,column:15},end:{line:18,column:48}},"17":{start:{line:19,column:19},end:{line:19,column:56}},"18":{start:{line:20,column:18},end:{line:20,column:54}},"19":{start:{line:21,column:14},end:{line:21,column:46}},"20":{start:{line:22,column:14},end:{line:22,column:33}},"21":{start:{line:23,column:23},end:{line:23,column:50}},"22":{start:{line:24,column:13},end:{line:24,column:30}},"23":{start:{line:26,column:28},end:{line:26,column:37}},"24":{start:{line:27,column:39},end:{line:293,column:30}},"25":{start:{line:28,column:4},end:{line:28,column:41}},"26":{start:{line:30,column:21},end:{line:30,column:30}},"27":{start:{line:30,column:44},end:{line:30,column:56}},"28":{start:{line:30,column:68},end:{line:30,column:78}},"29":{start:{line:30,column:90},end:{line:30,column:100}},"30":{start:{line:31,column:20},end:{line:31,column:65}},"31":{start:{line:32,column:8},end:{line:32,column:36}},"32":{start:{line:33,column:8},end:{line:33,column:32}},"33":{start:{line:34,column:8},end:{line:37,column:11}},"34":{start:{line:38,column:8},end:{line:38,column:32}},"35":{start:{line:39,column:8},end:{line:39,column:57}},"36":{start:{line:40,column:8},end:{line:40,column:60}},"37":{start:{line:41,column:8},end:{line:41,column:21}},"38":{start:{line:43,column:4},end:{line:50,column:6}},"39":{start:{line:46,column:8},end:{line:46,column:51}},"40":{start:{line:47,column:8},end:{line:47,column:53}},"41":{start:{line:48,column:8},end:{line:48,column:55}},"42":{start:{line:49,column:8},end:{line:49,column:38}},"43":{start:{line:51,column:4},end:{line:61,column:6}},"44":{start:{line:52,column:20},end:{line:52,column:24}},"45":{start:{line:53,column:19},end:{line:53,column:23}},"46":{start:{line:54,column:8},end:{line:60,column:11}},"47":{start:{line:56,column:12},end:{line:59,column:14}},"48":{start:{line:57,column:29},end:{line:57,column:50}},"49":{start:{line:58,column:16},end:{line:58,column:55}},"50":{start:{line:62,column:4},end:{line:68,column:6}},"51":{start:{line:63,column:20},end:{line:63,column:24}},"52":{start:{line:64,column:8},end:{line:67,column:11}},"53":{start:{line:66,column:12},end:{line:66,column:94}},"54":{start:{line:69,column:4},end:{line:81,column:6}},"55":{start:{line:70,column:20},end:{line:70,column:24}},"56":{start:{line:71,column:18},end:{line:71,column:31}},"57":{start:{line:72,column:8},end:{line:75,column:9}},"58":{start:{line:74,column:12},end:{line:74,column:115}},"59":{start:{line:76,column:8},end:{line:80,column:11}},"60":{start:{line:77,column:12},end:{line:79,column:15}},"61":{start:{line:82,column:4},end:{line:99,column:6}},"62":{start:{line:83,column:20},end:{line:83,column:24}},"63":{start:{line:84,column:18},end:{line:84,column:31}},"64":{start:{line:85,column:28},end:{line:85,column:38}},"65":{start:{line:86,column:8},end:{line:88,column:9}},"66":{start:{line:87,column:12},end:{line:87,column:77}},"67":{start:{line:89,column:8},end:{line:91,column:9}},"68":{start:{line:90,column:12},end:{line:90,column:61}},"69":{start:{line:92,column:8},end:{line:98,column:11}},"70":{start:{line:93,column:12},end:{line:97,column:15}},"71":{start:{line:100,column:4},end:{line:119,column:6}},"72":{start:{line:101,column:29},end:{line:101,column:31}},"73":{start:{line:102,column:8},end:{line:109,column:9}},"74":{start:{line:103,column:12},end:{line:108,column:13}},"75":{start:{line:104,column:16},end:{line:107,column:17}},"76":{start:{line:105,column:20},end:{line:105,column:54}},"77":{start:{line:106,column:20},end:{line:106,column:38}},"78":{start:{line:110,column:21},end:{line:112,column:10}},"79":{start:{line:113,column:8},end:{line:117,column:9}},"80":{start:{line:114,column:12},end:{line:116,column:13}},"81":{start:{line:115,column:16},end:{line:115,column:52}},"82":{start:{line:118,column:8},end:{line:118,column:22}},"83":{start:{line:120,column:4},end:{line:142,column:6}},"84":{start:{line:121,column:18},end:{line:121,column:24}},"85":{start:{line:121,column:37},end:{line:121,column:48}},"86":{start:{line:121,column:56},end:{line:121,column:62}},"87":{start:{line:122,column:21},end:{line:126,column:10}},"88":{start:{line:127,column:23},end:{line:132,column:10}},"89":{start:{line:133,column:8},end:{line:133,column:35}},"90":{start:{line:134,column:8},end:{line:140,column:9}},"91":{start:{line:135,column:12},end:{line:138,column:15}},"92":{start:{line:139,column:12},end:{line:139,column:42}},"93":{start:{line:141,column:8},end:{line:141,column:22}},"94":{start:{line:143,column:4},end:{line:160,column:6}},"95":{start:{line:144,column:18},end:{line:144,column:24}},"96":{start:{line:144,column:37},end:{line:144,column:48}},"97":{start:{line:144,column:61},end:{line:144,column:72}},"98":{start:{line:144,column:90},end:{line:144,column:106}},"99":{start:{line:145,column:25},end:{line:148,column:10}},"100":{start:{line:149,column:23},end:{line:157,column:10}},"101":{start:{line:158,column:8},end:{line:158,column:39}},"102":{start:{line:159,column:8},end:{line:159,column:26}},"103":{start:{line:161,column:4},end:{line:174,column:6}},"104":{start:{line:162,column:18},end:{line:162,column:24}},"105":{start:{line:162,column:36},end:{line:162,column:46}},"106":{start:{line:162,column:64},end:{line:162,column:80}},"107":{start:{line:162,column:91},end:{line:162,column:100}},"108":{start:{line:163,column:20},end:{line:163,column:53}},"109":{start:{line:164,column:23},end:{line:171,column:10}},"110":{start:{line:172,column:8},end:{line:172,column:34}},"111":{start:{line:173,column:8},end:{line:173,column:21}},"112":{start:{line:175,column:4},end:{line:240,column:6}},"113":{start:{line:176,column:18},end:{line:176,column:24}},"114":{start:{line:176,column:35},end:{line:176,column:44}},"115":{start:{line:177,column:8},end:{line:177,column:36}},"116":{start:{line:178,column:8},end:{line:238,column:9}},"117":{start:{line:179,column:23},end:{line:179,column:29}},"118":{start:{line:180,column:31},end:{line:180,column:45}},"119":{start:{line:181,column:12},end:{line:237,column:13}},"120":{start:{line:182,column:16},end:{line:221,column:17}},"121":{start:{line:185,column:35},end:{line:185,column:71}},"122":{start:{line:186,column:20},end:{line:188,column:23}},"123":{start:{line:190,column:21},end:{line:221,column:17}},"124":{start:{line:191,column:35},end:{line:191,column:77}},"125":{start:{line:192,column:20},end:{line:194,column:23}},"126":{start:{line:196,column:21},end:{line:221,column:17}},"127":{start:{line:197,column:30},end:{line:197,column:36}},"128":{start:{line:198,column:20},end:{line:203,column:21}},"129":{start:{line:199,column:24},end:{line:199,column:58}},"130":{start:{line:202,column:24},end:{line:202,column:35}},"131":{start:{line:204,column:20},end:{line:209,column:23}},"132":{start:{line:211,column:21},end:{line:221,column:17}},"133":{start:{line:212,column:20},end:{line:217,column:21}},"134":{start:{line:213,column:24},end:{line:213,column:49}},"135":{start:{line:216,column:24},end:{line:216,column:135}},"136":{start:{line:220,column:20},end:{line:220,column:53}},"137":{start:{line:226,column:16},end:{line:236,column:17}},"138":{start:{line:227,column:20},end:{line:232,column:23}},"139":{start:{line:235,column:20},end:{line:235,column:45}},"140":{start:{line:239,column:8},end:{line:239,column:22}},"141":{start:{line:241,column:4},end:{line:260,column:6}},"142":{start:{line:242,column:18},end:{line:242,column:24}},"143":{start:{line:244,column:8},end:{line:246,column:9}},"144":{start:{line:245,column:12},end:{line:245,column:26}},"145":{start:{line:247,column:8},end:{line:258,column:9}},"146":{start:{line:248,column:12},end:{line:251,column:15}},"147":{start:{line:254,column:12},end:{line:257,column:15}},"148":{start:{line:259,column:8},end:{line:259,column:22}},"149":{start:{line:261,column:4},end:{line:291,column:6}},"150":{start:{line:262,column:18},end:{line:262,column:24}},"151":{start:{line:262,column:37},end:{line:262,column:48}},"152":{start:{line:262,column:66},end:{line:262,column:82}},"153":{start:{line:264,column:8},end:{line:289,column:9}},"154":{start:{line:265,column:12},end:{line:265,column:30}},"155":{start:{line:267,column:13},end:{line:289,column:9}},"156":{start:{line:268,column:12},end:{line:271,column:15}},"157":{start:{line:274,column:12},end:{line:278,column:15}},"158":{start:{line:279,column:12},end:{line:279,column:44}},"159":{start:{line:280,column:12},end:{line:280,column:44}},"160":{start:{line:281,column:12},end:{line:281,column:42}},"161":{start:{line:282,column:12},end:{line:282,column:44}},"162":{start:{line:283,column:12},end:{line:288,column:13}},"163":{start:{line:284,column:32},end:{line:284,column:38}},"164":{start:{line:285,column:16},end:{line:287,column:20}},"165":{start:{line:290,column:8},end:{line:290,column:26}},"166":{start:{line:292,column:4},end:{line:292,column:29}},"167":{start:{line:294,column:0},end:{line:294,column:36}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:27,column:39},end:{line:27,column:40}},loc:{start:{line:27,column:57},end:{line:293,column:1}},line:27},"6":{name:"DataClassBusiness",decl:{start:{line:29,column:13},end:{line:29,column:30}},loc:{start:{line:29,column:35},end:{line:42,column:5}},line:29},"7":{name:"(anonymous_7)",decl:{start:{line:43,column:53},end:{line:43,column:54}},loc:{start:{line:43,column:65},end:{line:50,column:5}},line:43},"8":{name:"(anonymous_8)",decl:{start:{line:51,column:57},end:{line:51,column:58}},loc:{start:{line:51,column:69},end:{line:61,column:5}},line:51},"9":{name:"(anonymous_9)",decl:{start:{line:54,column:39},end:{line:54,column:40}},loc:{start:{line:54,column:57},end:{line:60,column:9}},line:54},"10":{name:"(anonymous_10)",decl:{start:{line:56,column:38},end:{line:56,column:39}},loc:{start:{line:56,column:50},end:{line:59,column:13}},line:56},"11":{name:"(anonymous_11)",decl:{start:{line:62,column:45},end:{line:62,column:46}},loc:{start:{line:62,column:79},end:{line:68,column:5}},line:62},"12":{name:"(anonymous_12)",decl:{start:{line:65,column:18},end:{line:65,column:19}},loc:{start:{line:65,column:33},end:{line:67,column:9}},line:65},"13":{name:"(anonymous_13)",decl:{start:{line:69,column:39},end:{line:69,column:40}},loc:{start:{line:69,column:62},end:{line:81,column:5}},line:69},"14":{name:"(anonymous_14)",decl:{start:{line:76,column:47},end:{line:76,column:48}},loc:{start:{line:76,column:65},end:{line:80,column:9}},line:76},"15":{name:"(anonymous_15)",decl:{start:{line:82,column:40},end:{line:82,column:41}},loc:{start:{line:82,column:59},end:{line:99,column:5}},line:82},"16":{name:"(anonymous_16)",decl:{start:{line:92,column:44},end:{line:92,column:45}},loc:{start:{line:92,column:66},end:{line:98,column:9}},line:92},"17":{name:"(anonymous_17)",decl:{start:{line:100,column:41},end:{line:100,column:42}},loc:{start:{line:100,column:57},end:{line:119,column:5}},line:100},"18":{name:"(anonymous_18)",decl:{start:{line:120,column:48},end:{line:120,column:49}},loc:{start:{line:120,column:62},end:{line:142,column:5}},line:120},"19":{name:"(anonymous_19)",decl:{start:{line:143,column:52},end:{line:143,column:53}},loc:{start:{line:143,column:66},end:{line:160,column:5}},line:143},"20":{name:"(anonymous_20)",decl:{start:{line:161,column:47},end:{line:161,column:48}},loc:{start:{line:161,column:61},end:{line:174,column:5}},line:161},"21":{name:"(anonymous_21)",decl:{start:{line:175,column:61},end:{line:175,column:62}},loc:{start:{line:175,column:75},end:{line:240,column:5}},line:175},"22":{name:"(anonymous_22)",decl:{start:{line:241,column:61},end:{line:241,column:62}},loc:{start:{line:241,column:75},end:{line:260,column:5}},line:241},"23":{name:"(anonymous_23)",decl:{start:{line:261,column:65},end:{line:261,column:66}},loc:{start:{line:261,column:79},end:{line:291,column:5}},line:261}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:31,column:20},end:{line:31,column:65}},type:"binary-expr",locations:[{start:{line:31,column:20},end:{line:31,column:57}},{start:{line:31,column:61},end:{line:31,column:65}}],line:31},"5":{loc:{start:{line:71,column:18},end:{line:71,column:31}},type:"binary-expr",locations:[{start:{line:71,column:18},end:{line:71,column:25}},{start:{line:71,column:29},end:{line:71,column:31}}],line:71},"6":{loc:{start:{line:72,column:8},end:{line:75,column:9}},type:"if",locations:[{start:{line:72,column:8},end:{line:75,column:9}},{start:{line:72,column:8},end:{line:75,column:9}}],line:72},"7":{loc:{start:{line:72,column:12},end:{line:73,column:64}},type:"binary-expr",locations:[{start:{line:72,column:12},end:{line:72,column:36}},{start:{line:72,column:40},end:{line:72,column:64}},{start:{line:72,column:68},end:{line:72,column:94}},{start:{line:73,column:12},end:{line:73,column:35}},{start:{line:73,column:39},end:{line:73,column:64}}],line:72},"8":{loc:{start:{line:84,column:18},end:{line:84,column:31}},type:"binary-expr",locations:[{start:{line:84,column:18},end:{line:84,column:25}},{start:{line:84,column:29},end:{line:84,column:31}}],line:84},"9":{loc:{start:{line:86,column:8},end:{line:88,column:9}},type:"if",locations:[{start:{line:86,column:8},end:{line:88,column:9}},{start:{line:86,column:8},end:{line:88,column:9}}],line:86},"10":{loc:{start:{line:86,column:12},end:{line:86,column:47}},type:"binary-expr",locations:[{start:{line:86,column:12},end:{line:86,column:22}},{start:{line:86,column:26},end:{line:86,column:47}}],line:86},"11":{loc:{start:{line:89,column:8},end:{line:91,column:9}},type:"if",locations:[{start:{line:89,column:8},end:{line:91,column:9}},{start:{line:89,column:8},end:{line:91,column:9}}],line:89},"12":{loc:{start:{line:102,column:8},end:{line:109,column:9}},type:"if",locations:[{start:{line:102,column:8},end:{line:109,column:9}},{start:{line:102,column:8},end:{line:109,column:9}}],line:102},"13":{loc:{start:{line:104,column:16},end:{line:107,column:17}},type:"if",locations:[{start:{line:104,column:16},end:{line:107,column:17}},{start:{line:104,column:16},end:{line:107,column:17}}],line:104},"14":{loc:{start:{line:111,column:17},end:{line:111,column:27}},type:"binary-expr",locations:[{start:{line:111,column:17},end:{line:111,column:21}},{start:{line:111,column:25},end:{line:111,column:27}}],line:111},"15":{loc:{start:{line:114,column:12},end:{line:116,column:13}},type:"if",locations:[{start:{line:114,column:12},end:{line:116,column:13}},{start:{line:114,column:12},end:{line:116,column:13}}],line:114},"16":{loc:{start:{line:134,column:8},end:{line:140,column:9}},type:"if",locations:[{start:{line:134,column:8},end:{line:140,column:9}},{start:{line:134,column:8},end:{line:140,column:9}}],line:134},"17":{loc:{start:{line:181,column:12},end:{line:237,column:13}},type:"if",locations:[{start:{line:181,column:12},end:{line:237,column:13}},{start:{line:181,column:12},end:{line:237,column:13}}],line:181},"18":{loc:{start:{line:181,column:16},end:{line:181,column:67}},type:"binary-expr",locations:[{start:{line:181,column:16},end:{line:181,column:37}},{start:{line:181,column:41},end:{line:181,column:67}}],line:181},"19":{loc:{start:{line:182,column:16},end:{line:221,column:17}},type:"if",locations:[{start:{line:182,column:16},end:{line:221,column:17}},{start:{line:182,column:16},end:{line:221,column:17}}],line:182},"20":{loc:{start:{line:190,column:21},end:{line:221,column:17}},type:"if",locations:[{start:{line:190,column:21},end:{line:221,column:17}},{start:{line:190,column:21},end:{line:221,column:17}}],line:190},"21":{loc:{start:{line:196,column:21},end:{line:221,column:17}},type:"if",locations:[{start:{line:196,column:21},end:{line:221,column:17}},{start:{line:196,column:21},end:{line:221,column:17}}],line:196},"22":{loc:{start:{line:196,column:25},end:{line:196,column:70}},type:"binary-expr",locations:[{start:{line:196,column:25},end:{line:196,column:46}},{start:{line:196,column:50},end:{line:196,column:70}}],line:196},"23":{loc:{start:{line:198,column:20},end:{line:203,column:21}},type:"if",locations:[{start:{line:198,column:20},end:{line:203,column:21}},{start:{line:198,column:20},end:{line:203,column:21}}],line:198},"24":{loc:{start:{line:198,column:24},end:{line:198,column:94}},type:"binary-expr",locations:[{start:{line:198,column:24},end:{line:198,column:36}},{start:{line:198,column:40},end:{line:198,column:63}},{start:{line:198,column:67},end:{line:198,column:94}}],line:198},"25":{loc:{start:{line:211,column:21},end:{line:221,column:17}},type:"if",locations:[{start:{line:211,column:21},end:{line:221,column:17}},{start:{line:211,column:21},end:{line:221,column:17}}],line:211},"26":{loc:{start:{line:212,column:20},end:{line:217,column:21}},type:"if",locations:[{start:{line:212,column:20},end:{line:217,column:21}},{start:{line:212,column:20},end:{line:217,column:21}}],line:212},"27":{loc:{start:{line:216,column:44},end:{line:216,column:134}},type:"cond-expr",locations:[{start:{line:216,column:62},end:{line:216,column:109}},{start:{line:216,column:112},end:{line:216,column:134}}],line:216},"28":{loc:{start:{line:226,column:16},end:{line:236,column:17}},type:"if",locations:[{start:{line:226,column:16},end:{line:236,column:17}},{start:{line:226,column:16},end:{line:236,column:17}}],line:226},"29":{loc:{start:{line:226,column:20},end:{line:226,column:65}},type:"binary-expr",locations:[{start:{line:226,column:20},end:{line:226,column:41}},{start:{line:226,column:45},end:{line:226,column:65}}],line:226},"30":{loc:{start:{line:244,column:8},end:{line:246,column:9}},type:"if",locations:[{start:{line:244,column:8},end:{line:246,column:9}},{start:{line:244,column:8},end:{line:246,column:9}}],line:244},"31":{loc:{start:{line:247,column:8},end:{line:258,column:9}},type:"if",locations:[{start:{line:247,column:8},end:{line:258,column:9}},{start:{line:247,column:8},end:{line:258,column:9}}],line:247},"32":{loc:{start:{line:264,column:8},end:{line:289,column:9}},type:"if",locations:[{start:{line:264,column:8},end:{line:289,column:9}},{start:{line:264,column:8},end:{line:289,column:9}}],line:264},"33":{loc:{start:{line:267,column:13},end:{line:289,column:9}},type:"if",locations:[{start:{line:267,column:13},end:{line:289,column:9}},{start:{line:267,column:13},end:{line:289,column:9}}],line:267},"34":{loc:{start:{line:276,column:26},end:{line:276,column:59}},type:"binary-expr",locations:[{start:{line:276,column:26},end:{line:276,column:34}},{start:{line:276,column:38},end:{line:276,column:59}}],line:276}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":0,"95":0,"96":0,"97":0,"98":0,"99":0,"100":0,"101":0,"102":0,"103":0,"104":0,"105":0,"106":0,"107":0,"108":0,"109":0,"110":0,"111":0,"112":0,"113":0,"114":0,"115":0,"116":0,"117":0,"118":0,"119":0,"120":0,"121":0,"122":0,"123":0,"124":0,"125":0,"126":0,"127":0,"128":0,"129":0,"130":0,"131":0,"132":0,"133":0,"134":0,"135":0,"136":0,"137":0,"138":0,"139":0,"140":0,"141":0,"142":0,"143":0,"144":0,"145":0,"146":0,"147":0,"148":0,"149":0,"150":0,"151":0,"152":0,"153":0,"154":0,"155":0,"156":0,"157":0,"158":0,"159":0,"160":0,"161":0,"162":0,"163":0,"164":0,"165":0,"166":0,"167":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0,0,0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0],"23":[0,0],"24":[0,0,0],"25":[0,0],"26":[0,0],"27":[0,0],"28":[0,0],"29":[0,0],"30":[0,0],"31":[0,0],"32":[0,0],"33":[0,0],"34":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\dataclass-business.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\dataclass-business.ts"],names:[],mappings:"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",sourcesContent:["import AbstractBusiness from './abstract-business';\r\nimport EntityBusiness from './entity-business';\r\nimport DataClassService from '../data-access/service/dataclass-service';\r\nimport CollectionBusiness from './collection-business';\r\nimport MediaBusiness from './media-business';\r\nimport Entity from '../presentation/entity';\r\nimport Collection from '../presentation/collection';\r\nimport {AttributeRelated, AttributeCollection} from '../presentation/dataclass';\r\nimport Media from '../presentation/media';\r\nimport Const from '../const';\r\nimport {ICollectionDBO} from './collection-business';\r\nimport {DataClass} from '../presentation/dataclass';\r\nimport {QueryOption} from '../presentation/query-option';\r\nimport {IEntityDBO} from './entity-business';\r\nimport {MethodAdapter} from './method-adapter';\r\nimport WakandaClient from '../wakanda-client';\r\nimport Util from './util';\r\n\r\n\r\n//This map stores all DataClassBusiness instances of existing dataClasses\r\nlet _dataClassBusinessMap = new Map<string, DataClassBusiness>();\r\n\r\nexport interface IMethodsArray {\r\n  entity: string[];\r\n  collection: string[];\r\n  dataClass: string[];\r\n}\r\n\r\nclass DataClassBusiness extends AbstractBusiness {\r\n\r\n  public dataClass: DataClass;\r\n  public methods: IMethodsArray;\r\n  public _dataClassBusinessMap: Map<string, DataClassBusiness>;\r\n  public dataURI: string;\r\n\r\n  private service: DataClassService;\r\n\r\n  constructor({wakJSC, dataClass, methods, dataURI}:\r\n  {wakJSC: WakandaClient, dataClass: DataClass, methods: IMethodsArray, dataURI: string}) {\r\n    super({wakJSC});\r\n\r\n    this.dataClass = dataClass;\r\n    this.methods = methods;\r\n    this.service = new DataClassService({\r\n      wakJSC: this.wakJSC,\r\n      dataClassBusiness: this\r\n    });\r\n    this.dataURI = dataURI;\r\n\r\n    _dataClassBusinessMap.set(dataClass.name, this);\r\n    this._dataClassBusinessMap = _dataClassBusinessMap;\r\n  }\r\n\r\n  public _decorateDataClass() {\r\n    //Do not forget to bind(this) to have \"this\" pointing on business instance\r\n    //instead of given dataclass instance\r\n    this.dataClass.find    = this.find.bind(this);\r\n    this.dataClass.query   = this.query.bind(this);\r\n    this.dataClass.create  = this.create.bind(this);\r\n\r\n    this._addUserDefinedMethods();\r\n  }\r\n\r\n  private _addUserDefinedMethods() {\r\n    let self = this;\r\n\r\n    this.methods.dataClass.forEach(method => {\r\n      //Voluntary don't use fat arrow notation to use arguments object without a bug\r\n      this.dataClass[method] = function() {\r\n        let params = Array.from(arguments);\r\n        return self.callMethod(method, params);\r\n      };\r\n    });\r\n  }\r\n\r\n  public callMethod(methodName: string, parameters: any[]): Promise<Entity|Collection|any> {\r\n    return this.service.callMethod(methodName, parameters)\r\n      .then(obj => {\r\n        return MethodAdapter.transform(obj, this._dataClassBusinessMap);\r\n      });\r\n  }\r\n\r\n  public find(id: string|number, options?: QueryOption): Promise<Entity> {\r\n    let opt = options || {};\r\n\r\n    if (opt.filter !== undefined || opt.params !== undefined || opt.pageSize !== undefined ||\r\n      opt.start !== undefined || opt.orderBy !== undefined) {\r\n      throw new Error('Dataclass.find: options filter, params, pageSize, start and orderBy are not allowed');\r\n    }\r\n\r\n    return this.service.find(id, opt).then(entity => {\r\n      return this._presentationEntityFromDbo({\r\n        dbo: entity\r\n      });\r\n    });\r\n  }\r\n\r\n  public query(options?: QueryOption): Promise<Collection> {\r\n    let opt = options || {};\r\n    let initialSelect = opt.select;\r\n\r\n    if (opt.method && opt.method.length > 0) {\r\n      throw new Error('Dataclass.query: option method is not allowed');\r\n    }\r\n\r\n    if (!opt.pageSize) {\r\n      opt.pageSize = Const.DEFAULT_PAGE_SIZE;\r\n    }\r\n\r\n    return this.service.query(opt).then(collection => {\r\n      return this._presentationCollectionFromDbo({\r\n        dbo: collection,\r\n        pageSize: opt.pageSize,\r\n        initialSelect\r\n      });\r\n    });\r\n  }\r\n\r\n  public create(pojo?: any): Entity {\r\n    let entityToAttach: any = {};\r\n\r\n    if (pojo) {\r\n      for (let prop in pojo) {\r\n        if (pojo[prop] instanceof Entity) {\r\n          entityToAttach[prop] = pojo[prop];\r\n          delete pojo[prop];\r\n        }\r\n      }\r\n    }\r\n\r\n    let entity = this._presentationEntityFromDbo({\r\n      dbo: pojo || {}\r\n    });\r\n\r\n    for (let prop in entityToAttach) {\r\n      if (Object.prototype.hasOwnProperty.call(entityToAttach, prop)) {\r\n        entity[prop] = entityToAttach[prop];\r\n      }\r\n    }\r\n\r\n    return entity;\r\n  }\r\n\r\n  private _createEntity({key, deferred, dbo}: {key: string, deferred?: boolean, dbo?: IEntityDBO}): Entity {\r\n\r\n    let entity = new Entity({\r\n      key,\r\n      deferred,\r\n      dataClass: this.dataClass\r\n    });\r\n    let business = new EntityBusiness({\r\n      wakJSC: this.wakJSC,\r\n      dataClass: this.dataClass,\r\n      entity,\r\n      dataClassBusiness: this\r\n    });\r\n    business._decorateEntity();\r\n\r\n    if (!deferred) {\r\n      this._populateEntityDataFromDbo({\r\n        dbo: dbo,\r\n        entity: entity\r\n      });\r\n      business._flashEntityValues();\r\n    }\r\n    return entity;\r\n  }\r\n\r\n  private _createCollection({uri, deferred, pageSize, initialSelect}:\r\n    {uri: string, deferred?: boolean, pageSize?: number, initialSelect?: string}): Collection {\r\n\r\n    let collection = new Collection({\r\n        deferred: deferred,\r\n        dataClass: this.dataClass\r\n      });\r\n    let business = new CollectionBusiness({\r\n      wakJSC: this.wakJSC,\r\n      dataClass: this.dataClass,\r\n      dataClassBusiness: this,\r\n      collection,\r\n      collectionUri: uri,\r\n      pageSize,\r\n      initialSelect\r\n    });\r\n    business._decorateCollection();\r\n\r\n    return collection;\r\n  }\r\n\r\n  public _createMedia({uri, isImage, attributeName, entity}:\r\n   {uri: string, isImage: boolean, attributeName: string, entity: Entity}): Media {\r\n\r\n    let media = new Media({uri});\r\n    let business = new MediaBusiness({\r\n      wakJSC: this.wakJSC,\r\n      media,\r\n      dataClassBusiness: this,\r\n      isImage,\r\n      attributeName,\r\n      entity\r\n    });\r\n\r\n    business._decorateMedia();\r\n\r\n    return media;\r\n  }\r\n\r\n  private _populateEntityDataFromDbo({dbo, entity}: {dbo: IEntityDBO, entity: Entity}): Entity {\r\n      entity._stamp = dbo.__STAMP;\r\n      for (let attr of this.dataClass.attributes) {\r\n\r\n        let dboAttribute = dbo[attr.name];\r\n\r\n        if (dboAttribute !== null && dboAttribute !== undefined) {\r\n          if (attr instanceof AttributeRelated) {\r\n            //Kind of recursive call with a potententialy different instance of\r\n            //DataClassBusiness\r\n            let business = _dataClassBusinessMap.get(attr.type);\r\n            entity[attr.name] = business._presentationEntityFromDbo({\r\n              dbo: dboAttribute\r\n            });\r\n          }\r\n          else if (attr instanceof AttributeCollection) {\r\n            let business = _dataClassBusinessMap.get(attr.entityType);\r\n            entity[attr.name] = business._presentationCollectionFromDbo({\r\n              dbo: dboAttribute\r\n            });\r\n          }\r\n          else if (attr.type === 'image' || attr.type === 'blob') {\r\n            let uri: string;\r\n\r\n            if (dboAttribute && dboAttribute.__deferred && dboAttribute.__deferred.uri) {\r\n              uri = dboAttribute.__deferred.uri;\r\n            }\r\n            else {\r\n              uri = null;\r\n            }\r\n            entity[attr.name] = this._createMedia({\r\n              uri,\r\n              isImage: attr.type === 'image',\r\n              attributeName: attr.name,\r\n              entity\r\n            });\r\n          }\r\n          else if (attr.type === 'date') {\r\n            if (!dboAttribute) {\r\n              entity[attr.name] = null;\r\n            } else {\r\n              entity[attr.name] = attr.simpleDate ? Util.wakParseSimpleDate(dboAttribute) : new Date(dboAttribute);\r\n            }\r\n          }\r\n          else {\r\n            entity[attr.name] = dboAttribute;\r\n          }\r\n        }\r\n        else {\r\n          //Even if the property is null, we need a media for this kind of attributes\r\n          //to handle the upload part\r\n          if (attr.type === 'image' || attr.type === 'blob') {\r\n            entity[attr.name] = this._createMedia({\r\n              uri: null,\r\n              isImage: attr.type === 'image',\r\n              attributeName: attr.name,\r\n              entity\r\n            });\r\n          }\r\n          else {\r\n            entity[attr.name] = null;\r\n          }\r\n        }\r\n      }\r\n      return entity;\r\n  }\r\n\r\n  public _presentationEntityFromDbo({dbo}: {dbo: IEntityDBO}): Entity {\r\n    let entity: Entity;\r\n\r\n    if (!dbo) {\r\n      entity = null;\r\n    }\r\n    if (dbo.__deferred) {\r\n      entity = this._createEntity({\r\n        key: dbo.__deferred.__KEY,\r\n        deferred: true\r\n      });\r\n    }\r\n    else {\r\n      entity = this._createEntity({\r\n        key: dbo.__KEY,\r\n        dbo: dbo\r\n      });\r\n    }\r\n\r\n    return entity;\r\n  }\r\n\r\n  public _presentationCollectionFromDbo({dbo, pageSize, initialSelect}:\r\n    {dbo: ICollectionDBO, pageSize?: number, initialSelect?: string}): Collection {\r\n\r\n    let collection: Collection;\r\n\r\n    if (!dbo) {\r\n      collection = null;\r\n    }\r\n    else if (dbo.__deferred) {\r\n      collection = this._createCollection({\r\n        deferred: true,\r\n        uri: dbo.__deferred.uri\r\n      });\r\n    }\r\n    else {\r\n      collection = this._createCollection({\r\n        uri: dbo.__ENTITYSET,\r\n        pageSize: pageSize || dbo.__ENTITIES.length,\r\n        initialSelect\r\n      });\r\n      collection._count     = dbo.__COUNT;\r\n      collection._first     = dbo.__FIRST;\r\n      collection._sent      = dbo.__SENT;\r\n      collection._pageSize  = pageSize;\r\n\r\n      for (let dboEntity of dbo.__ENTITIES) {\r\n        collection.entities.push(this._presentationEntityFromDbo({\r\n          dbo: dboEntity\r\n        }));\r\n      }\r\n    }\r\n\r\n    return collection;\r\n  }\r\n}\r\n\r\nexport default DataClassBusiness;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_24e24p8jw0.s[0]++,(cov_24e24p8jw0.b[0][0]++,this)&&(cov_24e24p8jw0.b[0][1]++,this.__extends)||(cov_24e24p8jw0.b[0][2]++,function(){cov_24e24p8jw0.f[0]++;var extendStatics=(cov_24e24p8jw0.s[1]++,(cov_24e24p8jw0.b[1][0]++,Object.setPrototypeOf)||(cov_24e24p8jw0.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_24e24p8jw0.b[1][2]++,function(d,b){cov_24e24p8jw0.f[1]++;cov_24e24p8jw0.s[2]++;d.__proto__=b;})||(cov_24e24p8jw0.b[1][3]++,function(d,b){cov_24e24p8jw0.f[2]++;cov_24e24p8jw0.s[3]++;for(var p in b){cov_24e24p8jw0.s[4]++;if(b.hasOwnProperty(p)){cov_24e24p8jw0.b[2][0]++;cov_24e24p8jw0.s[5]++;d[p]=b[p];}else{cov_24e24p8jw0.b[2][1]++;}}}));cov_24e24p8jw0.s[6]++;return function(d,b){cov_24e24p8jw0.f[3]++;cov_24e24p8jw0.s[7]++;extendStatics(d,b);function __(){cov_24e24p8jw0.f[4]++;cov_24e24p8jw0.s[8]++;this.constructor=d;}cov_24e24p8jw0.s[9]++;d.prototype=b===null?(cov_24e24p8jw0.b[3][0]++,Object.create(b)):(cov_24e24p8jw0.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_24e24p8jw0.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_business_1=(cov_24e24p8jw0.s[11]++,__webpack_require__(13));var entity_business_1=(cov_24e24p8jw0.s[12]++,__webpack_require__(127));var dataclass_service_1=(cov_24e24p8jw0.s[13]++,__webpack_require__(129));var collection_business_1=(cov_24e24p8jw0.s[14]++,__webpack_require__(130));var media_business_1=(cov_24e24p8jw0.s[15]++,__webpack_require__(132));var entity_1=(cov_24e24p8jw0.s[16]++,__webpack_require__(38));var collection_1=(cov_24e24p8jw0.s[17]++,__webpack_require__(73));var dataclass_1=(cov_24e24p8jw0.s[18]++,__webpack_require__(36));var media_1=(cov_24e24p8jw0.s[19]++,__webpack_require__(68));var const_1=(cov_24e24p8jw0.s[20]++,__webpack_require__(40));var method_adapter_1=(cov_24e24p8jw0.s[21]++,__webpack_require__(39));var util_1=(cov_24e24p8jw0.s[22]++,__webpack_require__(69));//This map stores all DataClassBusiness instances of existing dataClasses
var _dataClassBusinessMap=(cov_24e24p8jw0.s[23]++,new Map());var DataClassBusiness=(/** @class */cov_24e24p8jw0.s[24]++,function(_super){cov_24e24p8jw0.f[5]++;cov_24e24p8jw0.s[25]++;__extends(DataClassBusiness,_super);function DataClassBusiness(_a){cov_24e24p8jw0.f[6]++;var wakJSC=(cov_24e24p8jw0.s[26]++,_a.wakJSC),dataClass=(cov_24e24p8jw0.s[27]++,_a.dataClass),methods=(cov_24e24p8jw0.s[28]++,_a.methods),dataURI=(cov_24e24p8jw0.s[29]++,_a.dataURI);var _this=(cov_24e24p8jw0.s[30]++,(cov_24e24p8jw0.b[4][0]++,_super.call(this,{wakJSC:wakJSC}))||(cov_24e24p8jw0.b[4][1]++,this));cov_24e24p8jw0.s[31]++;_this.dataClass=dataClass;cov_24e24p8jw0.s[32]++;_this.methods=methods;cov_24e24p8jw0.s[33]++;_this.service=new dataclass_service_1.default({wakJSC:_this.wakJSC,dataClassBusiness:_this});cov_24e24p8jw0.s[34]++;_this.dataURI=dataURI;cov_24e24p8jw0.s[35]++;_dataClassBusinessMap.set(dataClass.name,_this);cov_24e24p8jw0.s[36]++;_this._dataClassBusinessMap=_dataClassBusinessMap;cov_24e24p8jw0.s[37]++;return _this;}cov_24e24p8jw0.s[38]++;DataClassBusiness.prototype._decorateDataClass=function(){cov_24e24p8jw0.f[7]++;cov_24e24p8jw0.s[39]++;//Do not forget to bind(this) to have "this" pointing on business instance
//instead of given dataclass instance
this.dataClass.find=this.find.bind(this);cov_24e24p8jw0.s[40]++;this.dataClass.query=this.query.bind(this);cov_24e24p8jw0.s[41]++;this.dataClass.create=this.create.bind(this);cov_24e24p8jw0.s[42]++;this._addUserDefinedMethods();};cov_24e24p8jw0.s[43]++;DataClassBusiness.prototype._addUserDefinedMethods=function(){cov_24e24p8jw0.f[8]++;var _this=(cov_24e24p8jw0.s[44]++,this);var self=(cov_24e24p8jw0.s[45]++,this);cov_24e24p8jw0.s[46]++;this.methods.dataClass.forEach(function(method){cov_24e24p8jw0.f[9]++;cov_24e24p8jw0.s[47]++;//Voluntary don't use fat arrow notation to use arguments object without a bug
_this.dataClass[method]=function(){cov_24e24p8jw0.f[10]++;var params=(cov_24e24p8jw0.s[48]++,Array.from(arguments));cov_24e24p8jw0.s[49]++;return self.callMethod(method,params);};});};cov_24e24p8jw0.s[50]++;DataClassBusiness.prototype.callMethod=function(methodName,parameters){cov_24e24p8jw0.f[11]++;var _this=(cov_24e24p8jw0.s[51]++,this);cov_24e24p8jw0.s[52]++;return this.service.callMethod(methodName,parameters).then(function(obj){cov_24e24p8jw0.f[12]++;cov_24e24p8jw0.s[53]++;return method_adapter_1.MethodAdapter.transform(obj,_this._dataClassBusinessMap);});};cov_24e24p8jw0.s[54]++;DataClassBusiness.prototype.find=function(id,options){cov_24e24p8jw0.f[13]++;var _this=(cov_24e24p8jw0.s[55]++,this);var opt=(cov_24e24p8jw0.s[56]++,(cov_24e24p8jw0.b[5][0]++,options)||(cov_24e24p8jw0.b[5][1]++,{}));cov_24e24p8jw0.s[57]++;if((cov_24e24p8jw0.b[7][0]++,opt.filter!==undefined)||(cov_24e24p8jw0.b[7][1]++,opt.params!==undefined)||(cov_24e24p8jw0.b[7][2]++,opt.pageSize!==undefined)||(cov_24e24p8jw0.b[7][3]++,opt.start!==undefined)||(cov_24e24p8jw0.b[7][4]++,opt.orderBy!==undefined)){cov_24e24p8jw0.b[6][0]++;cov_24e24p8jw0.s[58]++;throw new Error('Dataclass.find: options filter, params, pageSize, start and orderBy are not allowed');}else{cov_24e24p8jw0.b[6][1]++;}cov_24e24p8jw0.s[59]++;return this.service.find(id,opt).then(function(entity){cov_24e24p8jw0.f[14]++;cov_24e24p8jw0.s[60]++;return _this._presentationEntityFromDbo({dbo:entity});});};cov_24e24p8jw0.s[61]++;DataClassBusiness.prototype.query=function(options){cov_24e24p8jw0.f[15]++;var _this=(cov_24e24p8jw0.s[62]++,this);var opt=(cov_24e24p8jw0.s[63]++,(cov_24e24p8jw0.b[8][0]++,options)||(cov_24e24p8jw0.b[8][1]++,{}));var initialSelect=(cov_24e24p8jw0.s[64]++,opt.select);cov_24e24p8jw0.s[65]++;if((cov_24e24p8jw0.b[10][0]++,opt.method)&&(cov_24e24p8jw0.b[10][1]++,opt.method.length>0)){cov_24e24p8jw0.b[9][0]++;cov_24e24p8jw0.s[66]++;throw new Error('Dataclass.query: option method is not allowed');}else{cov_24e24p8jw0.b[9][1]++;}cov_24e24p8jw0.s[67]++;if(!opt.pageSize){cov_24e24p8jw0.b[11][0]++;cov_24e24p8jw0.s[68]++;opt.pageSize=const_1.default.DEFAULT_PAGE_SIZE;}else{cov_24e24p8jw0.b[11][1]++;}cov_24e24p8jw0.s[69]++;return this.service.query(opt).then(function(collection){cov_24e24p8jw0.f[16]++;cov_24e24p8jw0.s[70]++;return _this._presentationCollectionFromDbo({dbo:collection,pageSize:opt.pageSize,initialSelect:initialSelect});});};cov_24e24p8jw0.s[71]++;DataClassBusiness.prototype.create=function(pojo){cov_24e24p8jw0.f[17]++;var entityToAttach=(cov_24e24p8jw0.s[72]++,{});cov_24e24p8jw0.s[73]++;if(pojo){cov_24e24p8jw0.b[12][0]++;cov_24e24p8jw0.s[74]++;for(var prop in pojo){cov_24e24p8jw0.s[75]++;if(pojo[prop]instanceof entity_1.default){cov_24e24p8jw0.b[13][0]++;cov_24e24p8jw0.s[76]++;entityToAttach[prop]=pojo[prop];cov_24e24p8jw0.s[77]++;delete pojo[prop];}else{cov_24e24p8jw0.b[13][1]++;}}}else{cov_24e24p8jw0.b[12][1]++;}var entity=(cov_24e24p8jw0.s[78]++,this._presentationEntityFromDbo({dbo:(cov_24e24p8jw0.b[14][0]++,pojo)||(cov_24e24p8jw0.b[14][1]++,{})}));cov_24e24p8jw0.s[79]++;for(var prop in entityToAttach){cov_24e24p8jw0.s[80]++;if(Object.prototype.hasOwnProperty.call(entityToAttach,prop)){cov_24e24p8jw0.b[15][0]++;cov_24e24p8jw0.s[81]++;entity[prop]=entityToAttach[prop];}else{cov_24e24p8jw0.b[15][1]++;}}cov_24e24p8jw0.s[82]++;return entity;};cov_24e24p8jw0.s[83]++;DataClassBusiness.prototype._createEntity=function(_a){cov_24e24p8jw0.f[18]++;var key=(cov_24e24p8jw0.s[84]++,_a.key),deferred=(cov_24e24p8jw0.s[85]++,_a.deferred),dbo=(cov_24e24p8jw0.s[86]++,_a.dbo);var entity=(cov_24e24p8jw0.s[87]++,new entity_1.default({key:key,deferred:deferred,dataClass:this.dataClass}));var business=(cov_24e24p8jw0.s[88]++,new entity_business_1.default({wakJSC:this.wakJSC,dataClass:this.dataClass,entity:entity,dataClassBusiness:this}));cov_24e24p8jw0.s[89]++;business._decorateEntity();cov_24e24p8jw0.s[90]++;if(!deferred){cov_24e24p8jw0.b[16][0]++;cov_24e24p8jw0.s[91]++;this._populateEntityDataFromDbo({dbo:dbo,entity:entity});cov_24e24p8jw0.s[92]++;business._flashEntityValues();}else{cov_24e24p8jw0.b[16][1]++;}cov_24e24p8jw0.s[93]++;return entity;};cov_24e24p8jw0.s[94]++;DataClassBusiness.prototype._createCollection=function(_a){cov_24e24p8jw0.f[19]++;var uri=(cov_24e24p8jw0.s[95]++,_a.uri),deferred=(cov_24e24p8jw0.s[96]++,_a.deferred),pageSize=(cov_24e24p8jw0.s[97]++,_a.pageSize),initialSelect=(cov_24e24p8jw0.s[98]++,_a.initialSelect);var collection=(cov_24e24p8jw0.s[99]++,new collection_1.default({deferred:deferred,dataClass:this.dataClass}));var business=(cov_24e24p8jw0.s[100]++,new collection_business_1.default({wakJSC:this.wakJSC,dataClass:this.dataClass,dataClassBusiness:this,collection:collection,collectionUri:uri,pageSize:pageSize,initialSelect:initialSelect}));cov_24e24p8jw0.s[101]++;business._decorateCollection();cov_24e24p8jw0.s[102]++;return collection;};cov_24e24p8jw0.s[103]++;DataClassBusiness.prototype._createMedia=function(_a){cov_24e24p8jw0.f[20]++;var uri=(cov_24e24p8jw0.s[104]++,_a.uri),isImage=(cov_24e24p8jw0.s[105]++,_a.isImage),attributeName=(cov_24e24p8jw0.s[106]++,_a.attributeName),entity=(cov_24e24p8jw0.s[107]++,_a.entity);var media=(cov_24e24p8jw0.s[108]++,new media_1.default({uri:uri}));var business=(cov_24e24p8jw0.s[109]++,new media_business_1.default({wakJSC:this.wakJSC,media:media,dataClassBusiness:this,isImage:isImage,attributeName:attributeName,entity:entity}));cov_24e24p8jw0.s[110]++;business._decorateMedia();cov_24e24p8jw0.s[111]++;return media;};cov_24e24p8jw0.s[112]++;DataClassBusiness.prototype._populateEntityDataFromDbo=function(_a){cov_24e24p8jw0.f[21]++;var dbo=(cov_24e24p8jw0.s[113]++,_a.dbo),entity=(cov_24e24p8jw0.s[114]++,_a.entity);cov_24e24p8jw0.s[115]++;entity._stamp=dbo.__STAMP;cov_24e24p8jw0.s[116]++;for(var _i=0,_b=this.dataClass.attributes;_i<_b.length;_i++){var attr=(cov_24e24p8jw0.s[117]++,_b[_i]);var dboAttribute=(cov_24e24p8jw0.s[118]++,dbo[attr.name]);cov_24e24p8jw0.s[119]++;if((cov_24e24p8jw0.b[18][0]++,dboAttribute!==null)&&(cov_24e24p8jw0.b[18][1]++,dboAttribute!==undefined)){cov_24e24p8jw0.b[17][0]++;cov_24e24p8jw0.s[120]++;if(attr instanceof dataclass_1.AttributeRelated){cov_24e24p8jw0.b[19][0]++;//Kind of recursive call with a potententialy different instance of
//DataClassBusiness
var business=(cov_24e24p8jw0.s[121]++,_dataClassBusinessMap.get(attr.type));cov_24e24p8jw0.s[122]++;entity[attr.name]=business._presentationEntityFromDbo({dbo:dboAttribute});}else{cov_24e24p8jw0.b[19][1]++;cov_24e24p8jw0.s[123]++;if(attr instanceof dataclass_1.AttributeCollection){cov_24e24p8jw0.b[20][0]++;var business=(cov_24e24p8jw0.s[124]++,_dataClassBusinessMap.get(attr.entityType));cov_24e24p8jw0.s[125]++;entity[attr.name]=business._presentationCollectionFromDbo({dbo:dboAttribute});}else{cov_24e24p8jw0.b[20][1]++;cov_24e24p8jw0.s[126]++;if((cov_24e24p8jw0.b[22][0]++,attr.type==='image')||(cov_24e24p8jw0.b[22][1]++,attr.type==='blob')){cov_24e24p8jw0.b[21][0]++;var uri=(cov_24e24p8jw0.s[127]++,void 0);cov_24e24p8jw0.s[128]++;if((cov_24e24p8jw0.b[24][0]++,dboAttribute)&&(cov_24e24p8jw0.b[24][1]++,dboAttribute.__deferred)&&(cov_24e24p8jw0.b[24][2]++,dboAttribute.__deferred.uri)){cov_24e24p8jw0.b[23][0]++;cov_24e24p8jw0.s[129]++;uri=dboAttribute.__deferred.uri;}else{cov_24e24p8jw0.b[23][1]++;cov_24e24p8jw0.s[130]++;uri=null;}cov_24e24p8jw0.s[131]++;entity[attr.name]=this._createMedia({uri:uri,isImage:attr.type==='image',attributeName:attr.name,entity:entity});}else{cov_24e24p8jw0.b[21][1]++;cov_24e24p8jw0.s[132]++;if(attr.type==='date'){cov_24e24p8jw0.b[25][0]++;cov_24e24p8jw0.s[133]++;if(!dboAttribute){cov_24e24p8jw0.b[26][0]++;cov_24e24p8jw0.s[134]++;entity[attr.name]=null;}else{cov_24e24p8jw0.b[26][1]++;cov_24e24p8jw0.s[135]++;entity[attr.name]=attr.simpleDate?(cov_24e24p8jw0.b[27][0]++,util_1.default.wakParseSimpleDate(dboAttribute)):(cov_24e24p8jw0.b[27][1]++,new Date(dboAttribute));}}else{cov_24e24p8jw0.b[25][1]++;cov_24e24p8jw0.s[136]++;entity[attr.name]=dboAttribute;}}}}}else{cov_24e24p8jw0.b[17][1]++;cov_24e24p8jw0.s[137]++;//Even if the property is null, we need a media for this kind of attributes
//to handle the upload part
if((cov_24e24p8jw0.b[29][0]++,attr.type==='image')||(cov_24e24p8jw0.b[29][1]++,attr.type==='blob')){cov_24e24p8jw0.b[28][0]++;cov_24e24p8jw0.s[138]++;entity[attr.name]=this._createMedia({uri:null,isImage:attr.type==='image',attributeName:attr.name,entity:entity});}else{cov_24e24p8jw0.b[28][1]++;cov_24e24p8jw0.s[139]++;entity[attr.name]=null;}}}cov_24e24p8jw0.s[140]++;return entity;};cov_24e24p8jw0.s[141]++;DataClassBusiness.prototype._presentationEntityFromDbo=function(_a){cov_24e24p8jw0.f[22]++;var dbo=(cov_24e24p8jw0.s[142]++,_a.dbo);var entity;cov_24e24p8jw0.s[143]++;if(!dbo){cov_24e24p8jw0.b[30][0]++;cov_24e24p8jw0.s[144]++;entity=null;}else{cov_24e24p8jw0.b[30][1]++;}cov_24e24p8jw0.s[145]++;if(dbo.__deferred){cov_24e24p8jw0.b[31][0]++;cov_24e24p8jw0.s[146]++;entity=this._createEntity({key:dbo.__deferred.__KEY,deferred:true});}else{cov_24e24p8jw0.b[31][1]++;cov_24e24p8jw0.s[147]++;entity=this._createEntity({key:dbo.__KEY,dbo:dbo});}cov_24e24p8jw0.s[148]++;return entity;};cov_24e24p8jw0.s[149]++;DataClassBusiness.prototype._presentationCollectionFromDbo=function(_a){cov_24e24p8jw0.f[23]++;var dbo=(cov_24e24p8jw0.s[150]++,_a.dbo),pageSize=(cov_24e24p8jw0.s[151]++,_a.pageSize),initialSelect=(cov_24e24p8jw0.s[152]++,_a.initialSelect);var collection;cov_24e24p8jw0.s[153]++;if(!dbo){cov_24e24p8jw0.b[32][0]++;cov_24e24p8jw0.s[154]++;collection=null;}else{cov_24e24p8jw0.b[32][1]++;cov_24e24p8jw0.s[155]++;if(dbo.__deferred){cov_24e24p8jw0.b[33][0]++;cov_24e24p8jw0.s[156]++;collection=this._createCollection({deferred:true,uri:dbo.__deferred.uri});}else{cov_24e24p8jw0.b[33][1]++;cov_24e24p8jw0.s[157]++;collection=this._createCollection({uri:dbo.__ENTITYSET,pageSize:(cov_24e24p8jw0.b[34][0]++,pageSize)||(cov_24e24p8jw0.b[34][1]++,dbo.__ENTITIES.length),initialSelect:initialSelect});cov_24e24p8jw0.s[158]++;collection._count=dbo.__COUNT;cov_24e24p8jw0.s[159]++;collection._first=dbo.__FIRST;cov_24e24p8jw0.s[160]++;collection._sent=dbo.__SENT;cov_24e24p8jw0.s[161]++;collection._pageSize=pageSize;cov_24e24p8jw0.s[162]++;for(var _i=0,_b=dbo.__ENTITIES;_i<_b.length;_i++){var dboEntity=(cov_24e24p8jw0.s[163]++,_b[_i]);cov_24e24p8jw0.s[164]++;collection.entities.push(this._presentationEntityFromDbo({dbo:dboEntity}));}}}cov_24e24p8jw0.s[165]++;return collection;};cov_24e24p8jw0.s[166]++;return DataClassBusiness;}(abstract_business_1.default));cov_24e24p8jw0.s[167]++;exports.default=DataClassBusiness;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_2lsa6sconw=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\entity-business.ts",hash="dbe9cf83942d06a14a9b719ce0abeb6f0e48eb5d",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\entity-business.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:26},end:{line:13,column:56}},"12":{start:{line:14,column:23},end:{line:14,column:71}},"13":{start:{line:15,column:18},end:{line:15,column:54}},"14":{start:{line:16,column:15},end:{line:16,column:48}},"15":{start:{line:17,column:23},end:{line:17,column:50}},"16":{start:{line:18,column:14},end:{line:18,column:46}},"17":{start:{line:19,column:13},end:{line:19,column:30}},"18":{start:{line:20,column:36},end:{line:241,column:30}},"19":{start:{line:21,column:4},end:{line:21,column:38}},"20":{start:{line:23,column:21},end:{line:23,column:30}},"21":{start:{line:23,column:41},end:{line:23,column:50}},"22":{start:{line:23,column:64},end:{line:23,column:76}},"23":{start:{line:23,column:98},end:{line:23,column:118}},"24":{start:{line:24,column:20},end:{line:24,column:65}},"25":{start:{line:25,column:8},end:{line:25,column:30}},"26":{start:{line:26,column:8},end:{line:26,column:36}},"27":{start:{line:27,column:8},end:{line:27,column:52}},"28":{start:{line:28,column:8},end:{line:32,column:11}},"29":{start:{line:33,column:8},end:{line:33,column:21}},"30":{start:{line:35,column:4},end:{line:41,column:6}},"31":{start:{line:36,column:8},end:{line:36,column:48}},"32":{start:{line:37,column:8},end:{line:37,column:52}},"33":{start:{line:38,column:8},end:{line:38,column:50}},"34":{start:{line:39,column:8},end:{line:39,column:58}},"35":{start:{line:40,column:8},end:{line:40,column:38}},"36":{start:{line:42,column:4},end:{line:77,column:6}},"37":{start:{line:43,column:19},end:{line:43,column:21}},"38":{start:{line:44,column:21},end:{line:44,column:32}},"39":{start:{line:45,column:8},end:{line:75,column:9}},"40":{start:{line:46,column:23},end:{line:46,column:29}},"41":{start:{line:47,column:26},end:{line:47,column:43}},"42":{start:{line:48,column:12},end:{line:50,column:13}},"43":{start:{line:49,column:16},end:{line:49,column:25}},"44":{start:{line:51,column:12},end:{line:74,column:13}},"45":{start:{line:52,column:16},end:{line:52,column:64}},"46":{start:{line:55,column:16},end:{line:73,column:17}},"47":{start:{line:58,column:24},end:{line:58,column:63}},"48":{start:{line:59,column:24},end:{line:59,column:30}},"49":{start:{line:61,column:24},end:{line:61,column:66}},"50":{start:{line:62,column:24},end:{line:62,column:30}},"51":{start:{line:64,column:24},end:{line:69,column:25}},"52":{start:{line:65,column:28},end:{line:65,column:51}},"53":{start:{line:68,column:28},end:{line:68,column:129}},"54":{start:{line:70,column:24},end:{line:70,column:30}},"55":{start:{line:72,column:24},end:{line:72,column:50}},"56":{start:{line:76,column:8},end:{line:76,column:37}},"57":{start:{line:78,column:4},end:{line:88,column:6}},"58":{start:{line:79,column:20},end:{line:79,column:24}},"59":{start:{line:80,column:19},end:{line:80,column:23}},"60":{start:{line:81,column:8},end:{line:87,column:11}},"61":{start:{line:83,column:12},end:{line:86,column:14}},"62":{start:{line:84,column:29},end:{line:84,column:50}},"63":{start:{line:85,column:16},end:{line:85,column:55}},"64":{start:{line:89,column:4},end:{line:101,column:6}},"65":{start:{line:90,column:20},end:{line:90,column:24}},"66":{start:{line:91,column:18},end:{line:91,column:31}},"67":{start:{line:92,column:8},end:{line:95,column:9}},"68":{start:{line:94,column:12},end:{line:94,column:113}},"69":{start:{line:96,column:8},end:{line:100,column:11}},"70":{start:{line:97,column:12},end:{line:97,column:67}},"71":{start:{line:98,column:12},end:{line:98,column:39}},"72":{start:{line:99,column:12},end:{line:99,column:32}},"73":{start:{line:102,column:4},end:{line:111,column:6}},"74":{start:{line:103,column:20},end:{line:103,column:24}},"75":{start:{line:104,column:8},end:{line:106,column:9}},"76":{start:{line:105,column:12},end:{line:105,column:97}},"77":{start:{line:107,column:8},end:{line:110,column:11}},"78":{start:{line:109,column:12},end:{line:109,column:112}},"79":{start:{line:112,column:4},end:{line:120,column:6}},"80":{start:{line:113,column:20},end:{line:113,column:24}},"81":{start:{line:114,column:8},end:{line:116,column:9}},"82":{start:{line:115,column:12},end:{line:115,column:76}},"83":{start:{line:117,column:8},end:{line:119,column:11}},"84":{start:{line:118,column:12},end:{line:118,column:32}},"85":{start:{line:121,column:4},end:{line:136,column:6}},"86":{start:{line:122,column:20},end:{line:122,column:24}},"87":{start:{line:123,column:19},end:{line:123,column:44}},"88":{start:{line:127,column:21},end:{line:127,column:44}},"89":{start:{line:128,column:8},end:{line:135,column:11}},"90":{start:{line:129,column:32},end:{line:131,column:14}},"91":{start:{line:132,column:12},end:{line:132,column:67}},"92":{start:{line:133,column:12},end:{line:133,column:39}},"93":{start:{line:134,column:12},end:{line:134,column:32}},"94":{start:{line:137,column:4},end:{line:148,column:6}},"95":{start:{line:138,column:20},end:{line:138,column:24}},"96":{start:{line:139,column:19},end:{line:139,column:44}},"97":{start:{line:140,column:8},end:{line:147,column:11}},"98":{start:{line:142,column:32},end:{line:144,column:14}},"99":{start:{line:145,column:12},end:{line:145,column:67}},"100":{start:{line:146,column:12},end:{line:146,column:32}},"101":{start:{line:149,column:4},end:{line:214,column:6}},"102":{start:{line:150,column:19},end:{line:150,column:21}},"103":{start:{line:151,column:26},end:{line:151,column:31}},"104":{start:{line:152,column:8},end:{line:158,column:9}},"105":{start:{line:153,column:12},end:{line:153,column:42}},"106":{start:{line:154,column:12},end:{line:154,column:46}},"107":{start:{line:157,column:12},end:{line:157,column:31}},"108":{start:{line:159,column:8},end:{line:186,column:9}},"109":{start:{line:160,column:23},end:{line:160,column:29}},"110":{start:{line:161,column:26},end:{line:161,column:48}},"111":{start:{line:162,column:12},end:{line:164,column:13}},"112":{start:{line:163,column:16},end:{line:163,column:31}},"113":{start:{line:165,column:12},end:{line:185,column:13}},"114":{start:{line:166,column:16},end:{line:166,column:64}},"115":{start:{line:168,column:17},end:{line:185,column:13}},"116":{start:{line:169,column:16},end:{line:169,column:25}},"117":{start:{line:171,column:17},end:{line:185,column:13}},"118":{start:{line:172,column:16},end:{line:177,column:17}},"119":{start:{line:173,column:20},end:{line:173,column:46}},"120":{start:{line:176,column:20},end:{line:176,column:121}},"121":{start:{line:179,column:17},end:{line:185,column:13}},"122":{start:{line:182,column:16},end:{line:184,column:17}},"123":{start:{line:183,column:20},end:{line:183,column:46}},"124":{start:{line:187,column:8},end:{line:212,column:9}},"125":{start:{line:188,column:26},end:{line:188,column:53}},"126":{start:{line:189,column:12},end:{line:211,column:13}},"127":{start:{line:190,column:27},end:{line:190,column:33}},"128":{start:{line:191,column:16},end:{line:193,column:17}},"129":{start:{line:192,column:20},end:{line:192,column:29}},"130":{start:{line:194,column:16},end:{line:210,column:17}},"131":{start:{line:197,column:24},end:{line:199,column:25}},"132":{start:{line:198,column:28},end:{line:198,column:51}},"133":{start:{line:200,column:24},end:{line:200,column:30}},"134":{start:{line:202,column:24},end:{line:204,column:25}},"135":{start:{line:203,column:28},end:{line:203,column:51}},"136":{start:{line:205,column:24},end:{line:205,column:30}},"137":{start:{line:207,column:24},end:{line:209,column:25}},"138":{start:{line:208,column:28},end:{line:208,column:51}},"139":{start:{line:213,column:8},end:{line:213,column:20}},"140":{start:{line:215,column:4},end:{line:227,column:6}},"141":{start:{line:216,column:28},end:{line:216,column:44}},"142":{start:{line:217,column:8},end:{line:226,column:9}},"143":{start:{line:218,column:12},end:{line:225,column:13}},"144":{start:{line:219,column:16},end:{line:224,column:17}},"145":{start:{line:220,column:20},end:{line:220,column:68}},"146":{start:{line:223,column:20},end:{line:223,column:60}},"147":{start:{line:228,column:4},end:{line:239,column:6}},"148":{start:{line:229,column:21},end:{line:229,column:23}},"149":{start:{line:230,column:8},end:{line:237,column:9}},"150":{start:{line:231,column:23},end:{line:231,column:29}},"151":{start:{line:232,column:12},end:{line:236,column:13}},"152":{start:{line:233,column:16},end:{line:235,column:17}},"153":{start:{line:234,column:20},end:{line:234,column:46}},"154":{start:{line:238,column:8},end:{line:238,column:62}},"155":{start:{line:240,column:4},end:{line:240,column:26}},"156":{start:{line:242,column:0},end:{line:242,column:33}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:20,column:36},end:{line:20,column:37}},loc:{start:{line:20,column:54},end:{line:241,column:1}},line:20},"6":{name:"EntityBusiness",decl:{start:{line:22,column:13},end:{line:22,column:27}},loc:{start:{line:22,column:32},end:{line:34,column:5}},line:22},"7":{name:"(anonymous_7)",decl:{start:{line:35,column:47},end:{line:35,column:48}},loc:{start:{line:35,column:59},end:{line:41,column:5}},line:35},"8":{name:"(anonymous_8)",decl:{start:{line:42,column:50},end:{line:42,column:51}},loc:{start:{line:42,column:62},end:{line:77,column:5}},line:42},"9":{name:"(anonymous_9)",decl:{start:{line:78,column:54},end:{line:78,column:55}},loc:{start:{line:78,column:66},end:{line:88,column:5}},line:78},"10":{name:"(anonymous_10)",decl:{start:{line:81,column:54},end:{line:81,column:55}},loc:{start:{line:81,column:72},end:{line:87,column:9}},line:81},"11":{name:"(anonymous_11)",decl:{start:{line:83,column:35},end:{line:83,column:36}},loc:{start:{line:83,column:47},end:{line:86,column:13}},line:83},"12":{name:"(anonymous_12)",decl:{start:{line:89,column:37},end:{line:89,column:38}},loc:{start:{line:89,column:56},end:{line:101,column:5}},line:89},"13":{name:"(anonymous_13)",decl:{start:{line:96,column:75},end:{line:96,column:76}},loc:{start:{line:96,column:100},end:{line:100,column:9}},line:96},"14":{name:"(anonymous_14)",decl:{start:{line:102,column:42},end:{line:102,column:43}},loc:{start:{line:102,column:76},end:{line:111,column:5}},line:102},"15":{name:"(anonymous_15)",decl:{start:{line:108,column:18},end:{line:108,column:19}},loc:{start:{line:108,column:33},end:{line:110,column:9}},line:108},"16":{name:"(anonymous_16)",decl:{start:{line:112,column:38},end:{line:112,column:39}},loc:{start:{line:112,column:50},end:{line:120,column:5}},line:112},"17":{name:"(anonymous_17)",decl:{start:{line:117,column:42},end:{line:117,column:43}},loc:{start:{line:117,column:54},end:{line:119,column:9}},line:117},"18":{name:"(anonymous_18)",decl:{start:{line:121,column:36},end:{line:121,column:37}},loc:{start:{line:121,column:48},end:{line:136,column:5}},line:121},"19":{name:"(anonymous_19)",decl:{start:{line:128,column:52},end:{line:128,column:53}},loc:{start:{line:128,column:73},end:{line:135,column:9}},line:128},"20":{name:"(anonymous_20)",decl:{start:{line:137,column:41},end:{line:137,column:42}},loc:{start:{line:137,column:53},end:{line:148,column:5}},line:137},"21":{name:"(anonymous_21)",decl:{start:{line:141,column:18},end:{line:141,column:19}},loc:{start:{line:141,column:33},end:{line:147,column:9}},line:141},"22":{name:"(anonymous_22)",decl:{start:{line:149,column:50},end:{line:149,column:51}},loc:{start:{line:149,column:62},end:{line:214,column:5}},line:149},"23":{name:"(anonymous_23)",decl:{start:{line:215,column:46},end:{line:215,column:47}},loc:{start:{line:215,column:60},end:{line:227,column:5}},line:215},"24":{name:"(anonymous_24)",decl:{start:{line:228,column:48},end:{line:228,column:49}},loc:{start:{line:228,column:60},end:{line:239,column:5}},line:228}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:24,column:20},end:{line:24,column:65}},type:"binary-expr",locations:[{start:{line:24,column:20},end:{line:24,column:57}},{start:{line:24,column:61},end:{line:24,column:65}}],line:24},"5":{loc:{start:{line:48,column:12},end:{line:50,column:13}},type:"if",locations:[{start:{line:48,column:12},end:{line:50,column:13}},{start:{line:48,column:12},end:{line:50,column:13}}],line:48},"6":{loc:{start:{line:51,column:12},end:{line:74,column:13}},type:"if",locations:[{start:{line:51,column:12},end:{line:74,column:13}},{start:{line:51,column:12},end:{line:74,column:13}}],line:51},"7":{loc:{start:{line:52,column:34},end:{line:52,column:63}},type:"cond-expr",locations:[{start:{line:52,column:44},end:{line:52,column:56}},{start:{line:52,column:59},end:{line:52,column:63}}],line:52},"8":{loc:{start:{line:55,column:16},end:{line:73,column:17}},type:"switch",locations:[{start:{line:56,column:20},end:{line:56,column:33}},{start:{line:57,column:20},end:{line:59,column:30}},{start:{line:60,column:20},end:{line:62,column:30}},{start:{line:63,column:20},end:{line:70,column:30}},{start:{line:71,column:20},end:{line:72,column:50}}],line:55},"9":{loc:{start:{line:64,column:24},end:{line:69,column:25}},type:"if",locations:[{start:{line:64,column:24},end:{line:69,column:25}},{start:{line:64,column:24},end:{line:69,column:25}}],line:64},"10":{loc:{start:{line:68,column:46},end:{line:68,column:128}},type:"cond-expr",locations:[{start:{line:68,column:64},end:{line:68,column:109}},{start:{line:68,column:112},end:{line:68,column:128}}],line:68},"11":{loc:{start:{line:91,column:18},end:{line:91,column:31}},type:"binary-expr",locations:[{start:{line:91,column:18},end:{line:91,column:25}},{start:{line:91,column:29},end:{line:91,column:31}}],line:91},"12":{loc:{start:{line:92,column:8},end:{line:95,column:9}},type:"if",locations:[{start:{line:92,column:8},end:{line:95,column:9}},{start:{line:92,column:8},end:{line:95,column:9}}],line:92},"13":{loc:{start:{line:92,column:12},end:{line:93,column:64}},type:"binary-expr",locations:[{start:{line:92,column:12},end:{line:92,column:36}},{start:{line:92,column:40},end:{line:92,column:64}},{start:{line:92,column:68},end:{line:92,column:94}},{start:{line:93,column:12},end:{line:93,column:35}},{start:{line:93,column:39},end:{line:93,column:64}}],line:92},"14":{loc:{start:{line:104,column:8},end:{line:106,column:9}},type:"if",locations:[{start:{line:104,column:8},end:{line:106,column:9}},{start:{line:104,column:8},end:{line:106,column:9}}],line:104},"15":{loc:{start:{line:114,column:8},end:{line:116,column:9}},type:"if",locations:[{start:{line:114,column:8},end:{line:116,column:9}},{start:{line:114,column:8},end:{line:116,column:9}}],line:114},"16":{loc:{start:{line:152,column:8},end:{line:158,column:9}},type:"if",locations:[{start:{line:152,column:8},end:{line:158,column:9}},{start:{line:152,column:8},end:{line:158,column:9}}],line:152},"17":{loc:{start:{line:152,column:12},end:{line:152,column:50}},type:"binary-expr",locations:[{start:{line:152,column:12},end:{line:152,column:28}},{start:{line:152,column:32},end:{line:152,column:50}}],line:152},"18":{loc:{start:{line:162,column:12},end:{line:164,column:13}},type:"if",locations:[{start:{line:162,column:12},end:{line:164,column:13}},{start:{line:162,column:12},end:{line:164,column:13}}],line:162},"19":{loc:{start:{line:165,column:12},end:{line:185,column:13}},type:"if",locations:[{start:{line:165,column:12},end:{line:185,column:13}},{start:{line:165,column:12},end:{line:185,column:13}}],line:165},"20":{loc:{start:{line:166,column:34},end:{line:166,column:63}},type:"cond-expr",locations:[{start:{line:166,column:44},end:{line:166,column:56}},{start:{line:166,column:59},end:{line:166,column:63}}],line:166},"21":{loc:{start:{line:168,column:17},end:{line:185,column:13}},type:"if",locations:[{start:{line:168,column:17},end:{line:185,column:13}},{start:{line:168,column:17},end:{line:185,column:13}}],line:168},"22":{loc:{start:{line:171,column:17},end:{line:185,column:13}},type:"if",locations:[{start:{line:171,column:17},end:{line:185,column:13}},{start:{line:171,column:17},end:{line:185,column:13}}],line:171},"23":{loc:{start:{line:172,column:16},end:{line:177,column:17}},type:"if",locations:[{start:{line:172,column:16},end:{line:177,column:17}},{start:{line:172,column:16},end:{line:177,column:17}}],line:172},"24":{loc:{start:{line:176,column:38},end:{line:176,column:120}},type:"cond-expr",locations:[{start:{line:176,column:56},end:{line:176,column:101}},{start:{line:176,column:104},end:{line:176,column:120}}],line:176},"25":{loc:{start:{line:179,column:17},end:{line:185,column:13}},type:"if",locations:[{start:{line:179,column:17},end:{line:185,column:13}},{start:{line:179,column:17},end:{line:185,column:13}}],line:179},"26":{loc:{start:{line:182,column:16},end:{line:184,column:17}},type:"if",locations:[{start:{line:182,column:16},end:{line:184,column:17}},{start:{line:182,column:16},end:{line:184,column:17}}],line:182},"27":{loc:{start:{line:182,column:20},end:{line:182,column:74}},type:"binary-expr",locations:[{start:{line:182,column:20},end:{line:182,column:32}},{start:{line:182,column:36},end:{line:182,column:52}},{start:{line:182,column:56},end:{line:182,column:74}}],line:182},"28":{loc:{start:{line:187,column:8},end:{line:212,column:9}},type:"if",locations:[{start:{line:187,column:8},end:{line:212,column:9}},{start:{line:187,column:8},end:{line:212,column:9}}],line:187},"29":{loc:{start:{line:188,column:26},end:{line:188,column:53}},type:"binary-expr",locations:[{start:{line:188,column:26},end:{line:188,column:47}},{start:{line:188,column:51},end:{line:188,column:53}}],line:188},"30":{loc:{start:{line:191,column:16},end:{line:193,column:17}},type:"if",locations:[{start:{line:191,column:16},end:{line:193,column:17}},{start:{line:191,column:16},end:{line:193,column:17}}],line:191},"31":{loc:{start:{line:191,column:20},end:{line:191,column:71}},type:"binary-expr",locations:[{start:{line:191,column:20},end:{line:191,column:49}},{start:{line:191,column:53},end:{line:191,column:71}}],line:191},"32":{loc:{start:{line:194,column:16},end:{line:210,column:17}},type:"switch",locations:[{start:{line:195,column:20},end:{line:195,column:33}},{start:{line:196,column:20},end:{line:200,column:30}},{start:{line:201,column:20},end:{line:205,column:30}},{start:{line:206,column:20},end:{line:209,column:25}}],line:194},"33":{loc:{start:{line:197,column:24},end:{line:199,column:25}},type:"if",locations:[{start:{line:197,column:24},end:{line:199,column:25}},{start:{line:197,column:24},end:{line:199,column:25}}],line:197},"34":{loc:{start:{line:202,column:24},end:{line:204,column:25}},type:"if",locations:[{start:{line:202,column:24},end:{line:204,column:25}},{start:{line:202,column:24},end:{line:204,column:25}}],line:202},"35":{loc:{start:{line:207,column:24},end:{line:209,column:25}},type:"if",locations:[{start:{line:207,column:24},end:{line:209,column:25}},{start:{line:207,column:24},end:{line:209,column:25}}],line:207},"36":{loc:{start:{line:218,column:12},end:{line:225,column:13}},type:"if",locations:[{start:{line:218,column:12},end:{line:225,column:13}},{start:{line:218,column:12},end:{line:225,column:13}}],line:218},"37":{loc:{start:{line:218,column:16},end:{line:218,column:97}},type:"binary-expr",locations:[{start:{line:218,column:16},end:{line:218,column:50}},{start:{line:218,column:55},end:{line:218,column:96}}],line:218},"38":{loc:{start:{line:219,column:16},end:{line:224,column:17}},type:"if",locations:[{start:{line:219,column:16},end:{line:224,column:17}},{start:{line:219,column:16},end:{line:224,column:17}}],line:219},"39":{loc:{start:{line:232,column:12},end:{line:236,column:13}},type:"if",locations:[{start:{line:232,column:12},end:{line:236,column:13}},{start:{line:232,column:12},end:{line:236,column:13}}],line:232},"40":{loc:{start:{line:232,column:16},end:{line:232,column:111}},type:"binary-expr",locations:[{start:{line:232,column:16},end:{line:232,column:60}},{start:{line:232,column:64},end:{line:232,column:111}}],line:232},"41":{loc:{start:{line:233,column:16},end:{line:235,column:17}},type:"if",locations:[{start:{line:233,column:16},end:{line:235,column:17}},{start:{line:233,column:16},end:{line:235,column:17}}],line:233},"42":{loc:{start:{line:233,column:20},end:{line:233,column:107}},type:"binary-expr",locations:[{start:{line:233,column:20},end:{line:233,column:70}},{start:{line:233,column:74},end:{line:233,column:107}}],line:233},"43":{loc:{start:{line:238,column:15},end:{line:238,column:61}},type:"cond-expr",locations:[{start:{line:238,column:35},end:{line:238,column:54}},{start:{line:238,column:57},end:{line:238,column:61}}],line:238}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":0,"95":0,"96":0,"97":0,"98":0,"99":0,"100":0,"101":0,"102":0,"103":0,"104":0,"105":0,"106":0,"107":0,"108":0,"109":0,"110":0,"111":0,"112":0,"113":0,"114":0,"115":0,"116":0,"117":0,"118":0,"119":0,"120":0,"121":0,"122":0,"123":0,"124":0,"125":0,"126":0,"127":0,"128":0,"129":0,"130":0,"131":0,"132":0,"133":0,"134":0,"135":0,"136":0,"137":0,"138":0,"139":0,"140":0,"141":0,"142":0,"143":0,"144":0,"145":0,"146":0,"147":0,"148":0,"149":0,"150":0,"151":0,"152":0,"153":0,"154":0,"155":0,"156":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0,0,0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0,0,0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0],"23":[0,0],"24":[0,0],"25":[0,0],"26":[0,0],"27":[0,0,0],"28":[0,0],"29":[0,0],"30":[0,0],"31":[0,0],"32":[0,0,0,0],"33":[0,0],"34":[0,0],"35":[0,0],"36":[0,0],"37":[0,0],"38":[0,0],"39":[0,0],"40":[0,0],"41":[0,0],"42":[0,0],"43":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\entity-business.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\entity-business.ts"],names:[],mappings:"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",sourcesContent:["import AbstractBusiness from './abstract-business';\r\nimport EntityService from '../data-access/service/entity-service';\r\nimport {AttributeRelated, AttributeCollection} from '../presentation/dataclass';\r\nimport Entity from '../presentation/entity';\r\nimport {DataClass} from '../presentation/dataclass';\r\nimport DataClassBusiness from './dataclass-business';\r\nimport {QueryOption} from '../presentation/query-option';\r\nimport {MethodAdapter} from './method-adapter';\r\nimport WakandaClient from '../wakanda-client';\r\nimport Media from '../presentation/media';\r\nimport Util from './util';\r\n\r\n\r\nexport interface IEntityDBO {\r\n  __KEY?: string;\r\n  __STAMP?: number;\r\n  __deferred?: {uri: string, __KEY: string};\r\n\r\n  [key: string]: any;\r\n}\r\n\r\nclass EntityBusiness extends AbstractBusiness {\r\n\r\n  private entity: Entity;\r\n  private dataClass: DataClass;\r\n  private dataClassBusiness: DataClassBusiness;\r\n  private service: EntityService;\r\n  private _oldEntityValues: IEntityDBO;\r\n\r\n  constructor({wakJSC, entity, dataClass, dataClassBusiness}:\r\n  {wakJSC: WakandaClient, entity: Entity, dataClass: DataClass, dataClassBusiness: DataClassBusiness}) {\r\n    super({wakJSC});\r\n\r\n    this.entity = entity;\r\n    this.dataClass = dataClass;\r\n    this.dataClassBusiness = dataClassBusiness;\r\n    this.service = new EntityService({\r\n      wakJSC,\r\n      entity,\r\n      dataClassBusiness\r\n    });\r\n  }\r\n\r\n  public _decorateEntity() {\r\n    this.entity.save        = this.save.bind(this);\r\n    this.entity.delete      = this.delete.bind(this);\r\n    this.entity.fetch       = this.fetch.bind(this);\r\n    this.entity.recompute   = this.recompute.bind(this);\r\n\r\n    this._addUserDefinedMethods();\r\n  }\r\n\r\n  public _flashEntityValues(): void {\r\n    let data: IEntityDBO = {};\r\n    let entity = this.entity;\r\n\r\n    for (let attr of this.dataClass.attributes) {\r\n      let objAttr = entity[attr.name];\r\n\r\n      if (attr instanceof AttributeCollection) {\r\n        continue;\r\n      }\r\n\r\n      if (attr instanceof AttributeRelated) {\r\n        data[attr.name] = objAttr ? objAttr._key : null;\r\n      } else {\r\n        switch (attr.type) {\r\n          case 'image':\r\n          case 'blob':\r\n            data[attr.name] = {\xA0uri: objAttr.uri };\r\n            break;\r\n          case 'object':\r\n            data[attr.name] = JSON.stringify(objAttr);\r\n            break;\r\n          case 'date':\r\n            if (!objAttr) {\r\n              data[attr.name] = null;\r\n            } else {\r\n              data[attr.name] = attr.simpleDate ? Util.wakToStringSimpleDate(objAttr) : objAttr.toJSON();\r\n            }\r\n            break;\r\n          default:\r\n            data[attr.name] = objAttr;\r\n        }\r\n      }\r\n    }\r\n\r\n    this._oldEntityValues = data;\r\n  }\r\n\r\n  private _addUserDefinedMethods() {\r\n    let self = this;\r\n    this.dataClassBusiness.methods.entity.forEach(method => {\r\n      //Voluntary don't use fat arrow notation to use arguments object without a bug\r\n      this.entity[method] = function() {\r\n        let params = Array.from(arguments);\r\n        return self.callMethod(method, params);\r\n      };\r\n    });\r\n  }\r\n\r\n  public fetch(options?: QueryOption): Promise<Entity> {\r\n    let opt = options || {};\r\n\r\n    if (opt.filter !== undefined || opt.params !== undefined || opt.pageSize !== undefined ||\r\n      opt.start !== undefined || opt.orderBy !== undefined) {\r\n      throw new Error('Entity.fetch: options filter, params, pageSize, start and orderBy are not allowed');\r\n    }\r\n\r\n    return this.dataClassBusiness.find(this.entity._key, options).then(fresherEntity => {\r\n      this._refreshEntity({fresherEntity});\r\n      this._flashEntityValues();\r\n      return this.entity;\r\n    });\r\n  }\r\n\r\n  public callMethod(methodName: string, parameters: any[]): Promise<any> {\r\n    if (!this.entity._key) {\r\n      throw new Error('Entity.' + methodName + ': can not be called on an unsaved entity');\r\n    }\r\n\r\n    return this.service.callMethod(methodName, parameters)\r\n    .then(obj => {\r\n\r\n      return MethodAdapter.transform(obj, this.dataClassBusiness._dataClassBusinessMap);\r\n    });\r\n  }\r\n\r\n  public delete(): Promise<void> {\r\n    if (!this.entity._key) {\r\n      throw new Error('Entity.delete: can not delete unsaved entity');\r\n    }\r\n\r\n    return this.service.delete().then(() => {\r\n      this.entity = null;\r\n    });\r\n  }\r\n\r\n  public save(): Promise<Entity> {\r\n    let data = this.prepareDataForSave();\r\n\r\n    //If first-level related entities were already expanded, we will save the\r\n    //entity and ask the server to expand theses attributes on its response\r\n    //So, the user keeps its entities expanded\r\n    let expand = this._getExpandString();\r\n\r\n    return this.service.save(data, expand).then(entityDbo => {\r\n      let fresherEntity = this.dataClassBusiness._presentationEntityFromDbo({\r\n        dbo: entityDbo\r\n      });\r\n\r\n      this._refreshEntity({fresherEntity});\r\n      this._flashEntityValues();\r\n      return this.entity;\r\n    });\r\n  }\r\n\r\n  public recompute(): Promise<Entity> {\r\n    let data = this.prepareDataForSave();\r\n\r\n    return this.service.recompute(data)\r\n      .then(dbo => {\r\n        let fresherEntity = this.dataClassBusiness._presentationEntityFromDbo({\r\n          dbo\r\n        });\r\n\r\n        this._refreshEntity({fresherEntity});\r\n        return this.entity;\r\n      });\r\n  }\r\n\r\n  private prepareDataForSave(): IEntityDBO {\r\n    let data: IEntityDBO = {};\r\n    let entityIsNew = false;\r\n\r\n    if (this.entity._key && this.entity._stamp) {\r\n      data.__KEY   = this.entity._key;\r\n      data.__STAMP = this.entity._stamp;\r\n    }\r\n    else {\r\n      entityIsNew = true;\r\n    }\r\n\r\n    for (let attr of this.dataClass.attributes) {\r\n      let objAttr = this.entity[attr.name];\r\n\r\n      if (objAttr === undefined) {\r\n        objAttr = null;\r\n      }\r\n\r\n      if (attr instanceof AttributeRelated) {\r\n        data[attr.name] = objAttr ? objAttr._key : null;\r\n      }\r\n      else if (attr.readOnly) {\r\n        continue;\r\n      }\r\n      else if (attr.type === 'date') {\r\n        if (! objAttr) {\r\n          data[attr.name] = objAttr;\r\n        } else {\r\n          data[attr.name] = attr.simpleDate ? Util.wakToStringSimpleDate(objAttr) : objAttr.toJSON();\r\n        }\r\n      }\r\n      else if (!(attr instanceof AttributeCollection)) {\r\n        //Don't send null value for a newly created attribute (to don't override value eventually set on init event)\r\n        //except for ID (which is null), because if an empty object is send, save is ignored\r\n        if (!entityIsNew || objAttr !== null || attr.name === 'ID') {\r\n          data[attr.name] = objAttr;\r\n        }\r\n      }\r\n    }\r\n\r\n    if (!entityIsNew) {\r\n      let oldData = this._oldEntityValues || {};\r\n      for (let attr of this.dataClass.attributes) {\r\n        if (data[attr.name] === undefined || attr.name === 'ID') {\r\n          continue;\r\n        }\r\n\r\n        switch (attr.type) {\r\n          case 'image':\r\n          case 'blob':\r\n            if (data[attr.name].uri === oldData[attr.name].uri) {\r\n              delete data[attr.name];\r\n            }\r\n            break;\r\n          case 'object':\r\n            if (JSON.stringify(data[attr.name]) === oldData[attr.name]) {\r\n              delete data[attr.name];\r\n            }\r\n            break;\r\n          default:\r\n            if (data[attr.name] === oldData[attr.name]) {\r\n              delete data[attr.name];\r\n            }\r\n        }\r\n      }\r\n    }\r\n\r\n    return data;\r\n  }\r\n\r\n  private _refreshEntity({fresherEntity}: {fresherEntity: Entity}) {\r\n    for (let prop in fresherEntity) {\r\n      if (fresherEntity.hasOwnProperty(prop) && (typeof fresherEntity[prop] !== 'function')) {\r\n        if (fresherEntity[prop] instanceof Media) {\r\n          this.entity[prop].uri = fresherEntity[prop].uri;\r\n        } else {\r\n          this.entity[prop] = fresherEntity[prop];\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  private _getExpandString(): string {\r\n    let expand = '';\r\n    for (let attr of this.dataClass.attributes) {\r\n      if (attr instanceof AttributeRelated || attr instanceof AttributeCollection) {\r\n        if (this.entity[attr.name] instanceof Entity && !this.entity[attr.name]._deferred) {\r\n          expand += attr.name + ',';\r\n        }\r\n      }\r\n    }\r\n\r\n    return expand.length > 0 ? expand.slice(0, -1) : null;\r\n  }\r\n}\r\n\r\nexport default EntityBusiness;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_2lsa6sconw.s[0]++,(cov_2lsa6sconw.b[0][0]++,this)&&(cov_2lsa6sconw.b[0][1]++,this.__extends)||(cov_2lsa6sconw.b[0][2]++,function(){cov_2lsa6sconw.f[0]++;var extendStatics=(cov_2lsa6sconw.s[1]++,(cov_2lsa6sconw.b[1][0]++,Object.setPrototypeOf)||(cov_2lsa6sconw.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_2lsa6sconw.b[1][2]++,function(d,b){cov_2lsa6sconw.f[1]++;cov_2lsa6sconw.s[2]++;d.__proto__=b;})||(cov_2lsa6sconw.b[1][3]++,function(d,b){cov_2lsa6sconw.f[2]++;cov_2lsa6sconw.s[3]++;for(var p in b){cov_2lsa6sconw.s[4]++;if(b.hasOwnProperty(p)){cov_2lsa6sconw.b[2][0]++;cov_2lsa6sconw.s[5]++;d[p]=b[p];}else{cov_2lsa6sconw.b[2][1]++;}}}));cov_2lsa6sconw.s[6]++;return function(d,b){cov_2lsa6sconw.f[3]++;cov_2lsa6sconw.s[7]++;extendStatics(d,b);function __(){cov_2lsa6sconw.f[4]++;cov_2lsa6sconw.s[8]++;this.constructor=d;}cov_2lsa6sconw.s[9]++;d.prototype=b===null?(cov_2lsa6sconw.b[3][0]++,Object.create(b)):(cov_2lsa6sconw.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_2lsa6sconw.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_business_1=(cov_2lsa6sconw.s[11]++,__webpack_require__(13));var entity_service_1=(cov_2lsa6sconw.s[12]++,__webpack_require__(128));var dataclass_1=(cov_2lsa6sconw.s[13]++,__webpack_require__(36));var entity_1=(cov_2lsa6sconw.s[14]++,__webpack_require__(38));var method_adapter_1=(cov_2lsa6sconw.s[15]++,__webpack_require__(39));var media_1=(cov_2lsa6sconw.s[16]++,__webpack_require__(68));var util_1=(cov_2lsa6sconw.s[17]++,__webpack_require__(69));var EntityBusiness=(/** @class */cov_2lsa6sconw.s[18]++,function(_super){cov_2lsa6sconw.f[5]++;cov_2lsa6sconw.s[19]++;__extends(EntityBusiness,_super);function EntityBusiness(_a){cov_2lsa6sconw.f[6]++;var wakJSC=(cov_2lsa6sconw.s[20]++,_a.wakJSC),entity=(cov_2lsa6sconw.s[21]++,_a.entity),dataClass=(cov_2lsa6sconw.s[22]++,_a.dataClass),dataClassBusiness=(cov_2lsa6sconw.s[23]++,_a.dataClassBusiness);var _this=(cov_2lsa6sconw.s[24]++,(cov_2lsa6sconw.b[4][0]++,_super.call(this,{wakJSC:wakJSC}))||(cov_2lsa6sconw.b[4][1]++,this));cov_2lsa6sconw.s[25]++;_this.entity=entity;cov_2lsa6sconw.s[26]++;_this.dataClass=dataClass;cov_2lsa6sconw.s[27]++;_this.dataClassBusiness=dataClassBusiness;cov_2lsa6sconw.s[28]++;_this.service=new entity_service_1.default({wakJSC:wakJSC,entity:entity,dataClassBusiness:dataClassBusiness});cov_2lsa6sconw.s[29]++;return _this;}cov_2lsa6sconw.s[30]++;EntityBusiness.prototype._decorateEntity=function(){cov_2lsa6sconw.f[7]++;cov_2lsa6sconw.s[31]++;this.entity.save=this.save.bind(this);cov_2lsa6sconw.s[32]++;this.entity.delete=this.delete.bind(this);cov_2lsa6sconw.s[33]++;this.entity.fetch=this.fetch.bind(this);cov_2lsa6sconw.s[34]++;this.entity.recompute=this.recompute.bind(this);cov_2lsa6sconw.s[35]++;this._addUserDefinedMethods();};cov_2lsa6sconw.s[36]++;EntityBusiness.prototype._flashEntityValues=function(){cov_2lsa6sconw.f[8]++;var data=(cov_2lsa6sconw.s[37]++,{});var entity=(cov_2lsa6sconw.s[38]++,this.entity);cov_2lsa6sconw.s[39]++;for(var _i=0,_a=this.dataClass.attributes;_i<_a.length;_i++){var attr=(cov_2lsa6sconw.s[40]++,_a[_i]);var objAttr=(cov_2lsa6sconw.s[41]++,entity[attr.name]);cov_2lsa6sconw.s[42]++;if(attr instanceof dataclass_1.AttributeCollection){cov_2lsa6sconw.b[5][0]++;cov_2lsa6sconw.s[43]++;continue;}else{cov_2lsa6sconw.b[5][1]++;}cov_2lsa6sconw.s[44]++;if(attr instanceof dataclass_1.AttributeRelated){cov_2lsa6sconw.b[6][0]++;cov_2lsa6sconw.s[45]++;data[attr.name]=objAttr?(cov_2lsa6sconw.b[7][0]++,objAttr._key):(cov_2lsa6sconw.b[7][1]++,null);}else{cov_2lsa6sconw.b[6][1]++;cov_2lsa6sconw.s[46]++;switch(attr.type){case'image':cov_2lsa6sconw.b[8][0]++;case'blob':cov_2lsa6sconw.b[8][1]++;cov_2lsa6sconw.s[47]++;data[attr.name]={uri:objAttr.uri};cov_2lsa6sconw.s[48]++;break;case'object':cov_2lsa6sconw.b[8][2]++;cov_2lsa6sconw.s[49]++;data[attr.name]=JSON.stringify(objAttr);cov_2lsa6sconw.s[50]++;break;case'date':cov_2lsa6sconw.b[8][3]++;cov_2lsa6sconw.s[51]++;if(!objAttr){cov_2lsa6sconw.b[9][0]++;cov_2lsa6sconw.s[52]++;data[attr.name]=null;}else{cov_2lsa6sconw.b[9][1]++;cov_2lsa6sconw.s[53]++;data[attr.name]=attr.simpleDate?(cov_2lsa6sconw.b[10][0]++,util_1.default.wakToStringSimpleDate(objAttr)):(cov_2lsa6sconw.b[10][1]++,objAttr.toJSON());}cov_2lsa6sconw.s[54]++;break;default:cov_2lsa6sconw.b[8][4]++;cov_2lsa6sconw.s[55]++;data[attr.name]=objAttr;}}}cov_2lsa6sconw.s[56]++;this._oldEntityValues=data;};cov_2lsa6sconw.s[57]++;EntityBusiness.prototype._addUserDefinedMethods=function(){cov_2lsa6sconw.f[9]++;var _this=(cov_2lsa6sconw.s[58]++,this);var self=(cov_2lsa6sconw.s[59]++,this);cov_2lsa6sconw.s[60]++;this.dataClassBusiness.methods.entity.forEach(function(method){cov_2lsa6sconw.f[10]++;cov_2lsa6sconw.s[61]++;//Voluntary don't use fat arrow notation to use arguments object without a bug
_this.entity[method]=function(){cov_2lsa6sconw.f[11]++;var params=(cov_2lsa6sconw.s[62]++,Array.from(arguments));cov_2lsa6sconw.s[63]++;return self.callMethod(method,params);};});};cov_2lsa6sconw.s[64]++;EntityBusiness.prototype.fetch=function(options){cov_2lsa6sconw.f[12]++;var _this=(cov_2lsa6sconw.s[65]++,this);var opt=(cov_2lsa6sconw.s[66]++,(cov_2lsa6sconw.b[11][0]++,options)||(cov_2lsa6sconw.b[11][1]++,{}));cov_2lsa6sconw.s[67]++;if((cov_2lsa6sconw.b[13][0]++,opt.filter!==undefined)||(cov_2lsa6sconw.b[13][1]++,opt.params!==undefined)||(cov_2lsa6sconw.b[13][2]++,opt.pageSize!==undefined)||(cov_2lsa6sconw.b[13][3]++,opt.start!==undefined)||(cov_2lsa6sconw.b[13][4]++,opt.orderBy!==undefined)){cov_2lsa6sconw.b[12][0]++;cov_2lsa6sconw.s[68]++;throw new Error('Entity.fetch: options filter, params, pageSize, start and orderBy are not allowed');}else{cov_2lsa6sconw.b[12][1]++;}cov_2lsa6sconw.s[69]++;return this.dataClassBusiness.find(this.entity._key,options).then(function(fresherEntity){cov_2lsa6sconw.f[13]++;cov_2lsa6sconw.s[70]++;_this._refreshEntity({fresherEntity:fresherEntity});cov_2lsa6sconw.s[71]++;_this._flashEntityValues();cov_2lsa6sconw.s[72]++;return _this.entity;});};cov_2lsa6sconw.s[73]++;EntityBusiness.prototype.callMethod=function(methodName,parameters){cov_2lsa6sconw.f[14]++;var _this=(cov_2lsa6sconw.s[74]++,this);cov_2lsa6sconw.s[75]++;if(!this.entity._key){cov_2lsa6sconw.b[14][0]++;cov_2lsa6sconw.s[76]++;throw new Error('Entity.'+methodName+': can not be called on an unsaved entity');}else{cov_2lsa6sconw.b[14][1]++;}cov_2lsa6sconw.s[77]++;return this.service.callMethod(methodName,parameters).then(function(obj){cov_2lsa6sconw.f[15]++;cov_2lsa6sconw.s[78]++;return method_adapter_1.MethodAdapter.transform(obj,_this.dataClassBusiness._dataClassBusinessMap);});};cov_2lsa6sconw.s[79]++;EntityBusiness.prototype.delete=function(){cov_2lsa6sconw.f[16]++;var _this=(cov_2lsa6sconw.s[80]++,this);cov_2lsa6sconw.s[81]++;if(!this.entity._key){cov_2lsa6sconw.b[15][0]++;cov_2lsa6sconw.s[82]++;throw new Error('Entity.delete: can not delete unsaved entity');}else{cov_2lsa6sconw.b[15][1]++;}cov_2lsa6sconw.s[83]++;return this.service.delete().then(function(){cov_2lsa6sconw.f[17]++;cov_2lsa6sconw.s[84]++;_this.entity=null;});};cov_2lsa6sconw.s[85]++;EntityBusiness.prototype.save=function(){cov_2lsa6sconw.f[18]++;var _this=(cov_2lsa6sconw.s[86]++,this);var data=(cov_2lsa6sconw.s[87]++,this.prepareDataForSave());//If first-level related entities were already expanded, we will save the
//entity and ask the server to expand theses attributes on its response
//So, the user keeps its entities expanded
var expand=(cov_2lsa6sconw.s[88]++,this._getExpandString());cov_2lsa6sconw.s[89]++;return this.service.save(data,expand).then(function(entityDbo){cov_2lsa6sconw.f[19]++;var fresherEntity=(cov_2lsa6sconw.s[90]++,_this.dataClassBusiness._presentationEntityFromDbo({dbo:entityDbo}));cov_2lsa6sconw.s[91]++;_this._refreshEntity({fresherEntity:fresherEntity});cov_2lsa6sconw.s[92]++;_this._flashEntityValues();cov_2lsa6sconw.s[93]++;return _this.entity;});};cov_2lsa6sconw.s[94]++;EntityBusiness.prototype.recompute=function(){cov_2lsa6sconw.f[20]++;var _this=(cov_2lsa6sconw.s[95]++,this);var data=(cov_2lsa6sconw.s[96]++,this.prepareDataForSave());cov_2lsa6sconw.s[97]++;return this.service.recompute(data).then(function(dbo){cov_2lsa6sconw.f[21]++;var fresherEntity=(cov_2lsa6sconw.s[98]++,_this.dataClassBusiness._presentationEntityFromDbo({dbo:dbo}));cov_2lsa6sconw.s[99]++;_this._refreshEntity({fresherEntity:fresherEntity});cov_2lsa6sconw.s[100]++;return _this.entity;});};cov_2lsa6sconw.s[101]++;EntityBusiness.prototype.prepareDataForSave=function(){cov_2lsa6sconw.f[22]++;var data=(cov_2lsa6sconw.s[102]++,{});var entityIsNew=(cov_2lsa6sconw.s[103]++,false);cov_2lsa6sconw.s[104]++;if((cov_2lsa6sconw.b[17][0]++,this.entity._key)&&(cov_2lsa6sconw.b[17][1]++,this.entity._stamp)){cov_2lsa6sconw.b[16][0]++;cov_2lsa6sconw.s[105]++;data.__KEY=this.entity._key;cov_2lsa6sconw.s[106]++;data.__STAMP=this.entity._stamp;}else{cov_2lsa6sconw.b[16][1]++;cov_2lsa6sconw.s[107]++;entityIsNew=true;}cov_2lsa6sconw.s[108]++;for(var _i=0,_a=this.dataClass.attributes;_i<_a.length;_i++){var attr=(cov_2lsa6sconw.s[109]++,_a[_i]);var objAttr=(cov_2lsa6sconw.s[110]++,this.entity[attr.name]);cov_2lsa6sconw.s[111]++;if(objAttr===undefined){cov_2lsa6sconw.b[18][0]++;cov_2lsa6sconw.s[112]++;objAttr=null;}else{cov_2lsa6sconw.b[18][1]++;}cov_2lsa6sconw.s[113]++;if(attr instanceof dataclass_1.AttributeRelated){cov_2lsa6sconw.b[19][0]++;cov_2lsa6sconw.s[114]++;data[attr.name]=objAttr?(cov_2lsa6sconw.b[20][0]++,objAttr._key):(cov_2lsa6sconw.b[20][1]++,null);}else{cov_2lsa6sconw.b[19][1]++;cov_2lsa6sconw.s[115]++;if(attr.readOnly){cov_2lsa6sconw.b[21][0]++;cov_2lsa6sconw.s[116]++;continue;}else{cov_2lsa6sconw.b[21][1]++;cov_2lsa6sconw.s[117]++;if(attr.type==='date'){cov_2lsa6sconw.b[22][0]++;cov_2lsa6sconw.s[118]++;if(!objAttr){cov_2lsa6sconw.b[23][0]++;cov_2lsa6sconw.s[119]++;data[attr.name]=objAttr;}else{cov_2lsa6sconw.b[23][1]++;cov_2lsa6sconw.s[120]++;data[attr.name]=attr.simpleDate?(cov_2lsa6sconw.b[24][0]++,util_1.default.wakToStringSimpleDate(objAttr)):(cov_2lsa6sconw.b[24][1]++,objAttr.toJSON());}}else{cov_2lsa6sconw.b[22][1]++;cov_2lsa6sconw.s[121]++;if(!(attr instanceof dataclass_1.AttributeCollection)){cov_2lsa6sconw.b[25][0]++;cov_2lsa6sconw.s[122]++;//Don't send null value for a newly created attribute (to don't override value eventually set on init event)
//except for ID (which is null), because if an empty object is send, save is ignored
if((cov_2lsa6sconw.b[27][0]++,!entityIsNew)||(cov_2lsa6sconw.b[27][1]++,objAttr!==null)||(cov_2lsa6sconw.b[27][2]++,attr.name==='ID')){cov_2lsa6sconw.b[26][0]++;cov_2lsa6sconw.s[123]++;data[attr.name]=objAttr;}else{cov_2lsa6sconw.b[26][1]++;}}else{cov_2lsa6sconw.b[25][1]++;}}}}}cov_2lsa6sconw.s[124]++;if(!entityIsNew){cov_2lsa6sconw.b[28][0]++;var oldData=(cov_2lsa6sconw.s[125]++,(cov_2lsa6sconw.b[29][0]++,this._oldEntityValues)||(cov_2lsa6sconw.b[29][1]++,{}));cov_2lsa6sconw.s[126]++;for(var _b=0,_c=this.dataClass.attributes;_b<_c.length;_b++){var attr=(cov_2lsa6sconw.s[127]++,_c[_b]);cov_2lsa6sconw.s[128]++;if((cov_2lsa6sconw.b[31][0]++,data[attr.name]===undefined)||(cov_2lsa6sconw.b[31][1]++,attr.name==='ID')){cov_2lsa6sconw.b[30][0]++;cov_2lsa6sconw.s[129]++;continue;}else{cov_2lsa6sconw.b[30][1]++;}cov_2lsa6sconw.s[130]++;switch(attr.type){case'image':cov_2lsa6sconw.b[32][0]++;case'blob':cov_2lsa6sconw.b[32][1]++;cov_2lsa6sconw.s[131]++;if(data[attr.name].uri===oldData[attr.name].uri){cov_2lsa6sconw.b[33][0]++;cov_2lsa6sconw.s[132]++;delete data[attr.name];}else{cov_2lsa6sconw.b[33][1]++;}cov_2lsa6sconw.s[133]++;break;case'object':cov_2lsa6sconw.b[32][2]++;cov_2lsa6sconw.s[134]++;if(JSON.stringify(data[attr.name])===oldData[attr.name]){cov_2lsa6sconw.b[34][0]++;cov_2lsa6sconw.s[135]++;delete data[attr.name];}else{cov_2lsa6sconw.b[34][1]++;}cov_2lsa6sconw.s[136]++;break;default:cov_2lsa6sconw.b[32][3]++;cov_2lsa6sconw.s[137]++;if(data[attr.name]===oldData[attr.name]){cov_2lsa6sconw.b[35][0]++;cov_2lsa6sconw.s[138]++;delete data[attr.name];}else{cov_2lsa6sconw.b[35][1]++;}}}}else{cov_2lsa6sconw.b[28][1]++;}cov_2lsa6sconw.s[139]++;return data;};cov_2lsa6sconw.s[140]++;EntityBusiness.prototype._refreshEntity=function(_a){cov_2lsa6sconw.f[23]++;var fresherEntity=(cov_2lsa6sconw.s[141]++,_a.fresherEntity);cov_2lsa6sconw.s[142]++;for(var prop in fresherEntity){cov_2lsa6sconw.s[143]++;if((cov_2lsa6sconw.b[37][0]++,fresherEntity.hasOwnProperty(prop))&&(cov_2lsa6sconw.b[37][1]++,typeof fresherEntity[prop]!=='function')){cov_2lsa6sconw.b[36][0]++;cov_2lsa6sconw.s[144]++;if(fresherEntity[prop]instanceof media_1.default){cov_2lsa6sconw.b[38][0]++;cov_2lsa6sconw.s[145]++;this.entity[prop].uri=fresherEntity[prop].uri;}else{cov_2lsa6sconw.b[38][1]++;cov_2lsa6sconw.s[146]++;this.entity[prop]=fresherEntity[prop];}}else{cov_2lsa6sconw.b[36][1]++;}}};cov_2lsa6sconw.s[147]++;EntityBusiness.prototype._getExpandString=function(){cov_2lsa6sconw.f[24]++;var expand=(cov_2lsa6sconw.s[148]++,'');cov_2lsa6sconw.s[149]++;for(var _i=0,_a=this.dataClass.attributes;_i<_a.length;_i++){var attr=(cov_2lsa6sconw.s[150]++,_a[_i]);cov_2lsa6sconw.s[151]++;if((cov_2lsa6sconw.b[40][0]++,attr instanceof dataclass_1.AttributeRelated)||(cov_2lsa6sconw.b[40][1]++,attr instanceof dataclass_1.AttributeCollection)){cov_2lsa6sconw.b[39][0]++;cov_2lsa6sconw.s[152]++;if((cov_2lsa6sconw.b[42][0]++,this.entity[attr.name]instanceof entity_1.default)&&(cov_2lsa6sconw.b[42][1]++,!this.entity[attr.name]._deferred)){cov_2lsa6sconw.b[41][0]++;cov_2lsa6sconw.s[153]++;expand+=attr.name+',';}else{cov_2lsa6sconw.b[41][1]++;}}else{cov_2lsa6sconw.b[39][1]++;}}cov_2lsa6sconw.s[154]++;return expand.length>0?(cov_2lsa6sconw.b[43][0]++,expand.slice(0,-1)):(cov_2lsa6sconw.b[43][1]++,null);};cov_2lsa6sconw.s[155]++;return EntityBusiness;}(abstract_business_1.default));cov_2lsa6sconw.s[156]++;exports.default=EntityBusiness;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_3jl0rhuu9=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\entity-service.ts",hash="53eaf8db688ebc783336d40ac4c393c88ff525f7",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\entity-service.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:25},end:{line:13,column:54}},"12":{start:{line:14,column:28},end:{line:14,column:65}},"13":{start:{line:15,column:35},end:{line:56,column:29}},"14":{start:{line:16,column:4},end:{line:16,column:37}},"15":{start:{line:18,column:21},end:{line:18,column:30}},"16":{start:{line:18,column:41},end:{line:18,column:50}},"17":{start:{line:18,column:72},end:{line:18,column:92}},"18":{start:{line:19,column:20},end:{line:19,column:65}},"19":{start:{line:20,column:8},end:{line:20,column:30}},"20":{start:{line:21,column:8},end:{line:21,column:52}},"21":{start:{line:22,column:8},end:{line:22,column:21}},"22":{start:{line:24,column:4},end:{line:31,column:6}},"23":{start:{line:25,column:8},end:{line:30,column:11}},"24":{start:{line:32,column:4},end:{line:38,column:6}},"25":{start:{line:33,column:8},end:{line:37,column:11}},"26":{start:{line:39,column:4},end:{line:47,column:6}},"27":{start:{line:40,column:8},end:{line:46,column:11}},"28":{start:{line:48,column:4},end:{line:54,column:6}},"29":{start:{line:49,column:8},end:{line:53,column:11}},"30":{start:{line:55,column:4},end:{line:55,column:25}},"31":{start:{line:57,column:0},end:{line:57,column:32}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:15,column:35},end:{line:15,column:36}},loc:{start:{line:15,column:53},end:{line:56,column:1}},line:15},"6":{name:"EntityService",decl:{start:{line:17,column:13},end:{line:17,column:26}},loc:{start:{line:17,column:31},end:{line:23,column:5}},line:17},"7":{name:"(anonymous_7)",decl:{start:{line:24,column:35},end:{line:24,column:36}},loc:{start:{line:24,column:59},end:{line:31,column:5}},line:24},"8":{name:"(anonymous_8)",decl:{start:{line:32,column:40},end:{line:32,column:41}},loc:{start:{line:32,column:56},end:{line:38,column:5}},line:32},"9":{name:"(anonymous_9)",decl:{start:{line:39,column:41},end:{line:39,column:42}},loc:{start:{line:39,column:75},end:{line:47,column:5}},line:39},"10":{name:"(anonymous_10)",decl:{start:{line:48,column:37},end:{line:48,column:38}},loc:{start:{line:48,column:49},end:{line:54,column:5}},line:48}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:19,column:20},end:{line:19,column:65}},type:"binary-expr",locations:[{start:{line:19,column:20},end:{line:19,column:57}},{start:{line:19,column:61},end:{line:19,column:65}}],line:19}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\entity-service.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\entity-service.ts"],names:[],mappings:";;;;;;;;;;;;AAAA,uDAAiD;AAIjD,kEAA6D;AAG7D;IAA4B,iCAAe;IAKzC,uBAAY,EACiE;YADhE,kBAAM,EAAE,kBAAM,EAAE,wCAAiB;QAA9C,YAEE,kBAAM,EAAC,MAAM,QAAA,EAAC,CAAC,SAIhB;QAFC,KAAI,CAAC,MAAM,GAAG,MAAM,CAAC;QACrB,KAAI,CAAC,iBAAiB,GAAG,iBAAiB,CAAC;;IAC7C,CAAC;IAEM,4BAAI,GAAX,UAAY,IAAgB,EAAE,MAAc;QAC1C,MAAM,CAAC,uCAAiB,CAAC,IAAI,CAAC;YAC5B,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,OAAO,EAAE,IAAI,CAAC,iBAAiB,CAAC,OAAO;YACvC,MAAM,QAAA;YACN,IAAI,MAAA;SACL,CAAC,CAAC;IACL,CAAC;IAEM,iCAAS,GAAhB,UAAiB,IAAgB;QAChC,MAAM,CAAC,uCAAiB,CAAC,SAAS,CAAC;YAChC,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,OAAO,EAAE,IAAI,CAAC,iBAAiB,CAAC,OAAO;YACvC,IAAI,MAAA;SACL,CAAC,CAAC;IACL,CAAC;IAEM,kCAAU,GAAjB,UAAkB,UAAkB,EAAE,UAAiB;QACrD,MAAM,CAAC,uCAAiB,CAAC,UAAU,CAAC;YAClC,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,OAAO,EAAE,IAAI,CAAC,iBAAiB,CAAC,OAAO;YACvC,UAAU,YAAA;YACV,UAAU,YAAA;YACV,SAAS,EAAE,IAAI,CAAC,MAAM,CAAC,IAAI;SAC5B,CAAC,CAAC;IACL,CAAC;IAEM,8BAAM,GAAb;QACE,MAAM,CAAC,uCAAiB,CAAC,MAAM,CAAC;YAC9B,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,OAAO,EAAE,IAAI,CAAC,iBAAiB,CAAC,OAAO;YACvC,SAAS,EAAE,IAAI,CAAC,MAAM,CAAC,IAAI;SAC5B,CAAC,CAAC;IACL,CAAC;IACH,oBAAC;AAAD,CAAC,AA/CD,CAA4B,0BAAe,GA+C1C;AAED,kBAAe,aAAa,CAAC",sourcesContent:["import AbstractService from './abstract-service';\r\nimport Entity from '../../presentation/entity';\r\nimport DataClassBusiness from '../../business/dataclass-business';\r\nimport {IEntityDBO} from '../../business/entity-business';\r\nimport {EntityBaseService} from './base/entity-base-service';\r\nimport WakandaClient from '../../wakanda-client';\r\n\r\nclass EntityService extends AbstractService {\r\n\r\n  private entity: Entity;\r\n  private dataClassBusiness: DataClassBusiness;\r\n\r\n  constructor({wakJSC, entity, dataClassBusiness}:\r\n  {wakJSC: WakandaClient, entity: Entity, dataClassBusiness: DataClassBusiness}) {\r\n    super({wakJSC});\r\n\r\n    this.entity = entity;\r\n    this.dataClassBusiness = dataClassBusiness;\r\n  }\r\n\r\n  public save(data: IEntityDBO, expand: string) {\r\n    return EntityBaseService.save({\r\n      httpClient: this.httpClient,\r\n      dataURI: this.dataClassBusiness.dataURI,\r\n      expand,\r\n      data\r\n    });\r\n  }\r\n\r\n  public recompute(data: IEntityDBO) {\r\n   return EntityBaseService.recompute({\r\n      httpClient: this.httpClient,\r\n      dataURI: this.dataClassBusiness.dataURI,\r\n      data\r\n    });\r\n  }\r\n\r\n  public callMethod(methodName: string, parameters: any[]) {\r\n    return EntityBaseService.callMethod({\r\n      httpClient: this.httpClient,\r\n      dataURI: this.dataClassBusiness.dataURI,\r\n      methodName,\r\n      parameters,\r\n      entityKey: this.entity._key\r\n    });\r\n  }\r\n\r\n  public delete() {\r\n    return EntityBaseService.delete({\r\n      httpClient: this.httpClient,\r\n      dataURI: this.dataClassBusiness.dataURI,\r\n      entityKey: this.entity._key\r\n    });\r\n  }\r\n}\r\n\r\nexport default EntityService;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_3jl0rhuu9.s[0]++,(cov_3jl0rhuu9.b[0][0]++,this)&&(cov_3jl0rhuu9.b[0][1]++,this.__extends)||(cov_3jl0rhuu9.b[0][2]++,function(){cov_3jl0rhuu9.f[0]++;var extendStatics=(cov_3jl0rhuu9.s[1]++,(cov_3jl0rhuu9.b[1][0]++,Object.setPrototypeOf)||(cov_3jl0rhuu9.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_3jl0rhuu9.b[1][2]++,function(d,b){cov_3jl0rhuu9.f[1]++;cov_3jl0rhuu9.s[2]++;d.__proto__=b;})||(cov_3jl0rhuu9.b[1][3]++,function(d,b){cov_3jl0rhuu9.f[2]++;cov_3jl0rhuu9.s[3]++;for(var p in b){cov_3jl0rhuu9.s[4]++;if(b.hasOwnProperty(p)){cov_3jl0rhuu9.b[2][0]++;cov_3jl0rhuu9.s[5]++;d[p]=b[p];}else{cov_3jl0rhuu9.b[2][1]++;}}}));cov_3jl0rhuu9.s[6]++;return function(d,b){cov_3jl0rhuu9.f[3]++;cov_3jl0rhuu9.s[7]++;extendStatics(d,b);function __(){cov_3jl0rhuu9.f[4]++;cov_3jl0rhuu9.s[8]++;this.constructor=d;}cov_3jl0rhuu9.s[9]++;d.prototype=b===null?(cov_3jl0rhuu9.b[3][0]++,Object.create(b)):(cov_3jl0rhuu9.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_3jl0rhuu9.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_service_1=(cov_3jl0rhuu9.s[11]++,__webpack_require__(14));var entity_base_service_1=(cov_3jl0rhuu9.s[12]++,__webpack_require__(67));var EntityService=(/** @class */cov_3jl0rhuu9.s[13]++,function(_super){cov_3jl0rhuu9.f[5]++;cov_3jl0rhuu9.s[14]++;__extends(EntityService,_super);function EntityService(_a){cov_3jl0rhuu9.f[6]++;var wakJSC=(cov_3jl0rhuu9.s[15]++,_a.wakJSC),entity=(cov_3jl0rhuu9.s[16]++,_a.entity),dataClassBusiness=(cov_3jl0rhuu9.s[17]++,_a.dataClassBusiness);var _this=(cov_3jl0rhuu9.s[18]++,(cov_3jl0rhuu9.b[4][0]++,_super.call(this,{wakJSC:wakJSC}))||(cov_3jl0rhuu9.b[4][1]++,this));cov_3jl0rhuu9.s[19]++;_this.entity=entity;cov_3jl0rhuu9.s[20]++;_this.dataClassBusiness=dataClassBusiness;cov_3jl0rhuu9.s[21]++;return _this;}cov_3jl0rhuu9.s[22]++;EntityService.prototype.save=function(data,expand){cov_3jl0rhuu9.f[7]++;cov_3jl0rhuu9.s[23]++;return entity_base_service_1.EntityBaseService.save({httpClient:this.httpClient,dataURI:this.dataClassBusiness.dataURI,expand:expand,data:data});};cov_3jl0rhuu9.s[24]++;EntityService.prototype.recompute=function(data){cov_3jl0rhuu9.f[8]++;cov_3jl0rhuu9.s[25]++;return entity_base_service_1.EntityBaseService.recompute({httpClient:this.httpClient,dataURI:this.dataClassBusiness.dataURI,data:data});};cov_3jl0rhuu9.s[26]++;EntityService.prototype.callMethod=function(methodName,parameters){cov_3jl0rhuu9.f[9]++;cov_3jl0rhuu9.s[27]++;return entity_base_service_1.EntityBaseService.callMethod({httpClient:this.httpClient,dataURI:this.dataClassBusiness.dataURI,methodName:methodName,parameters:parameters,entityKey:this.entity._key});};cov_3jl0rhuu9.s[28]++;EntityService.prototype.delete=function(){cov_3jl0rhuu9.f[10]++;cov_3jl0rhuu9.s[29]++;return entity_base_service_1.EntityBaseService.delete({httpClient:this.httpClient,dataURI:this.dataClassBusiness.dataURI,entityKey:this.entity._key});};cov_3jl0rhuu9.s[30]++;return EntityService;}(abstract_service_1.default));cov_3jl0rhuu9.s[31]++;exports.default=EntityService;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_1f477ww17i=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\dataclass-service.ts",hash="7bf1582b7da74ebe67518f937d57c435cc72d399",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\dataclass-service.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:25},end:{line:13,column:54}},"12":{start:{line:14,column:31},end:{line:14,column:71}},"13":{start:{line:15,column:38},end:{line:47,column:29}},"14":{start:{line:16,column:4},end:{line:16,column:40}},"15":{start:{line:18,column:21},end:{line:18,column:30}},"16":{start:{line:18,column:52},end:{line:18,column:72}},"17":{start:{line:19,column:20},end:{line:19,column:65}},"18":{start:{line:20,column:8},end:{line:20,column:52}},"19":{start:{line:21,column:8},end:{line:21,column:21}},"20":{start:{line:23,column:4},end:{line:30,column:6}},"21":{start:{line:24,column:8},end:{line:29,column:11}},"22":{start:{line:31,column:4},end:{line:37,column:6}},"23":{start:{line:32,column:8},end:{line:36,column:11}},"24":{start:{line:38,column:4},end:{line:45,column:6}},"25":{start:{line:39,column:8},end:{line:44,column:11}},"26":{start:{line:46,column:4},end:{line:46,column:28}},"27":{start:{line:48,column:0},end:{line:48,column:35}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:15,column:38},end:{line:15,column:39}},loc:{start:{line:15,column:56},end:{line:47,column:1}},line:15},"6":{name:"DataClassService",decl:{start:{line:17,column:13},end:{line:17,column:29}},loc:{start:{line:17,column:34},end:{line:22,column:5}},line:17},"7":{name:"(anonymous_7)",decl:{start:{line:23,column:38},end:{line:23,column:39}},loc:{start:{line:23,column:61},end:{line:30,column:5}},line:23},"8":{name:"(anonymous_8)",decl:{start:{line:31,column:39},end:{line:31,column:40}},loc:{start:{line:31,column:58},end:{line:37,column:5}},line:31},"9":{name:"(anonymous_9)",decl:{start:{line:38,column:44},end:{line:38,column:45}},loc:{start:{line:38,column:78},end:{line:45,column:5}},line:38}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:19,column:20},end:{line:19,column:65}},type:"binary-expr",locations:[{start:{line:19,column:20},end:{line:19,column:57}},{start:{line:19,column:61},end:{line:19,column:65}}],line:19}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\dataclass-service.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\dataclass-service.ts"],names:[],mappings:";;;;;;;;;;;;AAAA,uDAAiD;AAKjD,wEAAmE;AAGnE;IAA+B,oCAAe;IAI5C,0BAAY,EAA0F;YAAzF,kBAAM,EAAE,wCAAiB;QAAtC,YACE,kBAAM,EAAC,MAAM,QAAA,EAAC,CAAC,SAGhB;QADC,KAAI,CAAC,iBAAiB,GAAG,iBAAiB,CAAC;;IAC7C,CAAC;IAEM,+BAAI,GAAX,UAAY,EAAiB,EAAE,OAAoB;QACjD,MAAM,CAAC,6CAAoB,CAAC,IAAI,CAAC;YAC/B,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,GAAG,EAAE,EAAE;YACP,OAAO,SAAA;YACP,OAAO,EAAE,IAAI,CAAC,iBAAiB,CAAC,OAAO;SACxC,CAAC,CAAC;IACL,CAAC;IAEM,gCAAK,GAAZ,UAAa,OAAoB;QAC/B,MAAM,CAAC,6CAAoB,CAAC,KAAK,CAAC;YAChC,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,OAAO,SAAA;YACP,OAAO,EAAE,IAAI,CAAC,iBAAiB,CAAC,OAAO;SACxC,CAAC,CAAC;IACL,CAAC;IAEM,qCAAU,GAAjB,UAAkB,UAAkB,EAAE,UAAiB;QACrD,MAAM,CAAC,6CAAoB,CAAC,UAAU,CAAC;YACrC,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,OAAO,EAAE,IAAI,CAAC,iBAAiB,CAAC,OAAO;YACvC,UAAU,YAAA;YACV,UAAU,YAAA;SACX,CAAC,CAAC;IACL,CAAC;IACH,uBAAC;AAAD,CAAC,AAnCD,CAA+B,0BAAe,GAmC7C;AAED,kBAAe,gBAAgB,CAAC",sourcesContent:["import AbstractService from './abstract-service';\r\nimport {QueryOption} from '../../presentation/query-option';\r\nimport DataClassBusiness from '../../business/dataclass-business';\r\nimport {IEntityDBO} from '../../business/entity-business';\r\nimport {ICollectionDBO} from '../../business/collection-business';\r\nimport {DataClassBaseService} from './base/dataclass-base-service';\r\nimport WakandaClient from '../../wakanda-client';\r\n\r\nclass DataClassService extends AbstractService {\r\n\r\n  private dataClassBusiness: DataClassBusiness;\r\n\r\n  constructor({wakJSC, dataClassBusiness}: {wakJSC: WakandaClient, dataClassBusiness: DataClassBusiness}) {\r\n    super({wakJSC});\r\n\r\n    this.dataClassBusiness = dataClassBusiness;\r\n  }\r\n\r\n  public find(id: string|number, options: QueryOption): Promise<IEntityDBO> {\r\n    return DataClassBaseService.find({\r\n      httpClient: this.httpClient,\r\n      key: id,\r\n      options,\r\n      dataURI: this.dataClassBusiness.dataURI\r\n    });\r\n  }\r\n\r\n  public query(options: QueryOption): Promise<ICollectionDBO> {\r\n    return DataClassBaseService.query({\r\n      httpClient: this.httpClient,\r\n      options,\r\n      dataURI: this.dataClassBusiness.dataURI\r\n    });\r\n  }\r\n\r\n  public callMethod(methodName: string, parameters: any[]): Promise<any> {\r\n    return DataClassBaseService.callMethod({\r\n      httpClient: this.httpClient,\r\n      dataURI: this.dataClassBusiness.dataURI,\r\n      methodName,\r\n      parameters\r\n    });\r\n  }\r\n}\r\n\r\nexport default DataClassService;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_1f477ww17i.s[0]++,(cov_1f477ww17i.b[0][0]++,this)&&(cov_1f477ww17i.b[0][1]++,this.__extends)||(cov_1f477ww17i.b[0][2]++,function(){cov_1f477ww17i.f[0]++;var extendStatics=(cov_1f477ww17i.s[1]++,(cov_1f477ww17i.b[1][0]++,Object.setPrototypeOf)||(cov_1f477ww17i.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_1f477ww17i.b[1][2]++,function(d,b){cov_1f477ww17i.f[1]++;cov_1f477ww17i.s[2]++;d.__proto__=b;})||(cov_1f477ww17i.b[1][3]++,function(d,b){cov_1f477ww17i.f[2]++;cov_1f477ww17i.s[3]++;for(var p in b){cov_1f477ww17i.s[4]++;if(b.hasOwnProperty(p)){cov_1f477ww17i.b[2][0]++;cov_1f477ww17i.s[5]++;d[p]=b[p];}else{cov_1f477ww17i.b[2][1]++;}}}));cov_1f477ww17i.s[6]++;return function(d,b){cov_1f477ww17i.f[3]++;cov_1f477ww17i.s[7]++;extendStatics(d,b);function __(){cov_1f477ww17i.f[4]++;cov_1f477ww17i.s[8]++;this.constructor=d;}cov_1f477ww17i.s[9]++;d.prototype=b===null?(cov_1f477ww17i.b[3][0]++,Object.create(b)):(cov_1f477ww17i.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_1f477ww17i.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_service_1=(cov_1f477ww17i.s[11]++,__webpack_require__(14));var dataclass_base_service_1=(cov_1f477ww17i.s[12]++,__webpack_require__(70));var DataClassService=(/** @class */cov_1f477ww17i.s[13]++,function(_super){cov_1f477ww17i.f[5]++;cov_1f477ww17i.s[14]++;__extends(DataClassService,_super);function DataClassService(_a){cov_1f477ww17i.f[6]++;var wakJSC=(cov_1f477ww17i.s[15]++,_a.wakJSC),dataClassBusiness=(cov_1f477ww17i.s[16]++,_a.dataClassBusiness);var _this=(cov_1f477ww17i.s[17]++,(cov_1f477ww17i.b[4][0]++,_super.call(this,{wakJSC:wakJSC}))||(cov_1f477ww17i.b[4][1]++,this));cov_1f477ww17i.s[18]++;_this.dataClassBusiness=dataClassBusiness;cov_1f477ww17i.s[19]++;return _this;}cov_1f477ww17i.s[20]++;DataClassService.prototype.find=function(id,options){cov_1f477ww17i.f[7]++;cov_1f477ww17i.s[21]++;return dataclass_base_service_1.DataClassBaseService.find({httpClient:this.httpClient,key:id,options:options,dataURI:this.dataClassBusiness.dataURI});};cov_1f477ww17i.s[22]++;DataClassService.prototype.query=function(options){cov_1f477ww17i.f[8]++;cov_1f477ww17i.s[23]++;return dataclass_base_service_1.DataClassBaseService.query({httpClient:this.httpClient,options:options,dataURI:this.dataClassBusiness.dataURI});};cov_1f477ww17i.s[24]++;DataClassService.prototype.callMethod=function(methodName,parameters){cov_1f477ww17i.f[9]++;cov_1f477ww17i.s[25]++;return dataclass_base_service_1.DataClassBaseService.callMethod({httpClient:this.httpClient,dataURI:this.dataClassBusiness.dataURI,methodName:methodName,parameters:parameters});};cov_1f477ww17i.s[26]++;return DataClassService;}(abstract_service_1.default));cov_1f477ww17i.s[27]++;exports.default=DataClassService;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_bmex8pdco=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\collection-business.ts",hash="8dcf5623a40bed159079d330eb3b9b372d20c9cb",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\collection-business.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:26},end:{line:13,column:56}},"12":{start:{line:14,column:27},end:{line:14,column:79}},"13":{start:{line:15,column:14},end:{line:15,column:33}},"14":{start:{line:16,column:23},end:{line:16,column:50}},"15":{start:{line:17,column:40},end:{line:146,column:30}},"16":{start:{line:18,column:4},end:{line:18,column:42}},"17":{start:{line:20,column:21},end:{line:20,column:30}},"18":{start:{line:20,column:44},end:{line:20,column:56}},"19":{start:{line:20,column:71},end:{line:20,column:84}},"20":{start:{line:20,column:106},end:{line:20,column:126}},"21":{start:{line:20,column:144},end:{line:20,column:160}},"22":{start:{line:20,column:173},end:{line:20,column:184}},"23":{start:{line:20,column:202},end:{line:20,column:218}},"24":{start:{line:21,column:20},end:{line:21,column:65}},"25":{start:{line:22,column:8},end:{line:22,column:38}},"26":{start:{line:23,column:8},end:{line:23,column:36}},"27":{start:{line:24,column:8},end:{line:24,column:52}},"28":{start:{line:25,column:8},end:{line:30,column:11}},"29":{start:{line:31,column:8},end:{line:31,column:34}},"30":{start:{line:32,column:8},end:{line:32,column:44}},"31":{start:{line:33,column:8},end:{line:33,column:21}},"32":{start:{line:35,column:4},end:{line:41,column:6}},"33":{start:{line:36,column:8},end:{line:36,column:54}},"34":{start:{line:37,column:8},end:{line:37,column:60}},"35":{start:{line:38,column:8},end:{line:38,column:60}},"36":{start:{line:39,column:8},end:{line:39,column:52}},"37":{start:{line:40,column:8},end:{line:40,column:38}},"38":{start:{line:42,column:4},end:{line:63,column:6}},"39":{start:{line:43,column:20},end:{line:43,column:24}},"40":{start:{line:44,column:18},end:{line:44,column:31}},"41":{start:{line:45,column:8},end:{line:47,column:9}},"42":{start:{line:46,column:12},end:{line:46,column:78}},"43":{start:{line:48,column:8},end:{line:50,column:9}},"44":{start:{line:49,column:12},end:{line:49,column:93}},"45":{start:{line:51,column:8},end:{line:53,column:9}},"46":{start:{line:52,column:12},end:{line:52,column:44}},"47":{start:{line:54,column:8},end:{line:54,column:37}},"48":{start:{line:55,column:8},end:{line:62,column:11}},"49":{start:{line:56,column:36},end:{line:59,column:14}},"50":{start:{line:60,column:12},end:{line:60,column:79}},"51":{start:{line:61,column:12},end:{line:61,column:36}},"52":{start:{line:64,column:4},end:{line:87,column:6}},"53":{start:{line:65,column:20},end:{line:65,column:24}},"54":{start:{line:66,column:8},end:{line:68,column:9}},"55":{start:{line:67,column:12},end:{line:67,column:91}},"56":{start:{line:69,column:22},end:{line:72,column:9}},"57":{start:{line:73,column:8},end:{line:75,column:9}},"58":{start:{line:74,column:12},end:{line:74,column:48}},"59":{start:{line:76,column:8},end:{line:86,column:11}},"60":{start:{line:78,column:12},end:{line:78,column:60}},"61":{start:{line:79,column:12},end:{line:84,column:13}},"62":{start:{line:80,column:29},end:{line:80,column:35}},"63":{start:{line:81,column:16},end:{line:83,column:20}},"64":{start:{line:85,column:12},end:{line:85,column:36}},"65":{start:{line:88,column:4},end:{line:100,column:6}},"66":{start:{line:89,column:8},end:{line:91,column:9}},"67":{start:{line:90,column:12},end:{line:90,column:99}},"68":{start:{line:92,column:22},end:{line:95,column:9}},"69":{start:{line:96,column:8},end:{line:98,column:9}},"70":{start:{line:97,column:12},end:{line:97,column:48}},"71":{start:{line:99,column:8},end:{line:99,column:35}},"72":{start:{line:101,column:4},end:{line:113,column:6}},"73":{start:{line:102,column:8},end:{line:104,column:9}},"74":{start:{line:103,column:12},end:{line:103,column:99}},"75":{start:{line:105,column:22},end:{line:108,column:9}},"76":{start:{line:109,column:8},end:{line:111,column:9}},"77":{start:{line:110,column:12},end:{line:110,column:48}},"78":{start:{line:112,column:8},end:{line:112,column:35}},"79":{start:{line:114,column:4},end:{line:124,column:6}},"80":{start:{line:115,column:20},end:{line:115,column:24}},"81":{start:{line:116,column:19},end:{line:116,column:23}},"82":{start:{line:117,column:8},end:{line:123,column:11}},"83":{start:{line:119,column:12},end:{line:122,column:14}},"84":{start:{line:120,column:29},end:{line:120,column:50}},"85":{start:{line:121,column:16},end:{line:121,column:55}},"86":{start:{line:125,column:4},end:{line:134,column:6}},"87":{start:{line:126,column:20},end:{line:126,column:24}},"88":{start:{line:127,column:8},end:{line:129,column:9}},"89":{start:{line:128,column:12},end:{line:128,column:105}},"90":{start:{line:130,column:8},end:{line:133,column:11}},"91":{start:{line:132,column:12},end:{line:132,column:112}},"92":{start:{line:135,column:4},end:{line:144,column:6}},"93":{start:{line:136,column:32},end:{line:136,column:52}},"94":{start:{line:137,column:8},end:{line:143,column:9}},"95":{start:{line:138,column:12},end:{line:142,column:13}},"96":{start:{line:139,column:16},end:{line:141,column:17}},"97":{start:{line:140,column:20},end:{line:140,column:68}},"98":{start:{line:145,column:4},end:{line:145,column:30}},"99":{start:{line:147,column:0},end:{line:147,column:37}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:17,column:40},end:{line:17,column:41}},loc:{start:{line:17,column:58},end:{line:146,column:1}},line:17},"6":{name:"CollectionBusiness",decl:{start:{line:19,column:13},end:{line:19,column:31}},loc:{start:{line:19,column:36},end:{line:34,column:5}},line:19},"7":{name:"(anonymous_7)",decl:{start:{line:35,column:55},end:{line:35,column:56}},loc:{start:{line:35,column:67},end:{line:41,column:5}},line:35},"8":{name:"(anonymous_8)",decl:{start:{line:42,column:41},end:{line:42,column:42}},loc:{start:{line:42,column:60},end:{line:63,column:5}},line:42},"9":{name:"(anonymous_9)",decl:{start:{line:55,column:44},end:{line:55,column:45}},loc:{start:{line:55,column:69},end:{line:62,column:9}},line:55},"10":{name:"(anonymous_10)",decl:{start:{line:64,column:40},end:{line:64,column:41}},loc:{start:{line:64,column:52},end:{line:87,column:5}},line:64},"11":{name:"(anonymous_11)",decl:{start:{line:77,column:18},end:{line:77,column:19}},loc:{start:{line:77,column:33},end:{line:86,column:9}},line:77},"12":{name:"(anonymous_12)",decl:{start:{line:88,column:44},end:{line:88,column:45}},loc:{start:{line:88,column:56},end:{line:100,column:5}},line:88},"13":{name:"(anonymous_13)",decl:{start:{line:101,column:44},end:{line:101,column:45}},loc:{start:{line:101,column:56},end:{line:113,column:5}},line:101},"14":{name:"(anonymous_14)",decl:{start:{line:114,column:58},end:{line:114,column:59}},loc:{start:{line:114,column:70},end:{line:124,column:5}},line:114},"15":{name:"(anonymous_15)",decl:{start:{line:117,column:58},end:{line:117,column:59}},loc:{start:{line:117,column:76},end:{line:123,column:9}},line:117},"16":{name:"(anonymous_16)",decl:{start:{line:119,column:39},end:{line:119,column:40}},loc:{start:{line:119,column:51},end:{line:122,column:13}},line:119},"17":{name:"(anonymous_17)",decl:{start:{line:125,column:46},end:{line:125,column:47}},loc:{start:{line:125,column:80},end:{line:134,column:5}},line:125},"18":{name:"(anonymous_18)",decl:{start:{line:131,column:18},end:{line:131,column:19}},loc:{start:{line:131,column:33},end:{line:133,column:9}},line:131},"19":{name:"(anonymous_19)",decl:{start:{line:135,column:54},end:{line:135,column:55}},loc:{start:{line:135,column:68},end:{line:144,column:5}},line:135}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:21,column:20},end:{line:21,column:65}},type:"binary-expr",locations:[{start:{line:21,column:20},end:{line:21,column:57}},{start:{line:21,column:61},end:{line:21,column:65}}],line:21},"5":{loc:{start:{line:44,column:18},end:{line:44,column:31}},type:"binary-expr",locations:[{start:{line:44,column:18},end:{line:44,column:25}},{start:{line:44,column:29},end:{line:44,column:31}}],line:44},"6":{loc:{start:{line:45,column:8},end:{line:47,column:9}},type:"if",locations:[{start:{line:45,column:8},end:{line:47,column:9}},{start:{line:45,column:8},end:{line:47,column:9}}],line:45},"7":{loc:{start:{line:45,column:12},end:{line:45,column:47}},type:"binary-expr",locations:[{start:{line:45,column:12},end:{line:45,column:22}},{start:{line:45,column:26},end:{line:45,column:47}}],line:45},"8":{loc:{start:{line:48,column:8},end:{line:50,column:9}},type:"if",locations:[{start:{line:48,column:8},end:{line:50,column:9}},{start:{line:48,column:8},end:{line:50,column:9}}],line:48},"9":{loc:{start:{line:49,column:27},end:{line:49,column:92}},type:"cond-expr",locations:[{start:{line:49,column:43},end:{line:49,column:56}},{start:{line:49,column:59},end:{line:49,column:92}}],line:49},"10":{loc:{start:{line:51,column:8},end:{line:53,column:9}},type:"if",locations:[{start:{line:51,column:8},end:{line:53,column:9}},{start:{line:51,column:8},end:{line:53,column:9}}],line:51},"11":{loc:{start:{line:66,column:8},end:{line:68,column:9}},type:"if",locations:[{start:{line:66,column:8},end:{line:68,column:9}},{start:{line:66,column:8},end:{line:68,column:9}}],line:66},"12":{loc:{start:{line:73,column:8},end:{line:75,column:9}},type:"if",locations:[{start:{line:73,column:8},end:{line:75,column:9}},{start:{line:73,column:8},end:{line:75,column:9}}],line:73},"13":{loc:{start:{line:89,column:8},end:{line:91,column:9}},type:"if",locations:[{start:{line:89,column:8},end:{line:91,column:9}},{start:{line:89,column:8},end:{line:91,column:9}}],line:89},"14":{loc:{start:{line:96,column:8},end:{line:98,column:9}},type:"if",locations:[{start:{line:96,column:8},end:{line:98,column:9}},{start:{line:96,column:8},end:{line:98,column:9}}],line:96},"15":{loc:{start:{line:102,column:8},end:{line:104,column:9}},type:"if",locations:[{start:{line:102,column:8},end:{line:104,column:9}},{start:{line:102,column:8},end:{line:104,column:9}}],line:102},"16":{loc:{start:{line:109,column:8},end:{line:111,column:9}},type:"if",locations:[{start:{line:109,column:8},end:{line:111,column:9}},{start:{line:109,column:8},end:{line:111,column:9}}],line:109},"17":{loc:{start:{line:127,column:8},end:{line:129,column:9}},type:"if",locations:[{start:{line:127,column:8},end:{line:129,column:9}},{start:{line:127,column:8},end:{line:129,column:9}}],line:127},"18":{loc:{start:{line:138,column:12},end:{line:142,column:13}},type:"if",locations:[{start:{line:138,column:12},end:{line:142,column:13}},{start:{line:138,column:12},end:{line:142,column:13}}],line:138},"19":{loc:{start:{line:139,column:16},end:{line:141,column:17}},type:"if",locations:[{start:{line:139,column:16},end:{line:141,column:17}},{start:{line:139,column:16},end:{line:141,column:17}}],line:139}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":0,"95":0,"96":0,"97":0,"98":0,"99":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\collection-business.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\collection-business.ts"],names:[],mappings:"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",sourcesContent:["import AbstractBusiness from './abstract-business';\r\nimport CollectionService from '../data-access/service/collection-service';\r\nimport Const from '../const';\r\nimport {IEntityDBO} from './entity-business';\r\nimport Collection from '../presentation/collection';\r\nimport {DataClass} from '../presentation/dataclass';\r\nimport DataClassBusiness from './dataclass-business';\r\nimport {QueryOption} from '../presentation/query-option';\r\nimport {MethodAdapter} from './method-adapter';\r\nimport WakandaClient from '../wakanda-client';\r\n\r\nexport interface ICollectionDBO {\r\n  __ENTITYSET: string;\r\n  __COUNT: number;\r\n  __FIRST: number;\r\n  __SENT: number;\r\n  __ENTITIES: IEntityDBO[];\r\n  __deferred: {uri: string};\r\n\r\n  [key: string]: any;\r\n}\r\n\r\nexport interface ICollectionBusinessConstructor {\r\n  wakJSC: WakandaClient;\r\n  dataClass: DataClass;\r\n  collection: Collection;\r\n  dataClassBusiness: DataClassBusiness;\r\n  collectionUri: string;\r\n  pageSize: number;\r\n  initialSelect: string;\r\n}\r\n\r\nclass CollectionBusiness extends AbstractBusiness {\r\n\r\n  private collection: Collection;\r\n  private dataClass: DataClass;\r\n  private dataClassBusiness: DataClassBusiness;\r\n  private service: CollectionService;\r\n  private pageSize: number;\r\n  private initialSelect: string;\r\n\r\n  constructor({wakJSC, dataClass, collection, dataClassBusiness, collectionUri, pageSize, initialSelect}: ICollectionBusinessConstructor) {\r\n    super({wakJSC});\r\n\r\n    this.collection = collection;\r\n    this.dataClass = dataClass;\r\n    this.dataClassBusiness = dataClassBusiness;\r\n    this.service = new CollectionService({\r\n      wakJSC,\r\n      collection,\r\n      dataClassBusiness,\r\n      collectionUri\r\n    });\r\n    this.pageSize = pageSize;\r\n    this.initialSelect = initialSelect;\r\n  }\r\n\r\n  public _decorateCollection() {\r\n    this.collection.fetch = this.fetch.bind(this);\r\n    this.collection.nextPage = this.nextPage.bind(this);\r\n    this.collection.prevPage = this.prevPage.bind(this);\r\n    this.collection.more = this.more.bind(this);\r\n\r\n    this._addUserDefinedMethods();\r\n  }\r\n\r\n  public fetch(options?: QueryOption): Promise<Collection> {\r\n    let opt = options || {};\r\n\r\n    if (opt.method && opt.method.length > 0) {\r\n      throw new Error('Collection.fetch: option method is not allowed');\r\n    }\r\n\r\n    if (!opt.pageSize) {\r\n      opt.pageSize = this.pageSize ? this.pageSize : Const.DEFAULT_PAGE_SIZE;\r\n    }\r\n\r\n    if (opt.select) {\r\n      this.initialSelect = opt.select;\r\n    }\r\n\r\n    this.pageSize = opt.pageSize;\r\n\r\n    return this.service.fetch(opt).then(collectionDBO => {\r\n      let fresherCollection = this.dataClassBusiness._presentationCollectionFromDbo({\r\n        dbo: collectionDBO,\r\n        pageSize: this.pageSize\r\n      });\r\n\r\n      this._refreshCollection({fresherCollection});\r\n      return this.collection;\r\n    });\r\n  }\r\n\r\n  public more(): Promise<Collection> {\r\n\r\n    if (this.collection._deferred === true) {\r\n      throw new Error('Collection.more: can not call more on a deferred collection');\r\n    }\r\n\r\n    let options: QueryOption = {\r\n      start: this.collection._first + this.collection._sent,\r\n      pageSize: this.pageSize\r\n    };\r\n\r\n    if (this.initialSelect) {\r\n      options.select = this.initialSelect;\r\n    }\r\n\r\n    return this.service.fetch(options)\r\n      .then(dbo => {\r\n        this.collection._sent += dbo.__ENTITIES.length;\r\n\r\n        for (let entity of dbo.__ENTITIES) {\r\n          this.collection.entities.push(this.dataClassBusiness._presentationEntityFromDbo({\r\n            dbo: entity\r\n          }));\r\n        }\r\n\r\n        return this.collection;\r\n      });\r\n  }\r\n\r\n  public nextPage(): Promise<Collection> {\r\n\r\n    if (this.collection._deferred === true) {\r\n      throw new Error('Collection.nextPage: can not call nextPage on a deferred collection');\r\n    }\r\n\r\n    let options: QueryOption = {\r\n      start: this.collection._first + this.pageSize,\r\n      pageSize: this.pageSize\r\n    };\r\n\r\n    if (this.initialSelect) {\r\n      options.select = this.initialSelect;\r\n    }\r\n\r\n    return this.fetch(options);\r\n  }\r\n\r\n  public prevPage(): Promise<Collection> {\r\n\r\n    if (this.collection._deferred === true) {\r\n      throw new Error('Collection.prevPage: can not call prevPage on a deferred collection');\r\n    }\r\n\r\n    let options: QueryOption = {\r\n      start: this.collection._first - this.pageSize,\r\n      pageSize: this.pageSize\r\n    };\r\n\r\n    if (this.initialSelect) {\r\n      options.select = this.initialSelect;\r\n    }\r\n\r\n    return this.fetch(options);\r\n  }\r\n\r\n  private _addUserDefinedMethods() {\r\n    let self = this;\r\n    this.dataClassBusiness.methods.collection.forEach(method => {\r\n      //Voluntary don't use fat arrow notation to use arguments object without a bug\r\n      this.collection[method] = function() {\r\n        let params = Array.from(arguments);\r\n        return self.callMethod(method, params);\r\n      };\r\n    });\r\n  }\r\n\r\n  public callMethod(methodName: string, parameters: any[]) {\r\n    if (this.collection._deferred) {\r\n      throw new Error('Collection.' + methodName + ': can not be called on a deferred collection');\r\n    }\r\n\r\n    return this.service.callMethod(methodName, parameters)\r\n      .then((obj: any) => {\r\n        return MethodAdapter.transform(obj, this.dataClassBusiness._dataClassBusinessMap);\r\n      });\r\n  }\r\n\r\n  private _refreshCollection({fresherCollection}: {fresherCollection: Collection}) {\r\n    for (let prop in fresherCollection) {\r\n      if (Object.prototype.hasOwnProperty.call(fresherCollection, prop)) {\r\n        if (typeof fresherCollection[prop] !== 'function') {\r\n          this.collection[prop] = fresherCollection[prop];\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nexport default CollectionBusiness;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_bmex8pdco.s[0]++,(cov_bmex8pdco.b[0][0]++,this)&&(cov_bmex8pdco.b[0][1]++,this.__extends)||(cov_bmex8pdco.b[0][2]++,function(){cov_bmex8pdco.f[0]++;var extendStatics=(cov_bmex8pdco.s[1]++,(cov_bmex8pdco.b[1][0]++,Object.setPrototypeOf)||(cov_bmex8pdco.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_bmex8pdco.b[1][2]++,function(d,b){cov_bmex8pdco.f[1]++;cov_bmex8pdco.s[2]++;d.__proto__=b;})||(cov_bmex8pdco.b[1][3]++,function(d,b){cov_bmex8pdco.f[2]++;cov_bmex8pdco.s[3]++;for(var p in b){cov_bmex8pdco.s[4]++;if(b.hasOwnProperty(p)){cov_bmex8pdco.b[2][0]++;cov_bmex8pdco.s[5]++;d[p]=b[p];}else{cov_bmex8pdco.b[2][1]++;}}}));cov_bmex8pdco.s[6]++;return function(d,b){cov_bmex8pdco.f[3]++;cov_bmex8pdco.s[7]++;extendStatics(d,b);function __(){cov_bmex8pdco.f[4]++;cov_bmex8pdco.s[8]++;this.constructor=d;}cov_bmex8pdco.s[9]++;d.prototype=b===null?(cov_bmex8pdco.b[3][0]++,Object.create(b)):(cov_bmex8pdco.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_bmex8pdco.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_business_1=(cov_bmex8pdco.s[11]++,__webpack_require__(13));var collection_service_1=(cov_bmex8pdco.s[12]++,__webpack_require__(131));var const_1=(cov_bmex8pdco.s[13]++,__webpack_require__(40));var method_adapter_1=(cov_bmex8pdco.s[14]++,__webpack_require__(39));var CollectionBusiness=(/** @class */cov_bmex8pdco.s[15]++,function(_super){cov_bmex8pdco.f[5]++;cov_bmex8pdco.s[16]++;__extends(CollectionBusiness,_super);function CollectionBusiness(_a){cov_bmex8pdco.f[6]++;var wakJSC=(cov_bmex8pdco.s[17]++,_a.wakJSC),dataClass=(cov_bmex8pdco.s[18]++,_a.dataClass),collection=(cov_bmex8pdco.s[19]++,_a.collection),dataClassBusiness=(cov_bmex8pdco.s[20]++,_a.dataClassBusiness),collectionUri=(cov_bmex8pdco.s[21]++,_a.collectionUri),pageSize=(cov_bmex8pdco.s[22]++,_a.pageSize),initialSelect=(cov_bmex8pdco.s[23]++,_a.initialSelect);var _this=(cov_bmex8pdco.s[24]++,(cov_bmex8pdco.b[4][0]++,_super.call(this,{wakJSC:wakJSC}))||(cov_bmex8pdco.b[4][1]++,this));cov_bmex8pdco.s[25]++;_this.collection=collection;cov_bmex8pdco.s[26]++;_this.dataClass=dataClass;cov_bmex8pdco.s[27]++;_this.dataClassBusiness=dataClassBusiness;cov_bmex8pdco.s[28]++;_this.service=new collection_service_1.default({wakJSC:wakJSC,collection:collection,dataClassBusiness:dataClassBusiness,collectionUri:collectionUri});cov_bmex8pdco.s[29]++;_this.pageSize=pageSize;cov_bmex8pdco.s[30]++;_this.initialSelect=initialSelect;cov_bmex8pdco.s[31]++;return _this;}cov_bmex8pdco.s[32]++;CollectionBusiness.prototype._decorateCollection=function(){cov_bmex8pdco.f[7]++;cov_bmex8pdco.s[33]++;this.collection.fetch=this.fetch.bind(this);cov_bmex8pdco.s[34]++;this.collection.nextPage=this.nextPage.bind(this);cov_bmex8pdco.s[35]++;this.collection.prevPage=this.prevPage.bind(this);cov_bmex8pdco.s[36]++;this.collection.more=this.more.bind(this);cov_bmex8pdco.s[37]++;this._addUserDefinedMethods();};cov_bmex8pdco.s[38]++;CollectionBusiness.prototype.fetch=function(options){cov_bmex8pdco.f[8]++;var _this=(cov_bmex8pdco.s[39]++,this);var opt=(cov_bmex8pdco.s[40]++,(cov_bmex8pdco.b[5][0]++,options)||(cov_bmex8pdco.b[5][1]++,{}));cov_bmex8pdco.s[41]++;if((cov_bmex8pdco.b[7][0]++,opt.method)&&(cov_bmex8pdco.b[7][1]++,opt.method.length>0)){cov_bmex8pdco.b[6][0]++;cov_bmex8pdco.s[42]++;throw new Error('Collection.fetch: option method is not allowed');}else{cov_bmex8pdco.b[6][1]++;}cov_bmex8pdco.s[43]++;if(!opt.pageSize){cov_bmex8pdco.b[8][0]++;cov_bmex8pdco.s[44]++;opt.pageSize=this.pageSize?(cov_bmex8pdco.b[9][0]++,this.pageSize):(cov_bmex8pdco.b[9][1]++,const_1.default.DEFAULT_PAGE_SIZE);}else{cov_bmex8pdco.b[8][1]++;}cov_bmex8pdco.s[45]++;if(opt.select){cov_bmex8pdco.b[10][0]++;cov_bmex8pdco.s[46]++;this.initialSelect=opt.select;}else{cov_bmex8pdco.b[10][1]++;}cov_bmex8pdco.s[47]++;this.pageSize=opt.pageSize;cov_bmex8pdco.s[48]++;return this.service.fetch(opt).then(function(collectionDBO){cov_bmex8pdco.f[9]++;var fresherCollection=(cov_bmex8pdco.s[49]++,_this.dataClassBusiness._presentationCollectionFromDbo({dbo:collectionDBO,pageSize:_this.pageSize}));cov_bmex8pdco.s[50]++;_this._refreshCollection({fresherCollection:fresherCollection});cov_bmex8pdco.s[51]++;return _this.collection;});};cov_bmex8pdco.s[52]++;CollectionBusiness.prototype.more=function(){cov_bmex8pdco.f[10]++;var _this=(cov_bmex8pdco.s[53]++,this);cov_bmex8pdco.s[54]++;if(this.collection._deferred===true){cov_bmex8pdco.b[11][0]++;cov_bmex8pdco.s[55]++;throw new Error('Collection.more: can not call more on a deferred collection');}else{cov_bmex8pdco.b[11][1]++;}var options=(cov_bmex8pdco.s[56]++,{start:this.collection._first+this.collection._sent,pageSize:this.pageSize});cov_bmex8pdco.s[57]++;if(this.initialSelect){cov_bmex8pdco.b[12][0]++;cov_bmex8pdco.s[58]++;options.select=this.initialSelect;}else{cov_bmex8pdco.b[12][1]++;}cov_bmex8pdco.s[59]++;return this.service.fetch(options).then(function(dbo){cov_bmex8pdco.f[11]++;cov_bmex8pdco.s[60]++;_this.collection._sent+=dbo.__ENTITIES.length;cov_bmex8pdco.s[61]++;for(var _i=0,_a=dbo.__ENTITIES;_i<_a.length;_i++){var entity=(cov_bmex8pdco.s[62]++,_a[_i]);cov_bmex8pdco.s[63]++;_this.collection.entities.push(_this.dataClassBusiness._presentationEntityFromDbo({dbo:entity}));}cov_bmex8pdco.s[64]++;return _this.collection;});};cov_bmex8pdco.s[65]++;CollectionBusiness.prototype.nextPage=function(){cov_bmex8pdco.f[12]++;cov_bmex8pdco.s[66]++;if(this.collection._deferred===true){cov_bmex8pdco.b[13][0]++;cov_bmex8pdco.s[67]++;throw new Error('Collection.nextPage: can not call nextPage on a deferred collection');}else{cov_bmex8pdco.b[13][1]++;}var options=(cov_bmex8pdco.s[68]++,{start:this.collection._first+this.pageSize,pageSize:this.pageSize});cov_bmex8pdco.s[69]++;if(this.initialSelect){cov_bmex8pdco.b[14][0]++;cov_bmex8pdco.s[70]++;options.select=this.initialSelect;}else{cov_bmex8pdco.b[14][1]++;}cov_bmex8pdco.s[71]++;return this.fetch(options);};cov_bmex8pdco.s[72]++;CollectionBusiness.prototype.prevPage=function(){cov_bmex8pdco.f[13]++;cov_bmex8pdco.s[73]++;if(this.collection._deferred===true){cov_bmex8pdco.b[15][0]++;cov_bmex8pdco.s[74]++;throw new Error('Collection.prevPage: can not call prevPage on a deferred collection');}else{cov_bmex8pdco.b[15][1]++;}var options=(cov_bmex8pdco.s[75]++,{start:this.collection._first-this.pageSize,pageSize:this.pageSize});cov_bmex8pdco.s[76]++;if(this.initialSelect){cov_bmex8pdco.b[16][0]++;cov_bmex8pdco.s[77]++;options.select=this.initialSelect;}else{cov_bmex8pdco.b[16][1]++;}cov_bmex8pdco.s[78]++;return this.fetch(options);};cov_bmex8pdco.s[79]++;CollectionBusiness.prototype._addUserDefinedMethods=function(){cov_bmex8pdco.f[14]++;var _this=(cov_bmex8pdco.s[80]++,this);var self=(cov_bmex8pdco.s[81]++,this);cov_bmex8pdco.s[82]++;this.dataClassBusiness.methods.collection.forEach(function(method){cov_bmex8pdco.f[15]++;cov_bmex8pdco.s[83]++;//Voluntary don't use fat arrow notation to use arguments object without a bug
_this.collection[method]=function(){cov_bmex8pdco.f[16]++;var params=(cov_bmex8pdco.s[84]++,Array.from(arguments));cov_bmex8pdco.s[85]++;return self.callMethod(method,params);};});};cov_bmex8pdco.s[86]++;CollectionBusiness.prototype.callMethod=function(methodName,parameters){cov_bmex8pdco.f[17]++;var _this=(cov_bmex8pdco.s[87]++,this);cov_bmex8pdco.s[88]++;if(this.collection._deferred){cov_bmex8pdco.b[17][0]++;cov_bmex8pdco.s[89]++;throw new Error('Collection.'+methodName+': can not be called on a deferred collection');}else{cov_bmex8pdco.b[17][1]++;}cov_bmex8pdco.s[90]++;return this.service.callMethod(methodName,parameters).then(function(obj){cov_bmex8pdco.f[18]++;cov_bmex8pdco.s[91]++;return method_adapter_1.MethodAdapter.transform(obj,_this.dataClassBusiness._dataClassBusinessMap);});};cov_bmex8pdco.s[92]++;CollectionBusiness.prototype._refreshCollection=function(_a){cov_bmex8pdco.f[19]++;var fresherCollection=(cov_bmex8pdco.s[93]++,_a.fresherCollection);cov_bmex8pdco.s[94]++;for(var prop in fresherCollection){cov_bmex8pdco.s[95]++;if(Object.prototype.hasOwnProperty.call(fresherCollection,prop)){cov_bmex8pdco.b[18][0]++;cov_bmex8pdco.s[96]++;if(typeof fresherCollection[prop]!=='function'){cov_bmex8pdco.b[19][0]++;cov_bmex8pdco.s[97]++;this.collection[prop]=fresherCollection[prop];}else{cov_bmex8pdco.b[19][1]++;}}else{cov_bmex8pdco.b[18][1]++;}}};cov_bmex8pdco.s[98]++;return CollectionBusiness;}(abstract_business_1.default));cov_bmex8pdco.s[99]++;exports.default=CollectionBusiness;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_13nc5k2l5s=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\collection-service.ts",hash="c06dbc7c5c7a4468974929a3b49ab7e02b643828",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\collection-service.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:25},end:{line:13,column:54}},"12":{start:{line:14,column:32},end:{line:14,column:73}},"13":{start:{line:15,column:39},end:{line:52,column:29}},"14":{start:{line:16,column:4},end:{line:16,column:41}},"15":{start:{line:18,column:21},end:{line:18,column:30}},"16":{start:{line:18,column:45},end:{line:18,column:58}},"17":{start:{line:18,column:80},end:{line:18,column:100}},"18":{start:{line:18,column:118},end:{line:18,column:134}},"19":{start:{line:19,column:20},end:{line:19,column:65}},"20":{start:{line:20,column:8},end:{line:20,column:38}},"21":{start:{line:21,column:8},end:{line:21,column:52}},"22":{start:{line:22,column:8},end:{line:22,column:44}},"23":{start:{line:23,column:8},end:{line:23,column:84}},"24":{start:{line:24,column:8},end:{line:24,column:21}},"25":{start:{line:26,column:4},end:{line:41,column:6}},"26":{start:{line:27,column:20},end:{line:27,column:24}},"27":{start:{line:28,column:8},end:{line:40,column:11}},"28":{start:{line:35,column:12},end:{line:38,column:13}},"29":{start:{line:36,column:16},end:{line:36,column:54}},"30":{start:{line:37,column:16},end:{line:37,column:94}},"31":{start:{line:39,column:12},end:{line:39,column:23}},"32":{start:{line:42,column:4},end:{line:50,column:6}},"33":{start:{line:43,column:8},end:{line:49,column:11}},"34":{start:{line:51,column:4},end:{line:51,column:29}},"35":{start:{line:53,column:0},end:{line:53,column:36}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:15,column:39},end:{line:15,column:40}},loc:{start:{line:15,column:57},end:{line:52,column:1}},line:15},"6":{name:"CollectionService",decl:{start:{line:17,column:13},end:{line:17,column:30}},loc:{start:{line:17,column:35},end:{line:25,column:5}},line:17},"7":{name:"(anonymous_7)",decl:{start:{line:26,column:40},end:{line:26,column:41}},loc:{start:{line:26,column:59},end:{line:41,column:5}},line:26},"8":{name:"(anonymous_8)",decl:{start:{line:34,column:18},end:{line:34,column:19}},loc:{start:{line:34,column:33},end:{line:40,column:9}},line:34},"9":{name:"(anonymous_9)",decl:{start:{line:42,column:45},end:{line:42,column:46}},loc:{start:{line:42,column:79},end:{line:50,column:5}},line:42}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:19,column:20},end:{line:19,column:65}},type:"binary-expr",locations:[{start:{line:19,column:20},end:{line:19,column:57}},{start:{line:19,column:61},end:{line:19,column:65}}],line:19},"5":{loc:{start:{line:35,column:12},end:{line:38,column:13}},type:"if",locations:[{start:{line:35,column:12},end:{line:38,column:13}},{start:{line:35,column:12},end:{line:38,column:13}}],line:35}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\collection-service.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\collection-service.ts"],names:[],mappings:";;;;;;;;;;;;AAAA,uDAAiD;AAKjD,0EAAqF;AAGrF;IAAgC,qCAAe;IAO7C,2BAAY,EACkG;YADjG,kBAAM,EAAE,0BAAU,EAAE,wCAAiB,EAAE,gCAAa;QAAjE,YAEE,kBAAM,EAAC,MAAM,QAAA,EAAC,CAAC,SAMhB;QAJC,KAAI,CAAC,UAAU,GAAG,UAAU,CAAC;QAC7B,KAAI,CAAC,iBAAiB,GAAG,iBAAiB,CAAC;QAC3C,KAAI,CAAC,aAAa,GAAG,aAAa,CAAC;QACnC,KAAI,CAAC,WAAW,GAAG,wCAAc,CAAC,aAAa,CAAC,CAAC;;IACnD,CAAC;IAEM,iCAAK,GAAZ,UAAa,OAAoB;QAAjC,iBAiBC;QAfC,MAAM,CAAC,+CAAqB,CAAC,KAAK,CAAC;YACjC,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,aAAa,EAAE,IAAI,CAAC,aAAa;YACjC,WAAW,EAAE,IAAI,CAAC,WAAW;YAC7B,OAAO,SAAA;SACR,CAAC;aACC,IAAI,CAAC,UAAA,GAAG;YAEP,EAAE,CAAC,CAAC,GAAG,CAAC,WAAW,CAAC,CAAC,CAAC;gBACpB,KAAI,CAAC,aAAa,GAAG,GAAG,CAAC,WAAW,CAAC;gBACrC,KAAI,CAAC,WAAW,GAAG,wCAAc,CAAC,GAAG,CAAC,WAAW,CAAC,CAAC;YACrD,CAAC;YAED,MAAM,CAAC,GAAG,CAAC;QACb,CAAC,CAAC,CAAC;IACP,CAAC;IAGM,sCAAU,GAAjB,UAAkB,UAAkB,EAAE,UAAiB;QACrD,MAAM,CAAC,+CAAqB,CAAC,UAAU,CAAC;YACtC,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,aAAa,EAAE,IAAI,CAAC,aAAa;YACjC,WAAW,EAAE,IAAI,CAAC,WAAW;YAC7B,UAAU,YAAA;YACV,UAAU,YAAA;SACX,CAAC,CAAC;IACL,CAAC;IACH,wBAAC;AAAD,CAAC,AA9CD,CAAgC,0BAAe,GA8C9C;AAED,kBAAe,iBAAiB,CAAC",sourcesContent:["import AbstractService from './abstract-service';\r\nimport Collection from '../../presentation/collection';\r\nimport DataClassBusiness from '../../business/dataclass-business';\r\nimport {QueryOption} from '../../presentation/query-option';\r\nimport {ICollectionDBO} from '../../business/collection-business';\r\nimport {CollectionBaseService, isEntitySetUri} from './base/collection-base-service';\r\nimport WakandaClient from '../../wakanda-client';\r\n\r\nclass CollectionService extends AbstractService {\r\n\r\n  private collection: Collection;\r\n  private dataClassBusiness: DataClassBusiness;\r\n  private collectionUri: string;\r\n  private isEntitySet: boolean;\r\n\r\n  constructor({wakJSC, collection, dataClassBusiness, collectionUri}:\r\n    {wakJSC: WakandaClient, collection: Collection, dataClassBusiness: DataClassBusiness, collectionUri: string}) {\r\n    super({wakJSC});\r\n\r\n    this.collection = collection;\r\n    this.dataClassBusiness = dataClassBusiness;\r\n    this.collectionUri = collectionUri;\r\n    this.isEntitySet = isEntitySetUri(collectionUri);\r\n  }\r\n\r\n  public fetch(options: QueryOption): Promise<ICollectionDBO> {\r\n\r\n    return CollectionBaseService.fetch({\r\n      httpClient: this.httpClient,\r\n      collectionUri: this.collectionUri,\r\n      isEntitySet: this.isEntitySet,\r\n      options\r\n    })\r\n      .then(dbo => {\r\n\r\n        if (dbo.__ENTITYSET) {\r\n          this.collectionUri = dbo.__ENTITYSET;\r\n          this.isEntitySet = isEntitySetUri(dbo.__ENTITYSET);\r\n        }\r\n\r\n        return dbo;\r\n      });\r\n  }\r\n\r\n\r\n  public callMethod(methodName: string, parameters: any[]): Promise<any> {\r\n    return CollectionBaseService.callMethod({\r\n      httpClient: this.httpClient,\r\n      collectionUri: this.collectionUri,\r\n      isEntitySet: this.isEntitySet,\r\n      methodName,\r\n      parameters\r\n    });\r\n  }\r\n}\r\n\r\nexport default CollectionService;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_13nc5k2l5s.s[0]++,(cov_13nc5k2l5s.b[0][0]++,this)&&(cov_13nc5k2l5s.b[0][1]++,this.__extends)||(cov_13nc5k2l5s.b[0][2]++,function(){cov_13nc5k2l5s.f[0]++;var extendStatics=(cov_13nc5k2l5s.s[1]++,(cov_13nc5k2l5s.b[1][0]++,Object.setPrototypeOf)||(cov_13nc5k2l5s.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_13nc5k2l5s.b[1][2]++,function(d,b){cov_13nc5k2l5s.f[1]++;cov_13nc5k2l5s.s[2]++;d.__proto__=b;})||(cov_13nc5k2l5s.b[1][3]++,function(d,b){cov_13nc5k2l5s.f[2]++;cov_13nc5k2l5s.s[3]++;for(var p in b){cov_13nc5k2l5s.s[4]++;if(b.hasOwnProperty(p)){cov_13nc5k2l5s.b[2][0]++;cov_13nc5k2l5s.s[5]++;d[p]=b[p];}else{cov_13nc5k2l5s.b[2][1]++;}}}));cov_13nc5k2l5s.s[6]++;return function(d,b){cov_13nc5k2l5s.f[3]++;cov_13nc5k2l5s.s[7]++;extendStatics(d,b);function __(){cov_13nc5k2l5s.f[4]++;cov_13nc5k2l5s.s[8]++;this.constructor=d;}cov_13nc5k2l5s.s[9]++;d.prototype=b===null?(cov_13nc5k2l5s.b[3][0]++,Object.create(b)):(cov_13nc5k2l5s.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_13nc5k2l5s.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_service_1=(cov_13nc5k2l5s.s[11]++,__webpack_require__(14));var collection_base_service_1=(cov_13nc5k2l5s.s[12]++,__webpack_require__(71));var CollectionService=(/** @class */cov_13nc5k2l5s.s[13]++,function(_super){cov_13nc5k2l5s.f[5]++;cov_13nc5k2l5s.s[14]++;__extends(CollectionService,_super);function CollectionService(_a){cov_13nc5k2l5s.f[6]++;var wakJSC=(cov_13nc5k2l5s.s[15]++,_a.wakJSC),collection=(cov_13nc5k2l5s.s[16]++,_a.collection),dataClassBusiness=(cov_13nc5k2l5s.s[17]++,_a.dataClassBusiness),collectionUri=(cov_13nc5k2l5s.s[18]++,_a.collectionUri);var _this=(cov_13nc5k2l5s.s[19]++,(cov_13nc5k2l5s.b[4][0]++,_super.call(this,{wakJSC:wakJSC}))||(cov_13nc5k2l5s.b[4][1]++,this));cov_13nc5k2l5s.s[20]++;_this.collection=collection;cov_13nc5k2l5s.s[21]++;_this.dataClassBusiness=dataClassBusiness;cov_13nc5k2l5s.s[22]++;_this.collectionUri=collectionUri;cov_13nc5k2l5s.s[23]++;_this.isEntitySet=collection_base_service_1.isEntitySetUri(collectionUri);cov_13nc5k2l5s.s[24]++;return _this;}cov_13nc5k2l5s.s[25]++;CollectionService.prototype.fetch=function(options){cov_13nc5k2l5s.f[7]++;var _this=(cov_13nc5k2l5s.s[26]++,this);cov_13nc5k2l5s.s[27]++;return collection_base_service_1.CollectionBaseService.fetch({httpClient:this.httpClient,collectionUri:this.collectionUri,isEntitySet:this.isEntitySet,options:options}).then(function(dbo){cov_13nc5k2l5s.f[8]++;cov_13nc5k2l5s.s[28]++;if(dbo.__ENTITYSET){cov_13nc5k2l5s.b[5][0]++;cov_13nc5k2l5s.s[29]++;_this.collectionUri=dbo.__ENTITYSET;cov_13nc5k2l5s.s[30]++;_this.isEntitySet=collection_base_service_1.isEntitySetUri(dbo.__ENTITYSET);}else{cov_13nc5k2l5s.b[5][1]++;}cov_13nc5k2l5s.s[31]++;return dbo;});};cov_13nc5k2l5s.s[32]++;CollectionService.prototype.callMethod=function(methodName,parameters){cov_13nc5k2l5s.f[9]++;cov_13nc5k2l5s.s[33]++;return collection_base_service_1.CollectionBaseService.callMethod({httpClient:this.httpClient,collectionUri:this.collectionUri,isEntitySet:this.isEntitySet,methodName:methodName,parameters:parameters});};cov_13nc5k2l5s.s[34]++;return CollectionService;}(abstract_service_1.default));cov_13nc5k2l5s.s[35]++;exports.default=CollectionService;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_dcvjwy635=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\media-business.ts",hash="ee09215cab3a0e11fccb82f8265a1f49111af5b2",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\media-business.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:26},end:{line:13,column:56}},"12":{start:{line:14,column:22},end:{line:14,column:69}},"13":{start:{line:15,column:35},end:{line:60,column:30}},"14":{start:{line:16,column:4},end:{line:16,column:37}},"15":{start:{line:18,column:21},end:{line:18,column:30}},"16":{start:{line:18,column:40},end:{line:18,column:48}},"17":{start:{line:18,column:70},end:{line:18,column:90}},"18":{start:{line:18,column:102},end:{line:18,column:112}},"19":{start:{line:18,column:130},end:{line:18,column:146}},"20":{start:{line:18,column:157},end:{line:18,column:166}},"21":{start:{line:19,column:20},end:{line:19,column:65}},"22":{start:{line:20,column:8},end:{line:20,column:28}},"23":{start:{line:21,column:8},end:{line:21,column:30}},"24":{start:{line:22,column:8},end:{line:22,column:52}},"25":{start:{line:23,column:8},end:{line:23,column:41}},"26":{start:{line:24,column:8},end:{line:30,column:11}},"27":{start:{line:31,column:8},end:{line:31,column:21}},"28":{start:{line:33,column:4},end:{line:36,column:6}},"29":{start:{line:34,column:8},end:{line:34,column:51}},"30":{start:{line:35,column:8},end:{line:35,column:51}},"31":{start:{line:37,column:4},end:{line:48,column:6}},"32":{start:{line:38,column:20},end:{line:38,column:24}},"33":{start:{line:39,column:8},end:{line:41,column:9}},"34":{start:{line:40,column:12},end:{line:40,column:91}},"35":{start:{line:42,column:8},end:{line:47,column:11}},"36":{start:{line:43,column:12},end:{line:43,column:23}},"37":{start:{line:46,column:12},end:{line:46,column:40}},"38":{start:{line:49,column:4},end:{line:58,column:6}},"39":{start:{line:50,column:20},end:{line:50,column:24}},"40":{start:{line:51,column:8},end:{line:53,column:9}},"41":{start:{line:52,column:12},end:{line:52,column:90}},"42":{start:{line:54,column:8},end:{line:57,column:11}},"43":{start:{line:56,column:12},end:{line:56,column:40}},"44":{start:{line:59,column:4},end:{line:59,column:25}},"45":{start:{line:61,column:0},end:{line:61,column:32}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:15,column:35},end:{line:15,column:36}},loc:{start:{line:15,column:53},end:{line:60,column:1}},line:15},"6":{name:"MediaBusiness",decl:{start:{line:17,column:13},end:{line:17,column:26}},loc:{start:{line:17,column:31},end:{line:32,column:5}},line:17},"7":{name:"(anonymous_7)",decl:{start:{line:33,column:45},end:{line:33,column:46}},loc:{start:{line:33,column:57},end:{line:36,column:5}},line:33},"8":{name:"(anonymous_8)",decl:{start:{line:37,column:37},end:{line:37,column:38}},loc:{start:{line:37,column:53},end:{line:48,column:5}},line:37},"9":{name:"(anonymous_9)",decl:{start:{line:42,column:57},end:{line:42,column:58}},loc:{start:{line:42,column:72},end:{line:44,column:9}},line:42},"10":{name:"(anonymous_10)",decl:{start:{line:44,column:16},end:{line:44,column:17}},loc:{start:{line:44,column:28},end:{line:47,column:9}},line:44},"11":{name:"(anonymous_11)",decl:{start:{line:49,column:37},end:{line:49,column:38}},loc:{start:{line:49,column:49},end:{line:58,column:5}},line:49},"12":{name:"(anonymous_12)",decl:{start:{line:54,column:42},end:{line:54,column:43}},loc:{start:{line:54,column:54},end:{line:57,column:9}},line:54}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:19,column:20},end:{line:19,column:65}},type:"binary-expr",locations:[{start:{line:19,column:20},end:{line:19,column:57}},{start:{line:19,column:61},end:{line:19,column:65}}],line:19},"5":{loc:{start:{line:39,column:8},end:{line:41,column:9}},type:"if",locations:[{start:{line:39,column:8},end:{line:41,column:9}},{start:{line:39,column:8},end:{line:41,column:9}}],line:39},"6":{loc:{start:{line:51,column:8},end:{line:53,column:9}},type:"if",locations:[{start:{line:51,column:8},end:{line:53,column:9}},{start:{line:51,column:8},end:{line:53,column:9}}],line:51}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\media-business.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\media-business.ts"],names:[],mappings:";;;;;;;;;;;;AAAA,yDAAmD;AACnD,sEAAgE;AAMhE;IAA4B,iCAAgB;IAS1C,uBAAY,EACwH;YADvH,kBAAM,EAAE,gBAAK,EAAE,wCAAiB,EAAE,oBAAO,EAAE,gCAAa,EAAE,kBAAM;QAA7E,YAEE,kBAAM,EAAC,MAAM,QAAA,EAAC,CAAC,SAahB;QAXC,KAAI,CAAC,KAAK,GAAG,KAAK,CAAC;QACnB,KAAI,CAAC,MAAM,GAAG,MAAM,CAAC;QACrB,KAAI,CAAC,iBAAiB,GAAG,iBAAiB,CAAC;QAC3C,KAAI,CAAC,OAAO,GAAG,OAAO,KAAK,IAAI,CAAC;QAChC,KAAI,CAAC,OAAO,GAAG,IAAI,uBAAY,CAAC;YAC9B,MAAM,QAAA;YACN,aAAa,EAAE,KAAI;YACnB,KAAK,OAAA;YACL,aAAa,eAAA;YACb,iBAAiB,mBAAA;SAClB,CAAC,CAAC;;IACL,CAAC;IAEM,sCAAc,GAArB;QACE,IAAI,CAAC,KAAK,CAAC,MAAM,GAAG,IAAI,CAAC,MAAM,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC;QAC3C,IAAI,CAAC,KAAK,CAAC,MAAM,GAAG,IAAI,CAAC,MAAM,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC;IAC7C,CAAC;IAEM,8BAAM,GAAb,UAAc,IAAS;QAAvB,iBAYC;QAVC,EAAE,CAAC,CAAC,CAAC,IAAI,CAAC,MAAM,CAAC,IAAI,CAAC,CAAC,CAAC;YACtB,MAAM,IAAI,KAAK,CAAC,6DAA6D,CAAC,CAAC;QACjF,CAAC;QAED,MAAM,CAAC,IAAI,CAAC,OAAO,CAAC,MAAM,CAAC,IAAI,EAAE,IAAI,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,UAAA,GAAG;YAClD,MAAM,CAAC,GAAG,CAAC,CAAC,OAAO;QACrB,CAAC,CAAC,CAAC,IAAI,CAAC;YACN,iFAAiF;YACjF,MAAM,CAAC,KAAI,CAAC,MAAM,CAAC,KAAK,EAAE,CAAC;QAC7B,CAAC,CAAC,CAAC;IACL,CAAC;IAEM,8BAAM,GAAb;QAAA,iBAUC;QARC,EAAE,CAAC,CAAC,CAAC,IAAI,CAAC,MAAM,CAAC,IAAI,CAAC,CAAC,CAAC;YACtB,MAAM,IAAI,KAAK,CAAC,4DAA4D,CAAC,CAAC;QAChF,CAAC;QAED,MAAM,CAAC,IAAI,CAAC,OAAO,CAAC,MAAM,EAAE,CAAC,IAAI,CAAC;YAChC,iFAAiF;YACjF,MAAM,CAAC,KAAI,CAAC,MAAM,CAAC,KAAK,EAAE,CAAC;QAC7B,CAAC,CAAC,CAAC;IACL,CAAC;IACH,oBAAC;AAAD,CAAC,AAxDD,CAA4B,2BAAgB,GAwD3C;AAED,kBAAe,aAAa,CAAC",sourcesContent:["import AbstractBusiness from './abstract-business';\r\nimport MediaService from '../data-access/service/media-service';\r\nimport Media from '../presentation/media';\r\nimport Entity from '../presentation/entity';\r\nimport DataClassBusiness from './dataclass-business';\r\nimport WakandaClient from '../wakanda-client';\r\n\r\nclass MediaBusiness extends AbstractBusiness {\r\n\r\n  public entity: Entity;\r\n  public isImage: boolean;\r\n\r\n  private media: Media;\r\n  private dataClassBusiness: DataClassBusiness;\r\n  private service: MediaService;\r\n\r\n  constructor({wakJSC, media, dataClassBusiness, isImage, attributeName, entity}:\r\n  {wakJSC: WakandaClient, media: Media, dataClassBusiness: DataClassBusiness, isImage: boolean, attributeName: string, entity: Entity}) {\r\n    super({wakJSC});\r\n\r\n    this.media = media;\r\n    this.entity = entity;\r\n    this.dataClassBusiness = dataClassBusiness;\r\n    this.isImage = isImage === true;\r\n    this.service = new MediaService({\r\n      wakJSC,\r\n      mediaBusiness: this,\r\n      media,\r\n      attributeName,\r\n      dataClassBusiness\r\n    });\r\n  }\r\n\r\n  public _decorateMedia() {\r\n    this.media.upload = this.upload.bind(this);\r\n    this.media.delete = this.delete.bind(this);\r\n  }\r\n\r\n  public upload(file: any): Promise<Entity> {\r\n\r\n    if (!this.entity._key) {\r\n      throw new Error('Media.upload: entity must be saved before uploading a media');\r\n    }\r\n\r\n    return this.service.upload(file, file.type).then(dbo => {\r\n      return dbo; //FIXME\r\n    }).then(() => {\r\n      //FIXME - crappy, force a refresh of the entity to get proper stamp and media uri\r\n      return this.entity.fetch();\r\n    });\r\n  }\r\n\r\n  public delete(): Promise<Entity> {\r\n\r\n    if (!this.entity._key) {\r\n      throw new Error('Media.upload: entity must be saved before deleting a media');\r\n    }\r\n\r\n    return this.service.delete().then(() => {\r\n      //FIXME - crappy, force a refresh of the entity to get proper stamp and media uri\r\n      return this.entity.fetch();\r\n    });\r\n  }\r\n}\r\n\r\nexport default MediaBusiness;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_dcvjwy635.s[0]++,(cov_dcvjwy635.b[0][0]++,this)&&(cov_dcvjwy635.b[0][1]++,this.__extends)||(cov_dcvjwy635.b[0][2]++,function(){cov_dcvjwy635.f[0]++;var extendStatics=(cov_dcvjwy635.s[1]++,(cov_dcvjwy635.b[1][0]++,Object.setPrototypeOf)||(cov_dcvjwy635.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_dcvjwy635.b[1][2]++,function(d,b){cov_dcvjwy635.f[1]++;cov_dcvjwy635.s[2]++;d.__proto__=b;})||(cov_dcvjwy635.b[1][3]++,function(d,b){cov_dcvjwy635.f[2]++;cov_dcvjwy635.s[3]++;for(var p in b){cov_dcvjwy635.s[4]++;if(b.hasOwnProperty(p)){cov_dcvjwy635.b[2][0]++;cov_dcvjwy635.s[5]++;d[p]=b[p];}else{cov_dcvjwy635.b[2][1]++;}}}));cov_dcvjwy635.s[6]++;return function(d,b){cov_dcvjwy635.f[3]++;cov_dcvjwy635.s[7]++;extendStatics(d,b);function __(){cov_dcvjwy635.f[4]++;cov_dcvjwy635.s[8]++;this.constructor=d;}cov_dcvjwy635.s[9]++;d.prototype=b===null?(cov_dcvjwy635.b[3][0]++,Object.create(b)):(cov_dcvjwy635.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_dcvjwy635.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_business_1=(cov_dcvjwy635.s[11]++,__webpack_require__(13));var media_service_1=(cov_dcvjwy635.s[12]++,__webpack_require__(133));var MediaBusiness=(/** @class */cov_dcvjwy635.s[13]++,function(_super){cov_dcvjwy635.f[5]++;cov_dcvjwy635.s[14]++;__extends(MediaBusiness,_super);function MediaBusiness(_a){cov_dcvjwy635.f[6]++;var wakJSC=(cov_dcvjwy635.s[15]++,_a.wakJSC),media=(cov_dcvjwy635.s[16]++,_a.media),dataClassBusiness=(cov_dcvjwy635.s[17]++,_a.dataClassBusiness),isImage=(cov_dcvjwy635.s[18]++,_a.isImage),attributeName=(cov_dcvjwy635.s[19]++,_a.attributeName),entity=(cov_dcvjwy635.s[20]++,_a.entity);var _this=(cov_dcvjwy635.s[21]++,(cov_dcvjwy635.b[4][0]++,_super.call(this,{wakJSC:wakJSC}))||(cov_dcvjwy635.b[4][1]++,this));cov_dcvjwy635.s[22]++;_this.media=media;cov_dcvjwy635.s[23]++;_this.entity=entity;cov_dcvjwy635.s[24]++;_this.dataClassBusiness=dataClassBusiness;cov_dcvjwy635.s[25]++;_this.isImage=isImage===true;cov_dcvjwy635.s[26]++;_this.service=new media_service_1.default({wakJSC:wakJSC,mediaBusiness:_this,media:media,attributeName:attributeName,dataClassBusiness:dataClassBusiness});cov_dcvjwy635.s[27]++;return _this;}cov_dcvjwy635.s[28]++;MediaBusiness.prototype._decorateMedia=function(){cov_dcvjwy635.f[7]++;cov_dcvjwy635.s[29]++;this.media.upload=this.upload.bind(this);cov_dcvjwy635.s[30]++;this.media.delete=this.delete.bind(this);};cov_dcvjwy635.s[31]++;MediaBusiness.prototype.upload=function(file){cov_dcvjwy635.f[8]++;var _this=(cov_dcvjwy635.s[32]++,this);cov_dcvjwy635.s[33]++;if(!this.entity._key){cov_dcvjwy635.b[5][0]++;cov_dcvjwy635.s[34]++;throw new Error('Media.upload: entity must be saved before uploading a media');}else{cov_dcvjwy635.b[5][1]++;}cov_dcvjwy635.s[35]++;return this.service.upload(file,file.type).then(function(dbo){cov_dcvjwy635.f[9]++;cov_dcvjwy635.s[36]++;return dbo;//FIXME
}).then(function(){cov_dcvjwy635.f[10]++;cov_dcvjwy635.s[37]++;//FIXME - crappy, force a refresh of the entity to get proper stamp and media uri
return _this.entity.fetch();});};cov_dcvjwy635.s[38]++;MediaBusiness.prototype.delete=function(){cov_dcvjwy635.f[11]++;var _this=(cov_dcvjwy635.s[39]++,this);cov_dcvjwy635.s[40]++;if(!this.entity._key){cov_dcvjwy635.b[6][0]++;cov_dcvjwy635.s[41]++;throw new Error('Media.upload: entity must be saved before deleting a media');}else{cov_dcvjwy635.b[6][1]++;}cov_dcvjwy635.s[42]++;return this.service.delete().then(function(){cov_dcvjwy635.f[12]++;cov_dcvjwy635.s[43]++;//FIXME - crappy, force a refresh of the entity to get proper stamp and media uri
return _this.entity.fetch();});};cov_dcvjwy635.s[44]++;return MediaBusiness;}(abstract_business_1.default));cov_dcvjwy635.s[45]++;exports.default=MediaBusiness;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_cdszglbfu=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\media-service.ts",hash="3a6d9f65e767b74875e461bd396d4696a4109424",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\media-service.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:25},end:{line:13,column:54}},"12":{start:{line:14,column:27},end:{line:14,column:63}},"13":{start:{line:15,column:34},end:{line:48,column:29}},"14":{start:{line:16,column:4},end:{line:16,column:36}},"15":{start:{line:18,column:21},end:{line:18,column:30}},"16":{start:{line:18,column:48},end:{line:18,column:64}},"17":{start:{line:18,column:74},end:{line:18,column:82}},"18":{start:{line:18,column:100},end:{line:18,column:116}},"19":{start:{line:18,column:138},end:{line:18,column:158}},"20":{start:{line:19,column:20},end:{line:19,column:65}},"21":{start:{line:20,column:8},end:{line:20,column:63}},"22":{start:{line:21,column:8},end:{line:21,column:50}},"23":{start:{line:22,column:8},end:{line:22,column:44}},"24":{start:{line:23,column:8},end:{line:23,column:46}},"25":{start:{line:24,column:8},end:{line:24,column:28}},"26":{start:{line:25,column:8},end:{line:25,column:44}},"27":{start:{line:26,column:8},end:{line:26,column:21}},"28":{start:{line:28,column:4},end:{line:37,column:6}},"29":{start:{line:29,column:8},end:{line:36,column:11}},"30":{start:{line:38,column:4},end:{line:46,column:6}},"31":{start:{line:39,column:8},end:{line:45,column:11}},"32":{start:{line:47,column:4},end:{line:47,column:24}},"33":{start:{line:49,column:0},end:{line:49,column:31}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:15,column:34},end:{line:15,column:35}},loc:{start:{line:15,column:52},end:{line:48,column:1}},line:15},"6":{name:"MediaService",decl:{start:{line:17,column:13},end:{line:17,column:25}},loc:{start:{line:17,column:30},end:{line:27,column:5}},line:17},"7":{name:"(anonymous_7)",decl:{start:{line:28,column:36},end:{line:28,column:37}},loc:{start:{line:28,column:62},end:{line:37,column:5}},line:28},"8":{name:"(anonymous_8)",decl:{start:{line:38,column:36},end:{line:38,column:37}},loc:{start:{line:38,column:48},end:{line:46,column:5}},line:38}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:19,column:20},end:{line:19,column:65}},type:"binary-expr",locations:[{start:{line:19,column:20},end:{line:19,column:57}},{start:{line:19,column:61},end:{line:19,column:65}}],line:19}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\media-service.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\media-service.ts"],names:[],mappings:";;;;;;;;;;;;AACA,uDAAiD;AAIjD,gEAA2D;AAI3D;IAA2B,gCAAe;IASxC,sBAAY,EACsH;YADrH,kBAAM,EAAE,gCAAa,EAAE,gBAAK,EAAE,gCAAa,EAAE,wCAAiB;QAA3E,YAGE,kBAAM,EAAC,MAAM,QAAA,EAAC,CAAC,SAQhB;QANC,KAAI,CAAC,aAAa,GAAG,iBAAiB,CAAC,SAAS,CAAC,IAAI,CAAC;QACtD,KAAI,CAAC,OAAO,GAAG,iBAAiB,CAAC,OAAO,CAAC;QACzC,KAAI,CAAC,MAAM,GAAG,aAAa,CAAC,MAAM,CAAC;QACnC,KAAI,CAAC,OAAO,GAAG,aAAa,CAAC,OAAO,CAAC;QACrC,KAAI,CAAC,KAAK,GAAG,KAAK,CAAC;QACnB,KAAI,CAAC,aAAa,GAAG,aAAa,CAAC;;IACrC,CAAC;IAEM,6BAAM,GAAb,UAAc,IAAS,EAAE,QAAgB;QACvC,MAAM,CAAC,qCAAgB,CAAC,MAAM,CAAC;YAC7B,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,OAAO,EAAE,IAAI,CAAC,OAAO;YACrB,SAAS,EAAE,IAAI,CAAC,MAAM,CAAC,IAAI;YAC3B,aAAa,EAAE,IAAI,CAAC,aAAa;YACjC,OAAO,EAAE,IAAI,CAAC,OAAO;YACrB,IAAI,MAAA;SACL,CAAC,CAAC;IACL,CAAC;IAEM,6BAAM,GAAb;QACE,MAAM,CAAC,qCAAgB,CAAC,MAAM,CAAC;YAC7B,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,OAAO,EAAE,IAAI,CAAC,OAAO;YACrB,SAAS,EAAE,IAAI,CAAC,MAAM,CAAC,IAAI;YAC3B,WAAW,EAAE,IAAI,CAAC,MAAM,CAAC,MAAM;YAC/B,aAAa,EAAE,IAAI,CAAC,aAAa;SAClC,CAAC,CAAC;IACL,CAAC;IACH,mBAAC;AAAD,CAAC,AA1CD,CAA2B,0BAAe,GA0CzC;AAED,kBAAe,YAAY,CAAC",sourcesContent:["import WakandaClient from '../../wakanda-client';\r\nimport AbstractService from './abstract-service';\r\nimport Entity from '../../presentation/entity';\r\nimport Media from '../../presentation/media';\r\nimport HttpResponse from '../http/http-response';\r\nimport {MediaBaseService} from './base/media-base-service';\r\nimport MediaBusiness from '../../business/media-business';\r\nimport DataClassBusiness from '../../business/dataclass-business';\r\n\r\nclass MediaService extends AbstractService {\r\n\r\n  private dataClassName: string;\r\n  private entity: Entity;\r\n  private isImage: boolean;\r\n  private media: Media;\r\n  private attributeName: string;\r\n  private dataURI: string;\r\n\r\n  constructor({wakJSC, mediaBusiness, media, attributeName, dataClassBusiness}:\r\n    {wakJSC: WakandaClient, mediaBusiness: MediaBusiness, media: Media, attributeName: string, dataClassBusiness: DataClassBusiness}) {\r\n\r\n    super({wakJSC});\r\n\r\n    this.dataClassName = dataClassBusiness.dataClass.name;\r\n    this.dataURI = dataClassBusiness.dataURI;\r\n    this.entity = mediaBusiness.entity;\r\n    this.isImage = mediaBusiness.isImage;\r\n    this.media = media;\r\n    this.attributeName = attributeName;\r\n  }\r\n\r\n  public upload(file: any, mimeType: string): Promise<HttpResponse> {\r\n    return MediaBaseService.upload({\r\n      httpClient: this.httpClient,\r\n      dataURI: this.dataURI,\r\n      entityKey: this.entity._key,\r\n      attributeName: this.attributeName,\r\n      isImage: this.isImage,\r\n      file\r\n    });\r\n  }\r\n\r\n  public delete(): Promise<HttpResponse> {\r\n    return MediaBaseService.delete({\r\n      httpClient: this.httpClient,\r\n      dataURI: this.dataURI,\r\n      entityKey: this.entity._key,\r\n      entityStamp: this.entity._stamp,\r\n      attributeName: this.attributeName\r\n    });\r\n  }\r\n}\r\n\r\nexport default MediaService;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_cdszglbfu.s[0]++,(cov_cdszglbfu.b[0][0]++,this)&&(cov_cdszglbfu.b[0][1]++,this.__extends)||(cov_cdszglbfu.b[0][2]++,function(){cov_cdszglbfu.f[0]++;var extendStatics=(cov_cdszglbfu.s[1]++,(cov_cdszglbfu.b[1][0]++,Object.setPrototypeOf)||(cov_cdszglbfu.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_cdszglbfu.b[1][2]++,function(d,b){cov_cdszglbfu.f[1]++;cov_cdszglbfu.s[2]++;d.__proto__=b;})||(cov_cdszglbfu.b[1][3]++,function(d,b){cov_cdszglbfu.f[2]++;cov_cdszglbfu.s[3]++;for(var p in b){cov_cdszglbfu.s[4]++;if(b.hasOwnProperty(p)){cov_cdszglbfu.b[2][0]++;cov_cdszglbfu.s[5]++;d[p]=b[p];}else{cov_cdszglbfu.b[2][1]++;}}}));cov_cdszglbfu.s[6]++;return function(d,b){cov_cdszglbfu.f[3]++;cov_cdszglbfu.s[7]++;extendStatics(d,b);function __(){cov_cdszglbfu.f[4]++;cov_cdszglbfu.s[8]++;this.constructor=d;}cov_cdszglbfu.s[9]++;d.prototype=b===null?(cov_cdszglbfu.b[3][0]++,Object.create(b)):(cov_cdszglbfu.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_cdszglbfu.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_service_1=(cov_cdszglbfu.s[11]++,__webpack_require__(14));var media_base_service_1=(cov_cdszglbfu.s[12]++,__webpack_require__(72));var MediaService=(/** @class */cov_cdszglbfu.s[13]++,function(_super){cov_cdszglbfu.f[5]++;cov_cdszglbfu.s[14]++;__extends(MediaService,_super);function MediaService(_a){cov_cdszglbfu.f[6]++;var wakJSC=(cov_cdszglbfu.s[15]++,_a.wakJSC),mediaBusiness=(cov_cdszglbfu.s[16]++,_a.mediaBusiness),media=(cov_cdszglbfu.s[17]++,_a.media),attributeName=(cov_cdszglbfu.s[18]++,_a.attributeName),dataClassBusiness=(cov_cdszglbfu.s[19]++,_a.dataClassBusiness);var _this=(cov_cdszglbfu.s[20]++,(cov_cdszglbfu.b[4][0]++,_super.call(this,{wakJSC:wakJSC}))||(cov_cdszglbfu.b[4][1]++,this));cov_cdszglbfu.s[21]++;_this.dataClassName=dataClassBusiness.dataClass.name;cov_cdszglbfu.s[22]++;_this.dataURI=dataClassBusiness.dataURI;cov_cdszglbfu.s[23]++;_this.entity=mediaBusiness.entity;cov_cdszglbfu.s[24]++;_this.isImage=mediaBusiness.isImage;cov_cdszglbfu.s[25]++;_this.media=media;cov_cdszglbfu.s[26]++;_this.attributeName=attributeName;cov_cdszglbfu.s[27]++;return _this;}cov_cdszglbfu.s[28]++;MediaService.prototype.upload=function(file,mimeType){cov_cdszglbfu.f[7]++;cov_cdszglbfu.s[29]++;return media_base_service_1.MediaBaseService.upload({httpClient:this.httpClient,dataURI:this.dataURI,entityKey:this.entity._key,attributeName:this.attributeName,isImage:this.isImage,file:file});};cov_cdszglbfu.s[30]++;MediaService.prototype.delete=function(){cov_cdszglbfu.f[8]++;cov_cdszglbfu.s[31]++;return media_base_service_1.MediaBaseService.delete({httpClient:this.httpClient,dataURI:this.dataURI,entityKey:this.entity._key,entityStamp:this.entity._stamp,attributeName:this.attributeName});};cov_cdszglbfu.s[32]++;return MediaService;}(abstract_service_1.default));cov_cdszglbfu.s[33]++;exports.default=MediaService;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_1pc6aq9lo0=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\directory-business.ts",hash="15b7a30b62b9425dc6380d10a4200966f649a289",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\directory-business.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:26},end:{line:13,column:56}},"12":{start:{line:14,column:26},end:{line:14,column:77}},"13":{start:{line:15,column:14},end:{line:15,column:33}},"14":{start:{line:16,column:39},end:{line:62,column:30}},"15":{start:{line:17,column:4},end:{line:17,column:41}},"16":{start:{line:19,column:21},end:{line:19,column:30}},"17":{start:{line:20,column:20},end:{line:20,column:65}},"18":{start:{line:21,column:8},end:{line:21,column:76}},"19":{start:{line:22,column:8},end:{line:22,column:21}},"20":{start:{line:24,column:4},end:{line:33,column:6}},"21":{start:{line:25,column:27},end:{line:25,column:79}},"22":{start:{line:26,column:8},end:{line:28,column:9}},"23":{start:{line:27,column:12},end:{line:27,column:75}},"24":{start:{line:29,column:8},end:{line:32,column:11}},"25":{start:{line:31,column:12},end:{line:31,column:78}},"26":{start:{line:34,column:4},end:{line:39,column:6}},"27":{start:{line:35,column:8},end:{line:38,column:11}},"28":{start:{line:37,column:12},end:{line:37,column:80}},"29":{start:{line:40,column:4},end:{line:48,column:6}},"30":{start:{line:41,column:8},end:{line:47,column:11}},"31":{start:{line:43,column:12},end:{line:43,column:23}},"32":{start:{line:46,column:12},end:{line:46,column:96}},"33":{start:{line:49,column:4},end:{line:60,column:6}},"34":{start:{line:50,column:8},end:{line:52,column:9}},"35":{start:{line:51,column:12},end:{line:51,column:89}},"36":{start:{line:53,column:8},end:{line:59,column:11}},"37":{start:{line:55,column:12},end:{line:55,column:24}},"38":{start:{line:58,column:12},end:{line:58,column:25}},"39":{start:{line:61,column:4},end:{line:61,column:29}},"40":{start:{line:63,column:0},end:{line:63,column:36}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:16,column:39},end:{line:16,column:40}},loc:{start:{line:16,column:57},end:{line:62,column:1}},line:16},"6":{name:"DirectoryBusiness",decl:{start:{line:18,column:13},end:{line:18,column:30}},loc:{start:{line:18,column:35},end:{line:23,column:5}},line:18},"7":{name:"(anonymous_7)",decl:{start:{line:24,column:40},end:{line:24,column:41}},loc:{start:{line:24,column:80},end:{line:33,column:5}},line:24},"8":{name:"(anonymous_8)",decl:{start:{line:30,column:19},end:{line:30,column:20}},loc:{start:{line:30,column:31},end:{line:32,column:9}},line:30},"9":{name:"(anonymous_9)",decl:{start:{line:34,column:41},end:{line:34,column:42}},loc:{start:{line:34,column:53},end:{line:39,column:5}},line:34},"10":{name:"(anonymous_10)",decl:{start:{line:36,column:19},end:{line:36,column:20}},loc:{start:{line:36,column:31},end:{line:38,column:9}},line:36},"11":{name:"(anonymous_11)",decl:{start:{line:40,column:49},end:{line:40,column:50}},loc:{start:{line:40,column:61},end:{line:48,column:5}},line:40},"12":{name:"(anonymous_12)",decl:{start:{line:42,column:18},end:{line:42,column:19}},loc:{start:{line:42,column:33},end:{line:44,column:9}},line:42},"13":{name:"(anonymous_13)",decl:{start:{line:45,column:19},end:{line:45,column:20}},loc:{start:{line:45,column:31},end:{line:47,column:9}},line:45},"14":{name:"(anonymous_14)",decl:{start:{line:49,column:58},end:{line:49,column:59}},loc:{start:{line:49,column:75},end:{line:60,column:5}},line:49},"15":{name:"(anonymous_15)",decl:{start:{line:54,column:18},end:{line:54,column:19}},loc:{start:{line:54,column:30},end:{line:56,column:9}},line:54},"16":{name:"(anonymous_16)",decl:{start:{line:57,column:19},end:{line:57,column:20}},loc:{start:{line:57,column:31},end:{line:59,column:9}},line:57}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:20,column:20},end:{line:20,column:65}},type:"binary-expr",locations:[{start:{line:20,column:20},end:{line:20,column:57}},{start:{line:20,column:61},end:{line:20,column:65}}],line:20},"5":{loc:{start:{line:25,column:27},end:{line:25,column:79}},type:"binary-expr",locations:[{start:{line:25,column:27},end:{line:25,column:35}},{start:{line:25,column:39},end:{line:25,column:79}}],line:25},"6":{loc:{start:{line:26,column:8},end:{line:28,column:9}},type:"if",locations:[{start:{line:26,column:8},end:{line:28,column:9}},{start:{line:26,column:8},end:{line:28,column:9}}],line:26},"7":{loc:{start:{line:26,column:12},end:{line:26,column:68}},type:"binary-expr",locations:[{start:{line:26,column:12},end:{line:26,column:47}},{start:{line:26,column:51},end:{line:26,column:68}}],line:26},"8":{loc:{start:{line:50,column:8},end:{line:52,column:9}},type:"if",locations:[{start:{line:50,column:8},end:{line:52,column:9}},{start:{line:50,column:8},end:{line:52,column:9}}],line:50}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\directory-business.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\business\\directory-business.ts"],names:[],mappings:";;;;;;;;;;;;AACA,yDAAmD;AACnD,8EAAwE;AACxE,kCAA6B;AAQ7B;IAAgC,qCAAgB;IAI9C,2BAAY,EAAiC;YAAhC,kBAAM;QAAnB,YACE,kBAAM,EAAC,MAAM,QAAA,EAAC,CAAC,SAGhB;QADC,KAAI,CAAC,OAAO,GAAG,IAAI,2BAAgB,CAAC,EAAC,MAAM,QAAA,EAAC,CAAC,CAAC;;IAChD,CAAC;IAEM,iCAAK,GAAZ,UAAa,QAAgB,EAAE,QAAgB,EAAE,QAAiB;QAEhE,IAAI,YAAY,GAAG,QAAQ,IAAI,eAAK,CAAC,wBAAwB,CAAC;QAE9D,EAAE,CAAC,CAAC,CAAC,CAAC,OAAO,YAAY,KAAK,QAAQ,CAAC,IAAI,YAAY,IAAI,CAAC,CAAC,CAAC,CAAC;YAC7D,MAAM,IAAI,KAAK,CAAC,6CAA6C,CAAC,CAAC;QACjE,CAAC;QAED,MAAM,CAAC,IAAI,CAAC,OAAO,CAAC,KAAK,CAAC,QAAQ,EAAE,QAAQ,EAAE,YAAY,CAAC;aACxD,KAAK,CAAC;YACL,MAAM,CAAC,OAAO,CAAC,MAAM,CAAC,IAAI,KAAK,CAAC,+BAA+B,CAAC,CAAC,CAAC;QACpE,CAAC,CAAC,CAAC;IACP,CAAC;IAEM,kCAAM,GAAb;QACE,MAAM,CAAC,IAAI,CAAC,OAAO,CAAC,MAAM,EAAE;aACzB,KAAK,CAAC;YACL,MAAM,CAAC,OAAO,CAAC,MAAM,CAAC,IAAI,KAAK,CAAC,iCAAiC,CAAC,CAAC,CAAC;QACtE,CAAC,CAAC,CAAC;IACP,CAAC;IAEM,0CAAc,GAArB;QACE,MAAM,CAAC,IAAI,CAAC,OAAO,CAAC,cAAc,EAAE;aACjC,IAAI,CAAC,UAAA,GAAG;YACP,MAAM,CAAC,GAAG,CAAC;QACb,CAAC,CAAC;aACD,KAAK,CAAC;YACL,MAAM,CAAC,OAAO,CAAC,MAAM,CAAC,IAAI,KAAK,CAAC,iDAAiD,CAAC,CAAC,CAAC;QACtF,CAAC,CAAC,CAAC;IACP,CAAC;IAEM,mDAAuB,GAA9B,UAA+B,KAAa;QAE1C,EAAE,CAAC,CAAC,CAAC,CAAC,OAAO,KAAK,KAAK,QAAQ,CAAC,CAAC,CAAC,CAAC;YACjC,MAAM,IAAI,KAAK,CAAC,2DAA2D,CAAC,CAAC;QAC/E,CAAC;QAED,MAAM,CAAC,IAAI,CAAC,OAAO,CAAC,uBAAuB,CAAC,KAAK,CAAC;aAC/C,IAAI,CAAC;YACJ,MAAM,CAAC,IAAI,CAAC;QACd,CAAC,CAAC;aACD,KAAK,CAAC;YACL,MAAM,CAAC,KAAK,CAAC;QACf,CAAC,CAAC,CAAC;IACP,CAAC;IACH,wBAAC;AAAD,CAAC,AAvDD,CAAgC,2BAAgB,GAuD/C;AAED,kBAAe,iBAAiB,CAAC",sourcesContent:["import WakandaClient from '../wakanda-client';\r\nimport AbstractBusiness from './abstract-business';\r\nimport DirectoryService from '../data-access/service/directory-service';\r\nimport Const from '../const';\r\n\r\nexport interface ICurrentUserDBO {\r\n  userName: string;\r\n  fullName: string;\r\n  ID: string|number;\r\n}\r\n\r\nclass DirectoryBusiness extends AbstractBusiness {\r\n\r\n  private service: DirectoryService;\r\n\r\n  constructor({wakJSC}: {wakJSC: WakandaClient}) {\r\n    super({wakJSC});\r\n\r\n    this.service = new DirectoryService({wakJSC});\r\n  }\r\n\r\n  public login(username: string, password: string, duration?: number): Promise<boolean> {\r\n\r\n    let durationTime = duration || Const.DEFAULT_SESSION_DURATION;\r\n\r\n    if (!(typeof durationTime === 'number') || durationTime <= 0) {\r\n      throw new Error('Directory.login: invalid duration parameter');\r\n    }\r\n\r\n    return this.service.login(username, password, durationTime)\r\n      .catch(() => {\r\n        return Promise.reject(new Error('Directory.login: Unauthorized'));\r\n      });\r\n  }\r\n\r\n  public logout(): Promise<boolean> {\r\n    return this.service.logout()\r\n      .catch(() => {\r\n        return Promise.reject(new Error('Directory.logout: logout failed'));\r\n      });\r\n  }\r\n\r\n  public getCurrentUser(): Promise<ICurrentUserDBO> {\r\n    return this.service.getCurrentUser()\r\n      .then(dbo => {\r\n        return dbo;\r\n      })\r\n      .catch(() => {\r\n        return Promise.reject(new Error('Directory.getCurrentUser: user is not logged in'));\r\n      });\r\n  }\r\n\r\n  public getCurrentUserBelongsTo(group: string): Promise<boolean> {\r\n\r\n    if (!(typeof group === 'string')) {\r\n      throw new Error('Directory.getCurrentUserBelongsTo: group must be a string');\r\n    }\r\n\r\n    return this.service.getCurrentUserBelongsTo(group)\r\n      .then(() => {\r\n        return true;\r\n      })\r\n      .catch(() => {\r\n        return false;\r\n      });\r\n  }\r\n}\r\n\r\nexport default DirectoryBusiness;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_1pc6aq9lo0.s[0]++,(cov_1pc6aq9lo0.b[0][0]++,this)&&(cov_1pc6aq9lo0.b[0][1]++,this.__extends)||(cov_1pc6aq9lo0.b[0][2]++,function(){cov_1pc6aq9lo0.f[0]++;var extendStatics=(cov_1pc6aq9lo0.s[1]++,(cov_1pc6aq9lo0.b[1][0]++,Object.setPrototypeOf)||(cov_1pc6aq9lo0.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_1pc6aq9lo0.b[1][2]++,function(d,b){cov_1pc6aq9lo0.f[1]++;cov_1pc6aq9lo0.s[2]++;d.__proto__=b;})||(cov_1pc6aq9lo0.b[1][3]++,function(d,b){cov_1pc6aq9lo0.f[2]++;cov_1pc6aq9lo0.s[3]++;for(var p in b){cov_1pc6aq9lo0.s[4]++;if(b.hasOwnProperty(p)){cov_1pc6aq9lo0.b[2][0]++;cov_1pc6aq9lo0.s[5]++;d[p]=b[p];}else{cov_1pc6aq9lo0.b[2][1]++;}}}));cov_1pc6aq9lo0.s[6]++;return function(d,b){cov_1pc6aq9lo0.f[3]++;cov_1pc6aq9lo0.s[7]++;extendStatics(d,b);function __(){cov_1pc6aq9lo0.f[4]++;cov_1pc6aq9lo0.s[8]++;this.constructor=d;}cov_1pc6aq9lo0.s[9]++;d.prototype=b===null?(cov_1pc6aq9lo0.b[3][0]++,Object.create(b)):(cov_1pc6aq9lo0.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_1pc6aq9lo0.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_business_1=(cov_1pc6aq9lo0.s[11]++,__webpack_require__(13));var directory_service_1=(cov_1pc6aq9lo0.s[12]++,__webpack_require__(135));var const_1=(cov_1pc6aq9lo0.s[13]++,__webpack_require__(40));var DirectoryBusiness=(/** @class */cov_1pc6aq9lo0.s[14]++,function(_super){cov_1pc6aq9lo0.f[5]++;cov_1pc6aq9lo0.s[15]++;__extends(DirectoryBusiness,_super);function DirectoryBusiness(_a){cov_1pc6aq9lo0.f[6]++;var wakJSC=(cov_1pc6aq9lo0.s[16]++,_a.wakJSC);var _this=(cov_1pc6aq9lo0.s[17]++,(cov_1pc6aq9lo0.b[4][0]++,_super.call(this,{wakJSC:wakJSC}))||(cov_1pc6aq9lo0.b[4][1]++,this));cov_1pc6aq9lo0.s[18]++;_this.service=new directory_service_1.default({wakJSC:wakJSC});cov_1pc6aq9lo0.s[19]++;return _this;}cov_1pc6aq9lo0.s[20]++;DirectoryBusiness.prototype.login=function(username,password,duration){cov_1pc6aq9lo0.f[7]++;var durationTime=(cov_1pc6aq9lo0.s[21]++,(cov_1pc6aq9lo0.b[5][0]++,duration)||(cov_1pc6aq9lo0.b[5][1]++,const_1.default.DEFAULT_SESSION_DURATION));cov_1pc6aq9lo0.s[22]++;if((cov_1pc6aq9lo0.b[7][0]++,!(typeof durationTime==='number'))||(cov_1pc6aq9lo0.b[7][1]++,durationTime<=0)){cov_1pc6aq9lo0.b[6][0]++;cov_1pc6aq9lo0.s[23]++;throw new Error('Directory.login: invalid duration parameter');}else{cov_1pc6aq9lo0.b[6][1]++;}cov_1pc6aq9lo0.s[24]++;return this.service.login(username,password,durationTime).catch(function(){cov_1pc6aq9lo0.f[8]++;cov_1pc6aq9lo0.s[25]++;return Promise.reject(new Error('Directory.login: Unauthorized'));});};cov_1pc6aq9lo0.s[26]++;DirectoryBusiness.prototype.logout=function(){cov_1pc6aq9lo0.f[9]++;cov_1pc6aq9lo0.s[27]++;return this.service.logout().catch(function(){cov_1pc6aq9lo0.f[10]++;cov_1pc6aq9lo0.s[28]++;return Promise.reject(new Error('Directory.logout: logout failed'));});};cov_1pc6aq9lo0.s[29]++;DirectoryBusiness.prototype.getCurrentUser=function(){cov_1pc6aq9lo0.f[11]++;cov_1pc6aq9lo0.s[30]++;return this.service.getCurrentUser().then(function(dbo){cov_1pc6aq9lo0.f[12]++;cov_1pc6aq9lo0.s[31]++;return dbo;}).catch(function(){cov_1pc6aq9lo0.f[13]++;cov_1pc6aq9lo0.s[32]++;return Promise.reject(new Error('Directory.getCurrentUser: user is not logged in'));});};cov_1pc6aq9lo0.s[33]++;DirectoryBusiness.prototype.getCurrentUserBelongsTo=function(group){cov_1pc6aq9lo0.f[14]++;cov_1pc6aq9lo0.s[34]++;if(!(typeof group==='string')){cov_1pc6aq9lo0.b[8][0]++;cov_1pc6aq9lo0.s[35]++;throw new Error('Directory.getCurrentUserBelongsTo: group must be a string');}else{cov_1pc6aq9lo0.b[8][1]++;}cov_1pc6aq9lo0.s[36]++;return this.service.getCurrentUserBelongsTo(group).then(function(){cov_1pc6aq9lo0.f[15]++;cov_1pc6aq9lo0.s[37]++;return true;}).catch(function(){cov_1pc6aq9lo0.f[16]++;cov_1pc6aq9lo0.s[38]++;return false;});};cov_1pc6aq9lo0.s[39]++;return DirectoryBusiness;}(abstract_business_1.default));cov_1pc6aq9lo0.s[40]++;exports.default=DirectoryBusiness;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_1ovh28vunh=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\directory-service.ts",hash="02f558738686b94e73786f09dbce593a2d89fab1",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\directory-service.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:25},end:{line:13,column:54}},"12":{start:{line:14,column:31},end:{line:14,column:71}},"13":{start:{line:15,column:38},end:{line:45,column:29}},"14":{start:{line:16,column:4},end:{line:16,column:40}},"15":{start:{line:18,column:8},end:{line:18,column:72}},"16":{start:{line:20,column:4},end:{line:27,column:6}},"17":{start:{line:21,column:8},end:{line:26,column:11}},"18":{start:{line:28,column:4},end:{line:32,column:6}},"19":{start:{line:29,column:8},end:{line:31,column:11}},"20":{start:{line:33,column:4},end:{line:37,column:6}},"21":{start:{line:34,column:8},end:{line:36,column:11}},"22":{start:{line:38,column:4},end:{line:43,column:6}},"23":{start:{line:39,column:8},end:{line:42,column:11}},"24":{start:{line:44,column:4},end:{line:44,column:28}},"25":{start:{line:46,column:0},end:{line:46,column:35}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:15,column:38},end:{line:15,column:39}},loc:{start:{line:15,column:56},end:{line:45,column:1}},line:15},"6":{name:"DirectoryService",decl:{start:{line:17,column:13},end:{line:17,column:29}},loc:{start:{line:17,column:32},end:{line:19,column:5}},line:17},"7":{name:"(anonymous_7)",decl:{start:{line:20,column:39},end:{line:20,column:40}},loc:{start:{line:20,column:79},end:{line:27,column:5}},line:20},"8":{name:"(anonymous_8)",decl:{start:{line:28,column:40},end:{line:28,column:41}},loc:{start:{line:28,column:52},end:{line:32,column:5}},line:28},"9":{name:"(anonymous_9)",decl:{start:{line:33,column:48},end:{line:33,column:49}},loc:{start:{line:33,column:60},end:{line:37,column:5}},line:33},"10":{name:"(anonymous_10)",decl:{start:{line:38,column:57},end:{line:38,column:58}},loc:{start:{line:38,column:74},end:{line:43,column:5}},line:38}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:18,column:15},end:{line:18,column:71}},type:"binary-expr",locations:[{start:{line:18,column:15},end:{line:18,column:30}},{start:{line:18,column:34},end:{line:18,column:63}},{start:{line:18,column:67},end:{line:18,column:71}}],line:18}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\directory-service.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\service\\directory-service.ts"],names:[],mappings:";;;;;;;;;;;;AAAA,uDAAiD;AAEjD,wEAAmE;AAEnE;IAA+B,oCAAe;IAA9C;;IA6BA,CAAC;IA3BQ,gCAAK,GAAZ,UAAa,QAAgB,EAAE,QAAgB,EAAE,QAAgB;QAC/D,MAAM,CAAC,6CAAoB,CAAC,KAAK,CAAC;YAChC,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,QAAQ,UAAA;YACR,QAAQ,UAAA;YACR,QAAQ,UAAA;SACT,CAAC,CAAC;IACL,CAAC;IAEM,iCAAM,GAAb;QACE,MAAM,CAAC,6CAAoB,CAAC,MAAM,CAAC;YACjC,UAAU,EAAE,IAAI,CAAC,UAAU;SAC5B,CAAC,CAAC;IACL,CAAC;IAEM,yCAAc,GAArB;QACE,MAAM,CAAC,6CAAoB,CAAC,cAAc,CAAC;YACzC,UAAU,EAAE,IAAI,CAAC,UAAU;SAC5B,CAAC,CAAC;IACL,CAAC;IAEM,kDAAuB,GAA9B,UAA+B,KAAa;QAC1C,MAAM,CAAC,6CAAoB,CAAC,uBAAuB,CAAC;YAClD,UAAU,EAAE,IAAI,CAAC,UAAU;YAC3B,KAAK,OAAA;SACN,CAAC,CAAC;IACL,CAAC;IACH,uBAAC;AAAD,CAAC,AA7BD,CAA+B,0BAAe,GA6B7C;AAED,kBAAe,gBAAgB,CAAC",sourcesContent:["import AbstractService from './abstract-service';\r\nimport {ICurrentUserDBO} from '../../business/directory-business';\r\nimport {DirectoryBaseService} from './base/directory-base-service';\r\n\r\nclass DirectoryService extends AbstractService {\r\n\r\n  public login(username: string, password: string, duration: number): Promise<boolean> {\r\n    return DirectoryBaseService.login({\r\n      httpClient: this.httpClient,\r\n      username,\r\n      password,\r\n      duration\r\n    });\r\n  }\r\n\r\n  public logout(): Promise<boolean> {\r\n    return DirectoryBaseService.logout({\r\n      httpClient: this.httpClient\r\n    });\r\n  }\r\n\r\n  public getCurrentUser(): Promise<ICurrentUserDBO> {\r\n    return DirectoryBaseService.getCurrentUser({\r\n      httpClient: this.httpClient\r\n    });\r\n  }\r\n\r\n  public getCurrentUserBelongsTo(group: string): Promise<boolean> {\r\n    return DirectoryBaseService.getCurrentUserBelongsTo({\r\n      httpClient: this.httpClient,\r\n      group\r\n    });\r\n  }\r\n}\r\n\r\nexport default DirectoryService;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_1ovh28vunh.s[0]++,(cov_1ovh28vunh.b[0][0]++,this)&&(cov_1ovh28vunh.b[0][1]++,this.__extends)||(cov_1ovh28vunh.b[0][2]++,function(){cov_1ovh28vunh.f[0]++;var extendStatics=(cov_1ovh28vunh.s[1]++,(cov_1ovh28vunh.b[1][0]++,Object.setPrototypeOf)||(cov_1ovh28vunh.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_1ovh28vunh.b[1][2]++,function(d,b){cov_1ovh28vunh.f[1]++;cov_1ovh28vunh.s[2]++;d.__proto__=b;})||(cov_1ovh28vunh.b[1][3]++,function(d,b){cov_1ovh28vunh.f[2]++;cov_1ovh28vunh.s[3]++;for(var p in b){cov_1ovh28vunh.s[4]++;if(b.hasOwnProperty(p)){cov_1ovh28vunh.b[2][0]++;cov_1ovh28vunh.s[5]++;d[p]=b[p];}else{cov_1ovh28vunh.b[2][1]++;}}}));cov_1ovh28vunh.s[6]++;return function(d,b){cov_1ovh28vunh.f[3]++;cov_1ovh28vunh.s[7]++;extendStatics(d,b);function __(){cov_1ovh28vunh.f[4]++;cov_1ovh28vunh.s[8]++;this.constructor=d;}cov_1ovh28vunh.s[9]++;d.prototype=b===null?(cov_1ovh28vunh.b[3][0]++,Object.create(b)):(cov_1ovh28vunh.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_1ovh28vunh.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var abstract_service_1=(cov_1ovh28vunh.s[11]++,__webpack_require__(14));var directory_base_service_1=(cov_1ovh28vunh.s[12]++,__webpack_require__(74));var DirectoryService=(/** @class */cov_1ovh28vunh.s[13]++,function(_super){cov_1ovh28vunh.f[5]++;cov_1ovh28vunh.s[14]++;__extends(DirectoryService,_super);function DirectoryService(){cov_1ovh28vunh.f[6]++;cov_1ovh28vunh.s[15]++;return(cov_1ovh28vunh.b[4][0]++,_super!==null)&&(cov_1ovh28vunh.b[4][1]++,_super.apply(this,arguments))||(cov_1ovh28vunh.b[4][2]++,this);}cov_1ovh28vunh.s[16]++;DirectoryService.prototype.login=function(username,password,duration){cov_1ovh28vunh.f[7]++;cov_1ovh28vunh.s[17]++;return directory_base_service_1.DirectoryBaseService.login({httpClient:this.httpClient,username:username,password:password,duration:duration});};cov_1ovh28vunh.s[18]++;DirectoryService.prototype.logout=function(){cov_1ovh28vunh.f[8]++;cov_1ovh28vunh.s[19]++;return directory_base_service_1.DirectoryBaseService.logout({httpClient:this.httpClient});};cov_1ovh28vunh.s[20]++;DirectoryService.prototype.getCurrentUser=function(){cov_1ovh28vunh.f[9]++;cov_1ovh28vunh.s[21]++;return directory_base_service_1.DirectoryBaseService.getCurrentUser({httpClient:this.httpClient});};cov_1ovh28vunh.s[22]++;DirectoryService.prototype.getCurrentUserBelongsTo=function(group){cov_1ovh28vunh.f[10]++;cov_1ovh28vunh.s[23]++;return directory_base_service_1.DirectoryBaseService.getCurrentUserBelongsTo({httpClient:this.httpClient,group:group});};cov_1ovh28vunh.s[24]++;return DirectoryService;}(abstract_service_1.default));cov_1ovh28vunh.s[25]++;exports.default=DirectoryService;

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = {"name":"wakanda-client","main":"dist/wakanda-client.node.js","version":"2.0.0","description":"Wakanda Client allows you to easily interact with Wakanda Server on a JavaScript (browser or node) environment","typings":"dist/wakanda-client.d.ts","browser":"dist/wakanda-client.min.js","repository":"wakanda/wakanda-javascript-client","scripts":{"watch":"webpack --progress --colors --watch","build":"webpack --progress --colors && npm run minify","minify":"webpack --progress --colors --config webpack.prod.js","test:all":"npm run test:karma && npm run test:node","test:karma":"karma start","test:node":"mocha test/bootstrap.js test/spec/**/*.spec.js","test":"node runTests.js","test-server:record":"node test/connect/server.js record","serve":"concurrently -r \"npm run watch\" \"gulp serve\"","tsc":"tsc","codecov":"cat coverage/*/lcov.info | codecov"},"author":"Wakanda SAS","license":"MIT","devDependencies":{"babel-core":"^6.26.0","babel-loader":"^7.1.2","babel-preset-env":"^1.6.1","chai":"^4.1.2","chalk":"^2.3.0","codecov.io":"^0.1.6","concurrently":"^3.5.0","connect":"^3.6.5","connect-prism":"git+https://git@github.com/seglo/connect-prism.git","eslint":"^4.11.0","eslint-loader":"^1.9.0","gulp":"^3.9.1","gulp-connect":"^5.0.0","http-proxy-middleware":"^0.17.4","istanbul-instrumenter-loader":"^3.0.0","karma":"^1.7.1","karma-chai":"^0.1.0","karma-coverage":"^1.1.1","karma-coverage-istanbul-reporter":"^1.3.0","karma-mocha":"^1.3.0","karma-phantomjs-launcher":"^1.0.4","karma-verbose-reporter":"0.0.6","lodash":"^4.17.4","mocha":"^4.0.1","path":"^0.12.7","phantomjs-prebuilt":"^2.1.16","ts-loader":"^3.1.1","tslint":"^5.8.0","tslint-loader":"^3.5.3","typescript":"^2.6.1","webpack":"^3.8.1"},"dependencies":{"core-js":"^2.5.1","request":"^2.83.0"}}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_2ror3rsntl=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\http\\browser-http-client.ts",hash="9cd1157a524c304ef18328a4558c9bbb3a8ab3b6",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\http\\browser-http-client.ts",statementMap:{"0":{start:{line:2,column:16},end:{line:11,column:4}},"1":{start:{line:3,column:24},end:{line:5,column:82}},"2":{start:{line:4,column:65},end:{line:4,column:81}},"3":{start:{line:5,column:26},end:{line:5,column:80}},"4":{start:{line:5,column:43},end:{line:5,column:80}},"5":{start:{line:5,column:68},end:{line:5,column:80}},"6":{start:{line:6,column:4},end:{line:10,column:6}},"7":{start:{line:7,column:8},end:{line:7,column:28}},"8":{start:{line:8,column:24},end:{line:8,column:45}},"9":{start:{line:9,column:8},end:{line:9,column:93}},"10":{start:{line:12,column:0},end:{line:12,column:62}},"11":{start:{line:13,column:20},end:{line:13,column:44}},"12":{start:{line:14,column:22},end:{line:14,column:48}},"13":{start:{line:15,column:24},end:{line:15,column:65}},"14":{start:{line:16,column:39},end:{line:76,column:27}},"15":{start:{line:17,column:4},end:{line:17,column:41}},"16":{start:{line:19,column:24},end:{line:19,column:36}},"17":{start:{line:20,column:20},end:{line:20,column:71}},"18":{start:{line:21,column:8},end:{line:21,column:47}},"19":{start:{line:22,column:8},end:{line:22,column:21}},"20":{start:{line:24,column:4},end:{line:37,column:6}},"21":{start:{line:25,column:18},end:{line:25,column:24}},"22":{start:{line:25,column:35},end:{line:25,column:44}},"23":{start:{line:26,column:8},end:{line:34,column:9}},"24":{start:{line:27,column:22},end:{line:27,column:83}},"25":{start:{line:28,column:12},end:{line:30,column:13}},"26":{start:{line:29,column:16},end:{line:29,column:44}},"27":{start:{line:33,column:12},end:{line:33,column:37}},"28":{start:{line:35,column:21},end:{line:35,column:78}},"29":{start:{line:36,column:8},end:{line:36,column:68}},"30":{start:{line:38,column:4},end:{line:45,column:6}},"31":{start:{line:39,column:18},end:{line:39,column:24}},"32":{start:{line:40,column:22},end:{line:43,column:19}},"33":{start:{line:44,column:8},end:{line:44,column:63}},"34":{start:{line:46,column:4},end:{line:64,column:6}},"35":{start:{line:47,column:18},end:{line:47,column:24}},"36":{start:{line:47,column:33},end:{line:47,column:40}},"37":{start:{line:47,column:51},end:{line:47,column:60}},"38":{start:{line:48,column:8},end:{line:56,column:9}},"39":{start:{line:49,column:22},end:{line:49,column:96}},"40":{start:{line:50,column:12},end:{line:52,column:13}},"41":{start:{line:51,column:16},end:{line:51,column:44}},"42":{start:{line:55,column:12},end:{line:55,column:37}},"43":{start:{line:57,column:22},end:{line:61,column:19}},"44":{start:{line:62,column:21},end:{line:62,column:68}},"45":{start:{line:63,column:8},end:{line:63,column:69}},"46":{start:{line:65,column:4},end:{line:74,column:6}},"47":{start:{line:66,column:22},end:{line:66,column:32}},"48":{start:{line:67,column:8},end:{line:73,column:11}},"49":{start:{line:68,column:12},end:{line:72,column:15}},"50":{start:{line:75,column:4},end:{line:75,column:29}},"51":{start:{line:77,column:0},end:{line:77,column:36}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:45},end:{line:2,column:46}},loc:{start:{line:2,column:57},end:{line:11,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:4,column:47},end:{line:4,column:48}},loc:{start:{line:4,column:63},end:{line:4,column:83}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:5,column:8},end:{line:5,column:9}},loc:{start:{line:5,column:24},end:{line:5,column:82}},line:5},"3":{name:"(anonymous_3)",decl:{start:{line:6,column:11},end:{line:6,column:12}},loc:{start:{line:6,column:27},end:{line:10,column:5}},line:6},"4":{name:"__",decl:{start:{line:8,column:17},end:{line:8,column:19}},loc:{start:{line:8,column:22},end:{line:8,column:47}},line:8},"5":{name:"(anonymous_5)",decl:{start:{line:16,column:39},end:{line:16,column:40}},loc:{start:{line:16,column:57},end:{line:76,column:1}},line:16},"6":{name:"BrowserHttpClient",decl:{start:{line:18,column:13},end:{line:18,column:30}},loc:{start:{line:18,column:35},end:{line:23,column:5}},line:18},"7":{name:"(anonymous_7)",decl:{start:{line:24,column:38},end:{line:24,column:39}},loc:{start:{line:24,column:52},end:{line:37,column:5}},line:24},"8":{name:"(anonymous_8)",decl:{start:{line:38,column:57},end:{line:38,column:58}},loc:{start:{line:38,column:71},end:{line:45,column:5}},line:38},"9":{name:"(anonymous_9)",decl:{start:{line:46,column:39},end:{line:46,column:40}},loc:{start:{line:46,column:53},end:{line:64,column:5}},line:46},"10":{name:"(anonymous_10)",decl:{start:{line:65,column:55},end:{line:65,column:56}},loc:{start:{line:65,column:69},end:{line:74,column:5}},line:65},"11":{name:"(anonymous_11)",decl:{start:{line:67,column:28},end:{line:67,column:29}},loc:{start:{line:67,column:43},end:{line:73,column:9}},line:67}},branchMap:{"0":{loc:{start:{line:2,column:16},end:{line:11,column:4}},type:"binary-expr",locations:[{start:{line:2,column:17},end:{line:2,column:21}},{start:{line:2,column:25},end:{line:2,column:39}},{start:{line:2,column:44},end:{line:11,column:4}}],line:2},"1":{loc:{start:{line:3,column:24},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:3,column:24},end:{line:3,column:45}},{start:{line:4,column:9},end:{line:4,column:43}},{start:{line:4,column:47},end:{line:4,column:83}},{start:{line:5,column:8},end:{line:5,column:82}}],line:3},"2":{loc:{start:{line:5,column:43},end:{line:5,column:80}},type:"if",locations:[{start:{line:5,column:43},end:{line:5,column:80}},{start:{line:5,column:43},end:{line:5,column:80}}],line:5},"3":{loc:{start:{line:9,column:22},end:{line:9,column:92}},type:"cond-expr",locations:[{start:{line:9,column:35},end:{line:9,column:51}},{start:{line:9,column:55},end:{line:9,column:91}}],line:9},"4":{loc:{start:{line:20,column:20},end:{line:20,column:71}},type:"binary-expr",locations:[{start:{line:20,column:20},end:{line:20,column:63}},{start:{line:20,column:67},end:{line:20,column:71}}],line:20},"5":{loc:{start:{line:28,column:12},end:{line:30,column:13}},type:"if",locations:[{start:{line:28,column:12},end:{line:30,column:13}},{start:{line:28,column:12},end:{line:30,column:13}}],line:28},"6":{loc:{start:{line:50,column:12},end:{line:52,column:13}},type:"if",locations:[{start:{line:50,column:12},end:{line:52,column:13}},{start:{line:50,column:12},end:{line:52,column:13}}],line:50}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},b:{"0":[0,0,0],"1":[0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\http\\browser-http-client.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\http\\browser-http-client.ts"],names:[],mappings:"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",sourcesContent:["import {HttpClient, IGetRequestOption, IPostRequestOption} from './http-client';\r\nimport HttpResponse from './http-response';\r\n\r\nconst AureliaHttpClient: any = require('aurelia-http-client').HttpClient;\r\n\r\nclass BrowserHttpClient extends HttpClient {\r\n\r\n  private client: any;\r\n\r\n  constructor({apiPrefix}: {apiPrefix: string}) {\r\n    super({apiPrefix});\r\n    this.client = new AureliaHttpClient();\r\n  }\r\n\r\n  public get({uri, params}: IGetRequestOption): Promise<HttpResponse> {\r\n    try {\r\n      let res = super.get({uri, params});\r\n      if (res !== null) {\r\n        return Promise.resolve(res);\r\n      }\r\n    }\r\n    catch (e) {\r\n      return <any>Promise.reject(e);\r\n    }\r\n\r\n    let result = this._getWithoutInterceptor({uri, params});\r\n    return super.responseGet(uri, result);\r\n  }\r\n\r\n  private _getWithoutInterceptor({uri}: IGetRequestOption): Promise<HttpResponse> {\r\n    let request = this.client.createRequest(this.prefix + uri)\r\n      .asGet()\r\n      .withCredentials(true)\r\n      .send();\r\n\r\n    return this._httpResponseAdaptor({request});\r\n  }\r\n\r\n  public post({uri, data, binary}: IPostRequestOption): Promise<HttpResponse> {\r\n    try {\r\n      let res = super.post({uri, data, binary});\r\n      if (res !== null) {\r\n        return Promise.resolve(res);\r\n      }\r\n    }\r\n    catch (e) {\r\n      return <any>Promise.reject(e);\r\n    }\r\n\r\n    let request = this.client.createRequest(this.prefix + uri)\r\n      .asPost()\r\n      .withContent(data)\r\n      .withCredentials(true)\r\n      .send();\r\n\r\n    let result = this._httpResponseAdaptor({request});\r\n    return super.responsePost(uri, result);\r\n  }\r\n\r\n  private _httpResponseAdaptor({request}: {request: any}): Promise<HttpResponse> {\r\n    return request.then((res: any) => {\r\n      return new HttpResponse({\r\n        statusCode: res.statusCode,\r\n        headers: [],\r\n        body: res.response\r\n      });\r\n    });\r\n  }\r\n}\r\n\r\nexport default BrowserHttpClient;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __extends=(cov_2ror3rsntl.s[0]++,(cov_2ror3rsntl.b[0][0]++,this)&&(cov_2ror3rsntl.b[0][1]++,this.__extends)||(cov_2ror3rsntl.b[0][2]++,function(){cov_2ror3rsntl.f[0]++;var extendStatics=(cov_2ror3rsntl.s[1]++,(cov_2ror3rsntl.b[1][0]++,Object.setPrototypeOf)||(cov_2ror3rsntl.b[1][1]++,{__proto__:[]}instanceof Array)&&(cov_2ror3rsntl.b[1][2]++,function(d,b){cov_2ror3rsntl.f[1]++;cov_2ror3rsntl.s[2]++;d.__proto__=b;})||(cov_2ror3rsntl.b[1][3]++,function(d,b){cov_2ror3rsntl.f[2]++;cov_2ror3rsntl.s[3]++;for(var p in b){cov_2ror3rsntl.s[4]++;if(b.hasOwnProperty(p)){cov_2ror3rsntl.b[2][0]++;cov_2ror3rsntl.s[5]++;d[p]=b[p];}else{cov_2ror3rsntl.b[2][1]++;}}}));cov_2ror3rsntl.s[6]++;return function(d,b){cov_2ror3rsntl.f[3]++;cov_2ror3rsntl.s[7]++;extendStatics(d,b);function __(){cov_2ror3rsntl.f[4]++;cov_2ror3rsntl.s[8]++;this.constructor=d;}cov_2ror3rsntl.s[9]++;d.prototype=b===null?(cov_2ror3rsntl.b[3][0]++,Object.create(b)):(cov_2ror3rsntl.b[3][1]++,(__.prototype=b.prototype,new __()));};}()));cov_2ror3rsntl.s[10]++;Object.defineProperty(exports,"__esModule",{value:true});var http_client_1=(cov_2ror3rsntl.s[11]++,__webpack_require__(138));var http_response_1=(cov_2ror3rsntl.s[12]++,__webpack_require__(139));var AureliaHttpClient=(cov_2ror3rsntl.s[13]++,__webpack_require__(140).HttpClient);var BrowserHttpClient=(/** @class */cov_2ror3rsntl.s[14]++,function(_super){cov_2ror3rsntl.f[5]++;cov_2ror3rsntl.s[15]++;__extends(BrowserHttpClient,_super);function BrowserHttpClient(_a){cov_2ror3rsntl.f[6]++;var apiPrefix=(cov_2ror3rsntl.s[16]++,_a.apiPrefix);var _this=(cov_2ror3rsntl.s[17]++,(cov_2ror3rsntl.b[4][0]++,_super.call(this,{apiPrefix:apiPrefix}))||(cov_2ror3rsntl.b[4][1]++,this));cov_2ror3rsntl.s[18]++;_this.client=new AureliaHttpClient();cov_2ror3rsntl.s[19]++;return _this;}cov_2ror3rsntl.s[20]++;BrowserHttpClient.prototype.get=function(_a){cov_2ror3rsntl.f[7]++;var uri=(cov_2ror3rsntl.s[21]++,_a.uri),params=(cov_2ror3rsntl.s[22]++,_a.params);cov_2ror3rsntl.s[23]++;try{var res=(cov_2ror3rsntl.s[24]++,_super.prototype.get.call(this,{uri:uri,params:params}));cov_2ror3rsntl.s[25]++;if(res!==null){cov_2ror3rsntl.b[5][0]++;cov_2ror3rsntl.s[26]++;return Promise.resolve(res);}else{cov_2ror3rsntl.b[5][1]++;}}catch(e){cov_2ror3rsntl.s[27]++;return Promise.reject(e);}var result=(cov_2ror3rsntl.s[28]++,this._getWithoutInterceptor({uri:uri,params:params}));cov_2ror3rsntl.s[29]++;return _super.prototype.responseGet.call(this,uri,result);};cov_2ror3rsntl.s[30]++;BrowserHttpClient.prototype._getWithoutInterceptor=function(_a){cov_2ror3rsntl.f[8]++;var uri=(cov_2ror3rsntl.s[31]++,_a.uri);var request=(cov_2ror3rsntl.s[32]++,this.client.createRequest(this.prefix+uri).asGet().withCredentials(true).send());cov_2ror3rsntl.s[33]++;return this._httpResponseAdaptor({request:request});};cov_2ror3rsntl.s[34]++;BrowserHttpClient.prototype.post=function(_a){cov_2ror3rsntl.f[9]++;var uri=(cov_2ror3rsntl.s[35]++,_a.uri),data=(cov_2ror3rsntl.s[36]++,_a.data),binary=(cov_2ror3rsntl.s[37]++,_a.binary);cov_2ror3rsntl.s[38]++;try{var res=(cov_2ror3rsntl.s[39]++,_super.prototype.post.call(this,{uri:uri,data:data,binary:binary}));cov_2ror3rsntl.s[40]++;if(res!==null){cov_2ror3rsntl.b[6][0]++;cov_2ror3rsntl.s[41]++;return Promise.resolve(res);}else{cov_2ror3rsntl.b[6][1]++;}}catch(e){cov_2ror3rsntl.s[42]++;return Promise.reject(e);}var request=(cov_2ror3rsntl.s[43]++,this.client.createRequest(this.prefix+uri).asPost().withContent(data).withCredentials(true).send());var result=(cov_2ror3rsntl.s[44]++,this._httpResponseAdaptor({request:request}));cov_2ror3rsntl.s[45]++;return _super.prototype.responsePost.call(this,uri,result);};cov_2ror3rsntl.s[46]++;BrowserHttpClient.prototype._httpResponseAdaptor=function(_a){cov_2ror3rsntl.f[10]++;var request=(cov_2ror3rsntl.s[47]++,_a.request);cov_2ror3rsntl.s[48]++;return request.then(function(res){cov_2ror3rsntl.f[11]++;cov_2ror3rsntl.s[49]++;return new http_response_1.default({statusCode:res.statusCode,headers:[],body:res.response});});};cov_2ror3rsntl.s[50]++;return BrowserHttpClient;}(http_client_1.HttpClient));cov_2ror3rsntl.s[51]++;exports.default=BrowserHttpClient;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_dfnnuy13w=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\http\\http-client.ts",hash="ed4cd850129c07af9a362fdb87def967fd243d12",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\http\\http-client.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:32},end:{line:120,column:3}},"2":{start:{line:5,column:24},end:{line:5,column:36}},"3":{start:{line:6,column:8},end:{line:6,column:32}},"4":{start:{line:7,column:8},end:{line:7,column:42}},"5":{start:{line:8,column:8},end:{line:8,column:43}},"6":{start:{line:9,column:8},end:{line:9,column:43}},"7":{start:{line:10,column:8},end:{line:10,column:44}},"8":{start:{line:12,column:4},end:{line:21,column:6}},"9":{start:{line:13,column:8},end:{line:19,column:9}},"10":{start:{line:14,column:30},end:{line:14,column:61}},"11":{start:{line:15,column:22},end:{line:15,column:42}},"12":{start:{line:16,column:12},end:{line:18,column:13}},"13":{start:{line:17,column:16},end:{line:17,column:27}},"14":{start:{line:20,column:8},end:{line:20,column:20}},"15":{start:{line:22,column:4},end:{line:31,column:6}},"16":{start:{line:23,column:8},end:{line:29,column:9}},"17":{start:{line:24,column:30},end:{line:24,column:62}},"18":{start:{line:25,column:22},end:{line:25,column:42}},"19":{start:{line:26,column:12},end:{line:28,column:13}},"20":{start:{line:27,column:16},end:{line:27,column:27}},"21":{start:{line:30,column:8},end:{line:30,column:20}},"22":{start:{line:35,column:4},end:{line:45,column:6}},"23":{start:{line:37,column:8},end:{line:43,column:9}},"24":{start:{line:38,column:30},end:{line:38,column:36}},"25":{start:{line:39,column:22},end:{line:39,column:54}},"26":{start:{line:40,column:12},end:{line:42,column:13}},"27":{start:{line:41,column:16},end:{line:41,column:27}},"28":{start:{line:44,column:8},end:{line:44,column:23}},"29":{start:{line:49,column:4},end:{line:59,column:6}},"30":{start:{line:51,column:8},end:{line:57,column:9}},"31":{start:{line:52,column:30},end:{line:52,column:36}},"32":{start:{line:53,column:22},end:{line:53,column:54}},"33":{start:{line:54,column:12},end:{line:56,column:13}},"34":{start:{line:55,column:16},end:{line:55,column:27}},"35":{start:{line:58,column:8},end:{line:58,column:23}},"36":{start:{line:65,column:4},end:{line:76,column:6}},"37":{start:{line:66,column:20},end:{line:66,column:24}},"38":{start:{line:67,column:30},end:{line:67,column:64}},"39":{start:{line:68,column:8},end:{line:75,column:11}},"40":{start:{line:69,column:12},end:{line:74,column:13}},"41":{start:{line:70,column:16},end:{line:70,column:61}},"42":{start:{line:72,column:17},end:{line:74,column:13}},"43":{start:{line:73,column:16},end:{line:73,column:62}},"44":{start:{line:77,column:4},end:{line:88,column:6}},"45":{start:{line:78,column:20},end:{line:78,column:24}},"46":{start:{line:79,column:30},end:{line:79,column:64}},"47":{start:{line:80,column:8},end:{line:87,column:11}},"48":{start:{line:81,column:12},end:{line:86,column:13}},"49":{start:{line:82,column:16},end:{line:82,column:62}},"50":{start:{line:84,column:17},end:{line:86,column:13}},"51":{start:{line:85,column:16},end:{line:85,column:63}},"52":{start:{line:89,column:4},end:{line:114,column:6}},"53":{start:{line:90,column:20},end:{line:90,column:24}},"54":{start:{line:91,column:30},end:{line:91,column:32}},"55":{start:{line:92,column:8},end:{line:112,column:9}},"56":{start:{line:93,column:12},end:{line:98,column:13}},"57":{start:{line:94,column:16},end:{line:94,column:92}},"58":{start:{line:97,column:16},end:{line:97,column:57}},"59":{start:{line:100,column:13},end:{line:112,column:9}},"60":{start:{line:101,column:12},end:{line:108,column:15}},"61":{start:{line:102,column:16},end:{line:107,column:17}},"62":{start:{line:103,column:20},end:{line:103,column:96}},"63":{start:{line:106,column:20},end:{line:106,column:58}},"64":{start:{line:111,column:12},end:{line:111,column:97}},"65":{start:{line:113,column:8},end:{line:113,column:31}},"66":{start:{line:115,column:4},end:{line:118,column:6}},"67":{start:{line:116,column:25},end:{line:116,column:40}},"68":{start:{line:117,column:8},end:{line:117,column:47}},"69":{start:{line:119,column:4},end:{line:119,column:22}},"70":{start:{line:121,column:0},end:{line:121,column:32}},"71":{start:{line:122,column:0},end:{line:122,column:29}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:32},end:{line:3,column:33}},loc:{start:{line:3,column:44},end:{line:120,column:1}},line:3},"1":{name:"HttpClient",decl:{start:{line:4,column:13},end:{line:4,column:23}},loc:{start:{line:4,column:28},end:{line:11,column:5}},line:4},"2":{name:"(anonymous_2)",decl:{start:{line:12,column:31},end:{line:12,column:32}},loc:{start:{line:12,column:50},end:{line:21,column:5}},line:12},"3":{name:"(anonymous_3)",decl:{start:{line:22,column:32},end:{line:22,column:33}},loc:{start:{line:22,column:51},end:{line:31,column:5}},line:22},"4":{name:"(anonymous_4)",decl:{start:{line:35,column:39},end:{line:35,column:40}},loc:{start:{line:35,column:70},end:{line:45,column:5}},line:35},"5":{name:"(anonymous_5)",decl:{start:{line:49,column:40},end:{line:49,column:41}},loc:{start:{line:49,column:71},end:{line:59,column:5}},line:49},"6":{name:"(anonymous_6)",decl:{start:{line:65,column:54},end:{line:65,column:55}},loc:{start:{line:65,column:80},end:{line:76,column:5}},line:65},"7":{name:"(anonymous_7)",decl:{start:{line:68,column:32},end:{line:68,column:33}},loc:{start:{line:68,column:45},end:{line:75,column:9}},line:68},"8":{name:"(anonymous_8)",decl:{start:{line:77,column:55},end:{line:77,column:56}},loc:{start:{line:77,column:81},end:{line:88,column:5}},line:77},"9":{name:"(anonymous_9)",decl:{start:{line:80,column:32},end:{line:80,column:33}},loc:{start:{line:80,column:45},end:{line:87,column:9}},line:80},"10":{name:"(anonymous_10)",decl:{start:{line:89,column:51},end:{line:89,column:52}},loc:{start:{line:89,column:67},end:{line:114,column:5}},line:89},"11":{name:"(anonymous_11)",decl:{start:{line:101,column:25},end:{line:101,column:26}},loc:{start:{line:101,column:38},end:{line:108,column:13}},line:101},"12":{name:"(anonymous_12)",decl:{start:{line:115,column:51},end:{line:115,column:52}},loc:{start:{line:115,column:67},end:{line:118,column:5}},line:115}},branchMap:{"0":{loc:{start:{line:16,column:12},end:{line:18,column:13}},type:"if",locations:[{start:{line:16,column:12},end:{line:18,column:13}},{start:{line:16,column:12},end:{line:18,column:13}}],line:16},"1":{loc:{start:{line:16,column:16},end:{line:16,column:60}},type:"binary-expr",locations:[{start:{line:16,column:16},end:{line:16,column:28}},{start:{line:16,column:33},end:{line:16,column:59}}],line:16},"2":{loc:{start:{line:26,column:12},end:{line:28,column:13}},type:"if",locations:[{start:{line:26,column:12},end:{line:28,column:13}},{start:{line:26,column:12},end:{line:28,column:13}}],line:26},"3":{loc:{start:{line:26,column:16},end:{line:26,column:60}},type:"binary-expr",locations:[{start:{line:26,column:16},end:{line:26,column:28}},{start:{line:26,column:33},end:{line:26,column:59}}],line:26},"4":{loc:{start:{line:40,column:12},end:{line:42,column:13}},type:"if",locations:[{start:{line:40,column:12},end:{line:42,column:13}},{start:{line:40,column:12},end:{line:42,column:13}}],line:40},"5":{loc:{start:{line:54,column:12},end:{line:56,column:13}},type:"if",locations:[{start:{line:54,column:12},end:{line:56,column:13}},{start:{line:54,column:12},end:{line:56,column:13}}],line:54},"6":{loc:{start:{line:69,column:12},end:{line:74,column:13}},type:"if",locations:[{start:{line:69,column:12},end:{line:74,column:13}},{start:{line:69,column:12},end:{line:74,column:13}}],line:69},"7":{loc:{start:{line:72,column:17},end:{line:74,column:13}},type:"if",locations:[{start:{line:72,column:17},end:{line:74,column:13}},{start:{line:72,column:17},end:{line:74,column:13}}],line:72},"8":{loc:{start:{line:81,column:12},end:{line:86,column:13}},type:"if",locations:[{start:{line:81,column:12},end:{line:86,column:13}},{start:{line:81,column:12},end:{line:86,column:13}}],line:81},"9":{loc:{start:{line:84,column:17},end:{line:86,column:13}},type:"if",locations:[{start:{line:84,column:17},end:{line:86,column:13}},{start:{line:84,column:17},end:{line:86,column:13}}],line:84},"10":{loc:{start:{line:92,column:8},end:{line:112,column:9}},type:"if",locations:[{start:{line:92,column:8},end:{line:112,column:9}},{start:{line:92,column:8},end:{line:112,column:9}}],line:92},"11":{loc:{start:{line:93,column:12},end:{line:98,column:13}},type:"if",locations:[{start:{line:93,column:12},end:{line:98,column:13}},{start:{line:93,column:12},end:{line:98,column:13}}],line:93},"12":{loc:{start:{line:100,column:13},end:{line:112,column:9}},type:"if",locations:[{start:{line:100,column:13},end:{line:112,column:9}},{start:{line:100,column:13},end:{line:112,column:9}}],line:100},"13":{loc:{start:{line:102,column:16},end:{line:107,column:17}},type:"if",locations:[{start:{line:102,column:16},end:{line:107,column:17}},{start:{line:102,column:16},end:{line:107,column:17}}],line:102}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\http\\http-client.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\http\\http-client.ts"],names:[],mappings:"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",sourcesContent:["import HttpResponse from './http-response';\r\n\r\nexport interface IRequestOption {\r\n  uri: string;\r\n}\r\n\r\nexport interface IGetRequestOption extends IRequestOption {\r\n  params?: any;\r\n}\r\n\r\nexport interface IPostRequestOption extends IRequestOption {\r\n  data?: any;\r\n  binary?: boolean;\r\n}\r\n\r\nexport type RequestInterceptor<T extends IRequestOption> = (options: T) => any;\r\nexport type ResponseInterceptor = (requestUri: string, promise: Promise<HttpResponse>) => Promise<HttpResponse>;\r\n\r\nexport abstract class HttpClient {\r\n\r\n  public prefix: string;\r\n\r\n  private _getRequestInterceptors: RequestInterceptor<IGetRequestOption>[];\r\n  private _postRequestInterceptors: RequestInterceptor<IPostRequestOption>[];\r\n  private _getResponseInterceptors: ResponseInterceptor[];\r\n  private _postResponseInterceptors: ResponseInterceptor[];\r\n\r\n  constructor({apiPrefix}: {apiPrefix: string}) {\r\n    this.prefix = apiPrefix;\r\n\r\n    this._getRequestInterceptors = [];\r\n    this._postRequestInterceptors = [];\r\n    this._getResponseInterceptors = [];\r\n    this._postResponseInterceptors = [];\r\n  }\r\n\r\n  public get(options: IGetRequestOption): Promise<HttpResponse> {\r\n    for (let i = 0; i < this._getRequestInterceptors.length; i++) {\r\n      let interceptor = this._getRequestInterceptors[i];\r\n      let res = interceptor(options);\r\n\r\n      if (res !== null && (typeof res !== 'undefined')) {\r\n        return res;\r\n      }\r\n    }\r\n\r\n    return null;\r\n  }\r\n\r\n  public post(options: IPostRequestOption): Promise<HttpResponse> {\r\n    for (let i = 0; i < this._postRequestInterceptors.length; i++) {\r\n      let interceptor = this._postRequestInterceptors[i];\r\n      let res = interceptor(options);\r\n\r\n      if (res !== null && (typeof res !== 'undefined')) {\r\n        return res;\r\n      }\r\n    }\r\n\r\n    return null;\r\n  }\r\n\r\n  /**\r\n   * @return {Promise} Returns either the underlying HTTP request result, or the promise returned by the interceptor if any\r\n   */\r\n  protected responseGet(requestUri: string, promise: Promise<HttpResponse>): Promise<HttpResponse> {\r\n    //Execute response interceptors\r\n\r\n    for (let interceptor of this._getResponseInterceptors) {\r\n      let res = interceptor(requestUri, promise);\r\n\r\n      if (res) {\r\n        return res;\r\n      }\r\n    }\r\n\r\n    return promise;\r\n  }\r\n\r\n  /**\r\n   * @return {Promise} Returns either the underlying HTTP request result, or the promise returned by the interceptor if any\r\n   */\r\n  protected responsePost(requestUri: string, promise: Promise<HttpResponse>): Promise<HttpResponse> {\r\n    //Execute response interceptors\r\n    for (let interceptor of this._postResponseInterceptors) {\r\n      let res = interceptor(requestUri, promise);\r\n\r\n      if (res) {\r\n        return res;\r\n      }\r\n    }\r\n\r\n    return promise;\r\n  }\r\n\r\n  /**\r\n   * @param {array|string} type - HTTP verb of the request to intercept\r\n   * @param {function} callback - The interceptor function to execute before HTTP request. If it returns something different than null, the underlying HTTP request won't be executed\r\n   * @returns {null|object} Returns null or an object, if an object is returned, the underlying HTTP request won't be executed\r\n   */\r\n  public registerRequestInterceptor(type: string|string[], callback: RequestInterceptor<IRequestOption>) {\r\n\r\n    let interceptorType = this._interceptorTypeToArray(type);\r\n\r\n    interceptorType.forEach(t => {\r\n      if (t === 'get') {\r\n        this._getRequestInterceptors.push(callback);\r\n      }\r\n      else if (t === 'post') {\r\n        this._postRequestInterceptors.push(callback);\r\n      }\r\n    });\r\n  }\r\n\r\n  public registerResponseInterceptor(type: string|string[], callback: ResponseInterceptor) {\r\n\r\n    let interceptorType = this._interceptorTypeToArray(type);\r\n\r\n    interceptorType.forEach(t => {\r\n      if (t === 'get') {\r\n        this._getResponseInterceptors.push(callback);\r\n      }\r\n      else if (t === 'post') {\r\n        this._postResponseInterceptors.push(callback);\r\n      }\r\n    });\r\n  }\r\n\r\n  private _interceptorTypeToArray(type: string|string[]): string[] {\r\n    let interceptorType: string[] = [];\r\n\r\n    if (typeof type === 'string') {\r\n      if (!this._isValidInterceptorType(type.toLowerCase())) {\r\n        throw new Error('HttpClient.registerInterceptor: invalid interceptor type');\r\n      }\r\n      else {\r\n        interceptorType.push(type.toLowerCase());\r\n      }\r\n    }\r\n    else if (Array.isArray(type)) {\r\n      type.forEach(t => {\r\n        if (!this._isValidInterceptorType(t.toLowerCase())) {\r\n          throw new Error('HttpClient.registerInterceptor: invalid interceptor type');\r\n        }\r\n        else {\r\n          interceptorType.push(t.toLowerCase());\r\n        }\r\n      });\r\n    }\r\n    else {\r\n      throw new Error('HttpClient.registerInterceptor: type must be a string or an array');\r\n    }\r\n\r\n    return interceptorType;\r\n  }\r\n\r\n  private _isValidInterceptorType(type: string): boolean {\r\n    let validTypes = ['get', 'post'];\r\n\r\n    return validTypes.indexOf(type) !== -1;\r\n  }\r\n}\r\n\r\nexport default HttpClient;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_dfnnuy13w.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var HttpClient=(/** @class */cov_dfnnuy13w.s[1]++,function(){cov_dfnnuy13w.f[0]++;function HttpClient(_a){cov_dfnnuy13w.f[1]++;var apiPrefix=(cov_dfnnuy13w.s[2]++,_a.apiPrefix);cov_dfnnuy13w.s[3]++;this.prefix=apiPrefix;cov_dfnnuy13w.s[4]++;this._getRequestInterceptors=[];cov_dfnnuy13w.s[5]++;this._postRequestInterceptors=[];cov_dfnnuy13w.s[6]++;this._getResponseInterceptors=[];cov_dfnnuy13w.s[7]++;this._postResponseInterceptors=[];}cov_dfnnuy13w.s[8]++;HttpClient.prototype.get=function(options){cov_dfnnuy13w.f[2]++;cov_dfnnuy13w.s[9]++;for(var i=0;i<this._getRequestInterceptors.length;i++){var interceptor=(cov_dfnnuy13w.s[10]++,this._getRequestInterceptors[i]);var res=(cov_dfnnuy13w.s[11]++,interceptor(options));cov_dfnnuy13w.s[12]++;if((cov_dfnnuy13w.b[1][0]++,res!==null)&&(cov_dfnnuy13w.b[1][1]++,typeof res!=='undefined')){cov_dfnnuy13w.b[0][0]++;cov_dfnnuy13w.s[13]++;return res;}else{cov_dfnnuy13w.b[0][1]++;}}cov_dfnnuy13w.s[14]++;return null;};cov_dfnnuy13w.s[15]++;HttpClient.prototype.post=function(options){cov_dfnnuy13w.f[3]++;cov_dfnnuy13w.s[16]++;for(var i=0;i<this._postRequestInterceptors.length;i++){var interceptor=(cov_dfnnuy13w.s[17]++,this._postRequestInterceptors[i]);var res=(cov_dfnnuy13w.s[18]++,interceptor(options));cov_dfnnuy13w.s[19]++;if((cov_dfnnuy13w.b[3][0]++,res!==null)&&(cov_dfnnuy13w.b[3][1]++,typeof res!=='undefined')){cov_dfnnuy13w.b[2][0]++;cov_dfnnuy13w.s[20]++;return res;}else{cov_dfnnuy13w.b[2][1]++;}}cov_dfnnuy13w.s[21]++;return null;};/**
     * @return {Promise} Returns either the underlying HTTP request result, or the promise returned by the interceptor if any
     */cov_dfnnuy13w.s[22]++;HttpClient.prototype.responseGet=function(requestUri,promise){cov_dfnnuy13w.f[4]++;cov_dfnnuy13w.s[23]++;//Execute response interceptors
for(var _i=0,_a=this._getResponseInterceptors;_i<_a.length;_i++){var interceptor=(cov_dfnnuy13w.s[24]++,_a[_i]);var res=(cov_dfnnuy13w.s[25]++,interceptor(requestUri,promise));cov_dfnnuy13w.s[26]++;if(res){cov_dfnnuy13w.b[4][0]++;cov_dfnnuy13w.s[27]++;return res;}else{cov_dfnnuy13w.b[4][1]++;}}cov_dfnnuy13w.s[28]++;return promise;};/**
     * @return {Promise} Returns either the underlying HTTP request result, or the promise returned by the interceptor if any
     */cov_dfnnuy13w.s[29]++;HttpClient.prototype.responsePost=function(requestUri,promise){cov_dfnnuy13w.f[5]++;cov_dfnnuy13w.s[30]++;//Execute response interceptors
for(var _i=0,_a=this._postResponseInterceptors;_i<_a.length;_i++){var interceptor=(cov_dfnnuy13w.s[31]++,_a[_i]);var res=(cov_dfnnuy13w.s[32]++,interceptor(requestUri,promise));cov_dfnnuy13w.s[33]++;if(res){cov_dfnnuy13w.b[5][0]++;cov_dfnnuy13w.s[34]++;return res;}else{cov_dfnnuy13w.b[5][1]++;}}cov_dfnnuy13w.s[35]++;return promise;};/**
     * @param {array|string} type - HTTP verb of the request to intercept
     * @param {function} callback - The interceptor function to execute before HTTP request. If it returns something different than null, the underlying HTTP request won't be executed
     * @returns {null|object} Returns null or an object, if an object is returned, the underlying HTTP request won't be executed
     */cov_dfnnuy13w.s[36]++;HttpClient.prototype.registerRequestInterceptor=function(type,callback){cov_dfnnuy13w.f[6]++;var _this=(cov_dfnnuy13w.s[37]++,this);var interceptorType=(cov_dfnnuy13w.s[38]++,this._interceptorTypeToArray(type));cov_dfnnuy13w.s[39]++;interceptorType.forEach(function(t){cov_dfnnuy13w.f[7]++;cov_dfnnuy13w.s[40]++;if(t==='get'){cov_dfnnuy13w.b[6][0]++;cov_dfnnuy13w.s[41]++;_this._getRequestInterceptors.push(callback);}else{cov_dfnnuy13w.b[6][1]++;cov_dfnnuy13w.s[42]++;if(t==='post'){cov_dfnnuy13w.b[7][0]++;cov_dfnnuy13w.s[43]++;_this._postRequestInterceptors.push(callback);}else{cov_dfnnuy13w.b[7][1]++;}}});};cov_dfnnuy13w.s[44]++;HttpClient.prototype.registerResponseInterceptor=function(type,callback){cov_dfnnuy13w.f[8]++;var _this=(cov_dfnnuy13w.s[45]++,this);var interceptorType=(cov_dfnnuy13w.s[46]++,this._interceptorTypeToArray(type));cov_dfnnuy13w.s[47]++;interceptorType.forEach(function(t){cov_dfnnuy13w.f[9]++;cov_dfnnuy13w.s[48]++;if(t==='get'){cov_dfnnuy13w.b[8][0]++;cov_dfnnuy13w.s[49]++;_this._getResponseInterceptors.push(callback);}else{cov_dfnnuy13w.b[8][1]++;cov_dfnnuy13w.s[50]++;if(t==='post'){cov_dfnnuy13w.b[9][0]++;cov_dfnnuy13w.s[51]++;_this._postResponseInterceptors.push(callback);}else{cov_dfnnuy13w.b[9][1]++;}}});};cov_dfnnuy13w.s[52]++;HttpClient.prototype._interceptorTypeToArray=function(type){cov_dfnnuy13w.f[10]++;var _this=(cov_dfnnuy13w.s[53]++,this);var interceptorType=(cov_dfnnuy13w.s[54]++,[]);cov_dfnnuy13w.s[55]++;if(typeof type==='string'){cov_dfnnuy13w.b[10][0]++;cov_dfnnuy13w.s[56]++;if(!this._isValidInterceptorType(type.toLowerCase())){cov_dfnnuy13w.b[11][0]++;cov_dfnnuy13w.s[57]++;throw new Error('HttpClient.registerInterceptor: invalid interceptor type');}else{cov_dfnnuy13w.b[11][1]++;cov_dfnnuy13w.s[58]++;interceptorType.push(type.toLowerCase());}}else{cov_dfnnuy13w.b[10][1]++;cov_dfnnuy13w.s[59]++;if(Array.isArray(type)){cov_dfnnuy13w.b[12][0]++;cov_dfnnuy13w.s[60]++;type.forEach(function(t){cov_dfnnuy13w.f[11]++;cov_dfnnuy13w.s[61]++;if(!_this._isValidInterceptorType(t.toLowerCase())){cov_dfnnuy13w.b[13][0]++;cov_dfnnuy13w.s[62]++;throw new Error('HttpClient.registerInterceptor: invalid interceptor type');}else{cov_dfnnuy13w.b[13][1]++;cov_dfnnuy13w.s[63]++;interceptorType.push(t.toLowerCase());}});}else{cov_dfnnuy13w.b[12][1]++;cov_dfnnuy13w.s[64]++;throw new Error('HttpClient.registerInterceptor: type must be a string or an array');}}cov_dfnnuy13w.s[65]++;return interceptorType;};cov_dfnnuy13w.s[66]++;HttpClient.prototype._isValidInterceptorType=function(type){cov_dfnnuy13w.f[12]++;var validTypes=(cov_dfnnuy13w.s[67]++,['get','post']);cov_dfnnuy13w.s[68]++;return validTypes.indexOf(type)!==-1;};cov_dfnnuy13w.s[69]++;return HttpClient;}());cov_dfnnuy13w.s[70]++;exports.HttpClient=HttpClient;cov_dfnnuy13w.s[71]++;exports.default=HttpClient;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_tonqcsze3=function(){var path="C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\http\\http-response.ts",hash="18c7dc95ccc9b870ab863e67d08db496407fd228",global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\http\\http-response.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:34},end:{line:11,column:3}},"2":{start:{line:5,column:25},end:{line:5,column:38}},"3":{start:{line:5,column:50},end:{line:5,column:60}},"4":{start:{line:5,column:69},end:{line:5,column:76}},"5":{start:{line:6,column:8},end:{line:6,column:37}},"6":{start:{line:7,column:8},end:{line:7,column:37}},"7":{start:{line:8,column:8},end:{line:8,column:25}},"8":{start:{line:10,column:4},end:{line:10,column:24}},"9":{start:{line:12,column:0},end:{line:12,column:31}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:3,column:34},end:{line:3,column:35}},loc:{start:{line:3,column:46},end:{line:11,column:1}},line:3},"1":{name:"HttpResponse",decl:{start:{line:4,column:13},end:{line:4,column:25}},loc:{start:{line:4,column:30},end:{line:9,column:5}},line:4}},branchMap:{"0":{loc:{start:{line:7,column:23},end:{line:7,column:36}},type:"binary-expr",locations:[{start:{line:7,column:23},end:{line:7,column:30}},{start:{line:7,column:34},end:{line:7,column:36}}],line:7}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},f:{"0":0,"1":0},b:{"0":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\http\\http-response.ts",sourceRoot:"",sources:["C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\node_modules\\tslint-loader\\index.js??ref--0!C:\\Users\\hamza\\Documents\\Projects\\wakanda-javascript-client\\src\\data-access\\http\\http-response.ts"],names:[],mappings:";;AAAA;IAME,sBAAY,EACwC;YADvC,0BAAU,EAAE,oBAAO,EAAE,cAAI;QAEpC,IAAI,CAAC,UAAU,GAAG,UAAU,CAAC;QAC7B,IAAI,CAAC,OAAO,GAAG,OAAO,IAAI,EAAE,CAAC;QAC7B,IAAI,CAAC,IAAI,GAAG,IAAI,CAAC;IACnB,CAAC;IACH,mBAAC;AAAD,CAAC,AAZD,IAYC;AAED,kBAAe,YAAY,CAAC",sourcesContent:["class HttpResponse {\r\n\r\n  public statusCode: number;\r\n  public headers: any[];\r\n  public body: string;\r\n\r\n  constructor({statusCode, headers, body}:\r\n    {statusCode: number, headers: any[], body: string}) {\r\n    this.statusCode = statusCode;\r\n    this.headers = headers || [];\r\n    this.body = body;\r\n  }\r\n}\r\n\r\nexport default HttpResponse;\r\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_tonqcsze3.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var HttpResponse=(/** @class */cov_tonqcsze3.s[1]++,function(){cov_tonqcsze3.f[0]++;function HttpResponse(_a){cov_tonqcsze3.f[1]++;var statusCode=(cov_tonqcsze3.s[2]++,_a.statusCode),headers=(cov_tonqcsze3.s[3]++,_a.headers),body=(cov_tonqcsze3.s[4]++,_a.body);cov_tonqcsze3.s[5]++;this.statusCode=statusCode;cov_tonqcsze3.s[6]++;this.headers=(cov_tonqcsze3.b[0][0]++,headers)||(cov_tonqcsze3.b[0][1]++,[]);cov_tonqcsze3.s[7]++;this.body=body;}cov_tonqcsze3.s[8]++;return HttpResponse;}());cov_tonqcsze3.s[9]++;exports.default=HttpResponse;

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