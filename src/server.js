// server.js

const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000; // Choose a port for your proxy server

// Enable CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust this to your needs
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Proxy endpoint to forward requests to the Google Apps Script
app.post('/submit-to-google-sheet', async (req, res) => {
  try {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxNKt8I0LUCh0SbZkThxTHHVESKtW2qPwgwPMe8-mcfQROgYxAx5Gs0q5Do4sczxIWv/exec';
    const response = await axios.post(scriptURL, req.body);
    res.json(response.data);
  } catch (error) {
    console.error('Error!', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});
