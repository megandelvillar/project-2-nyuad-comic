// ---------- Door (last panel) ----------
// The door starts closed. Click it to open (friends appear), click again to close.
const doorButton = document.getElementById("door-button");

doorButton.addEventListener("click", function () {
  const isOpen = doorButton.classList.toggle("open");
  doorButton.setAttribute("aria-pressed", isOpen);
  doorButton.setAttribute("aria-label", isOpen ? "Close the door" : "Open the door");
});

// ---------- Phone song (panel 4) ----------
// Clicking the phone opens the official "Scared To Be Lonely" video from YouTube.
// The iframe is added on click and removed on close, so the song stops when you close it.
const phoneButton = document.getElementById("phone-button");
const songPlayer = document.getElementById("song-player");
const playerBox = document.getElementById("player-box");

phoneButton.addEventListener("click", function () {
  playerBox.innerHTML =
    '<iframe src="https://www.youtube.com/embed/e2vBLd5Egnk?autoplay=1" ' +
    'title="Martin Garrix and Dua Lipa - Scared To Be Lonely (Official Video)" ' +
    'allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
  songPlayer.hidden = false;
});

function closeSong() {
  songPlayer.hidden = true;
  playerBox.innerHTML = ""; // removing the iframe stops the music
}

// click the dark background, or press Escape, to close
songPlayer.addEventListener("click", function (event) {
  if (event.target === songPlayer) closeSong();
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeSong();
});
