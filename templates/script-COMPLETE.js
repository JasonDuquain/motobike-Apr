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
    let docHeight;
    let scollPos;
    let offset = 100;
    let bttBtn = document.querySelector('#back-to-top');
    let heightsArr = [document.body.scrollHeight, document.documentElement.clientHeight, document.documentElement.offsetHeight, document.body.offsetHeight];
    docHeight = Math.max(...heightsArr);
    let isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
    
    if (docHeight != 'undefined') {
        offset = docHeight / 4;
    }
    
    window.addEventListener('scroll', function(e) {
        scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
        (scrollPos > offset) ? bttBtn.classList.add('visible') : bttBtn.classList.remove('visible');
    });
    
    bttBtn.addEventListener('click', (e) => {
        e.preventDefault();
        (isFirefox) ? document.body.scrollTop = 0 : document.documentElement.scrollTop = 0;
    });
    
}


/********STICKY HEADER*********/

let hdr = document.querySelector('header');
let hdrHeight = hdr.getBoundingClientRect().height;
let slider = document.querySelector('.slider');
let subHeading = document.querySelector('.sub-header');

document.addEventListener('scroll', (e) => {
    if ((slider && slider.getBoundingClientRect().top <= 0) || (subHeading && subHeading.getBoundingClientRect().top <= 0)) {
        hdr.classList.add('sticky');
        document.body.style.paddingTop = `${hdrHeight}px`;
    } else {
        hdr.classList.remove('sticky');
        document.body.style.paddingTop = 0;
    }
});

/*******FADE IN ON SCROLL **********/
let fadeSects = document.querySelectorAll('.post, .row-two .adjust-3');

document.addEventListener('scroll', function() {

    fadeSects.forEach((el) => {
        
        if (el.getBoundingClientRect().top <= 400) {
            el.classList.add('fadeIn');
        }
        
    });
    
});



/***************HAMBURGER MENU **********/

let icon = document.querySelector('.icon');

icon.addEventListener('click', function(e) {
    e.preventDefault();
    hdr.classList.toggle('visible');
});










        

