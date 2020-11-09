---
title: How websites work
---

# How websites work

---

The Web is has two fundamental parts:

1. **HyperText**  
   A format for documents that can link to each other (i.e. `.html`)
1. **HyperText Transfer Protocol (HTTP)**  
   A way to request documents from other computers on the internet

---

Let's look at HTTP first

---

## Web servers

---

The Internet is a system for connecting two computers so they can exchange information

---

The Web is a protocol on top of the Internet that allows others to browse files you want to share

---

A computer that shares files is known as a "web server".

It "serves" you the files you order.

---

Any computer can be a server, including your laptop:

1. Find your IP address
1. Set up an HTTP server
1. Give the server some files to respond with

---

```js
const express = require("express");
const server = express();
server.use(express.static("public"));
server.listen(80);
```

You will be able to request any file in the `public/` directory at `http://168.192.10.1` (replace with your own IP)

---

Catch: this will only work for local network requests.

You need to fiddle with your Wi-Fi router to allow external requests through.

Also you generally have to pay for a business connection to get a "static" IP.

---

The final step for "proper" websites is Domain Name System (DNS).

This maps IP addresses (which are for computers) to human-readable URLs like https://howdns.works/

---

## Web pages

---

HTTP is used for sharing all kinds of files, not just HyperText.

E.g. https://github.com/oliverjam.png is an image not an HTML document.

---

You can even respond with a plaintext (`.txt`) file and the browser will display the content.

E.g. https://github.com/robots.txt

---

However a web _page_ needs to be HTML. This enables dynamic interactive pages that can link to each other.

Without HTML you're just browsing static files that live on someone else's computer.

---

There are roughly three ways to render web pages:

1. Static files
1. Server-side rendering
1. Client-side rendering

---

### In the beginning: static files

Create `.html` files containing content and tell your server to serve them.

Most servers map URL paths to directories, so `about/index.html` would get served for `example.com/about/`.

```html
<!-- index.html - needs to be put on a static server like Netlify -->
<h1>Hello oli</h1>
```

---

This is simple and cheap to host.

However you can't do anything dynamic without client-side JS.

---

### Web 2.0: server-side rendering

Dynamically generate HTML strings per request. This is how most PHP/WordPress/Rails sites work.

```js
// server.js - needs to be hosted on a server platform like Heroku
const server = require("express")();
const name = "oli";
server.get("/", (req, res) => res.end(`<h1>Hello ${name}</h1>`));
server.listen(80);
```

---

Can do dynamic stuff like render personalised pages with info from a database.

Requires beefy server hardware since all requests are handled in one place. If the server is overwhelmed every user stops getting responses.

---

### Client-side rendering

Send an empty static `.html` file, then use JS in the browser to render DOM elements. This is how most React apps work:

```html
<!-- index.html - needs to be put on a static server like Netlify -->
<div id="root"></div>
<script src="index.js"></script>
```

```jsx
import React from "react";
const name = "oli";
const App = () => <div>Hello {name}</div>;
React.render(<App />, document.querySelector("#root"));
```

---

Capitalists love this 🤑. Offload all the work servers used to do to each user's browser. Much cheaper to host and less likely to go down.

Requires lots of complex JS for _anything_ to render (overkill for mostly static content). Breaks certain web paradigms (e.g. status codes, routing etc).

---

### Static-site generation

Sometimes your data isn't _very_ dynamic (e.g. a marketing site where you update the content once per day).

In this case you can use software to _generate_ a static site on-demand. This lets you avoid hand-writing a bunch of HTML files.

---

```js
// build.js
const fs = require("fs");
const name = "oli";
fs.writeFileSync("dist/index.html", `<h1>Hello ${name}</h1>`);
```

You could run this script on your machine or on a CI server (like Netlify) with `node build.js`, then serve the `dist/` folder.

---

Generally people don't build their own SSGs.  
There are lots of great ones out there:

- Eleventy (Node)
- Hugo (Go)
- Jekyll (Ruby)
- Gatsby (hybrid React SSG/CSR)

---

Let's learn Eleventy 👩‍💻
