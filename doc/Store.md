# ReScope Stores

_ this is a draft  wip doc _

## Some theoretical stuffs

### Stores Workflow

- A Store have it's state updated ( action has pushed state update or a source store had its data updated )
- If this state have the required & followed value
- The apply function push new data in an async or sync way
- The store is stabilized and (if there is new data) propagated
- listening stores have theirs state updated and we go to step 1 until the whole scope is stable

### About state uptates & theirs propagation

The more a store have sources, the more it state update will be applied first<br>
This is required to :
- Keep leafs stores sync & coherent with their sources
- Apply merged state updates to root stores
- Keep the global app state coherent

This mean whatever the number of stores & the complexity of the deps,<br>
updating a store state will update its synchrone child stores immediately.

### Stores initial state / data

A store initialized with data will be stable synchronously when instantiated. <br>
If it only have a state but no data, the apply function will be called by the constructor synchronously. <br>

### Stores initial state & data

Serialization & restoration are managed by the Scopes objects.<br>
Stores only have to maintain the state-data coherence, but can have initial state and data from different sources :<br>

- Using initial state & data :
```jsx
class MyStore extends Store {
        static state = {};// initial state (soft cloned)
        static data = {};// initial data (soft cloned)

        state = {
        // instance initial state (merged over cfg & static definitions)
        }
        data = {}// precedence over cfg.data
};

let MyStoreInstance = new MyStore(
        BaseScope,
        {
            state : {}, // merged over the static state
            data  : {}// precedence over static data
        }
)

```

### Stability (the Store:apply function)

When state updates occurs, a store state stop being coherent with its results data.<br>
In the ReScope stores, the role of the "apply" function is to make the store data predictable basing on its state.

This can be done in 2 way :
 - In a synchronized way, by returning a new data hashmap from the "apply" fn

```jsx

/*...*/
    apply(data, new_state, changes_in_state){
        let newData = {...data, ...state};
        /* do synchrone interpolation & remaps in newData here */
        return newData;
    }
/*...*/

```

 - In an async way :
    - using this.push(newData), modifying this.data or by returning a data referenced hashmap
    - and mostly by using wait() & release() paired functions, which will keep the store unstable and lock its propagation until its locks reach 0 (all wait() calls becomes released).


```jsx

/*...*/
    apply(data={}, new_state, changes_in_state){
        let {async1={}, async2={}, async3={}} = data;
        /* do async fill / update the data */
        this.wait('anAsyncRabbit')
        doSomeAsync(
            (err,res)=>{
                async1.datum=err||res;
                this.release('anAsyncRabbit')
            }
        )

        return {async1, async2, async3};
    }
/*...*/
    apply(data={}, new_state, changes_in_state){
        this.wait('anAsyncRabbit')
        doSomeAsync(
            (err,res)=>{
                this.push({async1:res, status:err||'ok'};// will replace data
                this.release('anAsyncRabbit')
            }
        )

        return data;
    }
/*...*/

```


## Actions & mutations

The app state could be mutated using different methods depending the needs.<br>

_ * As the store stay independents, they deal with theirs own perimeters; calling an action will trigger all the active stores actions in the current & parent Scopes that match. _

### Using actions

Actions could be dispatched from scopes or directly on the stores.

\* They are only called if theirs stores are active.

```jsx
class AppState extend Store{
        static use     = ["!AppConfig"];// require AppConfig to be applied & propagated
        static actions = {
            activateSalt(arg){// binded on the store instance

                // this.nextState contain the current incoming state
                // this.state contain the last stabilized state

                // return some state updates
                return {some:'mutations'};
                // or
                return; // to not change the state
                // wait, release, setState & push remain callable
                // this.nextState contain the incoming state
            }
        }
    }
```

### Using setState

All stores inherit the setState method. <br>
Once a store state is updated, the resulting data changes are automatically propagated to the followers.

### Using stores functions

The stores could be enhanced with functions & setters, that will ultimately update theirs state-data pairing.

* Usefull to use stores as controllers

```jsx
class AppState extend Store{
        static use     = ["!AppConfig"];// require AppConfig to be applied & propagated
        static data    = {};

        switchTodoList(todoUrl){
             this.setState({todoUrl})
             // or
             this.wait();
             doSomeAsync(()=>{
                this.data.stateChange = "stand"
                this.release()
             })
        }

    }
```

### push

Using push will update & propag the data of a store.
* This should be used with cautious as it could break the state-data coherence. (that said not all the stores needs to be predictable)


## How to add dependencies in a store

```jsx
export default class currentUser extends Store {
        static use = ["appState", "session"];// here the source store that should be in the store scope

        apply( data, { appState, session }, changes ) {
            /*...*/
            return data;
        }
};
```

## How to "remap" dependencies value & sub-values in the state/data

```jsx
export default class myInterpolatedDataStore extends Store {
        static use = {
                "someSource.someValue"          : "mySwitchValue",
                "someSource2.someStuff.value"   : "mySwitchValue2",
                "someSource3.someValue"         : "mySwitchValue3",
                "someSource4.someValue"         : "mySwitchValue4"
        };

        apply( data, { mySwitchValue, mySwitchValue2, mySwitchValue3, mySwitchValue4 }, changes ) {
            /*...*/
            return data;
        }
};
```

## How to keep a store unstable until some stores / value is initialized

```jsx
export default class myInterpolatedDataStore extends Store {

        static use = {
                "!someSource.someValue"  : "mySwitchValue",// require someSource.someValue != false
                "!someRequieredSource"   : true,
                "someSource2"            : "someSource2"
        };
        // or
        // static use = ["!some.stuff.withPath"]; // bind "withPath" value from the some or stuff store

        apply( data, { mySwitchValue, mySwitchValue2, mySwitchValue3, mySwitchValue4 }, changes ) {
            /*...*/
            return data;
        }
};
```

## How to only call apply & update the store if specific changes occurs in the sources store

```jsx
export default class myInterpolatedDataStore extends Store {

        static use = {
                "!someSource.someValue"  : "mySwitchValue",// require someSource.someValue != false
                "!someRequieredSource"   : true,
                "someSource2"            : "someSource2"
        };

        static follow = {// only call "apply" if one of these state keys has change
            "someSource2":(newData)=>returnTrueIfApplicable(newdata),
            "mySwitchValue":true, // just change

        }

        apply( data, { mySwitchValue, someSource2 }, changes ) {
            /*...*/
            return data;
        }
};
```

## How to choose if data changes should be applied

```jsx
export default class myInterpolatedDataStore extends Store {

        static use = {
                "!someSource.someValue"  : "mySwitchValue",// require someSource.someValue != false
                "!someRequieredSource"   : true,
                "someSource2"            : "someSource2"
        };

        hasDataChange( newDatas ) {
            return super.hasDataChange(state);// default : compare old and new data & data.*
        }

        apply( data, { mySwitchValue, someSource2 }, changes ) {
            /*...*/
            return data;
        }
};
```

## How to choose if data changes should be propagated

```jsx
export default class myInterpolatedDataStore extends Store {

        static use = {
                "!someSource.someValue"  : "mySwitchValue",// require someSource.someValue != false
                "!someRequieredSource"   : true,
                "someSource2"            : "someSource2"
        };

        shouldPropag(data){
            return true;
        }

        apply( data, { mySwitchValue, someSource2 }, changes ) {
            /*...*/
            return data;
        }
};
```

## How to catch synchrone errors in the apply fn

( global error catch based, eg. not using try catch )

```jsx
export default class testErrorCatch extends Rescope.Store {
   static state = { ok: true };

   static actions = {
       makeError: v => ({ failNow: true })
   };

   apply( data, state ) {
       if ( state.failNow )
           throw new Error("oups")
       return state;
   }

   handleError(error) {
       this.push({ failNow: false, catched: true })
   }
}
```


## About error catching

ReScope catch errors using :
 - process.on('uncaughtException',...) in node environnement
 - window.addEventListener('error',...) in browser environement


