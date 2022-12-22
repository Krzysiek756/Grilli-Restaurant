'use strict';


/*****************************Preload*****************************/

//loading will be end after documents is loaded

const preloader = document.querySelector("[data-preaload]");


console.log(preloader)

window.addEventListener('load', function () {

    document.body.classList.add('loaded');
    preloader.classList.add('loaded');

})