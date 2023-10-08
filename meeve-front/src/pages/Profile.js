import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import GroupIcon from '@mui/icons-material/Group';
import Layout from '../Layout';
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

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
    },
    sportsContainer: {
      width: '90%',
      margin: '20px auto 0', 
      backgroundColor: '#F5F5F5',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
    },
    avatar: {
      width: '100px',
      height: '100px',
      marginBottom: '10px',
      border: '2px solid #1ccf90',
    },
    sportList: {
      listStyleType: 'none',
      padding: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    sportItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#333',
      backgroundColor: '#E5E5E5',
      borderRadius: '5px',
      padding: '10px',
      margin: '5px',
      flex: '1',
    },
    sportIcon: {
      fontSize: '30px',
    },
    sportName: {
      fontSize: '14px',
      marginTop: '5px',
    },
    friendsCountContainer: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#E5E5E5',
      borderRadius: '5px',
      padding: '10px',
      margin: '5px',
    },
    friendsIcon: {
      fontSize: '30px',
      marginRight: '10px',
    },
    friendsCount: {
      fontSize: '14px',
    },
  biographySection: {
    width: '90%',
    marginTop: '20px',
    backgroundColor: '#F5F5F5',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    padding: '10px',
    textAlign: 'left', 
  },
  biographyTitle: {
    fontSize: '18px', 
    fontWeight: 'bold', 
  },
  biographyText: {
    fontSize: '14px', 
    lineHeight: '1.2', 
    
  },
};

const Profile = () => {
  const userProfile = {
    username: 'User',
    profileImage: 'URL',
    sports: ['Footbal', 'Basket', 'Gym'],
    friendsCount: 50,
    biography:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lorem eu purus feugiat ullamcorper. Vivamus nec quam ut erat malesuada tincidunt in non libero.',
  };

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <div style={styles.container}>
          <Avatar
            alt={userProfile.username}
            src={userProfile.profileImage}
            sx={styles.avatar}
          />
          <Typography variant="h5">{userProfile.username}</Typography>

          <div style={styles.sportsContainer}>
            <Typography variant="subtitle1">Sport pratiqués</Typography>
            <ul style={styles.sportList}>
              {userProfile.sports.map((sport, index) => (
                <li key={index} style={styles.sportItem}>
                  <div>
                    {sport === 'Footbal' && (
                      <SportsSoccerIcon style={styles.sportIcon} />
                    )}
                    {sport === 'Basket' && (
                      <SportsBasketballIcon style={styles.sportIcon} />
                    )}
                    {sport === 'Gym' && (
                      <FitnessCenterIcon style={styles.sportIcon} />
                    )}
                  </div>
                  <Typography variant="body2" style={styles.sportName}>
                    {sport}
                  </Typography>
                </li>
              ))}
            </ul>
            <div style={styles.friendsCountContainer}>
              <GroupIcon style={styles.friendsIcon} />
              <Typography variant="body2" style={styles.friendsCount}>
                Amies {userProfile.friendsCount}
              </Typography>
            </div>
          </div>

          <section style={styles.biographySection}>
            <Typography variant="h6" style={styles.biographyTitle}>
              Biography
            </Typography>
            <Typography variant="body2" style={styles.biographyText}>
              {userProfile.biography}
            </Typography>
          </section>
        </div>
      </ThemeProvider>
    </Layout>
  );
};

export default Profile;
