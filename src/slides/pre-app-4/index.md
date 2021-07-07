---
title: Pre-Apprenticeship Wednesday Week Four
---

# Pre-apprenticeship

## Wednesday Week 4

---

## CSS Variables

---

CSS variables (or custom properties) help us to maintain consistent styling across our sites

---

We can update the variable once and the property will change wherever it is referenced

---

Variables also increase the readability of our CSS

---

```css
:root {
  --main-color: #c70039;
  --secondary-color: #ffffff;
}

#three {
  background: var(--main-color);
  border: 4px double var(--secondary-color);
}
```

---

## Pseudo-classes

---

A CSS pseudo-class can be added to a selector to define special styles based on user behaviour

---

For example, if a user hovers on a button we might like to change the colour

---

<style>

button{
    height: 20vh;
    width: 40vw;
    font-size: 1.5rem;
}
button:hover{
    background: var(--yellow);
}
</style>
<button>
    Hover over me
</button>

---

```html
<style>
  button {
    height: 20vh;
    width: 40vw;
    font-size: 1.5rem;
  }
  button:hover {
    background: var(--yellow);
  }
</style>
<button>Hover over me</button>
```

---

There's a few different types of pseudo classes

---

### Location pseudo-classes

Relating to anchor tags

e.g. `:visited`

---

### User action pseudo-classes

Respond to interaction by the user

e.g. `:focus`

---

### The input pseudo-classes

Relate to form elements, usually inputs

e.g. `:valid`

---

### Tree-structural pseudo-classes

Relate to elements within the document tree

e.g. `:root` and `:first-child`
