const openNav = document.querySelector("fa-bars");
const closeNav = document.querySelector("fa-xmark");
const navMenu = document.querySelector("nav-links-container");

openNav.addEventListener("click", toggle);
closeNav.addEventListener("click", toggle);

function toggle() {
  navMenu.classList.toggle("open");
}
