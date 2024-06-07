// ========== Date ==========
const date = new Date();
// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

// ========== Date() constructor ==========
// The Date() constructor creates Date objects. When called as a function, it returns a string representing the current time.
// const date1 = new Date('December 17, 1995 03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

// const date2 = new Date('1995-12-17T03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

// console.log(date1 === date2);
// Expected output: false

// console.log(date1 - date2);
// Expected output: 0

// Date.now()
// The Date.now() static method returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.
// console.log(Date.now());
// This example takes 2 seconds to run
// const start = Date.now();

// console.log('starting timer...');
// Expected output: "starting timer..."

// const time = Math.floor(Math.random() * 1000);

// setTimeout(() => {
//     const millis = Date.now() - start;

//     console.log(`seconds elapsed = ${Math.floor(millis/100)}`);
//     Expected output: "seconds elapsed = 2"
// }, time);

// ========== Date.parse() ==========
// The Date.parse() static method parses a string representation of a date, and returns the date's timestamp.

// Only the date time string format is explicitly specified to be supported. Other formats are implementation-defined and may not work across all browsers. A library can help if many different formats are to be accommodated.
// const unixTimeZero = Date.parse('01 Jan 1970 00:00:00 GMT');
// const javaScriptRelease = Date.parse('04 Dec 1995 00:12:00 GMT');

// console.log(unixTimeZero);
// Expected output: 0

// console.log(javaScriptRelease);
// Expected output: 818035920000

// ========== Date.UTC() ==========
// The Date.UTC() static method accepts parameters representing the date and time components similar to the Date constructor, but treats them as UTC. It returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
// const date = Date.UTC(2024, 5, 7, 3, 17, 55);
// console.log(date);

// ========== Date.prototype[@@toPrimitive]() ==========
// The [@@toPrimitive]() method of Date instances returns a primitive value representing this date. It may either be a string or a number, depending on the hint given.
// Depending on timezone, your results will vary
// const date = new Date('20 December 2019 14:48');

// console.log(date[Symbol.toPrimitive]('string'));
// Expected output: "Fri Dec 20 2019 14:48:00 GMT+0530 (India Standard Time)"

// console.log(date[Symbol.toPrimitive]('number'));
// Expected output: 1576833480000

// ========== Date.prototype.getDate() ==========
// The getDate() method of Date instances returns the day of the month for this date according to local time.
// const birthday = new Date('August 19, 1975 23:15:30');
// const date1 = birthday.getDate();
// const date = new Date();
// const todayDate = date.getDate();
// console.log(date1, todayDate);

// ========== Date.prototype.getDay() ==========
// The getDay() method of Date instances returns the day of the week for this date according to local time, where 0 represents Sunday. For the day of the month, see Date.prototype.getDate().
// const date = new Date();
// console.log(date.getDay());

// Date.prototype.getFullYear()
// The getFullYear() method of Date instances returns the year for this date according to local time.
// Use this method instead of the getYear() method.
// const moonLanding = new Date('July 20, 69 00:20:18');

// console.log(moonLanding.getFullYear());
// Expected output: 1969

// ========== Date.prototype.getHours() ==========
// The getHours() method of Date instances returns the hours for this date according to local time.
// console.log(date.getHours());

// ========== Date.prototype.getMilliseconds() ==========
// The getMilliseconds() method of Date instances returns the milliseconds for this date according to local time.
// console.log(date.getMilliseconds());

// ========== Date.prototype.getMinutes() ==========
// The getMinutes() method of Date instances returns the minutes for this date according to local time.
// console.log(date.getMinutes());

// ========== Date.prototype.getMonth() ==========
// The getMonth() method of Date instances returns the month for this date according to local time, as a zero-based value (where zero indicates the first month of the year).
// console.log(date.getMonth());

// ========== Date.prototype.getSeconds() ==========
// The getSeconds() method of Date instances returns the seconds for this date according to local time.
// console.log(date.getSeconds());

// ========== Date.prototype.getTime() ==========
// The getTime() method of Date instances returns the number of milliseconds for this date since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.
// console.log(date.getTime());

// ========== Date.prototype.getTimezoneOffset() ==========
// The getTimezoneOffset() method of Date instances returns the difference, in minutes, between this date as evaluated in the UTC time zone, and the same date as evaluated in the local time zone.
// console.log(date.getTimezoneOffset());

// ========== Date.prototype.getUTCDate() ==========
// The getUTCDate() method of Date instances returns the day of the month for this date according to universal time.
// console.log(date.getUTCDate());

// Date.prototype.getUTCDay()
// The getUTCDay() method of Date instances returns the day of the week for this date according to universal time, where 0 represents Sunday.
// console.log(date.getUTCDay());

// ========== Date.prototype.getUTCFullYear() ==========
// The getUTCFullYear() method of Date instances returns the year for this date according to universal time.
// const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
// const date2 = new Date('December 31, 1975, 23:15:30 GMT-11:00');

// console.log(date1.getUTCFullYear());
// Expected output: 1975

// console.log(date2.getUTCFullYear());
// Expected output: 1976

// ========== Date.prototype.getUTCHours() ==========
// The getUTCHours() method of Date instances returns the hours for this date according to universal time.
// const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
// const date2 = new Date('December 31, 1975, 23:15:30 GMT-11:00');

// console.log(date1.getUTCHours());
// Expected output: 12

// console.log(date2.getUTCHours());
// Expected output: 10

// ========== Date.prototype.getUTCMilliseconds() ==========
// The getUTCMilliseconds() method of Date instances returns the milliseconds for this date according to universal time.
// const exampleDate = new Date('2018-01-02T03:04:05.678Z'); // 2 January 2018, 03:04:05.678 (UTC)

// console.log(exampleDate.getUTCMilliseconds());
// Expected output: 678

// ========== Date.prototype.getUTCMinutes() ==========
// The getUTCMinutes() method of Date instances returns the minutes for this date according to universal time.
// const date1 = new Date('1 January 2000 03:15:30 GMT+07:00');
// const date2 = new Date('1 January 2000 03:15:30 GMT+03:30');

// console.log(date1.getUTCMinutes()); // 31 Dec 1999 20:15:30 GMT
// Expected output: 15

// console.log(date2.getUTCMinutes()); // 31 Dec 1999 23:45:30 GMT
// Expected output: 45

// ========== Date.prototype.getUTCMonth() ==========
// The getUTCMonth() method of Date instances returns the month for this date according to universal time, as a zero-based value (where zero indicates the first month of the year).
// const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
// const date2 = new Date('December 31, 1975, 23:15:30 GMT-11:00');

// December
// console.log(date1.getUTCMonth());
// Expected output: 11

// January
// console.log(date2.getUTCMonth());
// Expected output: 0

// ========== Date.prototype.getUTCSeconds() ==========
// The getUTCSeconds() method of Date instances returns the seconds in the specified date according to universal time.
// const moonLanding = new Date('July 20, 1969, 20:18:04 UTC');

// console.log(moonLanding.getUTCSeconds());
// Expected output: 4

// ========== Date.prototype.setDate() ==========
// The setDate() method of Date instances changes the day of the month for this date according to local time.
// const event = new Date('August 19, 1975 23:15:30');

// event.setDate(24);

// console.log(event.getDate());
// Expected output: 24

// event.setDate(32);
// Only 31 days in August!

// console.log(event.getDate());
// Expected output: 1

// ========== Date.prototype.setFullYear() ==========
// The setFullYear() method of Date instances changes the year, month, and/or day of month for this date according to local time.
// const event = new Date('August 19, 1975 23:15:30');

// event.setFullYear(1969);

// console.log(event.getFullYear());
// Expected output: 1969

// event.setFullYear(0);

// console.log(event.getFullYear());
// Expected output: 0

// ========== Date.prototype.setHours() ==========
// The setHours() method of Date instances changes the hours, minutes, seconds, and/or milliseconds for this date according to local time.
// const event = new Date('August 19, 1975 23:15:30');
// event.setHours(20);

// console.log(event);
// Expected output: "Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary

// event.setHours(20, 21, 22);

// console.log(event);
// Expected output: "Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)"

// ========== Date.prototype.setMilliseconds() ==========
// The setMilliseconds() method of Date instances changes the milliseconds for this date according to local time.
// const event = new Date('August 19, 1975 23:15:30');

// console.log(event.getMilliseconds());
// Expected output: 0

// event.setMilliseconds(456);

// console.log(event.getMilliseconds());
// Expected output: 456

// ========== Date.prototype.setMinutes() ==========
// The setMinutes() method of Date instances changes the minutes for this date according to local time.
// const event = new Date('August 19, 1975 23:15:30');

// event.setMinutes(45);

// console.log(event.getMinutes());
// Expected output: 45

// console.log(event);
// Expected output: "Tue Aug 19 1975 23:45:30 GMT+0200 (CEST)"
// Note: your timezone may vary

// ========== Date.prototype.setMonth() ==========
// The setMonth() method of Date instances changes the month and/or day of the month for this date according to local time.
// const event = new Date('August 19, 1975 23:15:30');

// event.setMonth(3);

// console.log(event.getMonth());
// Expected output: 3

// console.log(event);
// Expected output: "Sat Apr 19 1975 23:15:30 GMT+0100 (CET)"
// Note: your timezone may vary

// ========== Date.prototype.setSeconds() ==========
// The setSeconds() method of Date instances changes the seconds and/or milliseconds for this date according to local time.
// const event = new Date('August 19, 1975 23:15:30');

// event.setSeconds(42);

// console.log(event.getSeconds());
// Expected output: 42

// console.log(event);
// Expected output: "Sat Apr 19 1975 23:15:42 GMT+0100 (CET)"
// Note: your timezone may vary

// ========== Date.prototype.setTime() ==========
// The setTime() method of Date instances changes the timestamp for this date, which is the number of milliseconds since the epoch, defined as the midnight at the beginning of January 1, 1970, UTC.
// const launchDate = new Date('July 1, 1999, 12:00:00');
// const futureDate = new Date();
// futureDate.setTime(launchDate.getTime());

// console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:00:00 GMT+0200 (CEST)"

// const fiveMinutesInMillis = 5 * 60 * 1000;
// futureDate.setTime(futureDate.getTime() + fiveMinutesInMillis);

// console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:05:00 GMT+0200 (CEST)"
// Note: your timezone may vary

// ========== Date.prototype.setUTCDate() ==========
// The setUTCDate() method of Date instances changes the day of the month for this date according to universal time.
// const event = new Date('August 19, 1975 23:15:30 GMT-3:00');

// console.log(event.getUTCDate());
// Expected output: 20

// event.setUTCDate(19);

// console.log(event.getUTCDate());
// Expected output: 19

// ========== Date.prototype.setUTCFullYear() ==========
// The setUTCFullYear() method of Date instances changes the year for this date according to universal time.
// const event = new Date('December 31, 1975 23:15:30 GMT-3:00');

// console.log(event.getUTCFullYear());
// Expected output: 1976

// console.log(event.toUTCString());
// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"

// event.setUTCFullYear(1975);

// console.log(event.toUTCString());
// Expected output: "Wed, 01 Jan 1975 02:15:30 GMT"

// ========== Date.prototype.setUTCHours() ==========
// The setUTCHours() method of Date instances changes the hours, minutes, seconds, and/or milliseconds for this date according to universal time.
// const event = new Date('August 19, 1975 23:15:30 GMT-3:00');

// console.log(event.toUTCString());
// Expected output: "Wed, 20 Aug 1975 02:15:30 GMT"

// console.log(event.getUTCHours());
// Expected output: 2

// event.setUTCHours(23);

// console.log(event.toUTCString());
// Expected output: "Wed, 20 Aug 1975 23:15:30 GMT"

// ========== Date.prototype.setUTCMilliseconds() ==========
// The setUTCMilliseconds() method of Date instances changes the milliseconds for this date according to universal time.
// const date1 = new Date('2018-01-24T12:38:29.069Z');

// console.log(date1.getUTCMilliseconds());
// Expected output: 69

// date1.setUTCMilliseconds(420);

// console.log(date1.getUTCMilliseconds());
// Expected output: 420

// ========== Date.prototype.setUTCMinutes() ==========
// The setUTCMinutes() method of Date instances changes the minutes for this date according to universal time.
// const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');

// console.log(date1.getUTCMinutes());
// Expected output: 15

// date1.setUTCMinutes(25);

// console.log(date1.getUTCMinutes());
// Expected output: 25

// ========== Date.prototype.setUTCMonth() ==========
// The setUTCMonth() method of Date instances changes the month and/or day of the month for this date according to universal time.
// const event = new Date('December 31, 1975 23:15:30 GMT-3:00');

// console.log(event.toUTCString());
// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"

// console.log(event.getUTCMonth());
// Expected output: 0

// event.setUTCMonth(11);

// console.log(event.toUTCString());
// Expected output: "Wed, 01 Dec 1976 02:15:30 GMT"

// ========== Date.prototype.setUTCSeconds() ==========
// The setUTCSeconds() method of Date instances changes the seconds and/or milliseconds for this date according to universal time.
// const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');

// console.log(date1.getUTCSeconds());
// Expected output: 30

// date1.setUTCSeconds(39);

// console.log(date1.getUTCSeconds());
// Expected output: 39

// ========== Date.prototype.toDateString() ==========
// The toDateString() method of Date instances returns a string representing the date portion of this date interpreted in the local timezone.
// console.log(date.toDateString());

// ========== Date.prototype.toISOString() ==========
// The toISOString() method of Date instances returns a string representing this date in the date time string format, a simplified format based on ISO 8601, which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively). The timezone is always UTC, as denoted by the suffix Z.
// console.log(date.toISOString());

// ========== Date.prototype.toJSON() ==========
// The toJSON() method of Date instances returns a string representing this date in the same ISO format as toISOString().
// console.log(date.toJSON())

// ========== Date.prototype.toLocaleDateString() ==========
// The toLocaleDateString() method of Date instances returns a string with a language-sensitive representation of the date portion of this date in the local timezone. In implementations with Intl.DateTimeFormat API support, this method simply calls Intl.DateTimeFormat.
// Every time toLocaleString is called, it has to perform a search in a big database of localization strings, which is potentially inefficient. When the method is called many times with the same arguments, it is better to create a Intl.DateTimeFormat object and use its format() method, because a DateTimeFormat object remembers the arguments passed to it and may decide to cache a slice of the database, so future format calls can search for localization strings within a more constrained context.
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleDateString('en-US'));
// console.log(date.toLocaleDateString('en-IN',{
//     weekday: "long",
//     year: "2-digit",
//     month: "long",
//     day: "numeric"
// }));

// ========== Date.prototype.toLocaleString() ==========
// The toLocaleString() method of Date instances returns a string with a language-sensitive representation of this date in the local timezone. In implementations with Intl.DateTimeFormat API support, this method simply calls Intl.DateTimeFormat.
// console.log(date.toLocaleString());
// console.log(date.toLocaleString('en-US'));
// console.log(date.toLocaleString('en-US', {timeZone: 'UTC'}));

// ========== Date.prototype.toLocaleTimeString() ==========
// The toLocaleTimeString() method of Date instances returns a string with a language-sensitive representation of the time portion of this date in the local timezone. In implementations with Intl.DateTimeFormat API support, this method simply calls Intl.DateTimeFormat.
// console.log(date.toLocaleString());
// console.log(date.toLocaleString('en-IN'));
// console.log(date.toLocaleString('en-US'));

// ========= Date.prototype.toString() =========
// The toString() method of Date instances returns a string representing this date interpreted in the local timezone.
// console.log(date.toString());

// ========= Date.prototype.toTimeString() =========
// The toTimeString() method of Date instances returns a string representing the time portion of this date interpreted in the local timezone.
// console.log(date.toTimeString());

// ========= Date.prototype.toUTCString() =========
// The toUTCString() method of Date instances returns a string representing this date in the RFC 7231 format, with negative years allowed. The timezone is always UTC. toGMTString() is an alias of this method.
// console.log(date.toUTCString());

// ========= Date.prototype.valueOf() =========
// The valueOf() method of Date instances returns the number of milliseconds for this date since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.
// console.log(date.valueOf());