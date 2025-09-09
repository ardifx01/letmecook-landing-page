const jumbotron = document.querySelector(".jumbotron");

const backgrounds = [
    "assets/images/landing1.webp",
    "assets/images/landing2.webp",
    "assets/images/landing3.webp"
];

let index = 0;

jumbotron.style.backgroundImage = `url(${backgrounds[index]})`;

setInterval(() => {
    index = (index + 1) % backgrounds.length;
    jumbotron.style.backgroundImage = `url(${backgrounds[index]})`;
}, 8000);