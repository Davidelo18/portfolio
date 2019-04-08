import '../css/main.scss';
import 'babel-polyfill';

import PdfFile from '../img/cv.pdf';
import { resolve } from 'path';
import { SSL_OP_EPHEMERAL_RSA } from 'constants';

// --- menu ---

const navigation = document.getElementById('menu');
const navTop = navigation.offsetTop; 
const dropdownBtn = document.getElementById('dropdownBtn');
const menu = document.getElementById('siteMenu');
const menuLinks = document.querySelectorAll('.menu__link');

dropdownBtn.addEventListener('click', () => {
    dropdownBtn.classList.toggle('open');
    menu.classList.toggle('menu__list--active');
});

menuLinks.forEach(link => link.addEventListener('click', smoothScroll));

function smoothScroll(e) {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href');

    window.scrollTo({
        top: target==="#" ? 0 : document.querySelector(target).offsetTop - navigation.offsetHeight,
        behavior: "smooth"
    });
}

// --- banner ---

function wait(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

const banner = document.getElementById('siteBanner');
const words = "Witaj w moim portfolio!";

async function typeWritter() {
    for (let ch of words) {
        banner.textContent += ch;
        await wait(100);
    }
}

typeWritter();

// technology flip card

const cards = document.querySelectorAll('.article__technology');

cards.forEach(card => {
    card.addEventListener('click', () => { card.classList.toggle('article__technology--fliping') });
});