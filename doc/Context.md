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

Simply add the derired "parent" in the context config.

```jsx harmony

import {Context, Store} from "rescope";

// create a "global parent" context with an AppConfig Store
let MyStaticContext = new Context({
    AppConfig : class AppConfig extend Store{
        data = {
            // initial config datas
        }
    }
}, {id:'static'});

// Create another context which inherit the "global context"
let MyAppContext = new Context({

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
}, {parent:MyStaticContext});

```

### Using mixin

We can add any mixed Context as we want.
```
let MyMixableContext = new Context({...stores_instancied_or_not});
let MyLocalContext = new Context({...stores_instancied_or_not});
MyLocalContext.mixin(MyMixableContext);

```

_* parents stores of the mixed contexts will not be available on the target Context_

## Access Contexts store, state & data

Available data, state & stores can be accessed directly.

```

let MyContext = new Context({...stores_map}, {/* config */});

// accessing this context, its parents and mixed data, state & stores
// MyContext.stores.*
// MyContext.state.*
// MyContext.data.*

```

## Bind Context's stores updates

- Using Context:map()
- Using Context:bind()

## Serialize & restore app state & data


## Auto destroy contexts

## Auto destroy/unload stores