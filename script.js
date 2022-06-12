
const menu = document.getElementById("menu-bar");
const navbar = document.querySelector(".navbar");
const close = document.getElementById("close-bar");

menu.addEventListener('click', () => {
    navbar.classList.add('active');
})

close.addEventListener('click', () => {
    navbar.classList.remove('active');
})


//
