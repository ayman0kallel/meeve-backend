import Layout from "../components/Layout/Layout";
import TinderCard from 'react-tinder-card';
import '../match.css';
import { useState , useRef} from "react";
import CardSwipe from "../components/CardSwipe";
import logo from "../assets/img/LOGO.png";
import CancelIcon from '@mui/icons-material/Cancel';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from "@mui/material";

const MatchPage = () => {

    const meets = [
        {
            name: 'Salle de sport',
            lieu: 'Lyon Part-Dieu',
            heure: '14h-15h',
            date: 'Jeudi 11 novembre',
            url: 'https://img.freepik.com/vecteurs-libre/personnes-faisant-exercice-dans-salle-fitness-equipement-sport-pour-seances-entrainement_575670-1883.jpg?w=1380&t=st=1699287564~exp=1699288164~hmac=604f69e7def2bfa99c6666e6dbf86128c7616d02e4b30bdb309a7ba2035aa723'
        },
        {
            name: 'Gymnastique',
            lieu: 'Lyon 3',
            heure: '14h-15h',
            date: 'Jeudi 22 decembre',
            url: 'https://images.pexels.com/photos/3757955/pexels-photo-3757955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ]

    const [lastDirection, setLastDirection] = useState();
    const cardRef = useRef(null);

    const swiped = (direction, nameToDelete) => {
        console.log('removing ' + nameToDelete);
        setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + 'left the screen')
    }

    const handleSwipeLeft = () => {
        //swiped('left', cardRef.current.meet.name);
        console.log('swipe left');
    }

    const handleSwipeRight = () => {
        setLastDirection('right');
        console.log('swipe right');
    }

    return (
        <Layout>
            <div className="matchPage">
                <div className="meeve-logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="swipe-container">
                    <div className="card-container">
                        {meets.map((meet) =>
                        <TinderCard className='swipe' key={meet.name} onSwipe={(dir) => swiped(dir, meet.name)} onCardLeftScreen={() => outOfFrame(meet.name)}>
                            <div className="card">
                                <div className="meet-image">
                                    <img className="img-meet" src={meet.url} alt="meet-image"></img>
                                </div>
                                <CardSwipe
                                    title={meet.name}
                                    date={meet.date}
                                    time={meet.heure}
                                    place={meet.lieu}
                                />
                            </div>
                        </TinderCard>
                        )}
                    </div>
                </div>
                <div className="swipeIcon">
                    <Button onClick={handleSwipeLeft}>
                        <CancelIcon className="itemIconX"></CancelIcon>
                    </Button>
                    <Button onClick={handleSwipeRight}>
                        <FavoriteIcon className="itemIconL"></FavoriteIcon>
                    </Button>
                    
                </div>
            </div> 
        </Layout>
    )
}

export default MatchPage