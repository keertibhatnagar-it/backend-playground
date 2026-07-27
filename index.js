require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const githubProfile = {
  login: "keertibhatnagar",
  id: 12345678,
  avatar_url: "https://avatars.githubusercontent.com/u/12345678?v=4",
  html_url: "https://github.com/keertibhatnagar",
  name: "Keerti Bhatnagar",
  bio: "Frontend Engineer | React | TypeScript | Next.js",
  company: "Digitem Technologies",
  location: "Gurugram, India",
  blog: "https://keerti-bhatnagar.vercel.app",
  twitter_username: null,
  public_repos: 42,
  public_gists: 3,
  followers: 185,
  following: 67,
  created_at: "2021-12-10T09:15:30Z",
  updated_at: "2026-07-27T10:20:45Z"
};

console.log(githubProfile.name); // Keerti Bhatnagar
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/login', (req, res) => {
  res.send('you are on the login screen!');
});
app.get('/html-login', (req, res) => {
  res.send('<h1>you are on the login screen!</h1>');
});
app.get('/github', (req, res) => {
    res.json(githubProfile);
});
app.listen( process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});