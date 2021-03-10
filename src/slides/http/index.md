---
title: HTTP Introduction
---

# HTTP

or, how computers talk to each other

![](https://media.giphy.com/media/3If8u5wFsfII0/giphy.gif)

---

## Networks

Computers can be connected (e.g. via ethernet cable or Wi-Fi)

---

## Scales of network

You can connect the computers in your house (Local Area Network or LAN)

We can connect lots of computers in the world (the Internet)

---

## Protocols

Computers need a shared language in order to talk to each other

There are lots of these: IMAP, FTP, HTTP

(the P usually stands for "protocol")

---

## "Layers"

Computers are complex and talk to each other on different levels (or "layers")

The Internet is built on a stack of layers (commonly called TCP/IP)

---

### Internet Layers

1. Link layer
1. Internet Layer
1. Transport Layer
1. Application Layer

---

### Link layer

MAC (Media Access Control) controls the physical connection between two computers

(e.g. managing the Wi-Fi connection)

---

### Internet layer

IP (Internet Protocol) delivers "packets" of data from one machine to another

---

### Transport layer

TCP (Transfer Control Protocol) ensures packets are delivered reliably in the right order

---

### Application Layer

The application layer is the most important for web devs.

Applications on the web usually communicate using the HyperText Transfer Protocol (HTTP)

---

## HyperText Transfer Protocol

A format everyone has agreed on to send requests for information and responses containing that information

Messages are sent using ASCII text (A-z, 0-9, some punctuation)

---

### Without standardisation

> Hey google.com I'd like to search for "cats" please

Without clever AI this unstructured request is too complex.

---

### With standardisation

```
GET https://google.com/?search=cats HTTP/1.1
User-Agent: Mozilla/5.0...
Accept: text/html
```

This request has _structure_, so a machine can understand it

---

### Client/Server model

The computer _requesting_ information is called the "client".

The computer _responding_ to the request is called the "server"

---

### Clients

Clients are usually web browsers. Sometimes called "user-agents" as they make requests on behalf of a human user.

When you click a link or type a URL your browser sends a _request_ to the server.

When it receives a _response_ it displays it on the page.

---

If you're wondering how the browser knows which computer on the internet to send the request to, you should read:

https://howdns.works/

---

### Servers

Servers are normal computers (although usually very powerful).

Nowadays most sites are hosted on servers in dedicated data centres, but you can make your home computer a server if you want.

It just needs to sit listening for requests and sending responses.

---

## HTTP Requests

---

<pre>
POST https://facebook.com/signup HTTP/1.1
User-Agent: Mozilla/5.0...
Accept: text/html
Content-Type: application/json

{ "name": "leia organa" }
</pre>

---

You won't have to translate these in your head—the computer does it for you.

But it's nice to know how human-readable the HTTP format is.

---

### Request method

<pre>
<span style="background: var(--primary);">POST</span> https://facebook.com/signup HTTP/1.1
...
</pre>

- `GET`: get me the thing
- `POST`: here's a thing
- `PUT`: update the thing
- `DELETE`: get rid of the thing
- Plus a few more complex ones

---

### Request path

<pre>
POST <span style="background: var(--primary);">https://facebook.com/signup</span> HTTP/1.1
...
</pre>

HTTP resources are identified by URLs (Uniform Resource Locators).

The path can be a full URL (`https://google.com/`) or just the "path" (`/thing.jpg`).

---

#### Sidenote: URL structure

<style>
.url {
  display: flex;
  gap: 0.25rem;
  font-family: system-ui;
  font-weight: 600;
}

.url:hover > * {
  opacity: 0.5;
}

.url > * {
  position: relative;
  padding: 0.5rem;
  background-color: hsl(200, 50%, 90%);
  transition: opacity 0.2s;
  cursor: crosshair;
}

.url > *:hover {
  opacity: 1;
}

.url > *::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  height: 1rem;
  width: 4px;
  background-color: hsl(200, 50%, 90%);
}

.url > *::after {
  content: attr(data-label);
  position: absolute;
  top: calc(100% + 1rem);
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.875rem;
  font-weight: 400;
}
</style>
<div class="url">
  <span data-label="protocol">https://</span>
  <span data-label="domain">google.com</span>
  <span data-label="path">/search</span>
  <span data-label="search">?query=cats</span>
</div>

---

### Request protocol

<pre>
POST https://facebook.com/signup <span style="background: var(--primary);">HTTP/1.1</span>
...
</pre>

Not super important, but HTTP has been updated over time.

E.g. this could be `HTTP/2` nowadays

---

### Request headers

<pre>
POST https://facebook.com/signup HTTP/1.1
<span style="background: var(--primary);">User-Agent: Mozilla/5.0...
Accept: text/html</span>
...
</pre>

Headers are additional information about the request.

E.g. `accept` defines what type of response the client understands

---

### Request body

<pre>
...
Content-Type: application/json

<span style="background: var(--primary);">{ "name": "leia organa" }</span>
</pre>

Requests that _send_ information (e.g. `POST`s) should include that here.

Can be any format the server understands, as long as you say what you're sending in the `content-type` header.

---

## HTTP Responses

<pre>
HTTP/1.1 200 Ok
Content-Type: text/html
Content-Length 420

&lt;!DOCTYPE html>
&lt;html>
...
</pre>

HTTP responses have a very similar structure to requests.

---

### Response status code

<pre>
HTTP/1.1 <span style="background: var(--primary);">200 Ok</span>
Content-Type: text/html
Content-Length 420

&lt;!DOCTYPE html>
&lt;html>
...
</pre>

Tells the client the result of its request.

E.g. `404 Not found` means "resource not found", `200 Ok` means "success"

---

### https://http.cat/

<iframe src="https://http.cat/" style="aspect-ratio: 16 / 10; width: 70vw; min-height: 70vh; border: 0.25rem solid"></iframe>

---

### Response body

<pre>
HTTP/1.1 200 Ok
Content-Type: text/html
Content-Length 420

<span style="background: var(--primary);">&lt;!DOCTYPE html>
&lt;html>
...</span>
</pre>

Contains whatever information was requested.

Browsers will only render a few types (HTML, images, plain text etc).

Other file types will generally just be downloaded.

---

## Sending requests

Browsers have several ways to send requests.

---

### Navigation

```html
<a href="/contact">Contact us</a>
```

When you type in a URL or click a link the browser sends a `GET` request to that URL.

When it receives the response (if the body is HTML) it will render that on the page.

---

### Form submission

```html
<form action="/submit" method="POST">...</form>
```

Submitting a form sends a request to the URL in its `action` attribute.

The method defaults to `GET` but can be changed with the `method` attribute.

The browser will try to render the response just like a navigation.

---

### Via JavaScript

```js
fetch("/something").then((response) => console.log(response));
```

Manually send a request in your own JS code using `fetch`.

It defaults to a `GET`, but you can control the method/headers etc.

The browser won't do anything automatically—your JS is responsible for updating the page.

---

### In your terminal

Try making a request yourself using the `curl` command:

```bash
$ curl --verbose google.com

*   Trying 2a00:1450:400e:807::200e...
* TCP_NODELAY set
* Connected to google.com (2a00:1450:400e:807::200e) port 80 (#0)
> GET / HTTP/1.1
> Host: google.com
> User-Agent: curl/7.64.1
> Accept: */*
>
< HTTP/1.1 301 Moved Permanently
< Location: http://www.google.com/
< Content-Type: text/html; charset=UTF-8
< Date: Wed, 10 Mar 2021 16:22:34 GMT
< Expires: Fri, 09 Apr 2021 16:22:34 GMT
< Cache-Control: public, max-age=2592000
< Server: gws
< Content-Length: 219
< X-XSS-Protection: 0
< X-Frame-Options: SAMEORIGIN
<
<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREF="http://www.google.com/">here</A>.
</BODY></HTML>
* Connection #0 to host google.com left intact
* Closing connection 0
```

---

## Further reading

https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
