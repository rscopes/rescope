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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(189);
	module.exports = __webpack_require__(190);


/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Store2 = __webpack_require__(180);
	
	var _Store3 = _interopRequireDefault(_Store2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Rescope_factory = function Rescope_factory(scope) {
	    return function Rescope() {
	        for (var _len = arguments.length, argz = Array(_len), _key = 0; _key < _len; _key++) {
	            argz[_key] = arguments[_key];
	        }
	
	        if (this && this.constructor === Rescope) // using new
	            {
	                var _Rescope = Rescope_factory(argz[0]);
	                _Rescope.Store = function (_Store) {
	                    _inherits(ContextualStore, _Store);
	
	                    function ContextualStore() {
	                        var _ref;
	
	                        _classCallCheck(this, ContextualStore);
	
	                        return _possibleConstructorReturn(this, (_ref = ContextualStore.__proto__ || Object.getPrototypeOf(ContextualStore)).call.apply(_ref, [this, argz[0]].concat(Array.prototype.slice.call(arguments))));
	                    }
	
	                    return ContextualStore;
	                }(_Store3.default);
	                _Rescope.fetch = fetch.bind(_Rescope, argz[0]);
	                _Rescope.context = argz[0] || _Store3.default.staticContext;
	                return _Rescope;
	            } else {
	            return _Store3.default.map(argz[0], argz[1], scope, null, argz[2]);
	        }
	    };
	},
	    setContext = function setContext(context) {},
	    fetch = function fetch(context, cb) {
	    context = context || _Store3.default.staticContext;
	    var stores = Object.keys(context);
	    if (!stores.length) return cb(null, context);
	    var mountAllStore = new _Store3.default(context);
	    mountAllStore.pull(stores, true);
	    mountAllStore.then(function (state) {
	        return cb(null, state, context);
	    });
	},
	    Rescope = Rescope_factory(null);
	
	Rescope.Store = _Store3.default;
	Rescope.fetch = function (cb) {
	    return fetch(_Store3.default.staticContext, cb);
	};
	Rescope.context = _Store3.default.staticContext;
	try {
	    if (typeof window != 'undefined') {
	        window.Rescope = Rescope;
	    }
	} catch (e) {}
	
	exports.default = Rescope;
	module.exports = exports["default"];

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Ultra scalable state-aware store
	 *
	 * @todo : lot of optims...
	 */
	
	var isString = __webpack_require__(181),
	    isArray = __webpack_require__(182),
	    isFunction = __webpack_require__(183),
	    EventEmitter = __webpack_require__(184),
	    objProto = Object.getPrototypeOf({});
	
	var Store = function (_EventEmitter) {
	    _inherits(Store, _EventEmitter);
	
	    _createClass(Store, null, [{
	        key: 'as',
	        // false or tm without followers
	
	        /**
	         * get a Builder-key pair for Store::map
	         * @param {string} name
	         * @returns {{store: Store, name: *}}
	         */
	        // default state
	        // overridable list of source stores
	        value: function as(name) {
	            return { store: this, name: name };
	        }
	
	        /**
	         * Map all named stores in {keys} to the {object}'s state
	         * Hook componentWillUnmount (for react comp) or destroy to unBind them automatically
	         * @static
	         * @param object {React.Component|Store|...} target state aware object
	         * @param keys {Array} Ex : ["session", "otherStaticNamedStore:key", store.as('anotherKey')]
	         */
	        // overridable list of store that will allow push if updated
	
	    }, {
	        key: 'map',
	        value: function map(component, keys, context, origin) {
	            var setInitial = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];
	
	            var targetRevs = component._revs || {};
	            var targetContext = component.stores || (component.stores = {});
	            var initialOutputs = {};
	            keys = isArray(keys) ? [].concat(_toConsumableArray(keys)) : [keys];
	
	            context = context || Store.staticContext;
	            keys = keys.filter(function (key) {
	                if (!key) {
	                    console.error("Not a mappable store item '" + key + "' in " + origin + ' !!');
	                    return false;
	                }
	                var name = void 0,
	                    alias = void 0,
	                    store = void 0;
	                if (key.store && key.name) {
	                    alias = name = key.name;
	                    store = key.store;
	                } else if (isFunction(key)) {
	                    name = alias = key.name || key.defaultName;
	                    store = key;
	                } else {
	                    key = key.split(':');
	                    name = key[0];
	                    store = context[key[0]];
	                    alias = key[1] || key[0];
	                }
	                if (targetRevs[name]) return false; // ignore dbl uses for now
	                if (!store) {
	                    console.error("Not a mappable store item '" + name + "/" + alias + "' in " + origin + ' !!', store);
	                    return false;
	                } else if (isFunction(store)) {
	                    context[name] = new store(context);
	
	                    context[name].relink(name);
	                    context[name].bind(component, alias, setInitial);
	                    // if ( context[key[0]].state ) {// do sync push after constructor
	                    //     context[key[0]].push();
	                    // }
	                } else {
	                    store.bind(component, alias, setInitial);
	                }
	                targetRevs[alias] = targetRevs[alias] || true;
	                targetContext[alias] = targetContext[alias] || context[name];
	                if (context[name].hasOwnProperty('datas')) initialOutputs[alias] = context[name].datas;
	                return true;
	            });
	            var mixedCWUnmount,
	                unMountKey = component.isReactComponent ? "componentWillUnmount" : "destroy";
	
	            if (component.hasOwnProperty(unMountKey)) {
	                mixedCWUnmount = component[unMountKey];
	            }
	
	            component[unMountKey] = function () {
	                // todo hop
	                delete this[unMountKey];
	                if (mixedCWUnmount) this[unMountKey] = mixedCWUnmount;
	                keys.map(function (key) {
	                    var name = void 0,
	                        alias = void 0,
	                        store = void 0;
	                    if (key.store && key.name) {
	                        alias = name = key.name;
	                        store = key.store;
	                    } else if (isFunction(key)) {
	                        name = alias = key.name || key.defaultName;
	                        store = context[name];
	                    } else {
	                        key = key.split(':');
	                        name = key[0];
	                        store = context[key[0]];
	                        alias = key[1] || key[0];
	                    }
	
	                    store.unBind(component, alias);
	                });
	                return this[unMountKey] && this[unMountKey].apply(this, arguments);
	            };
	
	            return initialOutputs;
	        }
	
	        /**
	         * Constructor, will build a rescope store
	         *
	         * (context, name, keys, refine)
	         * (context, name, keys)
	         * (keys, name)
	         * (keys)
	         * (context, name, refine)
	         * (context, name)
	         * (context)
	         *
	         * @param context {object} context where to find the other stores (default : static staticContext )
	         * @param keys {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
	         */
	
	    }]);
	
	    function Store() {
	        _classCallCheck(this, Store);
	
	        var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));
	
	        var argz = [].concat(Array.prototype.slice.call(arguments)),
	            _static = _this.constructor,
	            context = !isArray(argz[0]) && !isString(argz[0]) ? argz.shift() : _static.staticContext,
	            name = isString(argz[0]) ? argz[0] : _static.name,
	            watchs = isArray(argz[0]) ? argz.shift() : [],
	            // watchs need to be defined after all the store are registered : so we can't deal with any "static use" automaticly
	        refine = isFunction(argz[0]) ? argz.shift() : null;
	        _this.setMaxListeners(Store.defaultMaxListeners);
	        _this.locks = 0;
	        _this._onStabilize = [];
	
	        if (isString(argz[0])) {
	            if (context[name]) console.warn("ReScope: Overwriting an existing static named store ( %s ) !!", name);
	            context[name] = _this;
	        }
	
	        // this.state      = this.state || {};
	
	        _this._watchs = watchs;
	        _this.name = name;
	        _this.context = context;
	        _this._stable = true;
	        _this._rev = 1;
	        _this._revs = {};
	        _this.stores = {};
	        _this._followers = [];
	
	        if (refine) _this.refine = refine;
	
	        if (!!_this._watchs) {
	            // if there initial watchs anyway
	            _this.pull(_this._watchs);
	        }
	
	        if (_static.initialState && _this.datas === undefined) {
	            // sync refine
	            _this.state = _extends({}, _static.initialState);
	            if (_this.isComplete()) _this.datas = _this.refine(_this.datas, _this.state, _this.state);
	        }
	        _this._stable = _this.datas !== undefined; // stable if it have initial result datas
	        return _this;
	    }
	
	    /**
	     * Overridable method to know if a state change should be propag to the listening stores & components
	     * If static follow is defined, shouldPropag will return true if any of the "follow" keys was updated
	     * If not it will always return true
	     */
	
	
	    _createClass(Store, [{
	        key: 'shouldPropag',
	        value: function shouldPropag(nDatas) {
	            var _static = this.constructor,
	                r,
	                cDatas = this.datas;
	
	            // if ( !cState )
	            //     return true;
	            if (!cDatas && (!_static.follow || !_static.follow.length || _static.follow && _static.follow.reduce(function (r, i) {
	                return r || nDatas && nDatas[i];
	            }, false))) return true;
	
	            if (isArray(_static.follow)) _static.follow.forEach(function (key) {
	                r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	            });else if (_static.follow === 'strict') r = nDatas === cDatas;else {
	                cDatas && Object.keys(cDatas).forEach(function (key) {
	                    r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	                });
	                nDatas && Object.keys(nDatas).forEach(function (key) {
	                    r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	                });
	            }
	
	            return !!r;
	        }
	
	        /**
	         * Overridable refiner / remapper
	         * If state or lastPublicState are simple hash maps refine will return {...datas, ...state}
	         * if not it will return the last private state
	         * @param datas
	         * @param state
	         * @returns {*}
	         */
	
	    }, {
	        key: 'refine',
	        value: function refine(datas, state, changes) {
	            state = state || this.state;
	
	            if (!datas || datas.__proto__ !== objProto || state.__proto__ !== objProto) return state;else return _extends({}, datas, state);
	        }
	
	        /**
	         * Debounce this store propagation ( & reducing )
	         * @param cb
	         */
	
	    }, {
	        key: 'stabilize',
	        value: function stabilize(cb) {
	            var _this2 = this;
	
	            var me = this;
	            cb && me.once('stable', cb);
	            me._stable = false;
	
	            if (this._stabilizer) clearTimeout(this._stabilizer);
	
	            this._stabilizer = setTimeout(this.push.bind(this, null, function () {
	                //@todo
	                // me._stable       = true;
	                _this2._stabilizer = null;
	                // this.release();
	            }));
	        }
	
	        /**
	         * Pull stores in the private state
	         * @param stores  {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
	         */
	
	    }, {
	        key: 'pull',
	        value: function pull(stores, doWait, origin) {
	            var _this3 = this;
	
	            var initialOutputs = Store.map(this, stores, this.context, origin, true);
	            if (doWait) {
	                this.wait();
	                stores.forEach(function (s) {
	                    return _this3.context[s] && _this3.wait(_this3.context[s]);
	                });
	                this.release();
	            }
	            return initialOutputs;
	        }
	
	        /**
	         * Apply refine/remap on the private state & push the resulting "public" state to followers
	         * @param cb
	         */
	
	    }, {
	        key: 'push',
	        value: function push(datas, force, cb) {
	            cb = force === true ? cb : force;
	            force = force === true;
	            var i = 0,
	                me = this,
	                nextState = !datas && _extends({}, this.state, this._changesSW) || this.state,
	                nextDatas = datas || (this.isComplete(nextState) ? this.refine(this.datas, nextState, this._changesSW) : this.datas);
	
	            this.state = nextState;
	            if (!force && (!this.datas && this.datas === nextDatas || !this.shouldPropag(nextDatas))) {
	                cb && cb();
	                return false;
	            }
	
	            this.datas = nextDatas;
	            this.locks++;
	            this.release(cb);
	        }
	
	        /**
	         * Update the current private state & push it once the store is stable
	         * @param pState
	         * @param cb
	         */
	
	    }, {
	        key: 'setState',
	        value: function setState(pState, cb) {
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
	            }if (change) {
	                this.stabilize(cb);
	            } else cb && cb();
	            return this;
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
	
	        /**
	         * relink bindings & requires
	         * @param {string} name
	         * @returns {{store: Store, name: *}}
	         */
	
	    }, {
	        key: 'relink',
	        value: function relink(from) {
	            var _this4 = this;
	
	            var context = this.context,
	                _static = this.constructor;
	            if (_static.use) {
	                //todo unlink
	                this.pull(_static.use, false, from);
	            }
	
	            if (_static.require) {
	                _static.require.forEach(function (store) {
	                    return _this4.wait(context[store]);
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
	            var state = arguments.length <= 0 || arguments[0] === undefined ? this.state : arguments[0];
	
	            var _static = this.constructor;
	            return !_static.require || !_static.require.length || state && _static.require.reduce(function (r, key) {
	                return r && state[key];
	            }, true);
	        }
	
	        /**
	         * Un bind this store off the given component-key
	         * @param obj
	         * @param key
	         * @returns {Array.<*>}
	         */
	
	    }, {
	        key: 'unBind',
	        value: function unBind(obj, key) {
	            var followers = this._followers,
	                i = this._followers.length;
	            while (i--) {
	                if (followers[i][0] == obj && followers[i][1] == key) return followers.splice(i, 1);
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
	            var setInitial = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	
	            this._followers.push([obj, key]);
	            if (setInitial && this.datas && this._stable) {
	                if (typeof obj != "function") {
	                    if (key) obj.setState(_defineProperty({}, key, this.datas));else obj.setState(this.datas);
	                } else {
	                    obj(this.datas);
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
	            if (this._stable) return cb(this.datas);
	            this.once('stable', cb);
	        }
	
	        /**
	         * Add a lock so the store will not propag it state untill release() is call
	         * @param previous {Store|number|Array} @optional wf to wait, releases to wait or array of stuff to wait
	         * @returns {TaskFlow}
	         */
	
	    }, {
	        key: 'wait',
	        value: function wait(previous) {
	            if (typeof previous == "number") return this.locks += previous;
	            if (isArray(previous)) return previous.map(this.wait.bind(this));
	
	            this._stable = false;
	            this.locks++;
	            if (previous && isFunction(previous.then)) {
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
	        value: function release(cb) {
	            var _this5 = this;
	
	            var _static = this.constructor;
	            var i = 0;
	
	            if (! --this.locks && this.datas && this.isComplete()) {
	                this._stable = true;
	
	                this._rev = 1 + (this._rev + 1) % 1000000; //
	                if (this._followers.length) this._followers.forEach(function (follower) {
	                    if (!_this5.datas) return;
	                    if (typeof follower[0] == "function") {
	                        follower[0](_this5.datas);
	                    } else {
	                        // cb && i++;
	                        follower[0].setState(follower[1] ? _defineProperty({}, follower[1], _this5.datas) : _this5.datas
	                        // ,
	                        // cb && (
	                        //     () => (!(--i) && cb())
	                        // )
	                        );
	                    }
	                });
	
	                this.emit('stable', this.datas);
	                cb && cb();
	            } else cb && this.then(cb);
	            return this;
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	
	            if (this._stabilizer) clearTimeout(this._stabilizer);
	            if (this._followers.length) this._followers.forEach(function (follower) {
	                if (typeof follower[0] !== "function") {
	                    if (follower[0].stores) delete follower[0].stores[follower[1]];
	                }
	            });
	            this._followers = null;
	            this.dead = true;
	            if (this.name && this.context[this.name] === this) delete this.context[this.name];
	            this._revs = this.datas = this.state = this.context = null;
	            this.removeAllListeners();
	        }
	    }]);
	
	    return Store;
	}(EventEmitter);
	
	Store.use = [];
	Store.staticContext = {};
	Store.initialState = undefined;
	Store.defaultMaxListeners = 20;
	Store.autokill = false;
	exports.default = Store;
	module.exports = exports['default'];

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;;(function (factory) {
	  if (true)
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  else if (typeof exports === 'object' && !!exports && !exports.nodeType)
	    if (typeof module === 'object' && !!module && module.exports)
	      module.exports = factory();
	    else
	      exports['default'] = factory();
	  else if (typeof YUI === 'function' && YUI.add)
	    YUI.add('is-string', function (Y) { Y['default'] = factory(); }, '1.0.7');
	  else
	    String.isString = factory();
	})(function () {
	  var strToString  = ('').toString,
	      hasBind      = Function.prototype && Function.prototype.bind,
	      strToStrCall = hasBind && strToString.call.bind(strToString),
	      isString     = function (str) {
	        /*@cc_on
	          @if (@_jscript_version >= 5) @*/
	            try {
	                hasBind ? strToStrCall(str) : strToString.call(str);
	                return true;
	            } catch (e) {
	                return false;
	            }
	          /*@end
	        @*/
	      };
	
	  return function (str) {
	    return  typeof str === 'string' ||
	            str && typeof str === 'object' &&
	            /*@cc_on
	              @if (@_jscript_version < 5.5)
	                /^\s*function\s*String\(\)\s*{\s*\[native code\]\s*}\s*$/.test(str.constructor)
	              @else @*/
	                isString(str)
	              /*@end
	            @*/
	            || false;
	  };
	});


/***/ },

/***/ 182:
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },

/***/ 183:
/***/ function(module, exports) {

	// if (typeof require !== 'undefined') {}
	
	var isFunction = function (functionToCheck) {
		var getType = {};
		return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	};
	
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = isFunction;
	}

/***/ },

/***/ 184:
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp, _class2, _temp2, _class3, _temp3, _class4, _temp4; /**
	                                                                       * @author Nathanael BRAUN
	                                                                       *
	                                                                       * Date: 03/12/2016
	                                                                       * Time: 09:28
	                                                                       */
	
	
	var _Rescope = __webpack_require__(179);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var stubs = __webpack_require__(187);
	
	var MyStoreContext = {
	    status: (_temp = _class = function (_Store) {
	        _inherits(status, _Store);
	
	        function status() {
	            _classCallCheck(this, status);
	
	            return _possibleConstructorReturn(this, (status.__proto__ || Object.getPrototypeOf(status)).apply(this, arguments));
	        }
	
	        return status;
	    }(_Rescope.Store), _class.use = ["session"], _temp),
	    session: (_temp2 = _class2 = function (_Store2) {
	        _inherits(session, _Store2);
	
	        function session() {
	            _classCallCheck(this, session);
	
	            return _possibleConstructorReturn(this, (session.__proto__ || Object.getPrototypeOf(session)).apply(this, arguments));
	        }
	
	        return session;
	    }(_Rescope.Store), _class2.initialState = {
	        currentUserId: "MrNice"
	    }, _temp2),
	    currentUser: (_temp3 = _class3 = function (_Store3) {
	        _inherits(currentUser, _Store3);
	
	        function currentUser() {
	            _classCallCheck(this, currentUser);
	
	            return _possibleConstructorReturn(this, (currentUser.__proto__ || Object.getPrototypeOf(currentUser)).apply(this, arguments));
	        }
	
	        _createClass(currentUser, [{
	            key: "refine",
	            // list of source stores id
	
	            value: function refine(datas, newState, changes) {
	                var _this4 = this;
	
	                var NewUserId = newState.session && newState.session.currentUserId,
	                    LastUserId = datas && datas._id;
	
	                console.info("currentUser state updated : ", changes);
	
	                if (NewUserId != LastUserId) {
	                    this.wait(); // don't propag until released
	                    setTimeout(function () {
	                        // get the user record or whatever...
	                        _this4.push({
	                            _id: NewUserId,
	                            login: NewUserId
	                        }, function () {
	                            _this4.context.status.setState({ currentUser: JSON.stringify(_this4.datas) });
	                        });
	
	                        _this4.release();
	                    }, 500);
	                    this.context.status.setState({ currentUser: "user id change ! doing some async..." });
	                }
	
	                return datas;
	            }
	        }]);
	
	        return currentUser;
	    }(_Rescope.Store), _class3.use = ["session"], _temp3),
	    userEvents: (_temp4 = _class4 = function (_Store4) {
	        _inherits(userEvents, _Store4);
	
	        function userEvents() {
	            _classCallCheck(this, userEvents);
	
	            return _possibleConstructorReturn(this, (userEvents.__proto__ || Object.getPrototypeOf(userEvents)).apply(this, arguments));
	        }
	
	        _createClass(userEvents, [{
	            key: "refine",
	            // list of source stores id
	            //
	            // shouldPropag( newDatas ) {
	            //     return !!newDatas.userId;
	            // }
	
	            value: function refine(datas, newState, changes) {
	                var _this6 = this;
	
	                var nUserId = newState.currentUser && newState.currentUser._id,
	                    cUserId = datas && datas.userId;
	
	                if (nUserId != cUserId) {
	                    this.wait(); // do some async
	                    setTimeout(function () {
	                        // get somme user events or whatever...
	                        _this6.push({
	                            userId: nUserId,
	                            count: stubs[nUserId].length,
	                            events: stubs[nUserId],
	                            eventsByType: stubs[nUserId].reduce(function (res, item) {
	                                res[item.type] = res[item.type] || [res[item.type]];
	                                res[item.type].push(item);
	                                return res;
	                            }, {})
	                        }, function () {
	                            _this6.context.status.setState({ userEvents: "" + stubs[nUserId].length + " events" });
	                        });
	                        _this6.release();
	                    }, 500);
	                    this.context.status.setState({ userEvents: "user datas change ! doing some async..." });
	                }
	
	                return datas;
	            } // list of source stores id
	
	        }]);
	
	        return userEvents;
	    }(_Rescope.Store), _class4.use = ["currentUser"], _class4.require = ["currentUser"], _temp4)
	};
	
	exports.default = function () {
	    return _extends({}, MyStoreContext);
	};
	
	module.exports = exports["default"];

/***/ },

/***/ 187:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * @author Nathanael BRAUN
	 *
	 * Date: 25/01/2017
	 * Time: 09:16
	 */
	exports.default = {
	    "MrNice": [{
	        type: "event",
	        text: "nice event"
	    }, {
	        type: "news",
	        text: "nice news"
	    }, {
	        type: "poke",
	        text: "some poke"
	    }, {
	        type: "event",
	        text: "another event"
	    }, {
	        type: "comment",
	        text: "another comment"
	    }],
	    "MissTick": [{
	        type: "event",
	        text: "some events"
	    }, {
	        type: "news",
	        text: "some news"
	    }, {
	        type: "poke",
	        text: "some poke"
	    }, {
	        type: "event",
	        text: "another event"
	    }]
	};
	module.exports = exports["default"];

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Rescope = __webpack_require__(179);
	
	var _Rescope2 = _interopRequireDefault(_Rescope);
	
	var _StoresContext = __webpack_require__(186);
	
	var _StoresContext2 = _interopRequireDefault(_StoresContext);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @author Nathanael BRAUN
	 *
	 * Date: 25/01/2017
	 * Time: 11:08
	 */
	function NewsListComp() {
	    var target = arguments.length <= 0 || arguments[0] === undefined ? document.createElement('div') : arguments[0];
	
	
	    this.setState = function (state) {
	        target.innerHTML = state.userEvents && state.userEvents.events.map(function (evt) {
	            return "\n                                    <div style=\"border: solid 1px lightgrey;border-radius: 3px\">\n                                        <b><u><center>Event type : " + evt.type + "</center></u></b>\n                                        <p>" + evt.text + "</p>\n                                    </div>";
	        }).join() || "<b><u><center>Loading...</center></u></b>";
	    };
	    this.node = target;
	}
	
	window.StoreContext = _StoresContext2.default;
	window.NewsListComp = NewsListComp;
	exports.default = NewsListComp;
	module.exports = exports["default"];

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "example/vanilla/index.html";

/***/ }

/******/ });
//# sourceMappingURL=NewsListComp.js.map