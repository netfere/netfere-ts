import { has } from './has';
export function is(source: any, eq?: string | string[]): boolean | string {
    const whatTheType = (something: any) => {
        const t = Object.prototype.toString.call(something).replace(/^\[object |]$/gi, '');
        if (t === 'Object' && has(source, 'componentOptions')) {
            return 'vnode'
        } else {
            return t
        }
    }
    const type = whatTheType(source);
    if (eq && whatTheType(eq) === 'Array') {
        eq = (eq as string[]).join('|')
    }
    return eq ? new RegExp('^(' + eq + ')$', 'i').test(type) : type.toLowerCase()
}

export function isString(source: any): boolean {
    return is(source, 'string') as boolean;
}

export function isNumber(source: any): boolean {
    return is(source, 'number') as boolean;
}

export function isBoolean(source: any): boolean {
    return is(source, 'boolean') as boolean;
}

export function isObject(source: any): boolean {
    return is(source, 'object') as boolean;
}

export function isArray(source: any): boolean {
    return is(source, 'array') as boolean;
}

export function isFunction(source: any): boolean {
    return is(source, 'function') as boolean;
}

export function isRegexp(source: any): boolean {
    return is(source, 'regexp') as boolean;
}

export function isDate(source: any): boolean {
    return is(source, 'date') as boolean;
}

export function isNull(source: any): boolean {
    return is(source, 'null') as boolean;
}

export function isUndefined(source: any): boolean {
    return is(source, 'undefined') as boolean;
}

export function isNan(source: any): boolean {
    return is(source, 'nan') as boolean;
}

export function isVNode(source: any): boolean {
    return is(source, 'vnode') as boolean;
}