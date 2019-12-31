"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function money(value, unit) {
    return (unit || '￥') + (value / 100).toFixed(2);
}
exports.money = money;
