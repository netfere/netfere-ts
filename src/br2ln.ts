import { replace } from './replace';
import { trim } from './trim';

/**将html中<br> 转换为 \n */
export function br2ln(text: string): string {
    return text.replace(new RegExp('<br\s*/?>', 'gm'), '\n')
}
/**将文本中的\n转换为<br> */
export function ln2br(text: string): string {
    return text.replace(new RegExp('\n', 'gm'), '<br/>')
}
/**
 * 清除html中所有标签
 * @param html 
 * @param blank true:同时替换所有空格 默认false
 */
export function clearHtml(html: string, blank?: boolean): string {
    const result = replace(html, /<[^>]*>/g, '');
    return blank ? trim(result, 'all') : result;
}