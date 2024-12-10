import {Box, Grid2, Item, Typography, Button, AppBar, Container, Toolbar, IconButton} from "@mui/material"
import Navbar from '../components/navbar.js'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Card from '../components/card.js';
import TemplateOne from '../components/template-one.js';

export default function ExerciseHome() {

    return (

        <TemplateOne>

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

                <Grid2 container spacing={2} sx={({
                    width: '100%',
                    alginItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                })}>

                    <Grid2 xs={12}>

                        <Card number1={50} number2={45}>
                            <Typography>Meant to display a summary of exercise details / plans for today</Typography>
                        </Card>

                    </Grid2>

                    <Grid2 xs={4}>
                        <Card number1={15} number2={20}>
                            Card containing saved workouts, and options to create or change them
                        </Card>
                    </Grid2>

                    <Grid2 xs={4}>
                        <Card number1={15} number2={20}>
                            Card containing information on viewing certain workouts and exercises
                        </Card>
                    </Grid2>

                    <Grid2 xs={4}>
                        <Card number1={15} number2={20}>
                            Card containing goal details and option to adjust goals
                        </Card>
                    </Grid2>

                </Grid2>

            </Box>

        </TemplateOne>

    );

};