"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var has_1 = require("./has");
function is(source, eq) {
    var whatTheType = function (something) {
        var t = Object.prototype.toString.call(something).replace(/^\[object |]$/gi, '');
        if (t === 'Object' && has_1.has(source, 'componentOptions')) {
            return 'vnode';
        }
        else {
            return t;
        }
    };
    var type = whatTheType(source);
    if (eq && whatTheType(eq) === 'Array') {
        eq = eq.join('|');
    }
    return eq ? new RegExp('^(' + eq + ')$', 'i').test(type) : type.toLowerCase();
}
exports.is = is;
function isString(source) {
    return is(source, 'string');
}
exports.isString = isString;
function isNumber(source) {
    return is(source, 'number');
}
exports.isNumber = isNumber;
function isBoolean(source) {
    return is(source, 'boolean');
}
exports.isBoolean = isBoolean;
function isObject(source) {
    return is(source, 'object');
}
exports.isObject = isObject;
function isArray(source) {
    return is(source, 'array');
}
exports.isArray = isArray;
function isFunction(source) {
    return is(source, 'function');
}
exports.isFunction = isFunction;
function isRegexp(source) {
    return is(source, 'regexp');
}
exports.isRegexp = isRegexp;
function isDate(source) {
    return is(source, 'date');
}
exports.isDate = isDate;
function isNull(source) {
    return is(source, 'null');
}
exports.isNull = isNull;
function isUndefined(source) {
    return is(source, 'undefined');
}
exports.isUndefined = isUndefined;
function isNan(source) {
    return is(source, 'nan');
}
exports.isNan = isNan;
function isVNode(source) {
    return is(source, 'vnode');
}
exports.isVNode = isVNode;
