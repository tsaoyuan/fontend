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
    // console.log('搖完了');
    $('.box').removeClass('animate__animated animate__swing');
  })
  // this
  $('.small').on('click',function () {
    $(this).addClass('animate__animated animate__heartBeat');
  })

  // 監聽 animate 作動完
  $('.small').on('animationend',function () {
    $(this).removeClass('animate__animated animate__heartBeat');
  })

  // JQuery 資料灌入畫面
  // let name = 'DoDo';
  // let like = 'Dog';
  const person ={
    name: 'DoDo',
    like: 'Dog'
  }
  // $('[data-set = "name"]').text(person.name);
  // $('[data-set = "like"]').text(person.like);

  // Object.keys() 取出 key 值
  // console.log(Object.keys(person));
  Object.keys(person).forEach(function (key) {
    // console.log(key);
    $(`[data-set = "${key}"]`).text(person[key]);
  })

  // randomuser + ajax
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      // console.log(data);
      const result = data.results;
      console.log(result);
    }
  });

})

