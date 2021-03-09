"use strict";

const HSEP = "---";

module.exports = function revealjs_plugin(md) {
  function isSep(token) {
    return token.type === "hr" && token.markup === HSEP;
  }

  function renderOpening(tokens, idx, options, env, slf) {
    return `<${tokens[idx].tag}${slf.renderAttrs(tokens[idx])}>`;
  }

  function renderClosing(tokens, idx, options, env, slf) {
    return `</${tokens[idx].tag}>`;
  }

  md.renderer.rules.pres_open = renderOpening;
  md.renderer.rules.pres_close = renderClosing;
  md.renderer.rules.slide_open = renderOpening;
  md.renderer.rules.slide_close = renderClosing;

  function nextDivider(tokens, start) {
    for (let i = start; i < tokens.length; i++) {
      if (isSep(tokens[i])) {
        return i;
      }
    }
    return -1;
  }

  var openSlides = 0;

  function presentationOpen(state) {
    var token = new state.Token("pres_open", "section", 1);
    token.block = true;
    token.attrs = [["class", "reveal"]];
    return token;
  }

  function presentationClose(state) {
    return new state.Token("pres_close", "section", -1);
  }

  function slidesOpen(state) {
    var token = new state.Token("slides_open", "div", 1);
    token.block = true;
    token.attrs = [["class", "slides"]];
    return token;
  }

  function slidesClose(state) {
    return new state.Token("slides_close", "div", -1);
  }

  function slideOpen(state, slideCount) {
    openSlides++;
    var token = new state.Token("slide_open", "section", 1);
    token.attrs = [
      ["class", "slide"],
      ["id", slideCount],
    ];
    return token;
  }

  function slideClose(state) {
    openSlides--;
    return new state.Token("slide_close", "section", -1);
  }

  md.core.ruler.push("revealjs", function (state) {
    let divIdx = 0;
    let slideCount = 0;
    while (true) {
      divIdx = nextDivider(state.tokens, divIdx);
      if (divIdx === -1) {
        break;
      }
      let divider = state.tokens[divIdx];
      if (isSep(divider) && openSlides === 0) {
        state.tokens.unshift(slideOpen(state, slideCount));
        slideCount++;
        divIdx++; // we added a token at the beginning, we need to update divIdx
      }
      let tags = [];
      if (isSep(divider)) {
        while (openSlides > 0) {
          tags.push(slideClose(state));
        }
        tags.push(slideOpen(state, slideCount));
        slideCount++;
        // because "---" is hijacked from plain markdown, it translates
        // to one token which we remove
        state.tokens.splice(divIdx, 1, ...tags);
      }
    }

    while (openSlides > 0) {
      state.tokens.push(slideClose(state));
    }
    state.tokens.unshift(slidesOpen(state));
    state.tokens.unshift(presentationOpen(state));
    state.tokens.push(slidesClose(state));
    state.tokens.push(presentationClose(state));
  });
};

// function slidify(md) {
//   md.core.ruler.push("slidify", function (state) {
//     const dividers = state.tokens.filter((t) => t.type === "hr");
//     const count = dividers.length;

//     dividers.forEach((token, index) => {
//       const prev = index - 1 < 0 ? count - 1 : index - 1;
//       const next = index + 1;

//       const replacement = new state.Token("html_block", "", 0);
//       replacement.content = `
//   ${nav(prev, next, index, count)}
// </section>
// <section id="${next}" class="slide">
//       `;
//       const originalIndex = state.tokens.indexOf(token);
//       state.tokens.splice(originalIndex, 1, replacement);
//     });

//     const open = new state.Token("html_block", "", 0);
//     open.content = `<section id="0" class="slide">`;
//     state.tokens.unshift(open);

//     const close = new state.Token("html_block", "", 0);
//     close.content = `
//   ${nav(count - 2, 0, count, count)}
// </section>
//     `;
//     state.tokens.push(close);
//   });
// }

// function nav(prev, next, index, total) {
//   return `
//   <nav>
//     <a href="#${prev}" class="button" aria-label="Previous">
//       <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
//       </svg>
//     </a>
//     <a href="#${next}" class="button" aria-label="Next">
//       <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
//       </svg>
//     </a>
//     <span class="count">${index + 1} / ${total + 1}</span>
//   </nav>
//   `;
// }

// module.exports = slidify;
