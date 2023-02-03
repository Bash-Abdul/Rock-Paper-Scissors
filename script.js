let player = document.getElementById('player');
let computer = document.getElementById('computer')
let result = document.getElementById('result')
let btn = document.querySelectorAll('#button')

let playerChoice 
let computerChoice
let final
// let winners = winner()




btn.forEach( button => button.addEventListener('click', () =>{
    playerChoice = button.textContent
    console.log(playerChoice)
    player.textContent = "👨🏿‍🦱:" + playerChoice
    computerTurn()
    computer.textContent = "🤖:" + computerChoice   
    result.textContent =  "Result: " + winner()
    // result.textContent = 'Result: ' + Winner()
}))

function computerTurn(){

    let Random = Math.floor(Math.random() * 3) + 1;

    if (Random === 1){
        computerChoice =  "🪨"
    }
    else if (Random === 2){
        computerChoice =  "📃"
        // computer.textContent = "Computer: " + computerChoice
    }
    else {
        computerChoice =  "✂️"
        // computer.textContent = "Computer: " + computerChoice
    }
}

function winner(){
    if (computerChoice === playerChoice){
        return "Draw!"
    }
    else if (computerChoice === "🪨"){
        if(playerChoice === "📃"){
            return "You Win!"
        }
        else{
            return "You Lose!"
        }
    }
    else if (computerChoice === "📃"){
        if(playerChoice ===  "✂️"){
            return "You Win!"
        }
        else{
            return "You Lose!"
        }
    }
    else if (computerChoice === "✂️"){
        if(playerChoice === "🪨"){
            return "You Win!"
        }
        else{
            return "You Lose!"
        }
    }

}









