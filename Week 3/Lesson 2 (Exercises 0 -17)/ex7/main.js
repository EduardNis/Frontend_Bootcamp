

// From function expressions to IIFE functions.

// const squareRoot = a => Math.sqrt(a);
// const randomNumbers = (a, b) => Math.random() * (a - b) + b;


var squareRoot = (function(){
    let number = 625
    return Math.sqrt(number)
}()
)

var randomNumbers = (function(){
    let a = 8
    let b = 7
    return Math.random() * (a - b) + b
}()

)

console.log(squareRoot)
console.log(randomNumbers)





/* 
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}
 */

// implicit
let welcome1 = (phrase) => phrase + " Eduard!"
console.log(welcome1('Welcome to Appleseeds Bootcamp,'))

// explicit

let welcome2 =(phrase) => { return phrase + " Omer!"}
console.log(welcome2('Welcome to Appleseeds Bootcamp,'))



