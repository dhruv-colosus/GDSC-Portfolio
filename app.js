//Scroll Change Effect
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav_list a");
console.log(navLi);
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop;

    const sectionHeight = section.clientHeight;
    if (pageYOffset >= top / 1.3) {
      current = section.getAttribute("id");
    }
  });
  console.log(current);
  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
});

//Progress Bar

let progressbar1 = document.querySelector(".box1");
let progressbar2 = document.querySelector(".box2");
let progressbar3 = document.querySelector(".box3");
let progressbar4 = document.querySelector(".box4");

let progressValue = 0;
let progressValue2 = 0;
let progressValue3 = 0;
let progressValue4 = 0;
let progressEndValue1 = 65;
let progressEndValue2 = 80;
let progressEndValue3 = 50;
let progressEndValue4 = 90;
let speed = 25;

let progress = setInterval(() => {
  progressValue++;
  progressbar1.style.background = `conic-gradient(
        crimson ${progressValue * 3.6}deg,
        rgb(247, 105, 117) ${progressValue * 3.5}deg
    )`;
  if (progressValue === progressEndValue1) {
    clearInterval(progress);
  }
}, speed);

let progress1 = setInterval(() => {
  progressValue2++;
  progressbar2.style.background = `conic-gradient(
        crimson ${progressValue2 * 3.6}deg,
        rgb(247, 105, 117) ${progressValue * 3.5}deg
    )`;
  if (progressValue2 === progressEndValue2) {
    clearInterval(progress1);
  }
}, speed);

let progress2 = setInterval(() => {
  progressValue2++;
  progressbar3.style.background = `conic-gradient(
        crimson ${progressValue2 * 3.6}deg,
        rgb(247, 105, 117) ${progressValue2 * 3.5}deg
    )`;
  if (progressValue2 === progressEndValue3) {
    clearInterval(progress2);
  }
}, speed);

let progress3 = setInterval(() => {
  progressValue3++;
  progressbar4.style.background = `conic-gradient(
        crimson ${progressValue3 * 3.6}deg,
        rgb(247, 105, 117) ${progressValue3 * 3.5}deg
    )`;
  if (progressValue3 === progressEndValue4) {
    clearInterval(progress3);
  }
}, speed);

//Responsive Design
