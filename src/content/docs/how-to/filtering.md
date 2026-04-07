---

title: Filtering
description: Filtering movie results.
---


## Search by Title

```
GET /api/movies?search=robot
```

Use the `search` query parameter to find movies by their title or related keywords.

* The search is **case-insensitive**, meaning `"Robot"`, `"robot"`, and `"ROBOT"` will return the same results.
* **Partial matches are supported**, so a query like `"rob"` can match titles such as *"Robot Wars"* or *"I, Robot"*.
* The search typically scans the movie title field, but may also include other relevant text fields depending on implementation.
* Results are returned in a paginated format if pagination parameters (`page`, `limit`) are provided.

---

## Filter by Genre

```
GET /api/movies?genre=drama
```

Use the `genre` query parameter to filter movies by a specific genre.

* The filter matches movies that include the specified genre in their `genres` array.
* Genre values are generally expected to be in lowercase (e.g., `drama`, `action`, `comedy`) unless otherwise normalized by the system.
* If multiple genres exist for a movie, it will be included as long as one matches the provided genre.
* If no movies match the specified genre, an empty result set is returned.

---

## Combine Filters

```
GET /api/movies?search=robot&genre=sci-fi
```

You can combine multiple query parameters to narrow down results.

* When combining filters, the API applies them using **AND logic**.

  * This means the results will include only movies that match **both** the search term *and* the genre.
* This is useful for refining large datasets into more specific subsets.
* Combined filters work seamlessly with pagination parameters like `page` and `limit`.

---

## Notes

* Filters are applied **before pagination**, ensuring that pagination operates only on the filtered result set.
* If both filtering and pagination are used, the API first narrows down the results, then splits them into pages.
* Invalid or unsupported query parameters are typically ignored or may result in validation errors, depending on implementation.
* For best results, ensure query parameter values are properly formatted and URL-encoded where necessary.
