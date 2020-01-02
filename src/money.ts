/**将数值转换为法币表示法 unit默认为￥ */
export function money(value: number, unit?: string): string {
    return (unit || '￥') + (value / 100).toFixed(2);
}