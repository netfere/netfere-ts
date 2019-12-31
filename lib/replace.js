"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./is");
/**
 * 字符串替换操作
 * (string,regexp,string) - 通过正则式查找替换
 * (string,string,string) - 通过字符串查找替换
 * (string,string,string,boolean) - 通过字符串查找仅替换一次
 * (string,number[],string) - 通过数组设置将指定位置替换成指定内容
 * (string,number) - 将源字符串重复指定次数，功能同String.repeat
 * @param {String} source 要处理的源数据
 * @param {Regexp|String|Number|Number[]} target
 * @param {String} value
 * @param {Boolean} once
 * @returns {String} 返回替换处理的结果
 
 */
var repeat = function (source, count) {
    return source.repeat(count);
};
function replace(source, target, value, once) {
    if (is_1.isRegexp(target)) {
        return source.replace(target, value);
    }
    else if (is_1.isString(target)) {
        return once === false
            ? source.replace(target, value)
            : replace(source, new RegExp(target, "gm"), value);
    }
    else if (is_1.isArray(target)) {
        var _a = target, a = _a[0], b = _a[1], c = _a[2];
        value = value || '*';
        if (!is_1.isNumber(a)) {
            return repeat(value, source.length);
        }
        else {
            if (!is_1.isNumber(b)) {
                b = a;
                a = 0;
                c = source.length - b;
                return replace(source, [a, b, c], value);
            }
            else if (!is_1.isNumber(c)) {
                c = b;
                b = source.length - a - c;
                return repeat(value, source.substr(0, a).length) + source.substr(a, b)
                    + repeat(value, source.substr(a + b, c).length);
            }
            return source.replace(new RegExp('(\\w{' + a + '})\\w{' + b + '}(\\w{' + c + '})', 'g'), '$1' + repeat(value, b) + '$2');
        }
    }
    else if (is_1.isNumber(target)) {
        return repeat(source, target);
    }
    else {
        return source;
    }
}
exports.replace = replace;
