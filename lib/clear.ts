/**
 * 清理指定value值的数据，返回清理后的结果，默认清理value=undefined
 * @param {object} source 
 * @param {*} value 
 */
export function clear(source: { [x: string]: any }, value?: any) {
    return Object.keys(source).reduce((res:{ [x: string]: any }, key) => {
        if (source[key] !== value) {
            res[key] = source[key]
        }
        return res;
    }, {})
}