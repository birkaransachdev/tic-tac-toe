// Import required dependencies
const express = require('express');
const { registerUser, authenticateUser } = require('./auth');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Route to handle user registration
app.post('/register', (req, res) => {
    // Extract username and password from request body
    const { username, password } = req.body;
    // Attempt to register the user
    const user = registerUser(username, password);
    // Return error if user already exists
    if (!user) return res.status(400).send('User already exists');
    // Return success message
    res.send('User registered successfully');
});

// Route to handle user login
app.post('/login', (req, res) => {
    // Extract username and password from request body
    const { username, password } = req.body;
    // Attempt to authenticate user and generate token
    const token = authenticateUser(username, password);
    // Return error if credentials are invalid
    if (!token) return res.status(401).send('Invalid credentials');
    // Return JWT token on successful authentication
    res.json({ token });
});

// Start the authentication server
app.listen(4000, () => console.log('Auth server running on port 4000'));
