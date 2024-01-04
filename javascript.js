       

        const myObserver = new IntersectionObserver((entries) => {
             entries.forEach((entry) =>{
                if(entry.isIntersecting){
                    entry.target.classList.add('show')
                } else {
                    entry.target.classList.remove('show')
                }
             })
        })

        const elements = document.querySelectorAll('.hidden')

        elements.forEach((element) => myObserver.observe(element))

        
        document.addEventListener('DOMContentLoaded', function() {
            const hamburgerBtn = document.querySelector('.navigation');
            const menu = document.querySelector('.nav-menu');
        
            hamburgerBtn.addEventListener('click', function() {
                menu.classList.toggle('active');
            });
        });
        
        const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

