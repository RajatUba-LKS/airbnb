import React from 'react';
import Logo_image from '../../airbnb.svg';

function Logo(props){
    const handleRender=()=>{
        return !props.render;
    }
    return (
        <div className="BrandLogo" onClick={handleRender()}>
            <img src={Logo_image} alt="Logo" className="logo"/>
        </div>
    );
}

export default Logo;