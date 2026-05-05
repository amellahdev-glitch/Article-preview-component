const popUp = document.getElementById("sharePopup")
const btn = document.getElementById("share")

btn.addEventListener('click', () => {
    popUp.classList.toggle("active")
})