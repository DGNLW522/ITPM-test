import React from 'react'
import './Dashboard.css'; 
import homeImage from '../images/dashboard.jpg'
 

function Home() {
    return (
        <div className='home'>
            <h1>WELCOME TO RATHA VAHANA.LK</h1>
            <img class='homeImage' src={homeImage} alt="home image" />
        </div >
    );
}

export default Home;