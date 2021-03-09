function start() {
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

  const downloadLink = document.querySelector("a[download]");
  const nav = document.querySelector("nav");
  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");
  const count = document.querySelector("#count");

  prev.addEventListener("click", back);
  next.addEventListener("click", forward);

  const hideControls = () => {
    downloadLink.hidden = !downloadLink.hidden;
    nav.hidden = !nav.hidden;
  };

  const KEYS = new Map([
    ["ArrowLeft", back],
    ["ArrowRight", forward],
    [" ", forward],
    ["Home", start],
    ["End", finish],
    ["s", hideControls],
  ]);

  window.onkeydown = (event) => {
    const fn = KEYS.get(event.key);
    if (fn) {
      event.preventDefault();
      fn();
    }
  };

  const progress = document.querySelector("progress");
  const updateProgress = () => {
    const current = getIndex() + 1;
    progress.value = (current / MAX) * 100;
    count.textContent = `${current} / ${MAX}`;
  };
  // make sure it gets set on load
  updateProgress();

  // any side-effects that should happen when we move slides
  window.onhashchange = updateProgress;
}

start();
