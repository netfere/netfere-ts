let _idSeed = 0;
/**生成一个ID */
export function id(pix?: string) : string {
    return (pix || 'netfere') + (++_idSeed);
}