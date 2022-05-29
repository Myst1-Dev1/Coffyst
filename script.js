
const menu = document.getElementById("menu-bar");
const navbar = document.querySelector(".navbar");

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times');
})


//
