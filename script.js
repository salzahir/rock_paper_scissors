function getComputerChoice(){
    let randNumber = Math.random()
    if(randNumber < 0.3333){
        return "Rock"
    }
    else if(randNumber > 0.3333 && randNumber < 0.66666){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}


function getHumanChoice(){
    let humanChoice = prompt("Enter ROCK, PAPER, SCISSORS")
    humanChoice = humanChoice.toUpperCase
    return humanChoice
}

let humanScore = 0
let compuerScore = 0

function playRound(humanChoice, computerChoice){
    if(humanChoice === "ROCK" && computerChoice == "Paper"){
        compuerScore++
        return "Computer Wins Paper beats Rock"
    }
    else if(humanChoice === "PAPER" && computerChoice === "Scissors"){
        compuerScore++
        return "Computer Wins Scissors beats paper"
    }
    else if(humanChoice == "SCISSORS" && computerChoice == "Rock"){
        compuerScore++
        return "Computer Wins Rock beats scissors"
    }

    
}


const humanSelection = getHumanChoice()
const computerChoice = getComputerChoice()

playRound(humanSelection, computerChoice)

