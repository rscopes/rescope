# Rescope 2

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
- Chain destroy of contexts

Rescope Stores maintain server & client side :
- Enhanced records matching some ids,
- Processed & interpolated data, ready for render
- Page state & status (act as router)
- session, etc... 

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
- Semaphores API (wait, release, retain, dispose, etc... fns )
- Promise like APIs
- Inheritable ES6/7 class
- Inheritable & mixable Store Contexts
- Easy, partial or complete contexts serialization
- Synchrone injection & init (React SSR) (as long as stores transformations stay sync)
- Flexible Async management
- Lazy store instantiation
- Compatible webpack & nodejs
- Easy pairing of remote / webworker based stores
- Library agnostic
- Another alternative to Redux & co
- etc..

## Actions ?

DIY or push mutations (setState) on the right store

## Doc ?

Just code for now, check :

### (Dumb) Simple \& working examples [here](src/example)

\*: The Store's context is common to the vanilla & react example

### And the [tests](test/Rescope.test.js)

## Example app stores struture  :

``` jsx

import {Context, Store} from "rescope";


let MyStaticContext = new Context({
    AppConfig : class AppConfig extend Store{
        data = {

        }
    }
}); // stores are lazy instanciated on the context hashmap
let MyPageContext = new Context({

    AppState : class AppState extend Store{
        static use     = ["AppConfig"];
        static require = ["AppConfig"];


        switchTodoList(todoListId){
             this.setState({todoListId})
        }
    }
    MyTodoList : class MyTodoList extend Store{
        static use     = ["AppState"];
        static require = ["AppState"];
        static state   = {items:[]};
        apply(currentDatas, {items, selected}, {AppState:{todoListId}}){

            return {items, ;
        }
        select(ids){
            let {selected} = this.data;
        }
        complete(ids, done){
            let {selected} = this.data;
        }
        add(ids, done){
            let {selected} = this.data;
        }
    }

}, {parent:MyStaticContext});


// you can preload using default / restored key values
MyPageContext.mount(["someStores"], {/*states by id*/}, {/*data by id*/})
.then(
    (err, data)=>{
        // here all the store data are in store

    }
);

let MyMixableContext = new Context({...stores_instancied_or_not});
let MyLocalContext = new Context({...stores_instancied_or_not});
MyLocalContext.mixin(MyMixableContext);

// Or inject them with synchrone initial output state :
// .... ( say we are in a react comp constructor )
this.state = {
   someKey : true,
   // inject & maintain AppState & AnotherStore outputs in the state
   ...MyLocalContext.map(this, ["AppState", "AnotherStore"])
}
// ....

```


## Theoric example :

``` jsx

import {Context, Store} from "rescope";


let MyStaticContext = new Context({...stores_instancied_or_not}); // stores are lazy instanciated on the context hashmap
let MyPageContext = new Context({
...stores,
example : class example extends Store{/*...*/}
}, {parent:MyStaticContext});


// you can preload using default / restored key values
MyPageContext.mount(["someStores"], {/*states by id*/}, {/*data by id*/})
.then(
    (err, data)=>{
        // here all the store data are in store

    }
);

let MyMixableContext = new Context({...stores_instancied_or_not});
let MyLocalContext = new Context({...stores_instancied_or_not});
MyLocalContext.mixin(MyMixableContext);

// Or inject them with synchrone initial output state :
// .... ( say we are in a react comp constructor )
this.state = {
   someKey : true,
   // inject & maintain AppState & AnotherStore outputs in the state
   ...MyLocalContext.map(this, ["AppState", "AnotherStore"])
}
// ....

```



## What's next ?

- Optimize
- Better deps definition
- Possibly some semantic/normalisation updates
- add error catching


[![HitCount](http://hits.dwyl.io/caipilabs/Caipilabs/rescope.svg)](http://hits.dwyl.io/caipilabs/Caipilabs/rescope)
