import { is } from './is';
import { has } from './has';
import { isEmpty } from './isEmpty';
interface IAnyObject {
    [x: string]: any
}

export function apply(target: IAnyObject, ...more: IAnyObject[]): IAnyObject {
    return (<any>Object).assign(target, ...more);
}

export function applyIf(target: IAnyObject, ...more: IAnyObject[]): IAnyObject {
    const value = apply({}, ...more);
    Object.keys(target).forEach(key => {
        if (has(value, key)) {
            target[key] = value[key];
        }
    })
    return target;
}

export function applyNot(target: IAnyObject, ...more: IAnyObject[]): IAnyObject {
    const value = apply({}, ...more);
    Object.keys(value).filter(key => !has(target, key)).forEach(key => {
        target[key] = value[key]
    })
    return target;
}

export function clone(target: IAnyObject, ...more: IAnyObject[]): IAnyObject {
    return apply({}, target, ...more);
}

export function copy(target: IAnyObject, ...more: IAnyObject[]): IAnyObject {
    const source = clone(target, ...more);
    if (isEmpty(source)) {
        return source
    }
    if (is(source, 'array')) {
        return source.map((item: any) => {
            return copy(item)
        })
    } else if (is(source, 'object')) {
        var result: IAnyObject = {};
        for (var key in source) {
            result[key] = is(source[key], ['object', 'array']) ? copy(source[key]) : source[key];
        }
        return result;
    } else {
        return source
    }
}
