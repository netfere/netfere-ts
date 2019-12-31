interface IGetValueResult {
    owner: any;
    value: any;
    prop: any;
}
/**
 * 在object中通过prop查找值。如：{info:{name,sex}}时，可通过info.name查值
 * @param {Object} object
 * @param {String} prop 用.表示的值键
 * @returns {*}
 */
export declare function getValue(object: {
    [x: string]: any;
}, prop: string): IGetValueResult;
export declare function getValueByPath(object: {
    [x: string]: any;
}, prop: string): IGetValueResult;
export {};
