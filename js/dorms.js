// ---------- Door (last panel) ----------
// The door starts closed. Click it to open (friends appear), click again to close.
const doorButton = document.getElementById("door-button");

doorButton.addEventListener("click", function () {
  const isOpen = doorButton.classList.toggle("open");
  doorButton.setAttribute("aria-pressed", isOpen);
  doorButton.setAttribute("aria-label", isOpen ? "Close the door" : "Open the door");
});
