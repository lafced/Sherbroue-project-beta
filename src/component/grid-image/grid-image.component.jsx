import React from 'react';
import './grid-image.styles.css';
import Intro from "../../assets/intro.jpg";
import evene from "../../assets/event.png";
import project from "../../assets/project.jpg";

function PhotoGallery(){
    return(
        <div className="photo-grid">
            
            
            <div className='card '
            style={{backgroundImage: `url(${evene})`,backgroundSize: 'cover' }}>2
            </div>
            <div className='card'
            style={{backgroundImage: `url(${Intro})`,backgroundSize: 'cover' }}>1
            </div>
            <div className='card '
            style={{backgroundImage: `url(${project})`,backgroundSize: 'cover' }}>3
            </div>
            
        </div>
    )
}

export default PhotoGallery;