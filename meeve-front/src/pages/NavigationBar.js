import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';
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
      main: '#2d2d2d',
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
    <AppBar position="static" style={{ backgroundColor: defaultTheme.palette.secondary.main, display:'flex', alignItems: 'center' }}>
      <Toolbar>
        <div className="icon-container">
          <IconButton style={{ color: defaultTheme.palette.primary.main }} component={Link} to="/match">
            <HomeIcon />
          </IconButton>
        </div>
        <div className="icon-container">
          <IconButton style={{ color: defaultTheme.palette.primary.main }} component={Link} to="/chat">
            <ChatIcon />
          </IconButton>
        </div>
        <div className="icon-container">
          <IconButton style={{ color: defaultTheme.palette.primary.main }} component={Link} to="/map">
            <MapIcon />
          </IconButton>
        </div>
        <div className="icon-container">
          <IconButton style={{ color: defaultTheme.palette.primary.main }} component={Link} to="/profile">
            <PersonIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
}

export default NavigationBar;
