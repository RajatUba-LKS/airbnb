import React from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';

const HotelOptions=(props)=>{
    const {hotel}=props;
    const handleRender=()=>{
        return !props.render;
    }
    return (
        <div className="searchHotelCard">
            <div className="hotelImageContainer">
            <Router>
                <Link to={`/search/hotel/${hotel.id}`}>
                        <img src={hotel.image} alt="hotelImage" className="hotelImage" onClick={handleRender()}/>
                </Link>
            </Router>
            </div>
            <div className="hotelInfoContainer">
                <div className="infoHeart">
                    <div className="hotelInfo">
                        <div className="hotelInfo1">Entire Rental Place in {hotel.city}</div>
                        <div className="hotelInfo2">Property Info : {hotel.info}</div>
                    </div>
                    <div className="hotelFav">HE</div>
                </div>
                <div className="hotelFacility">Facilities : {hotel.facility}</div>
                <div className="hotelRSP">
                    <div className="ratingReviews">Star {hotel.rating} <span className="hotelReviews"> &#40;{hotel.reviews} Reviews &#41; </span></div>
                    <div><span className="hotelPrice"> {hotel.price} </span><span className="hotelPriceText"> / night</span></div>
                </div>
            </div>        
        </div>
    );
}

export default HotelOptions;
