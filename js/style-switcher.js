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
function setActivestyle(color) {
    altenatestyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
    // Save selected color to localStorage
    localStorage.setItem("active-style", color);
}

// Check active style on page load
window.addEventListener("load", () => {
    const savedStyle = localStorage.getItem("active-style");
    if (savedStyle) {
        setActivestyle(savedStyle);
    } else {
        // Optional: Set a default style if none is saved
        setActivestyle(altenatestyle[0].getAttribute("title")); // Default to first style
    }
});




// light and dark mood 

const dayNlight = document.querySelector(".day-night");

// Toggle Dark Mode on Button Click
dayNlight.addEventListener("click", () => {
    dayNlight.querySelector("i").classList.toggle("fa-sun");
    dayNlight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

    // Save current theme to localStorage
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Check Theme on Page Load
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        dayNlight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNlight.querySelector("i").classList.add("fa-moon");
    }
});
