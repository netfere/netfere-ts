"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./is");
var to_1 = require("./to");
/**
 * 判断当前使用浏览器的类型
 * @param {String|string[]} type 允许取值android,iphone,ipad,weixin,wxwork,mac
 * @param {String} userAgent 指定代理信息，在浏览器中默认为navigator.userAgent
 * @returns {Boolean|String}
 */
function device(type, userAgent) {
    if (typeof window === 'undefined' && !userAgent) {
        return type ? false : 'unkown';
    }
    if (!userAgent) {
        userAgent = navigator.userAgent;
    }
    userAgent = to_1.toLower(userAgent);
    var name = 'unkown';
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
        return is_1.isArray(type) ? type.some(function (t) { return to_1.toLower(t) === name; }) : to_1.toLower(type) === name;
    }
    else {
        return name;
    }
}
exports.device = device;
function isAndroid(userAgent) {
    return device("android" /* Android */, userAgent);
}
exports.isAndroid = isAndroid;
function isIphone(userAgent) {
    return device("iphone" /* Iphone */, userAgent);
}
exports.isIphone = isIphone;
function isIpad(userAgent) {
    return device("ipad" /* Ipad */, userAgent);
}
exports.isIpad = isIpad;
function isWeixin(userAgent) {
    return device("weixin" /* Weixin */, userAgent);
}
exports.isWeixin = isWeixin;
function isWxwork(userAgent) {
    return device("wxwork" /* Wxwork */, userAgent);
}
exports.isWxwork = isWxwork;
function isMac(userAgent) {
    return device("mac" /* Mac */, userAgent);
}
exports.isMac = isMac;
