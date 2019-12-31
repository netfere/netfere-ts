import { is } from './is';
import { len } from './len';
export function isEmpty(value: any, ignore?: boolean): boolean {
    const type = is(value);
    switch (type) {
        case 'null':
            return true;
        case 'undefined':
            return true;
        case 'boolean':
            return value === false;
        case 'string':
            return ignore === true ? false : (value === '')
        case 'number':
            return ignore === true ? false : (value === 0)
        case 'array':
            return len(value) === 0;
        case 'object':
            return len(value) === 0;
        default:
            return false;
    }
}

export function notEmpty(value: any, ignore?: boolean): boolean {
    return !isEmpty(value, ignore)
}