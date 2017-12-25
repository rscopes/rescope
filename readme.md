# Rescope

[![Build Status](https://travis-ci.org/CaipiLabs/Rescope.svg?branch=master)](https://travis-ci.org/CaipiLabs/Rescope)
[![NPM Version](https://badge.fury.io/js/rescope.svg?style=flat)](https://npmjs.org/package/rescope)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](#)
<span class="badge-paypal"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VWKR3TWQ2U2AC" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>


## What ?

ReScope is a simple to use, **flexible** \& effective Store system inspired by ReactJS methods.

Rescope stores look like "reverse React components for data", they use the results of other data components as input, plus some key values;<br>
and maintains the corresponding "rendered" data as a result.

ReScope Stores are grouped by contexts, and these contexts allow :
- Contexts inheriting & mixing,
- Synchronized (or not) init of the stores
- Easy serialisation, export & restore of theirs states.
- Chain destroy ( retain / dispose )
- Easy async management

## Theoretical examples  :

``` jsx

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
        shouldPropag(state){
            return super.shouldPropag(state);
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
   ...MyLocalContext.map(this, ["AppState", "MyCompData"])
}
// ....

MyLocalContext.dispatch("activateSalt", true)

```

## Why ?

Because :

- This is simple, flexible & effective,
- Seems like "reversed React Components" for data,
- As Rescope stores are highly specialised and serializable, they could easly be moved in webworkers & node backends,
- This allow to remove 99.9% of all the tpls code and put them in clean, reusable & specialized stores,
- 1 stem super class to rule all the async process
- Do all the jobs and really don't care witch kind of templates/whatever receive the data

### What else ?

- Easy stores & deps injections
- Semaphores like API ( wait, release, retain, dispose )
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

### Store basic workflow :

- A Store have it's state updated ( action has pushed state update or a source store had its data updated )
- If this state have the required & followed value
- The apply function is called push new data in an async or sync way
- The store is stabilized and (if there is new data) propagated
- listening stores have theirs state updated and we go to step 1 until the whole context is stable

### Context stabilisation :

- A Context became unstable when one of its stores, parent or mixed context became unstable
- It propag store updates to the listening Components / listeners
- It go stable when all his store are stable


## Doc ?

Just code for now, check :

### (Dumb) Simple \& working examples [here](src/example)

\*: The Store's context is common to the vanilla & react example

### And the [tests](test/Rescope.test.js)


## What's next ?

- Optimize
- Synchrone & Prioritized stabilisation / propagation sequencer
- Detect dead locks & dependencies loop ( Prioritized sequencer will help )
- Possibly some semantic/normalisation updates
- Even better deps definition
- Many more tests
- Cosmetics rewrites & more comments

[![HitCount](http://hits.dwyl.io/caipilabs/Caipilabs/rescope.svg)](http://hits.dwyl.io/caipilabs/Caipilabs/rescope)
