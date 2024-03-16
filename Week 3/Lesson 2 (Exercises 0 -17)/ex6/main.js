// Reformat the following function declarations to function expression.

/* function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}
 */

// solution
let welcome = function(phrase) {
    let greeting = `${phrase}`;
    return greeting;
}

console.log(welcome('Welcome to Appleseeds Bootcamp!'))



/* function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}
 */

// solution
let power = function(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

console.log(power(5))



/* function add(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}
 */

// solution

let add = function (a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}

console.log(add(25))



// From function expressions to function declarations

/* const hello = () => "Hello!"; */

function hello(){
    let welcome = 'Shalom!'
    return welcome
}

console.log(hello())



/* const squareRoot = a => Math.sqrt(a); */

function squareRoot(number){
    let sqrt = Math.sqrt(number)
    return sqrt
}

console.log(squareRoot(49))



/* const randomNumbers = (a, b) => Math.random() * (a - b) + b;  */

function randomNumbers (a,b){
    let mixResult = Math.random() * (a-b) + b
    return mixResult
}

console.log(randomNumbers(4,5))

