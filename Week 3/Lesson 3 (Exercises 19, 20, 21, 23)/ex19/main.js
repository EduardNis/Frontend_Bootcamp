

var people = ["Greg", "Mary", "Devon", "James"];


//1. Using a loop, iterate through this array and console.log all of the people.
for (i = 0 ; i < people.length ; i++){
    console.log(people[i])
}
// alternative option
people.forEach((element) => console.log(element))



//2. Write the command to remove "Greg" from the array.
people.shift()
console.log(people)



//3. Write the command to remove "James" from the array.
people.pop()
console.log(people)



//4. Write the command to add "Matt" to the front of the array.
people.unshift("Matt")
console.log(people)



//5. Write the command to add your name to the end of the array.
people.push("Eduard")
console.log(people)



//6. Using a loop, iterate through this array, and after console.log "Mary", exit from the loop.
for (i = 0; i < people.length; i++){
    if (people[i] != "Mary"){
        console.log(people[i])
    } else {
        console.log(people[i]);
        break;
    }
}



//7. Write the command to make a copy of the array using a slice. The copy should NOT include "Mary" or "Matt".
let slice_array = people.slice(2)
console.log(slice_array)



//8. Write the command that gives the indexOf where "Mary" is located.
console.log(people.indexOf("Mary"))



//9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
console.log(people.indexOf("Foo"))



//10. Redefine the people variable with the value you started with. 
//Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". 
//Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2,1, "Elizabeth","Artie")
console.log(people)



//11. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob"
const withBob = people.concat(["Bob"])
console.log(withBob)






















