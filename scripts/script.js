/********HIGHLIGHT NAV SECT ON CLICK*********/

let menuAnchs = document.querySelectorAll('.menu a');

document.addEventListener('DOMContentLoaded', (e) => {
    menuAnchs.forEach((el) => {
        if (document.title === el.textContent) {
            el.classList.add('clicked');
        }
    });
});


/*****BACK TO TOP BTN (index.html only)******/
if (document.title === 'Home') {
    let scrolled = 0;
    let bttBtn = document.querySelector('#back-to-top');
    let heights = [document.documentElement.scrollHeight, document.documentElement.getBoundingClientRect().height, document.body.offsetHeight];
    let topHeight = Math.max(...heights);

    window.addEventListener('scroll', function(e) {
        (document.documentElement.scrollTop > topHeight / 3) ? bttBtn.classList.add('active') : bttBtn.classList.remove('active');

    });

    bttBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (navigator.userAgent.toLowerCase().includes('chrome')) {
            document.documentElement.scrollTop = 0;  
        } else {
            document.body.scrollTop  = 0;
        }
    });

}

/********STICKY HEADER*********/
let hdr = document.querySelector('header');
let hdrHeight = hdr.getBoundingClientRect().height;
let slider = document.querySelector('.slider');
let subHeading = document.querySelector('.sub-header');

document.addEventListener('scroll', (e) => {
    if ((slider && slider.getBoundingClientRect().bottom <= 0) || (subHeading && subHeading.getBoundingClientRect().bottom <= 0)) {
        hdr.classList.add('sticky');
        document.body.style.paddingTop = `${hdrHeight}px`;
    } else {
        hdr.classList.remove('sticky');
        document.body.style.paddingTop = 0;
    }
});


/*******FADE IN ON SCROLL **********/
let boxes = document.querySelectorAll('.box-4 .adjust-3, section.content-box.box-3 div.post');


document.addEventListener('scroll', function(e) {
    boxes.forEach((el) => {
        if (el.getBoundingClientRect().top <= window.innerHeight / 2) {
            el.classList.add('fadeIn');
        } 
    });
});


/***************HAMBURGER MENU **********/
let icon = document.querySelector('.icon');

icon.addEventListener('click', function(e) {
    hdr.classList.toggle('displayed');
    setTimeout(() => hdr.classList.toggle('visible'), 100);
});









        

