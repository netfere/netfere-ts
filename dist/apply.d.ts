interface IAnyObject {
    [x: string]: any;
}
export declare function apply(target: IAnyObject, ...more: IAnyObject[]): IAnyObject;
export declare function applyIf(target: IAnyObject, ...more: IAnyObject[]): IAnyObject;
export declare function applyNot(target: IAnyObject, ...more: IAnyObject[]): IAnyObject;
export declare function clone(target: IAnyObject, ...more: IAnyObject[]): IAnyObject;
export declare function copy(target: IAnyObject, ...more: IAnyObject[]): IAnyObject;
export {};
