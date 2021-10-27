---
title: Applicant Workshop Five
---

# Application workshops

## 5. Arrays and Methods

---

<!-- {.primary} -->

## Introduction

---

Arrays allow us to store multiple values within a variable

---

```js
let myNumbers = [1, 2, 3, 5];

let myStrings = ["g", "re", "g", "or"];

let mixedVals = [true, 1, "12", 45];
```

---

## Methods

---

What is a method?

---

A method is a **function** which is a **property** of **an object**.

---

### Examples

---

```js
let myNumbers = [1, 2, 3, 5];

myNumbers.push(14);

console.log(myNumbers);
```

---

```js
let myNumbers = [1, 2, 3, 5];

const example = myNumbers.pop();

console.log(example);
```

---

Which method would remove and return the 1st element?

---

Which method allows us to join two arrays together?

---

[`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

---

[`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

---

Higher order functions are functions which are given or return a function

---

Functions which we pass to a function (or method) to call later are called _callbacks_

---

```js
function addTwo(num1, num2) {
  return num1 + num2;
}

const addThree = (num1, num2, num3) => num1 + num2 + num3;
```

---

[`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

---

[`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
