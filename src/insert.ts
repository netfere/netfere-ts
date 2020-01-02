import { is } from './is';
/**在source中的第index个位置后面插入value。index=0将插入到前面 */
export function insert(source: string, index: number, value: string): string;
/**将value添加到source末尾 */
export function insert(source: string, value: string): string;
/**将value值插入到数组source中,位置由index指定 */
export function insert(source: any[], index: number, value: any): any;

export function insert(source: any[] | string, index: number | string, value?: any) {
    if (is(source, 'array')) {
        (<any[]>source).splice(<number>index, 0, value);
    } else if (is(source, 'string')) {
        if (is(index, 'number')) {
            const idx: number = <number>index;
            const text: string = <string>source;
            source = text.substr(0, idx) + value + text.substr(idx, text.length - idx)
        } else {
            source += (is(index, 'string') ? index : value)
        }
    }
    return source;
}
