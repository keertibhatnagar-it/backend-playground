require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/login', (req, res) => {
  res.send('you are on the login screen!');
});
app.get('/html-login', (req, res) => {
  res.send('<h1>you are on the login screen!</h1>');
});

app.listen( process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});