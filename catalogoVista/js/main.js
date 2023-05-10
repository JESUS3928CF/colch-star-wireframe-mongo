
// Swiper
var swiper = new Swiper('.home', {
    spaceBetween: 30,
    centeredSlides: true,
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
        menu.classList.toggle('bx-x');
}

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

