const items = [
  {name: 'Bike',      price: 100},
  {name: 'TV',        price: 200},
  {name: 'Album',     price: 10},
  {name: 'Book',      price: 5},
  {name: 'Phone',     price: 500},
  {name: 'Computer',  price: 1000},
  {name: 'Keyboard',  price: 25}

]

// reduce() have 2 arguments, first argument is callback function and the second argument is initalValue for the previousValue (accumulator)
// reduce(callback function, initValue)
// reduce((previousValue, currentValue) => { /*...*/ }, initValue)
// initValue is 0
// set currentValue is item


 const total = items.reduce((accumulator, item)=>{
   const returns = accumulator + item.price
   console.log(`accumulator: ${accumulator}, item.price: ${item.price},returns: ${returns}`);
  return returns
}, 0)
// Bike:       acc = 0, item.price = 100 return 100
// TV:         acc = 100, item.price = 200 return 300
// Album:      acc = 300, item.price = 10 return 310
// Book:       acc = 310, item.price = 5 return 315
// Phone:      acc = 315, item.price = 500 return 815
// Computer:   acc = 815, item.price = 1000 return 1815
// Keyboard:   acc = 1815, item.price = 25 return 1840
console.log(`have initValue: ${total}`); // 1840

console.log("--------------------");


const noInit_total = items.reduce((accumulator, item)=>{
  const returns = accumulator + item.price
  console.log(`accumulator: ${accumulator}, item.price: ${item.price},returns: ${returns}`);
 return returns
})

console.log(`\n`);
console.log(`no initValue: ${noInit_total}`); // [object Object]200105500100025

console.log(`items[0]: ${items[0]}`); // [object Object]
console.log(`items[1].price: ${items[1].price}`); // 200


// why log is "[object Object]200105500100025" ?
// accumulator: items[0] 是一包物件, [object Object]
// currentValue: items[1].price => item.price, 200
// accumulator + item.price = [object Object]200
// 以此類推, 最終結果：[object Object]200105500100025




