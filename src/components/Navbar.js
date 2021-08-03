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
        </div>
    );
}

export default Navbar;