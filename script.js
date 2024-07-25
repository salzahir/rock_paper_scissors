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
    let humanChoice = prompt("Enter ROCK, PAPER, SCISSORS").toUpperCase();
    
    return humanChoice
}


let humanScore = 0
let computerScore = 0



function playRound(humanChoice, computerChoice){
    if(humanChoice === "ROCK" && computerChoice == "Paper"){
        computerScore++
        return "Computer Wins Paper beats Rock"
    }
    else if(humanChoice === "PAPER" && computerChoice === "Scissors"){
        computerScore++
        return "Computer Wins Scissors beats paper"
    }
    else if(humanChoice == "SCISSORS" && computerChoice == "Rock"){
        computerScore++
        return "Computer Wins Rock beats scissors"
    }
    else if(humanChoice === "ROCK" && computerChoice === "Scissors"){
        humanScore++
        return "Human wins rock beats paper"
    }
    else if(humanChoice === "PAPER" && computerChoice === "Rock"){
        humanScore++
        return "Human wins paper beats rock"
    }
    else if(humanChoice === "SCISSORS" && computerChoice === "Paper"){
        humanScore++
        return "Human wins Scissors beats Paper"
    }

    else{
        return "TIE try again"
    }


}



function playGame(){


    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice()
        const computerChoice = getComputerChoice()
        console.log(playRound(humanSelection, computerChoice))
    }

    if(humanScore > computerScore){
        return "Human Won"
    }
    else if(computerScore > humanScore){
        return "Computer Won"
    }
    else{
        return "Tie"
    }

}



console.log(playGame())


