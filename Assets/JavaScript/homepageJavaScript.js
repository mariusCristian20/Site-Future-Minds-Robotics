// Aici se cheama Preloader ul la site

const preloader = document.querySelector(".preloader");

window.addEventListener("DomContentLoaded", preloaderFunc(), false);

function preloaderFunc() {
    setTimeout(() =>{
        preloader.classList.add("remove-preloader");
    }, 1000)
}

console.log("Hello");