const menu = document.querySelector('.header__menu');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');

function toggleMenu() {
    menu.classList.toggle('active');
    modal.classList.toggle('open');
}

function toggleOverlay() {
    toggleMenu();
}

menu.addEventListener('click', toggleMenu);
modalOverlay.addEventListener('click', toggleOverlay);