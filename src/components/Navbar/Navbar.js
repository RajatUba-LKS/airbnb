import React from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import '../../css/Navbar.css';

//components
import Search from './Search'
import Logo from './Logo';

function Navbar(){
    return (
        <div className="Navbar">
            <Router>
            <Link to="/">
                <Logo />
            </Link>
            </Router>
            <Search />
            <div className="nav-options">
                Options
            </div>
        </div>
    );
}

export default Navbar;