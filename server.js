// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Server will run on port 3000

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve the 'index.html' file when the root URL is accessed
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(3000, '0.0.0.0', () => {
  console.log('Server running at http://localhost:3000');
});




