let scoreJohnTeam = [89, 120, 103]
let scoreMikeTeam = [116, 94, 123]
let scoreMaryTeam = [97, 134, 105]
const arrayTeams = ["John", "Mike", "Mary"]


function avgScoreTeam( arrayScore = []){
    let sumScore = 0
    for(i = 0; i < arrayScore.length; i++){
        sumScore += arrayScore[i]
    }
    return sumScore / arrayScore.length
}

let avgScoreJohnTeam = avgScoreTeam(scoreJohnTeam)
let avgScoreMikeTeam = avgScoreTeam(scoreMikeTeam)
let avgScoreMaryTeam = avgScoreTeam(scoreMaryTeam)
const arrayTeamAvgScores = [avgScoreJohnTeam, avgScoreMikeTeam, avgScoreMaryTeam]


console.log(`Average score of John's Team = ${avgScoreJohnTeam}`)
console.log(`Average score of Mike's Team = ${avgScoreMikeTeam}`)
console.log(`Average score of Mary's Team = ${avgScoreMaryTeam}`)


let nameWinner = ''
let countWinners = 0

for (let indexArray in arrayTeamAvgScores){
    let maximum = Math.max.apply(null, arrayTeamAvgScores)
    if (arrayTeamAvgScores[indexArray] == maximum){
        nameWinner = arrayTeams[indexArray]
        countWinners += 1
    }

}

if (countWinners > 1){
    console.log("This is DRAWS")
} else {
    console.log(`THE WINNER: ${nameWinner}`)
}
