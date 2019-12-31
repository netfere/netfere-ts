import { is } from './is';
import { has } from './has';
import { isEmpty } from './isEmpty';
export function apply(target, ...more) {
    return Object.assign(target, ...more);
}
export function applyIf(target, ...more) {
    const value = apply({}, ...more);
    Object.keys(target).forEach(key => {
        if (has(value, key)) {
            target[key] = value[key];
        }
    });
    return target;
}
export function applyNot(target, ...more) {
    const value = apply({}, ...more);
    Object.keys(value).filter(key => !has(target, key)).forEach(key => {
        target[key] = value[key];
    });
    return target;
}
export function clone(target, ...more) {
    return apply({}, target, ...more);
}
export function copy(target, ...more) {
    const source = clone(target, ...more);
    if (isEmpty(source)) {
        return source;
    }
    if (is(source, 'array')) {
        return source.map((item) => {
            return copy(item);
        });
    }
    else if (is(source, 'object')) {
        var result = {};
        for (var key in source) {
            result[key] = is(source[key], ['object', 'array']) ? copy(source[key]) : source[key];
        }
        return result;
    }
    else {
        return source;
    }
}
