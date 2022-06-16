const items = [
  {name: 'Bike',      price: 100},
  {name: 'TV',        price: 200},
  {name: 'Album',     price: 10},
  {name: 'Book',      price: 5},
  {name: 'Phone',     price: 500},
  {name: 'Computer',  price: 1000},
  {name: 'Keyboard',  price: 25}

]

const haveExpensive = items.some((item)=>{
  return item.price >= 1000
})

 const haveFree = items.some((item)=>{
  return item.price <= 0
})


console.log(haveExpensive);   // true; 只要有一個 element 符合 條件
console.log(haveFree);        // false; 全部的 element 都沒有符合條件

