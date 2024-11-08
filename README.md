# Blog API

A simple Express.js API for managing blog posts, allowing users to create, retrieve all posts, and retrieve individual posts by ID. This project demonstrates basic CRUD operations with in-memory data storage.

## Features
  Create Post: Add a new blog post.
  Get All Posts: Retrieve all blog posts.
  Get Post by ID: Retrieve a specific blog post by its ID.

## Prerequisites
  Node.js and npm installed on your local machine.

## Clone the repository
  git clone https://github.com/your-username/blog-api.git
  cd blog-api
  npm install
  node index.js
The server will start on http://localhost:3000.

## API Endpoints
  ### Retrieve All Blog Posts     
  Endpoint: /posts
  Method: GET
  Description: Retrieve a list of all blog posts.

 ## Retrieve a Blog Post by ID
   Endpoint: /posts/:id
   Method: GET
   Description: Retrieve a specific blog post by its unique ID.

## Create a New Blog Post
   Endpoint: /posts
   Method: POST
   Description: Creates a new blog post.

# Error Responses
  404 Not Found: Returned if the specified blog post ID is not found.
  400 Bad Request: Returned if required fields
  
# Running Tests
  This project doesn't currently include automated tests, but you can manually test the API endpoints using Postman




