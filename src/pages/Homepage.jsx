import React from 'react';
import Photo1 from '../assets/saveur de génie.jpg';
import './Homepage.css';

// mettre image en background pour écrire dessus
function Homepage (){
    return(
        <div>
            <img src={Photo1} className='main-photo' alt=''></img>
            Bienvenue dans Sherbroue
        </div>
    )
}

export default Homepage;