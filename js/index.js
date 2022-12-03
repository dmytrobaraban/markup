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

// scroll

window.onscroll = function() {
  const scrolled = window.pageYOffset || document.documentElement.scrollTop; // Отримуємо положення скролу
    if(scrolled !== 0){
      $('.menu-btn span').css('background', '#005BBB');
  }
    else{
      $('.menu-btn span').css('background', '#FFFFFF');
  }
};