const express = require('express');
const mysql = require('mysql');
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
    database: ""
})

app.post('/create_account', (req, res)=>{

    console.log(req.body)
    sql = "INSERT INTO users (`name`, `email`, `password`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]

    if (req.body.password == req.body.confirm_pw) {
        db.query(sql, values, (err, result)=>{
            if(err) return res.json({message: 'Something caused an issue with account creation'})
                return res.json({success: "Account created successfully!"})
        })
    }
})

app.listen(port, ()=>{
    console.log('listening')
})