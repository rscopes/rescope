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
        this.context          = {};
        this._$               = function stores() {
        };
        this._$.prototype     = parent ? new parent._$() : {};
        this.$                = new this._$();
        this._state           = function state() {
        };
        this._state.prototype = parent ? new parent._state() : {};
        this.state            = new this._state();
        this._datas           = function datas() {
        };
        this._datas.prototype = parent ? new parent._datas() : {};
        this.datas            = new this._datas();
        this.parent           = parent;
        this._stable          = true;
        this.__retainLocks    = {all : 0};
        this.__w8Locks        = {all : 0};
        this.__listening      = {};
        this.__context        = {};
        if ( parent ) {
            parent.retain("isMyParent");
            parent.on('stable', this.__parentStableList = s => this.release("isMyParent"));
            parent.on('unstable', this.__parentUnStableList = s => this.wait("isMyParent"));
            this.map(parent.__context, state, datas);
        }


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
            this.__context[id].on('stable', s => this.release(id));
            this.__context[id].on('unstable', s => this.wait(id));
        } else
            Store.mountStore(id, this.__context, null, state, datas);

        if ( !this.__listening[id] ) {
            !this.__context[id].isStable() && this.wait(id);

            this.__context[id].on(
                this.__listening[id] = {
                    'stable'   : s => this.release(id),
                    'unstable' : s => this.wait(id)
                });
        }
        return this.__context[id];
    }

    map( ctx, state = {}, datas = {} ) {
        let lctx = this._$.prototype;
        Object.keys(ctx).forEach(
            id => {
                if ( this.__context[id] ) {
                    console.warn("Rescope Context : ", id, " already exist in this context !");
                    return;
                }

                this.__context[id] = ctx[id];

                Object.defineProperty(
                    lctx,
                    id,
                    (( ctx, id ) => (
                        {
                            get : () => this.mount(id, state[id], datas[id])
                        }
                    ))
                    (this.__context, id)
                );
                Object.defineProperty(
                    this.state,
                    id,
                    (( ctx, id ) => (
                        {
                            get : () => (ctx[id] && ctx[id].state),
                            set : ( v ) => (this.mount(id, v))
                        }
                    ))
                    (lctx, id)
                );
                Object.defineProperty(
                    this.datas,
                    id,
                    (( ctx, id ) => (
                        {
                            get : () => (ctx[id] && ctx[id].datas),
                            set : ( v ) => (this.mount(id, undefined, v))
                        }
                    ))
                    (lctx, id)
                );
            }
        )
        Object.keys(ctx).forEach(
            id => (isFunction(ctx[id]) && ctx[id].singleton && this.mount(id, state[id], datas[id])))

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

    on( lists ) {
        if ( !isString(lists) && lists )
            Object.keys(lists).forEach(k => super.on(k, lists[k]));
        else super.on(...arguments);
    }

    un( lists ) {
        if ( !isString(lists) && lists )
            Object.keys(lists).forEach(k => super.un(k, lists[k]));
        else super.un(...arguments);
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


    retain( reason ) {
        this.__retainLocks.all++;
        if ( reason ) {
            this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
            this.__retainLocks[reason]++;
        }
    }

    dispose( reason ) {
        this.__retainLocks.all--;
        if ( reason ) {
            this.__retainLocks[reason] = this.__retainLocks[reason] || 0;
            this.__retainLocks[reason]--;
        }
        if ( !this.__retainLocks.all )
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
        if ( this.parent ) {
            this.parent.dispose("isMyParent");
            this.parent.un('stable', this.__parentStableList);
            this.parent.un('unstable', this.__parentUnStableList);
        }

        Object.keys(
            this.__listening
        ).forEach(
            id => this.__context[id].un(this.__listening[id])
        );
        this.__listening = {};

        for ( let key in ctx )
            if ( !isFunction(ctx[key]) ) {
                if ( ctx[key].context === ctx )
                    ctx[key].destroy();

                ctx[key] = ctx[key].constructor;
            }
    }
}