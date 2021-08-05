import React from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';

const HotelOptions=(props)=>{
    const {hotel}=props;
    return (
        <div>
            <Router>
                <Link to={`/search/hotel/${hotel.id}`}>
                    <div className="hotelImage">
                        <img src={hotel.image} alt="hotelImage"/>
                    </div>
                    <div>
                        <div className="hotelInfo">
                            <div>Entire Rental Place in {hotel.city}</div>
                            <div>Property Info : {hotel.info}</div>
                        </div>
                        <div className="hotelFacility">Facilities : {hotel.facility}</div>
                        <div className="hotelRSP">
                            <div>Star {hotel.rating}  &#40;{hotel.reviews} Reviews &#41; </div>
                            <div></div>
                        </div>
                    </div>
                </Link>
            </Router>
        </div>
    );
}

export default HotelOptions;