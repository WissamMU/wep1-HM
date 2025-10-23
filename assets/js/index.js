// Scroll to top button
const btn = document.getElementById("btn-back-to-top") || document.createElement("button");
const btnEN = document.getElementById("btn-back-to-top-en") || document.createElement("button");

// Hide button when 20px from top
window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 20 ? "block" : "none";
});
window.addEventListener("scroll", () => {
  btnEN.style.display = window.scrollY > 20 ? "block" : "none";
});

btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
btnEN.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Dark mode toggle - Get all Dark Mode toggle elements
const themeToggles = [
  document.getElementById('theme-toggle'),
  document.getElementById('theme-toggleEN')
].filter(toggle => toggle !== null); // Remove null elements

const themeIcons = [
  document.querySelector('label[for="theme-toggle"] i'),
  document.querySelector('label[for="theme-toggleEN"] i')
].filter(icon => icon !== null);

const body = document.body;

// Function to apply Dark Mode to all icons and toggles
function applyDarkMode(isDark) {
  if (isDark) {
    body.classList.add('dark');
    // Update all toggles
    themeToggles.forEach(toggle => {
      toggle.checked = true;
    });
    // Update all icons
    themeIcons.forEach(icon => {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    });
  } else {
    body.classList.remove('dark');
    // Update all toggles
    themeToggles.forEach(toggle => {
      toggle.checked = false;
    });
    // Update all icons
    themeIcons.forEach(icon => {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    });
  }
}

// Check localStorage for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  applyDarkMode(true);
} else if (savedTheme === 'light') {
  applyDarkMode(false);
}

// Add event listeners to all Dark Mode toggles
themeToggles.forEach(toggle => {
  toggle.addEventListener('change', () => {
    const isDark = toggle.checked;
    applyDarkMode(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});

// Language toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelectorAll("#toggleBtn");
  const arabicSection = document.getElementById("arabicSection");
  const englishSection = document.getElementById("englishSection");

  // Save and restore language state
  const savedLang = localStorage.getItem('language');
  if (savedLang === 'english') {
    arabicSection.classList.add("d-none");
    englishSection.classList.remove("d-none");
  }

  toggleBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Toggle between show and hide
      const isArabicVisible = !arabicSection.classList.contains("d-none");
      
      arabicSection.classList.toggle("d-none");
      englishSection.classList.toggle("d-none");
      
      // Save selected language
      localStorage.setItem('language', isArabicVisible ? 'english' : 'arabic');
    });
  });
});

// Apply saved settings when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Apply saved language
  const savedLang = localStorage.getItem('language');
  const arabicSection = document.getElementById("arabicSection");
  const englishSection = document.getElementById("englishSection");
  
  if (savedLang === 'english') {
    arabicSection.classList.add("d-none");
    englishSection.classList.remove("d-none");
  } else {
    arabicSection.classList.remove("d-none");
    englishSection.classList.add("d-none");
  }
  
  // Apply saved Dark Mode
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    applyDarkMode(true);
  } else {
    applyDarkMode(false);
  }
});