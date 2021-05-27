var overlay = document.getElementById("legend-overlay");

var button = document
  .getElementById("legend-overlay-button")
  .addEventListener("click", () => {
    overlay.style.display = "block";
  });

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});
