let slider = document.querySelector(".slider");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

const images = document.querySelectorAll(".image");

let slideNumber = 1;
let length = images.length;

const bottom = document.querySelector('.bottom');

for (let i = 0; i < length; i++) {
    const div = document.createElement('div');
    div.className = 'nav';
    bottom.appendChild(div);
}

const navs = document.querySelectorAll('.nav');

// Set first nav dot as active
navs[0].classList.add('active');

// Function to reset background color of all navs
const resetNavs = () => {
    navs.forEach((nav) => {
        nav.classList.remove('active');
    });
};

// Event listener for nav dot clicks
navs.forEach((nav, i) => {
    nav.addEventListener("click", () => {
        resetNavs();
        slider.style.transform = `translateX(-${i * 800}px)`;
        slideNumber = i + 1;
        nav.classList.add('active');
    });
});

// Change active nav dot based on current slide
const changeActiveNav = () => {
    resetNavs();
    navs[slideNumber - 1].classList.add('active');
};

// Move to the next slide
const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
};

// Move to the previous slide
const prevSlide = () => {
    slideNumber--;
    slider.style.transform = `translateX(-${(slideNumber - 1) * 800}px)`;
};

// Go to the first slide
const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};

// Go to the last slide
const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    slideNumber = length;
};

// Event listener for the next button
next.addEventListener("click", () => {
    slideNumber < length ? nextSlide() : getFirstSlide();
    changeActiveNav();
});

// Event listener for the previous button
prev.addEventListener("click", () => {
    slideNumber > 1 ? prevSlide() : getLastSlide();
    changeActiveNav();
});
