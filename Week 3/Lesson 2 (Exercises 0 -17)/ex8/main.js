

let populationChina = 1441
let populationIsrael = 10
let populationUSA = 332
let populationWorld = 7900


let shareChina =  percentageOfWorld1(populationChina).toFixed(1)
console.log(`It's about ${shareChina}% of the world population`)

let shareIsrael =  percentageOfWorld1(populationIsrael).toFixed(1)
console.log(`It's about ${shareIsrael}% of the world population`)

let shareUSA =  percentageOfWorld1(populationUSA).toFixed(1)
console.log(`It's about ${shareUSA}% of the world population`)

// declaration
function percentageOfWorld1(population){
    let percentage = population / populationWorld * 100
    return percentage
}



// expression

var percentageOfWorld2 = function (population)
{
    return population / populationWorld * 100;
}

console.log(`${percentageOfWorld2(populationChina).toFixed(1)}%`)
console.log(`${percentageOfWorld2(populationIsrael).toFixed(1)}%`)
console.log(`${percentageOfWorld2(populationUSA).toFixed(1)}%`)