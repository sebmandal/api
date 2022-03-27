# sebmandal's api

This is a simple REST API I'm working on to experiment and further develop my API-building skills, as well as getting accustomed to NeoVim, as this is my first project using Vim / NeoVim

### The Database

Structure:

- GET /api/v1/products/
  — Returns the full list of products in the database

- POST /api/v1/products/
  — Appends a product to the database

- GET /api/v1/products/:id
  — Fetches the product with inputted id (or returns error if not found)

- PUT /api/v1/products/:id
  — Changes properties on a product in the database

- DELETE /api/v1/products/:id
  — Omits a product from the database
