import { is } from './is';
import { has } from './has';
import { isEmpty } from './isEmpty';
import { IAnyObject } from '../typings/global';

/**逐一合并数据，同名字段由最后项目决定 */
export function apply(target: IAnyObject, ...more: IAnyObject[]): IAnyObject {
    return (<any>Object).assign(target, ...more);
}

/**只合并target中存在的字段项目 */
export function applyIf(target: IAnyObject, ...more: IAnyObject[]): IAnyObject {
    const value = apply({}, ...more);
    Object.keys(target).forEach(key => {
        if (has(value, key)) {
            target[key] = value[key];
        }
    })
    return target;
}
/**仅将不属于target数据的字段合并进来 */
export function applyNot(target: IAnyObject, ...more: IAnyObject[]): IAnyObject {
    const value = apply({}, ...more);
    Object.keys(value).filter(key => !has(target, key)).forEach(key => {
        target[key] = value[key]
    })
    return target;
}
/**克隆数据，浅拷贝 */
export function clone(target: IAnyObject, ...more: IAnyObject[]): IAnyObject {
    return apply({}, target, ...more);
}
/**深度拷贝数据 */
export function copy(target: IAnyObject, ...more: IAnyObject[]): IAnyObject {
    const source = clone(target, ...more);
    if (isEmpty(source)) {
        return source
    }
    if (is(source, 'array')) {
        return source.map((item: any) => {
            return copy(item)
        })
    } else if (is(source, 'object')) {
        var result: IAnyObject = {};
        for (var key in source) {
            result[key] = is(source[key], ['object', 'array']) ? copy(source[key]) : source[key];
        }
        return result;
    } else {
        return source
    }
}
