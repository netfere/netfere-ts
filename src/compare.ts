import { is } from './is';
import { IAnyObject } from '../typings/global';

function compareArray(a: any, b: any) {
    if (a.length !== b.length) {
        return false;
    }
    const length = a.length;
    let temp = true
    for (let i = 0; i < length; i++) {
        if (is(a[i]) === is(b[i])) {
            if (b.indexOf(a[i]) === -1 || a.indexOf(b[i]) === -1) {
                temp = false
            }
        } else {
            return false
        }
    }
    if (temp) { return temp }
    for (let i = 0; i < length; i++) {
        if (!compare(a[i], b[i])) {
            return false;
        }
    }

    return true;
}

function keySort(obj: { [x: string]: any }) {
    var newkey: string[] = Object.keys(obj).sort();
    var newObj: { [x: string]: any } = {};
    for (var i = 0; i < newkey.length; i++) {
        newObj[newkey[i]] = obj[newkey[i]];
    }
    return newObj;
}

function compareObject(obj1: { [x: string]: any }, obj2: { [x: string]: any }): any {
    const a = keySort(obj1)
    const b = keySort(obj2)
    const keya = Object.keys(a);
    const keyb = Object.keys(b);

    if (keya.length !== keyb.length) {
        return false;
    }

    return keya.every(key => {
        return compare(a[key], b[key])
    });
}
/**
 * 判断两个数据是否完全一致
 * @param a 
 * @param b 
 */
export function compare(a: any, b: any) {
    if (a === b) {
        return true;
    }
    if (a === null || b === null || a === undefined || b === undefined || is(a) !== is(b)) {
        return false
    }
    if (is(a, 'array') && is(b, 'array')) {
        return compareArray(a, b);
    }
    if (is(a, 'object')) {
        return compareObject(a, b);
    }
    return false
}
/**
 * 返回target中与source中不一致的数据
 * @param target 
 * @param source 
 */
export function different(target: IAnyObject, source: IAnyObject) {
    let value: IAnyObject = {}
    for (let key in target) {
        if (!compare(target[key], source[key])) {
            value[key] = target[key]
        }
    }
    return value
}