let list = [1, 2, 3, 4, 5];
// map 方法1: push
let result = [];
list.map( (a) => {
  result.push(a*2);
})
console.log(result);

// map 方法2:
let resultTwo = list.map(function (x) {
  return x*2  
})
console.log(resultTwo);

// map 方法3: callback function
function double(num) {
  return num*2
}
let resultThird = list.map(double);
console.log(resultThird);

