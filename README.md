# Blog API

A simple Express.js API for managing blog posts, allowing users to create, retrieve all posts, and retrieve individual posts by ID. This project demonstrates basic CRUD operations with in-memory data storage.

## Features  <br />
  Create Post: Add a new blog post.  <br />
  Get All Posts: Retrieve all blog posts.  <br />
  Get Post by ID: Retrieve a specific blog post by its ID.

## Prerequisites
  Node.js and npm installed on your local machine.

## Clone the repository
  git clone https://github.com/your-username/blog-api.git <br />
  cd blog-api  <br />
  npm install  <br />
  node index.js  <br />
The server will start on http://localhost:3000.

## API Endpoints
  ### Retrieve All Blog Posts      <br />
  Endpoint: /posts  <br />
  Method: GET  <br />
  Description: Retrieve a list of all blog posts.

 ## Retrieve a Blog Post by ID  <br />
   Endpoint: /posts/:id  <br />
   Method: GET  <br />
   Description: Retrieve a specific blog post by its unique ID.

## Create a New Blog Post  <br />
   Endpoint: /posts  <br />
   Method: POST  <br />
   Description: Creates a new blog post.

# Error Responses  <br />
  404 Not Found: Returned if the specified blog post ID is not found.  <br />
  400 Bad Request: Returned if required fields 
  
# Running Tests  <br />
  This project doesn't currently include automated tests, but you can manually test the API endpoints using Postman




