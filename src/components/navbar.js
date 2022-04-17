import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebarData';
import './navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
    const [sidebarData, setSidebarData] = useState(false);

    const showSidebarData = () => setSidebarData(!sidebarData);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                
                    <Link to="#" className="menu_bars">
                        <div className='container'>
                        <FaIcons.FaBars onClick={showSidebarData} />
                        </div>
                    </Link>
                    <img className="logo-image" style={{ maxWidth: '80px', marginRight:'320px', marginLeft:'40px' }} src="../uploads/logo12.png" />
                </div>
                <nav className={sidebarData ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebarData}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
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