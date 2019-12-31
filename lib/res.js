import { isBoolean, isString } from './is';
import { has } from './has';
export function res(data) {
    if (isBoolean(data)) {
        return { success: data };
    }
    else if (isString(data)) {
        return { success: false, msg: data };
    }
    else if (Array.isArray(data)) {
        return { success: true, data };
    }
    else if (typeof data === 'object') {
        const hasSuccess = has(data, 'success'), hasMsg = has(data, 'msg'), hasData = has(data, 'data');
        if (hasSuccess && hasMsg && hasData) {
            return data;
        }
        else if (hasSuccess && hasData) {
            return data;
        }
        else if (hasSuccess && hasMsg) {
            return data;
        }
        else if (hasMsg && hasData) {
            return Object.assign({ success: true }, data);
        }
        else if (hasSuccess) {
            return Object.assign({ success: data.success }, data);
        }
        else if (hasMsg) {
            return Object.assign({ success: false }, data);
        }
        else if (hasData) {
            return { success: true, data };
        }
        return { success: true, data };
    }
    return { success: false, msg: '数据参数不正确', data };
}
