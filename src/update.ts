import { is } from './is';
import { insert } from './insert';
import { apply } from './apply';

/**
 * 在源数据中更新数据
 * @param {Array} source
 *  1)query=Number时，将指定下标的数据修改为value；
 *  2)query=Function时，将通过query提供的查询方法找到最多一条记录，然后修改为value;
 * 
 * @param {*} value 详见source中的相关说明
 * @param {*} query 详见source中的相关说明
 * @param {Boolean} rep 找到记录时处理的方式 true则替换，false则新增(默认)
 * @param {Boolean} before 找不到记录时添到头部或尾部 true则添加头部 false则添加末尾(默认)
 * @returns {Array|Object|String} 与source类型一致
 */
export function update(source: any[], value: any, query: any, rep?:boolean, before?:boolean): any[] {
    switch (is(query)) {
        case 'number'://找到query下标的记录，按value进行修改
            if (source.length > query && query >= 0) {
                const data = source[query], type = is(data);
                if (type === 'array' || 'object') {
                    if (rep === true) {
                        source[query] = value;
                    } else {
                        if (type === 'object') {
                            apply(data, value)
                        } else {
                            data.push(value)
                        }
                    }
                } else {
                    source[query] = value;
                }
            } else {
                before ? insert(source, 0, value) : source.push(value)
            }
            break;
        case 'function':
            //根据query方法找到记录下标，然后调用query=number
            update(source, value, (<any>source).findIndex(query), rep, before);
            break;
        default:
            const index = source.indexOf(value);
            if (index > -1) {
                update(source, value, index, rep, before)
            }
            break;
    }
    return source
}