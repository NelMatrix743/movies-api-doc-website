---
title: Pagination
description: Pagination in the Movies API.
---

## Usage

Pagination allows you to retrieve movie records in smaller, manageable chunks instead of fetching the entire dataset at once. This is especially useful when working with large collections of data, improving both performance and usability.

```
GET /api/movies?page=1&limit=10
```

---

## Parameters

* `page` (default: 1)
  Specifies which page of results to retrieve. Page numbering starts at `1`. If a value less than 1 is provided, it is typically normalized to `1`.

* `limit` (default: 10)
  Defines the maximum number of records to return per page. This helps control response size and can improve response times.

---

## Example Response

```json id="h8s3lm"
{
  "total": 100,
  "page": 1,
  "limit": 10,
  "data": []
}
```

### Response Fields

* `total`: The total number of records available after applying any filters.
* `page`: The current page number returned in the response.
* `limit`: The number of records per page.
* `data`: An array containing the movie records for the current page.

---

## Notes

* Pagination is applied **after filtering**, ensuring that only relevant results are divided into pages.
* If the requested `page` exceeds the total number of available pages, the API typically returns an empty `data` array.
* Combining pagination with filters (e.g., `search`, `genre`) allows for efficient and precise data retrieval.
* For consistent results, it is recommended to always specify both `page` and `limit` when consuming paginated endpoints.
* Very large `limit` values may impact performance and could be restricted depending on system constraints.
