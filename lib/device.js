import { isArray } from './is';
import { toLower } from './to';
/**
 * 判断当前使用浏览器的类型
 * @param {String|string[]} type 允许取值android,iphone,ipad,weixin,wxwork,mac
 * @param {String} userAgent 指定代理信息，在浏览器中默认为navigator.userAgent
 * @returns {Boolean|String}
 */
export function device(type, userAgent) {
    if (typeof window === 'undefined' && !userAgent) {
        return type ? false : 'unkown';
    }
    if (!userAgent) {
        userAgent = navigator.userAgent;
    }
    userAgent = toLower(userAgent);
    let name = 'unkown';
    if (userAgent.indexOf('android') > -1) {
        name = 'android';
    }
    else if (userAgent.indexOf('iphone') > -1) {
        name = 'iphone';
    }
    else if (userAgent.indexOf('ipad') > -1) {
        name = 'ipad';
    }
    else if (userAgent.indexOf('micromessenger') > -1) {
        name = userAgent.indexOf('wxwork') > -1 ? 'wxwork' : 'weixin';
    }
    else if (userAgent.indexOf('mac') > -1) {
        name = 'mac';
    }
    if (type) {
        return isArray(type) ? type.some((t) => toLower(t) === name) : toLower(type) === name;
    }
    else {
        return name;
    }
}
export function isAndroid(userAgent) {
    return device("android" /* Android */, userAgent);
}
export function isIphone(userAgent) {
    return device("iphone" /* Iphone */, userAgent);
}
export function isIpad(userAgent) {
    return device("ipad" /* Ipad */, userAgent);
}
export function isWeixin(userAgent) {
    return device("weixin" /* Weixin */, userAgent);
}
export function isWxwork(userAgent) {
    return device("wxwork" /* Wxwork */, userAgent);
}
export function isMac(userAgent) {
    return device("mac" /* Mac */, userAgent);
}
