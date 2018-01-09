# ReScope React Tools

## React HOCs

### reScopeState

Using the component parent scope :
```
import React from "react";
import {reScopeState} from "rescope/dist/ReactTools";

class MyComp extends React.Component {
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

export default reScopeState(MyComp);
```

Using specific scope :
```

import React from "react";
import scopeFromSomewhere from "./scope";
import {scopeState} from "rescope/dist/ReactTools";

class MyComp extends React.Component {
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

export default reScopeState(MyComp, scopeFromSomewhere /*, ["appState"]*/);
//export default reScopeState(MyComp, ()=>scopeFromSomewhere);
```

### scopeProps

Using the component parent scope :
```

import React from "react";
import {reScopeProps} from "rescope/dist/ReactTools";

class MyComp extends React.Component {
    static use = ["appState"];
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

export default reScopeProps(MyComp);
```

Using specific scope :
```

import React from "react";
import scopeFromSomewhere from "./scope";
import {reScopeProps} from "rescope/dist/ReactTools";

class MyComp extends React.Component {
    static use = ["appState"];
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

export default reScopeProps(MyComp, scopeFromSomewhere);
```

### Inheriting Rescope React component

```

import React from "react";
import {Component} from "rescope/dist/ReactTools";

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