import { techCards, profile, rating } from './functions.js';
import { runAnimations } from './anime.js';
import { classes, images } from './img.js';

// techCards
const ids = [ 'html','css','js','php','git','github','laravel','tailwind'];
const links = [
    'https://img.icons8.com/color/480/html-5--v1.png',//html
    'https://img.icons8.com/color/480/css3.png',//css
    'https://img.icons8.com/color/480/javascript--v1.png',//javascript
    'https://www.php.net/images/logos/new-php-logo.svg',//php
    'https://img.icons8.com/color/480/git.png',//git
    'https://img.icons8.com/color/480/github--v1.png',//github
    'https://laravel.com/img/logomark.min.svg',//laravel
    'https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg'//tailwind
];
const titles = ['HTML5','CSS3','JavaScript','PHP','Git','GitHub','Laravel','Tailwind'];

techCards(ids, links, titles);

//id  //rating 1-5
rating('html', 5);
rating('js', 3);
rating('php', 3);
rating('css', 3);
rating('git', 3);
rating('github', 5);
rating('laravel', 3);
rating('tailwind', 3);

//profile(img_src, class_name)
profile(images, classes);
runAnimations();
