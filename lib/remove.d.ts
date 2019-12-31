/**
 * 从源数据中删除指定数据
 * @param {*} source 从此数据中删除，允许Array,Object,String。
 * 一、source=Array时，query值类型不同处理方式不同：
 *  1)query是函数时，需要提供一个查询方法，执行后将从source中删除满足query返回为true的数据；
 *  2)query为其他数据类型时，将从source中删除与之一致的记录。可以为String,Number,Object,Array
 * 二、source=Object时，query可以是String或String[]，但必须是source中的键名，执行后将删除相应的键值对;
 * 三、source=String时，query可以是String,Regexp等，source中相应的部分将替换为空
 * @param {*} query 详见source中的相关说明
 * @returns {*} 返回处理后的结果
 */
export declare function remove(source: any, query: any): any;
