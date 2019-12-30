import { isArray } from './is';
import { has } from './has';
export function parseUrl(url: string, forceNumber: boolean = true): { [x: string]: any } {
    if (typeof url === 'boolean') {
        forceNumber = url;
        url = '';
    }
    const result: { [x: string]: any } = {};
    url = url || (window ? location.href : '');
    //如果参数不是对象。返回空对象
    if (typeof url !== 'string') { return result }

    //处理数字'100'=>100
    const force = function (value: string): number | string {
        if (forceNumber && typeof value === 'string' && isNaN(Number(value)) === false) {
            return Number(value);
        } else {
            return value;
        }
    }
    const _str = url.substr(url.indexOf('?') + 1);
    //处理中文后以&进行分割
    decodeURI(_str).split("&").forEach(item => {
        const [key, value] = item.split('=');

        if (has(result, key)) {
            if (!isArray(result[key])) {
                result[key] = [result[key]]
            }
            result[key].push(force(value))
        } else {
            result[key] = force(value);
        }
    })
    return result;
}