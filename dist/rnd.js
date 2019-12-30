"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./is");
var len_1 = require("./len");
function rnd(start, end) {
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
exports.rnd = rnd;
function rndString(length, char) {
    length = length || 8;
    char = char || ['0', 'a'];
    var chars = ['0123456789', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '~!@#$%^&*()_+-=[{]}:;,.'];
    var list = '';
    if (is_1.is(char, 'array')) {
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
    else if (is_1.is(char, 'string') && len_1.len(char) > 3) {
        list = char;
    }
    else {
        list = chars.join('');
    }
    var max = len_1.len(list) - 1;
    var res = '';
    for (var i = 0; i < length; i++) {
        res += list.charAt(rnd(0, max));
    }
    return res;
}
exports.rndString = rndString;
function rndPwd(length, char) {
    return rndString(length || 8, char || ['0']);
}
exports.rndPwd = rndPwd;
function rndColor(pix) {
    if (pix === void 0) { pix = true; }
    return (pix ? '#' : '') + Math.random().toString(16).substring(2).substr(0, 6);
}
exports.rndColor = rndColor;
