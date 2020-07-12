const clickMeEl = document.getElementById("click-me");
const closePopUpEl = document.getElementById("close-pop-up");
const overlayEl = document.querySelector(".overlay");

clickMeEl.addEventListener("click", () => {
  overlayEl.style.display = "flex";
});

closePopUpEl.addEventListener("click", () => {
  overlayEl.style.display = "none";
});
