declare type Locale = {
    formatDistance: (...args: Array<any>) => any;
    formatRelative: (...args: Array<any>) => any;
    localize: {
        ordinalNumber: (...args: Array<any>) => any;
        era: (...args: Array<any>) => any;
        quarter: (...args: Array<any>) => any;
        month: (...args: Array<any>) => any;
        day: (...args: Array<any>) => any;
        dayPeriod: (...args: Array<any>) => any;
    };
    formatLong: Object;
    date: (...args: Array<any>) => any;
    time: (...args: Array<any>) => any;
    dateTime: (...args: Array<any>) => any;
    match: {
        ordinalNumber: (...args: Array<any>) => any;
        era: (...args: Array<any>) => any;
        quarter: (...args: Array<any>) => any;
        month: (...args: Array<any>) => any;
        day: (...args: Array<any>) => any;
        dayPeriod: (...args: Array<any>) => any;
    };
    options?: {
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    };
};
interface IParseOption {
    locale?: Locale | undefined;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    useAdditionalWeekYearTokens?: boolean | undefined;
    useAdditionalDayOfYearTokens?: boolean | undefined;
}
declare type Interval = {
    start: Date | number;
    end: Date | number;
};
declare class FnsDate {
    private _datetime;
    constructor(datetime: Date | number | string);
    addBusinessDays(amount: number): FnsDate;
    addDays(amount: number): FnsDate;
    addISOWeekYears(amount: number): FnsDate;
    addMilliseconds(amount: number): FnsDate;
    addMinutes(amount: number): FnsDate;
    addMonths(amount: number): FnsDate;
    addQuarters(amount: number): FnsDate;
    addSeconds(amount: number): FnsDate;
    addHours(amount: number): FnsDate;
    addWeeks(amount: number): FnsDate;
    addYears(amount: number): FnsDate;
    startOfDay(): FnsDate;
    startOfDecade(): FnsDate;
    startOfHour(): FnsDate;
    startOfISOWeek(): FnsDate;
    startOfToday(): FnsDate;
    startOfTomorrow(): FnsDate;
    startOfYesterday(): FnsDate;
    startOfWeek(): FnsDate;
    startOfQuarter(): FnsDate;
    startOfSecond(): FnsDate;
    startOfISOWeekYear(): FnsDate;
    startOfMinute(): FnsDate;
    startOfMonth(): FnsDate;
    startOfWeekYear(): FnsDate;
    startOfYear(): FnsDate;
    endOfDay(): FnsDate;
    endOfDecade(): FnsDate;
    endOfHour(): FnsDate;
    endOfISOWeek(): FnsDate;
    endOfToday(): FnsDate;
    endOfTomorrow(): FnsDate;
    endOfYesterday(): FnsDate;
    endOfWeek(): FnsDate;
    endOfQuarter(): FnsDate;
    endOfSecond(): FnsDate;
    endOfISOWeekYear(): FnsDate;
    endOfMinute(): FnsDate;
    endOfMonth(): FnsDate;
    endOfYear(): FnsDate;
    getDate(): number;
    getDay(): number;
    getDayOfYear(): number;
    getDaysInMonth(): number;
    getDaysInYear(): number;
    getDecade(): number;
    getHours(): number;
    getISODay(): number;
    getISOWeek(): number;
    getISOWeekYear(): number;
    getISOWeeksInYear(): number;
    getMilliseconds(): number;
    getMinutes(): number;
    getMonth(): number;
    /** 获取两个时间间隔内重叠的天数 */
    getOverlappingDaysInIntervals(left: Interval, right: Interval): number;
    getQuarter(): number;
    getSeconds(): number;
    getTime(): number;
    getTimeStamp(): number;
    getUnixTime(): number;
    getWeek(): number;
    getWeekOfMonth(): number;
    getWeekYear(): number;
    getWeeksInMonth(): number;
    getYear(): number;
    getWeekRange(week?: number, formatter?: string): {
        start: string | Date;
        end: string | Date;
    };
    getMonthRange(formatter?: string): {
        start: string | Date;
        end: string | Date;
    };
    ymd(separate?: string): string;
    set(values: {
        year?: number;
        month?: number;
        date?: number;
        hours?: number;
        minutes?: number;
        seconds?: number;
        milliseconds?: number;
    }): FnsDate;
    setDate(dayOfMonth: number): FnsDate;
    setDay(day: number): FnsDate;
    setDayOfYear(dayOfYear: number): FnsDate;
    setHours(hours: number): FnsDate;
    setISODay(day: number): FnsDate;
    setISOWeek(isoWeek: number): FnsDate;
    setISOWeekYear(isoWeekYear: number): FnsDate;
    setMilliseconds(milliseconds: number): FnsDate;
    setMinutes(minutes: number): FnsDate;
    setMonth(month: number): FnsDate;
    setQuarter(quarter: number): FnsDate;
    setSeconds(seconds: number): FnsDate;
    setWeek(week: number): FnsDate;
    setWeekYear(weekYear: number): FnsDate;
    setYear(year: number): FnsDate;
    isAfter(dateToCompare: number | Date): boolean;
    isBefore(dateToCompare: number | Date): boolean;
    isDate(value: any): boolean;
    isEqual(dateToCompare: number | Date): boolean;
    isFirstDayOfMonth(): boolean;
    isFriday(): boolean;
    isFuture(): boolean;
    isLastDayOfMonth(): boolean;
    isLeapYear(): boolean;
    isMonday(): boolean;
    isPast(): boolean;
    isSameDay(dateToCompare: number | Date): boolean;
    isSameHour(dateToCompare: number | Date): boolean;
    isSameISOWeek(dateToCompare: number | Date): boolean;
    isSameISOWeekYear(dateToCompare: number | Date): boolean;
    isSameMinute(dateToCompare: number | Date): boolean;
    isSameMonth(dateToCompare: number | Date): boolean;
    isSameQuarter(dateToCompare: number | Date): boolean;
    isSameSecond(dateToCompare: number | Date): boolean;
    isSameWeek(dateToCompare: number | Date): boolean;
    isSameYear(dateToCompare: number | Date): boolean;
    isSaturday(): boolean;
    isSunday(): boolean;
    isThisHour(): boolean;
    isThisISOWeek(): boolean;
    isThisMinute(): boolean;
    isThisMonth(): boolean;
    isThisQuarter(): boolean;
    isThisSecond(): boolean;
    isThisWeek(): boolean;
    isThisYear(): boolean;
    isThursday(): boolean;
    isToday(): boolean;
    isTomorrow(): boolean;
    isTuesday(): boolean;
    isValid(): boolean;
    isWednesday(): boolean;
    isWeekend(): boolean;
    isWithinInterval(interval: Interval): boolean;
    isYesterday(): boolean;
    differenceInBusinessDays(other: number | Date): number;
    differenceInCalendarDays(other: number | Date): number;
    differenceInCalendarISOWeekYears(other: number | Date): number;
    differenceInCalendarISOWeeks(other: number | Date): number;
    differenceInCalendarMonths(other: number | Date): number;
    differenceInCalendarQuarters(other: number | Date): number;
    differenceInCalendarWeeks(other: number | Date): number;
    differenceInCalendarYears(other: number | Date): number;
    differenceInDays(other: number | Date): number;
    differenceInHours(other: number | Date): number;
    differenceInISOWeekYears(other: number | Date): number;
    differenceInMilliseconds(other: number | Date): number;
    differenceInMinutes(other: number | Date): number;
    differenceInMonths(other: number | Date): number;
    differenceInQuarters(other: number | Date): number;
    differenceInSeconds(other: number | Date): number;
    differenceInWeeks(other: number | Date): number;
    differenceInYears(other: number | Date): number;
    /** 给定的时间间隔是否与另一个时间间隔重叠？相邻间隔不算作重叠 */
    areIntervalsOverlapping(left: Interval, right: Interval): boolean;
    /** 返回数组中与给定日期相比最近的索引 */
    closestIndexTo(datesArray: (number | Date)[]): number;
    /** 从数组中返回最接近当前日期的日期 */
    closestTo(datesArray: (number | Date)[]): Date;
    compareAsc(dateLeft: number | Date, dateRight: number | Date): number;
    compareDesc(dateLeft: number | Date, dateRight: number | Date): number;
    eachDayOfInterval(interval: Interval, step?: number): Date[];
    eachWeekOfInterval(interval: Interval): Date[];
    eachWeekendOfInterval(interval: Interval): Date[];
    eachWeekendOfMonth(): Date[];
    eachWeekendOfYear(): Date[];
    lightFormat(format: string): string;
    max(datesArray: (number | Date)[]): Date;
    min(datesArray: (number | Date)[]): Date;
    /** 十年期的最后一天 */
    lastDayOfDecade(): Date;
    lastDayOfISOWeek(): Date;
    lastDayOfISOWeekYear(): Date;
    lastDayOfMonth(): Date;
    lastDayOfQuarter(): Date;
    lastDayOfWeek(): Date;
    lastDayOfYear(): Date;
    subBusinessDays(amount: number): FnsDate;
    subDays(amount: number): FnsDate;
    subHours(amount: number): FnsDate;
    subISOWeekYears(amount: number): FnsDate;
    subMilliseconds(amount: number): FnsDate;
    subMinutes(amount: number): FnsDate;
    subMonths(amount: number): FnsDate;
    subQuarters(amount: number): FnsDate;
    subSeconds(amount: number): FnsDate;
    subWeeks(amount: number): FnsDate;
    subYears(amount: number): FnsDate;
    toDate(): Date;
    /** 当给定日期正好在最近的两分钟之间时，四舍五入。 */
    roundToNearestMinutes(nearestTo?: number): Date;
    format(format?: string): string;
    formatDistance(baseDate: number | Date): string;
    formatDistanceStrict(baseDate: number | Date): string;
    formatDistanceToNow(): string;
    formatISO(): string;
    formatISO9075(): string;
    formatRFC3339(): string;
    formatRFC7231(): string;
    formatRelative(baseDate: number | Date): string;
    fromUnixTime(unixTime: number): Date;
    parse(dateString: string, formatString: string, options?: IParseOption): Date;
    parseISO(argument: string): Date;
    parseJSON(argument: string | number | Date): Date;
    toString(format?: string): string;
    add(time: string | number): FnsDate;
    sub(time: string | number): FnsDate;
}
export declare function date(datetime?: Date | string | number): FnsDate;
export {};
