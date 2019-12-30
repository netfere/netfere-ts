"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./is");
var compare_1 = require("./compare");
var isEmpty_1 = require("./isEmpty");
var has_1 = require("./has");
/**
 * 从源数据中删除指定数据
 * @param {*} source 从此数据中删除，允许Array,Object,String。
 * 一、source=Array时，query值类型不同处理方式不同：
 *  1)query是函数时，需要提供一个查询方法，执行后将从source中删除满足query返回为true的数据；
 *  2)query为其他数据类型时，将从source中删除与之一致的记录。可以为String,Number,Object,Array
 * 二、source=Object时，query可以是String或String[]，但必须是source中的键名，执行后将删除相应的键值对;
 * 三、source=String时，query可以是String,Regexp等，source中相应的部分将替换为空
 * @param {*} query 详见source中的相关说明
 * @returns {*} 返回处理后的结果
 */
function remove(source, query) {
    if (is_1.isArray(source)) {
        var result = [];
        if (is_1.isFunction(query)) {
            for (var i = source.length - 1; i >= 0; i--) {
                if (query(source[i], i, source)) {
                    result.push(source[i]);
                    source.splice(i, 1);
                }
            }
            return result;
        }
        else if (is_1.is(query, ['object', 'array'])) {
            result = remove(source, function (a) { return compare_1.compare(a, query); });
            return isEmpty_1.notEmpty(result) ? query : null;
        }
        else {
            result = remove(source, function (a) { return a === query; });
            return isEmpty_1.notEmpty(result) ? query : null;
        }
    }
    else if (is_1.isObject(source)) {
        var result_1 = {};
        if (is_1.isString(query) && has_1.has(source, query)) {
            result_1[query] = source[query];
            delete source[query];
        }
        else if (is_1.isArray(query)) {
            query.forEach(function (key) {
                if (has_1.has(source, key)) {
                    result_1[key] = source[key];
                    delete source[key];
                }
            });
        }
        return result_1;
    }
    else if (is_1.isString(source)) {
        source = source.replace(query, '');
        return source;
    }
}
exports.remove = remove;
