import { isString } from './is';
import { toLower } from './to';
/**
 *
 * @param {String|string[]} type 允许取值opera,edge,ff,safari,chrome,ie,ie7,ie8,ie9,ie10,ie11
 * @param {String} userAgent 指定代理信息，在浏览器中默认为navigator.userAgent
 * @returns {Boolean|String}
 */
export function browser(type, userAgent) {
    if (typeof window === 'undefined' && !userAgent) {
        return type ? false : 'unkown';
    }
    if (!userAgent) {
        userAgent = navigator.userAgent;
    }
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1
        && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf("Safari") > -1
        && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
    var isChrome = userAgent.indexOf("Chrome") > -1
        && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
    var name = 'unkown';
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            name = "IE7";
        }
        else if (fIEVersion == 8) {
            name = "IE8";
        }
        else if (fIEVersion == 9) {
            name = "IE9";
        }
        else if (fIEVersion == 10) {
            name = "IE10";
        }
        else if (fIEVersion == 11) {
            name = "IE11";
        }
        else {
            name = "IE";
        }
    }
    else if (isOpera) {
        name = "Opera";
    }
    else if (isEdge) {
        name = "Edge";
    }
    else if (isFF) {
        name = "FF";
    }
    else if (isSafari) {
        name = "Safari";
    }
    else if (isChrome) {
        name = "Chrome";
    }
    name = toLower(name);
    if (type) {
        const data = (isString(type) ? [type] : type);
        return data.some((t) => {
            if (toLower(t).startsWith('ie')) {
                return isIE;
            }
            else {
                return toLower(t) === name;
            }
        });
    }
    else {
        return name;
    }
}
export function isOpera(userAgent) {
    return browser("opera" /* Opera */, userAgent);
}
export function isEdge(userAgent) {
    return browser("edge" /* Edge */, userAgent);
}
export function isFf(userAgent) {
    return browser("ff" /* Ff */, userAgent);
}
export function isSafari(userAgent) {
    return browser("safari" /* Safari */, userAgent);
}
export function isChrome(userAgent) {
    return browser("chrome" /* Chrome */, userAgent);
}
export function isIe(userAgent) {
    return browser("ie" /* Ie */, userAgent);
}
export function isIe7(userAgent) {
    return browser("ie7" /* Ie7 */, userAgent);
}
export function isIe8(userAgent) {
    return browser("ie8" /* Ie8 */, userAgent);
}
export function isIe9(userAgent) {
    return browser("ie9" /* Ie9 */, userAgent);
}
export function isIe10(userAgent) {
    return browser("ie10" /* Ie10 */, userAgent);
}
export function isIe11(userAgent) {
    return browser("ie11" /* Ie11 */, userAgent);
}
