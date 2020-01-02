import Axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'
import { isPromise } from './is';
//拦截响应结果出错
const interResponseError = function (error: any) {
    if (!error) {
        return new Error('未获取错误状态');
    }
    if (error.response) {
        switch (error.response.status) {
            case 400:
                error.message = '请求错误'
                break
            case 401:
                error.message = '未授权，请登录'
                break
            case 403:
                error.message = '拒绝访问'
                break
            case 404:
                error.message = `请求地址出错: ${error.response.config.url}`
                break
            case 408:
                error.message = '请求超时'
                break
            case 500:
                error.message = '服务器内部错误'
                break
            case 501:
                error.message = '服务未实现'
                break
            case 502:
                error.message = '网关错误'
                break
            case 503:
                error.message = '服务不可用'
                break
            case 504:
                error.message = '网关超时'
                break
            case 505:
                error.message = 'HTTP版本不受支持'
                break
            default:
                error.message = '未知错误'
                break;
        }
    } else if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
        error.message = '请求超时了'
    }
    return error;
}

const DEFAULTS = {
    timeout: 30000,
    withCredentials: false,
    method: 'get',
    responseType: 'json',
    // 'Content-Type': 'application/x-www-form-urlencoded'
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8'
    }
}
export { AxiosRequestConfig, AxiosResponse }

export class AxiosClass {
    instance: AxiosInstance;
    constructor(defaults?: AxiosRequestConfig, interceptor?: {
        reqConfig?: (config: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>,
        reqError?: (error: any) => any,
        resResult?: (response: AxiosResponse) => AxiosResponse<any> | Promise<AxiosResponse<any>>,
        resError?: (error: any) => any
    }) {
        this.instance = Axios.create(Object.assign({}, DEFAULTS, defaults || {}));
        this.instance.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                if (config.method === 'get' && !!config.data) {
                    config.method = 'post'
                }
                return interceptor?.reqConfig ? interceptor.reqConfig(config) : config;
            },
            (error: any) => {
                error = interceptor?.reqError ? interceptor.reqError(error) : error;
                return isPromise(error) ? error : Promise.reject(error);
            }
        );
        this.instance.interceptors.response.use(
            (response: AxiosResponse) => {
                const { data, config, request } = response;
                try {
                    // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
                    const res = data || request.response || request.responseText
                    if (config.responseType === 'json' && typeof res === 'string') {
                        response.data = JSON.parse(res)
                    }
                    return interceptor?.resResult ? interceptor.resResult(response) : response;
                } catch (error) {
                    return Promise.reject(error || new Error("处理数据时发生未知错误"));
                }
            },
            (error: any) => {
                error = interResponseError(error);
                error = interceptor?.resError ? interceptor.resError(error) : error;
                return isPromise(error) ? error : Promise.reject(error);
            }
        );
    }
    query(options?: AxiosRequestConfig): Promise<any> {
        return new Promise((resolve, reject) => {
            this.instance(options || {}).then((res: any) => {
                resolve(res);
            }).catch((error: any = {}) => {
                reject(error);
            });
        })
    }
}
