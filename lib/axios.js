// @ts-ignore
import axios from 'axios';
// @ts-ignore
import { apply } from './apply';
import { slice } from './slice';
/*

export interface ExAxiosRequestConfig extends AxiosRequestConfig {
    interceptor?: boolean | {
        request?: {
            config?: (cfg: AxiosRequestConfig) => AxiosRequestConfig;
            error?: (err: any) => Promise<any>;
        };
        response?: {
            result?: (res: any) => any;
            error?: (err: any) => Promise<any>;
        }
    }
}

 */
const DEFAULTS = {
    timeout: 30000,
    withCredentials: false,
    method: 'get',
    responseType: 'json',
    // 'Content-Type': 'application/x-www-form-urlencoded'
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'
    }
};
//拦截请求配置数据项
const interRequestConfig = function (config) {
    if (config.method === 'get' && !!config.data) {
        config.method = 'post';
    }
    return config;
};
//拦截请求错误
const interRequestError = function (error) {
    let msg = error ? error.message : '未知错误';
    return { success: false, msg, error };
};
//拦截响应结果数据
const interResponseResult = function ({ data, config, headers, request, status, statusText }) {
    let message = '';
    try {
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        let res = data || request.response || request.responseText;
        if (config.responseType === 'json' && typeof res === 'string') {
            message = '返回数据必须与请求的json一致';
            res = JSON.parse(res);
        }
        return res;
    }
    catch (error) {
        console.group('处理数据时发生未知错误');
        console.log('responese', { data, config, headers, request, status, statusText });
        console.log('error', error);
        console.groupEnd();
        error.message = message || '处理数据时未知错误';
        // @ts-ignore
        return Promise.reject({ success: false, msg: error.message, error });
    }
};
//拦截响应结果出错
const interResponseError = function (error) {
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
                error.message = `请求地址出错: ${error.response.config.url}`;
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
    let msg = error ? error.message : '';
    return { success: false, msg: msg || '未知错误', error };
};
export class AxiosClass {
    constructor(defaults) {
        var _a, _b, _c, _d;
        this.defaults = {};
        defaults = apply({ interceptor: true }, DEFAULTS, defaults || {});
        this.defaults = slice(defaults, ['interceptor'], false);
        this.instance = axios.create();
        if (typeof defaults.interceptor === 'boolean' && defaults.interceptor) {
            this.setInterceptorsRequest();
            this.setInterceptorsRespone();
        }
        else if (defaults.interceptor) {
            const { request, response } = defaults.interceptor;
            this.setInterceptorsRequest((_a = request) === null || _a === void 0 ? void 0 : _a.config, (_b = request) === null || _b === void 0 ? void 0 : _b.error);
            this.setInterceptorsRespone((_c = response) === null || _c === void 0 ? void 0 : _c.result, (_d = response) === null || _d === void 0 ? void 0 : _d.error);
        }
    }
    query(options) {
        // @ts-ignore
        return new Promise((resolve, reject) => {
            const config = apply({}, this.defaults, options || {});
            this.instance(config).then((res) => {
                resolve(res);
            }).catch((error) => {
                reject({ success: false, msg: error.message || '未知错误' });
            });
        });
    }
    setInterceptorsRequest(req, err) {
        this.instance.interceptors.request.use((config) => {
            config = interRequestConfig(config);
            return req ? req(config) : config;
        }, (error) => {
            error = interRequestError(error);
            return err ? err(error) : error;
        });
    }
    setInterceptorsRespone(res, err) {
        this.instance.interceptors.response.use((response) => {
            response = interResponseResult(response);
            return res ? res(response) : response;
        }, (error) => {
            error = interResponseError(error);
            return err ? err(error) : error;
        });
    }
}
