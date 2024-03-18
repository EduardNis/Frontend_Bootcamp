
const arrInputNumbers = [3,4,4,3,6,3]

function arrWithoutDuplicates(array){

    let arrIndex = []
    let arrNoDuplicates = []

    for (element of array){

         if (arrIndex.includes(array.indexOf(element)) == false) {
            arrIndex.push(array.indexOf(element))
        }

    }

    for (element of arrIndex){
        arrNoDuplicates.push(arrInputNumbers[element])
    }
    return arrNoDuplicates
    
}


console.log("Old array:", arrInputNumbers)
console.log("New array:", arrWithoutDuplicates(arrInputNumbers))