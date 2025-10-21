
// scroll to top button
const btn = document.getElementById("btn-back-to-top") || document.createElement("button");

// the button disaper when ur 20px to the top
window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 20 ? "block" : "none";
});

btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));


// year 
document.getElementById("year").textContent = new Date().getFullYear();


// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check localStorage for theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  icon.classList.remove('fa-sun');
  icon.classList.add('fa-moon');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    localStorage.setItem('theme', 'dark');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    localStorage.setItem('theme', 'light');
  }
});



// زر تغير اللغة
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelectorAll("#toggleBtn");
  const arabicSection = document.getElementById("arabicSection");
  const englishSection = document.getElementById("englishSection");

  toggleBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      // التبديل بين الإظهار والإخفاء
      arabicSection.classList.toggle("d-none");
      englishSection.classList.toggle("d-none");
    });
  });
});
