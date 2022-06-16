const items = [
  {name: 'Bike',      price: 100},
  {name: 'TV',        price: 200},
  {name: 'Album',     price: 10},
  {name: 'Book',      price: 5},
  {name: 'Phone',     price: 500},
  {name: 'Computer',  price: 1000},
  {name: 'Keyboard',  price: 25},
  {name: 'Book',      price: 455}

]

 items.forEach((item)=>{
  console.log(item.name);
})

let a = []
items.forEach((item)=>{
  a.push(item.name)
})

console.log(a);
