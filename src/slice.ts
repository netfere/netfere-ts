import { IAnyObject } from "../typings/global";
import { isObject } from "./is";

/**从一个object数据中根据keys切片数据 */
export function slice(
    source: IAnyObject,
    /**源数据中的字段名或字段名数组 */
    keys: string | string[] | { [x: string]: string },
    /**[默认true] 为true时则返回keys指定字段 为false时则返回非keys指定字段  */
    include?: boolean
): IAnyObject;

/**从一个数组中根据keys切片数据 */
export function slice(
    source: any[],
    /**指定下标进行切片 */
    keys: number | number[]
): any[];

export function slice(source: IAnyObject | any[],
    keys: { [x: string]: string } | string | string[] | number | number[],
    include?: boolean) {
    if (Array.isArray(source)) {
        if (typeof keys === 'number') {
            keys = [keys];
        }
        const total = source.length;
        let [start, end] = keys as number[];
        if (end === undefined) {
            end = total
        }
        if (start < 0) {
            start = total + start;
        }
        if (end < 0) {
            end = total + end;
        }
        return source.reduce((res, item, i) => {
            if (i >= start && i <= end) {
                res.push(item)
            }
            return res;
        }, []);
    } else if (typeof source === 'object') {
        if (typeof keys === 'string') {
            keys = [keys];
        }
        include = include === false ? false : true;
        // 当include=false且keys是一个object传值时，将直接转为keys=string[]处理
        if(!include && isObject(keys)){
            keys=Object.keys(keys);
        }
        if (Array.isArray(keys)) {
            return Object.keys(source).reduce((res: IAnyObject, prop) => {
                const index = (<string[]>keys).indexOf(prop);
                    if (include && index > -1) {
                        res[prop] = source[prop];
                    } else if (!include && index === -1) {
                        res[prop] = source[prop];
                    }
                return res;
            }, {});
        }else if (typeof keys === 'object') {
            return Object.keys(source).reduce((res: IAnyObject, prop) => {
                Object.keys(keys).forEach((p) => {
                    if (include && p === prop) {
                        // @ts-ignore
                        res[keys[p]] = source[prop]
                    }
                })
                return res;
            }, {});
        }
    }
}