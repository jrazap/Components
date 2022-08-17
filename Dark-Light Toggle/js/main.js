function $(el) {
  return document.querySelector(el);
}
let container = $("body");
let toggle = $("#toggle-theme");
toggle.addEventListener("input", (e) => {
  const isChecked = e.target.checked;
  if (isChecked) {
    container.classList.add("dark");
  } else {
    container.classList.remove("dark");
  }
});
