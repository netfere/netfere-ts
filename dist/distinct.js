"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 将合并数组中相同的数据
 * @param {*} source Array
 * @returns 返回合并后的结果
 */
function distinct(source) {
    // @ts-ignore
    return Array.from(new Set(source));
}
exports.distinct = distinct;
