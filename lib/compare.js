"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./is");
function compareArray(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    var length = a.length;
    var temp = true;
    for (var i = 0; i < length; i++) {
        if (is_1.is(a[i]) === is_1.is(b[i])) {
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
    for (var i = 0; i < length; i++) {
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
    var a = keySort(obj1);
    var b = keySort(obj2);
    var keya = Object.keys(a);
    var keyb = Object.keys(b);
    if (keya.length !== keyb.length) {
        return false;
    }
    return keya.every(function (key) {
        return compare(a[key], b[key]);
    });
}
function compare(a, b) {
    if (a === b) {
        return true;
    }
    if (a === null || b === null || a === undefined || b === undefined || is_1.is(a) !== is_1.is(b)) {
        return false;
    }
    if (is_1.is(a, 'array') && is_1.is(b, 'array')) {
        return compareArray(a, b);
    }
    if (is_1.is(a, 'object')) {
        return compareObject(a, b);
    }
    return false;
}
exports.compare = compare;
function different(target, source) {
    var value = {};
    for (var key in target) {
        if (!compare(target[key], source[key])) {
            value[key] = target[key];
        }
    }
    return value;
}
exports.different = different;
