const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})


document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        toggleMenu();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
});

window.sr = ScrollReveal({reset: true});

sr.reveal('.item-menu' , {duration: 2000});



document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.navigation');
    const menu = document.querySelector('.nav-menu');

    hamburgerBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
