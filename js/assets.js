import { techCards, profile, rating } from './functions.js';
import { runAnimations } from './anime.js';
import { classes, images } from './img.js';

// techCards
const ids = ['html', 'css', 'js', 'php', 'python', 'git', 'github', 'laravel', 'tailwind'];
const links = [
    'https://img.icons8.com/color/480/html-5--v1.png',//html
    'https://img.icons8.com/color/480/css3.png',//css
    'https://img.icons8.com/color/480/javascript--v1.png',//javascript
    'https://www.php.net/images/logos/new-php-logo.svg',//php
    'https://img.icons8.com/color/480/python--v1.png',//python
    'https://img.icons8.com/color/480/git.png',//git
    'https://img.icons8.com/color/480/github--v1.png',//github
    'https://laravel.com/img/logomark.min.svg',//laravel
    'https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg'//tailwind
];
const titles = ['HTML5', 'CSS3', 'JavaScript', 'PHP','Python', 'Git', 'GitHub', 'Laravel', 'Tailwind'];

techCards(ids, links, titles);

//id  //rating 1-5
rating('html', 5);
rating('js', 3);
rating('php', 3);
rating('python', 4);
rating('css', 3);
rating('git', 3);
rating('github', 5);
rating('laravel', 3);
rating('tailwind', 3);

//profile(img_src, class_name)
profile(images, classes);
runAnimations();

document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
});

// AOS js
AOS.init({
    duration: 1100,
    once: false,
    // disable: 'mobile'
});


// Lenis Scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//Progress Bar js
var bar = new ProgressBar.Line('#progress', {
    strokeWidth: 4,
    easing: 'linear',
    duration: 0,
    color: '#00008B',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: { width: '100%', height: '5px' }
});

window.onscroll = function () {
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPosition = window.scrollY;
    var progress = scrollPosition / docHeight;
    bar.animate(progress);  // Number from 0.0 to 1.0
};


$(document).on('load', function () {
    // Page preloader
    setTimeout(function () {
        $('#jsPreloader').fadeOut(500)
    }, 1000)
});




