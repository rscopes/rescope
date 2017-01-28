# Caipi Rescope

Scalable, 'state' based store for (but not limited to) ReactJS, with node EventEmitter api.

## Caipi What ?

ReScope is a flexible and easy to use Store system inspired by the ReactJS methods.

Mechanic is simple:

Each Store receive a state containing some key or raw datas,
   and maintain \& propag the corresponding datas.

A Store could maintain :
- the records matching some ids,
- Fetched & converted datas ready for render
- Page state & status
- session, etc... 

ReScope provide easy preloading, store dependencies, datas binding & async management.

### Any flux actions ?

Using ReScope you just have to set some key state values on the right Store.

## How it work

Say we define some stores :
 - currentUser job is to receive an userId and propag the corresponding UserRecord
 - currentTodo job is to receive an UserRecord and propag the corresponding user TodoList
 - selectedTodo receive TodoList and push a TodoList[0] with some data deps
 - todoStats receive TodoList & some geoloc info and then push a somme generated stats
etc...

So updating userId like this :
```jsx
currentUser.setState({_id:'theUserId'})
```
Will chain update active stores in the context and finally update the corresponding UI components.

## What else ?

- Redux alternative
- ES6/7 class
- Inherit node EventEmitter api
- Synchrone Init
- Flexible Async management
- Lazy instantiation
- Compatible webpack & nodejs
- etc..

## Working simple examples [here](src/example) 

\*: The Store's context is common to the vanilla & react example

## Theoric example :

``` jsx

import Rescope from "rescope";

let pageContext = {/* ... some store definitions */}

let MyPage = new Rescope({...pageContext}); 

// you can do a full dispatch
MyPage.fetch(
    (err, datas, context)=>{
        // here all the store are stable
    }
);

// or bind only specifics stores (will also instanciate & populate theirs dependecies) 
(new MyPage.Store(["someStores:asAnyAlias"])
    .once(
     'stable',
     (state)=>{
       // state.asAnyAlias 
     }
    )

```


## Prototype
 
``` jsx
export default class Store extends EventEmitter {

    static use  = [];// overridable list of source stores
    static follow  = [];// overridable list of store that will allow push if updated
    
    static staticContext  = {};// default global stores context
    static defaultMaxListeners = 20;


    /**
     * Map all nammed stores in {keys} to the {object}'s state
     * Hook componentWillUnmount (for react comp) or destroy to unBind them automatically
     * @static
     * @param object {React.Component|Store|...} target state aware object
     * @param keys {Array} Ex : ["session", "otherStaticNamedStore:key", store.as('anotherKey')]
     * @param context {object} context where to find the other stores
     */
    static map( component, keys, context ) 
    
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
    constructor() 

    /**
     * get a store-key pair for Store::map
     * @param {string} name
     * @returns {{store: Store, name: *}}
     */
    as( name ) 

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
     * Overridable method to know if a state change should be propag to the listening stores & components
     * If static follow is defined, shouldPropag will return true if any of the "follow" keys was updated 
     * If not it will always return true
     */
    shouldPropag( ns )

    /**
     * Overridable refiner / reducer / remapper 
     * If datas & newState are simple hash maps default refine will return {...lastPublicState, ...privateState}
     * if not it will return the last datas
     * @param datas
     * @param newState
     * @param changes
     * @returns {*}
     */
    refine(datas, newState, changes) 

    /**
     * Debounce this store propagation ( & reducing )
     * @param cb
     */
    stabilize( cb ) 

    /**
     * Pull stores in the private state
     * @param stores  {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
     */
    pull( stores ) 

    /**
     * Apply reduce/remap on the private state & push the state to the followers if this.locks == 0
     * @param datas=null
     * @param cb
     */
    push( datas, cb ) 
    
    /**
     * Update the current private state & push it once the store is stable
     * @param pState
     * @param cb
     */
    setState( pState, cb ) 

    /**
     * Replace the current private state & push it once the store is stable
     * @param pState
     * @param cb
     */
    replaceState( pState, cb ) 


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