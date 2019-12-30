// @ts-ignore
const xml2js = require('xml2js');

export function xmlToJson(source: string, root?: string): Promise<any> {
    const parser = new xml2js.Parser({ explicitArray: false });
    // @ts-ignore
    return new Promise((resolve) => {
        parser.parseString(source, (err: any, json: any) => {
            if (err) {
                resolve({});
            } else {
                root = root || 'xml';
                resolve(json[root] ? json[root] : json);
            }
        });
    });
}

export function jsonToXml(source: any): string {
    return new xml2js.Builder().buildObject(source) as string;
}