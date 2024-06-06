// ========== Math ==========
// The Math namespace object contains static properties and methods for mathematical constants and functions.

// Math works with the Number type. It doesn't work with BigInt.

// Description
// Unlike most global objects, Math is not a constructor. You cannot use it with the new operator or invoke the Math object as a function. All properties and methods of Math are static.

// ========== Math.abs() ==========
// The Math.abs() static method returns the absolute value of a number.
// console.log(Math.abs(2-8));
// console.log(Math.abs(10-8));

// ========== Math.acos() ==========
// The Math.acos() static method returns the inverse cosine (in radians) of a number. That is,
// ∀𝑥∊[−1,1],𝙼𝚊𝚝𝚑.𝚊𝚌𝚘𝚜(𝚡)=arccos(𝑥)=the unique 𝑦∊[0,𝜋]such that cos(𝑦)=𝑥
// Calculates angle of a right-angle triangle in radians
// function calcAngle(adjacent, hypotenuse) {
//     return Math.acos(adjacent / hypotenuse);
// }

// console.log(calcAngle(8, 10));
// Expected output: 0.6435011087932843

// console.log(calcAngle(5, 3));
// Expected output: NaN

// ========== Math.acosh() ==========
// The Math.acosh() static method returns the inverse hyperbolic cosine of a number. That is,
// ∀𝑥≥1,𝙼𝚊𝚝𝚑.𝚊𝚌𝚘𝚜𝚑(𝚡)=arcosh(𝑥)=the unique 𝑦≥0 such that cosh(𝑦)=𝑥=ln(𝑥+𝑥2−1)
// console.log(Math.acosh(0.999999999999));
// Expected output: NaN

// console.log(Math.acosh(1));
// Expected output: 0

// console.log(Math.acosh(2));
// Expected output: 1.3169578969248166

// console.log(Math.acosh(2.5));
// Expected output: 1.566799236972411

// ========== Math.asin() ==========
// The Math.asin() static method returns the inverse sine (in radians) of a number. That is,
// ∀𝑥∊[−1,1],𝙼𝚊𝚝𝚑.𝚊𝚜𝚒𝚗(𝚡)=arcsin(𝑥)=the unique 𝑦∊[−𝜋2,𝜋2] such that sin(𝑦)=𝑥
// Calculates angle of a right-angle triangle in radians
// function calcAngle(opposite, hypotenuse) {
//     return Math.asin(opposite / hypotenuse);
//   }

//   console.log(calcAngle(6, 10));
// Expected output: 0.6435011087932844

//   console.log(calcAngle(5, 3));
// Expected output: NaN

//   ========== Math.asinh() ==========
//   The Math.asinh() static method returns the inverse hyperbolic sine of a number. That is,
//   𝙼𝚊𝚝𝚑.𝚊𝚜𝚒𝚗𝚑(𝚡)=arsinh(𝑥)=the unique 𝑦 such that sinh(𝑦)=𝑥=ln(𝑥+𝑥2+1)
// console.log(Math.asinh(1));
// Expected output: 0.881373587019543

// console.log(Math.asinh(0));
// Expected output: 0

// console.log(Math.asinh(-1));
// Expected output: -0.881373587019543

// console.log(Math.asinh(2));
// Expected output: 1.4436354751788103

// ========== Math.atan() ==========
// The Math.atan() static method returns the inverse tangent (in radians) of a number, that is
// 𝙼𝚊𝚝𝚑.𝚊𝚝𝚊𝚗(𝚡)=arctan(𝑥)=the unique 𝑦∊[−𝜋2,𝜋2] such that tan(𝑦)=𝑥
// Calculates angle of a right-angle triangle in radians
// function calcAngle(opposite, adjacent) {
//     return Math.atan(opposite / adjacent);
// }

// console.log(calcAngle(8, 10));
// Expected output: 0.6747409422235527

// console.log(calcAngle(5, 3));
// Expected output: 1.0303768265243125

// ========== Math.atan2() ==========
// The Math.atan2() static method returns the angle in the plane (in radians) between the positive x-axis and the ray from (0, 0) to the point (x, y), for Math.atan2(y, x).

// function calcAngleDegrees(x, y) {
//     return (Math.atan2(y, x) * 180) / Math.PI;
// }

// console.log(calcAngleDegrees(5, 5));
// Expected output: 45

// console.log(calcAngleDegrees(10, 10));
// Expected output: 45

// console.log(calcAngleDegrees(0, 10));
// Expected output: 90

// ========== Math.atanh() ==========
// The Math.atanh() static method returns the inverse hyperbolic tangent of a number. That is,
// ∀𝑥∊(−1,1),𝙼𝚊𝚝𝚑.𝚊𝚝𝚊𝚗𝚑(𝚡)=artanh(𝑥)=the unique 𝑦 such that tanh(𝑦)=𝑥=12ln(1+𝑥1−𝑥)
// console.log(Math.atanh(-1));
// Expected output: -Infinity

// console.log(Math.atanh(0));
// Expected output: 0

// console.log(Math.atanh(0.5));
// Expected output: 0.549306144334055 (approximately)

// console.log(Math.atanh(1));
// Expected output: Infinity

// ========== Math.cbrt() ==========
// The Math.cbrt() static method returns the cube root of a number
// console.log(Math.cbrt(-1));
// Expected output: -1

// console.log(Math.cbrt(1));
// Expected output: 1

// console.log(Math.cbrt(Infinity));
// Expected output: Infinity

// console.log(Math.cbrt(64));
// Expected output: 4

// Math.ceil()
// The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.
// console.log(Math.ceil(0.95));
// Expected output: 1

// console.log(Math.ceil(4));
// Expected output: 4

// console.log(Math.ceil(7.004));
// Expected output: 8

// console.log(Math.ceil(-7.004));
// Expected output: -7

// Math.clz32()
// The Math.clz32() static method returns the number of leading zero bits in the 32-bit binary representation of a number.
// 00000000000000000000000000000001
// console.log(Math.clz32(1));
// Expected output: 31

// 00000000000000000000000000000100
// console.log(Math.clz32(4));
// Expected output: 29

// 00000000000000000000001111101000
// console.log(Math.clz32(1000));
// Expected output: 22

// ========== Math.cos() ==========
// The Math.cos() static method returns the cosine of a number in radians.
// function getCircleX(radians, radius) {
//     return Math.cos(radians) * radius;
// }

// console.log(getCircleX(1, 10));
// Expected output: 5.403023058681398

// console.log(getCircleX(2, 10));
// Expected output: -4.161468365471424

// console.log(getCircleX(Math.PI, 10));
// Expected output: -10

// ========== Math.cosh() ==========
// The Math.cosh() static method returns the hyperbolic cosine of a number.
// console.log(Math.cosh(0));
// Expected output: 1

// console.log(Math.cosh(1));
// Expected output: 1.543080634815244 (approximately)

// console.log(Math.cosh(-1));
// Expected output: 1.543080634815244 (approximately)

// console.log(Math.cosh(2));
// Expected output: 3.7621956910836314

// ========== Math.exp() ==========
// The Math.exp() static method returns e raised to the power of a number. 
// console.log(Math.exp(0));
// Expected output: 1

// console.log(Math.exp(1));
// Expected output: 2.718281828459 (approximately)

// console.log(Math.exp(-1));
// Expected output: 0.36787944117144233

// console.log(Math.exp(2));
// Expected output: 7.38905609893065

// ========== Math.expm1() ==========
// The Math.expm1() static method returns e raised to the power of a number, subtracted by 1.
// console.log(Math.expm1(0));
// Expected output: 0

// console.log(Math.expm1(1));
// Expected output: 1.718281828459045

// console.log(Math.expm1(-1));
// Expected output: -0.6321205588285577

// console.log(Math.expm1(2));
// Expected output: 6.38905609893065

// ========== Math.f16round() ==========
// The Math.f16round() static method returns the nearest 16-bit half precision float representation of a number.
// console.log(Math.f16round(5.5));
// Expected output: 5.5

// console.log(Math.f16round(5.05));
// Expected output: 5.05078125

// console.log(Math.f16round(5));
// Expected output: 5

// console.log(Math.f16round(-5.05));
// Expected output: -5.05078125

// ========== Math.floor() ==========
// The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
// console.log(Math.floor(5.95));
// Expected output: 5

// console.log(Math.floor(5.05));
// Expected output: 5

// console.log(Math.floor(5));
// Expected output: 5

// console.log(Math.floor(-5.05));
// Expected output: -6

// ========== Math.fround() ==========
// The Math.fround() static method returns the nearest 32-bit single precision float representation of a number.
// console.log(Math.fround(5.5));
// Expected output: 5.5

// console.log(Math.fround(5.05));
// Expected output: 5.050000190734863

// console.log(Math.fround(5));
// Expected output: 5

// console.log(Math.fround(-5.05));
// Expected output: -5.050000190734863

// ========== Math.hypot() ==========
// The Math.hypot() static method returns the square root of the sum of squares of its arguments. 
// or we can say, calculates the hypotenious
// console.log(Math.hypot(3, 4));
// Expected output: 5

// console.log(Math.hypot(5, 12));
// Expected output: 13

// console.log(Math.hypot(3, 4, 5));
// Expected output: 7.0710678118654755

// console.log(Math.hypot(-5));
// Expected output: 5

// ========== Math.imul() ==========
// The Math.imul() static method returns the result of the C-like 32-bit multiplication of the two parameters.
// console.log(Math.imul(3, 4));
// Expected output: 12

// console.log(Math.imul(-5, 12));
// Expected output: -60

// console.log(Math.imul(0xffffffff, 5));
// Expected output: -5

// console.log(Math.imul(0xfffffffe, 5));
// Expected output: -10

// ========== Math.log() ==========
// The Math.log() static method returns the natural logarithm (base e) of a number.
// console.log(Math.log(5));
// console.log(Math.log(2));
// console.log(Math.log(2.5));
// console.log(Math.log(-5));

// ========== Math.log10() ==========
// The Math.log10() static method returns the base 10 logarithm of a number.
// console.log(Math.log10(100000));
// Expected output: 5

// console.log(Math.log10(2));
// Expected output: 0.3010299956639812

// console.log(Math.log10(1));
// Expected output: 0

// console.log(Math.log10(0));
// Expected output: -Infinity

// ========== Math.log1p() ==========
// The Math.log1p() static method returns the natural logarithm (base e) of 1 + x, where x is the argument.
// console.log(Math.log1p(1));
// Expected output: 0.6931471805599453

// console.log(Math.log1p(0));
// Expected output: 0

// console.log(Math.log1p(-1));
// Expected output: -Infinity

// console.log(Math.log1p(-2));
// Expected output: NaN

// ========== Math.log2() ==========
// The Math.log2() static method returns the base 2 logarithm of a number.
// console.log(Math.log2(3));
// Expected output: 1.584962500721156

// console.log(Math.log2(2));
// Expected output: 1

// console.log(Math.log2(1));
// Expected output: 0

// console.log(Math.log2(0));
// Expected output: -Infinity

// ========== Math.max() ==========
// The Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
// console.log(Math.max(1, 3, 2));
// Expected output: 3

// console.log(Math.max(-1, -3, -2));
// Expected output: -1

// const array1 = [1, 3, 2];

// console.log(Math.max(...array1));
// Expected output: 3

// ========== Math.min() ==========
// The Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.
// console.log(Math.min(2, 3, 1));
// Expected output: 1

// console.log(Math.min(-2, -3, -1));
// Expected output: -3

// const array1 = [2, 3, 1];

// console.log(Math.min(...array1));
// Expected output: 1

// ========== Math.pow() ==========
// The Math.pow() static method returns the value of a base raised to a power. 
// console.log(Math.pow(7, 3));
// Expected output: 343

// console.log(Math.pow(4, 0.5));
// Expected output: 2

// console.log(Math.pow(7, -2));
// Expected output: 0.02040816326530612
//                  (1/49)

// console.log(Math.pow(-7, 0.5));
// Expected output: NaN

// ========== Math.random() ==========
// The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
// console.log(Math.random());

// ========== Math.round() ==========
// The Math.round() static method returns the value of a number rounded to the nearest integer.
// console.log(Math.round(0.9));
// Expected output: 1

// console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// Expected output: 6 6 5

// console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// Expected output: -5 -5 -6

// ========== Math.sign() ==========
// The Math.sign() static method returns 1 or -1, indicating the sign of the number passed as argument. If the input is 0 or -0, it will be returned as-is.
// console.log(Math.sign(3));
// Expected output: 1

// console.log(Math.sign(-3));
// Expected output: -1

// console.log(Math.sign(0));
// Expected output: 0

// console.log(Math.sign('-3'));
// Expected output: -1

// ========== Math.sin() ==========
// The Math.sin() static method returns the sine of a number in radians.
// console.log(Math.sin(5));
// console.log(Math.sin(10));
// console.log(Math.sin(-10));
// console.log(Math.sin(Math.PI));

// ========== Math.sinh() ==========
// The Math.sinh() static method returns the hyperbolic sine of a number. 
// console.log(Math.sinh(0));
// Expected output: 0

// console.log(Math.sinh(1));
// Expected output: 1.1752011936438014

// console.log(Math.sinh(-1));
// Expected output: -1.1752011936438014

// console.log(Math.sinh(2));
// Expected output: 3.626860407847019

// ========== Math.sqrt() ==========
// The Math.sqrt() static method returns the square root of a number. 
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(16));
// console.log(Math.sqrt(9));
// console.log(Math.sqrt(4));

// ========== Math.tan() ==========
// The Math.tan() static method returns the tangent of a number in radians.
// console.log(Math.tan(5));
// console.log(Math.tan(10));
// console.log(Math.tan(15));
// console.log(Math.tan(20));

// ========== Math.tanh() ==========
// The Math.tanh() static method returns the hyperbolic tangent of a number.
// console.log(Math.tanh(-1));
// Expected output: -0.7615941559557649

// console.log(Math.tanh(0));
// Expected output: 0

// console.log(Math.tanh(Infinity));
// Expected output: 1

// console.log(Math.tanh(1));
// Expected output: 0.7615941559557649

// ========== Math.trunc() ==========
// The Math.trunc() static method returns the integer part of a number by removing any fractional digits.
// console.log(Math.trunc(13.37));
// Expected output: 13

// console.log(Math.trunc(42.84));
// Expected output: 42

// console.log(Math.trunc(0.123));
// Expected output: 0

// console.log(Math.trunc(-0.123));
// Expected output: -0

// ========== Math.E ==========
// The Math.E static data property represents Euler's number, the base of natural logarithms, e, which is approximately 2.718.
// console.log(Math.E);

// ========== Math.LN10 ==========
// The Math.LN10 static data property represents the natural logarithm of 10, approximately 2.302.
// console.log(Math.LN10);

// ========== Math.LN2 ==========
// The Math.LN2 static data property represents the natural logarithm of 2, approximately 0.693:
// console.log(Math.LN2);

// ========== Math.LOG10E ==========
// The Math.LOG10E static data property represents the base 10 logarithm of e, approximately 0.434.
// console.log(Math.LOG10E);

// ========== Math.LOG2E ==========
// The Math.LOG2E static data property represents the base 2 logarithm of e, approximately 1.442.
// console.log(Math.LOG2E);

// ========== Math.PI ==========
// The Math.PI static data property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159.
// console.log(Math.PI);

// ========== Math.SQRT1_2 ==========
// The Math.SQRT1_2 static data property represents the square root of 1/2, which is approximately 0.707.
// console.log(Math.SQRT1_2);

// ========== Math.SQRT2 ==========
// The Math.SQRT2 static data property represents the square root of 2, approximately 1.414.
// console.log(Math.SQRT2);