let arr = [1, 2, 3, 4, true, "hello", null, undefined];
const str = "Prince Singh Chouhan";
const obj = {
    1: "prince",
    2: "singh",
    3: "chouhan"
}
let myArray = [1, 2, 3, 4, 5];
let strArr = ["hello", "world", "!"];

// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
console.log(arr, arr.length);
arr.push(69);
console.log(arr, arr.length);
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
console.log(arr["one"]); // undefined
console.log(arr[2]); // 3

// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
console.log(arr[0]) // 1
console.log(arr[arr.length - 1]) // 69

// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
const arrOne = [1, 2, 3, 4];
const arrTwo = arrOne;

console.log(arrOne, arrTwo); // [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

arrTwo[0] = 69;
console.log(arrOne); // [ 69, 2, 3, 4 ]

arrOne[3] = 69;
console.log(arrTwo); // [ 69, 2, 3, 69 ]

// ========== Constructor ==========
const myArr = new Array(1, 2, 3, 4, 5);
console.log(myArr); // [ 1, 2, 3, 4, 5 ]

// ========== Array.from() ========== [creates a new Shallow copy instance]

// Array.from(ArrayLike);
console.log(Array.from(str)) // [ 'P', 'r', 'i', 'n', 'c', 'e', ' ', 'S', 'i', 'n', 'g', 'h', ' ', 'C', 'h', 'o', 'u', 'h', 'a', 'n' ]

// Array.from(ArrayLike, Mapfn);
console.log(Array.from(str, char => char + "bruh")); // ['Pbruh', 'rbruh', 'ibruh','nbruh', 'cbruh', 'ebruh',' bruh', 'Sbruh', 'ibruh','nbruh', 'gbruh', 'hbruh',' bruh', 'Cbruh', 'hbruh','obruh', 'ubruh', 'hbruh','abruh', 'nbruh']

Array.from(str, (elem, index) => {
    console.log(elem, index);
});

console.log(Array.from({ length: 5 }, (e, i) => {
    e = i + 1;
    return e;
}));

// ========== Array.isArray() ========== [returns boolean on is array or not];
console.log(Array.isArray(str));
console.log(Array.isArray(arr));

// ========== Array.of() ========== [creates a new arr instance from a variable no. of args]
console.log(Array.of(1, 2, 3, 4));
{
    let arr = Array.of("yo", "bro");
    console.log(arr);
}
console.log(Array.of(7));

// ========== Array[@@iterator] ==========
console.log(arr[Symbol.iterator]());
let iterator = arr[Symbol.iterator]()
for (let value of iterator) {
    console.log(value);
}

// ========== .at() ==========
console.log(myArray.at(0));
console.log(myArray.at(2));
console.log(myArray.at(-2));

// ========== .concat() ==========
console.log(myArray.concat([1, 1, 1, 1]));

// ========== .copyWithin() ========== (changes the origial array)
console.log(myArray.copyWithin(0, 2)); // [ 3, 4, 5, 4, 5 ]
console.log(myArray); // [ 3, 4, 5, 4, 5 ]

myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArray.copyWithin(1, 6)); // [ 1, 7, 8, 9, 10, 6, 7, 8, 9, 10 ]

myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArray.copyWithin(2, 6, 8));  // [ 1, 2, 7, 8,  5, 6, 7, 8, 9, 10]

// ========== .entries() ========== [returns key value pairs]
myArray = [1, 2, 3, 4, 5];

console.log(myArray.entries()); // Object [Array Iterator] {}

for (let [value, key] of myArray.entries()) {
    console.log([value, key]);
}

// ========== .every() ========== [returns true if every element follows condition, otherwise false]
console.log(myArray.every(e => e < 10));
console.log(myArray.every(e => !Number.isNaN(e)));
console.log(myArray.every(e => Number.isFinite(e)));
console.log(myArray.every(e => e > 2));

// ========== .fill() ========== [creates a shallow copy]
// fill(value)
// fill(value, start)
// fill(value, start, end)

// fill 0
console.log(myArray.fill(0)); // [ 0, 0, 0, 0, 0 ]

// fill 7 from index 2
console.log(myArray.fill(7, 2)); // [ 0, 0, 7, 7, 7 ]

// fill 69 from index 2 to index 4 (5 excluded)
console.log(myArray.fill(69, 2, 4)) // [ 0, 0, 69, 69, 7 ]

// ========== .filter() ========== [creates a shallow copy of elems which pass condition]
myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArray);

console.log(myArray.filter((elem => elem % 2 == 0)));
console.log(myArray);

let filtered = myArray.filter(elem => elem > 5);
console.log(filtered);
console.log(myArray);

// ========== .find() ========== [find first element which satisfies the condition]
console.log(myArray.find(elem => {
    let i;
    for (i = 2; i < elem; i++) {
        if (elem % i === 0) {
            break;
        }
    }
    if (i === elem) {
        return elem
    }
}));

// ========== .findIndex() ========== [find index of the first element which satisfies the condition]
console.log(myArray.findIndex(elem => elem > 7));

// ========== .findLast() ========== [do as same as find() but from behind,  or we can say in reverse]
console.log(myArray.findLast(elem => elem % 2 === 0));

// ========== .findLastIndex() ========== [do as same as findIndex() but from behind,  or we can say in reverse]
console.log(myArray.findLastIndex(elem => elem % 2 === 0));

// ========== .flat() ==========
// flat()
// flat(depth)

let recurssiveArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10, [11, 12, [13, 14, [15, 16, [17, 18, [19, 20, [21]]]]]]]]]]];
console.log(recurssiveArray); //[ 1, 2, [ 3, 4, [ 5, 6, [Array] ] ] ]

console.log(recurssiveArray.flat());

// dont change original array
console.log(recurssiveArray);

console.log(recurssiveArray.flat(1));
console.log(recurssiveArray.flat(3));
console.log(recurssiveArray.flat(7));
console.log(recurssiveArray.flat(Infinity));

// ========== .flatMap() ========== [identical to map(), flat by one level]
myArray = [1, 2, 3, 4, 5];

console.log(myArray.flatMap((elem) => {
    if (elem === 2) {
        return [elem * 10, elem * 100];
    }
    else {
        return elem * 2;
    }
}));

// ========== .forEach() ==========
myArray.forEach(elem => console.log(elem));

// ========== .includes() ==========
console.log(myArray.includes(2));

// ========== .indexOf() ==========
console.log(myArray.indexOf(5));
console.log(myArray.indexOf(69));

// ========== .join() ==========
console.log(strArr.join(""));
console.log(strArr.join(" "));
console.log(strArr.join("-"));
console.log(strArr.join("-"));

// ========== .keys() ==========
console.log(strArr.keys());

let iter = myArray.keys();
for (let key of iter) {
    console.log(key);
}

// ========== .lastIndexOf() ==========
myArray = [1, 3, 12, 3, 2, 3, 1, 3, 2, 3, 1]
console.log(myArray.lastIndexOf(2));
console.log(myArray.lastIndexOf(69));

// ========== .map() ==========
myArray = [1, 2, 3, 4, 5]
myArray.map((elem, index, arr) => {
    console.log(elem, index, arr);
});

// ========== .pop() ==========
console.log(myArray);
let popped = myArray.pop();

console.log(popped);
console.log(myArray);

// ========== .push() ==========
myArray.push(5);
console.log(myArray);

// ========== .reduce() ==========
console.log(myArray.reduce((accumulator, current) => accumulator * current, 1));
console.log(myArray.reduce((accumulator, current) => accumulator + current, 0));
console.log(myArray.reduce((accumulator, current) => accumulator / current, 1));
console.log(myArray.reduce((accumulator, current) => accumulator - current, 0));

// ========== .reduceRight() ========= [reduce right to left]
console.log(myArray.reduceRight((accumulator, current) => accumulator * current, 1));
console.log(myArray.reduceRight((accumulator, current) => accumulator + current, 0));
console.log(myArray.reduceRight((accumulator, current) => accumulator / current, 1));
console.log(myArray.reduceRight((accumulator, current) => accumulator - current, 0));

// ========== .reverse() =========
console.log(myArray);
console.log(myArray.reverse()); // efects original array

// ========== .shift() =========
console.log(myArray.shift());
console.log(myArray);

// ========== .unshift() =========
console.log(myArray.unshift(5))
console.log(myArray);

// ========== .slice() =========
console.log(myArray.slice(2));
console.log(myArray.slice(2, 4));
console.log(myArray.slice(1, 5));
console.log(myArray.slice(-2));
console.log(myArray.slice(2, -1));
console.log(myArray.slice());

// ========== .some() ========== [returns true if some of even if one of the element satisfies the condition, otherwise false]
console.log(myArray.some(elem => elem === 5));

// ========== .sort() ========== 
console.log(myArray.sort());
console.log(myArray.sort((a, b) => b - a));

// ========== .splice() ========== [change elements of array by removing or replacing elements]
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)

myArray = [1, 2, 3, 4, 5];
console.log(myArray);

let spl = myArray.splice(2);
console.log(spl);
console.log(myArray);

myArray = [1, 2, 3, 4, 5];
spl = myArray.splice(1,3);
console.log(spl);
console.log(myArray);

myArray = [1, 2, 3, 4, 5];
spl = myArray.splice(1,3, "oni-chan", "one", "two", "three", "four");
console.log(spl);
console.log(myArray);

myArray = [1, 2, 3, 4, 5];
spl = myArray.splice(1,0, "one and a half");
console.log(spl);
console.log(myArray);

myArray = [1, 2, 3, 4, 5];
spl = myArray.splice(1,1, "two");
console.log(spl);
console.log(myArray);

// ========== .toLocaleString() =========
// toLocaleString()
// toLocaleString(locales)
// toLocaleString(locales, options)

myArray = [1, 2, 3, 4, 5, 10000000000000000000];

let locale = myArray.toLocaleString();
console.log(locale)

locale = myArray.toLocaleString("ja-JP");
console.log(locale)

locale = myArray.toLocaleString("ja-JP", {style: "currency", currency: "JPY"});
console.log(locale)

locale = myArray.toLocaleString("en-IN", {style: "percent"});
console.log(locale)

locale = myArray.toLocaleString("en-IN", {style: "currency", currency: "INR"});
console.log(locale)

// ========== .toReversed() =========
myArray = [1,2,3,4,5];

let rev = myArray.toReversed();

console.log(rev);
console.log(myArray);

// ========== .toSorted() =========
myArray = [1,4,5,2,3];

let sor = myArray.toSorted();

console.log(sor);
console.log(myArray);

// ========== .toSpliced() =========
let toSpl = myArray.toSpliced(2);
console.log(toSpl);

toSpl = myArray.toSpliced(1,3);
console.log(toSpl);

toSpl = myArray.toSpliced(1,3, "one", "two", "three");
console.log(toSpl);

toSpl = myArray.toSpliced(1,3, "one");
console.log(toSpl);

console.log(myArray);

// ========== .toString() =========
console.log(myArray.toString());

// ========== .values() =========
iterator = myArray.values();
for(let value of iterator) {
    console.log(value);
}

// ========== .with() =========
myArray = [1, 2, 3, 4, 5];
console.log(myArray.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(myArray); // [1, 2, 3, 4, 5]

// ========== .length =========
console.log(myArray.length); // 5