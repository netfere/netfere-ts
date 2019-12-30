"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var apply_1 = require("./apply");
var has_1 = require("./has");
var defaultFormat = function (res) {
    if (typeof res === 'object') {
        if (has_1.has(res, 'success')) {
            return res;
        }
        else {
            return { success: true, data: res };
        }
    }
    else {
        return { data: res };
    }
};
var DEFAULTS = {
    timeout: 30000,
    withCredentials: false,
    method: 'get',
    responseType: 'json',
    headers: {
        'Accept': 'application/json',
        //'Content-Type': 'application/x-www-form-urlencoded'
        'Content-Type': 'application/json;charset=UTF-8'
    },
    returnFalseAuto: true,
    format: defaultFormat
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
    var msg = error ? error.message : '';
    return { success: false, msg: msg || '未知错误', error: error };
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
    function AxiosClass() {
        this.instance = axios_1.default.create();
    }
    AxiosClass.prototype.query = function (options) {
        var _this = this;
        // @ts-ignore
        return new Promise(function (resolve, reject) {
            if (_this.instance) {
                var config_1 = apply_1.apply({}, DEFAULTS, options || {});
                _this.instance(config_1).then(function (res) {
                    if (config_1.format) {
                        resolve(config_1.format(res));
                    }
                    else {
                        resolve(res);
                    }
                }).catch(function (error) {
                    reject({ success: false, msg: error.message || '未知错误' });
                });
            }
            else {
                reject({ success: false, msg: '初始化Axios实例失败' });
            }
        });
    };
    AxiosClass.prototype.setInterceptorsRequest = function (req, err) {
        if (!this.instance) {
            // @ts-ignore
            return Promise.reject(new Error("初始化Axios实例失败"));
        }
        this.instance.interceptors.request.use(function (config) {
            config = interRequestConfig(config);
            return req ? req(config) : config;
        }, function (error) {
            error = interRequestError(error);
            error = err ? err(error) : error;
            // @ts-ignore
            return Promise.reject(error);
        });
    };
    AxiosClass.prototype.setInterceptorsRespone = function (res, err) {
        if (!this.instance) {
            // @ts-ignore
            return Promise.reject(new Error("初始化Axios实例失败"));
        }
        this.instance.interceptors.response.use(function (response) {
            response = interResponseResult(response);
            return res ? res(response) : response;
        }, function (error) {
            error = interResponseError(error);
            error = err ? err(error) : error;
            // @ts-ignore
            return Promise.reject(error);
        });
    };
    return AxiosClass;
}());
function Axios(options) {
    var instance = new AxiosClass();
    instance.setInterceptorsRequest();
    instance.setInterceptorsRespone();
    return instance.query(options);
}
exports.Axios = Axios;
