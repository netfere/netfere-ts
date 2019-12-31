/**
 * 清理指定value值的数据，返回清理后的结果，默认清理value=undefined
 * @param {object} source
 * @param {*} value
 */
export declare function clear(source: {
    [x: string]: any;
}, value?: any): {
    [x: string]: any;
};
