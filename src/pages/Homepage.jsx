import React from 'react';
import photo_home from '../assets/estrie_home.jpg'
import './Homepage.css';
import CustomButton from '../component/Button/Button.component'
// mettre image en background pour écrire dessus
function Homepage (){
    return(
        <div class="parent">
            
            
            
            <div class="item last">
                <h2 id='titre'>NOUS SOMMES SHERBROUE</h2>
                <p id='slogan'> Le génie au services des sciences brassicoles</p>
                <CustomButton/>
            </div>
            <img src={photo_home} alt='' className='photo'/>
  
        </div>
    )
}

export default Homepage;