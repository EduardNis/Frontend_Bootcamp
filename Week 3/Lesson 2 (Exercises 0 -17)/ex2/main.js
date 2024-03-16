

function countryInfo(country, population, capitalCity){

    let state = country
    let people = population
    let city = capitalCity
    return `${state} has ${people} million people and its capital city is ${city}`

}

dataSpain = countryInfo("Spain", 47, "Madrid")
console.log(dataSpain)

dataIsrael = countryInfo("Israel", 9.5, "Jerusalem")
console.log(dataIsrael)

dataRussia = countryInfo("Russia", 143.4, "Moscow")
console.log(dataRussia)

dataGB = countryInfo("Great Britain", 67.3, "London")
console.log(dataGB)
