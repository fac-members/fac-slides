const rex = /^(?:Table)?:\s?/;

function testParagraph(state, i) {
  const token = state.tokens[i];
  if (
    token.tag == "p" &&
    token.nesting == 1 &&
    rex.test(state.tokens[i + 1].content)
  ) {
    return (
      i +
      2 +
      state.tokens
        .slice(i + 2)
        .findIndex((t) => t.tag == "p" && t.nesting == -1)
    );
  }
}
function endOfTable(state, i) {
  const token = state.tokens[i];
  if (token.tag == "table" && token.nesting == 1) {
    return (
      i +
      1 +
      state.tokens
        .slice(i + 1)
        .findIndex((t) => t.tag == "table" && t.nesting == -1)
    );
  }
}
function makeCaption(state, start, end) {
  const inl = state.tokens[start + 1];
  inl.content = inl.content.replace(rex, "");
  state.tokens[start].tag = "caption";
  state.tokens[start].type = "caption_open";
  state.tokens[end].tag = "caption";
  state.tokens[end].type = "caption_close";
}
function table_captions(md) {
  md.core.ruler.after("block", "table_captions", (state) => {
    let i = 0;
    while (i < state.tokens.length) {
      const start = i;
      const token = state.tokens[start];
      let end;
      if ((end = testParagraph(state, start))) {
        if (state.tokens.length > end + 1) {
          const after = state.tokens[end + 1];
          if (after.tag == "table" && after.nesting == 1) {
            makeCaption(state, start, end);
            const slice = state.tokens.splice(start, end + 1 - start);
            state.tokens.splice(start + 1, 0, ...slice);
          }
        }
      } else if ((end = endOfTable(state, start))) {
        if (state.tokens.length > end + 1) {
          const captionEnd = testParagraph(state, end + 1);
          if (captionEnd) {
            makeCaption(state, end + 1, captionEnd);
            const slice = state.tokens.splice(end + 1, captionEnd - end);
            state.tokens.splice(start + 1, 0, ...slice);
          }
        }
      }
      i = end || i + 1;
    }
    return true;
  });
}

module.exports = table_captions;
