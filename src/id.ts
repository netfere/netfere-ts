let _idSeed = 0;
export function id(pix?: string) : string {
    return (pix || 'netfere') + (++_idSeed);
}