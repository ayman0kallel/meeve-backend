import Layout from "../Layout";
import TinderCard from 'react-tinder-card';
import '../match.css';

import { useState } from "react";

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

    const swiped = (direction, nameToDelete) => {
        console.log('removing ' + nameToDelete);
        setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + 'left the screen')
    }

    return (
        <Layout>
            <div className="matchPage">
                <div className="swipe-container">
                    <div className="card-container">
                        {meets.map((meet) =>
                        <TinderCard className='swipe' key={meet.name} onSwipe={(dir) => swiped(dir, meet.name)} onCardLeftScreen={() => outOfFrame(meet.name)}>
                            <div className="card">
                                <div className="meet-image">
                                    <img src={meet.url} alt="meet-image"></img>
                                </div>
                                <h2>{meet.name}</h2>
                                <h4>Date : {meet.date}</h4>
                                <h4>Heure : {meet.heure}</h4>
                                <h4>Lieu : {meet.lieu}</h4>
                            </div>
                        </TinderCard>
                        )}
                    </div>
                </div>
            </div> 
        </Layout>
    )
}

export default MatchPage