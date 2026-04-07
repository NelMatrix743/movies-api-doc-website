---

title: Movies Endpoints
description: Endpoints for managing movies.


---

## Base Path

Right after the FQDN (fully qualified domain name) of the base URL, the API paths (routes) follow. The base API path for this system is:

```
/api/movies
```

This section provides a complete overview of all available endpoints for working with the Movies resource. Each endpoint corresponds to a specific operation, such as retrieving, creating, updating, or deleting movie records. It include details about supported HTTP methods, query parameters, request payloads, expected behavior, and example usage to help you interact with the API effectively.

---

## GET /

Retrieve a list of all movies in the system and supports pagination out of the box. It also supports output manipulation via filtering and searching.

You can refine the results using the following query parameters:

* `search`: Search for movies by title or keyword.
* `genre`: Filter results by a specific genre.
* `page`: Specify the page number for paginated results.
* `limit`: Define the number of results returned per page.

If no query parameters are provided, a default paginated list of movies is returned.

### Query Parameters

* search
* genre
* page
* limit

### Example

```
GET /api/movies?search=robot&limit=10
```

---

## GET /:id

Retrieve detailed information about a specific movie using its unique identifier.

This endpoint returns all stored attributes associated with the movie, such as title, release year, runtime, genres, production countries, and IMDb statistics. It is typically used to display a detailed view of a single movie.

* Returns `404 Not Found` if the movie does not exist.
* The provided `id` must correspond to a valid movie record.

---

## POST /

Create a new movie record in the system.

This endpoint accepts a JSON payload containing the movie's details. All required fields must be provided and are validated before the record is created.

* A unique ID is automatically generated for each new movie.
* Input data is validated to ensure consistency and correctness.
* On success, the newly created movie object is returned.

### Request Body

```json
{
  "title": "string",
  "release_year": 2026,
  "age_certification": "PG-13",
  "runtime": 120,
  "genres": ["action"],
  "production_countries": ["US"],
  "seasons": "",
  "imdb_score": 7.5,
  "imdb_votes": 10000
}
```

---

## PUT /:id

Update an existing movie record by its ID.

This endpoint allows partial or full updates to a movie’s data. Only the fields that need to be modified need to be included in the request body.

* Incoming data is validated before applying updates.
* Returns the updated movie object upon success.
* Returns `404 Not Found` if the movie does not exist.

---

## DELETE /:id

Delete a movie record from the system using its unique ID.

This endpoint permanently removes the specified movie from the dataset.

* Returns a confirmation response upon successful deletion.
* Returns `404 Not Found` if the movie does not exist.
* This action is irreversible and should be used with caution.

---

## Notes

* IDs are auto-generated.
* Data is validated before being stored or updated.
* Changes persist to file storage.
