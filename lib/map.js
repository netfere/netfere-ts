import { is } from './is';
import { has } from './has';
import { apply } from './apply';
import { isEmpty } from './isEmpty';
/**
 * 对数据进行字段映射处理
 * @param {Array|Object} source 要处理的数据
 * @param {*} fields 要提取的字段信息。标准格式是{原键名:新键名,...},
 * 可以使用string(多个原键名可逗号分隔)、array(['原键名1',...])。对于string和array数据，将会转为标准格式
 * 如果新键名是一个方法，将调用此方法后，将返回的object添加到最终返回结果中
 * @param {*} distinct 将结果按此字段指定的键名进行聚合处理
 * @returns {*} 返回的数据类型与source一致
 */
export function map(source, fields, distinct) {
    const keys = {};
    //将fields是string,array,object的数据统一处理到keys中
    switch (is(fields)) {
        case 'string':
            keys[fields] = fields;
            break;
        case 'array':
            fields.forEach(item => {
                if (is(item, 'string')) {
                    keys[item] = item;
                }
                else if (is(item, 'object')) {
                    // @ts-ignore
                    apply(keys, item);
                }
            });
            break;
        case 'object':
            // @ts-ignore
            apply(keys, fields);
            break;
        default:
            break;
    }
    //source=object时转换为[source]，source不是数组时置为[]
    const result = !fields ? source : (is(source, 'object') ? [source] : (is(source, 'array') ? source : []))
        .map((item) => {
        const record = {};
        for (let key in keys) {
            let value = keys[key];
            if (is(value, 'function')) {
                apply(record, value(item));
            }
            else {
                record[value] = item[key];
            }
        }
        return record;
    });
    //如果聚合数据时，distinct为指定聚合字段键名，返回值数组
    if (is(distinct, 'string')) {
        // @ts-ignore
        return Array.from(new Set(result.map(rec => rec[distinct])));
    }
    else if (is(distinct, 'array')) {
        const value = {};
        result.forEach(item => {
            distinct.forEach(key => {
                if (!has(value, key)) {
                    value[key] = [];
                }
                value[key].push(item[key]);
            });
        });
        for (let key in value) {
            // @ts-ignore
            value[key] = Array.from(new Set(value[key]));
        }
        return value;
    }
    return is(source, 'object') ? (isEmpty(result) ? {} : result[0]) : result;
}
