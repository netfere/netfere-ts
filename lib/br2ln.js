"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var replace_1 = require("./replace");
var trim_1 = require("./trim");
function br2ln(text) {
    return text.replace(new RegExp('<br>', 'gm'), '\n');
}
exports.br2ln = br2ln;
function ln2br(text) {
    return text.replace(new RegExp('\n', 'gm'), '<br>');
}
exports.ln2br = ln2br;
function clearHtml(html, blank) {
    var result = replace_1.replace(html, /<[^>]*>/g, '');
    return blank ? trim_1.trim(result, 'all') : result;
}
exports.clearHtml = clearHtml;
