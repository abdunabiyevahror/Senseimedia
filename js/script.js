let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
let headerContainer = document.querySelector('.header__container');
let headerBtn = document.querySelector('.header__btn');
let headerLogo = document.querySelector('.header__logo');


(headerBurger.onclick = function () {
	headerMenu.classList.toggle('active');
	headerBurger.classList.toggle('active');
	headerContainer.classList.toggle('active');
	headerBtn.classList.toggle('active');
	headerLogo.classList.toggle('active');
})