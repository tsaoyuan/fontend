document.addEventListener("DOMContentLoaded", function () {
   // DOM Ready!
   const word = document.querySelector(".hi");
   const btnC = document.querySelector(".btn-click")
  
   btnC.addEventListener("click", function () {
     word.innerHTML = "holy share."
   });
});