# ReScope React Tools

## React HOCs

### reScopeProps

Will replace the defined component with a ReScope Component that will render it with the desired stores data as props.

```

import React from "react";
import {reScopeProps} from "rescope";


@reScopeProps(["appState"]) // inheriting the scope
// or @reScopeProps(scopeFromSomewhere, ["appState"])
// or @reScopeProps((element)=>scopeFromSomewhere, ["appState"])
class MyComp extends React.Component {
    // or static use = ["appState"];
    render() {
        let {appState, $stores, $dispatch} = this.props;

        return (
            <div>
                <h1>MyComp</h1>
                {
                    this.props.appState.someValues
                }

            </div>
        );
    }
};

export default MyComp;
```

### reScopeState

Will create & return a ReScope Component that inherit the defined Component.
ReScope will inject & update the desired stores data as state values, and provide the given Scope via the React Context if provided

```
import React from "react";
import {reScopeState} from "rescope";

@reScopeState(["appState", "appState.someSubValue:asAnyAlias"])
// or @reScopeState(scopeFromSomewhere, ["appState"])
// or @reScopeState((element)=>scopeFromSomewhere, ["appState"])
class MyComp extends React.Component {
    render() {
        let {appState, asAnyAlias} = this.state,
            {$stores, $dispatch}   = this;

        return (
            <div>
                <h1>MyComp</h1>
                {
                    appState.someValues
                }
                {
                    asAnyAlias
                }
            </div>
        );
    }
};

export default MyComp;
```


### Inheriting Rescope React component

```

import React from "react";
import {Component} from "rescope";

class MyComp extends Component {
    static use = ["appState"];
    render() {
        let {appState} = this.state,
            {$stores, $dispatch}   = this;
        return (
            <div>
                <h1>MyComp</h1>
                {
                    appState.someValues
                }
            </div>
        );
    }
};

export default MyComp;
```

## Providing Scope via react contexts

```

import React from "react";
import scopeFromSomewhere from "./MyApplicationContext";
import {reScopeState, Scope} from "rescope";

class MyCompWithoutRescope extends React.Component {
    render() {
        return (
            <div>
                <h1>MyComp</h1>

               All childs will use "scopeFromSomewhere"

            </div>
        );
    }
};

const MyCompWithReScopeContext = reScopeState(MyCompWithoutRescope, scopeFromSomewhere);
// or const MyCompWithReScopeContext = reScopeState(MyCompWithoutRescope, (element, context)=>scopeFromSomewhere);

export default MyCompWithReScopeContext;
```

## Dispatching actions, mutations & calling stores functions

### Using $dispatch

The $dispatch function is located :
- in the props for components using reScopeProps
- in the instance object (this) for components using reScopeState

Calling $dispatch will trigger the specified action on every stores accessible in the current scope.

```jsx
import React from "react";
import {reScopeProps, Scope, Store} from "rescope";

let myScope = new Scope(
    {
        appState: class appState extends Store{
            static actions = {
                incAction(){
                    return { someValues : this.state.someValues + 1 };
                }
            }
            static state = {
                someValues : 0
            }
        }
    }
)

@reScopeProps(myScope, ["appState"]) // inheriting the scope
class MyComp extends React.Component {
    render() {
        let {appState, $stores, $dispatch} = this.props;

        return (
            <div onClick={()=>$dispatch("incAction")}>
                <h1>MyComp</h1>
                {
                    appState.someValues
                }

            </div>
        );
    }
};

export default MyComp;
```