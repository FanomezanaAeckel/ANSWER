const imgAll = document.querySelectorAll(".Imgslider");
const containImg = document.getElementById("image");
const Next = document.getElementById("scrol");
let index = 0;

function updates() {
  imgAll.forEach((image) => {
    image.style.transform = `translateX(-${index * 100}%)`;
  });
}
Next.addEventListener("click", () => {
  if (index < imgAll.length - 1) {
    index++;
    updates();
  } else {
    index = 0;
    updates();
  }
});
