// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

const USERS_FILE = path.join(__desktop, 'users.json');

// Handle signup
app.post('/signup', (req, res) => {
  const newUser = req.body;

  // Read existing users
  fs.readFile(USERS_FILE, 'utf8', (err, data) => {
    let users = [];
    if (!err && data) {
      users = JSON.parse(data);
    }

    // Check if user already exists by email
    if (users.some(u => u.email === newUser.email)) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Add and save
    users.push(newUser);
    fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), err => {
      if (err) return res.status(500).json({ message: 'Error saving user.' });
      res.json({ message: 'User registered successfully!' });
    });
  });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));


