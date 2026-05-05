// Navbar Transparency Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    nav.style.background = window.scrollY > 50 ? 'rgba(255,255,255,0.95)' : 'transparent';
    nav.style.boxShadow = window.scrollY > 50 ? '0 5px 15px rgba(0,0,0,0.1)' : 'none';
});
