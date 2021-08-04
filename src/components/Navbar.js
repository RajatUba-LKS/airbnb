import React from 'react';
import '../css/Navbar.css';

//components
import Search from './Search'
import Logo from './Logo';

function Navbar(){
    return (
        <div className="Navbar">
            <Logo />
            <Search />
            <div className="nav-options">
                Options
            </div>
        </div>
    );
}

export default Navbar;