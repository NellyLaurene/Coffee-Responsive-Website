let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle('open-menu')
};

//Close Menu on scroll
window.onscroll = () => {
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
};

//ScrollReveal Animation
const animate = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: "2500",
    delay: "300",
});

animate.reveal(".nav");
animate.reveal(".home-text", {origin: "left"});
animate.reveal(".home-img", {origin: "bottom"});
animate.reveal(".ser-box, .product-box, .team-box, .book-data", {interval: 100});