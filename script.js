const btn = document.getElementById('scrl-to-btn');

btn.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
}));