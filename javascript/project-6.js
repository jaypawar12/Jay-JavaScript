let slider = document.querySelector(".slider");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

const images = document.querySelectorAll(".image")

let slideNumber = 1;
let length = images.length;

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
};

const prevSlide = () => {
    slideNumber--;
    slider.style.transform = `translateX(-${(slideNumber-1) * 800}px)`;
};

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length-1)*800}px)`;
    slideNumber = length;
};

next.addEventListener("click", () => {
    slideNumber < length ? nextSlide() : getFirstSlide();

});
prev.addEventListener("click", ()=> {
    slideNumber > 1 ? prevSlide() : getLastSlide();
});

const bottom = document.querySelector('.bottom');

for(let i = 0; i < length; i++){
    const div = document.createElement('div');
    div.className = 'nav';
    bottom.appendChild(div);
}
const navs = document.querySelectorAll('.nav');
