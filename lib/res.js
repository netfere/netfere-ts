"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./is");
var has_1 = require("./has");
function res(data) {
    if (is_1.isBoolean(data)) {
        return { success: data };
    }
    else if (is_1.isString(data)) {
        return { success: false, msg: data };
    }
    else if (Array.isArray(data)) {
        return { success: true, data: data };
    }
    else if (typeof data === 'object') {
        var hasSuccess = has_1.has(data, 'success'), hasMsg = has_1.has(data, 'msg'), hasData = has_1.has(data, 'data');
        if (hasSuccess && hasMsg && hasData) {
            return data;
        }
        else if (hasSuccess && hasData) {
            return data;
        }
        else if (hasSuccess && hasMsg) {
            return data;
        }
        else if (hasMsg && hasData) {
            return __assign({ success: true }, data);
        }
        else if (hasSuccess) {
            return __assign({ success: data.success }, data);
        }
        else if (hasMsg) {
            return __assign({ success: false }, data);
        }
        else if (hasData) {
            return { success: true, data: data };
        }
        return { success: true, data: data };
    }
    return { success: false, msg: '数据参数不正确', data: data };
}
exports.res = res;
