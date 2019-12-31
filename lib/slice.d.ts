/**
 * 数据切片
 * @param {*} source 源数据
 * @param {array|string|number} keys source=Array时 keys=[start,end] source=Object时keys为source中的prop
 * @param {boolean} include 默认true 为true时结果仅为keys指定,为false时，结果排除keys指定 当source为Array时无效
 */
export declare function slice(source: any, keys: any, include?: boolean): any;
