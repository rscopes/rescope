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

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Scope = __webpack_require__(1);
	
	var _Scope2 = _interopRequireDefault(_Scope);
	
	var _Store = __webpack_require__(5);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	var _ReactTools = __webpack_require__(6);
	
	var RTools = _interopRequireWildcard(_ReactTools);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Scope2.default.Store = _Store2.default; /*
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
	
	exports.default = {
	  Store: _Store2.default,
	  Context: _Scope2.default,
	  Scope: _Scope2.default,
	  Component: RTools.Component,
	  reScopeProps: RTools.reScopeProps,
	  reScopeState: RTools.reScopeState
	};
	module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	
	var is = __webpack_require__(2),
	    EventEmitter = __webpack_require__(3),
	    shortid = __webpack_require__(4),
	    __proto__push = function __proto__push(target, id, parent) {
	    var fn = function fn() {};
	    fn.prototype = parent ? new parent["_" + id]() : target[id] || {};
	    target[id] = new fn();
	    target['_' + id] = fn;
	},
	    openScopes = {};
	
	var Scope = function (_EventEmitter) {
	    _inherits(Scope, _EventEmitter);
	
	    _createClass(Scope, null, [{
	        key: 'getScope',
	        // all active scopes
	
	        // if > 0, will wait 'persistenceTm' ms before destroy when dispose reach 0
	        value: function getScope(scopes) {
	            var skey = is.array(scopes) ? scopes.sort(function (a, b) {
	                if (a.firstname < b.firstname) return -1;
	                if (a.firstname > b.firstname) return 1;
	                return 0;
	            }).join('::') : scopes;
	            return openScopes[skey] = openScopes[skey] || new Scope({}, { id: skey });
	        }
	    }]);
	
	    /**
	     * Init a Rescope scope
	     *
	     * @param storesMap {Object} Object with the origin stores
	     * @param id {string} @optional id ( if this id exist storesMap will be merge on the 'id' scope)
	     * @param parent
	     * @param state
	     * @param data
	     * @param name
	     * @param defaultMaxListeners
	     * @param persistenceTm {number) if > 0, will wait 'persistenceTm' ms before destroy when dispose reach 0
	     * @param autoDestroy  {bool} will trigger retain & dispose after start
	     * @returns {Scope}
	     */
	    function Scope(storesMap) {
	        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	            id = _ref.id,
	            parent = _ref.parent,
	            state = _ref.state,
	            data = _ref.data,
	            name = _ref.name,
	            incrementId = _ref.incrementId,
	            defaultMaxListeners = _ref.defaultMaxListeners,
	            persistenceTm = _ref.persistenceTm,
	            autoDestroy = _ref.autoDestroy,
	            rootEmitter = _ref.rootEmitter;
	
	        _classCallCheck(this, Scope);
	
	        var _this = _possibleConstructorReturn(this, (Scope.__proto__ || Object.getPrototypeOf(Scope)).call(this));
	
	        _this._maxListeners = defaultMaxListeners || _this.constructor.defaultMaxListeners;
	        id = id || "_____" + shortid.generate();
	        if (openScopes[id] && !incrementId) {
	            var _ret;
	
	            _this._id = id;
	            openScopes[id].register(storesMap);
	            return _ret = openScopes[id], _possibleConstructorReturn(_this, _ret);
	        } else if (openScopes[id] && incrementId) {
	            var i = -1;
	            while (openScopes[id + '/' + ++i]) {}
	            id = id + '/' + i;
	        }
	
	        _this._id = id;
	        openScopes[id] = _this;
	        _this._isLocalId = true;
	        _this._persistenceTm = persistenceTm || _this.constructor.persistenceTm;
	
	        _this.stores = {};
	        _this.state = {};
	        _this.data = {};
	
	        if (parent && parent.dead) throw new Error("Can't use a dead scope as parent !");
	
	        __proto__push(_this, 'stores', parent);
	        __proto__push(_this, 'state', parent);
	        __proto__push(_this, 'data', parent);
	        _this.parent = parent;
	
	        _this.sources = [];
	        _this._childScopes = [];
	        _this._childScopesList = [];
	        _this._unStableChilds = 0;
	
	        _this.__retains = { all: 0 };
	        _this.__locks = { all: 1 };
	        _this.__listening = {};
	        _this.__scope = {};
	        _this.__mixed = [];
	        _this.__mixedList = [];
	        _this._followers = [];
	        if (parent) {
	            parent.retain("isMyParent");
	            if (!rootEmitter) {
	                !parent._stable && _this.wait("waitingParent");
	                parent.on(_this.__parentList = {
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
	                parent.on(_this.__parentList = {
	                    'update': function update(s) {
	                        return _this._propag();
	                    }
	                });
	            }
	            // this.register(parent.__scope, state, data);
	        }
	
	        _this.register(storesMap, state, data);
	        _this.__locks.all--;
	        _this._stable = !_this.__locks.all;
	
	        if (parent) {
	            parent._addChild(_this);
	        }
	        if (autoDestroy) setTimeout(function (tm) {
	            _this.retain("autoDestroy");
	            _this.dispose("autoDestroy");
	        });
	        return _this;
	    }
	
	    /**
	     * @deprecated
	     * @returns {*}
	     */
	
	
	    _createClass(Scope, [{
	        key: 'mount',
	
	
	        /**
	         *
	         * Mount the stores in storesList, in this scope or in its parents or mixed scopes
	         *
	         * @param storesList {string|storeRef} Store name, Array of Store names, or Rescope store ref from Store::as or
	         *     Store:as
	         * @param state
	         * @param data
	         * @returns {Scope}
	         */
	        value: function mount(storesList, state, data) {
	            var _this2 = this;
	
	            if (is.array(storesList)) {
	                storesList.forEach(function (k) {
	                    return _this2._mount(k, state && state[k], data && data[k]);
	                });
	            } else {
	                this._mount.apply(this, arguments);
	            }
	            return this;
	        }
	    }, {
	        key: '_mount',
	        value: function _mount(id, state, data) {
	            if (typeof id !== 'string') {
	                this.register(_defineProperty({}, id.name, id.store));
	                id = id.name;
	            }
	
	            if (!this.__scope[id]) {
	                var _parent;
	
	                //ask mixed || parent
	                if (this.__mixed.reduce(function (mounted, ctx) {
	                    return mounted || ctx._mount(id, state, data);
	                }, false) || !this.parent) return;
	                return (_parent = this.parent)._mount.apply(_parent, arguments);
	            }
	            var store = this.__scope[id],
	                ctx = void 0;
	            if (is.fn(store)) {
	                this.__scope[id] = new store(this, { state: state, data: data });
	            } else {
	                if (state !== undefined && data === undefined) store.setState(state);else if (state !== undefined) store.state = state;
	
	                if (data !== undefined) store.push(data);
	            }
	
	            this._watchStore(id);
	
	            return this.__scope[id];
	        }
	    }, {
	        key: '_watchStore',
	        value: function _watchStore(id, state, data) {
	            var _this3 = this;
	
	            if (!this.__scope[id]) {
	                var _parent2;
	
	                //ask mixed || parent
	                if (this.__mixed.reduce(function (mounted, ctx) {
	                    return mounted || ctx._watchStore(id, state, data);
	                }, false) || !this.parent) return;
	                return (_parent2 = this.parent)._watchStore.apply(_parent2, arguments);
	            }
	            if (!this.__listening[id] && !is.fn(this.__scope[id])) {
	                !this.__scope[id].isStable() && this.wait(id);
	                this.__scope[id].on(this.__listening[id] = {
	                    'destroy': function destroy(s) {
	                        delete _this3.__listening[id];
	                        _this3.__scope[id] = _this3.__scope[id].constructor;
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
	        key: 'mixin',
	        value: function mixin(targetCtx) {
	            var _this4 = this;
	
	            var parent = this.parent,
	                lists = void 0;
	            this.__mixed.push(targetCtx);
	            targetCtx.retain("mixedTo");
	            if (!targetCtx._stable) this.wait(targetCtx._id);
	
	            this.__mixedList.push(lists = {
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
	
	            this.stores = {};
	            this.state = {};
	            this.data = {};
	            targetCtx.on(lists);
	            __proto__push(this, 'stores', parent);
	            __proto__push(this, 'state', parent);
	            __proto__push(this, 'data', parent);
	
	            this.relink(this.__scope, this, false, true);
	            this.__mixed.forEach(function (ctx) {
	                __proto__push(_this4, 'stores');
	                __proto__push(_this4, 'state');
	                __proto__push(_this4, 'data');
	                ctx.relink(ctx.__scope, _this4, true, true);
	            });
	        }
	
	        /**
	         * Register stores in storesMap & link them in the protos
	         * @param storesMap
	         * @param state
	         * @param data
	         */
	
	    }, {
	        key: 'register',
	        value: function register(storesMap) {
	            var _this5 = this;
	
	            var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	            var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	            this.relink(storesMap, this, false, false);
	            Object.keys(storesMap).forEach(function (id) {
	                if (storesMap[id].singleton || is.fn(storesMap[id]) && (state[id] || data[id])) {
	                    _this5._mount(id, state[id], data[id]);
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
	        key: 'relink',
	        value: function relink(srcCtx) {
	            var targetCtx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
	
	            var _this6 = this;
	
	            var external = arguments[2];
	            var force = arguments[3];
	
	            var lctx = targetCtx._stores.prototype;
	            Object.keys(srcCtx).forEach(function (id) {
	                if (!force && targetCtx.__scope[id] === srcCtx[id] || targetCtx.__scope[id] && targetCtx.__scope[id].constructor === srcCtx[id]) return;
	
	                if (!force && targetCtx.__scope[id]) {
	                    if (!external && !is.fn(targetCtx.__scope[id])) {
	                        console.info("Rescope Store : ", id, " already exist in this scope ! ( try __proto__ hot patch )");
	                        targetCtx.__scope[id].__proto__ = srcCtx[id].prototype;
	                    }
	                    if (!external && is.fn(targetCtx.__scope[id])) targetCtx.__scope[id] = srcCtx[id];
	
	                    return;
	                } else if (!force && !external) _this6.__scope[id] = srcCtx[id];
	
	                Object.defineProperty(lctx, id, {
	                    get: function get() {
	                        return _this6.__scope[id];
	                    }
	                });
	                Object.defineProperty(targetCtx._state.prototype, id, {
	                    get: function get() {
	                        return _this6.__scope[id] && _this6.__scope[id].state;
	                    },
	                    set: function set(v) {
	                        return _this6._mount(id, v);
	                    }
	                });
	                Object.defineProperty(targetCtx._data.prototype, id, {
	                    get: function get() {
	                        return _this6.__scope[id] && _this6.__scope[id].data;
	                    },
	                    set: function set(v) {
	                        return _this6._mount(id, undefined, v);
	                    }
	                });
	            });
	        }
	
	        /**
	         * Bind stores from this scope, his parents and mixed scope
	         *
	         * @param obj {React.Component|Store|function}
	         * @param key {string} stores keys to bind updates
	         * @param as
	         * @param setInitial {bool} false to not propag initial value (default : true)
	         */
	
	    }, {
	        key: 'bind',
	        value: function bind(obj, key, as) {
	            var setInitial = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	
	            var lastRevs = void 0,
	                data = void 0,
	                reKey = void 0;
	            if (key && !is.array(key)) key = [key];
	
	            if (as === false || as === true) {
	                setInitial = as;
	                as = null;
	            }
	
	            reKey = key.map(function (id) {
	                return is.string(id) ? id : id.name;
	            });
	
	            this._followers.push([obj, key, as || undefined, lastRevs = reKey && reKey.reduce(function (revs, id) {
	                return revs[id] = 0, revs;
	            }, {})]);
	
	            this.mount(key);
	
	            if (setInitial && this._stable) {
	                data = this.getUpdates(lastRevs);
	                if (!data) return;
	                if (typeof obj != "function") {
	                    if (as) obj.setState(_defineProperty({}, as, data));else obj.setState(data);
	                } else {
	                    obj(data);
	                }
	            }
	            return this;
	        }
	
	        /**
	         * Un bind this scope off the given component-keys
	         * @param obj
	         * @param key
	         * @returns {Array.<*>}
	         */
	
	    }, {
	        key: 'unBind',
	        value: function unBind(obj, key, as) {
	            var followers = this._followers,
	                i = followers && followers.length;
	            while (followers && i--) {
	                if (followers[i][0] === obj && '' + followers[i][1] == '' + key && followers[i][2] == as) return followers.splice(i, 1);
	            }
	        }
	
	        /**
	         * Mount the stores in storesList from this scope, its parents and mixed scope
	         * Bind them to 'to'
	         * Hook 'to' so it will auto unbind on 'destroy' or 'componentWillUnmount'
	         * @param to
	         * @param storesList
	         * @param bind
	         * @returns {Object} Initial outputs of the stores in 'storesList'
	         */
	
	    }, {
	        key: 'map',
	        value: function map(to, storesList) {
	            var _this7 = this;
	
	            var bind = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	            var Store = this.constructor.Store;
	            storesList = is.array(storesList) ? storesList : [storesList];
	            this.mount(storesList);
	            if (bind && to instanceof Store) {
	                Store.map(to, storesList, this, this, false);
	            } else if (bind) {
	                this.bind(to, storesList, undefined, false);
	
	                var mixedCWUnmount = void 0,
	                    unMountKey = to.isReactComponent ? "componentWillUnmount" : "destroy";
	
	                if (to.hasOwnProperty(unMountKey)) {
	                    mixedCWUnmount = to[unMountKey];
	                }
	
	                to[unMountKey] = function () {
	                    delete to[unMountKey];
	                    if (mixedCWUnmount) to[unMountKey] = mixedCWUnmount;
	
	                    _this7.unBind(to, storesList);
	                    return to[unMountKey] && to[unMountKey].apply(to, arguments);
	                };
	            }
	            return storesList.reduce(function (data, id) {
	                if (!is.string(id)) id = id.name;
	                id = id.split(':'); //@todo
	                id[0] = id[0].split('.');
	                data[id[1] || id[0][id[0].length - 1]] = _this7.stores[id[0][0]] && _this7.stores[id[0][0]].retrieve && _this7.stores[id[0][0]].retrieve(id[0].splice(1));
	                return data;
	            }, {});
	        }
	    }, {
	        key: 'retrieve',
	        value: function retrieve() {
	            var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	
	            path = is.string(path) ? path.split('.') : path;
	            return path && this.stores[path[0]] && this.stores[path[0]].retrieve(path.splice(1));
	        }
	
	        /**
	         * Get or update storesRevMap's revisions
	         * @param storesRevMap
	         * @param local
	         * @returns {{}}
	         */
	
	    }, {
	        key: 'getStoresRevs',
	        value: function getStoresRevs() {
	            var storesRevMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	            var local = arguments[1];
	
	            var ctx = this.__scope;
	            if (!storesRevMap) {
	                storesRevMap = {};
	            }
	            Object.keys(ctx).forEach(function (id) {
	                if (!is.fn(ctx[id])) {
	                    storesRevMap[id] = ctx[id]._rev;
	                } else if (!storesRevMap.hasOwnProperty(id)) storesRevMap[id] = false;
	            });
	            if (!local) {
	                this.__mixed.reduce(function (updated, ctx) {
	                    return ctx.getStoresRevs(storesRevMap), storesRevMap;
	                }, storesRevMap);
	                this.parent && this.parent.getStoresRevs(storesRevMap);
	            }
	            return storesRevMap;
	        }
	
	        /**
	         * Get or update output basing storesRevMap's revisions.
	         * If a store in 'storesRevMap' is updated; add it to 'output'
	         * @param storesRevMap
	         * @param output
	         * @param updated
	         * @returns {*|{}}
	         */
	
	    }, {
	        key: 'getUpdates',
	        value: function getUpdates(storesRevMap, output, updated) {
	            var _this8 = this;
	
	            var ctx = this.__scope;
	
	            output = output || {};
	            Object.keys(ctx).forEach(function (id) {
	                if (!output.hasOwnProperty(id) && !is.fn(ctx[id]) && (!storesRevMap || storesRevMap.hasOwnProperty(id) && storesRevMap[id] === undefined || !(!storesRevMap.hasOwnProperty(id) || ctx[id]._rev <= storesRevMap[id]))) {
	
	                    updated = true;
	                    output[id] = _this8.data[id];
	                    if (storesRevMap && storesRevMap.hasOwnProperty(id)) storesRevMap[id] = ctx[id]._rev;
	                }
	            });
	            updated = this.__mixed.reduce(function (updated, ctx) {
	                return ctx.getUpdates(storesRevMap, output, updated) || updated;
	            }, updated);
	            updated = this.parent && this.parent.getUpdates(storesRevMap, output, updated) || updated;
	            return updated && output;
	        }
	
	        /**
	         *
	         * @param flags_states
	         * @param flags_data
	         * @returns {{state: {}, data: {}}}
	         */
	
	    }, {
	        key: 'serialize',
	        value: function serialize() {
	            var _this9 = this;
	
	            var flags_states = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /.*/;
	            var flags_data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /.*/;
	
	            var ctx = this.__scope,
	                output = { state: {}, data: {} },
	                _flags_states = void 0,
	                _flags_data = void 0;
	            if (is.array(flags_states)) flags_states.forEach(function (id) {
	                return output.state[id] = _this9.state[id];
	            });
	
	            if (is.array(flags_data)) flags_data.forEach(function (id) {
	                return output.data[id] = _this9.data[id];
	            });
	
	            if (!is.array(flags_data) && !is.array(flags_states)) Object.keys(ctx).forEach(function (id) {
	                if (is.fn(ctx[id])) return;
	
	                var flags = ctx[id].constructor.flags;
	
	                flags = is.array(flags) ? flags : [flags || ""];
	
	                if (flags.reduce(function (r, flag) {
	                    return r || flags_states.test(flag);
	                }, false)) output.state[id] = _this9.state[id];
	
	                if (flags.reduce(function (r, flag) {
	                    return r || flags_data.test(flag);
	                }, false)) output.data[id] = _this9.data[id];
	            });
	            return output;
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(action, data) {
	            var _this10 = this;
	
	            Object.keys(this.__scope).forEach(function (id) {
	                if (!is.fn(_this10.__scope[id])) _this10.__scope[id].trigger(action, data);
	            });
	
	            this.__mixed.forEach(function (ctx) {
	                return ctx.dispatch(action, data);
	            });
	            this.parent && this.parent.dispatch(action, data);
	            return this;
	        }
	
	        /**
	         * once('stable', cb)
	         * @param obj {React.Component|Store|function)
	         * @param key {string} optional key where to map the public state
	         */
	
	    }, {
	        key: 'then',
	        value: function then(cb) {
	            var _this11 = this;
	
	            if (this._stable) return cb(null, this.data);
	            this.once('stable', function (e) {
	                return cb(null, _this11.data);
	            });
	        }
	    }, {
	        key: 'restore',
	        value: function restore(_ref2, quiet) {
	            var state = _ref2.state,
	                data = _ref2.data;
	
	            var ctx = this.__scope;
	            Object.keys(data).forEach(function (id) {
	                quiet ? ctx.data = data[id] : ctx.push(data[id]);
	            });
	            Object.keys(state).forEach(function (id) {
	                quiet ? ctx.state = state[id] : ctx.setState(state[id]);
	            });
	        }
	    }, {
	        key: 'retainStores',
	        value: function retainStores() {
	            var _this12 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            stores.forEach(function (id) {
	                return _this12.stores[id] && _this12.stores[id].retain && _this12.stores[id].retain(reason);
	            });
	        }
	    }, {
	        key: 'disposeStores',
	        value: function disposeStores() {
	            var _this13 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            stores.forEach(function (id) {
	                return _this13.stores[id] && _this13.stores[id].dispose && _this13.stores[id].dispose(reason);
	            });
	        }
	    }, {
	        key: 'wait',
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
	    }, {
	        key: 'release',
	        value: function release(reason) {
	            var _this14 = this;
	
	            if (reason) {
	                if (this.__locks[reason] == 0) console.error("Release more than locking !", reason);
	                this.__locks[reason] = this.__locks[reason] || 0;
	                this.__locks[reason]--;
	            }
	            if (!reason && this.__locks.all == 0) console.error("Release more than locking !");
	
	            this.__locks.all--;
	            if (!this.__locks.all) {
	                this._stabilizerTM && clearTimeout(this._stabilizerTM);
	
	                this._stabilizerTM = setTimeout(function (e) {
	                    _this14._stabilizerTM = null;
	                    if (_this14.__locks.all) return;
	
	                    _this14._propagTM && clearTimeout(_this14._propagTM);
	
	                    _this14._stable = true;
	                    _this14.emit("stable", _this14);
	
	                    !_this14.dead && _this14._propag(); // stability can induce destroy
	                });
	            }
	        }
	    }, {
	        key: 'propag',
	        value: function propag() {
	            var _this15 = this;
	
	            this._propagTM && clearTimeout(this._propagTM);
	            this._propagTM = setTimeout(function (e) {
	                _this15._propagTM = null;
	                _this15._propag();
	            }, 2);
	        }
	    }, {
	        key: '_propag',
	        value: function _propag() {
	            var _this16 = this;
	
	            if (this._followers.length) this._followers.forEach(function (_ref3) {
	                var obj = _ref3[0],
	                    key = _ref3[1],
	                    as = _ref3[2],
	                    lastRevs = _ref3[3];
	
	                var data = _this16.getUpdates(lastRevs);
	                if (!data) return;
	                if (typeof obj != "function") {
	                    if (as) obj.setState(_defineProperty({}, as, data));else obj.setState(data);
	                } else {
	                    obj(data, lastRevs && [].concat(_toConsumableArray(lastRevs)) || "no revs");
	                }
	                // lastRevs &&
	                // key.forEach(id => (lastRevs[id] = this.stores[id] && this.stores[id]._rev || 0));
	            });
	            this.emit("update", this.getUpdates());
	        }
	
	        /**
	         * is stable
	         * @returns bool
	         */
	
	    }, {
	        key: 'isStable',
	        value: function isStable() {
	            return this._stable;
	        }
	
	        //serializeChilds( childs = [] ) {
	        //
	        //}
	
	    }, {
	        key: '_addChild',
	        value: function _addChild(ctx) {
	            var _this17 = this;
	
	            this._childScopes.push(ctx);
	            var lists = {
	                'stable': function stable(s) {
	                    _this17._unStableChilds--;
	                    if (!_this17._unStableChilds) _this17.emit("stableTree", _this17);
	                },
	                'unstable': function unstable(s) {
	                    _this17._unStableChilds++;
	                    if (1 == _this17._unStableChilds) _this17.emit("unstableTree", _this17);
	                },
	                'stableTree': function stableTree(s) {
	                    _this17._unStableChilds--;
	                    if (!_this17._unStableChilds) _this17.emit("stableTree", _this17);
	                },
	                'unstableTree': function unstableTree(s) {
	                    _this17._unStableChilds++;
	                    if (1 == _this17._unStableChilds) _this17.emit("unstableTree", _this17);
	                },
	                'destroy': function destroy(ctx) {
	                    if (ctx._unStableChilds) _this17._unStableChilds--;
	                    if (!ctx.isStable()) _this17._unStableChilds--;
	
	                    if (!_this17._unStableChilds) _this17.emit("stableTree", _this17);
	                }
	            },
	                wasStable = this._unStableChilds;
	            //!ctx.isStable() && console.warn('add unstable child');
	            !ctx.isStable() && this._unStableChilds++;
	            ctx._unStableChilds && this._unStableChilds++;
	            this._childScopesList.push(lists);
	            if (!wasStable && this._unStableChilds) this.emit("unstableTree", this);
	            ctx.on(lists);
	        }
	    }, {
	        key: '_rmChild',
	        value: function _rmChild(ctx) {
	            var i = this._childScopes.indexOf(ctx),
	                wasStable = this._unStableChilds;
	            if (i != -1) {
	                this._childScopes.splice(i, 1);
	                !ctx.isStable() && this._unStableChilds--;
	                ctx._unStableChilds && this._unStableChilds--;
	                ctx.un(this._childScopesList.splice(i, 1)[0]);
	                if (wasStable && !this._unStableChilds) this.emit("stableTree");
	            }
	        }
	    }, {
	        key: 'retain',
	        value: function retain(reason) {
	            this.__retains.all++;
	            //console.log("retain", this._id, reason);
	            if (reason) {
	                this.__retains[reason] = this.__retains[reason] || 0;
	                this.__retains[reason]++;
	            }
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose(reason) {
	            var _this18 = this;
	
	            //console.log("dispose", this._id, reason);
	            if (reason) {
	                if (!this.__retains[reason]) throw new Error("Dispose more than retaining : " + reason);
	                this.__retains[reason]--;
	            }
	
	            if (!this.__retains.all) throw new Error("Dispose more than retaining !");
	
	            this.__retains.all--;
	
	            if (!this.__retains.all) {
	                //console.log("dispose do destroy ", this._id, this._persistenceTm);
	                if (this._persistenceTm) {
	                    this._destroyTM && clearTimeout(this._destroyTM);
	                    this._destroyTM = setTimeout(function (e) {
	                        _this18.then(function (s) {
	                            !_this18.__retains.all && _this18.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this18.__retains.all && _this18.destroy();
	                    });
	                }
	            }
	        }
	
	        /**
	         * order destroy of local stores
	         */
	
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            var _this19 = this;
	
	            var ctx = this.__scope;
	            //console.warn("destroy", this._id);
	            this.dead = true;
	            this.emit("destroy", this);
	            Object.keys(this.__listening).forEach(function (id) {
	                return _this19.__scope[id].removeListener(_this19.__listening[id]);
	            });
	
	            this._stabilizerTM && clearTimeout(this._stabilizerTM);
	            this._propagTM && clearTimeout(this._propagTM);
	            this.__listening = {};
	
	            if (this._isLocalId) delete openScopes[this._id];
	            this._followers.length = 0;
	
	            while (this.__mixedList.length) {
	                this.__mixed[0].removeListener(this.__mixedList.shift());
	                this.__mixed.shift().dispose("mixedTo");
	            }
	            if (this.__parentList) {
	                this.parent._rmChild(this);
	                this.parent.removeListener(this.__parentList);
	                this.parent.dispose("isMyParent");
	                this.__parentList = null;
	            }
	            //for ( let key in ctx )
	            //    if ( !is.fn(ctx[key]) ) {
	            //        if ( ctx[key].scopeObj === this )
	            //            ctx[key].dispose();
	            //
	            //        ctx[key] = ctx[key].constructor;
	            //    }
	            this.__mixed = this.data = this.state = this.scope = this.stores = null;
	            this._data = this._state = this._stores = null;
	        }
	    }, {
	        key: 'datas',
	        get: function get() {
	            return this.data;
	        }
	    }]);
	
	    return Scope;
	}(EventEmitter);
	
	Scope.persistenceTm = 1;
	Scope.Store = null;
	Scope.scopes = openScopes;
	exports.default = Scope;
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("is");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	var is = __webpack_require__(2);
	
	var Emitter = function () {
	    function Emitter() {
	        _classCallCheck(this, Emitter);
	
	        this._events = {};
	    }
	
	    _createClass(Emitter, [{
	        key: 'on',
	        value: function on(evt, cb) {
	            var _this = this;
	
	            if (!is.string(evt) && evt) return Object.keys(evt).forEach(function (k) {
	                return _this.on(k, evt[k]);
	            });
	
	            this._events[evt] = this._events[evt] || [];
	            this._events[evt].push(cb);
	        }
	    }, {
	        key: 'un',
	        value: function un(evt, cb) {
	            var _this2 = this;
	
	            if (!is.string(evt) && evt) return Object.keys(evt).forEach(function (k) {
	                return _this2.un(k, evt[k]);
	            });
	
	            if (!this._events[evt]) return;
	            var i = this._events[evt].indexOf(cb);
	            this._events[evt].splice(i, 1);
	        }
	    }, {
	        key: 'emit',
	        value: function emit(evt) {
	            if (!this._events[evt]) return;
	            var lists = [].concat(_toConsumableArray(this._events[evt]));
	
	            for (var _len = arguments.length, argz = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                argz[_key - 1] = arguments[_key];
	            }
	
	            for (var i = 0; i < lists.length; i++) {
	                lists[i].apply(lists, argz);
	            }
	        }
	    }, {
	        key: 'addListener',
	        value: function addListener() {
	            this.on.apply(this, arguments);
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener() {
	            this.un.apply(this, arguments);
	        }
	    }, {
	        key: 'removeAllListeners',
	        value: function removeAllListeners() {
	            this._events = {};
	        }
	    }, {
	        key: 'once',
	        value: function once(evt, cb) {
	            var _this3 = this;
	
	            var _fn = void 0;
	            this.on(evt, _fn = function fn() {
	                _this3.un(evt, _fn);
	                cb.apply(undefined, arguments);
	            });
	        }
	    }]);
	
	    return Emitter;
	}();
	
	exports.default = Emitter;
	module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("shortid");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	
	/**
	 * Ultra scalable state-aware store
	 *
	 * @todo : lot of optims...
	 */
	
	var is = __webpack_require__(2),
	    Scope = __webpack_require__(1),
	    EventEmitter = __webpack_require__(3),
	    shortid = __webpack_require__(4),
	    objProto = Object.getPrototypeOf({});
	/**
	 * @class Store
	 */
	
	var Store = function (_EventEmitter) {
	    _inherits(Store, _EventEmitter);
	
	    /**
	     * Constructor, will build a rescope store
	     *
	     * (scope, {require,use,apply,state, data})
	     * (scope)
	     *
	     * @param scope {object} scope where to find the other stores (default : static staticScope )
	     * @param keys {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
	     */
	    // overridable list of store that will allow push if updated
	    function Store() {
	        var _this$_require, _this$_require2;
	
	        _classCallCheck(this, Store);
	
	        var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));
	
	        var argz = [].concat(Array.prototype.slice.call(arguments)),
	            _static = _this.constructor,
	            scope = argz[0] instanceof Scope ? argz.shift() : _static.scope ? Scope.getScope(_static.scope) : is.string(argz[0]) ? Scope.getScope(argz.shift()) : _static.staticScope,
	            cfg = argz[0] && !is.array(argz[0]) && !is.string(argz[0]) ? argz.shift() : {},
	            name = is.string(argz[0]) ? argz[0] : cfg.name || _static.name,
	            watchs = is.array(argz[0]) ? argz.shift() : cfg.use || [],
	            // watchs need to be defined after all the
	        // store are registered : so we can't deal
	        // with any "static use" automaticly
	        apply = is.fn(argz[0]) ? argz.shift() : cfg.apply || null,
	            initialState = _static.state || _static.initialState,
	            applied;
	
	        _this._uid = cfg._uid || shortid.generate();
	
	        _this.__retains = { all: 0 };
	        _this.__locks = { all: 0 };
	        _this._onStabilize = [];
	
	        _this._persistenceTm = cfg.persistenceTm || _this.constructor.persistenceTm;
	        if (is.string(argz[0])) {
	            if (scope.__scope[name]) console.warn("ReScope: Overwriting an existing static named store ( %s ) !!", name);
	            scope.__scope[name] = _this;
	        }
	
	        if (cfg && cfg.on) {
	            _this.on(cfg.on);
	        }
	        // this.state      = this.state || {};
	
	
	        _this.name = name;
	
	        if (scope.stores) {
	            _this.scopeObj = scope;
	            _this.scope = scope.stores;
	        } else {
	            _this.scopeObj = new Scope(scope);
	            _this.scope = scope.stores;
	        }
	
	        _this._rev = _this.constructor._rev || 0;
	        _this._revs = {};
	        _this.stores = {};
	        _this._require = [];
	
	        if (is.array(_static.use)) {
	            _this._use = [].concat(_toConsumableArray(watchs), _toConsumableArray((_static.use || []).map(function (key) {
	                var ref = key.match(/^(\!?)([^\:]*)(?:\:(.*))?$/);
	                if (ref[1]) {
	                    var ref2 = ref[2].split('.');
	                    _this._require.push(ref[3] || ref2[ref2.length - 1]);
	                }
	                return ref[2];
	            })));
	        } else {
	            _this._use = [].concat(_toConsumableArray(watchs), _toConsumableArray(_static.use ? Object.keys(_static.use).map(function (key) {
	                var ref = key.match(/^(\!?)(.*)$/);
	                ref[1] && _this._require.push(_static.use[key]);
	                return ref[2] + (_static.use[key] === true ? '' : ':' + _static.use[key]);
	            }) : []));
	        }
	
	        if (_static.require) (_this$_require = _this._require).push.apply(_this$_require, _toConsumableArray(_static.require));
	        if (cfg.require) (_this$_require2 = _this._require).push.apply(_this$_require2, _toConsumableArray(cfg.require));
	
	        _this._followers = [];
	
	        if (_static.data !== undefined) _this.data = _extends({}, _static.data);
	        if (cfg.hasOwnProperty("data") && cfg.data !== undefined) _this.data = cfg.data;
	        if (cfg.hasOwnProperty("state") && cfg.state !== undefined) initialState = _extends({}, initialState, cfg.state);
	
	        if (apply) _this.apply = apply;
	
	        if (initialState || _this._use.length) {
	            // sync apply
	            _this.state = _extends({}, initialState || {}, scope.map(_this, _this._use));
	            if (_this.shouldApply(_this.state) && _this.data === undefined) {
	                _this.data = _this.apply(_this.data, _this.state, _this.state);
	                applied = true;
	            }
	        }
	
	        if ((_this.data !== undefined || applied) && !_this.__locks.all) {
	            _this._stable = true;
	            _this._rev++;
	        } else {
	            _this._stable = false;
	            if (!_static.managed && !_this.state && (!_this._use || !_this._use.length)) {
	                console.warn("Rescope store '", _this.name, "' have no initial data, state or use. It can't stabilize...");
	            }
	        }
	        !_this._stable && _this.emit('unstable', _this.state);
	        return _this;
	    }
	
	    /**
	     * get a Builder-key pair for Store::map
	     * @param {string} name
	     * @returns {{store: Store, name: *}}
	     */
	    // default state
	    /**
	     * if retain goes to 0 :
	     * false to not destroy,
	     * 0 to sync auto destroy
	     * Ms to autodestroy after tm ms if no retain has been called
	     * @type {boolean|Int}
	     */
	    // overridable list of source stores
	
	
	    _createClass(Store, [{
	        key: 'shouldPropag',
	
	
	        /**
	         * Overridable method to know if a data change should be propag to the listening stores & components
	         */
	        value: function shouldPropag(nDatas) {
	            var _static = this.constructor,
	                r,
	                cDatas = this.data;
	            r = !cDatas && nDatas;
	            cDatas && Object.keys(cDatas).forEach(function (key) {
	                r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	            });
	            nDatas && Object.keys(nDatas).forEach(function (key) {
	                r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	            });
	            return true;
	        }
	
	        /**
	         * Overridable method to know if a state change should be applied
	         */
	
	    }, {
	        key: 'shouldApply',
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
	         * If state or lastPublicState are simple hash maps apply will return {...data, ...state}
	         * if not it will return the last private state
	         * @param data
	         * @param state
	         * @returns {*}
	         */
	
	    }, {
	        key: 'apply',
	        value: function apply(data, state, changes) {
	            state = state || this.state;
	
	            if (this.refine) return this.refine.apply(this, arguments);
	
	            if (!data || data.__proto__ !== objProto || state.__proto__ !== objProto) return state;else return _extends({}, data, state);
	        }
	
	        /**
	         * @depreciated
	         * @param data
	         * @param state
	         * @param changes
	         * @returns {*}
	         */
	
	    }, {
	        key: 'refine',
	        value: function refine(data, state, changes) {
	            state = state || this.state;
	
	            if (!data || data.__proto__ !== objProto || state.__proto__ !== objProto) return state;else return _extends({}, data, state);
	        }
	
	        /**
	         * Debounce this store propagation ( & reducing )
	         * @param cb
	         */
	
	    }, {
	        key: 'stabilize',
	        value: function stabilize(cb) {
	            var _this3 = this;
	
	            cb && this.once('stable', cb);
	            this._stable && this.emit('unstable', this.state, this.data);
	
	            this._stable = false;
	
	            if (this._stabilizer) clearTimeout(this._stabilizer);
	
	            this._stabilizer = setTimeout(this.push.bind(this, null, function () {
	                //@todo
	
	                var stable = _this3._stable;
	                _this3._stable = true;
	                !stable && _this3.emit('stable', _this3.state, _this3.data);
	                _this3._stabilizer = null;
	                // this.release();
	            }));
	        }
	    }, {
	        key: 'retrieve',
	        value: function retrieve(path) {
	            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	            var obj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.data;
	
	            path = is.string(path) ? path.split('.') : path;
	            return !obj || !path || !path.length ? obj : path.length == i + 1 ? obj[path[i]] : this.retrieve(path, i + 1, obj[path[i]]);
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(action) {
	            var _scopeObj;
	
	            for (var _len = arguments.length, argz = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                argz[_key - 1] = arguments[_key];
	            }
	
	            (_scopeObj = this.scopeObj).dispatch.apply(_scopeObj, [action].concat(argz));
	        }
	    }, {
	        key: 'trigger',
	        value: function trigger(action) {
	            var actions = this.constructor.actions,
	                ns = void 0;
	
	            if (actions && actions[action]) {
	                var _actions$action;
	
	                for (var _len2 = arguments.length, argz = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                    argz[_key2 - 1] = arguments[_key2];
	                }
	
	                ns = (_actions$action = actions[action]).call.apply(_actions$action, [this].concat(argz));
	                ns && this.setState(ns);
	            }
	        }
	
	        /**
	         * Pull stores in the private state
	         * @param stores  {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
	         */
	
	    }, {
	        key: 'pull',
	        value: function pull(stores, doWait, origin) {
	            var _this4 = this;
	
	            var initialOutputs = this.scopeObj.map(this, stores);
	            if (doWait) {
	                this.wait();
	                stores.forEach(function (s) {
	                    return _this4.scope[s] && _this4.wait(_this4.scope[s]);
	                });
	                this.release();
	            }
	            return initialOutputs;
	        }
	
	        /**
	         * Apply apply/remap on the private state & push the resulting "public" state to followers
	         * @param cb
	         */
	
	    }, {
	        key: 'push',
	        value: function push(data, force, cb) {
	            cb = force === true ? cb : force;
	            force = force === true;
	            var i = 0,
	                nextState = !data && _extends({}, this.state, this._changesSW) || this.state,
	                nextDatas = data || this.apply(this.data, nextState, this._changesSW);
	
	            this.state = nextState;
	            this._changesSW = {};
	            //if ( !force &&
	            //    (
	            //        (this.data === nextDatas) || !this.shouldPropag(nextDatas)
	            //    )
	            //) {
	            //    cb && cb();
	            //    return false;
	            //}
	
	            this.data = nextDatas;
	            this.wait();
	            this.release(cb);
	        }
	
	        /**
	         * Update the current private state & push it once the store is stable
	         * @param pState
	         * @param cb
	         */
	
	    }, {
	        key: 'setState',
	        value: function setState(pState, cb, sync) {
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
	            }if (!this.shouldApply(_extends({}, this.state, changes))) {
	                return;
	            }
	
	            if (sync) {
	                this.push();
	                cb && cb();
	            } else {
	                if (change) {
	                    this.stabilize(cb);
	                } else cb && cb();
	            }
	            return this;
	        }
	
	        /**
	         * Update the current private state & push it once the store is stable
	         * @param pState
	         * @param cb
	         */
	
	    }, {
	        key: 'setStateSync',
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
	            }this.shouldApply(_extends({}, this.state || {}, changes)) && this.push();
	            return this.data;
	        }
	
	        /**
	         * Replace the current private state & push it once the store is stable
	         * @param pState
	         * @param cb
	         */
	
	    }, {
	        key: 'replaceState',
	        value: function replaceState(pState, cb) {
	            var i = 0,
	                me = this;
	            this.state = pState;
	
	            this.stabilize(cb);
	        }
	
	        /**
	         * get a store-key pair for Store::map
	         * @param {string} name
	         * @returns {{store: Store, name: *}}
	         */
	
	    }, {
	        key: 'as',
	        value: function as(name) {
	            return { store: this, name: name };
	        }
	    }, {
	        key: 'on',
	        value: function on(lists) {
	            var _this5 = this;
	
	            if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', _this5).call(_this5, k, lists[k]);
	            });else _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', this).apply(this, arguments);
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener(lists) {
	            var _this6 = this;
	
	            if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'removeListener', _this6).call(_this6, k, lists[k]);
	            });else _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'removeListener', this).apply(this, arguments);
	        }
	
	        /**
	         * relink bindings & requires
	         * @param {string} name
	         * @returns {{store: Store, name: *}}
	         */
	
	    }, {
	        key: 'relink',
	        value: function relink(from) {
	            var _this7 = this;
	
	            var scope = this.scopeObj,
	                _static = this.constructor;
	            if (_static.use) {
	                //todo unlink
	                this.pull(_static.use, false, from);
	            }
	
	            if (this._require) {
	                this._require.forEach(function (store) {
	                    return _this7.wait(scope.__scope[store]);
	                });
	            }
	        }
	
	        /**
	         * is complete (all requiered keys are here)
	         * @returns bool
	         */
	
	    }, {
	        key: 'isComplete',
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
	        key: 'isStable',
	        value: function isStable() {
	            return this._stable;
	        }
	
	        /**
	         * Un bind this store off the given component-key
	         * @param obj
	         * @param key
	         * @returns {Array.<*>}
	         */
	
	    }, {
	        key: 'unBind',
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
	        key: 'bind',
	        value: function bind(obj, key) {
	            var setInitial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	            var path = arguments[3];
	
	            this._followers.push([obj, key, path]);
	            if (setInitial && this.data && this._stable) {
	                var data = path ? this.retrieve(path) : this.data;
	                if (typeof obj != "function") {
	                    if (key) obj.setState(_defineProperty({}, key, data));else obj.setState(data);
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
	        key: 'then',
	        value: function then(cb) {
	            var _this8 = this;
	
	            if (this._stable) return cb(null, this.data);
	            this.once('stable', function (e) {
	                return cb(null, _this8.data);
	            });
	        }
	
	        /**
	         * Add a lock so the store will not propag it state untill release() is call
	         * @param previous {Store|number|Array} @optional wf to wait, releases to wait or array of stuff to wait
	         * @returns {TaskFlow}
	         */
	
	    }, {
	        key: 'wait',
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
	         * Decrease locks for this store, if it reach 0 & it have a public state,
	         * it will be propagated to the followers,
	         * then, all stuff passed to "then" call back will be exec / released
	         * @param desync
	         * @returns {*}
	         */
	
	    }, {
	        key: 'release',
	        value: function release(reason, cb) {
	            var _this9 = this;
	
	            var _static = this.constructor;
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
	
	            if (! --this.__locks.all && this.data && this.isComplete()) {
	                var propag = this.shouldPropag(this.data);
	                this._stable = true;
	                propag && this._rev++; //
	                if (propag && this._followers.length) this._followers.forEach(function (follower) {
	                    var data = follower[2] ? _this9.retrieve(follower[2]) : _this9.data;
	                    if (!data) return;
	                    if (typeof follower[0] == "function") {
	                        follower[0](data);
	                    } else {
	                        //cb && i++;
	                        follower[0].setState(follower[1] ? _defineProperty({}, follower[1], data) : data
	                        //,
	                        //cb && (
	                        //    () => (!(--i) && cb())
	                        //)
	                        );
	                    }
	                });
	                //else
	                !wasStable && this.emit('stable', this.data);
	                propag && this.emit('update', this.data);
	                cb && cb();
	            } else cb && this.then(cb);
	            return this;
	        }
	    }, {
	        key: 'retain',
	        value: function retain(reason) {
	            this.__retains.all++;
	            if (reason) {
	                this.__retains[reason] = this.__retains[reason] || 0;
	                this.__retains[reason]++;
	            }
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose(reason) {
	            var _this10 = this;
	
	            //console.warn("dispose", reason, this.__retains);
	            if (reason) {
	                if (!this.__retains[reason]) throw new Error("Dispose more than retaining : " + reason);
	
	                this.__retains[reason]--;
	            }
	            if (this.__retains.all == 0) throw new Error("Dispose more than retaining !");
	
	            this.__retains.all--;
	
	            if (!this.__retains.all) {
	                if (this._persistenceTm) {
	                    this._destroyTM && clearTimeout(this._destroyTM);
	                    this._destroyTM = setTimeout(function (e) {
	                        _this10._destroyTM = null;
	                        _this10.then(function (s) {
	                            !_this10.__retains.all && _this10.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this10.__retains.all && _this10.destroy();
	                    });
	                }
	            }
	        }
	    }, {
	        key: 'destroy',
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
	        key: 'contextObj',
	
	
	        /**
	         * @deprecated
	         * @returns {*}
	         */
	        get: function get() {
	            return this.scopeObj;
	        }
	
	        /**
	         * @deprecated
	         * @returns {*}
	         */
	
	    }, {
	        key: 'context',
	        get: function get() {
	            return this.scope;
	        }
	
	        /**
	         * @deprecated
	         * @returns {*}
	         */
	
	    }, {
	        key: 'datas',
	        get: function get() {
	            return this.data;
	        }
	
	        /**
	         * @deprecated
	         * @returns {*}
	         */
	        ,
	        set: function set(v) {
	            //console.groupCollapsed("Rescope store : Setting datas is depreciated, use data");
	            //console.log("Rescope store : Setting datas is depreciated, use data", (new Error()).stack);
	            //console.groupEnd();
	
	            this.data = v;
	        }
	    }], [{
	        key: 'as',
	        value: function as(name) {
	            return { store: this, name: name };
	        }
	
	        /**
	         * Map all named stores in {keys} to the {object}'s state
	         * Hook componentWillUnmount (for react comp) or destroy to unBind them automatically
	         * @static
	         * @param object {Object} target state aware object (React.Component|Store|...)
	         * @param keys {Array} Ex : ["session", "otherStaticNamedStore:key", store.as('anotherKey')]
	         */
	
	    }, {
	        key: 'map',
	        value: function map(component, keys, scope, origin) {
	            var setInitial = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	
	            var targetRevs = component._revs || {};
	            var targetScope = component.stores || (component.stores = {});
	            var initialOutputs = {};
	            keys = is.array(keys) ? [].concat(_toConsumableArray(keys)) : [keys];
	
	            scope = scope || Store.staticScope;
	
	            keys = keys.filter(
	            // @todo : use query refs
	            // (store)(\.store)*(\[(\*|(props)\w+)+)\])?(\:alias)
	            function (key) {
	                if (!key) {
	                    console.error("Not a mappable store item '" + key + "' in " + origin + ' !!');
	                    return false;
	                }
	                var name = void 0,
	                    alias = void 0,
	                    path = void 0,
	                    store = void 0;
	                if (key.store && key.name) {
	                    alias = name = key.name;
	                    store = key.store;
	                } else if (is.fn(key)) {
	                    name = alias = key.name || key.defaultName;
	                    store = key;
	                } else {
	                    key = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
	                    name = key[1];
	                    path = key[2] && key[2].split('.').slice(1);
	                    store = scope.stores[key[1]];
	                    alias = key[3] || path && path[path.length - 1] || key[1];
	                }
	
	                if (targetRevs[name]) return false; // ignore dbl uses for now
	
	                if (!store) {
	                    console.error("Not a mappable store item '" + name + "/" + alias + "' in " + origin + ' !!', store);
	                    return false;
	                } else if (is.fn(store)) {
	                    scope._mount(name);
	
	                    scope.stores[name].bind(component, alias, setInitial, path);
	                } else {
	                    store.bind(component, alias, setInitial, path);
	                }
	                targetRevs[alias] = targetRevs[alias] || true;
	                !targetScope[name] && (targetScope[name] = scope.stores[name]);
	                if (scope.stores[name].hasOwnProperty('data')) initialOutputs[name] = scope.data[name];
	                return true;
	            });
	            var mixedCWUnmount,
	                unMountKey = component.isReactComponent ? "componentWillUnmount" : "destroy";
	
	            if (component.hasOwnProperty(unMountKey)) {
	                mixedCWUnmount = component[unMountKey];
	            }
	
	            component[unMountKey] = function () {
	                delete component[unMountKey];
	                if (mixedCWUnmount) component[unMountKey] = mixedCWUnmount;
	
	                keys.map(function (key) {
	                    var name = void 0,
	                        alias = void 0,
	                        path = void 0,
	                        store = void 0;
	                    if (key.store && key.name) {
	                        alias = name = key.name;
	                        store = key.store;
	                    } else if (is.fn(key)) {
	                        name = alias = key.name || key.defaultName;
	                        store = scope.stores[name];
	                    } else {
	                        key = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
	                        name = key[1];
	                        path = key[2] && key[2].split('.');
	                        store = scope.stores[key[1]];
	                        alias = key[3] || path && path[path.length - 1] || key[1];
	                    }
	
	                    store && !is.fn(store) && store.unBind(component, alias, path);
	                });
	                return component[unMountKey] && component[unMountKey].apply(component, arguments);
	            };
	
	            return initialOutputs;
	        }
	    }]);
	
	    return Store;
	}(EventEmitter);
	
	Store.use = [];
	Store.staticScope = new Scope({}, { id: "static" });
	Store.state = undefined;
	Store.persistenceTm = false;
	exports.default = Store;
	module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.rescopeState = exports.reScopeState = exports.rescopeProps = exports.reScopeProps = exports.Component = exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }; /*
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
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _is = __webpack_require__(2);
	
	var _is2 = _interopRequireDefault(_is);
	
	var _propTypes = __webpack_require__(8);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Scope = __webpack_require__(1);
	
	var _Scope2 = _interopRequireDefault(_Scope);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Inheritable ReScope "HOC" (High Order Component)
	 *
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
	                'No Rescope here ',
	                _get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), 'name', _this)
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
	 * Return a React "HOC" (High Order Component) that :
	 *  - Inherit BaseComponent,
	 *  - Inject & maintain the stores in BaseComponent::use and/or (use) in the instances state.
	 *  - Propag (scope) in the returned React Component context
	 *
	 *
	 * @param BaseComponent {React.Component} Base React Component ( default : React.Component )
	 * @param scope {ReScope.Scope|function} the propagated Scope where the stores will be searched
	 * @param use {array} the list of stores injected from the current scope
	 * @returns {ReScopeProvider}
	 */
	function reScopeState() {
	    var BaseComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _react2.default.Component;
	
	    var _class, _temp;
	
	    var scope = arguments[1];
	    var use = arguments[2];
	
	    if (_is2.default.array(BaseComponent)) {
	        use = BaseComponent;
	        BaseComponent = _react2.default.Component;
	    }
	    if (BaseComponent instanceof _Scope2.default || _is2.default.fn(BaseComponent) && !BaseComponent.prototype.isReactComponent) {
	        scope = BaseComponent;
	        BaseComponent = _react2.default.Component;
	    }
	    if (!use && _is2.default.array(scope)) {
	        use = scope;
	        scope = null;
	    }
	
	    use = [].concat(_toConsumableArray(BaseComponent.use || []), _toConsumableArray(use || []));
	
	    return _temp = _class = function (_BaseComponent) {
	        _inherits(ReScopeProvider, _BaseComponent);
	
	        function ReScopeProvider(p, ctx, q) {
	            _classCallCheck(this, ReScopeProvider);
	
	            var _this2 = _possibleConstructorReturn(this, (ReScopeProvider.__proto__ || Object.getPrototypeOf(ReScopeProvider)).call(this, p, ctx, q));
	
	            _this2.$scope = _is2.default.fn(scope) && scope(_this2) || scope || ctx.rescope;
	            _is2.default.fn(scope) && _this2.$scope.retain();
	            if (_this2.$scope && use.length) {
	                _this2.state = _extends({}, _this2.state, _this2.$scope.map(_this2, use, false));
	                _this2.$stores = _this2.$scope.stores;
	            } else _this2.render = function () {
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    'No Rescope here ',
	                    BaseComponent.name
	                );
	            };
	            return _this2;
	        }
	
	        _createClass(ReScopeProvider, [{
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
	                _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillMount', this) && _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillMount', this).call(this);
	            }
	        }, {
	            key: 'componentWillUnmount',
	            value: function componentWillUnmount() {
	                _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillUnmount', this) && _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillUnmount', this).call(this);
	                use.length && this.$scope.unBind(this, use);
	                _is2.default.fn(scope) && this.$scope.dispose();
	                delete this.$stores;
	                delete this.$scope;
	            }
	        }, {
	            key: 'componentWillReceiveProps',
	            value: function componentWillReceiveProps(np, nc) {
	                if (use.length && !scope && nc.rescope !== this.context.rescope) {
	                    this.context.rescope.unBind(this, use);
	                    this.$scope = nc.rescope;
	                    this.$stores = this.$scope.stores;
	                    nc.rescope.bind(this, use);
	                }
	                _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillReceiveProps', this) && _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillReceiveProps', this).call(this, np, nc);
	            }
	        }, {
	            key: 'getChildContext',
	            value: function getChildContext() {
	                var ctx = _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'getChildContext', this) && _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'getChildContext', this).call(this) || {};
	                return _extends({}, ctx, {
	                    rescope: this.$scope,
	                    $stores: this.$scope.stores
	                });
	            }
	        }]);
	
	        return ReScopeProvider;
	    }(BaseComponent), _class.childContextTypes = _extends({}, BaseComponent.childContextTypes || {}, {
	        rescope: _propTypes2.default.object,
	        $stores: _propTypes2.default.object
	    }), _class.contextTypes = _extends({}, BaseComponent.contextTypes || {}, {
	        rescope: _propTypes2.default.object,
	        $stores: _propTypes2.default.object
	    }), _class.defaultProps = _extends({}, BaseComponent.defaultProps || {}), _temp;
	}
	
	/**
	 * Return a React "HOC" (High Order Component) that :
	 *  - Inject & maintain the stores listed baseComponent::use and/or (use) in the instances props.
	 *  - Propag (scope) in the returned React Component context
	 *
	 * @param BaseComponent {React.Component} Base React Component ( default : React.Component )
	 * @param scope {ReScope.Scope|function} the propagated Scope where the stores will be searched ( default : the default
	 *     ReScope::Scope::scopes.static scope )
	 * @param use {array} the list of stores to inject from the current scope
	 * @returns {ReScopeProvider}
	 */
	function reScopeProps(BaseComponent, scope, use) {
	    var _class2, _temp2;
	
	    if (!use && _is2.default.array(scope)) {
	        use = scope;
	        scope = null;
	    }
	    use = [].concat(_toConsumableArray(BaseComponent.use || []), _toConsumableArray(use || []));
	    return reScopeState((_temp2 = _class2 = function (_React$Component2) {
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
	                return _react2.default.createElement(BaseComponent, _extends({}, this.props, this.state, {
	                    dispatch: this.props.dispatch,
	                    $stores: this.$stores }));
	            }
	        }]);
	
	        return ReScopePropsProvider;
	    }(_react2.default.Component), _class2.use = use, _class2.childContextTypes = _extends({}, BaseComponent.contextTypes || {}, {
	        rescope: _propTypes2.default.object,
	        $stores: _propTypes2.default.object
	    }), _class2.contextTypes = _extends({}, BaseComponent.contextTypes || {}, {
	        rescope: _propTypes2.default.object,
	        $stores: _propTypes2.default.object
	    }), _temp2), scope);
	}
	
	exports.default = Component;
	exports.Component = Component;
	exports.reScopeProps = reScopeProps;
	exports.rescopeProps = reScopeProps;
	exports.reScopeState = reScopeState;
	exports.rescopeState = reScopeState;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("prop-types");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTA3MGI2NmYzNWZkZTAwMTJhYWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlU2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Njb3BlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhY3RUb29scy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiJdLCJuYW1lcyI6WyJSVG9vbHMiLCJTdG9yZSIsIkNvbnRleHQiLCJTY29wZSIsIkNvbXBvbmVudCIsInJlU2NvcGVQcm9wcyIsInJlU2NvcGVTdGF0ZSIsImlzIiwicmVxdWlyZSIsIkV2ZW50RW1pdHRlciIsInNob3J0aWQiLCJfX3Byb3RvX19wdXNoIiwidGFyZ2V0IiwiaWQiLCJwYXJlbnQiLCJmbiIsInByb3RvdHlwZSIsIm9wZW5TY29wZXMiLCJzY29wZXMiLCJza2V5IiwiYXJyYXkiLCJzb3J0IiwiYSIsImIiLCJmaXJzdG5hbWUiLCJqb2luIiwic3RvcmVzTWFwIiwic3RhdGUiLCJkYXRhIiwibmFtZSIsImluY3JlbWVudElkIiwiZGVmYXVsdE1heExpc3RlbmVycyIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsInJvb3RFbWl0dGVyIiwiX21heExpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwiZ2VuZXJhdGUiLCJfaWQiLCJyZWdpc3RlciIsImkiLCJfaXNMb2NhbElkIiwiX3BlcnNpc3RlbmNlVG0iLCJzdG9yZXMiLCJkZWFkIiwiRXJyb3IiLCJzb3VyY2VzIiwiX2NoaWxkU2NvcGVzIiwiX2NoaWxkU2NvcGVzTGlzdCIsIl91blN0YWJsZUNoaWxkcyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfX2xpc3RlbmluZyIsIl9fc2NvcGUiLCJfX21peGVkIiwiX19taXhlZExpc3QiLCJfZm9sbG93ZXJzIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9fcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwiX2FkZENoaWxkIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJzdG9yZXNMaXN0IiwiZm9yRWFjaCIsIl9tb3VudCIsImsiLCJhcmd1bWVudHMiLCJzdG9yZSIsInJlZHVjZSIsIm1vdW50ZWQiLCJjdHgiLCJ1bmRlZmluZWQiLCJzZXRTdGF0ZSIsInB1c2giLCJfd2F0Y2hTdG9yZSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJyZWxpbmsiLCJPYmplY3QiLCJrZXlzIiwic2luZ2xldG9uIiwic3JjQ3R4IiwiZXh0ZXJuYWwiLCJmb3JjZSIsImxjdHgiLCJfc3RvcmVzIiwiY29uc29sZSIsImluZm8iLCJfX3Byb3RvX18iLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIl9zdGF0ZSIsInNldCIsInYiLCJfZGF0YSIsIm9iaiIsImtleSIsImFzIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmVLZXkiLCJtYXAiLCJzdHJpbmciLCJyZXZzIiwibW91bnQiLCJnZXRVcGRhdGVzIiwiZm9sbG93ZXJzIiwibGVuZ3RoIiwic3BsaWNlIiwidG8iLCJiaW5kIiwibWl4ZWRDV1VubW91bnQiLCJ1bk1vdW50S2V5IiwiaXNSZWFjdENvbXBvbmVudCIsImhhc093blByb3BlcnR5IiwidW5CaW5kIiwic3BsaXQiLCJyZXRyaWV2ZSIsInBhdGgiLCJzdG9yZXNSZXZNYXAiLCJsb2NhbCIsIl9yZXYiLCJ1cGRhdGVkIiwiZ2V0U3RvcmVzUmV2cyIsIm91dHB1dCIsImZsYWdzX3N0YXRlcyIsImZsYWdzX2RhdGEiLCJfZmxhZ3Nfc3RhdGVzIiwiX2ZsYWdzX2RhdGEiLCJmbGFncyIsInIiLCJmbGFnIiwidGVzdCIsImFjdGlvbiIsInRyaWdnZXIiLCJkaXNwYXRjaCIsImNiIiwib25jZSIsInF1aWV0IiwicmVhc29uIiwiZW1pdCIsImVycm9yIiwiX3N0YWJpbGl6ZXJUTSIsImNsZWFyVGltZW91dCIsIl9wcm9wYWdUTSIsIndhc1N0YWJsZSIsImluZGV4T2YiLCJ1biIsIl9kZXN0cm95VE0iLCJ0aGVuIiwiZGVzdHJveSIsInJlbW92ZUxpc3RlbmVyIiwic2hpZnQiLCJfcm1DaGlsZCIsInNjb3BlIiwiRW1pdHRlciIsIl9ldmVudHMiLCJldnQiLCJhcmd6Iiwib2JqUHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIl9zdGF0aWMiLCJnZXRTY29wZSIsInN0YXRpY1Njb3BlIiwiY2ZnIiwid2F0Y2hzIiwidXNlIiwiYXBwbHkiLCJpbml0aWFsU3RhdGUiLCJhcHBsaWVkIiwiX3VpZCIsIl9vblN0YWJpbGl6ZSIsIndhcm4iLCJzY29wZU9iaiIsIl9yZXZzIiwiX3JlcXVpcmUiLCJfdXNlIiwicmVmIiwibWF0Y2giLCJyZWYyIiwic2hvdWxkQXBwbHkiLCJtYW5hZ2VkIiwibkRhdGFzIiwiY0RhdGFzIiwiaXNDb21wbGV0ZSIsImZvbGxvdyIsImNhbGwiLCJjaGFuZ2VzIiwicmVmaW5lIiwiX3N0YWJpbGl6ZXIiLCJzdGFibGUiLCJhY3Rpb25zIiwibnMiLCJkb1dhaXQiLCJvcmlnaW4iLCJpbml0aWFsT3V0cHV0cyIsInMiLCJuZXh0U3RhdGUiLCJfY2hhbmdlc1NXIiwibmV4dERhdGFzIiwicFN0YXRlIiwic3luYyIsImNoYW5nZSIsInN0YWJpbGl6ZSIsIm1lIiwiZnJvbSIsInB1bGwiLCJwcmV2aW91cyIsInNob3VsZFByb3BhZyIsImZvbGxvd2VyIiwicmV2IiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiY29tcG9uZW50IiwidGFyZ2V0UmV2cyIsInRhcmdldFNjb3BlIiwiZmlsdGVyIiwiYWxpYXMiLCJkZWZhdWx0TmFtZSIsInNsaWNlIiwicCIsInEiLCJyZXNjb3BlIiwicmVuZGVyIiwiY29udGV4dCIsIm5wIiwibmMiLCIkc3RvcmVzIiwicHJvcHMiLCJjaGlsZHJlbiIsImNoaWxkQ29udGV4dFR5cGVzIiwib2JqZWN0IiwiY29udGV4dFR5cGVzIiwiQmFzZUNvbXBvbmVudCIsIiRzY29wZSIsImRlZmF1bHRQcm9wcyIsImRlZmF1bHQiLCJyZXNjb3BlUHJvcHMiLCJyZXNjb3BlU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWEE7Ozs7QUFDQTs7OztBQUNBOztLQUF3QkEsTTs7Ozs7O0FBRXhCLGlCQUFNQyxLQUFOLG1CLENBL0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBZ0NlO0FBQ1hBLHlCQURXO0FBRVhDLDJCQUZXO0FBR1hDLHlCQUhXO0FBSVhDLGNBQWNKLE9BQU9JLFNBSlY7QUFLWEMsaUJBQWNMLE9BQU9LLFlBTFY7QUFNWEMsaUJBQWNOLE9BQU9NO0FBTlYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBLEtBQUlDLEtBQWtCLG1CQUFBQyxDQUFRLENBQVIsQ0FBdEI7QUFBQSxLQUNJQyxlQUFrQixtQkFBQUQsQ0FBUSxDQUFSLENBRHRCO0FBQUEsS0FFSUUsVUFBa0IsbUJBQUFGLENBQVEsQ0FBUixDQUZ0QjtBQUFBLEtBR01HLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBRUMsTUFBRixFQUFVQyxFQUFWLEVBQWNDLE1BQWQsRUFBMEI7QUFDeEMsU0FBSUMsS0FBZSxTQUFmQSxFQUFlLEdBQVksQ0FDOUIsQ0FERDtBQUVBQSxRQUFHQyxTQUFILEdBQW1CRixTQUFTLElBQUlBLE9B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OztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLCtDQWFlO0FBQ2Qsd0JBQU8sS0FBS2lPLE9BQVo7QUFDSDtBQWZFO0FBQUE7QUFBQSxzQ0FpQk07QUFDTCx3QkFBTyw4QkFBQyxhQUFELGVBQW9CLEtBQUtJLEtBQXpCLEVBQ29CLEtBQUtoTixLQUR6QjtBQUVlLCtCQUFXLEtBQUtnTixLQUFMLENBQVc1RixRQUZyQztBQUdlLDhCQUFVLEtBQUsyRixPQUg5QixJQUFQO0FBSUg7QUF0QkU7O0FBQUE7QUFBQSxPQUFnRCxnQkFBTXRPLFNBQXRELFdBQ0kwSyxHQURKLEdBQ3dCQSxHQUR4QixVQUVJK0QsaUJBRkosZ0JBR0tHLGNBQWNELFlBQWQsSUFBOEIsRUFIbkM7QUFJQ1Ysa0JBQVMsb0JBQVVTLE1BSnBCO0FBS0NKLGtCQUFTLG9CQUFVSTtBQUxwQixpQkFPSUMsWUFQSixnQkFRS0MsY0FBY0QsWUFBZCxJQUE4QixFQVJuQztBQVNDVixrQkFBUyxvQkFBVVMsTUFUcEI7QUFVQ0osa0JBQVMsb0JBQVVJO0FBVnBCLGtCQXVCSjVFLEtBdkJJLENBQVA7QUF3Qkg7O1NBR2dCaUYsTyxHQUFiL08sUztTQUNBQSxTLEdBQUFBLFM7U0FDQUMsWSxHQUFBQSxZO1NBQ2dCK08sWSxHQUFoQi9PLFk7U0FDQUMsWSxHQUFBQSxZO1NBQ2dCK08sWSxHQUFoQi9PLFk7Ozs7OztBQ2pQSixtQzs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoiZGlzdC9SZVNjb3BlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUwNzBiNjZmMzVmZGUwMDEyYWFlIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5pbXBvcnQgU2NvcGUgZnJvbSBcIi4vU2NvcGVcIjtcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi9TdG9yZVwiO1xuaW1wb3J0IFJlYWN0VG9vbHMsICogYXMgUlRvb2xzIGZyb20gXCIuL1JlYWN0VG9vbHNcIjtcblxuU2NvcGUuU3RvcmUgPSBTdG9yZTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBTdG9yZSxcbiAgICBDb250ZXh0ICAgICA6IFNjb3BlLFxuICAgIFNjb3BlLFxuICAgIENvbXBvbmVudCAgIDogUlRvb2xzLkNvbXBvbmVudCxcbiAgICByZVNjb3BlUHJvcHM6IFJUb29scy5yZVNjb3BlUHJvcHMsXG4gICAgcmVTY29wZVN0YXRlOiBSVG9vbHMucmVTY29wZVN0YXRlXG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVTY29wZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuXG52YXIgaXMgICAgICAgICAgICAgID0gcmVxdWlyZSgnaXMnKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgPSByZXF1aXJlKCcuL0VtaXR0ZXInKSxcbiAgICBzaG9ydGlkICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJylcbiAgICAsIF9fcHJvdG9fX3B1c2ggPSAoIHRhcmdldCwgaWQsIHBhcmVudCApID0+IHtcbiAgICAgICAgbGV0IGZuICAgICAgICAgICA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfTtcbiAgICAgICAgZm4ucHJvdG90eXBlICAgICA9IHBhcmVudCA/IG5ldyBwYXJlbnRbXCJfXCIgKyBpZF0oKSA6IHRhcmdldFtpZF0gfHwge307XG4gICAgICAgIHRhcmdldFtpZF0gICAgICAgPSBuZXcgZm4oKTtcbiAgICAgICAgdGFyZ2V0WydfJyArIGlkXSA9IGZuO1xuICAgIH0sXG4gICAgb3BlblNjb3BlcyAgICAgID0ge307XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gMTsvLyBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3kgd2hlbiBkaXNwb3NlIHJlYWNoIDBcbiAgICBzdGF0aWMgU3RvcmUgICAgICAgICA9IG51bGw7XG4gICAgc3RhdGljIHNjb3BlcyAgICAgICAgPSBvcGVuU2NvcGVzOy8vIGFsbCBhY3RpdmUgc2NvcGVzXG4gICAgXG4gICAgc3RhdGljIGdldFNjb3BlKCBzY29wZXMgKSB7XG4gICAgICAgIGxldCBza2V5ID0gaXMuYXJyYXkoc2NvcGVzKSA/IHNjb3Blcy5zb3J0KCggYSwgYiApID0+IHtcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPCBiLmZpcnN0bmFtZSApIHJldHVybiAtMTtcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPiBiLmZpcnN0bmFtZSApIHJldHVybiAxO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pLmpvaW4oJzo6JykgOiBzY29wZXM7XG4gICAgICAgIHJldHVybiBvcGVuU2NvcGVzW3NrZXldID0gb3BlblNjb3Blc1tza2V5XSB8fCBuZXcgU2NvcGUoe30sIHsgaWQ6IHNrZXkgfSk7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBJbml0IGEgUmVzY29wZSBzY29wZVxuICAgICAqXG4gICAgICogQHBhcmFtIHN0b3Jlc01hcCB7T2JqZWN0fSBPYmplY3Qgd2l0aCB0aGUgb3JpZ2luIHN0b3Jlc1xuICAgICAqIEBwYXJhbSBpZCB7c3RyaW5nfSBAb3B0aW9uYWwgaWQgKCBpZiB0aGlzIGlkIGV4aXN0IHN0b3Jlc01hcCB3aWxsIGJlIG1lcmdlIG9uIHRoZSAnaWQnIHNjb3BlKVxuICAgICAqIEBwYXJhbSBwYXJlbnRcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIGRlZmF1bHRNYXhMaXN0ZW5lcnNcbiAgICAgKiBAcGFyYW0gcGVyc2lzdGVuY2VUbSB7bnVtYmVyKSBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3kgd2hlbiBkaXNwb3NlIHJlYWNoIDBcbiAgICAgKiBAcGFyYW0gYXV0b0Rlc3Ryb3kgIHtib29sfSB3aWxsIHRyaWdnZXIgcmV0YWluICYgZGlzcG9zZSBhZnRlciBzdGFydFxuICAgICAqIEByZXR1cm5zIHtTY29wZX1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvciggc3RvcmVzTWFwLCB7IGlkLCBwYXJlbnQsIHN0YXRlLCBkYXRhLCBuYW1lLCBpbmNyZW1lbnRJZCwgZGVmYXVsdE1heExpc3RlbmVycywgcGVyc2lzdGVuY2VUbSwgYXV0b0Rlc3Ryb3ksIHJvb3RFbWl0dGVyIH0gPSB7fSApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX21heExpc3RlbmVycyA9IGRlZmF1bHRNYXhMaXN0ZW5lcnMgfHwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgICAgICBpZCAgICAgICAgICAgICAgICAgPSBpZCB8fCAoXCJfX19fX1wiICsgc2hvcnRpZC5nZW5lcmF0ZSgpKTtcbiAgICAgICAgaWYgKCBvcGVuU2NvcGVzW2lkXSAmJiAhaW5jcmVtZW50SWQgKSB7XG4gICAgICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICAgICAgb3BlblNjb3Blc1tpZF0ucmVnaXN0ZXIoc3RvcmVzTWFwKTtcbiAgICAgICAgICAgIHJldHVybiBvcGVuU2NvcGVzW2lkXVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBvcGVuU2NvcGVzW2lkXSAmJiBpbmNyZW1lbnRJZCApIHtcbiAgICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgICB3aGlsZSAoIG9wZW5TY29wZXNbaWQgKyAnLycgKyAoKytpKV0gKSA7XG4gICAgICAgICAgICBpZCA9IGlkICsgJy8nICsgaTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5faWQgICAgICAgICAgICA9IGlkO1xuICAgICAgICBvcGVuU2NvcGVzW2lkXSAgICAgID0gdGhpcztcbiAgICAgICAgdGhpcy5faXNMb2NhbElkICAgICA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBwZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RvcmVzID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgID0ge307XG4gICAgICAgIHRoaXMuZGF0YSAgID0ge307XG4gICAgICAgIFxuICAgICAgICBpZiAoIHBhcmVudCAmJiBwYXJlbnQuZGVhZCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCB1c2UgYSBkZWFkIHNjb3BlIGFzIHBhcmVudCAhXCIpO1xuICAgICAgICBcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJywgcGFyZW50KTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5zb3VyY2VzICAgICAgICAgID0gW107XG4gICAgICAgIHRoaXMuX2NoaWxkU2NvcGVzICAgICA9IFtdO1xuICAgICAgICB0aGlzLl9jaGlsZFNjb3Blc0xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5fdW5TdGFibGVDaGlsZHMgID0gMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zICAgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9fbG9ja3MgICAgID0geyBhbGw6IDEgfTtcbiAgICAgICAgdGhpcy5fX2xpc3RlbmluZyA9IHt9O1xuICAgICAgICB0aGlzLl9fc2NvcGUgICAgID0ge307XG4gICAgICAgIHRoaXMuX19taXhlZCAgICAgPSBbXTtcbiAgICAgICAgdGhpcy5fX21peGVkTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgID0gW107XG4gICAgICAgIGlmICggcGFyZW50ICkge1xuICAgICAgICAgICAgcGFyZW50LnJldGFpbihcImlzTXlQYXJlbnRcIik7XG4gICAgICAgICAgICBpZiAoICFyb290RW1pdHRlciApIHtcbiAgICAgICAgICAgICAgICAhcGFyZW50Ll9zdGFibGUgJiYgdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKTtcbiAgICAgICAgICAgICAgICBwYXJlbnQub24odGhpcy5fX3BhcmVudExpc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKFwid2FpdGluZ1BhcmVudFwiKSxcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpLFxuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQub24odGhpcy5fX3BhcmVudExpc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0aGlzLnJlZ2lzdGVyKHBhcmVudC5fX3Njb3BlLCBzdGF0ZSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHN0b3Jlc01hcCwgc3RhdGUsIGRhdGEpO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9ICF0aGlzLl9fbG9ja3MuYWxsO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICBwYXJlbnQuX2FkZENoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggYXV0b0Rlc3Ryb3kgKVxuICAgICAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICB0bSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0YWluKFwiYXV0b0Rlc3Ryb3lcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZShcImF1dG9EZXN0cm95XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXQgZGF0YXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqXG4gICAgICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0LCBpbiB0aGlzIHNjb3BlIG9yIGluIGl0cyBwYXJlbnRzIG9yIG1peGVkIHNjb3Blc1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0b3Jlc0xpc3Qge3N0cmluZ3xzdG9yZVJlZn0gU3RvcmUgbmFtZSwgQXJyYXkgb2YgU3RvcmUgbmFtZXMsIG9yIFJlc2NvcGUgc3RvcmUgcmVmIGZyb20gU3RvcmU6OmFzIG9yXG4gICAgICogICAgIFN0b3JlOmFzXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7U2NvcGV9XG4gICAgICovXG4gICAgbW91bnQoIHN0b3Jlc0xpc3QsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICBpZiAoIGlzLmFycmF5KHN0b3Jlc0xpc3QpICkge1xuICAgICAgICAgICAgc3RvcmVzTGlzdC5mb3JFYWNoKGsgPT4gdGhpcy5fbW91bnQoaywgc3RhdGUgJiYgc3RhdGVba10sIGRhdGEgJiYgZGF0YVtrXSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbW91bnQoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgX21vdW50KCBpZCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIGlkICE9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoeyBbaWQubmFtZV06IGlkLnN0b3JlIH0pO1xuICAgICAgICAgICAgaWQgPSBpZC5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fc2NvcGVbaWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbWl4ZWQucmVkdWNlKCggbW91bnRlZCwgY3R4ICkgPT4gKG1vdW50ZWQgfHwgY3R4Ll9tb3VudChpZCwgc3RhdGUsIGRhdGEpKSwgZmFsc2UpIHx8XG4gICAgICAgICAgICAgICAgIXRoaXMucGFyZW50IClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuX21vdW50KC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0b3JlID0gdGhpcy5fX3Njb3BlW2lkXSwgY3R4O1xuICAgICAgICBpZiAoIGlzLmZuKHN0b3JlKSApIHtcbiAgICAgICAgICAgIHRoaXMuX19zY29wZVtpZF0gPSBuZXcgc3RvcmUodGhpcywgeyBzdGF0ZSwgZGF0YSB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBkYXRhID09PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIHN0b3JlLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICBzdG9yZS5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgc3RvcmUucHVzaChkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuX19zY29wZVtpZF07XG4gICAgfVxuICAgIFxuICAgIF93YXRjaFN0b3JlKCBpZCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGlmICggIXRoaXMuX19zY29wZVtpZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX3dhdGNoU3RvcmUoaWQsIHN0YXRlLCBkYXRhKSksIGZhbHNlKSB8fFxuICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Ll93YXRjaFN0b3JlKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAhdGhpcy5fX2xpc3RlbmluZ1tpZF0gJiYgIWlzLmZuKHRoaXMuX19zY29wZVtpZF0pICkge1xuICAgICAgICAgICAgIXRoaXMuX19zY29wZVtpZF0uaXNTdGFibGUoKSAmJiB0aGlzLndhaXQoaWQpO1xuICAgICAgICAgICAgdGhpcy5fX3Njb3BlW2lkXS5vbihcbiAgICAgICAgICAgICAgICB0aGlzLl9fbGlzdGVuaW5nW2lkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ2Rlc3Ryb3knIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fX2xpc3RlbmluZ1tpZF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fc2NvcGVbaWRdID0gdGhpcy5fX3Njb3BlW2lkXS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLnByb3BhZygpLFxuICAgICAgICAgICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShpZCksXG4gICAgICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KGlkKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNaXggdGFyZ2V0Q3R4IG9uIHRoaXMgc2NvcGVcbiAgICAgKiBNaXhlZCBzY29wZSBwYXJlbnRzIGFyZSBOT1QgbWFwcGVkXG4gICAgICogQHBhcmFtIHRhcmdldEN0eFxuICAgICAqL1xuICAgIG1peGluKCB0YXJnZXRDdHggKSB7XG4gICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCwgbGlzdHM7XG4gICAgICAgIHRoaXMuX19taXhlZC5wdXNoKHRhcmdldEN0eClcbiAgICAgICAgdGFyZ2V0Q3R4LnJldGFpbihcIm1peGVkVG9cIik7XG4gICAgICAgIGlmICggIXRhcmdldEN0eC5fc3RhYmxlIClcbiAgICAgICAgICAgIHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19taXhlZExpc3QucHVzaChsaXN0cyA9IHtcbiAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKHRhcmdldEN0eC5faWQpLFxuICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCksXG4gICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdG9yZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSAgPSB7fTtcbiAgICAgICAgdGhpcy5kYXRhICAgPSB7fTtcbiAgICAgICAgdGFyZ2V0Q3R4Lm9uKGxpc3RzKTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJywgcGFyZW50KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVsaW5rKHRoaXMuX19zY29wZSwgdGhpcywgZmFsc2UsIHRydWUpO1xuICAgICAgICB0aGlzLl9fbWl4ZWQuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJyk7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnKTtcbiAgICAgICAgICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJyk7XG4gICAgICAgICAgICAgICAgY3R4LnJlbGluayhjdHguX19zY29wZSwgdGhpcywgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBzdG9yZXMgaW4gc3RvcmVzTWFwICYgbGluayB0aGVtIGluIHRoZSBwcm90b3NcbiAgICAgKiBAcGFyYW0gc3RvcmVzTWFwXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICByZWdpc3Rlciggc3RvcmVzTWFwLCBzdGF0ZSA9IHt9LCBkYXRhID0ge30gKSB7XG4gICAgICAgIHRoaXMucmVsaW5rKHN0b3Jlc01hcCwgdGhpcywgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3RvcmVzTWFwKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggc3RvcmVzTWFwW2lkXS5zaW5nbGV0b24gfHwgKGlzLmZuKHN0b3Jlc01hcFtpZF0pICYmIChzdGF0ZVtpZF0gfHwgZGF0YVtpZF0pKSApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91bnQoaWQsIHN0YXRlW2lkXSwgZGF0YVtpZF0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZVtpZF0gfHwgZGF0YVtpZF0gKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggZGF0YVtpZF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHN0YXRlW2lkXSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbaWRdLnN0YXRlID0gc3RhdGVbaWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbaWRdLnB1c2goZGF0YVtpZF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZVtpZF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1tpZF0uc2V0U3RhdGUoc3RhdGVbaWRdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2F0Y2hTdG9yZShpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNYXAgc3JjQ3R4IHN0b3JlJ3Mgb24gdGFyZ2V0Q3R4IGhlYWRlcnMgcHJvdG8nc1xuICAgICAqIEBwYXJhbSBzcmNDdHhcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q3R4XG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICByZWxpbmsoIHNyY0N0eCwgdGFyZ2V0Q3R4ID0gdGhpcywgZXh0ZXJuYWwsIGZvcmNlICkge1xuICAgICAgICBsZXQgbGN0eCA9IHRhcmdldEN0eC5fc3RvcmVzLnByb3RvdHlwZTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjQ3R4KVxuICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguX19zY29wZVtpZF0gPT09IHNyY0N0eFtpZF0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdICYmICh0YXJnZXRDdHguX19zY29wZVtpZF0uY29uc3RydWN0b3IgPT09IHNyY0N0eFtpZF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fX3Njb3BlW2lkXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgIWlzLmZuKHRhcmdldEN0eC5fX3Njb3BlW2lkXSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oXCJSZXNjb3BlIFN0b3JlIDogXCIsIGlkLCBcIiBhbHJlYWR5IGV4aXN0IGluIHRoaXMgc2NvcGUgISAoIHRyeSBfX3Byb3RvX18gaG90IHBhdGNoIClcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX19zY29wZVtpZF0uX19wcm90b19fID0gc3JjQ3R4W2lkXS5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFleHRlcm5hbCAmJiBpcy5mbih0YXJnZXRDdHguX19zY29wZVtpZF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fX3Njb3BlW2lkXSA9IHNyY0N0eFtpZF07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhZm9yY2UgJiYgIWV4dGVybmFsIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3Njb3BlW2lkXSA9IHNyY0N0eFtpZF07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsY3R4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiB0aGlzLl9fc2NvcGVbaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9zdGF0ZS5wcm90b3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+ICh0aGlzLl9fc2NvcGVbaWRdICYmIHRoaXMuX19zY29wZVtpZF0uc3RhdGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHYpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fZGF0YS5wcm90b3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+ICh0aGlzLl9fc2NvcGVbaWRdICYmIHRoaXMuX19zY29wZVtpZF0uZGF0YSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB2KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQmluZCBzdG9yZXMgZnJvbSB0aGlzIHNjb3BlLCBoaXMgcGFyZW50cyBhbmQgbWl4ZWQgc2NvcGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbn1cbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IHN0b3JlcyBrZXlzIHRvIGJpbmQgdXBkYXRlc1xuICAgICAqIEBwYXJhbSBhc1xuICAgICAqIEBwYXJhbSBzZXRJbml0aWFsIHtib29sfSBmYWxzZSB0byBub3QgcHJvcGFnIGluaXRpYWwgdmFsdWUgKGRlZmF1bHQgOiB0cnVlKVxuICAgICAqL1xuICAgIGJpbmQoIG9iaiwga2V5LCBhcywgc2V0SW5pdGlhbCA9IHRydWUgKSB7XG4gICAgICAgIGxldCBsYXN0UmV2cywgZGF0YSwgcmVLZXk7XG4gICAgICAgIGlmICgga2V5ICYmICFpcy5hcnJheShrZXkpIClcbiAgICAgICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhcyA9PT0gZmFsc2UgfHwgYXMgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBzZXRJbml0aWFsID0gYXM7XG4gICAgICAgICAgICBhcyAgICAgICAgID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVLZXkgPSBrZXkubWFwKGlkID0+IChpcy5zdHJpbmcoaWQpID8gaWQgOiBpZC5uYW1lKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMucHVzaChcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBvYmosXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGFzIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBsYXN0UmV2cyA9IHJlS2V5ICYmIHJlS2V5LnJlZHVjZSgoIHJldnMsIGlkICkgPT4gKHJldnNbaWRdID0gMCwgcmV2cyksIHt9KVxuICAgICAgICAgICAgXSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1vdW50KGtleSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5fc3RhYmxlICkge1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICBpZiAoICFkYXRhICkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iaihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVW4gYmluZCB0aGlzIHNjb3BlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleXNcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XG4gICAgICovXG4gICAgdW5CaW5kKCBvYmosIGtleSwgYXMgKSB7XG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzW2ldWzBdID09PSBvYmogJiYgKCcnICsgZm9sbG93ZXJzW2ldWzFdKSA9PSAoJycgKyBrZXkpICYmXG4gICAgICAgICAgICAgICAgZm9sbG93ZXJzW2ldWzJdID09IGFzIClcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0IGZyb20gdGhpcyBzY29wZSwgaXRzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG4gICAgICogQmluZCB0aGVtIHRvICd0bydcbiAgICAgKiBIb29rICd0bycgc28gaXQgd2lsbCBhdXRvIHVuYmluZCBvbiAnZGVzdHJveScgb3IgJ2NvbXBvbmVudFdpbGxVbm1vdW50J1xuICAgICAqIEBwYXJhbSB0b1xuICAgICAqIEBwYXJhbSBzdG9yZXNMaXN0XG4gICAgICogQHBhcmFtIGJpbmRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBJbml0aWFsIG91dHB1dHMgb2YgdGhlIHN0b3JlcyBpbiAnc3RvcmVzTGlzdCdcbiAgICAgKi9cbiAgICBtYXAoIHRvLCBzdG9yZXNMaXN0LCBiaW5kID0gdHJ1ZSApIHtcbiAgICAgICAgbGV0IFN0b3JlICA9IHRoaXMuY29uc3RydWN0b3IuU3RvcmU7XG4gICAgICAgIHN0b3Jlc0xpc3QgPSBpcy5hcnJheShzdG9yZXNMaXN0KSA/IHN0b3Jlc0xpc3QgOiBbc3RvcmVzTGlzdF07XG4gICAgICAgIHRoaXMubW91bnQoc3RvcmVzTGlzdCk7XG4gICAgICAgIGlmICggYmluZCAmJiB0byBpbnN0YW5jZW9mIFN0b3JlICkge1xuICAgICAgICAgICAgU3RvcmUubWFwKHRvLCBzdG9yZXNMaXN0LCB0aGlzLCB0aGlzLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggYmluZCApIHtcbiAgICAgICAgICAgIHRoaXMuYmluZCh0bywgc3RvcmVzTGlzdCwgdW5kZWZpbmVkLCBmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBtaXhlZENXVW5tb3VudCxcbiAgICAgICAgICAgICAgICB1bk1vdW50S2V5ID0gdG8uaXNSZWFjdENvbXBvbmVudCA/IFwiY29tcG9uZW50V2lsbFVubW91bnRcIiA6IFwiZGVzdHJveVwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIHRvLmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuICAgICAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gdG9bdW5Nb3VudEtleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvW3VuTW91bnRLZXldID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0b1t1bk1vdW50S2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcbiAgICAgICAgICAgICAgICAgICAgdG9bdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnVuQmluZCh0bywgc3RvcmVzTGlzdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvW3VuTW91bnRLZXldICYmIHRvW3VuTW91bnRLZXldKC4uLmFyZ3opO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3Jlc0xpc3QucmVkdWNlKCggZGF0YSwgaWQgKSA9PiB7XG4gICAgICAgICAgICBpZiAoICFpcy5zdHJpbmcoaWQpIClcbiAgICAgICAgICAgICAgICBpZCA9IGlkLm5hbWU7XG4gICAgICAgICAgICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGlkLnNwbGl0KCc6Jyk7Ly9AdG9kb1xuICAgICAgICAgICAgaWRbMF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBpZFswXS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgZGF0YVtpZFsxXSB8fCBpZFswXVtpZFswXS5sZW5ndGggLSAxXV0gPSB0aGlzLnN0b3Jlc1tpZFswXVswXV0gJiYgdGhpcy5zdG9yZXNbaWRbMF1bMF1dLnJldHJpZXZlICYmIHRoaXMuc3RvcmVzW2lkWzBdWzBdXS5yZXRyaWV2ZShpZFswXS5zcGxpY2UoMSkpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgXG4gICAgcmV0cmlldmUoIHBhdGggPSBcIlwiICkge1xuICAgICAgICBwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcbiAgICAgICAgcmV0dXJuIHBhdGggJiYgdGhpcy5zdG9yZXNbcGF0aFswXV0gJiZcbiAgICAgICAgICAgIHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlKHBhdGguc3BsaWNlKDEpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IG9yIHVwZGF0ZSBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnNcbiAgICAgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIGxvY2FsXG4gICAgICogQHJldHVybnMge3t9fVxuICAgICAqL1xuICAgIGdldFN0b3Jlc1JldnMoIHN0b3Jlc1Jldk1hcCA9IHt9LCBsb2NhbCApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19zY29wZTtcbiAgICAgICAgaWYgKCAhc3RvcmVzUmV2TWFwICkge1xuICAgICAgICAgICAgc3RvcmVzUmV2TWFwID0ge307XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggIWlzLmZuKGN0eFtpZF0pXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFtpZF0gPSBjdHhbaWRdLl9yZXY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSApXG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFtpZF0gPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBpZiAoICFsb2NhbCApIHtcbiAgICAgICAgICAgIHRoaXMuX19taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcmVzUmV2TWFwO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgb3IgdXBkYXRlIG91dHB1dCBiYXNpbmcgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zLlxuICAgICAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgaXMgdXBkYXRlZDsgYWRkIGl0IHRvICdvdXRwdXQnXG4gICAgICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuICAgICAqIEBwYXJhbSBvdXRwdXRcbiAgICAgKiBAcGFyYW0gdXBkYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfHt9fVxuICAgICAqL1xuICAgIGdldFVwZGF0ZXMoIHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX3Njb3BlO1xuICAgICAgICBcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0IHx8IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAhb3V0cHV0Lmhhc093blByb3BlcnR5KGlkKSAmJiAhaXMuZm4oY3R4W2lkXSlcbiAgICAgICAgICAgICAgICAgICAgJiYgKCFzdG9yZXNSZXZNYXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IChzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpICYmIHN0b3Jlc1Jldk1hcFtpZF0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICEoIXN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgfHwgY3R4W2lkXS5fcmV2IDw9IHN0b3Jlc1Jldk1hcFtpZF0pKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtpZF0gPSB0aGlzLmRhdGFbaWRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHN0b3Jlc1Jldk1hcCAmJiBzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFtpZF0gPSBjdHhbaWRdLl9yZXY7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMuX19taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFVwZGF0ZXMoc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQpLCB1cGRhdGVkKTtcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFVwZGF0ZXMoc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQ7XG4gICAgICAgIHJldHVybiB1cGRhdGVkICYmIG91dHB1dDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZmxhZ3Nfc3RhdGVzXG4gICAgICogQHBhcmFtIGZsYWdzX2RhdGFcbiAgICAgKiBAcmV0dXJucyB7e3N0YXRlOiB7fSwgZGF0YToge319fVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZSggZmxhZ3Nfc3RhdGVzID0gLy4qLywgZmxhZ3NfZGF0YSA9IC8uKi8gKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fc2NvcGUsIG91dHB1dCA9IHsgc3RhdGU6IHt9LCBkYXRhOiB7fSB9LFxuICAgICAgICAgICAgX2ZsYWdzX3N0YXRlcyxcbiAgICAgICAgICAgIF9mbGFnc19kYXRhO1xuICAgICAgICBpZiAoIGlzLmFycmF5KGZsYWdzX3N0YXRlcykgKVxuICAgICAgICAgICAgZmxhZ3Nfc3RhdGVzLmZvckVhY2goaWQgPT4gKG91dHB1dC5zdGF0ZVtpZF0gPSB0aGlzLnN0YXRlW2lkXSkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBpcy5hcnJheShmbGFnc19kYXRhKSApXG4gICAgICAgICAgICBmbGFnc19kYXRhLmZvckVhY2goaWQgPT4gKG91dHB1dC5kYXRhW2lkXSA9IHRoaXMuZGF0YVtpZF0pKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWlzLmFycmF5KGZsYWdzX2RhdGEpICYmICFpcy5hcnJheShmbGFnc19zdGF0ZXMpIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggaXMuZm4oY3R4W2lkXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZsYWdzID0gY3R4W2lkXS5jb25zdHJ1Y3Rvci5mbGFncztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzID0gaXMuYXJyYXkoZmxhZ3MpID8gZmxhZ3MgOiBbZmxhZ3MgfHwgXCJcIl07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZsYWdzLnJlZHVjZSgoIHIsIGZsYWcgKSA9PiAociB8fCBmbGFnc19zdGF0ZXMudGVzdChmbGFnKSksIGZhbHNlKSApXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZsYWdzLnJlZHVjZSgoIHIsIGZsYWcgKSA9PiAociB8fCBmbGFnc19kYXRhLnRlc3QoZmxhZykpLCBmYWxzZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmRhdGFbaWRdID0gdGhpcy5kYXRhW2lkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuICAgIFxuICAgIGRpc3BhdGNoKCBhY3Rpb24sIGRhdGEgKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuX19zY29wZSlcbiAgICAgICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhaXMuZm4odGhpcy5fX3Njb3BlW2lkXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fc2NvcGVbaWRdLnRyaWdnZXIoYWN0aW9uLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX21peGVkLmZvckVhY2goKCBjdHggKSA9PiAoY3R4LmRpc3BhdGNoKGFjdGlvbiwgZGF0YSkpKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZGlzcGF0Y2goYWN0aW9uLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIHRoZW4oIGNiICkge1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgdGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKG51bGwsIHRoaXMuZGF0YSkpO1xuICAgIH1cbiAgICBcbiAgICByZXN0b3JlKCB7IHN0YXRlLCBkYXRhIH0sIHF1aWV0ICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX3Njb3BlO1xuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIHF1aWV0ID8gY3R4LmRhdGEgPSBkYXRhW2lkXVxuICAgICAgICAgICAgICAgICAgICA6IGN0eC5wdXNoKGRhdGFbaWRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3RhdGUpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgcXVpZXQgPyBjdHguc3RhdGUgPSBzdGF0ZVtpZF1cbiAgICAgICAgICAgICAgICAgICAgOiBjdHguc2V0U3RhdGUoc3RhdGVbaWRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgcmV0YWluU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbiAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluKHJlYXNvbikpXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZVN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcbiAgICAgICAgc3RvcmVzLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlKHJlYXNvbikpXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgd2FpdCggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgIXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5lbWl0KFwidW5zdGFibGVcIiwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZWxlYXNlKCByZWFzb24gKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXJUTSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzLmFsbCApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuZGVhZCAmJiB0aGlzLl9wcm9wYWcoKTsvLyBzdGFiaWxpdHkgY2FuIGluZHVjZSBkZXN0cm95XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcHJvcGFnKCkge1xuICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xuICAgICAgICB0aGlzLl9wcm9wYWdUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWdUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgIH0sIDJcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgX3Byb3BhZygpIHtcbiAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCggeyAwOiBvYmosIDE6IGtleSwgMjogYXMsIDM6IGxhc3RSZXZzIH0gKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuICAgICAgICAgICAgICAgIGlmICggIWRhdGEgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqKGRhdGEsIGxhc3RSZXZzICYmIFsuLi5sYXN0UmV2c10gfHwgXCJubyByZXZzXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBsYXN0UmV2cyAmJlxuICAgICAgICAgICAgICAgIC8vIGtleS5mb3JFYWNoKGlkID0+IChsYXN0UmV2c1tpZF0gPSB0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLl9yZXYgfHwgMCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW1pdChcInVwZGF0ZVwiLCB0aGlzLmdldFVwZGF0ZXMoKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIHN0YWJsZVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc1N0YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJsZTtcbiAgICB9XG4gICAgXG4gICAgLy9zZXJpYWxpemVDaGlsZHMoIGNoaWxkcyA9IFtdICkge1xuICAgIC8vXG4gICAgLy99XG4gICAgXG4gICAgX2FkZENoaWxkKCBjdHggKSB7XG4gICAgICAgIHRoaXMuX2NoaWxkU2NvcGVzLnB1c2goY3R4KTtcbiAgICAgICAgbGV0IGxpc3RzICAgICA9IHtcbiAgICAgICAgICAgICAgICAnc3RhYmxlJyAgICAgIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd1bnN0YWJsZScgICAgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAxID09IHRoaXMuX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3N0YWJsZVRyZWUnICA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAndW5zdGFibGVUcmVlJzogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgICAgICAgICAgICAgIGlmICggMSA9PSB0aGlzLl91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdkZXN0cm95JyAgICAgOiBjdHggPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGN0eC5fdW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhY3R4LmlzU3RhYmxlKCkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fdW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3YXNTdGFibGUgPSB0aGlzLl91blN0YWJsZUNoaWxkcztcbiAgICAgICAgLy8hY3R4LmlzU3RhYmxlKCkgJiYgY29uc29sZS53YXJuKCdhZGQgdW5zdGFibGUgY2hpbGQnKTtcbiAgICAgICAgIWN0eC5pc1N0YWJsZSgpICYmIHRoaXMuX3VuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgIGN0eC5fdW5TdGFibGVDaGlsZHMgJiYgdGhpcy5fdW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgdGhpcy5fY2hpbGRTY29wZXNMaXN0LnB1c2gobGlzdHMpO1xuICAgICAgICBpZiAoICF3YXNTdGFibGUgJiYgdGhpcy5fdW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgIGN0eC5vbihsaXN0cyk7XG4gICAgfVxuICAgIFxuICAgIF9ybUNoaWxkKCBjdHggKSB7XG4gICAgICAgIGxldCBpICAgICAgICAgPSB0aGlzLl9jaGlsZFNjb3Blcy5pbmRleE9mKGN0eCksXG4gICAgICAgICAgICB3YXNTdGFibGUgPSB0aGlzLl91blN0YWJsZUNoaWxkcztcbiAgICAgICAgaWYgKCBpICE9IC0xICkge1xuICAgICAgICAgICAgdGhpcy5fY2hpbGRTY29wZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgIWN0eC5pc1N0YWJsZSgpICYmIHRoaXMuX3VuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICBjdHguX3VuU3RhYmxlQ2hpbGRzICYmIHRoaXMuX3VuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICBjdHgudW4odGhpcy5fY2hpbGRTY29wZXNMaXN0LnNwbGljZShpLCAxKVswXSk7XG4gICAgICAgICAgICBpZiAoIHdhc1N0YWJsZSAmJiAhdGhpcy5fdW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIilcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXRhaW4oIHJlYXNvbiApIHtcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsKys7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZXRhaW5cIiwgdGhpcy5faWQsIHJlYXNvbik7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkaXNwb3NlKCByZWFzb24gKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJkaXNwb3NlXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zW3JlYXNvbl0gKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyA6IFwiICsgcmVhc29uKTtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsLS07XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZSBkbyBkZXN0cm95IFwiLCB0aGlzLl9pZCwgdGhpcy5fcGVyc2lzdGVuY2VUbSk7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX3BlcnNpc3RlbmNlVG0gKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+ICghdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb3JkZXIgZGVzdHJveSBvZiBsb2NhbCBzdG9yZXNcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBsZXQgY3R4ICAgPSB0aGlzLl9fc2NvcGU7XG4gICAgICAgIC8vY29uc29sZS53YXJuKFwiZGVzdHJveVwiLCB0aGlzLl9pZCk7XG4gICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZW1pdChcImRlc3Ryb3lcIiwgdGhpcyk7XG4gICAgICAgIE9iamVjdC5rZXlzKFxuICAgICAgICAgICAgdGhpcy5fX2xpc3RlbmluZ1xuICAgICAgICApLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB0aGlzLl9fc2NvcGVbaWRdLnJlbW92ZUxpc3RlbmVyKHRoaXMuX19saXN0ZW5pbmdbaWRdKVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyVE0pO1xuICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xuICAgICAgICB0aGlzLl9fbGlzdGVuaW5nID0ge307XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX2lzTG9jYWxJZCApXG4gICAgICAgICAgICBkZWxldGUgb3BlblNjb3Blc1t0aGlzLl9pZF07XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xuICAgICAgICBcbiAgICAgICAgd2hpbGUgKCB0aGlzLl9fbWl4ZWRMaXN0Lmxlbmd0aCApIHtcbiAgICAgICAgICAgIHRoaXMuX19taXhlZFswXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fbWl4ZWRMaXN0LnNoaWZ0KCkpO1xuICAgICAgICAgICAgdGhpcy5fX21peGVkLnNoaWZ0KCkuZGlzcG9zZShcIm1peGVkVG9cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCB0aGlzLl9fcGFyZW50TGlzdCApIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Ll9ybUNoaWxkKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5fX3BhcmVudExpc3QpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuZGlzcG9zZShcImlzTXlQYXJlbnRcIik7XG4gICAgICAgICAgICB0aGlzLl9fcGFyZW50TGlzdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy9mb3IgKCBsZXQga2V5IGluIGN0eCApXG4gICAgICAgIC8vICAgIGlmICggIWlzLmZuKGN0eFtrZXldKSApIHtcbiAgICAgICAgLy8gICAgICAgIGlmICggY3R4W2tleV0uc2NvcGVPYmogPT09IHRoaXMgKVxuICAgICAgICAvLyAgICAgICAgICAgIGN0eFtrZXldLmRpc3Bvc2UoKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgIGN0eFtrZXldID0gY3R4W2tleV0uY29uc3RydWN0b3I7XG4gICAgICAgIC8vICAgIH1cbiAgICAgICAgdGhpcy5fX21peGVkID0gdGhpcy5kYXRhID0gdGhpcy5zdGF0ZSA9IHRoaXMuc2NvcGUgPSB0aGlzLnN0b3JlcyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9zdGF0ZSA9IHRoaXMuX3N0b3JlcyA9IG51bGw7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Njb3BlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICogIFxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogIFxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiAgXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKiAgXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xudmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtaXR0ZXIge1xuICAgIF9ldmVudHMgPSB7fTtcbiAgICBcbiAgICBvbiggZXZ0LCBjYiApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLm9uKGssIGV2dFtrXSkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0gPSB0aGlzLl9ldmVudHNbZXZ0XSB8fCBbXTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0ucHVzaChjYik7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICB1biggZXZ0LCBjYiApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLnVuKGssIGV2dFtrXSkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fZXZlbnRzW2V2dF0gKSByZXR1cm47XG4gICAgICAgIHZhciBpID0gdGhpcy5fZXZlbnRzW2V2dF0uaW5kZXhPZihjYik7XG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgZW1pdCggZXZ0LCAuLi5hcmd6ICkge1xuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgbGV0IGxpc3RzID0gWy4uLnRoaXMuX2V2ZW50c1tldnRdXTtcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgbGlzdHMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICBsaXN0c1tpXSguLi5hcmd6KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBhZGRMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5vbiguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy51biguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVBbGxMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIH1cbiAgICBcbiAgICBvbmNlKCBldnQsIGNiICkge1xuICAgICAgICBsZXQgZm47XG4gICAgICAgIHRoaXMub24oZXZ0LCBmbiA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgIHRoaXMudW4oZXZ0LCBmbik7XG4gICAgICAgICAgICBjYiguLi5hcmd6KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VtaXR0ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2hvcnRpZFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuLyoqXG4gKiBVbHRyYSBzY2FsYWJsZSBzdGF0ZS1hd2FyZSBzdG9yZVxuICpcbiAqIEB0b2RvIDogbG90IG9mIG9wdGltcy4uLlxuICovXG5cbnZhciBpcyAgICAgICAgICAgPSByZXF1aXJlKCdpcycpLFxuICAgIFNjb3BlICAgICAgICA9IHJlcXVpcmUoJy4vU2NvcGUnKSxcbiAgICBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCcuL0VtaXR0ZXInKSxcbiAgICBzaG9ydGlkICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXG4gICAgb2JqUHJvdG8gICAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KTtcbi8qKlxuICogQGNsYXNzIFN0b3JlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBcbiAgICBzdGF0aWMgdXNlICAgICAgICAgICAgICAgICAgPSBbXTsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHNvdXJjZSBzdG9yZXNcbiAgICBzdGF0aWMgZm9sbG93Oy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc3RvcmUgdGhhdCB3aWxsIGFsbG93IHB1c2ggaWYgdXBkYXRlZFxuICAgIHN0YXRpYyByZXF1aXJlO1xuICAgIHN0YXRpYyBzdGF0aWNTY29wZSAgICAgICAgICA9IG5ldyBTY29wZSh7fSwgeyBpZDogXCJzdGF0aWNcIiB9KTtcbiAgICBzdGF0aWMgc3RhdGUgICAgICAgICAgICAgICAgPSB1bmRlZmluZWQ7Ly8gZGVmYXVsdCBzdGF0ZVxuICAgIC8qKlxuICAgICAqIGlmIHJldGFpbiBnb2VzIHRvIDAgOlxuICAgICAqIGZhbHNlIHRvIG5vdCBkZXN0cm95LFxuICAgICAqIDAgdG8gc3luYyBhdXRvIGRlc3Ryb3lcbiAgICAgKiBNcyB0byBhdXRvZGVzdHJveSBhZnRlciB0bSBtcyBpZiBubyByZXRhaW4gaGFzIGJlZW4gY2FsbGVkXG4gICAgICogQHR5cGUge2Jvb2xlYW58SW50fVxuICAgICAqL1xuICAgICAgICAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IGZhbHNlO1xuICAgIFxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLCB3aWxsIGJ1aWxkIGEgcmVzY29wZSBzdG9yZVxuICAgICAqXG4gICAgICogKHNjb3BlLCB7cmVxdWlyZSx1c2UsYXBwbHksc3RhdGUsIGRhdGF9KVxuICAgICAqIChzY29wZSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSB7b2JqZWN0fSBzY29wZSB3aGVyZSB0byBmaW5kIHRoZSBvdGhlciBzdG9yZXMgKGRlZmF1bHQgOiBzdGF0aWMgc3RhdGljU2NvcGUgKVxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIGFyZ3ogICAgICAgICA9IFsuLi5hcmd1bWVudHNdLFxuICAgICAgICAgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIHNjb3BlICAgICAgICA9IGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZVxuICAgICAgICAgICAgICAgID8gYXJnei5zaGlmdCgpXG4gICAgICAgICAgICAgICAgOiBfc3RhdGljLnNjb3BlID8gU2NvcGUuZ2V0U2NvcGUoX3N0YXRpYy5zY29wZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGlzLnN0cmluZyhhcmd6WzBdKVxuICAgICAgICAgICAgICAgICAgICAgID8gU2NvcGUuZ2V0U2NvcGUoYXJnei5zaGlmdCgpKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zdGF0aWNTY29wZSxcbiAgICAgICAgICAgIGNmZyAgICAgICAgICA9IGFyZ3pbMF0gJiYgIWlzLmFycmF5KGFyZ3pbMF0pICYmICFpcy5zdHJpbmcoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiB7fSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICA9IGlzLnN0cmluZyhhcmd6WzBdKSA/IGFyZ3pbMF0gOiBjZmcubmFtZSB8fCBfc3RhdGljLm5hbWUsXG4gICAgICAgICAgICB3YXRjaHMgICAgICAgPSBpcy5hcnJheShhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IGNmZy51c2UgfHwgW10sLy8gd2F0Y2hzIG5lZWQgdG8gYmUgZGVmaW5lZCBhZnRlciBhbGwgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgYXJlIHJlZ2lzdGVyZWQgOiBzbyB3ZSBjYW4ndCBkZWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2l0aCBhbnkgXCJzdGF0aWMgdXNlXCIgYXV0b21hdGljbHlcbiAgICAgICAgICAgIGFwcGx5ICAgICAgICA9IGlzLmZuKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogY2ZnLmFwcGx5IHx8IG51bGwsXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSBfc3RhdGljLnN0YXRlIHx8IF9zdGF0aWMuaW5pdGlhbFN0YXRlLFxuICAgICAgICAgICAgYXBwbGllZDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3VpZCA9IGNmZy5fdWlkIHx8IHNob3J0aWQuZ2VuZXJhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zICAgID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fX2xvY2tzICAgICAgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9vblN0YWJpbGl6ZSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IGNmZy5wZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcbiAgICAgICAgaWYgKCBpcy5zdHJpbmcoYXJnelswXSkgKSB7XG4gICAgICAgICAgICBpZiAoIHNjb3BlLl9fc2NvcGVbbmFtZV0gKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGU6IE92ZXJ3cml0aW5nIGFuIGV4aXN0aW5nIHN0YXRpYyBuYW1lZCBzdG9yZSAoICVzICkgISFcIiwgbmFtZSk7XG4gICAgICAgICAgICBzY29wZS5fX3Njb3BlW25hbWVdID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBjZmcgJiYgY2ZnLm9uICkge1xuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuc3RhdGUgICAgICA9IHRoaXMuc3RhdGUgfHwge307XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggc2NvcGUuc3RvcmVzICkge1xuICAgICAgICAgICAgdGhpcy5zY29wZU9iaiA9IHNjb3BlO1xuICAgICAgICAgICAgdGhpcy5zY29wZSAgICA9IHNjb3BlLnN0b3JlcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGVPYmogPSBuZXcgU2NvcGUoc2NvcGUpO1xuICAgICAgICAgICAgdGhpcy5zY29wZSAgICA9IHNjb3BlLnN0b3JlcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3JldiAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLl9yZXYgfHwgMDtcbiAgICAgICAgdGhpcy5fcmV2cyAgICA9IHt9O1xuICAgICAgICB0aGlzLnN0b3JlcyAgID0ge307XG4gICAgICAgIHRoaXMuX3JlcXVpcmUgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIGlmICggaXMuYXJyYXkoX3N0YXRpYy51c2UpICkge1xuICAgICAgICAgICAgdGhpcy5fdXNlID0gWy4uLndhdGNocywgLi4uKF9zdGF0aWMudXNlIHx8IFtdKS5tYXAoXG4gICAgICAgICAgICAgICAga2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IGtleS5tYXRjaCgvXihcXCE/KShbXlxcOl0qKSg/OlxcOiguKikpPyQvKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCByZWZbMV0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVmMiA9IHJlZlsyXS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKHJlZlszXSB8fCByZWYyW3JlZjIubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oXG4gICAgICAgICAgICAgICAgX3N0YXRpYy51c2UgPyBPYmplY3Qua2V5cyhfc3RhdGljLnVzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IGtleS5tYXRjaCgvXihcXCE/KSguKikkLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZlsxXSAmJiB0aGlzLl9yZXF1aXJlLnB1c2goX3N0YXRpYy51c2Vba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZbMl0gKyAoKF9zdGF0aWMudXNlW2tleV0gPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICc6JyArIF9zdGF0aWMudXNlW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBbXVxuICAgICAgICAgICAgKV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggX3N0YXRpYy5yZXF1aXJlIClcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5fc3RhdGljLnJlcXVpcmUpO1xuICAgICAgICBpZiAoIGNmZy5yZXF1aXJlIClcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5jZmcucmVxdWlyZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIGlmICggX3N0YXRpYy5kYXRhICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgdGhpcy5kYXRhID0geyAuLi5fc3RhdGljLmRhdGEgfTtcbiAgICAgICAgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJkYXRhXCIpICYmIGNmZy5kYXRhICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgdGhpcy5kYXRhID0gY2ZnLmRhdGE7XG4gICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0geyAuLi5pbml0aWFsU3RhdGUsIC4uLmNmZy5zdGF0ZSB9O1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhcHBseSApXG4gICAgICAgICAgICB0aGlzLmFwcGx5ID0gYXBwbHk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgaWYgKCBpbml0aWFsU3RhdGUgfHwgdGhpcy5fdXNlLmxlbmd0aCApIHsvLyBzeW5jIGFwcGx5XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLihpbml0aWFsU3RhdGUgfHwge30pLFxuICAgICAgICAgICAgICAgIC4uLnNjb3BlLm1hcCh0aGlzLCB0aGlzLl91c2UpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZEFwcGx5KHRoaXMuc3RhdGUpICYmIHRoaXMuZGF0YSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuYXBwbHkodGhpcy5kYXRhLCB0aGlzLnN0YXRlLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgICAgICBhcHBsaWVkICAgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICh0aGlzLmRhdGEgIT09IHVuZGVmaW5lZCB8fCBhcHBsaWVkKSAmJiAhdGhpcy5fX2xvY2tzLmFsbCApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yZXYrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCAhX3N0YXRpYy5tYW5hZ2VkICYmICF0aGlzLnN0YXRlICYmICghdGhpcy5fdXNlIHx8ICF0aGlzLl91c2UubGVuZ3RoKSApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJSZXNjb3BlIHN0b3JlICdcIiwgdGhpcy5uYW1lLCBcIicgaGF2ZSBubyBpbml0aWFsIGRhdGEsIHN0YXRlIG9yIHVzZS4gSXQgY2FuJ3Qgc3RhYmlsaXplLi4uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBCdWlsZGVyLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgc3RhdGljIGFzKCBuYW1lICkge1xuICAgICAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcbiAgICAgKiBIb29rIGNvbXBvbmVudFdpbGxVbm1vdW50IChmb3IgcmVhY3QgY29tcCkgb3IgZGVzdHJveSB0byB1bkJpbmQgdGhlbSBhdXRvbWF0aWNhbGx5XG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSBvYmplY3Qge09iamVjdH0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdCAoUmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLilcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyU3RhdGljTmFtZWRTdG9yZTprZXlcIiwgc3RvcmUuYXMoJ2Fub3RoZXJLZXknKV1cbiAgICAgKi9cbiAgICBzdGF0aWMgbWFwKCBjb21wb25lbnQsIGtleXMsIHNjb3BlLCBvcmlnaW4sIHNldEluaXRpYWwgPSBmYWxzZSApIHtcbiAgICAgICAgdmFyIHRhcmdldFJldnMgICAgID0gY29tcG9uZW50Ll9yZXZzIHx8IHt9O1xuICAgICAgICB2YXIgdGFyZ2V0U2NvcGUgICAgPSBjb21wb25lbnQuc3RvcmVzIHx8IChjb21wb25lbnQuc3RvcmVzID0ge30pO1xuICAgICAgICB2YXIgaW5pdGlhbE91dHB1dHMgPSB7fTtcbiAgICAgICAga2V5cyAgICAgICAgICAgICAgID0gaXMuYXJyYXkoa2V5cykgPyBbLi4ua2V5c10gOiBba2V5c107XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgc2NvcGUgPSBzY29wZSB8fCBTdG9yZS5zdGF0aWNTY29wZTtcbiAgICAgICAgXG4gICAgICAgIGtleXMgICAgICAgICAgID0ga2V5cy5maWx0ZXIoXG4gICAgICAgICAgICAvLyBAdG9kbyA6IHVzZSBxdWVyeSByZWZzXG4gICAgICAgICAgICAvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAha2V5ICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzLFxuICAgICAgICAgICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZTtcbiAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoKD86XFwuW1xcd19dKykqKSg/OlxcOihbXFx3X10rKSk/Lyk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzFdO1xuICAgICAgICAgICAgICAgICAgICBwYXRoICA9IGtleVsyXSAmJiBrZXlbMl0uc3BsaXQoJy4nKS5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBzY29wZS5zdG9yZXNba2V5WzFdXTtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbM10gfHwgcGF0aCAmJiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gfHwga2V5WzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIHRhcmdldFJldnNbbmFtZV0gKSByZXR1cm4gZmFsc2U7Ly8gaWdub3JlIGRibCB1c2VzIGZvciBub3dcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoICFzdG9yZSApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJywgc3RvcmUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihzdG9yZSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLl9tb3VudChuYW1lKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuc3RvcmVzW25hbWVdLmJpbmQoY29tcG9uZW50LCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXRSZXZzW2FsaWFzXSA9IHRhcmdldFJldnNbYWxpYXNdIHx8IHRydWU7XG4gICAgICAgICAgICAgICAgIXRhcmdldFNjb3BlW25hbWVdICYmICh0YXJnZXRTY29wZVtuYW1lXSA9IHNjb3BlLnN0b3Jlc1tuYW1lXSk7XG4gICAgICAgICAgICAgICAgaWYgKCBzY29wZS5zdG9yZXNbbmFtZV0uaGFzT3duUHJvcGVydHkoJ2RhdGEnKSApXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxPdXRwdXRzW25hbWVdID0gc2NvcGUuZGF0YVtuYW1lXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdmFyIG1peGVkQ1dVbm1vdW50LFxuICAgICAgICAgICAgdW5Nb3VudEtleSA9IGNvbXBvbmVudC5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGNvbXBvbmVudC5oYXNPd25Qcm9wZXJ0eSh1bk1vdW50S2V5KSApIHtcbiAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gY29tcG9uZW50W3VuTW91bnRLZXldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnRbdW5Nb3VudEtleV0gPSAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgY29tcG9uZW50W3VuTW91bnRLZXldO1xuICAgICAgICAgICAgaWYgKCBtaXhlZENXVW5tb3VudCApXG4gICAgICAgICAgICAgICAgY29tcG9uZW50W3VuTW91bnRLZXldID0gbWl4ZWRDV1VubW91bnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGtleXMubWFwKFxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzLCBwYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gc2NvcGUuc3RvcmVzW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCAgPSBrZXlbMl0gJiYga2V5WzJdLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLnN0b3Jlc1trZXlbMV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbM10gfHwgcGF0aCAmJiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gfHwga2V5WzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzdG9yZSAmJiAhaXMuZm4oc3RvcmUpICYmIHN0b3JlLnVuQmluZChjb21wb25lbnQsIGFsaWFzLCBwYXRoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50W3VuTW91bnRLZXldICYmIGNvbXBvbmVudFt1bk1vdW50S2V5XSguLi5hcmd6KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldCBjb250ZXh0T2JqKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZU9iajtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXQgY29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0IGRhdGFzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHNldCBkYXRhcyggdiApIHtcbiAgICAgICAgLy9jb25zb2xlLmdyb3VwQ29sbGFwc2VkKFwiUmVzY29wZSBzdG9yZSA6IFNldHRpbmcgZGF0YXMgaXMgZGVwcmVjaWF0ZWQsIHVzZSBkYXRhXCIpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUmVzY29wZSBzdG9yZSA6IFNldHRpbmcgZGF0YXMgaXMgZGVwcmVjaWF0ZWQsIHVzZSBkYXRhXCIsIChuZXcgRXJyb3IoKSkuc3RhY2spO1xuICAgICAgICAvL2NvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSA9IHY7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgZGF0YSBjaGFuZ2Ugc2hvdWxkIGJlIHByb3BhZyB0byB0aGUgbGlzdGVuaW5nIHN0b3JlcyAmIGNvbXBvbmVudHNcbiAgICAgKi9cbiAgICBzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yLCByLFxuICAgICAgICAgICAgY0RhdGFzICA9IHRoaXMuZGF0YTtcbiAgICAgICAgciAgICAgICAgICAgPSAhY0RhdGFzICYmIG5EYXRhcztcbiAgICAgICAgY0RhdGFzICYmIE9iamVjdC5rZXlzKGNEYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIHIgPSByIHx8IChuRGF0YXMgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV0gOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIG5EYXRhcyAmJiBPYmplY3Qua2V5cyhuRGF0YXMpLmZvckVhY2goXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGFibGUgbWV0aG9kIHRvIGtub3cgaWYgYSBzdGF0ZSBjaGFuZ2Ugc2hvdWxkIGJlIGFwcGxpZWRcbiAgICAgKi9cbiAgICBzaG91bGRBcHBseSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgISF0aGlzLmlzQ29tcGxldGUoc3RhdGUpXG4gICAgICAgICkgJiYgKGlzLmFycmF5KF9zdGF0aWMuZm9sbG93KVxuICAgICAgICAgICAgICAgID8gX3N0YXRpYy5mb2xsb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKCggciwgaSApID0+IChyIHx8IHN0YXRlICYmIHN0YXRlW2ldKSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgOiBfc3RhdGljLmZvbGxvd1xuICAgICAgICAgICAgICAgICAgPyBPYmplY3Qua2V5cyhfc3RhdGljLmZvbGxvdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBzdGF0ZSAmJiBpcy5mbihfc3RhdGljLmZvbGxvd1tpXSkgJiYgX3N0YXRpYy5mb2xsb3dbaV0uY2FsbCh0aGlzLCBzdGF0ZVtpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IF9zdGF0aWMuZm9sbG93W2ldICYmIHN0YXRlW2ldICE9PSB0aGlzLnN0YXRlW2ldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksIGZhbHNlKSA6IHRydWVcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGFibGUgYXBwbGllciAvIHJlbWFwcGVyXG4gICAgICogSWYgc3RhdGUgb3IgbGFzdFB1YmxpY1N0YXRlIGFyZSBzaW1wbGUgaGFzaCBtYXBzIGFwcGx5IHdpbGwgcmV0dXJuIHsuLi5kYXRhLCAuLi5zdGF0ZX1cbiAgICAgKiBpZiBub3QgaXQgd2lsbCByZXR1cm4gdGhlIGxhc3QgcHJpdmF0ZSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgYXBwbHkoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMucmVmaW5lIClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZmluZSguLi5hcmd1bWVudHMpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhZGF0YSB8fCBkYXRhLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmRhdGEsIC4uLnN0YXRlIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2lhdGVkXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gY2hhbmdlc1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJlZmluZSggZGF0YSwgc3RhdGUsIGNoYW5nZXMgKSB7XG4gICAgICAgIHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhLCAuLi5zdGF0ZSB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERlYm91bmNlIHRoaXMgc3RvcmUgcHJvcGFnYXRpb24gKCAmIHJlZHVjaW5nIClcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzdGFiaWxpemUoIGNiICkge1xuICAgICAgICBjYiAmJiB0aGlzLm9uY2UoJ3N0YWJsZScsIGNiKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICB0aGlzLnB1c2guYmluZChcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgKCkgPT4gey8vQHRvZG9cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFibGUgICA9IHRoaXMuX3N0YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgIXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApKTtcbiAgICB9XG4gICAgXG4gICAgcmV0cmlldmUoIHBhdGgsIGkgPSAwLCBvYmogPSB0aGlzLmRhdGEgKSB7XG4gICAgICAgIHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuICAgICAgICByZXR1cm4gIW9iaiB8fCAhcGF0aCB8fCAhcGF0aC5sZW5ndGhcbiAgICAgICAgICAgID8gb2JqXG4gICAgICAgICAgICA6IHBhdGgubGVuZ3RoID09IGkgKyAxXG4gICAgICAgICAgICAgICAgICAgPyBvYmpbcGF0aFtpXV1cbiAgICAgICAgICAgICAgICAgICA6IHRoaXMucmV0cmlldmUocGF0aCwgaSArIDEsIG9ialtwYXRoW2ldXSk7XG4gICAgfVxuICAgIFxuICAgIGRpc3BhdGNoKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG4gICAgICAgIHRoaXMuc2NvcGVPYmouZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KTtcbiAgICB9XG4gICAgXG4gICAgdHJpZ2dlciggYWN0aW9uLCAuLi5hcmd6ICkge1xuICAgICAgICBsZXQgeyBhY3Rpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgbnM7XG4gICAgICAgIGlmICggYWN0aW9ucyAmJiBhY3Rpb25zW2FjdGlvbl0gKSB7XG4gICAgICAgICAgICBucyA9IGFjdGlvbnNbYWN0aW9uXS5jYWxsKHRoaXMsIC4uLmFyZ3opO1xuICAgICAgICAgICAgbnMgJiYgdGhpcy5zZXRTdGF0ZShucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUHVsbCBzdG9yZXMgaW4gdGhlIHByaXZhdGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gc3RvcmVzICB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG4gICAgICovXG4gICAgcHVsbCggc3RvcmVzLCBkb1dhaXQsIG9yaWdpbiApIHtcbiAgICAgICAgbGV0IGluaXRpYWxPdXRwdXRzID0gdGhpcy5zY29wZU9iai5tYXAodGhpcywgc3RvcmVzKTtcbiAgICAgICAgaWYgKCBkb1dhaXQgKSB7XG4gICAgICAgICAgICB0aGlzLndhaXQoKTtcbiAgICAgICAgICAgIHN0b3Jlcy5mb3JFYWNoKCggcyApID0+IHRoaXMuc2NvcGVbc10gJiYgdGhpcy53YWl0KHRoaXMuc2NvcGVbc10pKTtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQXBwbHkgYXBwbHkvcmVtYXAgb24gdGhlIHByaXZhdGUgc3RhdGUgJiBwdXNoIHRoZSByZXN1bHRpbmcgXCJwdWJsaWNcIiBzdGF0ZSB0byBmb2xsb3dlcnNcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBwdXNoKCBkYXRhLCBmb3JjZSwgY2IgKSB7XG4gICAgICAgIGNiICAgICAgICAgICAgPSBmb3JjZSA9PT0gdHJ1ZSA/IGNiIDogZm9yY2U7XG4gICAgICAgIGZvcmNlICAgICAgICAgPSBmb3JjZSA9PT0gdHJ1ZTtcbiAgICAgICAgdmFyIGkgICAgICAgICA9IDAsXG4gICAgICAgICAgICBuZXh0U3RhdGUgPSAhZGF0YSAmJiB7IC4uLnRoaXMuc3RhdGUsIC4uLnRoaXMuX2NoYW5nZXNTVyB9IHx8IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBuZXh0RGF0YXMgPSBkYXRhIHx8IHRoaXMuYXBwbHkodGhpcy5kYXRhLCBuZXh0U3RhdGUsIHRoaXMuX2NoYW5nZXNTVyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YXRlICAgICAgPSBuZXh0U3RhdGU7XG4gICAgICAgIHRoaXMuX2NoYW5nZXNTVyA9IHt9O1xuICAgICAgICAvL2lmICggIWZvcmNlICYmXG4gICAgICAgIC8vICAgIChcbiAgICAgICAgLy8gICAgICAgICh0aGlzLmRhdGEgPT09IG5leHREYXRhcykgfHwgIXRoaXMuc2hvdWxkUHJvcGFnKG5leHREYXRhcylcbiAgICAgICAgLy8gICAgKVxuICAgICAgICAvLykge1xuICAgICAgICAvLyAgICBjYiAmJiBjYigpO1xuICAgICAgICAvLyAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5kYXRhID0gbmV4dERhdGFzO1xuICAgICAgICB0aGlzLndhaXQoKTtcbiAgICAgICAgdGhpcy5yZWxlYXNlKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc2V0U3RhdGUoIHBTdGF0ZSwgY2IsIHN5bmMgKSB7XG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICAgICBwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuICAgICAgICAgICAgICAgICkgKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLnNob3VsZEFwcGx5KHsgLi4udGhpcy5zdGF0ZSwgLi4uY2hhbmdlcyB9KSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBzeW5jICkge1xuICAgICAgICAgICAgdGhpcy5wdXNoKCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIGNoYW5nZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGNiICYmIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc2V0U3RhdGVTeW5jKCBwU3RhdGUgKSB7XG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICAgICBwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuICAgICAgICAgICAgICAgICkgKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XG4gICAgICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvdWxkQXBwbHkoeyAuLi4odGhpcy5zdGF0ZSB8fCB7fSksIC4uLmNoYW5nZXMgfSkgJiYgdGhpcy5wdXNoKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHJlcGxhY2VTdGF0ZSggcFN0YXRlLCBjYiApIHtcbiAgICAgICAgdmFyIGkgICAgICA9IDAsIG1lID0gdGhpcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHBTdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogZ2V0IGEgc3RvcmUta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICBhcyggbmFtZSApIHtcbiAgICAgICAgcmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbiAgICB9XG4gICAgXG4gICAgb24oIGxpc3RzICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcbiAgICAgICAgZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVMaXN0ZW5lciggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5yZW1vdmVMaXN0ZW5lcihrLCBsaXN0c1trXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIHJlbGluayBiaW5kaW5ncyAmIHJlcXVpcmVzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgcmVsaW5rKCBmcm9tICkge1xuICAgICAgICBsZXQgc2NvcGUgICA9IHRoaXMuc2NvcGVPYmosXG4gICAgICAgICAgICBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKCBfc3RhdGljLnVzZSApIHtcbiAgICAgICAgICAgIC8vdG9kbyB1bmxpbmtcbiAgICAgICAgICAgIHRoaXMucHVsbChfc3RhdGljLnVzZSwgZmFsc2UsIGZyb20pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX3JlcXVpcmUgKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLmZvckVhY2goXG4gICAgICAgICAgICAgICAgc3RvcmUgPT4gKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhaXQoc2NvcGUuX19zY29wZVtzdG9yZV0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBjb21wbGV0ZSAoYWxsIHJlcXVpZXJlZCBrZXlzIGFyZSBoZXJlKVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc0NvbXBsZXRlKCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF0aGlzLl9yZXF1aXJlXG4gICAgICAgICAgICB8fCAhdGhpcy5fcmVxdWlyZS5sZW5ndGhcbiAgICAgICAgICAgIHx8IHN0YXRlICYmIHRoaXMuX3JlcXVpcmUucmVkdWNlKFxuICAgICAgICAgICAgICAgICggciwga2V5ICkgPT4gKHIgJiYgc3RhdGVba2V5XSksXG4gICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBzdGFibGVcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNTdGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFibGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVuIGJpbmQgdGhpcyBzdG9yZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XG4gICAgICovXG4gICAgdW5CaW5kKCBvYmosIGtleSwgcGF0aCApIHtcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2VycyxcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJiBmb2xsb3dlcnNbaV1bMV0gPT09IGtleSAmJiBmb2xsb3dlcnNbaV1bMl0gPT09IHBhdGggKVxuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBCaW5kIHRoaXMgc3RvcmUgY2hhbmdlcyB0byB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIGJpbmQoIG9iaiwga2V5LCBzZXRJbml0aWFsID0gdHJ1ZSwgcGF0aCApIHtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goW29iaiwga2V5LCBwYXRoXSk7XG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLmRhdGEgJiYgdGhpcy5fc3RhYmxlICkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBwYXRoID8gdGhpcy5yZXRyaWV2ZShwYXRoKSA6IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBrZXkgKSBvYmouc2V0U3RhdGUoeyBba2V5XTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iaihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICB0aGVuKCBjYiApIHtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGEpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQWRkIGEgbG9jayBzbyB0aGUgc3RvcmUgd2lsbCBub3QgcHJvcGFnIGl0IHN0YXRlIHVudGlsbCByZWxlYXNlKCkgaXMgY2FsbFxuICAgICAqIEBwYXJhbSBwcmV2aW91cyB7U3RvcmV8bnVtYmVyfEFycmF5fSBAb3B0aW9uYWwgd2YgdG8gd2FpdCwgcmVsZWFzZXMgdG8gd2FpdCBvciBhcnJheSBvZiBzdHVmZiB0byB3YWl0XG4gICAgICogQHJldHVybnMge1Rhc2tGbG93fVxuICAgICAqL1xuICAgIHdhaXQoIHByZXZpb3VzICkge1xuICAgICAgICBpZiAoIHR5cGVvZiBwcmV2aW91cyA9PSBcIm51bWJlclwiIClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fbG9ja3MuYWxsICs9IHByZXZpb3VzO1xuICAgICAgICBpZiAoIGlzLmFycmF5KHByZXZpb3VzKSApXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMubWFwKHRoaXMud2FpdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwrKztcbiAgICAgICAgXG4gICAgICAgIGxldCByZWFzb24gPSBpcy5zdHJpbmcocHJldmlvdXMpID8gcHJldmlvdXMgOiBudWxsO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBwcmV2aW91cyAmJiBpcy5mbihwcmV2aW91cy50aGVuKSApIHtcbiAgICAgICAgICAgIHByZXZpb3VzLnRoZW4odGhpcy5yZWxlYXNlLmJpbmQodGhpcywgbnVsbCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWNyZWFzZSBsb2NrcyBmb3IgdGhpcyBzdG9yZSwgaWYgaXQgcmVhY2ggMCAmIGl0IGhhdmUgYSBwdWJsaWMgc3RhdGUsXG4gICAgICogaXQgd2lsbCBiZSBwcm9wYWdhdGVkIHRvIHRoZSBmb2xsb3dlcnMsXG4gICAgICogdGhlbiwgYWxsIHN0dWZmIHBhc3NlZCB0byBcInRoZW5cIiBjYWxsIGJhY2sgd2lsbCBiZSBleGVjIC8gcmVsZWFzZWRcbiAgICAgKiBAcGFyYW0gZGVzeW5jXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmVsZWFzZSggcmVhc29uLCBjYiApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBsZXQgaSAgICAgICA9IDAsIHdhc1N0YWJsZSA9IHRoaXMuX3N0YWJsZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggaXMuZm4ocmVhc29uKSApIHtcbiAgICAgICAgICAgIGNiICAgICA9IHJlYXNvbjtcbiAgICAgICAgICAgIHJlYXNvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbG9ja3NbcmVhc29uXSA9PSAwIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICBpZiAoICEtLXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5kYXRhICYmIHRoaXMuaXNDb21wbGV0ZSgpICkge1xuICAgICAgICAgICAgbGV0IHByb3BhZyAgID0gdGhpcy5zaG91bGRQcm9wYWcodGhpcy5kYXRhKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICBwcm9wYWcgJiYgdGhpcy5fcmV2Kys7Ly9cbiAgICAgICAgICAgIGlmICggcHJvcGFnICYmIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCggZm9sbG93ZXIgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gZm9sbG93ZXJbMl0gPyB0aGlzLnJldHJpZXZlKGZvbGxvd2VyWzJdKSA6IHRoaXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gPT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NiICYmIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWzBdLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmb2xsb3dlclsxXSkgPyB7IFtmb2xsb3dlclsxXV06IGRhdGEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAoKSA9PiAoISgtLWkpICYmIGNiKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL2Vsc2VcbiAgICAgICAgICAgICF3YXNTdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgcHJvcGFnICYmIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgIGNiICYmIGNiKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGNiICYmIHRoaXMudGhlbihjYik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICByZXRhaW4oIHJlYXNvbiApIHtcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsKys7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkaXNwb3NlKCByZWFzb24gKSB7XG4gICAgICAgIC8vY29uc29sZS53YXJuKFwiZGlzcG9zZVwiLCByZWFzb24sIHRoaXMuX19yZXRhaW5zKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWluc1tyZWFzb25dIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgOiBcIiArIHJlYXNvbik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMuX19yZXRhaW5zLmFsbCA9PSAwIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsLS07XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX3BlcnNpc3RlbmNlVG0gKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNICYmIGNsZWFyVGltZW91dCh0aGlzLl9kZXN0cm95VE0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiAoIXRoaXMuX19yZXRhaW5zLmFsbCAmJiB0aGlzLmRlc3Ryb3koKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcImRlc3Ryb3lcIiwgdGhpcy5fdWlkKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZW1pdCgnZGVzdHJveScsIHRoaXMpO1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJpbGl6ZXIgKVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICggZm9sbG93ZXIgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvbGxvd2VyWzBdICE9PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGZvbGxvd2VyWzBdLnN0b3JlcyApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGZvbGxvd2VyWzBdLnN0b3Jlc1tmb2xsb3dlclsxXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5fcmV2ICA9IHRoaXMucmV2O1xuICAgICAgICB0aGlzLmRlYWQgICAgICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmV2cyAgICAgICAgICAgICA9IHRoaXMuZGF0YSA9IHRoaXMuc3RhdGUgPSB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKiAgXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiAgXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqICBcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqICBcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBpcyBmcm9tICdpcydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9TY29wZSc7XG5cbi8qKlxuICogSW5oZXJpdGFibGUgUmVTY29wZSBcIkhPQ1wiIChIaWdoIE9yZGVyIENvbXBvbmVudClcbiAqXG4gKiBAY2xhc3MgQ29tcG9uZW50XG4gKiBAZGVzYyBQYXJlbnQgUmVhY3QgQ29tcG9uZW50IHdpdGggc3RvcmUgaW5qZWN0aW9uIGluIGl0cyBzdGF0ZVxuICovXG5jbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgIH1cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzICAgICAgPSB7XG4gICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9XG4gICAgXG4gICAgY29uc3RydWN0b3IoIHAsIGN0eCwgcSApIHtcbiAgICAgICAgc3VwZXIocCwgY3R4LCBxKTtcbiAgICAgICAgaWYgKCB0aGlzLmNvbnN0cnVjdG9yLnVzZSApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi5jdHgucmVzY29wZS5tYXAodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UgfHwgW10sIGZhbHNlKS8vIGRvbid0IGJpbmRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHRoaXMucmVuZGVyID0gKCkgPT4gPGRpdj5ObyBSZXNjb3BlIGhlcmUgeyBzdXBlci5uYW1lIH08L2Rpdj5cbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAoIHRoaXMuY29uc3RydWN0b3IudXNlICkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnJlc2NvcGUuYmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSwgZmFsc2UpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IudXNlXG4gICAgICAgICYmIHRoaXMuY29udGV4dC5yZXNjb3BlLnVuQmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSlcbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyggbnAsIG5jICkge1xuICAgICAgICBpZiAoIG5jLnJlc2NvcGUgIT09IHRoaXMuY29udGV4dC5yZXNjb3BlICkge1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2VcbiAgICAgICAgICAgICYmIHRoaXMuY29udGV4dC5yZXNjb3BlLnVuQmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSk7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnVzZVxuICAgICAgICAgICAgJiYgbmMucmVzY29wZS5iaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXNjb3BlOiB0aGlzLmNvbnRleHQucmVzY29wZSxcbiAgICAgICAgICAgICRzdG9yZXM6IHRoaXMuY29udGV4dC4kc3RvcmVzXG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4gfHwgPGRpdi8+XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm4gYSBSZWFjdCBcIkhPQ1wiIChIaWdoIE9yZGVyIENvbXBvbmVudCkgdGhhdCA6XG4gKiAgLSBJbmhlcml0IEJhc2VDb21wb25lbnQsXG4gKiAgLSBJbmplY3QgJiBtYWludGFpbiB0aGUgc3RvcmVzIGluIEJhc2VDb21wb25lbnQ6OnVzZSBhbmQvb3IgKHVzZSkgaW4gdGhlIGluc3RhbmNlcyBzdGF0ZS5cbiAqICAtIFByb3BhZyAoc2NvcGUpIGluIHRoZSByZXR1cm5lZCBSZWFjdCBDb21wb25lbnQgY29udGV4dFxuICpcbiAqXG4gKiBAcGFyYW0gQmFzZUNvbXBvbmVudCB7UmVhY3QuQ29tcG9uZW50fSBCYXNlIFJlYWN0IENvbXBvbmVudCAoIGRlZmF1bHQgOiBSZWFjdC5Db21wb25lbnQgKVxuICogQHBhcmFtIHNjb3BlIHtSZVNjb3BlLlNjb3BlfGZ1bmN0aW9ufSB0aGUgcHJvcGFnYXRlZCBTY29wZSB3aGVyZSB0aGUgc3RvcmVzIHdpbGwgYmUgc2VhcmNoZWRcbiAqIEBwYXJhbSB1c2Uge2FycmF5fSB0aGUgbGlzdCBvZiBzdG9yZXMgaW5qZWN0ZWQgZnJvbSB0aGUgY3VycmVudCBzY29wZVxuICogQHJldHVybnMge1JlU2NvcGVQcm92aWRlcn1cbiAqL1xuZnVuY3Rpb24gcmVTY29wZVN0YXRlKCBCYXNlQ29tcG9uZW50ID0gUmVhY3QuQ29tcG9uZW50LCBzY29wZSwgdXNlICkge1xuICAgIGlmICggaXMuYXJyYXkoQmFzZUNvbXBvbmVudCkgKSB7XG4gICAgICAgIHVzZSAgICAgICAgICAgPSBCYXNlQ29tcG9uZW50O1xuICAgICAgICBCYXNlQ29tcG9uZW50ID0gUmVhY3QuQ29tcG9uZW50O1xuICAgIH1cbiAgICBpZiAoIEJhc2VDb21wb25lbnQgaW5zdGFuY2VvZiBTY29wZSB8fCBpcy5mbihCYXNlQ29tcG9uZW50KSAmJiAhQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCApIHtcbiAgICAgICAgc2NvcGUgICAgICAgICA9IEJhc2VDb21wb25lbnQ7XG4gICAgICAgIEJhc2VDb21wb25lbnQgPSBSZWFjdC5Db21wb25lbnQ7XG4gICAgfVxuICAgIGlmICggIXVzZSAmJiBpcy5hcnJheShzY29wZSkgKSB7XG4gICAgICAgIHVzZSAgID0gc2NvcGU7XG4gICAgICAgIHNjb3BlID0gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgdXNlID0gWy4uLihCYXNlQ29tcG9uZW50LnVzZSB8fCBbXSksIC4uLih1c2UgfHwgW10pXTtcbiAgICBcbiAgICByZXR1cm4gY2xhc3MgUmVTY29wZVByb3ZpZGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgICAgIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgICAgIC4uLihCYXNlQ29tcG9uZW50LmNoaWxkQ29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGNvbnRleHRUeXBlcyAgICAgID0ge1xuICAgICAgICAgICAgLi4uKEJhc2VDb21wb25lbnQuY29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGRlZmF1bHRQcm9wcyAgICAgID0ge1xuICAgICAgICAgICAgLi4uKEJhc2VDb21wb25lbnQuZGVmYXVsdFByb3BzIHx8IHt9KSxcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3RydWN0b3IoIHAsIGN0eCwgcSApIHtcbiAgICAgICAgICAgIHN1cGVyKHAsIGN0eCwgcSk7XG4gICAgICAgICAgICB0aGlzLiRzY29wZSA9IGlzLmZuKHNjb3BlKSAmJiBzY29wZSh0aGlzKSB8fCBzY29wZSB8fCBjdHgucmVzY29wZTtcbiAgICAgICAgICAgIGlzLmZuKHNjb3BlKVxuICAgICAgICAgICAgJiYgdGhpcy4kc2NvcGUucmV0YWluKClcbiAgICAgICAgICAgIGlmICggdGhpcy4kc2NvcGUgJiYgdXNlLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlICAgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuJHNjb3BlLm1hcCh0aGlzLCB1c2UsIGZhbHNlKS8vIGRvbid0IGJpbmQgbm93IGR1ZSB0byBTU1JcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmVzID0gdGhpcy4kc2NvcGUuc3RvcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB0aGlzLnJlbmRlciA9ICgpID0+IDxkaXY+Tm8gUmVzY29wZSBoZXJlIHsgQmFzZUNvbXBvbmVudC5uYW1lIH08L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZGlzcGF0Y2goIC4uLmFyZ3ogKSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5kaXNwYXRjaCguLi5hcmd6KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgICAgICBpZiAoIHVzZS5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2NvcGUuYmluZCh0aGlzLCB1c2UsIGZhbHNlKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbE1vdW50ICYmIHN1cGVyLmNvbXBvbmVudFdpbGxNb3VudCgpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQgJiYgc3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKVxuICAgICAgICAgICAgdXNlLmxlbmd0aFxuICAgICAgICAgICAgJiYgdGhpcy4kc2NvcGUudW5CaW5kKHRoaXMsIHVzZSk7XG4gICAgICAgICAgICBpcy5mbihzY29wZSlcbiAgICAgICAgICAgICYmIHRoaXMuJHNjb3BlLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLiRzdG9yZXM7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy4kc2NvcGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoIG5wLCBuYyApIHtcbiAgICAgICAgICAgIGlmICggdXNlLmxlbmd0aCAmJiAhc2NvcGUgJiYgbmMucmVzY29wZSAhPT0gdGhpcy5jb250ZXh0LnJlc2NvcGUgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LnJlc2NvcGUudW5CaW5kKHRoaXMsIHVzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2NvcGUgID0gbmMucmVzY29wZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZXMgPSB0aGlzLiRzY29wZS5zdG9yZXM7XG4gICAgICAgICAgICAgICAgbmMucmVzY29wZS5iaW5kKHRoaXMsIHVzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICYmIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnAsIG5jKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICAgICAgbGV0IGN0eCA9IHN1cGVyLmdldENoaWxkQ29udGV4dCAmJiBzdXBlci5nZXRDaGlsZENvbnRleHQoKSB8fCB7fTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICAgIHJlc2NvcGU6IHRoaXMuJHNjb3BlLFxuICAgICAgICAgICAgICAgICRzdG9yZXM6IHRoaXMuJHNjb3BlLnN0b3Jlc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBSZWFjdCBcIkhPQ1wiIChIaWdoIE9yZGVyIENvbXBvbmVudCkgdGhhdCA6XG4gKiAgLSBJbmplY3QgJiBtYWludGFpbiB0aGUgc3RvcmVzIGxpc3RlZCBiYXNlQ29tcG9uZW50Ojp1c2UgYW5kL29yICh1c2UpIGluIHRoZSBpbnN0YW5jZXMgcHJvcHMuXG4gKiAgLSBQcm9wYWcgKHNjb3BlKSBpbiB0aGUgcmV0dXJuZWQgUmVhY3QgQ29tcG9uZW50IGNvbnRleHRcbiAqXG4gKiBAcGFyYW0gQmFzZUNvbXBvbmVudCB7UmVhY3QuQ29tcG9uZW50fSBCYXNlIFJlYWN0IENvbXBvbmVudCAoIGRlZmF1bHQgOiBSZWFjdC5Db21wb25lbnQgKVxuICogQHBhcmFtIHNjb3BlIHtSZVNjb3BlLlNjb3BlfGZ1bmN0aW9ufSB0aGUgcHJvcGFnYXRlZCBTY29wZSB3aGVyZSB0aGUgc3RvcmVzIHdpbGwgYmUgc2VhcmNoZWQgKCBkZWZhdWx0IDogdGhlIGRlZmF1bHRcbiAqICAgICBSZVNjb3BlOjpTY29wZTo6c2NvcGVzLnN0YXRpYyBzY29wZSApXG4gKiBAcGFyYW0gdXNlIHthcnJheX0gdGhlIGxpc3Qgb2Ygc3RvcmVzIHRvIGluamVjdCBmcm9tIHRoZSBjdXJyZW50IHNjb3BlXG4gKiBAcmV0dXJucyB7UmVTY29wZVByb3ZpZGVyfVxuICovXG5mdW5jdGlvbiByZVNjb3BlUHJvcHMoIEJhc2VDb21wb25lbnQsIHNjb3BlLCB1c2UgKSB7XG4gICAgaWYgKCAhdXNlICYmIGlzLmFycmF5KHNjb3BlKSApIHtcbiAgICAgICAgdXNlICAgPSBzY29wZTtcbiAgICAgICAgc2NvcGUgPSBudWxsO1xuICAgIH1cbiAgICB1c2UgPSBbLi4uKEJhc2VDb21wb25lbnQudXNlIHx8IFtdKSwgLi4uKHVzZSB8fCBbXSldO1xuICAgIHJldHVybiByZVNjb3BlU3RhdGUoY2xhc3MgUmVTY29wZVByb3BzUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBzdGF0aWMgdXNlICAgICAgICAgICAgICAgPSB1c2U7XG4gICAgICAgIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgICAgIC4uLihCYXNlQ29tcG9uZW50LmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9O1xuICAgICAgICBzdGF0aWMgY29udGV4dFR5cGVzICAgICAgPSB7XG4gICAgICAgICAgICAuLi4oQmFzZUNvbXBvbmVudC5jb250ZXh0VHlwZXMgfHwge30pLFxuICAgICAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiA8QmFzZUNvbXBvbmVudCB7IC4uLnRoaXMucHJvcHMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4udGhpcy5zdGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2g9eyB0aGlzLnByb3BzLmRpc3BhdGNoIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc3RvcmVzPXsgdGhpcy4kc3RvcmVzIH0vPlxuICAgICAgICB9XG4gICAgfSwgc2NvcGUpO1xufVxuXG5leHBvcnQge1xuICAgIENvbXBvbmVudCBhcyBkZWZhdWx0LFxuICAgIENvbXBvbmVudCxcbiAgICByZVNjb3BlUHJvcHMsXG4gICAgcmVTY29wZVByb3BzIGFzIHJlc2NvcGVQcm9wcyxcbiAgICByZVNjb3BlU3RhdGUsXG4gICAgcmVTY29wZVN0YXRlIGFzIHJlc2NvcGVTdGF0ZVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVhY3RUb29scy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJvcC10eXBlc1wiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=