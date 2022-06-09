// First Class Citizen; 一等公民

function cat(a) {
  a();
}

function dog() {
  console.log('I am a dog!');
}

cat(dog); // I am a dog!
// cat(dog()); // TypeError: a is not a function

// return function 
function hi() {
  function hello() {
    console.log('hello');
  }
  return hello // 回傳沒有執行的 Function
}
console.log(hi()());
