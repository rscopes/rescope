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
	
	var _ReactHocs = __webpack_require__(7);
	
	var RTools = _interopRequireWildcard(_ReactHocs);
	
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
	  reScope: RTools.reScopeState
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
	    fn.prototype = parent ? new parent._[id]() : target[id] || {};
	    target[id] = new fn();
	    target._[id] = fn;
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
	
	        var _ = {};
	
	        _.maxListeners = defaultMaxListeners || _this.constructor.defaultMaxListeners;
	
	        id = id || key && (parent && parent._id || '') + '::' + key;
	
	        _.isLocalId = !id;
	
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
	        _.persistenceTm = persistenceTm || _this.constructor.persistenceTm;
	
	        _this.stores = {};
	        _this.state = {};
	        _this.data = {};
	
	        _this.parent = parent;
	        _this._ = _;
	        if (parent && parent.dead) throw new Error("Can't use a dead scope as parent !");
	
	        __proto__push(_this, 'stores', parent);
	        __proto__push(_this, 'state', parent);
	        __proto__push(_this, 'data', parent);
	
	        _this.sources = [];
	        _.childScopes = [];
	        _.childScopesList = [];
	        _.unStableChilds = 0;
	
	        _this.__retains = { all: 0 };
	        _this.__locks = { all: 1 };
	        _._listening = {};
	        _._scope = {};
	        _._mixed = [];
	        _._mixedList = [];
	        _.followers = [];
	        if (parent) {
	            parent.retain("isMyParent");
	            if (!rootEmitter) {
	                !parent._stable && _this.wait("waitingParent");
	                parent.on(_._parentList = {
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
	                parent.on(_._parentList = {
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
	
	            if (!this._._scope[id]) {
	                var _parent;
	
	                //ask mixed || parent
	                if (this._._mixed.reduce(function (mounted, ctx) {
	                    return mounted || ctx._mount(id, snapshot, state, data);
	                }, false) || !this.parent) return;
	                return (_parent = this.parent)._mount.apply(_parent, arguments);
	            } else {
	                var store = this._._scope[id],
	                    ctx = void 0;
	                if (is.fn(store)) {
	                    this._._scope[id] = new store(this, { snapshot: snapshot, name: id, state: state, data: data });
	                } else if (snapshot) store.restore(snapshot);else {
	                    if (state !== undefined && data === undefined) store.setState(state);else if (state !== undefined) store.state = state;
	
	                    if (data !== undefined) store.push(data);
	                }
	                this._watchStore(id);
	            }
	
	            return this._._scope[id];
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
	            if (!this._._listening[id] && !is.fn(this._._scope[id])) {
	                !this._._scope[id]._autoDestroy && this._._scope[id].retain("scoped");
	                !this._._scope[id].isStable() && this.wait(id);
	                this._._scope[id].on(this._._listening[id] = {
	                    'destroy': function destroy(s) {
	                        delete _this3._._listening[id];
	                        _this3._._scope[id] = _this3._._scope[id].constructor;
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
	            this._._mixed.push(targetCtx);
	            targetCtx.retain("mixedTo");
	            if (!targetCtx._stable) this.wait(targetCtx._id);
	
	            this._._mixedList.push(lists = {
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
	
	            this.relink(this._._scope, this, false, true);
	            this._._mixed.forEach(function (ctx) {
	                __proto__push(_this4, 'stores');
	                __proto__push(_this4, 'state');
	                __proto__push(_this4, 'data');
	                ctx.relink(ctx._._scope, _this4, true, true);
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
	
	            var lctx = targetCtx._.stores.prototype;
	            Object.keys(srcCtx).forEach(function (id) {
	                if (!force && targetCtx._._scope[id] === srcCtx[id] || targetCtx._._scope[id] && targetCtx._._scope[id].constructor === srcCtx[id]) return;
	
	                if (!force && targetCtx._._scope[id]) {
	                    if (!external && !is.fn(targetCtx._._scope[id])) {
	                        console.info("Rescope Store : ", id, " already exist in this scope ! ( try __proto__ hot patch )");
	                        targetCtx._._scope[id].__proto__ = srcCtx[id].prototype;
	                    }
	                    if (!external && is.fn(targetCtx._._scope[id])) targetCtx._._scope[id] = srcCtx[id];
	
	                    return;
	                } else if (!force && !external) _this6._._scope[id] = srcCtx[id];
	
	                Object.defineProperty(lctx, id, {
	                    get: function get() {
	                        return _this6._._scope[id];
	                    }
	                });
	                Object.defineProperty(targetCtx._.state.prototype, id, {
	                    get: function get() {
	                        return _this6._._scope[id] && _this6._._scope[id].state;
	                    },
	                    set: function set(v) {
	                        return _this6._mount(id, null, v);
	                    }
	                });
	                Object.defineProperty(targetCtx._.data.prototype, id, {
	                    get: function get() {
	                        return _this6._._scope[id] && _this6._._scope[id].data;
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
	
	            this._.followers.push([obj, key, as || undefined, lastRevs = refKeys.reduce(function (revs, ref) {
	                revs[ref.storeId] = revs[ref.storeId] || {
	                    rev: 0,
	                    refs: []
	                };
	                revs[ref.storeId].refs.push(ref);
	                return revs;
	            }, {})]);
	
	            this.mount(key);
	            this.retainStores(Object.keys(lastRevs));
	
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
	            var followers = this._.followers,
	                i = followers && followers.length;
	            while (followers && i--) {
	                if (followers[i][0] === obj && '' + followers[i][1] == '' + key && followers[i][2] == as) {
	                    this.disposeStores(Object.keys(followers[i][3]));
	                    return followers.splice(i, 1);
	                }
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
	
	            var ctx = this._._scope;
	            if (!storesRevMap) {
	                storesRevMap = {};
	            }
	            Object.keys(ctx).forEach(function (id) {
	                if (!is.fn(ctx[id])) {
	                    storesRevMap[id] = ctx[id]._rev;
	                } else if (!storesRevMap.hasOwnProperty(id)) storesRevMap[id] = false;
	            });
	            if (!local) {
	                this._._mixed.reduce(function (updated, ctx) {
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
	
	            var ctx = this._._scope;
	
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
	            updated = this._._mixed.reduce(function (updated, ctx) {
	                return ctx.getUpdates(storesRevMap, output, updated) || updated;
	            }, updated);
	            updated = this.parent && this.parent.getUpdates(storesRevMap, output, updated) || updated;
	            return updated && output;
	        }
	    }, {
	        key: '_getAllChilds',
	        value: function _getAllChilds() {
	            var childs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	            childs.push.apply(childs, _toConsumableArray(this._.childScopes));
	            this._.childScopes.forEach(function (ctx) {
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
	
	            var ctx = this._._scope;
	            if (output[this._id]) return;
	
	            output[this._id] = {};
	
	            Object.keys(ctx).forEach(function (id) {
	                if (is.fn(ctx[id])) return;
	
	                ctx[id].serialize(output);
	            });
	
	            this._.childScopes.forEach(function (ctx) {
	                !ctx._.isLocalId && ctx.serialize(output);
	            });
	
	            this._._mixed.forEach(function (ctx) {
	                !ctx._.isLocalId && ctx.serialize(output);
	            });
	
	            return output;
	        }
	    }, {
	        key: 'restore',
	        value: function restore(snapshot, force) {
	            var _this10 = this;
	
	            var ctx = this._._scope;
	
	            snapshot[this._id] && Object.keys(ctx).forEach(function (name) {
	                var snap = snapshot[_this10._id + '/' + name];
	
	                if (snap) {
	
	                    if (force && !is.fn(ctx[name])) ctx[name].destroy();
	
	                    _this10.mount(name, snapshot); // quiet
	                }
	            });
	
	            this._._mixed.forEach(function (ctx) {
	                !ctx._.isLocalId && ctx.restore(snapshot, force);
	            });
	
	            this._.childScopes.forEach(function (ctx) {
	                !ctx._.isLocalId && ctx.restore(snapshot, force);
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
	
	            this._._mixed.forEach(function (ctx) {
	                return ctx.dispatch(action, data);
	            });
	            this.parent && this.parent.dispatch(action, data);
	            Object.keys(this._._scope).forEach(function (id) {
	                if (!is.fn(_this11._._scope[id])) _this11._._scope[id].trigger(action, data);
	            });
	
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
	                this._.stabilizerTM && clearTimeout(this._.stabilizerTM);
	
	                this._.stabilizerTM = setTimeout(function (e) {
	                    _this15._.stabilizerTM = null;
	                    if (_this15.__locks.all) return;
	
	                    _this15._.propagTM && clearTimeout(_this15._.propagTM);
	
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
	
	            this._.propagTM && clearTimeout(this._.propagTM);
	            this._.propagTM = setTimeout(function (e) {
	                _this16._.propagTM = null;
	                _this16._propag();
	            }, 2);
	        }
	    }, {
	        key: '_propag',
	        value: function _propag() {
	            var _this17 = this;
	
	            if (this._.followers.length) this._.followers.forEach(function (_ref3) {
	                var obj = _ref3[0],
	                    key = _ref3[1],
	                    as = _ref3[2],
	                    lastRevs = _ref3[3],
	                    remaps = _ref3[3];
	
	                var data = _this17.getUpdates(lastRevs);
	                if (!data) return;
	                if (typeof obj != "function") {
	                    //console.log("setState ",obj, Object.keys(data))
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
	
	            this._.childScopes.push(ctx);
	            var lists = {
	                'stable': function stable(s) {
	                    _this18._.unStableChilds--;
	                    if (!_this18._.unStableChilds) _this18.emit("stableTree", _this18);
	                },
	                'unstable': function unstable(s) {
	                    _this18._.unStableChilds++;
	                    if (1 == _this18._.unStableChilds) _this18.emit("unstableTree", _this18);
	                },
	                'stableTree': function stableTree(s) {
	                    _this18._.unStableChilds--;
	                    if (!_this18._.unStableChilds) _this18.emit("stableTree", _this18);
	                },
	                'unstableTree': function unstableTree(s) {
	                    _this18._.unStableChilds++;
	                    if (1 == _this18._.unStableChilds) _this18.emit("unstableTree", _this18);
	                },
	                'destroy': function destroy(ctx) {
	                    if (ctx._.unStableChilds) _this18._.unStableChilds--;
	                    if (!ctx.isStable()) _this18._.unStableChilds--;
	
	                    if (!_this18._.unStableChilds) _this18.emit("stableTree", _this18);
	                }
	            },
	                wasStable = this._.unStableChilds;
	            //!ctx.isStable() && console.warn('add unstable child');
	            !ctx.isStable() && this._.unStableChilds++;
	            ctx._.unStableChilds && this._.unStableChilds++;
	            this._.childScopesList.push(lists);
	            if (!wasStable && this._.unStableChilds) this.emit("unstableTree", this);
	            ctx.on(lists);
	        }
	    }, {
	        key: '_rmChild',
	        value: function _rmChild(ctx) {
	            var i = this._.childScopes.indexOf(ctx),
	                wasStable = this._.unStableChilds;
	            if (i != -1) {
	                this._.childScopes.splice(i, 1);
	                !ctx.isStable() && this._.unStableChilds--;
	                ctx._.unStableChilds && this._.unStableChilds--;
	                ctx.un(this._.childScopesList.splice(i, 1)[0]);
	                if (wasStable && !this._.unStableChilds) this.emit("stableTree");
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
	                if (this._.persistenceTm) {
	                    this._.destroyTM && clearTimeout(this._.destroyTM);
	                    this._.destroyTM = setTimeout(function (e) {
	                        _this19.then(function (s) {
	                            !_this19.__retains.all && _this19.destroy();
	                        });
	                    }, this._.persistenceTm);
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
	
	            var ctx = this._._scope;
	            //console.warn("destroy", this._id);
	            this.dead = true;
	            this.emit("destroy", this);
	            for (var key in ctx) {
	                if (!is.fn(ctx[key])) {
	                    !ctx[key]._autoDestroy && ctx[key].dispose("scoped");
	                }
	            }Object.keys(this._._listening).forEach(function (id) {
	                return _this20._._scope[id].removeListener(_this20._._listening[id]);
	            });
	
	            this._.stabilizerTM && clearTimeout(this._.stabilizerTM);
	            this._.propagTM && clearTimeout(this._.propagTM);
	
	            if (!this._.isLocalId) delete openScopes[this._id];
	            this._.followers.map(this.unBind.bind(this));
	
	            while (this._._mixedList.length) {
	                this._._mixed[0].removeListener(this._._mixedList.shift());
	                this._._mixed.shift().dispose("mixedTo");
	            }
	            if (this._._parentList) {
	                this.parent._rmChild(this);
	                this.parent.removeListener(this._._parentList);
	                this.parent.dispose("isMyParent");
	                this._._parentList = null;
	            }
	            this._ = null;
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
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
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
	    TaskSequencer = __webpack_require__(6),
	    shortid = __webpack_require__(4),
	    objProto = Object.getPrototypeOf({});
	
	/**
	 * @class Store
	 */
	var Store = (_temp = _class = function (_EventEmitter) {
	    _inherits(Store, _EventEmitter);
	
	    _createClass(Store, null, [{
	        key: 'as',
	
	
	        /**
	         * get a Builder-key pair for Store::map
	         * @param {string} name
	         * @returns {{store: Store, name: *}}
	         */
	        // overridable list of store that will allow push if updated
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
	        // default state
	        /**
	         * if retain goes to 0 :
	         * false to not destroy,
	         * 0 to sync auto destroy
	         * Ms to autodestroy after tm ms if no retain has been called
	         * @type {boolean|Int}
	         */
	        // overridable list of source stores
	
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
	                var _component$_sources;
	
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
	                    console.error("Not a mappable store item '" + name + "/" + alias + "' in " + (component.name || component) + ' !!', store);
	                    return false;
	                } else if (is.fn(store)) {
	                    scope._mount(name);
	                    scope.stores[name].bind(component, alias, setInitial, path);
	                } else {
	                    store.bind(component, alias, setInitial, path);
	                }
	
	                // give initial store weight basing sources
	                (_component$_sources = component._sources).push.apply(_component$_sources, _toConsumableArray(scope.stores[name]._sources));
	
	                targetRevs[alias] = targetRevs[alias] || true;
	                !targetScope[name] && (targetScope[name] = scope.stores[name]);
	                if (scope.stores[name].hasOwnProperty('data')) initialOutputs[name] = scope.data[name];
	                return true;
	            });
	
	            // ...
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
	
	        /**
	         * Constructor, will build a rescope store
	         *
	         * (scope, {require,use,apply,state, data})
	         * (scope)
	         *
	         * @param scope {object} scope where to find the other stores (default : static staticScope )
	         * @param keys {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
	         */
	
	    }]);
	
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
	        _this._sources = [name];
	
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
	                } else _this._changesSW = _extends({}, _this.state);
	            }
	        }
	        if ((_this.data !== undefined || applied) && !_this.__locks.all) {
	            _this._stable = true;
	            _this._rev++;
	        } else {
	            _this._stable = false;
	            if (!_static.managed && !_this.state && (!_this._use || !_this._use.length)) {
	                console.warn("ReScope store '", _this.name, "' have no initial data, state or use. It can't stabilize...");
	            }
	        }
	        !_this._stable && _this.emit('unstable', _this.state);
	
	        return _this;
	    }
	
	    /**
	     * @deprecated
	     * @returns {*}
	     */
	
	
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
	            cb && this.once('stable', cb);
	            this._stable && this.emit('unstable', this.state, this.data);
	
	            this._stable = false;
	
	            if (this._stabilizer) return;
	
	            this._stabilizer = TaskSequencer.pushTask(this, 'pushState');
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
	            var actions = this.constructor.actions;
	
	            if (actions && actions[action]) {
	                var _actions$action;
	
	                for (var _len2 = arguments.length, argz = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                    argz[_key2 - 1] = arguments[_key2];
	                }
	
	                var ns = (_actions$action = actions[action]).call.apply(_actions$action, [this].concat(argz));
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
	            var _this3 = this;
	
	            var initialOutputs = this.scopeObj.map(this, stores);
	            if (doWait) {
	                this.wait();
	                stores.forEach(function (s) {
	                    return _this3.scope[s] && _this3.wait(_this3.scope[s]);
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
	            if (!force && !this.hasDataChange(data)) {
	                cb && cb();
	                if (!this.__locks.all) {
	                    var stable = this._stable;
	                    this._stable = true;
	                    !stable && this.emit('stable', this.state, this.data);
	                    this._stabilizer = null;
	                }
	                return false;
	            }
	
	            //
	            this.data = data;
	            this.wait();
	            this.release(cb);
	        }
	    }, {
	        key: 'pushState',
	        value: function pushState(force) {
	
	            if (!force && !this._changesSW && this.data) return;
	
	            var nextState = _extends({}, this.state, this._changesSW || {}),
	                nextData = this.apply(this.data, nextState, this._changesSW);
	
	            this._stabilizer = null;
	            this.state = nextState;
	            this._changesSW = null;
	            if (!force && !this.hasDataChange(nextData)) {
	                if (!this.__locks.all) {
	                    var stable = this._stable;
	                    this._stable = true;
	                    !stable && this.emit('stable', this.state, this.data);
	                    this._stabilizer = null;
	                }
	                return false;
	            }
	
	            //
	            this.data = nextData;
	            this.wait();
	            this.release();
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
	                this.pushState();
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
	            }this.shouldApply(_extends({}, this.state || {}, changes)) && this.pushState();
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
	            var _this4 = this;
	
	            if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', _this4).call(_this4, k, lists[k]);
	            });else _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', this).apply(this, arguments);
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener(lists) {
	            var _this5 = this;
	
	            if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'removeListener', _this5).call(_this5, k, lists[k]);
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
	            var _this6 = this;
	
	            var scope = this.scopeObj,
	                _static = this.constructor;
	            if (_static.use) {
	                //todo unlink
	                this.pull(_static.use, false, from);
	            }
	
	            if (this._require) {
	                this._require.forEach(function (store) {
	                    return _this6.wait(scope.__scope[store]);
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
	            var _this7 = this;
	
	            var output = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	            var completeState = arguments[1];
	
	            var refs = is.array(this._use) && this._use.reduce(function (map, key) {
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
	
	                if (!_this7.scopeObj.stores[name].scopeObj._.isLocalId) map[alias] = _this7.scopeObj.stores[name].scopeObj._id + '/' + name;
	
	                return map;
	            }, {}) || {};
	            output[this.scopeObj._id + '/' + this.name] = {
	                state: this.state && (completeState ? _extends({}, this.state) : Object.keys(this.state).reduce(function (h, k) {
	                    return !refs[k] && (h[k] = _this7.state[k]), h;
	                }, {})),
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
	            var _this8 = this;
	
	            if (this._stable) return cb(null, this.data);
	            this.once('stable', function (e) {
	                return cb(null, _this8.data);
	            });
	        }
	
	        /**
	         * Add a lock so the store will not propag it data untill release() is call
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
	         * Decrease locks for this store, if it reach 0 ,
	         * it will be propagated to the followers,
	         * then, all stuff passed to "then" call back will be exec / released
	         * @param desync
	         * @returns {*}
	         */
	
	    }, {
	        key: 'release',
	        value: function release(reason, cb) {
	            var _static = this.constructor,
	                me = this;
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
	
	            if (! --this.__locks.all && this.isComplete()) {
	                var propag = this.shouldPropag(this.data);
	                this._stable = true;
	                propag && this._rev++; //
	                if (propag && this._followers.length) this._followers.forEach(function propag(follower) {
	                    var data = follower[2] ? me.retrieve(follower[2]) : me.data;
	                    //if ( !data ) return;
	
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
	            var _this9 = this;
	
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
	                        _this9._destroyTM = null;
	                        _this9.then(function (s) {
	                            !_this9.__retains.all && _this9.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this9.__retains.all && _this9.destroy();
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
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	 * Minimal push sequencer, apply stores specific task in the right order (root stores first)
	 */
	var taskQueue = [],
	    curWeight = 0,
	    maxWeight = 0,
	    minWeight = 0,
	    taskCount = 0,
	
	//deSyncSteps = 1000,
	task = void 0,
	    isRunning = void 0,
	    errorCatcher = {
	    lastError: null,
	    dispatch: function dispatch(error) {
	        errorCatcher.disable();
	        if (task && task[0].handleError) {
	            task[0].handleError(error, task);
	        } else if (task) console.error("ReScope : A task has failed !!", task[1], " on ", task[0].name || task[0].constructor.name);
	
	        isRunning = false;
	        task = null;
	        runNow();
	    },
	    enable: typeof window !== 'undefined' ? function () {
	        window.addEventListener('error', errorCatcher.dispatch);
	    } : function () {
	        process.on('uncaughtException', errorCatcher.dispatch);
	    },
	    disable: typeof window !== 'undefined' ? function () {
	        window.removeEventListener('error', errorCatcher.dispatch);
	    } : function () {
	        process.removeListener('uncaughtException', errorCatcher.dispatch);
	    }
	};
	
	function runNow() {
	    if (!isRunning) {
	        run();
	    }
	}
	
	function run() {
	    isRunning = true;
	    errorCatcher.enable();
	    while (taskCount) {
	
	        // try for the current weight
	        while (!(taskQueue[curWeight] && taskQueue[curWeight].length)) {
	            curWeight++;
	        }taskCount--;
	        task = taskQueue[curWeight].shift();
	        //console.log("Task : ", task[1], " on ", task[0].name);
	        task[0][task[1]].apply(task[0], task[2]);
	    }
	    task = undefined;
	    errorCatcher.disable();
	
	    isRunning = false;
	    if (taskCount) {
	        setTimeout(runNow);
	    }
	}
	
	exports.default = {
	    pushTask: function pushTask(obj, fn, argz) {
	        var weight = obj._sources && obj._sources.length || 1,
	            stack = taskQueue[weight] = taskQueue[weight] || [];
	
	        maxWeight = Math.max(maxWeight, weight);
	        curWeight = Math.min(curWeight, weight);
	        taskCount++;
	
	        //console.log("Push Task : ", fn, " on ", obj.name, weight);
	        stack.push([obj, fn, argz]);
	        setTimeout(runNow);
	        return stack.length;
	    }
	};
	module.exports = exports["default"];

/***/ }),
/* 7 */
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
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _is = __webpack_require__(2);
	
	var _is2 = _interopRequireDefault(_is);
	
	var _propTypes = __webpack_require__(9);
	
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
	
	        if (_this.$scope && _this.$scope.dead) {
	            console.error("ReScoping using dead scope");
	            _this.$scope = null;
	        }
	
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
	
	                if (this.$scope.dead) {
	                    console.error("ReScoping using dead scope");
	                    this.$stores = this.$scope = null;
	                } else {
	                    this.$stores = this.$scope.stores;
	                    this.constructor.use && nScope.bind(this, this.constructor.use);
	                }
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
	
	            if (_this2.$scope && _this2.$scope.dead) {
	                console.error("ReScoping using dead scope");
	                _this2.$scope = null;
	            }
	
	            _this2.$scope && _is2.default.fn(scope) && _this2.$scope.retain();
	
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
	
	                    if (this.$scope.dead) {
	                        console.error("ReScoping using dead scope");
	                        this.$stores = this.$scope = null;
	                    } else {
	                        this.$stores = this.$scope.stores;
	                        use.length && nScope.bind(this, use);
	                    }
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
	    var _class3, _temp4;
	
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
	
	    return reScopeState((_temp4 = _class3 = function (_React$Component2) {
	        _inherits(ReScopePropsProvider, _React$Component2);
	
	        function ReScopePropsProvider() {
	            var _ref;
	
	            var _temp3, _this3, _ret;
	
	            _classCallCheck(this, ReScopePropsProvider);
	
	            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	                args[_key3] = arguments[_key3];
	            }
	
	            return _ret = (_temp3 = (_this3 = _possibleConstructorReturn(this, (_ref = ReScopePropsProvider.__proto__ || Object.getPrototypeOf(ReScopePropsProvider)).call.apply(_ref, [this].concat(args))), _this3), _this3._$dispatch = function () {
	                var _this4;
	
	                return (_this4 = _this3).$dispatch.apply(_this4, arguments);
	            }, _temp3), _possibleConstructorReturn(_this3, _ret);
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
	                    $dispatch: this._$dispatch,
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
	    }), _class3.displayName = "propsScoped(" + (BaseComponent.displayName || BaseComponent.name) + ")", _temp4), scope, use);
	}
	
	exports.default = Component;
	exports.Component = Component;
	exports.reScopeProps = reScopeProps;
	exports.rescopeProps = reScopeProps;
	exports.reScopeState = reScopeState;
	exports.rescopeState = reScopeState;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("prop-types");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzNiOTA1MThhZmZjZWI0YjYzNDciLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlU2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Njb3BlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhY3RIb2NzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIl0sIm5hbWVzIjpbIlJUb29scyIsIlN0b3JlIiwiQ29udGV4dCIsIlNjb3BlIiwiQ29tcG9uZW50IiwicmVTY29wZVByb3BzIiwicmVTY29wZVN0YXRlIiwicmVTY29wZSIsImlzIiwicmVxdWlyZSIsIkV2ZW50RW1pdHRlciIsInNob3J0aWQiLCJfX3Byb3RvX19wdXNoIiwidGFyZ2V0IiwiaWQiLCJwYXJlbnQiLCJmbiIsInByb3RvdHlwZSIsIl8iLCJvcGVuU2NvcGVzIiwic2NvcGVzIiwic2tleSIsImFycmF5Iiwic29ydCIsImEiLCJiIiwiZmlyc3RuYW1lIiwiam9pbiIsInN0b3Jlc01hcCIsImtleSIsInN0YXRlIiwiZGF0YSIsIm5hbWUiLCJpbmNyZW1lbnRJZCIsImRlZmF1bHRNYXhMaXN0ZW5lcnMiLCJwZXJzaXN0ZW5jZVRtIiwiYXV0b0Rlc3Ryb3kiLCJyb290RW1pdHRlciIsIm1heExpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwiX2lkIiwiaXNMb2NhbElkIiwiZ2VuZXJhdGUiLCJyZWdpc3RlciIsImkiLCJzdG9yZXMiLCJkZWFkIiwiRXJyb3IiLCJzb3VyY2VzIiwiY2hpbGRTY29wZXMiLCJjaGlsZFNjb3Blc0xpc3QiLCJ1blN0YWJsZUNoaWxkcyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfbGlzdGVuaW5nIiwiX3Njb3BlIiwiX21peGVkIiwiX21peGVkTGlzdCIsImZvbGxvd2VycyIsInJldGFpbiIsIl9zdGFibGUiLCJ3YWl0Iiwib24iLCJfcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwiX2FkZENoaWxkIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJzdG9yZXNMaXN0Iiwic25hcHNob3QiLCJmb3JFYWNoIiwiX21vdW50IiwiayIsImFyZ3VtZW50cyIsInN0b3JlIiwicmVkdWNlIiwibW91bnRlZCIsImN0eCIsInJlc3RvcmUiLCJ1bmRlZmluZWQiLCJzZXRTdGF0ZSIsInB1c2giLCJfd2F0Y2hTdG9yZSIsIl9hdXRvRGVzdHJveSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJyZWxpbmsiLCJPYmplY3QiLCJrZXlzIiwic2luZ2xldG9uIiwic3JjQ3R4IiwiZXh0ZXJuYWwiLCJmb3JjZSIsImxjdHgiLCJjb25zb2xlIiwiaW5mbyIsIl9fcHJvdG9fXyIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwic2V0IiwidiIsIm9iaiIsImFzIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmVmS2V5cyIsIm1hcCIsInN0cmluZyIsInBhcnNlUmVmIiwicmV2cyIsInJlZiIsInN0b3JlSWQiLCJyZXYiLCJyZWZzIiwibW91bnQiLCJyZXRhaW5TdG9yZXMiLCJnZXRVcGRhdGVzIiwibGVuZ3RoIiwiZGlzcG9zZVN0b3JlcyIsInNwbGljZSIsInRvIiwiYmluZCIsIm1peGVkQ1dVbm1vdW50IiwidW5Nb3VudEtleSIsImlzUmVhY3RDb21wb25lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsInVuQmluZCIsInNwbGl0IiwicmV0cmlldmUiLCJwYXRoIiwic2xpY2UiLCJzdG9yZXNSZXZNYXAiLCJsb2NhbCIsIl9yZXYiLCJ1cGRhdGVkIiwiZ2V0U3RvcmVzUmV2cyIsIm91dHB1dCIsImFsaWFzIiwiY2hpbGRzIiwiX2dldEFsbENoaWxkcyIsInNlcmlhbGl6ZSIsInNuYXAiLCJkZXN0cm95IiwiX3JlZiIsImFjdGlvbiIsImRpc3BhdGNoIiwidHJpZ2dlciIsImNiIiwib25jZSIsInJlYXNvbiIsImVtaXQiLCJlcnJvciIsInN0YWJpbGl6ZXJUTSIsImNsZWFyVGltZW91dCIsInByb3BhZ1RNIiwicmVtYXBzIiwid2FzU3RhYmxlIiwiaW5kZXhPZiIsInVuIiwiZGVzdHJveVRNIiwidGhlbiIsInJlbW92ZUxpc3RlbmVyIiwic2hpZnQiLCJfcm1DaGlsZCIsIkVtaXR0ZXIiLCJfZXZlbnRzIiwiZXZ0IiwiYXJneiIsIlRhc2tTZXF1ZW5jZXIiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwiY29tcG9uZW50Iiwic2NvcGUiLCJvcmlnaW4iLCJ0YXJnZXRSZXZzIiwiX3JldnMiLCJ0YXJnZXRTY29wZSIsImluaXRpYWxPdXRwdXRzIiwic3RhdGljU2NvcGUiLCJmaWx0ZXIiLCJkZWZhdWx0TmFtZSIsIm1hdGNoIiwic3Vic3RyIiwiX3NvdXJjZXMiLCJfc3RhdGljIiwiZ2V0U2NvcGUiLCJjZmciLCJ3YXRjaHMiLCJ1c2UiLCJhcHBseSIsImluaXRpYWxTdGF0ZSIsImFwcGxpZWQiLCJfdWlkIiwiX29uU3RhYmlsaXplIiwiX3BlcnNpc3RlbmNlVG0iLCJzY29wZU9iaiIsIl9yZXF1aXJlIiwiX3VzZSIsInJlZjIiLCJfZm9sbG93ZXJzIiwic2hvdWxkQXBwbHkiLCJfY2hhbmdlc1NXIiwibWFuYWdlZCIsIndhcm4iLCJuRGF0YXMiLCJyIiwiY0RhdGFzIiwiaXNDb21wbGV0ZSIsImZvbGxvdyIsImNhbGwiLCJjaGFuZ2VzIiwicmVmaW5lIiwiX3N0YWJpbGl6ZXIiLCJwdXNoVGFzayIsImFjdGlvbnMiLCJucyIsImRvV2FpdCIsInMiLCJoYXNEYXRhQ2hhbmdlIiwic3RhYmxlIiwibmV4dFN0YXRlIiwibmV4dERhdGEiLCJwU3RhdGUiLCJzeW5jIiwiY2hhbmdlIiwicHVzaFN0YXRlIiwic3RhYmlsaXplIiwibWUiLCJmcm9tIiwicHVsbCIsIl9fc2NvcGUiLCJjb21wbGV0ZVN0YXRlIiwiaCIsInByZXZpb3VzIiwic2hvdWxkUHJvcGFnIiwiZm9sbG93ZXIiLCJfZGVzdHJveVRNIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiU2VlZCIsIlNFRUQiLCJ0YXNrUXVldWUiLCJjdXJXZWlnaHQiLCJtYXhXZWlnaHQiLCJtaW5XZWlnaHQiLCJ0YXNrQ291bnQiLCJ0YXNrIiwiaXNSdW5uaW5nIiwiZXJyb3JDYXRjaGVyIiwibGFzdEVycm9yIiwiZGlzYWJsZSIsImhhbmRsZUVycm9yIiwicnVuTm93IiwiZW5hYmxlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2Nlc3MiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicnVuIiwid2VpZ2h0Iiwic3RhY2siLCJNYXRoIiwibWF4IiwibWluIiwiU2ltcGxlT2JqZWN0UHJvdG8iLCJwIiwicSIsInJlc2NvcGUiLCIkc2NvcGUiLCIkc3RvcmVzIiwicmVuZGVyIiwibnAiLCJuYyIsIm5TY29wZSIsImNvbnRleHQiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJvYmplY3QiLCJjb250ZXh0VHlwZXMiLCJCYXNlQ29tcG9uZW50IiwiYWRkaXRpb25hbENvbnRleHQiLCJhbnkiLCJSZVNjb3BlUHJvdmlkZXIiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSIsIl8kZGlzcGF0Y2giLCIkZGlzcGF0Y2giLCJkZWZhdWx0IiwicmVzY29wZVByb3BzIiwicmVzY29wZVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtB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Z0JBQU01USxTQUF0RCxXQUNJb1IsaUJBREosZ0JBRUtHLGNBQWNELFlBQWQsSUFBOEIsRUFGbkMsRUFHS0UsaUJBSEw7QUFJQ2Qsa0JBQVMsb0JBQVVXLE1BSnBCO0FBS0NULGtCQUFTLG9CQUFVUztBQUxwQixpQkFPSUMsWUFQSixnQkFRS0MsY0FBY0QsWUFBZCxJQUE4QixFQVJuQyxFQVNLRSxpQkFUTDtBQVVDZCxrQkFBUyxvQkFBVVcsTUFWcEI7QUFXQ1Qsa0JBQVMsb0JBQVVTO0FBWHBCLGlCQWFJTyxXQWJKLEdBYXdCLGtCQUFrQkwsY0FBY0ssV0FBZCxJQUE2QkwsY0FBYzNQLElBQTdELElBQXFFLEdBYjdGLFdBMkJKZ0osS0EzQkksRUEyQkdnQixHQTNCSCxDQUFQO0FBNEJIOztTQUdnQm1HLE8sR0FBYi9SLFM7U0FDQUEsUyxHQUFBQSxTO1NBQ0FDLFksR0FBQUEsWTtTQUNnQitSLFksR0FBaEIvUixZO1NBQ0FDLFksR0FBQUEsWTtTQUNnQitSLFksR0FBaEIvUixZOzs7Ozs7QUN4VEosbUM7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6ImRpc3QvUmVTY29wZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3M2I5MDUxOGFmZmNlYjRiNjM0NyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IFNjb3BlIGZyb20gXCIuL1Njb3BlXCI7XG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4vU3RvcmVcIjtcbmltcG9ydCBSZWFjdFRvb2xzLCAqIGFzIFJUb29scyBmcm9tIFwiLi9SZWFjdEhvY3NcIjtcblxuU2NvcGUuU3RvcmUgPSBTdG9yZTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBTdG9yZSxcbiAgICBDb250ZXh0ICAgICA6IFNjb3BlLFxuICAgIFNjb3BlLFxuICAgIENvbXBvbmVudCAgIDogUlRvb2xzLkNvbXBvbmVudCxcbiAgICByZVNjb3BlUHJvcHM6IFJUb29scy5yZVNjb3BlUHJvcHMsXG4gICAgcmVTY29wZVN0YXRlOiBSVG9vbHMucmVTY29wZVN0YXRlLFxuICAgIHJlU2NvcGUgICAgIDogUlRvb2xzLnJlU2NvcGVTdGF0ZVxufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlU2NvcGUuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICpcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cblxudmFyIGlzICAgICAgICAgICAgICA9IHJlcXVpcmUoJ2lzJyksXG4gICAgRXZlbnRFbWl0dGVyICAgID0gcmVxdWlyZSgnLi9FbWl0dGVyJyksXG4gICAgc2hvcnRpZCAgICAgICAgID0gcmVxdWlyZSgnc2hvcnRpZCcpXG4gICAgLCBfX3Byb3RvX19wdXNoID0gKCB0YXJnZXQsIGlkLCBwYXJlbnQgKSA9PiB7XG4gICAgICAgIGxldCBmbiAgICAgICA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfTtcbiAgICAgICAgZm4ucHJvdG90eXBlID0gcGFyZW50ID8gbmV3IHBhcmVudC5fW2lkXSgpIDogdGFyZ2V0W2lkXSB8fCB7fTtcbiAgICAgICAgdGFyZ2V0W2lkXSAgID0gbmV3IGZuKCk7XG4gICAgICAgIHRhcmdldC5fW2lkXSA9IGZuO1xuICAgIH0sXG4gICAgb3BlblNjb3BlcyAgICAgID0ge31cbjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgc3RhdGljIHBlcnNpc3RlbmNlVG0gID0gMTsvLyBpZiA+IDAsIHdpbGwgd2FpdCAncGVyc2lzdGVuY2VUbScgbXMgYmVmb3JlIGRlc3Ryb3kgd2hlbiBkaXNwb3NlIHJlYWNoIDBcbiAgICBzdGF0aWMgU3RvcmUgICAgICAgICAgPSBudWxsO1xuICAgIHN0YXRpYyBzY29wZXMgICAgICAgICA9IG9wZW5TY29wZXM7Ly8gYWxsIGFjdGl2ZSBzY29wZXNcbiAgICBcbiAgICBzdGF0aWMgZ2V0U2NvcGUoIHNjb3BlcyApIHtcbiAgICAgICAgbGV0IHNrZXkgPSBpcy5hcnJheShzY29wZXMpID8gc2NvcGVzLnNvcnQoKCBhLCBiICkgPT4ge1xuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA8IGIuZmlyc3RuYW1lICkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYgKCBhLmZpcnN0bmFtZSA+IGIuZmlyc3RuYW1lICkgcmV0dXJuIDE7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSkuam9pbignOjonKSA6IHNjb3BlcztcbiAgICAgICAgcmV0dXJuIG9wZW5TY29wZXNbc2tleV0gPSBvcGVuU2NvcGVzW3NrZXldIHx8IG5ldyBTY29wZSh7fSwgeyBpZDogc2tleSB9KTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIEluaXQgYSBSZXNjb3BlIHNjb3BlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzTWFwIHtPYmplY3R9IE9iamVjdCB3aXRoIHRoZSBvcmlnaW4gc3RvcmVzXG4gICAgICogQHBhcmFtIGlkIHtzdHJpbmd9IEBvcHRpb25hbCBpZCAoIGlmIHRoaXMgaWQgZXhpc3Qgc3RvcmVzTWFwIHdpbGwgYmUgbWVyZ2Ugb24gdGhlICdpZCcgc2NvcGUpXG4gICAgICogQHBhcmFtIHBhcmVudFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZGVmYXVsdE1heExpc3RlbmVyc1xuICAgICAqIEBwYXJhbSBwZXJzaXN0ZW5jZVRtIHtudW1iZXIpIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuIGRpc3Bvc2UgcmVhY2ggMFxuICAgICAqIEBwYXJhbSBhdXRvRGVzdHJveSAge2Jvb2x9IHdpbGwgdHJpZ2dlciByZXRhaW4gJiBkaXNwb3NlIGFmdGVyIHN0YXJ0XG4gICAgICogQHJldHVybnMge1Njb3BlfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCBzdG9yZXNNYXAsIHsgcGFyZW50LCBrZXksIGlkLCBzdGF0ZSwgZGF0YSwgbmFtZSwgaW5jcmVtZW50SWQgPSAhIWtleSwgZGVmYXVsdE1heExpc3RlbmVycywgcGVyc2lzdGVuY2VUbSwgYXV0b0Rlc3Ryb3ksIHJvb3RFbWl0dGVyIH0gPSB7fSApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIF8gPSB7fTtcbiAgICAgICAgXG4gICAgICAgIF8ubWF4TGlzdGVuZXJzID0gZGVmYXVsdE1heExpc3RlbmVycyB8fCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgICAgIFxuICAgICAgICBpZCA9IGlkXG4gICAgICAgICAgICB8fCBrZXkgJiYgKChwYXJlbnQgJiYgcGFyZW50Ll9pZCB8fCAnJykgKyAnOjonICsga2V5KTtcbiAgICAgICAgXG4gICAgICAgIF8uaXNMb2NhbElkID0gIWlkO1xuICAgICAgICBcbiAgICAgICAgaWQgPSBpZCB8fCAoXCJfX19fX1wiICsgc2hvcnRpZC5nZW5lcmF0ZSgpKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggb3BlblNjb3Blc1tpZF0gJiYgIWluY3JlbWVudElkICkge1xuICAgICAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgICAgIG9wZW5TY29wZXNbaWRdLnJlZ2lzdGVyKHN0b3Jlc01hcCk7XG4gICAgICAgICAgICByZXR1cm4gb3BlblNjb3Blc1tpZF1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggb3BlblNjb3Blc1tpZF0gJiYgaW5jcmVtZW50SWQgKSB7XG4gICAgICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICAgICAgd2hpbGUgKCBvcGVuU2NvcGVzW2lkICsgJ1snICsgKCsraSkgKyAnXSddICkgO1xuICAgICAgICAgICAgaWQgPSBpZCArICdbJyArIGkgKyAnXSc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2lkICAgICAgICA9IGlkO1xuICAgICAgICBvcGVuU2NvcGVzW2lkXSAgPSB0aGlzO1xuICAgICAgICBfLnBlcnNpc3RlbmNlVG0gPSBwZXJzaXN0ZW5jZVRtIHx8IHRoaXMuY29uc3RydWN0b3IucGVyc2lzdGVuY2VUbTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RvcmVzID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgID0ge307XG4gICAgICAgIHRoaXMuZGF0YSAgID0ge307XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5fICAgICAgPSBfO1xuICAgICAgICBpZiAoIHBhcmVudCAmJiBwYXJlbnQuZGVhZCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCB1c2UgYSBkZWFkIHNjb3BlIGFzIHBhcmVudCAhXCIpO1xuICAgICAgICBcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJywgcGFyZW50KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc291cmNlcyAgICAgID0gW107XG4gICAgICAgIF8uY2hpbGRTY29wZXMgICAgID0gW107XG4gICAgICAgIF8uY2hpbGRTY29wZXNMaXN0ID0gW107XG4gICAgICAgIF8udW5TdGFibGVDaGlsZHMgID0gMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zID0geyBhbGw6IDAgfTtcbiAgICAgICAgdGhpcy5fX2xvY2tzICAgPSB7IGFsbDogMSB9O1xuICAgICAgICBfLl9saXN0ZW5pbmcgICA9IHt9O1xuICAgICAgICBfLl9zY29wZSAgICAgICA9IHt9O1xuICAgICAgICBfLl9taXhlZCAgICAgICA9IFtdO1xuICAgICAgICBfLl9taXhlZExpc3QgICA9IFtdO1xuICAgICAgICBfLmZvbGxvd2VycyAgICA9IFtdO1xuICAgICAgICBpZiAoIHBhcmVudCApIHtcbiAgICAgICAgICAgIHBhcmVudC5yZXRhaW4oXCJpc015UGFyZW50XCIpO1xuICAgICAgICAgICAgaWYgKCAhcm9vdEVtaXR0ZXIgKSB7XG4gICAgICAgICAgICAgICAgIXBhcmVudC5fc3RhYmxlICYmIHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIik7XG4gICAgICAgICAgICAgICAgcGFyZW50Lm9uKF8uX3BhcmVudExpc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKFwid2FpdGluZ1BhcmVudFwiKSxcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoXCJ3YWl0aW5nUGFyZW50XCIpLFxuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQub24oXy5fcGFyZW50TGlzdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZSc6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMucmVnaXN0ZXIocGFyZW50Ll9fc2NvcGUsIHN0YXRlLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoc3RvcmVzTWFwLCBzdGF0ZSwgZGF0YSk7XG4gICAgICAgIHRoaXMuX19sb2Nrcy5hbGwtLTtcbiAgICAgICAgdGhpcy5fc3RhYmxlID0gIXRoaXMuX19sb2Nrcy5hbGw7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHBhcmVudCApIHtcbiAgICAgICAgICAgIHBhcmVudC5fYWRkQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBhdXRvRGVzdHJveSApXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIHRtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRhaW4oXCJhdXRvRGVzdHJveVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKFwiYXV0b0Rlc3Ryb3lcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXQgZGF0YXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqXG4gICAgICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0LCBpbiB0aGlzIHNjb3BlIG9yIGluIGl0cyBwYXJlbnRzIG9yIG1peGVkIHNjb3Blc1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0b3Jlc0xpc3Qge3N0cmluZ3xzdG9yZVJlZn0gU3RvcmUgbmFtZSwgQXJyYXkgb2YgU3RvcmUgbmFtZXMsIG9yIFJlc2NvcGUgc3RvcmUgcmVmIGZyb20gU3RvcmU6OmFzIG9yXG4gICAgICogICAgIFN0b3JlOmFzXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7U2NvcGV9XG4gICAgICovXG4gICAgbW91bnQoIHN0b3Jlc0xpc3QsIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSApIHtcbiAgICAgICAgaWYgKCBpcy5hcnJheShzdG9yZXNMaXN0KSApIHtcbiAgICAgICAgICAgIHN0b3Jlc0xpc3QuZm9yRWFjaChrID0+IHRoaXMuX21vdW50KGssIHNuYXBzaG90LCBzdGF0ZSwgZGF0YSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbW91bnQoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgX21vdW50KCBpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICBpZiAoIHR5cGVvZiBpZCAhPT0gJ3N0cmluZycgKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKHsgW2lkLm5hbWVdOiBpZC5zdG9yZSB9KTtcbiAgICAgICAgICAgIGlkID0gaWQubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fLl9zY29wZVtpZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XG4gICAgICAgICAgICBpZiAoIHRoaXMuXy5fbWl4ZWQucmVkdWNlKCggbW91bnRlZCwgY3R4ICkgPT4gKG1vdW50ZWQgfHwgY3R4Ll9tb3VudChpZCwgc25hcHNob3QsIHN0YXRlLCBkYXRhKSksIGZhbHNlKSB8fFxuICAgICAgICAgICAgICAgICF0aGlzLnBhcmVudCApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Ll9tb3VudCguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHN0b3JlID0gdGhpcy5fLl9zY29wZVtpZF0sIGN0eDtcbiAgICAgICAgICAgIGlmICggaXMuZm4oc3RvcmUpICkge1xuICAgICAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbaWRdID0gbmV3IHN0b3JlKHRoaXMsIHsgc25hcHNob3QsIG5hbWU6IGlkLCBzdGF0ZSwgZGF0YSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCBzbmFwc2hvdCApXG4gICAgICAgICAgICAgICAgc3RvcmUucmVzdG9yZShzbmFwc2hvdCk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgJiYgZGF0YSA9PT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBzdGF0ZSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnB1c2goZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl93YXRjaFN0b3JlKGlkKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLl8uX3Njb3BlW2lkXTtcbiAgICB9XG4gICAgXG4gICAgX3dhdGNoU3RvcmUoIGlkLCBzdGF0ZSwgZGF0YSApIHtcbiAgICAgICAgLy9pZiAoICF0aGlzLl9fc2NvcGVbaWRdICkgey8vYXNrIG1peGVkIHx8IHBhcmVudFxuICAgICAgICAvLyAgICBpZiAoIHRoaXMuX19taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX3dhdGNoU3RvcmUoaWQsIHN0YXRlLCBkYXRhKSksIGZhbHNlKSB8fFxuICAgICAgICAvLyAgICAgICAgIXRoaXMucGFyZW50IClcbiAgICAgICAgLy8gICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gICAgcmV0dXJuIHRoaXMucGFyZW50Ll93YXRjaFN0b3JlKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8vfVxuICAgICAgICBpZiAoICF0aGlzLl8uX2xpc3RlbmluZ1tpZF0gJiYgIWlzLmZuKHRoaXMuXy5fc2NvcGVbaWRdKSApIHtcbiAgICAgICAgICAgICF0aGlzLl8uX3Njb3BlW2lkXS5fYXV0b0Rlc3Ryb3kgJiYgdGhpcy5fLl9zY29wZVtpZF0ucmV0YWluKFwic2NvcGVkXCIpO1xuICAgICAgICAgICAgIXRoaXMuXy5fc2NvcGVbaWRdLmlzU3RhYmxlKCkgJiYgdGhpcy53YWl0KGlkKTtcbiAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbaWRdLm9uKFxuICAgICAgICAgICAgICAgIHRoaXMuXy5fbGlzdGVuaW5nW2lkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ2Rlc3Ryb3knIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fLl9saXN0ZW5pbmdbaWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVtpZF0gPSB0aGlzLl8uX3Njb3BlW2lkXS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLnByb3BhZygpLFxuICAgICAgICAgICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZShpZCksXG4gICAgICAgICAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KGlkKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNaXggdGFyZ2V0Q3R4IG9uIHRoaXMgc2NvcGVcbiAgICAgKiBNaXhlZCBzY29wZSBwYXJlbnRzIGFyZSBOT1QgbWFwcGVkXG4gICAgICogQHBhcmFtIHRhcmdldEN0eFxuICAgICAqL1xuICAgIG1peGluKCB0YXJnZXRDdHggKSB7XG4gICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCwgbGlzdHM7XG4gICAgICAgIHRoaXMuXy5fbWl4ZWQucHVzaCh0YXJnZXRDdHgpXG4gICAgICAgIHRhcmdldEN0eC5yZXRhaW4oXCJtaXhlZFRvXCIpO1xuICAgICAgICBpZiAoICF0YXJnZXRDdHguX3N0YWJsZSApXG4gICAgICAgICAgICB0aGlzLndhaXQodGFyZ2V0Q3R4Ll9pZCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl8uX21peGVkTGlzdC5wdXNoKGxpc3RzID0ge1xuICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UodGFyZ2V0Q3R4Ll9pZCksXG4gICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKSxcbiAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0b3JlcyA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlICA9IHt9O1xuICAgICAgICB0aGlzLmRhdGEgICA9IHt9O1xuICAgICAgICB0YXJnZXRDdHgub24obGlzdHMpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZWxpbmsodGhpcy5fLl9zY29wZSwgdGhpcywgZmFsc2UsIHRydWUpO1xuICAgICAgICB0aGlzLl8uX21peGVkLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycpO1xuICAgICAgICAgICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJyk7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScpO1xuICAgICAgICAgICAgICAgIGN0eC5yZWxpbmsoY3R4Ll8uX3Njb3BlLCB0aGlzLCB0cnVlLCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIHN0b3JlcyBpbiBzdG9yZXNNYXAgJiBsaW5rIHRoZW0gaW4gdGhlIHByb3Rvc1xuICAgICAqIEBwYXJhbSBzdG9yZXNNYXBcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHJlZ2lzdGVyKCBzdG9yZXNNYXAsIHN0YXRlID0ge30sIGRhdGEgPSB7fSApIHtcbiAgICAgICAgdGhpcy5yZWxpbmsoc3RvcmVzTWFwLCB0aGlzLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICBPYmplY3Qua2V5cyhzdG9yZXNNYXApLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBzdG9yZXNNYXBbaWRdLnNpbmdsZXRvbiB8fCAoaXMuZm4oc3RvcmVzTWFwW2lkXSkgJiYgKHN0YXRlW2lkXSB8fCBkYXRhW2lkXSkpICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VudChpZCwgc3RhdGVbaWRdLCBkYXRhW2lkXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlW2lkXSB8fCBkYXRhW2lkXSApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBkYXRhW2lkXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggc3RhdGVbaWRdIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1tpZF0uc3RhdGUgPSBzdGF0ZVtpZF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3Jlc1tpZF0ucHVzaChkYXRhW2lkXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlW2lkXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzW2lkXS5zZXRTdGF0ZShzdGF0ZVtpZF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl93YXRjaFN0b3JlKGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1hcCBzcmNDdHggc3RvcmUncyBvbiB0YXJnZXRDdHggaGVhZGVycyBwcm90bydzXG4gICAgICogQHBhcmFtIHNyY0N0eFxuICAgICAqIEBwYXJhbSB0YXJnZXRDdHhcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHJlbGluayggc3JjQ3R4LCB0YXJnZXRDdHggPSB0aGlzLCBleHRlcm5hbCwgZm9yY2UgKSB7XG4gICAgICAgIGxldCBsY3R4ID0gdGFyZ2V0Q3R4Ll8uc3RvcmVzLnByb3RvdHlwZTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjQ3R4KVxuICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoICFmb3JjZSAmJiB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID09PSBzcmNDdHhbaWRdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gJiYgKHRhcmdldEN0eC5fLl9zY29wZVtpZF0uY29uc3RydWN0b3IgPT09IHNyY0N0eFtpZF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWV4dGVybmFsICYmICFpcy5mbih0YXJnZXRDdHguXy5fc2NvcGVbaWRdKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIlJlc2NvcGUgU3RvcmUgOiBcIiwgaWQsIFwiIGFscmVhZHkgZXhpc3QgaW4gdGhpcyBzY29wZSAhICggdHJ5IF9fcHJvdG9fXyBob3QgcGF0Y2ggKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLl9zY29wZVtpZF0uX19wcm90b19fID0gc3JjQ3R4W2lkXS5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFleHRlcm5hbCAmJiBpcy5mbih0YXJnZXRDdHguXy5fc2NvcGVbaWRdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguXy5fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoICFmb3JjZSAmJiAhZXh0ZXJuYWwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl8uX3Njb3BlW2lkXSA9IHNyY0N0eFtpZF07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsY3R4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiB0aGlzLl8uX3Njb3BlW2lkXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLnN0YXRlLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKHRoaXMuXy5fc2NvcGVbaWRdICYmIHRoaXMuXy5fc2NvcGVbaWRdLnN0YXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogKCB2ICkgPT4gKHRoaXMuX21vdW50KGlkLCBudWxsLCB2KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDdHguXy5kYXRhLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKCkgPT4gKHRoaXMuXy5fc2NvcGVbaWRdICYmIHRoaXMuXy5fc2NvcGVbaWRdLmRhdGEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIHVuZGVmaW5lZCwgdikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEJpbmQgc3RvcmVzIGZyb20gdGhpcyBzY29wZSwgaGlzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb259XG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBzdG9yZXMga2V5cyB0byBiaW5kIHVwZGF0ZXNcbiAgICAgKiBAcGFyYW0gYXNcbiAgICAgKiBAcGFyYW0gc2V0SW5pdGlhbCB7Ym9vbH0gZmFsc2UgdG8gbm90IHByb3BhZyBpbml0aWFsIHZhbHVlIChkZWZhdWx0IDogdHJ1ZSlcbiAgICAgKi9cbiAgICBiaW5kKCBvYmosIGtleSwgYXMsIHNldEluaXRpYWwgPSB0cnVlICkge1xuICAgICAgICBsZXQgbGFzdFJldnMsIGRhdGEsIHJlZktleXM7XG4gICAgICAgIGlmICgga2V5ICYmICFpcy5hcnJheShrZXkpIClcbiAgICAgICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhcyA9PT0gZmFsc2UgfHwgYXMgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBzZXRJbml0aWFsID0gYXM7XG4gICAgICAgICAgICBhcyAgICAgICAgID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVmS2V5cyA9IGtleVxuICAgICAgICAgICAgLm1hcChpZCA9PiAoaXMuc3RyaW5nKGlkKSA/IGlkIDogaWQubmFtZSkpXG4gICAgICAgICAgICAubWFwKGlkID0+ICh0aGlzLnBhcnNlUmVmKGlkKSkpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5mb2xsb3dlcnMucHVzaChcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBvYmosXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGFzIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBsYXN0UmV2cyA9IHJlZktleXMucmVkdWNlKCggcmV2cywgcmVmICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXZzW3JlZi5zdG9yZUlkXSA9IHJldnNbcmVmLnN0b3JlSWRdIHx8IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldiA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZzOiBbXVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXZzW3JlZi5zdG9yZUlkXS5yZWZzLnB1c2gocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldnM7XG4gICAgICAgICAgICAgICAgfSwge30pXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubW91bnQoa2V5KTtcbiAgICAgICAgdGhpcy5yZXRhaW5TdG9yZXMoT2JqZWN0LmtleXMobGFzdFJldnMpKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLl9zdGFibGUgKSB7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5nZXRVcGRhdGVzKGxhc3RSZXZzKTtcbiAgICAgICAgICAgIGlmICggIWRhdGEgKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgIGlmICggYXMgKSBvYmouc2V0U3RhdGUoeyBbYXNdOiBkYXRhIH0pO1xuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVbiBiaW5kIHRoaXMgc2NvcGUgb2ZmIHRoZSBnaXZlbiBjb21wb25lbnQta2V5c1xuICAgICAqIEBwYXJhbSBvYmpcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cbiAgICAgKi9cbiAgICB1bkJpbmQoIG9iaiwga2V5LCBhcyApIHtcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuXy5mb2xsb3dlcnMsXG4gICAgICAgICAgICBpICAgICAgICAgPSBmb2xsb3dlcnMgJiYgZm9sbG93ZXJzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBmb2xsb3dlcnMgJiYgaS0tIClcbiAgICAgICAgICAgIGlmICggZm9sbG93ZXJzW2ldWzBdID09PSBvYmogJiYgKCcnICsgZm9sbG93ZXJzW2ldWzFdKSA9PSAoJycgKyBrZXkpICYmXG4gICAgICAgICAgICAgICAgZm9sbG93ZXJzW2ldWzJdID09IGFzICkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZVN0b3JlcyhPYmplY3Qua2V5cyhmb2xsb3dlcnNbaV1bM10pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sbG93ZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTW91bnQgdGhlIHN0b3JlcyBpbiBzdG9yZXNMaXN0IGZyb20gdGhpcyBzY29wZSwgaXRzIHBhcmVudHMgYW5kIG1peGVkIHNjb3BlXG4gICAgICogQmluZCB0aGVtIHRvICd0bydcbiAgICAgKiBIb29rICd0bycgc28gaXQgd2lsbCBhdXRvIHVuYmluZCBvbiAnZGVzdHJveScgb3IgJ2NvbXBvbmVudFdpbGxVbm1vdW50J1xuICAgICAqIEBwYXJhbSB0b1xuICAgICAqIEBwYXJhbSBzdG9yZXNMaXN0XG4gICAgICogQHBhcmFtIGJpbmRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBJbml0aWFsIG91dHB1dHMgb2YgdGhlIHN0b3JlcyBpbiAnc3RvcmVzTGlzdCdcbiAgICAgKi9cbiAgICBtYXAoIHRvLCBzdG9yZXNMaXN0LCBiaW5kID0gdHJ1ZSApIHtcbiAgICAgICAgbGV0IFN0b3JlICA9IHRoaXMuY29uc3RydWN0b3IuU3RvcmU7XG4gICAgICAgIHN0b3Jlc0xpc3QgPSBpcy5hcnJheShzdG9yZXNMaXN0KSA/IHN0b3Jlc0xpc3QgOiBbc3RvcmVzTGlzdF07XG4gICAgICAgIHRoaXMubW91bnQoc3RvcmVzTGlzdCk7XG4gICAgICAgIGlmICggYmluZCAmJiB0byBpbnN0YW5jZW9mIFN0b3JlICkge1xuICAgICAgICAgICAgU3RvcmUubWFwKHRvLCBzdG9yZXNMaXN0LCB0aGlzLCB0aGlzLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggYmluZCApIHtcbiAgICAgICAgICAgIHRoaXMuYmluZCh0bywgc3RvcmVzTGlzdCwgdW5kZWZpbmVkLCBmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBtaXhlZENXVW5tb3VudCxcbiAgICAgICAgICAgICAgICB1bk1vdW50S2V5ID0gdG8uaXNSZWFjdENvbXBvbmVudCA/IFwiY29tcG9uZW50V2lsbFVubW91bnRcIiA6IFwiZGVzdHJveVwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIHRvLmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuICAgICAgICAgICAgICAgIG1peGVkQ1dVbm1vdW50ID0gdG9bdW5Nb3VudEtleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvW3VuTW91bnRLZXldID0gKCAuLi5hcmd6ICkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0b1t1bk1vdW50S2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcbiAgICAgICAgICAgICAgICAgICAgdG9bdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnVuQmluZCh0bywgc3RvcmVzTGlzdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvW3VuTW91bnRLZXldICYmIHRvW3VuTW91bnRLZXldKC4uLmFyZ3opO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3Jlc0xpc3QucmVkdWNlKCggZGF0YSwgaWQgKSA9PiB7XG4gICAgICAgICAgICBpZiAoICFpcy5zdHJpbmcoaWQpIClcbiAgICAgICAgICAgICAgICBpZCA9IGlkLm5hbWU7XG4gICAgICAgICAgICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGlkLnNwbGl0KCc6Jyk7Ly9AdG9kb1xuICAgICAgICAgICAgaWRbMF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBpZFswXS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgZGF0YVtpZFsxXSB8fCBpZFswXVtpZFswXS5sZW5ndGggLSAxXV0gPSB0aGlzLnN0b3Jlc1tpZFswXVswXV0gJiYgdGhpcy5zdG9yZXNbaWRbMF1bMF1dLnJldHJpZXZlICYmIHRoaXMuc3RvcmVzW2lkWzBdWzBdXS5yZXRyaWV2ZShpZFswXS5zcGxpY2UoMSkpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgXG4gICAgcmV0cmlldmUoIHBhdGggPSBcIlwiICkge1xuICAgICAgICBwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcbiAgICAgICAgcmV0dXJuIHBhdGggJiYgdGhpcy5zdG9yZXNbcGF0aFswXV0gJiZcbiAgICAgICAgICAgIHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlKHBhdGguc2xpY2UoMSkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgb3IgdXBkYXRlIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9uc1xuICAgICAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcbiAgICAgKiBAcGFyYW0gbG9jYWxcbiAgICAgKiBAcmV0dXJucyB7e319XG4gICAgICovXG4gICAgZ2V0U3RvcmVzUmV2cyggc3RvcmVzUmV2TWFwID0ge30sIGxvY2FsICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcbiAgICAgICAgaWYgKCAhc3RvcmVzUmV2TWFwICkge1xuICAgICAgICAgICAgc3RvcmVzUmV2TWFwID0ge307XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggIWlzLmZuKGN0eFtpZF0pXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFtpZF0gPSBjdHhbaWRdLl9yZXY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSApXG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFtpZF0gPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBpZiAoICFsb2NhbCApIHtcbiAgICAgICAgICAgIHRoaXMuXy5fbWl4ZWQucmVkdWNlKCggdXBkYXRlZCwgY3R4ICkgPT4gKGN0eC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3Jlc1Jldk1hcDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IG9yIHVwZGF0ZSBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cbiAgICAgKiBJZiBhIHN0b3JlIGluICdzdG9yZXNSZXZNYXAnIGlzIHVwZGF0ZWQ7IGFkZCBpdCB0byAnb3V0cHV0J1xuICAgICAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcbiAgICAgKiBAcGFyYW0gb3V0cHV0XG4gICAgICogQHBhcmFtIHVwZGF0ZWRcbiAgICAgKiBAcmV0dXJucyB7Knx7fX1cbiAgICAgKi9cbiAgICBnZXRVcGRhdGVzKCBzdG9yZXNSZXZNYXAsIG91dHB1dCwgdXBkYXRlZCApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuXy5fc2NvcGU7XG4gICAgICAgIFxuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgfHwge307XG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoICFvdXRwdXQuaGFzT3duUHJvcGVydHkoaWQpICYmICFpcy5mbihjdHhbaWRdKVxuICAgICAgICAgICAgICAgICAgICAmJiAoIXN0b3Jlc1Jldk1hcFxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHN0b3Jlc1Jldk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkgJiYgc3RvcmVzUmV2TWFwW2lkXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgISghc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSB8fCBjdHhbaWRdLl9yZXYgPD0gc3RvcmVzUmV2TWFwW2lkXS5yZXYpKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCAgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtpZF0gPSB0aGlzLmRhdGFbaWRdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzdG9yZXNSZXZNYXAgJiYgc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFtpZF0ucmV2ID0gY3R4W2lkXS5fcmV2O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwW2lkXS5yZWZzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLndhcm4oXCJ1cGRhdGUgcmVmIFwiLCByZWYucmVmLCB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFtyZWYuYWxpYXNdID0gdGhpcy5yZXRyaWV2ZShyZWYucGF0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLndhcm4oXCJ1cGRhdGUgXCIsIGlkLCB0aGlzLmRhdGFbaWRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFtpZF0gPSB0aGlzLmRhdGFbaWRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMuXy5fbWl4ZWQucmVkdWNlKCggdXBkYXRlZCwgY3R4ICkgPT4gKGN0eC5nZXRVcGRhdGVzKHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkKSwgdXBkYXRlZCk7XG4gICAgICAgIHVwZGF0ZWQgPSB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRVcGRhdGVzKHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkKSB8fCB1cGRhdGVkO1xuICAgICAgICByZXR1cm4gdXBkYXRlZCAmJiBvdXRwdXQ7XG4gICAgfVxuICAgIFxuICAgIF9nZXRBbGxDaGlsZHMoIGNoaWxkcyA9IFtdICkge1xuICAgICAgICBjaGlsZHMucHVzaCguLi50aGlzLl8uY2hpbGRTY29wZXMpO1xuICAgICAgICB0aGlzLl8uY2hpbGRTY29wZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgY3R4Ll9nZXRBbGxDaGlsZHMoY2hpbGRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd2l0aENoaWxkc1xuICAgICAqIEBwYXJhbSBfX3dpdGhNaXhlZFxuICAgICAqIEBwYXJhbSBfb3V0cHV0XG4gICAgICogQHJldHVybnMgeyp8e3N0YXRlOiB7fSwgZGF0YToge319fVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZSggb3V0cHV0ID0ge30gKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuICAgICAgICBpZiAoIG91dHB1dFt0aGlzLl9pZF0gKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgb3V0cHV0W3RoaXMuX2lkXSA9IHt9O1xuICAgICAgICBcbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggaXMuZm4oY3R4W2lkXSkgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3R4W2lkXS5zZXJpYWxpemUob3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fLmNoaWxkU2NvcGVzLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgICFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnNlcmlhbGl6ZShvdXRwdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fLl9taXhlZC5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5zZXJpYWxpemUob3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuICAgIFxuICAgIHJlc3RvcmUoIHNuYXBzaG90LCBmb3JjZSApIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuXy5fc2NvcGU7XG4gICAgICAgIFxuICAgICAgICBzbmFwc2hvdFt0aGlzLl9pZF0gJiYgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgbmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNuYXAgPSBzbmFwc2hvdFt0aGlzLl9pZCArICcvJyArIG5hbWVdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggc25hcCApIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggZm9yY2UgJiYgIWlzLmZuKGN0eFtuYW1lXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4W25hbWVdLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91bnQobmFtZSwgc25hcHNob3QpOy8vIHF1aWV0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIFxuICAgICAgICB0aGlzLl8uX21peGVkLmZvckVhY2goXG4gICAgICAgICAgICBjdHggPT4ge1xuICAgICAgICAgICAgICAgICFjdHguXy5pc0xvY2FsSWQgJiYgY3R4LnJlc3RvcmUoc25hcHNob3QsIGZvcmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHNuYXBzaG90LCBmb3JjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBwYXJzZVJlZiggX3JlZiApIHtcbiAgICAgICAgbGV0IHJlZiA9IF9yZWYuc3BsaXQoJzonKTtcbiAgICAgICAgcmVmWzBdICA9IHJlZlswXS5zcGxpdCgnLicpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RvcmVJZDogcmVmWzBdWzBdLFxuICAgICAgICAgICAgcGF0aCAgIDogcmVmWzBdLFxuICAgICAgICAgICAgYWxpYXMgIDogcmVmWzFdIHx8IHJlZlswXVtyZWZbMF0ubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgICByZWYgICAgOiBfcmVmXG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIGRpc3BhdGNoKCBhY3Rpb24sIGRhdGEgKSB7XG4gICAgICAgIHRoaXMuXy5fbWl4ZWQuZm9yRWFjaCgoIGN0eCApID0+IChjdHguZGlzcGF0Y2goYWN0aW9uLCBkYXRhKSkpO1xuICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5kaXNwYXRjaChhY3Rpb24sIGRhdGEpO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl8uX3Njb3BlKVxuICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoICFpcy5mbih0aGlzLl8uX3Njb3BlW2lkXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl8uX3Njb3BlW2lkXS50cmlnZ2VyKGFjdGlvbiwgZGF0YSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICB0aGVuKCBjYiApIHtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGEpKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgcmV0YWluU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbiAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluKHJlYXNvbikpXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZVN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcbiAgICAgICAgc3RvcmVzLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlKHJlYXNvbikpXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgd2FpdCggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgIXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5lbWl0KFwidW5zdGFibGVcIiwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZWxlYXNlKCByZWFzb24gKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICB0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fLnN0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy5zdGFiaWxpemVyVE0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrcy5hbGwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuZGVhZCAmJiB0aGlzLl9wcm9wYWcoKTsvLyBzdGFiaWxpdHkgY2FuIGluZHVjZSBkZXN0cm95XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcHJvcGFnKCkge1xuICAgICAgICB0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG4gICAgICAgIHRoaXMuXy5wcm9wYWdUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl8ucHJvcGFnVE0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICB9LCAyXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIF9wcm9wYWcoKSB7XG4gICAgICAgIGlmICggdGhpcy5fLmZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fLmZvbGxvd2Vycy5mb3JFYWNoKCggeyAwOiBvYmosIDE6IGtleSwgMjogYXMsIDM6IGxhc3RSZXZzLCAzOiByZW1hcHMgfSApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwic2V0U3RhdGUgXCIsb2JqLCBPYmplY3Qua2V5cyhkYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqKGRhdGEsIGxhc3RSZXZzICYmIFsuLi5sYXN0UmV2c10gfHwgXCJubyByZXZzXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBsYXN0UmV2cyAmJlxuICAgICAgICAgICAgICAgIC8vIGtleS5mb3JFYWNoKGlkID0+IChsYXN0UmV2c1tpZF0gPSB0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLl9yZXYgfHwgMCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW1pdChcInVwZGF0ZVwiLCB0aGlzLmdldFVwZGF0ZXMoKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIHN0YWJsZVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc1N0YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJsZTtcbiAgICB9XG4gICAgXG4gICAgLy9zZXJpYWxpemVDaGlsZHMoIGNoaWxkcyA9IFtdICkge1xuICAgIC8vXG4gICAgLy99XG4gICAgXG4gICAgX2FkZENoaWxkKCBjdHggKSB7XG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blcy5wdXNoKGN0eCk7XG4gICAgICAgIGxldCBsaXN0cyAgICAgPSB7XG4gICAgICAgICAgICAgICAgJ3N0YWJsZScgICAgICA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd1bnN0YWJsZScgICAgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgICAgICAgICAgICAgIGlmICggMSA9PSB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnc3RhYmxlVHJlZScgIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlVHJlZSc6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAxID09IHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdkZXN0cm95JyAgICAgOiBjdHggPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGN0eC5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICFjdHguaXNTdGFibGUoKSApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuICAgICAgICAvLyFjdHguaXNTdGFibGUoKSAmJiBjb25zb2xlLndhcm4oJ2FkZCB1bnN0YWJsZSBjaGlsZCcpO1xuICAgICAgICAhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgIGN0eC5fLnVuU3RhYmxlQ2hpbGRzICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuICAgICAgICB0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnB1c2gobGlzdHMpO1xuICAgICAgICBpZiAoICF3YXNTdGFibGUgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICBjdHgub24obGlzdHMpO1xuICAgIH1cbiAgICBcbiAgICBfcm1DaGlsZCggY3R4ICkge1xuICAgICAgICBsZXQgaSAgICAgICAgID0gdGhpcy5fLmNoaWxkU2NvcGVzLmluZGV4T2YoY3R4KSxcbiAgICAgICAgICAgIHdhc1N0YWJsZSA9IHRoaXMuXy51blN0YWJsZUNoaWxkcztcbiAgICAgICAgaWYgKCBpICE9IC0xICkge1xuICAgICAgICAgICAgdGhpcy5fLmNoaWxkU2NvcGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgIGN0eC5fLnVuU3RhYmxlQ2hpbGRzICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgY3R4LnVuKHRoaXMuXy5jaGlsZFNjb3Blc0xpc3Quc3BsaWNlKGksIDEpWzBdKTtcbiAgICAgICAgICAgIGlmICggd2FzU3RhYmxlICYmICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIilcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXRhaW4oIHJlYXNvbiApIHtcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsKys7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZXRhaW5cIiwgdGhpcy5faWQsIHJlYXNvbik7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkaXNwb3NlKCByZWFzb24gKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJkaXNwb3NlXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zW3JlYXNvbl0gKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyA6IFwiICsgcmVhc29uKTtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsLS07XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZSBkbyBkZXN0cm95IFwiLCB0aGlzLl9pZCwgdGhpcy5fcGVyc2lzdGVuY2VUbSk7XG4gICAgICAgICAgICBpZiAoIHRoaXMuXy5wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuXy5kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5kZXN0cm95VE0pO1xuICAgICAgICAgICAgICAgIHRoaXMuXy5kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnBlcnNpc3RlbmNlVG1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4gKCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvcmRlciBkZXN0cm95IG9mIGxvY2FsIHN0b3Jlc1xuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBjdHggICA9IHRoaXMuXy5fc2NvcGU7XG4gICAgICAgIC8vY29uc29sZS53YXJuKFwiZGVzdHJveVwiLCB0aGlzLl9pZCk7XG4gICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZW1pdChcImRlc3Ryb3lcIiwgdGhpcyk7XG4gICAgICAgIGZvciAoIGxldCBrZXkgaW4gY3R4IClcbiAgICAgICAgICAgIGlmICggIWlzLmZuKGN0eFtrZXldKSApIHtcbiAgICAgICAgICAgICAgICAhY3R4W2tleV0uX2F1dG9EZXN0cm95ICYmIGN0eFtrZXldLmRpc3Bvc2UoXCJzY29wZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIE9iamVjdC5rZXlzKFxuICAgICAgICAgICAgdGhpcy5fLl9saXN0ZW5pbmdcbiAgICAgICAgKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gdGhpcy5fLl9zY29wZVtpZF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9saXN0ZW5pbmdbaWRdKVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fLnN0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnN0YWJpbGl6ZXJUTSk7XG4gICAgICAgIHRoaXMuXy5wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnByb3BhZ1RNKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuXy5pc0xvY2FsSWQgKVxuICAgICAgICAgICAgZGVsZXRlIG9wZW5TY29wZXNbdGhpcy5faWRdO1xuICAgICAgICB0aGlzLl8uZm9sbG93ZXJzLm1hcCh0aGlzLnVuQmluZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgXG4gICAgICAgIHdoaWxlICggdGhpcy5fLl9taXhlZExpc3QubGVuZ3RoICkge1xuICAgICAgICAgICAgdGhpcy5fLl9taXhlZFswXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX21peGVkTGlzdC5zaGlmdCgpKTtcbiAgICAgICAgICAgIHRoaXMuXy5fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKFwibWl4ZWRUb1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMuXy5fcGFyZW50TGlzdCApIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Ll9ybUNoaWxkKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9wYXJlbnRMaXN0KTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmRpc3Bvc2UoXCJpc015UGFyZW50XCIpO1xuICAgICAgICAgICAgdGhpcy5fLl9wYXJlbnRMaXN0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl8gPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TY29wZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqICBcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqICBcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogIFxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICogIFxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cbnZhciBpcyA9IHJlcXVpcmUoJ2lzJyk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWl0dGVyIHtcbiAgICBfZXZlbnRzID0ge307XG4gICAgXG4gICAgb24oIGV2dCwgY2IgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhldnQpICYmIGV2dCApXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZXZ0KS5mb3JFYWNoKGsgPT4gdGhpcy5vbihrLCBldnRba10pKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdID0gdGhpcy5fZXZlbnRzW2V2dF0gfHwgW107XG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdLnB1c2goY2IpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgdW4oIGV2dCwgY2IgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhldnQpICYmIGV2dCApXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZXZ0KS5mb3JFYWNoKGsgPT4gdGhpcy51bihrLCBldnRba10pKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuICAgICAgICB2YXIgaSA9IHRoaXMuX2V2ZW50c1tldnRdLmluZGV4T2YoY2IpO1xuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XS5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIGVtaXQoIGV2dCwgLi4uYXJneiApIHtcbiAgICAgICAgaWYgKCAhdGhpcy5fZXZlbnRzW2V2dF0gKSByZXR1cm47XG4gICAgICAgIGxldCBsaXN0cyA9IFsuLi50aGlzLl9ldmVudHNbZXZ0XV07XG4gICAgICAgIFxuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBsaXN0cy5sZW5ndGg7IGkrKyApXG4gICAgICAgICAgICBsaXN0c1tpXSguLi5hcmd6KVxuICAgIH1cbiAgICBcbiAgICBhZGRMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5vbiguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy51biguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVBbGxMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIH1cbiAgICBcbiAgICBvbmNlKCBldnQsIGNiICkge1xuICAgICAgICBsZXQgZm47XG4gICAgICAgIHRoaXMub24oZXZ0LCBmbiA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgIHRoaXMudW4oZXZ0LCBmbik7XG4gICAgICAgICAgICBjYiguLi5hcmd6KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VtaXR0ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2hvcnRpZFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuLyoqXG4gKiBVbHRyYSBzY2FsYWJsZSBzdGF0ZS1hd2FyZSBzdG9yZVxuICpcbiAqIEB0b2RvIDogbG90IG9mIG9wdGltcy4uLlxuICovXG5cbnZhciBpcyAgICAgICAgICAgID0gcmVxdWlyZSgnaXMnKSxcbiAgICBTY29wZSAgICAgICAgID0gcmVxdWlyZSgnLi9TY29wZScpLFxuICAgIEV2ZW50RW1pdHRlciAgPSByZXF1aXJlKCcuL0VtaXR0ZXInKSxcbiAgICBUYXNrU2VxdWVuY2VyID0gcmVxdWlyZSgnLi9UYXNrU2VxdWVuY2VyJyksXG4gICAgc2hvcnRpZCAgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKSxcbiAgICBvYmpQcm90byAgICAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KTtcblxuLyoqXG4gKiBAY2xhc3MgU3RvcmVcbiAqL1xuY2xhc3MgU3RvcmUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIFxuICAgIHN0YXRpYyB1c2UgICAgICAgICAgICAgICAgICA9IFtdOy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc291cmNlIHN0b3Jlc1xuICAgIHN0YXRpYyBmb2xsb3c7Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzdG9yZSB0aGF0IHdpbGwgYWxsb3cgcHVzaCBpZiB1cGRhdGVkXG4gICAgc3RhdGljIHJlcXVpcmU7XG4gICAgc3RhdGljIHN0YXRpY1Njb3BlICAgICAgICAgID0gbmV3IFNjb3BlKHt9LCB7IGlkOiBcInN0YXRpY1wiIH0pO1xuICAgIHN0YXRpYyBzdGF0ZSAgICAgICAgICAgICAgICA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlXG4gICAgLyoqXG4gICAgICogaWYgcmV0YWluIGdvZXMgdG8gMCA6XG4gICAgICogZmFsc2UgdG8gbm90IGRlc3Ryb3ksXG4gICAgICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxuICAgICAqIE1zIHRvIGF1dG9kZXN0cm95IGFmdGVyIHRtIG1zIGlmIG5vIHJldGFpbiBoYXMgYmVlbiBjYWxsZWRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxJbnR9XG4gICAgICovXG4gICAgICAgICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gZmFsc2U7XG4gICAgXG4gICAgLyoqXG4gICAgICogZ2V0IGEgQnVpbGRlci1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICAgICAqL1xuICAgIHN0YXRpYyBhcyggbmFtZSApIHtcbiAgICAgICAgcmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWFwIGFsbCBuYW1lZCBzdG9yZXMgaW4ge2tleXN9IHRvIHRoZSB7b2JqZWN0fSdzIHN0YXRlXG4gICAgICogSG9vayBjb21wb25lbnRXaWxsVW5tb3VudCAoZm9yIHJlYWN0IGNvbXApIG9yIGRlc3Ryb3kgdG8gdW5CaW5kIHRoZW0gYXV0b21hdGljYWxseVxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0gb2JqZWN0IHtPYmplY3R9IHRhcmdldCBzdGF0ZSBhd2FyZSBvYmplY3QgKFJlYWN0LkNvbXBvbmVudHxTdG9yZXwuLi4pXG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlclN0YXRpY05hbWVkU3RvcmU6a2V5XCIsIHN0b3JlLmFzKCdhbm90aGVyS2V5JyldXG4gICAgICovXG4gICAgc3RhdGljIG1hcCggY29tcG9uZW50LCBrZXlzLCBzY29wZSwgb3JpZ2luLCBzZXRJbml0aWFsID0gZmFsc2UgKSB7XG4gICAgICAgIHZhciB0YXJnZXRSZXZzICAgICA9IGNvbXBvbmVudC5fcmV2cyB8fCB7fTtcbiAgICAgICAgdmFyIHRhcmdldFNjb3BlICAgID0gY29tcG9uZW50LnN0b3JlcyB8fCAoY29tcG9uZW50LnN0b3JlcyA9IHt9KTtcbiAgICAgICAgdmFyIGluaXRpYWxPdXRwdXRzID0ge307XG4gICAgICAgIGtleXMgICAgICAgICAgICAgICA9IGlzLmFycmF5KGtleXMpID8gWy4uLmtleXNdIDogW2tleXNdO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHNjb3BlID0gc2NvcGUgfHwgU3RvcmUuc3RhdGljU2NvcGU7XG4gICAgICAgIFxuICAgICAgICBrZXlzID0ga2V5cy5maWx0ZXIoXG4gICAgICAgICAgICAvLyBAdG9kbyA6IHVzZSBxdWVyeSByZWZzXG4gICAgICAgICAgICAvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAha2V5ICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzLFxuICAgICAgICAgICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZTtcbiAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoKD86XFwuW1xcd19dKykqKSg/OlxcOihbXFx3X10rKSk/Lyk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzFdO1xuICAgICAgICAgICAgICAgICAgICBwYXRoICA9IGtleVsyXSAmJiBrZXlbMl0uc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLnN0b3Jlc1trZXlbMV1dO1xuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVszXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVswXSB8fCBrZXlbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0UmV2c1tuYW1lXSApIHJldHVybiBmYWxzZTsvLyBpZ25vcmUgZGJsIHVzZXMgZm9yIG5vd1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggIXN0b3JlICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgXCIvXCIgKyBhbGlhcyArIFwiJyBpbiBcIiArIChjb21wb25lbnQubmFtZSB8fCBjb21wb25lbnQpICsgJyAhIScsIHN0b3JlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oc3RvcmUpICkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5fbW91bnQobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuc3RvcmVzW25hbWVdLmJpbmQoY29tcG9uZW50LCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBnaXZlIGluaXRpYWwgc3RvcmUgd2VpZ2h0IGJhc2luZyBzb3VyY2VzXG4gICAgICAgICAgICAgICAgY29tcG9uZW50Ll9zb3VyY2VzLnB1c2goLi4uc2NvcGUuc3RvcmVzW25hbWVdLl9zb3VyY2VzKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0YXJnZXRSZXZzW2FsaWFzXSA9IHRhcmdldFJldnNbYWxpYXNdIHx8IHRydWU7XG4gICAgICAgICAgICAgICAgIXRhcmdldFNjb3BlW25hbWVdICYmICh0YXJnZXRTY29wZVtuYW1lXSA9IHNjb3BlLnN0b3Jlc1tuYW1lXSk7XG4gICAgICAgICAgICAgICAgaWYgKCBzY29wZS5zdG9yZXNbbmFtZV0uaGFzT3duUHJvcGVydHkoJ2RhdGEnKSApXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxPdXRwdXRzW25hbWVdID0gc2NvcGUuZGF0YVtuYW1lXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIC8vIC4uLlxuICAgICAgICB2YXIgbWl4ZWRDV1VubW91bnQsXG4gICAgICAgICAgICB1bk1vdW50S2V5ID0gY29tcG9uZW50LmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcbiAgICAgICAgXG4gICAgICAgIGlmICggY29tcG9uZW50Lmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuICAgICAgICAgICAgbWl4ZWRDV1VubW91bnQgPSBjb21wb25lbnRbdW5Nb3VudEtleV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFt1bk1vdW50S2V5XSA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSBjb21wb25lbnRbdW5Nb3VudEtleV07XG4gICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcbiAgICAgICAgICAgICAgICBjb21wb25lbnRbdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAga2V5cy5tYXAoXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMsIHBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBzY29wZS5zdG9yZXNbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgICA9IGtleS5tYXRjaCgvKFtcXHdfXSspKCg/OlxcLltcXHdfXSspKikoPzpcXDooW1xcd19dKykpPy8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoICA9IGtleVsyXSAmJiBrZXlbMl0uc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBzY29wZS5zdG9yZXNba2V5WzFdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0ga2V5WzNdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWzBdIHx8IGtleVsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgJiYgIWlzLmZuKHN0b3JlKSAmJiBzdG9yZS51bkJpbmQoY29tcG9uZW50LCBhbGlhcywgcGF0aClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudFt1bk1vdW50S2V5XSAmJiBjb21wb25lbnRbdW5Nb3VudEtleV0oLi4uYXJneik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IsIHdpbGwgYnVpbGQgYSByZXNjb3BlIHN0b3JlXG4gICAgICpcbiAgICAgKiAoc2NvcGUsIHtyZXF1aXJlLHVzZSxhcHBseSxzdGF0ZSwgZGF0YX0pXG4gICAgICogKHNjb3BlKVxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIHtvYmplY3R9IHNjb3BlIHdoZXJlIHRvIGZpbmQgdGhlIG90aGVyIHN0b3JlcyAoZGVmYXVsdCA6IHN0YXRpYyBzdGF0aWNTY29wZSApXG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgYXJneiAgICAgICAgID0gWy4uLmFyZ3VtZW50c10sXG4gICAgICAgICAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgID0gYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlXG4gICAgICAgICAgICAgICAgPyBhcmd6LnNoaWZ0KClcbiAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc2NvcGUgPyBTY29wZS5nZXRTY29wZShfc3RhdGljLnNjb3BlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXMuc3RyaW5nKGFyZ3pbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgPyBTY29wZS5nZXRTY29wZShhcmd6LnNoaWZ0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLnN0YXRpY1Njb3BlLFxuICAgICAgICAgICAgY2ZnICAgICAgICAgID0gYXJnelswXSAmJiAhaXMuYXJyYXkoYXJnelswXSkgJiYgIWlzLnN0cmluZyhhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IHt9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgID0gaXMuc3RyaW5nKGFyZ3pbMF0pID8gYXJnelswXSA6IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcbiAgICAgICAgICAgIHdhdGNocyAgICAgICA9IGlzLmFycmF5KGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogY2ZnLnVzZSB8fCBbXSwvLyB3YXRjaHMgbmVlZCB0byBiZSBkZWZpbmVkIGFmdGVyIGFsbCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSBhcmUgcmVnaXN0ZXJlZCA6IHNvIHdlIGNhbid0IGRlYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIGFueSBcInN0YXRpYyB1c2VcIiBhdXRvbWF0aWNseVxuICAgICAgICAgICAgYXBwbHkgICAgICAgID0gaXMuZm4oYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBjZmcuYXBwbHkgfHwgbnVsbCxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IF9zdGF0aWMuc3RhdGUgfHwgX3N0YXRpYy5pbml0aWFsU3RhdGUsXG4gICAgICAgICAgICBhcHBsaWVkO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fdWlkID0gY2ZnLl91aWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMgICAgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9fbG9ja3MgICAgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX29uU3RhYmlsaXplID0gW107XG4gICAgICAgIFxuICAgICAgICAvLyBhdXRvRGVzdHJveVRtXG4gICAgICAgIHRoaXMuX2F1dG9EZXN0cm95ICAgPSAhIXRoaXMuX3BlcnNpc3RlbmNlVG07XG4gICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBjZmcucGVyc2lzdGVuY2VUbSB8fCBfc3RhdGljLnBlcnNpc3RlbmNlVG0gfHwgKGNmZy5hdXRvRGVzdHJveSB8fCBfc3RhdGljLmF1dG9EZXN0cm95KSAmJiA1O1xuICAgICAgICBcbiAgICAgICAgaWYgKCBjZmcgJiYgY2ZnLm9uICkge1xuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzY29wZS5zdG9yZXMgKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlT2JqID0gc2NvcGU7XG4gICAgICAgICAgICB0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY29wZU9iaiA9IG5ldyBTY29wZShzY29wZSk7XG4gICAgICAgICAgICB0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5fcmV2ICAgICA9IHRoaXMuY29uc3RydWN0b3IuX3JldiB8fCAwO1xuICAgICAgICB0aGlzLl9yZXZzICAgID0ge307XG4gICAgICAgIHRoaXMuc3RvcmVzICAgPSB7fTtcbiAgICAgICAgdGhpcy5fcmVxdWlyZSA9IFtdO1xuICAgICAgICB0aGlzLl9zb3VyY2VzID0gW25hbWVdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBpcy5hcnJheShfc3RhdGljLnVzZSkgKSB7XG4gICAgICAgICAgICB0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oX3N0YXRpYy51c2UgfHwgW10pLm1hcChcbiAgICAgICAgICAgICAgICBrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKFteXFw6XSopKD86XFw6KC4qKSk/JC8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHJlZlsxXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWYyID0gcmVmWzJdLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2gocmVmWzNdIHx8IHJlZjJbcmVmMi5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZlsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZSA9IFsuLi53YXRjaHMsIC4uLihcbiAgICAgICAgICAgICAgICBfc3RhdGljLnVzZSA/IE9iamVjdC5rZXlzKF9zdGF0aWMudXNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKC4qKSQvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmWzFdICYmIHRoaXMuX3JlcXVpcmUucHVzaChfc3RhdGljLnVzZVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZlsyXSArICgoX3N0YXRpYy51c2Vba2V5XSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJzonICsgX3N0YXRpYy51c2Vba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IFtdXG4gICAgICAgICAgICApXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBfc3RhdGljLnJlcXVpcmUgKVxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XG4gICAgICAgIGlmICggY2ZnLnJlcXVpcmUgKVxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLmNmZy5yZXF1aXJlKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhcHBseSApXG4gICAgICAgICAgICB0aGlzLmFwcGx5ID0gYXBwbHk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGNmZy5zbmFwc2hvdCAmJiBjZmcuc25hcHNob3RbdGhpcy5zY29wZU9iai5faWQgKyAnLycgKyBuYW1lXSApIHtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZShjZmcuc25hcHNob3QpO1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHNjb3BlLmJpbmQodGhpcywgdGhpcy5fdXNlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggX3N0YXRpYy5kYXRhICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHsgLi4uX3N0YXRpYy5kYXRhIH07XG4gICAgICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFcIikgJiYgY2ZnLmRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gY2ZnLmRhdGE7XG4gICAgICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlXCIpICYmIGNmZy5zdGF0ZSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICBpbml0aWFsU3RhdGUgPSB7IC4uLmluaXRpYWxTdGF0ZSwgLi4uY2ZnLnN0YXRlIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBpbml0aWFsU3RhdGUgfHwgdGhpcy5fdXNlLmxlbmd0aCApIHsvLyBzeW5jIGFwcGx5XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uKGluaXRpYWxTdGF0ZSB8fCB7fSksXG4gICAgICAgICAgICAgICAgICAgIC4uLnNjb3BlLm1hcCh0aGlzLCB0aGlzLl91c2UpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQXBwbHkodGhpcy5zdGF0ZSkgJiYgdGhpcy5kYXRhID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuYXBwbHkodGhpcy5kYXRhLCB0aGlzLnN0YXRlLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgYXBwbGllZCAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VzU1cgPSB7IC4uLnRoaXMuc3RhdGUgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICggKHRoaXMuZGF0YSAhPT0gdW5kZWZpbmVkIHx8IGFwcGxpZWQpICYmICF0aGlzLl9fbG9ja3MuYWxsICkge1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JldisrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoICFfc3RhdGljLm1hbmFnZWQgJiYgIXRoaXMuc3RhdGUgJiYgKCF0aGlzLl91c2UgfHwgIXRoaXMuX3VzZS5sZW5ndGgpICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGUgc3RvcmUgJ1wiLCB0aGlzLm5hbWUsIFwiJyBoYXZlIG5vIGluaXRpYWwgZGF0YSwgc3RhdGUgb3IgdXNlLiBJdCBjYW4ndCBzdGFiaWxpemUuLi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgIXRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldCBjb250ZXh0T2JqKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZU9iajtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXQgY29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0IGRhdGFzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHNldCBkYXRhcyggdiApIHtcbiAgICAgICAgLy9jb25zb2xlLmdyb3VwQ29sbGFwc2VkKFwiUmVzY29wZSBzdG9yZSA6IFNldHRpbmcgZGF0YXMgaXMgZGVwcmVjaWF0ZWQsIHVzZSBkYXRhXCIpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUmVzY29wZSBzdG9yZSA6IFNldHRpbmcgZGF0YXMgaXMgZGVwcmVjaWF0ZWQsIHVzZSBkYXRhXCIsIChuZXcgRXJyb3IoKSkuc3RhY2spO1xuICAgICAgICAvL2NvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSA9IHY7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgZGF0YSBjaGFuZ2Ugc2hvdWxkIGJlIHByb3BhZyB0byB0aGUgbGlzdGVuaW5nIHN0b3JlcyAmIGNvbXBvbmVudHNcbiAgICAgKi9cbiAgICBzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBoYXNEYXRhQ2hhbmdlKCBuRGF0YXMgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvciwgcixcbiAgICAgICAgICAgIGNEYXRhcyAgPSB0aGlzLmRhdGE7XG4gICAgICAgIHIgICAgICAgICAgID0gIWNEYXRhcyAmJiBuRGF0YXMgfHwgY0RhdGFzICE9PSBuRGF0YXM7XG4gICAgICAgICFyICYmIGNEYXRhcyAmJiBPYmplY3Qua2V5cyhjRGF0YXMpLmZvckVhY2goXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICAhciAmJiBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgc3RhdGUgY2hhbmdlIHNob3VsZCBiZSBhcHBsaWVkXG4gICAgICovXG4gICAgc2hvdWxkQXBwbHkoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICEhdGhpcy5pc0NvbXBsZXRlKHN0YXRlKVxuICAgICAgICApICYmIChpcy5hcnJheShfc3RhdGljLmZvbGxvdylcbiAgICAgICAgICAgICAgICA/IF9zdGF0aWMuZm9sbG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAociB8fCBzdGF0ZSAmJiBzdGF0ZVtpXSksIGZhbHNlKVxuICAgICAgICAgICAgICAgIDogX3N0YXRpYy5mb2xsb3dcbiAgICAgICAgICAgICAgICAgID8gT2JqZWN0LmtleXMoX3N0YXRpYy5mb2xsb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgc3RhdGUgJiYgaXMuZm4oX3N0YXRpYy5mb2xsb3dbaV0pICYmIF9zdGF0aWMuZm9sbG93W2ldLmNhbGwodGhpcywgc3RhdGVbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBfc3RhdGljLmZvbGxvd1tpXSAmJiBzdGF0ZVtpXSAhPT0gdGhpcy5zdGF0ZVtpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZSkgOiB0cnVlXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIGFwcGxpZXIgLyByZW1hcHBlclxuICAgICAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyBhcHBseSB3aWxsIHJldHVybiB7Li4uZGF0YSwgLi4uc3RhdGV9XG4gICAgICogaWYgbm90IGl0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IHByaXZhdGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGFwcGx5KCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLnJlZmluZSApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZpbmUoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhLCAuLi5zdGF0ZSB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNpYXRlZFxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGNoYW5nZXNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWZpbmUoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc3RhYmlsaXplKCBjYiApIHtcbiAgICAgICAgY2IgJiYgdGhpcy5vbmNlKCdzdGFibGUnLCBjYik7XG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBUYXNrU2VxdWVuY2VyLnB1c2hUYXNrKHRoaXMsICdwdXNoU3RhdGUnKTtcbiAgICB9XG4gICAgXG4gICAgcmV0cmlldmUoIHBhdGgsIGkgPSAwLCBvYmogPSB0aGlzLmRhdGEgKSB7XG4gICAgICAgIHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuICAgICAgICByZXR1cm4gIW9iaiB8fCAhcGF0aCB8fCAhcGF0aC5sZW5ndGhcbiAgICAgICAgICAgID8gb2JqXG4gICAgICAgICAgICA6IHBhdGgubGVuZ3RoID09IGkgKyAxXG4gICAgICAgICAgICAgICAgICAgPyBvYmpbcGF0aFtpXV1cbiAgICAgICAgICAgICAgICAgICA6IHRoaXMucmV0cmlldmUocGF0aCwgaSArIDEsIG9ialtwYXRoW2ldXSk7XG4gICAgfVxuICAgIFxuICAgIGRpc3BhdGNoKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG4gICAgICAgIHRoaXMuc2NvcGVPYmouZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KTtcbiAgICB9XG4gICAgXG4gICAgdHJpZ2dlciggYWN0aW9uLCAuLi5hcmd6ICkge1xuICAgICAgICBsZXQgeyBhY3Rpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBpZiAoIGFjdGlvbnMgJiYgYWN0aW9uc1thY3Rpb25dICkge1xuICAgICAgICAgICAgbGV0IG5zID0gYWN0aW9uc1thY3Rpb25dLmNhbGwodGhpcywgLi4uYXJneik7XG4gICAgICAgICAgICBucyAmJiB0aGlzLnNldFN0YXRlKG5zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBQdWxsIHN0b3JlcyBpbiB0aGUgcHJpdmF0ZSBzdGF0ZVxuICAgICAqIEBwYXJhbSBzdG9yZXMgIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cbiAgICAgKi9cbiAgICBwdWxsKCBzdG9yZXMsIGRvV2FpdCwgb3JpZ2luICkge1xuICAgICAgICBsZXQgaW5pdGlhbE91dHB1dHMgPSB0aGlzLnNjb3BlT2JqLm1hcCh0aGlzLCBzdG9yZXMpO1xuICAgICAgICBpZiAoIGRvV2FpdCApIHtcbiAgICAgICAgICAgIHRoaXMud2FpdCgpO1xuICAgICAgICAgICAgc3RvcmVzLmZvckVhY2goKCBzICkgPT4gdGhpcy5zY29wZVtzXSAmJiB0aGlzLndhaXQodGhpcy5zY29wZVtzXSkpO1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBcHBseSBhcHBseS9yZW1hcCBvbiB0aGUgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggdGhlIHJlc3VsdGluZyBcInB1YmxpY1wiIHN0YXRlIHRvIGZvbGxvd2Vyc1xuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHB1c2goIGRhdGEsIGZvcmNlLCBjYiApIHtcbiAgICAgICAgY2IgICAgPSBmb3JjZSA9PT0gdHJ1ZSA/IGNiIDogZm9yY2U7XG4gICAgICAgIGZvcmNlID0gZm9yY2UgPT09IHRydWU7XG4gICAgICAgIGlmICggIWZvcmNlICYmXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgIXRoaXMuaGFzRGF0YUNoYW5nZShkYXRhKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgICAgICBpZiAoICF0aGlzLl9fbG9ja3MuYWxsICkge1xuICAgICAgICAgICAgICAgIGxldCBzdGFibGUgICA9IHRoaXMuX3N0YWJsZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICFzdGFibGUgJiYgdGhpcy5lbWl0KCdzdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLndhaXQoKTtcbiAgICAgICAgdGhpcy5yZWxlYXNlKGNiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHB1c2hTdGF0ZSggZm9yY2UgKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFmb3JjZSAmJiAhdGhpcy5fY2hhbmdlc1NXICYmIHRoaXMuZGF0YSApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICB2YXIgbmV4dFN0YXRlID0geyAuLi50aGlzLnN0YXRlLCAuLi4odGhpcy5fY2hhbmdlc1NXIHx8IHt9KSB9LFxuICAgICAgICAgICAgbmV4dERhdGEgID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIG5leHRTdGF0ZSwgdGhpcy5fY2hhbmdlc1NXKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlICAgICAgID0gbmV4dFN0YXRlO1xuICAgICAgICB0aGlzLl9jaGFuZ2VzU1cgID0gbnVsbDtcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAhdGhpcy5oYXNEYXRhQ2hhbmdlKG5leHREYXRhKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuZGF0YSA9IG5leHREYXRhO1xuICAgICAgICB0aGlzLndhaXQoKTtcbiAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHNldFN0YXRlKCBwU3RhdGUsIGNiLCBzeW5jICkge1xuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcbiAgICAgICAgICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgICAgcFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcbiAgICAgICAgICAgICAgICApICkge1xuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5zaG91bGRBcHBseSh7IC4uLnRoaXMuc3RhdGUsIC4uLmNoYW5nZXMgfSkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggc3luYyApIHtcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCBjaGFuZ2UgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFiaWxpemUoY2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBjYiAmJiBjYigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHNldFN0YXRlU3luYyggcFN0YXRlICkge1xuICAgICAgICB2YXIgaSAgICAgICA9IDAsIGNoYW5nZSxcbiAgICAgICAgICAgIGNoYW5nZXMgPSB0aGlzLl9jaGFuZ2VzU1cgPSB0aGlzLl9jaGFuZ2VzU1cgfHwge307XG4gICAgICAgIGZvciAoIHZhciBrIGluIHBTdGF0ZSApXG4gICAgICAgICAgICBpZiAoICF0aGlzLnN0YXRlIHx8IHBTdGF0ZS5oYXNPd25Qcm9wZXJ0eShrKVxuICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgICAgcFN0YXRlW2tdICE9IHRoaXMuc3RhdGVba11cbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGVba10gJiYgcFN0YXRlW2tdICYmIChwU3RhdGVba10uX3JldiAhPSB0aGlzLl9yZXZzW2tdKSkvLyByZXYvaGFzaCB1cGRhdGVcbiAgICAgICAgICAgICAgICApICkge1xuICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JldnNba10gPSBwU3RhdGVba10gJiYgcFN0YXRlW2tdLl9yZXYgfHwgdHJ1ZTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2tdICAgID0gcFN0YXRlW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3VsZEFwcGx5KHsgLi4uKHRoaXMuc3RhdGUgfHwge30pLCAuLi5jaGFuZ2VzIH0pICYmIHRoaXMucHVzaFN0YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgdGhlIGN1cnJlbnQgcHJpdmF0ZSBzdGF0ZSAmIHB1c2ggaXQgb25jZSB0aGUgc3RvcmUgaXMgc3RhYmxlXG4gICAgICogQHBhcmFtIHBTdGF0ZVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHJlcGxhY2VTdGF0ZSggcFN0YXRlLCBjYiApIHtcbiAgICAgICAgdmFyIGkgICAgICA9IDAsIG1lID0gdGhpcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHBTdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogZ2V0IGEgc3RvcmUta2V5IHBhaXIgZm9yIFN0b3JlOjptYXBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt7c3RvcmU6IFN0b3JlLCBuYW1lOiAqfX1cbiAgICAgKi9cbiAgICBhcyggbmFtZSApIHtcbiAgICAgICAgcmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbiAgICB9XG4gICAgXG4gICAgb24oIGxpc3RzICkge1xuICAgICAgICBpZiAoICFpcy5zdHJpbmcobGlzdHMpICYmIGxpc3RzIClcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RzKS5mb3JFYWNoKGsgPT4gc3VwZXIub24oaywgbGlzdHNba10pKTtcbiAgICAgICAgZWxzZSBzdXBlci5vbiguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVMaXN0ZW5lciggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5yZW1vdmVMaXN0ZW5lcihrLCBsaXN0c1trXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIHJlbGluayBiaW5kaW5ncyAmIHJlcXVpcmVzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7e3N0b3JlOiBTdG9yZSwgbmFtZTogKn19XG4gICAgICovXG4gICAgcmVsaW5rKCBmcm9tICkge1xuICAgICAgICBsZXQgc2NvcGUgICA9IHRoaXMuc2NvcGVPYmosXG4gICAgICAgICAgICBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKCBfc3RhdGljLnVzZSApIHtcbiAgICAgICAgICAgIC8vdG9kbyB1bmxpbmtcbiAgICAgICAgICAgIHRoaXMucHVsbChfc3RhdGljLnVzZSwgZmFsc2UsIGZyb20pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX3JlcXVpcmUgKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlLmZvckVhY2goXG4gICAgICAgICAgICAgICAgc3RvcmUgPT4gKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhaXQoc2NvcGUuX19zY29wZVtzdG9yZV0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBjb21wbGV0ZSAoYWxsIHJlcXVpZXJlZCBrZXlzIGFyZSBoZXJlKVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc0NvbXBsZXRlKCBzdGF0ZSA9IHRoaXMuc3RhdGUgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF0aGlzLl9yZXF1aXJlXG4gICAgICAgICAgICB8fCAhdGhpcy5fcmVxdWlyZS5sZW5ndGhcbiAgICAgICAgICAgIHx8IHN0YXRlICYmIHRoaXMuX3JlcXVpcmUucmVkdWNlKFxuICAgICAgICAgICAgICAgICggciwga2V5ICkgPT4gKHIgJiYgc3RhdGVba2V5XSksXG4gICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBpcyBzdGFibGVcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNTdGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFibGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIHN0YWJsZVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBzZXJpYWxpemUoIG91dHB1dCA9IHt9LCBjb21wbGV0ZVN0YXRlICkge1xuICAgICAgICBsZXQgcmVmcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID1cbiAgICAgICAgICAgICAgICBpcy5hcnJheSh0aGlzLl91c2UpICYmIHRoaXMuX3VzZS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKCBtYXAsIGtleSApID0+IHsvL3RvZG9cbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcywgcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0gbmFtZSA9IGtleS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ICAgPSBrZXkubWF0Y2goLyhbXFx3X10rKSgoPzpcXC5bXFx3X10rKSopKD86XFw6KFtcXHdfXSspKT8vKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCAgPSBrZXlbMl0gJiYga2V5WzJdLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0ga2V5WzNdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWzBdIHx8IGtleVsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLnNjb3BlT2JqLnN0b3Jlc1tuYW1lXS5zY29wZU9iai5fLmlzTG9jYWxJZCApXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBbYWxpYXNdID0gdGhpcy5zY29wZU9iai5zdG9yZXNbbmFtZV0uc2NvcGVPYmouX2lkICsgJy8nICsgbmFtZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgICAgICAgICB9LCB7fVxuICAgICAgICAgICAgICAgICkgfHwge307XG4gICAgICAgIG91dHB1dFt0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZV0gPSB7XG4gICAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSAmJlxuICAgICAgICAgICAgKGNvbXBsZXRlU3RhdGVcbiAgICAgICAgICAgICAgICA/IHsgLi4udGhpcy5zdGF0ZSB9XG4gICAgICAgICAgICAgICAgOiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlKS5yZWR1Y2UoKCBoLCBrICkgPT4gKCFyZWZzW2tdICYmIChoW2tdID0gdGhpcy5zdGF0ZVtrXSksIGgpLCB7fSkpLFxuICAgICAgICAgICAgZGF0YSA6IHRoaXMuZGF0YSxcbiAgICAgICAgICAgIHJlZnNcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgc3RhYmxlXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIHJlc3RvcmUoIHNuYXBzaG90ICkge1xuICAgICAgICBsZXQgc25hcCA9IHNuYXBzaG90W3RoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lXTtcbiAgICAgICAgaWYgKCBzbmFwICkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHNuYXAuc3RhdGU7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzbmFwLnJlZnMpLmZvckVhY2goXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7Ly90b2RvXG4gICAgICAgICAgICAgICAgICAgIGlmICggc25hcHNob3Rbc25hcC5yZWZzW2tleV1dIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHNuYXAuc3RhdGVba2V5XSA9IHNuYXBzaG90W3NuYXAucmVmc1trZXldXS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ25vdCBmb3VuZCA6ICcsIGtleSwgc25hcC5yZWZzW2tleV0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBzbmFwLmRhdGE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVW4gYmluZCB0aGlzIHN0b3JlIG9mZiB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuICAgICAqIEBwYXJhbSBvYmpcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge0FycmF5LjwqPn1cbiAgICAgKi9cbiAgICB1bkJpbmQoIG9iaiwga2V5LCBwYXRoICkge1xuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fZm9sbG93ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgID0gZm9sbG93ZXJzICYmIGZvbGxvd2Vycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggZm9sbG93ZXJzICYmIGktLSApXG4gICAgICAgICAgICBpZiAoIGZvbGxvd2Vyc1tpXVswXSA9PT0gb2JqICYmIGZvbGxvd2Vyc1tpXVsxXSA9PT0ga2V5ICYmIGZvbGxvd2Vyc1tpXVsyXSA9PT0gcGF0aCApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGxvd2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhpcyBzdG9yZSBjaGFuZ2VzIHRvIHRoZSBnaXZlbiBjb21wb25lbnQta2V5XG4gICAgICogQHBhcmFtIG9iaiB7UmVhY3QuQ29tcG9uZW50fFN0b3JlfGZ1bmN0aW9uKVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ30gb3B0aW9uYWwga2V5IHdoZXJlIHRvIG1hcCB0aGUgcHVibGljIHN0YXRlXG4gICAgICovXG4gICAgYmluZCggb2JqLCBrZXksIHNldEluaXRpYWwgPSB0cnVlLCBwYXRoICkge1xuICAgICAgICB0aGlzLl9mb2xsb3dlcnMucHVzaChbb2JqLCBrZXksIHBhdGhdKTtcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuZGF0YSAmJiB0aGlzLl9zdGFibGUgKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHBhdGggPyB0aGlzLnJldHJpZXZlKHBhdGgpIDogdGhpcy5kYXRhO1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygb2JqICE9IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGtleSApIG9iai5zZXRTdGF0ZSh7IFtrZXldOiBkYXRhIH0pO1xuICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIHRoZW4oIGNiICkge1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgdGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKG51bGwsIHRoaXMuZGF0YSkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBZGQgYSBsb2NrIHNvIHRoZSBzdG9yZSB3aWxsIG5vdCBwcm9wYWcgaXQgZGF0YSB1bnRpbGwgcmVsZWFzZSgpIGlzIGNhbGxcbiAgICAgKiBAcGFyYW0gcHJldmlvdXMge1N0b3JlfG51bWJlcnxBcnJheX0gQG9wdGlvbmFsIHdmIHRvIHdhaXQsIHJlbGVhc2VzIHRvIHdhaXQgb3IgYXJyYXkgb2Ygc3R1ZmYgdG8gd2FpdFxuICAgICAqIEByZXR1cm5zIHtUYXNrRmxvd31cbiAgICAgKi9cbiAgICB3YWl0KCBwcmV2aW91cyApIHtcbiAgICAgICAgaWYgKCB0eXBlb2YgcHJldmlvdXMgPT0gXCJudW1iZXJcIiApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2xvY2tzLmFsbCArPSBwcmV2aW91cztcbiAgICAgICAgaWYgKCBpcy5hcnJheShwcmV2aW91cykgKVxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzLm1hcCh0aGlzLndhaXQuYmluZCh0aGlzKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFibGUgJiYgdGhpcy5lbWl0KCd1bnN0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmVhc29uID0gaXMuc3RyaW5nKHByZXZpb3VzKSA/IHByZXZpb3VzIDogbnVsbDtcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmICggcHJldmlvdXMgJiYgaXMuZm4ocHJldmlvdXMudGhlbikgKSB7XG4gICAgICAgICAgICBwcmV2aW91cy50aGVuKHRoaXMucmVsZWFzZS5iaW5kKHRoaXMsIG51bGwpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRGVjcmVhc2UgbG9ja3MgZm9yIHRoaXMgc3RvcmUsIGlmIGl0IHJlYWNoIDAgLFxuICAgICAqIGl0IHdpbGwgYmUgcHJvcGFnYXRlZCB0byB0aGUgZm9sbG93ZXJzLFxuICAgICAqIHRoZW4sIGFsbCBzdHVmZiBwYXNzZWQgdG8gXCJ0aGVuXCIgY2FsbCBiYWNrIHdpbGwgYmUgZXhlYyAvIHJlbGVhc2VkXG4gICAgICogQHBhcmFtIGRlc3luY1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJlbGVhc2UoIHJlYXNvbiwgY2IgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvciwgbWUgPSB0aGlzO1xuICAgICAgICBsZXQgaSAgICAgICA9IDAsIHdhc1N0YWJsZSA9IHRoaXMuX3N0YWJsZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggaXMuZm4ocmVhc29uKSApIHtcbiAgICAgICAgICAgIGNiICAgICA9IHJlYXNvbjtcbiAgICAgICAgICAgIHJlYXNvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9fbG9ja3NbcmVhc29uXSA9PSAwIClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIsIHJlYXNvbik7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXSA9IHRoaXMuX19sb2Nrc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fbG9ja3NbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICBpZiAoICEtLXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5pc0NvbXBsZXRlKCkgKSB7XG4gICAgICAgICAgICBsZXQgcHJvcGFnICAgPSB0aGlzLnNob3VsZFByb3BhZyh0aGlzLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByb3BhZyAmJiB0aGlzLl9yZXYrKzsvL1xuICAgICAgICAgICAgaWYgKCBwcm9wYWcgJiYgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goZnVuY3Rpb24gcHJvcGFnKCBmb2xsb3dlciApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBmb2xsb3dlclsyXSA/IG1lLnJldHJpZXZlKGZvbGxvd2VyWzJdKSA6IG1lLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvbGxvd2VyWzBdID09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyWzBdKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYiAmJiBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclswXS5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9sbG93ZXJbMV0pID8geyBbZm9sbG93ZXJbMV1dOiBkYXRhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jYiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgKCkgPT4gKCEoLS1pKSAmJiBjYigpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9lbHNlXG4gICAgICAgICAgICAhd2FzU3RhYmxlICYmIHRoaXMuZW1pdCgnc3RhYmxlJywgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgIHByb3BhZyAmJiB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICBjYiAmJiBjYigpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBjYiAmJiB0aGlzLnRoZW4oY2IpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgcmV0YWluKCByZWFzb24gKSB7XG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbCsrO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gPSB0aGlzLl9fcmV0YWluc1tyZWFzb25dIHx8IDA7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUud2FybihcImRpc3Bvc2VcIiwgcmVhc29uLCB0aGlzLl9fcmV0YWlucyk7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnNbcmVhc29uXSApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nIDogXCIgKyByZWFzb24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dLS07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCB0aGlzLl9fcmV0YWlucy5hbGwgPT0gMCApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNwb3NlIG1vcmUgdGhhbiByZXRhaW5pbmcgIVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZXRhaW5zLmFsbC0tO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fZGVzdHJveVRNKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lUTSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW4ocyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX19yZXRhaW5zLmFsbCAmJiB0aGlzLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4gKCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkZXN0cm95KCkge1xuICAgICAgICAvLyAgY29uc29sZS5sb2coXCJkZXN0cm95XCIsIHRoaXMuX3VpZCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knLCB0aGlzKTtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGFiaWxpemVyKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCApXG4gICAgICAgICAgICB0aGlzLl9mb2xsb3dlcnMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoIGZvbGxvd2VyICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclswXSAhPT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBmb2xsb3dlclswXS5zdG9yZXMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmb2xsb3dlclswXS5zdG9yZXNbZm9sbG93ZXJbMV1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IuX3JldiAgPSB0aGlzLnJldjtcbiAgICAgICAgdGhpcy5kZWFkICAgICAgICAgICAgICA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JldnMgICAgICAgICAgICAgPSB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlID0gdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgfVxufVxuXG5cblN0b3JlLlNlZWQgPSBjbGFzcyBTZWVkU3RvcmUgZXh0ZW5kcyBTdG9yZSB7XG4gICAgc3RhdGljIFNFRUQgPSB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxyXG4gKlxyXG4gKiAgTUlUIExpY2Vuc2VcclxuICpcclxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuICogIFNPRlRXQVJFLlxyXG4gKlxyXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXHJcbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBNaW5pbWFsIHB1c2ggc2VxdWVuY2VyLCBhcHBseSBzdG9yZXMgc3BlY2lmaWMgdGFzayBpbiB0aGUgcmlnaHQgb3JkZXIgKHJvb3Qgc3RvcmVzIGZpcnN0KVxyXG4gKi9cclxubGV0IHRhc2tRdWV1ZSAgICA9IFtdLFxyXG4gICAgY3VyV2VpZ2h0ICAgID0gMCxcclxuICAgIG1heFdlaWdodCAgICA9IDAsXHJcbiAgICBtaW5XZWlnaHQgICAgPSAwLFxyXG4gICAgdGFza0NvdW50ICAgID0gMCxcclxuICAgIC8vZGVTeW5jU3RlcHMgPSAxMDAwLFxyXG4gICAgdGFzayxcclxuICAgIGlzUnVubmluZyxcclxuICAgIGVycm9yQ2F0Y2hlciA9IHtcclxuICAgICAgICBsYXN0RXJyb3I6IG51bGwsXHJcbiAgICAgICAgZGlzcGF0Y2ggOiBmdW5jdGlvbiAoIGVycm9yICkge1xyXG4gICAgICAgICAgICBlcnJvckNhdGNoZXIuZGlzYWJsZSgpO1xyXG4gICAgICAgICAgICBpZiAoIHRhc2sgJiYgdGFza1swXS5oYW5kbGVFcnJvciApIHtcclxuICAgICAgICAgICAgICAgIHRhc2tbMF0uaGFuZGxlRXJyb3IoZXJyb3IsIHRhc2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCB0YXNrIClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZVNjb3BlIDogQSB0YXNrIGhhcyBmYWlsZWQgISFcIiwgdGFza1sxXSwgXCIgb24gXCIsIHRhc2tbMF0ubmFtZSB8fCB0YXNrWzBdLmNvbnN0cnVjdG9yLm5hbWUpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0YXNrICAgICAgPSBudWxsO1xyXG4gICAgICAgICAgICBydW5Ob3coKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVuYWJsZSAgIDogKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICA/ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaClcclxuICAgICAgICAgICAgfSA6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb2Nlc3Mub24oJ3VuY2F1Z2h0RXhjZXB0aW9uJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBkaXNhYmxlICA6ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgPyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpXHJcbiAgICAgICAgICAgIH0gOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzLnJlbW92ZUxpc3RlbmVyKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuO1xyXG5cclxuZnVuY3Rpb24gcnVuTm93KCkge1xyXG4gICAgaWYgKCAhaXNSdW5uaW5nICkge1xyXG4gICAgICAgIHJ1bigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBydW4oKSB7XHJcbiAgICBpc1J1bm5pbmcgPSB0cnVlO1xyXG4gICAgZXJyb3JDYXRjaGVyLmVuYWJsZSgpO1xyXG4gICAgd2hpbGUgKCB0YXNrQ291bnQgKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdHJ5IGZvciB0aGUgY3VycmVudCB3ZWlnaHRcclxuICAgICAgICB3aGlsZSAoICEodGFza1F1ZXVlW2N1cldlaWdodF0gJiYgdGFza1F1ZXVlW2N1cldlaWdodF0ubGVuZ3RoKSApXHJcbiAgICAgICAgICAgIGN1cldlaWdodCsrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRhc2tDb3VudC0tO1xyXG4gICAgICAgIHRhc2sgPSB0YXNrUXVldWVbY3VyV2VpZ2h0XS5zaGlmdCgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJUYXNrIDogXCIsIHRhc2tbMV0sIFwiIG9uIFwiLCB0YXNrWzBdLm5hbWUpO1xyXG4gICAgICAgIHRhc2tbMF1bdGFza1sxXV0uYXBwbHkodGFza1swXSwgdGFza1syXSk7XHJcbiAgICB9XHJcbiAgICB0YXNrID0gdW5kZWZpbmVkO1xyXG4gICAgZXJyb3JDYXRjaGVyLmRpc2FibGUoKTtcclxuICAgIFxyXG4gICAgaXNSdW5uaW5nID0gZmFsc2U7XHJcbiAgICBpZiAoIHRhc2tDb3VudCApIHtcclxuICAgICAgICBzZXRUaW1lb3V0KHJ1bk5vdyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwdXNoVGFzayggb2JqLCBmbiwgYXJneiApIHtcclxuICAgICAgICBsZXQgd2VpZ2h0ID0gb2JqLl9zb3VyY2VzICYmIG9iai5fc291cmNlcy5sZW5ndGggfHwgMSxcclxuICAgICAgICAgICAgc3RhY2sgID0gdGFza1F1ZXVlW3dlaWdodF0gPVxyXG4gICAgICAgICAgICAgICAgdGFza1F1ZXVlW3dlaWdodF0gfHwgW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWF4V2VpZ2h0ID0gTWF0aC5tYXgobWF4V2VpZ2h0LCB3ZWlnaHQpO1xyXG4gICAgICAgIGN1cldlaWdodCA9IE1hdGgubWluKGN1cldlaWdodCwgd2VpZ2h0KTtcclxuICAgICAgICB0YXNrQ291bnQrKztcclxuICAgICAgICBcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUHVzaCBUYXNrIDogXCIsIGZuLCBcIiBvbiBcIiwgb2JqLm5hbWUsIHdlaWdodCk7XHJcbiAgICAgICAgc3RhY2sucHVzaChbb2JqLCBmbiwgYXJnel0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQocnVuTm93KTtcclxuICAgICAgICByZXR1cm4gc3RhY2subGVuZ3RoO1xyXG4gICAgfVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9UYXNrU2VxdWVuY2VyLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKiAgXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiAgXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqICBcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqICBcbiAqIEBhdXRob3IgOiBOYXRoYW5hZWwgQnJhdW5cbiAqIEBjb250YWN0IDogY2FpcGlsYWJzQGdtYWlsLmNvbVxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBpcyBmcm9tICdpcydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9TY29wZSc7XG5cbmNvbnN0IFNpbXBsZU9iamVjdFByb3RvID0gKHt9KS5jb25zdHJ1Y3RvcjtcblxuLyoqXG4gKiBJbmhlcml0YWJsZSBSZVNjb3BlIFwiSE9DXCIgKEhpZ2ggT3JkZXIgQ29tcG9uZW50KVxuICpcbiAqIEBjbGFzcyBDb21wb25lbnRcbiAqIEBkZXNjIFBhcmVudCBSZWFjdCBDb21wb25lbnQgd2l0aCBzdG9yZSBpbmplY3Rpb24gaW4gaXRzIHN0YXRlXG4gKi9cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgICByZXNjb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfVxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgICAgICA9IHtcbiAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgJHN0b3JlczogUHJvcFR5cGVzLm9iamVjdFxuICAgIH1cbiAgICBcbiAgICBjb25zdHJ1Y3RvciggcCwgY3R4LCBxICkge1xuICAgICAgICBzdXBlcihwLCBjdHgsIHEpO1xuICAgICAgICBsZXQgc2NvcGUgICA9XG4gICAgICAgICAgICAgICAgcC5fX3Njb3BlXG4gICAgICAgICAgICAgICAgfHwgY3R4LnJlc2NvcGU7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gc2NvcGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLmRlYWQgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVTY29waW5nIHVzaW5nIGRlYWQgc2NvcGVcIilcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy4kc3RvcmVzID0gdGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUuc3RvcmVzO1xuICAgICAgICBpZiAoIHRoaXMuY29uc3RydWN0b3IudXNlICkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgIC4uLnNjb3BlLm1hcCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSwgZmFsc2UpLy8gZG9uJ3QgYmluZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCAhdGhpcy4kc2NvcGUgKVxuICAgICAgICAgICAgdGhpcy5yZW5kZXIgPSAoKSA9PiA8ZGl2Pk5vIFJlc2NvcGUgaGVyZSB7IHN1cGVyLm5hbWUgfTwvZGl2PlxuICAgIH1cbiAgICBcbiAgICBkaXNwYXRjaCggLi4uYXJneiApIHtcbiAgICAgICAgdGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUuZGlzcGF0Y2goLi4uYXJneilcbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAoIHRoaXMuY29uc3RydWN0b3IudXNlICkge1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUuYmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSwgZmFsc2UpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IudXNlXG4gICAgICAgICYmIHRoaXMuJHNjb3BlLnVuQmluZCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnVzZSB8fCBbXSk7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyggbnAsIG5jICkge1xuICAgICAgICBsZXQgblNjb3BlID0gbnAuX19zY29wZVxuICAgICAgICAgICAgfHwgbmMucmVzY29wZSB8fCB0aGlzLiRzY29wZTtcbiAgICAgICAgXG4gICAgICAgIGlmICggblNjb3BlICE9IHRoaXMuJHNjb3BlICkge1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci51c2UgJiYgdGhpcy4kc2NvcGUudW5CaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlKTtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlID0gblNjb3BlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIHRoaXMuJHNjb3BlLmRlYWQgKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlU2NvcGluZyB1c2luZyBkZWFkIHNjb3BlXCIpXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmVzID0gdGhpcy4kc2NvcGUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmVzID0gdGhpcy4kc2NvcGUuc3RvcmVzO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IudXNlICYmIG5TY29wZS5iaW5kKHRoaXMsIHRoaXMuY29uc3RydWN0b3IudXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXNjb3BlOiB0aGlzLiRzY29wZSB8fCB0aGlzLmNvbnRleHQucmVzY29wZSxcbiAgICAgICAgICAgICRzdG9yZXM6IHRoaXMuJHNjb3BlLnN0b3JlcyB8fCB0aGlzLmNvbnRleHQuJHN0b3Jlc1xuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuIHx8IDxkaXYvPlxuICAgIH1cbn07XG5cbi8qKlxuICogUmV0dXJuIGEgUmVhY3QgXCJIT0NcIiAoSGlnaCBPcmRlciBDb21wb25lbnQpIHRoYXQgOlxuICogIC0gSW5oZXJpdCBCYXNlQ29tcG9uZW50LFxuICogIC0gSW5qZWN0ICYgbWFpbnRhaW4gdGhlIHN0b3JlcyBpbiBCYXNlQ29tcG9uZW50Ojp1c2UgYW5kL29yICh1c2UpIGluIHRoZSBpbnN0YW5jZXMgc3RhdGUuXG4gKiAgLSBQcm9wYWcgKHNjb3BlKSBpbiB0aGUgcmV0dXJuZWQgUmVhY3QgQ29tcG9uZW50IGNvbnRleHRcbiAqXG4gKlxuICogQHBhcmFtIEJhc2VDb21wb25lbnQge1JlYWN0LkNvbXBvbmVudH0gQmFzZSBSZWFjdCBDb21wb25lbnQgKCBkZWZhdWx0IDogUmVhY3QuQ29tcG9uZW50IClcbiAqIEBwYXJhbSBzY29wZSB7UmVTY29wZS5TY29wZXxmdW5jdGlvbn0gdGhlIHByb3BhZ2F0ZWQgU2NvcGUgd2hlcmUgdGhlIHN0b3JlcyB3aWxsIGJlIHNlYXJjaGVkXG4gKiBAcGFyYW0gdXNlIHthcnJheX0gdGhlIGxpc3Qgb2Ygc3RvcmVzIGluamVjdGVkIGZyb20gdGhlIGN1cnJlbnQgc2NvcGVcbiAqIEBwYXJhbSBhZGRpdGlvbmFsQ29udGV4dCB7T2JqZWN0fSBjb250ZXh0IHRvIGJlIHByb3BhZ2F0ZWRcbiAqIEByZXR1cm5zIHtSZVNjb3BlUHJvdmlkZXJ9XG4gKi9cbmZ1bmN0aW9uIHJlU2NvcGVTdGF0ZSggLi4uYXJneiApIHtcbiAgICBsZXQgQmFzZUNvbXBvbmVudCAgICAgPSAoIWFyZ3pbMF0gfHwgYXJnelswXS5wcm90b3R5cGUgJiYgYXJnelswXS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkgJiYgYXJnei5zaGlmdCgpLFxuICAgICAgICBzY29wZSAgICAgICAgICAgICA9ICghYXJnelswXSB8fCBhcmd6WzBdIGluc3RhbmNlb2YgU2NvcGUgfHwgaXMuZm4oYXJnelswXSkpICYmIGFyZ3ouc2hpZnQoKSxcbiAgICAgICAgdXNlICAgICAgICAgICAgICAgPSAoIWFyZ3pbMF0gfHwgaXMuYXJyYXkoYXJnelswXSkpICYmIGFyZ3ouc2hpZnQoKSxcbiAgICAgICAgYWRkaXRpb25hbENvbnRleHQgPSAoIWFyZ3pbMF0gfHwgYXJnelswXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvKSAmJiBhcmd6LnNoaWZ0KCk7XG4gICAgXG4gICAgaWYgKCAhKEJhc2VDb21wb25lbnQgJiYgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUgJiYgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkgKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoIEJhc2VDb21wb25lbnQgKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVTY29wZVN0YXRlKEJhc2VDb21wb25lbnQsIHNjb3BlLCB1c2UsIGFkZGl0aW9uYWxDb250ZXh0KVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHVzZSAgICAgICAgICAgICAgID0gWy4uLihCYXNlQ29tcG9uZW50LnVzZSB8fCBbXSksIC4uLih1c2UgfHwgW10pXTtcbiAgICBhZGRpdGlvbmFsQ29udGV4dCA9IGFkZGl0aW9uYWxDb250ZXh0ICYmIE9iamVjdC5rZXlzKGFkZGl0aW9uYWxDb250ZXh0KS5yZWR1Y2UoKCBoLCBrICkgPT4gKGhba10gPSBQcm9wVHlwZXMuYW55LCBoKSwge30pIHx8IHt9O1xuICAgIFxuICAgIGNsYXNzIFJlU2NvcGVQcm92aWRlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgICAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgICAgICAgICAuLi4oQmFzZUNvbXBvbmVudC5jaGlsZENvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICAuLi4oYWRkaXRpb25hbENvbnRleHQpLFxuICAgICAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgY29udGV4dFR5cGVzICAgICAgPSB7XG4gICAgICAgICAgICAuLi4oQmFzZUNvbXBvbmVudC5jb250ZXh0VHlwZXMgfHwge30pLFxuICAgICAgICAgICAgLi4uKGFkZGl0aW9uYWxDb250ZXh0KSxcbiAgICAgICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGRlZmF1bHRQcm9wcyAgICAgID0ge1xuICAgICAgICAgICAgLi4uKEJhc2VDb21wb25lbnQuZGVmYXVsdFByb3BzIHx8IHt9KSxcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgZGlzcGxheU5hbWUgICAgICAgPSBcInN0YXRlU2NvcGVkKFwiICsgKEJhc2VDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQmFzZUNvbXBvbmVudC5uYW1lKSArIFwiKVwiO1xuICAgICAgICBcbiAgICAgICAgY29uc3RydWN0b3IoIHAsIGN0eCwgcSApIHtcbiAgICAgICAgICAgIHN1cGVyKHAsIGN0eCwgcSk7XG4gICAgICAgICAgICB0aGlzLiRzY29wZSA9XG4gICAgICAgICAgICAgICAgcC5fX3Njb3BlXG4gICAgICAgICAgICAgICAgfHwgaXMuZm4oc2NvcGUpICYmIHNjb3BlKHRoaXMsIHAsIGN0eCkgfHwgc2NvcGVcbiAgICAgICAgICAgICAgICB8fCBjdHgucmVzY29wZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCB0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5kZWFkICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZVNjb3BpbmcgdXNpbmcgZGVhZCBzY29wZVwiKVxuICAgICAgICAgICAgICAgIHRoaXMuJHNjb3BlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy4kc2NvcGUgJiYgaXMuZm4oc2NvcGUpXG4gICAgICAgICAgICAmJiB0aGlzLiRzY29wZS5yZXRhaW4oKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLiRzdG9yZXMgPSB0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5zdG9yZXM7XG4gICAgICAgICAgICBpZiAoIHRoaXMuJHNjb3BlICYmIHVzZS5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy4kc2NvcGUubWFwKHRoaXMsIHVzZSwgZmFsc2UpLy8gZG9uJ3QgYmluZCBub3cgZHVlIHRvIFNTUlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCAhdGhpcy4kc2NvcGUgKVxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyID0gKCkgPT4gPGRpdj5ObyBSZVNjb3BlIGNvbnRleHQgaW4geyBCYXNlQ29tcG9uZW50Lm5hbWUgfTwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAkZGlzcGF0Y2goIC4uLmFyZ3ogKSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5kaXNwYXRjaCguLi5hcmd6KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgICAgICBpZiAoIHVzZS5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2NvcGUuYmluZCh0aGlzLCB1c2UsIGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbE1vdW50ICYmIHN1cGVyLmNvbXBvbmVudFdpbGxNb3VudCgpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQgJiYgc3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdXNlLmxlbmd0aCAmJiB0aGlzLiRzY29wZS51bkJpbmQodGhpcywgdXNlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaXMuZm4oc2NvcGUpICYmIHRoaXMuJHNjb3BlLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuJHN0b3JlcztcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLiRzY29wZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyggbnAsIG5jICkge1xuICAgICAgICAgICAgbGV0IG5TY29wZSA9IG5wLl9fc2NvcGVcbiAgICAgICAgICAgICAgICB8fCBzY29wZSAmJiB0aGlzLiRzY29wZVxuICAgICAgICAgICAgICAgIHx8IG5jLnJlc2NvcGVcbiAgICAgICAgICAgICAgICB8fCB0aGlzLiRzY29wZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBuU2NvcGUgIT0gdGhpcy4kc2NvcGUgKSB7XG4gICAgICAgICAgICAgICAgdXNlLmxlbmd0aCAmJiB0aGlzLiRzY29wZS51bkJpbmQodGhpcywgdXNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzY29wZSA9IG5TY29wZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuJHNjb3BlLmRlYWQgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZVNjb3BpbmcgdXNpbmcgZGVhZCBzY29wZVwiKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZXMgPSB0aGlzLiRzY29wZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZXMgPSB0aGlzLiRzY29wZS5zdG9yZXM7XG4gICAgICAgICAgICAgICAgICAgIHVzZS5sZW5ndGggJiYgblNjb3BlLmJpbmQodGhpcywgdXNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICYmIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnAsIG5jKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICAgICAgbGV0IGN0eCA9IHN1cGVyLmdldENoaWxkQ29udGV4dCAmJiBzdXBlci5nZXRDaGlsZENvbnRleHQoKSB8fCB7fTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICAgIHJlc2NvcGU6IHRoaXMuJHNjb3BlIHx8IHRoaXMuY29udGV4dC5yZXNjb3BlLFxuICAgICAgICAgICAgICAgICRzdG9yZXM6IHRoaXMuJHNjb3BlLnN0b3JlcyB8fCB0aGlzLmNvbnRleHQuJHN0b3Jlc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gUmVTY29wZVByb3ZpZGVyO1xufVxuXG4vKipcbiAqIFJldHVybiBhIFJlYWN0IFwiSE9DXCIgKEhpZ2ggT3JkZXIgQ29tcG9uZW50KSB0aGF0IDpcbiAqICAtIEluamVjdCAmIG1haW50YWluIHRoZSBzdG9yZXMgbGlzdGVkIGJhc2VDb21wb25lbnQ6OnVzZSBhbmQvb3IgKHVzZSkgaW4gdGhlIGluc3RhbmNlcyBwcm9wcy5cbiAqICAtIFByb3BhZyAoc2NvcGUpIGluIHRoZSByZXR1cm5lZCBSZWFjdCBDb21wb25lbnQgY29udGV4dFxuICpcbiAqIEBwYXJhbSBCYXNlQ29tcG9uZW50IHtSZWFjdC5Db21wb25lbnR9IEJhc2UgUmVhY3QgQ29tcG9uZW50ICggZGVmYXVsdCA6IFJlYWN0LkNvbXBvbmVudCApXG4gKiBAcGFyYW0gc2NvcGUge1JlU2NvcGUuU2NvcGV8ZnVuY3Rpb259IHRoZSBwcm9wYWdhdGVkIFNjb3BlIHdoZXJlIHRoZSBzdG9yZXMgd2lsbCBiZSBzZWFyY2hlZCAoIGRlZmF1bHQgOiB0aGUgZGVmYXVsdFxuICogICAgIFJlU2NvcGU6OlNjb3BlOjpzY29wZXMuc3RhdGljIHNjb3BlIClcbiAqIEBwYXJhbSB1c2Uge2FycmF5fSB0aGUgbGlzdCBvZiBzdG9yZXMgdG8gaW5qZWN0IGZyb20gdGhlIGN1cnJlbnQgc2NvcGVcbiAqIEBwYXJhbSBhZGRpdGlvbmFsQ29udGV4dCB7T2JqZWN0fSBjb250ZXh0IHRvIGJlIHByb3BhZ2F0ZWRcbiAqIEByZXR1cm5zIHtSZVNjb3BlUHJvdmlkZXJ9XG4gKi9cbmZ1bmN0aW9uIHJlU2NvcGVQcm9wcyggLi4uYXJneiApIHtcbiAgICBsZXQgQmFzZUNvbXBvbmVudCAgICAgPSAoIWFyZ3pbMF0gfHwgYXJnelswXS5wcm90b3R5cGUgJiYgYXJnelswXS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkgJiYgYXJnei5zaGlmdCgpLFxuICAgICAgICBzY29wZSAgICAgICAgICAgICA9ICghYXJnelswXSB8fCBhcmd6WzBdIGluc3RhbmNlb2YgU2NvcGUgfHwgaXMuZm4oYXJnelswXSkpICYmIGFyZ3ouc2hpZnQoKSxcbiAgICAgICAgdXNlICAgICAgICAgICAgICAgPSAoIWFyZ3pbMF0gfHwgaXMuYXJyYXkoYXJnelswXSkpICYmIGFyZ3ouc2hpZnQoKSxcbiAgICAgICAgYWRkaXRpb25hbENvbnRleHQgPSAoIWFyZ3pbMF0gfHwgYXJnelswXSBpbnN0YW5jZW9mIFNpbXBsZU9iamVjdFByb3RvKSAmJiBhcmd6LnNoaWZ0KCk7XG4gICAgXG4gICAgaWYgKCAhKEJhc2VDb21wb25lbnQgJiYgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUgJiYgQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkgKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoIEJhc2VDb21wb25lbnQgKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVTY29wZVByb3BzKEJhc2VDb21wb25lbnQsIHNjb3BlLCB1c2UsIGFkZGl0aW9uYWxDb250ZXh0KVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHVzZSAgICAgICAgICAgICAgID0gWy4uLihCYXNlQ29tcG9uZW50LnVzZSB8fCBbXSksIC4uLih1c2UgfHwgW10pXTtcbiAgICBhZGRpdGlvbmFsQ29udGV4dCA9IGFkZGl0aW9uYWxDb250ZXh0ICYmIE9iamVjdC5rZXlzKGFkZGl0aW9uYWxDb250ZXh0KS5yZWR1Y2UoKCBoLCBrICkgPT4gKGhba10gPSBQcm9wVHlwZXMuYW55LCBoKSwge30pIHx8IHt9O1xuICAgIFxuICAgIHJldHVybiByZVNjb3BlU3RhdGUoY2xhc3MgUmVTY29wZVByb3BzUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgICAgICAgICAuLi4oQmFzZUNvbXBvbmVudC5jb250ZXh0VHlwZXMgfHwge30pLFxuICAgICAgICAgICAgLi4uKGFkZGl0aW9uYWxDb250ZXh0KSxcbiAgICAgICAgICAgIHJlc2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICAkc3RvcmVzOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgICAgIH07XG4gICAgICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgICAgICA9IHtcbiAgICAgICAgICAgIC4uLihCYXNlQ29tcG9uZW50LmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICAuLi4oYWRkaXRpb25hbENvbnRleHQpLFxuICAgICAgICAgICAgcmVzY29wZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgICRzdG9yZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICAgICAgfTtcbiAgICAgICAgc3RhdGljIGRpc3BsYXlOYW1lICAgICAgID0gXCJwcm9wc1Njb3BlZChcIiArIChCYXNlQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IEJhc2VDb21wb25lbnQubmFtZSkgKyBcIilcIjtcbiAgICAgICAgXG4gICAgICAgIF8kZGlzcGF0Y2ggPSAoIC4uLmFyZ3ogKSA9PiB0aGlzLiRkaXNwYXRjaCguLi5hcmd6KTtcbiAgICAgICAgXG4gICAgICAgIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiA8QmFzZUNvbXBvbmVudCB7IC4uLnRoaXMucHJvcHMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4udGhpcy5zdGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGRpc3BhdGNoPXsgdGhpcy5fJGRpc3BhdGNoIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc3RvcmVzPXsgdGhpcy4kc3RvcmVzIH0vPlxuICAgICAgICB9XG4gICAgfSwgc2NvcGUsIHVzZSk7XG59XG5cbmV4cG9ydCB7XG4gICAgQ29tcG9uZW50IGFzIGRlZmF1bHQsXG4gICAgQ29tcG9uZW50LFxuICAgIHJlU2NvcGVQcm9wcyxcbiAgICByZVNjb3BlUHJvcHMgYXMgcmVzY29wZVByb3BzLFxuICAgIHJlU2NvcGVTdGF0ZSxcbiAgICByZVNjb3BlU3RhdGUgYXMgcmVzY29wZVN0YXRlXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZWFjdEhvY3MuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByb3AtdHlwZXNcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9