# ReScope

[![Build Status](https://travis-ci.org/CaipiLabs/ReScope.svg?branch=master)](https://travis-ci.org/CaipiLabs/ReScope)
[![NPM Version](https://badge.fury.io/js/rescope.svg?style=flat)](https://npmjs.org/package/rescope)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](#)


## What ?

ReScope is a simple to use, **flexible** & effective Store system inspired by ReactJS methods.

ReScope stores look like "React components for data", they use the results of other data components as input, plus some key values;
and maintains the corresponding "rendered" data as a result.

ReScope Stores are grouped by scopes, and these scopes allow :
- Scopes inheriting & mixing,
- Synchronized (or not) init of the stores
- Easy serialisation, export & restore of theirs states.
- Chain destroy ( retain / dispose )
- Easy async management


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
- Inheritable & mixable Scopes
- Easy, partial or complete scopes serialization
- Synchronised injection & init (React SSR) (as long as stores transformations stay sync)
- Flexible Async management
- Lazy store instantiation
- Compatible webpack & nodejs
- Easy pairing of remote / webworker based stores
- Library agnostic
- Another alternative to Redux & co
- etc..

## Doc ?

### Work in progress doc [here](doc)

### (Dumb) Simple \& working examples [here](src/examples)

\*: The Store's scope is common to the vanilla & react example

### And the [tests](test/Rescope.test.js)

## What's next ?

- Optimize
- Synchrone & Prioritized stabilisation / propagation sequencer
- Possibly some semantic/normalisation updates
- Even better deps definition
- Many more tests
- Cosmetics rewrites & more comments
- better refs management

[![HitCount](http://hits.dwyl.io/caipilabs/Caipilabs/rescope.svg)](http://hits.dwyl.io/caipilabs/Caipilabs/rescope)
<span class="badge-paypal"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VWKR3TWQ2U2AC" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

