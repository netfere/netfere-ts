"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 在object中通过prop查找值。如：{info:{name,sex}}时，可通过info.name查值
 * @param {Object} object
 * @param {String} prop 用.表示的值键
 * @returns {*}
 */
function getValue(object, prop) {
    prop = prop || '';
    var paths = prop.split('.');
    var current = object;
    var result;
    var lastProp;
    var getVal = function (obj, path) {
        if (/\d+/.test(path) && Array.isArray(obj)) {
            lastProp = Number(path);
            return obj.length > lastProp ? obj[lastProp] : obj[path];
        }
        else {
            lastProp = path;
            return obj[path];
        }
    };
    for (var i = 0, j = paths.length; i < j; i++) {
        var path = paths[i];
        if (!current)
            break;
        if (i === j - 1) {
            result = getVal(current, path);
        }
        else {
            current = getVal(current, path);
        }
    }
    return { owner: current, value: result, prop: lastProp };
}
exports.getValue = getValue;
function getValueByPath(object, prop) {
    console.debug('getValueByPath 已过期，请使用 getValue');
    return getValue(object, prop);
}
exports.getValueByPath = getValueByPath;
