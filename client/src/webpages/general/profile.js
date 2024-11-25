import "../css/signup.css";
import {Box, Grid2, Item, Typography, TextField, Button} from "@mui/material";
import {React, useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

export default function Profile() {

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

        </Box>
    );

};