import { id } from './id';
import { has } from './has';
import { len } from './len';
import { uuid } from './uuid';
import { br2ln, ln2br, clearHtml } from './br2ln';
import { money } from './money';
import { fileSize } from './fileSize';
import { noop, sleep } from './sleep';
import { rnd, rndString, rndPwd, rndColor } from './rnd';
import { parseUrl } from './parseUrl';
import { isEmpty, notEmpty } from './isEmpty';
import { trim } from './trim';
import { to, toFirst, toHump, toLine, toLower, toUpper } from './to';
import { replace } from './replace';
import { split } from './split';
import { apply, applyIf, applyNot, clone, copy } from './apply';
import { map } from './map';
import { compare, different } from './compare';
import { exists } from './exists';
import { slice } from './slice';
import { clear } from './clear';
import { remove } from './remove';
import { insert } from './insert';
import { update } from './update';
import { getValue, getValueByPath } from './getValue';
import { find } from './find';
import { distinct } from './distinct';
import { browser, isChrome, isEdge, isFf, isIe, isIe10, isIe11, isIe7, isIe8, isIe9, isOpera, isSafari } from './browser';
import { device, isAndroid, isIpad, isIphone, isMac, isWeixin, isWxwork } from './device';
import { date } from './date';
import { vtype } from './vtype';
import { res } from './res';
import { xmlToJson, jsonToXml } from './xmljson';
import {
  is, isString, isNumber, isBoolean, isObject, isArray, isFunction,
  isRegexp, isDate, isNull, isUndefined, isNan, isVNode, isPromise
} from './is';
import { AxiosClass, AxiosRequestConfig, AxiosResponse } from './axios';
export default {
  is, isString, isNumber, isBoolean, isObject, isArray, isFunction, isRegexp, isDate, isNull, isUndefined, isNan, isVNode, isPromise,
  id, has, len, uuid, br2ln, ln2br, clearHtml, money, fileSize, rnd, rndString, rndPwd, rndColor,
  noop, sleep, parseUrl, isEmpty, notEmpty, trim, to, toFirst, toHump, toLine, toLower, toUpper, replace,
  split, apply, applyIf, applyNot, clone, copy, map, compare, different, exists, slice, clear, remove, insert, update,
  getValue, getValueByPath, find, distinct, date,
  browser, isChrome, isEdge, isFf, isIe, isIe10, isIe11, isIe7, isIe8, isIe9, isOpera, isSafari,
  device, isAndroid, isIpad, isIphone, isMac, isWeixin, isWxwork,
  vtype, res, xmlToJson, jsonToXml
}
export {
  AxiosClass, AxiosRequestConfig, AxiosResponse
}
