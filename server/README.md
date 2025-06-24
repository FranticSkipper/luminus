# Luminus Server

A Node.js/Express server for the Luminus application.

## API Endpoints

### Health Check

- `GET /health` - Check server health

### Directory Tree

- `GET /api/directory-tree` - Get all directory items
- `GET /api/directory-tree/search?query=<search_term>` - Search directory items
- `GET /api/directory-tree/:id` - Get directory item by ID
- `POST /api/directory-tree` - Create new directory item
- `PATCH /api/directory-tree/:id` - Update directory item
- `DELETE /api/directory-tree/:id` - Delete directory item

### Editor Content

- `POST /api/editor-content` - Save editor content
- `GET /api/editor-content` - Get all editor content (debug/admin)
- `GET /api/editor-content/:fileId` - Get editor content by file ID
- `DELETE /api/editor-content/:fileId` - Delete editor content by file ID

## Editor Content API

### Save Editor Content

**POST** `/api/editor-content`

**Request Body:**

```json
{
  "fileId": "string",
  "content": "string"
}
```

**Response:**

```json
{
  "status": "success",
  "data": {
    "id": "content-uuid",
    "fileId": "file-id",
    "content": "file content as string",
    "lastModified": "2024-01-01T00:00:00.000Z",
    "version": 1
  }
}
```

### Get Editor Content

**GET** `/api/editor-content/:fileId`

**Response:**

```json
{
  "status": "success",
  "data": {
    "id": "content-uuid",
    "fileId": "file-id",
    "content": "file content as string",
    "lastModified": "2024-01-01T00:00:00.000Z",
    "version": 1
  }
}
```

## Running the Server

```bash
npm install
npm run dev
```

The server will start on `http://localhost:3000`

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create environment file:

```bash
cp .env.example .env
```

3. Start development server:

```bash
npm run dev
```

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the TypeScript code
- `npm test` - Run tests

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── models/         # Data models
├── routes/         # Route definitions
├── services/       # Business logic
└── utils/          # Utility functions
```

## API Documentation

### Health Check

- `GET /health` - Check server status

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)
- `CORS_ORIGIN` - CORS allowed origin
