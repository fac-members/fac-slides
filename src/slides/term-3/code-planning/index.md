---
title: Code planning
---

# Code Planning

---

When building an application there's two significant things to make decisions on:

- How the app will fit together, and respond to user interaction
- What tech stack you'll choose

---

## Service Blueprinting

---

When you're building something, it's important to consider the points of interaction for the user

---

When the user interacts with the app, what should happen in the backend?

---

Plan out the stages of the user journey and the corresponding actions which will be triggered

---

What does the user see, and what do they do?

What does the app see, and what does it do?

---

![A service blueprint](../term-3/code-planning/service-blueprint.jpg)

---

## Tech Stack

---

It's important to make deliberate choices

---

Try to consider alternative approaches.

What are the pros and cons of each?

---

"We already know this technology" is a valid pro!

---

Your technical choices should help fulfil the project requirements

---

## Specific questions to consider

---

Where does the data come from?

Individual user, all users, or you?

---

Do you need to sync data across devices?

Keeping everything on-device can be simpler.

---

Will your app run on the client or server (or both)?

This is going to depend on data requirements.

---

Do you need a full database?

Could you just use localStorage?

---

Do you need a relational database?

Would a simple object store be easier?

---

Do you need full control of the data?

Could you use a simple hosted service like Airtable?

---

Can you build "frontend first" to validate the MVP?

Setting up a database can suck up a lot of time at the start.

---

Do you need help managing styling?

Or will your app be simple enough to get away with vanilla CSS?

---

Do you need a frontend framework?

Or is your app mostly static?

---

Will you use a platform-as-a-service (like Heroku or Vercel)?

Or do you need more control over the hosting environment?

---

**You don't have to pick the exact right tool for the job**

but you should be able to justify your choice.
