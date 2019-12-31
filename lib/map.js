"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./is");
var has_1 = require("./has");
var apply_1 = require("./apply");
var isEmpty_1 = require("./isEmpty");
/**
 * 对数据进行字段映射处理
 * @param {Array|Object} source 要处理的数据
 * @param {*} fields 要提取的字段信息。标准格式是{原键名:新键名,...},
 * 可以使用string(多个原键名可逗号分隔)、array(['原键名1',...])。对于string和array数据，将会转为标准格式
 * 如果新键名是一个方法，将调用此方法后，将返回的object添加到最终返回结果中
 * @param {*} distinct 将结果按此字段指定的键名进行聚合处理
 * @returns {*} 返回的数据类型与source一致
 */
function map(source, fields, distinct) {
    var keys = {};
    //将fields是string,array,object的数据统一处理到keys中
    switch (is_1.is(fields)) {
        case 'string':
            keys[fields] = fields;
            break;
        case 'array':
            fields.forEach(function (item) {
                if (is_1.is(item, 'string')) {
                    keys[item] = item;
                }
                else if (is_1.is(item, 'object')) {
                    // @ts-ignore
                    apply_1.apply(keys, item);
                }
            });
            break;
        case 'object':
            // @ts-ignore
            apply_1.apply(keys, fields);
            break;
        default:
            break;
    }
    //source=object时转换为[source]，source不是数组时置为[]
    var result = !fields ? source : (is_1.is(source, 'object') ? [source] : (is_1.is(source, 'array') ? source : []))
        .map(function (item) {
        var record = {};
        for (var key in keys) {
            var value = keys[key];
            if (is_1.is(value, 'function')) {
                apply_1.apply(record, value(item));
            }
            else {
                record[value] = item[key];
            }
        }
        return record;
    });
    //如果聚合数据时，distinct为指定聚合字段键名，返回值数组
    if (is_1.is(distinct, 'string')) {
        // @ts-ignore
        return Array.from(new Set(result.map(function (rec) { return rec[distinct]; })));
    }
    else if (is_1.is(distinct, 'array')) {
        var value_1 = {};
        result.forEach(function (item) {
            distinct.forEach(function (key) {
                if (!has_1.has(value_1, key)) {
                    value_1[key] = [];
                }
                value_1[key].push(item[key]);
            });
        });
        for (var key in value_1) {
            // @ts-ignore
            value_1[key] = Array.from(new Set(value_1[key]));
        }
        return value_1;
    }
    return is_1.is(source, 'object') ? (isEmpty_1.isEmpty(result) ? {} : result[0]) : result;
}
exports.map = map;
