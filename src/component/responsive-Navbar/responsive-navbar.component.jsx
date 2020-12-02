//https://www.youtube.com/watch?v=T2MhVxJxsL0
import LogoS from '../../assets/Sherbrouell.svg'
import React, {useState} from 'react';
import './responsive-navbar.styles.css';
import  {Button} from './Button';

import { Link } from 'react-router-dom';

function RespNavbar(){

    const [click,setClick] =useState(false);
    const [dropdown,setDropdown] =useState(false);

    const handleClick = ()=> setClick(!click);
    const closeMobileMenu = ()=> setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false)
        }else{
            setDropdown(true)
        }
    };
    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false)
        }else{
            setDropdown(false)
        }
    };


    return(
       
            <nav className='navbar'>
                    <Link to='/' className='navbar-logo'>
                    
                        <img src={LogoS} id='logoSherb' />
                                    
                    </Link>
                
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Accueil
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sherbroue' className='nav-links' onClick={closeMobileMenu}>
                        Sherbroue
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projet' className='nav-links' onClick={closeMobileMenu}>
                        Projet
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/événement' className='nav-links' onClick={closeMobileMenu}>
                        Événement
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/partenaire' className='nav-links' onClick={closeMobileMenu}>
                        Partenaire
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/inscription' className='nav-links' onClick={closeMobileMenu}>
                        Devenir membre
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                        </Link>
                    </li>
                    <Button/>
                </ul>
                
            </nav>
        
    )
}

export default RespNavbar;