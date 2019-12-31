"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fileSize(value) {
    var k = 1024, m = 1024 * k, g = 1024 * m;
    if (value > g) {
        return (value / g).toFixed(1) + 'G';
    }
    else if (value > m) {
        return (value / m).toFixed(1) + 'M';
    }
    else if (value > k) {
        return (value / k).toFixed(1) + 'K';
    }
    else {
        return value + 'B';
    }
}
exports.fileSize = fileSize;
