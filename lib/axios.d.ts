export declare class AxiosClass {
    instance: any;
    private defaults;
    constructor(defaults?: any);
    query(options?: any): Promise<any>;
    private setInterceptorsRequest;
    private setInterceptorsRespone;
}
