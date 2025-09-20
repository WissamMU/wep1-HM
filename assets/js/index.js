const sharedImg = "https://static.tildacdn.com/tild6433-6337-4534-b937-316163656432/Spirit_island2.JPG";

const musicData = [
  {
    bg: sharedImg,
    avatar: sharedImg,
    title: "Song A",
    text: "A random description about Song A.",
    link1: "#",
    btn1: "Play",
    link2: "#",
    btn2: "Details"
  },
  {
    bg: sharedImg,
    avatar: sharedImg,
    title: "Song B",
    text: "A random description about Song B.",
    link1: "#",
    btn1: "Play",
    link2: "#",
    btn2: "Details"
  },
  {
    bg: sharedImg,
    avatar: sharedImg,
    title: "Song C",
    text: "A random description about Song C.",
    link1: "#",
    btn1: "Play",
    link2: "#",
    btn2: "Details"
  },
  {
    bg: sharedImg,
    avatar: sharedImg,
    title: "Song D",
    text: "A random description about Song D.",
    link1: "#",
    btn1: "Play",
    link2: "#",
    btn2: "Details"
  }
];

const cultureData = [
  {
    bg: sharedImg,
    avatar: sharedImg,
    title: "Culture A",
    text: "Some cultural description A.",
    link1: "#",
    btn1: "Learn",
    link2: "#",
    btn2: "Explore"
  },
  {
    bg: sharedImg,
    avatar: sharedImg,
    title: "Culture B",
    text: "Some cultural description B.",
    link1: "#",
    btn1: "Learn",
    link2: "#",
    btn2: "Explore"
  },
  {
    bg: sharedImg,
    avatar: sharedImg,
    title: "Culture C",
    text: "Some cultural description C.",
    link1: "#",
    btn1: "Learn",
    link2: "#",
    btn2: "Explore"
  },
  {
    bg: sharedImg,
    avatar: sharedImg,
    title: "Culture D",
    text: "Some cultural description D.",
    link1: "#",
    btn1: "Learn",
    link2: "#",
    btn2: "Explore"
  }
];

const sportData = [
  {
    bg: sharedImg,
    avatar: sharedImg,
    title: "Sport A",
    text: "Some details about Sport A.",
    link1: "#",
    btn1: "Join",
    link2: "#",
    btn2: "Watch"
  },
  {
    bg: sharedImg,
    avatar: sharedImg,
    title: "Sport B",
    text: "Some details about Sport B.",
    link1: "#",
    btn1: "Join",
    link2: "#",
    btn2: "Watch"
  },
  {
    bg: sharedImg,
    avatar: sharedImg,
    title: "Sport C",
    text: "Some details about Sport C.",
    link1: "#",
    btn1: "Join",
    link2: "#",
    btn2: "Watch"
  },
  {
    bg: sharedImg,
    avatar: sharedImg,
    title: "Sport D",
    text: "Some details about Sport D.",
    link1: "#",
    btn1: "Join",
    link2: "#",
    btn2: "Watch"
  }
];

const familyData = [
  {
    bg: sharedImg,
    avatar: sharedImg,
    title: "Family A",
    text: "Some family activity description A.",
    link1: "#",
    btn1: "View",
    link2: "#",
    btn2: "More"
  },
  {
    bg: sharedImg,
    avatar: sharedImg,
    title: "Family B",
    text: "Some family activity description B.",
    link1: "#",
    btn1: "View",
    link2: "#",
    btn2: "More"
  },
  {
    bg: sharedImg,
    avatar: sharedImg,
    title: "Family C",
    text: "Some family activity description C.",
    link1: "#",
    btn1: "View",
    link2: "#",
    btn2: "More"
  },
  {
    bg: sharedImg,
    avatar: sharedImg,
    title: "Family D",
    text: "Some family activity description D.",
    link1: "#",
    btn1: "View",
    link2: "#",
    btn2: "More"
  }
];




const btnMusic = document.getElementById("music");
const btnCulture = document.getElementById("culture");
const btnSport = document.getElementById("sport");
const btnFamily = document.getElementById("family");

btnMusic.addEventListener("click", () => {
  setActiveButton(btnMusic);
  renderCards(musicData);
});

btnCulture.addEventListener("click", () => {
  setActiveButton(btnCulture);
  renderCards(cultureData);
});

btnSport.addEventListener("click", () => {
  setActiveButton(btnSport);
  renderCards(sportData);
});

btnFamily.addEventListener("click", () => {
  setActiveButton(btnFamily);
  renderCards(familyData);
});



// helper to reset all and activate only the clicked one
function setActiveButton(activeBtn) {
  [btnMusic, btnCulture, btnSport, btnFamily].forEach(btn => {
    btn.classList.remove("active");
  });
  activeBtn.classList.add("active");
}



const cardContainer = document.getElementById("cardsContainer");


function renderCards(data) {
  const cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML = "";

  data.forEach(item => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4 pb-3";

    col.innerHTML = `
        <div class="card card-custom bg-white border-white border-0">
          <div class="card-custom-img" 
              style="background-image: url(${item.bg});">
          </div>
          <div class="card-custom-avatar">
            <img class="img-fluid" src="${item.avatar}" alt="${item.name}" />
          </div>
          <div class="card-body" style="overflow-y: auto">
            <h4 class="card-title">${item.title}</h4>
            <p class="card-text">${item.text}</p>
          </div>
          <div class="card-footer" style="background: inherit; border-color: inherit;">
            <a href="${item.link1}" class="btn btn-primary">${item.btn1}</a>
            <a href="${item.link2}" class="btn btn-outline-primary">${item.btn2}</a>
          </div>
        </div>
      `;

    cardsContainer.appendChild(col);
  });
}


setActiveButton(btnMusic);
renderCards(musicData);



