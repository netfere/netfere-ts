"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./is");
var len_1 = require("./len");
function isEmpty(value, ignore) {
    var type = is_1.is(value);
    switch (type) {
        case 'null':
            return true;
        case 'undefined':
            return true;
        case 'boolean':
            return value === false;
        case 'string':
            return ignore === true ? false : (value === '');
        case 'number':
            return ignore === true ? false : (value === 0);
        case 'array':
            return len_1.len(value) === 0;
        case 'object':
            return len_1.len(value) === 0;
        default:
            return false;
    }
}
exports.isEmpty = isEmpty;
function notEmpty(value, ignore) {
    return !isEmpty(value, ignore);
}
exports.notEmpty = notEmpty;
