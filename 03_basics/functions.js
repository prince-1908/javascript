function myFunction(name){
    console.log(`Your name is ${name} and you are a`);
    return "good guy.."
    console.log("non accessible code"); // after return hits function ends
}

console.log(myFunction("Prince"));

function objectFunction(obj){
    console.log(obj);
}

objectFunction({
    name: "Prince",
    email: "my@example.com",
});

function arrFunction(arr){
    console.log(arr);
}

arrFunction([1,2,3,4]);

// rest operator
function allVals(...values){
    console.log(values);
}
allVals(1,2,3,3,5,5,3,2,4,2);

// hoisting introduction

// it is okay to call this function before definition
one();
function one(){
    console.log('one');
}
one();

// it is not okay to call this function before definition because in this type we are assigning the function to a variable
two();
const two = function(){
    console.log('two');
}
two();