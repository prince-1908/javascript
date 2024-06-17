// Object Literals
const myObj = {
    name: "Prince Singh Chouhan",
    age: 21,
    email: "princesinghchouhan7470@gmail.com",
    isProgrammer: true
}

// Constructor Method
const myObj2 = new Object();
myObj2.name = "Prince Singh Chouhan";
myObj2.age = 21;
myObj2.email = "princesinghchouhan7470@gmail.com";
myObj2.isProgrammer = true;

// Object.create();

console.log(myObj.name);
// Output: Prince Singh Chouhan

console.log(myObj.age);
// Output: 21

console.log(myObj.email);
// Output: princesinghchouhan7470@gmail.com

console.log(myObj.isProgrammer);
// Output: true

console.log(myObj["name"]);
// Output: Prince Singh Chouhan

console.log(myObj["age"]);
// Output: 21

console.log(myObj["email"]);
// Output: princesinghchouhan7470@gmail.com

console.log(myObj["isProgrammer"]);
// Output: true

const obj = {
    name: "Prince"
}
// Key: name
// Value: "Prince"

// Freezing Objects
const Obj = {
    name: "hello"
}

console.log(Obj.name);
// Output : hello

Obj.name = "hello world";

console.log(Obj.name);
// Output : "hello world"

Object.freeze(Obj);

Obj.name = "Bado Badi";

console.log(Obj.name);
// Output : hello world

// Functions as Object Values;
const greetObj = {
    greet: function(){
        console.log("Good Morning");
        return "i am the return value"
    }
}

greetObj.greet();
// Output : Good Morning

const returnVal = greetObj.greet();
console.log(returnVal);
// Output : i am the return value

// this keyword
const myObj3 = {
    name: "Prince Singh Chouhan"
}

myObj3.greet = function(){
    console.log(`Good Morning! I am ${this.name}`);
}

myObj3.greet();
// Good Morning! I am Prince Singh Chouhan