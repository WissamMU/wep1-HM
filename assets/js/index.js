
// scroll to top button
const btn = document.getElementById("btn-back-to-top") || document.createElement("button");

// the button disaper when ur 20px to the top
window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 20 ? "block" : "none";
});

btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));


// year 
document.getElementById("year").textContent = new Date().getFullYear();
