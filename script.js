document.addEventListener('DOMContentLoaded', function () {

    // ── Scroll reveal ──
    var reveals = document.querySelectorAll('[data-reveal]');
    function checkReveal() {
        for (var i = 0; i < reveals.length; i++) {
            var el = reveals[i];
            if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
                el.classList.add('revealed');
            }
        }
    }
    window.addEventListener('scroll', checkReveal);
    checkReveal();

    // ── Mobile nav ──
    var toggle = document.querySelector('.nav-toggle');
    var mobileNav = document.querySelector('.nav-mobile');
    toggle.addEventListener('click', function () {
        mobileNav.classList.toggle('active');
    });
    mobileNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () { mobileNav.classList.remove('active'); });
    });

    // ── Smooth scroll avec offset (barre fixe) ──
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                var offset = 120; // nav + barre urgence
                window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - offset, behavior: 'smooth' });
            }
        });
    });

    // ── FAQ accordion ──
    document.querySelectorAll('.faq-question').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var item = this.parentElement;
            var isOpen = item.classList.contains('open');
            // Fermer tous
            document.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('open'); });
            // Ouvrir si était fermé
            if (!isOpen) item.classList.add('open');
        });
    });

    // ── Sticky CTA (apparaît après 600px de scroll) ──
    var stickyCta = document.getElementById('stickyCta');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 600) {
            stickyCta.classList.add('visible');
        } else {
            stickyCta.classList.remove('visible');
        }
    }, { passive: true });

});
