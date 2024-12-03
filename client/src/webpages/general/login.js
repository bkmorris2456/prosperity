import {Box, Grid2, Item, Typography, TextField, Button} from "@mui/material";
import {Link, useNavigate} from 'react-router-dom';
import {React, useState} from 'react';
import axios from 'axios';

export default function Login() {

    const navigate = useNavigate();

    const reroute = (link) => {
        navigate(link);
    };

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    function handleSubmit(e){
        e.preventDefault()

        axios.post('/check_account', values)
        .then((res)=>{
            if (res.data.status === 'success') {
                console.log(res.data.message);
                navigate('/home');
            } else {
                console.log(res.data.message);
                alert(res.data.message);
            }
        })
        .catch((err)=>console.log(err))
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
                marginLeft: '10%',
                marginRight: '10%',
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
                        <TextField label="Email" variant="standard" sx={{
                            width: "80%"
                        }} onChange={(e)=>setValues({...values, email: e.target.value})}/>
                    </Grid2>
                    <Grid2 size={12}>
                        <TextField label="Password" variant="standard" sx={{
                                width: "80%"
                            }} onChange={(e)=>setValues({...values, password: e.target.value})}/>
                    </Grid2>
                    <Grid2 size={12}>
                        <Button variant="contained" sx={{
                            width: "80%",
                            backgroundColor: "#282d1c",
                        }} onClick={handleSubmit}>Log In</Button>
                    </Grid2>
                    <Grid2 size={12}>
                        <Typography variant="caption">
                            <Button onClick={() => reroute('/signup')}>
                                Sign Up
                            </Button>
                        </Typography>
                    </Grid2>
                </Grid2>
            </Box>
        </Box>
    );

};