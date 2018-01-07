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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjZjN2I5ZjFiYmRkNTBkMWEzYTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlYWN0VG9vbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwicCIsImN0eCIsInEiLCJjb25zdHJ1Y3RvciIsInVzZSIsInN0YXRlIiwicmVzY29wZSIsIm1hcCIsImJpbmQiLCJyZW5kZXIiLCJiYXNlQ29tcCIsIm5hbWUiLCJjb250ZXh0IiwidW5CaW5kIiwibnAiLCJuYyIsIiRzdG9yZXMiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJvYmplY3QiLCJjb250ZXh0VHlwZXMiLCJfY29udGV4dCIsInN0b3JlcyIsImRlZmF1bHRQcm9wcyIsImRpc3BhdGNoIiwicmVzY29wZVByb3BzIiwiQmFzZUNvbXAiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7Ozs7QUFDQTs7Ozs7Ozs7OztnZkFwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7Ozs7S0FJTUEsUzs7O0FBVUYsd0JBQWFDLENBQWIsRUFBZ0JDLEdBQWhCLEVBQXFCQyxDQUFyQixFQUF5QjtBQUFBOztBQUFBLDJIQUNmRixDQURlLEVBQ1pDLEdBRFksRUFDUEMsQ0FETzs7QUFFckIsYUFBSyxNQUFLQyxXQUFMLENBQWlCQyxHQUF0QixFQUE0QjtBQUN4Qixt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OlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI2YzdiOWYxYmJkZDUwZDFhM2EwIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxOC4gIENhaXBpIExhYnMuICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgRmlsZSBpcyBwYXJ0IG9mIENhaXBpLiBZb3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xuICogcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKiAgVGhpcyBwcm9qZWN0IGlzIGR1YWwgbGljZW5zZWQgdW5kZXIgQUdQTCBhbmQgQ29tbWVyY2lhbCBMaWNlbmNlLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQGNsYXNzIENvbXBvbmVudFxuICogQGRlc2MgUGFyZW50IFJlYWN0IENvbXBvbmVudCB3aXRoIHN0b3JlIGluamVjdGlvbiBpbiBpdHMgc3RhdGVcbiAqL1xuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9XG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyAgICAgID0ge1xuICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfVxuICAgIFxuICAgIGNvbnN0cnVjdG9yKCBwLCBjdHgsIHEgKSB7XG4gICAgICAgIHN1cGVyKHAsIGN0eCwgcSk7XG4gICAgICAgIGlmICggdGhpcy5jb25zdHJ1Y3Rvci51c2UgKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4uY3R4LnJlc2NvcGUubWFwKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdLCBmYWxzZSkvLyBkb24ndCBiaW5kXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHgucmVzY29wZS5iaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHRoaXMucmVuZGVyID0gKCkgPT4gPGRpdj5ObyBSZXNjb3BlIGNvbnRleHQgaGVyZSB7IGJhc2VDb21wLm5hbWUgfTwvZGl2PlxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2VcbiAgICAgICAgJiYgdGhpcy5jb250ZXh0LnJlc2NvcGUudW5CaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdKVxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCBucCwgbmMgKSB7XG4gICAgICAgIGlmICggbmMucmVzY29wZSAhPT0gdGhpcy5jb250ZXh0LnJlc2NvcGUgKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnVzZVxuICAgICAgICAgICAgJiYgdGhpcy5jb250ZXh0LnJlc2NvcGUudW5CaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdKTtcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IudXNlXG4gICAgICAgICAgICAmJiBuYy5yZXNjb3BlLmJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UgfHwgW10pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc2NvcGU6IHRoaXMuY29udGV4dC5yZXNjb3BlLFxuICAgICAgICAgICAgJHN0b3JlczogdGhpcy5jb250ZXh0LiRzdG9yZXNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbiB8fCA8ZGl2Lz5cbiAgICB9XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gYmFzZUNvbXBcbiAqIEBwYXJhbSBjb250ZXh0XG4gKiBAcmV0dXJucyB7U2NvcGVQcm92aWRlcn1cbiAqL1xuZnVuY3Rpb24gcmVzY29wZSggYmFzZUNvbXAsIF9jb250ZXh0ICkge1xuICAgIGxldCBjb250ZXh0ID0gX2NvbnRleHQ7XG4gICAgcmV0dXJuIGNsYXNzIFNjb3BlUHJvdmlkZXIgZXh0ZW5kcyBiYXNlQ29tcCB7XG4gICAgICAgIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgICAgIC4uLihiYXNlQ29tcC5jaGlsZENvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgICAgICA9IHtcbiAgICAgICAgICAgIC4uLihiYXNlQ29tcC5jb250ZXh0VHlwZXMgfHwge30pLFxuICAgICAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgZGVmYXVsdFByb3BzICAgICAgPSB7XG4gICAgICAgICAgICAuLi4oYmFzZUNvbXAuZGVmYXVsdFByb3BzIHx8IHt9KSxcbiAgICAgICAgICAgIGRpc3BhdGNoOiAoKSA9PiBjb250ZXh0LmRpc3BhdGNoKC4uLmFyZ3VtZW50cylcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3RydWN0b3IoIHAsIGN0eCwgcSApIHtcbiAgICAgICAgICAgIHN1cGVyKHAsIGN0eCwgcSk7XG4gICAgICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCBjdHgucmVzY29wZTtcbiAgICAgICAgICAgIGlmICggY29udGV4dCAmJiB0aGlzLmNvbnN0cnVjdG9yLnVzZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAuLi5jb250ZXh0Lm1hcCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSwgZmFsc2UpLy8gZG9uJ3QgYmluZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250ZXh0LmJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UgfHwgW10sIGZhbHNlKVxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlcyA9IGNvbnRleHQuc3RvcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB0aGlzLnJlbmRlciA9ICgpID0+IDxkaXY+Tm8gUmVzY29wZSBjb250ZXh0IGhlcmUgeyBiYXNlQ29tcC5uYW1lIH08L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCAmJiBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpXG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnVzZVxuICAgICAgICAgICAgJiYgY29udGV4dC51bkJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UgfHwgW10pXG4gICAgICAgICAgICBkZWxldGUgdGhpcy4kc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCBucCwgbmMgKSB7XG4gICAgICAgICAgICBpZiAoICFfY29udGV4dCAmJiBuYy5yZXNjb3BlICE9PSB0aGlzLmNvbnRleHQucmVzY29wZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnVzZVxuICAgICAgICAgICAgICAgICYmIHRoaXMuY29udGV4dC5yZXNjb3BlLnVuQmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSk7XG4gICAgICAgICAgICAgICAgY29udGV4dCAgICAgID0gbmMucmVzY29wZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZXMgPSBjb250ZXh0LnN0b3JlcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnVzZVxuICAgICAgICAgICAgICAgICYmIG5jLnJlc2NvcGUuYmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICYmIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnAsIG5jKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICAgICAgbGV0IGN0eCA9IHN1cGVyLmdldENoaWxkQ29udGV4dCAmJiBzdXBlci5nZXRDaGlsZENvbnRleHQoKSB8fCB7fTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICAgIHJlc2NvcGU6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgJHN0b3JlczogY29udGV4dC5zdG9yZXNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBCYXNlQ29tcFxuICogQHBhcmFtIGNvbnRleHRcbiAqIEByZXR1cm5zIHtTY29wZVByb3ZpZGVyfX1cbiAqL1xuZnVuY3Rpb24gcmVzY29wZVByb3BzKCBCYXNlQ29tcCwgX2NvbnRleHQgKSB7XG4gICAgcmV0dXJuIHJlc2NvcGUoY2xhc3MgUmVTY29wZVByb3BzUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBzdGF0aWMgdXNlICAgICAgICAgICAgICAgPSBCYXNlQ29tcC51c2VcbiAgICAgICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgICAgICAgLi4uKEJhc2VDb21wLmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgICAgICA9IHtcbiAgICAgICAgICAgIC4uLihCYXNlQ29tcC5jb250ZXh0VHlwZXMgfHwge30pLFxuICAgICAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgbGV0IGNvbnRleHQgPSBfY29udGV4dCB8fCB0aGlzLmNvbnRleHQucmVzY29wZTtcbiAgICAgICAgICAgIHJldHVybiA8QmFzZUNvbXAgeyAuLi50aGlzLnByb3BzIH0geyAuLi50aGlzLnN0YXRlIH0gZGlzcGF0Y2g9eyBjb250ZXh0LmRpc3BhdGNoLmJpbmQoY29udGV4dCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc3RvcmVzPXsgY29udGV4dC5zdG9yZXMgfS8+XG4gICAgICAgIH1cbiAgICB9LCBfY29udGV4dClcbn1cblxuZXhwb3J0IHtcbiAgICBDb21wb25lbnQgYXMgZGVmYXVsdCxcbiAgICBDb21wb25lbnQsXG4gICAgcmVzY29wZVByb3BzLFxuICAgIHJlc2NvcGVcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlYWN0VG9vbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByb3AtdHlwZXNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9