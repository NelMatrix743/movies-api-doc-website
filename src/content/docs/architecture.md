---
title: Architecture
description: Internal system design.
---


This section describes the internal structure of the system and how its components interact. The architecture follows a layered approach, separating concerns to improve maintainability, scalability, and clarity.

---

## Layers

The system is organized into the following layers:

* **Routes** → Define the available API endpoints and map incoming HTTP requests to the appropriate controller functions.
* **Controllers** → Handle incoming requests, validate input, and coordinate responses. Controllers act as the interface between the client and the business logic.
* **Services** → Contain the core business logic of the application. This layer processes data, enforces rules, and interacts with the data layer.
* **DB (Data Layer)** → Responsible for data storage and retrieval. In this implementation, it uses in-memory storage combined with file-based persistence.

This separation ensures that each layer has a clear responsibility, making the system easier to test, debug, and extend.

---

## Data Flow

```
Request → Route → Controller → Service → DB → Response
```

### Flow Explanation

1. A client sends an HTTP request to the API.
2. The **Route** matches the request to a specific endpoint.
3. The **Controller** processes the request, validates inputs, and calls the appropriate service.
4. The **Service** executes the business logic and interacts with the data layer.
5. The **DB layer** retrieves or updates data as needed.
6. The processed result flows back through the layers and is returned as an HTTP response.

---

## Storage

The system uses a hybrid storage approach combining in-memory data handling with file persistence:

* Data is **loaded into memory on application startup**, allowing for fast access during runtime.
* All read and write operations are performed **in memory** for improved performance.
* Changes are **persisted to a JSON file**, ensuring that data is not lost when the application restarts.

This approach is lightweight and suitable for small to medium-sized applications or development environments.

---

## Why This Design?

This architecture was chosen for the following reasons:

* **Simplicity** → Easy to understand and implement, especially for smaller projects.
* **Performance** → In-memory operations provide fast read/write access.
* **Separation of concerns** → Each layer has a distinct responsibility, improving code organization.
* **Extensibility** → New features can be added with minimal impact on existing components.

---

## Future Improvements

To make the system more robust and production-ready, the following enhancements can be considered:

* **Add a database** (e.g., MongoDB or PostgreSQL) to replace or complement file-based storage.
* **Implement authentication and authorization** to secure API endpoints.
* **Introduce caching** (e.g., Redis) to improve performance for frequently accessed data.
