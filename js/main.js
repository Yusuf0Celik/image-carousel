console.log("main.js loaded");

const images = document.querySelectorAll(".image");
const btnPrev = document.querySelector(".button-prev");
const btnNext = document.querySelector(".button-next");

document.addEventListener("DOMContentLoaded", addImg)
btnPrev.addEventListener("click", goPrevious)
btnNext.addEventListener("click", goNext)

const imagesJSON = [
    // {
    //     "image": "https://images.wallpapersden.com/image/download/minimal-ship-artwork-purple-background_a2hmbmmUmZqaraWkpJRmZ21lrWxnZQ.jpg"
    // },
    {
        "image": "https://wallpaperaccess.com/full/2040737.jpg"
    },
    {
        "image": "https://wallpaperaccess.com/full/2040740.jpg"
    },
    {
        "image": "https://wallpaperaccess.com/full/2040736.jpg"
    },
    {
        "image": "https://wallpaperaccess.com/full/2040743.jpg"
    }
];

function addImg() {
    for (let i = 0; i < imagesJSON.length; i++) {
        const myImage = imagesJSON[i];
        const imgEl = document.createElement("img");
        imgEl.classList.add("image");
        imgEl.src = myImage.image;
        console.log(myImage);
    }
}

function goPrevious() {
    
}

function goNext() {
    
}