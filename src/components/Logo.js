import React from 'react';
import Logo_image from '../airbnb.svg';

function Logo(){
    return (
        <div className="BrandLogo">
            <img src={Logo_image} alt="Logo" className="logo"/>
        </div>
    );
}

export default Logo;