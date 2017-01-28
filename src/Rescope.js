import Store from "./Store";

let Rescope_factory = function Rescope_factory( scope ) {
        return function Rescope( ...argz ) {
            if ( this && this.constructor === Rescope )// using new
            {
                let _Rescope      = Rescope_factory(argz[0]);
                _Rescope.Store    = class ContextualStore extends Store {
                    constructor() {
                        super(argz[0], ...arguments)
                    }
                };
                _Rescope.fetch = fetch.bind(_Rescope, argz[0]);
                _Rescope.context  = argz[0] || Store.staticContext;
                return _Rescope;
            } else {
                return Store.map(argz[0], argz[1], scope)
            }
        }
    },
    fetch        = function fetch( context, cb ) {
        context    = context || Store.staticContext;
        let stores = Object.keys(context);
        if ( !stores.length )
            return cb(null, context);
        let mountAllStore = new Store(context);
        mountAllStore.pull(stores, true);
        mountAllStore.then(( state ) => cb(null, state, context));
    },
    Rescope         = Rescope_factory(null);

Rescope.Store    = Store;
Rescope.fetch = ( cb ) => fetch(Store.staticContext, cb);
Rescope.context  = Store.staticContext;

if ( typeof window != 'undefined' ) {
    window.Rescope = Rescope;
}

export default Rescope;

