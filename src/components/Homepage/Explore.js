import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';



const Explore=(props)=>{
    const {place}=props;
    const handleRender=()=>{
        return !props.render;
    }     
    return (
        <div className="explore-card">
            <div>
            <Router>
            <Link to={`/search/${place.city}`} >
                <img src={(place.image)} alt="explore_image" className="explore-image" onClick={handleRender()}/>
                </Link>
        </Router>
            </div>
            <div className="explore-text">
                <span className="explore-city">{place.city}</span>
                <span className="explore-time">{place.time}</span>
            </div>
        </div>
        
    );
}

export default Explore;