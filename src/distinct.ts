/**
 * 将合并数组中相同的数据
 * @param {*} source Array
 * @returns 返回合并后的结果
 */
export function distinct(source: any[]) {
    // @ts-ignore
    return Array.from(new Set(source));
}