import { isString, isRegexp, isObject, isArray } from './is';
import { getValue } from './getValue';
/**
 * 在源数据中找数据
 * @param {Array|Object|String} source 类型为Array,Object,String:
 * 1)source=Array时，query是一个查询方法。
 * 2)source=Object时，query是一个键名，且允许使用.分隔的键名路径
 * 3)source=String时，query可以为String或Regexp，查找到的数据将以String[]返回
 * @param {*} query 详见source中的相关说明
 * @param {*} state 仅当source=Array时有效，true时返回数据和下标 false时只返回下标，不设置仅返回数据
 * @returns {*}
 */
export function find(source, query, state) {
    if (isString(source)) {
        return (isRegexp(query) ? source.match(query) : isString(query) ? source.match(new RegExp(query, 'g')) : []) || [];
    }
    else if (isObject(source)) {
        return getValue(source, query).value;
    }
    else if (isArray(source)) {
        if (state === false) {
            return source.findIndex(query);
        }
        else if (state === true) {
            let index = source.findIndex(query);
            return index > -1 ? { index, data: source[index] } : { index, data: null };
        }
        else {
            return source.find(query);
        }
    }
}
