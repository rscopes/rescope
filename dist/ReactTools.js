/*
 * Copyright (c)  2018 Wise Wild Web .
 *
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 * @author : Nathanael Braun
 * @contact : caipilabs@gmail.com
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
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            if (this.constructor.use) {
	                this.context.rescope.bind(this, this.constructor.use || [], false);
	            }
	        }
	    }, {
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
	            key: 'componentWillMount',
	            value: function componentWillMount() {
	                if (this.constructor.use) {
	                    context.bind(this, this.constructor.use || [], false);
	                }
	                _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillMount', this) && _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillMount', this).call(this);
	            }
	        }, {
	            key: 'componentWillUnmount',
	            value: function componentWillUnmount() {
	                _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillUnmount', this) && _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillUnmount', this).call(this);
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
	                _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillReceiveProps', this) && _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillReceiveProps', this).call(this, np, nc);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGNkMjliNmIwN2MzOWI2MTFlMTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlYWN0VG9vbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwicCIsImN0eCIsInEiLCJjb25zdHJ1Y3RvciIsInVzZSIsInN0YXRlIiwicmVzY29wZSIsIm1hcCIsInJlbmRlciIsImJhc2VDb21wIiwibmFtZSIsImNvbnRleHQiLCJiaW5kIiwidW5CaW5kIiwibnAiLCJuYyIsIiRzdG9yZXMiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJvYmplY3QiLCJjb250ZXh0VHlwZXMiLCJfY29udGV4dCIsInN0b3JlcyIsImRlZmF1bHRQcm9wcyIsImRpc3BhdGNoIiwicmVzY29wZVByb3BzIiwiQmFzZUNvbXAiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7Ozs7QUFDQTs7Ozs7Ozs7OztnZkFwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7Ozs7S0FJTUEsUzs7O0FBVUYsd0JBQWFDLENBQWIsRUFBZ0JDLEdBQWhCLEVBQXFCQyxDQUFyQixFQUF5QjtBQUFBOztBQUFBLDJIQUNmRixDQURlLEVBQ1pDLEdBRFksRUFDUEMsQ0FETzs7QUFFckIsYUFBSyxNQUFLQyxXQUFMLENBQWlCQyxHQUF0QixFQUE0QjtBQUN4Qixt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QUFVSTtBQVZwQixrQkFzQkpFLFFBdEJJLENBQVA7QUF1Qkg7O1NBR2dCTSxPLEdBQWI3QixTO1NBQ0FBLFMsR0FBQUEsUztTQUNBMkIsWSxHQUFBQSxZO1NBQ0FwQixPLEdBQUFBLE87Ozs7OztBQzdMSixtQzs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoiZGlzdC9SZWFjdFRvb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRjZDI5YjZiMDdjMzliNjExZTE1IiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxOC4gIENhaXBpIExhYnMuICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgRmlsZSBpcyBwYXJ0IG9mIENhaXBpLiBZb3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKiAgVGhpcyBwcm9qZWN0IGlzIGR1YWwgbGljZW5zZWQgdW5kZXIgQUdQTCBhbmQgQ29tbWVyY2lhbCBMaWNlbmNlLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQGNsYXNzIENvbXBvbmVudFxuICogQGRlc2MgUGFyZW50IFJlYWN0IENvbXBvbmVudCB3aXRoIHN0b3JlIGluamVjdGlvbiBpbiBpdHMgc3RhdGVcbiAqL1xuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9XG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyAgICAgID0ge1xuICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfVxuICAgIFxuICAgIGNvbnN0cnVjdG9yKCBwLCBjdHgsIHEgKSB7XG4gICAgICAgIHN1cGVyKHAsIGN0eCwgcSk7XG4gICAgICAgIGlmICggdGhpcy5jb25zdHJ1Y3Rvci51c2UgKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4uY3R4LnJlc2NvcGUubWFwKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdLCBmYWxzZSkvLyBkb24ndCBiaW5kXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB0aGlzLnJlbmRlciA9ICgpID0+IDxkaXY+Tm8gUmVzY29wZSBjb250ZXh0IGhlcmUgeyBiYXNlQ29tcC5uYW1lIH08L2Rpdj5cbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAoIHRoaXMuY29uc3RydWN0b3IudXNlICkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnJlc2NvcGUuYmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSwgZmFsc2UpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IudXNlXG4gICAgICAgICYmIHRoaXMuY29udGV4dC5yZXNjb3BlLnVuQmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSlcbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyggbnAsIG5jICkge1xuICAgICAgICBpZiAoIG5jLnJlc2NvcGUgIT09IHRoaXMuY29udGV4dC5yZXNjb3BlICkge1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2VcbiAgICAgICAgICAgICYmIHRoaXMuY29udGV4dC5yZXNjb3BlLnVuQmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSk7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnVzZVxuICAgICAgICAgICAgJiYgbmMucmVzY29wZS5iaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXNjb3BlOiB0aGlzLmNvbnRleHQucmVzY29wZSxcbiAgICAgICAgICAgICRzdG9yZXM6IHRoaXMuY29udGV4dC4kc3RvcmVzXG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4gfHwgPGRpdi8+XG4gICAgfVxufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIGJhc2VDb21wXG4gKiBAcGFyYW0gY29udGV4dFxuICogQHJldHVybnMge1Njb3BlUHJvdmlkZXJ9XG4gKi9cbmZ1bmN0aW9uIHJlc2NvcGUoIGJhc2VDb21wLCBfY29udGV4dCApIHtcbiAgICBsZXQgY29udGV4dCA9IF9jb250ZXh0O1xuICAgIHJldHVybiBjbGFzcyBTY29wZVByb3ZpZGVyIGV4dGVuZHMgYmFzZUNvbXAge1xuICAgICAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgICAgICAgICAuLi4oYmFzZUNvbXAuY2hpbGRDb250ZXh0VHlwZXMgfHwge30pLFxuICAgICAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgY29udGV4dFR5cGVzICAgICAgPSB7XG4gICAgICAgICAgICAuLi4oYmFzZUNvbXAuY29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGRlZmF1bHRQcm9wcyAgICAgID0ge1xuICAgICAgICAgICAgLi4uKGJhc2VDb21wLmRlZmF1bHRQcm9wcyB8fCB7fSksXG4gICAgICAgICAgICBkaXNwYXRjaDogKCkgPT4gY29udGV4dC5kaXNwYXRjaCguLi5hcmd1bWVudHMpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0cnVjdG9yKCBwLCBjdHgsIHEgKSB7XG4gICAgICAgICAgICBzdXBlcihwLCBjdHgsIHEpO1xuICAgICAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgY3R4LnJlc2NvcGU7XG4gICAgICAgICAgICBpZiAoIGNvbnRleHQgJiYgdGhpcy5jb25zdHJ1Y3Rvci51c2UgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSAgID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAuLi5jb250ZXh0Lm1hcCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSwgZmFsc2UpLy8gZG9uJ3QgYmluZCBub3cgZHVlIHRvIFNTUlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZXMgPSBjb250ZXh0LnN0b3JlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgdGhpcy5yZW5kZXIgPSAoKSA9PiA8ZGl2Pk5vIFJlc2NvcGUgY29udGV4dCBoZXJlIHsgYmFzZUNvbXAubmFtZSB9PC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5jb25zdHJ1Y3Rvci51c2UgKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdLCBmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxNb3VudCAmJiBzdXBlci5jb21wb25lbnRXaWxsTW91bnQoKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50ICYmIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KClcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IudXNlXG4gICAgICAgICAgICAmJiBjb250ZXh0LnVuQmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSlcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLiRzdG9yZXM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoIG5wLCBuYyApIHtcbiAgICAgICAgICAgIGlmICggIV9jb250ZXh0ICYmIG5jLnJlc2NvcGUgIT09IHRoaXMuY29udGV4dC5yZXNjb3BlICkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IudXNlXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5jb250ZXh0LnJlc2NvcGUudW5CaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0ICAgICAgPSBuYy5yZXNjb3BlO1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlcyA9IGNvbnRleHQuc3RvcmVzO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IudXNlXG4gICAgICAgICAgICAgICAgJiYgbmMucmVzY29wZS5iaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCwgbmMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgICAgICBsZXQgY3R4ID0gc3VwZXIuZ2V0Q2hpbGRDb250ZXh0ICYmIHN1cGVyLmdldENoaWxkQ29udGV4dCgpIHx8IHt9O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgICAgcmVzY29wZTogY29udGV4dCxcbiAgICAgICAgICAgICAgICAkc3RvcmVzOiBjb250ZXh0LnN0b3Jlc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIEJhc2VDb21wXG4gKiBAcGFyYW0gY29udGV4dFxuICogQHJldHVybnMge1Njb3BlUHJvdmlkZXJ9fVxuICovXG5mdW5jdGlvbiByZXNjb3BlUHJvcHMoIEJhc2VDb21wLCBfY29udGV4dCApIHtcbiAgICByZXR1cm4gcmVzY29wZShjbGFzcyBSZVNjb3BlUHJvcHNQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHN0YXRpYyB1c2UgICAgICAgICAgICAgICA9IEJhc2VDb21wLnVzZVxuICAgICAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgICAgICAgICAuLi4oQmFzZUNvbXAuY29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGNvbnRleHRUeXBlcyAgICAgID0ge1xuICAgICAgICAgICAgLi4uKEJhc2VDb21wLmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBsZXQgY29udGV4dCA9IF9jb250ZXh0IHx8IHRoaXMuY29udGV4dC5yZXNjb3BlO1xuICAgICAgICAgICAgcmV0dXJuIDxCYXNlQ29tcCB7IC4uLnRoaXMucHJvcHMgfSB7IC4uLnRoaXMuc3RhdGUgfSBkaXNwYXRjaD17IGNvbnRleHQuZGlzcGF0Y2guYmluZChjb250ZXh0KSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzdG9yZXM9eyBjb250ZXh0LnN0b3JlcyB9Lz5cbiAgICAgICAgfVxuICAgIH0sIF9jb250ZXh0KVxufVxuXG5leHBvcnQge1xuICAgIENvbXBvbmVudCBhcyBkZWZhdWx0LFxuICAgIENvbXBvbmVudCxcbiAgICByZXNjb3BlUHJvcHMsXG4gICAgcmVzY29wZVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVhY3RUb29scy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJvcC10eXBlc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=