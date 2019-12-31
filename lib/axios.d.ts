import { AxiosRequestConfig, AxiosError, AxiosResponse, AxiosInstance } from 'axios/index';
export interface ExAxiosRequestConfig extends AxiosRequestConfig {
    interceptor?: boolean | {
        request?: {
            config?: (cfg: AxiosRequestConfig) => AxiosRequestConfig;
            error?: (err: AxiosError) => Promise<AxiosError>;
        };
        response?: {
            result?: (res: AxiosResponse) => any;
            error?: (err: AxiosError) => Promise<AxiosError>;
        };
    };
}
export declare class AxiosClass {
    instance: AxiosInstance;
    private defaults;
    constructor(defaults?: ExAxiosRequestConfig);
    query(options?: AxiosRequestConfig): Promise<any>;
    private setInterceptorsRequest;
    private setInterceptorsRespone;
}
export { AxiosRequestConfig };
