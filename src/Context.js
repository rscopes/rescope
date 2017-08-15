/*
 * Copyright (c) 2017.  Caipi Labs.  All rights reserved.
 *
 * This File is part of Caipi. You can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *  This project is dual licensed under AGPL and Commercial Licence.
 *
 * @author : Nathanael Braun
 * @contact : caipilabs@gmail.com
 */

/**
 * @author Nathanael BRAUN
 *
 * Date: 13/08/2017
 * Time: 17:15
 */


var isString     = require('isstring'),
    isArray      = require('isarray'),
    EventEmitter = require('events'),
    isFunction   = require('isfunction')
    , Store      = require('./Store');

let openContexts = {};

export default class Context extends EventEmitter {
    static openContexts = openContexts;

    static getContext( key ) {
        return openContexts[key] = openContexts[key] || new Context({});
    };

    constructor( ctx, parent, state, datas, name ) {
        super();
        this.context      = {};
        this._$           = function () {
        };
        this._$.prototype = parent ? new parent._$() : {};
        this.$            = new this._$();
        this.parent       = parent;
        parent && parent.lock("isMyParent");

        this.state     = {};
        this.datas     = {};
        this.__locks   = {all : 0};
        this.__context = {};
        this.map(ctx, state, datas);
    }

    mount( id, state, datas ) {
        if ( !this.__context[id] ) {//ask parent
            if ( !this.parent )
                return;
            return this.parent.mount(...arguments);
        }
        if ( isFunction(this.__context[id]) ) {
            Store.mountStore(id, this.__context, null, state, datas);
            this.__context[id]._stable
        }
    }

    map( ctx, state = {}, datas = {} ) {
        let lctx = this._$.prototype;
        Object.keys(ctx).forEach(
            id => {
                if ( this.__context[id] ) {
                    console.warn("Rescope Context : ", id, " already exist in this context !");
                    return;
                }

                if ( !isFunction(ctx[id]) )
                    this.__context[id] = ctx[id];

                Object.defineProperty(
                    lctx,
                    id,
                    (( ctx, id ) => (
                        {
                            get : () => Store.mountStore(id, ctx, state[id])
                        }
                    ))
                    (this.__context, id)
                );
                Object.defineProperty(
                    this.state,
                    id,
                    (( ctx, id ) => (
                        {
                            get : () => (!isFunction(ctx[id]) ? ctx[id].state : undefined),
                            set : ( v ) => (Store.mountStore(id, ctx, null, v))
                        }
                    ))
                    (this.__context, id)
                );
                Object.defineProperty(
                    this.datas,
                    id,
                    (( ctx, id ) => (
                        {
                            get : () => (!isFunction(ctx[id]) ? ctx[id].datas : undefined),
                            set : ( v ) => (Store.mountStore(id, ctx, null, undefined, v))
                        }
                    ))
                    (this.__context, id)
                );
            }
        )
    }

    bind( comp, querys ) {

    }

    serialize( flags_states = /.*/, flags_datas = /.*/ ) {
        let ctx = this.__context, output = {state : {}, datas : {}};
        Object.keys(ctx).forEach(
            id => {
                if ( isFunction(ctx[id]) )
                    return;

                let flags = ctx[id].constructor.flags;

                flags = isArray(flags) ? flags : [flags || ""];

                if ( flags.reduce(( r, flag ) => (r || flags_states.test(flag)), false) )
                    output.state[id] = this.state[id];

                if ( flags.reduce(( r, flag ) => (r || flags_datas.test(flag)), false) )
                    output.datas[id] = this.datas[id];
            }
        )
        return output;
    }

    restore( {state, datas}, quiet ) {
        let ctx = this.__context;
        Object.keys(datas).forEach(
            id => {
                quiet ?
                ctx.datas = datas[id]
                    :
                ctx.push(datas[id]);
            }
        );
        Object.keys(state).forEach(
            id => {
                quiet ?
                ctx.state = state[id]
                    :
                ctx.setState(state[id]);
            }
        );
    }

    lock( reason ) {
        this.__locks.all++;
        if ( reason ) {
            this.__locks[reason] = this.__locks[reason] || 0;
            this.__locks[reason]++;
        }
    }

    dispose( reason ) {
        this.__locks.all--;
        if ( reason ) {
            this.__locks[reason] = this.__locks[reason] || 0;
            this.__locks[reason]--;
        }
        if ( !this.__locks.all )
            this.destroy();
    }

    wait( reason ) {
        !this.__w8Locks.all && this.emit("unstable", this);
        this.__w8Locks.all++;
        if ( reason ) {
            this.__w8Locks[reason] = this.__w8Locks[reason] || 0;
            this.__w8Locks[reason]++;
        }
    }

    release( reason ) {
        this.__w8Locks.all--;
        if ( reason ) {
            this.__w8Locks[reason] = this.__w8Locks[reason] || 0;
            this.__w8Locks[reason]--;
        }
        if ( !this.__w8Locks.all )
            this.emit("stable", this);
    }

    /**
     * order destroy of local stores
     */
    destroy() {
        let ctx = this.__context;
        this.parent && this.parent.dispose("isMyParent");
        for ( let key in ctx )
            if ( !isFunction(ctx[key]) ) {
                if ( ctx[key].context === ctx )
                    ctx[key].destroy();

                ctx[key] = ctx[key].constructor;
            }
    }
}