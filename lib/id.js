let _idSeed = 0;
export function id(pix) {
    return (pix || 'netfere') + (++_idSeed);
}
