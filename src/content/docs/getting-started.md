---

title: Getting Started
description: Setup and run the Movies REST API locally.
-------------------------------------------------------


## Requirements

* Node.js v20+
* npm v10+

---

## Installation

### Clone the repository

```bash
git clone https://github.com/NelMatrix743/nodejs-movies-rest-api
cd nodejs-movies-rest-api
```

### Install dependencies

```bash
npm install
```

---

## Prepare the Database

Ensure `database.json` exists in a `database/` folder.

The outer JSON construct of the database file must be a JSON array, and it must contain a list of JSON object with properties as shown in the example below:

```json
{
  "1": {
    "title": "Example Movie",
    "release_year": 2026,
    "age_certification": "PG-13",
    "runtime": 120,
    "genres": ["action"],
    "production_countries": ["US"],
    "seasons": "",
    "imdb_score": 7.8,
    "imdb_votes": 15000
  }
}
```

This JSON objects will be the unique entries that will represent the movie metadata recorded in your database.

---

## Run the Server

```bash
npm run dev
```

---

## Access

```
http://localhost:3000
```

Swagger:

```
http://localhost:3000/api-docs
```
