const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const port = 5000

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Development56!!",
    database: "prosperity",
})

app.post('/create_account', async (req, res)=>{

    const { name, email, password, confirm_pw } = req.body;

    if (password !== confirm_pw) {
        return res.status(400).json({ message: 'Passwords do not match! Try again.' });
    }

    // Check password requirements
    const passwordRegex = /^(?=.*\d.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{12,}$/;
    if (!passwordRegex.test(password)) {
        return res.status(400).json({
            message: 'Password must be at least 12 characters long, include at least 2 numbers, and use special characters.'
        });
    }

    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = 'INSERT INTO users (`name`, `email`, `password`) VALUES (?, ?, ?)';
        const values = [name, email, hashedPassword];

        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('Database Error:', err);
                return res.status(500).json({message: 'Database error occurred. Check logs.'});
            }
            res.status(201).json({ success: 'Account created successfully!' });
        });

    } catch (error) {
        console.error('Error during account creation:', error);
        res.status(500).json({ message: 'An error occurred during account creation.' });
    }
});

app.post('/check_account', (req, res)=>{

    const {email, password} = req.body;
    console.log(req.body)

    const sql = 'SELECT password FROM users WHERE email = ?';

    db.query(sql, [email], async (err, result)=>{

        if(err) {
            console.error("Database Error", err)
            return res.status(500).json({status: 'error', message: 'Database Error Occurred'});
        }

        if (result.length === 0) {
            console.log('No user found');
            return res.status(401).json({status: 'fail', message: 'Invalid email or password'});
        }

        const hashedPassword = result[0].password;

        console.log('Password: ', password);
        console.log('Hashed Password: ', hashedPassword);

        try {
            const isMatch = await bcrypt.compare(password, hashedPassword);

            if (isMatch) {
                console.log('Login successful!');
                return res.json({status: 'success', message: 'login successful, redirecting to homepage.'});
            } else {
                console.log('Invalid password');
                return res.status(401).json({status: 'fail', message: 'Invalid email or password'});
            }
        } catch (error) {
            console.error('Error comparing passwords:', error);
            return res.status(500).json({ status: 'error', message: 'An error occurred during login'});
        }
    });

});

app.listen(port, ()=>{
    console.log('listening')
})