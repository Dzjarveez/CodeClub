const elementCourses = document.querySelector(".courses");
const subListBody = document.querySelector(".menu__sub-list");
const menuArrow = document.querySelector(".menu__arrow");
const header = document.querySelector(".header"); 
const whiteLogo = document.querySelector(".white-logo"); 
const blackLogo = document.querySelector(".black-logo"); 
const menuLinks = document.querySelectorAll(".menu__link"); 
const menuSubList = document.querySelector(".menu__sub-list"); 
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu");
const menuDarkSide = document.querySelector(".menu__dark-side");

elementCourses.addEventListener("click", (event) => {
    event._isClick = true;
    subListBody.classList.toggle("_active");
    menuArrow.classList.toggle("_active");
    elementCourses.classList.toggle("_active");
});

document.body.addEventListener("click", (event) => {
    if (event._isClick == true) return
        subListBody.classList.remove("_active");
        menuArrow.classList.remove("_active");
        elementCourses.classList.remove("_active");
});

window.addEventListener("scroll", (event) => {
    let scrollDistance = window.scrollY;

    if (scrollDistance > 0) {
        header.classList.add("_white");
        whiteLogo.classList.add("_scroll");
        blackLogo.classList.add("_scroll");
        menuSubList.classList.add("_scroll");
        menuArrow.classList.add("_scroll");
        iconMenu.classList.add("_scroll");
        menuLinks.forEach(function(i) {
            i.classList.add("_scroll");
        });
    } else {
        header.classList.remove("_white");
        whiteLogo.classList.remove("_scroll");
        blackLogo.classList.remove("_scroll");
        menuSubList.classList.remove("_scroll");
        menuArrow.classList.remove("_scroll");
        iconMenu.classList.remove("_scroll");
        menuLinks.forEach(function(i) {
            i.classList.remove("_scroll");
        });
    };
});


iconMenu.addEventListener("click", (event) => {
    menuBody.classList.toggle("_menu");
    iconMenu.classList.toggle("_active");
    document.body.classList.toggle("_lock");
});

menuDarkSide.addEventListener("click", (event) => {
    menuBody.classList.remove("_menu");
    iconMenu.classList.remove("_active");
    document.body.classList.remove("_lock");
});
