document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const primaryNav = document.getElementById('primary-nav');
    const siteHeader = document.querySelector('.site-header') || document.body;

    /* =========================
       Mobile navigation toggle
       ========================= */
    if (navToggle && primaryNav) {
        navToggle.addEventListener('click', function () {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!isExpanded));
            siteHeader.classList.toggle('nav-open', !isExpanded);
        });

        primaryNav.addEventListener('click', function (event) {
            if (event.target.tagName === 'A') {
                navToggle.setAttribute('aria-expanded', 'false');
                siteHeader.classList.remove('nav-open');
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && siteHeader.classList.contains('nav-open')) {
                navToggle.setAttribute('aria-expanded', 'false');
                siteHeader.classList.remove('nav-open');
            }
        });
    }

    /* =========================
       Highlight current nav link
       ========================= */
    if (primaryNav) {
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
    }

    /* =========================
       Subtle header animation
       ========================= */
    // Fade in header on load
    if (siteHeader) {
        siteHeader.style.opacity = '0';
        siteHeader.style.transition = 'opacity 0.6s ease-out';
        requestAnimationFrame(() => {
            siteHeader.style.opacity = '1';
        });

        // Add a shadow when scrolling down a bit
        window.addEventListener('scroll', function () {
            if (window.scrollY > 10) {
                siteHeader.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            } else {
                siteHeader.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            }
        });
    }

    /* =========================
       Scroll‑in animations
       ========================= */
    const animatedElements = document.querySelectorAll(
        '.hero, .card, main h1, main section'
    );

    if ('IntersectionObserver' in window && animatedElements.length > 0) {
        animatedElements.forEach(el => {
            // Initial hidden state
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        });

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                        obs.unobserve(el);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        animatedElements.forEach(el => observer.observe(el));
    } else {
        // Fallback: just show elements if IntersectionObserver is not supported
        animatedElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }

    /* =========================
       Dark mode toggle
       ========================= */
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    if (themeToggle) {
        // Apply saved theme if it exists
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.setAttribute('aria-pressed', 'true');
        } else {
            themeToggle.setAttribute('aria-pressed', 'false');
        }

        themeToggle.addEventListener('click', () => {
            const isDark = !body.classList.contains('dark-mode');
            if (isDark) {
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
            themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
        });
    }
});