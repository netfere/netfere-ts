import { replace } from './replace';
import { trim } from './trim';
export function br2ln(text: string): string {
    return text.replace(new RegExp('<br>', 'gm'), '\n')
}

export function ln2br(text: string): string {
    return text.replace(new RegExp('\n', 'gm'), '<br>')
}

export function clearHtml(html: string, blank?: boolean): string {
    const result = replace(html, /<[^>]*>/g, '');
    return blank ? trim(result, 'all') : result;
}