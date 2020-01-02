import { is, isString, isRegexp, isObject, isArray, isFunction } from './is';
import { compare } from './compare';
import { IAnyObject } from '../typings/global';

/**通过value指示的键名判断source中是否存，等同于.has */
export function exists(source: IAnyObject, value: string): boolean;
/**通过value提供多个键名判断source中是否存在 */
export function exists(
    source: IAnyObject,
    value: string[],
    /**为true时则要求每个都存在，false时则只要存在一项退可 [默认false] */
    every?: boolean
): boolean;
/**通过value提供一个方法并返回true|false来判断 */
export function exists(
    source: IAnyObject,
    value: (item: any) => boolean
): boolean;


/**通过回调方法并返回true|false或一个数组来判断是否存在 */
export function exists(
    source: any[],
    value: (item: any, index: number) => boolean,
    /**为true时则检测是否每项均满足 false则一项满足退可，[默认false] */
    every?: boolean
): boolean;
/**直接判断value是否为source中的项目 */
export function exists(source: any[], value: any): boolean;


/**在source中判断字符或正则式是否存在 */
export function exists(source: string, value: string | RegExp): boolean;



export function exists(source: any, value: any, every?: boolean) {
    if (isString(source)) {
        return isString(value) ? source.indexOf(value) > -1 : isRegexp(value) ? value.test(source) : false;
    } else if (isObject(source)) {
        if (is(value, 'string')) {
            return Object.prototype.hasOwnProperty.call(source, value)
        } else if (is(value, 'array')) {
            return every ? value.every((i: any) => exists(source, i)) : value.some((i: any) => exists(source, i))
        } else if (is(value, 'function')) {
            return value(source)
        }
    } else if (isArray(source)) {
        if (isFunction(value)) {
            return every ? source.every(value) : source.some(value)
        } else if (isArray(value)) {
            return every ? value.every((item: any) => exists(source, item)) : value.some((item: any) => exists(source, item))
        } else if (isObject(value)) {
            return source.some((a: any) => compare(a, value))
        } else {
            return source.indexOf(value) > -1
        }
    }
    return false;
}
