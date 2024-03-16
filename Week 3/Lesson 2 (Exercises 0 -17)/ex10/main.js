
// solution - conditions
function getLevel(score){
    if (score >=0 && score <= 64) {
        console.log("Level F")
    } else if (score >=65 && score <= 69) {
        console.log("Level D")
    } else if (score >= 70 && score <= 79) {
        console.log("Level C")
    } else if (score >= 80 && score <= 89) {
        console.log("Level B")
    } else {
        console.log("Level A")
    }
}

getLevel(8)
getLevel(68)
getLevel(78)
getLevel(89)
getLevel(99)
