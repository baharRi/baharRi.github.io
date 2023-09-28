const dynamicText = document.querySelector("h1 span");
const currentUrl = window.location.href;
let typingText = "Bahar Riazi."
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
    const currentChar = typingText.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stopBlinking")

    if (charIndex < typingText.length) {
        charIndex++;
        setTimeout(typeEffect, 150);
    } else {
        dynamicText.classList.remove("stopBlinking")
    }
}

if (currentUrl.includes("projectAtomIQ.html")) {
    typingText = "AtomIQ interaction:"
} else if (currentUrl.includes("index.html")) {
    typingText ="Bahar Riazi."
} else if (currentUrl.includes("projectSvoosh.html")) {
    typingText ="Svoosh:"
} else if (currentUrl.includes("projectPAL.html")) {
    typingText ="P4L:"
}
console.log(currentUrl); 

typeEffect();
