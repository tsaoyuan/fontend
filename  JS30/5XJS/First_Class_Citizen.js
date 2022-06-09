// First Class Citizen; 一等公民

function cat(a) {
  a();
}

function dog() {
  console.log('I am a dog!');
}

cat(dog);
