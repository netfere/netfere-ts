export function noop() { }
export function sleep(time, callback) {
    if (typeof time === 'function') {
        callback = time;
        time = 2000;
    }
    time = time || 2000;
    if (typeof callback === 'function') {
        setTimeout(callback, time);
    }
    else {
        // @ts-ignore
        return new Promise((resolve) => {
            setTimeout(resolve, time);
        });
    }
}
