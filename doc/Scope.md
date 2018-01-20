# Scopes

## General & theoretical Scope definition example  :

``` jsx

import {Scope, Store} from "rescope";

// create a "global parent" scope with an AppConfig Store
let MyStaticScope = new Scope({
    AppConfig : class AppConfig extend Store{
        data = {
            // initial config datas
        }
    }
}, {id:'static'});

// Create another scope which inherit the "global scope"
let MyAppScope = new Scope({

    AppState : class AppState extend Store{
        static use     = ["!AppConfig"];// require AppConfig to be applied & propagated
        static actions = {
            activateSalt(arg){
                return {some:'mutations'};
            }
        }

        switchTodoList(todoUrl){
             this.setState({todoUrl})
        }

        apply(currentDatas, newState){
           /*... can do routing & page url sync here ...*/
           return {/**appState**/}
        }
    }
    MyTodoList : class MyTodoList extend Store{
        static use     = ["!AppState"];// do not apply MyTodoList if AppState isn't here
        static state   = {items:[]};

        apply(currentDatas, {items, AppState:{todoUrl}}/*new state*/, changesInState){
            // do some async :
            // this.wait("downloading") // wait 1 task nammed "downloading", do not propag until "downloading" is released (so you always know whats going on)
            // API.get todoUrl then
            //     - push it ( this.push({items:newItems}) )
            //     - this.release("downloading") // truely propag the pushed data if the store don't wait something else

            return currentDatas;// return sync store data value
        }
    }
    MyCompData : class MyCompData extend Store{
        static use     = {
            "!MyTodoList.items"     : "MyTodoItems", // remap sources
            "!AppConfig.using.salt" : "withSalt"
        };
        static follow  = {
            "MyTodoItems":v=>is.array(v),// only apply if MyTodoItems is an array or if withSalt has change
            "withSalt":true
        }

        shouldApply(state){
            return super.shouldApply(state);//check required & followed
        }
        apply(currentDatas, {MyTodoItems, withSalt}){
           /*...*/
           return {data:"ready",_for:'render'}
        }
        hasDataChange( newDatas ) {
            return super.hasDataChange(state);// default : check == of data & data.*
        }
        shouldPropag(state){
            return super.shouldPropag(state);
        }
    }

}, {parent:MyStaticScope});


let MyMixableScope = new Scope({...stores_instancied_or_not});
let MyLocalScope = new Scope({...stores_instancied_or_not});
MyLocalScope.mixin(MyMixableScope);

// Or inject them with synchrone initial output state :
// .... ( say we are in a react comp constructor )
this.state = {
   someKey : true,
   // inject & maintain AppState & AnotherStore outputs in the state
   ...MyLocalScope.map(this, ["AppState", "MyCompData"])
}
// ....

MyLocalScope.dispatch("activateSalt", true)

```
## Events

ReScope use the concept of "Stability", so there only 4 events :

 - "stable"     (when the store current state is sync with the store data)
 - "unstable"   (see "Stability" below)
 - "stableTree" (when all child scopes are stable, for serialization, etc)
 - "update"     (When the scopes stores data are updated)

## Stability

The scopes stability depends of theirs stores stability; When a store goes unstable, its base scope & parents scopes does the same.

## Structuring Scopes

### Using inheriting

Simply add the desired "parent" in the scope config.

```jsx harmony

import {Scope, Store} from "rescope";

// create a "global parent" scope with an AppConfig Store
let MyStaticScope = new Scope({
    AppConfig : class AppConfig extend Store{
        data = {
            // initial config datas
        }
    }
}, {id:'static'});

// Create another scope which inherit the "global scope"
let MyAppScope = new Scope({

    AppState : class AppState extend Store{
        static use     = ["!AppConfig"];// require AppConfig to be applied & propagated
        static actions = {
            activateSalt(arg){
                return {some:'mutations'};
            }
        }

        switchTodoList(todoUrl){
             this.setState({todoUrl})
        }

        apply(currentDatas, newState){
           /*... can do routing & page url sync here ...*/
           return {/**appState**/}
        }
    }
}, {parent:MyStaticScope});

```

### Using mixin

We can add any mixed Scope as we want.
```
let MyMixableScope = new Scope({...stores_instancied_or_not});
let MyLocalScope = new Scope({...stores_instancied_or_not});
MyLocalScope.mixin(MyMixableScope);

```

_* parents stores of the mixed scopes will not be available on the target Scope_

## Access Scoped store, state & data

Available data, state & stores can be accessed directly.

```

let MyScope = new Scope({...stores_map}, {/* config */});

// accessing this scope, its parents and mixed data, state & stores
// MyScope.stores.*
// MyScope.state.*
// MyScope.data.*

```

## Bind Scoped stores updates without React HOCs

- Using Scope:map()
- Using Scope:bind()

## Serialize & restore app state & data

## Auto destroy scopes

## Auto destroy/unload stores