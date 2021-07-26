---
title: Applicant Workshop Two
---

# Application workshops

## 2. Functions

---

<!-- {.primary} -->

### Introduction

---

A function can be defined as a set of instructions to complete a task

---

A function may take some input and return an output

---

```js
// Add all the numbers in the array
// and assign the result to a variable

// Find out how many numbers are in the array
// and assign that to a variable

// Divide the total by the length of the array
// and return the result
```

---

### The benefits of using functions

---

**Define reusable code**

Declare code which can be used more than once with different inputs to give different outputs

---

**Modularise our code**

Break our code up into sections based on its purpose

---

**Help us understand our code**

Having a well named function is easier to understand than a list of statements

A meaningful name makes it easier to understand what the function does. A function that adds two numbers can be “addTwoNumbers”

---

### Using functions

---

**Step one:** Declare the function

---

```js
function myNamedFunction(parameterOne, parameterTwo) {
  // What my function does
}
```

---

```js
function multiplyTwoNumbers(numOne, numTwo) {
  return numOne * numTwo;
}
```

---

```js
const myArrowFunction = (parameterOne, parameterTwo) => {
  // What my function does
};
```

---

```js
const multiplyTwoNumbers = (numOne, numTwo) => {
  return numOne * numTwo;
};
```

---

**Step two:** Call the function

---

```js
myNamedFunction(argumentOne, argumentTwo);
```

---

```js
myArrowFunction(argumentOne, argumentTwo);
```

---

_Suggestion:_ Learn the syntax for and get comfortable with named functions first then learn about arrow functions

---

## Parts of a function

---

These definitions are specific to named functions

Arrow functions do not require all of these parts

---

**The function keyword**

Tells Javascript that we are declaring a function

---

**The function name**

Tells JavaScript how we will reference the function when we'd like to call it

---

**Round brackets**

_Declaring:_ Contain any parameters we'd like to pass in

_Calling:_ Contain any arguments we need to pass in

Commas separate each parameter or argument

---

**Parameters and arguments**

A parameter is like a variable defined in a function declaration

An argument is the actual value of this parameter that get passed when the function is called

---

**Curly brackets**

Define the function block

---

**Function body**

The body of a function refers to the statements inside the function (usually within curly brackets)

---

**Return keyword**

The `return` keyword ends function execution and gives back a value to the function caller

---

```js
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

let total = addTwoNumbers(2, 3);
```

---

Nothing after the return will run, as we break out of the block

---

```js
function addTwoNumbers(num1, num2) {
  return num1 + num2;
  console.log("This will not log");
}

let total = addTwoNumbers(2, 3);
```

---

## Customisable and structural

---

```js
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

let total = addTwoNumbers(2, 3);
```

---

## Examples

---

We'll code our answers in [replit.com](replit.com)

---

**1. Write a function that can return the string “I am a function”.**

This function doesn’t need to be passed any arguments

Calling the function like this:

`talkToMe()`

should output

`I am a function`

---

**2. Write a function that accepts a number as an argument and returns double the number.**

For example, if I called the function like so

`doubleArg(23);`

should output

`46`

---

**3. Write a function that can take two numbers as arguments, and return the product of them**

For example, if you call the function like this:

`timesTwoNumbers(12, 2);`

should output

`24`

---

<!-- {.primary} -->

## The daily challenge

---

Each day, we'll post a challenge on Discord

---

Read `#-how-to` first to understand how to post your attempt

---

`#daily-challenge` is where we'll post the challenge

---

`#help-and-hints` is where you can ask for help or give help to others

---

`#attempts` is the channel to post your attempt at solving the challenge

You don't need to solve the challenge to post an attempt

---

<!-- {.primary} -->

## Harder concepts

---

### Arrow functions

---

An arrow function does not need curly brackets if there’s only one expression inside it

In this case, the return keyword is implied (automatic) and anything after the arrow (`=>`) will be returned from the function

---

You can’t put more than one expression in an arrow function unless you have curly brackets.

---

```js
const addTwo = (num1, num2) => num1 + num2;

// is the same as

const addTwo = (num1, num2) => {
  return num2 + num2;
};
```

---

### Referencing a function

---

Referencing a function is when we use the name of a function without immediately calling it

We’re telling JavaScript which function body to run, not returning the result of running the function

---

```js
const myElement = querySelector("#my-element");

const changeElementToBlue = (event) => {
  event.target.style.backgroundColor = "blue";
};

myElement.addEventListener("click", changeElementToBlue);
```

---

If we add brackets, the function will run when we add the event listener and not when the event happens

---

### Methods

---

Methods are functions which are built in to JavaScript

---

There are different methods for different datatypes like Arrays, Objects and Strings

Some examples are `map`, `reduce`, `substring` and `splice`

---

### Higher Order functions

---

A higher order function takes another function as input, or returns a new function

This is possible because functions can be passed around like strings, numbers, arrays or objects

---

### Callbacks

---

Callbacks are functions that are passed into a higher order function, to be called later

---

An example is javascript’s map method, which is called on arrays.

This takes a callback function as an argument, and calls the function for every element of the array

---

```js
const multiplyBy2 = (number) => number * 2;

const arr = [1, 2, 3, 4];

const doubledArr = arr.map(multiplyBy2);
```

---

Or we can create our own...

---

```js
const multiplyBy2 = (number) => number * 2;

const doSomething = (value, action) => action(value);

const doubled = doSomething(2, multiplyBy2);
```

---

### Scope

---

Scope is the context in which a variable can be accessed

---

_Global variables_ are defined outside any function blocks and can be accessed anywhere

---

_Local variables_ are defined within a function block and can only be accessed within that function

---

```js

let myGlobalVariable = "Hello";

const stringMaker = (){
let myLocalVariable = "World";

return myGlobalVariable + " " + myLocalVariable
};

console.log(stringMaker()) // logs "Hello World"
console.log(myLocalVariable) // causes error
```
