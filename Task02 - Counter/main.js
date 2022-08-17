let count = 0;
let val = document.getElementById("count");
let btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", () => {
    let classes = btn.classList;
    if (classes.contains("inc")) {
      count++;
    } else if (classes.contains("dec")) {
      count--;
    } else {
      count = 0;
    }

    if (count > 0) {
      val.style.color = "green";
    } else if (count < 0) {
      val.style.color = "red";
    } else {
      val.style.color = "white";
    }
    val.innerHTML = count;
  });
});
