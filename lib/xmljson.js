// @ts-ignore
const xml2js = require('xml2js');
export function xmlToJson(source, root) {
    const parser = new xml2js.Parser({ explicitArray: false });
    // @ts-ignore
    return new Promise((resolve) => {
        parser.parseString(source, (err, json) => {
            if (err) {
                resolve({});
            }
            else {
                root = root || 'xml';
                resolve(json[root] ? json[root] : json);
            }
        });
    });
}
export function jsonToXml(source) {
    return new xml2js.Builder().buildObject(source);
}
