
import React, {useState} from 'react';
import './Navbar.styles.css';
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import {  Link } from 'react-router-dom';
import {SidebarData} from '../../data/sidebarData'
import { IconContext } from 'react-icons';
import LogoS from '../../assets/Sherbroue-Logo (2).svg'
function Navbar () {
    const [sidebar,setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
       <>
            <IconContext.Provider value={{color:'#fff'}}>
                <div className="navbar">
                    <Link to='#' className='menu-bars'>
                        <FaBars onClick={showSidebar}/> 
                        
                    </Link>
                    <Link to='/' className='container'>
                            <img src={LogoS} id='logoSherb' />
                                
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to ="#" className="menu-bars">
                                <AiOutlineClose />
                                
                            </Link>
                        </li>
                        {SidebarData.map((item,index) => {
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                     <span>{item.title}</span> 
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
    </>
    );
}

export default Navbar;