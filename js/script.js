var typed = new Typed(".typing", {
  strings: ["Fornt-End Developer", "Web Desginer", "Website Developer"],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true,
});

const sidebarButton = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

// Toggle sidebar on button click
sidebarButton.addEventListener("click", (e) => {
  e.stopPropagation(); // Stop event from bubbling to body
  aside.style.left = aside.style.left === "0px" ? "-270px" : "0px";
});

// Close sidebar on body click
document.body.addEventListener("click", () => {
  if (aside.style.left === "0px") aside.style.left = "-270px";
});

// Prevent sidebar from closing when clicking inside it
aside.addEventListener("click", (e) => e.stopPropagation());