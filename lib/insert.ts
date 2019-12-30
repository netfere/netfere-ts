import { is } from './is';
/**
 * 在源数据中插入数据
 * @param {Array|String} source 允许Array,String。
 * 1)source=Array时，将value插入到index下标之后;
 * 3)source=String时，value也必须为String。将在source中的第index个位置后面插入value。index=0将插入到前面,不指定index时将插入到后面
 * @param {Number} index 
 * @param {Array|String} value 
 * @returns {*} 返回类型同source
 */
export function insert(source: any[] | string, index: number | string, value: any) {
    if (is(source, 'array')) {
        (<any[]>source).splice(<number>index, 0, value);
    } else if (is(source, 'string')) {
        if (is(index, 'number')) {
            const idx: number = <number>index;
            const text: string = <string>source;
            source = text.substr(0, idx) + value + text.substr(idx, text.length - idx)
        } else {
            source += (is(index, 'string') ? index : value)
        }
    }
    return source;
}