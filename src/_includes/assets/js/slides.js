document.body.classList.add("js-enabled");

const slides = document.querySelectorAll(".slides section");
//each slide needs an ID so we can link/scroll to it
slides.forEach((s, i) => {
  s.id = i;
});

// returns either the hash number or 0
function getIndex() {
  return window.location.hash ? +window.location.hash.replace("#", "") : 0;
}

// ensure there's always a hash
window.location.hash = "#" + getIndex();

const MAX = slides.length;

function moveTo(cb) {
  const currentIndex = +window.location.hash.replace("#", "");
  // cycle through all slides infinitely
  const newIndex = ((cb(currentIndex) % MAX) + MAX) % MAX;
  window.location.hash = "#" + newIndex;
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

const progress = document.querySelector("progress");

// any side-effects that should happen when we move slides
window.onhashchange = () => {
  progress.value = ((getIndex() + 1) / MAX) * 100;
};
