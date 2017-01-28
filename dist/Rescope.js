"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Store2 = require("./Store");

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
                _Rescope.dispatch = dispatch.bind(_Rescope, argz[0]);
                _Rescope.context = argz[0] || _Store3.default.staticContext;
                return _Rescope;
            } else {
            return _Store3.default.map(argz[0], argz[1], scope);
        }
    };
},
    dispatch = function dispatch(context, cb) {
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
Rescope.dispatch = function (cb) {
    return dispatch(_Store3.default.staticContext, cb);
};
Rescope.context = _Store3.default.staticContext;

if (typeof window != 'undefined') {
    window.Rescope = Rescope;
}

exports.default = Rescope;
module.exports = exports["default"];
