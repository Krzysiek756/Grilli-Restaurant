'use strict';


/*****************************Preload*****************************/

//loading will be end after documents is loaded

const preloader = document.querySelector("[data-preaload]");



window.addEventListener('load', function () {

    document.body.classList.add('loaded');
    preloader.classList.add('loaded');

})

//Add events listener of multiple elements



const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}


//Navbar 

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");



const togglerNavbar = function () {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('nav-active');

}


addEventOnElements(navTogglers, 'click', togglerNavbar);