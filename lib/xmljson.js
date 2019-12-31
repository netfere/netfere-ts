"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var xml2js = require('xml2js');
function xmlToJson(source, root) {
    var parser = new xml2js.Parser({ explicitArray: false });
    // @ts-ignore
    return new Promise(function (resolve) {
        parser.parseString(source, function (err, json) {
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
exports.xmlToJson = xmlToJson;
function jsonToXml(source) {
    return new xml2js.Builder().buildObject(source);
}
exports.jsonToXml = jsonToXml;
