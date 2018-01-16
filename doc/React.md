# ReScope React Tools

## React HOCs

### reScopeProps

Will replace the defined component with a ReScope Component that will render the defined Component with the desired stores data as props.

```

import React from "react";
import {reScopeProps} from "rescope";


@reScopeProps(["appState"]) // inheriting the scope
// or @reScopeProps(scopeFromSomewhere, ["appState"])
// or @reScopeProps((element)=>scopeFromSomewhere, ["appState"])
class MyComp extends React.Component {
    // or static use = ["appState"];
    render() {
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
The component will inject the desired stores data as state values

```
import React from "react";
import {reScopeState} from "rescope";

@reScopeState(["appState"])
// or @reScopeState(scopeFromSomewhere, ["appState"])
// or @reScopeState((element)=>scopeFromSomewhere, ["appState"])
class MyComp extends React.Component {
    render() {
        return (
            <div>
                <h1>MyComp</h1>
                {
                    this.state.appState.someValues
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
        return (
            <div>
                <h1>MyComp</h1>
                {
                    this.state.appState.someValues
                }

            </div>
        );
    }
};

export default MyComp;
```

## Inject stores


## Propag stores