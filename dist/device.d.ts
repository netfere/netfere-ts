declare const enum DType {
    Android = "android",
    Iphone = "iphone",
    Ipad = "ipad",
    Weixin = "weixin",
    Wxwork = "wxwork",
    Mac = "mac"
}
/**
 * 判断当前使用浏览器的类型
 * @param {String|string[]} type 允许取值android,iphone,ipad,weixin,wxwork,mac
 * @param {String} userAgent 指定代理信息，在浏览器中默认为navigator.userAgent
 * @returns {Boolean|String}
 */
export declare function device(type?: DType | DType[], userAgent?: string): boolean | string;
export declare function isAndroid(userAgent?: string): boolean;
export declare function isIphone(userAgent?: string): boolean;
export declare function isIpad(userAgent?: string): boolean;
export declare function isWeixin(userAgent?: string): boolean;
export declare function isWxwork(userAgent?: string): boolean;
export declare function isMac(userAgent?: string): boolean;
export {};
