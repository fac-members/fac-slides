function slidify(md) {
  md.core.ruler.push("slidify", function (state) {
    let count = 0;

    state.tokens.forEach((token, index) => {
      if (token.type !== "hr") return;

      count++;
      const replacement = new state.Token("html_block", "", 0);
      replacement.content = `
          <nav>
            <a href="#${count - 2}" aria-label="Previous">
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </a>
            <a href="#${count}" aria-label="Next">
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </nav>
        </section>
        <section id="${count}" class="slide">
      `;
      state.tokens.splice(index, 1, replacement);
    });

    const open = new state.Token("html_block", "", 0);
    open.content = `<section id="0" class="slide">`;
    state.tokens.unshift(open);

    const close = new state.Token("html_block", "", 0);
    close.content = "</section>";
    state.tokens.push(close);
  });
}

module.exports = slidify;
