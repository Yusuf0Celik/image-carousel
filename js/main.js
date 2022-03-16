console.log("main.js loaded");

const imagesDiv = document.querySelector(".images");
const images = document.querySelectorAll(".image");
const btnPrev = document.querySelector(".button-prev");
const btnNext = document.querySelector(".button-next");

// btnPrev.addEventListener("click", goPrevious)
btnNext.addEventListener("click", goNext)
document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < imagesJSON.length; i++) {
        const myImage = imagesJSON[i];
        const imgEl = document.createElement("img");
        imgEl.classList.add("image");
        imgEl.src = myImage.image;
        imagesDiv.appendChild(imgEl);
        if (i === 0) {
            imgEl.classList.add("active");
        }
    }
})

const imagesJSON = 
[
    {
        "image": "https://wallpapercave.com/wp/8Os5eDI.jpg"
    },
    {
        "image": "https://wallpapercave.com/wp/wp3161436.jpg"
    },
    {
        "image": "https://wallpaperaccess.com/full/2040740.jpg"
    },
    {
        "image": "https://wallpaperaccess.com/full/2040736.jpg"
    },
    {
        "image": "https://wallpaperaccess.com/full/1078158.jpg"
    }
];

function goNext() {
    for (let i = 0; i < images.length; i++) {
        const imageShow = images[i];
    }
}