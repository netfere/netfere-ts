import { is } from './is';

export function len(value: any, strTrue?: boolean): number {
    if (typeof value === 'string') {
        return strTrue ? value.replace(/[^\x00-\xff]/g, "rr").length : value.length
    } else if (is(value, 'object')) {
        return Object.keys(value).length;
    } else if (is(value, 'array')) {
        return value.length
    } else {
        return 0
    }
}
