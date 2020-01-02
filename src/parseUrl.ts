import { isArray } from './is';
import { has } from './has';
import { IAnyObject } from '../typings/global';

/**传入url以解析?后的参数 forceNumber=true时，将文本数字转换为数值[默认为true]*/
export function parseUrl(url: string, forceNumber?: boolean): IAnyObject;
/**解析当前浏览器地址中的参数 forceNumber=true时，将文本数字转换为数值[默认为true] */
export function parseUrl(forceNumber?: boolean): IAnyObject;

export function parseUrl(url?: any, forceNumber?: any): IAnyObject {
    if (typeof url === 'boolean') {
        forceNumber = url;
        url = '';
    }
    const result: IAnyObject = {};
    url = url || (window ? location.href : '');
    //如果参数不是对象。返回空对象
    if (typeof url !== 'string') { return result }
    forceNumber = forceNumber === false ? false : true;
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
