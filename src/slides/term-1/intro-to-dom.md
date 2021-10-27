---
title: Intro to the DOM
---

# Intro to the DOM

---

DOM stands for Document Object Model

---

It's a JS representation of everything on a webpage

---

HTML & CSS _define_ the elements and styles. The DOM lets us access and change them.

---

It's how we use JS to make fun interactive stuff happen

---

```js
var button = document.querySelector("button");

button.onclick = function () {
  button.textContent = "Just clicked";
};
```

<button style="font: inherit; padding: 1rem 2rem" onclick="this.textContent = 'Just clicked'">Click me</button>

---

Coding time 👨‍💻
