"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function trim(source, type) {
    switch (type) {
        case 'all':
            return source.replace(/\s*/g, "");
        case 'before':
            return source.replace(/(^\s*)/g, "");
        case 'after':
            return source.replace(/(\s*$)/g, "");
        default:
            return source.replace(/(^\s*)|(\s*$)/g, "");
    }
}
exports.trim = trim;
