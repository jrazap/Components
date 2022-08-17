// Get Slider Items
var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// Get Number of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Previous and Next Buttons
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");

// Handle Clicks
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

// Create The Main Ul
var paginationElment = document.createElement("ul");
paginationElment.setAttribute("id", "pagination-ul");

// Create List Items Based on Slides Number
for (let i = 1; i <= slidesCount; i++) {
  var paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  paginationItem.appendChild(document.createTextNode(i));
  paginationElment.appendChild(paginationItem);
}
document.getElementById("indicators").appendChild(paginationElment);

// Get The New Created UL
var paginationCreatedUl = document.getElementById("pagination-ul");
var slideNumber = document.getElementById("slide-number");

// Get Pagination Items
var paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}
theChecker();
// Next Slide Function
function nextSlide() {
  if (nextBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}
// Previous Slide Function
function prevSlide() {
  if (prevBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}
// The Checker Function
function theChecker() {
  // Set The Slide number
  slideNumber.textContent = currentSlide + " / " + slidesCount;

  // Remove All Active Classes
  removeActive();

  // Set Active Class on Current Slide
  sliderImages[currentSlide - 1].classList.add("active");

  // Set Active Class on Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // Check if Current Slide is The First
  if (currentSlide == 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
  // Check if Current Slide is The Last
  if (currentSlide == slidesCount) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}
// Remove All Active Classes
function removeActive() {
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });

  paginationBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
