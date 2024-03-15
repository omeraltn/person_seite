var menuBar = document.querySelector('#menu-bar');
var navLinks = document.querySelector('.nav-links');

 navLinks.computedStyleMap.top = '-1000px'

 menuBar.onclick = function () {
    if (navLinks.style.top == '-1000px'){
        navLinks.style.top = '50px';
    }
    else{
        navLinks.style.top = '-1000px'
    }
 }