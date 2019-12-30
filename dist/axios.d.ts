import { AxiosRequestConfig } from 'axios/index';
interface IAxiosRequestConfig extends AxiosRequestConfig {
    returnFalseAuto?: boolean;
    format?: (res: any) => any;
}
export declare function Axios(options: IAxiosRequestConfig): Promise<any>;
export {};
