const computerChoiceDidplay = document.getElementById('computer-choice')
const yourChoiceDidplay = document.getElementById('user-choice')
const resultDidplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')
let yourChioce

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
  console.log(e);
  yourChioce = e.target.id
  yourChoiceDidplay.innerHTML =  yourChioce
}));