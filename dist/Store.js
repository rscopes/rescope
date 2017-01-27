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
 * @todo : optims? bugs?
 */

var isString = require('isstring'),
    isArray = require('isarray'),
    isFunction = require('isfunction'),
    EventEmitter = require('events'),
    objProto = Object.getPrototypeOf({});

var Store = function (_EventEmitter) {
    _inherits(Store, _EventEmitter);

    _createClass(Store, null, [{
        key: 'map',


        /**
         * Map all nammed stores in {keys} to the {object}'s state
         * Hook componentWillUnmount (for react comp) or destroy to unBind them automatically
         * @static
         * @param object {React.Component|Store|...} target state aware object
         * @param keys {Array} Ex : ["session", "otherStaticNamedStore:key", store.as('anotherKey')]
         */
        // overridable list of store that will allow push if updated
        value: function map(component, keys, context, origin) {
            var targetRevs = component._revs || {};
            var targetContext = component.stores || {};
            keys = isArray(keys) ? [].concat(_toConsumableArray(keys)) : [keys];

            context = context || Store.staticContext;
            keys = keys.filter(function (key) {

                if (key.store && key.name) {
                    if (targetRevs[key.name]) return false; // no dbl binds
                    key.store.bind(component, key.name);
                    targetRevs[key.name] = targetRevs[key.name] || true;
                    targetContext[key.name] = targetContext[key.name] || key.store;
                } else if (isString(key)) {
                    key = key.split(':');
                    if (targetRevs[key[1] || key[0]]) return false; // no dbl binds
                    if (isFunction(context[key[0]])) {
                        context[key[0]] = new context[key[0]](context);
                        if (context[key[0]].constructor.use) {
                            context[key[0]].pull(context[key[0]].constructor.use, key[0]);
                        }
                    }
                    if (!context[key[0]]) {
                        console.error("Not a mappable store item '" + key[0] + "' in " + origin + ' !!');
                    }
                    context[key[0]] && context[key[0]].bind && context[key[0]].bind(component, key[1] || key[0]);
                    targetRevs[key[1] || key[0]] = targetRevs[key[1] || key[0]] || true;
                    targetContext[key[1] || key[0]] = targetContext[key[1] || key[0]] || context[key[0]];
                } else {
                    console.error("Not a mappable store item '" + key + "' in " + origin + ' !!');
                }

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
                    if (key.store && key.name) {
                        key.store.unBind(component, key.name);
                    } else {
                        key = key.split(':');
                        context[key[0]] && context[key[0]].unBind(component, key[1] || key[0]);
                    }
                });
                return this[unMountKey] && this[unMountKey].apply(this, arguments);
            };
        }

        /**
         * Constructor, will build a rescope store
         *
         * (context, keys, name)
         * (context, name)
         * (context)
         *
         * @param context {object} context where to find the other stores
         * @param keys {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
         */
        // overridable list of source stores

    }]);

    function Store() {
        _classCallCheck(this, Store);

        var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));

        var argz = [].concat(Array.prototype.slice.call(arguments)),
            _static = _this.constructor,
            context = !isArray(argz[0]) && !isString(argz[0]) ? argz.shift() : _static.staticContext,
            watchs = isArray(argz[0]) ? argz.shift() : [],
            // watchs need to be defined after all the store are registered : so we can't deal with any "static use" automaticly
        name = isString(argz[0]) ? argz[0] : _static.name;
        _this.setMaxListeners(Store.defaultMaxListeners);
        _this.locks = 0;
        _this._onStabilize = [];

        if (isString(argz[0])) {
            if (context[name]) console.warn("TorrentStore: Overwriting an existing static named store ( %s ) !!", name);
            context[name] = _this;
        }

        _this.state = {};
        _this._watchs = watchs;
        _this.name = name;
        _this.context = context;
        _this._stable = true;
        _this._rev = 1;
        _this._revs = {};
        _this.stores = {};
        _this._followers = [];
        if (!!_this._watchs) {
            // if there initial watchs anyway
            _this.pull(_this._watchs);
        }

        return _this;
    }

    /**
     * get a store-key pair for Store::map
     * @param {string} name
     * @returns {{store: Store, name: *}}
     */


    _createClass(Store, [{
        key: 'as',
        value: function as(name) {
            return { store: this, name: name };
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
            this._followers.push([obj, key]);
            if (this.datas && this._stable) {
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
            this.once('stable', cb);
        }

        /**
         * Overridable method to know if a state change should be propag to the listening stores & components
         * If static follow is defined, shouldPropag will return true if any of the "follow" keys was updated
         * If not it will always return true
         */

    }, {
        key: 'shouldPropag',
        value: function shouldPropag(ns) {
            var _static = this.constructor,
                r,
                cState = this.datas;

            // if ( !cState )
            //     return true;
            if (!cState && (!_static.follow || !_static.follow.length || _static.follow && _static.follow.reduce(function (r, i) {
                return r || ns[i];
            }, false))) return true;

            _static.follow && _static.follow.forEach(function (key) {
                r = r || cState[key] !== ns[key];
            });

            return !_static.follow || !_static.follow.length || !!r;
        }

        /**
         * Overridable refiner / remapper
         * If privateState or lastPublicState are simple hash maps refine will return {...lastPublicState, ...privateState}
         * if not it will return the last private state
         * @param lastPublicState
         * @param privateState
         * @returns {*}
         */

    }, {
        key: 'refine',
        value: function refine(lastPublicState, privateState) {
            privateState = privateState || this.state;
            if (!lastPublicState || lastPublicState.__proto__ !== objProto || privateState.__proto__ !== objProto) return privateState;else return _extends({}, lastPublicState, privateState);
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
                me._stable = true;
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
        value: function pull(stores, origin) {
            return Store.map(this, stores, this.context, origin);
        }

        /**
         * Apply refine/remap on the private state & push the resulting "public" state to followers
         * @param cb
         */

    }, {
        key: 'push',
        value: function push(state, force, cb) {
            cb = force === true ? cb : force;
            var i = 0,
                me = this,
                nState = state || this.refine(this.datas, this.state);

            if (!force && !this.shouldPropag(nState)) {
                cb && cb();
                return false;
            }

            this.datas = nState;
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
                me = this,
                change;
            for (var k in pState) {
                if (pState.hasOwnProperty(k) && (pState[k] != this.state[k] || this.state[k] && pState[k] && pState[k]._rev != this._revs[k] // rev/hash update
                )) {
                    change = true;
                    this._revs[k] = pState[k] && pState[k]._rev || true;
                    this.state[k] = pState[k];
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
         * Add a lock so the store will not propag it state untill release() is call
         * @param previous {Store|number|Array} @optional wf to wait, releases to wait or array of stuff to wait
         * @returns {TaskFlow}
         */

    }, {
        key: 'wait',
        value: function wait(previous) {
            if (typeof previous == "number") return this.locks += previous;
            if (isArray(previous)) return previous.map(this.wait.bind(this));

            if (previous && isFunction(previous.then)) previous.then(this.release.bind(this));

            this.locks++;
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
            var _this3 = this;

            var i = 0;

            if (! --this.locks && this.datas) {
                this._complete = true;

                this._rev = 1 + (this._rev + 1) % 1000000; //
                if (this._followers.length) this._followers.forEach(function (follower) {
                    if (!_this3.datas) return;
                    if (typeof follower[0] == "function") {
                        follower[0](_this3.datas);
                    } else {
                        cb && i++;
                        follower[0].setState(follower[1] ? _defineProperty({}, follower[1], _this3.datas) : _this3.datas, cb && function () {
                            return ! --i && cb();
                        });
                    }
                });

                this.emit('stable', this.datas);
                !i && cb && cb();
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
Store.follow = [];
Store.staticContext = {};
Store.defaultMaxListeners = 20;
exports.default = Store;
module.exports = exports['default'];
