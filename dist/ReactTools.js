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
	exports.withScope = exports.withScopeToProps = exports.Component = exports.default = undefined;
	
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
	function withScope(baseComp, _context) {
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
	function withScopeToProps(BaseComp, _context) {
	    var _class2, _temp2;
	
	    return withScope((_temp2 = _class2 = function (_React$Component2) {
	        _inherits(ReScopePropsProvider, _React$Component2);
	
	        function ReScopePropsProvider() {
	            _classCallCheck(this, ReScopePropsProvider);
	
	            return _possibleConstructorReturn(this, (ReScopePropsProvider.__proto__ || Object.getPrototypeOf(ReScopePropsProvider)).apply(this, arguments));
	        }
	
	        _createClass(ReScopePropsProvider, [{
	            key: 'render',
	            value: function render() {
	                var context = _context || this.context.rescope;
	                return _react2.default.createElement(BaseComp, _extends({}, this.props, this.state, { dispatch: context.dispatch.bind(context),
	                    $stores: context.stores }));
	            }
	        }]);
	
	        return ReScopePropsProvider;
	    }(_react2.default.Component), _class2.use = BaseComp.use, _temp2), _context);
	}
	
	exports.default = Component;
	exports.Component = Component;
	exports.withScopeToProps = withScopeToProps;
	exports.withScope = withScope;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2JmODUyNWE5MzNkNmMyYTgxY2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlYWN0VG9vbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwicCIsImN0eCIsInEiLCJjb25zdHJ1Y3RvciIsInVzZSIsInN0YXRlIiwicmVzY29wZSIsIm1hcCIsImJpbmQiLCJyZW5kZXIiLCJiYXNlQ29tcCIsIm5hbWUiLCJjb250ZXh0IiwidW5CaW5kIiwibnAiLCJuYyIsIiRzdG9yZXMiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJvYmplY3QiLCJjb250ZXh0VHlwZXMiLCJ3aXRoU2NvcGUiLCJfY29udGV4dCIsInN0b3JlcyIsImRlZmF1bHRQcm9wcyIsImRpc3BhdGNoIiwid2l0aFNjb3BlVG9Qcm9wcyIsIkJhc2VDb21wIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Z2ZBcEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBOzs7O0tBSU1BLFM7OztBQVVGLHdCQUFhQyxDQUFiLEVBQWdCQyxHQUFoQixFQUFxQkMsQ0FBckIsRUFBeUI7QUFBQTs7QUFBQSwySEFDZkYsQ0FEZSxFQUNaQyxHQURZLEVBQ1BDLENBRE87O0FBRXJCLGFBQUssTUFBS0MsV0FBTCxDQUFpQkMsR0FB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WVlmLFNBQVNlLFlBQVQsSUFBeUIsRUFackM7QUFhUUMsbUJBQVU7QUFBQTs7QUFBQSxvQkFBTSxzQkFBUUEsUUFBUiw2QkFBTjtBQUFBO0FBYmxCO0FBd0RIOztBQUVEOzs7Ozs7QUFNQSxVQUFTQyxnQkFBVCxDQUEyQkMsUUFBM0IsRUFBcUNMLFFBQXJDLEVBQWdEO0FBQUE7O0FBQzVDLFlBQU9EO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxzQ0FHTTtBQUNMLHFCQUFJVixVQUFVVyxZQUFZLEtBQUtYLE9BQUwsQ0FBYU4sT0FBdkM7QUFDQSx3QkFBTyw4QkFBQyxRQUFELGVBQWUsS0FBS1csS0FBcEIsRUFBaUMsS0FBS1osS0FBdEMsSUFBOEMsVUFBV08sUUFBUWMsUUFBUixDQUFpQmxCLElBQWpCLENBQXNCSSxPQUF0QixDQUF6RDtBQUNVLDhCQUFVQSxRQUFRWSxNQUQ1QixJQUFQO0FBRUg7QUFQRTs7QUFBQTtBQUFBLE9BQTZDLGdCQUFNekIsU0FBbkQsV0FDSUssR0FESixHQUNVd0IsU0FBU3hCLEdBRG5CLFdBUUptQixRQVJJLENBQVA7QUFTSDs7U0FHZ0JNLE8sR0FBYjlCLFM7U0FDQUEsUyxHQUFBQSxTO1NBQ0E0QixnQixHQUFBQSxnQjtTQUNBTCxTLEdBQUFBLFM7Ozs7OztBQ2xLSixtQzs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoiZGlzdC9SZWFjdFRvb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNiZjg1MjVhOTMzZDZjMmE4MWNiIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE4LiAgQ2FpcGkgTGFicy4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFRoaXMgRmlsZSBpcyBwYXJ0IG9mIENhaXBpLiBZb3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XHJcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXHJcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZVxyXG4gKiBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcclxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxyXG4gKiBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXHJcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXHJcbiAqICBUaGlzIHByb2plY3QgaXMgZHVhbCBsaWNlbnNlZCB1bmRlciBBR1BMIGFuZCBDb21tZXJjaWFsIExpY2VuY2UuXHJcbiAqXHJcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cclxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXHJcbiAqL1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBDb21wb25lbnRcclxuICogQGRlc2MgUGFyZW50IFJlYWN0IENvbXBvbmVudCB3aXRoIHN0b3JlIGluamVjdGlvbiBpbiBpdHMgc3RhdGVcclxuICovXHJcbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XHJcbiAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY29udGV4dFR5cGVzICAgICAgPSB7XHJcbiAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCBwLCBjdHgsIHEgKSB7XHJcbiAgICAgICAgc3VwZXIocCwgY3R4LCBxKTtcclxuICAgICAgICBpZiAoIHRoaXMuY29uc3RydWN0b3IudXNlICkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC4uLmN0eC5yZXNjb3BlLm1hcCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSwgZmFsc2UpLy8gZG9uJ3QgYmluZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0eC5yZXNjb3BlLmJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UgfHwgW10sIGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHRoaXMucmVuZGVyID0gKCkgPT4gPGRpdj5ObyBSZXNjb3BlIGNvbnRleHQgaGVyZSB7IGJhc2VDb21wLm5hbWUgfTwvZGl2PlxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnVzZVxyXG4gICAgICAgICYmIHRoaXMuY29udGV4dC5yZXNjb3BlLnVuQmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyggbnAsIG5jICkge1xyXG4gICAgICAgIGlmICggbmMucmVzY29wZSAhPT0gdGhpcy5jb250ZXh0LnJlc2NvcGUgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IudXNlXHJcbiAgICAgICAgICAgICYmIHRoaXMuY29udGV4dC5yZXNjb3BlLnVuQmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IudXNlXHJcbiAgICAgICAgICAgICYmIG5jLnJlc2NvcGUuYmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRDaGlsZENvbnRleHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzY29wZTogdGhpcy5jb250ZXh0LnJlc2NvcGUsXHJcbiAgICAgICAgICAgICRzdG9yZXM6IHRoaXMuY29udGV4dC4kc3RvcmVzXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuIHx8IDxkaXYvPlxyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBiYXNlQ29tcFxyXG4gKiBAcGFyYW0gY29udGV4dFxyXG4gKiBAcmV0dXJucyB7U2NvcGVQcm92aWRlcn1cclxuICovXHJcbmZ1bmN0aW9uIHdpdGhTY29wZSggYmFzZUNvbXAsIF9jb250ZXh0ICkge1xyXG4gICAgbGV0IGNvbnRleHQgPSBfY29udGV4dDtcclxuICAgIHJldHVybiBjbGFzcyBTY29wZVByb3ZpZGVyIGV4dGVuZHMgYmFzZUNvbXAge1xyXG4gICAgICAgIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcclxuICAgICAgICAgICAgLi4uKGJhc2VDb21wLmNoaWxkQ29udGV4dFR5cGVzIHx8IHt9KSxcclxuICAgICAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0aWMgY29udGV4dFR5cGVzICAgICAgPSB7XHJcbiAgICAgICAgICAgIC4uLihiYXNlQ29tcC5jb250ZXh0VHlwZXMgfHwge30pLFxyXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgICAgICA9IHtcclxuICAgICAgICAgICAgLi4uKGJhc2VDb21wLmRlZmF1bHRQcm9wcyB8fCB7fSksXHJcbiAgICAgICAgICAgIGRpc3BhdGNoOiAoKSA9PiBjb250ZXh0LmRpc3BhdGNoKC4uLmFyZ3VtZW50cylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3RydWN0b3IoIHAsIGN0eCwgcSApIHtcclxuICAgICAgICAgICAgc3VwZXIocCwgY3R4LCBxKTtcclxuICAgICAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgY3R4LnJlc2NvcGU7XHJcbiAgICAgICAgICAgIGlmICggY29udGV4dCAmJiB0aGlzLmNvbnN0cnVjdG9yLnVzZSApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAuLi5jb250ZXh0Lm1hcCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSwgZmFsc2UpLy8gZG9uJ3QgYmluZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGV4dC5iaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlcyA9IGNvbnRleHQuc3RvcmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5yZW5kZXIgPSAoKSA9PiA8ZGl2Pk5vIFJlc2NvcGUgY29udGV4dCBoZXJlIHsgYmFzZUNvbXAubmFtZSB9PC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnVzZVxyXG4gICAgICAgICAgICAmJiBjb250ZXh0LnVuQmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSlcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuJHN0b3JlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyggbnAsIG5jICkge1xyXG4gICAgICAgICAgICBpZiAoICFfY29udGV4dCAmJiBuYy5yZXNjb3BlICE9PSB0aGlzLmNvbnRleHQucmVzY29wZSApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IudXNlXHJcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmNvbnRleHQucmVzY29wZS51bkJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UgfHwgW10pO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dCAgICAgID0gbmMucmVzY29wZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlcyA9IGNvbnRleHQuc3RvcmVzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2VcclxuICAgICAgICAgICAgICAgICYmIG5jLnJlc2NvcGUuYmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xyXG4gICAgICAgICAgICBsZXQgY3R4ID0gc3VwZXIuZ2V0Q2hpbGRDb250ZXh0ICYmIHN1cGVyLmdldENoaWxkQ29udGV4dCgpIHx8IHt9O1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY3R4LFxyXG4gICAgICAgICAgICAgICAgcmVzY29wZTogY29udGV4dCxcclxuICAgICAgICAgICAgICAgICRzdG9yZXM6IGNvbnRleHQuc3RvcmVzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIEJhc2VDb21wXHJcbiAqIEBwYXJhbSBjb250ZXh0XHJcbiAqIEByZXR1cm5zIHtTY29wZVByb3ZpZGVyfX1cclxuICovXHJcbmZ1bmN0aW9uIHdpdGhTY29wZVRvUHJvcHMoIEJhc2VDb21wLCBfY29udGV4dCApIHtcclxuICAgIHJldHVybiB3aXRoU2NvcGUoY2xhc3MgUmVTY29wZVByb3BzUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgICAgIHN0YXRpYyB1c2UgPSBCYXNlQ29tcC51c2VcclxuICAgICAgICBcclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIGxldCBjb250ZXh0ID0gX2NvbnRleHQgfHwgdGhpcy5jb250ZXh0LnJlc2NvcGU7XHJcbiAgICAgICAgICAgIHJldHVybiA8QmFzZUNvbXAgeyAuLi50aGlzLnByb3BzIH0geyAuLi50aGlzLnN0YXRlIH0gZGlzcGF0Y2g9eyBjb250ZXh0LmRpc3BhdGNoLmJpbmQoY29udGV4dCkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzdG9yZXM9eyBjb250ZXh0LnN0b3JlcyB9Lz5cclxuICAgICAgICB9XHJcbiAgICB9LCBfY29udGV4dClcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIENvbXBvbmVudCBhcyBkZWZhdWx0LFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgd2l0aFNjb3BlVG9Qcm9wcyxcclxuICAgIHdpdGhTY29wZVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZWFjdFRvb2xzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==