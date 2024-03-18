const arrString = ["boo", "doooo", "hoo","ro"]
var arrLength = []

function defLengthString(array){
    for (element in array){
        arrLength.push(array[element].length)
        
    }
    return arrLength

}

console.log(defLengthString(arrString))

