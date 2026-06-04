// Fade-in animation on scroll

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if(position < screen - 100){
            section.classList.add("show");
        }

    });

});