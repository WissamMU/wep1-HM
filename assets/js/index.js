const manData = [
  { name: "Muscle 1", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Types_Of_Muscle.jpg/330px-Types_Of_Muscle.jpg" },
  { name: "Muscle 2", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Types_Of_Muscle.jpg/330px-Types_Of_Muscle.jpg" },
  { name: "Muscle 3", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Types_Of_Muscle.jpg/330px-Types_Of_Muscle.jpg" },
  { name: "Muscle 4", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Types_Of_Muscle.jpg/330px-Types_Of_Muscle.jpg" },
];

const womanData = [
  { name: "Muscle A", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Types_Of_Muscle.jpg/330px-Types_Of_Muscle.jpg" },
  { name: "Muscle B", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Types_Of_Muscle.jpg/330px-Types_Of_Muscle.jpg" },
  { name: "Muscle C", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Types_Of_Muscle.jpg/330px-Types_Of_Muscle.jpg" },
  { name: "Muscle D", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Types_Of_Muscle.jpg/330px-Types_Of_Muscle.jpg" },
  { name: "Muscle A", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Types_Of_Muscle.jpg/330px-Types_Of_Muscle.jpg" },
  { name: "Muscle B", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Types_Of_Muscle.jpg/330px-Types_Of_Muscle.jpg" },
  { name: "Muscle C", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Types_Of_Muscle.jpg/330px-Types_Of_Muscle.jpg" },
  { name: "Muscle D", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Types_Of_Muscle.jpg/330px-Types_Of_Muscle.jpg" },
];


const btnMan = document.getElementById("btnMan");
const btnWoman = document.getElementById("btnWoman");
const cardsContainer = document.getElementById("cardsContainer");

function renderCards(data) {
  cardsContainer.innerHTML = "";
  data.forEach(item => {
    const col = document.createElement("div");
    col.className = "col-6 col-md-3";
    col.innerHTML = `
      <div class="card h-100 text-center">
        <img src="${item.img}" class="card-img-top" alt="${item.name}">
        <div class="card-body p-2">
          <h6 class="card-title">${item.name}</h6>
        </div>
      </div>
    `;
    cardsContainer.appendChild(col);
  });
}

btnMan.addEventListener("click", () => {
  btnMan.classList.add("active");
  btnWoman.classList.remove("active");
  renderCards(manData);
});

btnWoman.addEventListener("click", () => {
  btnWoman.classList.add("active");
  btnMan.classList.remove("active");
  renderCards(womanData);
});

// Initial load
renderCards(manData);

