import { isArray } from './is';
import { toLower } from './to';
const enum DType {
    Android = 'android',
    Iphone = 'iphone',
    Ipad = 'ipad',
    Weixin = 'weixin',
    Wxwork = 'wxwork',
    Mac = 'mac'
}
/**
 * 判断当前使用浏览器的类型
 * @param {String|string[]} type 允许取值android,iphone,ipad,weixin,wxwork,mac
 * @param {String} userAgent 指定代理信息，在浏览器中默认为navigator.userAgent
 * @returns {Boolean|String}
 */
export function device(type?: DType | DType[], userAgent?: string): boolean | string {
    if (typeof window === 'undefined' && !userAgent) {
        return type ? false : 'unkown'
    }
    if (!userAgent) {
        userAgent = navigator.userAgent
    }
    userAgent = toLower(userAgent);
    let name = 'unkown';
    if (userAgent.indexOf('android') > -1) {
        name = 'android'
    } else if (userAgent.indexOf('iphone') > -1) {
        name = 'iphone'
    } else if (userAgent.indexOf('ipad') > -1) {
        name = 'ipad'
    } else if (userAgent.indexOf('micromessenger') > -1) {
        name = userAgent.indexOf('wxwork') > -1 ? 'wxwork' : 'weixin'
    } else if (userAgent.indexOf('mac') > -1) {
        name = 'mac'
    }
    if (type) {
        return isArray(type) ? (<any>type).some((t: any) => toLower(t) === name) : toLower(<string>type) === name;
    } else {
        return name;
    }
}

export function isAndroid(userAgent?: string): boolean {
    return device(DType.Android, userAgent) as boolean;
}

export function isIphone(userAgent?: string): boolean {
    return device(DType.Iphone, userAgent) as boolean;
}

export function isIpad(userAgent?: string): boolean {
    return device(DType.Ipad, userAgent) as boolean;
}

export function isWeixin(userAgent?: string): boolean {
    return device(DType.Weixin, userAgent) as boolean;
}

export function isWxwork(userAgent?: string): boolean {
    return device(DType.Wxwork, userAgent) as boolean;
}

export function isMac(userAgent?: string): boolean {
    return device(DType.Mac, userAgent) as boolean;
}
