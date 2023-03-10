function getComputerChoice(){
    const val=Math.floor(Math.random()*3)+1;
    if(val==1)
        return "rock";
    else if(val==2)
        return "paper";
    else
        return "scissor";
}
function playRound(playerSelection, computerSelection){
    if(playerSelection.toUpperCase()=="ROCK"&&computerSelection.toUpperCase()=="PAPER")
        return "You Lose! Paper beats Rock.";
    else if(playerSelection.toUpperCase()=="ROCK"&&computerSelection.toUpperCase()=="SCISSOR")
        return "You Win! Rock beats Scissor.";
    else if(playerSelection.toUpperCase()=="PAPER"&&computerSelection.toUpperCase()=="SCISSOR")
        return "You Lose! Scissor beats Paper.";
    else if(playerSelection.toUpperCase()=="PAPER"&&computerSelection.toUpperCase()=="ROCK")
        return "You Win! Paper beats Rock.";
    else if(playerSelection.toUpperCase()=="SCISSOR"&&computerSelection.toUpperCase()=="ROCK")
        return "You Lose! Rock beats Scissor.";
    else if(playerSelection.toUpperCase()=="SCISSOR"&&computerSelection.toUpperCase()=="PAPER")
        return "You Win! Scissor beats Paper.";
    else if(playerSelection.toUpperCase()==computerSelection.toUpperCase())  
        return "Draw!";
    else
        return "Wrong Input!";
}
const playerSelection=prompt("Enter your choice : ");
const computerSelection=getComputerChoice();
console.log(playRound(playerSelection,computerSelection));
function game(){
    for(let i=0;i<5;i++){
        if(playRound().slice(4,5)=="W")
            human++;
        else if(playRound.slice(4,5)=="L")
            comp++;
        else{
            human++;
            comp++;
        }
    }
    if(human>comp) 
        return "Human Wins!";
    else
        return "Computer Wins!";
}