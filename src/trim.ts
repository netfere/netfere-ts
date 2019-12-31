export function trim(source: string, type?: 'all' | 'before' | 'after' | 'middle'): string {
    switch (type) {
        case 'all':
            return source.replace(/\s*/g, "")
        case 'before':
            return source.replace(/(^\s*)/g, "");
        case 'after':
            return source.replace(/(\s*$)/g, "");
        default:
            return source.replace(/(^\s*)|(\s*$)/g, "");

    }
}
