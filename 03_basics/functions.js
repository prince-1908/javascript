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
