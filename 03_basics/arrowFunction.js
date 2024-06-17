// discussion about "this"

// this keyword refers to the current context
const user = {
    username: "prince",

    greet: function(){
        console.log(`Hello ${this.username}`);
        console.log(this);
    }
}

// user.greet();
// user.username = "prince singh chouhan";
// user.greet();

// by default this is empty in node environment
// console.log(this);

function callMe(){
    const username = "prince"
    console.log(this.username);
    console.log(this);
}
// callMe();

const callMe2 = function(){
    const username = "prince";
    console.log(this.username);
    console.log(this);
}
// callMe2();

const callMe3 = () => {
    const username = "prince";
    console.log(this.username);
    console.log(this);
}
// callMe3();

// ++++++++++ Arrow Function ++++++++++

const arrFunc = (num1, num2) => {
    return num1 + num2;
}
// console.log(arrFunc(2,5));

// implicit return
const arrFunc2 = (num1, num2) => num1 + num2;
console.log(arrFunc2(2,5));

const arrFunc3 = (num1, num2) => (num1 + num2);
console.log(arrFunc3(2,5));

// return object implicitally
const arrFunc4 = () => ({username: "prince"});
console.log(arrFunc4());