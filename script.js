document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector('header');
    var hero = document.querySelector('.hero-container');
    var heroY = hero.offsetTop;
    var lastScrollTop = 0;
    var scrollTrack = 100;

    window.addEventListener('scroll', function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > heroY + scrollTrack) {
            // Scrolling down
            header.classList.add('fixed');
        } else {
            // Scrolling up
            header.classList.remove('fixed');
        }

        lastScrollTop = scrollTop;
    });
});