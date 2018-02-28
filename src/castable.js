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
import index, {Store, Scope} from "./index";
// will use as external the index in dist

index.as = {};

index.caster = function caster( BaseComponent ) {
    
    if ( !(BaseComponent.prototype instanceof Store) ) {
        return function ( BaseComponent ) {
            return caster(BaseComponent)
        }
    }
    let baseName = (BaseComponent.typeName || BaseComponent.name || BaseComponent.displayName);
    if ( index.as[baseName] ) {
        throw new Error("ReScope : Duplicate caster type");
    }
    
    index.as[baseName] = function caster( ...argz ) {
        let Comp = argz[0];
        if ( !(Comp.prototype instanceof Store) ) {
            return function ( Comp ) {
                return caster(Comp, ...argz)
            }
        }
        if ( !Comp.__rescopeCaster )
            Comp = index.as.castable(Comp);
        else Comp.__castData.push(Comp)
        
        return Comp;
    }
    return BaseComponent;
}

index.as.castable = function castable( BaseComponent ) {
    
    if ( !(BaseComponent.prototype instanceof Store) ) {
        return function ( BaseComponent ) {
            return castable(BaseComponent)
        }
    }
    
    class casterStore extends Store {
        static displayName     = BaseComponent.name + "::Casted"
        static __rescopeCaster = true;
        static __castState     = [];
        static __castData      = [];
        
        constructor() {
            super(...arguments);
            this.updateFromLastCast = ( e, data ) => {
                this.push(data);
            }
            this.innerScope         = new Scope(
                {
                    "caster_0": BaseComponent
                },
                { parent: this.scopeObj, key: "caster", autoDestroy: true });
            this.innerScope.retain("casterStore")
            this.innerScope.mount("caster_0");
            this._lastCasterPos  = 0;
            this._lastCasterType = BaseComponent;
            this.innerScope.stores["caster_0"].bind("update", this.updateFromLastCast)
            if ( this.innerScope.stores["caster_0"].isStable() )
                this.push(this.innerScope.stores["caster_0"].data);
        }
        
        pushCaster( Comp, ...props ) {
            let last    = "caster_" + (this._lastCasterPos),
                current = "caster_" + (++this._lastCasterPos);
            this.innerScope.register(
                {
                    [current]: Comp
                }
            );
            this._lastCasterType = Comp;
            this.innerScope.stores[last].unBind("update", this.updateFromLastCast);
            this.innerScope.stores[current].bind("update", this.updateFromLastCast);
        }
        
        destroy() {
            this.innerScope.stores["caster_" + (this._lastCasterPos)].unBind("update", this.updateFromLastCast);
            this.innerScope.dispose("casterStore")
            super.destroy();
        }
    }
    
    return casterStore;
}
export default index;