
<p align="center"><img  width="192" src ="https://github.com/rScopes/rescope/raw/master/doc/assets/logo.svg?sanitize=true" /></p>

<p align="center" style="font-size:25px"><b>

# ReScope

</b></p>
<p align="center">Flexible State management system based on flux architecture, stores data components & inheritable scopes
</p>

<p align="center"><a href="https://travis-ci.org/rscopes/rescope">
<img src="https://travis-ci.org/rscopes/rescope.svg?branch=master" alt="Build Status" /></a>
<a href="https://www.npmjs.com/package/rescope">
<img src="https://img.shields.io/npm/v/rescope.svg" alt="Build Status" /></a>
<img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat" />


</p>

### Related packages

React HOCs, decorators & tools   : [react-scopes](https://github.com/rscopes/react-scopes)<br>
ReScope HOCs, decorators & tools : [rescope-spells](https://github.com/rscopes/rescope-spells)<br>

## ReScope What ?

ReScope is a flexible, effective and easy to use state management system inspired by ReactJS methods.

## What's the point ?

The set of data transformations of one or more applications can be divided into reusable data components with reactive state and result data.
Just like React Components, for data. <br/>
Of course, that's quickly said, in an application, the data must deal with complex dependencies, different contexts, custom data bindings, and so on. <br/>

This is where reScope comes in: <br/>
RS provide a effective, flexible and familiar structure to organize and synchronize your data components. <br/>
It manage theirs dependencies, theirs scopes, sequencing, persistence, active instances & much more.

This way all the data components :

- Only use 1 file for theirs initial state, actions & mutations
- Only care about theirs specialized task
- Can be easily & independently tested
- Can have different behaviors basing on theirs scope

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

### Samples & bootstraps [here](https://github.com/rScopes/rescope-samples)

## Todo ?

- Many more tests
- RS use a similar states data processing structure than React Hooks & Contexts; Using React, well used hooks/memo are now better for most cases imo. 

[![HitCount](http://hits.dwyl.io/caipilabs/Caipilabs/rescope.svg)](http://hits.dwyl.io/caipilabs/Caipilabs/rescope)
<a href="https://www.buymeacoffee.com/6RMg8OQ" target="_blank"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

[![*](https://www.google-analytics.com/collect?v=1&tid=UA-82058889-1&cid=555&t=event&ec=project&ea=view&dp=%2Fproject%2Frescopes&dt=readme)](#)
