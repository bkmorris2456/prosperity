import "../css/signup.css";
import {Box, Grid2, Item, Typography, TextField, Button} from "@mui/material";
import {React, useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

export default function Signup() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirm_pw: '',
    })

    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(values)
    
        axios.post("/create_account", values)
          .then((res) => {
            navigate("/login");
            console.log(res);
          })
          .catch((err) => {
            if (err.response && err.response.data.message) {
              setErrorMessage(err.response.data.message); // Set the error message from the server
            } else {
              console.error(err);
              setErrorMessage("An unexpected error occurred. Please try again.");
            }
          });
      }

    return (

        <Box
        sx={{
          display: 'grid',
          placeItems: 'center',
          height: '100vh', // Full viewport height
          backgroundImage: "radial-gradient(circle, rgba(40,45,28,1) 0%, rgba(0,0,0,1) 100%)", // Subtle gradient
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        >
            <Box sx={{
                width: '25vw',
                height: '65vh',
                borderRadius: 5,
                backgroundColor: '#191919',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                marginLeft: '20%',
                marginRight: '20%',
                padding: 3,
                borderRadius: 5,
                border: "1px solid #FFFFFF"

            }}
            >
                <Grid2 container spacing={3} sx={{
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}>
                    <Grid2 size={12}>
                        <Typography sx={{
                            width: "100%"
                        }}>Welcome to Prosperity!</Typography>
                    </Grid2>
                    <Grid2 size={12}>
                        <TextField label="Name" variant="standard" sx={{
                            width: "80%"
                        }} onChange={(e)=> setValues({...values, name: e.target.value})}/>
                    </Grid2>
                    <Grid2 size={12}>
                        <TextField label="Email" variant="standard" sx={{
                            width: "80%"
                        }} onChange={(e)=> setValues({...values, email: e.target.value})}/>
                    </Grid2>
                    <Grid2 size={12}>
                        <TextField label="Password" variant="standard" type='password' sx={{
                                width: "80%"
                            }} onChange={(e)=> setValues({...values, password: e.target.value})}/>
                    </Grid2>
                    <Grid2 size={12}>
                        <TextField label="Confirm Password" variant="standard" type='password' sx={{
                                width: "80%"
                            }} onChange={(e)=> setValues({...values, confirm_pw: e.target.value})}/>
                    </Grid2>
                    <Grid2 size={12}>
                        <Button variant="contained" sx={{
                            width: "80%",
                            backgroundColor: "#282d1c",
                        }} onClick={handleSubmit}>Sign Up!</Button>
                    </Grid2>
                </Grid2>
            </Box>
        </Box>
    );

};