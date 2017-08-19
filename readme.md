# Caipi Rescope

## ReScope What ?

ReScope is a simple, flexible, predictable \& effective Store system inspired by ReactJS methods.

## What ?

Rescope Stores read an entry state (kind of "key" that can be anything) and maintain the corresponding output datas in a deterministic way.<br>
These outputs are then, used as partial "key" in other stores states, or "predictible" datas in dumb components.<br>

Rescope Contexts manages a pool of stores and allow easy serialisation, export & restore of you're Application State.
Rescope Contexts provide : 
- Contexts inheriting & mixing,
- Chain destroy of contexts

Rescope can maintain, serialize and restore server & client side :
- enhanced records matching some ids,
- Processed & interpolated datas, ready for render
- Page state & status (act as router)
- session, etc... 

## Why ?

Because :

- This is simple, flexible & effective, 
- As Rescope stores are highly specialised and serializable, they could easly be moved in webworkers & node backends,
- This allow to remove 99.9% of all the tpls code and put them in clean, reusable & specialized stores, 
- 1 stem super class to rule all the async process
- Do all the jobs and really don't care witch kind of templates/whatever receive the datas

 
### What else ?

- Easy stores injections
- Semaphores API (wait, release, etc... fns )
- Promise like APIs
- Simple methods to contextualize, preload, hook & bind the stores
- Inheritable ES6/7 class
- Easy serialize
- Inherit node EventEmitter api
- Synchrone injection (React SSR) 
- Flexible Async management
- Lazy store instantiation
- Compatible webpack & nodejs
- Another alternative to Redux & co
- etc..

## Actions ?

DIY or push mutations (setState) on the right store

## (Dumb) Simple \& working examples [here](src/example) 

\*: The Store's context is common to the vanilla & react example

## Theoric example :

``` jsx

import Rescope from "rescope";

let pageContextStores = {/* ... some initial store definitions */}

let MyPageContext = new Rescope({...pageContextStores}); // stores are lazy instanciated on the context hashmap


// you can add some store to this context 
(new MyPageContext.Store("AnotherStore").setState({status:"yo!!!"})

// you can do a full preload using default / restored key values 
MyPageContext.fetch(
    (err, datas, context)=>{
        // here all the store are stable
        
   
    }
);


// or wait & bind only specifics stores and theirs dependencies 
(new MyPageContext.Store(["TopRecipes", "News"])
    .once(
     'stable',
     (state)=>{
       // state should contain TopRecipes & News
     }
    )
    
// Or inject them with synchrone initial output state :
// .... ( say we are in a react comp constructor )
this.state = {
   someKey : true,
   // inject & maintain AppState & AnotherStore outputs in the state
   ...MyPageContext(this, ["AppState", "AnotherStore"]) 
}
// ....

```




## Partial Prototype 
 
``` jsx
export default class Store extends EventEmitter {

    static use  = [];// overridable list of source stores
    static follow  = [];// overridable list of store that will trigger refine if updated
    static require  = [];// overridable list of  store/keys required to trigger refine & propagation
    
    static staticContext  = {};// default global stores context
    static defaultMaxListeners = 20;// for EventEmiter super class
    
    static initialState = null;// overridable initial state values
    
    
    datas = null; // synchrone initial output
    
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
     * @param context {object} context where to find the other stores
     * @param keys {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
     */
    constructor() 

    /**
     * get a store-key pair for Store::map
     * @param {string} name
     * @returns {{store: Store, name: *}}
     */
    as( name ) 
    
    /**
     * get a (store contructor)-key pair for Store::map
     * @param {string} name
     * @returns {{store: Store, name: *}}
     */
    static as( name ) 

    /**
     * Un bind this store off the given component-key
     * @param obj
     * @param key
     * @returns {Array.<*>}
     */
    unBind( obj, key ) 

    /**
     * Bind this store changes to the given component-key
     * @param obj {React.Component|Store|function)
     * @param key {string} optional key where to map the public state
     */
    bind( obj, key ) 

    /**
     * Overridable method to know if a datas change should be propag to the listening stores & components
     * If static follow is defined, shouldPropag will return true if any of the "follow" keys was updated 
     * If not it will always return true
     */
    shouldPropag( ns )

    /**
     * Overridable refiner / reducer / remapper 
     * If datas & newState are simple hash maps default refine will return {...lastDatas, ...newState}
     * if not it will return the last datas
     * @param datas
     * @param newState
     * @param changes
     * @returns {*}
     */
    refine(lastDatas, newState, changes) 

    /**
     * Pull & maintain some stores in the state
     * @param stores  {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
     */
    pull( stores ) 

    /**
     * Apply refine on the state & push the resulting datas to the followers if this.locks == 0
     * @param datas=null
     * @param cb
     */
    push( datas, cb ) 
    
    /**
     * Update the current state & refine it once the store is stable
     * @param pState
     * @param cb
     */
    setState( pState, cb ) 

    /**
     * once('stable', cb)
     * @param cb {function} then
     * @returns {this}
     */
    then( cb )
    
    /**
     * Add a lock so the store will not propag it state untill release() is call (this.locks reach 0)
     * @param previous {Store|number|Array} Store to wait, releases to wait or array of stuff to wait
     * @returns {this}
     */
    wait( previous )

    /**
     * Decrease locks for this store, if it reach 0 & it have a public state,
     * the state will be propagated to the followers,
     * then, all stuff passed to "then" will be exec / released
     * @param desync
     * @returns {*}
     */
    release( cb ) 


    destroy() 
}
```