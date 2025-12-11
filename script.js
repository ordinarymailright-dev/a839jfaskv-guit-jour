let lastScroll = 0;
const navbar = document.querySelector('.top-nav');

window.addEventListener('scroll', () => {
    const current = window.scrollY;

    if(current>lastScroll) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }

    lastScroll = current;
});