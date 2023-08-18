window.addEventListener("DOMContentLoaded" , () =>  {
    const menu = document.querySelector(".nav_list")
    const hamburger = document.querySelector(".hamburger")

    hamburger.addEventListener("click", () =>{
        hamburger.classList.toggle("hamburger_active");
        menu.classList.toggle("menu_active")
    })
}) 
new WOW().init();