// function 找變數的 JS 奇妙點
// 可由 function 內向外找變數
// var a = 4;
// let b = 6;

// function hey() {
//   console.log(a);
//   console.log(b);
// }
// hey();

// function 外的變數值 ( console.log(a) ), 抓不到 function 內的變數設定
// function hey() {
//   var a = 6;
//   let b = 99;
// }

// console.log(a);
// console.log(b);

// scope chain
var x = 1;

function dog() {
  // var x = 2;
  function cat() {
    console.log(x);
  }

  cat();
}

dog();