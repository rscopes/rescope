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
 * @returns {ScopeProvider}
 */
function rescope( baseComp, _context ) {
    let context = _context;
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
            dispatch: () => context.dispatch(...arguments)
        }
        
        constructor( p, ctx, q ) {
            super(p, ctx, q);
            context = context || ctx.rescope;
            if ( context && this.constructor.use ) {
                this.state   = {
                    ...this.state,
                    ...context.map(this, this.constructor.use || [], false)// don't bind now due to SSR
                }
                this.$stores = context.stores;
            }
            else this.render = () => <div>No Rescope context here { baseComp.name }</div>
        }
        
        componentWillMount() {
            if ( this.constructor.use ) {
                context.bind(this, this.constructor.use || [], false)
            }
            super.componentWillMount && super.componentWillMount()
        }
        
        componentWillUnmount() {
            super.componentWillUnmount && super.componentWillUnmount()
            this.constructor.use
            && context.unBind(this, this.constructor.use || [])
            delete this.$stores;
        }
        
        componentWillReceiveProps( np, nc ) {
            if ( !_context && nc.rescope !== this.context.rescope ) {
                this.constructor.use
                && this.context.rescope.unBind(this, this.constructor.use || []);
                context      = nc.rescope;
                this.$stores = context.stores;
                this.constructor.use
                && nc.rescope.bind(this, this.constructor.use || []);
            }
            super.componentWillReceiveProps && super.componentWillReceiveProps(np, nc);
        }
        
        getChildContext() {
            let ctx = super.getChildContext && super.getChildContext() || {};
            return {
                ...ctx,
                rescope: context,
                $stores: context.stores
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
function rescopeProps( BaseComp, _context ) {
    return rescope(class ReScopePropsProvider extends React.Component {
        static use               = BaseComp.use
        static childContextTypes = {
            ...(BaseComp.contextTypes || {}),
            rescope: PropTypes.object,
            $stores: PropTypes.object
        }
        static contextTypes      = {
            ...(BaseComp.contextTypes || {}),
            rescope: PropTypes.object,
            $stores: PropTypes.object
        }
        
        getChildContext() {
            return this.context;
        }
        
        render() {
            let context = _context || this.context.rescope;
            return <BaseComp { ...this.props } { ...this.state } dispatch={ context.dispatch.bind(context) }
                             $stores={ context.stores }/>
        }
    }, _context)
}

export {
    Component as default,
    Component,
    rescopeProps,
    rescope
};