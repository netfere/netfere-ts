// @ts-ignore
import * as jwt from 'jwt-simple';
import { date } from './date';
import { isDate } from './is';
export function jwtSet(secret, payload) {
    const expires = isDate(payload.expires)
        ? date(payload.expires).getTime()
        : date().add(payload.expires).getTime();
    const token = jwt.encode({
        iss: payload.iss, expires, data: payload.data,
    }, secret);
    return { token, expires };
}
export function jwtVaild(secret, token) {
    try {
        const decoded = jwt.decode(token, secret);
        if (decoded.expires > date().getTime()) {
            return { success: true, payload: decoded };
        }
        else {
            return { success: false, payload: decoded };
        }
    }
    catch (e) {
        return { success: false };
    }
}
