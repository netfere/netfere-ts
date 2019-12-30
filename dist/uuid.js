"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function uuid() {
    var value = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
    return value.replace(/-/g, '');
}
exports.uuid = uuid;
