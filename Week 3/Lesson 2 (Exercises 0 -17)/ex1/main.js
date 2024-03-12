/* 1. Which of the following is/are strings?
c) '4'
 */

console.log("String:", "'4'")


/* 2. Which of the following is/are numbers?
a) 4
b) 4.0
d) -4
 */

console.log("Numbers:", 4, 4.0, -4)


/* 
3. Which of the following is/are booleans?
a) true
b) false
 */

console.log("Booleans:", true, false)


/* 4. What is the result of 80 + 71.2?
a) 151.2
 */

console.log("Result:", 80+71.2)


/* 5. What is the result of "80" + 71.2?
c) "8071.2"
 */

console.log("Result:", "80"+71.2)


/* 6. Does 100 + 30 produce a number or a string?
a) number
 */
console.log("Number type:", typeof (100 +30))


/* 7. Does "100" + 30 produce a number or a string?
b)string
 */

console.log("String type:", typeof ("100" +30))


//create three different ways to declare variables

let variableNum = 888
var variableString = "Hello"
const variableConst = [2020, 2021, 2022, 2023, 2024]

console.log(variableNum, variableString, variableConst )


//declare a variable and reassign a value to it

let firstName
firstName = "Eduard"

console.log(firstName)


//create a variable and after that assign a string with its value being: He's got it!

var variableNew
variableNew = "He's got it!"

console.log(variableNew)


/*
1. create a variable and assign a value on how much a restaurant bill is.
2. create a variable and assign a value on how much tax they should pay.
3. create a variable that will calculate the bill*tax and its output would be: Your total bill is <total bill> $.
*/

let restaurantBill = 100
let restaurantTax = 0.15
let totalBill = restaurantBill + (restaurantBill * restaurantTax)

console.log("Your total bill is " + totalBill + "$")


// Round the number 50.6 to its nearest integer

let floatNumber = 50.6
let roundNumber = Math.round(floatNumber)

console.log(roundNumber)


// Create a variable that is undefined
let variableUndif

console.log(typeof variableUndif)











