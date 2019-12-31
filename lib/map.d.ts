interface IAnyObject {
    [x: string]: any;
}
/**
 * 对数据进行字段映射处理
 * @param {Array|Object} source 要处理的数据
 * @param {*} fields 要提取的字段信息。标准格式是{原键名:新键名,...},
 * 可以使用string(多个原键名可逗号分隔)、array(['原键名1',...])。对于string和array数据，将会转为标准格式
 * 如果新键名是一个方法，将调用此方法后，将返回的object添加到最终返回结果中
 * @param {*} distinct 将结果按此字段指定的键名进行聚合处理
 * @returns {*} 返回的数据类型与source一致
 */
export declare function map(source: IAnyObject | IAnyObject[], fields: IAnyObject | string[] | string, distinct?: string | string[]): any;
export {};
