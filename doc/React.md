# ReScope React Tools

The react Hocs & tools are available in the rescope package if the react-rescope package is available.

```
npm i react-rescope --save
```

Then :
```jsx
import {scopeToProps, scopeToState} from "rescope";
// or
import {scopeToProps, scopeToState, Store, Scope} from "react-rescope";
```



## React HOCs

### scopeToProps

Will replace the defined component with a ReScope Component that will render it with the desired stores data as props.

```

import React from "react";
import {scopeToProps} from "rescope";


@scopeToProps(["appState"]) // inheriting the scope
// or @scopeToProps(scopeFromSomewhere, ["appState"])
// or @scopeToProps((element)=>scopeFromSomewhere, ["appState"])
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

### scopeToState

Will create & return a ReScope Component that inherit the defined Component.
ReScope will inject & update the desired stores data as state values, and provide the given Scope via the React Context if provided

```
import React from "react";
import {scopeToState} from "rescope";

@scopeToState(["appState", "appState.someSubValue:asAnyAlias"])
// or @scopeToState(scopeFromSomewhere, ["appState"])
// or @scopeToState((element)=>scopeFromSomewhere, ["appState"])
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
import storesFromSomewhere from "./MyApplicationContext";
import {reScope, Scope} from "rescope";

@reScope(new Scope(storesFromSomewhere))
class MyCompWithScope extends React.Component {
    render() {
        return (
            <div>
                <h1>MyComp</h1>

               All childs will inherit this scope

            </div>
        );
    }
};

export default MyCompWithScope;
```

## Dispatching actions, mutations & calling stores functions

### Using $dispatch

The $dispatch function is located :
- in the props for components using scopeToProps
- in the instance object (this) for components using scopeToState

Calling $dispatch will trigger the specified action on every stores accessible in the current scope.

```jsx
import React from "react";
import {scopeToProps, Scope, Store} from "rescope";

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

@scopeToProps(myScope, ["appState"]) // inheriting the scope
class MyComp extends React.Component {
    click=()=>$dispatch("incAction");
    render() {
        let {appState, $stores, $dispatch} = this.props;

        return (
            <div onClick={this.click}>
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