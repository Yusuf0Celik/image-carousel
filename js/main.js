console.log("main.js loaded");

const images = document.querySelectorAll(".image");
const btnPrev = document.querySelector(".button-prev");
const btnNext = document.querySelector(".button-next");

btnPrev.addEventListener("click", goPrevious)
btnNext.addEventListener("click", goNext)

function goPrevious() {
  let activeImageID =  -3;
  let nextImg;
  for (let i = 0; i < images.length; i++) {
      const chkImg = images[i];
      if (chkImg.classList.contains('active')) {
          activeImageID = i;
          nextImg = activeImageID - 1;
      }

      if (nextImg < 0) {
          nextImg = images.length - 1;
      }
  }
  images[activeImageID].classList.remove('active');
  images[nextImg].classList.add('active');
}

function goNext() {
  let activeImageID =  -3;
  let nextImg;
  for (let i = 0; i < images.length; i++) {
      const chkImg = images[i];
      if (chkImg.classList.contains('active')) {
          activeImageID = i;
          nextImg = activeImageID + 1;
      }

      if (nextImg >= images.length) {
          nextImg = 0;
      }
  }

  images[activeImageID].classList.remove('active');
  images[nxtImg].classList.add('active');
}