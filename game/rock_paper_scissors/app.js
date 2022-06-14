const computerChoiceDidplay = document.getElementById('computer-choice')
const yourChoiceDidplay = document.getElementById('user-choice')
const resultDidplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')
let yourChioce
let computerChioce
let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
  yourChioce = e.target.id
  yourChoiceDidplay.innerHTML =  yourChioce
  generateComputerChoice()
  getResult()
}));

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random()*3)  //  or you can use possibleChoice.length

  if(randomNumber === 0){
    computerChioce = 'rock'
  }
  if(randomNumber === 1){
    computerChioce = 'scissors'
  }
  if(randomNumber === 2){
    computerChioce = 'paper'
  }

  computerChoiceDidplay.innerHTML = computerChioce;

}

function getResult() {
  if( computerChioce === yourChioce){
    result = "平手"
  }

  if( computerChioce === 'rock' && yourChioce === 'paper'){
    result = "you win!"
  }

  if( computerChioce === 'rock' && yourChioce === 'scissors'){
    result = "you lost!"
  }

  if( computerChioce === 'scissors' && yourChioce === 'paper'){
    result = "you lost!"
  }

  if( computerChioce === 'scissors' && yourChioce === 'rock'){
    result = "you win!"
  }

  if( computerChioce === 'paper' && yourChioce === 'rock'){
    result = "you lost!"
  }

  if( computerChioce === 'paper' && yourChioce === 'scissors'){
    result = "you win!"
  }

  resultDidplay.innerHTML = result;
  
}