const express = require('express');
const app = express();

// Use Render's assigned PORT
const PORT = process.env.PORT || 3000; 

// Allow Render to properly accept requests from any IP
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to my simple API!');
});

app.get('/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    res.json({ message: `Hello, ${name}!` });
});

module.exports = app;