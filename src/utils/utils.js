var is = require('./is');

export function walknSet( obj, path, value, stack ) {
    if ( is.string(path) )
        path = path.split('.');
    if ( !path.length )
        return false;
    else if ( path.length == 1 )
        return obj[ path[ 0 ] ] = stack
                                  ? [ ...( obj[ path[ 0 ] ] || [] ), value ]
                                  : value;
    else
        return walknSet(
            obj[ path[ 0 ] ] =
                obj[ path[ 0 ] ] || {},
            path.slice(1),
            value, stack
        );
}

export function walknGet( obj, path, isKey ) {
    if ( is.string(path) )
        path = path.split('.');
    return path.length
           ? obj[ path[ 0 ] ] && walknGet(obj[ path[ 0 ] ], path.slice(1))
           : obj;
}

//@todo
export function keyWalknSet( obj, path, value, stack ) {
    if ( is.string(path) )
        path = path.split(/(\>|\/)/ig).filter(v => ( v !== '>' && v ));
    return walknSet(obj, path, value);
}

export function keyWalknGet( obj, path, isKey ) {
    if ( is.string(path) )
        path = path.split(/(\>|\/)/ig).filter(v => ( v !== '>' && v ));
    return path.length
           ? obj[ path[ 0 ] ] && walknGet(obj[ path[ 0 ] ], path.slice(1))
           : obj;
}