import { is } from './is';
import { len } from './len';
export function rnd(start, end) {
    if (arguments.length === 2) {
        return Math.round(start + Math.random() * (end - start));
    }
    else if (arguments.length === 1) {
        return Math.round(Math.random() * start);
    }
    else {
        return Math.round(Math.random() * 255);
    }
}
export function rndString(length, char) {
    length = length || 8;
    char = char || ['0', 'a'];
    const chars = ['0123456789', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '~!@#$%^&*()_+-=[{]}:;,.'];
    let list = '';
    if (is(char, 'array')) {
        if (char.indexOf('0') > -1) {
            list += chars[0];
        }
        if (char.indexOf('a') > -1) {
            list += chars[1];
        }
        if (char.indexOf('A') > -1) {
            list += chars[2];
        }
        if (char.indexOf('S') > -1) {
            list += chars[3];
        }
    }
    else if (is(char, 'string') && len(char) > 3) {
        list = char;
    }
    else {
        list = chars.join('');
    }
    var max = len(list) - 1;
    var res = '';
    for (let i = 0; i < length; i++) {
        res += list.charAt(rnd(0, max));
    }
    return res;
}
export function rndPwd(length, char) {
    return rndString(length || 8, char || ['0']);
}
export function rndColor(pix = true) {
    return (pix ? '#' : '') + Math.random().toString(16).substring(2).substr(0, 6);
}
