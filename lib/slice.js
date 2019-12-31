"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./is");
/**
 * 数据切片
 * @param {*} source 源数据
 * @param {array|string|number} keys source=Array时 keys=[start,end] source=Object时keys为source中的prop
 * @param {boolean} include 默认true 为true时结果仅为keys指定,为false时，结果排除keys指定 当source为Array时无效
 */
function slice(source, keys, include) {
    if (include === void 0) { include = true; }
    if (is_1.is(keys, ['string', 'number'])) {
        keys = [keys];
    }
    else if (is_1.isObject(keys)) {
        keys = Object.keys(keys);
    }
    var result = is_1.isArray(source) ? [] : {};
    if (is_1.isObject(source)) {
        for (var key in source) {
            if (include && keys.indexOf(key) > -1) {
                result[key] = source[key];
            }
            else if (!include && keys.indexOf(key) === -1) {
                result[key] = source[key];
            }
        }
    }
    else if (is_1.isArray(source)) {
        var total = source.length;
        var start = keys[0], end = keys[1];
        if (end === undefined) {
            end = total;
        }
        for (var i = start; i < (end > total ? total : end); i++) {
            result.push(source[i]);
        }
    }
    return result;
}
exports.slice = slice;
