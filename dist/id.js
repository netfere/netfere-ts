"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _idSeed = 0;
function id(pix) {
    return (pix || '') + (++_idSeed);
}
exports.id = id;
