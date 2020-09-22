const slides = document.querySelectorAll(".reveal section");
//each slide needs an ID so we can link/scroll to it
slides.forEach((s, i) => {
  s.id = i;
});

// ensure there's always a hash
window.location.hash = window.location.hash || "#0";

const MAX = slides.length;

const progress = document.querySelector("progress");
progress.value = (1 / MAX) * 100;

function moveTo(cb) {
  const currentIndex = +window.location.hash.replace("#", "");
  // cycle through all slides infinitely
  const newIndex = ((cb(currentIndex) % MAX) + MAX) % MAX;
  window.location.hash = "#" + newIndex;
  progress.value = ((newIndex + 1) / MAX) * 100;
  console.log("wat");
  console.log(progress.value);
}

const back = () => moveTo((i) => i - 1);
const forward = () => moveTo((i) => i + 1);
const start = () => moveTo(() => 0);
const finish = () => moveTo(() => MAX - 1);

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
prev.onclick = back;
next.onclick = forward;

const KEYS = new Map([
  ["ArrowLeft", back],
  ["ArrowRight", forward],
  [" ", forward],
  ["Home", start],
  ["End", finish],
]);

window.onkeydown = (event) => {
  const fn = KEYS.get(event.key);
  if (fn) {
    event.preventDefault();
    fn();
  }
};
