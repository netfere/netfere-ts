declare const enum BType {
    Opera = "opera",
    Edge = "edge",
    Ff = "ff",
    Safari = "safari",
    Chrome = "chrome",
    Ie = "ie",
    Ie7 = "ie7",
    Ie8 = "ie8",
    Ie9 = "ie9",
    Ie10 = "ie10",
    Ie11 = "ie11"
}
/**
 *
 * @param {String|string[]} type 允许取值opera,edge,ff,safari,chrome,ie,ie7,ie8,ie9,ie10,ie11
 * @param {String} userAgent 指定代理信息，在浏览器中默认为navigator.userAgent
 * @returns {Boolean|String}
 */
export declare function browser(type?: BType | BType[], userAgent?: string): boolean | string;
export declare function isOpera(userAgent?: string): boolean;
export declare function isEdge(userAgent?: string): boolean;
export declare function isFf(userAgent?: string): boolean;
export declare function isSafari(userAgent?: string): boolean;
export declare function isChrome(userAgent?: string): boolean;
export declare function isIe(userAgent?: string): boolean;
export declare function isIe7(userAgent?: string): boolean;
export declare function isIe8(userAgent?: string): boolean;
export declare function isIe9(userAgent?: string): boolean;
export declare function isIe10(userAgent?: string): boolean;
export declare function isIe11(userAgent?: string): boolean;
export {};
