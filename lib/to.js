"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function to(str, type) {
    switch (type) {
        case 'upper':
            return str.toUpperCase();
        case 'first':
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
            });
        case 'hump':
            return str.replace(/-(\w)/g, function ($0, $1) {
                return $1.toUpperCase();
            });
        case 'line':
            return str.replace(/([A-Z])/g, "-$1").toLowerCase();
        default:
            return str.toLowerCase();
    }
}
exports.to = to;
function toLower(source) {
    return to(source, 'lower');
}
exports.toLower = toLower;
function toUpper(source) {
    return to(source, 'upper');
}
exports.toUpper = toUpper;
function toFirst(source) {
    return to(source, 'first');
}
exports.toFirst = toFirst;
function toHump(source) {
    return to(source, 'hump');
}
exports.toHump = toHump;
function toLine(source) {
    return to(source, 'line');
}
exports.toLine = toLine;
