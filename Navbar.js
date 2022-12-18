import React from 'react'
import { Link } from 'react-router-dom';
import { SidebarData } from './map';
import './Navbar.css';
import wallpaperlogo from './wallpaperlogo.svg';

function Navbar() {
  return (
    <>
    <div>
    <nav className="navbar">
            <img src={wallpaperlogo} className='logo'/>
            <h1 className='hub'>WallpaperHub.com</h1>
            <ul>
                {SidebarData.map((item, index) => {
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
    </div>
    </>
  )
}

export default Navbar