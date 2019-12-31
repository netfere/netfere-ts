"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var apply_1 = require("./apply");
var slice_1 = require("./slice");
var DEFAULTS = {
    timeout: 30000,
    withCredentials: false,
    method: 'get',
    responseType: 'json',
    headers: {
        'Accept': 'application/json',
        //'Content-Type': 'application/x-www-form-urlencoded'
        'Content-Type': 'application/json;charset=UTF-8'
    }
};
//拦截请求配置数据项
var interRequestConfig = function (config) {
    if (config.method === 'get' && !!config.data) {
        config.method = 'post';
    }
    return config;
};
//拦截请求错误
var interRequestError = function (error) {
    var msg = error ? error.message : '未知错误';
    return { success: false, msg: msg, error: error };
};
//拦截响应结果数据
var interResponseResult = function (_a) {
    var data = _a.data, config = _a.config, headers = _a.headers, request = _a.request, status = _a.status, statusText = _a.statusText;
    var message = '';
    try {
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        var res = data || request.response || request.responseText;
        if (config.responseType === 'json' && typeof res === 'string') {
            message = '返回数据必须与请求的json一致';
            res = JSON.parse(res);
        }
        return res;
    }
    catch (error) {
        console.group('处理数据时发生未知错误');
        console.log('responese', { data: data, config: config, headers: headers, request: request, status: status, statusText: statusText });
        console.log('error', error);
        console.groupEnd();
        error.message = message || '处理数据时未知错误';
        // @ts-ignore
        return Promise.reject({ success: false, msg: error.message, error: error });
    }
};
//拦截响应结果出错
var interResponseError = function (error) {
    if (!error) {
        return { success: false, msg: '未获取错误状态', error: new Error('未获取错误状态') };
    }
    if (error.response) {
        switch (error.response.status) {
            case 400:
                error.message = '请求错误';
                break;
            case 401:
                error.message = '未授权，请登录';
                break;
            case 403:
                error.message = '拒绝访问';
                break;
            case 404:
                error.message = "\u8BF7\u6C42\u5730\u5740\u51FA\u9519: " + error.response.config.url;
                break;
            case 408:
                error.message = '请求超时';
                break;
            case 500:
                error.message = '服务器内部错误';
                break;
            case 501:
                error.message = '服务未实现';
                break;
            case 502:
                error.message = '网关错误';
                break;
            case 503:
                error.message = '服务不可用';
                break;
            case 504:
                error.message = '网关超时';
                break;
            case 505:
                error.message = 'HTTP版本不受支持';
                break;
            default:
                error.message = '未知错误';
                break;
        }
    }
    else if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
        error.message = '请求超时了';
    }
    var msg = error ? error.message : '';
    return { success: false, msg: msg || '未知错误', error: error };
};
var AxiosClass = /** @class */ (function () {
    function AxiosClass(defaults) {
        var _a, _b, _c, _d;
        this.defaults = {};
        defaults = apply_1.apply({ interceptor: true }, DEFAULTS, defaults || {});
        this.defaults = slice_1.slice(defaults, ['interceptor'], false);
        this.instance = axios_1.default.create();
        if (typeof defaults.interceptor === 'boolean' && defaults.interceptor) {
            this.setInterceptorsRequest();
            this.setInterceptorsRespone();
        }
        else if (defaults.interceptor) {
            var _e = defaults.interceptor, request = _e.request, response = _e.response;
            this.setInterceptorsRequest((_a = request) === null || _a === void 0 ? void 0 : _a.config, (_b = request) === null || _b === void 0 ? void 0 : _b.error);
            this.setInterceptorsRespone((_c = response) === null || _c === void 0 ? void 0 : _c.result, (_d = response) === null || _d === void 0 ? void 0 : _d.error);
        }
    }
    AxiosClass.prototype.query = function (options) {
        var _this = this;
        // @ts-ignore
        return new Promise(function (resolve, reject) {
            var config = apply_1.apply({}, _this.defaults, options || {});
            _this.instance(config).then(function (res) {
                resolve(res);
            }).catch(function (error) {
                reject({ success: false, msg: error.message || '未知错误' });
            });
        });
    };
    AxiosClass.prototype.setInterceptorsRequest = function (req, err) {
        this.instance.interceptors.request.use(function (config) {
            config = interRequestConfig(config);
            return req ? req(config) : config;
        }, function (error) {
            error = interRequestError(error);
            return err ? err(error) : error;
        });
    };
    AxiosClass.prototype.setInterceptorsRespone = function (res, err) {
        this.instance.interceptors.response.use(function (response) {
            response = interResponseResult(response);
            return res ? res(response) : response;
        }, function (error) {
            error = interResponseError(error);
            return err ? err(error) : error;
        });
    };
    return AxiosClass;
}());
exports.AxiosClass = AxiosClass;
