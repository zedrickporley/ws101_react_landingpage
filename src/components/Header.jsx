import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <a href="/" className="logo">Ley.</a>
            <i className='bx bx-menu' id="menu-icon"></i>
            <nav className="navbar">
                <a href="#home" className="active">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contacts">Contacts</a>
            </nav>
        </header>
    );
};

export default Header;