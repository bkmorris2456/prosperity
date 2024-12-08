import {Box, Grid2, Item, Typography, TextField, Button} from "@mui/material"
import { Children } from "react";
import Navbar from '../components/navbar.js'

export default function TemplateOne({children}) {

    return (

        <Box
        sx={{
          display: 'grid',
          height: '100%', // Full viewport height
          backgroundImage: "radial-gradient(circle, rgba(40,45,28,1) 0%, rgba(0,0,0,1) 100%)", // Subtle gradient
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
        >

            <Navbar/>

            {children}

        </Box>

    );

};