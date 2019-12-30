interface IPayload {
    iss: string;
    data: any;
    expires: number;
}
export declare function jwtSet(secret: string, payload: IPayload): {
    token: string;
    expires: number;
};
export declare function jwtVaild(secret: string, token: string): {
    success: boolean;
    payload?: IPayload;
};
export {};
