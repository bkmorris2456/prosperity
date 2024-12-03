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

app.post('/create_account', (req, res)=>{

    sql = "INSERT INTO users (`name`, `email`, `password`) VALUES (?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]

    if (req.body.password == req.body.confirm_pw) {
        db.query(sql, values, (err, result)=>{
            if(err) {
                console.error("Database Error", err)
                return res.json({message: 'Database error occurred. Check logs.'})
            }

            return res.json({success: "Account created successfully!"})
        })
    } else {
        return res.json({message: 'Passwords do not match! Try again.'})
    }
})

app.post('/check_account', (req, res)=>{

    const {email, password} = req.body;

    const sql = 'SELECT email, password FROM users WHERE email = ?';

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
            // const isMatch = await bcrypt.compare(password, hashedPassword);

            if (password === hashedPassword) {
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

        // if (password === req.body.password) {
        //     console.log('Login successful!');
        //     return { status: 'success', message: 'Successful, redirect to Homepage'};
        // } else {
        //     console.log('Invalid Password');
        //     return {status: 'fail', message: 'Invalid email or password'};
        // }

        // return res.json({message: 'Account has been found'})
    });

});

app.listen(port, ()=>{
    console.log('listening')
})