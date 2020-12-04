import React from 'react';
import './Button.styles.scss';
import {Link} from 'react-router-dom';

const CustomButton = () => (
    <Link to='/sherbroue'>
        <button className='button' >
            Découvrir Sherbroue
        </button>
    </Link>
)

export default CustomButton;