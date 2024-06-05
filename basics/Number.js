// to define a number...
// let num = 74;

// or you can define using constructor..
// let num2 = new Number(47);

// ========== Number.isFinite() ==========
// defines whether the number is finite or infinite.
// console.log(Number.isFinite(20));
// console.log(Number.isFinite(1/0));
// console.log(Number.isFinite(1-0));

// ========== Number.isInteger() ==========
// returns the boolean value true if the given value is an integer. Otherwise false.
// console.log(Number.isInteger(10));
// console.log(Number.isInteger(10/2));
// console.log(Number.isInteger(10/3));
// console.log(Number.isInteger(5/10));

// ========== Number.isNaN() ==========
// returns the boolean value true if the given value is a number with value NaN. Otherwise, false.
// console.log(Number.isNaN(10));
// console.log(Number.isNaN(0/0));
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(Number.NaN));

// Difference between Number.isNaN() and global isNaN()
// Number.isNaN() doesn't attempt to convert the parameter to a number, so non-numbers always return false. The following are all false:
// console.log(isNaN("hey"));
// console.log(isNaN("NaN"));
// console.log(isNaN(undefined));
// console.log(isNaN({}));
// console.log(isNaN("blabla"));
// console.log(isNaN(true));
// console.log(isNaN(null));
// console.log(isNaN("37"));
// console.log(isNaN("37.37"));
// console.log(isNaN(""));
// console.log(isNaN(" "));

// ========== Number.isSafeInteger() ==========
// Returns the boolean value true if the given value is a number that is a safe integer. Otherwise false.
// console.log(Number.isSafeInteger(3)); // true
// console.log(Number.isSafeInteger(2 ** 53)); // false
// console.log(Number.isSafeInteger(2 ** 53 - 1)); // true
// console.log(Number.isSafeInteger(NaN)); // false
// console.log(Number.isSafeInteger(Infinity)); // false
// console.log(Number.isSafeInteger("3")); // false
// console.log(Number.isSafeInteger(3.1)); // false
// console.log(Number.isSafeInteger(3.0)); // true

// ========== Number.parseFloat() ==========
// Returns a floating point number parsed from the given string.
// console.log(Number.parseFloat('5'));
// console.log(Number.parseFloat('5.25'));
// console.log(Number.parseFloat('4.567abcdefgh'));
// console.log(Number.parseFloat('abcdefgh'));
// console.log(Number.parseFloat('abc1.254defgh'));
// console.log(Number.parseFloat('abcdefgh4.2645'));
// console.log(Number.parseFloat('3.258a;lksf'));

// ========== Number.parseInt() ==========
// Returns an integer parsed from the given string.
// console.log(Number.parseInt("5"));
// console.log(Number.parseInt("5.25"));
// console.log(Number.parseInt("5.75"));
// console.log(Number.parseInt("5.75a;lsdfkj"));
// console.log(Number.parseInt("lsdfkj"));
// console.log(Number.parseInt("lsdfkj2.25"));

// ========== Number.EPSILON ==========
// The Number.EPSILON static data property represents the difference between 1 and the smallest floating point number greater than 1.

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON);

// for bigger numbers like 10^3
// function equal(x, y, tolerance = Number.EPSILON) {
//     return Math.abs(x - y) < tolerance;
// }

// const x = 1000.1;
// const y = 1000.2;
// const z = 2000.3;
// console.log(equal(x + y, z, 2000 * Number.EPSILON)); // true


// ========== Number.MAX_SAFE_INTEGER ==========
// console.log(Number.MAX_SAFE_INTEGER);

// ========== Number.MAX_VALUE ==========
// console.log(Number.MAX_VALUE)

// ========== Number.MIN_SAFE_INTEGER ==========
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER-1 === Number.MIN_SAFE_INTEGER-2);

// ========== Number.MIN_VALUE ==========
// console.log(Number.MIN_VALUE);

// ========== Number.NaN ==========
// console.log(Number.NaN)

// ========== Number.NEGATIVE_INFINITY ==========
// console.log(Number.NEGATIVE_INFINITY);
// function checkNumber(smallNumber) {
//     if (smallNumber === Number.NEGATIVE_INFINITY) {
//       return 'Process number as -Infinity';
//     }
//     return smallNumber;
//   }
//   console.log(checkNumber(-Number.MAX_VALUE));
// Expected output: -1.7976931348623157e+308
//   console.log(checkNumber(-Number.MAX_VALUE * 2));
// Expected output: "Process number as -Infinity"

// ========== Number.POSITIVE_INFINITY ==========
// console.log(Number.POSITIVE_INFINITY)
// function checkNumber(bigNumber) {
//     if (bigNumber === Number.POSITIVE_INFINITY) {
//         return 'Process number as Infinity';
//     }
//     return bigNumber;
// }

//   console.log(checkNumber(Number.MAX_VALUE));
// Expected output: 1.7976931348623157e+308

//   console.log(checkNumber(Number.MAX_VALUE * 2));
// Expected output: "Process number as Infinity"


// ========== toExponential() =========
// The toExponential() method of Number values returns a string representing this number in exponential notation.
// const numObj = 77.1234;
// console.log(numObj.toExponential()); // 7.71234e+1
// console.log(numObj.toExponential(4)); // 7.7123e+1
// console.log(numObj.toExponential(2)); // 7.71e+1
// console.log((77.1234).toExponential()); // 7.71234e+1
// console.log((77).toExponential()); // 7.7e+1


// Number.toFixed()
// The toFixed() method of Number values formats this number using fixed-point notation.
// let num = 100;
// console.log(num.toFixed(2));

// num = 2.148657
// console.log(num.toFixed(2));

// const numObj = 12345.6789;

// console.log(numObj.toFixed()); // '12346'; rounding, no fractional part
// console.log(numObj.toFixed(1)); // '12345.7'; it rounds up
// console.log(numObj.toFixed(6)); // '12345.678900'; additional zeros
// console.log((1.23e20).toFixed(2)); // '123000000000000000000.00'
// console.log((1.23e-10).toFixed(2)); // '0.00'
// console.log((2.34).toFixed(1)); // '2.3'
// console.log((2.35).toFixed(1)); // '2.4'; it rounds up
// console.log((2.55).toFixed(1)); // '2.5'
// it rounds down as it can't be represented exactly by a float and the
// closest representable float is lower
// console.log((2.449999999999999999).toFixed(1)); // '2.5'
// it rounds up as it's less than Number.EPSILON away from 2.45.
// This literal actually encodes the same number value as 2.45

// console.log((6.02 * 10 ** 23).toFixed(50)); // 6.019999999999999e+23; large numbers still use exponential notation

// ========== .toLocaleString =========
// console.log((10000000).toLocaleString());
// console.log((12345.226699).toLocaleString());

// ========== toPrecision() ==========
// console.log((123.456).toPrecision(4))
// console.log((12.2345678).toPrecision(4))
// console.log((1.86695678).toPrecision(4))

// ========== toString() ==========
// console.log((69).toString())
// console.log((69).toString(2))
// console.log((6699).toString(16));
// console.log((69).toString(8));
// console.log((69).toString(11));
// console.log((69).toString(36));

// ========== valueOf() ==========
// const numObj = new Number(42);
// console.log(typeof numObj);
// Expected output: "object"

// const num = numObj.valueOf();
// console.log(num);
// Expected output: 42

// console.log(typeof num);
// Expected output: "number"
