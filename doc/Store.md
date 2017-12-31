# Rescope Stores

## Events

Rescope use the concept of "Stability", so there only 4 events :

 - "stable"     (when the store current state is sync with the store data)
 - "unstable"   (see "Stability" below)
 - "stableTree" (when all child contexts are stable)
 - "update"     (when a store propag his data)

## Stability

When state updates occurs, a store state stop being coherent with its results data.<br>
In Rescope stores, the role of the "apply" function is to make the store data predictable basing on its state.

This is done in 2 way :
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
    - using this.push(newData) or by returning a referenced hashmap
    - and mostly by using wait() & release() paired functions, which will keep the store unstable and lock its update propagation until all wait() calls becomes released.


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
                this.push({async1:res, status:err||'ok'};
                this.release('anAsyncRabbit')
            }
        )

        return data;
    }
/*...*/

```


## Store's Workflow

- A Store have it's state updated ( action has pushed state update or a source store had its data updated )
- If this state have the required & followed value
- The apply function is called push new data in an async or sync way
- The store is stabilized and (if there is new data) propagated
- listening stores have theirs state updated and we go to step 1 until the whole context is stable

## Contexts

Rescope stores find theirs source stores in a context object, its parents and/or its mixed contexts.<br>
When a store became unstable, its context became unstable too.<br>
When a context became unstable, its parent became unstable too unless it have "rootEmitter:true" in its conf.<br>
When store or context became stable unstable they emit "stable" & "unstable" events<br>
When all child contexts of a context became stable, including itself; a context emit a "stableTree" event<br>

## How to add dependencies in a store

```jsx
export default class currentUser extends Store {
        static use = ["appState", "session"];// here the source store that should be in the store context

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

