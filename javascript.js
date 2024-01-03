const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.navigation');
    const menu = document.querySelector('.nav-menu');

    hamburgerBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});


var $doc = $('html, body');
        $('a').click(function() {
            $doc.animate({
                scrollTop: $( $.attr(this, 'href')).offset().top
            }), 10;
            return false;
        });
