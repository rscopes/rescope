# Caipi Rescope 2 beta

## ReScope What ?

ReScope is a simple, flexible, predictable \& effective Store system inspired by ReactJS methods.

## What ?

Rescope Stores read an entry state (kind of "key" that can be anything) and maintain the corresponding output datas in a deterministic way.<br>
These outputs are then, used as partial "key" in other stores states, or "predictible" datas in dumb components.<br>

By " a deterministic way ", i mean : <br/>
All state-making values should come from the entry state; <br>
so even if there 500 interdependent stores  : theirs outputs datas will remain determined by a limited number of key "seeds" stores.

Rescope Contexts manages a pool of stores and provide :
- easy serialisation, export & restore of you're Application State.
- Contexts inheriting & mixing,
- Automatic, synchrone and/or Async stores injection, init, lazy load & sleep
- Chain destroy of contexts

Rescope Stores could maintain, serialize and restore server & client side :
- Enhanced records matching some ids,
- Processed & interpolated datas, ready for render
- Page state & status (act as router)
- session, etc... 

## Why ?

Because :

- This is simple, flexible & effective, 
- As Rescope stores are highly specialised and serializable, they could easly be moved in webworkers & node backends,
- This allow to remove 99.9% of all the tpls code and put them in clean, reusable & specialized stores, 
- 1 stem super class to rule all the async process
- Do all the jobs and really don't care witch kind of templates/whatever receive the datas

 
### What else ?

- Easy stores & deps injections
- Semaphores API (wait, release, retain, dispose, etc... fns )
- Promise like APIs
- Simple methods to contextualize, preload, hook & bind the stores
- Inheritable ES6/7 class
- Inheritable Store Contexts
- Easy serialize
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

## (Dumb) Simple \& working examples [here](src/example) 

\*: The Store's context is common to the vanilla & react example

## Theoric example :

``` jsx

import {Context} from "rescope";

let pageContextStores = {/* ... some initial store definitions */}

let MyStaticContext = new Context({...stores_instancied_or_not}); // stores are lazy instanciated on the context hashmap
let MyPageContext = new Context({...stores_instancied_or_not}, {parent:MyStaticContext});


// you can preload using default / restored key values
MyPageContext.mount(["someStores"], {/*states by id*/}, {/*datas by id*/})
.then(
    (err, datas)=>{
        // here all the store datas are in store
        
   
    }
);

// Or inject them with synchrone initial output state :
// .... ( say we are in a react comp constructor )
this.state = {
   someKey : true,
   // inject & maintain AppState & AnotherStore outputs in the state
   ...MyPageContext.map(this, ["AppState", "AnotherStore"])
}
// ....

```



