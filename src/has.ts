export function has(source: { [x: string]: any }, key: string): boolean {
    return Object.prototype.hasOwnProperty.call(source, key);
}