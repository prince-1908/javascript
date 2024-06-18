// IIFE - Immediately Invoked Function Expression

// named IIFE
(function connectDB() {
    console.log("Connected to database");
})();

// unnamed IIFE
(() => {
    console.log("Connected to second database");
})();

(function(){
    console.log("Connected to third database");
})();

// pass arguments in IIFE
((name) => {
    console.log(`Hello ${name}`)
})("Prince");

const age = 21;
((age) => {
    console.log(`Age: ${age}`);
})(age);