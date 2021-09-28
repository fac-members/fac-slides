const CleanCSS = require("clean-css");
const { minify } = require("terser");
const markdownIt = require("markdown-it");
const markdownItDecorate = require("markdown-it-decorate");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownSlides = require("./markdown-it-slides");
const markdownTableCaptions = require("./markdown-it-table-captions");

module.exports = (config) => {
  config.addWatchTarget("assets");

  // in prod we inline CSS/JS into the HTML files
  if (process.env.ELEVENTY_ENV === "development") {
    config.addPassthroughCopy({ "src/_includes/assets": "assets" });
  }
  config.addPassthroughCopy({ "src/_includes/assets/fonts": "assets/fonts" });

  // passthrough any images included in slides
  //so they can be referenced as relative URLs
  config.addPassthroughCopy("src/slides/**/*.{jpg,png,svg,gif,mp4}");

  config.addFilter("cssmin", (code) => new CleanCSS({}).minify(code).styles);
  config.addNunjucksAsyncFilter("jsmin", (code, cb) =>
    minify(code)
      .then((minified) => cb(null, minified.code))
      .catch((err) => {
        console.error("Terser error: ", err);
        cb(null, code);
      })
  );

  const md = markdownIt({
    html: true, // passthrough raw html in md files
    linkify: true, // auto-link URLs
    typographer: true, // smartquotes, other nicer symbols
  });

  md.use(markdownSlides);
  md.use(markdownItDecorate);
  md.use(markdownTableCaptions);

  config.setLibrary("md", md);

  config.addPlugin(syntaxHighlight);
  return {
    dir: {
      // configure Eleventy to look in src/ for everything
      input: "src",
    },
    markdownTemplateEngine: "njk",
  };
};
