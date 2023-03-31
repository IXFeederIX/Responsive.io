const toggler = document.querySelector(".toggle");
const navBar = document.querySelector(".navbar");
const navBoton = document.querySelectorAll(".navboton");

toggler.addEventListener("click",(e)=>{
if(navBar.classList.contains("active")){
    navBar.classList.remove("active");
    toggler.querySelector("a").innerHTML = '<i class="fa-solid fa-bars"></i>';
}else{
    navBar.classList.add("active");
    toggler.querySelector("a").innerHTML = '<i class="fa-sharp fa-solid fa-rectangle-xmark" style="color: #ff0000;"></i>';
}
})