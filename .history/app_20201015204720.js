const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 1}s`;
            }
        });
        burger.classList.toggle('toggle')
    })
}

const imgModal = () => {
    const modal = document.querySelector('.modal');
    const previews = document.querySelectorAll('.nested-gallery img');
    const original = document.querySelector('.full-img');
    const imgText = document.querySelector('.caption');

    previews.forEach(preview => {
        preview.addEventListener('click', () => {
            modal.classList.add('open');
        })
    })
}

const app = () => {
    navSlide();
    imgModal();
}

app();


