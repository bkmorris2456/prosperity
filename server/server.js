const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

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

app.listen(port, ()=>{
    console.log('listening')
})