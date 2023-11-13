import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  '../../style/profile/Cards.css'

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

  const MeetCards = () => {
    const meetInformation = {
      title: 'Fitness',
      image: 'https://images.pexels.com/photos/28061/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'Vendredi 12 Juillet',
      time:'9h - 12h',
      place: 'Lyon Part-dieu',
      creator:'Davis',
    };
  
    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ minWidth: 200 }} className='meetsCardsContainer'>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="80"
                  image="https://images.pexels.com/photos/28061/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="green iguana"
                />
                <CardContent className='meetCardContent'>
                  <Typography className='cardTitle' gutterBottom variant="h6" component="div">
                  {meetInformation.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary"> <b>Date:</b>{meetInformation.date}</Typography>
                  <Typography variant="body2" color="text.secondary"> <b>Heure:</b>{meetInformation.time}</Typography>
                  <Typography variant="body2" color="text.secondary"> <b>Lieu:</b>{meetInformation.place}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </ThemeProvider>
    );
  };
  
  export default MeetCards;
  