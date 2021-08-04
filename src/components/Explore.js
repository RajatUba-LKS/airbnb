import React from 'react';
import '../css/Homepage.css'

const Explore=(props)=>{
    const {place}=props;
    return (
        <div className="explore-card">
            <div className>
                <img src={(place.image)} alt="explore_image" className="explore-image"/>
            </div>
            <div className="explore-text">
                <span className="explore-city">{place.city}</span>
                <span className="explore-time">{place.time}</span>
            </div>
        </div>
    );
}

export default Explore;