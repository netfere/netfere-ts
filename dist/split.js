"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./is");
/**
 * 分割字符串
 * (string,number) - 截取指定下标到末尾的字符串
 * (string,number,number) - 截取第1和第2个数字下标字符串
 * (string,number,boolean) - 截断指定长度并加省略号
 * (string,number,string) - 从右到左按指定长度以指定字符分隔。
 * (string,string) - 按指定内容进行分割
 * (string,regexp) - 按正则式进行分割
 * (string,array) - 按array提供数据进行分割
 * (string,array,number) - 按array提供数据进行分割后，最内层数组取指定下标，下标此时不是0就是1
 * @param {String} source 要处理的字符串
 * @param {Number|String|Regexp|Array} param 接受以下类型值，类型不同，处理方式不同。
 * @param {*} attr
 * @returns {String|String[]}
 */
function split(source, param, attr) {
    var pType = is_1.is(param), aType = is_1.is(attr);
    if (pType === 'number') {
        if (aType === 'boolean') {
            var reg = /[\u4e00-\u9fa5]/g, //专业匹配中文
            slice = source.substring(0, param), 
            // @ts-ignore
            chineseCharNum = (~~(slice.match(reg) && slice.match(reg).length)), realen = slice.length * 2 - chineseCharNum;
            return source.substr(0, realen) + (realen < source.length ? "..." : "");
        }
        else if (aType === 'number' || aType === 'undefined') {
            return aType === 'undefined' ? source.substring(param) : source.substring(param, attr);
        }
        else if (aType === 'string') {
            //从右到左分隔字符串
            var reg = new RegExp('\\B(?=(\\w{' + param + '})+(?!\\w))', 'g');
            return source.replace(reg, attr);
        }
    }
    else if (pType === 'string' || pType === 'regexp') {
        // @ts-ignore
        return source.split(param);
    }
    else if (pType === 'array') {
        param = param;
        var array_1 = [], kLen_1 = param.length, fnc_1 = function (data, idx) {
            // @ts-ignore
            var sp = data.split(param[idx]), sum = sp.length;
            if (sum < 2) {
                sp.push('');
            }
            if (typeof attr === 'number' && idx === kLen_1 - 1) {
                array_1.push(attr < sp.length ? sp[attr] : '');
            }
            return sp.map(function (item) {
                if (idx < kLen_1 - 1) {
                    return fnc_1(item, idx + 1);
                }
                else {
                    return item;
                }
            });
        };
        var result = fnc_1(source, 0);
        return is_1.is(attr, 'number') ? array_1 : result;
    }
    else {
        return null;
    }
}
exports.split = split;
