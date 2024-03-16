



//input number of siblings
let numSiblings = Number( prompt("How many siblings do you have?"))


if (numSiblings === 1){
    console.log("1 sibling!")
} else if (numSiblings > 1){
    console.log(`More than 1 sibling. You have ${numSiblings} siblings`)
} else {
    console.log("No siblings!")
}


// when we use '===' we need to remember that both sides compare with each other using data type.
// So, in this case, if we use "===" with prompt-function we need to change (convert) our input-data from string '1' to digit 1 (integer)
