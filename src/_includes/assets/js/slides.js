// returns either the hash number or 0
function getIndex() {
  return window.location.hash ? +window.location.hash.replace("#", "") : 0;
}

// ensure there's always a hash
window.location.hash = "#" + getIndex();

const MAX = document.querySelectorAll(".slide").length;

function move(cb) {
  const currentIndex = getIndex();
  // cycle through all slides infinitely
  const newIndex = ((cb(currentIndex) % MAX) + MAX) % MAX;
  window.location.hash = "#" + newIndex;
}

const back = () => move((i) => i - 1);
const forward = () => move((i) => i + 1);
const start = () => move(() => 0);
const finish = () => move(() => MAX - 1);

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
