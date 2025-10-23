// Merged home.js and homeEN.js

// Arabic Data and Logic
const musicDataAR = [
    {
        bg: './assets/img/events/jeddah_lifearts_pics/jeddah_lifearts_pics_1.jpg',
        avatar: './assets/img/music-logo.jpg',
        title: "مهرجان جدة للموسيقى",
        text: "عروض موسيقية ومسرحية تفاعلية تضم فنانين عالميين ومحليين، في أجواء حماسية تجمع الجمهور مع الفن مباشرة.",
        link: "./event.html",
        btn: "تفاصيل",
        date: "2025-10-10",
        location: "جدة، السعودية"
    },
    {
        bg: './assets/img/events/jeddah_lifearts_pics/jeddah_lifearts_pics_2.jpg',
        avatar: './assets/img/music-logo.jpg',
        title: "أمسيات الطرب في جدة",
        text: "أمسيات غنائية حية تقدم باقة من أجمل الأغاني العربية بمشاركة نجوم الطرب.",
        link: "./event.html",
        btn: "تفاصيل",
        date: "2025-10-11",
        location: "جدة - مركز المؤتمرات"
    },
    {
        bg: './assets/img/events/jeddah_lifearts_pics/jeddah_lifearts_pics_3.jpg',
        avatar: './assets/img/music-logo.jpg',
        title: "ليالي الإيقاع",
        text: "فعالية تفاعلية حيث يشارك الجمهور بالعزف والإيقاعات مع الفنانين.",
        link: "./event.html",
        btn: "تفاصيل",
        date: "2025-10-12",
        location: "جدة - الواجهة البحرية"
    },
    {
        bg: './assets/img/events/jeddah_lifearts_pics/jeddah_lifearts_pics_4.jpg',
        avatar: './assets/img/music-logo.jpg',
        title: "حفل موسيقى عالمية",
        text: "مزيج من العروض الموسيقية الغربية والشرقية في أجواء استثنائية.",
        link: "./event.html",
        btn: "تفاصيل",
        date: "2025-10-13",
        location: "جدة - المسرح الكبير"
    }
];
const cultureDataAR = [
    {
        bg: './assets/img/events/jeddahheritage_pics/jeddahheritage_pics_1.jpg',
        avatar: './assets/img/cul-logo.jpg',
        title: "سوق البلدية التقليدي",
        text: "سوق شعبي تراثي في قلب جدة القديمة يعرض منتجات محلية وحرف يدوية، في أجواء تاريخية تعكس روح المكان.",
        link: "./event.html",
        btn: "تفاصيل",
        date: "طوال العام",
        location: "جدة - حي البلد"
    },
    {
        bg: './assets/img/events/jeddahheritage_pics/jeddahheritage_pics_2.jpg',
        avatar: './assets/img/cul-logo.jpg',
        title: "جولة التراث الحجازي",
        text: "اكتشف جمال العمارة الحجازية والتاريخ العريق في أزقة حي البلد.",
        link: "./event.html",
        btn: "تفاصيل",
        date: "طوال العام",
        location: "جدة - حي البلد"
    },
    {
        bg: './assets/img/events/jeddahheritage_pics/jeddahheritage_pics_3.jpg',
        avatar: './assets/img/cul-logo.jpg',
        title: "معرض الحرف اليدوية",
        text: "مساحة مخصصة للحرفيين المحليين لعرض وبيع منتجاتهم الأصيلة.",
        link: "./event.html",
        btn: "تفاصيل",
        date: "طوال العام",
        location: "جدة - حي البلد"
    },
    {
        bg: './assets/img/events/jeddahheritage_pics/jeddahheritage_pics_4.jpg',
        avatar: './assets/img/cul-logo.jpg',
        title: "تذوق الأطعمة الشعبية",
        text: "استمتع بنكهات المأكولات الجداوية التقليدية وسط أجواء السوق التراثية.",
        link: "./event.html",
        btn: "تفاصيل",
        date: "طوال العام",
        location: "جدة - حي البلد"
    }
];
const familyDataAR = [
    {
        bg: './assets/img/events/saifbeach_pics/saifbeach_pics_3.jpg',
        avatar: './assets/img/family-logo.jpg',
        title: "رحلة شاطئ السيف",
        text: "تجربة عائلية مثالية على شاطئ السيف بجدة، حيث يمكن الاستمتاع بالطبيعة البحرية والأنشطة الشاطئية الممتعة طوال اليوم.",
        link: "./event.html",
        btn: "تفاصيل",
        date: "متاح يومياً",
        location: "جدة - شاطئ السيف"
    },
    {
        bg: './assets/img/events/saifbeach_pics/saifbeach_pics_5.jpg',
        avatar: './assets/img/family-logo.jpg',
        title: "نزهة غروب الشمس",
        text: "جلسة عائلية مميزة عند غروب الشمس مع أجواء بحرية هادئة وذكريات لا تُنسى.",
        link: "./event.html",
        btn: "تفاصيل",
        date: "متاح يومياً",
        location: "جدة - شاطئ السيف"
    },
    {
        bg: './assets/img/events/saifbeach_pics/saifbeach_pics_1.jpg',
        avatar: './assets/img/family-logo.jpg',
        title: "أنشطة مائية للأطفال",
        text: "ألعاب وأنشطة مائية ترفيهية آمنة ومسلية للأطفال على الشاطئ.",
        link: "./event.html",
        btn: "تفاصيل",
        date: "متاح يومياً",
        location: "جدة - شاطئ السيف"
    },
    {
        bg: './assets/img/events/saifbeach_pics/saifbeach_pics_4.jpg',
        avatar: './assets/img/family-logo.jpg',
        title: "مغامرة قوارب الكاياك",
        text: "تجربة فريدة للتجديف بالقوارب وسط البحر تناسب جميع أفراد العائلة.",
        link: "./event.html",
        btn: "تفاصيل",
        date: "متاح يومياً",
        location: "جدة - شاطئ السيف"
    },
    {
        bg: './assets/img/events/saifbeach_pics/saifbeach_pics_2.jpg',
        avatar: './assets/img/family-logo.jpg',
        title: "رحلة صيد عائلية",
        text: "انطلقوا في رحلة صيد بحرية ممتعة مع العائلة وتجربة لحظات مليئة بالحماس.",
        link: "./event.html",
        btn: "تفاصيل",
        date: "متاح يومياً",
        location: "جدة - شاطئ السيف"
    }
];
const sportDataAR = [
    {
        bg: './assets/img/events/formula1_pics/formula1_pics_1.jpg',
        avatar: './assets/img/sport-logo.jpg',
        title: "سباق الفورمولا 1 - جدة",
        text: "أقوى سباق سيارات عالمي يقام على كورنيش جدة، يجمع أسرع السائقين في أجواء مليئة بالإثارة والتشويق على حلبة الشوارع الشهيرة.",
        link: "./event.html",
        btn: "تفاصيل",
        date: "2025-12-01 إلى 2025-12-04",
        location: "جدة - كورنيش جدة"
    },
    {
        bg: './assets/img/events/formula1_pics/formula1_pics_2.jpg',
        avatar: './assets/img/sport-logo.jpg',
        title: "تجارب القيادة مع المحترفين",
        text: "فرصة لمحبي السرعة لتجربة سيارات الفورمولا مع مدربين متخصصين مباشرة على المسار.",
        link: "./event.html",
        btn: "تفاصيل",
        date: "2025-12-02",
        location: "جدة - كورنيش جدة"
    },
    {
        bg: './assets/img/events/formula1_pics/formula1_pics_3.jpg',
        avatar: './assets/img/sport-logo.jpg',
        title: "فعاليات الفورمولا الترفيهية",
        text: "عروض ترفيهية وتجارب تقنية مصاحبة للسباق لعشاق الرياضة والإثارة.",
        link: "./event.html",
        btn: "تفاصيل",
        date: "2025-12-03",
        location: "جدة - كورنيش جدة"
    },
    {
        bg: './assets/img/events/formula1_pics/formula1_pics_4.jpg',
        avatar: './assets/img/sport-logo.jpg',
        title: "الحفل الختامي للفورمولا",
        text: "حفل ضخم يضم موسيقى وعروضاً مبهرة للاحتفال بنهاية السباق العالمي.",
        link: "./event.html",
        btn: "تفاصيل",
        date: "2025-12-04",
        location: "جدة - كورنيش جدة"
    },
    {
        bg: './assets/img/events/formula1_pics/formula1_pics_7.jpg',
        avatar: './assets/img/sport-logo.jpg',
        title: "معرض سيارات الفورمولا",
        text: "استعرض أحدث سيارات السباقات وتقنيات المحركات في جناح خاص لعشاق السيارات.",
        link: "./event.html",
        btn: "تفاصيل",
        date: "2025-12-03 إلى 2025-12-04",
        location: "جدة - كورنيش جدة"
    },
    {
        bg: './assets/img/events/formula1_pics/formula1_pics_10.jpg',
        avatar: './assets/img/sport-logo.jpg',
        title: "تجارب محاكاة السباق",
        text: "أجهزة محاكاة تمنح الزوار فرصة تجربة قيادة سيارة فورمولا 1 بشكل افتراضي واقعي.",
        link: "./event.html",
        btn: "تفاصيل",
        date: "2025-12-01 إلى 2025-12-04",
        location: "جدة - كورنيش جدة"
    }
];

const btnMusicAR = document.getElementById("music_ar");
const btnCultureAR = document.getElementById("culture_ar");
const btnSportAR = document.getElementById("sport_ar");
const btnFamilyAR = document.getElementById("family_ar");

const allEventsDataAR = [
    ...musicDataAR,
    ...cultureDataAR,
    ...sportDataAR,
    ...familyDataAR
];

btnMusicAR.addEventListener("click", () => {
    setActiveButtonAR(btnMusicAR);
    renderCardsAR(musicDataAR);
});

btnCultureAR.addEventListener("click", () => {
    setActiveButtonAR(btnCultureAR);
    renderCardsAR(cultureDataAR);
});

btnSportAR.addEventListener("click", () => {
    setActiveButtonAR(btnSportAR);
    renderCardsAR(sportDataAR);
});

btnFamilyAR.addEventListener("click", () => {
    setActiveButtonAR(btnFamilyAR);
    renderCardsAR(familyDataAR);
});

const btnAllAR = document.getElementById("all_ar");
btnAllAR.addEventListener("click", () => {
    setActiveButtonAR(btnAllAR);
    renderCardsAR(allEventsDataAR);
});

// Helper to reset all and activate only the clicked one (AR)
function setActiveButtonAR(activeBtn) {
    [btnMusicAR, btnCultureAR, btnSportAR, btnFamilyAR, btnAllAR].forEach(btn => {
        btn.classList.remove("active");
    });
    activeBtn.classList.add("active");
}

function renderCardsAR(data) {
    const cardsContainer = document.getElementById("cardsContainer_ar");
    if (cardsContainer) {
        cardsContainer.innerHTML = "";
        data.forEach(item => {
            const col = document.createElement("div");
            col.className = "col-md-6 col-lg-4 pb-3";

            col.innerHTML = `
            <div class="card card-custom bg-white border-white border-0 ">
              <div class="card-custom-img"
                  style="background-image: url(${item.bg});">
              </div>
              <div class="card-custom-avatar">
                <img class="img-fluid" src="${item.avatar}" alt="${item.title}" />
              </div>
              <div class="card-body" style="overflow-y: auto">
                <h4 class="card-title">${item.title}</h4>
                <p class="card-text">${item.text}</p>
                <p style="color: gray; font-size: 0.8rem;"><strong>الوقت:</strong> ${item.date}</p>
                <p style="color: gray; font-size: 0.8rem;"><strong>الموقع:</strong> ${item.location}</p>
              </div>
              <div class="card-footer" style="background: inherit; border-color: inherit;">
                <a href="${item.link}" class="btn btn-primary">${item.btn}</a>
              </div>
            </div>
          `;

            cardsContainer.appendChild(col);
        });
    }
}

// Initial setup for AR
if (btnMusicAR) {
    setActiveButtonAR(btnMusicAR);
    renderCardsAR(musicDataAR);
}

// English Data and Logic
const musicData = [
    {
        bg: './assets/img/events/jeddah_lifearts_pics/jeddah_lifearts_pics_1.jpg',
        avatar: './assets/img/music-logo.jpg',
        title: "Jeddah Music Festival",
        text: "Interactive music and theatrical performances featuring international and local artists in an exciting atmosphere that brings the audience closer to art.",
        link: "./event.html",
        btn: "Details",
        date: "2025-10-10",
        location: "Jeddah, Saudi Arabia"
    },
    {
        bg: './assets/img/events/jeddah_lifearts_pics/jeddah_lifearts_pics_2.jpg',
        avatar: './assets/img/music-logo.jpg',
        title: "Jeddah Tarab Nights",
        text: "Live singing evenings featuring a selection of the finest Arabic songs performed by tarab stars.",
        link: "./event.html",
        btn: "Details",
        date: "2025-10-11",
        location: "Jeddah - Conference Center"
    },
    {
        bg: './assets/img/events/jeddah_lifearts_pics/jeddah_lifearts_pics_3.jpg',
        avatar: './assets/img/music-logo.jpg',
        title: "Rhythm Nights",
        text: "An interactive event where the audience participates in playing and creating rhythms with artists.",
        link: "./event.html",
        btn: "Details",
        date: "2025-10-12",
        location: "Jeddah - Waterfront"
    },
    {
        bg: './assets/img/events/jeddah_lifearts_pics/jeddah_lifearts_pics_4.jpg',
        avatar: './assets/img/music-logo.jpg',
        title: "Global Music Concert",
        text: "A blend of Western and Eastern musical performances in an exceptional atmosphere.",
        link: "./event.html",
        btn: "Details",
        date: "2025-10-13",
        location: "Jeddah - Grand Theater"
    }
];

const cultureData = [
    {
        bg: './assets/img/events/jeddahheritage_pics/jeddahheritage_pics_1.jpg',
        avatar: './assets/img/cul-logo.jpg',
        title: "Traditional Baladi Market",
        text: "A traditional folk market in the heart of old Jeddah showcasing local products and handicrafts in a historical atmosphere that reflects the spirit of the place.",
        link: "./event.html",
        btn: "Details",
        date: "Year-round",
        location: "Jeddah - Al-Balad District"
    },
    {
        bg: './assets/img/events/jeddahheritage_pics/jeddahheritage_pics_2.jpg',
        avatar: './assets/img/cul-logo.jpg',
        title: "Hejazi Heritage Tour",
        text: "Discover the beauty of Hejazi architecture and rich history in the alleys of Al-Balad district.",
        link: "./event.html",
        btn: "Details",
        date: "Year-round",
        location: "Jeddah - Al-Balad District"
    },
    {
        bg: './assets/img/events/jeddahheritage_pics/jeddahheritage_pics_3.jpg',
        avatar: './assets/img/cul-logo.jpg',
        title: "Handicrafts Exhibition",
        text: "A dedicated space for local artisans to showcase and sell their authentic products.",
        link: "./event.html",
        btn: "Details",
        date: "Year-round",
        location: "Jeddah - Al-Balad District"
    },
    {
        bg: './assets/img/events/jeddahheritage_pics/jeddahheritage_pics_4.jpg',
        avatar: './assets/img/cul-logo.jpg',
        title: "Traditional Food Tasting",
        text: "Enjoy the flavors of traditional Jeddah cuisine in the vibrant atmosphere of the heritage market.",
        link: "./event.html",
        btn: "Details",
        date: "Year-round",
        location: "Jeddah - Al-Balad District"
    }
];

const familyData = [
    {
        bg: './assets/img/events/saifbeach_pics/saifbeach_pics_3.jpg',
        avatar: './assets/img/family-logo.jpg',
        title: "Saif Beach Trip",
        text: "A perfect family experience at Saif Beach in Jeddah, where you can enjoy marine nature and fun beach activities all day long.",
        link: "./event.html",
        btn: "Details",
        date: "Available Daily",
        location: "Jeddah - Saif Beach"
    },
    {
        bg: './assets/img/events/saifbeach_pics/saifbeach_pics_5.jpg',
        avatar: './assets/img/family-logo.jpg',
        title: "Sunset Picnic",
        text: "A special family gathering at sunset with a serene seaside atmosphere and unforgettable memories.",
        link: "./event.html",
        btn: "Details",
        date: "Available Daily",
        location: "Jeddah - Saif Beach"
    },
    {
        bg: './assets/img/events/saifbeach_pics/saifbeach_pics_1.jpg',
        avatar: './assets/img/family-logo.jpg',
        title: "Water Activities for Kids",
        text: "Safe and entertaining water games and activities for children on the beach.",
        link: "./event.html",
        btn: "Details",
        date: "Available Daily",
        location: "Jeddah - Saif Beach"
    },
    {
        bg: './assets/img/events/saifbeach_pics/saifbeach_pics_4.jpg',
        avatar: './assets/img/family-logo.jpg',
        title: "Kayak Adventure",
        text: "A unique kayaking experience in the sea suitable for all family members.",
        link: "./event.html",
        btn: "Details",
        date: "Available Daily",
        location: "Jeddah - Saif Beach"
    },
    {
        bg: './assets/img/events/saifbeach_pics/saifbeach_pics_2.jpg',
        avatar: './assets/img/family-logo.jpg',
        title: "Family Fishing Trip",
        text: "Embark on an exciting family fishing trip at sea, filled with thrilling moments.",
        link: "./event.html",
        btn: "Details",
        date: "Available Daily",
        location: "Jeddah - Saif Beach"
    }
];

const sportData = [
    {
        bg: './assets/img/events/formula1_pics/formula1_pics_1.jpg',
        avatar: './assets/img/sport-logo.jpg',
        title: "Formula 1 Race - Jeddah",
        text: "The world’s most thrilling car race held on Jeddah’s Corniche, bringing together the fastest drivers in an electrifying atmosphere on the famous street circuit.",
        link: "./event.html",
        btn: "Details",
        date: "2025-12-01 to 2025-12-04",
        location: "Jeddah - Corniche"
    },
    {
        bg: './assets/img/events/formula1_pics/formula1_pics_2.jpg',
        avatar: './assets/img/sport-logo.jpg',
        title: "Driving Experience with Professionals",
        text: "A chance for speed enthusiasts to test-drive Formula cars with professional instructors directly on the track.",
        link: "./event.html",
        btn: "Details",
        date: "2025-12-02",
        location: "Jeddah - Corniche"
    },
    {
        bg: './assets/img/events/formula1_pics/formula1_pics_3.jpg',
        avatar: './assets/img/sport-logo.jpg',
        title: "Formula Entertainment Events",
        text: "Entertainment shows and technological experiences accompanying the race for sports and thrill enthusiasts.",
        link: "./event.html",
        btn: "Details",
        date: "2025-12-03",
        location: "Jeddah - Corniche"
    },
    {
        bg: './assets/img/events/formula1_pics/formula1_pics_4.jpg',
        avatar: './assets/img/sport-logo.jpg',
        title: "Formula Closing Ceremony",
        text: "A grand ceremony featuring music and spectacular shows to celebrate the conclusion of the global race.",
        link: "./event.html",
        btn: "Details",
        date: "2025-12-04",
        location: "Jeddah - Corniche"
    },
    {
        bg: './assets/img/events/formula1_pics/formula1_pics_7.jpg',
        avatar: './assets/img/sport-logo.jpg',
        title: "Formula Car Exhibition",
        text: "Showcase of the latest race cars and engine technologies in a dedicated pavilion for car enthusiasts.",
        link: "./event.html",
        btn: "Details",
        date: "2025-12-03 to 2025-12-04",
        location: "Jeddah - Corniche"
    },
    {
        bg: './assets/img/events/formula1_pics/formula1_pics_10.jpg',
        avatar: './assets/img/sport-logo.jpg',
        title: "Race Simulation Experience",
        text: "Simulation devices offering visitors a realistic virtual experience of driving a Formula 1 car.",
        link: "./event.html",
        btn: "Details",
        date: "2025-12-01 to 2025-12-04",
        location: "Jeddah - Corniche"
    }
];

const btnMusic = document.getElementById("music");
const btnCulture = document.getElementById("culture");
const btnSport = document.getElementById("sport");
const btnFamily = document.getElementById("family");

const allEventsData = [
    ...musicData,
    ...cultureData,
    ...sportData,
    ...familyData
];

btnMusic.addEventListener("click", () => {
    setActiveButtonEN(btnMusic);
    renderCardsEN(musicData);
});

btnCulture.addEventListener("click", () => {
    setActiveButtonEN(btnCulture);
    renderCardsEN(cultureData);
});

btnSport.addEventListener("click", () => {
    setActiveButtonEN(btnSport);
    renderCardsEN(sportData);
});

btnFamily.addEventListener("click", () => {
    setActiveButtonEN(btnFamily);
    renderCardsEN(familyData);
});

const btnAll = document.getElementById("all");
btnAll.addEventListener("click", () => {
    setActiveButtonEN(btnAll);
    renderCardsEN(allEventsData);
});

// Helper to reset all and activate only the clicked one (EN)
function setActiveButtonEN(activeBtn) {
    [btnMusic, btnCulture, btnSport, btnFamily, btnAll].forEach(btn => {
        btn.classList.remove("active");
    });
    activeBtn.classList.add("active");
}

function renderCardsEN(data) {
    const cardsContainer = document.getElementById("cardsContainer");
    if (cardsContainer) {
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
                <img class="img-fluid" src="${item.avatar}" alt="${item.title}" />
              </div>
              <div class="card-body" style="overflow-y: auto">
                <h4 class="card-title">${item.title}</h4>
                <p class="card-text">${item.text}</p> 
                <p style="color: gray; font-size: 0.8rem;"><strong>Date:</strong> ${item.date}</p> 
                <p style="color: gray; font-size: 0.8rem;"><strong>Location:</strong> ${item.location}</p> 
              </div>
              <div class="card-footer" style="background: inherit; border-color: inherit;">
                <a href="${item.link}" class="btn btn-primary">${item.btn}</a>
              </div>
            </div>
          `;

            cardsContainer.appendChild(col);
        });
    }
}

// Initial setup for EN
if (btnMusic) {
    setActiveButtonEN(btnMusic);
    renderCardsEN(musicData);
}