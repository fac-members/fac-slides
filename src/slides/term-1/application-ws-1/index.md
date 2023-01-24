---
title: Applicant Workshop One
private: true
---

# Application workshops

## 1. Introduction to the community

---

<img width="651" height="284" src="https://facresources.com/assets/logos/fac_logo.png" alt="Founders and Coders">

---

<!-- {.primary} -->

### Founders and Coders learning journey

- Stage 0: Expression of Interest & Tribute Page
- Stage 1: Application stage
- Applying and Interviews
- Stage 2: Part Time Skills Bootcamp
- Stage 3: Full Time Apprenticeship Training

---

### Expression of Interest & Tribute Page

_July 19, 2021 — October 1, 2021_

- Submit an Expression of Interest
- Complete Basic HTML & Basic CSS on freeCodeCamp
- Create a Tribute Page and submit it via our website

---

### Application stage

_July 19, 2021 — December 10, 2021_

- Participate in the Discord community
- Work through the rest of the course requirements with the community
- Attend workshops and meetups
- Learn how to study on your own and with others

---

### Interview stage

_December 13, 2021 — December 17, 2021_

- We usually interview 24-32 people per cycle
- Conversational and technical interview

---

_Note: We're rethinking our interview process and we may change this before the deadline. We'll communicate any changes on Discord._

---

<!-- {.primary} -->

### Application Workshops

_October 4, 2021 — December 10, 2021_

1. Functions and daily challenges
1. Codewars and higher-order functions
1. Intro to the DOM
1. Array methods
1. Git and GitHub
1. Flexbox
1. Image Carousel

---

**Mondays at 17:00**

- Led by Gregor
- Participatory - we'd like everyone to have the space to share their suggestions
- Focus on the key parts of applying to FAC
- Introductions, follow-up on your own, share your learnings on Discord

---

### Applicant meetups

Work with others in the community in small groups. Mentored by our current cohort of developers.

---

**Tuesdays at 18:15**

- Let us know what you're working on
- Work in small groups with other applicants
- Learn from each other
- Supported by a mentor

---

<!-- {.primary} -->

## Our community

---

Discord is where our applicant community lives.

🏠🌳

---

Our online community is full of other people learning to code and hoping to apply for our programme.

---

You can attend meetups and workshops, and work together on coding problems with other applicants.

---

### Discord Demo

---

## Inclusion in our Space

---

We prioritise a cohesive cohort of people who we think will work well together over any strong individual candidates.

---

Learning to code is just _part_ of what makes you a good developer.

---

The tech industry is disproportionately white, male and university-educated.

---

Founders and Coders will always prioritise marginalised people’s safety over the comfort of the privileged.

---

## Application Requirements

---

[On our website...](https://www.foundersandcoders.com/apply/#application-requirements)

---

**1. Create a GitHub account**

You will use this account to host the repository of your application website.

---

**2. freeCodeCamp**

Complete these sections of freeCodeCamp’s curriculum:

---

### Responsive Web Design Certification

- Basic HTML and HTML5
- Basic CSS
- Responsive Web Design Principles
- CSS Flexbox

---

### JavaScript Algorithms and Data Structures Certification

- Basic JavaScript
- ES6
- Basic Data Structures
- Basic Algorithm Scripting

---

**3. Codewars**

Complete all 20 of our listed Codewars challenges.

---

**4. Create a personal website**

Create a website demonstrating what you’ve learned.

---

### Where to look for help

---

Let's say, I'm working through freeCodeCamp and I get stuck on a problem.

---

```javascript
// Setup
var myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

// Only change code below this line

myDog[name] = "Happy Coder";
```

Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.

---

### [Google](https://www.google.com/search?q=update+an+object+property+javascript)

> update an object property javascript

---

```javascript
// Setup
var myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

// Only change code below this line

myDog["name"] = "Happy Coder";
```

---

Helpful documentation

- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [W3 Schools](https://www.w3schools.com/)

---

### Asking for help on Discord

---

We want to cultivate finding enjoyment in the process of untangling yourself from a difficult problem — because that really is what a career in web development is sometimes.

While finding the solution is important, knowing how to efficiently ask for help is just as important.

---

In our online spaces, we ask everyone to follow these tips when asking code questions:

---

**1. Read through your code, again**

Your problem could be as simple as a typo or a missing `;`

---

**2. Ask Google first**

Many code problems can be solved with a quick Google, so give this a try first. If that doesn't help, head back here to ask your question, and follow the tips below.

---

**3. Clearly describe the problem, and explain what you have already tried**

Explain what is happening, what you want to happen, and what you already tried — you don't want people to suggest things you have already done.

---

**4a. Share your code**

It’s very unlikely that anyone will be able to help you without seeing your code. We recommend either sharing your code in https://replit.com/

If you’re going to share your code in a message, make sure it’s formatted correctly using back ticks, like the example below, don't forget to put js after the back ticks.

---

\```js

let str = "learn how to ask for help";

\```

will look like:

```javascript
let str = "learn how to ask for help";
```

---

**4b. Share the link**

Most people probably won't know what you mean if you just say "I'm stuck on Record Collection".

Please always make sure to link the problem you're referring to.

---

**5. Send screenshots**

We don't recommend sending screen shots of code, but it can be helpful for other people to see the browser outputs or error messages.

---

**6. Send updates when you figured it out**

So other people know whether their answer has helped you.

Start thinking of your learning journey as part of a wider community learning alongside you.

---

**7. Help other people out when you can**

You don’t have to be a senior developer to be able to help someone else. Founders and Coders is a peer-led learning environment, and we really encourage a collaborative learning space. If people see you helping others, they might also feel encouraged to help others too!

---

### An example...

---

Hi everyone, I have a question regarding RegEx, I find it very confusing, even after having read about it and worked through a lot of the FCC RegEx curriculum. I am working through the Kata - Regex validate PIN code. I have the following code which works and submits, but I would like to combine the two regex conditions into a single condition.

```javascript
function validatePIN(pin) {
  //Two regex conditions - regex4 and regex6 - check 4 and 6 digits
  let regex4 = /^[0-9]{4}$/;
  let regex6 = /^[0-9]{6}$/;
  if (regex4.test(pin) || regex6.test(pin)) {
    return true;
  } else {
    return false;
  }
}
```

Any help would be really appreciated
