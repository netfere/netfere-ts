"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./is");
var has_1 = require("./has");
function parseUrl(url, forceNumber) {
    if (forceNumber === void 0) { forceNumber = true; }
    if (typeof url === 'boolean') {
        forceNumber = url;
        url = '';
    }
    var result = {};
    url = url || (window ? location.href : '');
    //如果参数不是对象。返回空对象
    if (typeof url !== 'string') {
        return result;
    }
    //处理数字'100'=>100
    var force = function (value) {
        if (forceNumber && typeof value === 'string' && isNaN(Number(value)) === false) {
            return Number(value);
        }
        else {
            return value;
        }
    };
    var _str = url.substr(url.indexOf('?') + 1);
    //处理中文后以&进行分割
    decodeURI(_str).split("&").forEach(function (item) {
        var _a = item.split('='), key = _a[0], value = _a[1];
        if (has_1.has(result, key)) {
            if (!is_1.isArray(result[key])) {
                result[key] = [result[key]];
            }
            result[key].push(force(value));
        }
        else {
            result[key] = force(value);
        }
    });
    return result;
}
exports.parseUrl = parseUrl;
