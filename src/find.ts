import { isString, isRegexp, isObject, isArray } from './is';
import { getValue } from './getValue';
import { IAnyObject } from '../typings/global';

/**通过query方法在source中查找，满足即返回数据项目 */
export function find(
    source: any[],
    query: (item: any, index: number) => boolean
): any;
/**通过query方法在source中查找，满足即返回数据项目和下标 */
export function find(
    source: any[],
    query: (item: any, index: number) => boolean,
    state: true
): {index:number,data:any};
/**通过query方法在source中查找，满足即返回下标 */
export function find(
    source: any[],
    query: (item: any, index: number) => boolean,
    state: false
): number;

/**query为键名或键路径查找数据 */
export function find(
    source: IAnyObject, 
    /**键名 或 以.分隔的路径 */
    query: string
): any;
export function find(source: string, query: string | RegExp): string[];

export function find(source: any, query: any, state?: boolean): any {
    if (isString(source)) {
        return (isRegexp(query) ? source.match(query) : isString(query) ? source.match(new RegExp(query, 'g')) : []) || []
    } else if (isObject(source)) {
        return getValue(source, query).value;
    } else if (isArray(source)) {
        if (state === false) {
            return source.findIndex(query)
        } else if (state === true) {
            let index = source.findIndex(query);
            return index > -1 ? { index, data: source[index] } : { index, data: null }
        } else {
            return source.find(query)
        }
    }
}