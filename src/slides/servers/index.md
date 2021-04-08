---
title: Servers Introduction
---

# Web servers

---

Servers are the second half of the HTTP model

---

The _client_ sends requests for resources

```
GET /search?q=cats HTTP/1.1
accept: text/html
```

---

The _server_ receives requests and sends responses

```
HTTP/1.1 200 Ok
content-type: text/html

<!doctype html>
<html>
  <body>
    <img src="funny-cat.jpg" alt="A very fat cat">
  </body>
</html>
```

---

There's nothing special about a server. Any computer can act as one.

It just has to run software that understands HTTP requests.

---

## Web history

---

### Servers on the early web

---

Tim Berners-Lee designed the web for sharing files at CERN.

The first servers just showed available files and let clients access them.

A bit like a remote PDF viewer

---

The code running on the servers was simple:

- Receive request for `example.com/blog/my-post.html`
- Find matching `/blog/blog-post.html` file
- Read file contents from hard drive
- Send response containing file contents

---

Servers like this are often called "static file servers".

You've probably used one to host a website:

GitHub Pages & Netlify both work this way.

---

### CGI Scripts

---

In 1993 Common Gateway Interface (CGI) scripts were invented.

A way for an HTTP server to call another program on the computer for each request.

---

This program could dynamically create a unique response for each request.

They could be written in any language, but usually C or Perl.

Mostly used to process form submissions at first.

---

The request flow would be something like this:

- Receive request for `example.com/submit?name=oli`
- Send request to `cgi-bin/submit.cgi`
- `submit.cgi` generates dynamic HTTP response with `<h1>Hello oli</h1>`

---

This server is _dynamic_ rather than static.

It sends a different response based on the input provided.

---

Dynamic servers opened up a huge wave of innovation on the web.

You can see `/cgi-bin/` in the URLs of early e-commerce sites like eBay.

---

However CGI scripts were just a slightly nicer way for users to run command-line programs on your computer.

---

This had performance and security implications, since each script was a fully-fledged program.

They took time to start up for each request, and had access to the underlying computer system.

---

### Application servers

---

Since websites were becoming more dynamic it made sense to flip the default.

Instead of mostly static files with the occasional dynamic script, _every_ request could have a dynamic response.

---

CGI scripts were replaced with full application servers.

A single program that listens for HTTP requests and runs dynamic code.

---

The program starts once and keeps running.

(instead of starting a small one-off script for each request)

---

Most modern languages have built-in ways to listen for HTTP requests.

E.g. PHP, Java, C# (.NET), Ruby, and eventually Node (JS)

---

The (simplified) request flow would be something like this:

- Receive request for `example.com/blog/my-post/`
- Server program calls `getPost("my-post")` function
- `getPost` retrieves post from filesystem or database
- Server program sends HTML response with post contents

---

## The rise of JS

---

JS started life as a basic scripting language for web pages.

It was mostly used for showing/hiding elements, changing colours etc.

---

However almost every web dev had to learn it.

(Since JS was the _only_ dynamic language usable in the browser)

---

This meant there were huge numbers of JS devs.

They wanted to do more than program web browsers.

---

> any application that can be written in JavaScript,
>
> will eventually be written in JavaScript
>
> <cite>- [Atwood's Law](https://blog.codinghorror.com/the-principle-of-least-power/)</cite>

---

In 2009 Ryan Dahl created Node.js.

He ripped the JS engine out of Chrome so devs could run it separately.

---

This meant JS could now be used for anything:

Web servers, CLI programs, native apps, even operating systems.

---

## Browser vs Server

---

It's important to understand the difference between browser and server.

---

### Web browsers

---

A web browser executes untrusted code sent over the internet.

This means it has to be a very secure environment.

---

Browsers have strong limits on what they can do (called the "sandbox")

E.g. they can't just read files on your Desktop.

---

As a web dev you have no control over the browser environment.

- users can run any browser software they want
- they can have custom CSS or extensions
- they can block specific parts of the page (like ads)

---

_Your_ code is running on _their_ computer

---

### Web servers

---

A server is "just a computer".

It can run any code the computer can run.

---

Unlike a browser (which is limited to JS),

you can use any language you like to program an HTTP server.

---

You have full control over your server.

It has whatever permissions you give it.

It can do almost anything you tell it to do.

---

_Your_ code is running on _your_ computer

---

### Important differences

---

Here are some important practical differences

---

#### Servers have no DOM

---

The DOM doesn't exist until a browser receives an HTML response and constructs it.

This means the `window` and `document` objects are undefined.

---

#### Servers are secret

---

In the browser all code is sent to the user.

They can see it all in the developer tools.

This means you can't include secrets like API keys in client-side code.

---

Users cannot see the code running on your server.

(assuming it is secured correctly)

They will only see what you send in the HTTP response.

---

This means it is safe to use API keys and other secrets.

---

#### Servers are shared

---

In the browser your code runs separately on each users' computer.

There is no way for one user to see another user's data.

---

You (usually) have one server for _all_ users.

This means you can share variables between requests.

---

Be careful: you can accidentally show one user's data to another.

---

## Node

---

Node is made up of roughly two parts:

1. The JavaScript language (same as in the browser)
1. Ways to access the underlying computer (that browsers don't have)

---

The JS language is the syntax and general-purpose features.

E.g. arithmetic, variables, functions, for loops, promises.

---

Browsers also implement _Web APIs_ to provide useful features.

E.g. `document.querySelector`, `window.location`, `element.clientWidth`.

These don't make sense in a general purpose language.

---

Node doesn't implement these Web APIs.

(since they mostly don't make sense on a server)

---

Instead it has extra APIs for things like:

- creating an HTTP server
- accessing the computer's filesystem
