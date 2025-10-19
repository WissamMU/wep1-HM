
const musicData = [
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
const cultureData = [
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
const familyData = [
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
const sportData = [
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

const btnAll = document.getElementById("all");
btnAll.addEventListener("click", () => {
    setActiveButton(btnAll);
    renderCards(allEventsData);
});




// helper to reset all and activate only the clicked one
function setActiveButton(activeBtn) {
    [btnMusic, btnCulture, btnSport, btnFamily, btnAll].forEach(btn => {
        btn.classList.remove("active");
    });
    activeBtn.classList.add("active");
}



const cardContainer = document.getElementById("cardsContainer");


function renderCards(data) {
    const cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = ""


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




setActiveButton(btnMusic);
renderCards(musicData);
