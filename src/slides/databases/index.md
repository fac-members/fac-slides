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

Computers have both "memory" (RAM) and "storage" (disk)

---

Memory is how much stuff the computer can hold in its head at once

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

```
name   quantity price
apple  10       1.00
banana 20       0.40
```

---

They are "relational" because they can "relate" multiple tables.

Here's a `stores` table:

```
id location
1  camden
2  kensington
```

---

Our `fruits` table can now use each store's ID:

```
store_id name   quantity price
1        apple  10       1.00
1        banana 20       0.40
2        apple  05       1.20
2        banana 30       0.20
```

---

We can now see which store has which fruit at what price.

---

This structure is helpful because it reduces duplication.

We only list each store once, no matter how many fruits they have.

---

If we stored this as an object we'd have duplicate info.

Every fruit object would have to list all the stores with it.

---

In a database with thousands of fruit entries this saves a _lot_ of duplication.

---

Certain types of questions are simpler to answer too.

For example "how much total fruit is there?".

We just have to add up the "quantity" column—no need to touch the "stores" data at all.

---

Examples include MySQL and PostgreSQL

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

So we'll be using Postgres for the rest of the course

---

## How DBs work

---

When we say "database" we usually mean:

1. The actual structured data
1. The program managing access to that data

The proper term for this is "Database Management Software" (DBMS)

---

Imagine the DBMS as a set of files representing the data.

Plus a program that can read/write to those files efficiently.

---

The program will usually allow access via the network.

This could be HTTP or (for older DBs) a custom protocol.

E.g. Postgres uses `postgres://` instead of `http://`

---

So your app connects to the DB via a URL like:

```
postgres://myusername:mypassword@localhost:5432/mydb
```

It can then send requests to the DB and receive responses.

---

This is a client/server model, just like HTTP.

Your app is the client and the DB is the server.

---

The DB could be on the same machine (a localhost address).

Or it could be hosted somewhere else (e.g. on Heroku).

---

If you send a request like "add an entry for grapes".

The DBMS will look up the file for the `fruit` table, insert the new data, save the file, then send you a response.

---

## Using relational DBs

---

### Thinking about relationships

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

`countries`

```
id name capital_id
1  uk   1
2  usa  2
```

`cities`

```
id name          population
1  london        8.9m
2  washington dc 0.7m
```

---

We use a "foreign key" to create relationships.

The `capital_id` column in `countries` represents a row in `cities`.

---

### One-to-many

A director can create many films.

Each film has only one director (usually).

---

`directors`

```
id name
1  Olivia Wilde
2  Sofia Coppola
```

`films`

```
id name                director_id
1  booksmart           1
2  lost in translation 2
3  the bling ring      2
```

---

The only difference here is the foreign keys aren't unique.

We can represent the "many" relationship by having multiple films with the same `director_id`.

---

### Many-to-many

A film can include many actors.

Each actor appears in many films.

---

`actors`

```
id name
1  lisa kudrow
2  jason sudeikis
```

`films`

```
id name
1  booksmart
2  the angry bird's movie
3  the angry bird's movie 2
```

---

We cannot represent a many-to-many relationship with foreign keys.

We need to use another table to hold the relationships.

---

This is often called a "join table" (or junction/bridge table).

`actors_films`

```
actor_id film_id
1        2
1        3
2        1
```

We can use this table to bridge the gap between `actors` and `films`.

If we know an actor's ID we can look up all the films they were in.
