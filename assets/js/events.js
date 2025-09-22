// Select all filter buttons and filter cards
let filterSwitcher = document.querySelectorAll(".switcher button");
let filterCards = document.querySelectorAll(".events .card");

// Define the filterCard function
const filtercard = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  //Idterate over each filter card
  filterCards.forEach((card) => {
    // Add "hide" class to hide the card initially
    card.classList.add("hide");
    // Check if the card matches the selected filter or "all" is selected
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "الكل"
    ) {
      card.classList.remove("hide");
    }
  });
};

// Add click event listener to each filter button
filterSwitcher.forEach((button) =>
  button.addEventListener("click", filtercard)
);
