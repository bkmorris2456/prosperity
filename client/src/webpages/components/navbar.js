import {Box, Grid2, Item, Typography, Button, AppBar, Container, Toolbar, IconButton} from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        
        <AppBar position="static" sx={{ 
            backgroundColor: '#FFFFFF', 
            color: '#000',
            height: "7vh",
            width: "100%", 
        }}>
            <Toolbar>
                {/* Left Side - Buttons */}
                <Box sx={{ flexGrow: 1, display: 'flex', gap: 1, mr: 2 }}>
                    <Button color="inherit" component={Link} to="/" >Home</Button>
                    <Button color="inherit" component={Link} to="/exercise-home">Exercise</Button>
                    <Button color="inherit" component={Link} to="/nutrition-home">Nutrition</Button>
                </Box>

                {/* Right Side - Profile Icon */}
                <IconButton color="inherit" sx={{
                    fontSize: "4rem",
                }}>
                    <AccountCircleIcon />
                </IconButton>
            </Toolbar>
        </AppBar>

    );

};