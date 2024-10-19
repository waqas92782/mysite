// toggle 
const styleSwitcerToggle = document.querySelector(".style-switcher-toggler");
styleSwitcerToggle.addEventListener("click", ()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
});


// hidestyle

window.addEventListener("scroll", ()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open")
    }
});



// colors 

const altenatestyle = document.querySelectorAll(".alternate-style");
function setActivestyle(color){
    altenatestyle.forEach((style)=>{
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true")
        }
    })
}