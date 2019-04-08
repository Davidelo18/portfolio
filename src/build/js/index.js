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

dropdownBtn.addEventListener('click', () => {
    dropdownBtn.classList.toggle('open');
    menu.classList.toggle('menu__list--active');
});

window.addEventListener('scroll', () => {
    if (window.scrollY >= navTop) {
        navigation.classList.add('fixed');
    } else {
        navigation.classList.remove('fixed');
    }
});

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