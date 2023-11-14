import React from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Layout from '../components/Layout/Layout.js';
import MailIcon from '@mui/icons-material/Mail';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from "../assets/img/LOGO.png";

import "../style/pages/Profile.css";
import MeetCards from "../components/profile/MeetCards.js";
import { Link } from 'react-router-dom';

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
    username: 'User Name',
    profileImage: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    favoriteGym: 'Basic Fit',
    favoriteSport:'Fitness',
    friendsCount: 50,
    biography:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lorem eu purus feugiat ullamcorper. Vivamus nec quam ut erat malesuada tincidunt in non libero.',
  };

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <div className="ProfileContainer">
        <div className="logo-profile">
                    <img src={logo} alt="logo"></img>
                </div>
          <section className='profileHeaderContainer'>
          <Avatar className='userAvatar'
            alt={userProfile.username}
            src={userProfile.profileImage}
            sx={styles.avatar}
          />
          <section className='profileHeaderButtons'>
            <LogoutIcon className='buttonHeader'></LogoutIcon>
            <ManageAccountsIcon className='buttonHeader'></ManageAccountsIcon>
          </section>
          <Typography className='helloMessage' variant="h5">Bonjour,</Typography>
          <Typography className='userNameProfile' variant="h5">{userProfile.username}</Typography>     
          </section>
          <section className='interactionButtonContainer'>
          <Button variant="contained" endIcon={<AddBoxIcon />} component={Link} to="/CreerMeet">
            Créer un Meet
          </Button>
          <IconButton aria-label="PersonAddAlt1Icon">
            <PersonAddAlt1Icon/>
          </IconButton>
          </section>
          <section className='userPersonalInfo'>
            <ul className='itemPersonal'>
                <li className='userItem userFriends'>
                  <Typography className='itemValue'>{userProfile.friendsCount}</Typography>
                  <Typography className='itemTitle'> <GroupIcon className='itemIcon'></GroupIcon>   Amies</Typography>
                </li> 
                <li className='userItem userFavPlace'>
                  <Typography className='itemValue'>{userProfile.favoriteGym}</Typography>
                  <Typography className='itemTitle'> <FavoriteIcon className='itemIcon'></FavoriteIcon>   Lieu</Typography>
                </li> 
                <li className='userItem userFavSport'>
                  <Typography className='itemValue'>{userProfile.favoriteSport}</Typography>
                  <Typography className='itemTitle'> <FavoriteIcon className='itemIcon'></FavoriteIcon>   Sport</Typography>
                </li> 
            </ul>
          </section>

          <section  className='biographySection' >
            <Typography variant="h6" className='biographyTitle' >
              Sur-Moi
            </Typography>
            <Typography variant="body2" className='biographyText'>
              {userProfile.biography}
            </Typography>
          </section>
          <section className='userMeets'>
          <Typography variant="h6" className='meetTitle' >
              Mes Séances
          </Typography>
          <div className='userMeetsCardsContainer'>
          <MeetCards></MeetCards>
          <MeetCards></MeetCards>
          <MeetCards></MeetCards>
          </div>
          </section>
          <section className='contactMeeve'>
            <Typography className='tileContact'>Nous Contacter <MailIcon></MailIcon></Typography>
          </section>
        </div>
      </ThemeProvider>
    </Layout>
  );
};

export default Profile;
