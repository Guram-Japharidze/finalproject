let mobileMenu = document.querySelector(".header_ul");
let burger = document.querySelector(".burger");
let xMark = document.querySelector(".fa-xmark");

burger.addEventListener("click", () => {
  burger.style.display = "none";
  xMark.style.display = "block";
  mobileMenu.style.display = "flex";

});

xMark.addEventListener("click", () => {
  burger.style.display = "block";
  xMark.style.display = "none";
  mobileMenu.style.display = "none";

});