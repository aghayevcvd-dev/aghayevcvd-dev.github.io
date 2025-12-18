document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const primaryNav = document.getElementById('primary-nav');
    const siteHeader = document.querySelector('.site-header') || document.body;

    if (navToggle && primaryNav) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            siteHeader.classList.toggle('nav-open', !isExpanded);
        });

        primaryNav.addEventListener('click', function(event) {
            if (event.target.tagName === 'A') {
                navToggle.setAttribute('aria-expanded', 'false');
                siteHeader.classList.remove('nav-open');
            }
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && siteHeader.classList.contains('nav-open')) {
                navToggle.setAttribute('aria-expanded', 'false');
                siteHeader.classList.remove('nav-open');
            }
        });
    }

    const currentPath = window.location.pathname;
    const navLinks = primaryNav.querySelectorAll('a');

    navLinks.forEach(link => {
        if (!link.hasAttribute('aria-current')) {
            const linkPath = new URL(link.href).pathname;
            if (linkPath === currentPath) {
                link.setAttribute('aria-current', 'page');
            }
        }
    });
});
