 // ruby:
// def hello
//  puts "hello word!"
// end
// hello


 function hello() {
   console.log('hello word!');
 }
hello();

// Cannot access 'hi' before initialization
// hi();
// let hi = function hello() {
//   console.log('hello word!');
// }

function sayHello(a, b) {
  console.log(a, b);
}
sayHello(1, 'a');
sayHello(1);
sayHello(1, 'a', 'a');

function here() {
  console.log('哇底加');
}

function up(a, b) {
  here();
}

up(1, "a"); // 哇底加