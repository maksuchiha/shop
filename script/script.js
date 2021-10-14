"use strict"
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
        menuItem = document.querySelectorAll('.nav-menu__link'),
        hamburger = document.querySelector('.hamburger'),
        body = document.querySelector('.overf');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
        body.classList.toggle('overf_active');
    });
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
            body.classList.toggle('overf_active');
        })
    })
});