import { is, isObject, isArray } from './is';
/**
 * 数据切片
 * @param {*} source 源数据
 * @param {array|string|number} keys source=Array时 keys=[start,end] source=Object时keys为source中的prop
 * @param {boolean} include 默认true 为true时结果仅为keys指定,为false时，结果排除keys指定 当source为Array时无效
 */
export function slice(source, keys, include = true) {
    if (is(keys, ['string', 'number'])) {
        keys = [keys];
    }
    else if (isObject(keys)) {
        keys = Object.keys(keys);
    }
    const result = isArray(source) ? [] : {};
    if (isObject(source)) {
        for (let key in source) {
            if (include && keys.indexOf(key) > -1) {
                result[key] = source[key];
            }
            else if (!include && keys.indexOf(key) === -1) {
                result[key] = source[key];
            }
        }
    }
    else if (isArray(source)) {
        const total = source.length;
        let [start, end] = keys;
        if (end === undefined) {
            end = total;
        }
        for (let i = start; i < (end > total ? total : end); i++) {
            result.push(source[i]);
        }
    }
    return result;
}
