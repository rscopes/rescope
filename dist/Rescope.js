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
	            parent = _ref2.parent,
	            key = _ref2.key,
	            id = _ref2.id,
	            state = _ref2.state,
	            data = _ref2.data,
	            name = _ref2.name,
	            _ref2$incrementId = _ref2.incrementId,
	            incrementId = _ref2$incrementId === undefined ? !!key : _ref2$incrementId,
	            defaultMaxListeners = _ref2.defaultMaxListeners,
	            persistenceTm = _ref2.persistenceTm,
	            autoDestroy = _ref2.autoDestroy,
	            rootEmitter = _ref2.rootEmitter;
	
	        _classCallCheck(this, Scope);
	
	        var _this = _possibleConstructorReturn(this, (Scope.__proto__ || Object.getPrototypeOf(Scope)).call(this));
	
	        _this._maxListeners = defaultMaxListeners || _this.constructor.defaultMaxListeners;
	
	        id = id || key && (parent && parent._id || '') + '::' + key;
	
	        _this._isLocalId = !id;
	
	        id = id || "_____" + shortid.generate();
	
	        if (openScopes[id] && !incrementId) {
	            var _ret;
	
	            _this._id = id;
	            openScopes[id].register(storesMap);
	            return _ret = openScopes[id], _possibleConstructorReturn(_this, _ret);
	        } else if (openScopes[id] && incrementId) {
	            var i = -1;
	            while (openScopes[id + '[' + ++i + ']']) {}
	            id = id + '[' + i + ']';
	        }
	
	        _this._id = id;
	        openScopes[id] = _this;
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
	        value: function mount(storesList, snapshot, state, data) {
	            var _this2 = this;
	
	            if (is.array(storesList)) {
	                storesList.forEach(function (k) {
	                    return _this2._mount(k, snapshot, state, data);
	                });
	            } else {
	                this._mount.apply(this, arguments);
	            }
	            return this;
	        }
	    }, {
	        key: '_mount',
	        value: function _mount(id, snapshot, state, data) {
	            if (typeof id !== 'string') {
	                this.register(_defineProperty({}, id.name, id.store));
	                id = id.name;
	            }
	
	            if (!this.__scope[id]) {
	                var _parent;
	
	                //ask mixed || parent
	                if (this.__mixed.reduce(function (mounted, ctx) {
	                    return mounted || ctx._mount(id, snapshot, state, data);
	                }, false) || !this.parent) return;
	                return (_parent = this.parent)._mount.apply(_parent, arguments);
	            } else {
	                var store = this.__scope[id],
	                    ctx = void 0;
	                if (is.fn(store)) {
	                    this.__scope[id] = new store(this, { snapshot: snapshot, name: id, state: state, data: data });
	                } else if (snapshot) store.restore(snapshot);else {
	                    if (state !== undefined && data === undefined) store.setState(state);else if (state !== undefined) store.state = state;
	
	                    if (data !== undefined) store.push(data);
	                }
	                this._watchStore(id);
	            }
	
	            return this.__scope[id];
	        }
	    }, {
	        key: '_watchStore',
	        value: function _watchStore(id, state, data) {
	            var _this3 = this;
	
	            //if ( !this.__scope[id] ) {//ask mixed || parent
	            //    if ( this.__mixed.reduce(( mounted, ctx ) => (mounted || ctx._watchStore(id, state, data)), false) ||
	            //        !this.parent )
	            //        return;
	            //    return this.parent._watchStore(...arguments);
	            //}
	            if (!this.__listening[id] && !is.fn(this.__scope[id])) {
	                !this.__scope[id]._autoDestroy && this.__scope[id].retain("scoped");
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
	                        return _this6._mount(id, null, v);
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
	    }, {
	        key: '_getAllChilds',
	        value: function _getAllChilds() {
	            var childs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	            childs.push.apply(childs, _toConsumableArray(this._childScopes));
	            this._childScopes.forEach(function (ctx) {
	                ctx._getAllChilds(childs);
	            });
	            return childs;
	        }
	
	        /**
	         *
	         * @param withChilds
	         * @param __withMixed
	         * @param _output
	         * @returns {*|{state: {}, data: {}}}
	         */
	
	    }, {
	        key: 'serialize',
	        value: function serialize() {
	            var output = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	            var ctx = this.__scope;
	            output[this._id] = {};
	
	            Object.keys(ctx).forEach(function (id) {
	                if (is.fn(ctx[id])) return;
	
	                ctx[id].serialize(output);
	            });
	
	            this._childScopes.forEach(function (ctx) {
	                !ctx._isLocalId && ctx.serialize(output);
	            });
	
	            this.__mixed.forEach(function (ctx) {
	                !ctx._isLocalId && ctx.serialize(output);
	            });
	
	            return output;
	        }
	    }, {
	        key: 'restore',
	        value: function restore(snapshot, force) {
	            var _this10 = this;
	
	            var ctx = this.__scope;
	
	            if (!snapshot[this._id]) return;
	
	            snapshot && Object.keys(ctx).forEach(function (name) {
	                var snap = snapshot[_this10._id + '/' + name];
	
	                if (snap) {
	
	                    if (force && !is.fn(ctx[name])) ctx[name].destroy();
	                    _this10.mount(name, snapshot); // quiet
	                }
	            });
	
	            this.__mixed.forEach(function (ctx) {
	                !ctx._isLocalId && ctx.restore(snapshot, force);
	            });
	
	            this._childScopes.forEach(function (ctx) {
	                !ctx._isLocalId && ctx.restore(snapshot, force);
	            });
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
	
	            if (this._followers.length) this._followers.forEach(function (_ref3) {
	                var obj = _ref3[0],
	                    key = _ref3[1],
	                    as = _ref3[2],
	                    lastRevs = _ref3[3],
	                    remaps = _ref3[3];
	
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
	                    !ctx[key]._autoDestroy && ctx[key].dispose("scoped");
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
	
	var _class, _temp, _class2, _temp2;
	
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
	
	        // autoDestroyTm
	        _this._autoDestroy = !!_this._persistenceTm;
	        _this._persistenceTm = cfg.persistenceTm || _static.persistenceTm || (cfg.autoDestroy || _static.autoDestroy) && 5;
	        //
	        //if ( is.string(argz[0]) ) {
	        //    if ( scope.__scope[name] )
	        //        console.warn("ReScope: Overwriting an existing static named store ( %s ) !!", name);
	        //    scope.__scope[name] = this;
	        //}
	
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
	
	        if (apply) _this.apply = apply;
	
	        if (cfg.snapshot && cfg.snapshot[_this.scopeObj._id + '/' + name]) {
	            _this.restore(cfg.snapshot);
	            _this._stable = true;
	            scope.bind(_this, _this._use, false);
	        } else {
	
	            if (_static.data !== undefined) _this.data = _extends({}, _static.data);
	            if (cfg.hasOwnProperty("data") && cfg.data !== undefined) _this.data = cfg.data;
	            if (cfg.hasOwnProperty("state") && cfg.state !== undefined) initialState = _extends({}, initialState, cfg.state);
	
	            if (initialState || _this._use.length) {
	                // sync apply
	                _this.state = _extends({}, initialState || {}, scope.map(_this, _this._use));
	                if (_this.shouldApply(_this.state) && _this.data === undefined) {
	                    _this.data = _this.apply(_this.data, _this.state, _this.state);
	                    applied = true;
	                }
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
	         * is stable
	         * @returns bool
	         */
	
	    }, {
	        key: 'serialize',
	        value: function serialize() {
	            var _this8 = this;
	
	            var output = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	            var completeState = arguments[1];
	
	            var refs = this._use.reduce(function (map, key) {
	                //todo
	                var name = void 0,
	                    alias = void 0,
	                    path = void 0,
	                    store = void 0;
	                if (key.store && key.name) {
	                    alias = name = key.name;
	                } else if (is.fn(key)) {
	                    name = alias = key.name || key.defaultName;
	                } else {
	                    key = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
	                    name = key[1];
	                    path = key[2] && key[2].substr(1);
	                    alias = key[3] || path && path.match(/([^\.]*)$/)[0] || key[1];
	                }
	
	                if (!_this8.scopeObj.stores[name].scopeObj._isLocalId) map[alias] = _this8.scopeObj.stores[name].scopeObj._id + '/' + name;
	
	                return map;
	            }, {}) || {};
	            output[this.scopeObj._id + '/' + this.name] = {
	                state: completeState ? _extends({}, this.state) : Object.keys(this.state).reduce(function (h, k) {
	                    return !refs[k] && (h[k] = _this8.state[k]), h;
	                }, {}),
	                data: this.data,
	                refs: refs
	            };
	            return output;
	        }
	
	        /**
	         * is stable
	         * @returns bool
	         */
	
	    }, {
	        key: 'restore',
	        value: function restore(snapshot) {
	            var snap = snapshot[this.scopeObj._id + '/' + this.name];
	            if (snap) {
	                this.state = snap.state;
	                Object.keys(snap.refs).forEach(function (key) {
	                    //todo
	                    if (snapshot[snap.refs[key]]) snap.state[key] = snapshot[snap.refs[key]].data;else console.warn('not found : ', key, snap.refs[key]);
	                });
	
	                this.data = snap.data;
	            }
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
	            var _this9 = this;
	
	            if (this._stable) return cb(null, this.data);
	            this.once('stable', function (e) {
	                return cb(null, _this9.data);
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
	            var _this10 = this;
	
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
	                    var data = follower[2] ? _this10.retrieve(follower[2]) : _this10.data;
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
	            var _this11 = this;
	
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
	                        _this11._destroyTM = null;
	                        _this11.then(function (s) {
	                            !_this11.__retains.all && _this11.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this11.__retains.all && _this11.destroy();
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
	                    path = key[2] && key[2].substr(1);
	                    store = scope.stores[key[1]];
	                    alias = key[3] || path && path.match(/([^\.]*)$/)[0] || key[1];
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
	                        path = key[2] && key[2].substr(1);
	                        store = scope.stores[key[1]];
	                        alias = key[3] || path && path.match(/([^\.]*)$/)[0] || key[1];
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
	
	
	Store.Seed = (_temp2 = _class2 = function (_Store) {
	    _inherits(SeedStore, _Store);
	
	    function SeedStore() {
	        _classCallCheck(this, SeedStore);
	
	        return _possibleConstructorReturn(this, (SeedStore.__proto__ || Object.getPrototypeOf(SeedStore)).apply(this, arguments));
	    }
	
	    return SeedStore;
	}(Store), _class2.SEED = true, _temp2);
	
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
	
	var SimpleObjectProto = {}.constructor;
	
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
	 * @param additionalContext {Object} context to be propagated
	 * @returns {ReScopeProvider}
	 */
	function reScopeState() {
	    var _class2, _temp2;
	
	    for (var _len = arguments.length, argz = Array(_len), _key = 0; _key < _len; _key++) {
	        argz[_key] = arguments[_key];
	    }
	
	    var BaseComponent = (!argz[0] || argz[0].prototype && argz[0].prototype.isReactComponent) && argz.shift(),
	        scope = (!argz[0] || argz[0] instanceof _Scope2.default || _is2.default.fn(argz[0])) && argz.shift(),
	        use = (!argz[0] || _is2.default.array(argz[0])) && argz.shift(),
	        additionalContext = (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift();
	
	    if (!(BaseComponent && BaseComponent.prototype && BaseComponent.prototype.isReactComponent)) {
	        return function (BaseComponent) {
	            return reScopeState(BaseComponent, scope, use, additionalContext);
	        };
	    }
	
	    use = [].concat(_toConsumableArray(BaseComponent.use || []), _toConsumableArray(use || []));
	    additionalContext = additionalContext && Object.keys(additionalContext).reduce(function (h, k) {
	        return h[k] = _propTypes2.default.any, h;
	    }, {}) || {};
	
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
	                    'No ReScope context in ',
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
	    }(BaseComponent), _class2.childContextTypes = _extends({}, BaseComponent.childContextTypes || {}, additionalContext, {
	        rescope: _propTypes2.default.object,
	        $stores: _propTypes2.default.object
	    }), _class2.contextTypes = _extends({}, BaseComponent.contextTypes || {}, additionalContext, {
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
	 * @param additionalContext {Object} context to be propagated
	 * @returns {ReScopeProvider}
	 */
	function reScopeProps() {
	    var _class3, _temp3;
	
	    for (var _len2 = arguments.length, argz = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        argz[_key2] = arguments[_key2];
	    }
	
	    var BaseComponent = (!argz[0] || argz[0].prototype && argz[0].prototype.isReactComponent) && argz.shift(),
	        scope = (!argz[0] || argz[0] instanceof _Scope2.default || _is2.default.fn(argz[0])) && argz.shift(),
	        use = (!argz[0] || _is2.default.array(argz[0])) && argz.shift(),
	        additionalContext = (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift();
	
	    if (!(BaseComponent && BaseComponent.prototype && BaseComponent.prototype.isReactComponent)) {
	        return function (BaseComponent) {
	            return reScopeProps(BaseComponent, scope, use, additionalContext);
	        };
	    }
	
	    use = [].concat(_toConsumableArray(BaseComponent.use || []), _toConsumableArray(use || []));
	    additionalContext = additionalContext && Object.keys(additionalContext).reduce(function (h, k) {
	        return h[k] = _propTypes2.default.any, h;
	    }, {}) || {};
	
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
	    }(_react2.default.Component), _class3.childContextTypes = _extends({}, BaseComponent.contextTypes || {}, additionalContext, {
	        rescope: _propTypes2.default.object,
	        $stores: _propTypes2.default.object
	    }), _class3.contextTypes = _extends({}, BaseComponent.contextTypes || {}, additionalContext, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTE4MGFkYjNlNTkwYThlZDJkNzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlU2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Njb3BlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhY3RUb29scy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiJdLCJuYW1lcyI6WyJSVG9vbHMiLCJTdG9yZSIsIkNvbnRleHQiLCJTY29wZSIsIkNvbXBvbmVudCIsInJlU2NvcGVQcm9wcyIsInJlU2NvcGVTdGF0ZSIsIndpdGhTY29wZSIsImlzIiwicmVxdWlyZSIsIkV2ZW50RW1pdHRlciIsInNob3J0aWQiLCJfX3Byb3RvX19wdXNoIiwidGFyZ2V0IiwiaWQiLCJwYXJlbnQiLCJmbiIsInByb3RvdHlwZSIsIm9wZW5TY29wZXMiLCJzY29wZXMiLCJza2V5IiwiYXJyYXkiLCJzb3J0IiwiYSIsImIiLCJmaXJzdG5hbWUiLCJqb2luIiwic3RvcmVzTWFwIiwia2V5Iiwic3RhdGUiLCJkYXRhIiwibmFtZSIsImluY3JlbWVudElkIiwiZGVmYXVsdE1heExpc3RlbmVycyIsInBlcnNpc3RlbmNlVG0iLCJhdXRvRGVzdHJveSIsInJvb3RFbWl0dGVyIiwiX21heExpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwiX2lkIiwiX2lzTG9jYWxJZCIsImdlbmVyYXRlIiwicmVnaXN0ZXIiLCJpIiwiX3BlcnNpc3RlbmNlVG0iLCJzdG9yZXMiLCJkZWFkIiwiRXJyb3IiLCJzb3VyY2VzIiwiX2NoaWxkU2NvcGVzIiwiX2NoaWxkU2NvcGVzTGlzdCIsIl91blN0YWJsZUNoaWxkcyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfX2xpc3RlbmluZyIsIl9fc2NvcGUiLCJfX21peGVkIiwiX19taXhlZExpc3QiLCJfZm9sbG93ZXJzIiwicmV0YWluIiwiX3N0YWJsZSIsIndhaXQiLCJvbiIsIl9fcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwiX2FkZENoaWxkIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJzdG9yZXNMaXN0Iiwic25hcHNob3QiLCJmb3JFYWNoIiwiX21vdW50IiwiayIsImFyZ3VtZW50cyIsInN0b3JlIiwicmVkdWNlIiwibW91bnRlZCIsImN0eCIsInJlc3RvcmUiLCJ1bmRlZmluZWQiLCJzZXRTdGF0ZSIsInB1c2giLCJfd2F0Y2hTdG9yZSIsIl9hdXRvRGVzdHJveSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJyZWxpbmsiLCJPYmplY3QiLCJrZXlzIiwic2luZ2xldG9uIiwic3JjQ3R4IiwiZXh0ZXJuYWwiLCJmb3JjZSIsImxjdHgiLCJfc3RvcmVzIiwiY29uc29sZSIsImluZm8iLCJfX3Byb3RvX18iLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIl9zdGF0ZSIsInNldCIsInYiLCJfZGF0YSIsIm9iaiIsImFzIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmVmS2V5cyIsIm1hcCIsInN0cmluZyIsInBhcnNlUmVmIiwicmV2cyIsInJlZiIsInN0b3JlSWQiLCJyZXYiLCJyZWZzIiwibW91bnQiLCJnZXRVcGRhdGVzIiwiZm9sbG93ZXJzIiwibGVuZ3RoIiwic3BsaWNlIiwidG8iLCJiaW5kIiwibWl4ZWRDV1VubW91bnQiLCJ1bk1vdW50S2V5IiwiaXNSZWFjdENvbXBvbmVudCIsImhhc093blByb3BlcnR5IiwidW5CaW5kIiwic3BsaXQiLCJyZXRyaWV2ZSIsInBhdGgiLCJzbGljZSIsInN0b3Jlc1Jldk1hcCIsImxvY2FsIiwiX3JldiIsInVwZGF0ZWQiLCJnZXRTdG9yZXNSZXZzIiwib3V0cHV0IiwiYWxpYXMiLCJjaGlsZHMiLCJfZ2V0QWxsQ2hpbGRzIiwic2VyaWFsaXplIiwic25hcCIsImRlc3Ryb3kiLCJfcmVmIiwiYWN0aW9uIiwidHJpZ2dlciIsImRpc3BhdGNoIiwiY2IiLCJvbmNlIiwicmVhc29uIiwiZW1pdCIsImVycm9yIiwiX3N0YWJpbGl6ZXJUTSIsImNsZWFyVGltZW91dCIsIl9wcm9wYWdUTSIsInJlbWFwcyIsIndhc1N0YWJsZSIsImluZGV4T2YiLCJ1biIsIl9kZXN0cm95VE0iLCJ0aGVuIiwicmVtb3ZlTGlzdGVuZXIiLCJzaGlmdCIsIl9ybUNoaWxkIiwic2NvcGUiLCJFbWl0dGVyIiwiX2V2ZW50cyIsImV2dCIsImFyZ3oiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwiX3N0YXRpYyIsImdldFNjb3BlIiwic3RhdGljU2NvcGUiLCJjZmciLCJ3YXRjaHMiLCJ1c2UiLCJhcHBseSIsImluaXRpYWxTdGF0ZSIsImFwcGxpZWQiLCJfdWlkIiwiX29uU3RhYmlsaXplIiwic2NvcGVPYmoiLCJfcmV2cyIsIl9yZXF1aXJlIiwiX3VzZSIsIm1hdGNoIiwicmVmMiIsInNob3VsZEFwcGx5IiwibWFuYWdlZCIsIndhcm4iLCJuRGF0YXMiLCJyIiwiY0RhdGFzIiwiaXNDb21wbGV0ZSIsImZvbGxvdyIsImNhbGwiLCJjaGFuZ2VzIiwicmVmaW5lIiwiX3N0YWJpbGl6ZXIiLCJzdGFibGUiLCJhY3Rpb25zIiwibnMiLCJkb1dhaXQiLCJvcmlnaW4iLCJpbml0aWFsT3V0cHV0cyIsInMiLCJuZXh0U3RhdGUiLCJfY2hhbmdlc1NXIiwibmV4dERhdGFzIiwiaGFzRGF0YUNoYW5nZSIsInBTdGF0ZSIsInN5bmMiLCJjaGFuZ2UiLCJzdGFiaWxpemUiLCJtZSIsImZyb20iLCJwdWxsIiwiY29tcGxldGVTdGF0ZSIsImRlZmF1bHROYW1lIiwic3Vic3RyIiwiaCIsInByZXZpb3VzIiwic2hvdWxkUHJvcGFnIiwiZm9sbG93ZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJjb21wb25lbnQiLCJ0YXJnZXRSZXZzIiwidGFyZ2V0U2NvcGUiLCJmaWx0ZXIiLCJTZWVkIiwiU0VFRCIsIlNpbXBsZU9iamVjdFByb3RvIiwicCIsInEiLCJyZXNjb3BlIiwiJHNjb3BlIiwiJHN0b3JlcyIsInJlbmRlciIsIm5wIiwibmMiLCJuU2NvcGUiLCJjb250ZXh0IiwicHJvcHMiLCJjaGlsZHJlbiIsImNoaWxkQ29udGV4dFR5cGVzIiwib2JqZWN0IiwiY29udGV4dFR5cGVzIiwiQmFzZUNvbXBvbmVudCIsImFkZGl0aW9uYWxDb250ZXh0IiwiYW55IiwiUmVTY29wZVByb3ZpZGVyIiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiLCIkZGlzcGF0Y2giLCJkZWZhdWx0IiwicmVzY29wZVByb3BzIiwicmVzY29wZVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1hBOzs7O0FBQ0E7Ozs7QUFDQTs7S0FBd0JBLE07Ozs7OztBQUV4QixpQkFBTUMsS0FBTixtQixDQS9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQWdDZTtBQUNYQSx5QkFEVztBQUVYQywyQkFGVztBQUdYQyx5QkFIVztBQUlYQyxjQUFjSixPQUFPSSxTQUpWO0FBS1hDLGlCQUFjTCxPQUFPSyxZQUxWO0FBTVhDLGlCQUFjTixPQUFPTSxZQU5WO0FBT1hDLGNBQWNQLE9BQU9NO0FBUFYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkEsS0FBSUUsS0FBa0IsbUJBQUFDLENBQVEsQ0FBUixDQUF0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QUFBLHNDQW1CTTtBQUFBOztBQUNMLHdCQUFPLDhCQUFDLGFBQUQsZUFBb0IsS0FBS0MsS0FBekIsRUFDb0IsS0FBSzVOLEtBRHpCO0FBRWUsZ0NBQVk7QUFBQSxnQ0FBZSxPQUFLdU8sU0FBTCx5QkFBZjtBQUFBLHNCQUYzQjtBQUdlLDhCQUFVLEtBQUtqQixPQUg5QixJQUFQO0FBSUg7QUF4QkU7O0FBQUE7QUFBQSxPQUFnRCxnQkFBTS9PLFNBQXRELFdBQ0l1UCxpQkFESixnQkFFS0csY0FBY0QsWUFBZCxJQUE4QixFQUZuQyxFQUdLRSxpQkFITDtBQUlDZCxrQkFBUyxvQkFBVVcsTUFKcEI7QUFLQ1Qsa0JBQVMsb0JBQVVTO0FBTHBCLGlCQU9JQyxZQVBKLGdCQVFLQyxjQUFjRCxZQUFkLElBQThCLEVBUm5DLEVBU0tFLGlCQVRMO0FBVUNkLGtCQUFTLG9CQUFVVyxNQVZwQjtBQVdDVCxrQkFBUyxvQkFBVVM7QUFYcEIsaUJBYUlPLFdBYkosR0Fhd0Isa0JBQWtCTCxjQUFjSyxXQUFkLElBQTZCTCxjQUFjL04sSUFBN0QsSUFBcUUsR0FiN0YsV0F5QkoySSxLQXpCSSxFQXlCR1ksR0F6QkgsQ0FBUDtBQTBCSDs7U0FHZ0IrRSxPLEdBQWJqUSxTO1NBQ0FBLFMsR0FBQUEsUztTQUNBQyxZLEdBQUFBLFk7U0FDZ0JpUSxZLEdBQWhCalEsWTtTQUNBQyxZLEdBQUFBLFk7U0FDZ0JpUSxZLEdBQWhCalEsWTs7Ozs7O0FDN1JKLG1DOzs7Ozs7QUNBQSx3QyIsImZpbGUiOiJkaXN0L1JlU2NvcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTE4MGFkYjNlNTkwYThlZDJkNzgiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbmltcG9ydCBTY29wZSBmcm9tIFwiLi9TY29wZVwiO1xuaW1wb3J0IFN0b3JlIGZyb20gXCIuL1N0b3JlXCI7XG5pbXBvcnQgUmVhY3RUb29scywgKiBhcyBSVG9vbHMgZnJvbSBcIi4vUmVhY3RUb29sc1wiO1xuXG5TY29wZS5TdG9yZSA9IFN0b3JlO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIFN0b3JlLFxuICAgIENvbnRleHQgICAgIDogU2NvcGUsXG4gICAgU2NvcGUsXG4gICAgQ29tcG9uZW50ICAgOiBSVG9vbHMuQ29tcG9uZW50LFxuICAgIHJlU2NvcGVQcm9wczogUlRvb2xzLnJlU2NvcGVQcm9wcyxcbiAgICByZVNjb3BlU3RhdGU6IFJUb29scy5yZVNjb3BlU3RhdGUsXG4gICAgd2l0aFNjb3BlICAgOiBSVG9vbHMucmVTY29wZVN0YXRlXG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVTY29wZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuXG52YXIgaXMgICAgICAgICAgICAgID0gcmVxdWlyZSgnaXMnKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgPSByZXF1aXJlKCcuL0VtaXR0ZXInKSxcbiAgICBzaG9ydGlkICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJylcbiAgICAsIF9fcHJvdG9fX3B1c2ggPSAoIHRhcmdldCwgaWQsIHBhcmVudCApID0+IHtcbiAgICAgICAgbGV0IGZuICAgICAgICAgICA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfTtcbiAgICAgICAgZm4ucHJvdG90eXBlICAgICA9IHBhcmVudCA/IG5ldyBwYXJlbnRbXCJfXCIgKyBpZF0oKSA6IHRhcmdldFtpZF0gfHwge307XG4gICAgICAgIHRhcmdldFtpZF0gICAgICAgPSBuZXcgZm4oKTtcbiAgICAgICAgdGFyZ2V0WydfJyArIGlkXSA9IGZuO1xuICAgIH0sXG4gICAgb3BlblNjb3BlcyAgICAgID0ge31cbjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgc3RhdGljIHBlcnNpc3RlbmNlVG0gPSAxOy8vIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuIGRpc3Bvc2UgcmVhY2ggMFxuICAgIHN0YXRpYyBTdG9yZSAgICAgICAgID0gbnVsbDtcbiAgICBzdGF0aWMgc2NvcGVzICAgICAgICA9IG9wZW5TY29wZXM7Ly8gYWxsIGFjdGl2ZSBzY29wZXNcbiAgICBcbiAgICBzdGF0aWMgZ2V0U2NvcGUoIHNjb3BlcyApIHtcbiAgICAgICAgbGV0IHNrZXkgPSBpcy5hcnJheShzY29wZXMpID8gc2NvcGVzLnNvcnQoKCBhLCBiICkgPT4ge1xuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA8IGIuZmlyc3RuYW1lICkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA+IGIuZmlyc3RuYW1lICkgcmV0dXJuIDE7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSkuam9pbignOjonKSA6IHNjb3BlcztcbiAgICAgICAgcmV0dXJuIG9wZW5TY29wZXNbc2tleV0gPSBvcGVuU2NvcGVzW3NrZXldIHx8IG5ldyBTY29wZSh7fSwgeyBpZDogc2tleSB9KTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIEluaXQgYSBSZXNjb3BlIHNjb3BlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzTWFwIHtPYmplY3R9IE9iamVjdCB3aXRoIHRoZSBvcmlnaW4gc3RvcmVzXG4gICAgICogQHBhcmFtIGlkIHtzdHJpbmd9IEBvcHRpb25hbCBpZCAoIGlmIHRoaXMgaWQgZXhpc3Qgc3RvcmVzTWFwIHdpbGwgYmUgbWVyZ2Ugb24gdGhlICdpZCcgc2NvcGUpXG4gICAgICogQHBhcmFtIHBhcmVudFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZGVmYXVsdE1heExpc3RlbmVyc1xuICAgICAqIEBwYXJhbSBwZXJzaXN0ZW5jZVRtIHtudW1iZXIpIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuIGRpc3Bvc2UgcmVhY2ggMFxuICAgICAqIEBwYXJhbSBhdXRvRGVzdHJveSAge2Jvb2x9IHdpbGwgdHJpZ2dlciByZXRhaW4gJiBkaXNwb3NlIGFmdGVyIHN0YXJ0XG4gICAgICogQHJldHVybnMge1Njb3BlfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCBzdG9yZXNNYXAsIHsgcGFyZW50LCBrZXksIGlkLCBzdGF0ZSwgZGF0YSwgbmFtZSwgaW5jcmVtZW50SWQgPSAhIWtleSwgZGVmYXVsdE1heExpc3RlbmVycywgcGVyc2lzdGVuY2VUbSwgYXV0b0Rlc3Ryb3ksIHJvb3RFbWl0dGVyIH0gPSB7fSApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX21heExpc3RlbmVycyA9IGRlZmF1bHRNYXhMaXN0ZW5lcnMgfHwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgICAgICBcbiAgICAgICAgaWQgPSBpZFxuICAgICAgICAgICAgfHwga2V5ICYmICgocGFyZW50ICYmIHBhcmVudC5faWQgfHwgJycpICsgJzo6JyArIGtleSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9pc0xvY2FsSWQgPSAhaWQ7XG4gICAgICAgIFxuICAgICAgICBpZCA9IGlkIHx8IChcIl9fX19fXCIgKyBzaG9ydGlkLmdlbmVyYXRlKCkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBvcGVuU2NvcGVzW2lkXSAmJiAhaW5jcmVtZW50SWQgKSB7XG4gICAgICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICAgICAgb3BlblNjb3Blc1tpZF0ucmVnaXN0ZXIoc3RvcmVzTWFwKTtcbiAgICAgICAgICAgIHJldHVybiBvcGVuU2NvcGVzW2lkXVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBvcGVuU2NvcGVzW2lkXSAmJiBpbmNyZW1lbnRJZCApIHtcbiAgICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgICB3aGlsZSAoIG9wZW5TY29wZXNbaWQgKyAnWycgKyAoKytpKSArICddJ10gKSA7XG4gICAgICAgICAgICBpZCA9IGlkICsgJ1snICsgaSArICddJztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5faWQgICAgICAgICAgICA9IGlkO1xuICAgICAgICBvcGVuU2NvcGVzW2lkXSAgICAgID0gdGhpcztcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IHBlcnNpc3RlbmNlVG0gfHwgdGhpcy5jb25zdHJ1Y3Rvci5wZXJzaXN0ZW5jZVRtO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdG9yZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSAgPSB7fTtcbiAgICAgICAgdGhpcy5kYXRhICAgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIGlmICggcGFyZW50ICYmIHBhcmVudC5kZWFkIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHVzZSBhIGRlYWQgc2NvcGUgYXMgcGFyZW50ICFcIik7XG4gICAgICAgIFxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnNvdXJjZXMgICAgICAgICAgPSBbXTtcbiAgICAgICAgdGhpcy5fY2hpbGRTY29wZXMgICAgID0gW107XG4gICAgICAgIHRoaXMuX2NoaWxkU2NvcGVzTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcyAgPSAwO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyAgICAgPSB7IGFsbDogMSB9O1xuICAgICAgICB0aGlzLl9fbGlzdGVuaW5nID0ge307XG4gICAgICAgIHRoaXMuX19zY29wZSAgICAgPSB7fTtcbiAgICAgICAgdGhpcy5fX21peGVkICAgICA9IFtdO1xuICAgICAgICB0aGlzLl9fbWl4ZWRMaXN0ID0gW107XG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyAgPSBbXTtcbiAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICBwYXJlbnQucmV0YWluKFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgIGlmICggIXJvb3RFbWl0dGVyICkge1xuICAgICAgICAgICAgICAgICFwYXJlbnQuX3N0YWJsZSAmJiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpO1xuICAgICAgICAgICAgICAgIHBhcmVudC5vbih0aGlzLl9fcGFyZW50TGlzdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoXCJ3YWl0aW5nUGFyZW50XCIpLFxuICAgICAgICAgICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIiksXG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudC5vbih0aGlzLl9fcGFyZW50TGlzdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZSc6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMucmVnaXN0ZXIocGFyZW50Ll9fc2NvcGUsIHN0YXRlLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoc3RvcmVzTWFwLCBzdGF0ZSwgZGF0YSk7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwtLTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gIXRoaXMuX19sb2Nrcy5hbGw7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHBhcmVudCApIHtcbiAgICAgICAgICAgIHBhcmVudC5fYWRkQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBhdXRvRGVzdHJveSApXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIHRtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRhaW4oXCJhdXRvRGVzdHJveVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldCBkYXRhcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3Jlc0xpc3QsIGluIHRoaXMgc2NvcGUgb3IgaW4gaXRzIHBhcmVudHMgb3IgbWl4ZWQgc2NvcGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzTGlzdCB7c3RyaW5nfHN0b3JlUmVmfSBTdG9yZSBuYW1lLCBBcnJheSBvZiBTdG9yZSBuYW1lcywgb3IgUmVzY29wZSBzdG9yZSByZWYgZnJvbSBTdG9yZTo6YXMgb3JcbiAgICAgKiAgICAgU3RvcmU6YXNcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtTY29wZX1cbiAgICAgKi9cbiAgICBtb3VudCggc3RvcmVzTGlzdCwgc25hcHNob3QsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICBpZiAoIGlzLmFycmF5KHN0b3Jlc0xpc3QpICkge1xuICAgICAgICAgICAgc3RvcmVzTGlzdC5mb3JFYWNoKGsgPT4gdGhpcy5fbW91bnQoaywgc25hcHNob3QsIHN0YXRlLCBkYXRhKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VudCguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBfbW91bnQoIGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIGlkICE9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoeyBbaWQubmFtZV06IGlkLnN0b3JlIH0pO1xuICAgICAgICAgICAgaWQgPSBpZC5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fc2NvcGVbaWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbWl4ZWQucmVkdWNlKCggbW91bnRlZCwgY3R4ICkgPT4gKG1vdW50ZWQgfHwgY3R4Ll9tb3VudChpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhKSksIGZhbHNlKSB8fFxuICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Ll9tb3VudCguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHN0b3JlID0gdGhpcy5fX3Njb3BlW2lkXSwgY3R4O1xuICAgICAgICAgICAgaWYgKCBpcy5mbihzdG9yZSkgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX3Njb3BlW2lkXSA9IG5ldyBzdG9yZSh0aGlzLCB7IHNuYXBzaG90LCBuYW1lOiBpZCwgc3RhdGUsIGRhdGEgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICggc25hcHNob3QgKVxuICAgICAgICAgICAgICAgIHN0b3JlLnJlc3RvcmUoc25hcHNob3QpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgPT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnN0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fd2F0Y2hTdG9yZShpZCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5fX3Njb3BlW2lkXTtcbiAgICB9XG4gICAgXG4gICAgX3dhdGNoU3RvcmUoIGlkLCBzdGF0ZSwgZGF0YSApIHtcbiAgICAgICAgLy9pZiAoICF0aGlzLl9fc2NvcGVbaWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxuICAgICAgICAvLyAgICBpZiAoIHRoaXMuX19taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX3dhdGNoU3RvcmUoaWQsIHN0YXRlLCBkYXRhKSksIGZhbHNlKSB8fFxuICAgICAgICAvLyAgICAgICAgIXRoaXMucGFyZW50IClcbiAgICAgICAgLy8gICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gICAgcmV0dXJuIHRoaXMucGFyZW50Ll93YXRjaFN0b3JlKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8vfVxuICAgICAgICBpZiAoICF0aGlzLl9fbGlzdGVuaW5nW2lkXSAmJiAhaXMuZm4odGhpcy5fX3Njb3BlW2lkXSkgKSB7XG4gICAgICAgICAgICAhdGhpcy5fX3Njb3BlW2lkXS5fYXV0b0Rlc3Ryb3kgJiYgdGhpcy5fX3Njb3BlW2lkXS5yZXRhaW4oXCJzY29wZWRcIik7XG4gICAgICAgICAgICAhdGhpcy5fX3Njb3BlW2lkXS5pc1N0YWJsZSgpICYmIHRoaXMud2FpdChpZCk7XG4gICAgICAgICAgICB0aGlzLl9fc2NvcGVbaWRdLm9uKFxuICAgICAgICAgICAgICAgIHRoaXMuX19saXN0ZW5pbmdbaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAnZGVzdHJveScgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fbGlzdGVuaW5nW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19zY29wZVtpZF0gPSB0aGlzLl9fc2NvcGVbaWRdLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMucHJvcGFnKCksXG4gICAgICAgICAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKGlkKSxcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoaWQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1peCB0YXJnZXRDdHggb24gdGhpcyBzY29wZVxuICAgICAqIE1peGVkIHNjb3BlIHBhcmVudHMgYXJlIE5PVCBtYXBwZWRcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q3R4XG4gICAgICovXG4gICAgbWl4aW4oIHRhcmdldEN0eCApIHtcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50LCBsaXN0cztcbiAgICAgICAgdGhpcy5fX21peGVkLnB1c2godGFyZ2V0Q3R4KVxuICAgICAgICB0YXJnZXRDdHgucmV0YWluKFwibWl4ZWRUb1wiKTtcbiAgICAgICAgaWYgKCAhdGFyZ2V0Q3R4Ll9zdGFibGUgKVxuICAgICAgICAgICAgdGhpcy53YWl0KHRhcmdldEN0eC5faWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX21peGVkTGlzdC5wdXNoKGxpc3RzID0ge1xuICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UodGFyZ2V0Q3R4Ll9pZCksXG4gICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKSxcbiAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0b3JlcyA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlICA9IHt9O1xuICAgICAgICB0aGlzLmRhdGEgICA9IHt9O1xuICAgICAgICB0YXJnZXRDdHgub24obGlzdHMpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZWxpbmsodGhpcy5fX3Njb3BlLCB0aGlzLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX19taXhlZC5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnKTtcbiAgICAgICAgICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScpO1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnKTtcbiAgICAgICAgICAgICAgICBjdHgucmVsaW5rKGN0eC5fX3Njb3BlLCB0aGlzLCB0cnVlLCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIHN0b3JlcyBpbiBzdG9yZXNNYXAgJiBsaW5rIHRoZW0gaW4gdGhlIHByb3Rvc1xuICAgICAqIEBwYXJhbSBzdG9yZXNNYXBcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHJlZ2lzdGVyKCBzdG9yZXNNYXAsIHN0YXRlID0ge30sIGRhdGEgPSB7fSApIHtcbiAgICAgICAgdGhpcy5yZWxpbmsoc3RvcmVzTWFwLCB0aGlzLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICBPYmplY3Qua2V5cyhzdG9yZXNNYXApLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBzdG9yZXNNYXBbaWRdLnNpbmdsZXRvbiB8fCAoaXMuZm4oc3RvcmVzTWFwW2lkXSkgJiYgKHN0YXRlW2lkXSB8fCBkYXRhW2lkXSkpICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VudChpZCwgc3RhdGVbaWRdLCBkYXRhW2lkXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlW2lkXSB8fCBkYXRhW2lkXSApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBkYXRhW2lkXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggc3RhdGVbaWRdIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1tpZF0uc3RhdGUgPSBzdGF0ZVtpZF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1tpZF0ucHVzaChkYXRhW2lkXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlW2lkXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzW2lkXS5zZXRTdGF0ZShzdGF0ZVtpZF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl93YXRjaFN0b3JlKGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1hcCBzcmNDdHggc3RvcmUncyBvbiB0YXJnZXRDdHggaGVhZGVycyBwcm90bydzXG4gICAgICogQHBhcmFtIHNyY0N0eFxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHJlbGluayggc3JjQ3R4LCB0YXJnZXRDdHggPSB0aGlzLCBleHRlcm5hbCwgZm9yY2UgKSB7XG4gICAgICAgIGxldCBsY3R4ID0gdGFyZ2V0Q3R4Ll9zdG9yZXMucHJvdG90eXBlO1xuICAgICAgICBPYmplY3Qua2V5cyhzcmNDdHgpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fX3Njb3BlW2lkXSA9PT0gc3JjQ3R4W2lkXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX19zY29wZVtpZF0gJiYgKHRhcmdldEN0eC5fX3Njb3BlW2lkXS5jb25zdHJ1Y3RvciA9PT0gc3JjQ3R4W2lkXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFleHRlcm5hbCAmJiAhaXMuZm4odGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIlJlc2NvcGUgU3RvcmUgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBzY29wZSAhICggdHJ5IF9fcHJvdG9fXyBob3QgcGF0Y2ggKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fX3Njb3BlW2lkXS5fX3Byb3RvX18gPSBzcmNDdHhbaWRdLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWV4dGVybmFsICYmIGlzLmZuKHRhcmdldEN0eC5fX3Njb3BlW2lkXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoICFmb3JjZSAmJiAhZXh0ZXJuYWwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxjdHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+IHRoaXMuX19zY29wZVtpZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguX3N0YXRlLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKHRoaXMuX19zY29wZVtpZF0gJiYgdGhpcy5fX3Njb3BlW2lkXS5zdGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgbnVsbCwgdikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll9kYXRhLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKHRoaXMuX19zY29wZVtpZF0gJiYgdGhpcy5fX3Njb3BlW2lkXS5kYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCB1bmRlZmluZWQsIHYpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBCaW5kIHN0b3JlcyBmcm9tIHRoaXMgc2NvcGUsIGhpcyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuICAgICAqXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9ufVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gc3RvcmVzIGtleXMgdG8gYmluZCB1cGRhdGVzXG4gICAgICogQHBhcmFtIGFzXG4gICAgICogQHBhcmFtIHNldEluaXRpYWwge2Jvb2x9IGZhbHNlIHRvIG5vdCBwcm9wYWcgaW5pdGlhbCB2YWx1ZSAoZGVmYXVsdCA6IHRydWUpXG4gICAgICovXG4gICAgYmluZCggb2JqLCBrZXksIGFzLCBzZXRJbml0aWFsID0gdHJ1ZSApIHtcbiAgICAgICAgbGV0IGxhc3RSZXZzLCBkYXRhLCByZWZLZXlzO1xuICAgICAgICBpZiAoIGtleSAmJiAhaXMuYXJyYXkoa2V5KSApXG4gICAgICAgICAgICBrZXkgPSBba2V5XTtcbiAgICAgICAgXG4gICAgICAgIGlmICggYXMgPT09IGZhbHNlIHx8IGFzID09PSB0cnVlICkge1xuICAgICAgICAgICAgc2V0SW5pdGlhbCA9IGFzO1xuICAgICAgICAgICAgYXMgICAgICAgICA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlZktleXMgPSBrZXlcbiAgICAgICAgICAgIC5tYXAoaWQgPT4gKGlzLnN0cmluZyhpZCkgPyBpZCA6IGlkLm5hbWUpKVxuICAgICAgICAgICAgLm1hcChpZCA9PiAodGhpcy5wYXJzZVJlZihpZCkpKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLl9mb2xsb3dlcnMucHVzaChcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBvYmosXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGFzIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBsYXN0UmV2cyA9IHJlZktleXMucmVkdWNlKCggcmV2cywgcmVmICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXZzW3JlZi5zdG9yZUlkXSA9IHJldnNbcmVmLnN0b3JlSWRdIHx8IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldiA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZzOiBbXVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXZzW3JlZi5zdG9yZUlkXS5yZWZzLnB1c2gocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldnM7XG4gICAgICAgICAgICAgICAgfSwge30pXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgdGhpcy5tb3VudChrZXkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSApIHtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmooZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVuIGJpbmQgdGhpcyBzY29wZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlzXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICAgICAqL1xuICAgIHVuQmluZCggb2JqLCBrZXksIGFzICkge1xuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmICgnJyArIGZvbGxvd2Vyc1tpXVsxXSkgPT0gKCcnICsga2V5KSAmJlxuICAgICAgICAgICAgICAgIGZvbGxvd2Vyc1tpXVsyXSA9PSBhcyApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1vdW50IHRoZSBzdG9yZXMgaW4gc3RvcmVzTGlzdCBmcm9tIHRoaXMgc2NvcGUsIGl0cyBwYXJlbnRzIGFuZCBtaXhlZCBzY29wZVxuICAgICAqIEJpbmQgdGhlbSB0byAndG8nXG4gICAgICogSG9vayAndG8nIHNvIGl0IHdpbGwgYXV0byB1bmJpbmQgb24gJ2Rlc3Ryb3knIG9yICdjb21wb25lbnRXaWxsVW5tb3VudCdcbiAgICAgKiBAcGFyYW0gdG9cbiAgICAgKiBAcGFyYW0gc3RvcmVzTGlzdFxuICAgICAqIEBwYXJhbSBiaW5kXG4gICAgICogQHJldHVybnMge09iamVjdH0gSW5pdGlhbCBvdXRwdXRzIG9mIHRoZSBzdG9yZXMgaW4gJ3N0b3Jlc0xpc3QnXG4gICAgICovXG4gICAgbWFwKCB0bywgc3RvcmVzTGlzdCwgYmluZCA9IHRydWUgKSB7XG4gICAgICAgIGxldCBTdG9yZSAgPSB0aGlzLmNvbnN0cnVjdG9yLlN0b3JlO1xuICAgICAgICBzdG9yZXNMaXN0ID0gaXMuYXJyYXkoc3RvcmVzTGlzdCkgPyBzdG9yZXNMaXN0IDogW3N0b3Jlc0xpc3RdO1xuICAgICAgICB0aGlzLm1vdW50KHN0b3Jlc0xpc3QpO1xuICAgICAgICBpZiAoIGJpbmQgJiYgdG8gaW5zdGFuY2VvZiBTdG9yZSApIHtcbiAgICAgICAgICAgIFN0b3JlLm1hcCh0bywgc3RvcmVzTGlzdCwgdGhpcywgdGhpcywgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIGJpbmQgKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmQodG8sIHN0b3Jlc0xpc3QsIHVuZGVmaW5lZCwgZmFsc2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgbWl4ZWRDV1VubW91bnQsXG4gICAgICAgICAgICAgICAgdW5Nb3VudEtleSA9IHRvLmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCB0by5oYXNPd25Qcm9wZXJ0eSh1bk1vdW50S2V5KSApIHtcbiAgICAgICAgICAgICAgICBtaXhlZENXVW5tb3VudCA9IHRvW3VuTW91bnRLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b1t1bk1vdW50S2V5XSA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdG9bdW5Nb3VudEtleV07XG4gICAgICAgICAgICAgICAgaWYgKCBtaXhlZENXVW5tb3VudCApXG4gICAgICAgICAgICAgICAgICAgIHRvW3VuTW91bnRLZXldID0gbWl4ZWRDV1VubW91bnQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy51bkJpbmQodG8sIHN0b3Jlc0xpc3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b1t1bk1vdW50S2V5XSAmJiB0b1t1bk1vdW50S2V5XSguLi5hcmd6KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9yZXNMaXN0LnJlZHVjZSgoIGRhdGEsIGlkICkgPT4ge1xuICAgICAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGlkKSApXG4gICAgICAgICAgICAgICAgaWQgPSBpZC5uYW1lO1xuICAgICAgICAgICAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBpZC5zcGxpdCgnOicpOy8vQHRvZG9cbiAgICAgICAgICAgIGlkWzBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gaWRbMF0uc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGRhdGFbaWRbMV0gfHwgaWRbMF1baWRbMF0ubGVuZ3RoIC0gMV1dID0gdGhpcy5zdG9yZXNbaWRbMF1bMF1dICYmIHRoaXMuc3RvcmVzW2lkWzBdWzBdXS5yZXRyaWV2ZSAmJiB0aGlzLnN0b3Jlc1tpZFswXVswXV0ucmV0cmlldmUoaWRbMF0uc3BsaWNlKDEpKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuICAgIFxuICAgIHJldHJpZXZlKCBwYXRoID0gXCJcIiApIHtcbiAgICAgICAgcGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG4gICAgICAgIHJldHVybiBwYXRoICYmIHRoaXMuc3RvcmVzW3BhdGhbMF1dICYmXG4gICAgICAgICAgICB0aGlzLnN0b3Jlc1twYXRoWzBdXS5yZXRyaWV2ZShwYXRoLnNsaWNlKDEpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IG9yIHVwZGF0ZSBzdG9yZXNSZXZNYXAncyByZXZpc2lvbnNcbiAgICAgKiBAcGFyYW0gc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIGxvY2FsXG4gICAgICogQHJldHVybnMge3t9fVxuICAgICAqL1xuICAgIGdldFN0b3Jlc1JldnMoIHN0b3Jlc1Jldk1hcCA9IHt9LCBsb2NhbCApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuX19zY29wZTtcbiAgICAgICAgaWYgKCAhc3RvcmVzUmV2TWFwICkge1xuICAgICAgICAgICAgc3RvcmVzUmV2TWFwID0ge307XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggIWlzLmZuKGN0eFtpZF0pXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFtpZF0gPSBjdHhbaWRdLl9yZXY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSApXG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFtpZF0gPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBpZiAoICFsb2NhbCApIHtcbiAgICAgICAgICAgIHRoaXMuX19taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwKSwgc3RvcmVzUmV2TWFwKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFN0b3Jlc1JldnMoc3RvcmVzUmV2TWFwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcmVzUmV2TWFwO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgb3IgdXBkYXRlIG91dHB1dCBiYXNpbmcgc3RvcmVzUmV2TWFwJ3MgcmV2aXNpb25zLlxuICAgICAqIElmIGEgc3RvcmUgaW4gJ3N0b3Jlc1Jldk1hcCcgaXMgdXBkYXRlZDsgYWRkIGl0IHRvICdvdXRwdXQnXG4gICAgICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuICAgICAqIEBwYXJhbSBvdXRwdXRcbiAgICAgKiBAcGFyYW0gdXBkYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfHt9fVxuICAgICAqL1xuICAgIGdldFVwZGF0ZXMoIHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fX3Njb3BlO1xuICAgICAgICBcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0IHx8IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAhb3V0cHV0Lmhhc093blByb3BlcnR5KGlkKSAmJiAhaXMuZm4oY3R4W2lkXSlcbiAgICAgICAgICAgICAgICAgICAgJiYgKCFzdG9yZXNSZXZNYXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IChzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpICYmIHN0b3Jlc1Jldk1hcFtpZF0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICEoIXN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgfHwgY3R4W2lkXS5fcmV2IDw9IHN0b3Jlc1Jldk1hcFtpZF0ucmV2KSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXRbaWRdID0gdGhpcy5kYXRhW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggc3RvcmVzUmV2TWFwICYmIHN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbaWRdLnJldiA9IGN0eFtpZF0uX3JldjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFtpZF0ucmVmcy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS53YXJuKFwidXBkYXRlIHJlZiBcIiwgcmVmLnJlZiwgdGhpcy5yZXRyaWV2ZShyZWYucGF0aCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRbcmVmLmFsaWFzXSA9IHRoaXMucmV0cmlldmUocmVmLnBhdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS53YXJuKFwidXBkYXRlIFwiLCBpZCwgdGhpcy5kYXRhW2lkXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRbaWRdID0gdGhpcy5kYXRhW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLl9fbWl4ZWQucmVkdWNlKCggdXBkYXRlZCwgY3R4ICkgPT4gKGN0eC5nZXRVcGRhdGVzKHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkKSwgdXBkYXRlZCk7XG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRVcGRhdGVzKHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkO1xuICAgICAgICByZXR1cm4gdXBkYXRlZCAmJiBvdXRwdXQ7XG4gICAgfVxuICAgIFxuICAgIF9nZXRBbGxDaGlsZHMoIGNoaWxkcyA9IFtdICkge1xuICAgICAgICBjaGlsZHMucHVzaCguLi50aGlzLl9jaGlsZFNjb3Blcyk7XG4gICAgICAgIHRoaXMuX2NoaWxkU2NvcGVzLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5fZ2V0QWxsQ2hpbGRzKGNoaWxkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBjaGlsZHM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHdpdGhDaGlsZHNcbiAgICAgKiBAcGFyYW0gX193aXRoTWl4ZWRcbiAgICAgKiBAcGFyYW0gX291dHB1dFxuICAgICAqIEByZXR1cm5zIHsqfHtzdGF0ZToge30sIGRhdGE6IHt9fX1cbiAgICAgKi9cbiAgICBzZXJpYWxpemUoIG91dHB1dCA9IHt9ICkge1xuICAgICAgICBsZXQgY3R4ICAgICAgICAgID0gdGhpcy5fX3Njb3BlO1xuICAgICAgICBvdXRwdXRbdGhpcy5faWRdID0ge307XG4gICAgICAgIFxuICAgICAgICBPYmplY3Qua2V5cyhjdHgpLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBpcy5mbihjdHhbaWRdKSApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjdHhbaWRdLnNlcmlhbGl6ZShvdXRwdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIFxuICAgICAgICB0aGlzLl9jaGlsZFNjb3Blcy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll9pc0xvY2FsSWQgJiYgY3R4LnNlcmlhbGl6ZShvdXRwdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX21peGVkLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgICFjdHguX2lzTG9jYWxJZCAmJiBjdHguc2VyaWFsaXplKG91dHB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICByZXN0b3JlKCBzbmFwc2hvdCwgZm9yY2UgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl9fc2NvcGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFzbmFwc2hvdFt0aGlzLl9pZF0gKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgc25hcHNob3QgJiYgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgbmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNuYXAgPSBzbmFwc2hvdFt0aGlzLl9pZCArICcvJyArIG5hbWVdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggc25hcCApIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggZm9yY2UgJiYgIWlzLmZuKGN0eFtuYW1lXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4W25hbWVdLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VudChuYW1lLCBzbmFwc2hvdCk7Ly8gcXVpZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19taXhlZC5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll9pc0xvY2FsSWQgJiYgY3R4LnJlc3RvcmUoc25hcHNob3QsIGZvcmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2NoaWxkU2NvcGVzLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgICFjdHguX2lzTG9jYWxJZCAmJiBjdHgucmVzdG9yZShzbmFwc2hvdCwgZm9yY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcGFyc2VSZWYoIF9yZWYgKSB7XG4gICAgICAgIGxldCByZWYgPSBfcmVmLnNwbGl0KCc6Jyk7XG4gICAgICAgIHJlZlswXSAgPSByZWZbMF0uc3BsaXQoJy4nKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0b3JlSWQ6IHJlZlswXVswXSxcbiAgICAgICAgICAgIHBhdGggICA6IHJlZlswXSxcbiAgICAgICAgICAgIGFsaWFzICA6IHJlZlsxXSB8fCByZWZbMF1bcmVmWzBdLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgcmVmICAgIDogX3JlZlxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBkaXNwYXRjaCggYWN0aW9uLCBkYXRhICkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl9fc2NvcGUpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWlzLmZuKHRoaXMuX19zY29wZVtpZF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3Njb3BlW2lkXS50cmlnZ2VyKGFjdGlvbiwgZGF0YSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19taXhlZC5mb3JFYWNoKCggY3R4ICkgPT4gKGN0eC5kaXNwYXRjaChhY3Rpb24sIGRhdGEpKSk7XG4gICAgICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmRpc3BhdGNoKGFjdGlvbiwgZGF0YSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICB0aGVuKCBjYiApIHtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGEpKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgcmV0YWluU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbiAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluKHJlYXNvbikpXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZVN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcbiAgICAgICAgc3RvcmVzLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlKHJlYXNvbikpXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgd2FpdCggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgIXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5lbWl0KFwidW5zdGFibGVcIiwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZWxlYXNlKCByZWFzb24gKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXJUTSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXJUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzLmFsbCApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuZGVhZCAmJiB0aGlzLl9wcm9wYWcoKTsvLyBzdGFiaWxpdHkgY2FuIGluZHVjZSBkZXN0cm95XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcHJvcGFnKCkge1xuICAgICAgICB0aGlzLl9wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fcHJvcGFnVE0pO1xuICAgICAgICB0aGlzLl9wcm9wYWdUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9wYWdUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgIH0sIDJcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgX3Byb3BhZygpIHtcbiAgICAgICAgaWYgKCB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKCggeyAwOiBvYmosIDE6IGtleSwgMjogYXMsIDM6IGxhc3RSZXZzLCAzOiByZW1hcHMgfSApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGFzICkgb2JqLnNldFN0YXRlKHsgW2FzXTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYmooZGF0YSwgbGFzdFJldnMgJiYgWy4uLmxhc3RSZXZzXSB8fCBcIm5vIHJldnNcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGxhc3RSZXZzICYmXG4gICAgICAgICAgICAgICAgLy8ga2V5LmZvckVhY2goaWQgPT4gKGxhc3RSZXZzW2lkXSA9IHRoaXMuc3RvcmVzW2lkXSAmJiB0aGlzLnN0b3Jlc1tpZF0uX3JldiB8fCAwKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbWl0KFwidXBkYXRlXCIsIHRoaXMuZ2V0VXBkYXRlcygpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgc3RhYmxlXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzU3RhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmxlO1xuICAgIH1cbiAgICBcbiAgICAvL3NlcmlhbGl6ZUNoaWxkcyggY2hpbGRzID0gW10gKSB7XG4gICAgLy9cbiAgICAvL31cbiAgICBcbiAgICBfYWRkQ2hpbGQoIGN0eCApIHtcbiAgICAgICAgdGhpcy5fY2hpbGRTY29wZXMucHVzaChjdHgpO1xuICAgICAgICBsZXQgbGlzdHMgICAgID0ge1xuICAgICAgICAgICAgICAgICdzdGFibGUnICAgICAgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fdW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJyAgICA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcysrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIDEgPT0gdGhpcy5fdW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnc3RhYmxlVHJlZScgIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VuU3RhYmxlQ2hpbGRzLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd1bnN0YWJsZVRyZWUnOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAxID09IHRoaXMuX3VuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ2Rlc3Ryb3knICAgICA6IGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggY3R4Ll91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICFjdHguaXNTdGFibGUoKSApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJzdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdhc1N0YWJsZSA9IHRoaXMuX3VuU3RhYmxlQ2hpbGRzO1xuICAgICAgICAvLyFjdHguaXNTdGFibGUoKSAmJiBjb25zb2xlLndhcm4oJ2FkZCB1bnN0YWJsZSBjaGlsZCcpO1xuICAgICAgICAhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fdW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgY3R4Ll91blN0YWJsZUNoaWxkcyAmJiB0aGlzLl91blN0YWJsZUNoaWxkcysrO1xuICAgICAgICB0aGlzLl9jaGlsZFNjb3Blc0xpc3QucHVzaChsaXN0cyk7XG4gICAgICAgIGlmICggIXdhc1N0YWJsZSAmJiB0aGlzLl91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgY3R4Lm9uKGxpc3RzKTtcbiAgICB9XG4gICAgXG4gICAgX3JtQ2hpbGQoIGN0eCApIHtcbiAgICAgICAgbGV0IGkgICAgICAgICA9IHRoaXMuX2NoaWxkU2NvcGVzLmluZGV4T2YoY3R4KSxcbiAgICAgICAgICAgIHdhc1N0YWJsZSA9IHRoaXMuX3VuU3RhYmxlQ2hpbGRzO1xuICAgICAgICBpZiAoIGkgIT0gLTEgKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGlsZFNjb3Blcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fdW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgIGN0eC5fdW5TdGFibGVDaGlsZHMgJiYgdGhpcy5fdW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgIGN0eC51bih0aGlzLl9jaGlsZFNjb3Blc0xpc3Quc3BsaWNlKGksIDEpWzBdKTtcbiAgICAgICAgICAgIGlmICggd2FzU3RhYmxlICYmICF0aGlzLl91blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldGFpbiggcmVhc29uICkge1xuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwrKztcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJldGFpblwiLCB0aGlzLl9pZCwgcmVhc29uKTtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImRpc3Bvc2VcIiwgdGhpcy5faWQsIHJlYXNvbik7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnNbcmVhc29uXSApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIDogXCIgKyByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwtLTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJkaXNwb3NlIGRvIGRlc3Ryb3kgXCIsIHRoaXMuX2lkLCB0aGlzLl9wZXJzaXN0ZW5jZVRtKTtcbiAgICAgICAgICAgIGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5zLmFsbCAmJiB0aGlzLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4gKCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvcmRlciBkZXN0cm95IG9mIGxvY2FsIHN0b3Jlc1xuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBjdHggICA9IHRoaXMuX19zY29wZTtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oXCJkZXN0cm95XCIsIHRoaXMuX2lkKTtcbiAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbWl0KFwiZGVzdHJveVwiLCB0aGlzKTtcbiAgICAgICAgT2JqZWN0LmtleXMoXG4gICAgICAgICAgICB0aGlzLl9fbGlzdGVuaW5nXG4gICAgICAgICkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHRoaXMuX19zY29wZVtpZF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fX2xpc3RlbmluZ1tpZF0pXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFiaWxpemVyVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX3N0YWJpbGl6ZXJUTSk7XG4gICAgICAgIHRoaXMuX3Byb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl9wcm9wYWdUTSk7XG4gICAgICAgIHRoaXMuX19saXN0ZW5pbmcgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5faXNMb2NhbElkIClcbiAgICAgICAgICAgIGRlbGV0ZSBvcGVuU2NvcGVzW3RoaXMuX2lkXTtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIFxuICAgICAgICB3aGlsZSAoIHRoaXMuX19taXhlZExpc3QubGVuZ3RoICkge1xuICAgICAgICAgICAgdGhpcy5fX21peGVkWzBdLnJlbW92ZUxpc3RlbmVyKHRoaXMuX19taXhlZExpc3Quc2hpZnQoKSk7XG4gICAgICAgICAgICB0aGlzLl9fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKFwibWl4ZWRUb1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMuX19wYXJlbnRMaXN0ICkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuX3JtQ2hpbGQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLl9fcGFyZW50TGlzdCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5kaXNwb3NlKFwiaXNNeVBhcmVudFwiKTtcbiAgICAgICAgICAgIHRoaXMuX19wYXJlbnRMaXN0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKCBsZXQga2V5IGluIGN0eCApXG4gICAgICAgICAgICBpZiAoICFpcy5mbihjdHhba2V5XSkgKSB7XG4gICAgICAgICAgICAgICAgIWN0eFtrZXldLl9hdXRvRGVzdHJveSAmJiBjdHhba2V5XS5kaXNwb3NlKFwic2NvcGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB0aGlzLl9fbWl4ZWQgPSB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlID0gdGhpcy5zY29wZSA9IHRoaXMuc3RvcmVzID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX3N0YXRlID0gdGhpcy5fc3RvcmVzID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2NvcGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKiAgXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiAgXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqICBcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqICBcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG52YXIgaXMgPSByZXF1aXJlKCdpcycpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1pdHRlciB7XG4gICAgX2V2ZW50cyA9IHt9O1xuICAgIFxuICAgIG9uKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMub24oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XSA9IHRoaXMuX2V2ZW50c1tldnRdIHx8IFtdO1xuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHVuKCBldnQsIGNiICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcoZXZ0KSAmJiBldnQgKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV2dCkuZm9yRWFjaChrID0+IHRoaXMudW4oaywgZXZ0W2tdKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbZXZ0XSApIHJldHVybjtcbiAgICAgICAgdmFyIGkgPSB0aGlzLl9ldmVudHNbZXZ0XS5pbmRleE9mKGNiKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzW2V2dF0uc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICBlbWl0KCBldnQsIC4uLmFyZ3ogKSB7XG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuICAgICAgICBsZXQgbGlzdHMgPSBbLi4udGhpcy5fZXZlbnRzW2V2dF1dO1xuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBsaXN0cy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgIGxpc3RzW2ldKC4uLmFyZ3opO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGFkZExpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLnVuKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUFsbExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgfVxuICAgIFxuICAgIG9uY2UoIGV2dCwgY2IgKSB7XG4gICAgICAgIGxldCBmbjtcbiAgICAgICAgdGhpcy5vbihldnQsIGZuID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgdGhpcy51bihldnQsIGZuKTtcbiAgICAgICAgICAgIGNiKC4uLmFyZ3opXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRW1pdHRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzaG9ydGlkXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG4vKipcbiAqIFVsdHJhIHNjYWxhYmxlIHN0YXRlLWF3YXJlIHN0b3JlXG4gKlxuICogQHRvZG8gOiBsb3Qgb2Ygb3B0aW1zLi4uXG4gKi9cblxudmFyIGlzICAgICAgICAgICA9IHJlcXVpcmUoJ2lzJyksXG4gICAgU2NvcGUgICAgICAgID0gcmVxdWlyZSgnLi9TY29wZScpLFxuICAgIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJy4vRW1pdHRlcicpLFxuICAgIHNob3J0aWQgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKSxcbiAgICBvYmpQcm90byAgICAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pO1xuXG4vKipcbiAqIEBjbGFzcyBTdG9yZVxuICovXG5jbGFzcyBTdG9yZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgXG4gICAgc3RhdGljIHVzZSAgICAgICAgICAgICAgICAgID0gW107Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzb3VyY2Ugc3RvcmVzXG4gICAgc3RhdGljIGZvbGxvdzsvLyBvdmVycmlkYWJsZSBsaXN0IG9mIHN0b3JlIHRoYXQgd2lsbCBhbGxvdyBwdXNoIGlmIHVwZGF0ZWRcbiAgICBzdGF0aWMgcmVxdWlyZTtcbiAgICBzdGF0aWMgc3RhdGljU2NvcGUgICAgICAgICAgPSBuZXcgU2NvcGUoe30sIHsgaWQ6IFwic3RhdGljXCIgfSk7XG4gICAgc3RhdGljIHN0YXRlICAgICAgICAgICAgICAgID0gdW5kZWZpbmVkOy8vIGRlZmF1bHQgc3RhdGVcbiAgICAvKipcbiAgICAgKiBpZiByZXRhaW4gZ29lcyB0byAwIDpcbiAgICAgKiBmYWxzZSB0byBub3QgZGVzdHJveSxcbiAgICAgKiAwIHRvIHN5bmMgYXV0byBkZXN0cm95XG4gICAgICogTXMgdG8gYXV0b2Rlc3Ryb3kgYWZ0ZXIgdG0gbXMgaWYgbm8gcmV0YWluIGhhcyBiZWVuIGNhbGxlZFxuICAgICAqIEB0eXBlIHtib29sZWFufEludH1cbiAgICAgKi9cbiAgICAgICAgICAgc3RhdGljIHBlcnNpc3RlbmNlVG0gPSBmYWxzZTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvciwgd2lsbCBidWlsZCBhIHJlc2NvcGUgc3RvcmVcbiAgICAgKlxuICAgICAqIChzY29wZSwge3JlcXVpcmUsdXNlLGFwcGx5LHN0YXRlLCBkYXRhfSlcbiAgICAgKiAoc2NvcGUpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUge29iamVjdH0gc2NvcGUgd2hlcmUgdG8gZmluZCB0aGUgb3RoZXIgc3RvcmVzIChkZWZhdWx0IDogc3RhdGljIHN0YXRpY1Njb3BlIClcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IChwYXNzZWQgdG8gU3RvcmU6Om1hcCkgRXggOiBbXCJzZXNzaW9uXCIsIFwib3RoZXJOYW1lZFN0b3JlOmtleVwiLCBvdGhlclN0b3JlLmFzKFwib3RoZXJLZXlcIildXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHZhciBhcmd6ICAgICAgICAgPSBbLi4uYXJndW1lbnRzXSxcbiAgICAgICAgICAgIF9zdGF0aWMgICAgICA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgPSBhcmd6WzBdIGluc3RhbmNlb2YgU2NvcGVcbiAgICAgICAgICAgICAgICA/IGFyZ3ouc2hpZnQoKVxuICAgICAgICAgICAgICAgIDogX3N0YXRpYy5zY29wZSA/IFNjb3BlLmdldFNjb3BlKF9zdGF0aWMuc2NvcGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpcy5zdHJpbmcoYXJnelswXSlcbiAgICAgICAgICAgICAgICAgICAgICA/IFNjb3BlLmdldFNjb3BlKGFyZ3ouc2hpZnQoKSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc3RhdGljU2NvcGUsXG4gICAgICAgICAgICBjZmcgICAgICAgICAgPSBhcmd6WzBdICYmICFpcy5hcnJheShhcmd6WzBdKSAmJiAhaXMuc3RyaW5nKGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDoge30sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgPSBpcy5zdHJpbmcoYXJnelswXSkgPyBhcmd6WzBdIDogY2ZnLm5hbWUgfHwgX3N0YXRpYy5uYW1lLFxuICAgICAgICAgICAgd2F0Y2hzICAgICAgID0gaXMuYXJyYXkoYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBjZmcudXNlIHx8IFtdLC8vIHdhdGNocyBuZWVkIHRvIGJlIGRlZmluZWQgYWZ0ZXIgYWxsIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIGFyZSByZWdpc3RlcmVkIDogc28gd2UgY2FuJ3QgZGVhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpdGggYW55IFwic3RhdGljIHVzZVwiIGF1dG9tYXRpY2x5XG4gICAgICAgICAgICBhcHBseSAgICAgICAgPSBpcy5mbihhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IGNmZy5hcHBseSB8fCBudWxsLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0gX3N0YXRpYy5zdGF0ZSB8fCBfc3RhdGljLmluaXRpYWxTdGF0ZSxcbiAgICAgICAgICAgIGFwcGxpZWQ7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl91aWQgPSBjZmcuX3VpZCB8fCBzaG9ydGlkLmdlbmVyYXRlKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucyAgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX19sb2NrcyAgICAgID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fb25TdGFiaWxpemUgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIC8vIGF1dG9EZXN0cm95VG1cbiAgICAgICAgdGhpcy5fYXV0b0Rlc3Ryb3kgICA9ICEhdGhpcy5fcGVyc2lzdGVuY2VUbTtcbiAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VUbSA9IGNmZy5wZXJzaXN0ZW5jZVRtIHx8IF9zdGF0aWMucGVyc2lzdGVuY2VUbSB8fCAoY2ZnLmF1dG9EZXN0cm95IHx8IF9zdGF0aWMuYXV0b0Rlc3Ryb3kpICYmIDU7XG4gICAgICAgIC8vXG4gICAgICAgIC8vaWYgKCBpcy5zdHJpbmcoYXJnelswXSkgKSB7XG4gICAgICAgIC8vICAgIGlmICggc2NvcGUuX19zY29wZVtuYW1lXSApXG4gICAgICAgIC8vICAgICAgICBjb25zb2xlLndhcm4oXCJSZVNjb3BlOiBPdmVyd3JpdGluZyBhbiBleGlzdGluZyBzdGF0aWMgbmFtZWQgc3RvcmUgKCAlcyApICEhXCIsIG5hbWUpO1xuICAgICAgICAvLyAgICBzY29wZS5fX3Njb3BlW25hbWVdID0gdGhpcztcbiAgICAgICAgLy99XG4gICAgICAgIFxuICAgICAgICBpZiAoIGNmZyAmJiBjZmcub24gKSB7XG4gICAgICAgICAgICB0aGlzLm9uKGNmZy5vbik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHNjb3BlLnN0b3JlcyApIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGVPYmogPSBzY29wZTtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUgICAgPSBzY29wZS5zdG9yZXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlT2JqID0gbmV3IFNjb3BlKHNjb3BlKTtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUgICAgPSBzY29wZS5zdG9yZXM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLl9yZXYgICAgID0gdGhpcy5jb25zdHJ1Y3Rvci5fcmV2IHx8IDA7XG4gICAgICAgIHRoaXMuX3JldnMgICAgPSB7fTtcbiAgICAgICAgdGhpcy5zdG9yZXMgICA9IHt9O1xuICAgICAgICB0aGlzLl9yZXF1aXJlID0gW107XG4gICAgICAgIFxuICAgICAgICBpZiAoIGlzLmFycmF5KF9zdGF0aWMudXNlKSApIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZSA9IFsuLi53YXRjaHMsIC4uLihfc3RhdGljLnVzZSB8fCBbXSkubWFwKFxuICAgICAgICAgICAgICAgIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoW15cXDpdKikoPzpcXDooLiopKT8kLyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICggcmVmWzFdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZjIgPSByZWZbMl0uc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlcXVpcmUucHVzaChyZWZbM10gfHwgcmVmMltyZWYyLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdXNlID0gWy4uLndhdGNocywgLi4uKFxuICAgICAgICAgICAgICAgIF9zdGF0aWMudXNlID8gT2JqZWN0LmtleXMoX3N0YXRpYy51c2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSBrZXkubWF0Y2goL14oXFwhPykoLiopJC8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZbMV0gJiYgdGhpcy5fcmVxdWlyZS5wdXNoKF9zdGF0aWMudXNlW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmWzJdICsgKChfc3RhdGljLnVzZVtrZXldID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnOicgKyBfc3RhdGljLnVzZVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogW11cbiAgICAgICAgICAgICldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIF9zdGF0aWMucmVxdWlyZSApXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2goLi4uX3N0YXRpYy5yZXF1aXJlKTtcbiAgICAgICAgaWYgKCBjZmcucmVxdWlyZSApXG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2goLi4uY2ZnLnJlcXVpcmUpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzID0gW107XG4gICAgICAgIFxuICAgICAgICBpZiAoIGFwcGx5IClcbiAgICAgICAgICAgIHRoaXMuYXBwbHkgPSBhcHBseTtcbiAgICAgICAgXG4gICAgICAgIGlmICggY2ZnLnNuYXBzaG90ICYmIGNmZy5zbmFwc2hvdFt0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIG5hbWVdICkge1xuICAgICAgICAgICAgdGhpcy5yZXN0b3JlKGNmZy5zbmFwc2hvdCk7XG4gICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgc2NvcGUuYmluZCh0aGlzLCB0aGlzLl91c2UsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBfc3RhdGljLmRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0geyAuLi5fc3RhdGljLmRhdGEgfTtcbiAgICAgICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwiZGF0YVwiKSAmJiBjZmcuZGF0YSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBjZmcuZGF0YTtcbiAgICAgICAgICAgIGlmICggY2ZnLmhhc093blByb3BlcnR5KFwic3RhdGVcIikgJiYgY2ZnLnN0YXRlICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHsgLi4uaW5pdGlhbFN0YXRlLCAuLi5jZmcuc3RhdGUgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIGluaXRpYWxTdGF0ZSB8fCB0aGlzLl91c2UubGVuZ3RoICkgey8vIHN5bmMgYXBwbHlcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi4oaW5pdGlhbFN0YXRlIHx8IHt9KSxcbiAgICAgICAgICAgICAgICAgICAgLi4uc2NvcGUubWFwKHRoaXMsIHRoaXMuX3VzZSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRBcHBseSh0aGlzLnN0YXRlKSAmJiB0aGlzLmRhdGEgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIHRoaXMuc3RhdGUsIHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWVkICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoICh0aGlzLmRhdGEgIT09IHVuZGVmaW5lZCB8fCBhcHBsaWVkKSAmJiAhdGhpcy5fX2xvY2tzLmFsbCApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yZXYrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCAhX3N0YXRpYy5tYW5hZ2VkICYmICF0aGlzLnN0YXRlICYmICghdGhpcy5fdXNlIHx8ICF0aGlzLl91c2UubGVuZ3RoKSApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJSZXNjb3BlIHN0b3JlICdcIiwgdGhpcy5uYW1lLCBcIicgaGF2ZSBubyBpbml0aWFsIGRhdGEsIHN0YXRlIG9yIHVzZS4gSXQgY2FuJ3Qgc3RhYmlsaXplLi4uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICF0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBCdWlsZGVyLWtleSBwYWlyIGZvciBTdG9yZTo6bWFwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgc3RhdGljIGFzKCBuYW1lICkge1xuICAgICAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNYXAgYWxsIG5hbWVkIHN0b3JlcyBpbiB7a2V5c30gdG8gdGhlIHtvYmplY3R9J3Mgc3RhdGVcbiAgICAgKiBIb29rIGNvbXBvbmVudFdpbGxVbm1vdW50IChmb3IgcmVhY3QgY29tcCkgb3IgZGVzdHJveSB0byB1bkJpbmQgdGhlbSBhdXRvbWF0aWNhbGx5XG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSBvYmplY3Qge09iamVjdH0gdGFyZ2V0IHN0YXRlIGF3YXJlIG9iamVjdCAoUmVhY3QuQ29tcG9uZW50fFN0b3JlfC4uLilcbiAgICAgKiBAcGFyYW0ga2V5cyB7QXJyYXl9IEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyU3RhdGljTmFtZWRTdG9yZTprZXlcIiwgc3RvcmUuYXMoJ2Fub3RoZXJLZXknKV1cbiAgICAgKi9cbiAgICBzdGF0aWMgbWFwKCBjb21wb25lbnQsIGtleXMsIHNjb3BlLCBvcmlnaW4sIHNldEluaXRpYWwgPSBmYWxzZSApIHtcbiAgICAgICAgdmFyIHRhcmdldFJldnMgICAgID0gY29tcG9uZW50Ll9yZXZzIHx8IHt9O1xuICAgICAgICB2YXIgdGFyZ2V0U2NvcGUgICAgPSBjb21wb25lbnQuc3RvcmVzIHx8IChjb21wb25lbnQuc3RvcmVzID0ge30pO1xuICAgICAgICB2YXIgaW5pdGlhbE91dHB1dHMgPSB7fTtcbiAgICAgICAga2V5cyAgICAgICAgICAgICAgID0gaXMuYXJyYXkoa2V5cykgPyBbLi4ua2V5c10gOiBba2V5c107XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgc2NvcGUgPSBzY29wZSB8fCBTdG9yZS5zdGF0aWNTY29wZTtcbiAgICAgICAgXG4gICAgICAgIGtleXMgICAgICAgICAgID0ga2V5cy5maWx0ZXIoXG4gICAgICAgICAgICAvLyBAdG9kbyA6IHVzZSBxdWVyeSByZWZzXG4gICAgICAgICAgICAvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAha2V5ICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzLFxuICAgICAgICAgICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZTtcbiAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoKD86XFwuW1xcd19dKykqKSg/OlxcOihbXFx3X10rKSk/Lyk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzFdO1xuICAgICAgICAgICAgICAgICAgICBwYXRoICA9IGtleVsyXSAmJiBrZXlbMl0uc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLnN0b3Jlc1trZXlbMV1dO1xuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVszXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVswXSB8fCBrZXlbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0UmV2c1tuYW1lXSApIHJldHVybiBmYWxzZTsvLyBpZ25vcmUgZGJsIHVzZXMgZm9yIG5vd1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggIXN0b3JlICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgXCIvXCIgKyBhbGlhcyArIFwiJyBpbiBcIiArIG9yaWdpbiArICcgISEnLCBzdG9yZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKHN0b3JlKSApIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuX21vdW50KG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzY29wZS5zdG9yZXNbbmFtZV0uYmluZChjb21wb25lbnQsIGFsaWFzLCBzZXRJbml0aWFsLCBwYXRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmJpbmQoY29tcG9uZW50LCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldFJldnNbYWxpYXNdID0gdGFyZ2V0UmV2c1thbGlhc10gfHwgdHJ1ZTtcbiAgICAgICAgICAgICAgICAhdGFyZ2V0U2NvcGVbbmFtZV0gJiYgKHRhcmdldFNjb3BlW25hbWVdID0gc2NvcGUuc3RvcmVzW25hbWVdKTtcbiAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLnN0b3Jlc1tuYW1lXS5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpIClcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE91dHB1dHNbbmFtZV0gPSBzY29wZS5kYXRhW25hbWVdO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB2YXIgbWl4ZWRDV1VubW91bnQsXG4gICAgICAgICAgICB1bk1vdW50S2V5ID0gY29tcG9uZW50LmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcbiAgICAgICAgXG4gICAgICAgIGlmICggY29tcG9uZW50Lmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuICAgICAgICAgICAgbWl4ZWRDV1VubW91bnQgPSBjb21wb25lbnRbdW5Nb3VudEtleV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFt1bk1vdW50S2V5XSA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSBjb21wb25lbnRbdW5Nb3VudEtleV07XG4gICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcbiAgICAgICAgICAgICAgICBjb21wb25lbnRbdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAga2V5cy5tYXAoXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMsIHBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBzY29wZS5zdG9yZXNbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgICA9IGtleS5tYXRjaCgvKFtcXHdfXSspKCg/OlxcLltcXHdfXSspKikoPzpcXDooW1xcd19dKykpPy8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoICA9IGtleVsyXSAmJiBrZXlbMl0uc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBzY29wZS5zdG9yZXNba2V5WzFdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0ga2V5WzNdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWzBdIHx8IGtleVsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgJiYgIWlzLmZuKHN0b3JlKSAmJiBzdG9yZS51bkJpbmQoY29tcG9uZW50LCBhbGlhcywgcGF0aClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudFt1bk1vdW50S2V5XSAmJiBjb21wb25lbnRbdW5Nb3VudEtleV0oLi4uYXJneik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXQgY29udGV4dE9iaigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGVPYmo7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0IGNvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldCBkYXRhcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzZXQgZGF0YXMoIHYgKSB7XG4gICAgICAgIC8vY29uc29sZS5ncm91cENvbGxhcHNlZChcIlJlc2NvcGUgc3RvcmUgOiBTZXR0aW5nIGRhdGFzIGlzIGRlcHJlY2lhdGVkLCB1c2UgZGF0YVwiKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlJlc2NvcGUgc3RvcmUgOiBTZXR0aW5nIGRhdGFzIGlzIGRlcHJlY2lhdGVkLCB1c2UgZGF0YVwiLCAobmV3IEVycm9yKCkpLnN0YWNrKTtcbiAgICAgICAgLy9jb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRhdGEgPSB2O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIGRhdGEgY2hhbmdlIHNob3VsZCBiZSBwcm9wYWcgdG8gdGhlIGxpc3RlbmluZyBzdG9yZXMgJiBjb21wb25lbnRzXG4gICAgICovXG4gICAgc2hvdWxkUHJvcGFnKCBuRGF0YXMgKSB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgaGFzRGF0YUNoYW5nZSggbkRhdGFzICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIHIsXG4gICAgICAgICAgICBjRGF0YXMgID0gdGhpcy5kYXRhO1xuICAgICAgICByICAgICAgICAgICA9ICFjRGF0YXMgJiYgbkRhdGFzIHx8IGNEYXRhcyAhPT0gbkRhdGFzO1xuICAgICAgICAhciAmJiBjRGF0YXMgJiYgT2JqZWN0LmtleXMoY0RhdGFzKS5mb3JFYWNoKFxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgIXIgJiYgbkRhdGFzICYmIE9iamVjdC5rZXlzKG5EYXRhcykuZm9yRWFjaChcbiAgICAgICAgICAgICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgIHIgPSByIHx8IChuRGF0YXMgPyBjRGF0YXNba2V5XSAhPT0gbkRhdGFzW2tleV0gOiBjRGF0YXMgJiYgY0RhdGFzW2tleV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBtZXRob2QgdG8ga25vdyBpZiBhIHN0YXRlIGNoYW5nZSBzaG91bGQgYmUgYXBwbGllZFxuICAgICAqL1xuICAgIHNob3VsZEFwcGx5KCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhIXRoaXMuaXNDb21wbGV0ZShzdGF0ZSlcbiAgICAgICAgKSAmJiAoaXMuYXJyYXkoX3N0YXRpYy5mb2xsb3cpXG4gICAgICAgICAgICAgICAgPyBfc3RhdGljLmZvbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKHIgfHwgc3RhdGUgJiYgc3RhdGVbaV0pLCBmYWxzZSlcbiAgICAgICAgICAgICAgICA6IF9zdGF0aWMuZm9sbG93XG4gICAgICAgICAgICAgICAgICA/IE9iamVjdC5rZXlzKF9zdGF0aWMuZm9sbG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKCggciwgaSApID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHN0YXRlICYmIGlzLmZuKF9zdGF0aWMuZm9sbG93W2ldKSAmJiBfc3RhdGljLmZvbGxvd1tpXS5jYWxsKHRoaXMsIHN0YXRlW2ldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgX3N0YXRpYy5mb2xsb3dbaV0gJiYgc3RhdGVbaV0gIT09IHRoaXMuc3RhdGVbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgZmFsc2UpIDogdHJ1ZVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBPdmVycmlkYWJsZSBhcHBsaWVyIC8gcmVtYXBwZXJcbiAgICAgKiBJZiBzdGF0ZSBvciBsYXN0UHVibGljU3RhdGUgYXJlIHNpbXBsZSBoYXNoIG1hcHMgYXBwbHkgd2lsbCByZXR1cm4gey4uLmRhdGEsIC4uLnN0YXRlfVxuICAgICAqIGlmIG5vdCBpdCB3aWxsIHJldHVybiB0aGUgbGFzdCBwcml2YXRlIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBhcHBseSggZGF0YSwgc3RhdGUsIGNoYW5nZXMgKSB7XG4gICAgICAgIHN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5yZWZpbmUgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmaW5lKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjaWF0ZWRcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBjaGFuZ2VzXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmVmaW5lKCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhZGF0YSB8fCBkYXRhLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gfHwgc3RhdGUuX19wcm90b19fICE9PSBvYmpQcm90byApXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmRhdGEsIC4uLnN0YXRlIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRGVib3VuY2UgdGhpcyBzdG9yZSBwcm9wYWdhdGlvbiAoICYgcmVkdWNpbmcgKVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHN0YWJpbGl6ZSggY2IgKSB7XG4gICAgICAgIGNiICYmIHRoaXMub25jZSgnc3RhYmxlJywgY2IpO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFiaWxpemVyID0gc2V0VGltZW91dChcbiAgICAgICAgICAgIHRoaXMucHVzaC5iaW5kKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAoKSA9PiB7Ly9AdG9kb1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAhc3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICkpO1xuICAgIH1cbiAgICBcbiAgICByZXRyaWV2ZSggcGF0aCwgaSA9IDAsIG9iaiA9IHRoaXMuZGF0YSApIHtcbiAgICAgICAgcGF0aCA9IGlzLnN0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGg7XG4gICAgICAgIHJldHVybiAhb2JqIHx8ICFwYXRoIHx8ICFwYXRoLmxlbmd0aFxuICAgICAgICAgICAgPyBvYmpcbiAgICAgICAgICAgIDogcGF0aC5sZW5ndGggPT0gaSArIDFcbiAgICAgICAgICAgICAgICAgICA/IG9ialtwYXRoW2ldXVxuICAgICAgICAgICAgICAgICAgIDogdGhpcy5yZXRyaWV2ZShwYXRoLCBpICsgMSwgb2JqW3BhdGhbaV1dKTtcbiAgICB9XG4gICAgXG4gICAgZGlzcGF0Y2goIGFjdGlvbiwgLi4uYXJneiApIHtcbiAgICAgICAgdGhpcy5zY29wZU9iai5kaXNwYXRjaChhY3Rpb24sIC4uLmFyZ3opO1xuICAgIH1cbiAgICBcbiAgICB0cmlnZ2VyKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG4gICAgICAgIGxldCB7IGFjdGlvbnMgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBucztcbiAgICAgICAgaWYgKCBhY3Rpb25zICYmIGFjdGlvbnNbYWN0aW9uXSApIHtcbiAgICAgICAgICAgIG5zID0gYWN0aW9uc1thY3Rpb25dLmNhbGwodGhpcywgLi4uYXJneik7XG4gICAgICAgICAgICBucyAmJiB0aGlzLnNldFN0YXRlKG5zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBQdWxsIHN0b3JlcyBpbiB0aGUgcHJpdmF0ZSBzdGF0ZVxuICAgICAqIEBwYXJhbSBzdG9yZXMgIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cbiAgICAgKi9cbiAgICBwdWxsKCBzdG9yZXMsIGRvV2FpdCwgb3JpZ2luICkge1xuICAgICAgICBsZXQgaW5pdGlhbE91dHB1dHMgPSB0aGlzLnNjb3BlT2JqLm1hcCh0aGlzLCBzdG9yZXMpO1xuICAgICAgICBpZiAoIGRvV2FpdCApIHtcbiAgICAgICAgICAgIHRoaXMud2FpdCgpO1xuICAgICAgICAgICAgc3RvcmVzLmZvckVhY2goKCBzICkgPT4gdGhpcy5zY29wZVtzXSAmJiB0aGlzLndhaXQodGhpcy5zY29wZVtzXSkpO1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBcHBseSBhcHBseS9yZW1hcCBvbiB0aGUgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggdGhlIHJlc3VsdGluZyBcInB1YmxpY1wiIHN0YXRlIHRvIGZvbGxvd2Vyc1xuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHB1c2goIGRhdGEsIGZvcmNlLCBjYiApIHtcbiAgICAgICAgY2IgICAgICAgICAgICA9IGZvcmNlID09PSB0cnVlID8gY2IgOiBmb3JjZTtcbiAgICAgICAgZm9yY2UgICAgICAgICA9IGZvcmNlID09PSB0cnVlO1xuICAgICAgICB2YXIgaSAgICAgICAgID0gMCxcbiAgICAgICAgICAgIG5leHRTdGF0ZSA9ICFkYXRhICYmIHsgLi4udGhpcy5zdGF0ZSwgLi4udGhpcy5fY2hhbmdlc1NXIH0gfHwgdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIG5leHREYXRhcyA9IGRhdGEgfHwgdGhpcy5hcHBseSh0aGlzLmRhdGEsIG5leHRTdGF0ZSwgdGhpcy5fY2hhbmdlc1NXKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhdGUgICAgICA9IG5leHRTdGF0ZTtcbiAgICAgICAgdGhpcy5fY2hhbmdlc1NXID0ge307XG4gICAgICAgIGlmICggIWZvcmNlICYmXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgIXRoaXMuaGFzRGF0YUNoYW5nZShuZXh0RGF0YXMpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5kYXRhID0gbmV4dERhdGFzO1xuICAgICAgICB0aGlzLndhaXQoKTtcbiAgICAgICAgdGhpcy5yZWxlYXNlKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc2V0U3RhdGUoIHBTdGF0ZSwgY2IsIHN5bmMgKSB7XG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICAgICBwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuICAgICAgICAgICAgICAgICkgKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLnNob3VsZEFwcGx5KHsgLi4udGhpcy5zdGF0ZSwgLi4uY2hhbmdlcyB9KSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBzeW5jICkge1xuICAgICAgICAgICAgdGhpcy5wdXNoKCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIGNoYW5nZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWJpbGl6ZShjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGNiICYmIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY3VycmVudCBwcml2YXRlIHN0YXRlICYgcHVzaCBpdCBvbmNlIHRoZSBzdG9yZSBpcyBzdGFibGVcbiAgICAgKiBAcGFyYW0gcFN0YXRlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc2V0U3RhdGVTeW5jKCBwU3RhdGUgKSB7XG4gICAgICAgIHZhciBpICAgICAgID0gMCwgY2hhbmdlLFxuICAgICAgICAgICAgY2hhbmdlcyA9IHRoaXMuX2NoYW5nZXNTVyA9IHRoaXMuX2NoYW5nZXNTVyB8fCB7fTtcbiAgICAgICAgZm9yICggdmFyIGsgaW4gcFN0YXRlIClcbiAgICAgICAgICAgIGlmICggIXRoaXMuc3RhdGUgfHwgcFN0YXRlLmhhc093blByb3BlcnR5KGspXG4gICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICAgICBwU3RhdGVba10gIT0gdGhpcy5zdGF0ZVtrXVxuICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZVtrXSAmJiBwU3RhdGVba10gJiYgKHBTdGF0ZVtrXS5fcmV2ICE9IHRoaXMuX3JldnNba10pKS8vIHJldi9oYXNoIHVwZGF0ZVxuICAgICAgICAgICAgICAgICkgKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2c1trXSA9IHBTdGF0ZVtrXSAmJiBwU3RhdGVba10uX3JldiB8fCB0cnVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZXNba10gICAgPSBwU3RhdGVba107XG4gICAgICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvdWxkQXBwbHkoeyAuLi4odGhpcy5zdGF0ZSB8fCB7fSksIC4uLmNoYW5nZXMgfSkgJiYgdGhpcy5wdXNoKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHJlcGxhY2VTdGF0ZSggcFN0YXRlLCBjYiApIHtcbiAgICAgICAgdmFyIGkgICAgICA9IDAsIG1lID0gdGhpcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHBTdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogZ2V0IGEgc3RvcmUta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICBhcyggbmFtZSApIHtcbiAgICAgICAgcmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbiAgICB9XG4gICAgXG4gICAgb24oIGxpc3RzICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcbiAgICAgICAgZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVMaXN0ZW5lciggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5yZW1vdmVMaXN0ZW5lcihrLCBsaXN0c1trXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIHJlbGluayBiaW5kaW5ncyAmIHJlcXVpcmVzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgcmVsaW5rKCBmcm9tICkge1xuICAgICAgICBsZXQgc2NvcGUgICA9IHRoaXMuc2NvcGVPYmosXG4gICAgICAgICAgICBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKCBfc3RhdGljLnVzZSApIHtcbiAgICAgICAgICAgIC8vdG9kbyB1bmxpbmtcbiAgICAgICAgICAgIHRoaXMucHVsbChfc3RhdGljLnVzZSwgZmFsc2UsIGZyb20pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX3JlcXVpcmUgKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLmZvckVhY2goXG4gICAgICAgICAgICAgICAgc3RvcmUgPT4gKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhaXQoc2NvcGUuX19zY29wZVtzdG9yZV0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBjb21wbGV0ZSAoYWxsIHJlcXVpZXJlZCBrZXlzIGFyZSBoZXJlKVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc0NvbXBsZXRlKCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF0aGlzLl9yZXF1aXJlXG4gICAgICAgICAgICB8fCAhdGhpcy5fcmVxdWlyZS5sZW5ndGhcbiAgICAgICAgICAgIHx8IHN0YXRlICYmIHRoaXMuX3JlcXVpcmUucmVkdWNlKFxuICAgICAgICAgICAgICAgICggciwga2V5ICkgPT4gKHIgJiYgc3RhdGVba2V5XSksXG4gICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBzdGFibGVcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNTdGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFibGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIHN0YWJsZVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBzZXJpYWxpemUoIG91dHB1dCA9IHt9LCBjb21wbGV0ZVN0YXRlICkge1xuICAgICAgICBsZXQgcmVmcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID1cbiAgICAgICAgICAgICAgICB0aGlzLl91c2UucmVkdWNlKFxuICAgICAgICAgICAgICAgICAgICAoIG1hcCwga2V5ICkgPT4gey8vdG9kb1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMsIHBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBhbGlhcyA9IGtleS5uYW1lIHx8IGtleS5kZWZhdWx0TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoKD86XFwuW1xcd19dKykqKSg/OlxcOihbXFx3X10rKSk/Lyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCAgPSBrZXlbMl0gJiYga2V5WzJdLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVszXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVswXSB8fCBrZXlbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5zY29wZU9iai5zdG9yZXNbbmFtZV0uc2NvcGVPYmouX2lzTG9jYWxJZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW2FsaWFzXSA9IHRoaXMuc2NvcGVPYmouc3RvcmVzW25hbWVdLnNjb3BlT2JqLl9pZCArICcvJyArIG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgICAgICAgICAgICAgfSwge31cbiAgICAgICAgICAgICAgICApIHx8IHt9O1xuICAgICAgICBvdXRwdXRbdGhpcy5zY29wZU9iai5faWQgKyAnLycgKyB0aGlzLm5hbWVdID0ge1xuICAgICAgICAgICAgc3RhdGU6IGNvbXBsZXRlU3RhdGVcbiAgICAgICAgICAgICAgICA/IHsgLi4udGhpcy5zdGF0ZSB9XG4gICAgICAgICAgICAgICAgOiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlKS5yZWR1Y2UoKCBoLCBrICkgPT4gKCFyZWZzW2tdICYmIChoW2tdID0gdGhpcy5zdGF0ZVtrXSksIGgpLCB7fSksXG4gICAgICAgICAgICBkYXRhIDogdGhpcy5kYXRhLFxuICAgICAgICAgICAgcmVmc1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBzdGFibGVcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgcmVzdG9yZSggc25hcHNob3QgKSB7XG4gICAgICAgIGxldCBzbmFwID0gc25hcHNob3RbdGhpcy5zY29wZU9iai5faWQgKyAnLycgKyB0aGlzLm5hbWVdO1xuICAgICAgICBpZiAoIHNuYXAgKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gc25hcC5zdGF0ZTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNuYXAucmVmcykuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGtleSApID0+IHsvL3RvZG9cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzbmFwc2hvdFtzbmFwLnJlZnNba2V5XV0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgc25hcC5zdGF0ZVtrZXldID0gc25hcHNob3Rbc25hcC5yZWZzW2tleV1dLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybignbm90IGZvdW5kIDogJywga2V5LCBzbmFwLnJlZnNba2V5XSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHNuYXAuZGF0YTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVbiBiaW5kIHRoaXMgc3RvcmUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICAgICAqL1xuICAgIHVuQmluZCggb2JqLCBrZXksIHBhdGggKSB7XG4gICAgICAgIHZhciBmb2xsb3dlcnMgPSB0aGlzLl9mb2xsb3dlcnMsXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzW2ldWzBdID09PSBvYmogJiYgZm9sbG93ZXJzW2ldWzFdID09PSBrZXkgJiYgZm9sbG93ZXJzW2ldWzJdID09PSBwYXRoIClcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQmluZCB0aGlzIHN0b3JlIGNoYW5nZXMgdG8gdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICBiaW5kKCBvYmosIGtleSwgc2V0SW5pdGlhbCA9IHRydWUsIHBhdGggKSB7XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5wdXNoKFtvYmosIGtleSwgcGF0aF0pO1xuICAgICAgICBpZiAoIHNldEluaXRpYWwgJiYgdGhpcy5kYXRhICYmIHRoaXMuX3N0YWJsZSApIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gcGF0aCA/IHRoaXMucmV0cmlldmUocGF0aCkgOiB0aGlzLmRhdGE7XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgIGlmICgga2V5ICkgb2JqLnNldFN0YXRlKHsgW2tleV06IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmooZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb25jZSgnc3RhYmxlJywgY2IpXG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgdGhlbiggY2IgKSB7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmxlIClcbiAgICAgICAgICAgIHJldHVybiBjYihudWxsLCB0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLm9uY2UoJ3N0YWJsZScsIGUgPT4gY2IobnVsbCwgdGhpcy5kYXRhKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEFkZCBhIGxvY2sgc28gdGhlIHN0b3JlIHdpbGwgbm90IHByb3BhZyBpdCBzdGF0ZSB1bnRpbGwgcmVsZWFzZSgpIGlzIGNhbGxcbiAgICAgKiBAcGFyYW0gcHJldmlvdXMge1N0b3JlfG51bWJlcnxBcnJheX0gQG9wdGlvbmFsIHdmIHRvIHdhaXQsIHJlbGVhc2VzIHRvIHdhaXQgb3IgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxuICAgICAqIEByZXR1cm5zIHtUYXNrRmxvd31cbiAgICAgKi9cbiAgICB3YWl0KCBwcmV2aW91cyApIHtcbiAgICAgICAgaWYgKCB0eXBlb2YgcHJldmlvdXMgPT0gXCJudW1iZXJcIiApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2xvY2tzLmFsbCArPSBwcmV2aW91cztcbiAgICAgICAgaWYgKCBpcy5hcnJheShwcmV2aW91cykgKVxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzLm1hcCh0aGlzLndhaXQuYmluZCh0aGlzKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmVhc29uID0gaXMuc3RyaW5nKHByZXZpb3VzKSA/IHByZXZpb3VzIDogbnVsbDtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmICggcHJldmlvdXMgJiYgaXMuZm4ocHJldmlvdXMudGhlbikgKSB7XG4gICAgICAgICAgICBwcmV2aW91cy50aGVuKHRoaXMucmVsZWFzZS5iaW5kKHRoaXMsIG51bGwpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRGVjcmVhc2UgbG9ja3MgZm9yIHRoaXMgc3RvcmUsIGlmIGl0IHJlYWNoIDAgJiBpdCBoYXZlIGEgcHVibGljIHN0YXRlLFxuICAgICAqIGl0IHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgZm9sbG93ZXJzLFxuICAgICAqIHRoZW4sIGFsbCBzdHVmZiBwYXNzZWQgdG8gXCJ0aGVuXCIgY2FsbCBiYWNrIHdpbGwgYmUgZXhlYyAvIHJlbGVhc2VkXG4gICAgICogQHBhcmFtIGRlc3luY1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJlbGVhc2UoIHJlYXNvbiwgY2IgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgbGV0IGkgICAgICAgPSAwLCB3YXNTdGFibGUgPSB0aGlzLl9zdGFibGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGlzLmZuKHJlYXNvbikgKSB7XG4gICAgICAgICAgICBjYiAgICAgPSByZWFzb247XG4gICAgICAgICAgICByZWFzb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhcmVhc29uICYmIHRoaXMuX19sb2Nrcy5hbGwgPT0gMCApXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhLS10aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuZGF0YSAmJiB0aGlzLmlzQ29tcGxldGUoKSApIHtcbiAgICAgICAgICAgIGxldCBwcm9wYWcgICA9IHRoaXMuc2hvdWxkUHJvcGFnKHRoaXMuZGF0YSk7XG4gICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgcHJvcGFnICYmIHRoaXMuX3JldisrOy8vXG4gICAgICAgICAgICBpZiAoIHByb3BhZyAmJiB0aGlzLl9mb2xsb3dlcnMubGVuZ3RoIClcbiAgICAgICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaCgoIGZvbGxvd2VyICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGZvbGxvd2VyWzJdID8gdGhpcy5yZXRyaWV2ZShmb2xsb3dlclsyXSkgOiB0aGlzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGlmICggIWRhdGEgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvbGxvd2VyWzBdID09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWzBdKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYiAmJiBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclswXS5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9sbG93ZXJbMV0pID8geyBbZm9sbG93ZXJbMV1dOiBkYXRhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jYiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgKCkgPT4gKCEoLS1pKSAmJiBjYigpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9lbHNlXG4gICAgICAgICAgICAhd2FzU3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgIHByb3BhZyAmJiB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICBjYiAmJiBjYigpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBjYiAmJiB0aGlzLnRoZW4oY2IpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUud2FybihcImRpc3Bvc2VcIiwgcmVhc29uLCB0aGlzLl9fcmV0YWlucyk7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnNbcmVhc29uXSApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIDogXCIgKyByZWFzb24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dLS07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCB0aGlzLl9fcmV0YWlucy5hbGwgPT0gMCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5zLmFsbCAmJiB0aGlzLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4gKCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkZXN0cm95KCkge1xuICAgICAgICAvLyAgY29uc29sZS5sb2coXCJkZXN0cm95XCIsIHRoaXMuX3VpZCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knLCB0aGlzKTtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGZvbGxvd2VyICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclswXSAhPT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBmb2xsb3dlclswXS5zdG9yZXMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmb2xsb3dlclswXS5zdG9yZXNbZm9sbG93ZXJbMV1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IuX3JldiAgPSB0aGlzLnJldjtcbiAgICAgICAgdGhpcy5kZWFkICAgICAgICAgICAgICA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JldnMgICAgICAgICAgICAgPSB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlID0gdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgfVxufVxuXG5cblN0b3JlLlNlZWQgPSBjbGFzcyBTZWVkU3RvcmUgZXh0ZW5kcyBTdG9yZSB7XG4gICAgc3RhdGljIFNFRUQgPSB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqICBcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqICBcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogIFxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICogIFxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGlzIGZyb20gJ2lzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL1Njb3BlJztcblxuY29uc3QgU2ltcGxlT2JqZWN0UHJvdG8gPSAoe30pLmNvbnN0cnVjdG9yO1xuXG4vKipcbiAqIEluaGVyaXRhYmxlIFJlU2NvcGUgXCJIT0NcIiAoSGlnaCBPcmRlciBDb21wb25lbnQpXG4gKlxuICogQGNsYXNzIENvbXBvbmVudFxuICogQGRlc2MgUGFyZW50IFJlYWN0IENvbXBvbmVudCB3aXRoIHN0b3JlIGluamVjdGlvbiBpbiBpdHMgc3RhdGVcbiAqL1xuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9XG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyAgICAgID0ge1xuICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfVxuICAgIFxuICAgIGNvbnN0cnVjdG9yKCBwLCBjdHgsIHEgKSB7XG4gICAgICAgIHN1cGVyKHAsIGN0eCwgcSk7XG4gICAgICAgIGxldCBzY29wZSAgICA9XG4gICAgICAgICAgICAgICAgcC5fX3Njb3BlXG4gICAgICAgICAgICAgICAgfHwgY3R4LnJlc2NvcGU7XG4gICAgICAgIHRoaXMuJHNjb3BlICA9IHNjb3BlO1xuICAgICAgICB0aGlzLiRzdG9yZXMgPSB0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5zdG9yZXM7XG4gICAgICAgIGlmICggdGhpcy5jb25zdHJ1Y3Rvci51c2UgKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4uc2NvcGUubWFwKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdLCBmYWxzZSkvLyBkb24ndCBiaW5kXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoICF0aGlzLiRzY29wZSApXG4gICAgICAgICAgICB0aGlzLnJlbmRlciA9ICgpID0+IDxkaXY+Tm8gUmVzY29wZSBoZXJlIHsgc3VwZXIubmFtZSB9PC9kaXY+XG4gICAgfVxuICAgIFxuICAgIGRpc3BhdGNoKCAuLi5hcmd6ICkge1xuICAgICAgICB0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5kaXNwYXRjaCguLi5hcmd6KVxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGlmICggdGhpcy5jb25zdHJ1Y3Rvci51c2UgKSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5iaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdLCBmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2VcbiAgICAgICAgJiYgdGhpcy4kc2NvcGUudW5CaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlIHx8IFtdKTtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCBucCwgbmMgKSB7XG4gICAgICAgIGxldCBuU2NvcGUgPSBucC5fX3Njb3BlXG4gICAgICAgICAgICB8fCBuYy5yZXNjb3BlIHx8IHRoaXMuJHNjb3BlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBuU2NvcGUgIT0gdGhpcy4kc2NvcGUgKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnVzZSAmJiB0aGlzLiRzY29wZS51bkJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UpO1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUgID0gblNjb3BlO1xuICAgICAgICAgICAgdGhpcy4kc3RvcmVzID0gdGhpcy4kc2NvcGUuc3RvcmVzO1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2UgJiYgblNjb3BlLmJpbmQodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci51c2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc2NvcGU6IHRoaXMuJHNjb3BlIHx8IHRoaXMuY29udGV4dC5yZXNjb3BlLFxuICAgICAgICAgICAgJHN0b3JlczogdGhpcy4kc2NvcGUuc3RvcmVzIHx8IHRoaXMuY29udGV4dC4kc3RvcmVzXG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4gfHwgPGRpdi8+XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm4gYSBSZWFjdCBcIkhPQ1wiIChIaWdoIE9yZGVyIENvbXBvbmVudCkgdGhhdCA6XG4gKiAgLSBJbmhlcml0IEJhc2VDb21wb25lbnQsXG4gKiAgLSBJbmplY3QgJiBtYWludGFpbiB0aGUgc3RvcmVzIGluIEJhc2VDb21wb25lbnQ6OnVzZSBhbmQvb3IgKHVzZSkgaW4gdGhlIGluc3RhbmNlcyBzdGF0ZS5cbiAqICAtIFByb3BhZyAoc2NvcGUpIGluIHRoZSByZXR1cm5lZCBSZWFjdCBDb21wb25lbnQgY29udGV4dFxuICpcbiAqXG4gKiBAcGFyYW0gQmFzZUNvbXBvbmVudCB7UmVhY3QuQ29tcG9uZW50fSBCYXNlIFJlYWN0IENvbXBvbmVudCAoIGRlZmF1bHQgOiBSZWFjdC5Db21wb25lbnQgKVxuICogQHBhcmFtIHNjb3BlIHtSZVNjb3BlLlNjb3BlfGZ1bmN0aW9ufSB0aGUgcHJvcGFnYXRlZCBTY29wZSB3aGVyZSB0aGUgc3RvcmVzIHdpbGwgYmUgc2VhcmNoZWRcbiAqIEBwYXJhbSB1c2Uge2FycmF5fSB0aGUgbGlzdCBvZiBzdG9yZXMgaW5qZWN0ZWQgZnJvbSB0aGUgY3VycmVudCBzY29wZVxuICogQHBhcmFtIGFkZGl0aW9uYWxDb250ZXh0IHtPYmplY3R9IGNvbnRleHQgdG8gYmUgcHJvcGFnYXRlZFxuICogQHJldHVybnMge1JlU2NvcGVQcm92aWRlcn1cbiAqL1xuZnVuY3Rpb24gcmVTY29wZVN0YXRlKCAuLi5hcmd6ICkge1xuICAgIGxldCBCYXNlQ29tcG9uZW50ICAgICA9ICghYXJnelswXSB8fCBhcmd6WzBdLnByb3RvdHlwZSAmJiBhcmd6WzBdLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSAmJiBhcmd6LnNoaWZ0KCksXG4gICAgICAgIHNjb3BlICAgICAgICAgICAgID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTY29wZSB8fCBpcy5mbihhcmd6WzBdKSkgJiYgYXJnei5zaGlmdCgpLFxuICAgICAgICB1c2UgICAgICAgICAgICAgICA9ICghYXJnelswXSB8fCBpcy5hcnJheShhcmd6WzBdKSkgJiYgYXJnei5zaGlmdCgpLFxuICAgICAgICBhZGRpdGlvbmFsQ29udGV4dCA9ICghYXJnelswXSB8fCBhcmd6WzBdIGluc3RhbmNlb2YgU2ltcGxlT2JqZWN0UHJvdG8pICYmIGFyZ3ouc2hpZnQoKTtcbiAgICBcbiAgICBpZiAoICEoQmFzZUNvbXBvbmVudCAmJiBCYXNlQ29tcG9uZW50LnByb3RvdHlwZSAmJiBCYXNlQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSApIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICggQmFzZUNvbXBvbmVudCApIHtcbiAgICAgICAgICAgIHJldHVybiByZVNjb3BlU3RhdGUoQmFzZUNvbXBvbmVudCwgc2NvcGUsIHVzZSwgYWRkaXRpb25hbENvbnRleHQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdXNlICAgICAgICAgICAgICAgPSBbLi4uKEJhc2VDb21wb25lbnQudXNlIHx8IFtdKSwgLi4uKHVzZSB8fCBbXSldO1xuICAgIGFkZGl0aW9uYWxDb250ZXh0ID0gYWRkaXRpb25hbENvbnRleHQgJiYgT2JqZWN0LmtleXMoYWRkaXRpb25hbENvbnRleHQpLnJlZHVjZSgoIGgsIGsgKSA9PiAoaFtrXSA9IFByb3BUeXBlcy5hbnksIGgpLCB7fSkgfHwge307XG4gICAgXG4gICAgY2xhc3MgUmVTY29wZVByb3ZpZGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgICAgIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgICAgIC4uLihCYXNlQ29tcG9uZW50LmNoaWxkQ29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIC4uLihhZGRpdGlvbmFsQ29udGV4dCksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgICAgICA9IHtcbiAgICAgICAgICAgIC4uLihCYXNlQ29tcG9uZW50LmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICAuLi4oYWRkaXRpb25hbENvbnRleHQpLFxuICAgICAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgZGVmYXVsdFByb3BzICAgICAgPSB7XG4gICAgICAgICAgICAuLi4oQmFzZUNvbXBvbmVudC5kZWZhdWx0UHJvcHMgfHwge30pLFxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBkaXNwbGF5TmFtZSAgICAgICA9IFwic3RhdGVTY29wZWQoXCIgKyAoQmFzZUNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBCYXNlQ29tcG9uZW50Lm5hbWUpICsgXCIpXCI7XG4gICAgICAgIFxuICAgICAgICBjb25zdHJ1Y3RvciggcCwgY3R4LCBxICkge1xuICAgICAgICAgICAgc3VwZXIocCwgY3R4LCBxKTtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlID1cbiAgICAgICAgICAgICAgICBwLl9fc2NvcGVcbiAgICAgICAgICAgICAgICB8fCBpcy5mbihzY29wZSkgJiYgc2NvcGUodGhpcywgcCwgY3R4KSB8fCBzY29wZVxuICAgICAgICAgICAgICAgIHx8IGN0eC5yZXNjb3BlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpcy5mbihzY29wZSlcbiAgICAgICAgICAgICYmIHRoaXMuJHNjb3BlLnJldGFpbigpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlcyA9IHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLnN0b3JlcztcbiAgICAgICAgICAgIGlmICggdGhpcy4kc2NvcGUgJiYgdXNlLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLiRzY29wZS5tYXAodGhpcywgdXNlLCBmYWxzZSkvLyBkb24ndCBiaW5kIG5vdyBkdWUgdG8gU1NSXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoICF0aGlzLiRzY29wZSApXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIgPSAoKSA9PiA8ZGl2Pk5vIFJlU2NvcGUgY29udGV4dCBpbiB7IEJhc2VDb21wb25lbnQubmFtZSB9PC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICRkaXNwYXRjaCggLi4uYXJneiApIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmRpc3BhdGNoKC4uLmFyZ3opXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgICAgIGlmICggdXNlLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzY29wZS5iaW5kKHRoaXMsIHVzZSwgZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsTW91bnQgJiYgc3VwZXIuY29tcG9uZW50V2lsbE1vdW50KClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCAmJiBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB1c2UubGVuZ3RoICYmIHRoaXMuJHNjb3BlLnVuQmluZCh0aGlzLCB1c2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpcy5mbihzY29wZSkgJiYgdGhpcy4kc2NvcGUuZGlzcG9zZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkZWxldGUgdGhpcy4kc3RvcmVzO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuJHNjb3BlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCBucCwgbmMgKSB7XG4gICAgICAgICAgICBsZXQgblNjb3BlID0gbnAuX19zY29wZVxuICAgICAgICAgICAgICAgIHx8IHNjb3BlICYmIHRoaXMuJHNjb3BlXG4gICAgICAgICAgICAgICAgfHwgbmMucmVzY29wZVxuICAgICAgICAgICAgICAgIHx8IHRoaXMuJHNjb3BlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIG5TY29wZSAhPSB0aGlzLiRzY29wZSApIHtcbiAgICAgICAgICAgICAgICB1c2UubGVuZ3RoICYmIHRoaXMuJHNjb3BlLnVuQmluZCh0aGlzLCB1c2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHNjb3BlICA9IG5TY29wZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZXMgPSB0aGlzLiRzY29wZS5zdG9yZXM7XG4gICAgICAgICAgICAgICAgdXNlLmxlbmd0aCAmJiBuU2NvcGUuYmluZCh0aGlzLCB1c2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAmJiBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wLCBuYyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgICAgIGxldCBjdHggPSBzdXBlci5nZXRDaGlsZENvbnRleHQgJiYgc3VwZXIuZ2V0Q2hpbGRDb250ZXh0KCkgfHwge307XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAgICAgICByZXNjb3BlOiB0aGlzLiRzY29wZSB8fCB0aGlzLmNvbnRleHQucmVzY29wZSxcbiAgICAgICAgICAgICAgICAkc3RvcmVzOiB0aGlzLiRzY29wZS5zdG9yZXMgfHwgdGhpcy5jb250ZXh0LiRzdG9yZXNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIFJlU2NvcGVQcm92aWRlcjtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBSZWFjdCBcIkhPQ1wiIChIaWdoIE9yZGVyIENvbXBvbmVudCkgdGhhdCA6XG4gKiAgLSBJbmplY3QgJiBtYWludGFpbiB0aGUgc3RvcmVzIGxpc3RlZCBiYXNlQ29tcG9uZW50Ojp1c2UgYW5kL29yICh1c2UpIGluIHRoZSBpbnN0YW5jZXMgcHJvcHMuXG4gKiAgLSBQcm9wYWcgKHNjb3BlKSBpbiB0aGUgcmV0dXJuZWQgUmVhY3QgQ29tcG9uZW50IGNvbnRleHRcbiAqXG4gKiBAcGFyYW0gQmFzZUNvbXBvbmVudCB7UmVhY3QuQ29tcG9uZW50fSBCYXNlIFJlYWN0IENvbXBvbmVudCAoIGRlZmF1bHQgOiBSZWFjdC5Db21wb25lbnQgKVxuICogQHBhcmFtIHNjb3BlIHtSZVNjb3BlLlNjb3BlfGZ1bmN0aW9ufSB0aGUgcHJvcGFnYXRlZCBTY29wZSB3aGVyZSB0aGUgc3RvcmVzIHdpbGwgYmUgc2VhcmNoZWQgKCBkZWZhdWx0IDogdGhlIGRlZmF1bHRcbiAqICAgICBSZVNjb3BlOjpTY29wZTo6c2NvcGVzLnN0YXRpYyBzY29wZSApXG4gKiBAcGFyYW0gdXNlIHthcnJheX0gdGhlIGxpc3Qgb2Ygc3RvcmVzIHRvIGluamVjdCBmcm9tIHRoZSBjdXJyZW50IHNjb3BlXG4gKiBAcGFyYW0gYWRkaXRpb25hbENvbnRleHQge09iamVjdH0gY29udGV4dCB0byBiZSBwcm9wYWdhdGVkXG4gKiBAcmV0dXJucyB7UmVTY29wZVByb3ZpZGVyfVxuICovXG5mdW5jdGlvbiByZVNjb3BlUHJvcHMoIC4uLmFyZ3ogKSB7XG4gICAgbGV0IEJhc2VDb21wb25lbnQgICAgID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0ucHJvdG90eXBlICYmIGFyZ3pbMF0ucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpICYmIGFyZ3ouc2hpZnQoKSxcbiAgICAgICAgc2NvcGUgICAgICAgICAgICAgPSAoIWFyZ3pbMF0gfHwgYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlIHx8IGlzLmZuKGFyZ3pbMF0pKSAmJiBhcmd6LnNoaWZ0KCksXG4gICAgICAgIHVzZSAgICAgICAgICAgICAgID0gKCFhcmd6WzBdIHx8IGlzLmFycmF5KGFyZ3pbMF0pKSAmJiBhcmd6LnNoaWZ0KCksXG4gICAgICAgIGFkZGl0aW9uYWxDb250ZXh0ID0gKCFhcmd6WzBdIHx8IGFyZ3pbMF0gaW5zdGFuY2VvZiBTaW1wbGVPYmplY3RQcm90bykgJiYgYXJnei5zaGlmdCgpO1xuICAgIFxuICAgIGlmICggIShCYXNlQ29tcG9uZW50ICYmIEJhc2VDb21wb25lbnQucHJvdG90eXBlICYmIEJhc2VDb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpICkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCBCYXNlQ29tcG9uZW50ICkge1xuICAgICAgICAgICAgcmV0dXJuIHJlU2NvcGVQcm9wcyhCYXNlQ29tcG9uZW50LCBzY29wZSwgdXNlLCBhZGRpdGlvbmFsQ29udGV4dClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB1c2UgICAgICAgICAgICAgICA9IFsuLi4oQmFzZUNvbXBvbmVudC51c2UgfHwgW10pLCAuLi4odXNlIHx8IFtdKV07XG4gICAgYWRkaXRpb25hbENvbnRleHQgPSBhZGRpdGlvbmFsQ29udGV4dCAmJiBPYmplY3Qua2V5cyhhZGRpdGlvbmFsQ29udGV4dCkucmVkdWNlKCggaCwgayApID0+IChoW2tdID0gUHJvcFR5cGVzLmFueSwgaCksIHt9KSB8fCB7fTtcbiAgICBcbiAgICByZXR1cm4gcmVTY29wZVN0YXRlKGNsYXNzIFJlU2NvcGVQcm9wc1Byb3ZpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgICAgICAgLi4uKEJhc2VDb21wb25lbnQuY29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIC4uLihhZGRpdGlvbmFsQ29udGV4dCksXG4gICAgICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICB9O1xuICAgICAgICBzdGF0aWMgY29udGV4dFR5cGVzICAgICAgPSB7XG4gICAgICAgICAgICAuLi4oQmFzZUNvbXBvbmVudC5jb250ZXh0VHlwZXMgfHwge30pLFxuICAgICAgICAgICAgLi4uKGFkZGl0aW9uYWxDb250ZXh0KSxcbiAgICAgICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgICAgIH07XG4gICAgICAgIHN0YXRpYyBkaXNwbGF5TmFtZSAgICAgICA9IFwicHJvcHNTY29wZWQoXCIgKyAoQmFzZUNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBCYXNlQ29tcG9uZW50Lm5hbWUpICsgXCIpXCI7XG4gICAgICAgIFxuICAgICAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gPEJhc2VDb21wb25lbnQgeyAuLi50aGlzLnByb3BzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IC4uLnRoaXMuc3RhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRkaXNwYXRjaD17ICggLi4uYXJneiApID0+IHRoaXMuJGRpc3BhdGNoKC4uLmFyZ3opIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc3RvcmVzPXsgdGhpcy4kc3RvcmVzIH0vPlxuICAgICAgICB9XG4gICAgfSwgc2NvcGUsIHVzZSk7XG59XG5cbmV4cG9ydCB7XG4gICAgQ29tcG9uZW50IGFzIGRlZmF1bHQsXG4gICAgQ29tcG9uZW50LFxuICAgIHJlU2NvcGVQcm9wcyxcbiAgICByZVNjb3BlUHJvcHMgYXMgcmVzY29wZVByb3BzLFxuICAgIHJlU2NvcGVTdGF0ZSxcbiAgICByZVNjb3BlU3RhdGUgYXMgcmVzY29wZVN0YXRlXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZWFjdFRvb2xzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==