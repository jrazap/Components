let persons = {
  mohamed: {
    PName: "Mohamed",
    PImg: "./img/mohamed.jpg",
    PDate: "December 18, 2022 00:00:00",
  },
};

let giveaway = document.querySelector(".giveaway");
let deadline = document.querySelector(".deadline");
let items = document.querySelectorAll(".deadline h4");
let msg = document.querySelector(".birthdayMsg");
let img = document.getElementById("img");

// Changed Values
let someone = persons.mohamed;
// Fixed Values
let futureDate = new Date(someone.PDate);
let name = someone.PName;
img.src = someone.PImg;

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let year = futureDate.getFullYear(); // Get Year
let month = futureDate.getMonth();
month = months[month]; // Get Month +1
let day = futureDate.getDate(); // Get Day
let hours = futureDate.getHours(); // Get Hours
let minutes = futureDate.getMinutes(); // Get Minutes
let seconds = futureDate.getSeconds(); // Get Seconds
let weekDay = futureDate.getDay();
weekDay = days[weekDay]; // Get Day +1

giveaway.innerHTML = `Birthday starts on ${weekDay}, ${format(day)} ${format(
  month
)} ${year} ${format(hours)}:${format(minutes)} am`;

let futureTime = futureDate.getTime();
// Get Remain Function
function getRemain() {
  let today = new Date().getTime();
  let diff = futureTime - today;
  let oneDay = 24 * 60 * 60 * 1000;
  let oneHour = 60 * 60 * 1000;
  let oneMin = 60 * 1000;
  let oneSec = 1000;

  let days = Math.floor(diff / oneDay);
  let hours = Math.floor((diff % oneDay) / oneHour);
  let minutes = Math.floor((diff % oneHour) / oneMin);
  let seconds = Math.floor((diff % oneMin) / oneSec);

  const values = [days, hours, minutes, seconds];

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (diff < 0) {
    clearInterval(cutDown);
    deadline.style.display = "initial";
    
    deadline.innerHTML = `<h1>HAPPY BIRTHDAY TO YOU.</h1>`;
    deadline.innerHTML += `<center><img src="./img/bday.gif" width="500px" height="300px"/></center>`;
  }
}
// Format Function
function format(x) {
  if (x < 10) {
    return (x = `0${x}`);
  }
  return x;
}
let cutDown = setInterval(getRemain, 1000);
getRemain();
