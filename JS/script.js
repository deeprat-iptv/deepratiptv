document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        if (href === 'index.html') {
            return;
        }


        e.preventDefault(); 

        const menu = document.querySelector('.navbar .menu');
        menu.classList.remove('show');

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleMenu() {
    const menu = document.querySelector('.navbar .menu');
    menu.classList.toggle('show');
}