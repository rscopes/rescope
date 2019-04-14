/*!
 * MIT License
 * 
 * Copyright (c) 2018 Wise Wild Web
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var superPropBase = __webpack_require__(/*! ./superPropBase */ "./node_modules/@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/is/index.js":
/*!**********************************!*\
  !*** ./node_modules/is/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals window, HTMLElement */



/**!
 * is
 * the definitive JavaScript type testing library
 *
 * @copyright 2013-2014 Enrico Marino / Jordan Harband
 * @license MIT
 */

var objProto = Object.prototype;
var owns = objProto.hasOwnProperty;
var toStr = objProto.toString;
var symbolValueOf;
if (typeof Symbol === 'function') {
  symbolValueOf = Symbol.prototype.valueOf;
}
var isActualNaN = function (value) {
  return value !== value;
};
var NON_HOST_TYPES = {
  'boolean': 1,
  number: 1,
  string: 1,
  undefined: 1
};

var base64Regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
var hexRegex = /^[A-Fa-f0-9]+$/;

/**
 * Expose `is`
 */

var is = {};

/**
 * Test general.
 */

/**
 * is.type
 * Test if `value` is a type of `type`.
 *
 * @param {Mixed} value value to test
 * @param {String} type type
 * @return {Boolean} true if `value` is a type of `type`, false otherwise
 * @api public
 */

is.a = is.type = function (value, type) {
  return typeof value === type;
};

/**
 * is.defined
 * Test if `value` is defined.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is defined, false otherwise
 * @api public
 */

is.defined = function (value) {
  return typeof value !== 'undefined';
};

/**
 * is.empty
 * Test if `value` is empty.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is empty, false otherwise
 * @api public
 */

is.empty = function (value) {
  var type = toStr.call(value);
  var key;

  if (type === '[object Array]' || type === '[object Arguments]' || type === '[object String]') {
    return value.length === 0;
  }

  if (type === '[object Object]') {
    for (key in value) {
      if (owns.call(value, key)) {
        return false;
      }
    }
    return true;
  }

  return !value;
};

/**
 * is.equal
 * Test if `value` is equal to `other`.
 *
 * @param {Mixed} value value to test
 * @param {Mixed} other value to compare with
 * @return {Boolean} true if `value` is equal to `other`, false otherwise
 */

is.equal = function equal(value, other) {
  if (value === other) {
    return true;
  }

  var type = toStr.call(value);
  var key;

  if (type !== toStr.call(other)) {
    return false;
  }

  if (type === '[object Object]') {
    for (key in value) {
      if (!is.equal(value[key], other[key]) || !(key in other)) {
        return false;
      }
    }
    for (key in other) {
      if (!is.equal(value[key], other[key]) || !(key in value)) {
        return false;
      }
    }
    return true;
  }

  if (type === '[object Array]') {
    key = value.length;
    if (key !== other.length) {
      return false;
    }
    while (key--) {
      if (!is.equal(value[key], other[key])) {
        return false;
      }
    }
    return true;
  }

  if (type === '[object Function]') {
    return value.prototype === other.prototype;
  }

  if (type === '[object Date]') {
    return value.getTime() === other.getTime();
  }

  return false;
};

/**
 * is.hosted
 * Test if `value` is hosted by `host`.
 *
 * @param {Mixed} value to test
 * @param {Mixed} host host to test with
 * @return {Boolean} true if `value` is hosted by `host`, false otherwise
 * @api public
 */

is.hosted = function (value, host) {
  var type = typeof host[value];
  return type === 'object' ? !!host[value] : !NON_HOST_TYPES[type];
};

/**
 * is.instance
 * Test if `value` is an instance of `constructor`.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an instance of `constructor`
 * @api public
 */

is.instance = is['instanceof'] = function (value, constructor) {
  return value instanceof constructor;
};

/**
 * is.nil / is.null
 * Test if `value` is null.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is null, false otherwise
 * @api public
 */

is.nil = is['null'] = function (value) {
  return value === null;
};

/**
 * is.undef / is.undefined
 * Test if `value` is undefined.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is undefined, false otherwise
 * @api public
 */

is.undef = is.undefined = function (value) {
  return typeof value === 'undefined';
};

/**
 * Test arguments.
 */

/**
 * is.args
 * Test if `value` is an arguments object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an arguments object, false otherwise
 * @api public
 */

is.args = is.arguments = function (value) {
  var isStandardArguments = toStr.call(value) === '[object Arguments]';
  var isOldArguments = !is.array(value) && is.arraylike(value) && is.object(value) && is.fn(value.callee);
  return isStandardArguments || isOldArguments;
};

/**
 * Test array.
 */

/**
 * is.array
 * Test if 'value' is an array.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an array, false otherwise
 * @api public
 */

is.array = Array.isArray || function (value) {
  return toStr.call(value) === '[object Array]';
};

/**
 * is.arguments.empty
 * Test if `value` is an empty arguments object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an empty arguments object, false otherwise
 * @api public
 */
is.args.empty = function (value) {
  return is.args(value) && value.length === 0;
};

/**
 * is.array.empty
 * Test if `value` is an empty array.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an empty array, false otherwise
 * @api public
 */
is.array.empty = function (value) {
  return is.array(value) && value.length === 0;
};

/**
 * is.arraylike
 * Test if `value` is an arraylike object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an arguments object, false otherwise
 * @api public
 */

is.arraylike = function (value) {
  return !!value && !is.bool(value)
    && owns.call(value, 'length')
    && isFinite(value.length)
    && is.number(value.length)
    && value.length >= 0;
};

/**
 * Test boolean.
 */

/**
 * is.bool
 * Test if `value` is a boolean.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a boolean, false otherwise
 * @api public
 */

is.bool = is['boolean'] = function (value) {
  return toStr.call(value) === '[object Boolean]';
};

/**
 * is.false
 * Test if `value` is false.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is false, false otherwise
 * @api public
 */

is['false'] = function (value) {
  return is.bool(value) && Boolean(Number(value)) === false;
};

/**
 * is.true
 * Test if `value` is true.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is true, false otherwise
 * @api public
 */

is['true'] = function (value) {
  return is.bool(value) && Boolean(Number(value)) === true;
};

/**
 * Test date.
 */

/**
 * is.date
 * Test if `value` is a date.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a date, false otherwise
 * @api public
 */

is.date = function (value) {
  return toStr.call(value) === '[object Date]';
};

/**
 * is.date.valid
 * Test if `value` is a valid date.
 *
 * @param {Mixed} value value to test
 * @returns {Boolean} true if `value` is a valid date, false otherwise
 */
is.date.valid = function (value) {
  return is.date(value) && !isNaN(Number(value));
};

/**
 * Test element.
 */

/**
 * is.element
 * Test if `value` is an html element.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an HTML Element, false otherwise
 * @api public
 */

is.element = function (value) {
  return value !== undefined
    && typeof HTMLElement !== 'undefined'
    && value instanceof HTMLElement
    && value.nodeType === 1;
};

/**
 * Test error.
 */

/**
 * is.error
 * Test if `value` is an error object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an error object, false otherwise
 * @api public
 */

is.error = function (value) {
  return toStr.call(value) === '[object Error]';
};

/**
 * Test function.
 */

/**
 * is.fn / is.function (deprecated)
 * Test if `value` is a function.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a function, false otherwise
 * @api public
 */

is.fn = is['function'] = function (value) {
  var isAlert = typeof window !== 'undefined' && value === window.alert;
  if (isAlert) {
    return true;
  }
  var str = toStr.call(value);
  return str === '[object Function]' || str === '[object GeneratorFunction]' || str === '[object AsyncFunction]';
};

/**
 * Test number.
 */

/**
 * is.number
 * Test if `value` is a number.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a number, false otherwise
 * @api public
 */

is.number = function (value) {
  return toStr.call(value) === '[object Number]';
};

/**
 * is.infinite
 * Test if `value` is positive or negative infinity.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is positive or negative Infinity, false otherwise
 * @api public
 */
is.infinite = function (value) {
  return value === Infinity || value === -Infinity;
};

/**
 * is.decimal
 * Test if `value` is a decimal number.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a decimal number, false otherwise
 * @api public
 */

is.decimal = function (value) {
  return is.number(value) && !isActualNaN(value) && !is.infinite(value) && value % 1 !== 0;
};

/**
 * is.divisibleBy
 * Test if `value` is divisible by `n`.
 *
 * @param {Number} value value to test
 * @param {Number} n dividend
 * @return {Boolean} true if `value` is divisible by `n`, false otherwise
 * @api public
 */

is.divisibleBy = function (value, n) {
  var isDividendInfinite = is.infinite(value);
  var isDivisorInfinite = is.infinite(n);
  var isNonZeroNumber = is.number(value) && !isActualNaN(value) && is.number(n) && !isActualNaN(n) && n !== 0;
  return isDividendInfinite || isDivisorInfinite || (isNonZeroNumber && value % n === 0);
};

/**
 * is.integer
 * Test if `value` is an integer.
 *
 * @param value to test
 * @return {Boolean} true if `value` is an integer, false otherwise
 * @api public
 */

is.integer = is['int'] = function (value) {
  return is.number(value) && !isActualNaN(value) && value % 1 === 0;
};

/**
 * is.maximum
 * Test if `value` is greater than 'others' values.
 *
 * @param {Number} value value to test
 * @param {Array} others values to compare with
 * @return {Boolean} true if `value` is greater than `others` values
 * @api public
 */

is.maximum = function (value, others) {
  if (isActualNaN(value)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.arraylike(others)) {
    throw new TypeError('second argument must be array-like');
  }
  var len = others.length;

  while (--len >= 0) {
    if (value < others[len]) {
      return false;
    }
  }

  return true;
};

/**
 * is.minimum
 * Test if `value` is less than `others` values.
 *
 * @param {Number} value value to test
 * @param {Array} others values to compare with
 * @return {Boolean} true if `value` is less than `others` values
 * @api public
 */

is.minimum = function (value, others) {
  if (isActualNaN(value)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.arraylike(others)) {
    throw new TypeError('second argument must be array-like');
  }
  var len = others.length;

  while (--len >= 0) {
    if (value > others[len]) {
      return false;
    }
  }

  return true;
};

/**
 * is.nan
 * Test if `value` is not a number.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is not a number, false otherwise
 * @api public
 */

is.nan = function (value) {
  return !is.number(value) || value !== value;
};

/**
 * is.even
 * Test if `value` is an even number.
 *
 * @param {Number} value value to test
 * @return {Boolean} true if `value` is an even number, false otherwise
 * @api public
 */

is.even = function (value) {
  return is.infinite(value) || (is.number(value) && value === value && value % 2 === 0);
};

/**
 * is.odd
 * Test if `value` is an odd number.
 *
 * @param {Number} value value to test
 * @return {Boolean} true if `value` is an odd number, false otherwise
 * @api public
 */

is.odd = function (value) {
  return is.infinite(value) || (is.number(value) && value === value && value % 2 !== 0);
};

/**
 * is.ge
 * Test if `value` is greater than or equal to `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean}
 * @api public
 */

is.ge = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value >= other;
};

/**
 * is.gt
 * Test if `value` is greater than `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean}
 * @api public
 */

is.gt = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value > other;
};

/**
 * is.le
 * Test if `value` is less than or equal to `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean} if 'value' is less than or equal to 'other'
 * @api public
 */

is.le = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value <= other;
};

/**
 * is.lt
 * Test if `value` is less than `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean} if `value` is less than `other`
 * @api public
 */

is.lt = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value < other;
};

/**
 * is.within
 * Test if `value` is within `start` and `finish`.
 *
 * @param {Number} value value to test
 * @param {Number} start lower bound
 * @param {Number} finish upper bound
 * @return {Boolean} true if 'value' is is within 'start' and 'finish'
 * @api public
 */
is.within = function (value, start, finish) {
  if (isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.number(value) || !is.number(start) || !is.number(finish)) {
    throw new TypeError('all arguments must be numbers');
  }
  var isAnyInfinite = is.infinite(value) || is.infinite(start) || is.infinite(finish);
  return isAnyInfinite || (value >= start && value <= finish);
};

/**
 * Test object.
 */

/**
 * is.object
 * Test if `value` is an object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an object, false otherwise
 * @api public
 */
is.object = function (value) {
  return toStr.call(value) === '[object Object]';
};

/**
 * is.primitive
 * Test if `value` is a primitive.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a primitive, false otherwise
 * @api public
 */
is.primitive = function isPrimitive(value) {
  if (!value) {
    return true;
  }
  if (typeof value === 'object' || is.object(value) || is.fn(value) || is.array(value)) {
    return false;
  }
  return true;
};

/**
 * is.hash
 * Test if `value` is a hash - a plain object literal.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a hash, false otherwise
 * @api public
 */

is.hash = function (value) {
  return is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval;
};

/**
 * Test regexp.
 */

/**
 * is.regexp
 * Test if `value` is a regular expression.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a regexp, false otherwise
 * @api public
 */

is.regexp = function (value) {
  return toStr.call(value) === '[object RegExp]';
};

/**
 * Test string.
 */

/**
 * is.string
 * Test if `value` is a string.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is a string, false otherwise
 * @api public
 */

is.string = function (value) {
  return toStr.call(value) === '[object String]';
};

/**
 * Test base64 string.
 */

/**
 * is.base64
 * Test if `value` is a valid base64 encoded string.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is a base64 encoded string, false otherwise
 * @api public
 */

is.base64 = function (value) {
  return is.string(value) && (!value.length || base64Regex.test(value));
};

/**
 * Test base64 string.
 */

/**
 * is.hex
 * Test if `value` is a valid hex encoded string.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is a hex encoded string, false otherwise
 * @api public
 */

is.hex = function (value) {
  return is.string(value) && (!value.length || hexRegex.test(value));
};

/**
 * is.symbol
 * Test if `value` is an ES6 Symbol
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a Symbol, false otherise
 * @api public
 */

is.symbol = function (value) {
  return typeof Symbol === 'function' && toStr.call(value) === '[object Symbol]' && typeof symbolValueOf.call(value) === 'symbol';
};

module.exports = is;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));function AppContainer(e){return React.Children.only(e.children)}var hot_prod=function(){return function(e){return e}},areComponentsEqual=function(e,n){return e===n},setConfig=function(){},cold=function(e){return e},configureComponent=function(){};exports.AppContainer=AppContainer,exports.hot=hot_prod,exports.areComponentsEqual=areComponentsEqual,exports.setConfig=setConfig,exports.cold=cold,exports.configureComponent=configureComponent;


/***/ }),

/***/ "./node_modules/react-hot-loader/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-hot-loader/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasWindow = typeof window !== 'undefined';

if (true) {
  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js");
} else { var jsFeaturesPresent, evalAllowed; }

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.8.6';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;

var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function () {};

{
  validateFormat = function (format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error = void 0;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

// Relying on the `invariant()` implementation lets us
// preserve the format and params in the www builds.

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format);

      // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';
  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');
    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);
        if (match) {
          var pathBeforeSlash = match[1];
          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }
    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }
  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var Resolved = 1;


function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }
  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }
  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_CONCURRENT_MODE_TYPE:
      return 'ConcurrentMode';
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_SUSPENSE_TYPE:
      return 'Suspense';
  }
  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';
      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';
      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');
      case REACT_MEMO_TYPE:
        return getComponentName(type.type);
      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);
          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }
        }
    }
  }
  return null;
}

var ReactDebugCurrentFrame = {};

var currentlyValidatingElement = null;

function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = '';

    // Add an extra top frame while an element is being validated
    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    }

    // Delegate to the injected renderer-specific implementation
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentOwner: ReactCurrentOwner,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };

  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    };
    // $FlowFixMe: Flow complains about not setting a value, which is intentional here
    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;
            warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }
          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;
            warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }
          return context.Consumer;
        }
      }
    });
    // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps = void 0;
    var propTypes = void 0;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          defaultProps = newDefaultProps;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          propTypes = newPropTypes;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      !(
      // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
    }

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;
  !(dispatcher !== null) ? invariant(false, 'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.') : void 0;
  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();
  {
    !(unstable_observedBits === undefined) ? warning$1(false, 'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '') : void 0;

    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context;
      // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.
      if (realContext.Consumer === Context) {
        warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }
  return dispatcher.useContext(Context, unstable_observedBits);
}

function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}

function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}

function useEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, inputs);
}

function useLayoutEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, inputs);
}

function useCallback(callback, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, inputs);
}

function useMemo(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, inputs);
}

function useImperativeHandle(ref, create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, inputs);
}

function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var propTypesMisspellWarningShown = void 0;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
  }

  setCurrentlyValidatingElement(element);
  {
    warning$1(false, 'Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }
  setCurrentlyValidatingElement(null);
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var type = element.type;
  if (type === null || type === undefined || typeof type === 'string') {
    return;
  }
  var name = getComponentName(type);
  var propTypes = void 0;
  if (typeof type === 'function') {
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
  // Note: Memo only checks outer props here.
  // Inner props are checked in the reconciler.
  type.$$typeof === REACT_MEMO_TYPE)) {
    propTypes = type.propTypes;
  } else {
    return;
  }
  if (propTypes) {
    setCurrentlyValidatingElement(element);
    checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
    setCurrentlyValidatingElement(null);
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  setCurrentlyValidatingElement(fragment);

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
      break;
    }
  }

  if (fragment.ref !== null) {
    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
  }

  setCurrentlyValidatingElement(null);
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


// Gather advanced timing metrics for Profiler subtrees.


// Trace which interactions trigger each commit.


// Only used in www builds.
 // TODO: true? Here it might just be false.

// Only used in www builds.


// Only used in www builds.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties


// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
var enableStableConcurrentModeAPIs = false;

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,
  lazy: lazy,
  memo: memo,

  useCallback: useCallback,
  useContext: useContext,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useDebugValue: useDebugValue,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  unstable_ConcurrentMode: REACT_CONCURRENT_MODE_TYPE,
  unstable_Profiler: REACT_PROFILER_TYPE,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};

// Note: some APIs are added with feature flags.
// Make sure that stable builds for open source
// don't modify the React object to avoid deopts.
// Also let's not expose their names in stable builds.

if (enableStableConcurrentModeAPIs) {
  React.ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  React.Profiler = REACT_PROFILER_TYPE;
  React.unstable_ConcurrentMode = undefined;
  React.unstable_Profiler = undefined;
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3.default || React$3;

module.exports = react;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/shortid/index.js":
/*!***************************************!*\
  !*** ./node_modules/shortid/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(/*! ./lib/index */ "./node_modules/shortid/lib/index.js");


/***/ }),

/***/ "./node_modules/shortid/lib/alphabet.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/alphabet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(/*! ./random/random-from-seed */ "./node_modules/shortid/lib/random/random-from-seed.js");

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

module.exports = {
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),

/***/ "./node_modules/shortid/lib/build.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/build.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var encode = __webpack_require__(/*! ./encode */ "./node_modules/shortid/lib/encode.js");
var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1459707606518;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 6;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {

    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + encode(alphabet.lookup, version);
    str = str + encode(alphabet.lookup, clusterWorkerId);
    if (counter > 0) {
        str = str + encode(alphabet.lookup, counter);
    }
    str = str + encode(alphabet.lookup, seconds);

    return str;
}

module.exports = build;


/***/ }),

/***/ "./node_modules/shortid/lib/decode.js":
/*!********************************************!*\
  !*** ./node_modules/shortid/lib/decode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

/**
 * Decode the id to get the version and worker
 * Mainly for debugging and testing.
 * @param id - the shortid-generated id.
 */
function decode(id) {
    var characters = alphabet.shuffled();
    return {
        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
    };
}

module.exports = decode;


/***/ }),

/***/ "./node_modules/shortid/lib/encode.js":
/*!********************************************!*\
  !*** ./node_modules/shortid/lib/encode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomByte = __webpack_require__(/*! ./random/random-byte */ "./node_modules/shortid/lib/random/random-byte-browser.js");

function encode(lookup, number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = encode;


/***/ }),

/***/ "./node_modules/shortid/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");
var encode = __webpack_require__(/*! ./encode */ "./node_modules/shortid/lib/encode.js");
var decode = __webpack_require__(/*! ./decode */ "./node_modules/shortid/lib/decode.js");
var build = __webpack_require__(/*! ./build */ "./node_modules/shortid/lib/build.js");
var isValid = __webpack_require__(/*! ./is-valid */ "./node_modules/shortid/lib/is-valid.js");

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(/*! ./util/cluster-worker-id */ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js") || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.decode = decode;
module.exports.isValid = isValid;


/***/ }),

/***/ "./node_modules/shortid/lib/is-valid.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/is-valid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var characters = alphabet.characters();
    var len = id.length;
    for(var i = 0; i < len;i++) {
        if (characters.indexOf(id[i]) === -1) {
            return false;
        }
    }
    return true;
}

module.exports = isShortId;


/***/ }),

/***/ "./node_modules/shortid/lib/random/random-byte-browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-byte-browser.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

function randomByte() {
    if (!crypto || !crypto.getRandomValues) {
        return Math.floor(Math.random() * 256) & 0x30;
    }
    var dest = new Uint8Array(1);
    crypto.getRandomValues(dest);
    return dest[0] & 0x30;
}

module.exports = randomByte;


/***/ }),

/***/ "./node_modules/shortid/lib/random/random-from-seed.js":
/*!*************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-from-seed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),

/***/ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/shortid/lib/util/cluster-worker-id-browser.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 0;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/Scope.js":
/*!**********************!*\
  !*** ./src/Scope.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! is */ "./node_modules/is/index.js");
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(is__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_Emitter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/Emitter */ "./src/utils/Emitter.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");










(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */





var __proto__push = function __proto__push(target, id, parent) {
  var fn = function fn() {};

  fn.prototype = parent ? new parent._[id]() : target[id] || {};
  target[id] = new fn();
  target._[id] = fn;
},
    openScopes = {},
    SimpleObjectProto = {}.constructor;
/**
 * Base Scope object
 */


var Scope =
/*#__PURE__*/
function (_EventEmitter) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Scope, _EventEmitter);

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(Scope, null, [{
    key: "stateMapToRefList",
    // if > 0, will wait 'persistenceTm' ms before destroy when dispose reach 0
    // all active scopes

    /**
     * get a parsed reference list from stateMap
     * @param _ref
     * @returns {{storeId, path, alias: *, ref: *}}
     */
    value: function stateMapToRefList(sm) {
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _refs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      var actions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var path = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
      var applier;
      Object.keys(sm).forEach(function (key) {
        var cpath = path ? path + '.' + key : key;
        sm[key] instanceof Scope.scopeRef ? _refs.push(sm[key].path + ':' + cpath) : sm[key] && sm[key] instanceof Function ? key == "$apply" ? applier = sm[key] : actions[key] = sm[key] : sm[key] && sm[key].prototype instanceof Scope.Store ? _refs.push(sm[key].as(cpath)) : state[cpath] = sm[key]; //: this.stateMapToRefList(sm[key], _refs, path + '.' + key)
      });
      return applier;
    }
  }, {
    key: "getScope",
    value: function getScope(scopes) {
      var skey = is__WEBPACK_IMPORTED_MODULE_9___default.a.array(scopes) ? scopes.sort(function (a, b) {
        if (a.firstname < b.firstname) return -1;
        if (a.firstname > b.firstname) return 1;
        return 0;
      }).join('+') : scopes;
      return openScopes[skey] = openScopes[skey] || new Scope({}, {
        id: skey
      });
    }
  }]);

  /**
   * Init a ReScope scope
   *
   * @param storesMap {Object} Object with the initial stores definition / instances
   * @param config {Object} Scope config
   * {
   *     parent {scope} @optional parent scope
   *
   *     id {string} @optional id ( if this id exist storesMap will be merge on the 'id'
   *     scope)
   *     key {string} @optional key of the scope ( if no id is set, the scope id will be (parent.id+'>'+key)
   *     incrementId {bool} @optional true to add a suffix id, if the provided key or id globally exist
   *
   *     state {Object} @optional initial state by store alias
   *     data {Object} @optional initial data by store alias
   *
   *     rootEmitter {bool} @optional true to not being destabilized by parent
   *     boundedActions {array | regexp} @optional list or regexp of actions not propagated to the parent
   *     autoDestroy {true | false | 'inherit'}
   *     persistenceTm {number) if > 0, will wait 'persistenceTm' ms before destroy when
   *     dispose reach 0 autoDestroy  {bool} will trigger retain & dispose after start
   *  }
   * @returns {Scope}
   */
  function Scope(storesMap) {
    var _this;

    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        parent = _ref2.parent,
        upperScope = _ref2.upperScope,
        key = _ref2.key,
        id = _ref2.id,
        snapshot = _ref2.snapshot,
        state = _ref2.state,
        data = _ref2.data,
        _ref2$incrementId = _ref2.incrementId,
        incrementId = _ref2$incrementId === void 0 ? !!key : _ref2$incrementId,
        persistenceTm = _ref2.persistenceTm,
        autoDestroy = _ref2.autoDestroy,
        rootEmitter = _ref2.rootEmitter,
        boundedActions = _ref2.boundedActions;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Scope);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Scope).call(this));
    var _ = {
      keyPID: upperScope && upperScope._id || parent && parent._id || shortid__WEBPACK_IMPORTED_MODULE_10___default.a.generate(),
      key: key,
      incrementId: incrementId,
      baseId: id
    }; // generate / set this scope id

    id = id || key && _.keyPID + '>' + key;
    _.isLocalId = !id;
    id = id || "_____" + shortid__WEBPACK_IMPORTED_MODULE_10___default.a.generate();

    if (openScopes[id] && !incrementId) {
      // overwrite existing scope
      _this._id = id;
      openScopes[id].register(storesMap);
      return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(_this, openScopes[id]);
    } else if (openScopes[id] && incrementId) {
      // generate key id
      var i = -1;

      while (openScopes[id + '[' + ++i + ']']) {
        ;
      }

      id = id + '[' + i + ']';
    } // register this scope in the static Scope.scopes


    openScopes[id] = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this);
    _this._id = id;
    _this._rev = 0;
    _this._ = _;
    _this.actions = {};
    _this.stores = {};
    _this.state = {};
    _this.data = {};
    _this.parent = parent;
    if (autoDestroy == 'inherit') autoDestroy = parent && parent._autoDestroy;
    _this._autoDestroy = autoDestroy;
    _.persistenceTm = persistenceTm || _this.constructor.persistenceTm;
    if (parent && parent.dead) throw new Error("Can't use a dead scope as parent !");

    __proto__push(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), 'actions', parent);

    __proto__push(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), 'stores', parent);

    __proto__push(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), 'state', parent);

    __proto__push(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), 'data', parent);

    _this.sources = [];
    _.childScopes = [];
    _.childScopesList = [];
    _.unStableChilds = 0;
    _.seenChilds = 0;
    _._listening = {};
    _._scope = {};
    _._mixed = [];
    _._mixedList = [];
    _.followers = [];
    _this.__retains = {
      all: 0
    };
    _this.__locks = {
      all: 1
    }; // todo

    _._boundedActions = is__WEBPACK_IMPORTED_MODULE_9___default.a.array(boundedActions) ? {
      test: boundedActions.includes.bind(boundedActions)
    } : boundedActions; // register to the parent scope

    if (parent) {
      parent.retain("isMyParent");

      if (!rootEmitter) {
        !parent._stable && _this.wait("waitingParent");
        parent.on(_._parentList = {
          'stable': function stable(s) {
            return _this.release("waitingParent");
          },
          'unstable': function unstable(s) {
            return _this.wait("waitingParent");
          },
          'update': function update(s) {
            return _this._propag();
          }
        });
      } else {
        parent.on(_._parentList = {
          'update': function update(s) {
            return _this._propag();
          }
        });
      } // this.register(parent.__scope, state, data);

    } // register this scope stores


    _this.register(storesMap, state, data);

    _this.__locks.all--;
    _this._stable = !_this.__locks.all;

    if (parent) {
      parent._addChild(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    } // restore snapshots


    _this.restore(snapshot);

    if (autoDestroy) setTimeout(function (tm) {
      _this.retain("autoDestroy");

      _this.dispose("autoDestroy");
    });
    return _this;
  }
  /**
   *
   * Mount the stores in storesList, in this scope or in its parents or mixed scopes
   *
   * @param storeIdList {string|storeRef} Store name, Array of Store names, or Rescope
   *     store ref from Store::as or Store:as
   * @param state
   * @param data
   * @returns {Scope}
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(Scope, [{
    key: "mount",
    value: function mount(storeIdList, snapshot, state, data) {
      var _this2 = this;

      if (is__WEBPACK_IMPORTED_MODULE_9___default.a.array(storeIdList)) {
        storeIdList.forEach(function (storeId) {
          return _this2._mount(storeId, snapshot, state, data);
        });
      } else {
        this._mount.apply(this, arguments);
      }

      return this;
    }
  }, {
    key: "_mount",
    value: function _mount(id, snapshot, state, data) {
      var ref, snap;
      ref = this.parseRef(id);
      if (id == "$parent") return;

      if (!this._._scope[ref.storeId]) {
        var _this$parent;

        //ask mixed || parent
        if (this._._mixed.reduceRight(function (mounted, ctx) {
          return mounted || ctx._mount(id, snapshot, state, data);
        }, false) || !this.parent) return;
        return (_this$parent = this.parent)._mount.apply(_this$parent, arguments);
      } else {
        var store = this._._scope[ref.storeId],
            taskQueue = [];

        if (Scope.isStoreClass(store)) {
          this._._scope[ref.storeId] = new store(this, {
            //snapshot,
            name: ref.storeId,
            state: state,
            data: data
          }, taskQueue);

          while (taskQueue.length) {
            taskQueue.shift()();
          }
        } else if (Scope.isScopeClass(store)) {
          store = this._._scope[ref.storeId] = new store({
            $parent: this
          }, {
            key: ref.storeId,
            incrementId: true,
            upperScope: this //autoDestroy: true
            //parent: this

          }); //this._._scope[ ref.storeId ].retain("scopedChildScope");
          //this._watchStore(ref.storeId);

          if (ref.path.length > 1) this._._scope[ref.storeId].mount(ref.path.slice(1).join('.'), snapshot, state, data); //else return this._._scope[ ref.storeId ];
        }

        if (Scope.isStore(store)) {
          if (state !== undefined && data === undefined) store.setState(state);else if (state !== undefined) store.state = state;
          if (data !== undefined) store.push(data);
        }

        this._watchStore(ref.storeId);
      }

      return this._._scope[ref.storeId];
    }
    /**
     * Make this scope watching the local store 'id'
     * @param id
     * @returns {boolean}
     * @private
     */

  }, {
    key: "_watchStore",
    value: function _watchStore(id) {
      var _this3 = this;

      if (!this._._listening[id] && !is__WEBPACK_IMPORTED_MODULE_9___default.a.fn(this._._scope[id])) {
        !this._._scope[id]._autoDestroy && this._._scope[id].retain("scoped");
        !this._._scope[id].isStable() && this.wait(id);

        this._._scope[id].on(this._._listening[id] = {
          'destroy': function destroy(s) {
            delete _this3._._listening[id];
            _this3._._scope[id] = _this3._._scope[id].constructor;
          },
          'update': function update(s) {
            return _this3.propag();
          },
          'stable': function stable(s) {
            return _this3.release(id);
          },
          'unstable': function unstable(s) {
            return _this3.wait(id);
          }
        });
      }

      return true;
    }
    /**
     * Mix targetCtx on this scope
     * Mixed scope parents are NOT mapped
     * @param targetCtx
     */

  }, {
    key: "mixin",
    value: function mixin(targetCtx) {
      var _this4 = this;

      var parent = this.parent,
          lists;

      this._._mixed.push(targetCtx);

      targetCtx.retain("mixedTo");
      if (!targetCtx._stable) this.wait(targetCtx._id);

      this._._mixedList.push(lists = {
        'stable': function stable(s) {
          return _this4.release(targetCtx._id);
        },
        'unstable': function unstable(s) {
          return _this4.wait(targetCtx._id);
        },
        'update': function update(s) {
          return _this4._propag();
        }
      });

      targetCtx.on(lists); // reset protos
      // push new proto with parent

      __proto__push(this, 'actions', parent);

      __proto__push(this, 'stores', parent);

      __proto__push(this, 'state', parent);

      __proto__push(this, 'data', parent); // bind local accessors in the new proto


      this.relink(this._._scope, this, false, true);

      this._._mixed.forEach(function (ctx) {
        // push protos
        __proto__push(_this4, 'actions');

        __proto__push(_this4, 'stores');

        __proto__push(_this4, 'state');

        __proto__push(_this4, 'data');

        _this4.stores.__origin = "mixed " + ctx._id; // write mixed accessors

        ctx.relink(ctx._._scope, _this4, true, true);
      });
    }
    /**
     * Register stores in storesMap & link them in the protos
     * @param storesMap
     * @param state
     * @param data
     */

  }, {
    key: "register",
    value: function register(storesMap) {
      var _this5 = this;

      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.relink(storesMap, this, false, false);
      Object.keys(storesMap).forEach(function (id) {
        if (id == "$parent") return;

        if (storesMap[id].singleton || is__WEBPACK_IMPORTED_MODULE_9___default.a.fn(storesMap[id]) && (state[id] || data[id])) {
          _this5._mount(id, undefined, state[id], data[id]);
        } else if (state[id] || data[id]) {
          if (data[id]) {
            if (state[id]) _this5.stores[id].state = state[id];

            _this5.stores[id].push(data[id]);
          } else if (state[id]) {
            _this5.stores[id].setState(state[id]);
          }
        } else {
          _this5._watchStore(id);
        }
      });
    }
    /**
     * Map srcCtx store's on targetCtx headers proto's
     * @param srcCtx
     * @param targetCtx
     * @param state
     * @param data
     */

  }, {
    key: "relink",
    value: function relink(srcCtx) {
      var _this6 = this;

      var targetCtx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      var external = arguments.length > 2 ? arguments[2] : undefined;
      var force = arguments.length > 3 ? arguments[3] : undefined;
      Object.keys(srcCtx).forEach(function (id) {
        var hotReloading; // same store def : ignore

        if (!force && targetCtx._._scope[id] === srcCtx[id] || targetCtx._._scope[id] && targetCtx._._scope[id].constructor === srcCtx[id]) return; // hot switch

        if (!force && targetCtx._._scope[id]) {
          if (!external && !is__WEBPACK_IMPORTED_MODULE_9___default.a.fn(targetCtx._._scope[id])) {
            console.info("Rescope Store : ", id, " already exist in this scope ! ( Hot switching the store ) !!!");
            var tmp = targetCtx._._scope[id];
            targetCtx._._scope[id] = srcCtx[id];
            hotReloading = tmp.nextState;
            tmp.destroy();
          }

          if (!external && is__WEBPACK_IMPORTED_MODULE_9___default.a.fn(targetCtx._._scope[id])) targetCtx._._scope[id] = srcCtx[id];
        } else if (!force && !external) _this6._._scope[id] = srcCtx[id]; // map the store id


        Object.defineProperty(targetCtx._.stores.prototype, id, {
          enumerable: true,
          configurable: true,
          get: function get() {
            return _this6._._scope[id];
          }
        }); // not mapping hierarchic scopes

        if (id === "$parent") return; // map state & data

        Object.defineProperty(targetCtx._.state.prototype, id, {
          enumerable: true,
          configurable: true,
          get: function get() {
            return _this6._._scope[id] && _this6._._scope[id].state;
          },
          set: function set(v) {
            return _this6._mount(id, undefined, v);
          }
        });
        Object.defineProperty(targetCtx._.data.prototype, id, {
          enumerable: true,
          configurable: true,
          get: function get() {
            return _this6._._scope[id] && _this6._._scope[id].data;
          },
          set: function set(v) {
            return _this6._mount(id, undefined, undefined, v);
          }
        }); // action mapping

        var actions = srcCtx[id] instanceof Scope.Store ? srcCtx[id].constructor.actions : srcCtx[id].actions,
            activeActions = targetCtx._.actions.prototype;
        if (Scope.isScope(_this6._._scope[id].prototype)) _this6._mount(id);

        if (Scope.isScope(_this6._._scope[id])) {
          activeActions[id] = _this6._._scope[id].actions;
        }

        if (!Scope.isStore(_this6._._scope[id]) && !Scope.isStoreClass(_this6._._scope[id])) return;
        actions && Object.keys(actions).forEach(function (act) {
          if (activeActions.hasOwnProperty(act)) activeActions[act].__targetStores++;else {
            activeActions[act] = _this6.dispatch.bind(_this6, act);
            activeActions[act].__targetStores = 1;
          }
        }); // remount the store if it was hot reloaded

        if (hotReloading) _this6._mount(id, null, hotReloading);
      });
    }
    /**
     * Bind stores from this scope, his parents or mixed scopes to obj
     *
     * @param target {React.Component|Store|function}
     * @param key {string} stores keys to bind updates
     * @param as
     * @param setInitial {bool} false to not propag initial value (default : true)
     */

  }, {
    key: "bind",
    value: function bind(target, key, as) {
      var _this7 = this;

      var setInitial = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var revMap = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var lastRevs, data, refKeys;
      if (key && !is__WEBPACK_IMPORTED_MODULE_9___default.a.array(key)) key = [key];

      if (as === false || as === true) {
        setInitial = as;
        as = null;
      }

      refKeys = key.map(function (id) {
        return is__WEBPACK_IMPORTED_MODULE_9___default.a.string(id) ? id : id.name;
      }).map(function (id) {
        return _this7.parseRef(id);
      });

      this._.followers.push([target, key, as || undefined, lastRevs = refKeys.reduce(function (revs, ref) {
        revs[ref.storeId] = revs[ref.storeId] || {
          rev: 0,
          refs: []
        };
        revs[ref.storeId].refs.push(ref);
        return revs;
      }, revMap)]);

      this.mount(key);
      this.retainStores(Object.keys(lastRevs), 'listeners');

      if (setInitial && this._stable) {
        data = this.getUpdates(lastRevs);
        if (!data) return this;

        if (typeof target != "function") {
          if (as) target.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, as, data));else target.setState(data);
        } else {
          target(data);
        }
      }

      return this;
    }
    /**
     * Un bind this scope off the given component-keys
     * @param target
     * @param key
     * @returns {Array.<*>}
     */

  }, {
    key: "unBind",
    value: function unBind(target, key, as) {
      var followers = this._.followers,
          i = followers && followers.length;

      while (followers && i--) {
        if (followers[i][0] === target && '' + followers[i][1] == '' + key && followers[i][2] == as) {
          this.disposeStores(Object.keys(followers[i][3]), 'listeners');
          return followers.splice(i, 1);
        }
      }
    }
    /**
     * Mount the stores in storeIdList from this scope, its parents and mixed scope
     * Bind them to 'to'
     * Hook 'to' so it will auto unbind on 'destroy' or 'componentWillUnmount'
     * @param target
     * @param storeIdList
     * @param bind
     * @returns {Object} Initial outputs of the stores in 'storesList'
     */

  }, {
    key: "map",
    value: function map(target, storeIdList) {
      var _this8 = this;

      var bind = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var revMap = arguments.length > 3 ? arguments[3] : undefined;
      var Store = this.constructor.Store;
      storeIdList = is__WEBPACK_IMPORTED_MODULE_9___default.a.array(storeIdList) ? storeIdList : [storeIdList];
      var refList = storeIdList.map(this.parseRef);
      this.mount(storeIdList);

      if (bind && target instanceof Store) {
        Store.map(target, storeIdList, this, this, false);
      } else if (bind) {
        this.bind(target, storeIdList, undefined, false);
        var mixedCWUnmount,
            unMountKey = target.isReactComponent ? "componentWillUnmount" : "destroy";

        if (target.hasOwnProperty(unMountKey)) {
          mixedCWUnmount = target[unMountKey];
        }

        target[unMountKey] = function () {
          delete target[unMountKey];
          if (mixedCWUnmount) target[unMountKey] = mixedCWUnmount;

          _this8.unBind(target, storeIdList);

          return target[unMountKey] && target[unMountKey].apply(target, arguments);
        };
      }

      return revMap && this.getUpdates(revMap) || refList.reduce(function (data, ref) {
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["walknSet"])(data, ref.alias || ref.path, _this8.retrieve(ref.path));
        return data;
      }, {});
    }
    /**
     * Get current data value from json path
     * @param path
     * @returns {string|*}
     */

  }, {
    key: "retrieve",
    value: function retrieve() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      path = is__WEBPACK_IMPORTED_MODULE_9___default.a.string(path) ? path.split('.') : path;
      return path && this.stores[path[0]] && this.stores[path[0]].retrieve && this.stores[path[0]].retrieve(path.slice(1));
    }
    /**
     * Get current data value from json path
     * @param path
     * @returns {string|*}
     */

  }, {
    key: "restoreRefPath",
    value: function restoreRefPath() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      path = is__WEBPACK_IMPORTED_MODULE_9___default.a.string(path) ? path.split('.') : path;
      var obj,
          i = 0,
          cScope = this;

      while (i < path.length) {
        obj = cScope.stores[path[i]];

        if (Scope.isScopeClass(obj) || Scope.isStoreClass(obj)) {
          cScope.mount(path[0]);
          obj = cScope.stores[path[i]];
        }

        if (Scope.isScope(obj)) {
          cScope = obj;
          i++;
        } else if (Scope.isStore(obj)) {
          obj.restore();
          break;
        } else {
          break;
        }
      }
    }
    /**
     * Get current store from json path
     * @param path
     * @returns {string|*}
     */

  }, {
    key: "retrieveStore",
    value: function retrieveStore() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      path = is__WEBPACK_IMPORTED_MODULE_9___default.a.string(path) ? path.split('.') : path;
      return path && path.length && (path.length != 1 && this.stores[path[0]].retrieveStore ? this.stores[path[0]].retrieveStore(path.slice(1)) : path.length == 1 && this.stores[path[0]]);
    }
    /**
     * Get or update storesRevMap's revisions
     * @param storesRevMap
     * @param local
     * @returns {{}}
     */

  }, {
    key: "getStoresRevs",
    value: function getStoresRevs() {
      var storesRevMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var local = arguments.length > 1 ? arguments[1] : undefined;
      var ctx = this._._scope;

      if (!storesRevMap) {
        storesRevMap = {};
      }

      Object.keys(ctx).forEach(function (id) {
        if (id == "$parent") return;

        if (!is__WEBPACK_IMPORTED_MODULE_9___default.a.fn(ctx[id])) {
          storesRevMap[id] = ctx[id]._rev;
        } else if (!storesRevMap.hasOwnProperty(id)) storesRevMap[id] = false;
      });

      if (!local) {
        this._._mixed.reduce(function (updated, ctx) {
          return ctx.getStoresRevs(storesRevMap), storesRevMap;
        }, storesRevMap);

        this.parent && this.parent.getStoresRevs(storesRevMap);
      }

      return storesRevMap;
    }
    /**
     * Get updated output basing storesRevMap's revisions.
     * If a store in 'storesRevMap' was updated; add it to 'output' & update storesRevMap
     * @param storesRevMap
     * @param output
     * @param updated
     * @returns {*|{}}
     */

  }, {
    key: "getRefsUpdates",
    value: function getRefsUpdates(refs, revMap, output) {
      var _this9 = this;

      revMap = revMap || refs.map(function (id) {
        return is__WEBPACK_IMPORTED_MODULE_9___default.a.string(id) ? id : id.name;
      }).map(function (id) {
        return _this9.parseRef(id);
      }).reduce(function (revs, ref) {
        revs[ref.storeId] = revs[ref.storeId] || {
          rev: 0,
          refs: []
        };
        revs[ref.storeId].refs.push(ref);
        return revs;
      }, {});
      return this.getUpdates(revMap, output);
    }
    /**
     * Get or update output basing storesRevMap's revisions.
     * If a store in 'storesRevMap' was updated; add it to 'output' & update storesRevMap
     * @todo: optim / use protos
     * @param storesRevMap
     * @param output
     * @param updated
     * @returns {*|{}}
     */

  }, {
    key: "getUpdates",
    value: function getUpdates(storesRevMap, output, updated) {
      var _this10 = this;

      output = output || {};
      storesRevMap = storesRevMap || this._getRevMap();
      Object.keys(storesRevMap).forEach(function (id) {
        var store = _this10.stores[id];
        storesRevMap[id] = storesRevMap[id] || {
          rev: 0,
          refs: []
        };

        if (store && is__WEBPACK_IMPORTED_MODULE_9___default.a.fn(store)) {
          updated = true;
          output[id] = undefined;
        } else if (store && store._rev > storesRevMap[id].rev) {
          storesRevMap[id].rev = store._rev;
          updated = true;
          storesRevMap[id].refs.forEach(function (ref) {
            output[ref.alias] = _this10.retrieve(ref.path);
          });
        }
      });
      return updated && output;
    }
    /**
     * Recursively get all stores revs
     * @param childs
     * @returns {Array}
     * @private
     */

  }, {
    key: "_getRevMap",
    value: function _getRevMap() {
      var storesRevMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var ctx = this._._scope;
      Object.keys(ctx).forEach(function (id) {
        if (id == "$parent" || storesRevMap[id]) return;
        storesRevMap[id] = {
          rev: ctx[id]._rev,
          refs: []
        };
      });

      this._._mixed.reduceRight(function (storesRevMap, ctx) {
        return ctx._getRevMap(storesRevMap);
      }, storesRevMap);

      this.parent && this.parent._getRevMap(storesRevMap);
      return storesRevMap;
    }
    /**
     * Recursively get all child scopes
     * @param childs
     * @returns {Array}
     * @private
     */

  }, {
    key: "_getAllChilds",
    value: function _getAllChilds() {
      var childs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      childs.push.apply(childs, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(this._.childScopes));

      this._.childScopes.forEach(function (ctx) {
        ctx._getAllChilds(childs);
      });

      return childs;
    }
    /**
     * Serialize all active stores state & data in every childs & mixed scopes
     *
     * Scopes without key or id are ignored
     * @param output
     * @returns {{}}
     */

  }, {
    key: "serialize",
    value: function serialize() {
      var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var ctx = this._._scope,
          _this$_ = this._,
          baseId = _this$_.baseId,
          key = _this$_.key,
          keyPID = _this$_.keyPID,
          incrementId = _this$_.incrementId,
          alias = cfg.alias,
          parentAlias = cfg.parentAlias,
          sid = key ? (parentAlias || keyPID) + '>' + key : alias || parentAlias && parentAlias + '/' + baseId || this._id; //alias = alias || baseId;

      return this.serialize_ex(cfg, output, sid, alias, ["$parent"]);
    }
  }, {
    key: "serialize_ex",
    value: function serialize_ex() {
      var _this11 = this;

      var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var sid = arguments.length > 2 ? arguments[2] : undefined;
      var alias = arguments.length > 3 ? arguments[3] : undefined;
      var exclude = arguments.length > 4 ? arguments[4] : undefined;
      var ctx = this._._scope,
          _this$_2 = this._,
          baseId = _this$_2.baseId,
          key = _this$_2.key,
          keyPID = _this$_2.keyPID,
          incrementId = _this$_2.incrementId,
          _cfg$withChilds = cfg.withChilds,
          withChilds = _cfg$withChilds === void 0 ? true : _cfg$withChilds,
          withParents = cfg.withParents,
          _cfg$withMixed = cfg.withMixed,
          withMixed = _cfg$withMixed === void 0 ? true : _cfg$withMixed,
          norefs = cfg.norefs,
          parentAlias = cfg.parentAlias,
          _cfg$aliases = cfg.aliases,
          aliases = _cfg$aliases === void 0 ? {} : _cfg$aliases;

      if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["keyWalknGet"])(output, sid)) {
        if (!incrementId) // done
          return output;else if (incrementId) {
          // generate key id
          var i = -1;

          while (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["keyWalknGet"])(output, sid + '[' + ++i + ']')) {
            ;
          }

          sid = sid + '[' + i + ']';
        }
      } //@todo : better serialize method


      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["keyWalknSet"])(output, sid, {});
      Object.keys(ctx).forEach(function (id) {
        if (exclude.includes(id) || Scope.isStoreClass(ctx[id]) || Scope.isScopeClass(ctx[id])) return;
        ctx[id].serialize(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, cfg, {
          parentAlias: sid
        }), output);
      }); //withParents && this.parent && this.parent.serialize({
      //	                                                    withChild  : false,
      //	                                                    withParents: true,
      //	                                                    withMixed,
      //	                                                    norefs
      //                                                    }, output);

      withChilds && this._.childScopes.forEach(function (ctx) {
        !ctx._.isLocalId && ctx.serialize({
          withChild: true,
          withParents: false,
          parentAlias: sid,
          withMixed: withMixed,
          norefs: norefs
        }, output);
      });
      withMixed && this._._mixed.forEach(function (ctx) {
        !ctx._.isLocalId && ctx.serialize({
          withChild: false,
          withParents: false,
          withMixed: withMixed,
          norefs: norefs
        }, output);
      });

      if (alias) {
        output = Object.keys(output).reduce(function (h, k) {
          return h[k === _this11._id ? alias : k] = output[k], h;
        }, {});
      }

      return output;
    }
    /**
     * Restore state & data from the serialize fn
     * @param snapshot
     * @param force
     */

  }, {
    key: "restore",
    value: function restore(snapshot) {
      var _this12 = this;

      var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : is__WEBPACK_IMPORTED_MODULE_9___default.a.bool(cfg) && cfg;
      var ctx = this._._scope,
          snap;

      if (snapshot && cfg && cfg.alias && cfg.alias != this._id) {
        snap = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, snapshot, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, this._id, snapshot[cfg.alias]));
        delete snap[cfg.alias];
        snapshot = snap;
      }

      snapshot = snapshot && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["keyWalknGet"])(snapshot, this._id) || this.takeSnapshotByKey(this._id);
      if (!snapshot) return;
      this._.snapshot = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, snapshot);
      snap = snapshot['/'];
      snapshot['/'] = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, snap);
      snap && Object.keys(snap).forEach(function (name) {
        if (name == "$parent") return;

        if (ctx[name]) {
          if (force && !is__WEBPACK_IMPORTED_MODULE_9___default.a.fn(ctx[name])) ctx[name].destroy();

          _this12._mount(name); // quiet

        }
      });

      this._._mixed.forEach(function (ctx) {
        !ctx._.isLocalId && ctx.restore(undefined, force);
      });

      this._.childScopes.forEach(function (ctx) {
        !ctx._.isLocalId && ctx.restore(undefined, force);
      });
    }
  }, {
    key: "getSnapshotByKey",
    value: function getSnapshotByKey(key, local) {
      // only have the local snap
      if (this._.snapshot && key.startsWith(this._id)) {
        var obj = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["keyWalknGet"])(this._.snapshot, key.substr(this._id.length));
        return obj;
      } else return !local && this.parent && this.parent.getSnapshotByKey(key) || this.stores.$parent && this.stores.$parent.getSnapshotByKey(key);
    }
  }, {
    key: "getSnapshotByKeyExt",
    value: function getSnapshotByKeyExt(snapshot, key, local) {
      // only have the local snap
      if (snapshot) {
        var obj = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["keyWalknGet"])(snapshot, key);
        return obj;
      }
    }
  }, {
    key: "takeSnapshotByKey",
    value: function takeSnapshotByKey(key, local) {
      if (this._.snapshot && key.startsWith(this._id)) {
        var obj = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["keyWalknGet"])(this._.snapshot, key.substr(this._id.length));

        if (obj) {
          this.deleteSnapshotByKey(key, true);
        }

        return obj;
      } else return !local && this.parent && this.parent.takeSnapshotByKey(key) || this.stores.$parent && this.stores.$parent.takeSnapshotByKey(key);
    }
  }, {
    key: "deleteSnapshotByKey",
    value: function deleteSnapshotByKey(key, local) {
      if (this._.snapshot && key.startsWith(this._id)) {
        var obj = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["keyWalknGet"])(this._.snapshot, key.substr(this._id.length).replace(/^(.*[\>|\/])[^\>|\/]+$/ig, '$1'));
        if (obj) delete obj[key.replace(/^.*[\>|\/]([^\>|\/]+)$/ig, '$1')];
      }

      return !local && this.parent && this.parent.deleteSnapshotByKey(key) || this.stores.$parent && this.stores.$parent.deleteSnapshotByKey(key);
    }
  }, {
    key: "setState",
    value: function setState(pState) {
      var _this13 = this;

      Object.keys(pState).forEach(function (k) {
        return _this13.state[k] = pState[k];
      });
    }
    /**
     * get a parsed reference
     * @param _ref
     * @returns {{storeId, path, alias: *, ref: *}}
     */

  }, {
    key: "parseRef",
    value: function parseRef(_ref) {
      if (typeof _ref !== 'string') {
        // @todo : rm this
        this.register(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, _ref.name, _ref.store));
        _ref = _ref.name;
      }

      var ref = _ref.split(':');

      ref[0] = ref[0].split('.');
      return {
        storeId: ref[0][0],
        path: ref[0],
        alias: ref[1] || ref[0][ref[0].length - 1],
        ref: _ref
      };
    }
    /**
     * Dispatch an action to the top parent & mixed scopes, in all stores
     *
     * @param action
     * @param data
     * @returns {Scope}
     */

  }, {
    key: "dispatch",
    value: function dispatch(action) {
      var _this14 = this,
          _this$parent2;

      for (var _len = arguments.length, argz = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        argz[_key - 1] = arguments[_key];
      }

      if (this.dead) {
        console.warn("Dispatch was called on a dead scope, check you're async functions in this stack...", new Error().stack);
        return;
      }

      var bActs = this._._boundedActions;
      Object.keys(this._._scope).forEach(function (id) {
        var _this14$_$_scope$id;

        if (id == "$parent") return;
        if (!is__WEBPACK_IMPORTED_MODULE_9___default.a.fn(_this14._._scope[id])) (_this14$_$_scope$id = _this14._._scope[id]).trigger.apply(_this14$_$_scope$id, [action].concat(argz));
      });
      if (bActs && bActs.test(action)) return;

      this._._mixed.forEach(function (ctx) {
        return ctx.dispatch.apply(ctx, [action].concat(argz));
      });

      this.parent && (_this$parent2 = this.parent).dispatch.apply(_this$parent2, [action].concat(argz));
      return this;
    } //

  }, {
    key: "trigger",
    value: function trigger() {
      this.dispatch.apply(this, arguments);
    }
    /**
     * once('stable', cb)
     * @param obj {React.Component|Store|function)
     * @param key {string} optional key where to map the public state
     */

  }, {
    key: "then",
    value: function then(cb) {
      var _this15 = this;

      if (!this._stable) return this.once('stable', function (e) {
        return _this15.then(cb);
      });
      return cb(this.data);
    }
  }, {
    key: "onceStableTree",
    value: function onceStableTree(cb) {
      var _this16 = this;

      if (this._.unStableChilds) return this.once('stableTree', function (e) {
        return _this16.onceStableTree(cb);
      }); //if ( !this._stable )
      //	return this.once('stable', e => this.onceStableTree(cb));

      return cb(this.data);
    }
    /**
     * Call retain on the scoped stores basing the given list
     *
     * @param stores
     * @param reason
     */

  }, {
    key: "retainStores",
    value: function retainStores() {
      var _this17 = this;

      var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var reason = arguments.length > 1 ? arguments[1] : undefined;
      stores.forEach(function (id) {
        return _this17.stores[id] && _this17.stores[id].retain && _this17.stores[id].retain(reason);
      });
    }
    /**
     * Call retain on the scoped stores
     *
     * @param stores
     * @param reason
     */

  }, {
    key: "disposeStores",
    value: function disposeStores() {
      var _this18 = this;

      var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var reason = arguments.length > 1 ? arguments[1] : undefined;
      stores.forEach(function (id) {
        return _this18.stores[id] && _this18.stores[id].dispose && _this18.stores[id].dispose(reason);
      });
    }
    /**
     * Keep the scope unstable until release is called
     * @param reason
     */

  }, {
    key: "wait",
    value: function wait(reason) {
      //console.log("wait", reason);
      this._stable && !this.__locks.all && this.emit("unstable", this);
      this._stable = false;
      this.__locks.all++;

      if (reason) {
        this.__locks[reason] = this.__locks[reason] || 0;
        this.__locks[reason]++;
      }
    }
    /**
     * Stabilize the scope if no more locks remain (wait fn)
     * @param reason
     */

  }, {
    key: "release",
    value: function release(reason) {
      var _this19 = this;

      if (reason) {
        if (this.__locks[reason] == 0) console.error("Release more than locking !", reason);
        this.__locks[reason] = this.__locks[reason] || 0;
        this.__locks[reason]--;
      }

      if (!reason && this.__locks.all == 0) console.error("Release more than locking !");
      this.__locks.all--;

      if (!this.__locks.all) {
        if (this._.stabilizerTM) return;
        this._.stabilizerTM && clearTimeout(this._.stabilizerTM);
        this._.stabilizerTM = setTimeout(function (e) {
          _this19._.stabilizerTM = null;
          if (_this19.__locks.all) return;
          _this19._.propagTM && clearTimeout(_this19._.propagTM);
          _this19._rev++;
          _this19._stable = true;

          _this19.emit("stable", _this19);

          !_this19.dead && _this19._propag(); // stability can induce destroy
        });
      }
    }
    /**
     * Propag stores updates basing theirs last updates
     */

  }, {
    key: "propag",
    value: function propag() {
      var _this20 = this;

      this._.propagTM && clearTimeout(this._.propagTM);
      this._.propagTM = setTimeout(function (e) {
        _this20._.propagTM = null;

        _this20._propag();
      }, 2);
    }
  }, {
    key: "_propag",
    value: function _propag() {
      var _this21 = this;

      if (this._.followers.length) this._.followers.forEach(function (_ref3) {
        var obj = _ref3[0],
            key = _ref3[1],
            as = _ref3[2],
            lastRevs = _ref3[3],
            remaps = _ref3[3];

        var data = _this21.getUpdates(lastRevs);

        if (!data) return; //console.log(data, lastRevs)

        if (typeof obj != "function") {
          //console.log("setState ",obj, Object.keys(data))
          if (as) obj.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, as, data));else obj.setState(data);
        } else {
          obj(data, lastRevs && _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(lastRevs) || "no revs");
        } // lastRevs &&
        // key.forEach(id => (lastRevs[id] = this.stores[id] &&
        // this.stores[id]._rev || 0));

      });
      this.emit("update", this.getUpdates());
    }
    /**
     * is stable
     * @returns bool
     */

  }, {
    key: "isStable",
    value: function isStable() {
      return this._stable;
    }
    /**
     * is stable tree
     * @returns bool
     */

  }, {
    key: "isStableTree",
    value: function isStableTree() {
      return !this._.unStableChilds;
    }
    /**
     * Register children
     * @param scope
     * @private
     */

  }, {
    key: "_addChild",
    value: function _addChild(scope) {
      var _this22 = this;

      this._.childScopes.push(scope);

      this._.seenChilds++;
      var lists = {
        'stable': function stable(s) {
          _this22._.unStableChilds--;
          if (!_this22._.unStableChilds) _this22.emit("stableTree", _this22);
        },
        'unstable': function unstable(s) {
          _this22._.unStableChilds++;
          if (1 == _this22._.unStableChilds) _this22.emit("unstableTree", _this22);
        },
        'stableTree': function stableTree(s) {
          _this22._.unStableChilds--;
          if (!_this22._.unStableChilds) _this22.emit("stableTree", _this22);
        },
        'unstableTree': function unstableTree(s) {
          _this22._.unStableChilds++;
          if (1 == _this22._.unStableChilds) _this22.emit("unstableTree", _this22);
        },
        'destroy': function destroy(ctx) {
          if (ctx._.unStableChilds) _this22._.unStableChilds--;
          if (!ctx.isStable()) _this22._.unStableChilds--;
          if (!_this22._.unStableChilds) _this22.emit("stableTree", _this22);
        }
      },
          wasStable = this._.unStableChilds;
      !scope.isStable() && this._.unStableChilds++;
      scope._.unStableChilds && this._.unStableChilds++;

      this._.childScopesList.push(lists);

      if (!wasStable && this._.unStableChilds) this.emit("unstableTree", this);
      scope.on(lists);
    }
  }, {
    key: "_rmChild",
    value: function _rmChild(ctx) {
      var i = this._.childScopes.indexOf(ctx),
          wasStable = this._.unStableChilds;

      if (i != -1) {
        this._.childScopes.splice(i, 1);

        !ctx.isStable() && this._.unStableChilds--;
        ctx._.unStableChilds && this._.unStableChilds--;
        ctx.un(this._.childScopesList.splice(i, 1)[0]);
        if (wasStable && !this._.unStableChilds) this.emit("stableTree");
      }
    }
  }, {
    key: "retain",
    value: function retain(reason) {
      this.__retains.all++; //console.log("retain", this._id, reason);

      if (reason) {
        this.__retains[reason] = this.__retains[reason] || 0;
        this.__retains[reason]++;
      }
    }
  }, {
    key: "dispose",
    value: function dispose(reason) {
      var _this23 = this;

      //console.log("dispose", this._id, reason);
      if (reason) {
        if (!this.__retains[reason]) throw new Error("Dispose more than retaining : " + reason);
        this.__retains[reason]--;
      }

      if (!this.__retains.all) throw new Error("Dispose more than retaining !");
      this.__retains.all--;

      if (!this.__retains.all) {
        //console.log("dispose do destroy ", this._id, this._persistenceTm);
        if (this._.persistenceTm) {
          this._.destroyTM && clearTimeout(this._.destroyTM);
          this._.destroyTM = setTimeout(function (e) {
            _this23.then(function (s) {
              !_this23.__retains.all && !_this23.dead && _this23.destroy();
            });
          }, this._.persistenceTm);
        } else {
          this.then(function (s) {
            return !_this23.__retains.all && !_this23.dead && _this23.destroy();
          });
        }
      }
    }
    /**
     * order destroy of local stores
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this24 = this;

      var ctx = this._._scope; //console.warn("destroy", this._id);

      this._getAllChilds().map(function (scope) {
        return scope.destroy();
      });

      for (var key in ctx) {
        if (!is__WEBPACK_IMPORTED_MODULE_9___default.a.fn(ctx[key])) {
          if (key == "$parent") continue;
          !ctx[key]._autoDestroy && ctx[key].dispose("scoped");
        }
      }

      this._.stabilizerTM && clearTimeout(this._.stabilizerTM);
      this._.propagTM && clearTimeout(this._.propagTM);
      Object.keys(this._._listening).forEach(function (id) {
        return id !== "$parent" && _this24._._scope[id].removeListener(_this24._._listening[id]);
      });

      while (this._._mixedList.length) {
        this._._mixed[0].removeListener(this._._mixedList.shift());

        this._._mixed.shift().dispose("mixedTo");
      }

      _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(this._.followers).map(function (follower) {
        return _this24.unBind.apply(_this24, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(follower));
      });

      if (this._._parentList) {
        this.parent._rmChild(this);

        this.parent.removeListener(this._._parentList);
        this.parent.dispose("isMyParent");
        this._._parentList = null;
      }

      this.dead = true;
      delete openScopes[this._id];
      this.emit("destroy", this);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Scope;
}(_utils_Emitter__WEBPACK_IMPORTED_MODULE_11__["default"]);

Scope.persistenceTm = 1;
Scope.Store = null;

Scope.scopeRef = function scopeRef(path) {
  this.path = path;
};

Scope.scopes = openScopes;

Scope.isScope = function (obj) {
  return obj instanceof Scope;
};

Scope.isScopeClass = function (obj) {
  return Scope.isPrototypeOf(obj) || obj === Scope;
};

var _default = Scope;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__proto__push, "__proto__push", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\Scope.js");
  reactHotLoader.register(openScopes, "openScopes", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\Scope.js");
  reactHotLoader.register(SimpleObjectProto, "SimpleObjectProto", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\Scope.js");
  reactHotLoader.register(Scope, "Scope", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\Scope.js");
  reactHotLoader.register(_default, "default", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\Scope.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/Store.js":
/*!**********************!*\
  !*** ./src/Store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);











(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */
var is = __webpack_require__(/*! ./utils/is */ "./src/utils/is.js"),
    Scope = __webpack_require__(/*! ./Scope */ "./src/Scope.js"),
    _require = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js"),
    keyWalknSet = _require.keyWalknSet,
    keyWalknGet = _require.keyWalknGet,
    EventEmitter = __webpack_require__(/*! ./utils/Emitter */ "./src/utils/Emitter.js"),
    TaskSequencer = __webpack_require__(/*! ./utils/TaskSequencer */ "./src/utils/TaskSequencer.js"),
    shortid = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js"),
    objProto = Object.getPrototypeOf({});

var Store =
/*#__PURE__*/
function (_EventEmitter) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(Store, _EventEmitter);

  //static use                  = [];// overridable list of source stores
  // overridable list of store that will allow push if updated
  // default state

  /**
   * if retain goes to 0 :
   * false to not destroy,
   * 0 to sync auto destroy
   * Ms to autodestroy after tm ms if no retain has been called
   * @type {boolean|Int}
   */

  /**
   * Constructor, will build a rescope store
   *
   * (scope, {require,use,apply,state, data})
   * (scope)
   *
   * @param scope {object} scope where to find the other stores (default : static
   *     staticScope )
   * @param keys {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key",
   *     otherStore.as("otherKey")]
   */
  function Store() {
    var _this$_require, _this$_require2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Store);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Store).call(this));
    var argz = Array.prototype.slice.call(arguments),
        _static = _this.constructor,
        scope = argz[0] instanceof Scope ? argz.shift() : _static.scope ? Scope.getScope(_static.scope) : is.string(argz[0]) ? Scope.getScope(argz.shift()) : _static.staticScope,
        cfg = argz[0] && !is.array(argz[0]) && !is.string(argz[0]) ? argz.shift() : {},
        taskQueue = is.array(argz[0]) ? argz.shift() : null,
        name = cfg.name || _static.name,
        watchs = cfg.use || [],
        apply = cfg.apply || null,
        initialState = _static.state || _static.initialState || _static.defaultState;
    _this._uid = cfg._uid || shortid.generate();
    _this.__retains = {
      all: 0
    };
    _this.__locks = {
      all: 0
    };
    _this._onStabilize = []; // autoDestroyTm

    _this._autoDestroy = !!_this._persistenceTm;
    _this._persistenceTm = cfg.persistenceTm || _static.persistenceTm || (cfg.autoDestroy || _static.autoDestroy) && 5;
    _this._cfg = cfg;

    if (cfg && cfg.on) {
      _this.on(cfg.on);
    }

    _this.name = name;

    if (scope.stores) {
      _this.scopeObj = scope;
      _this.scope = scope.stores;
    } else {
      _this.scopeObj = new Scope(scope);
      _this.scope = scope.stores;
    } // standardized scope access


    _this.$scope = _this.scopeObj;
    _this.$stores = _this.scopeObj.stores;
    _this.$actions = _this.scopeObj.actions;
    _this.$dispatch = _this.scopeObj.dispatch.bind(_this.scopeObj);
    _this._rev = _this.constructor._rev || 0;
    _this._revs = {};
    _this.stores = {};
    _this._require = [];
    _this._sources = [name]; // register source stores

    if (is.array(_static.use)) {
      _this._use = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(watchs), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()((_static.use || []).map(function (key) {
        var ref = key.match(/^(\!?)([^\:]*)(?:\:(.*))?$/);

        if (ref[1]) {
          var ref2 = ref[2].split('.');

          _this._require.push(ref[3] || ref2[ref2.length - 1]); // require check value of the aliased
          // imported value


          return key.substr(1);
        }

        return key;
      })));
    } else {
      _this._use = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(watchs), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(_static.use ? Object.keys(_static.use).map(function (key) {
        var ref = key.match(/^(\!?)(.*)$/);
        ref[1] && _this._require.push(_static.use[key]);
        return ref[2] + (_static.use[key] === true ? '' : ':' + _static.use[key]);
      }) : []));
    }

    if (_static.require) (_this$_require = _this._require).push.apply(_this$_require, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(_static.require));
    if (cfg.require) (_this$_require2 = _this._require).push.apply(_this$_require2, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(cfg.require));
    _this._followers = [];
    _this._changesSW = initialState || {};
    _this.state = initialState && {};
    if (apply) _this.apply = apply;
    /**
     * Initial state isn't fully initialized ( childs constructors can set it )
     * Scope based instance have taskQueue to delay init synchronously, if not
     * present we use setTimeout
     */

    if (taskQueue) {
      taskQueue.push(_this._afterConstructor.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    } else setTimeout(_this._afterConstructor.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));

    return _this;
  }
  /**
   * Get the incoming state ( for immediate state relative actions )
   * @returns {{}|*}
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Store, [{
    key: "_afterConstructor",
    value: function _afterConstructor() {
      var cfg = this._cfg,
          _static = this.constructor,
          snapshot = this.restore(undefined, true),
          initialState = this.state,
          initialData = this.data,
          applied;
      {
        if (initialData) this.data = initialData;else if (_static.data !== undefined) this.data = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, _static.data);else if (cfg.hasOwnProperty("data")) this.data = cfg.data;
        if (cfg.hasOwnProperty("state") && cfg.state !== undefined) initialState = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, initialState, cfg.state);

        if (this.data === undefined) {
          if (initialState || this._use.length) {
            // sync apply
            this._changesSW = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, this._changesSW, initialState || {}, this.$scope.map(this, this._use));
            this.state = {};

            if (this.shouldApply(this._changesSW) && this.data === undefined) {
              this.data = this.apply(this.data, this._changesSW, this._changesSW);
              applied = true;
              this.state = this._changesSW;
              this._changesSW = {};
            }
          }
        } else {
          applied = true;
          this.state = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, this._changesSW, initialState || {}, this.$scope.map(this, this._use));
          this._changesSW = {};
        }
      }

      if ((this.data !== undefined || applied) && !this.__locks.all) {
        this._stable = true;
        this._rev++;
      } else {
        this._stable = false;

        if (!_static.managed && !this.state && (!this._use || !this._use.length)) {
          console.warn("ReScope store '", this.name, "' have no initial data, state or use. It can't stabilize...");
        }
      }

      !this._stable && this.emit('unstable', this.state);
    }
    /**
     * Overridable method to know if a data change should be propag to the listening
     * stores & components
     */

  }, {
    key: "shouldPropag",
    value: function shouldPropag(nDatas) {
      return true;
    }
    /**
     * Overridable method to choose if this store should be serialized,
     * If not it will be applied normally when restoring
     * @returns {boolean}
     */

  }, {
    key: "shouldSerialize",
    value: function shouldSerialize() {
      return true;
    }
  }, {
    key: "hasDataChange",
    value: function hasDataChange(nDatas) {
      var _static = this.constructor,
          r,
          cDatas = this.data;
      r = !cDatas && nDatas || cDatas !== nDatas;
      !r && cDatas && Object.keys(cDatas).forEach(function (key) {
        r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
      });
      !r && nDatas && Object.keys(nDatas).forEach(function (key) {
        r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
      });
      return r;
    }
    /**
     * Overridable method to know if a state change should be applied
     */

  }, {
    key: "shouldApply",
    value: function shouldApply() {
      var _this2 = this;

      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
      var _static = this.constructor;
      return !!this.isComplete(state) && (is.array(_static.follow) ? _static.follow.reduce(function (r, i) {
        return r || state && state[i];
      }, false) : _static.follow ? Object.keys(_static.follow).reduce(function (r, i) {
        return r || state && is.fn(_static.follow[i]) && _static.follow[i].call(_this2, state[i]) || _static.follow[i] && state[i] !== _this2.state[i];
      }, false) : true);
    }
    /**
     * Overridable applier / remapper
     * If state or lastPublicState are simple hash maps apply will return {...data,
     * ...state} if not it will return the last private state
     * @param data
     * @param state
     * @returns {*}
     */

  }, {
    key: "apply",
    value: function apply(data, state, changes) {
      state = state || this.state;
      if (this.refine) return this.refine.apply(this, arguments);
      if (!data || data.__proto__ !== objProto || state.__proto__ !== objProto) return state;else return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, data, state);
    }
    /**
     * Debounce this store propagation ( & reducing )
     * @param cb
     */

  }, {
    key: "stabilize",
    value: function stabilize(cb) {
      cb && this.once('stable', cb);
      this._stable && this.emit('unstable', this.state, this.data);
      this._stable = false;
      if (this._stabilizer) return;
      this._stabilizer = TaskSequencer.pushTask(this, 'pushState');
    }
  }, {
    key: "retrieve",
    value: function retrieve(path) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var obj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.data;
      path = is.string(path) ? path.split('.') : path;
      return !obj || !path || !path.length ? obj : path.length == i + 1 ? obj[path[i]] : this.retrieve(path, i + 1, obj[path[i]]);
    }
  }, {
    key: "dispatch",
    value: function dispatch(action) {
      var _this$scopeObj;

      for (var _len = arguments.length, argz = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
        argz[_key2 - 1] = arguments[_key2];
      }

      (_this$scopeObj = this.scopeObj).dispatch.apply(_this$scopeObj, [action].concat(argz));
    }
  }, {
    key: "trigger",
    value: function trigger(action) {
      var actions = this.constructor.actions;

      if (actions && actions[action]) {
        var _actions$action;

        for (var _len2 = arguments.length, argz = new Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
          argz[_key3 - 1] = arguments[_key3];
        }

        var ns = (_actions$action = actions[action]).call.apply(_actions$action, [this].concat(argz));

        ns && this.setState(ns);
      }
    }
    /**
     * Pull stores in the private state
     * @param stores  {Array} (passed to Store::map) Ex : ["session",
     *     "otherNamedStore:key", otherStore.as("otherKey")]
     */

  }, {
    key: "pull",
    value: function pull(stores, doWait, origin) {
      var _this3 = this;

      var initialOutputs = this.scopeObj.map(this, stores);

      if (doWait) {
        this.wait();
        stores.forEach(function (s) {
          return _this3.scope[s] && _this3.wait(_this3.scope[s]);
        });
        this.release();
      }

      return initialOutputs;
    }
    /**
     * Set & Push the result data to followers if stable
     * @param cb
     */

  }, {
    key: "push",
    value: function push(data, force, cb) {
      cb = force === true ? cb : force;
      force = force === true;

      if (!force && !this.hasDataChange(data)) {
        cb && cb();

        if (!this.__locks.all) {
          var stable = this._stable;
          this._stable = true;
          !stable && this.emit('stable', this.state, this.data);
          this._stabilizer = null;
        }

        return false;
      }

      this.data = data;
      this.wait();
      this.release(cb);
    }
    /**
     * Call the apply fn using the current accumulated state update then, push the
     * resulting data if stable
     * @param force
     */

  }, {
    key: "pushState",
    value: function pushState(force) {
      if (!force && !this._changesSW && this.data) return;

      var nextState = this._nextState || _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, this.state, this._changesSW || {}),
          nextData = this.apply(this.data, nextState, this._changesSW);

      this._stabilizer = null;
      this.state = nextState;
      this._changesSW = null;

      if (!force && !this.hasDataChange(nextData)) {
        if (!this.__locks.all) {
          var stable = this._stable;
          this._stable = true;
          !stable && this.emit('stable', this.state, this.data);
          this._stabilizer = null;
        }

        return false;
      }

      this.data = nextData;
      this.wait();
      this.release();
    }
    /**
     * Add 'pState' to the current accumulated state updates
     * & wait source stores stabilization before pushing these state updates
     * @param pState
     * @param cb
     */

  }, {
    key: "setState",
    value: function setState(pState, cb, sync) {
      var i = 0,
          change,
          changes = this._changesSW = this._changesSW || {};

      for (var k in pState) {
        if (!this.state || changes.hasOwnProperty(k) // todo
        && pState[k] !== changes[k] || pState.hasOwnProperty(k) && (pState[k] !== this.state[k] || this.state[k] && pState[k] && pState[k]._rev != this._revs[k] // rev/hash update
        )) {
          change = true;
          this._revs[k] = pState[k] && pState[k]._rev || true;
          changes[k] = pState[k];
        }
      }

      this._nextState = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, this.state, changes);

      if (!this.shouldApply(this._nextState)) {
        return;
      }

      if (sync) {
        this.pushState();
        cb && cb();
      } else {
        if (change) {
          this.stabilize(cb);
        } else cb && cb();
      }

      return this;
    }
    /**
     * Update the current state & push it
     * @param pState
     * @param cb
     */

  }, {
    key: "setStateSync",
    value: function setStateSync(pState) {
      var i = 0,
          change,
          changes = this._changesSW = this._changesSW || {};

      for (var k in pState) {
        if (!this.state || pState.hasOwnProperty(k) && (pState[k] != this.state[k] || this.state[k] && pState[k] && pState[k]._rev != this._revs[k] // rev/hash update
        )) {
          change = true;
          this._revs[k] = pState[k] && pState[k]._rev || true;
          changes[k] = pState[k];
        }
      }

      this.shouldApply(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, this.state || {}, changes)) && this.pushState();
      return this.data;
    }
    /**
     * get a store-key pair for Store::map
     * @param {string} name
     * @returns {{store: Store, name: *}}
     */

  }, {
    key: "as",
    value: function as(name) {
      return {
        store: this,
        name: name
      };
    }
  }, {
    key: "on",
    value: function on(lists) {
      var _this4 = this;

      if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
        return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Store.prototype), "on", _this4).call(_this4, k, lists[k]);
      });else _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Store.prototype), "on", this).apply(this, arguments);
    }
  }, {
    key: "removeListener",
    value: function removeListener(lists) {
      var _this5 = this;

      if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
        return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Store.prototype), "removeListener", _this5).call(_this5, k, lists[k]);
      });else _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Store.prototype), "removeListener", this).apply(this, arguments);
    }
    /**
     * is complete (all requiered keys are here)
     * @returns bool
     */

  }, {
    key: "isComplete",
    value: function isComplete() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
      var _static = this.constructor;
      return !this._require || !this._require.length || state && this._require.reduce(function (r, key) {
        return r && state[key];
      }, true);
    }
    /**
     * is stable
     * @returns bool
     */

  }, {
    key: "isStable",
    value: function isStable() {
      return this._stable;
    }
    /**
     * Serialize state & data with sources refs
     * @returns bool
     */

  }, {
    key: "serialize",
    value: function serialize() {
      var _this6 = this;

      var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var sId = cfg.parentAlias || this.scopeObj._id,
          refsCount = 0,
          refs = !cfg.norefs && is.array(this._use) && this._use.reduce(function (map, key) {
        var ref = _this6.$scope.parseRef(key),
            store = _this6.$stores[ref.storeId];

        if (store && Store.isStore(store) && !store.scopeObj._.isLocalId) refsCount++, map[ref.alias] = ref.path;
        return map;
      }, {}),
          state = this.state || {},
          persistent = this.shouldSerialize();

      if (!persistent) {
        keyWalknSet(output, sId + '/' + this.name, {
          dataRefs: cfg.dataRefs,
          refs: refs
        });
        return output;
      }

      var stateKeys = Object.keys(state) || [],
          stateRefs = stateKeys.map(function (k) {
        return state[k];
      }),
          inRefsCount = 0,
          dataRefs = cfg.dataRefs || {},
          inRefs = !cfg.norefs && this.data && Object.keys(this.data).reduce(function (map, key) {
        var ref = stateRefs.indexOf(_this6.data[key]);
        if (ref != -1) inRefsCount++, map[key] = stateKeys[ref];
        return map;
      }, {}),
          snap = {
        dataRefs: cfg.dataRefs,
        state: state && (cfg.norefs ? _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state) : Object.keys(state).reduce(function (h, k) {
          return !refs[k] && (h[k] = state[k]), h;
        }, {})),
        data: (this.data && this.data.__proto__ === objProto ? Object.keys(this.data).reduce(function (h, k) {
          if (!inRefs[k] && !dataRefs[k]) {
            h[k] = _this6.data[k];
            inRefsCount++;
          }

          return h;
        }, {}) : (is.bool(this.data) || is.number(this.data) || is.string(this.data)) && this.data) || undefined
      };
      refs && refsCount && (snap.refs = refs);
      inRefs && inRefsCount && (snap.inRefs = inRefs);
      keyWalknSet(output, sId + '/' + this.name, snap);
      return output;
    }
    /**
     * restore state & data
     * @returns bool
     */

  }, {
    key: "restore",
    value: function (_restore) {
      function restore(_x, _x2) {
        return _restore.apply(this, arguments);
      }

      restore.toString = function () {
        return _restore.toString();
      };

      return restore;
    }(function (snapshot, immediate) {
      var _this7 = this;

      snapshot = snapshot && keyWalknGet(snapshot, this.scopeObj._id + '/' + this.name) || this.$scope.takeSnapshotByKey(this.scopeObj._id + '/' + this.name);
      if (!snapshot) return;

      if (snapshot) {
        if (!this.isStable() && !immediate) this.then(function () {
          return restore(snapshot);
        });
        this.state = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, snapshot.state);
        snapshot.refs && Object.keys(snapshot.refs).forEach(function (key) {
          //todo
          _this7.state[key] = _this7.$scope.retrieve(snapshot.refs[key]);
        });

        if (snapshot.inRefs === true) {
          this.data = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, this.state);
        } else {
          this.data = snapshot.data;
          snapshot.inRefs && Object.keys(snapshot.inRefs).forEach(function (key) {
            //todo
            _this7.data[key] = _this7.state[snapshot.inRefs[key]]; //else
            //    console.warn('not found : ', key, snap && snap.refs[ key ])
          });
        }

        if (snapshot.dataRefs) {
          this.data = this.data || {};
          Object.keys(snapshot.dataRefs).forEach(function (key) {
            //todo
            _this7.$scope.restoreRefPath(snapshot.dataRefs[key]);

            _this7.data[key] = _this7.$scope.retrieve(snapshot.dataRefs[key]);
          });
        }
      }
    })
    /**
     * Un bind this store off the given component-key
     * @param obj
     * @param key
     * @returns {Array.<*>}
     */

  }, {
    key: "unBind",
    value: function unBind(obj, key, path) {
      var followers = this._followers,
          i = followers && followers.length;

      while (followers && i--) {
        if (followers[i][0] === obj && followers[i][1] === key && followers[i][2] === path) return followers.splice(i, 1);
      }
    }
    /**
     * Bind this store changes to the given component-key
     * @param obj {React.Component|Store|function)
     * @param key {string} optional key where to map the public state
     */

  }, {
    key: "bind",
    value: function bind(obj, key) {
      var setInitial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var path = arguments.length > 3 ? arguments[3] : undefined;

      this._followers.push([obj, key, path]);

      if (setInitial && this.data && this._stable) {
        var data = path ? this.retrieve(path) : this.data;

        if (typeof obj != "function") {
          if (key) obj.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, data));else obj.setState(data);
        } else {
          obj(data);
        }
      }
    }
    /**
     * once('stable', cb)
     * @param obj {React.Component|Store|function)
     * @param key {string} optional key where to map the public state
     */

  }, {
    key: "then",
    value: function then(cb) {
      var _this8 = this;

      if (this._stable) return cb(this.data);
      this.once('stable', function (e) {
        return cb(_this8.data);
      });
    }
    /**
     * Add a lock so the store will not propag it data untill release() is call
     * @param previous {Store|number|Array} @optional wf to wait, releases to wait or
     *     array of stuff to wait
     * @returns {this}
     */

  }, {
    key: "wait",
    value: function wait(previous) {
      if (typeof previous == "number") return this.__locks.all += previous;
      if (is.array(previous)) return previous.map(this.wait.bind(this));
      this._stable && this.emit('unstable', this.state, this.data);
      this._stable = false;
      this.__locks.all++;
      var reason = is.string(previous) ? previous : null;

      if (reason) {
        this.__locks[reason] = this.__locks[reason] || 0;
        this.__locks[reason]++;
      }

      if (previous && is.fn(previous.then)) {
        previous.then(this.release.bind(this, null));
      }

      return this;
    }
    /**
     * Decrease locks for this store, if it reach 0 ,
     * it will be propagated to the followers,
     * then, all stuff passed to "then" call back will be exec / released
     * @param desync
     * @returns {*}
     */

  }, {
    key: "release",
    value: function release(reason, cb) {
      var _static = this.constructor,
          me = this;
      var i = 0,
          wasStable = this._stable;

      if (is.fn(reason)) {
        cb = reason;
        reason = null;
      }

      if (reason) {
        if (this.__locks[reason] == 0) console.error("Release more than locking !", reason);
        this.__locks[reason] = this.__locks[reason] || 0;
        this.__locks[reason]--;
      }

      if (!reason && this.__locks.all == 0) console.error("Release more than locking !");

      if (! --this.__locks.all && this.isComplete()) {
        var propag = this.shouldPropag(this.data);
        this._stable = true;
        propag && this._rev++; //

        if (propag && this._followers.length) this._followers.forEach(function propag(follower) {
          var data = follower[2] ? me.retrieve(follower[2]) : me.data; //if ( !data ) return;

          if (typeof follower[0] == "function") {
            follower[0](data);
          } else {
            //cb && i++;
            follower[0].setState(follower[1] ? _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, follower[1], data) : data //,
            //cb && (
            //    () => (!(--i) && cb())
            //)
            );
          }
        }); //else

        !wasStable && this.emit('stable', this.data);
        propag && this.emit('update', this.data);
        cb && cb();
      } else cb && this.then(cb);

      return this;
    }
  }, {
    key: "propag",
    value: function propag(data) {
      this.emit('update', data);
    }
  }, {
    key: "retain",
    value: function retain(reason) {
      this.__retains.all++;

      if (reason) {
        this.__retains[reason] = this.__retains[reason] || 0;
        this.__retains[reason]++;
      }
    }
  }, {
    key: "dispose",
    value: function dispose(reason) {
      var _this9 = this;

      //console.warn("dispose", reason, this.__retains);
      if (reason) {
        if (!this.__retains[reason]) throw new Error("RS : Dispose more than retaining on store '" + this.name + "' : " + reason);
        this.__retains[reason]--;
      }

      if (this.__retains.all == 0) throw new Error("RS : Dispose more than retaining on store " + this.name);
      this.__retains.all--;

      if (!this.__retains.all) {
        if (this._persistenceTm) {
          this._destroyTM && clearTimeout(this._destroyTM);
          this._destroyTM = setTimeout(function (e) {
            _this9._destroyTM = null; //this.then(s => {

            !_this9.__retains.all && !_this9.dead && _this9.destroy(); //});
          }, this._persistenceTm);
        } else {
          //this.then(s =>
          !this.__retains.all && !this.dead && this.destroy(); //);
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      //  console.log("destroy", this._uid);
      this.emit('destroy', this);
      if (this._stabilizer) clearTimeout(this._stabilizer);
      if (this._followers.length) this._followers.forEach(function (follower) {
        if (typeof follower[0] !== "function") {
          if (follower[0].stores) delete follower[0].stores[follower[1]];
        }
      });
      this._followers.length = 0;
      this.constructor._rev = this.rev;
      this.dead = true;
      this._revs = this.data = this.state = this.scope = null;
      this.removeAllListeners();
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }, {
    key: "nextState",
    get: function get() {
      return this._changesSW && _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, this.state, this._changesSW) || this.state;
    }
  }]);

  return Store;
}(EventEmitter);
/**
 * get a static aliased reference of a store
 * @param {string} name
 * @returns {{store: Store, name: *}}
 */


Store.follow = void 0;
Store.require = void 0;
Store.staticScope = new Scope({}, {
  id: "static"
});
Store.state = undefined;
Store.persistenceTm = false;

Store.as = function (name) {
  return {
    store: this,
    name: name
  };
};
/**
 * @todo
 * Map all named stores in {keys} to the {object}'s state
 * Hook componentWillUnmount (for react comp) or destroy to unBind them automatically
 * @static
 * @param object {Object} target state aware object (React.Component|Store|...)
 * @param keys {Array} Ex : ["session", "otherStaticNamedStore:key",
 *     store.as('anotherKey')]
 */


Store.map = function (cStore, keys, scope, origin) {
  var setInitial = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var targetRevs = cStore._revs || {};
  var targetScope = cStore.stores || (cStore.stores = {});
  var initialOutputs = {};
  keys = is.array(keys) ? _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(keys) : [keys];
  scope = scope || Store.staticScope;
  keys = keys.filter( // @todo : use query refs
  // (store)(\.store)*(\[(\*|(props)\w+)+)\])?(\:alias)
  function (key) {
    var _cStore$_sources;

    if (!key) {
      console.error("Not a mappable store item '" + key + "' in " + origin + ' !!');
      return false;
    }

    var name, alias, path, store, _key;

    if (key.store && key.name) {
      alias = name = key.name;
      store = key.store;
    } else if (is.fn(key)) {
      name = alias = key.name || key.defaultName;
      store = key;
    } else {
      _key = key.match(/([^\.\:]+)((?:\.[^\.\:]+)*)(?:\:([^\.\:]+))?/);
      name = _key[1];
      path = _key[2] && _key[2].substr(1);
      store = scope.stores[_key[1]];
      alias = _key[3] || path && path.match(/([^\.]*)$/)[0] || _key[1];
    }

    if (!store) {
      var i = [];

      for (var o in scope.stores) {
        i.push(o);
      }

      console.error("Not a mappable store item '" + name + "/" + alias + "' in " + (cStore.name || cStore) + ' !!', store, _key, scope.stores, i);
      return false;
    }

    if (Scope.isScopeClass(store)) scope._mount(name);

    if (Scope.isScope(store)) {
      store = scope._mount(key);
    } else if (targetRevs[name]) return false; // ignore dbl uses for now


    if (is.fn(store)) {
      scope._mount(name);

      scope.stores[name].bind(cStore, alias, setInitial, path);
    } else {
      store.bind(cStore, alias, setInitial, path);
    } // give initial store weight basing sources


    scope.stores[name]._sources && (_cStore$_sources = cStore._sources).push.apply(_cStore$_sources, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(scope.stores[name]._sources));
    targetRevs[alias] = targetRevs[alias] || true;
    !targetScope[name] && (targetScope[name] = scope.stores[name]);
    if (scope.stores[name].hasOwnProperty('data')) initialOutputs[name] = scope.data[name];
    return true;
  }); // ... @todo

  cStore.once('destroy', function () {
    keys.map(function (key) {
      var name, alias, path, store;

      if (key.store && key.name) {
        alias = name = key.name;
        store = key.store;
      } else if (is.fn(key)) {
        name = alias = key.name || key.defaultName;
        store = scope.stores[name];
      } else {
        key = key.match(/([^\.\:]+)((?:\.[^\.\:]+)*)(?:\:([^\.\:]+))?/);
        name = key[1];
        path = key[2] && key[2].substr(1);
        store = scope.stores[key[1]];
        alias = key[3] || path && path.match(/([^\.]*)$/)[0] || key[1];
      }

      store && !is.fn(store) && store.unBind(cStore, alias, path);
    });
  });
  return initialOutputs;
};

Store.isStore = Scope.isStore = function (obj) {
  return obj instanceof Store;
};

Store.isStoreClass = Scope.isStoreClass = function (obj) {
  return Store.isPrototypeOf(obj) || obj === Store;
};

var _default = Store;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(objProto, "objProto", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\Store.js");
  reactHotLoader.register(Store, "Store", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\Store.js");
  reactHotLoader.register(_default, "default", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\Store.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony import */ var _Scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scope */ "./src/Scope.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ "./src/Store.js");
/* harmony import */ var _utils_scopable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/scopable */ "./src/utils/scopable.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */
var $global = typeof window !== 'undefined' ? window : global;



var RS = $global.___rescope || {};

if ($global.___rescope) {
  console.warn("ReScope is defined multiple times !! \nCheck you're packaging");
} else {
  $global.___rescope = RS;
  _Scope__WEBPACK_IMPORTED_MODULE_0__["default"].Store = _Store__WEBPACK_IMPORTED_MODULE_1__["default"]; //RS.console         = console;

  RS.Scope = _Scope__WEBPACK_IMPORTED_MODULE_0__["default"];
  RS.Context = _Scope__WEBPACK_IMPORTED_MODULE_0__["default"];
  RS.Store = _Store__WEBPACK_IMPORTED_MODULE_1__["default"];
  RS.reScope = _utils_scopable__WEBPACK_IMPORTED_MODULE_2__["reScope"];
  RS.scopeToState = _utils_scopable__WEBPACK_IMPORTED_MODULE_2__["scopeToState"];
  RS.reScopeState = _utils_scopable__WEBPACK_IMPORTED_MODULE_2__["scopeToState"];
  RS.addScopableType = _utils_scopable__WEBPACK_IMPORTED_MODULE_2__["addScopableType"];

  RS.scopeRef = function scopeRef(map, key) {
    map[key] = new _Scope__WEBPACK_IMPORTED_MODULE_0__["default"].scopeRef(map[key]);
    return map;
  };
}

var _default = RS;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register($global, "$global", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\index.js");
  reactHotLoader.register(RS, "RS", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\index.js");
  reactHotLoader.register(_default, "default", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/utils/Emitter.js":
/*!******************************!*\
  !*** ./src/utils/Emitter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Emitter; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! is */ "./node_modules/is/index.js");
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(is__WEBPACK_IMPORTED_MODULE_3__);




(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */


var Emitter =
/*#__PURE__*/
function () {
  function Emitter() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Emitter);

    this._events = {};
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Emitter, [{
    key: "on",
    value: function on(evt, cb) {
      var _this = this;

      if (!is__WEBPACK_IMPORTED_MODULE_3___default.a.string(evt) && evt) return Object.keys(evt).forEach(function (k) {
        return _this.on(k, evt[k]);
      });
      this._events[evt] = this._events[evt] || [];

      this._events[evt].push(cb);
    }
  }, {
    key: "un",
    value: function un(evt, cb) {
      var _this2 = this;

      if (!is__WEBPACK_IMPORTED_MODULE_3___default.a.string(evt) && evt) return Object.keys(evt).forEach(function (k) {
        return _this2.un(k, evt[k]);
      });
      if (!this._events[evt]) return;

      var i = this._events[evt].indexOf(cb);

      this._events[evt].splice(i, 1);
    }
  }, {
    key: "emit",
    value: function emit(evt) {
      if (!this._events[evt]) return;

      var lists = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this._events[evt]);

      for (var _len = arguments.length, argz = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        argz[_key - 1] = arguments[_key];
      }

      for (var i = 0; i < lists.length; i++) {
        lists[i].apply(lists, argz);
      }
    }
  }, {
    key: "addListener",
    value: function addListener() {
      this.on.apply(this, arguments);
    }
  }, {
    key: "removeListener",
    value: function removeListener() {
      this.un.apply(this, arguments);
    }
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      this._events = {};
    }
  }, {
    key: "once",
    value: function once(evt, cb) {
      var _this3 = this;

      var _fn;

      this.on(evt, _fn = function fn() {
        _this3.un(evt, _fn);

        cb.apply(void 0, arguments);
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Emitter;
}();


;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Emitter, "Emitter", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\Emitter.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/TaskSequencer.js":
/*!************************************!*\
  !*** ./src/utils/TaskSequencer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, process) {/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is */ "./node_modules/is/index.js");
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */

/**
 * Minimal push sequencer, apply stores specific task in the right order (root stores
 * first)
 */

var taskQueue = [],
    curWeight = 0,
    maxWeight = 0,
    minWeight = 0,
    taskCount = 0,
    deSync = false,
    deSyncMaxTasks = 10,
    task,
    isRunning,
    errorCatcher = {
  lastError: null,
  dispatch: function dispatch(error) {
    errorCatcher.disable();

    if (task && task[0].handleError) {
      task[0].handleError(error, task);
    } else if (task) console.error("ReScope : An apply task has failed !!", task[1], " on ", task[0].name || task[0].constructor.name);

    isRunning = false;
    task = null;
    runNow();
  },
  enable: typeof window !== 'undefined' ? function () {
    window.addEventListener('error', errorCatcher.dispatch);
  } : function () {
    process.on('uncaughtException', errorCatcher.dispatch);
  },
  disable: typeof window !== 'undefined' ? function () {
    window.removeEventListener('error', errorCatcher.dispatch);
  } : function () {
    process.removeListener('uncaughtException', errorCatcher.dispatch);
  }
};

function runNow() {
  if (!isRunning) {
    run();
  }
}

function run() {
  var from = Date.now();
  isRunning = true;
  errorCatcher.enable();

  while (taskCount) {
    // try for the current weight
    while (!(taskQueue[curWeight] && taskQueue[curWeight].length)) {
      curWeight++;
    }

    taskCount--;
    task = taskQueue[curWeight].shift(); //console.log("Task : ", task[1], " on ", task[0].name);

    task[0][task[1]].apply(task[0], task[2]);
  }

  task = undefined;
  errorCatcher.disable();
  isRunning = false;

  if (taskCount) {
    setTimeout(runNow);
  }
} //
//index.setTaskDeSync = ( nb ) => {
//    if ( nb === false )
//        return deSync = false;
//    else if ( nb === true ) {
//        deSync         = true;
//        deSyncMaxTasks = 10;
//    }
//    else (is.int(nb))
//    {
//        deSync         = true;
//        deSyncMaxTasks = nb;
//    }
//};


var _default = {
  pushTask: function pushTask(obj, fn, argz) {
    /**
     * The more a store have sources, the more it should be processed first
     * So leafs stores stay sync, and root stores receive merged state updates;
     * global state stay coherent
     *
     * This mean whatever the number of stores & the complexity of the deps,
     * updating a store state will update its synchrone child stores immediately
     *
     *
     * @type {*|number}
     */
    var weight = obj._sources && obj._sources.length || 1,
        stack = taskQueue[weight] = taskQueue[weight] || [];
    maxWeight = Math.max(maxWeight, weight);
    curWeight = Math.min(curWeight, weight);
    taskCount++; //console.log("Push Task : ", fn, " on ", obj.name, weight);

    stack.push([obj, fn, argz]);
    setTimeout(runNow, 0);
    return stack.length;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(taskQueue, "taskQueue", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\TaskSequencer.js");
  reactHotLoader.register(curWeight, "curWeight", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\TaskSequencer.js");
  reactHotLoader.register(maxWeight, "maxWeight", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\TaskSequencer.js");
  reactHotLoader.register(minWeight, "minWeight", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\TaskSequencer.js");
  reactHotLoader.register(taskCount, "taskCount", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\TaskSequencer.js");
  reactHotLoader.register(deSync, "deSync", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\TaskSequencer.js");
  reactHotLoader.register(deSyncMaxTasks, "deSyncMaxTasks", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\TaskSequencer.js");
  reactHotLoader.register(task, "task", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\TaskSequencer.js");
  reactHotLoader.register(isRunning, "isRunning", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\TaskSequencer.js");
  reactHotLoader.register(errorCatcher, "errorCatcher", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\TaskSequencer.js");
  reactHotLoader.register(runNow, "runNow", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\TaskSequencer.js");
  reactHotLoader.register(run, "run", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\TaskSequencer.js");
  reactHotLoader.register(_default, "default", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\TaskSequencer.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/utils/is.js":
/*!*************************!*\
  !*** ./src/utils/is.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is */ "./node_modules/is/index.js");
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is__WEBPACK_IMPORTED_MODULE_1__);


(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */


var _default = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, is__WEBPACK_IMPORTED_MODULE_1___default.a);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\is.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/scopable.js":
/*!*******************************!*\
  !*** ./src/utils/scopable.js ***!
  \*******************************/
/*! exports provided: addScopableType, reScope, scopeToState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScopableType", function() { return addScopableType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reScope", function() { return reScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scopeToState", function() { return scopeToState; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is */ "./node_modules/is/index.js");
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is__WEBPACK_IMPORTED_MODULE_1__);


(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */

var SimpleObjectProto = {}.constructor;
var scopables = [];

function addScopableType(test, handle) {
  var member = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var stateScope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  scopables.push({
    test: test,
    member: member,
    stateScope: stateScope,
    handle: handle
  });
} //


function isScopableType(Comp, member, stateScope) {
  for (var i = 0; i < scopables.length; i++) {
    if ((member === undefined || member == scopables[i].member) && stateScope == scopables[i].stateScope && scopables[i].test(Comp)) return true;
  }

  return false;
}

function applyScopableType(Comp, argz, member, stateScope) {
  for (var i = 0; i < scopables.length; i++) {
    var _scopables$i;

    if (member == scopables[i].member && stateScope == scopables[i].stateScope && scopables[i].test(Comp)) return (_scopables$i = scopables[i]).handle.apply(_scopables$i, [Comp].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(argz)));
  }

  console.warn("reScope : Unknown type", Comp);
  return false;
}

function reScope() {
  for (var _len = arguments.length, argz = new Array(_len), _key = 0; _key < _len; _key++) {
    argz[_key] = arguments[_key];
  }

  // are we decorating a member / without argz
  if (argz[0] instanceof SimpleObjectProto && argz[2] instanceof SimpleObjectProto && argz[0].hasOwnProperty(argz[1])) {
    argz[2].value = applyScopableType(argz[0], [], true, false);
    return argz[0];
  } else if (!isScopableType(argz[0], undefined, false)) {
    return function () {
      for (var _len2 = arguments.length, argz2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        argz2[_key2] = arguments[_key2];
      }

      // are we decorating a member / with argz
      if (argz2[0] instanceof SimpleObjectProto && argz2[2] instanceof SimpleObjectProto && argz2[0].hasOwnProperty(argz2[1])) {
        argz2[2].value = applyScopableType(argz2[0], argz, true, false);
        return argz2[0];
      } else return reScope.apply(void 0, [argz2[0]].concat(argz));
    };
  }

  return applyScopableType(argz[0], argz.slice(1), false, false);
}

function scopeToState() {
  for (var _len3 = arguments.length, argz = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    argz[_key3] = arguments[_key3];
  }

  // are we decorating a member / without argz
  if (argz[0] instanceof SimpleObjectProto && argz[2] instanceof SimpleObjectProto && argz[0].hasOwnProperty(argz[1])) {
    argz[2].value = applyScopableType(argz[0], [], true, true);
    return argz[0];
  } else if (!isScopableType(argz[0], undefined, true)) {
    return function () {
      for (var _len4 = arguments.length, argz2 = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        argz2[_key4] = arguments[_key4];
      }

      // are we decorating a member / with argz
      if (argz2[0] instanceof SimpleObjectProto && argz2[2] instanceof SimpleObjectProto && argz2[0].hasOwnProperty(argz2[1])) {
        argz2[2].value = applyScopableType(argz2[0], argz, true, true);
        return argz2[0];
      } else return scopeToState.apply(void 0, [argz2[0]].concat(argz));
    };
  }

  return applyScopableType(argz[0], argz.slice(1), false, true);
} //
//addScopableType(
//    ( Comp ) => (Comp && Comp.prototype instanceof Store),
//    function reScope( ...argz ) {
//        let BaseStore    = (!argz[0] || argz[0].prototype instanceof Store) &&
// argz.shift(), scope        = (!argz[0] || argz[0] instanceof Scope || is.fn(argz[0]))
// && argz.shift(), use          = (is.array(argz[0])) && argz.shift(), stateMap     =
// !use && (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift(),
// initialState = {};  let compName = BaseStore.displayName || BaseStore.name;  use =
// [...(BaseStore.use || []), ...(use || [])]; stateMap &&
// Scope.stateMapToRefList(stateMap, initialState, use);  class StateScopedStore extends
// BaseStore { static use         = use; static displayName = "stateScoped(" + compName +
// ")";  constructor( ...argz ) { super(scope, argz.slice(argz[0] instanceof Scope ? 1 :
// 0)) } }  return StateScopedStore; }, false, true )



;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SimpleObjectProto, "SimpleObjectProto", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\scopable.js");
  reactHotLoader.register(scopables, "scopables", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\scopable.js");
  reactHotLoader.register(addScopableType, "addScopableType", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\scopable.js");
  reactHotLoader.register(isScopableType, "isScopableType", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\scopable.js");
  reactHotLoader.register(applyScopableType, "applyScopableType", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\scopable.js");
  reactHotLoader.register(reScope, "reScope", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\scopable.js");
  reactHotLoader.register(scopeToState, "scopeToState", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\scopable.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: walknSet, walknGet, keyWalknSet, keyWalknGet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walknSet", function() { return walknSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walknGet", function() { return walknGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyWalknSet", function() { return keyWalknSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyWalknGet", function() { return keyWalknGet; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);


(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */
var is = __webpack_require__(/*! ./is */ "./src/utils/is.js");

function walknSet(obj, path, value, stack) {
  if (is.string(path)) path = path.split('.');
  if (!path.length) return false;else if (path.length == 1) return obj[path[0]] = stack ? [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(obj[path[0]] || []), [value]) : value;else return walknSet(obj[path[0]] = obj[path[0]] || {}, path.slice(1), value, stack);
}
function walknGet(obj, path, isKey) {
  if (is.string(path)) path = path.split('.');
  return path.length ? obj[path[0]] && walknGet(obj[path[0]], path.slice(1)) : obj;
} //@todo

function keyWalknSet(obj, path, value, stack) {
  if (is.string(path)) path = path.split(/(\>|\/)/ig).filter(function (v) {
    return v !== '>' && v;
  });
  return walknSet(obj, path, value);
}
function keyWalknGet(obj, path, isKey) {
  if (is.string(path)) path = path.split(/(\>|\/)/ig).filter(function (v) {
    return v !== '>' && v;
  });
  return path.length ? obj[path[0]] && walknGet(obj[path[0]], path.slice(1)) : obj;
}
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(walknSet, "walknSet", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\utils.js");
  reactHotLoader.register(walknGet, "walknGet", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\utils.js");
  reactHotLoader.register(keyWalknSet, "keyWalknSet", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\utils.js");
  reactHotLoader.register(keyWalknGet, "keyWalknGet", "G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\utils.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

/******/ });
//# sourceMappingURL=RS.js.map