// ---------- Door (last panel) ----------
// The door starts closed. Click it to open (friends appear), click again to close.
const doorButton = document.getElementById("door-button");

doorButton.addEventListener("click", function () {
  const isOpen = doorButton.classList.toggle("open");
  doorButton.setAttribute("aria-pressed", isOpen);
  doorButton.setAttribute("aria-label", isOpen ? "Close the door" : "Open the door");
});

// ---------- Phone song (panel 4) ----------
// Click the phone to play the sad guitar song, click again to pause it.
const phoneButton = document.getElementById("phone-button");
const song = document.getElementById("song");

phoneButton.addEventListener("click", function () {
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
});

// keep the button's look in sync with the music
song.addEventListener("play", function () {
  phoneButton.classList.add("playing");
  phoneButton.setAttribute("aria-pressed", "true");
});
song.addEventListener("pause", function () {
  phoneButton.classList.remove("playing");
  phoneButton.setAttribute("aria-pressed", "false");
});
