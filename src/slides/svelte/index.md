---
title: Svelte
---

# Svelte

---

Svelte is a tool for building web apps

---

It's _mostly_ JS but with some helpful extras

---

Unlike other frameworks it is _compiled_.

This means you run a program to generate your final app.

---

## Selling points

---

### Single file components

---

Svelte components can define markup, styles & behaviour.

All in one place!

---

E.g. if we had a file at `src/Hello.svelte`

```html
<script>
  console.log("hi from JS");
</script>

<h1>Hello</h1>

<style>
  h1 {
    font-size: 2rem;
  }
</style>
```

---

We could render that component somewhere else:

```html
<!-- src/App.svelte -->
<script>
  import Hello from "./Hello.svelte";
</script>

<Hello />
<div>Other stuff</div>
```

---

### Scoped CSS

---

The above CSS rule is scoped to just that component.

The final markup is something like:

```html
<style>
  .e7zmn {
    font-size: 2rem;
  }
  /* ...other styles... */
</style>
<h1 class="e7zmn">Hello</h1>
<div>Other stuff</div>
```

---

### True "reactivity"

React components re-render whenever you update state values.

For this to work you have to tell React what values are state, and when you plan to update them.

---

E.g. here's a counter component:

```jsx
function Counter() {
  let [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

---

Here's the same thing as a Svelte component:

```html
<script>
  let count = 1;
</script>

<button on:click="{() => count += 1}">Count: {count}</button>
```

---

Svelte tracks all top-level variables that can change.

It re-renders the component when you assign to them.

---

It's common to need to run side effects after state updates.

E.g. in React:

```jsx
function Counter() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  });
  // ...
}
```

---

In Svelte:

```html
<script>
  let count = 1;
  $: document.title = `Count: ${count}`;
</script>

<!-- ... -->
```

---

Svelte automatically re-runs lines starting with `$`.

But only when the state values used within change.

---

This is all kind of magic, but in a good way.

You don't have to think about it, stuff is just always up-to-date.

---

### Write less code

Svelte can express complex interactions with very little code.

---

Here's a component for adding 2 numbers in React:

```jsx
import React, { useState } from "react";

export default () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);

  return (
    <>
      <input type="number" value={a} onChange={(e) => setA(+e.target.value)} />
      <input type="number" value={b} onChange={(e) => setB(+e.target.value)} />

      <output>
        {a} + {b} = {a + b}
      </output>
    </>
  );
};
```

---

Here's the same in Svelte:

```html
<script>
  let a = 1;
  let b = 2;
</script>

<input type="number" bind:value="{a}" />
<input type="number" bind:value="{b}" />

<output>{a} + {b} = {a + b}</output>
```

---

### No virtual DOM

Svelte generates normal DOM manipulation (like you'd write yourself).

---

Keeping data in sync with the DOM is a big frontend problem.

E.g. "user clicked +, count incremented, show new count on page".

---

Frameworks like React chose the simple approach:

render _everything_, compare to last time, update what changed.

---

E.g. when we update this component:

```jsx
function Count() {
  let [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      <span>Count: {count}</span>
      <p>Unrelated</p>
    </button>
  );
}
```

---

React does this comparison:

```js
let prev = {
  type: "button",
  children: [
    { type: "span", children: ["Count: 0"],
    { type: "p", children: ["unrelated"] },
  ],
};

let next = {
  type: "button",
  children: [
    { type: "span", children: ["Count: 1"],
    { type: "p", children: ["unrelated"] },
  ],
};

let toUpdate = diffSomehow(prev, next); // only the "Count: 0"
```

---

However comparing large trees of objects like this can be expensive.

This is why React can be laggy when changing a lot of DOM nodes.

---

If you were handling the update manually:

```js
if (countChanged) {
  spanElement.textContent = `Count: ${count}`;
}
```

---

Since Svelte is compiled the code you write isn't run by the browser.

Here's the same counter:

```html
<script>
  let count = 0;
</script>

<button on:click="{() => count += 1}">
  <span>Count: {count}</span>
  <p>Unrelated</p>
</button>
```

---

will compile down to regular DOM manipulation.

Here's a snippet:

```js
let span = element("span");
let t0 = text("Count: ");
let t1 = text(/*count*/ "0");
span.append(t0, t1);
// ...
update(dirty) {
  if (dirty) t1.textContent = "1";
}
```

---

Svelte knows in advance what values might change.

It can create very granular update code.

---

### Developer conveniences

---

Svelte has the opposite philosophy to React.

It has a ton of useful stuff built-in.

---

E.g. animation helpers, conditional classnames, grouped input state, easy scroll binding and more

---

## Getting started

The official tutorial is a fantastic interactive guide:

https://svelte.dev/tutorial/
