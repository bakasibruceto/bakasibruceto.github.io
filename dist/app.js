window.onload = function () {
    anime({
        targets: '#imageContainer',
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad'
    });
    anime({
        targets: 'img[src="../img/3.png"]',
        keyframes: [
            { translateX: -20, rotate: 8 },
            { translateX: 0, rotate: 0 }
        ],
        duration: 10000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });
    anime({
        targets: 'img[src="../img/4.png"]',
        keyframes: [
            { translateX: -40, rotate: 16 },
            { translateX: 0, rotate: 0 }
        ],
        duration: 11000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });

    anime({
        targets: 'img[src="../img/5.png"]',
        keyframes: [
            { translateX: -25, rotate: 10 },
            { translateX: 0, rotate: 0 },
        ],
        duration: 9900,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });

    anime({
        targets: 'img[src="../img/6.png"]',
        keyframes: [
            { translateX: 10, rotate: -5 },
            { translateX: -10, rotate: 5 },

        ],
        duration: 11000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });

    anime({
        targets: 'img[src="../img/7.png"]',
        keyframes: [
            { translateX: 25, rotate: -10 },
            { translateX: 20, rotate: -8 },

        ],
        duration: 9800,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });

    anime({
        targets: 'img[src="../img/8.png"]',
        keyframes: [
            { translateX: 10, rotate: -5 },
            { translateX: -10, rotate: 5 },

        ],
        duration: 9800,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });

    anime({
        targets: 'img[src="../img/9.png"]',
        keyframes: [
            { translateX: 30, rotate: -12 },
            { translateX: 0, rotate: 0 },


        ],
        duration: 9800,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });

}






















