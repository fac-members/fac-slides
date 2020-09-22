const markdownIt = require("markdown-it");
const markdownReveal = require("markdown-it-revealjs");
const markdownItTitle = require("markdown-it-title");
const markdownItDecorate = require("markdown-it-decorate");
const CleanCSS = require("clean-css");

module.exports = (config) => {
  config.addPassthroughCopy("src/assets");

  config.addFilter("cssmin", (code) => new CleanCSS({}).minify(code).styles);

  const md = markdownIt({
    html: true, // passthrough raw html in md files
    linkify: true, // auto-link URLs
    typographer: true, // smartquotes, other nicer symbols
  });

  md.use(markdownReveal);
  md.use(markdownItTitle);
  md.use(markdownItDecorate);

  config.setLibrary("md", md);

  return {
    dir: {
      // configure Eleventy to look in src/ for everything
      input: "src",
    },
    markdownTemplateEngine: "njk",
  };
};
