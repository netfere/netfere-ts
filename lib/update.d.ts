/**
 * 在源数据中更新数据
 * @param {Array} source
 *  1)query=Number时，将指定下标的数据修改为value；
 *  2)query=Function时，将通过query提供的查询方法找到最多一条记录，然后修改为value;
 *
 * @param {*} value 详见source中的相关说明
 * @param {*} query 详见source中的相关说明
 * @param {Boolean} rep 找到记录时处理的方式
 * @param {Boolean} before 找不到记录时添到头部或尾部
 * @returns {Array|Object|String} 与source类型一致
 */
export declare function update(source: any[], value: any, query: any, rep?: boolean, before?: boolean): any[];
