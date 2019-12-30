"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./is");
var has_1 = require("./has");
var isEmpty_1 = require("./isEmpty");
function apply(target) {
    var _a;
    var more = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        more[_i - 1] = arguments[_i];
    }
    return (_a = Object).assign.apply(_a, __spreadArrays([target], more));
}
exports.apply = apply;
function applyIf(target) {
    var more = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        more[_i - 1] = arguments[_i];
    }
    var value = apply.apply(void 0, __spreadArrays([{}], more));
    Object.keys(target).forEach(function (key) {
        if (has_1.has(value, key)) {
            target[key] = value[key];
        }
    });
    return target;
}
exports.applyIf = applyIf;
function applyNot(target) {
    var more = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        more[_i - 1] = arguments[_i];
    }
    var value = apply.apply(void 0, __spreadArrays([{}], more));
    Object.keys(value).filter(function (key) { return !has_1.has(target, key); }).forEach(function (key) {
        target[key] = value[key];
    });
    return target;
}
exports.applyNot = applyNot;
function clone(target) {
    var more = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        more[_i - 1] = arguments[_i];
    }
    return apply.apply(void 0, __spreadArrays([{}, target], more));
}
exports.clone = clone;
function copy(target) {
    var more = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        more[_i - 1] = arguments[_i];
    }
    var source = clone.apply(void 0, __spreadArrays([target], more));
    if (isEmpty_1.isEmpty(source)) {
        return source;
    }
    if (is_1.is(source, 'array')) {
        return source.map(function (item) {
            return copy(item);
        });
    }
    else if (is_1.is(source, 'object')) {
        var result = {};
        for (var key in source) {
            result[key] = is_1.is(source[key], ['object', 'array']) ? copy(source[key]) : source[key];
        }
        return result;
    }
    else {
        return source;
    }
}
exports.copy = copy;
