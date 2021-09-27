"use strict"

let popupBg = document.querySelector('.overlay');
let popupMainBg = document.querySelector('.main-container');
let popup = document.querySelector('.modal-brands');
let openPopupButtons = document.querySelectorAll('.category__link');
let closePopupButton = document.querySelector('.modal-brands__closes');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('overlay_active');
        popupMainBg.classList.add('main-container_active');
        popup.classList.add('modal-brands_active');
    })
});

closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('overlay_active');
    popupMainBg.classList.remove('main-container_active');
    popup.classList.remove('modal-brands_active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('overlay_active');
        popupMainBg.classList.remove('main-container_active');
        popup.classList.remove('modal-brands_active');
    }
});