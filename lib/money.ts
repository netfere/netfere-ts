export function money(value: number, unit?: string): string {
    return (unit || '￥') + (value / 100).toFixed(2);
}