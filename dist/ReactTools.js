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
	
	    use = [].concat(_toConsumableArray(baseComp.use || []), _toConsumableArray(use || []));
	
	    return _temp = _class = function (_baseComp) {
	        _inherits(ScopeProvider, _baseComp);
	
	        function ScopeProvider(p, ctx, q) {
	            _classCallCheck(this, ScopeProvider);
	
	            var _this2 = _possibleConstructorReturn(this, (ScopeProvider.__proto__ || Object.getPrototypeOf(ScopeProvider)).call(this, p, ctx, q));
	
	            _this2.$scope = _is2.default.fn(_context) && _context(_this2) || _context || ctx.rescope;
	            _is2.default.fn(_context) && _this2.$scope.retain();
	            if (_this2.$scope && use.length) {
	                _this2.state = _extends({}, _this2.state, _this2.$scope.map(_this2, use, false));
	                _this2.$stores = _this2.$scope.stores;
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
	            key: 'dispatch',
	            value: function dispatch() {
	                var _$scope;
	
	                (_$scope = this.$scope).dispatch.apply(_$scope, arguments);
	            }
	        }, {
	            key: 'componentWillMount',
	            value: function componentWillMount() {
	                if (use.length) {
	                    this.$scope.bind(this, use, false);
	                }
	                _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillMount', this) && _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillMount', this).call(this);
	            }
	        }, {
	            key: 'componentWillUnmount',
	            value: function componentWillUnmount() {
	                _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillUnmount', this) && _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillUnmount', this).call(this);
	                use.length && this.$scope.unBind(this, use);
	                _is2.default.fn(_context) && this.$scope.dispose();
	                delete this.$stores;
	                delete this.$scope;
	            }
	        }, {
	            key: 'componentWillReceiveProps',
	            value: function componentWillReceiveProps(np, nc) {
	                if (use.length && !_context && nc.rescope !== this.context.rescope) {
	                    this.context.rescope.unBind(this, use);
	                    this.$scope = nc.rescope;
	                    this.$stores = this.$scope.stores;
	                    nc.rescope.bind(this, use);
	                }
	                _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillReceiveProps', this) && _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillReceiveProps', this).call(this, np, nc);
	            }
	        }, {
	            key: 'getChildContext',
	            value: function getChildContext() {
	                var ctx = _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'getChildContext', this) && _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'getChildContext', this).call(this) || {};
	                return _extends({}, ctx, {
	                    rescope: this.$scope,
	                    $stores: this.$scope.stores
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
	    }), _class.defaultProps = _extends({}, baseComp.defaultProps || {}), _temp;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjBmNzIyMDY5NDgyZGQ3ZjA1OTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlYWN0VG9vbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJwIiwiY3R4IiwicSIsImNvbnN0cnVjdG9yIiwidXNlIiwic3RhdGUiLCJyZXNjb3BlIiwibWFwIiwicmVuZGVyIiwiYmFzZUNvbXAiLCJuYW1lIiwiY29udGV4dCIsImJpbmQiLCJ1bkJpbmQiLCJucCIsIm5jIiwiJHN0b3JlcyIsInByb3BzIiwiY2hpbGRyZW4iLCJjaGlsZENvbnRleHRUeXBlcyIsIm9iamVjdCIsImNvbnRleHRUeXBlcyIsIl9jb250ZXh0IiwiYXJyYXkiLCIkc2NvcGUiLCJmbiIsInJldGFpbiIsImxlbmd0aCIsInN0b3JlcyIsImRpc3BhdGNoIiwiZGlzcG9zZSIsImRlZmF1bHRQcm9wcyIsInJlc2NvcGVQcm9wcyIsIkJhc2VDb21wIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Z2ZBN0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkE7Ozs7S0FJTUEsUzs7O0FBVUYsd0JBQWFDLENBQWIsRUFBZ0JDLEdBQWhCLEVBQXFCQyxDQUFyQixFQUF5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O0FBQUEsK0NBYWU7QUFDZCx3QkFBTyxLQUFLSyxPQUFaO0FBQ0g7QUFmRTtBQUFBO0FBQUEsc0NBaUJNO0FBQ0wsd0JBQU8sOEJBQUMsUUFBRCxlQUFlLEtBQUtNLEtBQXBCLEVBQ2UsS0FBS1osS0FEcEI7QUFFVSwrQkFBVyxLQUFLWSxLQUFMLENBQVdZLFFBRmhDO0FBR1UsOEJBQVUsS0FBS2IsT0FIekIsSUFBUDtBQUlIO0FBdEJFOztBQUFBO0FBQUEsT0FBMkMsZ0JBQU1qQixTQUFqRCxXQUNJSyxHQURKLEdBQ3dCQSxHQUR4QixVQUVJZSxpQkFGSixnQkFHS2MsU0FBU1osWUFBVCxJQUF5QixFQUg5QjtBQUlDZixrQkFBUyxvQkFBVWMsTUFKcEI7QUFLQ0osa0JBQVMsb0JBQVVJO0FBTHBCLGlCQU9JQyxZQVBKLGdCQVFLWSxTQUFTWixZQUFULElBQXlCLEVBUjlCO0FBU0NmLGtCQUFTLG9CQUFVYyxNQVRwQjtBQVVDSixrQkFBUyxvQkFBVUk7QUFWcEIsa0JBdUJKRSxRQXZCSSxDQUFQO0FBd0JIOztTQUdnQlksTyxHQUFibkMsUztTQUNBQSxTLEdBQUFBLFM7U0FDQWlDLFksR0FBQUEsWTtTQUNBMUIsTyxHQUFBQSxPOzs7Ozs7QUMxTkosbUM7Ozs7OztBQ0FBLGdDOzs7Ozs7QUNBQSx3QyIsImZpbGUiOiJkaXN0L1JlYWN0VG9vbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjBmNzIyMDY5NDgyZGQ3ZjA1OTIiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqICBcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqICBcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogIFxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICogIFxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGlzIGZyb20gJ2lzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAY2xhc3MgQ29tcG9uZW50XG4gKiBAZGVzYyBQYXJlbnQgUmVhY3QgQ29tcG9uZW50IHdpdGggc3RvcmUgaW5qZWN0aW9uIGluIGl0cyBzdGF0ZVxuICovXG5jbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgIH1cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzICAgICAgPSB7XG4gICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9XG4gICAgXG4gICAgY29uc3RydWN0b3IoIHAsIGN0eCwgcSApIHtcbiAgICAgICAgc3VwZXIocCwgY3R4LCBxKTtcbiAgICAgICAgaWYgKCB0aGlzLmNvbnN0cnVjdG9yLnVzZSApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi5jdHgucmVzY29wZS5tYXAodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UgfHwgW10sIGZhbHNlKS8vIGRvbid0IGJpbmRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHRoaXMucmVuZGVyID0gKCkgPT4gPGRpdj5ObyBSZXNjb3BlIGNvbnRleHQgaGVyZSB7IGJhc2VDb21wLm5hbWUgfTwvZGl2PlxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGlmICggdGhpcy5jb25zdHJ1Y3Rvci51c2UgKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQucmVzY29wZS5iaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdLCBmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2VcbiAgICAgICAgJiYgdGhpcy5jb250ZXh0LnJlc2NvcGUudW5CaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdKVxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCBucCwgbmMgKSB7XG4gICAgICAgIGlmICggbmMucmVzY29wZSAhPT0gdGhpcy5jb250ZXh0LnJlc2NvcGUgKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnVzZVxuICAgICAgICAgICAgJiYgdGhpcy5jb250ZXh0LnJlc2NvcGUudW5CaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdKTtcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IudXNlXG4gICAgICAgICAgICAmJiBuYy5yZXNjb3BlLmJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UgfHwgW10pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc2NvcGU6IHRoaXMuY29udGV4dC5yZXNjb3BlLFxuICAgICAgICAgICAgJHN0b3JlczogdGhpcy5jb250ZXh0LiRzdG9yZXNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbiB8fCA8ZGl2Lz5cbiAgICB9XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gYmFzZUNvbXBcbiAqIEBwYXJhbSBjb250ZXh0XG4gKiBAcGFyYW0gdXNlXG4gKiBAcmV0dXJucyB7U2NvcGVQcm92aWRlcn1cbiAqL1xuZnVuY3Rpb24gcmVzY29wZSggYmFzZUNvbXAsIF9jb250ZXh0LCB1c2UgKSB7XG4gICAgaWYgKCAhdXNlICYmIGlzLmFycmF5KF9jb250ZXh0KSApIHtcbiAgICAgICAgdXNlICAgICAgPSBfY29udGV4dDtcbiAgICAgICAgX2NvbnRleHQgPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICB1c2UgPSBbLi4uKGJhc2VDb21wLnVzZSB8fCBbXSksIC4uLih1c2UgfHwgW10pXTtcbiAgICBcbiAgICByZXR1cm4gY2xhc3MgU2NvcGVQcm92aWRlciBleHRlbmRzIGJhc2VDb21wIHtcbiAgICAgICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgICAgICAgLi4uKGJhc2VDb21wLmNoaWxkQ29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGNvbnRleHRUeXBlcyAgICAgID0ge1xuICAgICAgICAgICAgLi4uKGJhc2VDb21wLmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgICAgICA9IHtcbiAgICAgICAgICAgIC4uLihiYXNlQ29tcC5kZWZhdWx0UHJvcHMgfHwge30pLFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdHJ1Y3RvciggcCwgY3R4LCBxICkge1xuICAgICAgICAgICAgc3VwZXIocCwgY3R4LCBxKTtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlID0gaXMuZm4oX2NvbnRleHQpICYmIF9jb250ZXh0KHRoaXMpIHx8IF9jb250ZXh0IHx8IGN0eC5yZXNjb3BlO1xuICAgICAgICAgICAgaXMuZm4oX2NvbnRleHQpXG4gICAgICAgICAgICAmJiB0aGlzLiRzY29wZS5yZXRhaW4oKVxuICAgICAgICAgICAgaWYgKCB0aGlzLiRzY29wZSAmJiB1c2UubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgICA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy4kc2NvcGUubWFwKHRoaXMsIHVzZSwgZmFsc2UpLy8gZG9uJ3QgYmluZCBub3cgZHVlIHRvIFNTUlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZXMgPSB0aGlzLiRzY29wZS5zdG9yZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHRoaXMucmVuZGVyID0gKCkgPT4gPGRpdj5ObyBSZXNjb3BlIGNvbnRleHQgaGVyZSB7IGJhc2VDb21wLm5hbWUgfTwvZGl2PlxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGRpc3BhdGNoICggLi4uYXJneiApe1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUuZGlzcGF0Y2goLi4uYXJneilcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICAgICAgaWYgKCB1c2UubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNjb3BlLmJpbmQodGhpcywgdXNlLCBmYWxzZSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxNb3VudCAmJiBzdXBlci5jb21wb25lbnRXaWxsTW91bnQoKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50ICYmIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KClcbiAgICAgICAgICAgIHVzZS5sZW5ndGhcbiAgICAgICAgICAgICYmIHRoaXMuJHNjb3BlLnVuQmluZCh0aGlzLCB1c2UpO1xuICAgICAgICAgICAgaXMuZm4oX2NvbnRleHQpXG4gICAgICAgICAgICAmJiB0aGlzLiRzY29wZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy4kc3RvcmVzO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuJHNjb3BlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCBucCwgbmMgKSB7XG4gICAgICAgICAgICBpZiAoIHVzZS5sZW5ndGggJiYgIV9jb250ZXh0ICYmIG5jLnJlc2NvcGUgIT09IHRoaXMuY29udGV4dC5yZXNjb3BlICkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5yZXNjb3BlLnVuQmluZCh0aGlzLCB1c2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHNjb3BlICAgICAgPSBuYy5yZXNjb3BlO1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlcyA9IHRoaXMuJHNjb3BlLnN0b3JlcztcbiAgICAgICAgICAgICAgICBuYy5yZXNjb3BlLmJpbmQodGhpcywgdXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCwgbmMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgICAgICBsZXQgY3R4ID0gc3VwZXIuZ2V0Q2hpbGRDb250ZXh0ICYmIHN1cGVyLmdldENoaWxkQ29udGV4dCgpIHx8IHt9O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgICAgcmVzY29wZTogdGhpcy4kc2NvcGUsXG4gICAgICAgICAgICAgICAgJHN0b3JlczogdGhpcy4kc2NvcGUuc3RvcmVzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gQmFzZUNvbXBcbiAqIEBwYXJhbSBjb250ZXh0XG4gKiBAcmV0dXJucyB7U2NvcGVQcm92aWRlcn19XG4gKi9cbmZ1bmN0aW9uIHJlc2NvcGVQcm9wcyggQmFzZUNvbXAsIF9jb250ZXh0LCB1c2UgKSB7XG4gICAgaWYgKCAhdXNlICYmIGlzLmFycmF5KF9jb250ZXh0KSApIHtcbiAgICAgICAgdXNlICAgICAgPSBfY29udGV4dDtcbiAgICAgICAgX2NvbnRleHQgPSBudWxsO1xuICAgIH1cbiAgICB1c2UgPSBbLi4uKEJhc2VDb21wLnVzZSB8fCBbXSksIC4uLih1c2UgfHwgW10pXTtcbiAgICByZXR1cm4gcmVzY29wZShjbGFzcyBSZVNjb3BlUHJvcHNQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHN0YXRpYyB1c2UgICAgICAgICAgICAgICA9IHVzZTtcbiAgICAgICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgICAgICAgLi4uKEJhc2VDb21wLmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9O1xuICAgICAgICBzdGF0aWMgY29udGV4dFR5cGVzICAgICAgPSB7XG4gICAgICAgICAgICAuLi4oQmFzZUNvbXAuY29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gPEJhc2VDb21wIHsgLi4udGhpcy5wcm9wcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4udGhpcy5zdGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoPXsgdGhpcy5wcm9wcy5kaXNwYXRjaCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzdG9yZXM9eyB0aGlzLiRzdG9yZXMgfS8+XG4gICAgICAgIH1cbiAgICB9LCBfY29udGV4dClcbn1cblxuZXhwb3J0IHtcbiAgICBDb21wb25lbnQgYXMgZGVmYXVsdCxcbiAgICBDb21wb25lbnQsXG4gICAgcmVzY29wZVByb3BzLFxuICAgIHJlc2NvcGVcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlYWN0VG9vbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==