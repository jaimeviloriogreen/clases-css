const header = document.querySelector(".header");

window.addEventListener("scroll", ()=>{
    if(window.scrollY >= 40) {
        header.classList.add("header--active");
        header.classList.add("header--boxshadow");
    };
    if(window.scrollY <= 20){
        header.classList.remove("header--active");
        header.classList.remove("header--boxshadow");
    };
});