import { is } from './is';
import { len } from './len';
/**随机生成两值范围内的数字，包含上下限 */
export function rnd(start: number, end: number): number {
    if (arguments.length === 2) {
        return Math.round(start + Math.random() * (end - start));
    } else if (arguments.length === 1) {
        return Math.round(Math.random() * start)
    } else {
        return Math.round(Math.random() * 255)
    }
}
/**随机生成指字长度的字符串 */
export function rndString(
    /**默认8位 */
    length?:number,
    /**为string时，自行指定允许的字符 为string[]时，允许取值['0','a','A','S'] 0为所有数字 a为所有小写字母 A为所有大写字母 S为特殊字符 */
    char?:string | string[]
):string;
export function rndString(length?: number, char?: string | string[]): string {
    length = length || 8;
    char = char || ['0', 'a'];
    const chars = ['0123456789', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '~!@#$%^&*()_+-=[{]}:;,.'];
    let list = ''
    if (is(char, 'array')) {
        if ((char as string[]).indexOf('0') > -1) {
            list += chars[0]
        }
        if ((char as string[]).indexOf('a') > -1) {
            list += chars[1]
        }
        if ((char as string[]).indexOf('A') > -1) {
            list += chars[2]
        }
        if ((char as string[]).indexOf('S') > -1) {
            list += chars[3]
        }
    } else if (is(char, 'string') && len(char) > 3) {
        list = char as string;
    } else {
        list = chars.join('');
    }


    var max = len(list) - 1;
    var res = '';
    for (let i = 0; i < length; i++) {
        res += list.charAt(rnd(0, max));
    }
    return res;
}
/**随机生成密码，功能同rndString，其中length=8,char=['0'] */
export function rndPwd(length?: number, char?: string | string[]): string {
    return rndString(length || 8, char || ['0']);
}
/**随机生成颜色值,默认带#前缀 pix=false时不带# */
export function rndColor(pix: boolean = true) {
    return (pix ? '#' : '') + Math.random().toString(16).substring(2).substr(0, 6);
}