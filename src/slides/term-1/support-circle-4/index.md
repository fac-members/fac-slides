---
title: Support circle 4
---

# Welcome!

## Support circle 👩🏽‍💻

Week 4 - Movie Data 1

---

<!-- {.secondary inverted} -->

## Movie Data

---

### Requirements

---

- Store the object below in a JavaScript file in your codebase
- Render the data onto the webpage with DOM Manipulation

---

- Allow the user to affect the display of the data by interacting with the webpage
- Allow the user to update the data stored in the object by interacting with the webpage

---

```js
let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  //...
};
```

---

## Data types

---

### Arrays

---

Arrays can be used to store multiple pieces of information in one variable

---

We create an array, like other variables we declare and use square brackets to define them

---

```js
let myArray = [1, 2, 3, 4];
```

---

We access values by using indexes

In other words, where in the array we're looking for the information

---

```js
let myArray = [1, 2, 3, 4];
const myNum = myArray[0];
console.log(myNum);
// logs 1
```

---

### Objects

---

Objects allow us to store multiple pieces of information by using keys and values

---

We use curly brackets to define an object

---

```js
let myObject = {
  name: "Fido",
  type: "dog",
  age: 4,
};
```

---

We reference keys to get values using square brackets or dot notation

---

```js
let myObject = {
  name: "Fido",
  type: "dog",
  age: 4,
};

console.log(myObject[name]);
console.log(myObject.age);
```

## Properties

---

Properties can be:

1. Another name for object keys
1. In-built information about data structures in JavaScript

---

An example of an in-built property is `length`

---

e.g.

```js
let myArray = [1, 2, 3, 4];
let arrLength = myArray.length;
// what's the length here?
```

---

## Methods

---

..

---

## Conditional statements

---
