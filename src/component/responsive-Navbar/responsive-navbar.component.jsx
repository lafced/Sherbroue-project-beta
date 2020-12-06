//https://www.youtube.com/watch?v=T2MhVxJxsL0
import LogoS from '../../assets/Sherbrouell.svg'
import React, {useState,useEffect} from 'react';
import './responsive-navbar.styles.css';
import  {Button} from './Button';
import { auth } from '../firebase/firebase.utils';
import { Link } from 'react-router-dom';

function RespNavbar({currentUser}){

    const [click,setClick] =useState(false);
    const [dropdown,setDropdown] =useState(false);

    const handleClick = ()=> setClick(!click);
    const closeMobileMenu = ()=> setClick(false);
    const [scrolled,setScrolled]=React.useState(false);
    const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
    }

    useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
    
    
    


    return(
    <div className='superdiv'>
        <header className={setScrolled? 'navbar scrolled' : 'navbar'}>
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
                        <Link to='/achat' className='nav-links' onClick={closeMobileMenu}>
                        Encouragez-nous
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                        </Link>
                    </li>
                    {
                        currentUser ?
                        <li className='nav-item'>
                            <Button className='nav-links' onClick={() => auth.signOut()}/>
                        </li>
                        :
                        <li className='nav-item'>
                            <Link to='/connexion' className='nav-links' onClick={closeMobileMenu}>
                                <Button/>
                            </Link>
                        
                        </li>
                    }
                    
                </ul>
                
            </nav>
        </header>
    </div>
    )
}

export default RespNavbar;