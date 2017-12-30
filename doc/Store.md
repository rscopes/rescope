# Rescope Stores

## Stability

When state updates occurs, a store state stop being coherent with its results data.<br>
In Rescope stores, the role of the "apply" function is to make the store data predictable basing on its state.

This is done in 2 way :
 - In a synchronized way, by returning a new data hashmap from the "apply" fn
 - In an async way :
    - using this.push(newData) or by returning a referenced hashmap
    - and mostly using wait() & release() paired functions, which will keep the store unstable and lock its update propagation until all wait() calls becomes released.

## Store's Workflow

- A Store have it's state updated ( action has pushed state update or a source store had its data updated )
- If this state have the required & followed value
- The apply function is called push new data in an async or sync way
- The store is stabilized and (if there is new data) propagated
- listening stores have theirs state updated and we go to step 1 until the whole context is stable

## Contexts

Rescope stores find theirs source stores in a context object, its parents and/or its mixed contexts.
When a store became unstable, its context became unstable too.
When a context became unstable, its parent became unstable too unless it have "rootEmitter:true" in its conf.

## How to add dependencies in a store
## How to "remap" dependencies value & sub-values in the state/data
## How to todo