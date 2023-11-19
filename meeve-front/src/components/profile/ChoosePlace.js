//base imports
import React from 'react';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from "../../assets/img/LOGO.png";
import Layout from '../Layout/Layout';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "../../style/profile/ChoosePlace.css";

//icons
import basicFit from "../../assets/img/place/basicFit.png";
import fitPark from "../../assets/img/place/fitPark.png";
import keepCool from "../../assets/img/place/keepcool.png";

//redux
import { useSelector, useDispatch } from 'react-redux'
import { updateFavoriteGym} from '../../store/userStore'

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

  const ChoosePlace = () => {

//store
const userStore = useSelector((state) => state.user.value) // get
const dispatch = useDispatch() // set


    const [favoritePlace, setFavortitePlace] = useState("Fitness");
    const availablePlaces ={
        basicFit: basicFit,
        fitPark: fitPark,
        keepCool: keepCool,
    };
    // const userProfile = {
    //   username: 'User Name',
    //   profileImage: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   favoriteGym: 'Basic Fit',
    //   favoriteSport:'Fitness',
    //   friendsCount: 50,
    //   biography:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lorem eu purus feugiat ullamcorper. Vivamus nec quam ut erat malesuada tincidunt in non libero.',
    // };
  
    return (
      <Layout>
        <ThemeProvider theme={theme}>
          <div className="ChooseSportContainer">
          <section className="logo-editProfile">
            <img src={logo} alt="logo"></img>
          </section>
          <section className='backButton'>
                <IconButton className='arrowButton'  aria-label="Retour" component={Link} to="/EditProfile">
                  <ArrowBackIosIcon/>
                </IconButton>
          </section>
          <section className='SportSelected'>
          <Typography variant="h6" className='title' >Lieu Favori</Typography>
            <Typography variant="h6" className='currentSportSelected' >{favoritePlace}</Typography>
          </section>
          <section className='chooseSport'>
            <div className='titleChooseSport'>
                 <Typography variant="h6" className='title' >Modifier</Typography>   
            </div>
            <ul className='itemSport'>
                <li className='userItem placeSize'         
                 onClick={(e) => {
                    setFavortitePlace("Basic Fit");
                    dispatch(updateFavoriteGym("Basic Fit"));
                }}>
                <img src={basicFit} alt="fitness icon" />
                </li> 
                <li className='userItem placeSize' 
                onClick={(e) => {
                    setFavortitePlace("Fitness Park");
                    dispatch(updateFavoriteGym("Fitness Park"));
                }}>
                <img src={fitPark} alt="poids icon"/>
                </li> 
                <li className='userItem placeSize'
                   onClick={(e) => {
                    setFavortitePlace("Keepcool");
                    dispatch(updateFavoriteGym("Keepcool"));
                }}>
                <img src={keepCool} alt="boxing icon" />
                </li> 
            </ul>
          </section>
          </div>
        </ThemeProvider>
      </Layout>
    );
  };
  
  export default ChoosePlace;