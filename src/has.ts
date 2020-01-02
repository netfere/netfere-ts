import { IAnyObject } from "../typings/global";
/**判断数据中是否有key的键名 */
export function has(source: IAnyObject, key: string): boolean {
    return Object.prototype.hasOwnProperty.call(source, key);
}