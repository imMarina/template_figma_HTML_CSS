const btn = document.querySelector('.header-menu__btn');
const burgerMenu = document.querySelector('.burger-list__active');


btn.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-list__hidden');

});