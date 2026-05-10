const shareBtn = document.querySelector(".share");
const popup = document.querySelector(".share-popup");
const profile = document.querySelector(".profile");
const shareMobile = document.querySelector(".share-mobile")

shareBtn.addEventListener("click", () => {
    popup.classList.toggle("active");
    if (window.innerWidth <= 786) {
        profile.classList.toggle("hide");
    }
});


shareMobile.addEventListener("click", () => {
    popup.classList.toggle("active");
    profile.classList.toggle("hide");
});