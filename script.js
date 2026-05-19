document.addEventListener('DOMContentLoaded', function () {

    // Scroll reveal
    var reveals = document.querySelectorAll('[data-reveal]');

    function checkReveal() {
        for (var i = 0; i < reveals.length; i++) {
            var el = reveals[i];
            var top = el.getBoundingClientRect().top;
            var trigger = window.innerHeight * 0.85;
            if (top < trigger) {
                el.classList.add('revealed');
            }
        }
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal();

    // Mobile nav toggle
    var toggle = document.querySelector('.nav-toggle');
    var mobileNav = document.querySelector('.nav-mobile');

    toggle.addEventListener('click', function () {
        mobileNav.classList.toggle('active');
    });

    var mobileLinks = mobileNav.querySelectorAll('a');
    for (var i = 0; i < mobileLinks.length; i++) {
        mobileLinks[i].addEventListener('click', function () {
            mobileNav.classList.remove('active');
        });
    }

    // Smooth anchor offset for fixed nav
    var anchors = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                var offset = 80;
                var pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }
        });
    }
});
