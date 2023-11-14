import Layout from "../components/Layout/Layout";
import TinderCard from 'react-tinder-card';
import '../match.css';
import React, { useState , useRef, useMemo } from "react";
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

    const [currentIndex, setCurrentIndex] = useState(meets.length - 1)
    const [lastDirection, setLastDirection] = useState();
    const currentIndexRef = useRef(currentIndex);

    const childRefs = useMemo(
        () =>
        Array(meets.length)
            .fill(0)
            .map((i) => React.createRef()),
        []
    )

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const canSwipe = currentIndex >= 0


    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
    }

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    }

    const swipe = async (dir) => {
        if (canSwipe && currentIndex < meets.length) {
          await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }
    
    }

    const goBack = async () => {
        const newIndex = currentIndex + 1
        updateCurrentIndex(newIndex)
        await childRefs[newIndex].current.restoreCard()
    }

    return (
        <Layout>
            <div className="matchPage">
                <div className="meeve-logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="swipe-container">
                    <div className="card-container">
                        {meets.map((meet, index) =>
                        <TinderCard 
                            ref={childRefs[index]}
                            className='swipe'
                            key={meet.name}
                            onSwipe={(dir) => swiped(dir, meet.name, index)} 
                            onCardLeftScreen={() => outOfFrame(meet.name, index)} >
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
                    <Button onClick={() => swipe('left')}>
                        <CancelIcon className="itemIconX"></CancelIcon>
                    </Button>
                    <Button onClick={() => swipe('right')}>
                        <FavoriteIcon className="itemIconL"></FavoriteIcon>
                    </Button>
                    
                </div>
            </div> 
        </Layout>
    )
}

export default MatchPage