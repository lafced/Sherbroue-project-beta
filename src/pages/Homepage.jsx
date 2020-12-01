import React from 'react';
import Photo1 from '../assets/saveur de génie.jpg';
import './Homepage.css';
import PhotoGallery from '../component/grid-image/grid-image.component'
// mettre image en background pour écrire dessus
function Homepage (){
    return(
        <div>
       
            <PhotoGallery/>
            Bienvenue dans Sherbroue
        </div>
    )
}

export default Homepage;