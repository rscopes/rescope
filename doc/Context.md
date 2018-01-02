# Rescope Context

## Events

Rescope use the concept of "Stability", so there only 4 events :

 - "stable"     (when the store current state is sync with the store data)
 - "unstable"   (see "Stability" below)
 - "stableTree" (when all child contexts are stable)
 - _"update"    (Store only : when a store propag his data)_

## Stability

The contexts have the wait & release API, but they are note used directly.<br>
Theirs stability is triggered from theirs stores; When a store go unstable, his base context & parents does the same.

## Structure Contexts

### Using inheriting

### Using mixing

## Access Contexts store, state & data

## Bind Context's stores updates

- Using Context:map()
- Using Context:bind()

## Serialize & restore app state & data


## Auto destroy contexts

## Auto destroy/unload stores