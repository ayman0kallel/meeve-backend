import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import GroupIcon from '@mui/icons-material/Group';
import Layout from '../Layout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProfileStyle from "../style/pages/Profile.css"

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

const styles = {

    avatar: {
      width: '100px',
      height: '100px',
      marginBottom: '10px',
      border: '2px solid #1ccf90',
    },
   
};

const Profile = () => {
  const userProfile = {
    username: 'User',
    profileImage: 'URL',
    favoriteGym: 'Basic Fit',
    sports: ['Footbal', 'Basket', 'Gym'],
    friendsCount: 50,
    biography:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lorem eu purus feugiat ullamcorper. Vivamus nec quam ut erat malesuada tincidunt in non libero.',
  };

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <div className="ProfileContainer">
          <Avatar
            alt={userProfile.username}
            src={userProfile.profileImage}
            sx={styles.avatar}
          />
          <Typography variant="h5">{userProfile.username}</Typography>

          <div className="sportsContainer" >
            <Typography variant="subtitle1">Sport pratiqués</Typography>
            <ul className='sportList'>
              {userProfile.sports.map((sport, index) => (
                <li key={index} className='sportItem'>
                  <div>
                    {sport === 'Footbal' && (
                      <SportsSoccerIcon className= "sportIcon"  />
                    )}
                    {sport === 'Basket' && (
                      <SportsBasketballIcon className= "sportIcon"/>
                    )}
                    {sport === 'Gym' && (
                      <FitnessCenterIcon className= "sportIcon" />
                    )}
                  </div>
                  <Typography variant="body2" className="sportName">
                    {sport}
                  </Typography>
                </li>
              ))}
            </ul>
            <div className='friendsCountContainer'>
              <GroupIcon className="friendsIcon"  />
              <Typography variant="body2" className="friendsCount" >
                Amies {userProfile.friendsCount}
              </Typography>
            </div>
          </div>

          <section  className='biographySection' >
            <Typography variant="h6" className='biographyTitle' >
              Biography
            </Typography>
            <Typography variant="body2" className='biographyText'>
              {userProfile.biography}
            </Typography>
          </section>
        </div>
      </ThemeProvider>
    </Layout>
  );
};

export default Profile;
