import React from 'react';
import Carousel from '../component/Carousel2.0/carousel2.component';
import {News} from '../component/Carousel2.0/carousel.js'
import './Homepage.css';

// mettre image en background pour écrire dessus
function Homepage (){
    return(
        <div>
        
        
            <Carousel slides={News}/>
         
        
           
        </div>

    )
}

export default Homepage;