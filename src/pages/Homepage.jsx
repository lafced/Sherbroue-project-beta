import React from 'react';

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