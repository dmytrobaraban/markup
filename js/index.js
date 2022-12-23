// burger-menu

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let logo = document.querySelector('.logo')
let header = document.getElementsByTagName('header')[0];
let bodyHidden = document.getElementsByTagName('body')[0];

menuBtn.addEventListener('click', function(){
menuBtn.classList.toggle('active');
menu.classList.toggle('active');
logo.classList.toggle('active');
header.classList.toggle('active');
bodyHidden.classList.toggle('active');
})
