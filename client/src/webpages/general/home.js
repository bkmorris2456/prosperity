import {Box, Grid2, Item, Typography, Button, AppBar, Container, Toolbar, IconButton} from "@mui/material"
import Navbar from '../components/navbar.js'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Card from '../components/card.js'

export default function Home() {

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

            <Box sx={{
                display: 'grid',
                flexDirection: 'column',
                alignItems: 'center',
                placeItems: 'center',
                justifyContent: 'center',
                width: '60%',
                height: 'auto',
                padding: '2rem',
                margin: 'auto',
                marginTop: '2rem',
            }}>

                <Grid2 container spacing={2} sx={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}>
                    <Grid2 xs={12}>
                        <Card number1={40} number2={50}>
                            <Typography>Calendar will go here</Typography>
                        </Card>
                    </Grid2>
                    <Grid2 xs={6} md={6}>
                        <Card number1={20} number2={30}>
                            Exercise Node will go here
                        </Card>
                    </Grid2>
                    <Grid2 xs={6} md={6}>
                        <Card number1={20} number2={30}>
                            Caloric Node will go here
                        </Card>
                    </Grid2>
                    <Grid2 xs={12}>
                        <Card number1={40} number2={50}>
                            Additional Queries will go here
                        </Card>
                    </Grid2>
                </Grid2>

            </Box>

        </Box>

    );

};