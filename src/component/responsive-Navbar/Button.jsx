import React from 'react';
import './Button.style.css';
import {Link} from 'react-router-dom';

export function Button(){
    return(
        <Link to='connexion'>
            <button className='btn'>Connexion</button>
        </Link>
    )
}