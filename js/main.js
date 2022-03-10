console.log("main.js loaded");

const images = document.querySelectorAll(".image");
const btnPrev = document.querySelector(".button-prev");
const btnNext = document.querySelector(".button-next");

for (let i = 0; i < images.length; i++) {
    const showImage = images[i];
    console.log(showImage);
}

btnPrev.addEventListener("click", goPrevious)

const imagesJSON = [
    {
        "image": "https://images.wallpapersden.com/image/download/minimal-ship-artwork-purple-background_a2hmbmmUmZqaraWkpJRmZ21lrWxnZQ.jpg"
    },
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

for (let i = 0; i < imagesJSON.length; i++) {
    const myImage = imagesJSON[i]
    // console.log(myImage.image);
}

function goPrevious() {
    
}