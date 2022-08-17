const reviews = [
  {
    id: 1,
    name: "Mohamed Elazap",
    job: "Front End Developer",
    img: "pic1.jpg",
    txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil expedita modi quidem ipsam nostrum accusantium esse dignissimos consequuntur. Aspernatur quasi labore ab.",
  },
  {
    id: 2,
    name: "Jane Deo",
    job: "Graphic Designer",
    img: "pic2.png",
    txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, aliquam. Vel fugiat cupiditate numquam totam! ",
  },
  {
    id: 3,
    name: "Ahmed Salem",
    job: "Back End Developer",
    img: "pic3.png",
    txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos ab iusto temporibus explicabo modi eveniet, minus ullam quo saepe. ",
  },
  {
    id: 4,
    name: "Sam Mike",
    job: "UI/UX Designer",
    img: "pic4.png",
    txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea in fuga voluptates magni expedita.",
  },
];

let image = document.getElementById("person-img");
let author = document.getElementById("author");
let job = document.getElementById("job");
let info = document.getElementById("info");
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let randomBtn = document.querySelector(".random-btn");

let currentItem = 0;
function showPerson() {
  image.src = "./img/" + reviews[currentItem].img;
  author.innerHTML = reviews[currentItem].name;
  job.innerHTML = reviews[currentItem].job;
  info.innerHTML = reviews[currentItem].txt;
}
showPerson();
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});
randomBtn.addEventListener('click',()=>{
    currentItem = Math.floor(Math.random()*reviews.length);
    showPerson();
})