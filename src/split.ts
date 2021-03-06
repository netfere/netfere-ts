import { is } from './is';
/**分割字符串 - 截取指定下标到末尾的字符串 */
export function split(source: string, param: number): string[]
/**分割字符串 - 截取第1和第2个数字下标字符串 */
export function split(source: string, param: number, attr: number): string[]
/**分割字符串 - 截断指定长度并加省略号 */
export function split(source: string, param: number, attr: boolean): string[]
/**分割字符串 - 从右到左按指定长度以指定字符分隔。 */
export function split(source: string, param: number, attr: string): string[]
/**分割字符串 - 按指定内容进行分割 */
export function split(source: string, param: string): string[]
/**分割字符串 - 按正则式进行分割 */
export function split(source: string, param: RegExp): string[]
/**分割字符串 - 按array提供数据进行分割 */
export function split(source: string, param: string[]): string[]
/**分割字符串 - 按array提供数据进行分割后，最内层数组取指定下标，下标此时不是0就是1 */
export function split(source: string, param: string[], attr: number): string[]

export function split(source: string, param: number | string | RegExp | string[], attr?: number | boolean | string) {
    const pType = is(param), aType = is(attr);
    if (pType === 'number') {
        if (aType === 'boolean') {
            let reg = /[\u4e00-\u9fa5]/g,    //专业匹配中文
                slice = source.substring(0, param as number),
                // @ts-ignore
                chineseCharNum = (~~(slice.match(reg) && slice.match(reg).length)),
                realen = slice.length * 2 - chineseCharNum;
            return source.substr(0, realen) + (realen < source.length ? "..." : "");
        } else if (aType === 'number' || aType === 'undefined') {
            return aType === 'undefined' ? source.substring(param as number) : source.substring(param as number, attr as number);
        } else if (aType === 'string') {
            //从右到左分隔字符串
            let reg = new RegExp('\\B(?=(\\w{' + param + '})+(?!\\w))', 'g');
            return source.replace(reg, attr as string);
        }
    } else if (pType === 'string' || pType === 'regexp') {
        // @ts-ignore
        return source.split(param);
    } else if (pType === 'array') {
        param = param as string[];
        const array: string[] = [], kLen = param.length, fnc = (data: string, idx: number): any[] => {
            // @ts-ignore
            const sp: string[] = data.split(param[idx]), sum: number = sp.length;
            if (sum < 2) { sp.push('') }
            if (typeof attr === 'number' && idx === kLen - 1) {
                array.push(attr < sp.length ? sp[attr] : '')
            }
            return sp.map(item => {
                if (idx < kLen - 1) {
                    return fnc(item, idx + 1)
                } else {
                    return item
                }
            })
        }
        const result = fnc(source,0);
        return is(attr, 'number') ? array : result
    } else {
        return null;
    }
}
