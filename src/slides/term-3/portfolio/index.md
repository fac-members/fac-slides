---
title: Portfolio
---

# Portfolio

---

To complete your apprenticeship, you'll be assessed in two ways:

- Project (“Work-based project with questioning”)
- Portfolio (“Professional discussion underpinned by portfolio”)

---

When you enter EPA gateway you must submit:

- a 500-word project summary
- your portfolio
- Evidence of Level 2 English
- Evidence of Level 2 Maths
- Sign-off from your employer

So you should only start assessment when these are ready.

---

Founders and Coders will support you throughout the lead up and during EPA gateway

---

Each term, we'll be available for regular check-ins and portfolio feedback

We'll also hold 'tripartite reviews' between you, your employer, and us

---

| Date     | Event                              |
| -------- | ---------------------------------- |
| 12/01/23 | Start apprenticeship               |
| 11/04/23 | Join employer FT                   |
| 13/01/24 | Earliest date to enter EPA gateway |
| 13/07/24 | Latest completion date             |

---

## Portfolio

---

**Your portfolio is not directly assessed**.

It is used as the basis for the "professional discussion", which determines 50% of your grade.

---

The portfolio 'typically' contains 10 pieces of evidence

---

Each should relate to at least one of the required knowledge, skills or behaviours. And most likely, they'll cover many.

---

There is no specific structure for the documentation

---

Evidence is documentation which:

1. Summarises each of your work projects
1. Describes all the ways **you** met the required knowledge, skills & behaviours
1. Includes code samples, screenshots of plans/issues/stories, architecture diagrams etc

---

Build your portfolio throughout your apprenticeship

---

Focus on **WHAT** you did and **HOW** you did it.

**WHO** is important too - but your assessor will be looking to hear what **you** did, so always use **I, me, my** and avoid **we, us, our**.

Also consider, **WHY** you are making the technical decisions that you are.

---

- WHAT
- HOW
- WITH WHOM
- WHY

---

Put together a narrative of what you did on the project, and use supporting evidence.

Mapping to KSBs comes after documenting, and in a separate document.

---

## Mapping

---

Put together a separate document with a table which maps your evidence to the KSBs

---

https://fac-standard.netlify.app/

---

https://www.instituteforapprenticeships.org/media/5222/st0116_software-developer_l4_ap-for-publication_270521.pdf

---

## Each week

---

Each week think about the KSBs you've met

---

Look through the list of KSBs, your README, and your codebase

---

In your presentations, include a few examples

---

e.g.

---

## K8

_organisational policies and procedures relating to the tasks being undertaken, and when to follow them. For example, the storage and treatment of GDPR sensitive data_

![Image showing text from a README - GDPR and T&C need to be in plain and simple language. Specific Auth requirements for minors are out of scope for this project](../term-3/portfolio/portfolio-ex-1.jpg)

---

## B4

_works collaboratively with a wide range of people in different roles, internally and externally to the team, with a positive attitude to inclusion & diversity._

![Image showing text from a README - we broke down tasks into smaller issues and assigned them to pairs or individual people. In that sense we worked effectively. We did not research some things enough (reach.ui) and therefor got stuck with some things. Also we discussed many things over and over again, without acutally researching what the best way to to things would be.](../term-3/portfolio/portfolio-ex-2.jpg)

---

## S3

_links code to data sets_

```js
import PlayGame from '../../components/playgame/PlayGame'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function PlayGamePage() {
    const { data, error } = useSWR('/api/staticdata', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    const games = JSON.parse(data)

    return (
        <Layout pageTitle="Play/Games">
            <div className="container">
                <h1 className="title">Play / Game</h1>
                // ...
            </div>
            {<PlayGame games={games['play-game']} />}
        </Layout>
    )
```

---

## Questions
