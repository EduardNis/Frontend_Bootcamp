

function countryToLiveIn(language, isIsland, population, country){
    console.log(language, isIsland, population, country)
    
    if (language == "english" && isIsland == false && population <= 50000000)
    {
        return `You should live in ${country}`
    } 
    else 
    { 
        return `${country} does not meet your criteria` 
    }
}



function getArguments() {
    let language = prompt("Input language:").toString().toLowerCase()
    
    let isIslandString = prompt("Is it Island: Yes / No")
    isIslandString === "Yes" ? isIsland = true : isIsland = false
    
    let population = BigInt(prompt("Input population of the country:"))
    let country = prompt("Input the name of the country:").toString()

    return countryToLiveIn(language, isIsland, population, country)
}


console.log(getArguments())