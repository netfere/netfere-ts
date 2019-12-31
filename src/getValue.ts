interface IGetValueResult {
    owner: any;
    value: any;
    prop: any;
}
/**
 * 在object中通过prop查找值。如：{info:{name,sex}}时，可通过info.name查值
 * @param {Object} object 
 * @param {String} prop 用.表示的值键
 * @returns {*}
 */
export function getValue(object: { [x: string]: any }, prop: string): IGetValueResult {
    prop = prop || '';
    const paths = prop.split('.');
    let current = object;
    let result;
    let lastProp;
    const getVal = (obj: any, path: any) => {
        if (/\d+/.test(path) && Array.isArray(obj)) {
            lastProp = Number(path)
            return obj.length > lastProp ? obj[lastProp] : obj[path];
        } else {
            lastProp = path;
            return obj[path]
        }
    }
    for (let i = 0, j = paths.length; i < j; i++) {
        const path = paths[i];
        if (!current) break;
        if (i === j - 1) {
            result = getVal(current, path);
        } else {
            current = getVal(current, path);
        }
    }
    return { owner: current, value: result, prop: lastProp };
}

export function getValueByPath(object: { [x: string]: any }, prop: string): IGetValueResult {
    console.debug('getValueByPath 已过期，请使用 getValue');
    return getValue(object, prop);
}