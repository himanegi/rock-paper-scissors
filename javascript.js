let playerSelection;
let computerSelection;
let buttons=document.querySelectorAll('button');
const container= document.querySelector('#container');
const hscore=document.querySelector('#hscore');
const cscore=document.querySelector('#cscore');
const div=document.createElement('div');
let human=0;
let comp=0;
hscore.textContent="Human:"+human;
cscore.textContent="Comp:"+comp;
let winner="";
buttons.forEach(btn=>{
        btn.addEventListener('click',()=>{
            computerSelection=getComputerChoice();
            playerSelection=btn.name;
            const result=playRound(playerSelection, computerSelection);
            div.textContent=result;
            container.appendChild(div);
            if(result.slice(4,5)=="W"){
                human++;
                hscore.textContent="Human:"+human;
            }
            else if(result.slice(4,5)=="L") {
                comp++;
                cscore.textContent="Comp:"+comp;
            }
            else{
                hscore.textContent="Human:"+human;
                cscore.textContent="Comp:"+comp;
            }
            if(human==5||comp==5) resetGame();
        });
});
function resetGame(){
    if(human>comp){
        winner="HUMAN WINS ! SCORE="+human+":"+comp;
    }
    else if(human<comp){
        winner="COMPUTER WINS ! SCORE="+human+":"+comp;
    }
    div.textContent=winner;
    container.appendChild(div);
    human=0;
    comp=0;
    hscore.textContent="Human:"+human;
    cscore.textContent="Comp:"+comp;
    winner="";
}
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
// function game(){
//     let human=0;
//     let comp=0;
//     for(let i=0;i<5;i++){
//         computerSelection=getComputerChoice();
//         const result=playRound(playerSelection, computerSelection);
//         console.log(result);
//         if(result.slice(4,5)=="W")
//             human++;
//         else if(result.slice(4,5)=="L")
//             comp++;
//         else if(result=="Draw!"){
//             human++;
//             comp++;
//         }
//     }
//     if(human>comp) 
//         return "Human Wins!";
//     else if(comp>human)
//         return "Computer Wins!";
//     else    
//         return "Draw!";
// }
// console.log(game());