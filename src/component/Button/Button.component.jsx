import React from 'react';
import './Button.styles.scss';
import {Link} from 'react-router-dom';

const CustomButton = () => (
    <Link to='/sherbroue' className='buttons'>

        <button class="corner-button">
            <span>Découvrir Sherbroue</span>
        </button>
    </Link>
)

export default CustomButton;