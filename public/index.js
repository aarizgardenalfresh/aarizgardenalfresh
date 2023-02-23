const nav = document.querySelector(".nav-mobile");
const m_n_i_open = document.querySelector(".m-n-i-open");
const m_n_i_close = document.querySelector(".m-n-i-close");
const html = document.querySelector("html");
const menu = document.querySelector(".menu");


m_n_i_open.addEventListener("click",()=>{
    nav.classList.add("active");
    menu.classList.add("display-flex");
    html.style.overflow = "hidden";

});
m_n_i_close.addEventListener("click",()=>{
    nav.classList.remove("active");
    menu.classList.remove("display-flex");
    html.style.overflow = "visible";
});



// ================================Gallery Click Function=================================================================

const gallery_photo_img = document.querySelectorAll(".gallery-photo-img");

gallery_photo_img.forEach(img=>{
    img.addEventListener("click",()=>{
        img.classList.toggle("gallery-photo-img-hover");
    })
})
