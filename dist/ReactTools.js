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
	
	            context = context || ctx.rescope;
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
	                var context = _context || this.context.rescope;
	                return _react2.default.createElement(BaseComp, _extends({}, this.props, this.state, {
	                    dispatch: context.dispatch.bind(context),
	                    $stores: context.stores }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjUxYTkwNDUyYmE3NzdlYWU2NTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlYWN0VG9vbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJwIiwiY3R4IiwicSIsImNvbnN0cnVjdG9yIiwidXNlIiwic3RhdGUiLCJyZXNjb3BlIiwibWFwIiwicmVuZGVyIiwiYmFzZUNvbXAiLCJuYW1lIiwiY29udGV4dCIsImJpbmQiLCJ1bkJpbmQiLCJucCIsIm5jIiwiJHN0b3JlcyIsInByb3BzIiwiY2hpbGRyZW4iLCJjaGlsZENvbnRleHRUeXBlcyIsIm9iamVjdCIsImNvbnRleHRUeXBlcyIsIl9jb250ZXh0IiwiYXJyYXkiLCJsZW5ndGgiLCJzdG9yZXMiLCJkZWZhdWx0UHJvcHMiLCJkaXNwYXRjaCIsInJlc2NvcGVQcm9wcyIsIkJhc2VDb21wIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Z2ZBN0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkE7Ozs7S0FJTUEsUzs7O0FBVUYsd0JBQWFDLENBQWIsRUFBZ0JDLEdBQWhCLEVBQXFCQyxDQUFyQixFQUF5QjtBQUFBOztBQUFBLDJIQUNmRixDQURlLEVBQ1pDLEdB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LGlCQUZKLGdCQUdLVSxTQUFTUixZQUFULElBQXlCLEVBSDlCO0FBSUNmLGtCQUFTLG9CQUFVYyxNQUpwQjtBQUtDSixrQkFBUyxvQkFBVUk7QUFMcEIsaUJBT0lDLFlBUEosZ0JBUUtRLFNBQVNSLFlBQVQsSUFBeUIsRUFSOUI7QUFTQ2Ysa0JBQVMsb0JBQVVjLE1BVHBCO0FBVUNKLGtCQUFTLG9CQUFVSTtBQVZwQixrQkF3QkpFLFFBeEJJLENBQVA7QUF5Qkg7O1NBR2dCUSxPLEdBQWIvQixTO1NBQ0FBLFMsR0FBQUEsUztTQUNBNkIsWSxHQUFBQSxZO1NBQ0F0QixPLEdBQUFBLE87Ozs7OztBQ2xOSixtQzs7Ozs7O0FDQUEsZ0M7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6ImRpc3QvUmVhY3RUb29scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyNTFhOTA0NTJiYTc3N2VhZTY1MyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICogIFxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogIFxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiAgXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKiAgXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgaXMgZnJvbSAnaXMnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb21wb25lbnRcbiAqIEBkZXNjIFBhcmVudCBSZWFjdCBDb21wb25lbnQgd2l0aCBzdG9yZSBpbmplY3Rpb24gaW4gaXRzIHN0YXRlXG4gKi9cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfVxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgICAgICA9IHtcbiAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgIH1cbiAgICBcbiAgICBjb25zdHJ1Y3RvciggcCwgY3R4LCBxICkge1xuICAgICAgICBzdXBlcihwLCBjdHgsIHEpO1xuICAgICAgICBpZiAoIHRoaXMuY29uc3RydWN0b3IudXNlICkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgIC4uLmN0eC5yZXNjb3BlLm1hcCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSwgZmFsc2UpLy8gZG9uJ3QgYmluZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgdGhpcy5yZW5kZXIgPSAoKSA9PiA8ZGl2Pk5vIFJlc2NvcGUgY29udGV4dCBoZXJlIHsgYmFzZUNvbXAubmFtZSB9PC9kaXY+XG4gICAgfVxuICAgIFxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgaWYgKCB0aGlzLmNvbnN0cnVjdG9yLnVzZSApIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5yZXNjb3BlLmJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UgfHwgW10sIGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnVzZVxuICAgICAgICAmJiB0aGlzLmNvbnRleHQucmVzY29wZS51bkJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UgfHwgW10pXG4gICAgfVxuICAgIFxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoIG5wLCBuYyApIHtcbiAgICAgICAgaWYgKCBuYy5yZXNjb3BlICE9PSB0aGlzLmNvbnRleHQucmVzY29wZSApIHtcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IudXNlXG4gICAgICAgICAgICAmJiB0aGlzLmNvbnRleHQucmVzY29wZS51bkJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UgfHwgW10pO1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2VcbiAgICAgICAgICAgICYmIG5jLnJlc2NvcGUuYmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzY29wZTogdGhpcy5jb250ZXh0LnJlc2NvcGUsXG4gICAgICAgICAgICAkc3RvcmVzOiB0aGlzLmNvbnRleHQuJHN0b3Jlc1xuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuIHx8IDxkaXYvPlxuICAgIH1cbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBiYXNlQ29tcFxuICogQHBhcmFtIGNvbnRleHRcbiAqIEByZXR1cm5zIHtTY29wZVByb3ZpZGVyfVxuICovXG5mdW5jdGlvbiByZXNjb3BlKCBiYXNlQ29tcCwgX2NvbnRleHQsIHVzZSApIHtcbiAgICBpZiAoICF1c2UgJiYgaXMuYXJyYXkoX2NvbnRleHQpICkge1xuICAgICAgICB1c2UgICAgICA9IF9jb250ZXh0O1xuICAgICAgICBfY29udGV4dCA9IG51bGw7XG4gICAgfVxuICAgIGxldCBjb250ZXh0ID0gX2NvbnRleHQ7XG4gICAgXG4gICAgdXNlID0gWy4uLihiYXNlQ29tcC51c2UgfHwgW10pLCAuLi4odXNlIHx8IFtdKV07XG4gICAgXG4gICAgcmV0dXJuIGNsYXNzIFNjb3BlUHJvdmlkZXIgZXh0ZW5kcyBiYXNlQ29tcCB7XG4gICAgICAgIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgICAgIC4uLihiYXNlQ29tcC5jaGlsZENvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgICAgICA9IHtcbiAgICAgICAgICAgIC4uLihiYXNlQ29tcC5jb250ZXh0VHlwZXMgfHwge30pLFxuICAgICAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgZGVmYXVsdFByb3BzICAgICAgPSB7XG4gICAgICAgICAgICAuLi4oYmFzZUNvbXAuZGVmYXVsdFByb3BzIHx8IHt9KSxcbiAgICAgICAgICAgIGRpc3BhdGNoOiAoIC4uLmFyZ3ogKSA9PiBjb250ZXh0LmRpc3BhdGNoKC4uLmFyZ3opXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0cnVjdG9yKCBwLCBjdHgsIHEgKSB7XG4gICAgICAgICAgICBzdXBlcihwLCBjdHgsIHEpO1xuICAgICAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgY3R4LnJlc2NvcGU7XG4gICAgICAgICAgICBpZiAoIGNvbnRleHQgJiYgdXNlLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlICAgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIC4uLmNvbnRleHQubWFwKHRoaXMsIHVzZSwgZmFsc2UpLy8gZG9uJ3QgYmluZCBub3cgZHVlIHRvIFNTUlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZXMgPSBjb250ZXh0LnN0b3JlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgdGhpcy5yZW5kZXIgPSAoKSA9PiA8ZGl2Pk5vIFJlc2NvcGUgY29udGV4dCBoZXJlIHsgYmFzZUNvbXAubmFtZSB9PC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgICAgIGlmICggdXNlLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJpbmQodGhpcywgdXNlLCBmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxNb3VudCAmJiBzdXBlci5jb21wb25lbnRXaWxsTW91bnQoKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50ICYmIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KClcbiAgICAgICAgICAgIHVzZS5sZW5ndGhcbiAgICAgICAgICAgICYmIGNvbnRleHQudW5CaW5kKHRoaXMsIHVzZSlcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLiRzdG9yZXM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoIG5wLCBuYyApIHtcbiAgICAgICAgICAgIGlmICggdXNlLmxlbmd0aCAmJiAhX2NvbnRleHQgJiYgbmMucmVzY29wZSAhPT0gdGhpcy5jb250ZXh0LnJlc2NvcGUgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LnJlc2NvcGUudW5CaW5kKHRoaXMsIHVzZSk7XG4gICAgICAgICAgICAgICAgY29udGV4dCAgICAgID0gbmMucmVzY29wZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZXMgPSBjb250ZXh0LnN0b3JlcztcbiAgICAgICAgICAgICAgICBuYy5yZXNjb3BlLmJpbmQodGhpcywgdXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCwgbmMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgICAgICBsZXQgY3R4ID0gc3VwZXIuZ2V0Q2hpbGRDb250ZXh0ICYmIHN1cGVyLmdldENoaWxkQ29udGV4dCgpIHx8IHt9O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgICAgcmVzY29wZTogY29udGV4dCxcbiAgICAgICAgICAgICAgICAkc3RvcmVzOiBjb250ZXh0LnN0b3Jlc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIEJhc2VDb21wXG4gKiBAcGFyYW0gY29udGV4dFxuICogQHJldHVybnMge1Njb3BlUHJvdmlkZXJ9fVxuICovXG5mdW5jdGlvbiByZXNjb3BlUHJvcHMoIEJhc2VDb21wLCBfY29udGV4dCwgdXNlICkge1xuICAgIGlmICggIXVzZSAmJiBpcy5hcnJheShfY29udGV4dCkgKSB7XG4gICAgICAgIHVzZSAgICAgID0gX2NvbnRleHQ7XG4gICAgICAgIF9jb250ZXh0ID0gbnVsbDtcbiAgICB9XG4gICAgdXNlID0gWy4uLihCYXNlQ29tcC51c2UgfHwgW10pLCAuLi4odXNlIHx8IFtdKV07XG4gICAgcmV0dXJuIHJlc2NvcGUoY2xhc3MgUmVTY29wZVByb3BzUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBzdGF0aWMgdXNlICAgICAgICAgICAgICAgPSB1c2VcbiAgICAgICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgICAgICAgLi4uKEJhc2VDb21wLmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgICAgICA9IHtcbiAgICAgICAgICAgIC4uLihCYXNlQ29tcC5jb250ZXh0VHlwZXMgfHwge30pLFxuICAgICAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgbGV0IGNvbnRleHQgPSBfY29udGV4dCB8fCB0aGlzLmNvbnRleHQucmVzY29wZTtcbiAgICAgICAgICAgIHJldHVybiA8QmFzZUNvbXAgeyAuLi50aGlzLnByb3BzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi50aGlzLnN0YXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2g9eyBjb250ZXh0LmRpc3BhdGNoLmJpbmQoY29udGV4dCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc3RvcmVzPXsgY29udGV4dC5zdG9yZXMgfS8+XG4gICAgICAgIH1cbiAgICB9LCBfY29udGV4dClcbn1cblxuZXhwb3J0IHtcbiAgICBDb21wb25lbnQgYXMgZGVmYXVsdCxcbiAgICBDb21wb25lbnQsXG4gICAgcmVzY29wZVByb3BzLFxuICAgIHJlc2NvcGVcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlYWN0VG9vbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==