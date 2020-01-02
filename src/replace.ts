import { isRegexp, isString, isNumber, isArray } from './is';

/**通过正则式查找替换 */
export function replace(source: string, target: RegExp, value: string): string
/**通过字符串查找替换 */
export function replace(source: string, target: string, value: string): string
/**通过字符串查找仅替换一次 */
export function replace(source: string, target: string, value: string, once: boolean): string
/**通过数组设置将指定位置替换成指定内容 如替换手机号码中间4位为*号 */
export function replace(
    source: string, 
    /**
     * 替换位置 
     * [] 全部替换
     * [3] 替换前3位
     * [3,4] 替换前3位和后4位
     * [3,4,4] 替换中间3位 3+4+4=11为source的总长度
     */
    target: number[], 
    value: string
): string
/**将源字符串重复指定次数，功能同String.repeat */
export function replace(source: string, target: number): string


export function replace(source: string, target: string | number | number[] | RegExp, value?: string, once?: boolean): string {
    if (isRegexp(target)) {
        return source.replace(target as RegExp, <string>value)
    } else if (isString(target)) {
        return once === false
            ? source.replace(<string>target, <string>value)
            : replace(source, new RegExp(<string>target, "gm"), <string>value)
    } else if (isArray(target)) {
        let [a, b, c] = target as number[];
        value = value || '*';
        if (!isNumber(a)) {
            return value.repeat(source.length)
        } else {
            if (!isNumber(b)) {
                b = a; a = 0; c = source.length - b;
                return replace(source, [a, b, c], value)
            } else if (!isNumber(c)) {
                c = b; b = source.length - a - c;
                return value.repeat(source.substr(0, a).length) + source.substr(a, b)
                    + value.repeat(source.substr(a + b, c).length)
            }
            return source.replace(new RegExp('(\\w{' + a + '})\\w{' + b + '}(\\w{' + c + '})', 'g'), '$1' + value.repeat(b) + '$2')
        }
    } else if (isNumber(target)) {
        return source.repeat(target as number);
    } else {
        return source;
    }

}