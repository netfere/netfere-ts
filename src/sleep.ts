
export function noop(): void { }

export function sleep(time: number, callback: () => void): void | Promise<any> {
    if (typeof time === 'function') {
        callback = time;
        time = 2000;
    }
    time = time || 2000;
    if (typeof callback === 'function') {
        setTimeout(callback, time);
    } else {
        return new Promise((resolve) => {
            setTimeout(resolve, time);
        })
    }
}