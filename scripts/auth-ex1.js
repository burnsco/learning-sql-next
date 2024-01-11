const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// User data would typically be stored in a database
// For this example, we'll store user data in a simple object
let users = {};

// Register endpoint
app.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Hash the password
  const hash = crypto.createHash('sha256');
  hash.update(password);
  const hashedPassword = hash.digest('hex');

  // Store user data
  users[username] = {
    password: hashedPassword,
  };

  res.send('Registration successful');
});

// Login endpoint
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users[username];

  if (!user) {
    return res.status(400).send('User not found');
  }

  // Hash the provided password
  const hash = crypto.createHash('sha256');
  hash.update(password);
  const hashedPassword = hash.digest('hex');

  // Compare the hashed password with the stored password
  if (hashedPassword === user.password) {
    // Generate a token and store it
    const token = crypto.randomBytes(16).toString('hex');
    user.token = token;

    // Send the token to the client
    res.cookie('auth', token);
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid password');
  }
});

// Protected endpoint
app.get('/protected', (req, res) => {
  const token = req.cookies.auth;
  const username = Object.keys(users).find(
    (username) => users[username].token === token,
  );

  if (username) {
    res.send(`Hello ${username}, you are authenticated!`);
  } else {
    res.status(401).send('You are not authenticated');
  }
});

app.listen(3000, () => console.log('Server started on port 3000'));
