
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

// Handle donations
app.post('/FundMePage', (req, res) => {
    let { fundraiserId, amount } = req.body;

    // Parse the amount to a number
    amount = parseFloat(amount);
    if (isNaN(amount)) {
        return res.status(400).json({ error: 'Invalid donation amount' });
    }

    if (!fundraiserId || !amount) {
        return res.status(400).json({ error: 'Fundraiser ID and amount are required' });
    }

    // Fetch the current donatedAmount and goalAmount for the fundraiser
    const getFundraiserSql = "SELECT goalAmount, donatedAmount FROM fundraisers WHERE id = ?";
    db.query(getFundraiserSql, [fundraiserId], (err, results) => {
        if (err) {
            console.error('Database error fetching fundraiser details:', err);  // More detailed logging
            return res.status(500).json({ error: err.message });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Fundraiser not found' });
        }

        const { goalAmount, donatedAmount } = results[0];
        const newDonatedAmount = donatedAmount + amount;

        // Ensure the donated amount does not exceed the goal
        if (newDonatedAmount > goalAmount) {
            return res.status(400).json({ error: 'Donation exceeds fundraiser goal' });
        }

        // Update the fundraiser with the new donated amount
        const updateFundraiserSql = "UPDATE fundraisers SET donatedAmount = ? WHERE id = ?";
        db.query(updateFundraiserSql, [newDonatedAmount, fundraiserId], (err, updateResult) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            // Calculate the remaining amount
            const remainingAmount = goalAmount - newDonatedAmount;

            // Insert the donation into the donations table
            const insertDonationSql = "INSERT INTO donations (fundraiserId, amount) VALUES (?, ?)";
            db.query(insertDonationSql, [fundraiserId, amount], (err, donationResult) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }

                // Respond with the updated fundraiser details
                res.status(200).json({
                    message: 'Donation recorded successfully!',
                    remainingAmount: remainingAmount,
                    newDonatedAmount: newDonatedAmount
                });
            });
        });
    });
});

// Handle fundraiser creation
app.post('/fundraisers', (req, res) => {
    const { title, goalAmount, description, organizer, cause } = req.body;
    
    // Validate the input
    if (!title || !goalAmount || !description || !organizer || !cause) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Initialize donatedAmount as 0
    const sql = "INSERT INTO fundraisers (title, goalAmount, description, organizer, cause, donatedAmount) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sql, [title, goalAmount, description, organizer, cause, 0], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.status(200).json({ message: 'Fundraiser created successfully!' });
    });
});

// Handle contact form submissions
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

//Admin registration
app.post('/admin/register', (req, res) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    // Insert admin into the database
    const sql = "INSERT INTO admins (username, password) VALUES (?, ?)";
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Registration failed: ' + err.message });
        }

        res.status(200).json({ message: 'Admin registered successfully!' });
    });
});

//admin login
app.post('/admin/login', (req, res) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    // Check if the username and password match in the database
    const sql = "SELECT * FROM admins WHERE username = ?";
    db.query(sql, [username], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Admin not found' });
        }

        const admin = results[0];
        
        // Check if the password matches
        if (admin.password !== password) {
            return res.status(401).json({ error: 'Incorrect password' });
        }

        // Successful login
        res.status(200).json({ message: 'Login successful' });
    });
});

// API Endpoint to fetch all table data
app.get('/api/fundraisers', (req, res) => {
    const sql = "SELECT * FROM fundraisers";
    db.query(sql, (err, results) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ error: "Database query failed" });
        }
        res.status(200).json(results);
    });
});

// API Endpoint to fetch a single fundraiser by ID
app.get('/api/fundraisers/:id', (req, res) => {
    const { id } = req.params;
    const sql = "SELECT * FROM fundraisers WHERE id = ?";
    
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ error: "Database query failed" });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: "Fundraiser not found" });
        }

        res.status(200).json(results[0]); // Send the first (and only) result
    });
});

// Start Server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});