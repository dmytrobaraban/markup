// burger menu
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let logo = document.querySelector('.logo')
let header = document.getElementsByTagName('header')[0];

menuBtn.addEventListener('click', function(){
menuBtn.classList.toggle('active');
menu.classList.toggle('active');
logo.classList.toggle('active');
header.classList.toggle('active')
})

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop; // Получаем положение скролла
    if(scrolled !== 0){
      // Если прокрутка есть, то делаем блок прозрачным
      document.querySelector('.menu-btn span').style.background = '#005BBB';
    }else{
      // Если нет, то делаем его полностью видимым
      document.querySelector('.menu-btn span').style.background = '#FFFFFF';
    };
  };

// 