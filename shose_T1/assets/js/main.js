let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}
window.onscroll = () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');

    }
    /*==========Slide in slide-container */
let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
/*================Featured sectiion============== */
// shose_1
document.querySelectorAll('.featured-image-1').forEach(image1 => {
    image1.addEventListener('click', () => {
        var srcs = image1.getAttribute('src');
        document.querySelector('.big-image-1').src = srcs;
    });
});
// shose_2
document.querySelectorAll('.featured-image-2').forEach(image2 => {
    image2.addEventListener('click', () => {
        var srcs = image2.getAttribute('src');
        document.querySelector('.big-image-2').src = srcs;
    });
});
// shose_3
document.querySelectorAll('.featured-image-3').forEach(image3 => {
    image3.addEventListener('click', () => {
        var srcs = image3.getAttribute('src');
        document.querySelector('.big-image-3').src = srcs;
    });
});
/*=================dark_them=================  */
let light = document.querySelector('#light');
console.log(light);
light.onclick = () => {
    if (light.classList.contains('fa-sun')) {
        light.classList.replace('fa-sun', 'fa-moon');
        console.log('sun');
        document.body.classList.add('active');
    } else {
        light.classList.replace('fa-moon', 'fa-sun');
        console.log('moon');
        document.body.classList.remove('active');
    }
}