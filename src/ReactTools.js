/*
 * Copyright (c)  2018 Wise Wild Web .
 *
 *  MIT License
 *  
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *  
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *  
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *  
 * @author : Nathanael Braun
 * @contact : caipilabs@gmail.com
 */

import React from 'react'
import is from 'is'
import PropTypes from 'prop-types';

/**
 * @class Component
 * @desc Parent React Component with store injection in its state
 */
class Component extends React.Component {
    static childContextTypes = {
        rescope: PropTypes.object,
        $stores: PropTypes.object
    }
    static contextTypes      = {
        rescope: PropTypes.object,
        $stores: PropTypes.object
    }
    
    constructor( p, ctx, q ) {
        super(p, ctx, q);
        if ( this.constructor.use ) {
            this.state = {
                ...this.state,
                ...ctx.rescope.map(this, this.constructor.use || [], false)// don't bind
            }
        }
        else this.render = () => <div>No Rescope context here { baseComp.name }</div>
    }
    
    componentWillMount() {
        if ( this.constructor.use ) {
            this.context.rescope.bind(this, this.constructor.use || [], false)
        }
    }
    
    componentWillUnmount() {
        this.constructor.use
        && this.context.rescope.unBind(this, this.constructor.use || [])
    }
    
    componentWillReceiveProps( np, nc ) {
        if ( nc.rescope !== this.context.rescope ) {
            this.constructor.use
            && this.context.rescope.unBind(this, this.constructor.use || []);
            this.constructor.use
            && nc.rescope.bind(this, this.constructor.use || []);
        }
    }
    
    getChildContext() {
        return {
            rescope: this.context.rescope,
            $stores: this.context.$stores
        };
    }
    
    render() {
        return this.props.children || <div/>
    }
};

/**
 *
 * @param baseComp
 * @param context
 * @param use
 * @returns {ScopeProvider}
 */
function rescope( baseComp, _context, use ) {
    if ( !use && is.array(_context) ) {
        use      = _context;
        _context = null;
    }
    
    use = [...(baseComp.use || []), ...(use || [])];
    
    return class ScopeProvider extends baseComp {
        static childContextTypes = {
            ...(baseComp.childContextTypes || {}),
            rescope: PropTypes.object,
            $stores: PropTypes.object
        }
        static contextTypes      = {
            ...(baseComp.contextTypes || {}),
            rescope: PropTypes.object,
            $stores: PropTypes.object
        }
        static defaultProps      = {
            ...(baseComp.defaultProps || {}),
        }
        
        constructor( p, ctx, q ) {
            super(p, ctx, q);
            this.$scope = is.fn(_context) && _context(this) || _context || ctx.rescope;
            is.fn(_context)
            && this.$scope.retain()
            if ( this.$scope && use.length ) {
                this.state   = {
                    ...this.state,
                    ...this.$scope.map(this, use, false)// don't bind now due to SSR
                }
                this.$stores = this.$scope.stores;
            }
            else this.render = () => <div>No Rescope context here { baseComp.name }</div>
        }
    
        dispatch ( ...argz ){
            this.$scope.dispatch(...argz)
        }
        
        componentWillMount() {
            if ( use.length ) {
                this.$scope.bind(this, use, false)
                
            }
            super.componentWillMount && super.componentWillMount()
        }
        
        componentWillUnmount() {
            super.componentWillUnmount && super.componentWillUnmount()
            use.length
            && this.$scope.unBind(this, use);
            is.fn(_context)
            && this.$scope.dispose();
            delete this.$stores;
            delete this.$scope;
        }
        
        componentWillReceiveProps( np, nc ) {
            if ( use.length && !_context && nc.rescope !== this.context.rescope ) {
                this.context.rescope.unBind(this, use);
                this.$scope      = nc.rescope;
                this.$stores = this.$scope.stores;
                nc.rescope.bind(this, use);
            }
            super.componentWillReceiveProps && super.componentWillReceiveProps(np, nc);
        }
        
        getChildContext() {
            let ctx = super.getChildContext && super.getChildContext() || {};
            return {
                ...ctx,
                rescope: this.$scope,
                $stores: this.$scope.stores
            };
        }
    }
}

/**
 *
 * @param BaseComp
 * @param context
 * @returns {ScopeProvider}}
 */
function rescopeProps( BaseComp, _context, use ) {
    if ( !use && is.array(_context) ) {
        use      = _context;
        _context = null;
    }
    use = [...(BaseComp.use || []), ...(use || [])];
    return rescope(class ReScopePropsProvider extends React.Component {
        static use               = use;
        static childContextTypes = {
            ...(BaseComp.contextTypes || {}),
            rescope: PropTypes.object,
            $stores: PropTypes.object
        };
        static contextTypes      = {
            ...(BaseComp.contextTypes || {}),
            rescope: PropTypes.object,
            $stores: PropTypes.object
        };
        
        getChildContext() {
            return this.context;
        }
        
        render() {
            return <BaseComp { ...this.props }
                             { ...this.state }
                             dispatch={ this.props.dispatch }
                             $stores={ this.$stores }/>
        }
    }, _context)
}

export {
    Component as default,
    Component,
    rescopeProps,
    rescope
};