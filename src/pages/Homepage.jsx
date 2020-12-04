import React from 'react';
import photo_home from '../assets/estrie_home.jpg'
import './Homepage.css';

// mettre image en background pour écrire dessus
function Homepage (){
    return(
        <div class="parent">
            
            
            
            <div class="item last">
                <h2>Flexbox - Split Screen Layout</h2>
                <p>Example of a split screen layout that uses flexbox.</p>
                <p>A media query is used to detect if the virewport is below 600px, if it is then <b>flex-direction</b> is set to column-reverse, so that the image is displayed after the copy, useful on mobile devices!.</p>
                <p>Reduce the window size to below 600px to see an example.</p>
            </div>
            <img src={photo_home} alt='' className='photo'/>
  
        </div>
    )
}

export default Homepage;