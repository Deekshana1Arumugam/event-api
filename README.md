## Postman Collection

You can test the API using the Postman collection included in this project.

**File**: [`postman/postman_collection.json`](./postman/postman_collection.json)

### Available Endpoints

- `POST /api/events` – Create a new event
- `GET /api/events` – List all events
- `GET /api/events/:id` – Get event by ID
- `PUT /api/events/:id` – Update event
- `DELETE /api/events/:id` – Delete event

# Event Management API

A simple RESTful API for managing events using Node.js, Express, TypeScript, and MongoDB.

## Features

- Create, Read, Update, Delete (CRUD) events
- Input validation and error handling
- MongoDB integration using Mongoose

---

## Getting Started

Follow these steps to clone and run the project locally:

### 1. Clone the repository

```bash

git clone https://github.com/Deekshana1Arumugam/event-api.git
cd event-api

```

## 2. Install dependencies

- npm install

---

## 3. Set up environment variables

Create a .env file in the root directory with the following content:

- PORT=5000
- MONGO_URI=mongodb://localhost:27017/eventdb

---

### 4. Run the server in development mode

- npm run dev









