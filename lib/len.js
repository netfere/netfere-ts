import { is } from './is';
export function len(value, strTrue) {
    if (is(value, 'string')) {
        return strTrue ? value.replace(/[^\x00-\xff]/g, "rr").length : value.length;
    }
    else if (is(value, 'object')) {
        return Object.keys(value).length;
    }
    else if (is(value, 'array')) {
        return value.length;
    }
    else {
        return 0;
    }
}
