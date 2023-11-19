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
import "../../style/profile/ChooseSport.css";

//icons
import fitnessIcon from "../../assets/img/sports/Squats.png";
import boxingIcon from "../../assets/img/sports/boxing.png";
import marathonIcon from "../../assets/img/sports/marathon.png";
import natationIcon from "../../assets/img/sports/natation.png";
import poidsIcon from "../../assets/img/sports/poids.png";
import yogaIcon from "../../assets/img/sports/yoga.png";

//redux
import { useSelector, useDispatch } from 'react-redux'
import { updateFavoriteSport} from '../../store/userStore'


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

  const ChooseSport = () => {

//store
const userStore = useSelector((state) => state.user.value) // get
const dispatch = useDispatch() // set

    const [favoriteSport, setFavoriteSport] = useState("Fitness");
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
          <Typography variant="h6" className='title' >Sport Favori</Typography>
            <Typography variant="h6" className='currentSportSelected' >{favoriteSport}</Typography>
          </section>
          <section className='chooseSport'>
            <div className='titleChooseSport'>
                 <Typography variant="h6" className='title' >Modifier</Typography>   
            </div>
            <ul className='itemSport'>
                <li className='userItem sportSize'         
                 onClick={(e) => {
                    setFavoriteSport("Fitness");
                    dispatch(updateFavoriteSport("Fitness"));
                }}>
                <img src={fitnessIcon} alt="fitness icon" />
                  <Typography className='itemTitle'>Fitness</Typography>
                </li> 
                <li className='userItem sportSize' onClick={(e) => {
                    setFavoriteSport("Poids");
                    dispatch(updateFavoriteSport("Poids"));
                }}>
                <img src={poidsIcon} alt="poids icon"/>
                  <Typography className='itemTitle'>Poids</Typography>
                </li> 
                <li className='userItem sportSize'
                   onClick={(e) => {
                    setFavoriteSport("Boxing");
                    dispatch(updateFavoriteSport("Boxing"));
                }}>
                <img src={boxingIcon} alt="boxing icon" />
                  <Typography className='itemTitle'>Boxing</Typography>
                </li> 
                <li className='userItem sportSize'
                   onClick={(e) => {
                    setFavoriteSport("Yoga");
                    dispatch(updateFavoriteSport("Yoga"));
                }}>
                <img src={yogaIcon} alt="yoga icon" />
                  <Typography className='itemTitle'>Yoga</Typography>
                </li> 
                <li className='userItem sportSize'
                   onClick={(e) => {
                    setFavoriteSport("Natation");
                    dispatch(updateFavoriteSport("Natation"));
                }}>
                <img src={natationIcon} alt="Natation icon" />
                  <Typography className='itemTitle'>Natation</Typography>
                </li> 
                <li className='userItem sportSize'
                   onClick={(e) => {
                    setFavoriteSport("Marathon");
                    dispatch(updateFavoriteSport("Marathon"));
                }}>
                <img src={marathonIcon} alt="Marathon icon" />
                  <Typography className='itemTitle'>Marathon</Typography>
                </li> 
            </ul>
          </section>
          </div>
        </ThemeProvider>
      </Layout>
    );
  };
  
  export default ChooseSport;