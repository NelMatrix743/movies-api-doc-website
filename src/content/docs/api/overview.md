---

title: API Overview
description: Overview of the Movies API.

---

## Base URL

After starting the development server, the base URL for requesting the API endpoints will most likely the following:


```
http://localhost:3000/api/movies
```
In other words, it will be your `local host (127.0.0.1)` running on port 3000. All your HTTP request messages will done made against this URL.

---

## Response Format

All responses are JSON.

```json
{
  "id": "1",
  "title": "Example Movie"
}
```

---

## Status Codes

The core HTTP response status codes used throughout the API system are show below:

* `200` → Success
* `201` → Created
* `400` → Validation error
* `404` → Not found

Although for unexpected situations, the server might return a response code that might be outside the planned scope of this system. In that case, make sure your frontend handles those peculiar situations appropriately.

---

## Data Storage

* Primarily persisted in a single database file called `database.json`
* During runtime, the database file is loaded in-memory for performance

---

## Validation

All data is validated using the JavaScript `Joi` library before being stored.
