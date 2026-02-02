const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const text = document.getElementById("text");
const photo = document.getElementById("photo");
const music = document.getElementById("music");

let noCount = 0;

const noTexts = [
    "Are you sure? 🥺",
    "Pleaseeee 💔",
    "Think again 😢",
    "Don’t do this to me 💘",
    "Last chance 😭"
];

noBtn.onclick = () => {
    if (noCount < noTexts.length) {
        noBtn.innerText = noTexts[noCount];
    }

    // YES grows every time
    yesBtn.style.transform = `scale(${1 + noCount * 0.35})`;

    noCount++;
};

yesBtn.onclick = () => {
    text.innerText = "YAAAY 💖 I’m so happy!!";
    photo.src = "second.jpg";
    music.play();

    noBtn.style.display = "none";
    yesBtn.innerText = "💘 FOREVER 💘";
};