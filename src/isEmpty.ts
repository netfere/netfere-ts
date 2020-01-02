import { is } from './is';
import { len } from './len';

/**
 * 判断value是否为空值
 * @param value 
 * @param ignore 允许忽略的值 如value=0会判断为空，ignore=0时，则返回false
 */
export function isEmpty(value: any, ignore?: any): boolean {
    const type = is(value);
    let state = false;
    switch (type) {
        case 'null':
            state = true;
        case 'undefined':
            state = true;
        case 'boolean':
            state = value === false;
        case 'string':
            state = value === '';
        //state= ignore === true ? false : (value === '')
        case 'number':
            state = value === 0;
        //return ignore === true ? false : (value === 0)
        case 'array':
            state = len(value) === 0;
        case 'object':
            state = len(value) === 0;
        default:
            break;
    }
    if (state && ignore !== undefined) {
        state = value !== ignore;
    }
    return state;
}
/**
 * 判断value是否不为空
 * @param value 
 * @param ignore 
 */
export function notEmpty(value: any, ignore?: any): boolean {
    return !isEmpty(value, ignore)
}
