import { is } from './is';
function compareArray(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    const length = a.length;
    let temp = true;
    for (let i = 0; i < length; i++) {
        if (is(a[i]) === is(b[i])) {
            if (b.indexOf(a[i]) === -1 || a.indexOf(b[i]) === -1) {
                temp = false;
            }
        }
        else {
            return false;
        }
    }
    if (temp) {
        return temp;
    }
    for (let i = 0; i < length; i++) {
        if (!compare(a[i], b[i])) {
            return false;
        }
    }
    return true;
}
function keySort(obj) {
    var newkey = Object.keys(obj).sort();
    var newObj = {};
    for (var i = 0; i < newkey.length; i++) {
        newObj[newkey[i]] = obj[newkey[i]];
    }
    return newObj;
}
function compareObject(obj1, obj2) {
    const a = keySort(obj1);
    const b = keySort(obj2);
    const keya = Object.keys(a);
    const keyb = Object.keys(b);
    if (keya.length !== keyb.length) {
        return false;
    }
    return keya.every(key => {
        return compare(a[key], b[key]);
    });
}
export function compare(a, b) {
    if (a === b) {
        return true;
    }
    if (a === null || b === null || a === undefined || b === undefined || is(a) !== is(b)) {
        return false;
    }
    if (is(a, 'array') && is(b, 'array')) {
        return compareArray(a, b);
    }
    if (is(a, 'object')) {
        return compareObject(a, b);
    }
    return false;
}
export function different(target, source) {
    let value = {};
    for (let key in target) {
        if (!compare(target[key], source[key])) {
            value[key] = target[key];
        }
    }
    return value;
}
