export function money(value, unit) {
    return (unit || '￥') + (value / 100).toFixed(2);
}
