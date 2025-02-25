import React from 'react';
import './header.css';
import Menu from './../../assets/icon_menu.png';
import Logo from './../../assets/logo.png'

const Header = () => {
    return (
        <header>
            <div className="menu">
                <div className='menu_img'>
                    <img src={Menu}></img>
                </div>
                <div className="nav_menu none"></div>
            </div>
            <div className="logo">
           
            <img src={Logo} alt="" />
                <h1>DANILO<span className='highlight_purple'>_</span>DEV</h1>
            </div>
        </header>
    )
}

export default Header;