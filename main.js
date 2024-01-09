// Image slider
const images = ['img/blog-1.jpg', 'img/blog-2.jpg', 'img/blog-3.jpg'];
const img = document.getElementById("sliderImg");
let count = 0;

setInterval(() => {
    count++;
    if (count < 3) {
        img.src = images[count];
    } else {
        count = 0;
        img.src = images[count];
    }
}, 1500);


// Going to the top of the page
const topScroll = document.getElementById("top");
topScroll.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Changing color button
const gear = document.getElementById("gear");
const changeColor = document.getElementById("changeColor");
gear.addEventListener("click", function () {
    changeColor.classList.toggle("show");
});

const colors = document.querySelectorAll(".colors span");
const mainColor = document.querySelector(":root");

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", function (e) {
        const color = e.target.style.background;
        mainColor.style.setProperty("--primary-color", color);
    });
}