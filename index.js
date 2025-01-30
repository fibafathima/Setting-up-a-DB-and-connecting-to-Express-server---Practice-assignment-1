const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();

const mongo=process.env.mongoURL
const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, async() => {
  console.log(`Example app listening at http://localhost:${port}`);
  try {
    await mongoose.connect(mongo)
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    
  }
});


