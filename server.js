const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static('./build'));

// Example credentials storage
const credentialsFile = './credentials.json';
if (!fs.existsSync(credentialsFile)) {
  fs.writeFileSync(credentialsFile, JSON.stringify([]));
}

// Register a new user
app.post('/register', (req, res) => {
  const { email, password } = req.body;
  const credentials = JSON.parse(fs.readFileSync(credentialsFile));
  
  if (credentials.some(user => user.email === email)) {
    return res.status(400).send({ message: 'Email already registered' });
  }
  
  credentials.push({ email, password });
  fs.writeFileSync(credentialsFile, JSON.stringify(credentials));
  res.status(201).send({ message: 'Account created successfully' });
});

// Sign in a user
app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  const credentials = JSON.parse(fs.readFileSync(credentialsFile));
  
  const user = credentials.find(user => user.email === email && user.password === password);
  
  if (!user) {
    return res.status(401).send({ message: 'Invalid email or password' });
  }
  
  res.status(200).send({ message: 'Sign in successful' });
});

// Catch-all to serve React app for any route not matching an API endpoint
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: './build' });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

