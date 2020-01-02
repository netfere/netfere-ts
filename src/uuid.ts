/**生成32长度的uuid值 split为true则带分隔,false则不带分隔(默认) */
export function uuid(split?: boolean): string {
    const value = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
    return split ? value : value.replace(/-/g, '');
}
