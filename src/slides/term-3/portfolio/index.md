---
title: EPA
---

# EPA

---

EPA stands for end-point assessment and is the final step in completing the apprenticeship

---

To complete your apprenticeship, you'll be assessed in two ways:

- Project (“Work-based project with questioning”)
- Portfolio (“Professional discussion underpinned by portfolio”)

---

To begin EPA, you must get through the _Gateway_

Gateway is a 2-week period where BCS will approve or deny your project start

---

To enter gateway you must submit:

- a final project proposal
- your completed portfolio
- Evidence of Level 2 English
- Evidence of Level 2 Maths
- Sign-off from your employer

---

Founders and Coders will support you throughout the lead up and during EPA

---

Each term, we'll be available for regular check-ins and portfolio feedback

We'll also hold 'tripartite reviews' between you, your employer, and us

---

You can enter Gateway 12 months after starting the apprenticeship

---

## Portfolio

---

**Your portfolio is not directly assessed**.

It is used as the basis for the "professional discussion", which determines 50% of your grade.

---

It's a collection of documentation which relates to a set of knowledge, skills and behaviours

---

There is no specific structure for the documentation, but you should cover:

- **What** you did
- **How** you did it
- **With whom**
- and **why** you did it that way

---

Build your portfolio throughout your apprenticeship

---

Your assessor will be looking to hear what **you** did, so always use **I, me, my** and avoid **we, us, our**.

---

Put together a narrative of what you did on the project, and use supporting evidence.

Mapping to KSBs comes after documenting, and in a separate document.

---

## Mapping

---

Put together a separate document with a table which maps your evidence to the KSBs

---

https://fac-standard.netlify.app/portfolio/ksbs/

---

## Weekly presentations

---

During the course, we'll ask you to reflect on the KSBs you've met that week

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

## Final Project

---

You'll work on the final project after being approved for Gateway

---

The project is something real and useful to your employer

---

Completed within 9 weeks

---

You will submit a 4,500 word report as part of the assessment

---

The report, and the subsequent questioning will form your grade

---

## Assessments

---

The assessments themselves (portfolio and project) are both 60 minute sessions

You'll be asked a minimum of 12 questions related to the work you've done

---

## Questions

---

### Resources

- [FAC Standard](https://fac-standard.netlify.app/)
- [Apprenticeship standard](https://www.instituteforapprenticeships.org/media/5222/st0116_software-developer_l4_ap-for-publication_270521.pdf)
