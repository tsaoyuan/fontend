const items = [
  {name: 'Bike',      price: 100},
  {name: 'TV',        price: 200},
  {name: 'Album',     price: 10},
  {name: 'Book',      price: 5},
  {name: 'Phone',     price: 500},
  {name: 'Computer',  price: 1000},
  {name: 'Keyboard',  price: 25}

]

const haveExpensive = items.every((item)=>{
  return item.price >= 500
})

 const notfree = items.every((item)=>{
  return item.price >= 0
})

console.log(haveExpensive);   // false; 只要有一個 element 不符合 條件
console.log(notfree);        // true; 全部的 element 都符合條件

