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
	  reScopeState: RTools.reScopeState,
	  withScope: RTools.reScopeState
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
	
	var _class, _temp;
	
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
	
	var Scope = (_temp = _class = function (_EventEmitter) {
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
	        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	            id = _ref2.id,
	            parent = _ref2.parent,
	            state = _ref2.state,
	            data = _ref2.data,
	            name = _ref2.name,
	            incrementId = _ref2.incrementId,
	            defaultMaxListeners = _ref2.defaultMaxListeners,
	            persistenceTm = _ref2.persistenceTm,
	            autoDestroy = _ref2.autoDestroy,
	            rootEmitter = _ref2.rootEmitter;
	
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
	                this.__scope[id].retain("scoped");
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
	            var _this7 = this;
	
	            var setInitial = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	
	            var lastRevs = void 0,
	                data = void 0,
	                refKeys = void 0;
	            if (key && !is.array(key)) key = [key];
	
	            if (as === false || as === true) {
	                setInitial = as;
	                as = null;
	            }
	
	            refKeys = key.map(function (id) {
	                return is.string(id) ? id : id.name;
	            }).map(function (id) {
	                return _this7.parseRef(id);
	            });
	
	            this._followers.push([obj, key, as || undefined, lastRevs = refKeys.reduce(function (revs, ref) {
	                revs[ref.storeId] = revs[ref.storeId] || {
	                    rev: 0,
	                    refs: []
	                };
	                revs[ref.storeId].refs.push(ref);
	                return revs;
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
	            var _this8 = this;
	
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
	
	                    _this8.unBind(to, storesList);
	                    return to[unMountKey] && to[unMountKey].apply(to, arguments);
	                };
	            }
	            return storesList.reduce(function (data, id) {
	                if (!is.string(id)) id = id.name;
	                id = id.split(':'); //@todo
	                id[0] = id[0].split('.');
	                data[id[1] || id[0][id[0].length - 1]] = _this8.stores[id[0][0]] && _this8.stores[id[0][0]].retrieve && _this8.stores[id[0][0]].retrieve(id[0].splice(1));
	                return data;
	            }, {});
	        }
	    }, {
	        key: 'retrieve',
	        value: function retrieve() {
	            var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	
	            path = is.string(path) ? path.split('.') : path;
	            return path && this.stores[path[0]] && this.stores[path[0]].retrieve(path.slice(1));
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
	            var _this9 = this;
	
	            var ctx = this.__scope;
	
	            output = output || {};
	            Object.keys(ctx).forEach(function (id) {
	                if (!output.hasOwnProperty(id) && !is.fn(ctx[id]) && (!storesRevMap || storesRevMap.hasOwnProperty(id) && storesRevMap[id] === undefined || !(!storesRevMap.hasOwnProperty(id) || ctx[id]._rev <= storesRevMap[id].rev))) {
	
	                    updated = true;
	                    output[id] = _this9.data[id];
	
	                    if (storesRevMap && storesRevMap.hasOwnProperty(id)) {
	                        storesRevMap[id].rev = ctx[id]._rev;
	                        storesRevMap[id].refs.forEach(function (ref) {
	                            //console.warn("update ref ", ref.ref, this.retrieve(ref.path));
	                            output[ref.alias] = _this9.retrieve(ref.path);
	                        });
	                    } else {
	                        //console.warn("update ", id, this.data[id]);
	                        output[id] = _this9.data[id];
	                    }
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
	            var _this10 = this;
	
	            var flags_states = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /.*/;
	            var flags_data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /.*/;
	
	            var ctx = this.__scope,
	                output = { state: {}, data: {} },
	                _flags_states = void 0,
	                _flags_data = void 0;
	            if (is.array(flags_states)) flags_states.forEach(function (id) {
	                return output.state[id] = _this10.state[id];
	            });
	
	            if (is.array(flags_data)) flags_data.forEach(function (id) {
	                return output.data[id] = _this10.data[id];
	            });
	
	            if (!is.array(flags_data) && !is.array(flags_states)) Object.keys(ctx).forEach(function (id) {
	                if (is.fn(ctx[id])) return;
	
	                var flags = ctx[id].constructor.flags;
	
	                flags = is.array(flags) ? flags : [flags || ""];
	
	                if (flags.reduce(function (r, flag) {
	                    return r || flags_states.test(flag);
	                }, false)) output.state[id] = _this10.state[id];
	
	                if (flags.reduce(function (r, flag) {
	                    return r || flags_data.test(flag);
	                }, false)) output.data[id] = _this10.data[id];
	            });
	            return output;
	        }
	    }, {
	        key: 'parseRef',
	        value: function parseRef(_ref) {
	            var ref = _ref.split(':');
	            ref[0] = ref[0].split('.');
	            return {
	                storeId: ref[0][0],
	                path: ref[0],
	                alias: ref[1] || ref[0][ref[0].length - 1],
	                ref: _ref
	            };
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(action, data) {
	            var _this11 = this;
	
	            Object.keys(this.__scope).forEach(function (id) {
	                if (!is.fn(_this11.__scope[id])) _this11.__scope[id].trigger(action, data);
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
	            var _this12 = this;
	
	            if (this._stable) return cb(null, this.data);
	            this.once('stable', function (e) {
	                return cb(null, _this12.data);
	            });
	        }
	    }, {
	        key: 'restore',
	        value: function restore(_ref3, quiet) {
	            var state = _ref3.state,
	                data = _ref3.data;
	
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
	            var _this13 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            stores.forEach(function (id) {
	                return _this13.stores[id] && _this13.stores[id].retain && _this13.stores[id].retain(reason);
	            });
	        }
	    }, {
	        key: 'disposeStores',
	        value: function disposeStores() {
	            var _this14 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            stores.forEach(function (id) {
	                return _this14.stores[id] && _this14.stores[id].dispose && _this14.stores[id].dispose(reason);
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
	            var _this15 = this;
	
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
	                    _this15._stabilizerTM = null;
	                    if (_this15.__locks.all) return;
	
	                    _this15._propagTM && clearTimeout(_this15._propagTM);
	
	                    _this15._stable = true;
	                    _this15.emit("stable", _this15);
	
	                    !_this15.dead && _this15._propag(); // stability can induce destroy
	                });
	            }
	        }
	    }, {
	        key: 'propag',
	        value: function propag() {
	            var _this16 = this;
	
	            this._propagTM && clearTimeout(this._propagTM);
	            this._propagTM = setTimeout(function (e) {
	                _this16._propagTM = null;
	                _this16._propag();
	            }, 2);
	        }
	    }, {
	        key: '_propag',
	        value: function _propag() {
	            var _this17 = this;
	
	            if (this._followers.length) this._followers.forEach(function (_ref4) {
	                var obj = _ref4[0],
	                    key = _ref4[1],
	                    as = _ref4[2],
	                    lastRevs = _ref4[3],
	                    remaps = _ref4[3];
	
	                var data = _this17.getUpdates(lastRevs);
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
	            var _this18 = this;
	
	            this._childScopes.push(ctx);
	            var lists = {
	                'stable': function stable(s) {
	                    _this18._unStableChilds--;
	                    if (!_this18._unStableChilds) _this18.emit("stableTree", _this18);
	                },
	                'unstable': function unstable(s) {
	                    _this18._unStableChilds++;
	                    if (1 == _this18._unStableChilds) _this18.emit("unstableTree", _this18);
	                },
	                'stableTree': function stableTree(s) {
	                    _this18._unStableChilds--;
	                    if (!_this18._unStableChilds) _this18.emit("stableTree", _this18);
	                },
	                'unstableTree': function unstableTree(s) {
	                    _this18._unStableChilds++;
	                    if (1 == _this18._unStableChilds) _this18.emit("unstableTree", _this18);
	                },
	                'destroy': function destroy(ctx) {
	                    if (ctx._unStableChilds) _this18._unStableChilds--;
	                    if (!ctx.isStable()) _this18._unStableChilds--;
	
	                    if (!_this18._unStableChilds) _this18.emit("stableTree", _this18);
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
	            var _this19 = this;
	
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
	                        _this19.then(function (s) {
	                            !_this19.__retains.all && _this19.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this19.__retains.all && _this19.destroy();
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
	            var _this20 = this;
	
	            var ctx = this.__scope;
	            //console.warn("destroy", this._id);
	            this.dead = true;
	            this.emit("destroy", this);
	            Object.keys(this.__listening).forEach(function (id) {
	                return _this20.__scope[id].removeListener(_this20.__listening[id]);
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
	            for (var key in ctx) {
	                if (!is.fn(ctx[key])) {
	                    //if ( ctx[key].scopeObj === this )
	                    ctx[key].dispose("scoped");
	
	                    //ctx[key] = ctx[key].constructor;
	                }
	            }this.__mixed = this.data = this.state = this.scope = this.stores = null;
	            this._data = this._state = this._stores = null;
	        }
	    }, {
	        key: 'datas',
	        get: function get() {
	            return this.data;
	        }
	    }]);
	
	    return Scope;
	}(EventEmitter), _class.persistenceTm = 1, _class.Store = null, _class.scopes = openScopes, _temp);
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
	
	var _class, _temp;
	
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
	var Store = (_temp = _class = function (_EventEmitter) {
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
	
	            return true;
	        }
	    }, {
	        key: 'hasDataChange',
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
	            if (!force && !this.hasDataChange(nextDatas)) {
	                cb && cb();
	                return false;
	            }
	
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
	}(EventEmitter), _class.use = [], _class.staticScope = new Scope({}, { id: "static" }), _class.state = undefined, _class.persistenceTm = false, _temp);
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
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _class, _temp; /*
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
	var Component = (_temp = _class = function (_React$Component) {
	    _inherits(Component, _React$Component);
	
	    function Component(p, ctx, q) {
	        _classCallCheck(this, Component);
	
	        var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, p, ctx, q));
	
	        var scope = p.__scope || ctx.rescope;
	        _this.$scope = scope;
	        _this.$stores = _this.$scope && _this.$scope.stores;
	        if (_this.constructor.use) {
	            _this.state = _extends({}, _this.state, scope.map(_this, _this.constructor.use || [], false));
	        } else if (!_this.$scope) _this.render = function () {
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
	        key: 'dispatch',
	        value: function dispatch() {
	            var _$scope;
	
	            this.$scope && (_$scope = this.$scope).dispatch.apply(_$scope, arguments);
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            if (this.constructor.use) {
	                this.$scope.bind(this, this.constructor.use || [], false);
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.constructor.use && this.$scope.unBind(this, this.constructor.use || []);
	            this.$scope = null;
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(np, nc) {
	            var nScope = np.__scope || nc.rescope || this.$scope;
	
	            if (nScope != this.$scope) {
	                this.constructor.use && this.$scope.unBind(this, this.constructor.use);
	                this.$scope = nScope;
	                this.$stores = this.$scope.stores;
	                this.constructor.use && nScope.bind(this, this.constructor.use);
	            }
	        }
	    }, {
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                rescope: this.$scope || this.context.rescope,
	                $stores: this.$scope.stores || this.context.$stores
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return this.props.children || _react2.default.createElement('div', null);
	        }
	    }]);
	
	    return Component;
	}(_react2.default.Component), _class.childContextTypes = {
	    rescope: _propTypes2.default.object,
	    $stores: _propTypes2.default.object
	}, _class.contextTypes = {
	    rescope: _propTypes2.default.object,
	    $stores: _propTypes2.default.object
	}, _temp);
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
	    var _class2, _temp2;
	
	    for (var _len = arguments.length, argz = Array(_len), _key = 0; _key < _len; _key++) {
	        argz[_key] = arguments[_key];
	    }
	
	    var BaseComponent = argz[0],
	        scope = argz[1],
	        use = argz[2];
	
	
	    if (!(BaseComponent && BaseComponent.prototype && BaseComponent.prototype.isReactComponent)) {
	        return function (BaseComponent) {
	            return reScopeState.apply(undefined, [BaseComponent].concat(argz));
	        };
	    }
	
	    if (!use && _is2.default.array(scope)) {
	        use = scope;
	        scope = null;
	    }
	
	    use = [].concat(_toConsumableArray(BaseComponent.use || []), _toConsumableArray(use || []));
	
	    var ReScopeProvider = (_temp2 = _class2 = function (_BaseComponent) {
	        _inherits(ReScopeProvider, _BaseComponent);
	
	        function ReScopeProvider(p, ctx, q) {
	            _classCallCheck(this, ReScopeProvider);
	
	            var _this2 = _possibleConstructorReturn(this, (ReScopeProvider.__proto__ || Object.getPrototypeOf(ReScopeProvider)).call(this, p, ctx, q));
	
	            _this2.$scope = p.__scope || _is2.default.fn(scope) && scope(_this2, p, ctx) || scope || ctx.rescope;
	
	            _is2.default.fn(scope) && _this2.$scope.retain();
	
	            _this2.$stores = _this2.$scope && _this2.$scope.stores;
	            if (_this2.$scope && use.length) {
	                _this2.state = _extends({}, _this2.state, _this2.$scope.map(_this2, use, false));
	            } else if (!_this2.$scope) _this2.render = function () {
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
	            key: '$dispatch',
	            value: function $dispatch() {
	                var _$scope2;
	
	                (_$scope2 = this.$scope).dispatch.apply(_$scope2, arguments);
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
	                var nScope = np.__scope || scope && this.$scope || nc.rescope || this.$scope;
	
	                if (nScope != this.$scope) {
	                    use.length && this.$scope.unBind(this, use);
	                    this.$scope = nScope;
	                    this.$stores = this.$scope.stores;
	                    use.length && nScope.bind(this, use);
	                }
	                _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillReceiveProps', this) && _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillReceiveProps', this).call(this, np, nc);
	            }
	        }, {
	            key: 'getChildContext',
	            value: function getChildContext() {
	                var ctx = _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'getChildContext', this) && _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'getChildContext', this).call(this) || {};
	                return _extends({}, ctx, {
	                    rescope: this.$scope || this.context.rescope,
	                    $stores: this.$scope.stores || this.context.$stores
	                });
	            }
	        }]);
	
	        return ReScopeProvider;
	    }(BaseComponent), _class2.childContextTypes = _extends({}, BaseComponent.childContextTypes || {}, {
	        rescope: _propTypes2.default.object,
	        $stores: _propTypes2.default.object
	    }), _class2.contextTypes = _extends({}, BaseComponent.contextTypes || {}, {
	        rescope: _propTypes2.default.object,
	        $stores: _propTypes2.default.object
	    }), _class2.defaultProps = _extends({}, BaseComponent.defaultProps || {}), _class2.displayName = "stateScoped(" + (BaseComponent.displayName || BaseComponent.name) + ")", _temp2);
	
	
	    return ReScopeProvider;
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
	function reScopeProps() {
	    var _class3, _temp3;
	
	    for (var _len2 = arguments.length, argz = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        argz[_key2] = arguments[_key2];
	    }
	
	    var BaseComponent = argz[0],
	        scope = argz[1],
	        use = argz[2];
	
	
	    if (!(BaseComponent && BaseComponent.prototype && BaseComponent.prototype.isReactComponent)) {
	        return function (BaseComponent) {
	            return reScopeProps.apply(undefined, [BaseComponent].concat(argz));
	        };
	    }
	    if (!use && _is2.default.array(scope)) {
	        use = scope;
	        scope = null;
	    }
	
	    use = [].concat(_toConsumableArray(BaseComponent.use || []), _toConsumableArray(use || []));
	
	    return reScopeState((_temp3 = _class3 = function (_React$Component2) {
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
	                var _this4 = this;
	
	                return _react2.default.createElement(BaseComponent, _extends({}, this.props, this.state, {
	                    $dispatch: function $dispatch() {
	                        return _this4.$dispatch.apply(_this4, arguments);
	                    },
	                    $stores: this.$stores }));
	            }
	        }]);
	
	        return ReScopePropsProvider;
	    }(_react2.default.Component), _class3.childContextTypes = _extends({}, BaseComponent.contextTypes || {}, {
	        rescope: _propTypes2.default.object,
	        $stores: _propTypes2.default.object
	    }), _class3.contextTypes = _extends({}, BaseComponent.contextTypes || {}, {
	        rescope: _propTypes2.default.object,
	        $stores: _propTypes2.default.object
	    }), _class3.displayName = "propsScoped(" + (BaseComponent.displayName || BaseComponent.name) + ")", _temp3), scope, use);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmUwZTQwODQxZTA0YzhjMjhhMzciLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlU2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Njb3BlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhY3RUb29scy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiJdLCJuYW1lcyI6WyJSVG9vbHMiLCJTdG9yZSIsIkNvbnRleHQiLCJTY29wZSIsIkNvbXBvbmVudCIsInJlU2NvcGVQcm9wcyIsInJlU2NvcGVTdGF0ZSIsIndpdGhTY29wZSIsImlzIiwicmVxdWlyZSIsIkV2ZW50RW1pdHRlciIsInNob3J0aWQiLCJfX3Byb3RvX19wdXNoIiwidGFyZ2V0IiwiaWQiLCJwYXJlbnQiLCJmbiIsInByb3RvdHlwZSIsIm9wZW5TY29wZXMiLCJzY29wZXMiLCJza2V5IiwiYXJyYXkiLCJzb3J0IiwiYSIsImIiLCJmaXJzdG5hbWUiLCJqb2luIiwic3RvcmVzTWFwIiwic3RhdGUiLCJkYXRhIiwibmFtZSIsImluY3JlbWVudElkIiwiZGVmYXVsdE1heExpc3RlbmVycyIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsInJvb3RFbWl0dGVyIiwiX21heExpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwiZ2VuZXJhdGUiLCJfaWQiLCJyZWdpc3RlciIsImkiLCJfaXNMb2NhbElkIiwiX3BlcnNpc3RlbmNlVG0iLCJzdG9yZXMiLCJkZWFkIiwiRXJyb3IiLCJzb3VyY2VzIiwiX2NoaWxkU2NvcGVzIiwiX2NoaWxkU2NvcGVzTGlzdCIsIl91blN0YWJsZUNoaWxkcyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfX2xpc3RlbmluZyIsIl9fc2NvcGUiLCJfX21peGVkIiwiX19taXhlZExpc3QiLCJfZm9sbG93ZXJzIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9fcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwiX2FkZENoaWxkIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJzdG9yZXNMaXN0IiwiZm9yRWFjaCIsIl9tb3VudCIsImsiLCJhcmd1bWVudHMiLCJzdG9yZSIsInJlZHVjZSIsIm1vdW50ZWQiLCJjdHgiLCJ1bmRlZmluZWQiLCJzZXRTdGF0ZSIsInB1c2giLCJfd2F0Y2hTdG9yZSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJyZWxpbmsiLCJPYmplY3QiLCJrZXlzIiwic2luZ2xldG9uIiwic3JjQ3R4IiwiZXh0ZXJuYWwiLCJmb3JjZSIsImxjdHgiLCJfc3RvcmVzIiwiY29uc29sZSIsImluZm8iLCJfX3Byb3RvX18iLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIl9zdGF0ZSIsInNldCIsInYiLCJfZGF0YSIsIm9iaiIsImtleSIsImFzIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmVmS2V5cyIsIm1hcCIsInN0cmluZyIsInBhcnNlUmVmIiwicmV2cyIsInJlZiIsInN0b3JlSWQiLCJyZXYiLCJyZWZzIiwibW91bnQiLCJnZXRVcGRhdGVzIiwiZm9sbG93ZXJzIiwibGVuZ3RoIiwic3BsaWNlIiwidG8iLCJiaW5kIiwibWl4ZWRDV1VubW91bnQiLCJ1bk1vdW50S2V5IiwiaXNSZWFjdENvbXBvbmVudCIsImhhc093blByb3BlcnR5IiwidW5CaW5kIiwic3BsaXQiLCJyZXRyaWV2ZSIsInBhdGgiLCJzbGljZSIsInN0b3Jlc1Jldk1hcCIsImxvY2FsIiwiX3JldiIsInVwZGF0ZWQiLCJnZXRTdG9yZXNSZXZzIiwib3V0cHV0IiwiYWxpYXMiLCJmbGFnc19zdGF0ZXMiLCJmbGFnc19kYXRhIiwiX2ZsYWdzX3N0YXRlcyIsIl9mbGFnc19kYXRhIiwiZmxhZ3MiLCJyIiwiZmxhZyIsInRlc3QiLCJfcmVmIiwiYWN0aW9uIiwidHJpZ2dlciIsImRpc3BhdGNoIiwiY2IiLCJvbmNlIiwicXVpZXQiLCJyZWFzb24iLCJlbWl0IiwiZXJyb3IiLCJfc3RhYmlsaXplclRNIiwiY2xlYXJUaW1lb3V0IiwiX3Byb3BhZ1RNIiwicmVtYXBzIiwid2FzU3RhYmxlIiwiaW5kZXhPZiIsInVuIiwiX2Rlc3Ryb3lUTSIsInRoZW4iLCJkZXN0cm95IiwicmVtb3ZlTGlzdGVuZXIiLCJzaGlmdCIsIl9ybUNoaWxkIiwic2NvcGUiLCJFbWl0dGVyIiwiX2V2ZW50cyIsImV2dCIsImFyZ3oiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwiX3N0YXRpYyIsImdldFNjb3BlIiwic3RhdGljU2NvcGUiLCJjZmciLCJ3YXRjaHMiLCJ1c2UiLCJhcHBseSIsImluaXRpYWxTdGF0ZSIsImFwcGxpZWQiLCJfdWlkIiwiX29uU3RhYmlsaXplIiwid2FybiIsInNjb3BlT2JqIiwiX3JldnMiLCJfcmVxdWlyZSIsIl91c2UiLCJtYXRjaCIsInJlZjIiLCJzaG91bGRBcHBseSIsIm1hbmFnZWQiLCJuRGF0YXMiLCJjRGF0YXMiLCJpc0NvbXBsZXRlIiwiZm9sbG93IiwiY2FsbCIsImNoYW5nZXMiLCJyZWZpbmUiLCJfc3RhYmlsaXplciIsInN0YWJsZSIsImFjdGlvbnMiLCJucyIsImRvV2FpdCIsIm9yaWdpbiIsImluaXRpYWxPdXRwdXRzIiwicyIsIm5leHRTdGF0ZSIsIl9jaGFuZ2VzU1ciLCJuZXh0RGF0YXMiLCJoYXNEYXRhQ2hhbmdlIiwicFN0YXRlIiwic3luYyIsImNoYW5nZSIsInN0YWJpbGl6ZSIsIm1lIiwiZnJvbSIsInB1bGwiLCJwcmV2aW91cyIsInNob3VsZFByb3BhZyIsImZvbGxvd2VyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiY29tcG9uZW50IiwidGFyZ2V0UmV2cyIsInRhcmdldFNjb3BlIiwiZmlsdGVyIiwiZGVmYXVsdE5hbWUiLCJwIiwicSIsInJlc2NvcGUiLCIkc2NvcGUiLCIkc3RvcmVzIiwicmVuZGVyIiwibnAiLCJuYyIsIm5TY29wZSIsImNvbnRleHQiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJvYmplY3QiLCJjb250ZXh0VHlwZXMiLCJCYXNlQ29tcG9uZW50IiwiUmVTY29wZVByb3ZpZGVyIiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiLCIkZGlzcGF0Y2giLCJkZWZhdWx0IiwicmVzY29wZVByb3BzIiwicmVzY29wZVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1hBOzs7O0FBQ0E7Ozs7QUFDQTs7S0FBd0JBLE07Ozs7OztBQUV4QixpQkFBTUMsS0FBTixtQixDQS9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQWdDZTtBQUNYQSx5QkFEVztBQUVYQywyQkFGVztBQUdYQyx5QkFIVztBQUlYQyxjQUFjSixPQUFPSSxTQUpWO0FBS1hDLGlCQUFjTCxPQUFPSyxZQUxWO0FBTVhDLGlCQUFjTixPQUFPTSxZQU5WO0FBT1hDLGNBQWNQLE9BQU9NO0FBUFYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkEsS0FBSUUsS0FBa0IsbUJBQUFDLENBQVEsQ0FBUixDQUF0QjtBQUFBLEtBQ0lDLGVBQWtCLG1CQUFBRCxDQUFRLENBQVIsQ0FEdEI7QUFBQSxLQUVJRSxVQUFrQixtQkFBQUYsQ0FBUSxDQUFSLENBRnRC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RUF1QkdZLEdBdkJILENBQVA7QUF3Qkg7O1NBR2dCc0UsTyxHQUFiMVAsUztTQUNBQSxTLEdBQUFBLFM7U0FDQUMsWSxHQUFBQSxZO1NBQ2dCMFAsWSxHQUFoQjFQLFk7U0FDQUMsWSxHQUFBQSxZO1NBQ2dCMFAsWSxHQUFoQjFQLFk7Ozs7OztBQ3ZSSixtQzs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoiZGlzdC9SZVNjb3BlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDJlMGU0MDg0MWUwNGM4YzI4YTM3IiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5pbXBvcnQgU2NvcGUgZnJvbSBcIi4vU2NvcGVcIjtcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi9TdG9yZVwiO1xuaW1wb3J0IFJlYWN0VG9vbHMsICogYXMgUlRvb2xzIGZyb20gXCIuL1JlYWN0VG9vbHNcIjtcblxuU2NvcGUuU3RvcmUgPSBTdG9yZTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBTdG9yZSxcbiAgICBDb250ZXh0ICAgICA6IFNjb3BlLFxuICAgIFNjb3BlLFxuICAgIENvbXBvbmVudCAgIDogUlRvb2xzLkNvbXBvbmVudCxcbiAgICByZVNjb3BlUHJvcHM6IFJUb29scy5yZVNjb3BlUHJvcHMsXG4gICAgcmVTY29wZVN0YXRlOiBSVG9vbHMucmVTY29wZVN0YXRlLFxuICAgIHdpdGhTY29wZSAgIDogUlRvb2xzLnJlU2NvcGVTdGF0ZVxufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlU2NvcGUuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cblxudmFyIGlzICAgICAgICAgICAgICA9IHJlcXVpcmUoJ2lzJyksXG4gICAgRXZlbnRFbWl0dGVyICAgID0gcmVxdWlyZSgnLi9FbWl0dGVyJyksXG4gICAgc2hvcnRpZCAgICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpXG4gICAgLCBfX3Byb3RvX19wdXNoID0gKCB0YXJnZXQsIGlkLCBwYXJlbnQgKSA9PiB7XG4gICAgICAgIGxldCBmbiAgICAgICAgICAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIH07XG4gICAgICAgIGZuLnByb3RvdHlwZSAgICAgPSBwYXJlbnQgPyBuZXcgcGFyZW50W1wiX1wiICsgaWRdKCkgOiB0YXJnZXRbaWRdIHx8IHt9O1xuICAgICAgICB0YXJnZXRbaWRdICAgICAgID0gbmV3IGZuKCk7XG4gICAgICAgIHRhcmdldFsnXycgKyBpZF0gPSBmbjtcbiAgICB9LFxuICAgIG9wZW5TY29wZXMgICAgICA9IHt9XG47XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gMTsvLyBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3kgd2hlbiBkaXNwb3NlIHJlYWNoIDBcbiAgICBzdGF0aWMgU3RvcmUgICAgICAgICA9IG51bGw7XG4gICAgc3RhdGljIHNjb3BlcyAgICAgICAgPSBvcGVuU2NvcGVzOy8vIGFsbCBhY3RpdmUgc2NvcGVzXG4gICAgXG4gICAgc3RhdGljIGdldFNjb3BlKCBzY29wZXMgKSB7XG4gICAgICAgIGxldCBza2V5ID0gaXMuYXJyYXkoc2NvcGVzKSA/IHNjb3Blcy5zb3J0KCggYSwgYiApID0+IHtcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPCBiLmZpcnN0bmFtZSApIHJldHVybiAtMTtcbiAgICAgICAgICAgIGlmICggYS5maXJzdG5hbWUgPiBiLmZpcnN0bmFtZSApIHJldHVybiAxO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pLmpvaW4oJzo6JykgOiBzY29wZXM7XG4gICAgICAgIHJldHVybiBvcGVuU2NvcGVzW3NrZXldID0gb3BlblNjb3Blc1tza2V5XSB8fCBuZXcgU2NvcGUoe30sIHsgaWQ6IHNrZXkgfSk7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBJbml0IGEgUmVzY29wZSBzY29wZVxuICAgICAqXG4gICAgICogQHBhcmFtIHN0b3Jlc01hcCB7T2JqZWN0fSBPYmplY3Qgd2l0aCB0aGUgb3JpZ2luIHN0b3Jlc1xuICAgICAqIEBwYXJhbSBpZCB7c3RyaW5nfSBAb3B0aW9uYWwgaWQgKCBpZiB0aGlzIGlkIGV4aXN0IHN0b3Jlc01hcCB3aWxsIGJlIG1lcmdlIG9uIHRoZSAnaWQnIHNjb3BlKVxuICAgICAqIEBwYXJhbSBwYXJlbnRcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIGRlZmF1bHRNYXhMaXN0ZW5lcnNcbiAgICAgKiBAcGFyYW0gcGVyc2lzdGVuY2VUbSB7bnVtYmVyKSBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3kgd2hlbiBkaXNwb3NlIHJlYWNoIDBcbiAgICAgKiBAcGFyYW0gYXV0b0Rlc3Ryb3kgIHtib29sfSB3aWxsIHRyaWdnZXIgcmV0YWluICYgZGlzcG9zZSBhZnRlciBzdGFydFxuICAgICAqIEByZXR1cm5zIHtTY29wZX1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvciggc3RvcmVzTWFwLCB7IGlkLCBwYXJlbnQsIHN0YXRlLCBkYXRhLCBuYW1lLCBpbmNyZW1lbnRJZCwgZGVmYXVsdE1heExpc3RlbmVycywgcGVyc2lzdGVuY2VUbSwgYXV0b0Rlc3Ryb3ksIHJvb3RFbWl0dGVyIH0gPSB7fSApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX21heExpc3RlbmVycyA9IGRlZmF1bHRNYXhMaXN0ZW5lcnMgfHwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgICAgICBpZCAgICAgICAgICAgICAgICAgPSBpZCB8fCAoXCJfX19fX1wiICsgc2hvcnRpZC5nZW5lcmF0ZSgpKTtcbiAgICAgICAgaWYgKCBvcGVuU2NvcGVzW2lkXSAmJiAhaW5jcmVtZW50SWQgKSB7XG4gICAgICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICAgICAgb3BlblNjb3Blc1tpZF0ucmVnaXN0ZXIoc3RvcmVzTWFwKTtcbiAgICAgICAgICAgIHJldHVybiBvcGVuU2NvcGVzW2lkXVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBvcGVuU2NvcGVzW2lkXSAmJiBpbmNyZW1lbnRJZCApIHtcbiAgICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgICB3aGlsZSAoIG9wZW5TY29wZXNbaWQgKyAnLycgKyAoKytpKV0gKSA7XG4gICAgICAgICAgICBpZCA9IGlkICsgJy8nICsgaTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5faWQgICAgICAgICAgICA9IGlkO1xuICAgICAgICBvcGVuU2NvcGVzW2lkXSAgICAgID0gdGhpcztcbiAgICAgICAgdGhpcy5faXNMb2NhbElkICAgICA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBwZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RvcmVzID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgID0ge307XG4gICAgICAgIHRoaXMuZGF0YSAgID0ge307XG4gICAgICAgIFxuICAgICAgICBpZiAoIHBhcmVudCAmJiBwYXJlbnQuZGVhZCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCB1c2UgYSBkZWFkIHNjb3BlIGFzIHBhcmVudCAhXCIpO1xuICAgICAgICBcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJywgcGFyZW50KTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5zb3VyY2VzICAgICAgICAgID0gW107XG4gICAgICAgIHRoaXMuX2NoaWxkU2NvcGVzICAgICA9IFtdO1xuICAgICAgICB0aGlzLl9jaGlsZFNjb3Blc0xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5fdW5TdGFibGVDaGlsZHMgID0gMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zICAgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9fbG9ja3MgICAgID0geyBhbGw6IDEgfTtcbiAgICAgICAgdGhpcy5fX2xpc3RlbmluZyA9IHt9O1xuICAgICAgICB0aGlzLl9fc2NvcGUgICAgID0ge307XG4gICAgICAgIHRoaXMuX19taXhlZCAgICAgPSBbXTtcbiAgICAgICAgdGhpcy5fX21peGVkTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgID0gW107XG4gICAgICAgIGlmICggcGFyZW50ICkge1xuICAgICAgICAgICAgcGFyZW50LnJldGFpbihcImlzTXlQYXJlbnRcIik7XG4gICAgICAgICAgICBpZiAoICFyb290RW1pdHRlciApIHtcbiAgICAgICAgICAgICAgICAhcGFyZW50Ll9zdGFibGUgJiYgdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKTtcbiAgICAgICAgICAgICAgICBwYXJlbnQub24odGhpcy5fX3BhcmVudExpc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKFwid2FpdGluZ1BhcmVudFwiKSxcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpLFxuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQub24odGhpcy5fX3BhcmVudExpc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0aGlzLnJlZ2lzdGVyKHBhcmVudC5fX3Njb3BlLCBzdGF0ZSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHN0b3Jlc01hcCwgc3RhdGUsIGRhdGEpO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9ICF0aGlzLl9fbG9ja3MuYWxsO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICBwYXJlbnQuX2FkZENoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggYXV0b0Rlc3Ryb3kgKVxuICAgICAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICB0bSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0YWluKFwiYXV0b0Rlc3Ryb3lcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZShcImF1dG9EZXN0cm95XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXQgZGF0YXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqXG4gICAgICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0LCBpbiB0aGlzIHNjb3BlIG9yIGluIGl0cyBwYXJlbnRzIG9yIG1peGVkIHNjb3Blc1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0b3Jlc0xpc3Qge3N0cmluZ3xzdG9yZVJlZn0gU3RvcmUgbmFtZSwgQXJyYXkgb2YgU3RvcmUgbmFtZXMsIG9yIFJlc2NvcGUgc3RvcmUgcmVmIGZyb20gU3RvcmU6OmFzIG9yXG4gICAgICogICAgIFN0b3JlOmFzXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7U2NvcGV9XG4gICAgICovXG4gICAgbW91bnQoIHN0b3Jlc0xpc3QsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICBpZiAoIGlzLmFycmF5KHN0b3Jlc0xpc3QpICkge1xuICAgICAgICAgICAgc3RvcmVzTGlzdC5mb3JFYWNoKGsgPT4gdGhpcy5fbW91bnQoaywgc3RhdGUgJiYgc3RhdGVba10sIGRhdGEgJiYgZGF0YVtrXSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbW91bnQoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgX21vdW50KCBpZCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIGlkICE9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoeyBbaWQubmFtZV06IGlkLnN0b3JlIH0pO1xuICAgICAgICAgICAgaWQgPSBpZC5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fc2NvcGVbaWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbWl4ZWQucmVkdWNlKCggbW91bnRlZCwgY3R4ICkgPT4gKG1vdW50ZWQgfHwgY3R4Ll9tb3VudChpZCwgc3RhdGUsIGRhdGEpKSwgZmFsc2UpIHx8XG4gICAgICAgICAgICAgICAgIXRoaXMucGFyZW50IClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuX21vdW50KC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0b3JlID0gdGhpcy5fX3Njb3BlW2lkXSwgY3R4O1xuICAgICAgICBpZiAoIGlzLmZuKHN0b3JlKSApIHtcbiAgICAgICAgICAgIHRoaXMuX19zY29wZVtpZF0gPSBuZXcgc3RvcmUodGhpcywgeyBzdGF0ZSwgZGF0YSB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBkYXRhID09PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIHN0b3JlLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICBzdG9yZS5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgc3RvcmUucHVzaChkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuX19zY29wZVtpZF07XG4gICAgfVxuICAgIFxuICAgIF93YXRjaFN0b3JlKCBpZCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGlmICggIXRoaXMuX19zY29wZVtpZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX3dhdGNoU3RvcmUoaWQsIHN0YXRlLCBkYXRhKSksIGZhbHNlKSB8fFxuICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Ll93YXRjaFN0b3JlKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAhdGhpcy5fX2xpc3RlbmluZ1tpZF0gJiYgIWlzLmZuKHRoaXMuX19zY29wZVtpZF0pICkge1xuICAgICAgICAgICAgdGhpcy5fX3Njb3BlW2lkXS5yZXRhaW4oXCJzY29wZWRcIik7XG4gICAgICAgICAgICAhdGhpcy5fX3Njb3BlW2lkXS5pc1N0YWJsZSgpICYmIHRoaXMud2FpdChpZCk7XG4gICAgICAgICAgICB0aGlzLl9fc2NvcGVbaWRdLm9uKFxuICAgICAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdbaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAnZGVzdHJveScgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fbGlzdGVuaW5nW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19zY29wZVtpZF0gPSB0aGlzLl9fc2NvcGVbaWRdLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMucHJvcGFnKCksXG4gICAgICAgICAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKGlkKSxcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoaWQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1peCB0YXJnZXRDdHggb24gdGhpcyBzY29wZVxuICAgICAqIE1peGVkIHNjb3BlIHBhcmVudHMgYXJlIE5PVCBtYXBwZWRcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q3R4XG4gICAgICovXG4gICAgbWl4aW4oIHRhcmdldEN0eCApIHtcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50LCBsaXN0cztcbiAgICAgICAgdGhpcy5fX21peGVkLnB1c2godGFyZ2V0Q3R4KVxuICAgICAgICB0YXJnZXRDdHgucmV0YWluKFwibWl4ZWRUb1wiKTtcbiAgICAgICAgaWYgKCAhdGFyZ2V0Q3R4Ll9zdGFibGUgKVxuICAgICAgICAgICAgdGhpcy53YWl0KHRhcmdldEN0eC5faWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX21peGVkTGlzdC5wdXNoKGxpc3RzID0ge1xuICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UodGFyZ2V0Q3R4Ll9pZCksXG4gICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKSxcbiAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0b3JlcyA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlICA9IHt9O1xuICAgICAgICB0aGlzLmRhdGEgICA9IHt9O1xuICAgICAgICB0YXJnZXRDdHgub24obGlzdHMpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZWxpbmsodGhpcy5fX3Njb3BlLCB0aGlzLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX19taXhlZC5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnKTtcbiAgICAgICAgICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScpO1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnKTtcbiAgICAgICAgICAgICAgICBjdHgucmVsaW5rKGN0eC5fX3Njb3BlLCB0aGlzLCB0cnVlLCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIHN0b3JlcyBpbiBzdG9yZXNNYXAgJiBsaW5rIHRoZW0gaW4gdGhlIHByb3Rvc1xuICAgICAqIEBwYXJhbSBzdG9yZXNNYXBcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHJlZ2lzdGVyKCBzdG9yZXNNYXAsIHN0YXRlID0ge30sIGRhdGEgPSB7fSApIHtcbiAgICAgICAgdGhpcy5yZWxpbmsoc3RvcmVzTWFwLCB0aGlzLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICBPYmplY3Qua2V5cyhzdG9yZXNNYXApLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBzdG9yZXNNYXBbaWRdLnNpbmdsZXRvbiB8fCAoaXMuZm4oc3RvcmVzTWFwW2lkXSkgJiYgKHN0YXRlW2lkXSB8fCBkYXRhW2lkXSkpICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VudChpZCwgc3RhdGVbaWRdLCBkYXRhW2lkXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlW2lkXSB8fCBkYXRhW2lkXSApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBkYXRhW2lkXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggc3RhdGVbaWRdIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1tpZF0uc3RhdGUgPSBzdGF0ZVtpZF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1tpZF0ucHVzaChkYXRhW2lkXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlW2lkXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzW2lkXS5zZXRTdGF0ZShzdGF0ZVtpZF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl93YXRjaFN0b3JlKGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1hcCBzcmNDdHggc3RvcmUncyBvbiB0YXJnZXRDdHggaGVhZGVycyBwcm90bydzXG4gICAgICogQHBhcmFtIHNyY0N0eFxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHJlbGluayggc3JjQ3R4LCB0YXJnZXRDdHggPSB0aGlzLCBleHRlcm5hbCwgZm9yY2UgKSB7XG4gICAgICAgIGxldCBsY3R4ID0gdGFyZ2V0Q3R4Ll9zdG9yZXMucHJvdG90eXBlO1xuICAgICAgICBPYmplY3Qua2V5cyhzcmNDdHgpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fX3Njb3BlW2lkXSA9PT0gc3JjQ3R4W2lkXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX19zY29wZVtpZF0gJiYgKHRhcmdldEN0eC5fX3Njb3BlW2lkXS5jb25zdHJ1Y3RvciA9PT0gc3JjQ3R4W2lkXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFleHRlcm5hbCAmJiAhaXMuZm4odGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIlJlc2NvcGUgU3RvcmUgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBzY29wZSAhICggdHJ5IF9fcHJvdG9fXyBob3QgcGF0Y2ggKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fX3Njb3BlW2lkXS5fX3Byb3RvX18gPSBzcmNDdHhbaWRdLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWV4dGVybmFsICYmIGlzLmZuKHRhcmdldEN0eC5fX3Njb3BlW2lkXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoICFmb3JjZSAmJiAhZXh0ZXJuYWwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxjdHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+IHRoaXMuX19zY29wZVtpZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX3N0YXRlLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKHRoaXMuX19zY29wZVtpZF0gJiYgdGhpcy5fX3Njb3BlW2lkXS5zdGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9kYXRhLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKHRoaXMuX19zY29wZVtpZF0gJiYgdGhpcy5fX3Njb3BlW2lkXS5kYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCB1bmRlZmluZWQsIHYpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBCaW5kIHN0b3JlcyBmcm9tIHRoaXMgc2NvcGUsIGhpcyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuICAgICAqXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9ufVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gc3RvcmVzIGtleXMgdG8gYmluZCB1cGRhdGVzXG4gICAgICogQHBhcmFtIGFzXG4gICAgICogQHBhcmFtIHNldEluaXRpYWwge2Jvb2x9IGZhbHNlIHRvIG5vdCBwcm9wYWcgaW5pdGlhbCB2YWx1ZSAoZGVmYXVsdCA6IHRydWUpXG4gICAgICovXG4gICAgYmluZCggb2JqLCBrZXksIGFzLCBzZXRJbml0aWFsID0gdHJ1ZSApIHtcbiAgICAgICAgbGV0IGxhc3RSZXZzLCBkYXRhLCByZWZLZXlzO1xuICAgICAgICBpZiAoIGtleSAmJiAhaXMuYXJyYXkoa2V5KSApXG4gICAgICAgICAgICBrZXkgPSBba2V5XTtcbiAgICAgICAgXG4gICAgICAgIGlmICggYXMgPT09IGZhbHNlIHx8IGFzID09PSB0cnVlICkge1xuICAgICAgICAgICAgc2V0SW5pdGlhbCA9IGFzO1xuICAgICAgICAgICAgYXMgICAgICAgICA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlZktleXMgPSBrZXlcbiAgICAgICAgICAgIC5tYXAoaWQgPT4gKGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUpKVxuICAgICAgICAgICAgLm1hcChpZCA9PiAodGhpcy5wYXJzZVJlZihpZCkpKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMucHVzaChcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBvYmosXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGFzIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBsYXN0UmV2cyA9IHJlZktleXMucmVkdWNlKCggcmV2cywgcmVmICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXZzW3JlZi5zdG9yZUlkXSA9IHJldnNbcmVmLnN0b3JlSWRdIHx8IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldiA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZzOiBbXVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXZzW3JlZi5zdG9yZUlkXS5yZWZzLnB1c2gocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldnM7XG4gICAgICAgICAgICAgICAgfSwge30pXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgdGhpcy5tb3VudChrZXkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSApIHtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmooZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVuIGJpbmQgdGhpcyBzY29wZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlzXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICAgICAqL1xuICAgIHVuQmluZCggb2JqLCBrZXksIGFzICkge1xuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmICgnJyArIGZvbGxvd2Vyc1tpXVsxXSkgPT0gKCcnICsga2V5KSAmJlxuICAgICAgICAgICAgICAgIGZvbGxvd2Vyc1tpXVsyXSA9PSBhcyApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCBmcm9tIHRoaXMgc2NvcGUsIGl0cyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuICAgICAqIEJpbmQgdGhlbSB0byAndG8nXG4gICAgICogSG9vayAndG8nIHNvIGl0IHdpbGwgYXV0byB1bmJpbmQgb24gJ2Rlc3Ryb3knIG9yICdjb21wb25lbnRXaWxsVW5tb3VudCdcbiAgICAgKiBAcGFyYW0gdG9cbiAgICAgKiBAcGFyYW0gc3RvcmVzTGlzdFxuICAgICAqIEBwYXJhbSBiaW5kXG4gICAgICogQHJldHVybnMge09iamVjdH0gSW5pdGlhbCBvdXRwdXRzIG9mIHRoZSBzdG9yZXMgaW4gJ3N0b3Jlc0xpc3QnXG4gICAgICovXG4gICAgbWFwKCB0bywgc3RvcmVzTGlzdCwgYmluZCA9IHRydWUgKSB7XG4gICAgICAgIGxldCBTdG9yZSAgPSB0aGlzLmNvbnN0cnVjdG9yLlN0b3JlO1xuICAgICAgICBzdG9yZXNMaXN0ID0gaXMuYXJyYXkoc3RvcmVzTGlzdCkgPyBzdG9yZXNMaXN0IDogW3N0b3Jlc0xpc3RdO1xuICAgICAgICB0aGlzLm1vdW50KHN0b3Jlc0xpc3QpO1xuICAgICAgICBpZiAoIGJpbmQgJiYgdG8gaW5zdGFuY2VvZiBTdG9yZSApIHtcbiAgICAgICAgICAgIFN0b3JlLm1hcCh0bywgc3RvcmVzTGlzdCwgdGhpcywgdGhpcywgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIGJpbmQgKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmQodG8sIHN0b3Jlc0xpc3QsIHVuZGVmaW5lZCwgZmFsc2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgbWl4ZWRDV1VubW91bnQsXG4gICAgICAgICAgICAgICAgdW5Nb3VudEtleSA9IHRvLmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCB0by5oYXNPd25Qcm9wZXJ0eSh1bk1vdW50S2V5KSApIHtcbiAgICAgICAgICAgICAgICBtaXhlZENXVW5tb3VudCA9IHRvW3VuTW91bnRLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b1t1bk1vdW50S2V5XSA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdG9bdW5Nb3VudEtleV07XG4gICAgICAgICAgICAgICAgaWYgKCBtaXhlZENXVW5tb3VudCApXG4gICAgICAgICAgICAgICAgICAgIHRvW3VuTW91bnRLZXldID0gbWl4ZWRDV1VubW91bnQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy51bkJpbmQodG8sIHN0b3Jlc0xpc3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b1t1bk1vdW50S2V5XSAmJiB0b1t1bk1vdW50S2V5XSguLi5hcmd6KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9yZXNMaXN0LnJlZHVjZSgoIGRhdGEsIGlkICkgPT4ge1xuICAgICAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGlkKSApXG4gICAgICAgICAgICAgICAgaWQgPSBpZC5uYW1lO1xuICAgICAgICAgICAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBpZC5zcGxpdCgnOicpOy8vQHRvZG9cbiAgICAgICAgICAgIGlkWzBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gaWRbMF0uc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGRhdGFbaWRbMV0gfHwgaWRbMF1baWRbMF0ubGVuZ3RoIC0gMV1dID0gdGhpcy5zdG9yZXNbaWRbMF1bMF1dICYmIHRoaXMuc3RvcmVzW2lkWzBdWzBdXS5yZXRyaWV2ZSAmJiB0aGlzLnN0b3Jlc1tpZFswXVswXV0ucmV0cmlldmUoaWRbMF0uc3BsaWNlKDEpKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuICAgIFxuICAgIHJldHJpZXZlKCBwYXRoID0gXCJcIiApIHtcbiAgICAgICAgcGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG4gICAgICAgIHJldHVybiBwYXRoICYmIHRoaXMuc3RvcmVzW3BhdGhbMF1dICYmXG4gICAgICAgICAgICB0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZShwYXRoLnNsaWNlKDEpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IG9yIHVwZGF0ZSBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnNcbiAgICAgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIGxvY2FsXG4gICAgICogQHJldHVybnMge3t9fVxuICAgICAqL1xuICAgIGdldFN0b3Jlc1JldnMoIHN0b3Jlc1Jldk1hcCA9IHt9LCBsb2NhbCApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19zY29wZTtcbiAgICAgICAgaWYgKCAhc3RvcmVzUmV2TWFwICkge1xuICAgICAgICAgICAgc3RvcmVzUmV2TWFwID0ge307XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggIWlzLmZuKGN0eFtpZF0pXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFtpZF0gPSBjdHhbaWRdLl9yZXY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSApXG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFtpZF0gPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBpZiAoICFsb2NhbCApIHtcbiAgICAgICAgICAgIHRoaXMuX19taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcmVzUmV2TWFwO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgb3IgdXBkYXRlIG91dHB1dCBiYXNpbmcgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zLlxuICAgICAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgaXMgdXBkYXRlZDsgYWRkIGl0IHRvICdvdXRwdXQnXG4gICAgICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuICAgICAqIEBwYXJhbSBvdXRwdXRcbiAgICAgKiBAcGFyYW0gdXBkYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfHt9fVxuICAgICAqL1xuICAgIGdldFVwZGF0ZXMoIHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX3Njb3BlO1xuICAgICAgICBcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0IHx8IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAhb3V0cHV0Lmhhc093blByb3BlcnR5KGlkKSAmJiAhaXMuZm4oY3R4W2lkXSlcbiAgICAgICAgICAgICAgICAgICAgJiYgKCFzdG9yZXNSZXZNYXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IChzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpICYmIHN0b3Jlc1Jldk1hcFtpZF0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICEoIXN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgfHwgY3R4W2lkXS5fcmV2IDw9IHN0b3Jlc1Jldk1hcFtpZF0ucmV2KSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXRbaWRdID0gdGhpcy5kYXRhW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggc3RvcmVzUmV2TWFwICYmIHN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbaWRdLnJldiA9IGN0eFtpZF0uX3JldjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFtpZF0ucmVmcy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS53YXJuKFwidXBkYXRlIHJlZiBcIiwgcmVmLnJlZiwgdGhpcy5yZXRyaWV2ZShyZWYucGF0aCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRbcmVmLmFsaWFzXSA9IHRoaXMucmV0cmlldmUocmVmLnBhdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS53YXJuKFwidXBkYXRlIFwiLCBpZCwgdGhpcy5kYXRhW2lkXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRbaWRdID0gdGhpcy5kYXRhW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLl9fbWl4ZWQucmVkdWNlKCggdXBkYXRlZCwgY3R4ICkgPT4gKGN0eC5nZXRVcGRhdGVzKHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkKSwgdXBkYXRlZCk7XG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRVcGRhdGVzKHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkO1xuICAgICAgICByZXR1cm4gdXBkYXRlZCAmJiBvdXRwdXQ7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGZsYWdzX3N0YXRlc1xuICAgICAqIEBwYXJhbSBmbGFnc19kYXRhXG4gICAgICogQHJldHVybnMge3tzdGF0ZToge30sIGRhdGE6IHt9fX1cbiAgICAgKi9cbiAgICBzZXJpYWxpemUoIGZsYWdzX3N0YXRlcyA9IC8uKi8sIGZsYWdzX2RhdGEgPSAvLiovICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX3Njb3BlLCBvdXRwdXQgPSB7IHN0YXRlOiB7fSwgZGF0YToge30gfSxcbiAgICAgICAgICAgIF9mbGFnc19zdGF0ZXMsXG4gICAgICAgICAgICBfZmxhZ3NfZGF0YTtcbiAgICAgICAgaWYgKCBpcy5hcnJheShmbGFnc19zdGF0ZXMpIClcbiAgICAgICAgICAgIGZsYWdzX3N0YXRlcy5mb3JFYWNoKGlkID0+IChvdXRwdXQuc3RhdGVbaWRdID0gdGhpcy5zdGF0ZVtpZF0pKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggaXMuYXJyYXkoZmxhZ3NfZGF0YSkgKVxuICAgICAgICAgICAgZmxhZ3NfZGF0YS5mb3JFYWNoKGlkID0+IChvdXRwdXQuZGF0YVtpZF0gPSB0aGlzLmRhdGFbaWRdKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFpcy5hcnJheShmbGFnc19kYXRhKSAmJiAhaXMuYXJyYXkoZmxhZ3Nfc3RhdGVzKSApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGlzLmZuKGN0eFtpZF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBmbGFncyA9IGN0eFtpZF0uY29uc3RydWN0b3IuZmxhZ3M7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmbGFncyA9IGlzLmFycmF5KGZsYWdzKSA/IGZsYWdzIDogW2ZsYWdzIHx8IFwiXCJdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmbGFncy5yZWR1Y2UoKCByLCBmbGFnICkgPT4gKHIgfHwgZmxhZ3Nfc3RhdGVzLnRlc3QoZmxhZykpLCBmYWxzZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnN0YXRlW2lkXSA9IHRoaXMuc3RhdGVbaWRdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmbGFncy5yZWR1Y2UoKCByLCBmbGFnICkgPT4gKHIgfHwgZmxhZ3NfZGF0YS50ZXN0KGZsYWcpKSwgZmFsc2UpIClcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC5kYXRhW2lkXSA9IHRoaXMuZGF0YVtpZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICBwYXJzZVJlZiggX3JlZiApIHtcbiAgICAgICAgbGV0IHJlZiA9IF9yZWYuc3BsaXQoJzonKTtcbiAgICAgICAgcmVmWzBdICA9IHJlZlswXS5zcGxpdCgnLicpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RvcmVJZDogcmVmWzBdWzBdLFxuICAgICAgICAgICAgcGF0aCAgIDogcmVmWzBdLFxuICAgICAgICAgICAgYWxpYXMgIDogcmVmWzFdIHx8IHJlZlswXVtyZWZbMF0ubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgICByZWYgICAgOiBfcmVmXG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIGRpc3BhdGNoKCBhY3Rpb24sIGRhdGEgKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuX19zY29wZSlcbiAgICAgICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhaXMuZm4odGhpcy5fX3Njb3BlW2lkXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fc2NvcGVbaWRdLnRyaWdnZXIoYWN0aW9uLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX21peGVkLmZvckVhY2goKCBjdHggKSA9PiAoY3R4LmRpc3BhdGNoKGFjdGlvbiwgZGF0YSkpKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZGlzcGF0Y2goYWN0aW9uLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIHRoZW4oIGNiICkge1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgdGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKG51bGwsIHRoaXMuZGF0YSkpO1xuICAgIH1cbiAgICBcbiAgICByZXN0b3JlKCB7IHN0YXRlLCBkYXRhIH0sIHF1aWV0ICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX3Njb3BlO1xuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIHF1aWV0ID8gY3R4LmRhdGEgPSBkYXRhW2lkXVxuICAgICAgICAgICAgICAgICAgICA6IGN0eC5wdXNoKGRhdGFbaWRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3RhdGUpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgcXVpZXQgPyBjdHguc3RhdGUgPSBzdGF0ZVtpZF1cbiAgICAgICAgICAgICAgICAgICAgOiBjdHguc2V0U3RhdGUoc3RhdGVbaWRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgcmV0YWluU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbiAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluKHJlYXNvbikpXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZVN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcbiAgICAgICAgc3RvcmVzLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlKHJlYXNvbikpXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgd2FpdCggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgIXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5lbWl0KFwidW5zdGFibGVcIiwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZWxlYXNlKCByZWFzb24gKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXJUTSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzLmFsbCApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuZGVhZCAmJiB0aGlzLl9wcm9wYWcoKTsvLyBzdGFiaWxpdHkgY2FuIGluZHVjZSBkZXN0cm95XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcHJvcGFnKCkge1xuICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xuICAgICAgICB0aGlzLl9wcm9wYWdUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWdUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgIH0sIDJcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgX3Byb3BhZygpIHtcbiAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCggeyAwOiBvYmosIDE6IGtleSwgMjogYXMsIDM6IGxhc3RSZXZzLCAzOiByZW1hcHMgfSApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYmooZGF0YSwgbGFzdFJldnMgJiYgWy4uLmxhc3RSZXZzXSB8fCBcIm5vIHJldnNcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGxhc3RSZXZzICYmXG4gICAgICAgICAgICAgICAgLy8ga2V5LmZvckVhY2goaWQgPT4gKGxhc3RSZXZzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbWl0KFwidXBkYXRlXCIsIHRoaXMuZ2V0VXBkYXRlcygpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgc3RhYmxlXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzU3RhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmxlO1xuICAgIH1cbiAgICBcbiAgICAvL3NlcmlhbGl6ZUNoaWxkcyggY2hpbGRzID0gW10gKSB7XG4gICAgLy9cbiAgICAvL31cbiAgICBcbiAgICBfYWRkQ2hpbGQoIGN0eCApIHtcbiAgICAgICAgdGhpcy5fY2hpbGRTY29wZXMucHVzaChjdHgpO1xuICAgICAgICBsZXQgbGlzdHMgICAgID0ge1xuICAgICAgICAgICAgICAgICdzdGFibGUnICAgICAgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fdW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJyAgICA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcysrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIDEgPT0gdGhpcy5fdW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnc3RhYmxlVHJlZScgIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd1bnN0YWJsZVRyZWUnOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAxID09IHRoaXMuX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ2Rlc3Ryb3knICAgICA6IGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggY3R4Ll91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICFjdHguaXNTdGFibGUoKSApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdhc1N0YWJsZSA9IHRoaXMuX3VuU3RhYmxlQ2hpbGRzO1xuICAgICAgICAvLyFjdHguaXNTdGFibGUoKSAmJiBjb25zb2xlLndhcm4oJ2FkZCB1bnN0YWJsZSBjaGlsZCcpO1xuICAgICAgICAhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fdW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgY3R4Ll91blN0YWJsZUNoaWxkcyAmJiB0aGlzLl91blN0YWJsZUNoaWxkcysrO1xuICAgICAgICB0aGlzLl9jaGlsZFNjb3Blc0xpc3QucHVzaChsaXN0cyk7XG4gICAgICAgIGlmICggIXdhc1N0YWJsZSAmJiB0aGlzLl91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgY3R4Lm9uKGxpc3RzKTtcbiAgICB9XG4gICAgXG4gICAgX3JtQ2hpbGQoIGN0eCApIHtcbiAgICAgICAgbGV0IGkgICAgICAgICA9IHRoaXMuX2NoaWxkU2NvcGVzLmluZGV4T2YoY3R4KSxcbiAgICAgICAgICAgIHdhc1N0YWJsZSA9IHRoaXMuX3VuU3RhYmxlQ2hpbGRzO1xuICAgICAgICBpZiAoIGkgIT0gLTEgKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGlsZFNjb3Blcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fdW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgIGN0eC5fdW5TdGFibGVDaGlsZHMgJiYgdGhpcy5fdW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgIGN0eC51bih0aGlzLl9jaGlsZFNjb3Blc0xpc3Quc3BsaWNlKGksIDEpWzBdKTtcbiAgICAgICAgICAgIGlmICggd2FzU3RhYmxlICYmICF0aGlzLl91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldGFpbiggcmVhc29uICkge1xuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwrKztcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJldGFpblwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImRpc3Bvc2VcIiwgdGhpcy5faWQsIHJlYXNvbik7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnNbcmVhc29uXSApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIDogXCIgKyByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwtLTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJkaXNwb3NlIGRvIGRlc3Ryb3kgXCIsIHRoaXMuX2lkLCB0aGlzLl9wZXJzaXN0ZW5jZVRtKTtcbiAgICAgICAgICAgIGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5zLmFsbCAmJiB0aGlzLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4gKCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvcmRlciBkZXN0cm95IG9mIGxvY2FsIHN0b3Jlc1xuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBjdHggICA9IHRoaXMuX19zY29wZTtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oXCJkZXN0cm95XCIsIHRoaXMuX2lkKTtcbiAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbWl0KFwiZGVzdHJveVwiLCB0aGlzKTtcbiAgICAgICAgT2JqZWN0LmtleXMoXG4gICAgICAgICAgICB0aGlzLl9fbGlzdGVuaW5nXG4gICAgICAgICkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHRoaXMuX19zY29wZVtpZF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fX2xpc3RlbmluZ1tpZF0pXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXJUTSk7XG4gICAgICAgIHRoaXMuX3Byb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl9wcm9wYWdUTSk7XG4gICAgICAgIHRoaXMuX19saXN0ZW5pbmcgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5faXNMb2NhbElkIClcbiAgICAgICAgICAgIGRlbGV0ZSBvcGVuU2NvcGVzW3RoaXMuX2lkXTtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIFxuICAgICAgICB3aGlsZSAoIHRoaXMuX19taXhlZExpc3QubGVuZ3RoICkge1xuICAgICAgICAgICAgdGhpcy5fX21peGVkWzBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuX19taXhlZExpc3Quc2hpZnQoKSk7XG4gICAgICAgICAgICB0aGlzLl9fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKFwibWl4ZWRUb1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMuX19wYXJlbnRMaXN0ICkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fcGFyZW50TGlzdCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgIHRoaXMuX19wYXJlbnRMaXN0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKCBsZXQga2V5IGluIGN0eCApXG4gICAgICAgICAgICBpZiAoICFpcy5mbihjdHhba2V5XSkgKSB7XG4gICAgICAgICAgICAgICAgLy9pZiAoIGN0eFtrZXldLnNjb3BlT2JqID09PSB0aGlzIClcbiAgICAgICAgICAgICAgICBjdHhba2V5XS5kaXNwb3NlKFwic2NvcGVkXCIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vY3R4W2tleV0gPSBjdHhba2V5XS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgdGhpcy5fX21peGVkID0gdGhpcy5kYXRhID0gdGhpcy5zdGF0ZSA9IHRoaXMuc2NvcGUgPSB0aGlzLnN0b3JlcyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9zdGF0ZSA9IHRoaXMuX3N0b3JlcyA9IG51bGw7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Njb3BlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICogIFxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogIFxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiAgXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKiAgXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xudmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtaXR0ZXIge1xuICAgIF9ldmVudHMgPSB7fTtcbiAgICBcbiAgICBvbiggZXZ0LCBjYiApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLm9uKGssIGV2dFtrXSkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0gPSB0aGlzLl9ldmVudHNbZXZ0XSB8fCBbXTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0ucHVzaChjYik7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICB1biggZXZ0LCBjYiApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGV2dCkgJiYgZXZ0IClcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhldnQpLmZvckVhY2goayA9PiB0aGlzLnVuKGssIGV2dFtrXSkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fZXZlbnRzW2V2dF0gKSByZXR1cm47XG4gICAgICAgIHZhciBpID0gdGhpcy5fZXZlbnRzW2V2dF0uaW5kZXhPZihjYik7XG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgZW1pdCggZXZ0LCAuLi5hcmd6ICkge1xuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgbGV0IGxpc3RzID0gWy4uLnRoaXMuX2V2ZW50c1tldnRdXTtcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgbGlzdHMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICBsaXN0c1tpXSguLi5hcmd6KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBhZGRMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5vbiguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy51biguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVBbGxMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIH1cbiAgICBcbiAgICBvbmNlKCBldnQsIGNiICkge1xuICAgICAgICBsZXQgZm47XG4gICAgICAgIHRoaXMub24oZXZ0LCBmbiA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgIHRoaXMudW4oZXZ0LCBmbik7XG4gICAgICAgICAgICBjYiguLi5hcmd6KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VtaXR0ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2hvcnRpZFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuLyoqXG4gKiBVbHRyYSBzY2FsYWJsZSBzdGF0ZS1hd2FyZSBzdG9yZVxuICpcbiAqIEB0b2RvIDogbG90IG9mIG9wdGltcy4uLlxuICovXG5cbnZhciBpcyAgICAgICAgICAgPSByZXF1aXJlKCdpcycpLFxuICAgIFNjb3BlICAgICAgICA9IHJlcXVpcmUoJy4vU2NvcGUnKSxcbiAgICBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCcuL0VtaXR0ZXInKSxcbiAgICBzaG9ydGlkICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJyksXG4gICAgb2JqUHJvdG8gICAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KTtcbi8qKlxuICogQGNsYXNzIFN0b3JlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBcbiAgICBzdGF0aWMgdXNlICAgICAgICAgICAgICAgICAgPSBbXTsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHNvdXJjZSBzdG9yZXNcbiAgICBzdGF0aWMgZm9sbG93Oy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc3RvcmUgdGhhdCB3aWxsIGFsbG93IHB1c2ggaWYgdXBkYXRlZFxuICAgIHN0YXRpYyByZXF1aXJlO1xuICAgIHN0YXRpYyBzdGF0aWNTY29wZSAgICAgICAgICA9IG5ldyBTY29wZSh7fSwgeyBpZDogXCJzdGF0aWNcIiB9KTtcbiAgICBzdGF0aWMgc3RhdGUgICAgICAgICAgICAgICAgPSB1bmRlZmluZWQ7Ly8gZGVmYXVsdCBzdGF0ZVxuICAgIC8qKlxuICAgICAqIGlmIHJldGFpbiBnb2VzIHRvIDAgOlxuICAgICAqIGZhbHNlIHRvIG5vdCBkZXN0cm95LFxuICAgICAqIDAgdG8gc3luYyBhdXRvIGRlc3Ryb3lcbiAgICAgKiBNcyB0byBhdXRvZGVzdHJveSBhZnRlciB0bSBtcyBpZiBubyByZXRhaW4gaGFzIGJlZW4gY2FsbGVkXG4gICAgICogQHR5cGUge2Jvb2xlYW58SW50fVxuICAgICAqL1xuICAgICAgICAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSA9IGZhbHNlO1xuICAgIFxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLCB3aWxsIGJ1aWxkIGEgcmVzY29wZSBzdG9yZVxuICAgICAqXG4gICAgICogKHNjb3BlLCB7cmVxdWlyZSx1c2UsYXBwbHksc3RhdGUsIGRhdGF9KVxuICAgICAqIChzY29wZSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSB7b2JqZWN0fSBzY29wZSB3aGVyZSB0byBmaW5kIHRoZSBvdGhlciBzdG9yZXMgKGRlZmF1bHQgOiBzdGF0aWMgc3RhdGljU2NvcGUgKVxuICAgICAqIEBwYXJhbSBrZXlzIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIGFyZ3ogICAgICAgICA9IFsuLi5hcmd1bWVudHNdLFxuICAgICAgICAgICAgX3N0YXRpYyAgICAgID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIHNjb3BlICAgICAgICA9IGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZVxuICAgICAgICAgICAgICAgID8gYXJnei5zaGlmdCgpXG4gICAgICAgICAgICAgICAgOiBfc3RhdGljLnNjb3BlID8gU2NvcGUuZ2V0U2NvcGUoX3N0YXRpYy5zY29wZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGlzLnN0cmluZyhhcmd6WzBdKVxuICAgICAgICAgICAgICAgICAgICAgID8gU2NvcGUuZ2V0U2NvcGUoYXJnei5zaGlmdCgpKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zdGF0aWNTY29wZSxcbiAgICAgICAgICAgIGNmZyAgICAgICAgICA9IGFyZ3pbMF0gJiYgIWlzLmFycmF5KGFyZ3pbMF0pICYmICFpcy5zdHJpbmcoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiB7fSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICA9IGlzLnN0cmluZyhhcmd6WzBdKSA/IGFyZ3pbMF0gOiBjZmcubmFtZSB8fCBfc3RhdGljLm5hbWUsXG4gICAgICAgICAgICB3YXRjaHMgICAgICAgPSBpcy5hcnJheShhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IGNmZy51c2UgfHwgW10sLy8gd2F0Y2hzIG5lZWQgdG8gYmUgZGVmaW5lZCBhZnRlciBhbGwgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgYXJlIHJlZ2lzdGVyZWQgOiBzbyB3ZSBjYW4ndCBkZWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2l0aCBhbnkgXCJzdGF0aWMgdXNlXCIgYXV0b21hdGljbHlcbiAgICAgICAgICAgIGFwcGx5ICAgICAgICA9IGlzLmZuKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogY2ZnLmFwcGx5IHx8IG51bGwsXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSBfc3RhdGljLnN0YXRlIHx8IF9zdGF0aWMuaW5pdGlhbFN0YXRlLFxuICAgICAgICAgICAgYXBwbGllZDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3VpZCA9IGNmZy5fdWlkIHx8IHNob3J0aWQuZ2VuZXJhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zICAgID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fX2xvY2tzICAgICAgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9vblN0YWJpbGl6ZSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IGNmZy5wZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcbiAgICAgICAgaWYgKCBpcy5zdHJpbmcoYXJnelswXSkgKSB7XG4gICAgICAgICAgICBpZiAoIHNjb3BlLl9fc2NvcGVbbmFtZV0gKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGU6IE92ZXJ3cml0aW5nIGFuIGV4aXN0aW5nIHN0YXRpYyBuYW1lZCBzdG9yZSAoICVzICkgISFcIiwgbmFtZSk7XG4gICAgICAgICAgICBzY29wZS5fX3Njb3BlW25hbWVdID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBjZmcgJiYgY2ZnLm9uICkge1xuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuc3RhdGUgICAgICA9IHRoaXMuc3RhdGUgfHwge307XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggc2NvcGUuc3RvcmVzICkge1xuICAgICAgICAgICAgdGhpcy5zY29wZU9iaiA9IHNjb3BlO1xuICAgICAgICAgICAgdGhpcy5zY29wZSAgICA9IHNjb3BlLnN0b3JlcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGVPYmogPSBuZXcgU2NvcGUoc2NvcGUpO1xuICAgICAgICAgICAgdGhpcy5zY29wZSAgICA9IHNjb3BlLnN0b3JlcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3JldiAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLl9yZXYgfHwgMDtcbiAgICAgICAgdGhpcy5fcmV2cyAgICA9IHt9O1xuICAgICAgICB0aGlzLnN0b3JlcyAgID0ge307XG4gICAgICAgIHRoaXMuX3JlcXVpcmUgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIGlmICggaXMuYXJyYXkoX3N0YXRpYy51c2UpICkge1xuICAgICAgICAgICAgdGhpcy5fdXNlID0gWy4uLndhdGNocywgLi4uKF9zdGF0aWMudXNlIHx8IFtdKS5tYXAoXG4gICAgICAgICAgICAgICAga2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IGtleS5tYXRjaCgvXihcXCE/KShbXlxcOl0qKSg/OlxcOiguKikpPyQvKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCByZWZbMV0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVmMiA9IHJlZlsyXS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKHJlZlszXSB8fCByZWYyW3JlZjIubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oXG4gICAgICAgICAgICAgICAgX3N0YXRpYy51c2UgPyBPYmplY3Qua2V5cyhfc3RhdGljLnVzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IGtleS5tYXRjaCgvXihcXCE/KSguKikkLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZlsxXSAmJiB0aGlzLl9yZXF1aXJlLnB1c2goX3N0YXRpYy51c2Vba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZbMl0gKyAoKF9zdGF0aWMudXNlW2tleV0gPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICc6JyArIF9zdGF0aWMudXNlW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBbXVxuICAgICAgICAgICAgKV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggX3N0YXRpYy5yZXF1aXJlIClcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5fc3RhdGljLnJlcXVpcmUpO1xuICAgICAgICBpZiAoIGNmZy5yZXF1aXJlIClcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaCguLi5jZmcucmVxdWlyZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIGlmICggX3N0YXRpYy5kYXRhICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgdGhpcy5kYXRhID0geyAuLi5fc3RhdGljLmRhdGEgfTtcbiAgICAgICAgaWYgKCBjZmcuaGFzT3duUHJvcGVydHkoXCJkYXRhXCIpICYmIGNmZy5kYXRhICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgdGhpcy5kYXRhID0gY2ZnLmRhdGE7XG4gICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0geyAuLi5pbml0aWFsU3RhdGUsIC4uLmNmZy5zdGF0ZSB9O1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhcHBseSApXG4gICAgICAgICAgICB0aGlzLmFwcGx5ID0gYXBwbHk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgaWYgKCBpbml0aWFsU3RhdGUgfHwgdGhpcy5fdXNlLmxlbmd0aCApIHsvLyBzeW5jIGFwcGx5XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLihpbml0aWFsU3RhdGUgfHwge30pLFxuICAgICAgICAgICAgICAgIC4uLnNjb3BlLm1hcCh0aGlzLCB0aGlzLl91c2UpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZEFwcGx5KHRoaXMuc3RhdGUpICYmIHRoaXMuZGF0YSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuYXBwbHkodGhpcy5kYXRhLCB0aGlzLnN0YXRlLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgICAgICBhcHBsaWVkICAgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICh0aGlzLmRhdGEgIT09IHVuZGVmaW5lZCB8fCBhcHBsaWVkKSAmJiAhdGhpcy5fX2xvY2tzLmFsbCApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yZXYrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCAhX3N0YXRpYy5tYW5hZ2VkICYmICF0aGlzLnN0YXRlICYmICghdGhpcy5fdXNlIHx8ICF0aGlzLl91c2UubGVuZ3RoKSApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJSZXNjb3BlIHN0b3JlICdcIiwgdGhpcy5uYW1lLCBcIicgaGF2ZSBubyBpbml0aWFsIGRhdGEsIHN0YXRlIG9yIHVzZS4gSXQgY2FuJ3Qgc3RhYmlsaXplLi4uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBCdWlsZGVyLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgc3RhdGljIGFzKCBuYW1lICkge1xuICAgICAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcbiAgICAgKiBIb29rIGNvbXBvbmVudFdpbGxVbm1vdW50IChmb3IgcmVhY3QgY29tcCkgb3IgZGVzdHJveSB0byB1bkJpbmQgdGhlbSBhdXRvbWF0aWNhbGx5XG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSBvYmplY3Qge09iamVjdH0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdCAoUmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLilcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyU3RhdGljTmFtZWRTdG9yZTprZXlcIiwgc3RvcmUuYXMoJ2Fub3RoZXJLZXknKV1cbiAgICAgKi9cbiAgICBzdGF0aWMgbWFwKCBjb21wb25lbnQsIGtleXMsIHNjb3BlLCBvcmlnaW4sIHNldEluaXRpYWwgPSBmYWxzZSApIHtcbiAgICAgICAgdmFyIHRhcmdldFJldnMgICAgID0gY29tcG9uZW50Ll9yZXZzIHx8IHt9O1xuICAgICAgICB2YXIgdGFyZ2V0U2NvcGUgICAgPSBjb21wb25lbnQuc3RvcmVzIHx8IChjb21wb25lbnQuc3RvcmVzID0ge30pO1xuICAgICAgICB2YXIgaW5pdGlhbE91dHB1dHMgPSB7fTtcbiAgICAgICAga2V5cyAgICAgICAgICAgICAgID0gaXMuYXJyYXkoa2V5cykgPyBbLi4ua2V5c10gOiBba2V5c107XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgc2NvcGUgPSBzY29wZSB8fCBTdG9yZS5zdGF0aWNTY29wZTtcbiAgICAgICAgXG4gICAgICAgIGtleXMgICAgICAgICAgID0ga2V5cy5maWx0ZXIoXG4gICAgICAgICAgICAvLyBAdG9kbyA6IHVzZSBxdWVyeSByZWZzXG4gICAgICAgICAgICAvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAha2V5ICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzLFxuICAgICAgICAgICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZTtcbiAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoKD86XFwuW1xcd19dKykqKSg/OlxcOihbXFx3X10rKSk/Lyk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzFdO1xuICAgICAgICAgICAgICAgICAgICBwYXRoICA9IGtleVsyXSAmJiBrZXlbMl0uc3BsaXQoJy4nKS5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBzY29wZS5zdG9yZXNba2V5WzFdXTtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbM10gfHwgcGF0aCAmJiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gfHwga2V5WzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIHRhcmdldFJldnNbbmFtZV0gKSByZXR1cm4gZmFsc2U7Ly8gaWdub3JlIGRibCB1c2VzIGZvciBub3dcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoICFzdG9yZSApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBhIG1hcHBhYmxlIHN0b3JlIGl0ZW0gJ1wiICsgbmFtZSArIFwiL1wiICsgYWxpYXMgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJywgc3RvcmUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihzdG9yZSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLl9tb3VudChuYW1lKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuc3RvcmVzW25hbWVdLmJpbmQoY29tcG9uZW50LCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXRSZXZzW2FsaWFzXSA9IHRhcmdldFJldnNbYWxpYXNdIHx8IHRydWU7XG4gICAgICAgICAgICAgICAgIXRhcmdldFNjb3BlW25hbWVdICYmICh0YXJnZXRTY29wZVtuYW1lXSA9IHNjb3BlLnN0b3Jlc1tuYW1lXSk7XG4gICAgICAgICAgICAgICAgaWYgKCBzY29wZS5zdG9yZXNbbmFtZV0uaGFzT3duUHJvcGVydHkoJ2RhdGEnKSApXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxPdXRwdXRzW25hbWVdID0gc2NvcGUuZGF0YVtuYW1lXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdmFyIG1peGVkQ1dVbm1vdW50LFxuICAgICAgICAgICAgdW5Nb3VudEtleSA9IGNvbXBvbmVudC5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGNvbXBvbmVudC5oYXNPd25Qcm9wZXJ0eSh1bk1vdW50S2V5KSApIHtcbiAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gY29tcG9uZW50W3VuTW91bnRLZXldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnRbdW5Nb3VudEtleV0gPSAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgY29tcG9uZW50W3VuTW91bnRLZXldO1xuICAgICAgICAgICAgaWYgKCBtaXhlZENXVW5tb3VudCApXG4gICAgICAgICAgICAgICAgY29tcG9uZW50W3VuTW91bnRLZXldID0gbWl4ZWRDV1VubW91bnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGtleXMubWFwKFxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzLCBwYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleS5zdG9yZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gc2NvcGUuc3RvcmVzW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCAgPSBrZXlbMl0gJiYga2V5WzJdLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLnN0b3Jlc1trZXlbMV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbM10gfHwgcGF0aCAmJiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gfHwga2V5WzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzdG9yZSAmJiAhaXMuZm4oc3RvcmUpICYmIHN0b3JlLnVuQmluZChjb21wb25lbnQsIGFsaWFzLCBwYXRoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50W3VuTW91bnRLZXldICYmIGNvbXBvbmVudFt1bk1vdW50S2V5XSguLi5hcmd6KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldCBjb250ZXh0T2JqKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZU9iajtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXQgY29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0IGRhdGFzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHNldCBkYXRhcyggdiApIHtcbiAgICAgICAgLy9jb25zb2xlLmdyb3VwQ29sbGFwc2VkKFwiUmVzY29wZSBzdG9yZSA6IFNldHRpbmcgZGF0YXMgaXMgZGVwcmVjaWF0ZWQsIHVzZSBkYXRhXCIpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUmVzY29wZSBzdG9yZSA6IFNldHRpbmcgZGF0YXMgaXMgZGVwcmVjaWF0ZWQsIHVzZSBkYXRhXCIsIChuZXcgRXJyb3IoKSkuc3RhY2spO1xuICAgICAgICAvL2NvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSA9IHY7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgZGF0YSBjaGFuZ2Ugc2hvdWxkIGJlIHByb3BhZyB0byB0aGUgbGlzdGVuaW5nIHN0b3JlcyAmIGNvbXBvbmVudHNcbiAgICAgKi9cbiAgICBzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBoYXNEYXRhQ2hhbmdlKCBuRGF0YXMgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvciwgcixcbiAgICAgICAgICAgIGNEYXRhcyAgPSB0aGlzLmRhdGE7XG4gICAgICAgIHIgICAgICAgICAgID0gIWNEYXRhcyAmJiBuRGF0YXMgfHwgY0RhdGFzICE9PSBuRGF0YXM7XG4gICAgICAgICFyICYmIGNEYXRhcyAmJiBPYmplY3Qua2V5cyhjRGF0YXMpLmZvckVhY2goXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICAhciAmJiBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgc3RhdGUgY2hhbmdlIHNob3VsZCBiZSBhcHBsaWVkXG4gICAgICovXG4gICAgc2hvdWxkQXBwbHkoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICEhdGhpcy5pc0NvbXBsZXRlKHN0YXRlKVxuICAgICAgICApICYmIChpcy5hcnJheShfc3RhdGljLmZvbGxvdylcbiAgICAgICAgICAgICAgICA/IF9zdGF0aWMuZm9sbG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAociB8fCBzdGF0ZSAmJiBzdGF0ZVtpXSksIGZhbHNlKVxuICAgICAgICAgICAgICAgIDogX3N0YXRpYy5mb2xsb3dcbiAgICAgICAgICAgICAgICAgID8gT2JqZWN0LmtleXMoX3N0YXRpYy5mb2xsb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgc3RhdGUgJiYgaXMuZm4oX3N0YXRpYy5mb2xsb3dbaV0pICYmIF9zdGF0aWMuZm9sbG93W2ldLmNhbGwodGhpcywgc3RhdGVbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBfc3RhdGljLmZvbGxvd1tpXSAmJiBzdGF0ZVtpXSAhPT0gdGhpcy5zdGF0ZVtpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZSkgOiB0cnVlXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIGFwcGxpZXIgLyByZW1hcHBlclxuICAgICAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyBhcHBseSB3aWxsIHJldHVybiB7Li4uZGF0YSwgLi4uc3RhdGV9XG4gICAgICogaWYgbm90IGl0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IHByaXZhdGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGFwcGx5KCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLnJlZmluZSApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZpbmUoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhLCAuLi5zdGF0ZSB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNpYXRlZFxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGNoYW5nZXNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWZpbmUoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc3RhYmlsaXplKCBjYiApIHtcbiAgICAgICAgY2IgJiYgdGhpcy5vbmNlKCdzdGFibGUnLCBjYik7XG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy5wdXNoLmJpbmQoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICgpID0+IHsvL0B0b2RvXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhYmxlICAgPSB0aGlzLl9zdGFibGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICFzdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKSk7XG4gICAgfVxuICAgIFxuICAgIHJldHJpZXZlKCBwYXRoLCBpID0gMCwgb2JqID0gdGhpcy5kYXRhICkge1xuICAgICAgICBwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcbiAgICAgICAgcmV0dXJuICFvYmogfHwgIXBhdGggfHwgIXBhdGgubGVuZ3RoXG4gICAgICAgICAgICA/IG9ialxuICAgICAgICAgICAgOiBwYXRoLmxlbmd0aCA9PSBpICsgMVxuICAgICAgICAgICAgICAgICAgID8gb2JqW3BhdGhbaV1dXG4gICAgICAgICAgICAgICAgICAgOiB0aGlzLnJldHJpZXZlKHBhdGgsIGkgKyAxLCBvYmpbcGF0aFtpXV0pO1xuICAgIH1cbiAgICBcbiAgICBkaXNwYXRjaCggYWN0aW9uLCAuLi5hcmd6ICkge1xuICAgICAgICB0aGlzLnNjb3BlT2JqLmRpc3BhdGNoKGFjdGlvbiwgLi4uYXJneik7XG4gICAgfVxuICAgIFxuICAgIHRyaWdnZXIoIGFjdGlvbiwgLi4uYXJneiApIHtcbiAgICAgICAgbGV0IHsgYWN0aW9ucyB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIG5zO1xuICAgICAgICBpZiAoIGFjdGlvbnMgJiYgYWN0aW9uc1thY3Rpb25dICkge1xuICAgICAgICAgICAgbnMgPSBhY3Rpb25zW2FjdGlvbl0uY2FsbCh0aGlzLCAuLi5hcmd6KTtcbiAgICAgICAgICAgIG5zICYmIHRoaXMuc2V0U3RhdGUobnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFB1bGwgc3RvcmVzIGluIHRoZSBwcml2YXRlIHN0YXRlXG4gICAgICogQHBhcmFtIHN0b3JlcyAge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuICAgICAqL1xuICAgIHB1bGwoIHN0b3JlcywgZG9XYWl0LCBvcmlnaW4gKSB7XG4gICAgICAgIGxldCBpbml0aWFsT3V0cHV0cyA9IHRoaXMuc2NvcGVPYmoubWFwKHRoaXMsIHN0b3Jlcyk7XG4gICAgICAgIGlmICggZG9XYWl0ICkge1xuICAgICAgICAgICAgdGhpcy53YWl0KCk7XG4gICAgICAgICAgICBzdG9yZXMuZm9yRWFjaCgoIHMgKSA9PiB0aGlzLnNjb3BlW3NdICYmIHRoaXMud2FpdCh0aGlzLnNjb3BlW3NdKSk7XG4gICAgICAgICAgICB0aGlzLnJlbGVhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5pdGlhbE91dHB1dHM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEFwcGx5IGFwcGx5L3JlbWFwIG9uIHRoZSBwcml2YXRlIHN0YXRlICYgcHVzaCB0aGUgcmVzdWx0aW5nIFwicHVibGljXCIgc3RhdGUgdG8gZm9sbG93ZXJzXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgcHVzaCggZGF0YSwgZm9yY2UsIGNiICkge1xuICAgICAgICBjYiAgICAgICAgICAgID0gZm9yY2UgPT09IHRydWUgPyBjYiA6IGZvcmNlO1xuICAgICAgICBmb3JjZSAgICAgICAgID0gZm9yY2UgPT09IHRydWU7XG4gICAgICAgIHZhciBpICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbmV4dFN0YXRlID0gIWRhdGEgJiYgeyAuLi50aGlzLnN0YXRlLCAuLi50aGlzLl9jaGFuZ2VzU1cgfSB8fCB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgbmV4dERhdGFzID0gZGF0YSB8fCB0aGlzLmFwcGx5KHRoaXMuZGF0YSwgbmV4dFN0YXRlLCB0aGlzLl9jaGFuZ2VzU1cpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGF0ZSAgICAgID0gbmV4dFN0YXRlO1xuICAgICAgICB0aGlzLl9jaGFuZ2VzU1cgPSB7fTtcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAhdGhpcy5oYXNEYXRhQ2hhbmdlKG5leHREYXRhcylcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRhdGEgPSBuZXh0RGF0YXM7XG4gICAgICAgIHRoaXMud2FpdCgpO1xuICAgICAgICB0aGlzLnJlbGVhc2UoY2IpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzZXRTdGF0ZSggcFN0YXRlLCBjYiwgc3luYyApIHtcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcbiAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgICAgIHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXG4gICAgICAgICAgICAgICAgKSApIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2UgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XG4gICAgICAgICAgICAgICAgY2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuc2hvdWxkQXBwbHkoeyAuLi50aGlzLnN0YXRlLCAuLi5jaGFuZ2VzIH0pICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHN5bmMgKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2goKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICggY2hhbmdlICkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgY2IgJiYgY2IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjdXJyZW50IHByaXZhdGUgc3RhdGUgJiBwdXNoIGl0IG9uY2UgdGhlIHN0b3JlIGlzIHN0YWJsZVxuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzZXRTdGF0ZVN5bmMoIHBTdGF0ZSApIHtcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcbiAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgICAgIHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXG4gICAgICAgICAgICAgICAgKSApIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2UgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XG4gICAgICAgICAgICAgICAgY2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG91bGRBcHBseSh7IC4uLih0aGlzLnN0YXRlIHx8IHt9KSwgLi4uY2hhbmdlcyB9KSAmJiB0aGlzLnB1c2goKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgcmVwbGFjZVN0YXRlKCBwU3RhdGUsIGNiICkge1xuICAgICAgICB2YXIgaSAgICAgID0gMCwgbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0YXRlID0gcFN0YXRlO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGFiaWxpemUoY2IpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBzdG9yZS1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICAgICAqL1xuICAgIGFzKCBuYW1lICkge1xuICAgICAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuICAgIH1cbiAgICBcbiAgICBvbiggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1trXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCBsaXN0cyApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzW2tdKSk7XG4gICAgICAgIGVsc2Ugc3VwZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogcmVsaW5rIGJpbmRpbmdzICYgcmVxdWlyZXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICByZWxpbmsoIGZyb20gKSB7XG4gICAgICAgIGxldCBzY29wZSAgID0gdGhpcy5zY29wZU9iaixcbiAgICAgICAgICAgIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBpZiAoIF9zdGF0aWMudXNlICkge1xuICAgICAgICAgICAgLy90b2RvIHVubGlua1xuICAgICAgICAgICAgdGhpcy5wdWxsKF9zdGF0aWMudXNlLCBmYWxzZSwgZnJvbSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fcmVxdWlyZSApIHtcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUuZm9yRWFjaChcbiAgICAgICAgICAgICAgICBzdG9yZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FpdChzY29wZS5fX3Njb3BlW3N0b3JlXSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIGNvbXBsZXRlIChhbGwgcmVxdWllcmVkIGtleXMgYXJlIGhlcmUpXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzQ29tcGxldGUoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXRoaXMuX3JlcXVpcmVcbiAgICAgICAgICAgIHx8ICF0aGlzLl9yZXF1aXJlLmxlbmd0aFxuICAgICAgICAgICAgfHwgc3RhdGUgJiYgdGhpcy5fcmVxdWlyZS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKCByLCBrZXkgKSA9PiAociAmJiBzdGF0ZVtrZXldKSxcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIHN0YWJsZVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc1N0YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJsZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVW4gYmluZCB0aGlzIHN0b3JlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuICAgICAqIEBwYXJhbSBvYmpcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cbiAgICAgKi9cbiAgICB1bkJpbmQoIG9iaiwga2V5LCBwYXRoICkge1xuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmIGZvbGxvd2Vyc1tpXVsxXSA9PT0ga2V5ICYmIGZvbGxvd2Vyc1tpXVsyXSA9PT0gcGF0aCApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhpcyBzdG9yZSBjaGFuZ2VzIHRvIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgYmluZCggb2JqLCBrZXksIHNldEluaXRpYWwgPSB0cnVlLCBwYXRoICkge1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMucHVzaChbb2JqLCBrZXksIHBhdGhdKTtcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuZGF0YSAmJiB0aGlzLl9zdGFibGUgKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHBhdGggPyB0aGlzLnJldHJpZXZlKHBhdGgpIDogdGhpcy5kYXRhO1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGtleSApIG9iai5zZXRTdGF0ZSh7IFtrZXldOiBkYXRhIH0pO1xuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIHRoZW4oIGNiICkge1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgdGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKG51bGwsIHRoaXMuZGF0YSkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBZGQgYSBsb2NrIHNvIHRoZSBzdG9yZSB3aWxsIG5vdCBwcm9wYWcgaXQgc3RhdGUgdW50aWxsIHJlbGVhc2UoKSBpcyBjYWxsXG4gICAgICogQHBhcmFtIHByZXZpb3VzIHtTdG9yZXxudW1iZXJ8QXJyYXl9IEBvcHRpb25hbCB3ZiB0byB3YWl0LCByZWxlYXNlcyB0byB3YWl0IG9yIGFycmF5IG9mIHN0dWZmIHRvIHdhaXRcbiAgICAgKiBAcmV0dXJucyB7VGFza0Zsb3d9XG4gICAgICovXG4gICAgd2FpdCggcHJldmlvdXMgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIHByZXZpb3VzID09IFwibnVtYmVyXCIgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19sb2Nrcy5hbGwgKz0gcHJldmlvdXM7XG4gICAgICAgIGlmICggaXMuYXJyYXkocHJldmlvdXMpIClcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cy5tYXAodGhpcy53YWl0LmJpbmQodGhpcykpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbCsrO1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlYXNvbiA9IGlzLnN0cmluZyhwcmV2aW91cykgPyBwcmV2aW91cyA6IG51bGw7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHByZXZpb3VzICYmIGlzLmZuKHByZXZpb3VzLnRoZW4pICkge1xuICAgICAgICAgICAgcHJldmlvdXMudGhlbih0aGlzLnJlbGVhc2UuYmluZCh0aGlzLCBudWxsKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERlY3JlYXNlIGxvY2tzIGZvciB0aGlzIHN0b3JlLCBpZiBpdCByZWFjaCAwICYgaXQgaGF2ZSBhIHB1YmxpYyBzdGF0ZSxcbiAgICAgKiBpdCB3aWxsIGJlIHByb3BhZ2F0ZWQgdG8gdGhlIGZvbGxvd2VycyxcbiAgICAgKiB0aGVuLCBhbGwgc3R1ZmYgcGFzc2VkIHRvIFwidGhlblwiIGNhbGwgYmFjayB3aWxsIGJlIGV4ZWMgLyByZWxlYXNlZFxuICAgICAqIEBwYXJhbSBkZXN5bmNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWxlYXNlKCByZWFzb24sIGNiICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIGxldCBpICAgICAgID0gMCwgd2FzU3RhYmxlID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBpcy5mbihyZWFzb24pICkge1xuICAgICAgICAgICAgY2IgICAgID0gcmVhc29uO1xuICAgICAgICAgICAgcmVhc29uID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrc1tyZWFzb25dID09IDAgKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIiwgcmVhc29uKTtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dID0gdGhpcy5fX2xvY2tzW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19sb2Nrc1tyZWFzb25dLS07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggIXJlYXNvbiAmJiB0aGlzLl9fbG9ja3MuYWxsID09IDAgKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIS0tdGhpcy5fX2xvY2tzLmFsbCAmJiB0aGlzLmRhdGEgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XG4gICAgICAgICAgICBsZXQgcHJvcGFnICAgPSB0aGlzLnNob3VsZFByb3BhZyh0aGlzLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByb3BhZyAmJiB0aGlzLl9yZXYrKzsvL1xuICAgICAgICAgICAgaWYgKCBwcm9wYWcgJiYgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goKCBmb2xsb3dlciApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBmb2xsb3dlclsyXSA/IHRoaXMucmV0cmlldmUoZm9sbG93ZXJbMl0pIDogdGhpcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICFkYXRhICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclswXSA9PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclswXShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2IgJiYgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0uc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZvbGxvd2VyWzFdKSA/IHsgW2ZvbGxvd2VyWzFdXTogZGF0YSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICgpID0+ICghKC0taSkgJiYgY2IoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLylcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vZWxzZVxuICAgICAgICAgICAgIXdhc1N0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICBwcm9wYWcgJiYgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgY2IgJiYgdGhpcy50aGVuKGNiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHJldGFpbiggcmVhc29uICkge1xuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwrKztcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oXCJkaXNwb3NlXCIsIHJlYXNvbiwgdGhpcy5fX3JldGFpbnMpO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zW3JlYXNvbl0gKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyA6IFwiICsgcmVhc29uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5fX3JldGFpbnMuYWxsID09IDAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwtLTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+ICghdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiZGVzdHJveVwiLCB0aGlzLl91aWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgKCBmb2xsb3dlciApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gIT09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZm9sbG93ZXJbMF0uc3RvcmVzIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZm9sbG93ZXJbMF0uc3RvcmVzW2ZvbGxvd2VyWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLl9yZXYgID0gdGhpcy5yZXY7XG4gICAgICAgIHRoaXMuZGVhZCAgICAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZXZzICAgICAgICAgICAgID0gdGhpcy5kYXRhID0gdGhpcy5zdGF0ZSA9IHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqICBcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqICBcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogIFxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICogIFxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGlzIGZyb20gJ2lzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL1Njb3BlJztcblxuLyoqXG4gKiBJbmhlcml0YWJsZSBSZVNjb3BlIFwiSE9DXCIgKEhpZ2ggT3JkZXIgQ29tcG9uZW50KVxuICpcbiAqIEBjbGFzcyBDb21wb25lbnRcbiAqIEBkZXNjIFBhcmVudCBSZWFjdCBDb21wb25lbnQgd2l0aCBzdG9yZSBpbmplY3Rpb24gaW4gaXRzIHN0YXRlXG4gKi9cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfVxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgICAgICA9IHtcbiAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgIH1cbiAgICBcbiAgICBjb25zdHJ1Y3RvciggcCwgY3R4LCBxICkge1xuICAgICAgICBzdXBlcihwLCBjdHgsIHEpO1xuICAgICAgICBsZXQgc2NvcGUgICAgPVxuICAgICAgICAgICAgICAgIHAuX19zY29wZVxuICAgICAgICAgICAgICAgIHx8IGN0eC5yZXNjb3BlO1xuICAgICAgICB0aGlzLiRzY29wZSAgPSBzY29wZTtcbiAgICAgICAgdGhpcy4kc3RvcmVzID0gdGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUuc3RvcmVzO1xuICAgICAgICBpZiAoIHRoaXMuY29uc3RydWN0b3IudXNlICkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgIC4uLnNjb3BlLm1hcCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSwgZmFsc2UpLy8gZG9uJ3QgYmluZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCAhdGhpcy4kc2NvcGUgKVxuICAgICAgICAgICAgdGhpcy5yZW5kZXIgPSAoKSA9PiA8ZGl2Pk5vIFJlc2NvcGUgaGVyZSB7IHN1cGVyLm5hbWUgfTwvZGl2PlxuICAgIH1cbiAgICBcbiAgICBkaXNwYXRjaCggLi4uYXJneiApIHtcbiAgICAgICAgdGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUuZGlzcGF0Y2goLi4uYXJneilcbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAoIHRoaXMuY29uc3RydWN0b3IudXNlICkge1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUuYmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSwgZmFsc2UpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IudXNlXG4gICAgICAgICYmIHRoaXMuJHNjb3BlLnVuQmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSk7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyggbnAsIG5jICkge1xuICAgICAgICBsZXQgblNjb3BlID0gbnAuX19zY29wZVxuICAgICAgICAgICAgfHwgbmMucmVzY29wZSB8fCB0aGlzLiRzY29wZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggblNjb3BlICE9IHRoaXMuJHNjb3BlICkge1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2UgJiYgdGhpcy4kc2NvcGUudW5CaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlKTtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlICA9IG5TY29wZTtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlcyA9IHRoaXMuJHNjb3BlLnN0b3JlcztcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IudXNlICYmIG5TY29wZS5iaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXNjb3BlOiB0aGlzLiRzY29wZSB8fCB0aGlzLmNvbnRleHQucmVzY29wZSxcbiAgICAgICAgICAgICRzdG9yZXM6IHRoaXMuJHNjb3BlLnN0b3JlcyB8fCB0aGlzLmNvbnRleHQuJHN0b3Jlc1xuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuIHx8IDxkaXYvPlxuICAgIH1cbn07XG5cbi8qKlxuICogUmV0dXJuIGEgUmVhY3QgXCJIT0NcIiAoSGlnaCBPcmRlciBDb21wb25lbnQpIHRoYXQgOlxuICogIC0gSW5oZXJpdCBCYXNlQ29tcG9uZW50LFxuICogIC0gSW5qZWN0ICYgbWFpbnRhaW4gdGhlIHN0b3JlcyBpbiBCYXNlQ29tcG9uZW50Ojp1c2UgYW5kL29yICh1c2UpIGluIHRoZSBpbnN0YW5jZXMgc3RhdGUuXG4gKiAgLSBQcm9wYWcgKHNjb3BlKSBpbiB0aGUgcmV0dXJuZWQgUmVhY3QgQ29tcG9uZW50IGNvbnRleHRcbiAqXG4gKlxuICogQHBhcmFtIEJhc2VDb21wb25lbnQge1JlYWN0LkNvbXBvbmVudH0gQmFzZSBSZWFjdCBDb21wb25lbnQgKCBkZWZhdWx0IDogUmVhY3QuQ29tcG9uZW50IClcbiAqIEBwYXJhbSBzY29wZSB7UmVTY29wZS5TY29wZXxmdW5jdGlvbn0gdGhlIHByb3BhZ2F0ZWQgU2NvcGUgd2hlcmUgdGhlIHN0b3JlcyB3aWxsIGJlIHNlYXJjaGVkXG4gKiBAcGFyYW0gdXNlIHthcnJheX0gdGhlIGxpc3Qgb2Ygc3RvcmVzIGluamVjdGVkIGZyb20gdGhlIGN1cnJlbnQgc2NvcGVcbiAqIEByZXR1cm5zIHtSZVNjb3BlUHJvdmlkZXJ9XG4gKi9cbmZ1bmN0aW9uIHJlU2NvcGVTdGF0ZSggLi4uYXJneiApIHtcbiAgICBsZXQgW0Jhc2VDb21wb25lbnQsIHNjb3BlLCB1c2VdID0gYXJnejtcbiAgICBcbiAgICBcbiAgICBpZiAoICEoQmFzZUNvbXBvbmVudCAmJiBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSAmJiBCYXNlQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSApIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICggQmFzZUNvbXBvbmVudCApIHtcbiAgICAgICAgICAgIHJldHVybiByZVNjb3BlU3RhdGUoQmFzZUNvbXBvbmVudCwgLi4uYXJneilcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoICF1c2UgJiYgaXMuYXJyYXkoc2NvcGUpICkge1xuICAgICAgICB1c2UgICA9IHNjb3BlO1xuICAgICAgICBzY29wZSA9IG51bGw7XG4gICAgfVxuICAgIFxuICAgIHVzZSA9IFsuLi4oQmFzZUNvbXBvbmVudC51c2UgfHwgW10pLCAuLi4odXNlIHx8IFtdKV07XG4gICAgXG4gICAgY2xhc3MgUmVTY29wZVByb3ZpZGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgICAgIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgICAgIC4uLihCYXNlQ29tcG9uZW50LmNoaWxkQ29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGNvbnRleHRUeXBlcyAgICAgID0ge1xuICAgICAgICAgICAgLi4uKEJhc2VDb21wb25lbnQuY29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGRlZmF1bHRQcm9wcyAgICAgID0ge1xuICAgICAgICAgICAgLi4uKEJhc2VDb21wb25lbnQuZGVmYXVsdFByb3BzIHx8IHt9KSxcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgZGlzcGxheU5hbWUgICAgICAgPSBcInN0YXRlU2NvcGVkKFwiICsgKEJhc2VDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQmFzZUNvbXBvbmVudC5uYW1lKSArIFwiKVwiO1xuICAgICAgICBcbiAgICAgICAgY29uc3RydWN0b3IoIHAsIGN0eCwgcSApIHtcbiAgICAgICAgICAgIHN1cGVyKHAsIGN0eCwgcSk7XG4gICAgICAgICAgICB0aGlzLiRzY29wZSA9XG4gICAgICAgICAgICAgICAgcC5fX3Njb3BlXG4gICAgICAgICAgICAgICAgfHwgaXMuZm4oc2NvcGUpICYmIHNjb3BlKHRoaXMsIHAsIGN0eCkgfHwgc2NvcGVcbiAgICAgICAgICAgICAgICB8fCBjdHgucmVzY29wZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaXMuZm4oc2NvcGUpXG4gICAgICAgICAgICAmJiB0aGlzLiRzY29wZS5yZXRhaW4oKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLiRzdG9yZXMgPSB0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5zdG9yZXM7XG4gICAgICAgICAgICBpZiAoIHRoaXMuJHNjb3BlICYmIHVzZS5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy4kc2NvcGUubWFwKHRoaXMsIHVzZSwgZmFsc2UpLy8gZG9uJ3QgYmluZCBub3cgZHVlIHRvIFNTUlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCAhdGhpcy4kc2NvcGUgKVxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyID0gKCkgPT4gPGRpdj5ObyBSZXNjb3BlIGhlcmUgeyBCYXNlQ29tcG9uZW50Lm5hbWUgfTwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAkZGlzcGF0Y2goIC4uLmFyZ3ogKSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5kaXNwYXRjaCguLi5hcmd6KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgICAgICBpZiAoIHVzZS5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2NvcGUuYmluZCh0aGlzLCB1c2UsIGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbE1vdW50ICYmIHN1cGVyLmNvbXBvbmVudFdpbGxNb3VudCgpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQgJiYgc3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKVxuICAgICAgICAgICAgdXNlLmxlbmd0aFxuICAgICAgICAgICAgJiYgdGhpcy4kc2NvcGUudW5CaW5kKHRoaXMsIHVzZSk7XG4gICAgICAgICAgICBpcy5mbihzY29wZSlcbiAgICAgICAgICAgICYmIHRoaXMuJHNjb3BlLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLiRzdG9yZXM7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy4kc2NvcGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoIG5wLCBuYyApIHtcbiAgICAgICAgICAgIGxldCBuU2NvcGUgPSBucC5fX3Njb3BlXG4gICAgICAgICAgICAgICAgfHwgc2NvcGUgJiYgdGhpcy4kc2NvcGVcbiAgICAgICAgICAgICAgICB8fCBuYy5yZXNjb3BlXG4gICAgICAgICAgICAgICAgfHwgdGhpcy4kc2NvcGU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggblNjb3BlICE9IHRoaXMuJHNjb3BlICkge1xuICAgICAgICAgICAgICAgIHVzZS5sZW5ndGggJiYgdGhpcy4kc2NvcGUudW5CaW5kKHRoaXMsIHVzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2NvcGUgID0gblNjb3BlO1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlcyA9IHRoaXMuJHNjb3BlLnN0b3JlcztcbiAgICAgICAgICAgICAgICB1c2UubGVuZ3RoICYmIG5TY29wZS5iaW5kKHRoaXMsIHVzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICYmIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnAsIG5jKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICAgICAgbGV0IGN0eCA9IHN1cGVyLmdldENoaWxkQ29udGV4dCAmJiBzdXBlci5nZXRDaGlsZENvbnRleHQoKSB8fCB7fTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICAgIHJlc2NvcGU6IHRoaXMuJHNjb3BlIHx8IHRoaXMuY29udGV4dC5yZXNjb3BlLFxuICAgICAgICAgICAgICAgICRzdG9yZXM6IHRoaXMuJHNjb3BlLnN0b3JlcyB8fCB0aGlzLmNvbnRleHQuJHN0b3Jlc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gUmVTY29wZVByb3ZpZGVyO1xufVxuXG4vKipcbiAqIFJldHVybiBhIFJlYWN0IFwiSE9DXCIgKEhpZ2ggT3JkZXIgQ29tcG9uZW50KSB0aGF0IDpcbiAqICAtIEluamVjdCAmIG1haW50YWluIHRoZSBzdG9yZXMgbGlzdGVkIGJhc2VDb21wb25lbnQ6OnVzZSBhbmQvb3IgKHVzZSkgaW4gdGhlIGluc3RhbmNlcyBwcm9wcy5cbiAqICAtIFByb3BhZyAoc2NvcGUpIGluIHRoZSByZXR1cm5lZCBSZWFjdCBDb21wb25lbnQgY29udGV4dFxuICpcbiAqIEBwYXJhbSBCYXNlQ29tcG9uZW50IHtSZWFjdC5Db21wb25lbnR9IEJhc2UgUmVhY3QgQ29tcG9uZW50ICggZGVmYXVsdCA6IFJlYWN0LkNvbXBvbmVudCApXG4gKiBAcGFyYW0gc2NvcGUge1JlU2NvcGUuU2NvcGV8ZnVuY3Rpb259IHRoZSBwcm9wYWdhdGVkIFNjb3BlIHdoZXJlIHRoZSBzdG9yZXMgd2lsbCBiZSBzZWFyY2hlZCAoIGRlZmF1bHQgOiB0aGUgZGVmYXVsdFxuICogICAgIFJlU2NvcGU6OlNjb3BlOjpzY29wZXMuc3RhdGljIHNjb3BlIClcbiAqIEBwYXJhbSB1c2Uge2FycmF5fSB0aGUgbGlzdCBvZiBzdG9yZXMgdG8gaW5qZWN0IGZyb20gdGhlIGN1cnJlbnQgc2NvcGVcbiAqIEByZXR1cm5zIHtSZVNjb3BlUHJvdmlkZXJ9XG4gKi9cbmZ1bmN0aW9uIHJlU2NvcGVQcm9wcyggLi4uYXJneiApIHtcbiAgICBsZXQgW0Jhc2VDb21wb25lbnQsIHNjb3BlLCB1c2VdID0gYXJnejtcbiAgICBcbiAgICBpZiAoICEoQmFzZUNvbXBvbmVudCAmJiBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSAmJiBCYXNlQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSApIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICggQmFzZUNvbXBvbmVudCApIHtcbiAgICAgICAgICAgIHJldHVybiByZVNjb3BlUHJvcHMoQmFzZUNvbXBvbmVudCwgLi4uYXJneilcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoICF1c2UgJiYgaXMuYXJyYXkoc2NvcGUpICkge1xuICAgICAgICB1c2UgICA9IHNjb3BlO1xuICAgICAgICBzY29wZSA9IG51bGw7XG4gICAgfVxuICAgIFxuICAgIHVzZSA9IFsuLi4oQmFzZUNvbXBvbmVudC51c2UgfHwgW10pLCAuLi4odXNlIHx8IFtdKV07XG4gICAgXG4gICAgXG4gICAgcmV0dXJuIHJlU2NvcGVTdGF0ZShjbGFzcyBSZVNjb3BlUHJvcHNQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgICAgIC4uLihCYXNlQ29tcG9uZW50LmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9O1xuICAgICAgICBzdGF0aWMgY29udGV4dFR5cGVzICAgICAgPSB7XG4gICAgICAgICAgICAuLi4oQmFzZUNvbXBvbmVudC5jb250ZXh0VHlwZXMgfHwge30pLFxuICAgICAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICAgICAgfTtcbiAgICAgICAgc3RhdGljIGRpc3BsYXlOYW1lICAgICAgID0gXCJwcm9wc1Njb3BlZChcIiArIChCYXNlQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IEJhc2VDb21wb25lbnQubmFtZSkgKyBcIilcIjtcbiAgICAgICAgXG4gICAgICAgIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiA8QmFzZUNvbXBvbmVudCB7IC4uLnRoaXMucHJvcHMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4udGhpcy5zdGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGRpc3BhdGNoPXsgKCAuLi5hcmd6ICkgPT4gdGhpcy4kZGlzcGF0Y2goLi4uYXJneikgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzdG9yZXM9eyB0aGlzLiRzdG9yZXMgfS8+XG4gICAgICAgIH1cbiAgICB9LCBzY29wZSwgdXNlKTtcbn1cblxuZXhwb3J0IHtcbiAgICBDb21wb25lbnQgYXMgZGVmYXVsdCxcbiAgICBDb21wb25lbnQsXG4gICAgcmVTY29wZVByb3BzLFxuICAgIHJlU2NvcGVQcm9wcyBhcyByZXNjb3BlUHJvcHMsXG4gICAgcmVTY29wZVN0YXRlLFxuICAgIHJlU2NvcGVTdGF0ZSBhcyByZXNjb3BlU3RhdGVcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlYWN0VG9vbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByb3AtdHlwZXNcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9