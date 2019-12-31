import * as fns from 'date-fns';
import zh_cn from 'date-fns/locale/zh-CN';


const weekCfg: { locale: Locale, weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 } = { locale: zh_cn, weekStartsOn: 1 };
interface IParseOption {
    locale?: Locale | undefined;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    useAdditionalWeekYearTokens?: boolean | undefined;
    useAdditionalDayOfYearTokens?: boolean | undefined;
}

class FnsDate {
    private _datetime: Date = new Date();
    constructor(datetime: Date | number | string) {
        if (typeof datetime === 'string') {
            this._datetime = new Date(datetime);
        } else if (typeof datetime === 'number') {
            this._datetime = new Date(datetime);
        } else {
            this._datetime = <Date>datetime;
        }
    }
    addBusinessDays(amount: number): FnsDate {
        this._datetime = fns.addBusinessDays(this._datetime, amount);
        return this;
    }
    addDays(amount: number): FnsDate {
        this._datetime = fns.addDays(this._datetime, amount);
        return this;
    }
    addISOWeekYears(amount: number): FnsDate {
        this._datetime = fns.addISOWeekYears(this._datetime, amount);
        return this;
    }
    addMilliseconds(amount: number): FnsDate {
        this._datetime = fns.addMilliseconds(this._datetime, amount);
        return this;
    }
    addMinutes(amount: number): FnsDate {
        this._datetime = fns.addMinutes(this._datetime, amount);
        return this;
    }
    addMonths(amount: number): FnsDate {
        this._datetime = fns.addMonths(this._datetime, amount);
        return this;
    }
    addQuarters(amount: number): FnsDate {
        this._datetime = fns.addQuarters(this._datetime, amount);
        return this;
    }
    addSeconds(amount: number): FnsDate {
        this._datetime = fns.addSeconds(this._datetime, amount);
        return this;
    }
    addHours(amount: number): FnsDate {
        this._datetime = fns.addHours(this._datetime, amount);
        return this;
    }
    addWeeks(amount: number): FnsDate {
        this._datetime = fns.addWeeks(this._datetime, amount);
        return this;
    }
    addYears(amount: number): FnsDate {
        this._datetime = fns.addYears(this._datetime, amount);
        return this;
    }
    startOfDay(): FnsDate {
        this._datetime = fns.startOfDay(this._datetime);
        return this;
    }
    startOfDecade(): FnsDate {
        this._datetime = fns.startOfDecade(this._datetime);
        return this;
    }
    startOfHour(): FnsDate {
        this._datetime = fns.startOfHour(this._datetime);
        return this;
    }
    startOfISOWeek(): FnsDate {
        this._datetime = fns.startOfISOWeek(this._datetime);
        return this;
    }
    startOfToday(): FnsDate {
        this._datetime = fns.startOfToday();
        return this;
    }
    startOfTomorrow(): FnsDate {
        this._datetime = fns.startOfTomorrow();
        return this;
    }
    startOfYesterday(): FnsDate {
        this._datetime = fns.startOfYesterday();
        return this;
    }
    startOfWeek(): FnsDate {
        this._datetime = fns.startOfWeek(this._datetime, weekCfg);
        return this;
    }
    startOfQuarter(): FnsDate {
        this._datetime = fns.startOfQuarter(this._datetime);
        return this;
    }
    startOfSecond(): FnsDate {
        this._datetime = fns.startOfSecond(this._datetime);
        return this;
    }
    startOfISOWeekYear(): FnsDate {
        this._datetime = fns.startOfISOWeekYear(this._datetime);
        return this;
    }
    startOfMinute(): FnsDate {
        this._datetime = fns.startOfMinute(this._datetime);
        return this;
    }
    startOfMonth(): FnsDate {
        this._datetime = fns.startOfMonth(this._datetime);
        return this;
    }
    startOfWeekYear(): FnsDate {
        this._datetime = fns.startOfWeekYear(this._datetime, weekCfg);
        return this;
    }
    startOfYear(): FnsDate {
        this._datetime = fns.startOfYear(this._datetime);
        return this;
    }
    endOfDay(): FnsDate {
        this._datetime = fns.endOfDay(this._datetime);
        return this;
    }
    endOfDecade(): FnsDate {
        this._datetime = fns.endOfDecade(this._datetime);
        return this;
    }
    endOfHour(): FnsDate {
        this._datetime = fns.endOfHour(this._datetime);
        return this;
    }
    endOfISOWeek(): FnsDate {
        this._datetime = fns.endOfISOWeek(this._datetime);
        return this;
    }
    endOfToday(): FnsDate {
        this._datetime = fns.endOfToday();
        return this;
    }
    endOfTomorrow(): FnsDate {
        this._datetime = fns.endOfTomorrow();
        return this;
    }
    endOfYesterday(): FnsDate {
        this._datetime = fns.endOfYesterday();
        return this;
    }
    endOfWeek(): FnsDate {
        this._datetime = fns.endOfWeek(this._datetime, weekCfg);
        return this;
    }
    endOfQuarter(): FnsDate {
        this._datetime = fns.endOfQuarter(this._datetime);
        return this;
    }
    endOfSecond(): FnsDate {
        this._datetime = fns.endOfSecond(this._datetime);
        return this;
    }
    endOfISOWeekYear(): FnsDate {
        this._datetime = fns.endOfISOWeekYear(this._datetime);
        return this;
    }
    endOfMinute(): FnsDate {
        this._datetime = fns.endOfMinute(this._datetime);
        return this;
    }
    endOfMonth(): FnsDate {
        this._datetime = fns.endOfMonth(this._datetime);
        return this;
    }
    endOfYear(): FnsDate {
        this._datetime = fns.endOfYear(this._datetime);
        return this;
    }
    getDate(): number {
        return fns.getDate(this._datetime);
    }
    getDay(): number {
        return fns.getDay(this._datetime);
    }
    getDayOfYear(): number {
        return fns.getDayOfYear(this._datetime);
    }
    getDaysInMonth(): number {
        return fns.getDaysInMonth(this._datetime);
    }
    getDaysInYear(): number {
        return fns.getDaysInYear(this._datetime);
    }
    getDecade(): number {
        return fns.getDecade(this._datetime);
    }
    getHours(): number {
        return fns.getHours(this._datetime);
    }
    getISODay(): number {
        return fns.getISODay(this._datetime);
    }
    getISOWeek(): number {
        return fns.getISOWeek(this._datetime);
    }
    getISOWeekYear(): number {
        return fns.getISOWeekYear(this._datetime);
    }
    getISOWeeksInYear(): number {
        return fns.getISOWeeksInYear(this._datetime);
    }
    getMilliseconds(): number {
        return fns.getMilliseconds(this._datetime);
    }
    getMinutes(): number {
        return fns.getMinutes(this._datetime);
    }
    getMonth(): number {
        return fns.getMonth(this._datetime);
    }
    /** 获取两个时间间隔内重叠的天数 */
    getOverlappingDaysInIntervals(left: Interval, right: Interval): number {
        return fns.getOverlappingDaysInIntervals(left, right);
    }
    getQuarter(): number {
        return fns.getQuarter(this._datetime);
    }
    getSeconds(): number {
        return fns.getSeconds(this._datetime);
    }
    getTime(): number {
        return fns.getTime(this._datetime);
    }
    getTimeStamp(): number {
        return parseInt('' + (this._datetime.getTime() / 1000))
    }
    getUnixTime(): number {
        return fns.getUnixTime(this._datetime);
    }
    getWeek(): number {
        return fns.getWeek(this._datetime, weekCfg);
    }
    getWeekOfMonth(): number {
        return fns.getWeekOfMonth(this._datetime, weekCfg);
    }
    getWeekYear(): number {
        return fns.getWeekYear(this._datetime, weekCfg);
    }
    getWeeksInMonth(): number {
        return fns.getWeeksInMonth(this._datetime, weekCfg);
    }
    getYear(): number {
        return fns.getYear(this._datetime);
    }
    getWeekRange(week?: number, formatter?: string): { start: string | Date, end: string | Date } {
        let curr = fns.getISOWeek(this._datetime);
        let w = (week || curr) - curr
        let start = fns.startOfISOWeek(fns.addWeeks(this._datetime, w))
        let end = fns.endOfISOWeek(fns.addWeeks(this._datetime, w))
        if (formatter) {
            return { start: fns.format(start, formatter, weekCfg), end: fns.format(end, formatter, weekCfg) }
        } else {
            return { start, end }
        }
    }
    getMonthRange(formatter?: string): { start: string | Date, end: string | Date } {
        let start = fns.startOfMonth(this._datetime), end = fns.endOfMonth(this._datetime);
        if (formatter) {
            return { start: fns.format(start, formatter, weekCfg), end: fns.format(end, formatter, weekCfg) }
        } else {
            return { start, end }
        }
    }
    ymd(separate?: string): string {
        separate = separate || '-';
        const formatString = 'yyyy' + separate + 'MM' + separate + 'dd';
        return this.format(formatString);
    }
    set(values: { year?: number, month?: number, date?: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number }): FnsDate {
        this._datetime = fns.set(this._datetime, values);
        return this;
    }
    setDate(dayOfMonth: number): FnsDate {
        this._datetime = fns.setDate(this._datetime, dayOfMonth);
        return this;
    }
    setDay(day: number): FnsDate {
        this._datetime = fns.setDay(this._datetime, day, weekCfg);
        return this;
    }
    setDayOfYear(dayOfYear: number): FnsDate {
        this._datetime = fns.setDayOfYear(this._datetime, dayOfYear);
        return this;
    }
    setHours(hours: number): FnsDate {
        this._datetime = fns.setHours(this._datetime, hours);
        return this;
    }
    setISODay(day: number): FnsDate {
        this._datetime = fns.setISODay(this._datetime, day);
        return this;
    }
    setISOWeek(isoWeek: number): FnsDate {
        this._datetime = fns.setISOWeek(this._datetime, isoWeek);
        return this;
    }
    setISOWeekYear(isoWeekYear: number): FnsDate {
        this._datetime = fns.setISOWeekYear(this._datetime, isoWeekYear);
        return this;
    }
    setMilliseconds(milliseconds: number): FnsDate {
        this._datetime = fns.setMilliseconds(this._datetime, milliseconds);
        return this;
    }
    setMinutes(minutes: number): FnsDate {
        this._datetime = fns.setMinutes(this._datetime, minutes);
        return this;
    }
    setMonth(month: number): FnsDate {
        this._datetime = fns.setMonth(this._datetime, month);
        return this;
    }
    setQuarter(quarter: number): FnsDate {
        this._datetime = fns.setQuarter(this._datetime, quarter);
        return this;
    }
    setSeconds(seconds: number): FnsDate {
        this._datetime = fns.setSeconds(this._datetime, seconds);
        return this;
    }
    setWeek(week: number): FnsDate {
        this._datetime = fns.setWeek(this._datetime, week, weekCfg);
        return this;
    }
    setWeekYear(weekYear: number): FnsDate {
        this._datetime = fns.setWeekYear(this._datetime, weekYear, weekCfg);
        return this;
    }
    setYear(year: number): FnsDate {
        this._datetime = fns.setYear(this._datetime, year);
        return this;
    }
    isAfter(dateToCompare: number | Date): boolean {
        return fns.isAfter(this._datetime, dateToCompare);
    }
    isBefore(dateToCompare: number | Date): boolean {
        return fns.isBefore(this._datetime, dateToCompare);
    }
    isDate(value: any): boolean {
        return fns.isDate(value);
    }
    isEqual(dateToCompare: number | Date): boolean {
        return fns.isEqual(this._datetime, dateToCompare);
    }
    isFirstDayOfMonth(): boolean {
        return fns.isFirstDayOfMonth(this._datetime);
    }
    isFriday(): boolean {
        return fns.isFriday(this._datetime);
    }
    isFuture(): boolean {
        return fns.isFuture(this._datetime);
    }
    isLastDayOfMonth(): boolean {
        return fns.isLastDayOfMonth(this._datetime);
    }
    isLeapYear(): boolean {
        return fns.isLeapYear(this._datetime);
    }
    isMonday(): boolean {
        return fns.isMonday(this._datetime);
    }
    isPast(): boolean {
        return fns.isPast(this._datetime);
    }
    isSameDay(dateToCompare: number | Date): boolean {
        return fns.isSameDay(this._datetime, dateToCompare);
    }
    isSameHour(dateToCompare: number | Date): boolean {
        return fns.isSameHour(this._datetime, dateToCompare);
    }
    isSameISOWeek(dateToCompare: number | Date): boolean {
        return fns.isSameISOWeek(this._datetime, dateToCompare);
    }
    isSameISOWeekYear(dateToCompare: number | Date): boolean {
        return fns.isSameISOWeekYear(this._datetime, dateToCompare);
    }
    isSameMinute(dateToCompare: number | Date): boolean {
        return fns.isSameMinute(this._datetime, dateToCompare);
    }
    isSameMonth(dateToCompare: number | Date): boolean {
        return fns.isSameMonth(this._datetime, dateToCompare);
    }
    isSameQuarter(dateToCompare: number | Date): boolean {
        return fns.isSameQuarter(this._datetime, dateToCompare);
    }
    isSameSecond(dateToCompare: number | Date): boolean {
        return fns.isSameSecond(this._datetime, dateToCompare);
    }
    isSameWeek(dateToCompare: number | Date): boolean {
        return fns.isSameWeek(this._datetime, dateToCompare);
    }
    isSameYear(dateToCompare: number | Date): boolean {
        return fns.isSameYear(this._datetime, dateToCompare);
    }
    isSaturday(): boolean {
        return fns.isSaturday(this._datetime);
    }
    isSunday(): boolean {
        return fns.isSunday(this._datetime);
    }
    isThisHour(): boolean {
        return fns.isThisHour(this._datetime);
    }
    isThisISOWeek(): boolean {
        return fns.isThisISOWeek(this._datetime);
    }
    isThisMinute(): boolean {
        return fns.isThisMinute(this._datetime);
    }
    isThisMonth(): boolean {
        return fns.isThisMonth(this._datetime);
    }
    isThisQuarter(): boolean {
        return fns.isThisQuarter(this._datetime);
    }
    isThisSecond(): boolean {
        return fns.isThisSecond(this._datetime);
    }
    isThisWeek(): boolean {
        return fns.isThisWeek(this._datetime);
    }
    isThisYear(): boolean {
        return fns.isThisYear(this._datetime);
    }
    isThursday(): boolean {
        return fns.isThursday(this._datetime);
    }
    isToday(): boolean {
        return fns.isToday(this._datetime);
    }
    isTomorrow(): boolean {
        return fns.isTomorrow(this._datetime);
    }
    isTuesday(): boolean {
        return fns.isTuesday(this._datetime);
    }
    isValid(): boolean {
        return fns.isValid(this._datetime);
    }
    isWednesday(): boolean {
        return fns.isWednesday(this._datetime);
    }
    isWeekend(): boolean {
        return fns.isWeekend(this._datetime);
    }
    isWithinInterval(interval: Interval): boolean {
        return fns.isWithinInterval(this._datetime, interval);
    }
    isYesterday(): boolean {
        return fns.isYesterday(this._datetime);
    }
    differenceInBusinessDays(other: number | Date): number {
        return fns.differenceInBusinessDays(this._datetime, other);
    }
    differenceInCalendarDays(other: number | Date): number {
        return fns.differenceInCalendarDays(this._datetime, other);
    }
    differenceInCalendarISOWeekYears(other: number | Date): number {
        return fns.differenceInCalendarISOWeekYears(this._datetime, other);
    }
    differenceInCalendarISOWeeks(other: number | Date): number {
        return fns.differenceInCalendarISOWeeks(this._datetime, other);
    }
    differenceInCalendarMonths(other: number | Date): number {
        return fns.differenceInCalendarMonths(this._datetime, other);
    }
    differenceInCalendarQuarters(other: number | Date): number {
        return fns.differenceInCalendarQuarters(this._datetime, other);
    }
    differenceInCalendarWeeks(other: number | Date): number {
        return fns.differenceInCalendarWeeks(this._datetime, other);
    }
    differenceInCalendarYears(other: number | Date): number {
        return fns.differenceInCalendarYears(this._datetime, other);
    }
    differenceInDays(other: number | Date): number {
        return fns.differenceInDays(this._datetime, other);
    }
    differenceInHours(other: number | Date): number {
        return fns.differenceInHours(this._datetime, other);
    }
    differenceInISOWeekYears(other: number | Date): number {
        return fns.differenceInISOWeekYears(this._datetime, other);
    }
    differenceInMilliseconds(other: number | Date): number {
        return fns.differenceInMilliseconds(this._datetime, other);
    }
    differenceInMinutes(other: number | Date): number {
        return fns.differenceInMinutes(this._datetime, other);
    }
    differenceInMonths(other: number | Date): number {
        return fns.differenceInMonths(this._datetime, other);
    }
    differenceInQuarters(other: number | Date): number {
        return fns.differenceInQuarters(this._datetime, other);
    }
    differenceInSeconds(other: number | Date): number {
        return fns.differenceInSeconds(this._datetime, other);
    }
    differenceInWeeks(other: number | Date): number {
        return fns.differenceInWeeks(this._datetime, other);
    }
    differenceInYears(other: number | Date): number {
        return fns.differenceInYears(this._datetime, other);
    }
    /** 给定的时间间隔是否与另一个时间间隔重叠？相邻间隔不算作重叠 */
    areIntervalsOverlapping(left: Interval, right: Interval): boolean {
        return fns.areIntervalsOverlapping(left, right);
    }
    /** 返回数组中与给定日期相比最近的索引 */
    closestIndexTo(datesArray: (number | Date)[]): number {
        return fns.closestIndexTo(this._datetime, datesArray);
    }
    /** 从数组中返回最接近当前日期的日期 */
    closestTo(datesArray: (number | Date)[]): Date {
        return fns.closestTo(this._datetime, datesArray);
    }
    compareAsc(dateLeft: number | Date, dateRight: number | Date): number {
        return fns.compareAsc(dateLeft, dateRight);
    }
    compareDesc(dateLeft: number | Date, dateRight: number | Date): number {
        return fns.compareDesc(dateLeft, dateRight);
    }
    eachDayOfInterval(interval: Interval, step?: number): Date[] {
        return fns.eachDayOfInterval(interval, { step });
    }
    eachWeekOfInterval(interval: Interval): Date[] {
        return fns.eachWeekOfInterval(interval, weekCfg);
    }
    eachWeekendOfInterval(interval: Interval): Date[] {
        return fns.eachWeekendOfInterval(interval);
    }
    eachWeekendOfMonth(): Date[] {
        return fns.eachWeekendOfMonth(this._datetime);
    }
    eachWeekendOfYear(): Date[] {
        return fns.eachWeekendOfYear(this._datetime);
    }
    lightFormat(format: string): string {
        return fns.lightFormat(this._datetime, format);
    }
    max(datesArray: (number | Date)[]): Date {
        return fns.max(datesArray);
    }
    min(datesArray: (number | Date)[]): Date {
        return fns.min(datesArray);
    }
    /** 十年期的最后一天 */
    lastDayOfDecade(): Date {
        return fns.lastDayOfDecade(this._datetime);
    }
    lastDayOfISOWeek(): Date {
        return fns.lastDayOfISOWeek(this._datetime);
    }
    lastDayOfISOWeekYear(): Date {
        return fns.lastDayOfISOWeekYear(this._datetime);
    }
    lastDayOfMonth(): Date {
        return fns.lastDayOfMonth(this._datetime);
    }
    lastDayOfQuarter(): Date {
        return fns.lastDayOfQuarter(this._datetime);
    }
    lastDayOfWeek(): Date {
        return fns.lastDayOfWeek(this._datetime, weekCfg);
    }
    lastDayOfYear(): Date {
        return fns.lastDayOfYear(this._datetime);
    }
    subBusinessDays(amount: number): FnsDate {
        this._datetime = fns.subBusinessDays(this._datetime, amount);
        return this;
    }
    subDays(amount: number): FnsDate {
        this._datetime = fns.subDays(this._datetime, amount);
        return this;
    }
    subHours(amount: number): FnsDate {
        this._datetime = fns.subHours(this._datetime, amount);
        return this;
    }
    subISOWeekYears(amount: number): FnsDate {
        this._datetime = fns.subISOWeekYears(this._datetime, amount);
        return this;
    }
    subMilliseconds(amount: number): FnsDate {
        this._datetime = fns.subMilliseconds(this._datetime, amount);
        return this;
    }
    subMinutes(amount: number): FnsDate {
        this._datetime = fns.subMinutes(this._datetime, amount);
        return this;
    }
    subMonths(amount: number): FnsDate {
        this._datetime = fns.subMonths(this._datetime, amount);
        return this;
    }
    subQuarters(amount: number): FnsDate {
        this._datetime = fns.subQuarters(this._datetime, amount);
        return this;
    }
    subSeconds(amount: number): FnsDate {
        this._datetime = fns.subSeconds(this._datetime, amount);
        return this;
    }
    subWeeks(amount: number): FnsDate {
        this._datetime = fns.subWeeks(this._datetime, amount);
        return this;
    }
    subYears(amount: number): FnsDate {
        this._datetime = fns.subYears(this._datetime, amount);
        return this;
    }
    toDate(): Date {
        return this._datetime;
    }
    /** 当给定日期正好在最近的两分钟之间时，四舍五入。 */
    roundToNearestMinutes(nearestTo?: number): Date {
        return fns.roundToNearestMinutes(this._datetime, { nearestTo })
    }
    format(format?: string): string {
        let formatString = format || 'yyyy-MM-dd HH:mm:ss';
        if (format === 'date') {
            formatString = 'yyyy-MM-dd'
        } else if (format === 'time') {
            formatString = 'HH:mm:ss'
        }
        if (formatString === 'string') {
            return this.formatDistanceToNow()
        } else {
            return fns.format(this._datetime, formatString, weekCfg);
        }
    }
    formatDistance(baseDate: number | Date): string {
        return fns.formatDistance(this._datetime, baseDate, { locale: zh_cn });
    }
    formatDistanceStrict(baseDate: number | Date): string {
        return fns.formatDistanceStrict(this._datetime, baseDate, { locale: zh_cn });
    }
    formatDistanceToNow(): string {
        return fns.formatDistanceToNow(this._datetime, { locale: zh_cn })
    }
    formatISO(): string {
        return fns.formatISO(this._datetime);
    }
    formatISO9075(): string {
        return fns.formatISO9075(this._datetime);
    }
    formatRFC3339(): string {
        return fns.formatRFC3339(this._datetime);
    }
    formatRFC7231(): string {
        return fns.formatRFC7231(this._datetime);
    }
    formatRelative(baseDate: number | Date): string {
        return fns.formatRelative(this._datetime, baseDate);
    }
    fromUnixTime(unixTime: number): Date {
        return fns.fromUnixTime(unixTime)
    }
    parse(dateString: string, formatString: string, options?: IParseOption): Date {
        return fns.parse(dateString, formatString, this._datetime, options)
    }
    parseISO(argument: string): Date {
        return fns.parseISO(argument)
    }
    parseJSON(argument: string | number | Date): Date {
        return fns.parseJSON(argument);
    }
    toString(format?: string): string {
        return this.format(format)
    }
    add(time: string | number): FnsDate {
        if (typeof time === 'string') {
            const match = time.match(/^(-)?(\d+)(s|m|h|d|M|y)$/);
            if (match) {
                const value: number = parseInt(match[2]);
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
            } else {
                return this;
            }
        } else if (typeof time === 'number') {
            return this.addSeconds(time);
        } else {
            return this;
        }
    }
    sub(time: string | number): FnsDate {
        if (typeof time === 'string') {
            if ((<any>time).startsWith('-')) {
                return this.add(time.substr(1, time.length - 1));
            } else {
                return this.add('-' + time);
            }
        } else {
            return this.add(-time);
        }
    }
}

export function date(datetime?: Date | string | number): FnsDate {
    return new FnsDate(datetime || new Date());
}
