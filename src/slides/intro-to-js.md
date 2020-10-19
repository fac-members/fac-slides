---
title: Intro to JavaScript
---

# Intro to JavaScript

---

JavaScript is a programming language

---

Programming languages let humans give computers instructions by writing words and symbols

---

Computers aren't that smart, so programming languages have to be very structured and explicit

---

> Please multiply 3 by 4, then subtract 2 and print the result

```js
var result = 3 * 4 - 2;
console.log(result);
```

---

## A brief history of the web

---

The Web was invented by Tim Berners-Lee in 1990.

At first web pages consisted of _only_ HTML.

---

### HyperText Markup Language

HTML is a programming language that lets humans describe the structure and content of a webpage. It's the basis of _everything_ on the Web.

---

```html
<h3>HyperText Markup Language</h3>

<p>
  HTML is another programming language designed to describe a document. It's the
  basis of <em>everything</em> on the Web.
</p>
```

---

### Cascading Style Sheets

CSS is another programming languages invented so people could separately describe how their webpages should _look_.

---

```css
h3 {
  font-size: 1.75rem;
  font-weight: bold;
}
```

---

### JavaScript

Finally JS was created so people could dynamically change their webpages. It makes webpages interactive.

---

```js
var myButton = document.querySelector("button");

function changeButtonText() {
  myButton.textContent = "You just clicked me!";
}

myButton.onclick = changeButtonText;
```

<button id="myButton">Click me</button>

<style>
  #myButton {
    border: 2px solid hsl(200, 20%, 75%);
    border-radius: 6px;
    padding: 0.5rem 1rem;
    background-color: hsl(200, 20%, 85%);
    font: inherit;
    font-weight: bold;
    cursor: pointer;
  }
</style>
<script>
  myButton.onclick = () => myButton.textContent = "You just clicked me!"
</script>

---

## HTML & CSS & JS

Each of the three Web languages fulfill a different purpose:

1. HTML is the **nouns**. It describes what things are on the page
1. CSS is the **adjectives**. It describes what the things look like
1. JS is the **verbs**. It tells the page what to do

---

HTML & CSS are very _focused_. They are languages designed to achieve a single goal.

---

JS is a general purpose language—it can do almost anything a computer can do. It's more powerful, but has more syntax to learn than HTML or CSS.

---

That doesn't mean you should neglect HTML or CSS though. JS wouldn't do anything without an HTML page to run on!

---

Live coding time!
