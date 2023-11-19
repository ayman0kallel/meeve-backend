import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Layout from '../components/Layout/Layout.js';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from "../assets/img/LOGO.png";

import "../style/pages/Profile.css";
import MeetCards from "../components/profile/MeetCards.js";
import { Link } from 'react-router-dom';

import { useSelector} from 'react-redux'
import { updateUsername, updateBiography, updateFavoriteGym, updateFavoriteSport,friendsCount } from '../store/userStore'

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    primary: {
      light: '#00FD90',
      main: '#00FD90',
      dark: '#00FD90',
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
  // const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Get the token from where you stored it (e.g., localStorage)
        const token = localStorage.getItem('token');
        console.log("token: ",token);

        // Make a GET request to the server's profile endpoint with the token
        const response = await axios.get('http://localhost:5000/users/logged-user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("userData :",response.data)
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);
  
//store
const userStore = useSelector((state) => state.user) //get

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
            alt={userStore.username}
            src={userStore.profileImage}
            sx={styles.avatar}
          />
          <section className='profileHeaderButtons'>
            <IconButton arial-label = "ManageAccountsOutlinedIcon" component={Link} to="/EditProfile">
              <ManageAccountsOutlinedIcon className='settingsButton'/>
              </IconButton>
          </section>
          <Typography className='userNameProfile' variant="h5">{userStore.username}</Typography>     
          </section>
          <section className='interactionButtonContainer'>
          <Button variant="contained" endIcon={<AddBoxIcon />} component={Link} to="/CreerMeet">
            Créer un Meet
          </Button>
          <IconButton aria-label="PersonAddOutlinedIcon">
            <PersonAddOutlinedIcon/>
          </IconButton>
          </section>
          <section className='userPersonalInfo'>
            <ul className='itemPersonal'>
                <li className='userItem userFriends'>
                  <Typography className='itemValue'>{userStore.friendsCount}</Typography>
                  <Typography className='itemTitle'> <GroupOutlinedIcon className='itemIcon'></GroupOutlinedIcon>   Amies</Typography>
                </li> 
                <li className='userItem userFavPlace'>
                  <Typography className='itemValue'>{userStore.favoriteGym}</Typography>
                  <Typography className='itemTitle'> <FmdGoodOutlinedIcon className='itemIcon'></FmdGoodOutlinedIcon> Lieu</Typography>
                </li> 
                <li className='userItem userFavSport'>
                  <Typography className='itemValue'>{userStore.favoriteSport}</Typography>
                  <Typography className='itemTitle'> <FavoriteBorderOutlinedIcon className='itemIcon'></FavoriteBorderOutlinedIcon>  Sport</Typography>
                </li> 
            </ul>
          </section>

          <section  className='biographySection' >
            <Typography variant="h6" className='biographyTitle' >
              Sur-Moi
            </Typography>
            <Typography variant="body2" className='biographyText'>
              {userStore.biography}
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
            <Typography className='tileContact'>Nous Contacter <EmailOutlinedIcon></EmailOutlinedIcon></Typography>
          </section>
        </div>
      </ThemeProvider>
    </Layout>
  );
};

export default Profile;
