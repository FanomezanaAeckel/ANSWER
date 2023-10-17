const enigmeOne = document.querySelectorAll(".enigme1");
const enigmeTwo = document.querySelectorAll(".enigme2");
const enigmeThree = document.querySelectorAll(".enigme3");
const first = document.getElementById("firstBtn");
const then = document.getElementById("thenBtn");
const last = document.getElementById("lastBtn");

function showFirst() {
  enigmeOne.forEach((enim1) => {
    enim1.classList.add("desanimation");
    enim1.style.display = "none";
  });
  enigmeTwo.forEach((enim2) => {
    enim2.classList.add("animation");
    enim2.style.display = "initial";
  });
}
function showThen() {
  enigmeTwo.forEach((enim2) => {
    enim2.classList.add("desanimation");
    enim2.style.display = "none";
  });
  enigmeThree.forEach((enim3) => {
    enim3.classList.add("animation");
    enim3.style.display = "initial";
  });
}
first.addEventListener("click", showFirst);
then.addEventListener("click", showThen);
