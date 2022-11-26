const wrapper = document.getElementById("wrapper");
const circle = document.getElementById("circle");
const start = document.getElementById("startext");
const languages = document.getElementById("languages");
const language = document.getElementsByClassName("language");
const captcha = document.getElementById("captcha");
const checkbox = document.getElementById("checkbox");
const humainText = document.getElementById("humantext");
const arrows = document.getElementById("arrows");
const hadaf = document.getElementById("hadaf");

const bonjoursound = document.getElementById("bonjoursound");
const humainsound = document.getElementById("humainsound");
const lesordisound = document.getElementById("lesordisound");
const qstfsound = document.getElementById("qstfsound");
const rep1sound = document.getElementById("rep1sound");
const rep2sound = document.getElementById("rep2sound");
const veuillezsound = document.getElementById("veuillezsound");

const bonjoursoundEn = document.getElementById("bonjoursound-en");
const humainsoundEn = document.getElementById("humainsound-en");
const lesordisoundEn = document.getElementById("lesordisound-en");
const qstfsoundEn = document.getElementById("qstfsound-en");
const rep1soundEn = document.getElementById("rep1sound-en");
const rep2soundEn = document.getElementById("rep2sound-en");
const veuillezsoundEn = document.getElementById("veuillezsound-en");

const bonjoursoundAr = document.getElementById("bonjoursound-ar");
const humainsoundAr = document.getElementById("humainsound-ar");
const lesordisoundAr = document.getElementById("lesordisound-ar");
const qstfsoundAr = document.getElementById("qstfsound-ar");
const rep1soundAr = document.getElementById("rep1sound-ar");
const rep2soundAr = document.getElementById("rep2sound-ar");
const veuillezsoundAr = document.getElementById("veuillezsound-ar");

const confirmation = document.getElementById("confirmationText");
const confirmation2 = document.getElementById("confirmationText2");

var sounds = [
  [bonjoursound, lesordisound, rep1sound, rep2sound, humainsound, qstfsound],
  [
    bonjoursoundEn,
    lesordisoundEn,
    rep1soundEn,
    rep2soundEn,
    humainsoundEn,
    qstfsoundEn,
  ],
  [
    bonjoursoundAr,
    lesordisoundAr,
    rep1soundAr,
    rep2soundAr,
    humainsoundAr,
    qstfsoundAr,
  ],
];

bgsound.play();

const t1 = new TimelineLite();

var currentTxt = 0;
var currentLanguage = 0;

// const txt = [
//   "Human.",
//   "Bonjour Humain,",
//   "Les ordinateurs utilisent un système binaire pour stocker des données.",
//   "Lorsqu'une cellule mémoire contient quelque chose, c’est représenté par un 1 .",
//   "Quand elle ne contient rien, c’est représenté par un 0..",
//   "Humain,",
//   "Est tu un 1 ou un 0 ?",
//   "Est tu un 1 ou un 0 ?",
// ];
const txt = [
  [
    "Human.",
    "Bonjour Humain,",
    "Les ordinateurs utilisent un système binaire pour stocker des données.",
    "Lorsqu'une cellule mémoire contient quelque chose, c’est représenté par un 1 .",
    "Quand elle ne contient rien, c’est représenté par un 0..",
    "Humain,",
    "Est tu un 1 ou un 0 ?",
    "Est tu un 1 ou un 0 ?",
  ],
  [
    "Human.",
    "Hello Human,",
    "Computers use a binary system to store data.",
    "When a memory cell contains something, it's represented by a 1 .",
    "When it contains nothing, it is represented by a 0..",
    "Human,",
    "Are you a 1 or a 0?",
    "Are you a 1 or a 0?",
  ],
  [
    "Human.",
    "Wsh abnadm,",
    "Les ordinateurs utilisent un système binaire pour stocker des données.",
    "Lorsqu'une cellule mémoire contient quelque chose, c’est représenté par un 1 .",
    "Quand elle ne contient rien, c’est représenté par un 0..",
    "Humain,",
    "Est tu un 1 ou un 0 ?",
    "Est tu un 1 ou un 0 ?",
  ],
];

humainText.innerText = txt[currentLanguage][currentTxt];
const confirmationTxt = [
  "Veuillez confirmer que vous êtes un humain :",
  "Please confirm that you are human:",
];
const confirmationTxt2 = ["Je suis un humain.", "I am human."];
function choseLang(l) {
  currentLanguage = l;
  confirmation.innerHTML = confirmationTxt[l];
  confirmation2.innerHTML = confirmationTxt2[l];
  console.log(`chose ${l}`);
}

t1.fromTo(
  "#circle",
  2,
  {
    opacity: 0,
  },
  {
    opacity: 1,
  }
);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

start.addEventListener("click", () => {
  if (window.innerWidth < 900) {
    t1.to(
      start,
      1,
      {
        display: "none",
      },
      "-= 0.5"
    ).to(languages, 2, {
      display: "block",
    });
  } else {
    circleSlide();
    wrapper.style.flexDirection = "row";
  }
});

checkbox.addEventListener("click", () => {
  if (window.innerWidth < 900) {
    t1.to(captcha, 0.5, {
      display: "none",
    })
      .to(humainText, 0.5, { opacity: 0, color: "#fff" })
      .to(wrapper, 1, {
        background: "#000000",
        flexDirection: "column",
      })
      .to(humainText, 0, { opacity: 1 })
      .to(arrows, 0, { display: "flex" })
      .then(() => {
        currentTxt++;
        humainText.innerText = txt[currentLanguage][currentTxt];
      });
  } else {
    t1.to(captcha, 0.5, {
      display: "none",
    })
      .fromTo(
        circle,
        1,
        {
          x: -200,
        },
        {
          x: 0,
        }
      )
      .to(humainText, 0.5, { opacity: 0, color: "#fff" })
      .to(wrapper, 1, {
        background: "#000000",
        flexDirection: "column",
      })
      .to(humainText, 0, { opacity: 1 })
      .to(arrows, 0, { display: "flex" })
      .then(() => {
        currentTxt++;
        humainText.innerText = txt[currentLanguage][currentTxt];
      });
  }

  if (currentLanguage == 0) bonjoursound.play();
  if (currentLanguage == 1) bonjoursoundEn.play();
  if (currentLanguage == 2) bonjoursoundAr.play();
  // sleep(2000);
  // currentTxt++;
  // humainText.innerText = txt[currentLanguage][currentTxt];
  // arrows.style.display = "flex";
});

Array.from(language).forEach((language) => {
  language.addEventListener("click", () => {
    t1.to(languages, 0, {
      display: "none",
    }).to(captcha, 0, {
      display: "block",
    });
    checkbox.checked = false;
    // veuillezsound.play()
    if (currentLanguage == 0) veuillezsound.play();
    if (currentLanguage == 1) veuillezsoundEn.play();
    if (currentLanguage == 2) veuillezsoundAr.play();
  });
});

function circleSlide() {
  t1.fromTo(
    circle,
    1,
    {
      x: 0,
    },
    {
      x: -200,
    }
  )
    .to(
      start,
      1,
      {
        display: "none",
      },
      "-= 0.5"
    )
    .to(languages, 2, {
      display: "block",
    });
}

function nextText() {
  if (currentTxt == 6) {
    hadaf.style.display = "flex";
    arrows.style.display = "none";
  }

  currentTxt++;
  humainText.innerText = txt[currentLanguage][currentTxt];

  sounds[currentLanguage].forEach((sound) => {
    sound.pause();
    sound.currentTime = 0;
  });

  sounds[currentLanguage][currentTxt - 1].play();
}

function lastText() {
  currentTxt--;
  humainText.innerText = txt[currentLanguage][currentTxt];

  sounds[currentLanguage].forEach((sound) => {
    sound.pause();
  });

  sounds[currentLanguage][currentTxt - 1].play();
}

let vid1 = document.getElementById("video1");
let vid1C = document.getElementById("video1Container");

function showvid1() {
  bgsound.pause();
  wrapper.style.display = "none";
  vid1C.style.display = "block";

  var source = document.createElement("source");

  if (currentLanguage == 0) source.setAttribute("src", "https://media.githubusercontent.com/media/salah1337/human/master/vidz/1.mp4?token=APO6X3QFTB2APXEC5WSJ5RLDQJQC2");
  if (currentLanguage == 1) source.setAttribute("src", "https://media.githubusercontent.com/media/salah1337/human/master/vidz/1-eng.mp4?token=APO6X3W7EZWAG5G5XKOTZLDDQJPG6");
  if (currentLanguage == 2) source.setAttribute("src", "./vidz/1-ar.mp4");

  source.setAttribute("type", "video/mp4");

  vid1.appendChild(source);
  vid1.play();
}

let vid0 = document.getElementById("video0");
let vid0C = document.getElementById("video0Container");

function showvid2() {
  bgsound.pause();
  wrapper.style.display = "none";
  vid0C.style.display = "block";

  var source = document.createElement("source");

  if (currentLanguage == 0) source.setAttribute("src", "https://media.githubusercontent.com/media/salah1337/human/master/vidz/0.mp4?token=APO6X3RQFR7XU3XGOPM24XLDQJQFK");
  if (currentLanguage == 1) source.setAttribute("src", "https://media.githubusercontent.com/media/salah1337/human/master/vidz/0-en.mp4?token=APO6X3UAKJGMHJEFAAEZ4KLDQJQUY");
  if (currentLanguage == 2) source.setAttribute("src", "./vidz/0-ar.mp4");

  source.setAttribute("type", "video/mp4");

  vid0.appendChild(source);
  vid0.play();
}
