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

//console.log(myObj.name);
// Output: Prince Singh Chouhan

//console.log(myObj.age);
// Output: 21

//console.log(myObj.email);
// Output: princesinghchouhan7470@gmail.com

//console.log(myObj.isProgrammer);
// Output: true

//console.log(myObj["name"]);
// Output: Prince Singh Chouhan

//console.log(myObj["age"]);
// Output: 21

//console.log(myObj["email"]);
// Output: princesinghchouhan7470@gmail.com

//console.log(myObj["isProgrammer"]);
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

//console.log(Obj.name);
// Output : hello

Obj.name = "hello world";

//console.log(Obj.name);
// Output : "hello world"

Object.freeze(Obj);

Obj.name = "Bado Badi";

//console.log(Obj.name);
// Output : hello world

// Functions as Object Values;
const greetObj = {
    greet: function(){
        //console.log("Good Morning");
        return "i am the return value"
    }
}

greetObj.greet();
// Output : Good Morning

const returnVal = greetObj.greet();
//console.log(returnVal);
// Output : i am the return value

// this keyword
const myObj3 = {
    name: "Prince Singh Chouhan"
}

myObj3.greet = function(){
    //console.log(`Good Morning! I am ${this.name}`);
}

myObj3.greet();
// Good Morning! I am Prince Singh Chouhan

// Nested Objects
const user = {
    email: "prince@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Prince",
            middleName: "Singh",
            lastName: "Chouhan"
        }
    }
}
//console.log(user.fullname.userFullName.firstName);

// Combine 2 objects
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// Object.assign(target)
// Object.assign(target, source1)
// Object.assign(target, source1, source2)
// Object.assign(target, source1, source2, /* …, */ sourceN)

const obj3 = Object.assign({}, obj1, obj2);
//console.log(obj3);

// if keys are same, then..
const obj4 = {1: "a", 2: "b"};
const obj5 = {1: "hi", 2: "hello"};

const obj6 = Object.assign({}, obj4, obj5);
//console.log(obj6);

// combine using spread operator
const sprComObj = {...obj1, ...obj2};
// console.log(sprComObj);

// Array of objects
const arrOfObj = [
    {
        name: "hi",
        email: "hi@example.com"
    },
    {
        name: "hello",
        email: "hello@example.com"
    },
    {
        name: "hey",
        email: "hey@example.com"
    },
    {
        name: "heyy",
        email: "heyy@example.com"
    }
];

// arrOfObj.map((item) => {
//     console.log("name: " + item.name);
//     console.log("email: " + item.email);
// });

// get all the keys of object
// console.log("keys: " , Object.keys(myObj));

// get all the values of object
// console.log("values: " , Object.values(myObj));

// get all the entries of object
// console.log("Entries: " , Object.entries(myObj));

// check if object contains a property or not
// console.log(myObj.hasOwnProperty("isProgrammer"));
// console.log(myObj.hasOwnProperty("height"));

// Object Destructuring
const myNewObj = {
    name: "Prince Singh Chouhan",
    age: 21,
    email: "prince@gmail.com",
    isProgrammer: true
}

const {isProgrammer} = myNewObj;
console.log(isProgrammer);

// you can also set the name of the property as per your convinience
const {name: naamKyaHai} = myNewObj;
console.log(naamKyaHai);