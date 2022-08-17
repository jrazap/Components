let btns = document.querySelectorAll(".btn");
let btnsDiv = document.querySelector(".btns");
let contents = document.querySelectorAll(".content");

btnsDiv.addEventListener("click", (e) => {
  let tap = e.target.dataset.tap;
  if (tap) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
  }

  contents.forEach((content) => {
    content.classList.remove("active-tap");
    let element = document.getElementById(tap);
    element.classList.add("active-tap");
  });
});