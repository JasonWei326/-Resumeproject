const text = document.querySelectorAll(".thePaths");
console.log(text[0].getTotalLength());
for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

const lastWord = document.querySelector("#fifteenth");
const animation = document.querySelector("div.animation");
lastWord.addEventListener("animationend", () => {
  animation.style = "transiton :all 3 ease; opacity:0;pointer-events:none;";
});

