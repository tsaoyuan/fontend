const colors = ['red', 'blue', 'green'];
colors.forEach(function (element, index, array) {
  console.log(`第 ${index} 個元素是 ${element}`);
});

const num = [1,2,3,4,5,10,9,8,7,6];
const even = num.filter( function (element) {
  return element % 2 == 0;
} );
console.log(even);

const a = [1, 2, 3, 4, 5];
const b = a.map((element)=>{
  return element**2;
})
console.log(b);