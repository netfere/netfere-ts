"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./is");
function len(value, strTrue) {
    if (is_1.is(value, 'string')) {
        return strTrue ? value.replace(/[^\x00-\xff]/g, "rr").length : value.length;
    }
    else if (is_1.is(value, 'object')) {
        return Object.keys(value).length;
    }
    else if (is_1.is(value, 'array')) {
        return value.length;
    }
    else {
        return 0;
    }
}
exports.len = len;
