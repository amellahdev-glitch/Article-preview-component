const popUp = document.getElementById("sharePopup")
const btn = document.getElementById("share")

btn.addEventListener("click", () => {

    if (popUp.classList.contains("active")) {
        popUp.classList.remove("active");
    } else {
        popUp.classList.add("active");
    }

});
