/* console.log("Hello, world!")

let firstString = 'Eduard'
let secondString = 'Nis'
let thirdString = 1987

let concatenateString = firstString + secondString

concatenateString += thirdString

console.log(concatenateString)
 */

/* console.log((5 > 2) && false)
console.log(!("knife" === "sword"))
console.log((1 < 2) || (-1 > -1) || !false)
console.log("")
console.log((31 % 5) == "1")
console.log(!!true)
console.log("5th Avenue" != "5th Avenue")
console.log((undefined || null))

let a = 3
let c = 0
let b = a
b = a
c = a
b = c
a = b

console.log(a,b,c)
 */

/* 
let x = prompt("What is your X?")

if (x > 100){
    document.write('big')
} else if (x<10){
    document.write('small')
} else {
    document.write('Your X between 10 and 100')
}
 */


/* Tesla - exercise */

let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2016

if (boughtTesla && isUSCitizen){
    if ((currentYear - yearOfTeslaPurchase) >= 4){
        document.write('Would you like an upgrade?')
    } else {document.write('Are you satisfied in Tesla?')}

} else if (isUSCitizen != true && boughtTesla == true){
    document.write('Would you like to move to the USA?')
} else {document.write('Are you interested in buying Tesla?')}

document.write('<br>')


/* Array - exercise */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.splice(1,2)
numbers[3] = 1
numbers.splice(4,4)
numbers.unshift(0)
document.write(numbers)

document.write('<br>')


/* Object - exercise: persons */

let person1 = {
    name: "Robert",
    city: "Haifa",
    age: 30

}

let person2 = {
    name: "Jill",
    city: "Haifa",
    age: 30

}

if (person1.age === person2.age && person1.city === person2.city){
    document.write("Jill wanted to date Robert")
} else (document.write("Jill wanted to date Robert, but couldn’t"))


document.write('<br>')


/* Object - exercise: library */

let library = {
    books: [{author:'Tolstoy' , title:'War and Peace'}, 
    {author:'Dostoevsky' , title:'Idiot'} , 
    {author:'Lermontov' , title:'Boridino'}]
}

document.write(library.books[1].author +' '+ library.books[1].title)


/* Loops - exercise */
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []


for (let i = 0; i < names.length; i++){

    people.push({"name": names[i], "age": ages[i]})
}
console.log(people)

document.write('<br>')

for (let person of people){
    console.log(person.name + " is " + person.age + " years old")
    document.write('<br>')
    document.write(person.name + " is " + person.age + " years old")


}











