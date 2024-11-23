import {Box, Grid2, Item, Typography, TextField, Button} from "@mui/material"
import { Children } from "react";

export default function Card({number1, number2, children}) {

    return (

        <Box sx={{
            width: `${number1}vw`,
            height: `${number2}vh`,
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
        }}>
            {children}
        </Box>

    );

};