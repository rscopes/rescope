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
	
	var _index = __webpack_require__(7);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// will use as external the index in dist
	
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
	
	_index2.default.Scope = _Scope2.default;
	_index2.default.Context = _Scope2.default;
	_index2.default.Store = _Store2.default;
	
	exports.default = _index2.default;
	
	
	try {
	  __webpack_require__(8);
	} catch (e) {}
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
	
	/**
	 * Base Scope object
	 */
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
	     * Init a ReScope scope
	     *
	     * @param storesMap {Object} Object with the initial stores definition / instances
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
	
	        /**
	         * Get current data value from json path
	         * @param path
	         * @returns {string|*}
	         */
	
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
	         * If a store in 'storesRevMap' was updated; add it to 'output' & update storesRevMap
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
	
	        /**
	         * Recursively get all child scopes
	         * @param childs
	         * @returns {Array}
	         * @private
	         */
	
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
	         * Serialize all active stores state & data in every childs & mixed scopes
	         *
	         * Scopes without key or id are ignored
	         * @param output
	         * @returns {{}}
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
	
	        /**
	         * Restore state & data from the serialize fn
	         * @param snapshot
	         * @param force
	         */
	
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
	
	        /**
	         * get a parsed reference
	         * @param _ref
	         * @returns {{storeId, path, alias: *, ref: *}}
	         */
	
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
	
	        /**
	         * Dispatch an action starting from the top parent & mixed scopes, in all stores
	         *
	         * @param action
	         * @param data
	         * @returns {Scope}
	         */
	
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
	
	        /**
	         * Call retain on the scoped stores basing given
	         *
	         * @param stores
	         * @param reason
	         */
	
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
	        /**
	         * Call retain on the scoped stores
	         *
	         * @param stores
	         * @param reason
	         */
	
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
	
	        /**
	         * Keep the scope unstable until release is called
	         * @param reason
	         */
	
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
	
	        /**
	         * Stabilize the scope if no more locks remain (wait fn)
	         * @param reason
	         */
	
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
	
	        /**
	         * Propag stores updates basing theirs last updates
	         */
	
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
	         * Set & Push the result data to followers if stable
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
	
	            this.data = data;
	            this.wait();
	            this.release(cb);
	        }
	
	        /**
	         * Call the apply fn using the current accumulated state update then, push the resulting data if stable
	         * @param force
	         * @returns {boolean}
	         */
	
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
	
	            this.data = nextData;
	            this.wait();
	            this.release();
	        }
	
	        /**
	         * Add 'pState' to the current accumulated state updates
	         * & wait source stores stabilization before pushing these state updates
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
	         * Update the current state & push it
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
	         * Serialize state & data with sources refs
	         * @returns bool
	         */
	
	    }, {
	        key: 'serialize',
	        value: function serialize() {
	            var _this6 = this;
	
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
	
	                if (!_this6.scopeObj.stores[name].scopeObj._.isLocalId) map[alias] = _this6.scopeObj.stores[name].scopeObj._id + '/' + name;
	
	                return map;
	            }, {}) || {};
	            output[this.scopeObj._id + '/' + this.name] = {
	                state: this.state && (completeState ? _extends({}, this.state) : Object.keys(this.state).reduce(function (h, k) {
	                    return !refs[k] && (h[k] = _this6.state[k]), h;
	                }, {})),
	                data: this.data,
	                refs: refs
	            };
	            return output;
	        }
	
	        /**
	         * restore state & data
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
	            var _this7 = this;
	
	            if (this._stable) return cb(null, this.data);
	            this.once('stable', function (e) {
	                return cb(null, _this7.data);
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
	            var _this8 = this;
	
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
	                        _this8._destroyTM = null;
	                        _this8.then(function (s) {
	                            !_this8.__retains.all && _this8.destroy();
	                        });
	                    }, this._persistenceTm);
	                } else {
	                    this.then(function (s) {
	                        return !_this8.__retains.all && _this8.destroy();
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
/***/ (function(module, exports) {

	module.exports = require("./index");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("react-rescope");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGNhMzcxMGIzYjVmN2U2M2VhM2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlU2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Njb3BlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFza1NlcXVlbmNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIuL2luZGV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVzY29wZVwiIl0sIm5hbWVzIjpbIlN0b3JlIiwiU2NvcGUiLCJDb250ZXh0IiwicmVxdWlyZSIsImUiLCJpcyIsIkV2ZW50RW1pdHRlciIsInNob3J0aWQiLCJfX3Byb3RvX19wdXNoIiwidGFyZ2V0IiwiaWQiLCJwYXJlbnQiLCJmbiIsInByb3RvdHlwZSIsIl8iLCJvcGVuU2NvcGVzIiwic2NvcGVzIiwic2tleSIsImFycmF5Iiwic29ydCIsImEiLCJiIiwiZmlyc3RuYW1lIiwiam9pbiIsInN0b3Jlc01hcCIsImtleSIsInN0YXRlIiwiZGF0YSIsIm5hbWUiLCJpbmNyZW1lbnRJZCIsImRlZmF1bHRNYXhMaXN0ZW5lcnMiLCJwZXJzaXN0ZW5jZVRtIiwiYXV0b0Rlc3Ryb3kiLCJyb290RW1pdHRlciIsIm1heExpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwiX2lkIiwiaXNMb2NhbElkIiwiZ2VuZXJhdGUiLCJyZWdpc3RlciIsImkiLCJzdG9yZXMiLCJkZWFkIiwiRXJyb3IiLCJzb3VyY2VzIiwiY2hpbGRTY29wZXMiLCJjaGlsZFNjb3Blc0xpc3QiLCJ1blN0YWJsZUNoaWxkcyIsIl9fcmV0YWlucyIsImFsbCIsIl9fbG9ja3MiLCJfbGlzdGVuaW5nIiwiX3Njb3BlIiwiX21peGVkIiwiX21peGVkTGlzdCIsImZvbGxvd2VycyIsInJldGFpbiIsIl9zdGFibGUiLCJ3YWl0Iiwib24iLCJfcGFyZW50TGlzdCIsInJlbGVhc2UiLCJfcHJvcGFnIiwiX2FkZENoaWxkIiwic2V0VGltZW91dCIsImRpc3Bvc2UiLCJzdG9yZXNMaXN0Iiwic25hcHNob3QiLCJmb3JFYWNoIiwiX21vdW50IiwiayIsImFyZ3VtZW50cyIsInN0b3JlIiwicmVkdWNlIiwibW91bnRlZCIsImN0eCIsInJlc3RvcmUiLCJ1bmRlZmluZWQiLCJzZXRTdGF0ZSIsInB1c2giLCJfd2F0Y2hTdG9yZSIsIl9hdXRvRGVzdHJveSIsImlzU3RhYmxlIiwicHJvcGFnIiwidGFyZ2V0Q3R4IiwibGlzdHMiLCJyZWxpbmsiLCJPYmplY3QiLCJrZXlzIiwic2luZ2xldG9uIiwic3JjQ3R4IiwiZXh0ZXJuYWwiLCJmb3JjZSIsImxjdHgiLCJjb25zb2xlIiwiaW5mbyIsIl9fcHJvdG9fXyIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwic2V0IiwidiIsIm9iaiIsImFzIiwic2V0SW5pdGlhbCIsImxhc3RSZXZzIiwicmVmS2V5cyIsIm1hcCIsInN0cmluZyIsInBhcnNlUmVmIiwicmV2cyIsInJlZiIsInN0b3JlSWQiLCJyZXYiLCJyZWZzIiwibW91bnQiLCJyZXRhaW5TdG9yZXMiLCJnZXRVcGRhdGVzIiwibGVuZ3RoIiwiZGlzcG9zZVN0b3JlcyIsInNwbGljZSIsInRvIiwiYmluZCIsIm1peGVkQ1dVbm1vdW50IiwidW5Nb3VudEtleSIsImlzUmVhY3RDb21wb25lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsInVuQmluZCIsInNwbGl0IiwicmV0cmlldmUiLCJwYXRoIiwic2xpY2UiLCJzdG9yZXNSZXZNYXAiLCJsb2NhbCIsIl9yZXYiLCJ1cGRhdGVkIiwiZ2V0U3RvcmVzUmV2cyIsIm91dHB1dCIsImFsaWFzIiwiY2hpbGRzIiwiX2dldEFsbENoaWxkcyIsInNlcmlhbGl6ZSIsInNuYXAiLCJkZXN0cm95IiwiX3JlZiIsImFjdGlvbiIsImRpc3BhdGNoIiwidHJpZ2dlciIsImNiIiwib25jZSIsInJlYXNvbiIsImVtaXQiLCJlcnJvciIsInN0YWJpbGl6ZXJUTSIsImNsZWFyVGltZW91dCIsInByb3BhZ1RNIiwicmVtYXBzIiwid2FzU3RhYmxlIiwiaW5kZXhPZiIsInVuIiwiZGVzdHJveVRNIiwidGhlbiIsInJlbW92ZUxpc3RlbmVyIiwic2hpZnQiLCJfcm1DaGlsZCIsIkVtaXR0ZXIiLCJfZXZlbnRzIiwiZXZ0IiwiYXJneiIsIlRhc2tTZXF1ZW5jZXIiLCJvYmpQcm90byIsImdldFByb3RvdHlwZU9mIiwiY29tcG9uZW50Iiwic2NvcGUiLCJvcmlnaW4iLCJ0YXJnZXRSZXZzIiwiX3JldnMiLCJ0YXJnZXRTY29wZSIsImluaXRpYWxPdXRwdXRzIiwic3RhdGljU2NvcGUiLCJmaWx0ZXIiLCJkZWZhdWx0TmFtZSIsIm1hdGNoIiwic3Vic3RyIiwiX3NvdXJjZXMiLCJfc3RhdGljIiwiZ2V0U2NvcGUiLCJjZmciLCJ3YXRjaHMiLCJ1c2UiLCJhcHBseSIsImluaXRpYWxTdGF0ZSIsImFwcGxpZWQiLCJfdWlkIiwiX29uU3RhYmlsaXplIiwiX3BlcnNpc3RlbmNlVG0iLCJzY29wZU9iaiIsIl9yZXF1aXJlIiwiX3VzZSIsInJlZjIiLCJfZm9sbG93ZXJzIiwic2hvdWxkQXBwbHkiLCJfY2hhbmdlc1NXIiwibWFuYWdlZCIsIndhcm4iLCJuRGF0YXMiLCJyIiwiY0RhdGFzIiwiaXNDb21wbGV0ZSIsImZvbGxvdyIsImNhbGwiLCJjaGFuZ2VzIiwicmVmaW5lIiwiX3N0YWJpbGl6ZXIiLCJwdXNoVGFzayIsImFjdGlvbnMiLCJucyIsImRvV2FpdCIsInMiLCJoYXNEYXRhQ2hhbmdlIiwic3RhYmxlIiwibmV4dFN0YXRlIiwibmV4dERhdGEiLCJwU3RhdGUiLCJzeW5jIiwiY2hhbmdlIiwicHVzaFN0YXRlIiwic3RhYmlsaXplIiwiY29tcGxldGVTdGF0ZSIsImgiLCJwcmV2aW91cyIsIm1lIiwic2hvdWxkUHJvcGFnIiwiZm9sbG93ZXIiLCJfZGVzdHJveVRNIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwidGFza1F1ZXVlIiwiY3VyV2VpZ2h0IiwibWF4V2VpZ2h0IiwibWluV2VpZ2h0IiwidGFza0NvdW50IiwidGFzayIsImlzUnVubmluZyIsImVycm9yQ2F0Y2hlciIsImxhc3RFcnJvciIsImRpc2FibGUiLCJoYW5kbGVFcnJvciIsInJ1bk5vdyIsImVuYWJsZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9jZXNzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJ1biIsIndlaWdodCIsInN0YWNrIiwiTWF0aCIsIm1heCIsIm1pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNYQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUE0Qjs7QUFFNUIsaUJBQU1BLEtBQU4sbUIsQ0EvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQSxpQkFBTUMsS0FBTjtBQUNBLGlCQUFNQyxPQUFOO0FBQ0EsaUJBQU1GLEtBQU47Ozs7O0FBSUEsS0FBSTtBQUNBRyxHQUFBLG1CQUFBQSxDQUFRLENBQVI7QUFDSCxFQUZELENBRUUsT0FBUUMsQ0FBUixFQUFZLENBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBLEtBQUlDLEtBQWtCLG1CQUFBRixDQUFRLENBQVIsQ0FBdEI7QUFBQSxLQUNJRyxlQUFrQixtQkFBQUgsQ0FBUSxDQUFSLENBRHRCO0FBQUEsS0FFSUksVUFBa0IsbUJBQUFKLENBQVEsQ0FBUixDQUZ0QjtB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cUJBQVltQixLQUFLRSxHQUFMLENBQVNyQixTQUFULEVBQW9CaUIsTUFBcEIsQ0FBWjtBQUNBZDs7QUFFQTtBQUNBZSxlQUFNL0ssSUFBTixDQUFXLENBQUNzQixHQUFELEVBQU16RixFQUFOLEVBQVUySixJQUFWLENBQVg7QUFDQXZHLG9CQUFXc0wsTUFBWDtBQUNBLGdCQUFPUSxNQUFNekksTUFBYjtBQUNIO0FBZFUsRTs7Ozs7OztBQ2pHZixxQzs7Ozs7O0FDQUEsMkMiLCJmaWxlIjoiZGlzdC9SZVNjb3BlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRjYTM3MTBiM2I1ZjdlNjNlYTNiIiwiLypcbiAqIENvcHlyaWdodCAoYykgIDIwMTggV2lzZSBXaWxkIFdlYiAuXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqICBTT0ZUV0FSRS5cbiAqXG4gKiBAYXV0aG9yIDogTmF0aGFuYWVsIEJyYXVuXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cbiAqL1xuXG5pbXBvcnQgU2NvcGUgZnJvbSBcIi4vU2NvcGVcIjtcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi9TdG9yZVwiO1xuaW1wb3J0IGluZGV4IGZyb20gXCIuL2luZGV4XCI7Ly8gd2lsbCB1c2UgYXMgZXh0ZXJuYWwgdGhlIGluZGV4IGluIGRpc3RcblxuU2NvcGUuU3RvcmUgICA9IFN0b3JlO1xuaW5kZXguU2NvcGUgICA9IFNjb3BlO1xuaW5kZXguQ29udGV4dCA9IFNjb3BlO1xuaW5kZXguU3RvcmUgICA9IFN0b3JlO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcblxudHJ5IHtcbiAgICByZXF1aXJlKFwicmVhY3QtcmVzY29wZVwiKTtcbn0gY2F0Y2ggKCBlICkge1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVTY29wZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuXG52YXIgaXMgICAgICAgICAgICAgID0gcmVxdWlyZSgnaXMnKSxcbiAgICBFdmVudEVtaXR0ZXIgICAgPSByZXF1aXJlKCcuL0VtaXR0ZXInKSxcbiAgICBzaG9ydGlkICAgICAgICAgPSByZXF1aXJlKCdzaG9ydGlkJylcbiAgICAsIF9fcHJvdG9fX3B1c2ggPSAoIHRhcmdldCwgaWQsIHBhcmVudCApID0+IHtcbiAgICAgICAgbGV0IGZuICAgICAgID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB9O1xuICAgICAgICBmbi5wcm90b3R5cGUgPSBwYXJlbnQgPyBuZXcgcGFyZW50Ll9baWRdKCkgOiB0YXJnZXRbaWRdIHx8IHt9O1xuICAgICAgICB0YXJnZXRbaWRdICAgPSBuZXcgZm4oKTtcbiAgICAgICAgdGFyZ2V0Ll9baWRdID0gZm47XG4gICAgfSxcbiAgICBvcGVuU2NvcGVzICAgICAgPSB7fVxuO1xuXG4vKipcbiAqIEJhc2UgU2NvcGUgb2JqZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3BlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBzdGF0aWMgcGVyc2lzdGVuY2VUbSAgPSAxOy8vIGlmID4gMCwgd2lsbCB3YWl0ICdwZXJzaXN0ZW5jZVRtJyBtcyBiZWZvcmUgZGVzdHJveSB3aGVuIGRpc3Bvc2UgcmVhY2ggMFxuICAgIHN0YXRpYyBTdG9yZSAgICAgICAgICA9IG51bGw7XG4gICAgc3RhdGljIHNjb3BlcyAgICAgICAgID0gb3BlblNjb3BlczsvLyBhbGwgYWN0aXZlIHNjb3Blc1xuICAgIFxuICAgIHN0YXRpYyBnZXRTY29wZSggc2NvcGVzICkge1xuICAgICAgICBsZXQgc2tleSA9IGlzLmFycmF5KHNjb3BlcykgPyBzY29wZXMuc29ydCgoIGEsIGIgKSA9PiB7XG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lIDwgYi5maXJzdG5hbWUgKSByZXR1cm4gLTE7XG4gICAgICAgICAgICBpZiAoIGEuZmlyc3RuYW1lID4gYi5maXJzdG5hbWUgKSByZXR1cm4gMTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KS5qb2luKCc6OicpIDogc2NvcGVzO1xuICAgICAgICByZXR1cm4gb3BlblNjb3Blc1tza2V5XSA9IG9wZW5TY29wZXNbc2tleV0gfHwgbmV3IFNjb3BlKHt9LCB7IGlkOiBza2V5IH0pO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogSW5pdCBhIFJlU2NvcGUgc2NvcGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yZXNNYXAge09iamVjdH0gT2JqZWN0IHdpdGggdGhlIGluaXRpYWwgc3RvcmVzIGRlZmluaXRpb24gLyBpbnN0YW5jZXNcbiAgICAgKiBAcGFyYW0gaWQge3N0cmluZ30gQG9wdGlvbmFsIGlkICggaWYgdGhpcyBpZCBleGlzdCBzdG9yZXNNYXAgd2lsbCBiZSBtZXJnZSBvbiB0aGUgJ2lkJyBzY29wZSlcbiAgICAgKiBAcGFyYW0gcGFyZW50XG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBkZWZhdWx0TWF4TGlzdGVuZXJzXG4gICAgICogQHBhcmFtIHBlcnNpc3RlbmNlVG0ge251bWJlcikgaWYgPiAwLCB3aWxsIHdhaXQgJ3BlcnNpc3RlbmNlVG0nIG1zIGJlZm9yZSBkZXN0cm95IHdoZW4gZGlzcG9zZSByZWFjaCAwXG4gICAgICogQHBhcmFtIGF1dG9EZXN0cm95ICB7Ym9vbH0gd2lsbCB0cmlnZ2VyIHJldGFpbiAmIGRpc3Bvc2UgYWZ0ZXIgc3RhcnRcbiAgICAgKiBAcmV0dXJucyB7U2NvcGV9XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoIHN0b3Jlc01hcCwgeyBwYXJlbnQsIGtleSwgaWQsIHN0YXRlLCBkYXRhLCBuYW1lLCBpbmNyZW1lbnRJZCA9ICEha2V5LCBkZWZhdWx0TWF4TGlzdGVuZXJzLCBwZXJzaXN0ZW5jZVRtLCBhdXRvRGVzdHJveSwgcm9vdEVtaXR0ZXIgfSA9IHt9ICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgXyA9IHt9O1xuICAgICAgICBcbiAgICAgICAgXy5tYXhMaXN0ZW5lcnMgPSBkZWZhdWx0TWF4TGlzdGVuZXJzIHx8IHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICAgICAgXG4gICAgICAgIGlkID0gaWQgfHwga2V5ICYmICgocGFyZW50ICYmIHBhcmVudC5faWQgfHwgJycpICsgJzo6JyArIGtleSk7XG4gICAgICAgIFxuICAgICAgICBfLmlzTG9jYWxJZCA9ICFpZDtcbiAgICAgICAgXG4gICAgICAgIGlkID0gaWQgfHwgKFwiX19fX19cIiArIHNob3J0aWQuZ2VuZXJhdGUoKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIG9wZW5TY29wZXNbaWRdICYmICFpbmNyZW1lbnRJZCApIHtcbiAgICAgICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgICAgICBvcGVuU2NvcGVzW2lkXS5yZWdpc3RlcihzdG9yZXNNYXApO1xuICAgICAgICAgICAgcmV0dXJuIG9wZW5TY29wZXNbaWRdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIG9wZW5TY29wZXNbaWRdICYmIGluY3JlbWVudElkICkge1xuICAgICAgICAgICAgbGV0IGkgPSAtMTtcbiAgICAgICAgICAgIHdoaWxlICggb3BlblNjb3Blc1tpZCArICdbJyArICgrK2kpICsgJ10nXSApIDtcbiAgICAgICAgICAgIGlkID0gaWQgKyAnWycgKyBpICsgJ10nO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9pZCAgICAgICAgPSBpZDtcbiAgICAgICAgb3BlblNjb3Blc1tpZF0gID0gdGhpcztcbiAgICAgICAgXy5wZXJzaXN0ZW5jZVRtID0gcGVyc2lzdGVuY2VUbSB8fCB0aGlzLmNvbnN0cnVjdG9yLnBlcnNpc3RlbmNlVG07XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0b3JlcyA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlICA9IHt9O1xuICAgICAgICB0aGlzLmRhdGEgICA9IHt9O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuXyAgICAgID0gXztcbiAgICAgICAgXG4gICAgICAgIGlmICggcGFyZW50ICYmIHBhcmVudC5kZWFkIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHVzZSBhIGRlYWQgc2NvcGUgYXMgcGFyZW50ICFcIik7XG4gICAgICAgIFxuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdG9yZXMnLCBwYXJlbnQpO1xuICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdzdGF0ZScsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ2RhdGEnLCBwYXJlbnQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zb3VyY2VzICAgICAgPSBbXTtcbiAgICAgICAgXy5jaGlsZFNjb3BlcyAgICAgPSBbXTtcbiAgICAgICAgXy5jaGlsZFNjb3Blc0xpc3QgPSBbXTtcbiAgICAgICAgXy51blN0YWJsZUNoaWxkcyAgPSAwO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9fbG9ja3MgICA9IHsgYWxsOiAxIH07XG4gICAgICAgIF8uX2xpc3RlbmluZyAgID0ge307XG4gICAgICAgIF8uX3Njb3BlICAgICAgID0ge307XG4gICAgICAgIF8uX21peGVkICAgICAgID0gW107XG4gICAgICAgIF8uX21peGVkTGlzdCAgID0gW107XG4gICAgICAgIF8uZm9sbG93ZXJzICAgID0gW107XG4gICAgICAgIGlmICggcGFyZW50ICkge1xuICAgICAgICAgICAgcGFyZW50LnJldGFpbihcImlzTXlQYXJlbnRcIik7XG4gICAgICAgICAgICBpZiAoICFyb290RW1pdHRlciApIHtcbiAgICAgICAgICAgICAgICAhcGFyZW50Ll9zdGFibGUgJiYgdGhpcy53YWl0KFwid2FpdGluZ1BhcmVudFwiKTtcbiAgICAgICAgICAgICAgICBwYXJlbnQub24oXy5fcGFyZW50TGlzdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ3N0YWJsZScgIDogcyA9PiB0aGlzLnJlbGVhc2UoXCJ3YWl0aW5nUGFyZW50XCIpLFxuICAgICAgICAgICAgICAgICAgICAndW5zdGFibGUnOiBzID0+IHRoaXMud2FpdChcIndhaXRpbmdQYXJlbnRcIiksXG4gICAgICAgICAgICAgICAgICAgICd1cGRhdGUnICA6IHMgPT4gdGhpcy5fcHJvcGFnKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudC5vbihfLl9wYXJlbnRMaXN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJzogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGhpcy5yZWdpc3RlcihwYXJlbnQuX19zY29wZSwgc3RhdGUsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5yZWdpc3RlcihzdG9yZXNNYXAsIHN0YXRlLCBkYXRhKTtcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbC0tO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSAhdGhpcy5fX2xvY2tzLmFsbDtcbiAgICAgICAgXG4gICAgICAgIGlmICggcGFyZW50ICkge1xuICAgICAgICAgICAgcGFyZW50Ll9hZGRDaGlsZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIGF1dG9EZXN0cm95IClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgdG0gPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldGFpbihcImF1dG9EZXN0cm95XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2UoXCJhdXRvRGVzdHJveVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldCBkYXRhcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3Jlc0xpc3QsIGluIHRoaXMgc2NvcGUgb3IgaW4gaXRzIHBhcmVudHMgb3IgbWl4ZWQgc2NvcGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVzTGlzdCB7c3RyaW5nfHN0b3JlUmVmfSBTdG9yZSBuYW1lLCBBcnJheSBvZiBTdG9yZSBuYW1lcywgb3IgUmVzY29wZSBzdG9yZSByZWYgZnJvbSBTdG9yZTo6YXMgb3JcbiAgICAgKiAgICAgU3RvcmU6YXNcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtTY29wZX1cbiAgICAgKi9cbiAgICBtb3VudCggc3RvcmVzTGlzdCwgc25hcHNob3QsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICBpZiAoIGlzLmFycmF5KHN0b3Jlc0xpc3QpICkge1xuICAgICAgICAgICAgc3RvcmVzTGlzdC5mb3JFYWNoKGsgPT4gdGhpcy5fbW91bnQoaywgc25hcHNob3QsIHN0YXRlLCBkYXRhKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VudCguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBfbW91bnQoIGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIGlkICE9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoeyBbaWQubmFtZV06IGlkLnN0b3JlIH0pO1xuICAgICAgICAgICAgaWQgPSBpZC5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl8uX3Njb3BlW2lkXSApIHsvL2FzayBtaXhlZCB8fCBwYXJlbnRcbiAgICAgICAgICAgIGlmICggdGhpcy5fLl9taXhlZC5yZWR1Y2UoKCBtb3VudGVkLCBjdHggKSA9PiAobW91bnRlZCB8fCBjdHguX21vdW50KGlkLCBzbmFwc2hvdCwgc3RhdGUsIGRhdGEpKSwgZmFsc2UpIHx8XG4gICAgICAgICAgICAgICAgIXRoaXMucGFyZW50IClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuX21vdW50KC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgc3RvcmUgPSB0aGlzLl8uX3Njb3BlW2lkXSwgY3R4O1xuICAgICAgICAgICAgaWYgKCBpcy5mbihzdG9yZSkgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fLl9zY29wZVtpZF0gPSBuZXcgc3RvcmUodGhpcywgeyBzbmFwc2hvdCwgbmFtZTogaWQsIHN0YXRlLCBkYXRhIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIHNuYXBzaG90IClcbiAgICAgICAgICAgICAgICBzdG9yZS5yZXN0b3JlKHNuYXBzaG90KTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICggc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBkYXRhID09PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIHN0YXRlICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggZGF0YSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUucHVzaChkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuXy5fc2NvcGVbaWRdO1xuICAgIH1cbiAgICBcbiAgICBfd2F0Y2hTdG9yZSggaWQsIHN0YXRlLCBkYXRhICkge1xuICAgICAgICAvL2lmICggIXRoaXMuX19zY29wZVtpZF0gKSB7Ly9hc2sgbWl4ZWQgfHwgcGFyZW50XG4gICAgICAgIC8vICAgIGlmICggdGhpcy5fX21peGVkLnJlZHVjZSgoIG1vdW50ZWQsIGN0eCApID0+IChtb3VudGVkIHx8IGN0eC5fd2F0Y2hTdG9yZShpZCwgc3RhdGUsIGRhdGEpKSwgZmFsc2UpIHx8XG4gICAgICAgIC8vICAgICAgICAhdGhpcy5wYXJlbnQgKVxuICAgICAgICAvLyAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyAgICByZXR1cm4gdGhpcy5wYXJlbnQuX3dhdGNoU3RvcmUoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLy99XG4gICAgICAgIGlmICggIXRoaXMuXy5fbGlzdGVuaW5nW2lkXSAmJiAhaXMuZm4odGhpcy5fLl9zY29wZVtpZF0pICkge1xuICAgICAgICAgICAgIXRoaXMuXy5fc2NvcGVbaWRdLl9hdXRvRGVzdHJveSAmJiB0aGlzLl8uX3Njb3BlW2lkXS5yZXRhaW4oXCJzY29wZWRcIik7XG4gICAgICAgICAgICAhdGhpcy5fLl9zY29wZVtpZF0uaXNTdGFibGUoKSAmJiB0aGlzLndhaXQoaWQpO1xuICAgICAgICAgICAgdGhpcy5fLl9zY29wZVtpZF0ub24oXG4gICAgICAgICAgICAgICAgdGhpcy5fLl9saXN0ZW5pbmdbaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAnZGVzdHJveScgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl8uX2xpc3RlbmluZ1tpZF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl8uX3Njb3BlW2lkXSA9IHRoaXMuXy5fc2NvcGVbaWRdLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAndXBkYXRlJyAgOiBzID0+IHRoaXMucHJvcGFnKCksXG4gICAgICAgICAgICAgICAgICAgICdzdGFibGUnICA6IHMgPT4gdGhpcy5yZWxlYXNlKGlkKSxcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc3RhYmxlJzogcyA9PiB0aGlzLndhaXQoaWQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1peCB0YXJnZXRDdHggb24gdGhpcyBzY29wZVxuICAgICAqIE1peGVkIHNjb3BlIHBhcmVudHMgYXJlIE5PVCBtYXBwZWRcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q3R4XG4gICAgICovXG4gICAgbWl4aW4oIHRhcmdldEN0eCApIHtcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50LCBsaXN0cztcbiAgICAgICAgdGhpcy5fLl9taXhlZC5wdXNoKHRhcmdldEN0eClcbiAgICAgICAgdGFyZ2V0Q3R4LnJldGFpbihcIm1peGVkVG9cIik7XG4gICAgICAgIGlmICggIXRhcmdldEN0eC5fc3RhYmxlIClcbiAgICAgICAgICAgIHRoaXMud2FpdCh0YXJnZXRDdHguX2lkKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5fbWl4ZWRMaXN0LnB1c2gobGlzdHMgPSB7XG4gICAgICAgICAgICAnc3RhYmxlJyAgOiBzID0+IHRoaXMucmVsZWFzZSh0YXJnZXRDdHguX2lkKSxcbiAgICAgICAgICAgICd1bnN0YWJsZSc6IHMgPT4gdGhpcy53YWl0KHRhcmdldEN0eC5faWQpLFxuICAgICAgICAgICAgJ3VwZGF0ZScgIDogcyA9PiB0aGlzLl9wcm9wYWcoKVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RvcmVzID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgID0ge307XG4gICAgICAgIHRoaXMuZGF0YSAgID0ge307XG4gICAgICAgIHRhcmdldEN0eC5vbihsaXN0cyk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0b3JlcycsIHBhcmVudCk7XG4gICAgICAgIF9fcHJvdG9fX3B1c2godGhpcywgJ3N0YXRlJywgcGFyZW50KTtcbiAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnZGF0YScsIHBhcmVudCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlbGluayh0aGlzLl8uX3Njb3BlLCB0aGlzLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuXy5fbWl4ZWQuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RvcmVzJyk7XG4gICAgICAgICAgICAgICAgX19wcm90b19fcHVzaCh0aGlzLCAnc3RhdGUnKTtcbiAgICAgICAgICAgICAgICBfX3Byb3RvX19wdXNoKHRoaXMsICdkYXRhJyk7XG4gICAgICAgICAgICAgICAgY3R4LnJlbGluayhjdHguXy5fc2NvcGUsIHRoaXMsIHRydWUsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgc3RvcmVzIGluIHN0b3Jlc01hcCAmIGxpbmsgdGhlbSBpbiB0aGUgcHJvdG9zXG4gICAgICogQHBhcmFtIHN0b3Jlc01hcFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcmVnaXN0ZXIoIHN0b3Jlc01hcCwgc3RhdGUgPSB7fSwgZGF0YSA9IHt9ICkge1xuICAgICAgICB0aGlzLnJlbGluayhzdG9yZXNNYXAsIHRoaXMsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0b3Jlc01hcCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIHN0b3Jlc01hcFtpZF0uc2luZ2xldG9uIHx8IChpcy5mbihzdG9yZXNNYXBbaWRdKSAmJiAoc3RhdGVbaWRdIHx8IGRhdGFbaWRdKSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdW50KGlkLCBzdGF0ZVtpZF0sIGRhdGFbaWRdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggc3RhdGVbaWRdIHx8IGRhdGFbaWRdICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGRhdGFbaWRdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBzdGF0ZVtpZF0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzW2lkXS5zdGF0ZSA9IHN0YXRlW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVzW2lkXS5wdXNoKGRhdGFbaWRdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggc3RhdGVbaWRdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZXNbaWRdLnNldFN0YXRlKHN0YXRlW2lkXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dhdGNoU3RvcmUoaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWFwIHNyY0N0eCBzdG9yZSdzIG9uIHRhcmdldEN0eCBoZWFkZXJzIHByb3RvJ3NcbiAgICAgKiBAcGFyYW0gc3JjQ3R4XG4gICAgICogQHBhcmFtIHRhcmdldEN0eFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcmVsaW5rKCBzcmNDdHgsIHRhcmdldEN0eCA9IHRoaXMsIGV4dGVybmFsLCBmb3JjZSApIHtcbiAgICAgICAgbGV0IGxjdHggPSB0YXJnZXRDdHguXy5zdG9yZXMucHJvdG90eXBlO1xuICAgICAgICBPYmplY3Qua2V5cyhzcmNDdHgpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWZvcmNlICYmIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gPT09IHNyY0N0eFtpZF0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSAmJiAodGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXS5jb25zdHJ1Y3RvciA9PT0gc3JjQ3R4W2lkXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZm9yY2UgJiYgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZXh0ZXJuYWwgJiYgIWlzLmZuKHRhcmdldEN0eC5fLl9zY29wZVtpZF0pICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiUmVzY29wZSBTdG9yZSA6IFwiLCBpZCwgXCIgYWxyZWFkeSBleGlzdCBpbiB0aGlzIHNjb3BlICEgKCB0cnkgX19wcm90b19fIGhvdCBwYXRjaCApXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll8uX3Njb3BlW2lkXS5fX3Byb3RvX18gPSBzcmNDdHhbaWRdLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWV4dGVybmFsICYmIGlzLmZuKHRhcmdldEN0eC5fLl9zY29wZVtpZF0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLl9zY29wZVtpZF0gPSBzcmNDdHhbaWRdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggIWZvcmNlICYmICFleHRlcm5hbCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbaWRdID0gc3JjQ3R4W2lkXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxjdHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+IHRoaXMuXy5fc2NvcGVbaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q3R4Ll8uc3RhdGUucHJvdG90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiAodGhpcy5fLl9zY29wZVtpZF0gJiYgdGhpcy5fLl9zY29wZVtpZF0uc3RhdGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAoIHYgKSA9PiAodGhpcy5fbW91bnQoaWQsIG51bGwsIHYpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEN0eC5fLmRhdGEucHJvdG90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiAodGhpcy5fLl9zY29wZVtpZF0gJiYgdGhpcy5fLl9zY29wZVtpZF0uZGF0YSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICggdiApID0+ICh0aGlzLl9tb3VudChpZCwgdW5kZWZpbmVkLCB2KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQmluZCBzdG9yZXMgZnJvbSB0aGlzIHNjb3BlLCBoaXMgcGFyZW50cyBhbmQgbWl4ZWQgc2NvcGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbn1cbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IHN0b3JlcyBrZXlzIHRvIGJpbmQgdXBkYXRlc1xuICAgICAqIEBwYXJhbSBhc1xuICAgICAqIEBwYXJhbSBzZXRJbml0aWFsIHtib29sfSBmYWxzZSB0byBub3QgcHJvcGFnIGluaXRpYWwgdmFsdWUgKGRlZmF1bHQgOiB0cnVlKVxuICAgICAqL1xuICAgIGJpbmQoIG9iaiwga2V5LCBhcywgc2V0SW5pdGlhbCA9IHRydWUgKSB7XG4gICAgICAgIGxldCBsYXN0UmV2cywgZGF0YSwgcmVmS2V5cztcbiAgICAgICAgaWYgKCBrZXkgJiYgIWlzLmFycmF5KGtleSkgKVxuICAgICAgICAgICAga2V5ID0gW2tleV07XG4gICAgICAgIFxuICAgICAgICBpZiAoIGFzID09PSBmYWxzZSB8fCBhcyA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIHNldEluaXRpYWwgPSBhcztcbiAgICAgICAgICAgIGFzICAgICAgICAgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZWZLZXlzID0ga2V5XG4gICAgICAgICAgICAubWFwKGlkID0+IChpcy5zdHJpbmcoaWQpID8gaWQgOiBpZC5uYW1lKSlcbiAgICAgICAgICAgIC5tYXAoaWQgPT4gKHRoaXMucGFyc2VSZWYoaWQpKSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5fLmZvbGxvd2Vycy5wdXNoKFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIG9iaixcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgYXMgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGxhc3RSZXZzID0gcmVmS2V5cy5yZWR1Y2UoKCByZXZzLCByZWYgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldnNbcmVmLnN0b3JlSWRdID0gcmV2c1tyZWYuc3RvcmVJZF0gfHwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV2IDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZnM6IFtdXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldnNbcmVmLnN0b3JlSWRdLnJlZnMucHVzaChyZWYpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV2cztcbiAgICAgICAgICAgICAgICB9LCB7fSlcbiAgICAgICAgICAgIF0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tb3VudChrZXkpO1xuICAgICAgICB0aGlzLnJldGFpblN0b3JlcyhPYmplY3Qua2V5cyhsYXN0UmV2cykpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzZXRJbml0aWFsICYmIHRoaXMuX3N0YWJsZSApIHtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLmdldFVwZGF0ZXMobGFzdFJldnMpO1xuICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBvYmouc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmooZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVuIGJpbmQgdGhpcyBzY29wZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlzXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICAgICAqL1xuICAgIHVuQmluZCggb2JqLCBrZXksIGFzICkge1xuICAgICAgICB2YXIgZm9sbG93ZXJzID0gdGhpcy5fLmZvbGxvd2VycyxcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJiAoJycgKyBmb2xsb3dlcnNbaV1bMV0pID09ICgnJyArIGtleSkgJiZcbiAgICAgICAgICAgICAgICBmb2xsb3dlcnNbaV1bMl0gPT0gYXMgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlU3RvcmVzKE9iamVjdC5rZXlzKGZvbGxvd2Vyc1tpXVszXSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNb3VudCB0aGUgc3RvcmVzIGluIHN0b3Jlc0xpc3QgZnJvbSB0aGlzIHNjb3BlLCBpdHMgcGFyZW50cyBhbmQgbWl4ZWQgc2NvcGVcbiAgICAgKiBCaW5kIHRoZW0gdG8gJ3RvJ1xuICAgICAqIEhvb2sgJ3RvJyBzbyBpdCB3aWxsIGF1dG8gdW5iaW5kIG9uICdkZXN0cm95JyBvciAnY29tcG9uZW50V2lsbFVubW91bnQnXG4gICAgICogQHBhcmFtIHRvXG4gICAgICogQHBhcmFtIHN0b3Jlc0xpc3RcbiAgICAgKiBAcGFyYW0gYmluZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IEluaXRpYWwgb3V0cHV0cyBvZiB0aGUgc3RvcmVzIGluICdzdG9yZXNMaXN0J1xuICAgICAqL1xuICAgIG1hcCggdG8sIHN0b3Jlc0xpc3QsIGJpbmQgPSB0cnVlICkge1xuICAgICAgICBsZXQgU3RvcmUgID0gdGhpcy5jb25zdHJ1Y3Rvci5TdG9yZTtcbiAgICAgICAgc3RvcmVzTGlzdCA9IGlzLmFycmF5KHN0b3Jlc0xpc3QpID8gc3RvcmVzTGlzdCA6IFtzdG9yZXNMaXN0XTtcbiAgICAgICAgdGhpcy5tb3VudChzdG9yZXNMaXN0KTtcbiAgICAgICAgaWYgKCBiaW5kICYmIHRvIGluc3RhbmNlb2YgU3RvcmUgKSB7XG4gICAgICAgICAgICBTdG9yZS5tYXAodG8sIHN0b3Jlc0xpc3QsIHRoaXMsIHRoaXMsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBiaW5kICkge1xuICAgICAgICAgICAgdGhpcy5iaW5kKHRvLCBzdG9yZXNMaXN0LCB1bmRlZmluZWQsIGZhbHNlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG1peGVkQ1dVbm1vdW50LFxuICAgICAgICAgICAgICAgIHVuTW91bnRLZXkgPSB0by5pc1JlYWN0Q29tcG9uZW50ID8gXCJjb21wb25lbnRXaWxsVW5tb3VudFwiIDogXCJkZXN0cm95XCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggdG8uaGFzT3duUHJvcGVydHkodW5Nb3VudEtleSkgKSB7XG4gICAgICAgICAgICAgICAgbWl4ZWRDV1VubW91bnQgPSB0b1t1bk1vdW50S2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9bdW5Nb3VudEtleV0gPSAoIC4uLmFyZ3ogKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRvW3VuTW91bnRLZXldO1xuICAgICAgICAgICAgICAgIGlmICggbWl4ZWRDV1VubW91bnQgKVxuICAgICAgICAgICAgICAgICAgICB0b1t1bk1vdW50S2V5XSA9IG1peGVkQ1dVbm1vdW50O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMudW5CaW5kKHRvLCBzdG9yZXNMaXN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9bdW5Nb3VudEtleV0gJiYgdG9bdW5Nb3VudEtleV0oLi4uYXJneik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcmVzTGlzdC5yZWR1Y2UoKCBkYXRhLCBpZCApID0+IHtcbiAgICAgICAgICAgIGlmICggIWlzLnN0cmluZyhpZCkgKVxuICAgICAgICAgICAgICAgIGlkID0gaWQubmFtZTtcbiAgICAgICAgICAgIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gaWQuc3BsaXQoJzonKTsvL0B0b2RvXG4gICAgICAgICAgICBpZFswXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGlkWzBdLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICBkYXRhW2lkWzFdIHx8IGlkWzBdW2lkWzBdLmxlbmd0aCAtIDFdXSA9IHRoaXMuc3RvcmVzW2lkWzBdWzBdXSAmJiB0aGlzLnN0b3Jlc1tpZFswXVswXV0ucmV0cmlldmUgJiYgdGhpcy5zdG9yZXNbaWRbMF1bMF1dLnJldHJpZXZlKGlkWzBdLnNwbGljZSgxKSk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSwge30pO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgY3VycmVudCBkYXRhIHZhbHVlIGZyb20ganNvbiBwYXRoXG4gICAgICogQHBhcmFtIHBhdGhcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfCp9XG4gICAgICovXG4gICAgcmV0cmlldmUoIHBhdGggPSBcIlwiICkge1xuICAgICAgICBwYXRoID0gaXMuc3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aDtcbiAgICAgICAgcmV0dXJuIHBhdGggJiYgdGhpcy5zdG9yZXNbcGF0aFswXV0gJiZcbiAgICAgICAgICAgIHRoaXMuc3RvcmVzW3BhdGhbMF1dLnJldHJpZXZlKHBhdGguc2xpY2UoMSkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgb3IgdXBkYXRlIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9uc1xuICAgICAqIEBwYXJhbSBzdG9yZXNSZXZNYXBcbiAgICAgKiBAcGFyYW0gbG9jYWxcbiAgICAgKiBAcmV0dXJucyB7e319XG4gICAgICovXG4gICAgZ2V0U3RvcmVzUmV2cyggc3RvcmVzUmV2TWFwID0ge30sIGxvY2FsICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcbiAgICAgICAgaWYgKCAhc3RvcmVzUmV2TWFwICkge1xuICAgICAgICAgICAgc3RvcmVzUmV2TWFwID0ge307XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggIWlzLmZuKGN0eFtpZF0pXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFtpZF0gPSBjdHhbaWRdLl9yZXY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSApXG4gICAgICAgICAgICAgICAgICAgIHN0b3Jlc1Jldk1hcFtpZF0gPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBpZiAoICFsb2NhbCApIHtcbiAgICAgICAgICAgIHRoaXMuXy5fbWl4ZWQucmVkdWNlKCggdXBkYXRlZCwgY3R4ICkgPT4gKGN0eC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCksIHN0b3Jlc1Jldk1hcCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRTdG9yZXNSZXZzKHN0b3Jlc1Jldk1hcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3Jlc1Jldk1hcDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IG9yIHVwZGF0ZSBvdXRwdXQgYmFzaW5nIHN0b3Jlc1Jldk1hcCdzIHJldmlzaW9ucy5cbiAgICAgKiBJZiBhIHN0b3JlIGluICdzdG9yZXNSZXZNYXAnIHdhcyB1cGRhdGVkOyBhZGQgaXQgdG8gJ291dHB1dCcgJiB1cGRhdGUgc3RvcmVzUmV2TWFwXG4gICAgICogQHBhcmFtIHN0b3Jlc1Jldk1hcFxuICAgICAqIEBwYXJhbSBvdXRwdXRcbiAgICAgKiBAcGFyYW0gdXBkYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfHt9fVxuICAgICAqL1xuICAgIGdldFVwZGF0ZXMoIHN0b3Jlc1Jldk1hcCwgb3V0cHV0LCB1cGRhdGVkICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcbiAgICAgICAgXG4gICAgICAgIG91dHB1dCA9IG91dHB1dCB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoY3R4KS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggIW91dHB1dC5oYXNPd25Qcm9wZXJ0eShpZCkgJiYgIWlzLmZuKGN0eFtpZF0pXG4gICAgICAgICAgICAgICAgICAgICYmICghc3RvcmVzUmV2TWFwXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAoc3RvcmVzUmV2TWFwLmhhc093blByb3BlcnR5KGlkKSAmJiBzdG9yZXNSZXZNYXBbaWRdID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAhKCFzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpIHx8IGN0eFtpZF0uX3JldiA8PSBzdG9yZXNSZXZNYXBbaWRdLnJldikpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2lkXSA9IHRoaXMuZGF0YVtpZF07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIHN0b3Jlc1Jldk1hcCAmJiBzdG9yZXNSZXZNYXAuaGFzT3duUHJvcGVydHkoaWQpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVzUmV2TWFwW2lkXS5yZXYgPSBjdHhbaWRdLl9yZXY7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZXNSZXZNYXBbaWRdLnJlZnMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUud2FybihcInVwZGF0ZSByZWYgXCIsIHJlZi5yZWYsIHRoaXMucmV0cmlldmUocmVmLnBhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0W3JlZi5hbGlhc10gPSB0aGlzLnJldHJpZXZlKHJlZi5wYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUud2FybihcInVwZGF0ZSBcIiwgaWQsIHRoaXMuZGF0YVtpZF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2lkXSA9IHRoaXMuZGF0YVtpZF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB1cGRhdGVkID0gdGhpcy5fLl9taXhlZC5yZWR1Y2UoKCB1cGRhdGVkLCBjdHggKSA9PiAoY3R4LmdldFVwZGF0ZXMoc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQpLCB1cGRhdGVkKTtcbiAgICAgICAgdXBkYXRlZCA9IHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldFVwZGF0ZXMoc3RvcmVzUmV2TWFwLCBvdXRwdXQsIHVwZGF0ZWQpIHx8IHVwZGF0ZWQ7XG4gICAgICAgIHJldHVybiB1cGRhdGVkICYmIG91dHB1dDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmVjdXJzaXZlbHkgZ2V0IGFsbCBjaGlsZCBzY29wZXNcbiAgICAgKiBAcGFyYW0gY2hpbGRzXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2dldEFsbENoaWxkcyggY2hpbGRzID0gW10gKSB7XG4gICAgICAgIGNoaWxkcy5wdXNoKC4uLnRoaXMuXy5jaGlsZFNjb3Blcyk7XG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICBjdHguX2dldEFsbENoaWxkcyhjaGlsZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gY2hpbGRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemUgYWxsIGFjdGl2ZSBzdG9yZXMgc3RhdGUgJiBkYXRhIGluIGV2ZXJ5IGNoaWxkcyAmIG1peGVkIHNjb3Blc1xuICAgICAqXG4gICAgICogU2NvcGVzIHdpdGhvdXQga2V5IG9yIGlkIGFyZSBpZ25vcmVkXG4gICAgICogQHBhcmFtIG91dHB1dFxuICAgICAqIEByZXR1cm5zIHt7fX1cbiAgICAgKi9cbiAgICBzZXJpYWxpemUoIG91dHB1dCA9IHt9ICkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5fLl9zY29wZTtcbiAgICAgICAgaWYgKCBvdXRwdXRbdGhpcy5faWRdIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIG91dHB1dFt0aGlzLl9pZF0gPSB7fTtcbiAgICAgICAgXG4gICAgICAgIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGlzLmZuKGN0eFtpZF0pIClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGN0eFtpZF0uc2VyaWFsaXplKG91dHB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blcy5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5zZXJpYWxpemUob3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuXy5fbWl4ZWQuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgIWN0eC5fLmlzTG9jYWxJZCAmJiBjdHguc2VyaWFsaXplKG91dHB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXN0b3JlIHN0YXRlICYgZGF0YSBmcm9tIHRoZSBzZXJpYWxpemUgZm5cbiAgICAgKiBAcGFyYW0gc25hcHNob3RcbiAgICAgKiBAcGFyYW0gZm9yY2VcbiAgICAgKi9cbiAgICByZXN0b3JlKCBzbmFwc2hvdCwgZm9yY2UgKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLl8uX3Njb3BlO1xuICAgICAgICBcbiAgICAgICAgc25hcHNob3RbdGhpcy5faWRdICYmIE9iamVjdC5rZXlzKGN0eCkuZm9yRWFjaChcbiAgICAgICAgICAgIG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzbmFwID0gc25hcHNob3RbdGhpcy5faWQgKyAnLycgKyBuYW1lXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIHNuYXAgKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZvcmNlICYmICFpcy5mbihjdHhbbmFtZV0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eFtuYW1lXS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdW50KG5hbWUsIHNuYXBzaG90KTsvLyBxdWlldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fLl9taXhlZC5mb3JFYWNoKFxuICAgICAgICAgICAgY3R4ID0+IHtcbiAgICAgICAgICAgICAgICAhY3R4Ll8uaXNMb2NhbElkICYmIGN0eC5yZXN0b3JlKHNuYXBzaG90LCBmb3JjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl8uY2hpbGRTY29wZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGN0eCA9PiB7XG4gICAgICAgICAgICAgICAgIWN0eC5fLmlzTG9jYWxJZCAmJiBjdHgucmVzdG9yZShzbmFwc2hvdCwgZm9yY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogZ2V0IGEgcGFyc2VkIHJlZmVyZW5jZVxuICAgICAqIEBwYXJhbSBfcmVmXG4gICAgICogQHJldHVybnMge3tzdG9yZUlkLCBwYXRoLCBhbGlhczogKiwgcmVmOiAqfX1cbiAgICAgKi9cbiAgICBwYXJzZVJlZiggX3JlZiApIHtcbiAgICAgICAgbGV0IHJlZiA9IF9yZWYuc3BsaXQoJzonKTtcbiAgICAgICAgcmVmWzBdICA9IHJlZlswXS5zcGxpdCgnLicpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RvcmVJZDogcmVmWzBdWzBdLFxuICAgICAgICAgICAgcGF0aCAgIDogcmVmWzBdLFxuICAgICAgICAgICAgYWxpYXMgIDogcmVmWzFdIHx8IHJlZlswXVtyZWZbMF0ubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgICByZWYgICAgOiBfcmVmXG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERpc3BhdGNoIGFuIGFjdGlvbiBzdGFydGluZyBmcm9tIHRoZSB0b3AgcGFyZW50ICYgbWl4ZWQgc2NvcGVzLCBpbiBhbGwgc3RvcmVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYWN0aW9uXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7U2NvcGV9XG4gICAgICovXG4gICAgZGlzcGF0Y2goIGFjdGlvbiwgZGF0YSApIHtcbiAgICAgICAgdGhpcy5fLl9taXhlZC5mb3JFYWNoKCggY3R4ICkgPT4gKGN0eC5kaXNwYXRjaChhY3Rpb24sIGRhdGEpKSk7XG4gICAgICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmRpc3BhdGNoKGFjdGlvbiwgZGF0YSk7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuXy5fc2NvcGUpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICggIWlzLmZuKHRoaXMuXy5fc2NvcGVbaWRdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuXy5fc2NvcGVbaWRdLnRyaWdnZXIoYWN0aW9uLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIG9uY2UoJ3N0YWJsZScsIGNiKVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIHRoZW4oIGNiICkge1xuICAgICAgICBpZiAoIHRoaXMuX3N0YWJsZSApXG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgdGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5vbmNlKCdzdGFibGUnLCBlID0+IGNiKG51bGwsIHRoaXMuZGF0YSkpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBDYWxsIHJldGFpbiBvbiB0aGUgc2NvcGVkIHN0b3JlcyBiYXNpbmcgZ2l2ZW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yZXNcbiAgICAgKiBAcGFyYW0gcmVhc29uXG4gICAgICovXG4gICAgcmV0YWluU3RvcmVzKCBzdG9yZXMgPSBbXSwgcmVhc29uICkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaChcbiAgICAgICAgICAgIGlkID0+ICh0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLnJldGFpbiAmJiB0aGlzLnN0b3Jlc1tpZF0ucmV0YWluKHJlYXNvbikpXG4gICAgICAgIClcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbCByZXRhaW4gb24gdGhlIHNjb3BlZCBzdG9yZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yZXNcbiAgICAgKiBAcGFyYW0gcmVhc29uXG4gICAgICovXG4gICAgZGlzcG9zZVN0b3Jlcyggc3RvcmVzID0gW10sIHJlYXNvbiApIHtcbiAgICAgICAgc3RvcmVzLmZvckVhY2goXG4gICAgICAgICAgICBpZCA9PiAodGhpcy5zdG9yZXNbaWRdICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlICYmIHRoaXMuc3RvcmVzW2lkXS5kaXNwb3NlKHJlYXNvbikpXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogS2VlcCB0aGUgc2NvcGUgdW5zdGFibGUgdW50aWwgcmVsZWFzZSBpcyBjYWxsZWRcbiAgICAgKiBAcGFyYW0gcmVhc29uXG4gICAgICovXG4gICAgd2FpdCggcmVhc29uICkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwid2FpdFwiLCByZWFzb24pO1xuICAgICAgICB0aGlzLl9zdGFibGUgJiYgIXRoaXMuX19sb2Nrcy5hbGwgJiYgdGhpcy5lbWl0KFwidW5zdGFibGVcIiwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsKys7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBcbiAgICAvKipcbiAgICAgKiBTdGFiaWxpemUgdGhlIHNjb3BlIGlmIG5vIG1vcmUgbG9ja3MgcmVtYWluICh3YWl0IGZuKVxuICAgICAqIEBwYXJhbSByZWFzb25cbiAgICAgKi9cbiAgICByZWxlYXNlKCByZWFzb24gKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICFyZWFzb24gJiYgdGhpcy5fX2xvY2tzLmFsbCA9PSAwIClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWxlYXNlIG1vcmUgdGhhbiBsb2NraW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fbG9ja3MuYWxsLS07XG4gICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICB0aGlzLl8uc3RhYmlsaXplclRNICYmIGNsZWFyVGltZW91dCh0aGlzLl8uc3RhYmlsaXplclRNKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fLnN0YWJpbGl6ZXJUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy5zdGFiaWxpemVyVE0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuX19sb2Nrcy5hbGwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnByb3BhZ1RNICYmIGNsZWFyVGltZW91dCh0aGlzLl8ucHJvcGFnVE0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlXCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuZGVhZCAmJiB0aGlzLl9wcm9wYWcoKTsvLyBzdGFiaWxpdHkgY2FuIGluZHVjZSBkZXN0cm95XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUHJvcGFnIHN0b3JlcyB1cGRhdGVzIGJhc2luZyB0aGVpcnMgbGFzdCB1cGRhdGVzXG4gICAgICovXG4gICAgcHJvcGFnKCkge1xuICAgICAgICB0aGlzLl8ucHJvcGFnVE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5wcm9wYWdUTSk7XG4gICAgICAgIHRoaXMuXy5wcm9wYWdUTSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl8ucHJvcGFnVE0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BhZygpXG4gICAgICAgICAgICB9LCAyXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIF9wcm9wYWcoKSB7XG4gICAgICAgIGlmICggdGhpcy5fLmZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fLmZvbGxvd2Vycy5mb3JFYWNoKCggeyAwOiBvYmosIDE6IGtleSwgMjogYXMsIDM6IGxhc3RSZXZzLCAzOiByZW1hcHMgfSApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0VXBkYXRlcyhsYXN0UmV2cyk7XG4gICAgICAgICAgICAgICAgaWYgKCAhZGF0YSApIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBvYmogIT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwic2V0U3RhdGUgXCIsb2JqLCBPYmplY3Qua2V5cyhkYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBhcyApIG9iai5zZXRTdGF0ZSh7IFthc106IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Ugb2JqLnNldFN0YXRlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqKGRhdGEsIGxhc3RSZXZzICYmIFsuLi5sYXN0UmV2c10gfHwgXCJubyByZXZzXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBsYXN0UmV2cyAmJlxuICAgICAgICAgICAgICAgIC8vIGtleS5mb3JFYWNoKGlkID0+IChsYXN0UmV2c1tpZF0gPSB0aGlzLnN0b3Jlc1tpZF0gJiYgdGhpcy5zdG9yZXNbaWRdLl9yZXYgfHwgMCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW1pdChcInVwZGF0ZVwiLCB0aGlzLmdldFVwZGF0ZXMoKSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIGlzIHN0YWJsZVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICBpc1N0YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWJsZTtcbiAgICB9XG4gICAgXG4gICAgX2FkZENoaWxkKCBjdHggKSB7XG4gICAgICAgIHRoaXMuXy5jaGlsZFNjb3Blcy5wdXNoKGN0eCk7XG4gICAgICAgIGxldCBsaXN0cyAgICAgPSB7XG4gICAgICAgICAgICAgICAgJ3N0YWJsZScgICAgICA6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd1bnN0YWJsZScgICAgOiBzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgICAgICAgICAgICAgIGlmICggMSA9PSB0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidW5zdGFibGVUcmVlXCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnc3RhYmxlVHJlZScgIDogcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3Vuc3RhYmxlVHJlZSc6IHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAxID09IHRoaXMuXy51blN0YWJsZUNoaWxkcyApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJ1bnN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdkZXN0cm95JyAgICAgOiBjdHggPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGN0eC5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoICFjdHguaXNTdGFibGUoKSApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIiwgdGhpcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2FzU3RhYmxlID0gdGhpcy5fLnVuU3RhYmxlQ2hpbGRzO1xuICAgICAgICAvLyFjdHguaXNTdGFibGUoKSAmJiBjb25zb2xlLndhcm4oJ2FkZCB1bnN0YWJsZSBjaGlsZCcpO1xuICAgICAgICAhY3R4LmlzU3RhYmxlKCkgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzKys7XG4gICAgICAgIGN0eC5fLnVuU3RhYmxlQ2hpbGRzICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcysrO1xuICAgICAgICB0aGlzLl8uY2hpbGRTY29wZXNMaXN0LnB1c2gobGlzdHMpO1xuICAgICAgICBpZiAoICF3YXNTdGFibGUgJiYgdGhpcy5fLnVuU3RhYmxlQ2hpbGRzIClcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInVuc3RhYmxlVHJlZVwiLCB0aGlzKVxuICAgICAgICBjdHgub24obGlzdHMpO1xuICAgIH1cbiAgICBcbiAgICBfcm1DaGlsZCggY3R4ICkge1xuICAgICAgICBsZXQgaSAgICAgICAgID0gdGhpcy5fLmNoaWxkU2NvcGVzLmluZGV4T2YoY3R4KSxcbiAgICAgICAgICAgIHdhc1N0YWJsZSA9IHRoaXMuXy51blN0YWJsZUNoaWxkcztcbiAgICAgICAgaWYgKCBpICE9IC0xICkge1xuICAgICAgICAgICAgdGhpcy5fLmNoaWxkU2NvcGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICFjdHguaXNTdGFibGUoKSAmJiB0aGlzLl8udW5TdGFibGVDaGlsZHMtLTtcbiAgICAgICAgICAgIGN0eC5fLnVuU3RhYmxlQ2hpbGRzICYmIHRoaXMuXy51blN0YWJsZUNoaWxkcy0tO1xuICAgICAgICAgICAgY3R4LnVuKHRoaXMuXy5jaGlsZFNjb3Blc0xpc3Quc3BsaWNlKGksIDEpWzBdKTtcbiAgICAgICAgICAgIGlmICggd2FzU3RhYmxlICYmICF0aGlzLl8udW5TdGFibGVDaGlsZHMgKVxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInN0YWJsZVRyZWVcIilcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXRhaW4oIHJlYXNvbiApIHtcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsKys7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZXRhaW5cIiwgdGhpcy5faWQsIHJlYXNvbik7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSA9IHRoaXMuX19yZXRhaW5zW3JlYXNvbl0gfHwgMDtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkaXNwb3NlKCByZWFzb24gKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJkaXNwb3NlXCIsIHRoaXMuX2lkLCByZWFzb24pO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zW3JlYXNvbl0gKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyA6IFwiICsgcmVhc29uKTtcbiAgICAgICAgICAgIHRoaXMuX19yZXRhaW5zW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5fX3JldGFpbnMuYWxsIClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMuYWxsLS07XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLl9fcmV0YWlucy5hbGwgKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzcG9zZSBkbyBkZXN0cm95IFwiLCB0aGlzLl9pZCwgdGhpcy5fcGVyc2lzdGVuY2VUbSk7XG4gICAgICAgICAgICBpZiAoIHRoaXMuXy5wZXJzaXN0ZW5jZVRtICkge1xuICAgICAgICAgICAgICAgIHRoaXMuXy5kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuXy5kZXN0cm95VE0pO1xuICAgICAgICAgICAgICAgIHRoaXMuXy5kZXN0cm95VE0gPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fLnBlcnNpc3RlbmNlVG1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4gKCF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvcmRlciBkZXN0cm95IG9mIGxvY2FsIHN0b3Jlc1xuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBjdHggICA9IHRoaXMuXy5fc2NvcGU7XG4gICAgICAgIC8vY29uc29sZS53YXJuKFwiZGVzdHJveVwiLCB0aGlzLl9pZCk7XG4gICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZW1pdChcImRlc3Ryb3lcIiwgdGhpcyk7XG4gICAgICAgIGZvciAoIGxldCBrZXkgaW4gY3R4IClcbiAgICAgICAgICAgIGlmICggIWlzLmZuKGN0eFtrZXldKSApIHtcbiAgICAgICAgICAgICAgICAhY3R4W2tleV0uX2F1dG9EZXN0cm95ICYmIGN0eFtrZXldLmRpc3Bvc2UoXCJzY29wZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIE9iamVjdC5rZXlzKFxuICAgICAgICAgICAgdGhpcy5fLl9saXN0ZW5pbmdcbiAgICAgICAgKS5mb3JFYWNoKFxuICAgICAgICAgICAgaWQgPT4gdGhpcy5fLl9zY29wZVtpZF0ucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9saXN0ZW5pbmdbaWRdKVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fLnN0YWJpbGl6ZXJUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnN0YWJpbGl6ZXJUTSk7XG4gICAgICAgIHRoaXMuXy5wcm9wYWdUTSAmJiBjbGVhclRpbWVvdXQodGhpcy5fLnByb3BhZ1RNKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuXy5pc0xvY2FsSWQgKVxuICAgICAgICAgICAgZGVsZXRlIG9wZW5TY29wZXNbdGhpcy5faWRdO1xuICAgICAgICB0aGlzLl8uZm9sbG93ZXJzLm1hcCh0aGlzLnVuQmluZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgXG4gICAgICAgIHdoaWxlICggdGhpcy5fLl9taXhlZExpc3QubGVuZ3RoICkge1xuICAgICAgICAgICAgdGhpcy5fLl9taXhlZFswXS5yZW1vdmVMaXN0ZW5lcih0aGlzLl8uX21peGVkTGlzdC5zaGlmdCgpKTtcbiAgICAgICAgICAgIHRoaXMuXy5fbWl4ZWQuc2hpZnQoKS5kaXNwb3NlKFwibWl4ZWRUb1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMuXy5fcGFyZW50TGlzdCApIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Ll9ybUNoaWxkKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5fLl9wYXJlbnRMaXN0KTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmRpc3Bvc2UoXCJpc015UGFyZW50XCIpO1xuICAgICAgICAgICAgdGhpcy5fLl9wYXJlbnRMaXN0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl8gPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TY29wZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqICBcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqICBcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogIFxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogIFNPRlRXQVJFLlxuICogIFxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cbnZhciBpcyA9IHJlcXVpcmUoJ2lzJyk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWl0dGVyIHtcbiAgICBfZXZlbnRzID0ge307XG4gICAgXG4gICAgb24oIGV2dCwgY2IgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhldnQpICYmIGV2dCApXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZXZ0KS5mb3JFYWNoKGsgPT4gdGhpcy5vbihrLCBldnRba10pKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdID0gdGhpcy5fZXZlbnRzW2V2dF0gfHwgW107XG4gICAgICAgIHRoaXMuX2V2ZW50c1tldnRdLnB1c2goY2IpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgdW4oIGV2dCwgY2IgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhldnQpICYmIGV2dCApXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZXZ0KS5mb3JFYWNoKGsgPT4gdGhpcy51bihrLCBldnRba10pKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1tldnRdICkgcmV0dXJuO1xuICAgICAgICB2YXIgaSA9IHRoaXMuX2V2ZW50c1tldnRdLmluZGV4T2YoY2IpO1xuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0XS5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIFxuICAgIGVtaXQoIGV2dCwgLi4uYXJneiApIHtcbiAgICAgICAgaWYgKCAhdGhpcy5fZXZlbnRzW2V2dF0gKSByZXR1cm47XG4gICAgICAgIGxldCBsaXN0cyA9IFsuLi50aGlzLl9ldmVudHNbZXZ0XV07XG4gICAgICAgIFxuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBsaXN0cy5sZW5ndGg7IGkrKyApXG4gICAgICAgICAgICBsaXN0c1tpXSguLi5hcmd6KVxuICAgIH1cbiAgICBcbiAgICBhZGRMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5vbiguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy51biguLi5hcmd1bWVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVBbGxMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIH1cbiAgICBcbiAgICBvbmNlKCBldnQsIGNiICkge1xuICAgICAgICBsZXQgZm47XG4gICAgICAgIHRoaXMub24oZXZ0LCBmbiA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgIHRoaXMudW4oZXZ0LCBmbik7XG4gICAgICAgICAgICBjYiguLi5hcmd6KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VtaXR0ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2hvcnRpZFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpICAyMDE4IFdpc2UgV2lsZCBXZWIgLlxuICpcbiAqICBNSVQgTGljZW5zZVxuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiAgU09GVFdBUkUuXG4gKlxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxuICogQGNvbnRhY3QgOiBjYWlwaWxhYnNAZ21haWwuY29tXG4gKi9cblxuLyoqXG4gKiBVbHRyYSBzY2FsYWJsZSBzdGF0ZS1hd2FyZSBzdG9yZVxuICpcbiAqIEB0b2RvIDogbG90IG9mIG9wdGltcy4uLlxuICovXG5cbnZhciBpcyAgICAgICAgICAgID0gcmVxdWlyZSgnaXMnKSxcbiAgICBTY29wZSAgICAgICAgID0gcmVxdWlyZSgnLi9TY29wZScpLFxuICAgIEV2ZW50RW1pdHRlciAgPSByZXF1aXJlKCcuL0VtaXR0ZXInKSxcbiAgICBUYXNrU2VxdWVuY2VyID0gcmVxdWlyZSgnLi9UYXNrU2VxdWVuY2VyJyksXG4gICAgc2hvcnRpZCAgICAgICA9IHJlcXVpcmUoJ3Nob3J0aWQnKSxcbiAgICBvYmpQcm90byAgICAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KTtcblxuLyoqXG4gKiBAY2xhc3MgU3RvcmVcbiAqL1xuY2xhc3MgU3RvcmUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIFxuICAgIHN0YXRpYyB1c2UgICAgICAgICAgICAgICAgICA9IFtdOy8vIG92ZXJyaWRhYmxlIGxpc3Qgb2Ygc291cmNlIHN0b3Jlc1xuICAgIHN0YXRpYyBmb2xsb3c7Ly8gb3ZlcnJpZGFibGUgbGlzdCBvZiBzdG9yZSB0aGF0IHdpbGwgYWxsb3cgcHVzaCBpZiB1cGRhdGVkXG4gICAgc3RhdGljIHJlcXVpcmU7XG4gICAgc3RhdGljIHN0YXRpY1Njb3BlICAgICAgICAgID0gbmV3IFNjb3BlKHt9LCB7IGlkOiBcInN0YXRpY1wiIH0pO1xuICAgIHN0YXRpYyBzdGF0ZSAgICAgICAgICAgICAgICA9IHVuZGVmaW5lZDsvLyBkZWZhdWx0IHN0YXRlXG4gICAgLyoqXG4gICAgICogaWYgcmV0YWluIGdvZXMgdG8gMCA6XG4gICAgICogZmFsc2UgdG8gbm90IGRlc3Ryb3ksXG4gICAgICogMCB0byBzeW5jIGF1dG8gZGVzdHJveVxuICAgICAqIE1zIHRvIGF1dG9kZXN0cm95IGFmdGVyIHRtIG1zIGlmIG5vIHJldGFpbiBoYXMgYmVlbiBjYWxsZWRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxJbnR9XG4gICAgICovXG4gICAgICAgICAgIHN0YXRpYyBwZXJzaXN0ZW5jZVRtID0gZmFsc2U7XG4gICAgXG4gICAgLyoqXG4gICAgICogZ2V0IGEgQnVpbGRlci1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICAgICAqL1xuICAgIHN0YXRpYyBhcyggbmFtZSApIHtcbiAgICAgICAgcmV0dXJuIHsgc3RvcmU6IHRoaXMsIG5hbWUgfTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWFwIGFsbCBuYW1lZCBzdG9yZXMgaW4ge2tleXN9IHRvIHRoZSB7b2JqZWN0fSdzIHN0YXRlXG4gICAgICogSG9vayBjb21wb25lbnRXaWxsVW5tb3VudCAoZm9yIHJlYWN0IGNvbXApIG9yIGRlc3Ryb3kgdG8gdW5CaW5kIHRoZW0gYXV0b21hdGljYWxseVxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0gb2JqZWN0IHtPYmplY3R9IHRhcmdldCBzdGF0ZSBhd2FyZSBvYmplY3QgKFJlYWN0LkNvbXBvbmVudHxTdG9yZXwuLi4pXG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlclN0YXRpY05hbWVkU3RvcmU6a2V5XCIsIHN0b3JlLmFzKCdhbm90aGVyS2V5JyldXG4gICAgICovXG4gICAgc3RhdGljIG1hcCggY29tcG9uZW50LCBrZXlzLCBzY29wZSwgb3JpZ2luLCBzZXRJbml0aWFsID0gZmFsc2UgKSB7XG4gICAgICAgIHZhciB0YXJnZXRSZXZzICAgICA9IGNvbXBvbmVudC5fcmV2cyB8fCB7fTtcbiAgICAgICAgdmFyIHRhcmdldFNjb3BlICAgID0gY29tcG9uZW50LnN0b3JlcyB8fCAoY29tcG9uZW50LnN0b3JlcyA9IHt9KTtcbiAgICAgICAgdmFyIGluaXRpYWxPdXRwdXRzID0ge307XG4gICAgICAgIGtleXMgICAgICAgICAgICAgICA9IGlzLmFycmF5KGtleXMpID8gWy4uLmtleXNdIDogW2tleXNdO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHNjb3BlID0gc2NvcGUgfHwgU3RvcmUuc3RhdGljU2NvcGU7XG4gICAgICAgIFxuICAgICAgICBrZXlzID0ga2V5cy5maWx0ZXIoXG4gICAgICAgICAgICAvLyBAdG9kbyA6IHVzZSBxdWVyeSByZWZzXG4gICAgICAgICAgICAvLyAoc3RvcmUpKFxcLnN0b3JlKSooXFxbKFxcKnwocHJvcHMpXFx3KykrKVxcXSk/KFxcOmFsaWFzKVxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCAha2V5ICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBrZXkgKyBcIicgaW4gXCIgKyBvcmlnaW4gKyAnICEhJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzLFxuICAgICAgICAgICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZTtcbiAgICAgICAgICAgICAgICBpZiAoIGtleS5zdG9yZSAmJiBrZXkubmFtZSApIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oa2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSAgID0ga2V5Lm1hdGNoKC8oW1xcd19dKykoKD86XFwuW1xcd19dKykqKSg/OlxcOihbXFx3X10rKSk/Lyk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgID0ga2V5WzFdO1xuICAgICAgICAgICAgICAgICAgICBwYXRoICA9IGtleVsyXSAmJiBrZXlbMl0uc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHNjb3BlLnN0b3Jlc1trZXlbMV1dO1xuICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGtleVszXSB8fCBwYXRoICYmIHBhdGgubWF0Y2goLyhbXlxcLl0qKSQvKVswXSB8fCBrZXlbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0UmV2c1tuYW1lXSApIHJldHVybiBmYWxzZTsvLyBpZ25vcmUgZGJsIHVzZXMgZm9yIG5vd1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggIXN0b3JlICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IGEgbWFwcGFibGUgc3RvcmUgaXRlbSAnXCIgKyBuYW1lICsgXCIvXCIgKyBhbGlhcyArIFwiJyBpbiBcIiArIChjb21wb25lbnQubmFtZSB8fCBjb21wb25lbnQpICsgJyAhIScsIHN0b3JlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggaXMuZm4oc3RvcmUpICkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5fbW91bnQobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuc3RvcmVzW25hbWVdLmJpbmQoY29tcG9uZW50LCBhbGlhcywgc2V0SW5pdGlhbCwgcGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5iaW5kKGNvbXBvbmVudCwgYWxpYXMsIHNldEluaXRpYWwsIHBhdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBnaXZlIGluaXRpYWwgc3RvcmUgd2VpZ2h0IGJhc2luZyBzb3VyY2VzXG4gICAgICAgICAgICAgICAgY29tcG9uZW50Ll9zb3VyY2VzLnB1c2goLi4uc2NvcGUuc3RvcmVzW25hbWVdLl9zb3VyY2VzKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0YXJnZXRSZXZzW2FsaWFzXSA9IHRhcmdldFJldnNbYWxpYXNdIHx8IHRydWU7XG4gICAgICAgICAgICAgICAgIXRhcmdldFNjb3BlW25hbWVdICYmICh0YXJnZXRTY29wZVtuYW1lXSA9IHNjb3BlLnN0b3Jlc1tuYW1lXSk7XG4gICAgICAgICAgICAgICAgaWYgKCBzY29wZS5zdG9yZXNbbmFtZV0uaGFzT3duUHJvcGVydHkoJ2RhdGEnKSApXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxPdXRwdXRzW25hbWVdID0gc2NvcGUuZGF0YVtuYW1lXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIC8vIC4uLlxuICAgICAgICB2YXIgbWl4ZWRDV1VubW91bnQsXG4gICAgICAgICAgICB1bk1vdW50S2V5ID0gY29tcG9uZW50LmlzUmVhY3RDb21wb25lbnQgPyBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIgOiBcImRlc3Ryb3lcIjtcbiAgICAgICAgXG4gICAgICAgIGlmICggY29tcG9uZW50Lmhhc093blByb3BlcnR5KHVuTW91bnRLZXkpICkge1xuICAgICAgICAgICAgbWl4ZWRDV1VubW91bnQgPSBjb21wb25lbnRbdW5Nb3VudEtleV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudFt1bk1vdW50S2V5XSA9ICggLi4uYXJneiApID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSBjb21wb25lbnRbdW5Nb3VudEtleV07XG4gICAgICAgICAgICBpZiAoIG1peGVkQ1dVbm1vdW50IClcbiAgICAgICAgICAgICAgICBjb21wb25lbnRbdW5Nb3VudEtleV0gPSBtaXhlZENXVW5tb3VudDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAga2V5cy5tYXAoXG4gICAgICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMsIHBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBrZXkuc3RvcmUgJiYga2V5Lm5hbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0ga2V5LnN0b3JlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBpcy5mbihrZXkpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGFsaWFzID0ga2V5Lm5hbWUgfHwga2V5LmRlZmF1bHROYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBzY29wZS5zdG9yZXNbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgICA9IGtleS5tYXRjaCgvKFtcXHdfXSspKCg/OlxcLltcXHdfXSspKikoPzpcXDooW1xcd19dKykpPy8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoICA9IGtleVsyXSAmJiBrZXlbMl0uc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBzY29wZS5zdG9yZXNba2V5WzFdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0ga2V5WzNdIHx8IHBhdGggJiYgcGF0aC5tYXRjaCgvKFteXFwuXSopJC8pWzBdIHx8IGtleVsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgJiYgIWlzLmZuKHN0b3JlKSAmJiBzdG9yZS51bkJpbmQoY29tcG9uZW50LCBhbGlhcywgcGF0aClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudFt1bk1vdW50S2V5XSAmJiBjb21wb25lbnRbdW5Nb3VudEtleV0oLi4uYXJneik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBpbml0aWFsT3V0cHV0cztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IsIHdpbGwgYnVpbGQgYSByZXNjb3BlIHN0b3JlXG4gICAgICpcbiAgICAgKiAoc2NvcGUsIHtyZXF1aXJlLHVzZSxhcHBseSxzdGF0ZSwgZGF0YX0pXG4gICAgICogKHNjb3BlKVxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIHtvYmplY3R9IHNjb3BlIHdoZXJlIHRvIGZpbmQgdGhlIG90aGVyIHN0b3JlcyAoZGVmYXVsdCA6IHN0YXRpYyBzdGF0aWNTY29wZSApXG4gICAgICogQHBhcmFtIGtleXMge0FycmF5fSAocGFzc2VkIHRvIFN0b3JlOjptYXApIEV4IDogW1wic2Vzc2lvblwiLCBcIm90aGVyTmFtZWRTdG9yZTprZXlcIiwgb3RoZXJTdG9yZS5hcyhcIm90aGVyS2V5XCIpXVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgYXJneiAgICAgICAgID0gWy4uLmFyZ3VtZW50c10sXG4gICAgICAgICAgICBfc3RhdGljICAgICAgPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgID0gYXJnelswXSBpbnN0YW5jZW9mIFNjb3BlXG4gICAgICAgICAgICAgICAgPyBhcmd6LnNoaWZ0KClcbiAgICAgICAgICAgICAgICA6IF9zdGF0aWMuc2NvcGUgPyBTY29wZS5nZXRTY29wZShfc3RhdGljLnNjb3BlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXMuc3RyaW5nKGFyZ3pbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgPyBTY29wZS5nZXRTY29wZShhcmd6LnNoaWZ0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgOiBfc3RhdGljLnN0YXRpY1Njb3BlLFxuICAgICAgICAgICAgY2ZnICAgICAgICAgID0gYXJnelswXSAmJiAhaXMuYXJyYXkoYXJnelswXSkgJiYgIWlzLnN0cmluZyhhcmd6WzBdKSA/IGFyZ3ouc2hpZnQoKSA6IHt9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgID0gaXMuc3RyaW5nKGFyZ3pbMF0pID8gYXJnelswXSA6IGNmZy5uYW1lIHx8IF9zdGF0aWMubmFtZSxcbiAgICAgICAgICAgIHdhdGNocyAgICAgICA9IGlzLmFycmF5KGFyZ3pbMF0pID8gYXJnei5zaGlmdCgpIDogY2ZnLnVzZSB8fCBbXSwvLyB3YXRjaHMgbmVlZCB0byBiZSBkZWZpbmVkIGFmdGVyIGFsbCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSBhcmUgcmVnaXN0ZXJlZCA6IHNvIHdlIGNhbid0IGRlYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIGFueSBcInN0YXRpYyB1c2VcIiBhdXRvbWF0aWNseVxuICAgICAgICAgICAgYXBwbHkgICAgICAgID0gaXMuZm4oYXJnelswXSkgPyBhcmd6LnNoaWZ0KCkgOiBjZmcuYXBwbHkgfHwgbnVsbCxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IF9zdGF0aWMuc3RhdGUgfHwgX3N0YXRpYy5pbml0aWFsU3RhdGUsXG4gICAgICAgICAgICBhcHBsaWVkO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fdWlkID0gY2ZnLl91aWQgfHwgc2hvcnRpZC5nZW5lcmF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JldGFpbnMgICAgPSB7IGFsbDogMCB9O1xuICAgICAgICB0aGlzLl9fbG9ja3MgICAgICA9IHsgYWxsOiAwIH07XG4gICAgICAgIHRoaXMuX29uU3RhYmlsaXplID0gW107XG4gICAgICAgIFxuICAgICAgICAvLyBhdXRvRGVzdHJveVRtXG4gICAgICAgIHRoaXMuX2F1dG9EZXN0cm95ICAgPSAhIXRoaXMuX3BlcnNpc3RlbmNlVG07XG4gICAgICAgIHRoaXMuX3BlcnNpc3RlbmNlVG0gPSBjZmcucGVyc2lzdGVuY2VUbSB8fCBfc3RhdGljLnBlcnNpc3RlbmNlVG0gfHwgKGNmZy5hdXRvRGVzdHJveSB8fCBfc3RhdGljLmF1dG9EZXN0cm95KSAmJiA1O1xuICAgICAgICBcbiAgICAgICAgaWYgKCBjZmcgJiYgY2ZnLm9uICkge1xuICAgICAgICAgICAgdGhpcy5vbihjZmcub24pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBzY29wZS5zdG9yZXMgKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlT2JqID0gc2NvcGU7XG4gICAgICAgICAgICB0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY29wZU9iaiA9IG5ldyBTY29wZShzY29wZSk7XG4gICAgICAgICAgICB0aGlzLnNjb3BlICAgID0gc2NvcGUuc3RvcmVzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5fcmV2ICAgICA9IHRoaXMuY29uc3RydWN0b3IuX3JldiB8fCAwO1xuICAgICAgICB0aGlzLl9yZXZzICAgID0ge307XG4gICAgICAgIHRoaXMuc3RvcmVzICAgPSB7fTtcbiAgICAgICAgdGhpcy5fcmVxdWlyZSA9IFtdO1xuICAgICAgICB0aGlzLl9zb3VyY2VzID0gW25hbWVdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBpcy5hcnJheShfc3RhdGljLnVzZSkgKSB7XG4gICAgICAgICAgICB0aGlzLl91c2UgPSBbLi4ud2F0Y2hzLCAuLi4oX3N0YXRpYy51c2UgfHwgW10pLm1hcChcbiAgICAgICAgICAgICAgICBrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKFteXFw6XSopKD86XFw6KC4qKSk/JC8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHJlZlsxXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWYyID0gcmVmWzJdLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXF1aXJlLnB1c2gocmVmWzNdIHx8IHJlZjJbcmVmMi5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZlsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZSA9IFsuLi53YXRjaHMsIC4uLihcbiAgICAgICAgICAgICAgICBfc3RhdGljLnVzZSA/IE9iamVjdC5rZXlzKF9zdGF0aWMudXNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0ga2V5Lm1hdGNoKC9eKFxcIT8pKC4qKSQvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmWzFdICYmIHRoaXMuX3JlcXVpcmUucHVzaChfc3RhdGljLnVzZVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZlsyXSArICgoX3N0YXRpYy51c2Vba2V5XSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJzonICsgX3N0YXRpYy51c2Vba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IFtdXG4gICAgICAgICAgICApXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCBfc3RhdGljLnJlcXVpcmUgKVxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLl9zdGF0aWMucmVxdWlyZSk7XG4gICAgICAgIGlmICggY2ZnLnJlcXVpcmUgKVxuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZS5wdXNoKC4uLmNmZy5yZXF1aXJlKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2ZvbGxvd2VycyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBhcHBseSApXG4gICAgICAgICAgICB0aGlzLmFwcGx5ID0gYXBwbHk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGNmZy5zbmFwc2hvdCAmJiBjZmcuc25hcHNob3RbdGhpcy5zY29wZU9iai5faWQgKyAnLycgKyBuYW1lXSApIHtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZShjZmcuc25hcHNob3QpO1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHNjb3BlLmJpbmQodGhpcywgdGhpcy5fdXNlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggX3N0YXRpYy5kYXRhICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHsgLi4uX3N0YXRpYy5kYXRhIH07XG4gICAgICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcImRhdGFcIikgJiYgY2ZnLmRhdGEgIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gY2ZnLmRhdGE7XG4gICAgICAgICAgICBpZiAoIGNmZy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlXCIpICYmIGNmZy5zdGF0ZSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICAgICAgICBpbml0aWFsU3RhdGUgPSB7IC4uLmluaXRpYWxTdGF0ZSwgLi4uY2ZnLnN0YXRlIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBpbml0aWFsU3RhdGUgfHwgdGhpcy5fdXNlLmxlbmd0aCApIHsvLyBzeW5jIGFwcGx5XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uKGluaXRpYWxTdGF0ZSB8fCB7fSksXG4gICAgICAgICAgICAgICAgICAgIC4uLnNjb3BlLm1hcCh0aGlzLCB0aGlzLl91c2UpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQXBwbHkodGhpcy5zdGF0ZSkgJiYgdGhpcy5kYXRhID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuYXBwbHkodGhpcy5kYXRhLCB0aGlzLnN0YXRlLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgYXBwbGllZCAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VzU1cgPSB7IC4uLnRoaXMuc3RhdGUgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICggKHRoaXMuZGF0YSAhPT0gdW5kZWZpbmVkIHx8IGFwcGxpZWQpICYmICF0aGlzLl9fbG9ja3MuYWxsICkge1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JldisrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoICFfc3RhdGljLm1hbmFnZWQgJiYgIXRoaXMuc3RhdGUgJiYgKCF0aGlzLl91c2UgfHwgIXRoaXMuX3VzZS5sZW5ndGgpICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlU2NvcGUgc3RvcmUgJ1wiLCB0aGlzLm5hbWUsIFwiJyBoYXZlIG5vIGluaXRpYWwgZGF0YSwgc3RhdGUgb3IgdXNlLiBJdCBjYW4ndCBzdGFiaWxpemUuLi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgIXRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldCBjb250ZXh0T2JqKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZU9iajtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXQgY29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0IGRhdGFzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHNldCBkYXRhcyggdiApIHtcbiAgICAgICAgLy9jb25zb2xlLmdyb3VwQ29sbGFwc2VkKFwiUmVzY29wZSBzdG9yZSA6IFNldHRpbmcgZGF0YXMgaXMgZGVwcmVjaWF0ZWQsIHVzZSBkYXRhXCIpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUmVzY29wZSBzdG9yZSA6IFNldHRpbmcgZGF0YXMgaXMgZGVwcmVjaWF0ZWQsIHVzZSBkYXRhXCIsIChuZXcgRXJyb3IoKSkuc3RhY2spO1xuICAgICAgICAvL2NvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSA9IHY7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgZGF0YSBjaGFuZ2Ugc2hvdWxkIGJlIHByb3BhZyB0byB0aGUgbGlzdGVuaW5nIHN0b3JlcyAmIGNvbXBvbmVudHNcbiAgICAgKi9cbiAgICBzaG91bGRQcm9wYWcoIG5EYXRhcyApIHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBoYXNEYXRhQ2hhbmdlKCBuRGF0YXMgKSB7XG4gICAgICAgIHZhciBfc3RhdGljID0gdGhpcy5jb25zdHJ1Y3RvciwgcixcbiAgICAgICAgICAgIGNEYXRhcyAgPSB0aGlzLmRhdGE7XG4gICAgICAgIHIgICAgICAgICAgID0gIWNEYXRhcyAmJiBuRGF0YXMgfHwgY0RhdGFzICE9PSBuRGF0YXM7XG4gICAgICAgICFyICYmIGNEYXRhcyAmJiBPYmplY3Qua2V5cyhjRGF0YXMpLmZvckVhY2goXG4gICAgICAgICAgICAoIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICByID0gciB8fCAobkRhdGFzID8gY0RhdGFzW2tleV0gIT09IG5EYXRhc1trZXldIDogY0RhdGFzICYmIGNEYXRhc1trZXldKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICAhciAmJiBuRGF0YXMgJiYgT2JqZWN0LmtleXMobkRhdGFzKS5mb3JFYWNoKFxuICAgICAgICAgICAgKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICAgICAgciA9IHIgfHwgKG5EYXRhcyA/IGNEYXRhc1trZXldICE9PSBuRGF0YXNba2V5XSA6IGNEYXRhcyAmJiBjRGF0YXNba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIG1ldGhvZCB0byBrbm93IGlmIGEgc3RhdGUgY2hhbmdlIHNob3VsZCBiZSBhcHBsaWVkXG4gICAgICovXG4gICAgc2hvdWxkQXBwbHkoIHN0YXRlID0gdGhpcy5zdGF0ZSApIHtcbiAgICAgICAgdmFyIF9zdGF0aWMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICEhdGhpcy5pc0NvbXBsZXRlKHN0YXRlKVxuICAgICAgICApICYmIChpcy5hcnJheShfc3RhdGljLmZvbGxvdylcbiAgICAgICAgICAgICAgICA/IF9zdGF0aWMuZm9sbG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoIHIsIGkgKSA9PiAociB8fCBzdGF0ZSAmJiBzdGF0ZVtpXSksIGZhbHNlKVxuICAgICAgICAgICAgICAgIDogX3N0YXRpYy5mb2xsb3dcbiAgICAgICAgICAgICAgICAgID8gT2JqZWN0LmtleXMoX3N0YXRpYy5mb2xsb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKCByLCBpICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgc3RhdGUgJiYgaXMuZm4oX3N0YXRpYy5mb2xsb3dbaV0pICYmIF9zdGF0aWMuZm9sbG93W2ldLmNhbGwodGhpcywgc3RhdGVbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBfc3RhdGljLmZvbGxvd1tpXSAmJiBzdGF0ZVtpXSAhPT0gdGhpcy5zdGF0ZVtpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLCBmYWxzZSkgOiB0cnVlXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRhYmxlIGFwcGxpZXIgLyByZW1hcHBlclxuICAgICAqIElmIHN0YXRlIG9yIGxhc3RQdWJsaWNTdGF0ZSBhcmUgc2ltcGxlIGhhc2ggbWFwcyBhcHBseSB3aWxsIHJldHVybiB7Li4uZGF0YSwgLi4uc3RhdGV9XG4gICAgICogaWYgbm90IGl0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IHByaXZhdGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGFwcGx5KCBkYXRhLCBzdGF0ZSwgY2hhbmdlcyApIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0ZSB8fCB0aGlzLnN0YXRlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLnJlZmluZSApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZpbmUoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIWRhdGEgfHwgZGF0YS5fX3Byb3RvX18gIT09IG9ialByb3RvIHx8IHN0YXRlLl9fcHJvdG9fXyAhPT0gb2JqUHJvdG8gKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhLCAuLi5zdGF0ZSB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNpYXRlZFxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGNoYW5nZXNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWZpbmUoIGRhdGEsIHN0YXRlLCBjaGFuZ2VzICkge1xuICAgICAgICBzdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFkYXRhIHx8IGRhdGEuX19wcm90b19fICE9PSBvYmpQcm90byB8fCBzdGF0ZS5fX3Byb3RvX18gIT09IG9ialByb3RvIClcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgLi4uc3RhdGUgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBEZWJvdW5jZSB0aGlzIHN0b3JlIHByb3BhZ2F0aW9uICggJiByZWR1Y2luZyApXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgc3RhYmlsaXplKCBjYiApIHtcbiAgICAgICAgY2IgJiYgdGhpcy5vbmNlKCdzdGFibGUnLCBjYik7XG4gICAgICAgIHRoaXMuX3N0YWJsZSAmJiB0aGlzLmVtaXQoJ3Vuc3RhYmxlJywgdGhpcy5zdGF0ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJsZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFiaWxpemVyIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBUYXNrU2VxdWVuY2VyLnB1c2hUYXNrKHRoaXMsICdwdXNoU3RhdGUnKTtcbiAgICB9XG4gICAgXG4gICAgcmV0cmlldmUoIHBhdGgsIGkgPSAwLCBvYmogPSB0aGlzLmRhdGEgKSB7XG4gICAgICAgIHBhdGggPSBpcy5zdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoO1xuICAgICAgICByZXR1cm4gIW9iaiB8fCAhcGF0aCB8fCAhcGF0aC5sZW5ndGhcbiAgICAgICAgICAgID8gb2JqXG4gICAgICAgICAgICA6IHBhdGgubGVuZ3RoID09IGkgKyAxXG4gICAgICAgICAgICAgICAgICAgPyBvYmpbcGF0aFtpXV1cbiAgICAgICAgICAgICAgICAgICA6IHRoaXMucmV0cmlldmUocGF0aCwgaSArIDEsIG9ialtwYXRoW2ldXSk7XG4gICAgfVxuICAgIFxuICAgIGRpc3BhdGNoKCBhY3Rpb24sIC4uLmFyZ3ogKSB7XG4gICAgICAgIHRoaXMuc2NvcGVPYmouZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmd6KTtcbiAgICB9XG4gICAgXG4gICAgdHJpZ2dlciggYWN0aW9uLCAuLi5hcmd6ICkge1xuICAgICAgICBsZXQgeyBhY3Rpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBpZiAoIGFjdGlvbnMgJiYgYWN0aW9uc1thY3Rpb25dICkge1xuICAgICAgICAgICAgbGV0IG5zID0gYWN0aW9uc1thY3Rpb25dLmNhbGwodGhpcywgLi4uYXJneik7XG4gICAgICAgICAgICBucyAmJiB0aGlzLnNldFN0YXRlKG5zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBQdWxsIHN0b3JlcyBpbiB0aGUgcHJpdmF0ZSBzdGF0ZVxuICAgICAqIEBwYXJhbSBzdG9yZXMgIHtBcnJheX0gKHBhc3NlZCB0byBTdG9yZTo6bWFwKSBFeCA6IFtcInNlc3Npb25cIiwgXCJvdGhlck5hbWVkU3RvcmU6a2V5XCIsIG90aGVyU3RvcmUuYXMoXCJvdGhlcktleVwiKV1cbiAgICAgKi9cbiAgICBwdWxsKCBzdG9yZXMsIGRvV2FpdCwgb3JpZ2luICkge1xuICAgICAgICBsZXQgaW5pdGlhbE91dHB1dHMgPSB0aGlzLnNjb3BlT2JqLm1hcCh0aGlzLCBzdG9yZXMpO1xuICAgICAgICBpZiAoIGRvV2FpdCApIHtcbiAgICAgICAgICAgIHRoaXMud2FpdCgpO1xuICAgICAgICAgICAgc3RvcmVzLmZvckVhY2goKCBzICkgPT4gdGhpcy5zY29wZVtzXSAmJiB0aGlzLndhaXQodGhpcy5zY29wZVtzXSkpO1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluaXRpYWxPdXRwdXRzO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBTZXQgJiBQdXNoIHRoZSByZXN1bHQgZGF0YSB0byBmb2xsb3dlcnMgaWYgc3RhYmxlXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgcHVzaCggZGF0YSwgZm9yY2UsIGNiICkge1xuICAgICAgICBjYiAgICA9IGZvcmNlID09PSB0cnVlID8gY2IgOiBmb3JjZTtcbiAgICAgICAgZm9yY2UgPSBmb3JjZSA9PT0gdHJ1ZTtcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAhdGhpcy5oYXNEYXRhQ2hhbmdlKGRhdGEpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMud2FpdCgpO1xuICAgICAgICB0aGlzLnJlbGVhc2UoY2IpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQ2FsbCB0aGUgYXBwbHkgZm4gdXNpbmcgdGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgc3RhdGUgdXBkYXRlIHRoZW4sIHB1c2ggdGhlIHJlc3VsdGluZyBkYXRhIGlmIHN0YWJsZVxuICAgICAqIEBwYXJhbSBmb3JjZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHB1c2hTdGF0ZSggZm9yY2UgKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFmb3JjZSAmJiAhdGhpcy5fY2hhbmdlc1NXICYmIHRoaXMuZGF0YSApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICB2YXIgbmV4dFN0YXRlID0geyAuLi50aGlzLnN0YXRlLCAuLi4odGhpcy5fY2hhbmdlc1NXIHx8IHt9KSB9LFxuICAgICAgICAgICAgbmV4dERhdGEgID0gdGhpcy5hcHBseSh0aGlzLmRhdGEsIG5leHRTdGF0ZSwgdGhpcy5fY2hhbmdlc1NXKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3N0YWJpbGl6ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlICAgICAgID0gbmV4dFN0YXRlO1xuICAgICAgICB0aGlzLl9jaGFuZ2VzU1cgID0gbnVsbDtcbiAgICAgICAgaWYgKCAhZm9yY2UgJiZcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAhdGhpcy5oYXNEYXRhQ2hhbmdlKG5leHREYXRhKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19sb2Nrcy5hbGwgKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWJsZSAgID0gdGhpcy5fc3RhYmxlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIXN0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuc3RhdGUsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhYmlsaXplciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YSA9IG5leHREYXRhO1xuICAgICAgICB0aGlzLndhaXQoKTtcbiAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBZGQgJ3BTdGF0ZScgdG8gdGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgc3RhdGUgdXBkYXRlc1xuICAgICAqICYgd2FpdCBzb3VyY2Ugc3RvcmVzIHN0YWJpbGl6YXRpb24gYmVmb3JlIHB1c2hpbmcgdGhlc2Ugc3RhdGUgdXBkYXRlc1xuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzZXRTdGF0ZSggcFN0YXRlLCBjYiwgc3luYyApIHtcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcbiAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgICAgIHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXG4gICAgICAgICAgICAgICAgKSApIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2UgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XG4gICAgICAgICAgICAgICAgY2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuc2hvdWxkQXBwbHkoeyAuLi50aGlzLnN0YXRlLCAuLi5jaGFuZ2VzIH0pICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHN5bmMgKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZSgpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICggY2hhbmdlICkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhYmlsaXplKGNiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgY2IgJiYgY2IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjdXJyZW50IHN0YXRlICYgcHVzaCBpdFxuICAgICAqIEBwYXJhbSBwU3RhdGVcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBzZXRTdGF0ZVN5bmMoIHBTdGF0ZSApIHtcbiAgICAgICAgdmFyIGkgICAgICAgPSAwLCBjaGFuZ2UsXG4gICAgICAgICAgICBjaGFuZ2VzID0gdGhpcy5fY2hhbmdlc1NXID0gdGhpcy5fY2hhbmdlc1NXIHx8IHt9O1xuICAgICAgICBmb3IgKCB2YXIgayBpbiBwU3RhdGUgKVxuICAgICAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZSB8fCBwU3RhdGUuaGFzT3duUHJvcGVydHkoaylcbiAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgICAgIHBTdGF0ZVtrXSAhPSB0aGlzLnN0YXRlW2tdXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlW2tdICYmIHBTdGF0ZVtrXSAmJiAocFN0YXRlW2tdLl9yZXYgIT0gdGhpcy5fcmV2c1trXSkpLy8gcmV2L2hhc2ggdXBkYXRlXG4gICAgICAgICAgICAgICAgKSApIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2UgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXZzW2tdID0gcFN0YXRlW2tdICYmIHBTdGF0ZVtrXS5fcmV2IHx8IHRydWU7XG4gICAgICAgICAgICAgICAgY2hhbmdlc1trXSAgICA9IHBTdGF0ZVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG91bGRBcHBseSh7IC4uLih0aGlzLnN0YXRlIHx8IHt9KSwgLi4uY2hhbmdlcyB9KSAmJiB0aGlzLnB1c2hTdGF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBnZXQgYSBzdG9yZS1rZXkgcGFpciBmb3IgU3RvcmU6Om1hcFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3tzdG9yZTogU3RvcmUsIG5hbWU6ICp9fVxuICAgICAqL1xuICAgIGFzKCBuYW1lICkge1xuICAgICAgICByZXR1cm4geyBzdG9yZTogdGhpcywgbmFtZSB9O1xuICAgIH1cbiAgICBcbiAgICBvbiggbGlzdHMgKSB7XG4gICAgICAgIGlmICggIWlzLnN0cmluZyhsaXN0cykgJiYgbGlzdHMgKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdHMpLmZvckVhY2goayA9PiBzdXBlci5vbihrLCBsaXN0c1trXSkpO1xuICAgICAgICBlbHNlIHN1cGVyLm9uKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyKCBsaXN0cyApIHtcbiAgICAgICAgaWYgKCAhaXMuc3RyaW5nKGxpc3RzKSAmJiBsaXN0cyApXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0cykuZm9yRWFjaChrID0+IHN1cGVyLnJlbW92ZUxpc3RlbmVyKGssIGxpc3RzW2tdKSk7XG4gICAgICAgIGVsc2Ugc3VwZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgY29tcGxldGUgKGFsbCByZXF1aWVyZWQga2V5cyBhcmUgaGVyZSlcbiAgICAgKiBAcmV0dXJucyBib29sXG4gICAgICovXG4gICAgaXNDb21wbGV0ZSggc3RhdGUgPSB0aGlzLnN0YXRlICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhdGhpcy5fcmVxdWlyZVxuICAgICAgICAgICAgfHwgIXRoaXMuX3JlcXVpcmUubGVuZ3RoXG4gICAgICAgICAgICB8fCBzdGF0ZSAmJiB0aGlzLl9yZXF1aXJlLnJlZHVjZShcbiAgICAgICAgICAgICAgICAoIHIsIGtleSApID0+IChyICYmIHN0YXRlW2tleV0pLFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogaXMgc3RhYmxlXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIGlzU3RhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhYmxlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemUgc3RhdGUgJiBkYXRhIHdpdGggc291cmNlcyByZWZzXG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIHNlcmlhbGl6ZSggb3V0cHV0ID0ge30sIGNvbXBsZXRlU3RhdGUgKSB7XG4gICAgICAgIGxldCByZWZzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPVxuICAgICAgICAgICAgICAgIGlzLmFycmF5KHRoaXMuX3VzZSkgJiYgdGhpcy5fdXNlLnJlZHVjZShcbiAgICAgICAgICAgICAgICAoIG1hcCwga2V5ICkgPT4gey8vdG9kb1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzLCBwYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgIGlmICgga2V5LnN0b3JlICYmIGtleS5uYW1lICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBuYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIGlzLmZuKGtleSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gYWxpYXMgPSBrZXkubmFtZSB8fCBrZXkuZGVmYXVsdE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgICA9IGtleS5tYXRjaCgvKFtcXHdfXSspKCg/OlxcLltcXHdfXSspKikoPzpcXDooW1xcd19dKykpPy8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSAgPSBrZXlbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoICA9IGtleVsyXSAmJiBrZXlbMl0uc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXMgPSBrZXlbM10gfHwgcGF0aCAmJiBwYXRoLm1hdGNoKC8oW15cXC5dKikkLylbMF0gfHwga2V5WzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMuc2NvcGVPYmouc3RvcmVzW25hbWVdLnNjb3BlT2JqLl8uaXNMb2NhbElkIClcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFthbGlhc10gPSB0aGlzLnNjb3BlT2JqLnN0b3Jlc1tuYW1lXS5zY29wZU9iai5faWQgKyAnLycgKyBuYW1lO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICAgICAgICAgIH0sIHt9XG4gICAgICAgICAgICAgICAgKSB8fCB7fTtcbiAgICAgICAgb3V0cHV0W3RoaXMuc2NvcGVPYmouX2lkICsgJy8nICsgdGhpcy5uYW1lXSA9IHtcbiAgICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlICYmXG4gICAgICAgICAgICAoY29tcGxldGVTdGF0ZVxuICAgICAgICAgICAgICAgID8geyAuLi50aGlzLnN0YXRlIH1cbiAgICAgICAgICAgICAgICA6IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLnJlZHVjZSgoIGgsIGsgKSA9PiAoIXJlZnNba10gJiYgKGhba10gPSB0aGlzLnN0YXRlW2tdKSwgaCksIHt9KSksXG4gICAgICAgICAgICBkYXRhIDogdGhpcy5kYXRhLFxuICAgICAgICAgICAgcmVmc1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiByZXN0b3JlIHN0YXRlICYgZGF0YVxuICAgICAqIEByZXR1cm5zIGJvb2xcbiAgICAgKi9cbiAgICByZXN0b3JlKCBzbmFwc2hvdCApIHtcbiAgICAgICAgbGV0IHNuYXAgPSBzbmFwc2hvdFt0aGlzLnNjb3BlT2JqLl9pZCArICcvJyArIHRoaXMubmFtZV07XG4gICAgICAgIGlmICggc25hcCApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBzbmFwLnN0YXRlO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc25hcC5yZWZzKS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICgga2V5ICkgPT4gey8vdG9kb1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHNuYXBzaG90W3NuYXAucmVmc1trZXldXSApXG4gICAgICAgICAgICAgICAgICAgICAgICBzbmFwLnN0YXRlW2tleV0gPSBzbmFwc2hvdFtzbmFwLnJlZnNba2V5XV0uZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdub3QgZm91bmQgOiAnLCBrZXksIHNuYXAucmVmc1trZXldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kYXRhID0gc25hcC5kYXRhO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVuIGJpbmQgdGhpcyBzdG9yZSBvZmYgdGhlIGdpdmVuIGNvbXBvbmVudC1rZXlcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIHtBcnJheS48Kj59XG4gICAgICovXG4gICAgdW5CaW5kKCBvYmosIGtleSwgcGF0aCApIHtcbiAgICAgICAgdmFyIGZvbGxvd2VycyA9IHRoaXMuX2ZvbGxvd2VycyxcbiAgICAgICAgICAgIGkgICAgICAgICA9IGZvbGxvd2VycyAmJiBmb2xsb3dlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGZvbGxvd2VycyAmJiBpLS0gKVxuICAgICAgICAgICAgaWYgKCBmb2xsb3dlcnNbaV1bMF0gPT09IG9iaiAmJiBmb2xsb3dlcnNbaV1bMV0gPT09IGtleSAmJiBmb2xsb3dlcnNbaV1bMl0gPT09IHBhdGggKVxuICAgICAgICAgICAgICAgIHJldHVybiBmb2xsb3dlcnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBCaW5kIHRoaXMgc3RvcmUgY2hhbmdlcyB0byB0aGUgZ2l2ZW4gY29tcG9uZW50LWtleVxuICAgICAqIEBwYXJhbSBvYmoge1JlYWN0LkNvbXBvbmVudHxTdG9yZXxmdW5jdGlvbilcbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IG9wdGlvbmFsIGtleSB3aGVyZSB0byBtYXAgdGhlIHB1YmxpYyBzdGF0ZVxuICAgICAqL1xuICAgIGJpbmQoIG9iaiwga2V5LCBzZXRJbml0aWFsID0gdHJ1ZSwgcGF0aCApIHtcbiAgICAgICAgdGhpcy5fZm9sbG93ZXJzLnB1c2goW29iaiwga2V5LCBwYXRoXSk7XG4gICAgICAgIGlmICggc2V0SW5pdGlhbCAmJiB0aGlzLmRhdGEgJiYgdGhpcy5fc3RhYmxlICkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBwYXRoID8gdGhpcy5yZXRyaWV2ZShwYXRoKSA6IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9iaiAhPSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBrZXkgKSBvYmouc2V0U3RhdGUoeyBba2V5XTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICBlbHNlIG9iai5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iaihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBvbmNlKCdzdGFibGUnLCBjYilcbiAgICAgKiBAcGFyYW0gb2JqIHtSZWFjdC5Db21wb25lbnR8U3RvcmV8ZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBvcHRpb25hbCBrZXkgd2hlcmUgdG8gbWFwIHRoZSBwdWJsaWMgc3RhdGVcbiAgICAgKi9cbiAgICB0aGVuKCBjYiApIHtcbiAgICAgICAgaWYgKCB0aGlzLl9zdGFibGUgKVxuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMub25jZSgnc3RhYmxlJywgZSA9PiBjYihudWxsLCB0aGlzLmRhdGEpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQWRkIGEgbG9jayBzbyB0aGUgc3RvcmUgd2lsbCBub3QgcHJvcGFnIGl0IGRhdGEgdW50aWxsIHJlbGVhc2UoKSBpcyBjYWxsXG4gICAgICogQHBhcmFtIHByZXZpb3VzIHtTdG9yZXxudW1iZXJ8QXJyYXl9IEBvcHRpb25hbCB3ZiB0byB3YWl0LCByZWxlYXNlcyB0byB3YWl0IG9yIGFycmF5IG9mIHN0dWZmIHRvIHdhaXRcbiAgICAgKiBAcmV0dXJucyB7VGFza0Zsb3d9XG4gICAgICovXG4gICAgd2FpdCggcHJldmlvdXMgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIHByZXZpb3VzID09IFwibnVtYmVyXCIgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19sb2Nrcy5hbGwgKz0gcHJldmlvdXM7XG4gICAgICAgIGlmICggaXMuYXJyYXkocHJldmlvdXMpIClcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cy5tYXAodGhpcy53YWl0LmJpbmQodGhpcykpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhYmxlICYmIHRoaXMuZW1pdCgndW5zdGFibGUnLCB0aGlzLnN0YXRlLCB0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLl9zdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX2xvY2tzLmFsbCsrO1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlYXNvbiA9IGlzLnN0cmluZyhwcmV2aW91cykgPyBwcmV2aW91cyA6IG51bGw7XG4gICAgICAgIGlmICggcmVhc29uICkge1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0rKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHByZXZpb3VzICYmIGlzLmZuKHByZXZpb3VzLnRoZW4pICkge1xuICAgICAgICAgICAgcHJldmlvdXMudGhlbih0aGlzLnJlbGVhc2UuYmluZCh0aGlzLCBudWxsKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERlY3JlYXNlIGxvY2tzIGZvciB0aGlzIHN0b3JlLCBpZiBpdCByZWFjaCAwICxcbiAgICAgKiBpdCB3aWxsIGJlIHByb3BhZ2F0ZWQgdG8gdGhlIGZvbGxvd2VycyxcbiAgICAgKiB0aGVuLCBhbGwgc3R1ZmYgcGFzc2VkIHRvIFwidGhlblwiIGNhbGwgYmFjayB3aWxsIGJlIGV4ZWMgLyByZWxlYXNlZFxuICAgICAqIEBwYXJhbSBkZXN5bmNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZWxlYXNlKCByZWFzb24sIGNiICkge1xuICAgICAgICB2YXIgX3N0YXRpYyA9IHRoaXMuY29uc3RydWN0b3IsIG1lID0gdGhpcztcbiAgICAgICAgbGV0IGkgICAgICAgPSAwLCB3YXNTdGFibGUgPSB0aGlzLl9zdGFibGU7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGlzLmZuKHJlYXNvbikgKSB7XG4gICAgICAgICAgICBjYiAgICAgPSByZWFzb247XG4gICAgICAgICAgICByZWFzb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fX2xvY2tzW3JlYXNvbl0gPT0gMCApXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbGVhc2UgbW9yZSB0aGFuIGxvY2tpbmcgIVwiLCByZWFzb24pO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0gPSB0aGlzLl9fbG9ja3NbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX2xvY2tzW3JlYXNvbl0tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCAhcmVhc29uICYmIHRoaXMuX19sb2Nrcy5hbGwgPT0gMCApXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVsZWFzZSBtb3JlIHRoYW4gbG9ja2luZyAhXCIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCAhLS10aGlzLl9fbG9ja3MuYWxsICYmIHRoaXMuaXNDb21wbGV0ZSgpICkge1xuICAgICAgICAgICAgbGV0IHByb3BhZyAgID0gdGhpcy5zaG91bGRQcm9wYWcodGhpcy5kYXRhKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICBwcm9wYWcgJiYgdGhpcy5fcmV2Kys7Ly9cbiAgICAgICAgICAgIGlmICggcHJvcGFnICYmIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5mb3JFYWNoKGZ1bmN0aW9uIHByb3BhZyggZm9sbG93ZXIgKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gZm9sbG93ZXJbMl0gPyBtZS5yZXRyaWV2ZShmb2xsb3dlclsyXSkgOiBtZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAvL2lmICggIWRhdGEgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb2xsb3dlclswXSA9PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3dlclswXShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2IgJiYgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93ZXJbMF0uc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZvbGxvd2VyWzFdKSA/IHsgW2ZvbGxvd2VyWzFdXTogZGF0YSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICgpID0+ICghKC0taSkgJiYgY2IoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLylcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vZWxzZVxuICAgICAgICAgICAgIXdhc1N0YWJsZSAmJiB0aGlzLmVtaXQoJ3N0YWJsZScsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICBwcm9wYWcgJiYgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgY2IgJiYgdGhpcy50aGVuKGNiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHJldGFpbiggcmVhc29uICkge1xuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwrKztcbiAgICAgICAgaWYgKCByZWFzb24gKSB7XG4gICAgICAgICAgICB0aGlzLl9fcmV0YWluc1tyZWFzb25dID0gdGhpcy5fX3JldGFpbnNbcmVhc29uXSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoIHJlYXNvbiApIHtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oXCJkaXNwb3NlXCIsIHJlYXNvbiwgdGhpcy5fX3JldGFpbnMpO1xuICAgICAgICBpZiAoIHJlYXNvbiApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zW3JlYXNvbl0gKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc3Bvc2UgbW9yZSB0aGFuIHJldGFpbmluZyA6IFwiICsgcmVhc29uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fX3JldGFpbnNbcmVhc29uXS0tO1xuICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy5fX3JldGFpbnMuYWxsID09IDAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcG9zZSBtb3JlIHRoYW4gcmV0YWluaW5nICFcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fcmV0YWlucy5hbGwtLTtcbiAgICAgICAgXG4gICAgICAgIGlmICggIXRoaXMuX19yZXRhaW5zLmFsbCApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fcGVyc2lzdGVuY2VUbSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gJiYgY2xlYXJUaW1lb3V0KHRoaXMuX2Rlc3Ryb3lUTSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveVRNID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95VE0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVuKHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9fcmV0YWlucy5hbGwgJiYgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0ZW5jZVRtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhlbihzID0+ICghdGhpcy5fX3JldGFpbnMuYWxsICYmIHRoaXMuZGVzdHJveSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiZGVzdHJveVwiLCB0aGlzLl91aWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XG4gICAgICAgIGlmICggdGhpcy5fc3RhYmlsaXplciApXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc3RhYmlsaXplcik7XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggKVxuICAgICAgICAgICAgdGhpcy5fZm9sbG93ZXJzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgKCBmb2xsb3dlciApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9sbG93ZXJbMF0gIT09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZm9sbG93ZXJbMF0uc3RvcmVzIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZm9sbG93ZXJbMF0uc3RvcmVzW2ZvbGxvd2VyWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMuX2ZvbGxvd2Vycy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLl9yZXYgID0gdGhpcy5yZXY7XG4gICAgICAgIHRoaXMuZGVhZCAgICAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZXZzICAgICAgICAgICAgID0gdGhpcy5kYXRhID0gdGhpcy5zdGF0ZSA9IHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAgMjAxOCBXaXNlIFdpbGQgV2ViIC5cclxuICpcclxuICogIE1JVCBMaWNlbnNlXHJcbiAqXHJcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcbiAqICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiAqICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiAqICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuICogIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcbiAqICBTT0ZUV0FSRS5cclxuICpcclxuICogQGF1dGhvciA6IE5hdGhhbmFlbCBCcmF1blxyXG4gKiBAY29udGFjdCA6IGNhaXBpbGFic0BnbWFpbC5jb21cclxuICovXHJcblxyXG4vKipcclxuICogTWluaW1hbCBwdXNoIHNlcXVlbmNlciwgYXBwbHkgc3RvcmVzIHNwZWNpZmljIHRhc2sgaW4gdGhlIHJpZ2h0IG9yZGVyIChyb290IHN0b3JlcyBmaXJzdClcclxuICovXHJcbmxldCB0YXNrUXVldWUgICAgPSBbXSxcclxuICAgIGN1cldlaWdodCAgICA9IDAsXHJcbiAgICBtYXhXZWlnaHQgICAgPSAwLFxyXG4gICAgbWluV2VpZ2h0ICAgID0gMCxcclxuICAgIHRhc2tDb3VudCAgICA9IDAsXHJcbiAgICAvL2RlU3luY1N0ZXBzID0gMTAwMCxcclxuICAgIHRhc2ssXHJcbiAgICBpc1J1bm5pbmcsXHJcbiAgICBlcnJvckNhdGNoZXIgPSB7XHJcbiAgICAgICAgbGFzdEVycm9yOiBudWxsLFxyXG4gICAgICAgIGRpc3BhdGNoIDogZnVuY3Rpb24gKCBlcnJvciApIHtcclxuICAgICAgICAgICAgZXJyb3JDYXRjaGVyLmRpc2FibGUoKTtcclxuICAgICAgICAgICAgaWYgKCB0YXNrICYmIHRhc2tbMF0uaGFuZGxlRXJyb3IgKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrWzBdLmhhbmRsZUVycm9yKGVycm9yLCB0YXNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICggdGFzayApXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVTY29wZSA6IEEgdGFzayBoYXMgZmFpbGVkICEhXCIsIHRhc2tbMV0sIFwiIG9uIFwiLCB0YXNrWzBdLm5hbWUgfHwgdGFza1swXS5jb25zdHJ1Y3Rvci5uYW1lKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpc1J1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGFzayAgICAgID0gbnVsbDtcclxuICAgICAgICAgICAgcnVuTm93KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbmFibGUgICA6ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgPyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpXHJcbiAgICAgICAgICAgIH0gOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzLm9uKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVycm9yQ2F0Y2hlci5kaXNwYXRjaCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgZGlzYWJsZSAgOiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgID8gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JDYXRjaGVyLmRpc3BhdGNoKVxyXG4gICAgICAgICAgICB9IDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5yZW1vdmVMaXN0ZW5lcigndW5jYXVnaHRFeGNlcHRpb24nLCBlcnJvckNhdGNoZXIuZGlzcGF0Y2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbjtcclxuXHJcbmZ1bmN0aW9uIHJ1bk5vdygpIHtcclxuICAgIGlmICggIWlzUnVubmluZyApIHtcclxuICAgICAgICBydW4oKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgaXNSdW5uaW5nID0gdHJ1ZTtcclxuICAgIGVycm9yQ2F0Y2hlci5lbmFibGUoKTtcclxuICAgIHdoaWxlICggdGFza0NvdW50ICkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHRyeSBmb3IgdGhlIGN1cnJlbnQgd2VpZ2h0XHJcbiAgICAgICAgd2hpbGUgKCAhKHRhc2tRdWV1ZVtjdXJXZWlnaHRdICYmIHRhc2tRdWV1ZVtjdXJXZWlnaHRdLmxlbmd0aCkgKVxyXG4gICAgICAgICAgICBjdXJXZWlnaHQrKztcclxuICAgICAgICBcclxuICAgICAgICB0YXNrQ291bnQtLTtcclxuICAgICAgICB0YXNrID0gdGFza1F1ZXVlW2N1cldlaWdodF0uc2hpZnQoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiVGFzayA6IFwiLCB0YXNrWzFdLCBcIiBvbiBcIiwgdGFza1swXS5uYW1lKTtcclxuICAgICAgICB0YXNrWzBdW3Rhc2tbMV1dLmFwcGx5KHRhc2tbMF0sIHRhc2tbMl0pO1xyXG4gICAgfVxyXG4gICAgdGFzayA9IHVuZGVmaW5lZDtcclxuICAgIGVycm9yQ2F0Y2hlci5kaXNhYmxlKCk7XHJcbiAgICBcclxuICAgIGlzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgaWYgKCB0YXNrQ291bnQgKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChydW5Ob3cpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHVzaFRhc2soIG9iaiwgZm4sIGFyZ3ogKSB7XHJcbiAgICAgICAgbGV0IHdlaWdodCA9IG9iai5fc291cmNlcyAmJiBvYmouX3NvdXJjZXMubGVuZ3RoIHx8IDEsXHJcbiAgICAgICAgICAgIHN0YWNrICA9IHRhc2tRdWV1ZVt3ZWlnaHRdID1cclxuICAgICAgICAgICAgICAgIHRhc2tRdWV1ZVt3ZWlnaHRdIHx8IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1heFdlaWdodCA9IE1hdGgubWF4KG1heFdlaWdodCwgd2VpZ2h0KTtcclxuICAgICAgICBjdXJXZWlnaHQgPSBNYXRoLm1pbihjdXJXZWlnaHQsIHdlaWdodCk7XHJcbiAgICAgICAgdGFza0NvdW50Kys7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlB1c2ggVGFzayA6IFwiLCBmbiwgXCIgb24gXCIsIG9iai5uYW1lLCB3ZWlnaHQpO1xyXG4gICAgICAgIHN0YWNrLnB1c2goW29iaiwgZm4sIGFyZ3pdKTtcclxuICAgICAgICBzZXRUaW1lb3V0KHJ1bk5vdyk7XHJcbiAgICAgICAgcmV0dXJuIHN0YWNrLmxlbmd0aDtcclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVGFza1NlcXVlbmNlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vaW5kZXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIuL2luZGV4XCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVzY29wZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJlc2NvcGVcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9