const slider = document.querySelector(".slider");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector('.bottom');
let slideNumber = 1, length = images.length;

images.forEach(() => bottom.innerHTML += '<div class="nav"></div>');
const navs = document.querySelectorAll('.nav');
navs[0].classList.add('active');

const updateSlider = () => slider.style.transform = `translateX(-${(slideNumber - 1) * 800}px)`;
const updateNav = () => navs.forEach(nav => nav.classList.remove('active')) & navs[slideNumber - 1].classList.add('active');

navs.forEach((nav, i) => nav.addEventListener("click", () => {
    slideNumber = i + 1;
    updateSlider();
    updateNav();
}));

next.addEventListener("click", () => {
    slideNumber = (slideNumber < length) ? slideNumber + 1 : 1;
    updateSlider();
    updateNav();
});

prev.addEventListener("click", () => {
    slideNumber = (slideNumber > 1) ? slideNumber - 1 : length;
    updateSlider();
    updateNav();
});

let autoSlideInterval = setInterval(() => {
    slideNumber = (slideNumber % length) + 1;
    updateSlider();
    updateNav();
}, 2000);
