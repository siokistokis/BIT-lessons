const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Change if needed
    password: '', // Change if needed
    database: 'fundraiser_db'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL Database');
});



// Handle fundraiser creation
app.post('/fundraisers', (req, res) => {
    const { title, goalAmount, description, organiser, cause } = req.body;
    
    // Validate the input
    if (!title || !goalAmount || !description || !organiser || !cause) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = "INSERT INTO fundraisers (title, goalAmount, description, organiser, cause) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [title, goalAmount, description, organiser, cause], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.status(200).json({ message: 'Fundraiser created successfully!' });
    });
});

//handle contact details

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    console.log("Received Contact Form Data:", req.body); // Debugging line

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ error: err.message });
        }

        res.status(200).json({ message: 'Message sent successfully!' });
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});