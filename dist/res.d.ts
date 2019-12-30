interface IResult {
    success?: boolean;
    msg?: string;
    data?: any;
}
export declare function res(data: boolean | string | {
    [x: string]: any;
} | any[]): IResult;
export {};
