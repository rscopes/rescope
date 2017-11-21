# Rescope

[![Build Status](https://travis-ci.org/CaipiLabs/Rescope.svg?branch=master)](https://travis-ci.org/CaipiLabs/Rescope)
[![NPM Version](https://badge.fury.io/js/rescope.svg?style=flat)](https://npmjs.org/package/rescope)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](#)


## ReScope What ?

ReScope is a simple, **flexible**, predictable \& effective Store system inspired by ReactJS methods.

## What ?

Rescope Stores read an entry state (kind of "key" that can be anything) and maintain the corresponding output data in a deterministic way.<br>
These outputs are then, used as partial "key" in other stores states, or "predictible" data in dumb components.<br>

By " a deterministic way ", i mean : <br/>
All state-making values should come from a limited number of key "seeds" stores; so "final" store's output data will remain determined by theses key values.

Rescope Contexts manages a pool of stores and provide :
- easy serialisation, export & restore of you're Application State.
- Contexts inheriting & mixing,
- Automatic, synchrone and/or Async stores injection, init, lazy load & sleep
- Chain destroy of contexts & stores

## How ?

### Store basics :

- A Store have it's state updated ( action has pushed state update or a source store had its data updated )
- If this state have the required & followed value
- The apply function is called
- The apply function push the new store data in an async or sync way
- The store is stabilized and (if there is new data) propagated
- listening stores update theirs state and we go to step 1 until the context is updated

### Context propagation :

- A Context became unstable when one of its stores, parent or mixed context became unstable (state propagation or wait fn called)
- It propag store updates to the listening Components / listeners
- It go stable when all his store are stable

## Why ?

Because :

- This is simple, flexible & effective,
- Seems like "React Components" for data,
- As Rescope stores are highly specialised and serializable, they could easly be moved in webworkers & node backends,
- This allow to remove 99.9% of all the tpls code and put them in clean, reusable & specialized stores, 
- 1 stem super class to rule all the async process
- Do all the jobs and really don't care witch kind of templates/whatever receive the data
 
### What else ?

- Easy stores & deps injections
- Semaphores API ( wait, release, retain, dispose )
- Promise like APIs
- Inheritable ES6 class
- Inheritable & mixable Store Contexts
- Easy, partial or complete contexts serialization
- Synchronised injection & init (React SSR) (as long as stores transformations stay sync)
- Flexible Async management
- Lazy store instantiation
- Compatible webpack & nodejs
- Easy pairing of remote / webworker based stores
- Library agnostic
- Another alternative to Redux & co
- etc..

## Doc ?

Just code for now, check :

### (Dumb) Simple \& working examples [here](src/example)

\*: The Store's context is common to the vanilla & react example

### And the [tests](test/Rescope.test.js)

## Theoretical examples  :

``` jsx

import {Context, Store} from "rescope";


let MyStaticContext = new Context({
    AppConfig : class AppConfig extend Store{
        data = {
            // initial config datas
        }
    }
}, {id:'static'});// add AppConfig to the 'static' context

let MyPageContext = new Context({

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
        apply(currentDatas, {items, AppState:{todoUrl}}, {AppState:{todoListId}}){
            // do some async :
            // this.wait()
            // API.get todoUrl then
            //     - push it ( this.push({items:newItems}) )
            //     - this.release() // truely propag the pushed data if the store don't wait something else

            return currentDatas;// return sync store data value
        }
    }
    MyCompData : class MyCompData extend Store{
        static use     = {
            "!MyTodoList.items"     : "MyTodoItems", // remap sources
            "!AppConfig.using.salt" : "withSalt"
        };
        static follow  = {
            "MyTodoItems":v=>is.array(v)
        }

        shouldApply(state){
            return super.shouldApply(state);//check required & followed
        }
        apply(currentDatas, {MyTodoItems, withSalt}){
           /*...*/
           return {data:"ready",_for:'render'}
        }
    }

}, {parent:MyStaticContext});


let MyMixableContext = new Context({...stores_instancied_or_not});
let MyLocalContext = new Context({...stores_instancied_or_not});
MyLocalContext.mixin(MyMixableContext);

// Or inject them with synchrone initial output state :
// .... ( say we are in a react comp constructor )
this.state = {
   someKey : true,
   // inject & maintain AppState & AnotherStore outputs in the state
   ...MyLocalContext.map(this, ["AppState", "AnotherStore"], false)
}
// ....

MyLocalContext.dispatch("activateSalt", true)

```


## What's next ?

- Optimize
- Prioritized stabilisation / propagation sequencer
- Possibly some semantic/normalisation updates
- Even better deps definition

[![HitCount](http://hits.dwyl.io/caipilabs/Caipilabs/rescope.svg)](http://hits.dwyl.io/caipilabs/Caipilabs/rescope)
