---
title: Databases Introduction
---

# Databases

---

A database is a structured collection of information

---

"Structured" means "you can ask a computer questions about it"

---

A paragraph in a book can _contain_ data.

But it is not _structured_.

---

Here are some examples of structured data:

1. An HTML table
1. A JSON object
1. A spreadsheet

---

## Relational databases

---

Computers have both "memory" (RAM) and "storage" (disk).

---

Memory is how much stuff the computer can hold in its head.

---

Disk storage is where the computer keeps things long-term.

It loads things out of storage into memory when it needs them.

---

Memory is fast but expensive.

Computers generally don't have much of it (~16GB nowadays).

---

Storage is slower but much cheaper

Computers generally have a lot more of it (~256GB nowadays).

---

In the past memory was _much_ more expensive.

The Commodore 64 (1982) had 64 _kilobytes_ of memory.

That's 0.000064GB.

---

This meant early databases were optimised for memory-usage.

They stored data in a way that made it efficient to access.

---

These are called "relational" databases.

They store data in tables, like a spreadsheet.

Table: fruits

| name   | quantity | price |
| ------ | -------- | ----- |
| apple  | 10       | 1.00  |
| banana | 20       | 0.40  |

---

They are "relational" because they can "relate" multiple tables.

If we had a `stores` table to go with our `fruits`:

Table: stores

| id  | location   |
| --- | ---------- |
| 1   | camden     |
| 2   | kensington |

---

Our `fruits` table could use the store IDs:

Table: fruits

| name   | quantity | price | store_id |
| ------ | -------- | ----- | -------- |
| apple  | 10       | 1.00  | 1        |
| banana | 20       | 0.40  | 1        |
| apple  | 05       | 1.20  | 2        |
| banana | 30       | 0.20  | 2        |

---

We can now see which store has which fruit at what price.

---

This structure is helpful because it reduces duplication.

We list each store once, no matter how many fruits they have.

---

If we stored this as an object we'd have duplicate info.

Every fruit object would have to list all the stores with it.

```json
{
  "fruits": [
    {
      "name": "apple",
      "quantity": 10,
      "price": 1,
      "store": { "id": 1, "location": "camden" }
    },
    {
      "name": "banana",
      "quantity": 20,
      "price": 0.4,
      "store": { "id": 1, "location": "camden" }
    },
    {...}
  ]
}
```

---

In a DB with thousands of entries this saves a _lot_ of duplication.

---

Certain types of questions are simpler to answer too.

For example "how much total fruit is there?"

We add up the "quantity" column—no need to look at `stores`.

---

MySQL, PostgreSQL & SQLite are popular relational DBs.

---

### SQL

---

SQL stands for Structured Query Language.

It's a language for asking questions about data.

---

SQL is how you get information out of a relational DB

```sql
SELECT name, quantity FROM fruits;
```

---

## Non-relational databases

---

Once computer memory got cheap enough other types of DB became common.

---

These stored data in a less efficient structures (like objects).

However they were fast because they kept everything in memory.

---

Developers often find objects fit their mental model better.

Since code works in objects rather than relations.

---

These new DBs branded themselves "NoSQL"

(since they didn't support SQL)

---

Examples include MongoDB & CouchDB

---

We think relational DBs are a safer default.

---

We'll be using SQLite for the rest of the course,

as it is relatively simple to get started with.

---

## Using relational DBs

---

### Thinking about relationships

---

There are 3 kinds of relationships:

1. One-to-one
1. One-to-many
1. Many-to-many

---

### One-to-one

Each country has one capital city.

Each capital city is in one country.

---

Table: countries

| id  | name | capital_id |
| --- | ---- | ---------- |
| 1   | uk   | 1          |
| 2   | usa  | 2          |

Table: cities

| id  | name          | population |
| --- | ------------- | ---------- |
| 1   | london        | 8.9m       |
| 2   | washington dc | 0.7m       |

---

We use a "foreign key" to create relationships.

The `capital_id` column in `countries` represents a row in `cities`.

---

### One-to-many

A director can create many films.

Each film has only one director (usually).

---

Table: directors

| id  | name          |
| --- | ------------- |
| 1   | Olivia Wilde  |
| 2   | Sofia Coppola |

Table: films

| id  | name                | director_id |
| --- | ------------------- | ----------- |
| 1   | booksmart           | 1           |
| 2   | lost in translation | 2           |
| 3   | the bling ring      | 2           |

---

The only difference here is the foreign keys aren't unique.

We represent the "many" relationship by using the same `director_id` for multiple films.

---

### Many-to-many

A film can include many actors.

Each actor appears in many films.

---

Table: actors

| id  | name           |
| --- | -------------- |
| 1   | Cate Blanchett |
| 2   | Ian McKellan   |

Table: films

| id  | name                             |
| --- | -------------------------------- |
| 1   | LOTR: The Fellowship of the Ring |
| 2   | X-Men                            |
| 3   | Ocean's 8                        |

---

We cannot use foreign keys here.

Since each film would need multiple `actor_id` columns.

Instead we can use another table to store the relationships.

---

This is often called a "join table" (or junction/bridge table)

Table: actors_films

| actor_id | film_id |
| -------- | ------- |
| 1        | 1       |
| 1        | 3       |
| 2        | 1       |
| 2        | 2       |

It bridges the gap between `actors` and `films`.

If we know an actor's ID we can look up their films.

---

```sql
SELECT actors.name, films.name
  FROM actors
    JOIN actors_films ON actors.id = actor_id
    JOIN films ON actor_id = films.id;
```

Table: result

| actors.​name   | films.​name                      |
| -------------- | -------------------------------- |
| Cate Blanchett | LOTR: The Fellowship of the Ring |
| Cate Blanchett | Ocean's 8                        |
| Ian McKellan   | LOTR: The Fellowship of the Ring |
| Ian McKellan   | X-Men                            |
