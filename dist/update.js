"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./is");
var insert_1 = require("./insert");
var apply_1 = require("./apply");
/**
 * 在源数据中更新数据
 * @param {Array} source
 *  1)query=Number时，将指定下标的数据修改为value；
 *  2)query=Function时，将通过query提供的查询方法找到最多一条记录，然后修改为value;
 *
 * @param {*} value 详见source中的相关说明
 * @param {*} query 详见source中的相关说明
 * @param {Boolean} rep 找到记录时处理的方式
 * @param {Boolean} before 找不到记录时添到头部或尾部
 * @returns {Array|Object|String} 与source类型一致
 */
function update(source, value, query, rep, before) {
    switch (is_1.is(query)) {
        case 'number': //找到query下标的记录，按value进行修改
            if (source.length > query && query >= 0) {
                var data = source[query], type = is_1.is(data);
                if (type === 'array' || 'object') {
                    if (rep === true) {
                        source[query] = value;
                    }
                    else {
                        if (type === 'object') {
                            apply_1.apply(data, value);
                        }
                        else {
                            data.push(value);
                        }
                    }
                }
                else {
                    source[query] = value;
                }
            }
            else {
                before ? insert_1.insert(source, 0, value) : source.push(value);
            }
            break;
        case 'function':
            //根据query方法找到记录下标，然后调用query=number
            update(source, value, source.findIndex(query), rep, before);
            break;
        default:
            var index = source.indexOf(value);
            if (index > -1) {
                update(source, value, index, rep, before);
            }
            break;
    }
    return source;
}
exports.update = update;
