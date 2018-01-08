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
	
	var _is = __webpack_require__(2);
	
	var _is2 = _interopRequireDefault(_is);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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
	 * @param use
	 * @returns {ScopeProvider}
	 */
	function rescope(baseComp, _context, use) {
	    var _class, _temp;
	
	    if (!use && _is2.default.array(_context)) {
	        use = _context;
	        _context = null;
	    }
	    var context = _context;
	
	    use = [].concat(_toConsumableArray(baseComp.use || []), _toConsumableArray(use || []));
	
	    return _temp = _class = function (_baseComp) {
	        _inherits(ScopeProvider, _baseComp);
	
	        function ScopeProvider(p, ctx, q) {
	            _classCallCheck(this, ScopeProvider);
	
	            var _this2 = _possibleConstructorReturn(this, (ScopeProvider.__proto__ || Object.getPrototypeOf(ScopeProvider)).call(this, p, ctx, q));
	
	            context = _is2.default.fn(context) && context(_this2) || context || ctx.rescope;
	            _is2.default.fn(_context) && context.retain();
	            if (context && use.length) {
	                _this2.state = _extends({}, _this2.state, context.map(_this2, use, false));
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
	                if (use.length) {
	                    context.bind(this, use, false);
	                }
	                _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillMount', this) && _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillMount', this).call(this);
	            }
	        }, {
	            key: 'componentWillUnmount',
	            value: function componentWillUnmount() {
	                _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillUnmount', this) && _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillUnmount', this).call(this);
	                use.length && context.unBind(this, use);
	                _is2.default.fn(_context) && context.dispose();
	                delete this.$stores;
	            }
	        }, {
	            key: 'componentWillReceiveProps',
	            value: function componentWillReceiveProps(np, nc) {
	                if (use.length && !_context && nc.rescope !== this.context.rescope) {
	                    this.context.rescope.unBind(this, use);
	                    context = nc.rescope;
	                    this.$stores = context.stores;
	                    nc.rescope.bind(this, use);
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
	
	            return (_context2 = context).dispatch.apply(_context2, arguments);
	        }
	    }), _temp;
	}
	
	/**
	 *
	 * @param BaseComp
	 * @param context
	 * @returns {ScopeProvider}}
	 */
	function rescopeProps(BaseComp, _context, use) {
	    var _class2, _temp2;
	
	    if (!use && _is2.default.array(_context)) {
	        use = _context;
	        _context = null;
	    }
	    use = [].concat(_toConsumableArray(BaseComp.use || []), _toConsumableArray(use || []));
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
	                return _react2.default.createElement(BaseComp, _extends({}, this.props, this.state, {
	                    dispatch: this.props.dispatch,
	                    $stores: this.$stores }));
	            }
	        }]);
	
	        return ReScopePropsProvider;
	    }(_react2.default.Component), _class2.use = use, _class2.childContextTypes = _extends({}, BaseComp.contextTypes || {}, {
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

	module.exports = require("is");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("prop-types");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDQwNTk0MjliMGQ5MzlkZmNiMTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlYWN0VG9vbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJwIiwiY3R4IiwicSIsImNvbnN0cnVjdG9yIiwidXNlIiwic3RhdGUiLCJyZXNjb3BlIiwibWFwIiwicmVuZGVyIiwiYmFzZUNvbXAiLCJuYW1lIiwiY29udGV4dCIsImJpbmQiLCJ1bkJpbmQiLCJucCIsIm5jIiwiJHN0b3JlcyIsInByb3BzIiwiY2hpbGRyZW4iLCJjaGlsZENvbnRleHRUeXBlcyIsIm9iamVjdCIsImNvbnRleHRUeXBlcyIsIl9jb250ZXh0IiwiYXJyYXkiLCJmbiIsInJldGFpbiIsImxlbmd0aCIsInN0b3JlcyIsImRpc3Bvc2UiLCJkZWZhdWx0UHJvcHMiLCJkaXNwYXRjaCIsInJlc2NvcGVQcm9wcyIsIkJhc2VDb21wIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Z2ZBN0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkE7Ozs7S0FJTUEsUzs7O0FBVUYsd0JBQWFDLENBQWIsRUFBZ0JDLEdBQWhCLEVBQXFCQyxDQUFyQixFQUF5QjtBQUFBOztB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QUFXYSxRQUZoQztBQUdVLDhCQUFVLEtBQUtkLE9BSHpCLElBQVA7QUFJSDtBQXRCRTs7QUFBQTtBQUFBLE9BQTJDLGdCQUFNakIsU0FBakQsV0FDSUssR0FESixHQUN3QkEsR0FEeEIsVUFFSWUsaUJBRkosZ0JBR0thLFNBQVNYLFlBQVQsSUFBeUIsRUFIOUI7QUFJQ2Ysa0JBQVMsb0JBQVVjLE1BSnBCO0FBS0NKLGtCQUFTLG9CQUFVSTtBQUxwQixpQkFPSUMsWUFQSixnQkFRS1csU0FBU1gsWUFBVCxJQUF5QixFQVI5QjtBQVNDZixrQkFBUyxvQkFBVWMsTUFUcEI7QUFVQ0osa0JBQVMsb0JBQVVJO0FBVnBCLGtCQXVCSkUsUUF2QkksQ0FBUDtBQXdCSDs7U0FHZ0JXLE8sR0FBYmxDLFM7U0FDQUEsUyxHQUFBQSxTO1NBQ0FnQyxZLEdBQUFBLFk7U0FDQXpCLE8sR0FBQUEsTzs7Ozs7O0FDdk5KLG1DOzs7Ozs7QUNBQSxnQzs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoiZGlzdC9SZWFjdFRvb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA0MDU5NDI5YjBkOTM5ZGZjYjExIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKiAgXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiAgXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqICBcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqICBcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBpcyBmcm9tICdpcydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQGNsYXNzIENvbXBvbmVudFxuICogQGRlc2MgUGFyZW50IFJlYWN0IENvbXBvbmVudCB3aXRoIHN0b3JlIGluamVjdGlvbiBpbiBpdHMgc3RhdGVcbiAqL1xuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9XG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyAgICAgID0ge1xuICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfVxuICAgIFxuICAgIGNvbnN0cnVjdG9yKCBwLCBjdHgsIHEgKSB7XG4gICAgICAgIHN1cGVyKHAsIGN0eCwgcSk7XG4gICAgICAgIGlmICggdGhpcy5jb25zdHJ1Y3Rvci51c2UgKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4uY3R4LnJlc2NvcGUubWFwKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdLCBmYWxzZSkvLyBkb24ndCBiaW5kXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB0aGlzLnJlbmRlciA9ICgpID0+IDxkaXY+Tm8gUmVzY29wZSBjb250ZXh0IGhlcmUgeyBiYXNlQ29tcC5uYW1lIH08L2Rpdj5cbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAoIHRoaXMuY29uc3RydWN0b3IudXNlICkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnJlc2NvcGUuYmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSwgZmFsc2UpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IudXNlXG4gICAgICAgICYmIHRoaXMuY29udGV4dC5yZXNjb3BlLnVuQmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSlcbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyggbnAsIG5jICkge1xuICAgICAgICBpZiAoIG5jLnJlc2NvcGUgIT09IHRoaXMuY29udGV4dC5yZXNjb3BlICkge1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2VcbiAgICAgICAgICAgICYmIHRoaXMuY29udGV4dC5yZXNjb3BlLnVuQmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSk7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnVzZVxuICAgICAgICAgICAgJiYgbmMucmVzY29wZS5iaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXNjb3BlOiB0aGlzLmNvbnRleHQucmVzY29wZSxcbiAgICAgICAgICAgICRzdG9yZXM6IHRoaXMuY29udGV4dC4kc3RvcmVzXG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4gfHwgPGRpdi8+XG4gICAgfVxufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIGJhc2VDb21wXG4gKiBAcGFyYW0gY29udGV4dFxuICogQHBhcmFtIHVzZVxuICogQHJldHVybnMge1Njb3BlUHJvdmlkZXJ9XG4gKi9cbmZ1bmN0aW9uIHJlc2NvcGUoIGJhc2VDb21wLCBfY29udGV4dCwgdXNlICkge1xuICAgIGlmICggIXVzZSAmJiBpcy5hcnJheShfY29udGV4dCkgKSB7XG4gICAgICAgIHVzZSAgICAgID0gX2NvbnRleHQ7XG4gICAgICAgIF9jb250ZXh0ID0gbnVsbDtcbiAgICB9XG4gICAgbGV0IGNvbnRleHQgPSBfY29udGV4dDtcbiAgICBcbiAgICB1c2UgPSBbLi4uKGJhc2VDb21wLnVzZSB8fCBbXSksIC4uLih1c2UgfHwgW10pXTtcbiAgICBcbiAgICByZXR1cm4gY2xhc3MgU2NvcGVQcm92aWRlciBleHRlbmRzIGJhc2VDb21wIHtcbiAgICAgICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgICAgICAgLi4uKGJhc2VDb21wLmNoaWxkQ29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGNvbnRleHRUeXBlcyAgICAgID0ge1xuICAgICAgICAgICAgLi4uKGJhc2VDb21wLmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgICAgICA9IHtcbiAgICAgICAgICAgIC4uLihiYXNlQ29tcC5kZWZhdWx0UHJvcHMgfHwge30pLFxuICAgICAgICAgICAgZGlzcGF0Y2g6ICggLi4uYXJneiApID0+IGNvbnRleHQuZGlzcGF0Y2goLi4uYXJneilcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3RydWN0b3IoIHAsIGN0eCwgcSApIHtcbiAgICAgICAgICAgIHN1cGVyKHAsIGN0eCwgcSk7XG4gICAgICAgICAgICBjb250ZXh0ID0gaXMuZm4oY29udGV4dCkgJiYgY29udGV4dCh0aGlzKSB8fCBjb250ZXh0IHx8IGN0eC5yZXNjb3BlO1xuICAgICAgICAgICAgaXMuZm4oX2NvbnRleHQpXG4gICAgICAgICAgICAmJiBjb250ZXh0LnJldGFpbigpXG4gICAgICAgICAgICBpZiAoIGNvbnRleHQgJiYgdXNlLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlICAgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIC4uLmNvbnRleHQubWFwKHRoaXMsIHVzZSwgZmFsc2UpLy8gZG9uJ3QgYmluZCBub3cgZHVlIHRvIFNTUlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZXMgPSBjb250ZXh0LnN0b3JlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgdGhpcy5yZW5kZXIgPSAoKSA9PiA8ZGl2Pk5vIFJlc2NvcGUgY29udGV4dCBoZXJlIHsgYmFzZUNvbXAubmFtZSB9PC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgICAgIGlmICggdXNlLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJpbmQodGhpcywgdXNlLCBmYWxzZSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxNb3VudCAmJiBzdXBlci5jb21wb25lbnRXaWxsTW91bnQoKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50ICYmIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KClcbiAgICAgICAgICAgIHVzZS5sZW5ndGhcbiAgICAgICAgICAgICYmIGNvbnRleHQudW5CaW5kKHRoaXMsIHVzZSk7XG4gICAgICAgICAgICBpcy5mbihfY29udGV4dClcbiAgICAgICAgICAgICYmIGNvbnRleHQuZGlzcG9zZSgpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuJHN0b3JlcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyggbnAsIG5jICkge1xuICAgICAgICAgICAgaWYgKCB1c2UubGVuZ3RoICYmICFfY29udGV4dCAmJiBuYy5yZXNjb3BlICE9PSB0aGlzLmNvbnRleHQucmVzY29wZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQucmVzY29wZS51bkJpbmQodGhpcywgdXNlKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0ICAgICAgPSBuYy5yZXNjb3BlO1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlcyA9IGNvbnRleHQuc3RvcmVzO1xuICAgICAgICAgICAgICAgIG5jLnJlc2NvcGUuYmluZCh0aGlzLCB1c2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAmJiBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wLCBuYyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgICAgIGxldCBjdHggPSBzdXBlci5nZXRDaGlsZENvbnRleHQgJiYgc3VwZXIuZ2V0Q2hpbGRDb250ZXh0KCkgfHwge307XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAgICAgICByZXNjb3BlOiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICRzdG9yZXM6IGNvbnRleHQuc3RvcmVzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gQmFzZUNvbXBcbiAqIEBwYXJhbSBjb250ZXh0XG4gKiBAcmV0dXJucyB7U2NvcGVQcm92aWRlcn19XG4gKi9cbmZ1bmN0aW9uIHJlc2NvcGVQcm9wcyggQmFzZUNvbXAsIF9jb250ZXh0LCB1c2UgKSB7XG4gICAgaWYgKCAhdXNlICYmIGlzLmFycmF5KF9jb250ZXh0KSApIHtcbiAgICAgICAgdXNlICAgICAgPSBfY29udGV4dDtcbiAgICAgICAgX2NvbnRleHQgPSBudWxsO1xuICAgIH1cbiAgICB1c2UgPSBbLi4uKEJhc2VDb21wLnVzZSB8fCBbXSksIC4uLih1c2UgfHwgW10pXTtcbiAgICByZXR1cm4gcmVzY29wZShjbGFzcyBSZVNjb3BlUHJvcHNQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHN0YXRpYyB1c2UgICAgICAgICAgICAgICA9IHVzZTtcbiAgICAgICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgICAgICAgLi4uKEJhc2VDb21wLmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9O1xuICAgICAgICBzdGF0aWMgY29udGV4dFR5cGVzICAgICAgPSB7XG4gICAgICAgICAgICAuLi4oQmFzZUNvbXAuY29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gPEJhc2VDb21wIHsgLi4udGhpcy5wcm9wcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4udGhpcy5zdGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoPXsgdGhpcy5wcm9wcy5kaXNwYXRjaCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzdG9yZXM9eyB0aGlzLiRzdG9yZXMgfS8+XG4gICAgICAgIH1cbiAgICB9LCBfY29udGV4dClcbn1cblxuZXhwb3J0IHtcbiAgICBDb21wb25lbnQgYXMgZGVmYXVsdCxcbiAgICBDb21wb25lbnQsXG4gICAgcmVzY29wZVByb3BzLFxuICAgIHJlc2NvcGVcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlYWN0VG9vbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==