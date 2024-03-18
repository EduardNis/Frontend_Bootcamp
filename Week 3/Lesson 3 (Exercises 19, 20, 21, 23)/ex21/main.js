

// population array (millions): China, USA, Israel, Russia
var populations = [1441 , 339 , 10 , 145]
let populationWorld = 7900

// function to define share (percentage)
var percentageOfWorld = function(populationValue){
    
    return populationValue / populationWorld * 100
}


// function to get each value of populations-array
function populationPercentages(arrayPopulations){
    
    var percentages = []
    for (i = 0; i < arrayPopulations.length ; i++){
        percentages.push(percentageOfWorld(arrayPopulations[i]).toFixed(1)+ "%")
    }
    
    return percentages
}



console.log(populationPercentages(populations))