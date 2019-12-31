/**
 * 分割字符串
 * (string,number) - 截取指定下标到末尾的字符串
 * (string,number,number) - 截取第1和第2个数字下标字符串
 * (string,number,boolean) - 截断指定长度并加省略号
 * (string,number,string) - 从右到左按指定长度以指定字符分隔。
 * (string,string) - 按指定内容进行分割
 * (string,regexp) - 按正则式进行分割
 * (string,array) - 按array提供数据进行分割
 * (string,array,number) - 按array提供数据进行分割后，最内层数组取指定下标，下标此时不是0就是1
 * @param {String} source 要处理的字符串
 * @param {Number|String|Regexp|Array} param 接受以下类型值，类型不同，处理方式不同。
 * @param {*} attr
 * @returns {String|String[]}
 */
export declare function split(source: string, param: number | string | RegExp | string[], attr?: number | boolean | string): any;
