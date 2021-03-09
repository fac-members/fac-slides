# FAC Slides

A minimal slideshow generator inspired by Reveal.js and HackMD.

## Run locally

1. Clone this repo
1. `npm install`
1. `npm run dev`

## Creating presentations

Presentations live in the `src/slides/` directory. They can either be a single markdown file (the file name determines the URL path), or a directory containing an `index.md` (the directory name determines the URL path). For example both `src/slides/test.md` and `src/slides/test/index.md` will create a presentation at `fac-slides.netlify.app/slides/test/`. A directory is useful as it allows you to keep related assets (like images) right next to the markdown.

### Presentation structure

Presentations are written in markdown. They should start with "frontmatter" (metadata about the presentation), which requires at least a `title` property. Slides are separated by a horizontal rule `---`. For example:

```markdown
---
title: My presentation
---

# My first slide

---

The second slide
```

### Presentation styles

There should be sensible default styles applied to all markdown. Images get a nice box-shadow, which can be disabled by using a proper image tag with a width attribte (`<img width="100">`).

If you want more interesting slides you can use the HTML comments to apply classnames to slides. For example:

```markdown
<!-- {.primary} -->

# My first slide
```

This will add a classname of `primary` to this slide, which will cause it to have a bright yellow background (in the default FAC theme).

Slide background options include `dark`, `primary`, `secondary`, `tertiary`, `quarternary` and `image`. The image option requires a CSS variable of `--bg` to be set containing a valid CSS URL. For example:

```markdown
<!-- {.image style="--bg: url('my-image.jpg')"} -->

# My first slide
```

If you're setting a darker background colour you may want to also set the `invert` class to make all the text white.

```markdown
<!-- {.secondary.invert} -->

# My first slide
```
