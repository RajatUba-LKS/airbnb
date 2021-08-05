/*

*/
import React from 'react'

const Live=(props)=>{
    const {option}=props;
    return (
        <div className="live-card">
            <img alt="liveImage" src={option.image} className="liveImage" />
            <div className="live-text">{option.text}</div>
        </div>
    );
}

export default Live;