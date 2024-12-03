const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json()); // For parsing JSON bodies
app.use(cors()); // Enable CORS

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // replace with your MySQL username
  password: '', // replace with your MySQL password
  database: 'your_database_name', // replace with your database name
});

// Check DB connection
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Login API endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Query to find user by email
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    
    if (result.length === 0) {
      return res.status(404).json({ message: 'Email not found' });
    }

    const user = result[0];
    
    // Compare the provided password with the hashed password in the database
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ message: 'Error during password comparison' });
      }
      
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      // Create a JWT token for the user
      const token = jwt.sign({ id: user.id, email: user.email }, 'your_secret_key', { expiresIn: '1h' });

      // Send token to the frontend
      res.json({ message: 'Login successful', token });
    });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
