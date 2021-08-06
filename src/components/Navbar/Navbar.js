import React from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import '../../css/Navbar.css';

//components
import Search from './Search'
import Logo from './Logo';

function Navbar(props){
    
    return (
        <div className="Navbar">
            <Router>
            <Link to="/">
                <Logo render={props.render}/>
            </Link>
            </Router>
            <Search render={props.render} />
            <div className="nav-options">
                <span>Host your website</span>
                <span>W</span>
                <span>U</span>
            </div>
        </div>
    );
}

export default Navbar;