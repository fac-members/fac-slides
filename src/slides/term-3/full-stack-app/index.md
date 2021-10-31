---
title: Full-stack apps
---

# Full-stack apps

---

Web pages are generally made of "data" + "markup".

---

E.g. your personal landing page:

The data is the information about you.

The markup is the HTML that contains that info.

---

Sometimes your data is static (doesn't change much).

You can get away with writing the HTML in advance.

Your server (or Netlify's) just responds with the static `.html` file.

---

Sometimes your data is dynamic (changes on each request).

You need to generate each page on demand.

This can happen on the server or client.

---

Generating pages on the server is simpler and safer.

Doing it on the client allows for more dynamic interaction.

---

What if we could do _both_, in the same app?

---

## Next.js

---

Next is a framework for building websites with React.

---

React doesn't provide many of the things websites need.

E.g. routing, server-rendering, data fetching

---

Next creates "isomorphic" JavaScript apps.

They render on the server _and_ the client.

---

The inital page load is server-rendered HTML.

Then (once JS loads) it all runs client-side.

---

This is a compromise between initial performance (show HTML fast)

and interactivity on the client.

---

### How it works

---

You create React components in a `pages/` directory.

```jsx
// pages/Index.js

function Index() {
  return <h1>Hello world</h1>;
}

export default Index;
```

---

Next's Node server creates a route for this.

```jsx
server.get("/", (req, res) => {
  const component = ReactServer.renderToString(<Index />);
  const html = `
    <div id="root">${component}</div>
    <script src="client-bundle.js"></script>
  `;
  res.send(html);
});
```

It renders your app once on the server to get HTML.

---

It renders your app again on the client to "hydrate".

```jsx
// client-bundle.js

ReactDOM.hydrate(<Index />, document.querySelector("#root"));
```

This tells React to connect to existing DOM nodes.

---

Before this "hydration" happens the user can still see the HTML.

Once hydration finishes you have a client-side app.

---

### Backend stuff

---

Next also supports "API routes".

These are routes that don't render React components.

Instead they return JSON.

---

You create files inside `pages/api/`.

These will be used as handlers for the matching route.

```js
// pages/api/user.js

function user(req, res) {
  res.status(200).json({ name: "John Doe" });
}

export default user;
```

---

This lets you build an API route to fetch JSON from.

Simpler than having to create and deploy a whole separate server.

---

### Different page types

---

Next supports both server-rendered pages _and_ static

---

Page components have two options for getting data:

1. export a `getStaticProps` function, or
2. export a `getServerSideProps` function

This is where you e.g. query your database.

---

`getStaticProps` marks the page as static.

Next will build this to an .html file when you deploy your site.

Your server avoids making a dynamic route for this page.

---

`getServerSideProps` marks the page as dynamic.

Next will re-create the page on every request.

This way the data will always be up-to-date.

---

```jsx
export async function getServerSideProps(context) {
  const data = await db.query("SELECT * FROM products");
  return {
    props: { products },
  };
}
```

---

The returned props are passed to the component:

```jsx
function Index({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li>{product}</li>
      ))}
    </ul>
  );
}
```

---

This makes data-fetching simpler and safer.

Code used in here will only run on the server.

So it's safe to use secrets, talk to the DB etc.

---

**Warning**: `getStaticProps` is _not_ a good default.

Consider this an optimisation—always start with `getServerSideProps` until you're _sure_ this page's data never changes.

---

E.g. if you use `getStaticProps` for a DB query.

When the DB is updated while the app is running you'll see old data until the app is re-deployed.

---

Next has a ton of other features.

It's mostly just a nice way to build "proper" websites.

---

They have a great interactive tutorial:

https://nextjs.org/learn/
