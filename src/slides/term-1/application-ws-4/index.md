---
title: Applicant Workshop Four
private: true
---

# Application workshops

## 4. DOM Manipulation

---

<!-- {.primary} -->

## Introduction

---

DOM stands for Document Object Model

---

The DOM is a tree of objects constructed from an HTML Document

---

JavaScript gains access to the HTML code, as an object

---

This means we can alter and update the HTML from JavaScript

---

## Demo...

---

## Events

---

We can respond to HTML and DOM `events` within JavaScript

---

Event examples:

- `load`
- `click`
- `mouseover`
- `keydown`

---

There are a number of properties and methods to each event

---

Before we look at event properties and methods, let's have a look at object properties and methods

---

```js
const myPet = {
  type: "dog",
  name: "Spot",
  age: 6,
  calculateHumanAge: function () {
    return this.age * 7;
  },
};
```

---

## MouseEvents

---

A `click` event is a type of `MouseEvent`

---

We can find the coordinates of the mouse when the event happened using the `clientX` or `clientY` properties

---

We can also find the `target` of the event - in other words, what was clicked

---

## Event Listeners

---

Event listeners are assigned to elements (or parts of an HTML document)

They wait for an event to happen

When the event happens, they call a function

---

<button style="font: inherit; padding: 1rem 2rem" onclick="this.textContent = 'Clicked'">Click me</button>

```js
const myButton = document.querySelector("button");
console.log(myButton);

function changeText(event) {
  event.target.textContent = "Clicked";
}

myButton.addEventListener("click", changeText);
```

---

## Demo...

---

1. Write a function to add two numbers
1. Add two inputs, a button and an output to the HTML document
1. When the user clicks the button:
   - run the function
   - display the output on the page
