"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function noop() { }
exports.noop = noop;
function sleep(time, callback) {
    if (typeof time === 'function') {
        callback = time;
        time = 2000;
    }
    time = time || 2000;
    if (typeof callback === 'function') {
        setTimeout(callback, time);
    }
    else {
        // @ts-ignore
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    }
}
exports.sleep = sleep;
