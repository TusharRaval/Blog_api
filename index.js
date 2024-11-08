const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// In-memory storage for blog posts
let posts = [];
let currentId = 1;

// GET /posts - Retrieve all blog posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// GET /posts/:id - Retrieve a specific blog post by ID
app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

// POST /posts - Create a new blog post
app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }

    const newPost = {
        id: currentId++,
        title,
        content,
        createdAt: new Date(),
    };

    posts.push(newPost);
    res.status(201).json(newPost);
});

// Start the server
app.listen(port, () => {
    console.log(`Blog API running on http://localhost:${port}`);
});
