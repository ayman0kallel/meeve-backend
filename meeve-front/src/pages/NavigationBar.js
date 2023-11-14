import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import PersonIcon from '@mui/icons-material/AccountCircleOutlined';
import Trophy from '@mui/icons-material/EmojiEventsOutlined';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Personalized Theme
const defaultTheme = createTheme({
  palette: {
    primary: {
      light: '#1ccf90',
      main: '#1ccf90',
      dark: '#1ccf90',
      contrastText: '#fff',
    },
    secondary: {
      light: '#2d2d2d',
      main: '#000000',
      dark: '#2d2d2d',
      contrastText: '#000',
    },
    terciary: {
      light: '#fffbf1',
      main: '#fffbf1',
      dark: '#fffbf1',
      contrastText: '#000',
    },
  },
});

const NavigationBar = () => {
  

  return (
    <ThemeProvider theme={defaultTheme}>
    <AppBar position="static" 
    style={{ 
      backgroundColor: defaultTheme.palette.secondary.main, 
      display:'flex', 
      alignItems: 'center',
      borderRadius:'36px',
       }}>
      <Toolbar>
        <div className="icon-container">
          <IconButton style={{ 
            color: defaultTheme.palette.primary.main,
            margin: '0 8px'
            }} component={Link} to="/HomePage">
            <LocationOnOutlinedIcon sx={{
            width: '40px',
            height: '40px'}} />
          </IconButton>
        </div>
        <div className="icon-container">
          <IconButton sx={{ 
            color: defaultTheme.palette.primary.main,
            margin: '0 8px'
            }} component={Link} to="/Match">
            <AddOutlinedIcon sx={{
            width: '40px',
            height: '40px'}} />
          </IconButton>
        </div>
        <div className="icon-container">
          <IconButton style={{ 
            color: defaultTheme.palette.primary.main,
            margin: '0 8px'
            }} component={Link} to="/Profile">
            <PersonIcon sx={{
            width: '40px',
            height: '40px'}} />
          </IconButton>
        </div>
        <div className="icon-container">
          <IconButton style={{ 
            color: defaultTheme.palette.primary.main,
            margin: '0 8px'
            }} component={Link} to="/profile">
            <Trophy sx={{
            width: '40px',
            height: '40px'}}/>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
}

export default NavigationBar;
