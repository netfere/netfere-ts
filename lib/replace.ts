import { isRegexp, isString, isNumber, isArray } from './is';
/**
 * 字符串替换操作
 * (string,regexp,string) - 通过正则式查找替换
 * (string,string,string) - 通过字符串查找替换
 * (string,string,string,boolean) - 通过字符串查找仅替换一次
 * (string,number[],string) - 通过数组设置将指定位置替换成指定内容
 * (string,number) - 将源字符串重复指定次数，功能同String.repeat
 * @param {String} source 要处理的源数据
 * @param {Regexp|String|Number|Number[]} target 
 * @param {String} value 
 * @param {Boolean} once 
 * @returns {String} 返回替换处理的结果
 
 */
const repeat = function (source: any, count: number): string {
    return source.repeat(count);
}
export function replace(source: string, target: string | number | number[] | RegExp, value?: string, once?: boolean): string {
    if (isRegexp(target)) {
        return source.replace(target as RegExp, value as string)
    } else if (isString(target)) {
        return once === false
            ? source.replace(target as string, value as string)
            : replace(source, new RegExp(target as string, "gm"), value)
    } else if (isArray(target)) {
        let [a, b, c] = target as number[];
        value = value || '*';
        if (!isNumber(a)) {
            return repeat(value, source.length)
        } else {
            if (!isNumber(b)) {
                b = a; a = 0; c = source.length - b;
                return replace(source, [a, b, c], value)
            } else if (!isNumber(c)) {
                c = b; b = source.length - a - c;
                return repeat(value, source.substr(0, a).length) + source.substr(a, b)
                    + repeat(value, source.substr(a + b, c).length)
            }
            return source.replace(new RegExp('(\\w{' + a + '})\\w{' + b + '}(\\w{' + c + '})', 'g'), '$1' + repeat(value, b) + '$2')
        }
    } else if (isNumber(target)) {
        return repeat(source, target as number);
    } else {
        return source;
    }

}