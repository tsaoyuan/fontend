console.log("start");

setTimeout(() => {
  console.log("1");
}, 3);

setTimeout(() => {
  console.log("2");
}, 2);

setTimeout(() => {
  console.log("3");
}, 0);

console.log("end");