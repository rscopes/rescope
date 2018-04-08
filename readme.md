# ReScope

[![Build Status](https://travis-ci.org/CaipiLabs/rescope.svg?branch=master)](https://travis-ci.org/CaipiLabs/rescope)
[![NPM Version](https://badge.fury.io/js/rescope.svg?style=flat)](https://npmjs.org/package/rescope)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](#)


{: style="text-align:center"}
![reScope](./doc/logo.png)
{: style="text-align:left"}

## What ?

ReScope is a flexible, effective and easy to use µState management system inspired by ReactJS methods.

## How ?

By using independent, specialized & serializable "Data Stores" in a Flux oriented architecture.

### Stores ?

ReScope stores look like "React components for data".<br>
Basically, they render determined data according theirs entry state.

Each Stores can manage part of, or the entire App state's determining values,<br>
maintain intermediate, possibly asynchronous resources,<br>
and/or finals or ready-to-render data.

### Scopes ?

To deal with complex architectures & data processing the Scopes allow :
- normalized scopes for modules & views
- to inherit & mix other Scopes,
- automatic & chained destroy
- ...

## What else ?

- React "high order components" factories decorators ( [react-rescope](https://github.com/CaipiLabs/react-rescope) )
- Keep related stuff in the same store files (actions, mutations, helpers, states, etc...)
- Remove up to 100% of the tpls components code and put them in clean, reusable & specialized stores µState control,
- Easy pairing of remote / webworker based stores
- Easy remapping & aliasing of dependencies data,
- Easy, partial or complete serialization / restoration
- 1 stem super class to rule all the async process
- Promise like APIs
- Semaphores like API ( wait, release, retain, dispose )
- Inheritable ES6 class
- Synchrone injection & init (React SSR) (as long as stores transformations stay sync)
- Lazy stores instantiation & active stores auto destroy
- Another alternative to Redux & co
- Library agnostic, rescope has no dependencies and will keep working with any states based system
- etc..

## Doc ?

Comming slowly, [Work in progress doc](doc/readme.md)

About [Stores](doc/Store.md) <br>
About [Scopes](doc/Scope.md)

### Related packages

The ReScope package has a limited perimeter, <br>
other packages make it even easier to use:<br>

React HOCs, decorators & tools : [react-rescope](https://github.com/CaipiLabs/react-rescope)<br>
ReScope HOCs, decorators & tools : [rescope-spells](https://github.com/CaipiLabs/rescope-spells)<br>

### Samples & bootstraps

The examples and bootstrap will come gradually [here](https://github.com/CaipiLabs/rescope-samples)

## What's next ?

- Optimize
- Many more tests
- Cosmetics rewrites & more comments
- Optimize refs management
- Optimize actions propag
- Possibly some semantic/normalisation updates

[![HitCount](http://hits.dwyl.io/caipilabs/Caipilabs/rescope.svg)](http://hits.dwyl.io/caipilabs/Caipilabs/rescope)
<span class="badge-paypal"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VWKR3TWQ2U2AC" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

