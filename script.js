// const btn = document.getElementById('scrl-to-btn');

// btn.addEventListener('click', () => window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
// }));



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');

        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));  