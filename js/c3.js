// ---------- Piano notes (panel 6) ----------
// Each click plays a different piano note. The sound is made in the browser
// with the Web Audio API, so there are no sound files to download.
const scale = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33]; // C D E G A C D
let nextNote = 0;
let audioCtx;

function playNote(freq) {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const now = audioCtx.currentTime;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = "triangle";
  osc.frequency.value = freq;

  // quick attack, slow fade out, like a piano key
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.4, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 1.6);

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(now);
  osc.stop(now + 1.7);
}

const notes = document.querySelectorAll(".note");
notes.forEach(function (note) {
  note.addEventListener("click", function () {
    playNote(scale[nextNote]);
    nextNote = (nextNote + 1) % scale.length;

    // restart the swing animation
    note.classList.remove("ring");
    void note.offsetWidth; // forces the browser to reset the animation
    note.classList.add("ring");
  });
});

// ---------- Poster zoom (panel 4) ----------
const posterButton = document.getElementById("poster-button");
const lightbox = document.getElementById("lightbox");

posterButton.addEventListener("click", function () {
  lightbox.hidden = false;
});

// click anywhere, or press Escape, to close
lightbox.addEventListener("click", function () {
  lightbox.hidden = true;
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") lightbox.hidden = true;
});
