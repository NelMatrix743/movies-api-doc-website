---
title: Getting Started
description: Setup and run the Movies REST API locally.
---


## Requirements

* Node.js v20+
* npm v10+

---

## Installation

### Clone the repository


```bash id="h2k7sd"
git clone https://github.com/NelMatrix743/nodejs-movies-rest-api
cd nodejs-movies-rest-api
```

### Install dependencies

```bash id="k91dlt"
npm install
```

---

## Prepare the Database

Ensure that a `database.json` file exists inside a `database/` folder.

The root structure of the database file must be a JSON object. Each key should represent a unique movie ID, and its value should be a JSON object containing the movie’s metadata, as shown in the example below:

```json id="z8p4qm"
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

These JSON objects represent individual movie entries and store the metadata for each movie in the database.

---

## Run the Server

```bash id="n4x8kp"
npm run dev
```

Or, if using a watcher such as nodemon:

```bash id="u7r2qs"
npm run watch
```

These commands start the application in development mode.

* `npm run dev` typically runs the server using Node.js directly.
* `npm run watch` uses a file-watching tool (e.g., nodemon) to automatically restart the server whenever changes are made to the codebase.
* Using a watcher is recommended during development, as it eliminates the need to manually restart the server after every change.

By default, the server runs on port `3000`, unless a different port is specified in your environment configuration.

---

## Access

Once the server is running, you can access the application at:

```id="g2v9lm"
http://localhost:3000
```

* This URL confirms that the server is running successfully.
* All API endpoints are accessible from this base URL.
* For example, the movies endpoint can be accessed at:

  * `http://localhost:3000/api/movies`

---

### API Documentation (Swagger)

```id="d8k3yw"
http://localhost:3000/api-docs
```

* The Swagger UI provides an interactive interface for exploring and testing the API.
* It displays all available endpoints, along with their request parameters, request bodies, and response formats.
* You can send requests directly from the browser without needing external tools like Postman.
* This is useful for both development and debugging, as well as for understanding how the API is structured.

Ensure the server is running before attempting to access the Swagger documentation.
