// @ts-ignore
import * as fns from 'date-fns';
// @ts-ignore
import zh_cn from 'date-fns/locale/zh-CN';
const weekCfg = { locale: zh_cn, weekStartsOn: 1 };
class FnsDate {
    constructor(datetime) {
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
    addBusinessDays(amount) {
        this._datetime = fns.addBusinessDays(this._datetime, amount);
        return this;
    }
    addDays(amount) {
        this._datetime = fns.addDays(this._datetime, amount);
        return this;
    }
    addISOWeekYears(amount) {
        this._datetime = fns.addISOWeekYears(this._datetime, amount);
        return this;
    }
    addMilliseconds(amount) {
        this._datetime = fns.addMilliseconds(this._datetime, amount);
        return this;
    }
    addMinutes(amount) {
        this._datetime = fns.addMinutes(this._datetime, amount);
        return this;
    }
    addMonths(amount) {
        this._datetime = fns.addMonths(this._datetime, amount);
        return this;
    }
    addQuarters(amount) {
        this._datetime = fns.addQuarters(this._datetime, amount);
        return this;
    }
    addSeconds(amount) {
        this._datetime = fns.addSeconds(this._datetime, amount);
        return this;
    }
    addHours(amount) {
        this._datetime = fns.addHours(this._datetime, amount);
        return this;
    }
    addWeeks(amount) {
        this._datetime = fns.addWeeks(this._datetime, amount);
        return this;
    }
    addYears(amount) {
        this._datetime = fns.addYears(this._datetime, amount);
        return this;
    }
    startOfDay() {
        this._datetime = fns.startOfDay(this._datetime);
        return this;
    }
    startOfDecade() {
        this._datetime = fns.startOfDecade(this._datetime);
        return this;
    }
    startOfHour() {
        this._datetime = fns.startOfHour(this._datetime);
        return this;
    }
    startOfISOWeek() {
        this._datetime = fns.startOfISOWeek(this._datetime);
        return this;
    }
    startOfToday() {
        this._datetime = fns.startOfToday();
        return this;
    }
    startOfTomorrow() {
        this._datetime = fns.startOfTomorrow();
        return this;
    }
    startOfYesterday() {
        this._datetime = fns.startOfYesterday();
        return this;
    }
    startOfWeek() {
        this._datetime = fns.startOfWeek(this._datetime, weekCfg);
        return this;
    }
    startOfQuarter() {
        this._datetime = fns.startOfQuarter(this._datetime);
        return this;
    }
    startOfSecond() {
        this._datetime = fns.startOfSecond(this._datetime);
        return this;
    }
    startOfISOWeekYear() {
        this._datetime = fns.startOfISOWeekYear(this._datetime);
        return this;
    }
    startOfMinute() {
        this._datetime = fns.startOfMinute(this._datetime);
        return this;
    }
    startOfMonth() {
        this._datetime = fns.startOfMonth(this._datetime);
        return this;
    }
    startOfWeekYear() {
        this._datetime = fns.startOfWeekYear(this._datetime, weekCfg);
        return this;
    }
    startOfYear() {
        this._datetime = fns.startOfYear(this._datetime);
        return this;
    }
    endOfDay() {
        this._datetime = fns.endOfDay(this._datetime);
        return this;
    }
    endOfDecade() {
        this._datetime = fns.endOfDecade(this._datetime);
        return this;
    }
    endOfHour() {
        this._datetime = fns.endOfHour(this._datetime);
        return this;
    }
    endOfISOWeek() {
        this._datetime = fns.endOfISOWeek(this._datetime);
        return this;
    }
    endOfToday() {
        this._datetime = fns.endOfToday();
        return this;
    }
    endOfTomorrow() {
        this._datetime = fns.endOfTomorrow();
        return this;
    }
    endOfYesterday() {
        this._datetime = fns.endOfYesterday();
        return this;
    }
    endOfWeek() {
        this._datetime = fns.endOfWeek(this._datetime, weekCfg);
        return this;
    }
    endOfQuarter() {
        this._datetime = fns.endOfQuarter(this._datetime);
        return this;
    }
    endOfSecond() {
        this._datetime = fns.endOfSecond(this._datetime);
        return this;
    }
    endOfISOWeekYear() {
        this._datetime = fns.endOfISOWeekYear(this._datetime);
        return this;
    }
    endOfMinute() {
        this._datetime = fns.endOfMinute(this._datetime);
        return this;
    }
    endOfMonth() {
        this._datetime = fns.endOfMonth(this._datetime);
        return this;
    }
    endOfYear() {
        this._datetime = fns.endOfYear(this._datetime);
        return this;
    }
    getDate() {
        return fns.getDate(this._datetime);
    }
    getDay() {
        return fns.getDay(this._datetime);
    }
    getDayOfYear() {
        return fns.getDayOfYear(this._datetime);
    }
    getDaysInMonth() {
        return fns.getDaysInMonth(this._datetime);
    }
    getDaysInYear() {
        return fns.getDaysInYear(this._datetime);
    }
    getDecade() {
        return fns.getDecade(this._datetime);
    }
    getHours() {
        return fns.getHours(this._datetime);
    }
    getISODay() {
        return fns.getISODay(this._datetime);
    }
    getISOWeek() {
        return fns.getISOWeek(this._datetime);
    }
    getISOWeekYear() {
        return fns.getISOWeekYear(this._datetime);
    }
    getISOWeeksInYear() {
        return fns.getISOWeeksInYear(this._datetime);
    }
    getMilliseconds() {
        return fns.getMilliseconds(this._datetime);
    }
    getMinutes() {
        return fns.getMinutes(this._datetime);
    }
    getMonth() {
        return fns.getMonth(this._datetime);
    }
    /** 获取两个时间间隔内重叠的天数 */
    getOverlappingDaysInIntervals(left, right) {
        return fns.getOverlappingDaysInIntervals(left, right);
    }
    getQuarter() {
        return fns.getQuarter(this._datetime);
    }
    getSeconds() {
        return fns.getSeconds(this._datetime);
    }
    getTime() {
        return fns.getTime(this._datetime);
    }
    getTimeStamp() {
        return parseInt('' + (this._datetime.getTime() / 1000));
    }
    getUnixTime() {
        return fns.getUnixTime(this._datetime);
    }
    getWeek() {
        return fns.getWeek(this._datetime, weekCfg);
    }
    getWeekOfMonth() {
        return fns.getWeekOfMonth(this._datetime, weekCfg);
    }
    getWeekYear() {
        return fns.getWeekYear(this._datetime, weekCfg);
    }
    getWeeksInMonth() {
        return fns.getWeeksInMonth(this._datetime, weekCfg);
    }
    getYear() {
        return fns.getYear(this._datetime);
    }
    getWeekRange(week, formatter) {
        let curr = fns.getISOWeek(this._datetime);
        let w = (week || curr) - curr;
        let start = fns.startOfISOWeek(fns.addWeeks(this._datetime, w));
        let end = fns.endOfISOWeek(fns.addWeeks(this._datetime, w));
        if (formatter) {
            return { start: fns.format(start, formatter, weekCfg), end: fns.format(end, formatter, weekCfg) };
        }
        else {
            return { start, end };
        }
    }
    getMonthRange(formatter) {
        let start = fns.startOfMonth(this._datetime), end = fns.endOfMonth(this._datetime);
        if (formatter) {
            return { start: fns.format(start, formatter, weekCfg), end: fns.format(end, formatter, weekCfg) };
        }
        else {
            return { start, end };
        }
    }
    ymd(separate) {
        separate = separate || '-';
        const formatString = 'yyyy' + separate + 'MM' + separate + 'dd';
        return this.format(formatString);
    }
    set(values) {
        this._datetime = fns.set(this._datetime, values);
        return this;
    }
    setDate(dayOfMonth) {
        this._datetime = fns.setDate(this._datetime, dayOfMonth);
        return this;
    }
    setDay(day) {
        this._datetime = fns.setDay(this._datetime, day, weekCfg);
        return this;
    }
    setDayOfYear(dayOfYear) {
        this._datetime = fns.setDayOfYear(this._datetime, dayOfYear);
        return this;
    }
    setHours(hours) {
        this._datetime = fns.setHours(this._datetime, hours);
        return this;
    }
    setISODay(day) {
        this._datetime = fns.setISODay(this._datetime, day);
        return this;
    }
    setISOWeek(isoWeek) {
        this._datetime = fns.setISOWeek(this._datetime, isoWeek);
        return this;
    }
    setISOWeekYear(isoWeekYear) {
        this._datetime = fns.setISOWeekYear(this._datetime, isoWeekYear);
        return this;
    }
    setMilliseconds(milliseconds) {
        this._datetime = fns.setMilliseconds(this._datetime, milliseconds);
        return this;
    }
    setMinutes(minutes) {
        this._datetime = fns.setMinutes(this._datetime, minutes);
        return this;
    }
    setMonth(month) {
        this._datetime = fns.setMonth(this._datetime, month);
        return this;
    }
    setQuarter(quarter) {
        this._datetime = fns.setQuarter(this._datetime, quarter);
        return this;
    }
    setSeconds(seconds) {
        this._datetime = fns.setSeconds(this._datetime, seconds);
        return this;
    }
    setWeek(week) {
        this._datetime = fns.setWeek(this._datetime, week, weekCfg);
        return this;
    }
    setWeekYear(weekYear) {
        this._datetime = fns.setWeekYear(this._datetime, weekYear, weekCfg);
        return this;
    }
    setYear(year) {
        this._datetime = fns.setYear(this._datetime, year);
        return this;
    }
    isAfter(dateToCompare) {
        return fns.isAfter(this._datetime, dateToCompare);
    }
    isBefore(dateToCompare) {
        return fns.isBefore(this._datetime, dateToCompare);
    }
    isDate(value) {
        return fns.isDate(value);
    }
    isEqual(dateToCompare) {
        return fns.isEqual(this._datetime, dateToCompare);
    }
    isFirstDayOfMonth() {
        return fns.isFirstDayOfMonth(this._datetime);
    }
    isFriday() {
        return fns.isFriday(this._datetime);
    }
    isFuture() {
        return fns.isFuture(this._datetime);
    }
    isLastDayOfMonth() {
        return fns.isLastDayOfMonth(this._datetime);
    }
    isLeapYear() {
        return fns.isLeapYear(this._datetime);
    }
    isMonday() {
        return fns.isMonday(this._datetime);
    }
    isPast() {
        return fns.isPast(this._datetime);
    }
    isSameDay(dateToCompare) {
        return fns.isSameDay(this._datetime, dateToCompare);
    }
    isSameHour(dateToCompare) {
        return fns.isSameHour(this._datetime, dateToCompare);
    }
    isSameISOWeek(dateToCompare) {
        return fns.isSameISOWeek(this._datetime, dateToCompare);
    }
    isSameISOWeekYear(dateToCompare) {
        return fns.isSameISOWeekYear(this._datetime, dateToCompare);
    }
    isSameMinute(dateToCompare) {
        return fns.isSameMinute(this._datetime, dateToCompare);
    }
    isSameMonth(dateToCompare) {
        return fns.isSameMonth(this._datetime, dateToCompare);
    }
    isSameQuarter(dateToCompare) {
        return fns.isSameQuarter(this._datetime, dateToCompare);
    }
    isSameSecond(dateToCompare) {
        return fns.isSameSecond(this._datetime, dateToCompare);
    }
    isSameWeek(dateToCompare) {
        return fns.isSameWeek(this._datetime, dateToCompare);
    }
    isSameYear(dateToCompare) {
        return fns.isSameYear(this._datetime, dateToCompare);
    }
    isSaturday() {
        return fns.isSaturday(this._datetime);
    }
    isSunday() {
        return fns.isSunday(this._datetime);
    }
    isThisHour() {
        return fns.isThisHour(this._datetime);
    }
    isThisISOWeek() {
        return fns.isThisISOWeek(this._datetime);
    }
    isThisMinute() {
        return fns.isThisMinute(this._datetime);
    }
    isThisMonth() {
        return fns.isThisMonth(this._datetime);
    }
    isThisQuarter() {
        return fns.isThisQuarter(this._datetime);
    }
    isThisSecond() {
        return fns.isThisSecond(this._datetime);
    }
    isThisWeek() {
        return fns.isThisWeek(this._datetime);
    }
    isThisYear() {
        return fns.isThisYear(this._datetime);
    }
    isThursday() {
        return fns.isThursday(this._datetime);
    }
    isToday() {
        return fns.isToday(this._datetime);
    }
    isTomorrow() {
        return fns.isTomorrow(this._datetime);
    }
    isTuesday() {
        return fns.isTuesday(this._datetime);
    }
    isValid() {
        return fns.isValid(this._datetime);
    }
    isWednesday() {
        return fns.isWednesday(this._datetime);
    }
    isWeekend() {
        return fns.isWeekend(this._datetime);
    }
    isWithinInterval(interval) {
        return fns.isWithinInterval(this._datetime, interval);
    }
    isYesterday() {
        return fns.isYesterday(this._datetime);
    }
    differenceInBusinessDays(other) {
        return fns.differenceInBusinessDays(this._datetime, other);
    }
    differenceInCalendarDays(other) {
        return fns.differenceInCalendarDays(this._datetime, other);
    }
    differenceInCalendarISOWeekYears(other) {
        return fns.differenceInCalendarISOWeekYears(this._datetime, other);
    }
    differenceInCalendarISOWeeks(other) {
        return fns.differenceInCalendarISOWeeks(this._datetime, other);
    }
    differenceInCalendarMonths(other) {
        return fns.differenceInCalendarMonths(this._datetime, other);
    }
    differenceInCalendarQuarters(other) {
        return fns.differenceInCalendarQuarters(this._datetime, other);
    }
    differenceInCalendarWeeks(other) {
        return fns.differenceInCalendarWeeks(this._datetime, other);
    }
    differenceInCalendarYears(other) {
        return fns.differenceInCalendarYears(this._datetime, other);
    }
    differenceInDays(other) {
        return fns.differenceInDays(this._datetime, other);
    }
    differenceInHours(other) {
        return fns.differenceInHours(this._datetime, other);
    }
    differenceInISOWeekYears(other) {
        return fns.differenceInISOWeekYears(this._datetime, other);
    }
    differenceInMilliseconds(other) {
        return fns.differenceInMilliseconds(this._datetime, other);
    }
    differenceInMinutes(other) {
        return fns.differenceInMinutes(this._datetime, other);
    }
    differenceInMonths(other) {
        return fns.differenceInMonths(this._datetime, other);
    }
    differenceInQuarters(other) {
        return fns.differenceInQuarters(this._datetime, other);
    }
    differenceInSeconds(other) {
        return fns.differenceInSeconds(this._datetime, other);
    }
    differenceInWeeks(other) {
        return fns.differenceInWeeks(this._datetime, other);
    }
    differenceInYears(other) {
        return fns.differenceInYears(this._datetime, other);
    }
    /** 给定的时间间隔是否与另一个时间间隔重叠？相邻间隔不算作重叠 */
    areIntervalsOverlapping(left, right) {
        return fns.areIntervalsOverlapping(left, right);
    }
    /** 返回数组中与给定日期相比最近的索引 */
    closestIndexTo(datesArray) {
        return fns.closestIndexTo(this._datetime, datesArray);
    }
    /** 从数组中返回最接近当前日期的日期 */
    closestTo(datesArray) {
        return fns.closestTo(this._datetime, datesArray);
    }
    compareAsc(dateLeft, dateRight) {
        return fns.compareAsc(dateLeft, dateRight);
    }
    compareDesc(dateLeft, dateRight) {
        return fns.compareDesc(dateLeft, dateRight);
    }
    eachDayOfInterval(interval, step) {
        return fns.eachDayOfInterval(interval, { step });
    }
    eachWeekOfInterval(interval) {
        return fns.eachWeekOfInterval(interval, weekCfg);
    }
    eachWeekendOfInterval(interval) {
        return fns.eachWeekendOfInterval(interval);
    }
    eachWeekendOfMonth() {
        return fns.eachWeekendOfMonth(this._datetime);
    }
    eachWeekendOfYear() {
        return fns.eachWeekendOfYear(this._datetime);
    }
    lightFormat(format) {
        return fns.lightFormat(this._datetime, format);
    }
    max(datesArray) {
        return fns.max(datesArray);
    }
    min(datesArray) {
        return fns.min(datesArray);
    }
    /** 十年期的最后一天 */
    lastDayOfDecade() {
        return fns.lastDayOfDecade(this._datetime);
    }
    lastDayOfISOWeek() {
        return fns.lastDayOfISOWeek(this._datetime);
    }
    lastDayOfISOWeekYear() {
        return fns.lastDayOfISOWeekYear(this._datetime);
    }
    lastDayOfMonth() {
        return fns.lastDayOfMonth(this._datetime);
    }
    lastDayOfQuarter() {
        return fns.lastDayOfQuarter(this._datetime);
    }
    lastDayOfWeek() {
        return fns.lastDayOfWeek(this._datetime, weekCfg);
    }
    lastDayOfYear() {
        return fns.lastDayOfYear(this._datetime);
    }
    subBusinessDays(amount) {
        this._datetime = fns.subBusinessDays(this._datetime, amount);
        return this;
    }
    subDays(amount) {
        this._datetime = fns.subDays(this._datetime, amount);
        return this;
    }
    subHours(amount) {
        this._datetime = fns.subHours(this._datetime, amount);
        return this;
    }
    subISOWeekYears(amount) {
        this._datetime = fns.subISOWeekYears(this._datetime, amount);
        return this;
    }
    subMilliseconds(amount) {
        this._datetime = fns.subMilliseconds(this._datetime, amount);
        return this;
    }
    subMinutes(amount) {
        this._datetime = fns.subMinutes(this._datetime, amount);
        return this;
    }
    subMonths(amount) {
        this._datetime = fns.subMonths(this._datetime, amount);
        return this;
    }
    subQuarters(amount) {
        this._datetime = fns.subQuarters(this._datetime, amount);
        return this;
    }
    subSeconds(amount) {
        this._datetime = fns.subSeconds(this._datetime, amount);
        return this;
    }
    subWeeks(amount) {
        this._datetime = fns.subWeeks(this._datetime, amount);
        return this;
    }
    subYears(amount) {
        this._datetime = fns.subYears(this._datetime, amount);
        return this;
    }
    toDate() {
        return this._datetime;
    }
    /** 当给定日期正好在最近的两分钟之间时，四舍五入。 */
    roundToNearestMinutes(nearestTo) {
        return fns.roundToNearestMinutes(this._datetime, { nearestTo });
    }
    format(format) {
        let formatString = format || 'yyyy-MM-dd HH:mm:ss';
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
    }
    formatDistance(baseDate) {
        return fns.formatDistance(this._datetime, baseDate, { locale: zh_cn });
    }
    formatDistanceStrict(baseDate) {
        return fns.formatDistanceStrict(this._datetime, baseDate, { locale: zh_cn });
    }
    formatDistanceToNow() {
        return fns.formatDistanceToNow(this._datetime, { locale: zh_cn });
    }
    formatISO() {
        return fns.formatISO(this._datetime);
    }
    formatISO9075() {
        return fns.formatISO9075(this._datetime);
    }
    formatRFC3339() {
        return fns.formatRFC3339(this._datetime);
    }
    formatRFC7231() {
        return fns.formatRFC7231(this._datetime);
    }
    formatRelative(baseDate) {
        return fns.formatRelative(this._datetime, baseDate);
    }
    fromUnixTime(unixTime) {
        return fns.fromUnixTime(unixTime);
    }
    parse(dateString, formatString, options) {
        return fns.parse(dateString, formatString, this._datetime, options);
    }
    parseISO(argument) {
        return fns.parseISO(argument);
    }
    parseJSON(argument) {
        return fns.parseJSON(argument);
    }
    toString(format) {
        return this.format(format);
    }
    add(time) {
        if (typeof time === 'string') {
            const match = time.match(/^(-)?(\d+)(s|m|h|d|M|y)$/);
            if (match) {
                const value = parseInt(match[2]);
                const isSub = match[1] ? true : false;
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
    }
    sub(time) {
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
    }
}
export function date(datetime) {
    return new FnsDate(datetime || new Date());
}
