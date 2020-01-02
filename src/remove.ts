import { is, isString, isObject, isArray, isFunction } from './is';
import { compare } from './compare';
import { notEmpty } from './isEmpty';
import { has } from './has';
import { IAnyObject } from '../typings/global';

/**从数组中删除数据，返回被删除记录 */
export function remove(
    source: any[], 
    /** 提供一个查询方法，执行后将从source中删除满足query返回为true的数据 */
    callbackfn: (value: string, index: number, array: any[]) => boolean
): any[]

/**从数组中删除数据，返回被删除记录 */
export function remove(
    source: any[], 
    /**从source中删除与之一致的记录 */
    query: any | any[]
): any[]

/**从object删除query指定的键名，返回被删除记录 */
export function remove(source: IAnyObject, query: string | string[]): IAnyObject
/**根据query内容将source中相应内容替换为空,返回替换后的字符串 */
export function remove(source: string, query: string | RegExp): string
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
export function remove(source: any, query: any): any {
    if (isArray(source)) {
        let result = [];
        if (isFunction(query)) {
            for (let i = source.length - 1; i >= 0; i--) {
                if (query(source[i], i, source)) {
                    result.push(source[i])
                    source.splice(i, 1);
                }
            }
            return result
        } else if (is(query, ['object', 'array'])) {
            result = remove(source, (a: any) => compare(a, query));
            return notEmpty(result) ? query : null;
        } else {
            result = remove(source, (a: any) => a === query)
            return notEmpty(result) ? query : null;
        }
    } else if (isObject(source)) {
        let result: any = {};
        if (isString(query) && has(source, query)) {
            result[query] = source[query];
            delete source[query]
        } else if (isArray(query)) {
            query.forEach((key: any) => {
                if (has(source, key)) {
                    result[key] = source[key];
                    delete source[key]
                }
            })
        }
        return result
    } else if (isString(source)) {
        source = source.replace(query, '')
        return source
    }
}
