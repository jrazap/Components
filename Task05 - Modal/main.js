let openBtn = document.querySelector(".container .open-btn");
let overlay = document.querySelector(".overlay");
let closeBtn = document.querySelector(".overlay .fa-times");

openBtn.addEventListener("click", () => {
  overlay.classList.add("openBanner");
});
closeBtn.addEventListener("click", () => {
  overlay.classList.remove("openBanner");
});