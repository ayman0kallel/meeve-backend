import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
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
    tertiary: {
      light: '#fffbf1',
      main: '#fffbf1',
      dark: '#fffbf1',
      contrastText: '#000',
    },
  },
});

const CardSwipe = (props) => {
  const { title, image, date, time, place } = props;

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ minWidth: 200 }} className='meetsCardsContainer'>
          {image && (
            <CardMedia
              component="img"
              height="80"
              image={image}
              alt="Image Alt Text"
            />
          )}
          <CardContent className='meetCardContent'>
            <Typography className='cardTitle' gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary"> <b>Date: </b>{date}</Typography>
            <Typography variant="body2" color="text.secondary"> <b>Heure: </b>{time}</Typography>
            <Typography variant="body2" color="text.secondary"> <b>Lieu: </b>{place}</Typography>
          </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default CardSwipe;

