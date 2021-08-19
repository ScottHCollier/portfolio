const aboutButton = document.getElementById("about-button");
const aboutText = document.getElementById("about-text");

function showAboutText() {
    if (aboutText.classList.contains("about-text-open")) {
        aboutText.classList.remove("about-text-open");
    } else {
        aboutText.classList.add("about-text-open");
    }
}

aboutButton.addEventListener("click", showAboutText);
