function slidify(md) {
  md.core.ruler.push("slidify", function (state) {
    const dividers = state.tokens.filter((t) => t.type === "hr");
    const count = dividers.length;

    dividers.forEach((token, index) => {
      const prev = index - 1 < 0 ? count - 1 : index - 1;
      const next = index + 1;

      const replacement = new state.Token("html_block", "", 0);
      replacement.content = `
  ${nav(prev, next, index, count)}
</section>
<section id="${next}" class="slide">
      `;
      const originalIndex = state.tokens.indexOf(token);
      state.tokens.splice(originalIndex, 1, replacement);
    });

    const open = new state.Token("html_block", "", 0);
    open.content = `<section id="0" class="slide">`;
    state.tokens.unshift(open);

    const close = new state.Token("html_block", "", 0);
    close.content = `
  ${nav(count - 2, 0, count, count)}
</section>
    `;
    state.tokens.push(close);
  });
}

function nav(prev, next, index, total) {
  return `
  <nav>
    <a href="#${prev}" class="button" aria-label="Previous">
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </a>
    <a href="#${next}" class="button" aria-label="Next">
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
    <span class="count">${index + 1} / ${total + 1}</span>
  </nav>
  `;
}

module.exports = slidify;