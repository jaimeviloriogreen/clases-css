const header = document.querySelector(".header");

window.addEventListener("scroll", ()=>{
    if(window.scrollY >= 40) header.classList.add("header--active");
    if(window.scrollY <= 20) header.classList.remove("header--active");
});