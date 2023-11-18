//base imports
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from "../../assets/img/LOGO.png";
import Layout from '../Layout/Layout';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import "../../style/profile/EditProfile.css";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


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
        width: '90px',
        height: '90px',
        marginBottom: '10px',
        border: '2px solid #1ccf90',
      },
     
  };

  const EditProfile = () => {
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
          <div className="EditProfileContainer">
          <section className="logo-editProfile">
            <img src={logo} alt="logo"></img>
          </section>
          <section className='backButton'>
                <IconButton className='arrowButton'  aria-label="Retour" component={Link} to="/Profile">
                  <ArrowBackIosIcon/>
                </IconButton>
          </section>
          <section className='editProfileHeaderContainer'>
          <Avatar
            alt={userProfile.username}
            src={userProfile.profileImage}
            sx={styles.avatar}
          />  
          </section>
          <section className='modifPersonalInfoContainer'>
            <form className='editProfileForm'>
                <section className='editPersonalInfoContainer'>
                    <Typography variant="h6" className='title' >
                        Informations personelles
                    </Typography>
                    <TextField className='prenomContainer' id="prenom" label="Prénom" variant="outlined" />
                    <TextField className='nomContainer' id="nom" label="nom" variant="outlined" />
                    <TextField className='emailContainer' id="email" label="email" variant="outlined" />
                </section>
                <section className='description'>
                    <Typography variant="h6" className='title' >
                        Sur Moi
                    </Typography>
                    <TextField
                        className='aboutMe'
                        id="surMoiIndo"
                        label=""
                        multiline
                        rows={2}
                        defaultValue="last info of sur mois"
                        variant="filled"
                        />
                </section>
                <section className='editFavoirs'>
                     <Typography variant="h6" className='title' >
                        Favoris
                    </Typography>
                    <ul className='itemPersonal'>
                    <li className='userItem userFavPlace' >
                        <Link to="/Profile" style={{ textDecoration: 'none' }}>
                        <Typography className='itemValue'>{userProfile.favoriteGym}</Typography>
                        <Typography className='itemTitle'> <FmdGoodOutlinedIcon className='itemIcon'></FmdGoodOutlinedIcon> Lieu</Typography>
                        </Link>
                    </li> 
                        <li className='userItem userFavSport'>
                        <Typography className='itemValue'>{userProfile.favoriteSport}</Typography>
                        <Typography className='itemTitle'> <FavoriteBorderOutlinedIcon className='itemIcon'></FavoriteBorderOutlinedIcon>  Sport</Typography>
                        </li> 
                    </ul>
                </section>
                <section className='buttonModfiContainer'>
                <Button className='modifProfile' variant="contained" component={Link} to="/Profile">
                    Modifier
                </Button>
                </section>
            </form>
          </section>
          </div>
        </ThemeProvider>
      </Layout>
    );
  };
  
  export default EditProfile;