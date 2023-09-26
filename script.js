const dynamicText = document.querySelector("h1 span");
const myName = "Bahar Riazi."
let charIndex = 0; 

const typeEffect = () => {
    const currentChar = myName.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stopBlinking")

    if (charIndex < myName.length) {
        charIndex++;
        setTimeout(typeEffect, 150);
    } else {
        dynamicText.classList.remove("stopBlinking")
    }
}

typeEffect();