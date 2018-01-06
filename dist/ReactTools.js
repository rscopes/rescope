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
module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.rescope = exports.rescopeProps = exports.Component = exports.default = undefined;
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(2);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2018.  Caipi Labs.  All rights reserved.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This File is part of Caipi. You can redistribute it and/or modify
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * it under the terms of the GNU Affero General Public License as
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * published by the Free Software Foundation, either version 3 of the
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License, or (at your option) any later version.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This program is distributed in the hope that it will be useful,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * but WITHOUT ANY WARRANTY; without even the implied warranty of
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * GNU Affero General Public License for more details.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You should have received a copy of the GNU Affero General Public License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * along with this program. If not, see <http://www.gnu.org/licenses/>.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  This project is dual licensed under AGPL and Commercial Licence.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author : Nathanael Braun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @contact : caipilabs@gmail.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	/**
	 * @class Component
	 * @desc Parent React Component with store injection in its state
	 */
	var Component = function (_React$Component) {
	    _inherits(Component, _React$Component);
	
	    function Component(p, ctx, q) {
	        _classCallCheck(this, Component);
	
	        var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, p, ctx, q));
	
	        if (_this.constructor.use) {
	            _this.state = _extends({}, _this.state, ctx.rescope.map(_this, _this.constructor.use || [], false));
	            ctx.rescope.bind(_this, _this.constructor.use || [], false);
	        } else _this.render = function () {
	            return _react2.default.createElement(
	                'div',
	                null,
	                'No Rescope context here ',
	                baseComp.name
	            );
	        };
	        return _this;
	    }
	
	    _createClass(Component, [{
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.constructor.use && this.context.rescope.unBind(this, this.constructor.use || []);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(np, nc) {
	            if (nc.rescope !== this.context.rescope) {
	                this.constructor.use && this.context.rescope.unBind(this, this.constructor.use || []);
	                this.constructor.use && nc.rescope.bind(this, this.constructor.use || []);
	            }
	        }
	    }, {
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                rescope: this.context.rescope,
	                $stores: this.context.$stores
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return this.props.children || _react2.default.createElement('div', null);
	        }
	    }]);
	
	    return Component;
	}(_react2.default.Component);
	
	Component.childContextTypes = {
	    rescope: _propTypes2.default.object,
	    $stores: _propTypes2.default.object
	};
	Component.contextTypes = {
	    rescope: _propTypes2.default.object,
	    $stores: _propTypes2.default.object
	};
	;
	
	/**
	 *
	 * @param baseComp
	 * @param context
	 * @returns {ScopeProvider}
	 */
	function rescope(baseComp, _context) {
	    var _class,
	        _temp,
	        _arguments = arguments;
	
	    var context = _context;
	    return _temp = _class = function (_baseComp) {
	        _inherits(ScopeProvider, _baseComp);
	
	        function ScopeProvider(p, ctx, q) {
	            _classCallCheck(this, ScopeProvider);
	
	            var _this2 = _possibleConstructorReturn(this, (ScopeProvider.__proto__ || Object.getPrototypeOf(ScopeProvider)).call(this, p, ctx, q));
	
	            context = context || ctx.rescope;
	            if (context && _this2.constructor.use) {
	                _this2.state = _extends({}, _this2.state, context.map(_this2, _this2.constructor.use || [], false));
	                context.bind(_this2, _this2.constructor.use || [], false);
	                _this2.$stores = context.stores;
	            } else _this2.render = function () {
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    'No Rescope context here ',
	                    baseComp.name
	                );
	            };
	            return _this2;
	        }
	
	        _createClass(ScopeProvider, [{
	            key: 'componentWillUnmount',
	            value: function componentWillUnmount() {
	                this.constructor.use && context.unBind(this, this.constructor.use || []);
	                delete this.$stores;
	            }
	        }, {
	            key: 'componentWillReceiveProps',
	            value: function componentWillReceiveProps(np, nc) {
	                if (!_context && nc.rescope !== this.context.rescope) {
	                    this.constructor.use && this.context.rescope.unBind(this, this.constructor.use || []);
	                    context = nc.rescope;
	                    this.$stores = context.stores;
	                    this.constructor.use && nc.rescope.bind(this, this.constructor.use || []);
	                }
	            }
	        }, {
	            key: 'getChildContext',
	            value: function getChildContext() {
	                var ctx = _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'getChildContext', this) && _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'getChildContext', this).call(this) || {};
	                return _extends({}, ctx, {
	                    rescope: context,
	                    $stores: context.stores
	                });
	            }
	        }]);
	
	        return ScopeProvider;
	    }(baseComp), _class.childContextTypes = _extends({}, baseComp.childContextTypes || {}, {
	        rescope: _propTypes2.default.object,
	        $stores: _propTypes2.default.object
	    }), _class.contextTypes = _extends({}, baseComp.contextTypes || {}, {
	        rescope: _propTypes2.default.object,
	        $stores: _propTypes2.default.object
	    }), _class.defaultProps = _extends({}, baseComp.defaultProps || {}, {
	        dispatch: function dispatch() {
	            var _context2;
	
	            return (_context2 = context).dispatch.apply(_context2, _arguments);
	        }
	    }), _temp;
	}
	
	/**
	 *
	 * @param BaseComp
	 * @param context
	 * @returns {ScopeProvider}}
	 */
	function rescopeProps(BaseComp, _context) {
	    var _class2, _temp2;
	
	    return rescope((_temp2 = _class2 = function (_React$Component2) {
	        _inherits(ReScopePropsProvider, _React$Component2);
	
	        function ReScopePropsProvider() {
	            _classCallCheck(this, ReScopePropsProvider);
	
	            return _possibleConstructorReturn(this, (ReScopePropsProvider.__proto__ || Object.getPrototypeOf(ReScopePropsProvider)).apply(this, arguments));
	        }
	
	        _createClass(ReScopePropsProvider, [{
	            key: 'getChildContext',
	            value: function getChildContext() {
	                return this.context;
	            }
	        }, {
	            key: 'render',
	            value: function render() {
	                var context = _context || this.context.rescope;
	                return _react2.default.createElement(BaseComp, _extends({}, this.props, this.state, { dispatch: context.dispatch.bind(context),
	                    $stores: context.stores }));
	            }
	        }]);
	
	        return ReScopePropsProvider;
	    }(_react2.default.Component), _class2.use = BaseComp.use, _class2.childContextTypes = _extends({}, BaseComp.contextTypes || {}, {
	        rescope: _propTypes2.default.object,
	        $stores: _propTypes2.default.object
	    }), _class2.contextTypes = _extends({}, BaseComp.contextTypes || {}, {
	        rescope: _propTypes2.default.object,
	        $stores: _propTypes2.default.object
	    }), _temp2), _context);
	}
	
	exports.default = Component;
	exports.Component = Component;
	exports.rescopeProps = rescopeProps;
	exports.rescope = rescope;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("prop-types");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjYxMmRhY2M2NDQ0OWMyNzdhMmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlYWN0VG9vbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwicCIsImN0eCIsInEiLCJjb25zdHJ1Y3RvciIsInVzZSIsInN0YXRlIiwicmVzY29wZSIsIm1hcCIsImJpbmQiLCJyZW5kZXIiLCJiYXNlQ29tcCIsIm5hbWUiLCJjb250ZXh0IiwidW5CaW5kIiwibnAiLCJuYyIsIiRzdG9yZXMiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJvYmplY3QiLCJjb250ZXh0VHlwZXMiLCJfY29udGV4dCIsInN0b3JlcyIsImRlZmF1bHRQcm9wcyIsImRpc3BhdGNoIiwicmVzY29wZVByb3BzIiwiQmFzZUNvbXAiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7Ozs7QUFDQTs7Ozs7Ozs7OztnZkFwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7Ozs7S0FJTUEsUzs7O0FBVUYsd0JBQWFDLENBQWIsRUFBZ0JDLEdBQWhCLEVBQXFCQyxDQUFyQixFQUF5QjtBQUFBOztBQUFBLDJIQUNmRixDQURlLEVBQ1pDLEdBRFksRUFDUEMsQ0FETzs7QUFFckIsYUFBSyxNQUFLQyxXQUFMLENBQWlCQyxHQUF0QixFQUE0QjtBQUN4Qixt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QUF5QixFQVpyQztBQWFRQyxtQkFBVTtBQUFBOztBQUFBLG9CQUFNLHNCQUFRQSxRQUFSLDZCQUFOO0FBQUE7QUFibEI7QUF3REg7O0FBRUQ7Ozs7OztBQU1BLFVBQVNDLFlBQVQsQ0FBdUJDLFFBQXZCLEVBQWlDTCxRQUFqQyxFQUE0QztBQUFBOztBQUN4QyxZQUFPaEI7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLCtDQVllO0FBQ2Qsd0JBQU8sS0FBS00sT0FBWjtBQUNIO0FBZEU7QUFBQTtBQUFBLHNDQWVNO0FBQ0wscUJBQUlBLFVBQVVVLFlBQVksS0FBS1YsT0FBTCxDQUFhTixPQUF2QztBQUNBLHdCQUFPLDhCQUFDLFFBQUQsZUFBZSxLQUFLVyxLQUFwQixFQUFpQyxLQUFLWixLQUF0QyxJQUE4QyxVQUFXTyxRQUFRYSxRQUFSLENBQWlCakIsSUFBakIsQ0FBc0JJLE9BQXRCLENBQXpEO0FBQ1UsOEJBQVVBLFFBQVFXLE1BRDVCLElBQVA7QUFFSDtBQW5CRTs7QUFBQTtBQUFBLE9BQTJDLGdCQUFNeEIsU0FBakQsV0FDSUssR0FESixHQUN3QnVCLFNBQVN2QixHQURqQyxVQUVJZSxpQkFGSixnQkFHS1EsU0FBU04sWUFBVCxJQUF5QixFQUg5QjtBQUlDZixrQkFBUyxvQkFBVWMsTUFKcEI7QUFLQ0osa0JBQVMsb0JBQVVJO0FBTHBCLGlCQU9JQyxZQVBKLGdCQVFLTSxTQUFTTixZQUFULElBQXlCLEVBUjlCO0FBU0NmLGtCQUFTLG9CQUFVYyxNQVRwQjtBQVVDSixrQkFBUyxvQkFBVUk7QUFWcEIsa0JBb0JKRSxRQXBCSSxDQUFQO0FBcUJIOztTQUdnQk0sTyxHQUFiN0IsUztTQUNBQSxTLEdBQUFBLFM7U0FDQTJCLFksR0FBQUEsWTtTQUNBcEIsTyxHQUFBQSxPOzs7Ozs7QUM5S0osbUM7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6ImRpc3QvUmVhY3RUb29scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyNjEyZGFjYzY0NDQ5YzI3N2EyYiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTguICBDYWlwaSBMYWJzLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIEZpbGUgaXMgcGFydCBvZiBDYWlwaS4gWW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZVxuICogTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICogIFRoaXMgcHJvamVjdCBpcyBkdWFsIGxpY2Vuc2VkIHVuZGVyIEFHUEwgYW5kIENvbW1lcmNpYWwgTGljZW5jZS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb21wb25lbnRcbiAqIEBkZXNjIFBhcmVudCBSZWFjdCBDb21wb25lbnQgd2l0aCBzdG9yZSBpbmplY3Rpb24gaW4gaXRzIHN0YXRlXG4gKi9cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfVxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgICAgICA9IHtcbiAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgIH1cbiAgICBcbiAgICBjb25zdHJ1Y3RvciggcCwgY3R4LCBxICkge1xuICAgICAgICBzdXBlcihwLCBjdHgsIHEpO1xuICAgICAgICBpZiAoIHRoaXMuY29uc3RydWN0b3IudXNlICkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgIC4uLmN0eC5yZXNjb3BlLm1hcCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSwgZmFsc2UpLy8gZG9uJ3QgYmluZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3R4LnJlc2NvcGUuYmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSwgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB0aGlzLnJlbmRlciA9ICgpID0+IDxkaXY+Tm8gUmVzY29wZSBjb250ZXh0IGhlcmUgeyBiYXNlQ29tcC5uYW1lIH08L2Rpdj5cbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IudXNlXG4gICAgICAgICYmIHRoaXMuY29udGV4dC5yZXNjb3BlLnVuQmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSlcbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyggbnAsIG5jICkge1xuICAgICAgICBpZiAoIG5jLnJlc2NvcGUgIT09IHRoaXMuY29udGV4dC5yZXNjb3BlICkge1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2VcbiAgICAgICAgICAgICYmIHRoaXMuY29udGV4dC5yZXNjb3BlLnVuQmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSk7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnVzZVxuICAgICAgICAgICAgJiYgbmMucmVzY29wZS5iaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXNjb3BlOiB0aGlzLmNvbnRleHQucmVzY29wZSxcbiAgICAgICAgICAgICRzdG9yZXM6IHRoaXMuY29udGV4dC4kc3RvcmVzXG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4gfHwgPGRpdi8+XG4gICAgfVxufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIGJhc2VDb21wXG4gKiBAcGFyYW0gY29udGV4dFxuICogQHJldHVybnMge1Njb3BlUHJvdmlkZXJ9XG4gKi9cbmZ1bmN0aW9uIHJlc2NvcGUoIGJhc2VDb21wLCBfY29udGV4dCApIHtcbiAgICBsZXQgY29udGV4dCA9IF9jb250ZXh0O1xuICAgIHJldHVybiBjbGFzcyBTY29wZVByb3ZpZGVyIGV4dGVuZHMgYmFzZUNvbXAge1xuICAgICAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgICAgICAgICAuLi4oYmFzZUNvbXAuY2hpbGRDb250ZXh0VHlwZXMgfHwge30pLFxuICAgICAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgY29udGV4dFR5cGVzICAgICAgPSB7XG4gICAgICAgICAgICAuLi4oYmFzZUNvbXAuY29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGRlZmF1bHRQcm9wcyAgICAgID0ge1xuICAgICAgICAgICAgLi4uKGJhc2VDb21wLmRlZmF1bHRQcm9wcyB8fCB7fSksXG4gICAgICAgICAgICBkaXNwYXRjaDogKCkgPT4gY29udGV4dC5kaXNwYXRjaCguLi5hcmd1bWVudHMpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0cnVjdG9yKCBwLCBjdHgsIHEgKSB7XG4gICAgICAgICAgICBzdXBlcihwLCBjdHgsIHEpO1xuICAgICAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgY3R4LnJlc2NvcGU7XG4gICAgICAgICAgICBpZiAoIGNvbnRleHQgJiYgdGhpcy5jb25zdHJ1Y3Rvci51c2UgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgLi4uY29udGV4dC5tYXAodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UgfHwgW10sIGZhbHNlKS8vIGRvbid0IGJpbmRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGV4dC5iaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdLCBmYWxzZSlcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZXMgPSBjb250ZXh0LnN0b3JlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgdGhpcy5yZW5kZXIgPSAoKSA9PiA8ZGl2Pk5vIFJlc2NvcGUgY29udGV4dCBoZXJlIHsgYmFzZUNvbXAubmFtZSB9PC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2VcbiAgICAgICAgICAgICYmIGNvbnRleHQudW5CaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdKVxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuJHN0b3JlcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyggbnAsIG5jICkge1xuICAgICAgICAgICAgaWYgKCAhX2NvbnRleHQgJiYgbmMucmVzY29wZSAhPT0gdGhpcy5jb250ZXh0LnJlc2NvcGUgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2VcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmNvbnRleHQucmVzY29wZS51bkJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UgfHwgW10pO1xuICAgICAgICAgICAgICAgIGNvbnRleHQgICAgICA9IG5jLnJlc2NvcGU7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmVzID0gY29udGV4dC5zdG9yZXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2VcbiAgICAgICAgICAgICAgICAmJiBuYy5yZXNjb3BlLmJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UgfHwgW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgICAgICBsZXQgY3R4ID0gc3VwZXIuZ2V0Q2hpbGRDb250ZXh0ICYmIHN1cGVyLmdldENoaWxkQ29udGV4dCgpIHx8IHt9O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgICAgcmVzY29wZTogY29udGV4dCxcbiAgICAgICAgICAgICAgICAkc3RvcmVzOiBjb250ZXh0LnN0b3Jlc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIEJhc2VDb21wXG4gKiBAcGFyYW0gY29udGV4dFxuICogQHJldHVybnMge1Njb3BlUHJvdmlkZXJ9fVxuICovXG5mdW5jdGlvbiByZXNjb3BlUHJvcHMoIEJhc2VDb21wLCBfY29udGV4dCApIHtcbiAgICByZXR1cm4gcmVzY29wZShjbGFzcyBSZVNjb3BlUHJvcHNQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHN0YXRpYyB1c2UgICAgICAgICAgICAgICA9IEJhc2VDb21wLnVzZVxuICAgICAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgICAgICAgICAuLi4oQmFzZUNvbXAuY29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGNvbnRleHRUeXBlcyAgICAgID0ge1xuICAgICAgICAgICAgLi4uKEJhc2VDb21wLmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9XG4gICAgICAgIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgbGV0IGNvbnRleHQgPSBfY29udGV4dCB8fCB0aGlzLmNvbnRleHQucmVzY29wZTtcbiAgICAgICAgICAgIHJldHVybiA8QmFzZUNvbXAgeyAuLi50aGlzLnByb3BzIH0geyAuLi50aGlzLnN0YXRlIH0gZGlzcGF0Y2g9eyBjb250ZXh0LmRpc3BhdGNoLmJpbmQoY29udGV4dCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc3RvcmVzPXsgY29udGV4dC5zdG9yZXMgfS8+XG4gICAgICAgIH1cbiAgICB9LCBfY29udGV4dClcbn1cblxuZXhwb3J0IHtcbiAgICBDb21wb25lbnQgYXMgZGVmYXVsdCxcbiAgICBDb21wb25lbnQsXG4gICAgcmVzY29wZVByb3BzLFxuICAgIHJlc2NvcGVcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlYWN0VG9vbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByb3AtdHlwZXNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9