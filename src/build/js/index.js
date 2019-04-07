import '../css/main.scss';

const dropdownBtn = document.getElementById('dropdownBtn');
const menu = document.getElementById('siteMenu');

dropdownBtn.addEventListener('click', () => {
    dropdownBtn.classList.toggle('open');
    menu.classList.toggle('menu__list--active');
});