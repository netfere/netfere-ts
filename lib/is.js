import { has } from './has';
export function is(source, eq) {
    const whatTheType = (something) => {
        const t = Object.prototype.toString.call(something).replace(/^\[object |]$/gi, '');
        if (t === 'Object' && has(source, 'componentOptions')) {
            return 'vnode';
        }
        else {
            return t;
        }
    };
    const type = whatTheType(source);
    if (eq && whatTheType(eq) === 'Array') {
        eq = eq.join('|');
    }
    return eq ? new RegExp('^(' + eq + ')$', 'i').test(type) : type.toLowerCase();
}
export function isString(source) {
    return is(source, 'string');
}
export function isNumber(source) {
    return is(source, 'number');
}
export function isBoolean(source) {
    return is(source, 'boolean');
}
export function isObject(source) {
    return is(source, 'object');
}
export function isArray(source) {
    return is(source, 'array');
}
export function isFunction(source) {
    return is(source, 'function');
}
export function isRegexp(source) {
    return is(source, 'regexp');
}
export function isDate(source) {
    return is(source, 'date');
}
export function isNull(source) {
    return is(source, 'null');
}
export function isUndefined(source) {
    return is(source, 'undefined');
}
export function isNan(source) {
    return is(source, 'nan');
}
export function isVNode(source) {
    return is(source, 'vnode');
}
