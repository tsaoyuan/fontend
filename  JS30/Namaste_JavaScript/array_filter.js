// 輸出奇數
const list = [1, 2, 3, 4, 5, 8, 10];
const result = list.filter((num)=>{
  return num%2 == 1
})

console.log(result);