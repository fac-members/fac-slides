---
title: SPAs & React
---

# Single-page Apps <br>& React

<div style="text-align:center">AKA JavaScript eats the world</div>

---

**Brief history of web dev**

---

## Server rendering (SSR)

---

What we've done with Node so far:

1. Browser requests a page
2. Server does some processing
3. Server responds with HTML for browser to render

---

### MVC

"Model View Controller" is the old-school architecture:

- Controllers are route handlers
- Model looks after database access
- View takes data and renders it into an HTML template

---

Generally the browser is a "thin client".

It just displays what the server gives it and handles no logic.

---

### Client-side enhancement

Client-side JS used to add some interactivity (modals etc).

The heavy lifting is done server-side.

---

### SSR advantages

---

#### Simplicity

Browsers handle a ton of stuff automatically.

Imagine implementing links using JS...

`<a>` and `<form>` handle a _lot_ of complexity.

---

#### Other languages

You can write server code in any language.

The majority of servers don't use Node (PHP, Ruby, Python, Java etc)

---

#### Hardware

Web servers usually run on powerful dedicated hardware.

Client-side code runs on the user's device

(often an underpowered mobile phone).

---

#### Security

Server code is hidden from the user. No access to secrets, DB etc.

Can't trust any code executed in the browser.

---

### SSR disadvantages

---

#### Perceived performance

Everything requires a request to the server and back.

Full page loads can make interactions feel slower.

---

#### Interactivity

Hard to build dynamic interactive "apps" that compete with native.

---

#### Maintaining a server

Deploying, securing and maintaining a server can be difficult

(and expensive for popular sites)

---

#### Separate devs

Historically backend has been a separate skill-set.

It's expensive/inefficient to have two teams writing two languages.

---

## Single-page apps (SPAs)

---

All the logic runs in the browser.

Only one HTML page requested: `index.html`.

After that all templating/routing happens in JS in the browser.

---

### Architecture

MVC is less relevant.

Database access is still on server (for security).

But logic and templating is in the browser.

---

### Architecture

`fetch` JSON data from servers (either 3rd party or your own).

Use that data to render dynamic DOM.

---

### SPA advantages

---

#### Perceived performance

Don't have to reload entire page to remove one element.

`fetch`ing some JSON and updating a small section _can_ feel faster.

---

#### Interactivity

More dynamic interactions are possible.

E.g. filtering lists, deleting elements, animated transitions are easier.

---

#### No server (of your own)

If you're using 3rd party APIs then you don't need your own server.

Can use free static hosts like Netlify for your HTML/CSS/JS files.

Avoids the complexity/expense of managing a server.

---

#### "Full stack JavaScript"

You can have the same devs write your frontend/backend in JS.

This may or may not be a good thing 🙃.

---

### SPA disadvantages

---

#### Complexity

Building a non-trivial app in client-side JS is tough.

Managing ongoing "state" as the user browses is complex.

Server rendering can be simpler for sites that aren't very interactive

---

#### Mandatory JS

You can't run any language but JS in the browser.

JS isn't necessarily the best language for some stuff

(e.g. precision currency calculations)

```js
0.1 + 0.2 === 0.30000000000000004; // true
```

---

#### Hardware

All your code executes on the user's device.

This is often a £100 Android phone with a CPU from 5 years ago.

JS is slow to parse and execute, especially on old devices.

---

#### Security

If all your code executes in the browser you can't hide API keys.

You also can't trust any user input.

So you probably need a server to hide secrets/validate submissions.

---

#### Rendering delay

The page is blank until your JS loads, parses & executes.

JS is the "slowest resource per byte":

i.e. it takes longer to run 1KB of JS than render 1KB of HTML.

---

#### Large downloads

SPAs force every user to download all your app's code.

There's an ethical trade-off to consider:

offloading processing from company servers to users' devices.

---

## Frontend frameworks

<div style="text-align:center">(e.g. React)</div>

---

Help manage complexity building big apps.

Give everyone a shared structure to work from.

Often handle lower-level DOM updates for you.

---

### Framework advantages

---

#### Shared understanding

A framework provides patterns for structuring code within a team.

Frameworks usually have good google-able docs.

---

#### User experience

Good frameworks make it easier to build cool stuff.

They can empower newer developers.

---

#### Developer experience

Can make it nicer to build complex apps.

They often come with stuff developers want built-in.

---

### Framework disadvantages

---

#### Performance

Frameworks are code you must load before you own.

They can also encourage bad habits that lead to bloated apps.

E.g. just `npm install do-the-thing`

---

#### Lock-in

React apps usually can't use libraries written for Angular.

An organisation tends to have to go all in on one technology.

---

#### No control

React is built by Facebook for Facebook.

They might add features you don't need,

or refuse to add features you want.

---

## Why use React?

---

### Declarative UI

Instead of telling the browser each step to render an element you _describe_ it (just like in HTML!)

---

#### Imperative

```javascript
function Box() {
  const div = document.createElement("div");
  div.classList.add("box");
  div.append("Hello world");
  return div;
}
```

---

#### Declarative

```jsx
function Box() {
  return <div className="box">Hello world</div>;
}
```

---

### Declarative UI

Even event listeners are declarative

```jsx
return <button onClick={() => console.log("Clicked!")}>Click me</button>;
```

---

### JSX is close to HTML

```jsx
function DateInput() {
  return h("input", { id: "dob", type: "date", placeholder: "dd/mm/yyyy" });
}
```

vs

```jsx
function DateInput() {
  return <input id="dob" type="date" placeholder="dd/mm/yyyy" />;
}
```

---

### Component model

Dividing your app into pieces is a nice mental model.

You can group markup, styling & behaviour in a re-usable thing.

---

### Component model for easy code reuse

```jsx
<Form>
  <Field>
    <Label>Date of birth</Label>
    <DateInput>
    <Error>
  </Field>
</Form>
```

---

### "Just JavaScript"

No special templating language.

You use JS conditionals, variables and loops to render markup.

---

### "Just JavaScript"

```jsx
const posts = ["blah", "other post", "..."];
return <div>There are {posts.length || 0} blog posts.</div>;
```

---

### "UI as a function of state"

For any given state the rendered DOM should always be the same.

You can just update state and React will keep the UI in sync.

---

### UI is a function of your state

```jsx
return <button>The count is: {count}</button>;
```

---

### Efficient DOM updates

React "diffs" the DOM when it re-renders your components.

It only updates the DOM elements that have changed.

In a large UI this can have performance advantages.

---

### Efficient DOM updates

![](https://i.imgur.com/MK99CYt.gif)
