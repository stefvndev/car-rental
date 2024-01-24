const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 5000;

// Replace these values with your actual MySQL database credentials
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'my_app_db',
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

// Middleware to parse incoming JSON data
app.use(express.json());

// API endpoint to handle login or registration
app.post('/api/auth', (req, res) => {
  const { isLogin, name, email, password } = req.body;

  if (isLogin) {
    // Handle login logic
    // Replace this with your actual login logic
    db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, result) => {
      if (err) throw err;

      if (result.length === 1) {
        res.json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    });
  } else {
    // Handle registration logic
    // Replace this with your actual registration logic
    db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], (err, result) => {
      if (err) throw err;

      res.json({ message: 'Registration successful' });
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
