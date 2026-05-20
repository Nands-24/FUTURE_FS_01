function showTab(tabId, button){

    // All tabs
    const tabs = document.querySelectorAll(".tab-content");

    // Remove active tab
    tabs.forEach(tab =>{
        tab.classList.remove("active-tab");
    });

    // Show selected tab
    document.getElementById(tabId)
        .classList.add("active-tab");

    // All buttons
    const buttons = document.querySelectorAll(".tab-btn");

    // Remove active button
    buttons.forEach(btn =>{
        btn.classList.remove("active-btn");
    });

    // Active button
    button.classList.add("active-btn");

    // Smooth scroll to content
    document.querySelector(".about-content")
        .scrollIntoView({
            behavior:"smooth",
            block:"start"
        });
}
const typingText = document.querySelector(".typing");

const words = [
    "Full Stack Developer",
    "Machine Learning Engineer",
    "AI & DS Student"
];

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!isDeleting){

        typingText.textContent =
        currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if(letterIndex === currentWord.length){

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    }else{

        typingText.textContent =
        currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if(letterIndex === 0){

            isDeleting = false;

            wordIndex++;

            if(wordIndex === words.length){
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect,
        isDeleting ? 80 : 120);

}

typeEffect();