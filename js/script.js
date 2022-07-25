const burgerMenu = document.querySelector(".burger-menu");
const headerMenu = document.querySelector(".header-menu");

burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("burger-open");
  headerMenu.classList.toggle("open-menu");
});
