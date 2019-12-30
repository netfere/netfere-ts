"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jwt-simple");
var date_1 = require("./date");
var is_1 = require("./is");
function jwtSet(secret, payload) {
    var expires = is_1.isDate(payload.expires)
        ? date_1.date(payload.expires).getTime()
        : date_1.date().add(payload.expires).getTime();
    var token = jwt.encode({
        iss: payload.iss, expires: expires, data: payload.data,
    }, secret);
    return { token: token, expires: expires };
}
exports.jwtSet = jwtSet;
function jwtVaild(secret, token) {
    try {
        var decoded = jwt.decode(token, secret);
        if (decoded.expires > date_1.date().getTime()) {
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
exports.jwtVaild = jwtVaild;
