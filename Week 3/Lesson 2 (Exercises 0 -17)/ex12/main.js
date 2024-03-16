

let arrayNumbers = []


// function defines if it is possible to divide by 7 and if the number includes 7 
function checkSeven(i){

    if (i % 7 == 0 && i.toString().includes(7)) {
        return "BOOM-BOOM"
    } else if (i % 7 == 0) {
        return "BOOM"
    } else {
        return i
    }

}

// function makes array of numbers / "BOOM" / "BOOM-BOOM"
function printNumbers(intNumber){

    for (let i = 1; i <= intNumber; i++){
        let checkResult = checkSeven(i)
        arrayNumbers.push(checkResult)
    }
    
    return arrayNumbers
}

console.log(printNumbers(18))
