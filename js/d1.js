// ---------- Ice cream (panel 3) ----------
// Click the ice cream to sprinkle it, click again to take the sprinkles off.
const iceButton = document.getElementById("ice-button");

iceButton.addEventListener("click", function () {
  const hasSprinkles = iceButton.classList.toggle("sprinkled");
  iceButton.setAttribute("aria-pressed", hasSprinkles);
  iceButton.setAttribute(
    "aria-label",
    hasSprinkles ? "Remove the sprinkles" : "Add sprinkles to the ice cream"
  );
});
