"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fns = require("date-fns");
var zh_CN_1 = require("date-fns/locale/zh-CN");
var weekCfg = { locale: zh_CN_1.default, weekStartsOn: 1 };
var FnsDate = /** @class */ (function () {
    function FnsDate(datetime) {
        this._datetime = new Date();
        if (typeof datetime === 'string') {
            this._datetime = new Date(datetime);
        }
        else if (typeof datetime === 'number') {
            this._datetime = new Date(datetime);
        }
        else {
            this._datetime = datetime;
        }
    }
    FnsDate.prototype.addBusinessDays = function (amount) {
        this._datetime = fns.addBusinessDays(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.addDays = function (amount) {
        this._datetime = fns.addDays(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.addISOWeekYears = function (amount) {
        this._datetime = fns.addISOWeekYears(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.addMilliseconds = function (amount) {
        this._datetime = fns.addMilliseconds(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.addMinutes = function (amount) {
        this._datetime = fns.addMinutes(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.addMonths = function (amount) {
        this._datetime = fns.addMonths(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.addQuarters = function (amount) {
        this._datetime = fns.addQuarters(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.addSeconds = function (amount) {
        this._datetime = fns.addSeconds(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.addHours = function (amount) {
        this._datetime = fns.addHours(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.addWeeks = function (amount) {
        this._datetime = fns.addWeeks(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.addYears = function (amount) {
        this._datetime = fns.addYears(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.startOfDay = function () {
        this._datetime = fns.startOfDay(this._datetime);
        return this;
    };
    FnsDate.prototype.startOfDecade = function () {
        this._datetime = fns.startOfDecade(this._datetime);
        return this;
    };
    FnsDate.prototype.startOfHour = function () {
        this._datetime = fns.startOfHour(this._datetime);
        return this;
    };
    FnsDate.prototype.startOfISOWeek = function () {
        this._datetime = fns.startOfISOWeek(this._datetime);
        return this;
    };
    FnsDate.prototype.startOfToday = function () {
        this._datetime = fns.startOfToday();
        return this;
    };
    FnsDate.prototype.startOfTomorrow = function () {
        this._datetime = fns.startOfTomorrow();
        return this;
    };
    FnsDate.prototype.startOfYesterday = function () {
        this._datetime = fns.startOfYesterday();
        return this;
    };
    FnsDate.prototype.startOfWeek = function () {
        this._datetime = fns.startOfWeek(this._datetime, weekCfg);
        return this;
    };
    FnsDate.prototype.startOfQuarter = function () {
        this._datetime = fns.startOfQuarter(this._datetime);
        return this;
    };
    FnsDate.prototype.startOfSecond = function () {
        this._datetime = fns.startOfSecond(this._datetime);
        return this;
    };
    FnsDate.prototype.startOfISOWeekYear = function () {
        this._datetime = fns.startOfISOWeekYear(this._datetime);
        return this;
    };
    FnsDate.prototype.startOfMinute = function () {
        this._datetime = fns.startOfMinute(this._datetime);
        return this;
    };
    FnsDate.prototype.startOfMonth = function () {
        this._datetime = fns.startOfMonth(this._datetime);
        return this;
    };
    FnsDate.prototype.startOfWeekYear = function () {
        this._datetime = fns.startOfWeekYear(this._datetime, weekCfg);
        return this;
    };
    FnsDate.prototype.startOfYear = function () {
        this._datetime = fns.startOfYear(this._datetime);
        return this;
    };
    FnsDate.prototype.endOfDay = function () {
        this._datetime = fns.endOfDay(this._datetime);
        return this;
    };
    FnsDate.prototype.endOfDecade = function () {
        this._datetime = fns.endOfDecade(this._datetime);
        return this;
    };
    FnsDate.prototype.endOfHour = function () {
        this._datetime = fns.endOfHour(this._datetime);
        return this;
    };
    FnsDate.prototype.endOfISOWeek = function () {
        this._datetime = fns.endOfISOWeek(this._datetime);
        return this;
    };
    FnsDate.prototype.endOfToday = function () {
        this._datetime = fns.endOfToday();
        return this;
    };
    FnsDate.prototype.endOfTomorrow = function () {
        this._datetime = fns.endOfTomorrow();
        return this;
    };
    FnsDate.prototype.endOfYesterday = function () {
        this._datetime = fns.endOfYesterday();
        return this;
    };
    FnsDate.prototype.endOfWeek = function () {
        this._datetime = fns.endOfWeek(this._datetime, weekCfg);
        return this;
    };
    FnsDate.prototype.endOfQuarter = function () {
        this._datetime = fns.endOfQuarter(this._datetime);
        return this;
    };
    FnsDate.prototype.endOfSecond = function () {
        this._datetime = fns.endOfSecond(this._datetime);
        return this;
    };
    FnsDate.prototype.endOfISOWeekYear = function () {
        this._datetime = fns.endOfISOWeekYear(this._datetime);
        return this;
    };
    FnsDate.prototype.endOfMinute = function () {
        this._datetime = fns.endOfMinute(this._datetime);
        return this;
    };
    FnsDate.prototype.endOfMonth = function () {
        this._datetime = fns.endOfMonth(this._datetime);
        return this;
    };
    FnsDate.prototype.endOfYear = function () {
        this._datetime = fns.endOfYear(this._datetime);
        return this;
    };
    FnsDate.prototype.getDate = function () {
        return fns.getDate(this._datetime);
    };
    FnsDate.prototype.getDay = function () {
        return fns.getDay(this._datetime);
    };
    FnsDate.prototype.getDayOfYear = function () {
        return fns.getDayOfYear(this._datetime);
    };
    FnsDate.prototype.getDaysInMonth = function () {
        return fns.getDaysInMonth(this._datetime);
    };
    FnsDate.prototype.getDaysInYear = function () {
        return fns.getDaysInYear(this._datetime);
    };
    FnsDate.prototype.getDecade = function () {
        return fns.getDecade(this._datetime);
    };
    FnsDate.prototype.getHours = function () {
        return fns.getHours(this._datetime);
    };
    FnsDate.prototype.getISODay = function () {
        return fns.getISODay(this._datetime);
    };
    FnsDate.prototype.getISOWeek = function () {
        return fns.getISOWeek(this._datetime);
    };
    FnsDate.prototype.getISOWeekYear = function () {
        return fns.getISOWeekYear(this._datetime);
    };
    FnsDate.prototype.getISOWeeksInYear = function () {
        return fns.getISOWeeksInYear(this._datetime);
    };
    FnsDate.prototype.getMilliseconds = function () {
        return fns.getMilliseconds(this._datetime);
    };
    FnsDate.prototype.getMinutes = function () {
        return fns.getMinutes(this._datetime);
    };
    FnsDate.prototype.getMonth = function () {
        return fns.getMonth(this._datetime);
    };
    /** 获取两个时间间隔内重叠的天数 */
    FnsDate.prototype.getOverlappingDaysInIntervals = function (left, right) {
        return fns.getOverlappingDaysInIntervals(left, right);
    };
    FnsDate.prototype.getQuarter = function () {
        return fns.getQuarter(this._datetime);
    };
    FnsDate.prototype.getSeconds = function () {
        return fns.getSeconds(this._datetime);
    };
    FnsDate.prototype.getTime = function () {
        return fns.getTime(this._datetime);
    };
    FnsDate.prototype.getTimeStamp = function () {
        return parseInt('' + (this._datetime.getTime() / 1000));
    };
    FnsDate.prototype.getUnixTime = function () {
        return fns.getUnixTime(this._datetime);
    };
    FnsDate.prototype.getWeek = function () {
        return fns.getWeek(this._datetime, weekCfg);
    };
    FnsDate.prototype.getWeekOfMonth = function () {
        return fns.getWeekOfMonth(this._datetime, weekCfg);
    };
    FnsDate.prototype.getWeekYear = function () {
        return fns.getWeekYear(this._datetime, weekCfg);
    };
    FnsDate.prototype.getWeeksInMonth = function () {
        return fns.getWeeksInMonth(this._datetime, weekCfg);
    };
    FnsDate.prototype.getYear = function () {
        return fns.getYear(this._datetime);
    };
    FnsDate.prototype.getWeekRange = function (week, formatter) {
        var curr = fns.getISOWeek(this._datetime);
        var w = (week || curr) - curr;
        var start = fns.startOfISOWeek(fns.addWeeks(this._datetime, w));
        var end = fns.endOfISOWeek(fns.addWeeks(this._datetime, w));
        if (formatter) {
            return { start: fns.format(start, formatter, weekCfg), end: fns.format(end, formatter, weekCfg) };
        }
        else {
            return { start: start, end: end };
        }
    };
    FnsDate.prototype.getMonthRange = function (formatter) {
        var start = fns.startOfMonth(this._datetime), end = fns.endOfMonth(this._datetime);
        if (formatter) {
            return { start: fns.format(start, formatter, weekCfg), end: fns.format(end, formatter, weekCfg) };
        }
        else {
            return { start: start, end: end };
        }
    };
    FnsDate.prototype.ymd = function (separate) {
        separate = separate || '-';
        var formatString = 'yyyy' + separate + 'MM' + separate + 'dd';
        return this.format(formatString);
    };
    FnsDate.prototype.set = function (values) {
        this._datetime = fns.set(this._datetime, values);
        return this;
    };
    FnsDate.prototype.setDate = function (dayOfMonth) {
        this._datetime = fns.setDate(this._datetime, dayOfMonth);
        return this;
    };
    FnsDate.prototype.setDay = function (day) {
        this._datetime = fns.setDay(this._datetime, day, weekCfg);
        return this;
    };
    FnsDate.prototype.setDayOfYear = function (dayOfYear) {
        this._datetime = fns.setDayOfYear(this._datetime, dayOfYear);
        return this;
    };
    FnsDate.prototype.setHours = function (hours) {
        this._datetime = fns.setHours(this._datetime, hours);
        return this;
    };
    FnsDate.prototype.setISODay = function (day) {
        this._datetime = fns.setISODay(this._datetime, day);
        return this;
    };
    FnsDate.prototype.setISOWeek = function (isoWeek) {
        this._datetime = fns.setISOWeek(this._datetime, isoWeek);
        return this;
    };
    FnsDate.prototype.setISOWeekYear = function (isoWeekYear) {
        this._datetime = fns.setISOWeekYear(this._datetime, isoWeekYear);
        return this;
    };
    FnsDate.prototype.setMilliseconds = function (milliseconds) {
        this._datetime = fns.setMilliseconds(this._datetime, milliseconds);
        return this;
    };
    FnsDate.prototype.setMinutes = function (minutes) {
        this._datetime = fns.setMinutes(this._datetime, minutes);
        return this;
    };
    FnsDate.prototype.setMonth = function (month) {
        this._datetime = fns.setMonth(this._datetime, month);
        return this;
    };
    FnsDate.prototype.setQuarter = function (quarter) {
        this._datetime = fns.setQuarter(this._datetime, quarter);
        return this;
    };
    FnsDate.prototype.setSeconds = function (seconds) {
        this._datetime = fns.setSeconds(this._datetime, seconds);
        return this;
    };
    FnsDate.prototype.setWeek = function (week) {
        this._datetime = fns.setWeek(this._datetime, week, weekCfg);
        return this;
    };
    FnsDate.prototype.setWeekYear = function (weekYear) {
        this._datetime = fns.setWeekYear(this._datetime, weekYear, weekCfg);
        return this;
    };
    FnsDate.prototype.setYear = function (year) {
        this._datetime = fns.setYear(this._datetime, year);
        return this;
    };
    FnsDate.prototype.isAfter = function (dateToCompare) {
        return fns.isAfter(this._datetime, dateToCompare);
    };
    FnsDate.prototype.isBefore = function (dateToCompare) {
        return fns.isBefore(this._datetime, dateToCompare);
    };
    FnsDate.prototype.isDate = function (value) {
        return fns.isDate(value);
    };
    FnsDate.prototype.isEqual = function (dateToCompare) {
        return fns.isEqual(this._datetime, dateToCompare);
    };
    FnsDate.prototype.isFirstDayOfMonth = function () {
        return fns.isFirstDayOfMonth(this._datetime);
    };
    FnsDate.prototype.isFriday = function () {
        return fns.isFriday(this._datetime);
    };
    FnsDate.prototype.isFuture = function () {
        return fns.isFuture(this._datetime);
    };
    FnsDate.prototype.isLastDayOfMonth = function () {
        return fns.isLastDayOfMonth(this._datetime);
    };
    FnsDate.prototype.isLeapYear = function () {
        return fns.isLeapYear(this._datetime);
    };
    FnsDate.prototype.isMonday = function () {
        return fns.isMonday(this._datetime);
    };
    FnsDate.prototype.isPast = function () {
        return fns.isPast(this._datetime);
    };
    FnsDate.prototype.isSameDay = function (dateToCompare) {
        return fns.isSameDay(this._datetime, dateToCompare);
    };
    FnsDate.prototype.isSameHour = function (dateToCompare) {
        return fns.isSameHour(this._datetime, dateToCompare);
    };
    FnsDate.prototype.isSameISOWeek = function (dateToCompare) {
        return fns.isSameISOWeek(this._datetime, dateToCompare);
    };
    FnsDate.prototype.isSameISOWeekYear = function (dateToCompare) {
        return fns.isSameISOWeekYear(this._datetime, dateToCompare);
    };
    FnsDate.prototype.isSameMinute = function (dateToCompare) {
        return fns.isSameMinute(this._datetime, dateToCompare);
    };
    FnsDate.prototype.isSameMonth = function (dateToCompare) {
        return fns.isSameMonth(this._datetime, dateToCompare);
    };
    FnsDate.prototype.isSameQuarter = function (dateToCompare) {
        return fns.isSameQuarter(this._datetime, dateToCompare);
    };
    FnsDate.prototype.isSameSecond = function (dateToCompare) {
        return fns.isSameSecond(this._datetime, dateToCompare);
    };
    FnsDate.prototype.isSameWeek = function (dateToCompare) {
        return fns.isSameWeek(this._datetime, dateToCompare);
    };
    FnsDate.prototype.isSameYear = function (dateToCompare) {
        return fns.isSameYear(this._datetime, dateToCompare);
    };
    FnsDate.prototype.isSaturday = function () {
        return fns.isSaturday(this._datetime);
    };
    FnsDate.prototype.isSunday = function () {
        return fns.isSunday(this._datetime);
    };
    FnsDate.prototype.isThisHour = function () {
        return fns.isThisHour(this._datetime);
    };
    FnsDate.prototype.isThisISOWeek = function () {
        return fns.isThisISOWeek(this._datetime);
    };
    FnsDate.prototype.isThisMinute = function () {
        return fns.isThisMinute(this._datetime);
    };
    FnsDate.prototype.isThisMonth = function () {
        return fns.isThisMonth(this._datetime);
    };
    FnsDate.prototype.isThisQuarter = function () {
        return fns.isThisQuarter(this._datetime);
    };
    FnsDate.prototype.isThisSecond = function () {
        return fns.isThisSecond(this._datetime);
    };
    FnsDate.prototype.isThisWeek = function () {
        return fns.isThisWeek(this._datetime);
    };
    FnsDate.prototype.isThisYear = function () {
        return fns.isThisYear(this._datetime);
    };
    FnsDate.prototype.isThursday = function () {
        return fns.isThursday(this._datetime);
    };
    FnsDate.prototype.isToday = function () {
        return fns.isToday(this._datetime);
    };
    FnsDate.prototype.isTomorrow = function () {
        return fns.isTomorrow(this._datetime);
    };
    FnsDate.prototype.isTuesday = function () {
        return fns.isTuesday(this._datetime);
    };
    FnsDate.prototype.isValid = function () {
        return fns.isValid(this._datetime);
    };
    FnsDate.prototype.isWednesday = function () {
        return fns.isWednesday(this._datetime);
    };
    FnsDate.prototype.isWeekend = function () {
        return fns.isWeekend(this._datetime);
    };
    FnsDate.prototype.isWithinInterval = function (interval) {
        return fns.isWithinInterval(this._datetime, interval);
    };
    FnsDate.prototype.isYesterday = function () {
        return fns.isYesterday(this._datetime);
    };
    FnsDate.prototype.differenceInBusinessDays = function (other) {
        return fns.differenceInBusinessDays(this._datetime, other);
    };
    FnsDate.prototype.differenceInCalendarDays = function (other) {
        return fns.differenceInCalendarDays(this._datetime, other);
    };
    FnsDate.prototype.differenceInCalendarISOWeekYears = function (other) {
        return fns.differenceInCalendarISOWeekYears(this._datetime, other);
    };
    FnsDate.prototype.differenceInCalendarISOWeeks = function (other) {
        return fns.differenceInCalendarISOWeeks(this._datetime, other);
    };
    FnsDate.prototype.differenceInCalendarMonths = function (other) {
        return fns.differenceInCalendarMonths(this._datetime, other);
    };
    FnsDate.prototype.differenceInCalendarQuarters = function (other) {
        return fns.differenceInCalendarQuarters(this._datetime, other);
    };
    FnsDate.prototype.differenceInCalendarWeeks = function (other) {
        return fns.differenceInCalendarWeeks(this._datetime, other);
    };
    FnsDate.prototype.differenceInCalendarYears = function (other) {
        return fns.differenceInCalendarYears(this._datetime, other);
    };
    FnsDate.prototype.differenceInDays = function (other) {
        return fns.differenceInDays(this._datetime, other);
    };
    FnsDate.prototype.differenceInHours = function (other) {
        return fns.differenceInHours(this._datetime, other);
    };
    FnsDate.prototype.differenceInISOWeekYears = function (other) {
        return fns.differenceInISOWeekYears(this._datetime, other);
    };
    FnsDate.prototype.differenceInMilliseconds = function (other) {
        return fns.differenceInMilliseconds(this._datetime, other);
    };
    FnsDate.prototype.differenceInMinutes = function (other) {
        return fns.differenceInMinutes(this._datetime, other);
    };
    FnsDate.prototype.differenceInMonths = function (other) {
        return fns.differenceInMonths(this._datetime, other);
    };
    FnsDate.prototype.differenceInQuarters = function (other) {
        return fns.differenceInQuarters(this._datetime, other);
    };
    FnsDate.prototype.differenceInSeconds = function (other) {
        return fns.differenceInSeconds(this._datetime, other);
    };
    FnsDate.prototype.differenceInWeeks = function (other) {
        return fns.differenceInWeeks(this._datetime, other);
    };
    FnsDate.prototype.differenceInYears = function (other) {
        return fns.differenceInYears(this._datetime, other);
    };
    /** 给定的时间间隔是否与另一个时间间隔重叠？相邻间隔不算作重叠 */
    FnsDate.prototype.areIntervalsOverlapping = function (left, right) {
        return fns.areIntervalsOverlapping(left, right);
    };
    /** 返回数组中与给定日期相比最近的索引 */
    FnsDate.prototype.closestIndexTo = function (datesArray) {
        return fns.closestIndexTo(this._datetime, datesArray);
    };
    /** 从数组中返回最接近当前日期的日期 */
    FnsDate.prototype.closestTo = function (datesArray) {
        return fns.closestTo(this._datetime, datesArray);
    };
    FnsDate.prototype.compareAsc = function (dateLeft, dateRight) {
        return fns.compareAsc(dateLeft, dateRight);
    };
    FnsDate.prototype.compareDesc = function (dateLeft, dateRight) {
        return fns.compareDesc(dateLeft, dateRight);
    };
    FnsDate.prototype.eachDayOfInterval = function (interval, step) {
        return fns.eachDayOfInterval(interval, { step: step });
    };
    FnsDate.prototype.eachWeekOfInterval = function (interval) {
        return fns.eachWeekOfInterval(interval, weekCfg);
    };
    FnsDate.prototype.eachWeekendOfInterval = function (interval) {
        return fns.eachWeekendOfInterval(interval);
    };
    FnsDate.prototype.eachWeekendOfMonth = function () {
        return fns.eachWeekendOfMonth(this._datetime);
    };
    FnsDate.prototype.eachWeekendOfYear = function () {
        return fns.eachWeekendOfYear(this._datetime);
    };
    FnsDate.prototype.lightFormat = function (format) {
        return fns.lightFormat(this._datetime, format);
    };
    FnsDate.prototype.max = function (datesArray) {
        return fns.max(datesArray);
    };
    FnsDate.prototype.min = function (datesArray) {
        return fns.min(datesArray);
    };
    /** 十年期的最后一天 */
    FnsDate.prototype.lastDayOfDecade = function () {
        return fns.lastDayOfDecade(this._datetime);
    };
    FnsDate.prototype.lastDayOfISOWeek = function () {
        return fns.lastDayOfISOWeek(this._datetime);
    };
    FnsDate.prototype.lastDayOfISOWeekYear = function () {
        return fns.lastDayOfISOWeekYear(this._datetime);
    };
    FnsDate.prototype.lastDayOfMonth = function () {
        return fns.lastDayOfMonth(this._datetime);
    };
    FnsDate.prototype.lastDayOfQuarter = function () {
        return fns.lastDayOfQuarter(this._datetime);
    };
    FnsDate.prototype.lastDayOfWeek = function () {
        return fns.lastDayOfWeek(this._datetime, weekCfg);
    };
    FnsDate.prototype.lastDayOfYear = function () {
        return fns.lastDayOfYear(this._datetime);
    };
    FnsDate.prototype.subBusinessDays = function (amount) {
        this._datetime = fns.subBusinessDays(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.subDays = function (amount) {
        this._datetime = fns.subDays(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.subHours = function (amount) {
        this._datetime = fns.subHours(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.subISOWeekYears = function (amount) {
        this._datetime = fns.subISOWeekYears(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.subMilliseconds = function (amount) {
        this._datetime = fns.subMilliseconds(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.subMinutes = function (amount) {
        this._datetime = fns.subMinutes(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.subMonths = function (amount) {
        this._datetime = fns.subMonths(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.subQuarters = function (amount) {
        this._datetime = fns.subQuarters(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.subSeconds = function (amount) {
        this._datetime = fns.subSeconds(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.subWeeks = function (amount) {
        this._datetime = fns.subWeeks(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.subYears = function (amount) {
        this._datetime = fns.subYears(this._datetime, amount);
        return this;
    };
    FnsDate.prototype.toDate = function () {
        return this._datetime;
    };
    /** 当给定日期正好在最近的两分钟之间时，四舍五入。 */
    FnsDate.prototype.roundToNearestMinutes = function (nearestTo) {
        return fns.roundToNearestMinutes(this._datetime, { nearestTo: nearestTo });
    };
    FnsDate.prototype.format = function (format) {
        var formatString = format || 'yyyy-MM-dd HH:mm:ss';
        if (format === 'date') {
            formatString = 'yyyy-MM-dd';
        }
        else if (format === 'time') {
            formatString = 'HH:mm:ss';
        }
        if (formatString === 'string') {
            return this.formatDistanceToNow();
        }
        else {
            return fns.format(this._datetime, formatString, weekCfg);
        }
    };
    FnsDate.prototype.formatDistance = function (baseDate) {
        return fns.formatDistance(this._datetime, baseDate, { locale: zh_CN_1.default });
    };
    FnsDate.prototype.formatDistanceStrict = function (baseDate) {
        return fns.formatDistanceStrict(this._datetime, baseDate, { locale: zh_CN_1.default });
    };
    FnsDate.prototype.formatDistanceToNow = function () {
        return fns.formatDistanceToNow(this._datetime, { locale: zh_CN_1.default });
    };
    FnsDate.prototype.formatISO = function () {
        return fns.formatISO(this._datetime);
    };
    FnsDate.prototype.formatISO9075 = function () {
        return fns.formatISO9075(this._datetime);
    };
    FnsDate.prototype.formatRFC3339 = function () {
        return fns.formatRFC3339(this._datetime);
    };
    FnsDate.prototype.formatRFC7231 = function () {
        return fns.formatRFC7231(this._datetime);
    };
    FnsDate.prototype.formatRelative = function (baseDate) {
        return fns.formatRelative(this._datetime, baseDate);
    };
    FnsDate.prototype.fromUnixTime = function (unixTime) {
        return fns.fromUnixTime(unixTime);
    };
    FnsDate.prototype.parse = function (dateString, formatString, options) {
        return fns.parse(dateString, formatString, this._datetime, options);
    };
    FnsDate.prototype.parseISO = function (argument) {
        return fns.parseISO(argument);
    };
    FnsDate.prototype.parseJSON = function (argument) {
        return fns.parseJSON(argument);
    };
    FnsDate.prototype.toString = function (format) {
        return this.format(format);
    };
    FnsDate.prototype.add = function (time) {
        if (typeof time === 'string') {
            var match = time.match(/^(-)?(\d+)(s|m|h|d|M|y)$/);
            if (match) {
                var value = parseInt(match[2]);
                var isSub = match[1] ? true : false;
                switch (match[3]) {
                    case 's':
                        return isSub ? this.subSeconds(value) : this.addSeconds(value);
                    case 'm':
                        return isSub ? this.subMinutes(value) : this.addMinutes(value);
                    case 'h':
                        return isSub ? this.subHours(value) : this.addHours(value);
                    case 'd':
                        return isSub ? this.subDays(value) : this.addDays(value);
                    case 'M':
                        return isSub ? this.subMonths(value) : this.addMonths(value);
                    case 'y':
                        return isSub ? this.subYears(value) : this.addYears(value);
                    default:
                        return this;
                }
            }
            else {
                return this;
            }
        }
        else if (typeof time === 'number') {
            return this.addSeconds(time);
        }
        else {
            return this;
        }
    };
    FnsDate.prototype.sub = function (time) {
        if (typeof time === 'string') {
            if (time.startsWith('-')) {
                return this.add(time.substr(1, time.length - 1));
            }
            else {
                return this.add('-' + time);
            }
        }
        else {
            return this.add(-time);
        }
    };
    return FnsDate;
}());
function date(datetime) {
    return new FnsDate(datetime || new Date());
}
exports.date = date;
