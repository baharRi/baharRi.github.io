const dynamicText = document.querySelector("h1 span");
const myName = "Bahar Riazi."
let charIndex = 0; 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});

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