Overview:
CRUDAPI is a simple RESTful API built with Node.js and Express.js to perform CRUD (Create, Read, Update, Delete) operations on MongoDB databases. This API provides endpoints to interact with MongoDB collections, allowing users to manage data efficiently.

Features:

Create: Add new documents to the MongoDB collection.
Read: Retrieve documents from the MongoDB collection based on specified criteria.
Update: Modify existing documents in the MongoDB collection.
Delete: Remove documents from the MongoDB collection.
Prerequisites:

Node.js installed on your machine.
MongoDB installed and running locally or accessible via a connection string.
Basic understanding of RESTful APIs and MongoDB.
Installation:

Clone this repository to your local machine.
Navigate to the project directory.
Install dependencies using npm install.
Configure the MongoDB connection settings in the config.js file.
Start the server using npm start.
Usage:

Create: Send a POST request to /api/resource with a JSON object containing the data you want to add to the collection.
Read: Send a GET request to /api/resource to retrieve all documents in the collection, or specify a unique identifier to retrieve a specific document.
Update: Send a PUT request to /api/resource/:id with the document ID in the URL and a JSON object containing the updated data.
Delete: Send a DELETE request to /api/resource/:id with the document ID in the URL to remove the document from the collection.
Endpoints:

POST /api/resource: Create a new document in the collection.
GET /api/resource: Retrieve all documents or a specific document from the collection.
PUT /api/resource/:id: Update a document in the collection.
DELETE /api/resource/:id: Delete a document from the collection.
Example:

Create: POST request to /api/users with JSON body: { "name": "John Doe", "email": "john@example.com" }.
Read: GET request to /api/users to retrieve all users or /api/users/:id to retrieve a specific user.
Update: PUT request to /api/users/:id with JSON body: { "name": "Jane Doe" }.
Delete: DELETE request to /api/users/:id to delete a user with the specified ID.
