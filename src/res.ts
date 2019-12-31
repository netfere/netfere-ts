import { isBoolean, isString } from './is';
import { has } from './has';
interface IResult {
    success?: boolean;
    msg?: string;
    data?: any;
}
export function res(data: boolean | string | { [x: string]: any } | any[]): IResult {
    if (isBoolean(data)) {
        return { success: data as boolean };
    } else if (isString(data)) {
        return { success: false, msg: data as string };
    } else if (Array.isArray(data)) {
        return { success: true, data };
    } else if (typeof data === 'object') {
        const hasSuccess = has(data, 'success'), hasMsg = has(data, 'msg'), hasData = has(data, 'data');
        if (hasSuccess && hasMsg && hasData) {
            return data as IResult;
        } else if (hasSuccess && hasData) {
            return data as IResult;
        } else if (hasSuccess && hasMsg) {
            return data as IResult;
        } else if (hasMsg && hasData) {
            return { success: true, ...data };
        } else if (hasSuccess) {
            return { success: data.success, ...data }
        } else if (hasMsg) {
            return { success: false, ...data }
        } else if (hasData) {
            return { success: true, data };
        }
        return { success: true, data };
    }
    return { success: false, msg: '数据参数不正确', data };
}