$(function () {
  $('.click').on('click', function () {
    // console.log('hi');
    $('.box').toggle();
  })

  $('.color').on('click', function () {
    $('.box').toggleClass('bg-red');
  })

  $('.animate').on('click', function () {
    $('.box').addClass('animate__animated animate__swing');
  })
  // 監聽 animate 作動完
  $('.box').on('animationend',function () {
    console.log('搖完了');
  })
})

