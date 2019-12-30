import axios from 'axios';
import { AxiosRequestConfig, AxiosError, AxiosResponse, AxiosInstance, AxiosPromise } from 'axios/index'
import { apply } from './apply';
import { has } from './has';


interface IAxiosRequestConfig extends AxiosRequestConfig {
    returnFalseAuto?: boolean;
    format?: (res: any) => any;
}
interface IAxiosResponse extends AxiosResponse {
    config: IAxiosRequestConfig
}

const defaultFormat = function (res: any) {
    if (typeof res === 'object') {
        if (has(res, 'success')) {
            return res;
        } else {
            return { success: true, data: res };
        }
    } else {
        return { data: res };
    }
}
const DEFAULTS: IAxiosRequestConfig = {
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
}
//拦截请求配置数据项
const interRequestConfig = function (config: IAxiosRequestConfig) {
    if (config.method === 'get' && !!config.data) {
        config.method = 'post'
    }
    return config
}
//拦截请求错误
const interRequestError = function (error: AxiosError) {
    let msg = error ? error.message : '';
    return { success: false, msg: msg || '未知错误', error }
}
//拦截响应结果数据
const interResponseResult = function ({ data, config, headers, request, status, statusText }: IAxiosResponse) {
    let message = '';
    try {
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        let res = data || request.response || request.responseText
        if (config.responseType === 'json' && typeof res === 'string') {
            message = '返回数据必须与请求的json一致'
            res = JSON.parse(res)
        }
        return res;
    } catch (error) {
        console.group('处理数据时发生未知错误');
        console.log('responese', { data, config, headers, request, status, statusText });
        console.log('error', error);
        console.groupEnd();
        error.message = message || '处理数据时未知错误'
        // @ts-ignore
        return Promise.reject({ success: false, msg: error.message, error })
    }
}
//拦截响应结果出错
const interResponseError = function (error: AxiosError) {
    if (!error) {
        return { success: false, msg: '未获取错误状态', error: new Error('未获取错误状态') }
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
    let msg = error ? error.message : '';
    return { success: false, msg: msg || '未知错误', error };
}

class AxiosClass {
    instance?: AxiosInstance;
    constructor() {
        this.instance = axios.create();
    }
    query(options?: IAxiosRequestConfig): Promise<any> {
        // @ts-ignore
        return new Promise((resolve, reject) => {
            if (this.instance) {
                const config: IAxiosRequestConfig = apply({}, DEFAULTS, options || {});
                this.instance(config).then((res) => {
                    if (config.format) {
                        resolve(config.format(res))
                    } else {
                        resolve(res);
                    }
                }).catch((error: AxiosError) => {
                    reject({ success: false, msg: error.message || '未知错误' })
                })
            } else {
                reject({ success: false, msg: '初始化Axios实例失败' });
            }
        })
    }
    setInterceptorsRequest(req?: (cfg: IAxiosRequestConfig) => IAxiosRequestConfig, err?: (err: AxiosError) => Promise<AxiosError>) {
        if (!this.instance) {
            // @ts-ignore
            return Promise.reject(new Error("初始化Axios实例失败"));
        }
        this.instance.interceptors.request.use(
            config => {
                config = interRequestConfig(config);
                return req ? req(config) : config;
            },
            error => {
                error = interRequestError(error)
                error = err ? err(error) : error;
                // @ts-ignore
                return Promise.reject(error)
            }
        );
    }
    setInterceptorsRespone(res?: (data: IAxiosResponse) => any, err?: (err: AxiosError) => Promise<AxiosError>) {
        if (!this.instance) {
            // @ts-ignore
            return Promise.reject(new Error("初始化Axios实例失败"));
        }
        this.instance.interceptors.response.use(
            (response: IAxiosResponse) => {
                response = interResponseResult(response);
                return res ? res(response) : response;
            },
            (error) => {
                error = interResponseError(error);
                error = err ? err(error) : error;
                // @ts-ignore
                return Promise.reject(error)
            }
        );
    }
}
export function Axios(options: IAxiosRequestConfig): Promise<any> {
    const instance = new AxiosClass();
    instance.setInterceptorsRequest();
    instance.setInterceptorsRespone();
    return instance.query(options);
}
