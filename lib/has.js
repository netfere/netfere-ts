export function has(source, key) {
    return Object.prototype.hasOwnProperty.call(source, key);
}
