import { isString } from './is';
import { toLower } from './to';
const enum BType {
    Opera = 'opera',
    Edge = 'edge',
    Ff = 'ff',
    Safari = 'safari',
    Chrome = 'chrome',
    Ie = 'ie',
    Ie7 = 'ie7',
    Ie8 = 'ie8',
    Ie9 = 'ie9',
    Ie10 = 'ie10',
    Ie11 = 'ie11'
}
/**
 * 
 * @param {String|string[]} type 允许取值opera,edge,ff,safari,chrome,ie,ie7,ie8,ie9,ie10,ie11
 * @param {String} userAgent 指定代理信息，在浏览器中默认为navigator.userAgent
 * @returns {Boolean|String}
 */
export function browser(type?: BType | BType[], userAgent?: string): boolean | string {
    if (typeof window === 'undefined' && !userAgent) {
        return type ? false : 'unkown'
    }
    
    if (!userAgent) {
        userAgent = navigator.userAgent
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
        } else if (fIEVersion == 8) {
            name = "IE8";
        } else if (fIEVersion == 9) {
            name = "IE9";
        } else if (fIEVersion == 10) {
            name = "IE10";
        } else if (fIEVersion == 11) {
            name = "IE11";
        } else {
            name = "IE";
        }
    } else if (isOpera) {
        name = "Opera";
    } else if (isEdge) {
        name = "Edge";
    } else if (isFF) {
        name = "FF";
    } else if (isSafari) {
        name = "Safari";
    } else if (isChrome) {
        name = "Chrome";
    }
    name = toLower(name);
    if (type) {
        const data: any = (isString(type) ? [type] : type);
        return data.some((t: any) => {
            if ((<any>toLower(t)).startsWith('ie')) {
                return isIE
            } else {
                return toLower(t) === name
            }
        })
    } else {
        return name
    }
}

export function isOpera(userAgent?: string): boolean {
    return browser(BType.Opera, userAgent) as boolean;
}

export function isEdge(userAgent?: string): boolean {
    return browser(BType.Edge, userAgent) as boolean;
}

export function isFf(userAgent?: string): boolean {
    return browser(BType.Ff, userAgent) as boolean;
}

export function isSafari(userAgent?: string): boolean {
    return browser(BType.Safari, userAgent) as boolean;
}

export function isChrome(userAgent?: string): boolean {
    return browser(BType.Chrome, userAgent) as boolean;
}

export function isIe(userAgent?: string): boolean {
    return browser(BType.Ie, userAgent) as boolean;
}

export function isIe7(userAgent?: string): boolean {
    return browser(BType.Ie7, userAgent) as boolean;
}

export function isIe8(userAgent?: string): boolean {
    return browser(BType.Ie8, userAgent) as boolean;
}

export function isIe9(userAgent?: string): boolean {
    return browser(BType.Ie9, userAgent) as boolean;
}

export function isIe10(userAgent?: string): boolean {
    return browser(BType.Ie10, userAgent) as boolean;
}

export function isIe11(userAgent?: string): boolean {
    return browser(BType.Ie11, userAgent) as boolean;
}