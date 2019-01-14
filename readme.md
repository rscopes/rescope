
<p align="center"><img  width="192" src ="https://github.com/CaipiLabs/rescope/raw/master/doc/assets/logo.svg?sanitize=true" /></p>

<p align="center" style="font-size:25px"><b>

# ReScope

</b></p>
<p align="center">Flexible State management system based on flux architecture, stores data components & inheritable scopes
</p>

<p align="center"><a href="https://travis-ci.org/CaipiLabs/rescope">
<img src="https://travis-ci.org/CaipiLabs/rescope.svg?branch=master" alt="Build Status" /></a>
<a href="https://www.npmjs.com/package/rescope">
<img src="https://img.shields.io/npm/v/rescope.svg" alt="Build Status" /></a>
<img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat" />


</p>

### Related packages

React HOCs, decorators & tools : [react-rescope](https://github.com/CaipiLabs/react-rescope)<br>
ReScope HOCs, decorators & tools : [rescope-spells](https://github.com/CaipiLabs/rescope-spells)<br>

## ReScope What ?

ReScope is a flexible, effective and easy to use state management system inspired by ReactJS methods.

## What's the point ?

The set of data transformations of one or more applications can be divided into reusable data components with reactive state and result data.
Just like React Components, for data. <br/>
Of course, that's quickly said, in an application, the data must deal with complex dependencies, different contexts, custom data bindings, and so on. <br/>

This is where reScope comes in: <br/>
RS provide a effective, flexible and familiar structure to organize and synchronize your data components. <br/>
It manage theirs dependencies, theirs scopes, persistence, active instances & much more.

## How ?

By using independent, specialized & serializable "Data Stores" in a Flux oriented architecture.

### Stores ?

ReScope stores look like "React components for data".<br>
Basically, they render determined data according theirs entry state, theirs dependencies, and theirs action.<br>

Actions generate mutations of one or multiple stores,<br>
So each Stores can manage part of, or the entire App state's determining values,<br>
maintain intermediate, possibly asynchronous resources,<br>
and/or finals or ready-to-render data.

### Scopes ?

To deal with complex architectures like multi user or complex components systems, the Scopes allow :
- normalized scopes for modules & views
- to inherit & mix other Scopes,
- automatic & chained destroy
- ...

## Why & What else ?

- React "high order components" factories decorators ( [react-rescope](https://github.com/CaipiLabs/react-rescope) )
- Keep related stuff in the same store files (actions, mutations, helpers, states, etc...)
- Remove up to 100% of the tpls components code and put them in clean, reusable & specialized stores,
- Easy pairing of remote / webworker based stores
- Easy remapping & aliasing of dependencies data,
- Easy, partial or complete serialization / restoration
- Inheritable ES6 class
- Synchrone injection & init (React SSR) (as long as stores transformations stay sync)
- Lazy stores instantiation & active stores auto destroy
- Another alternative to Redux & co
- Library agnostic, rescope has no dependencies and will keep working with any states based system
- Doesn't need anything, work without React, no immutable needed
- etc..

## Doc ?

[Work in progress doc](doc/readme.md)

About [Stores](doc/Store.md) <br>
About [Scopes](doc/Scope.md)

### Samples & bootstraps

The examples and bootstrap will come gradually [here](https://github.com/CaipiLabs/rescope-samples)

## What's next ?

- Optimize
- Many more tests
- Allow store dependencies thats are not defined yet
- Cosmetics rewrites & more comments
- Possibly some semantic/normalisation updates

[![HitCount](http://hits.dwyl.io/caipilabs/Caipilabs/rescope.svg)](http://hits.dwyl.io/caipilabs/Caipilabs/rescope)
<span class="badge-paypal"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VWKR3TWQ2U2AC" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

