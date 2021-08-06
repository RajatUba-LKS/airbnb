import React from 'react';
import '../../css/hotel.css';

class Hotel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hotelId:props.match.params.id,
            hotel:'',
            loading:true
        }
    }

    componentDidMount(){
        fetch("https://6108f9f6d71b67001763969f.mockapi.io/api/v1/Hotel")
        .then(res => res.json())
        .then(
            (result) => {
                const hotel=result.find(item => item.id===this.state.hotelId);
                this.setState({
                    hotel,
                    loading:false
                });
            }
        )
    }

    render(){
        const {hotel}=this.state;
        return (
            <div className="HotelOptions">
                <div className="HotelPropertyInfo">Property Info : {hotel.info}</div>
                <div className="HotelRCSS">
                    <div className="HotelRC">
                        <span className="HotelRatingReviews">Star {hotel.rating} <span className="HotelReviews"> &#40;{hotel.reviews} Reviews &#41; </span></span>
                        <span className="HotelCity">{hotel.city}</span>
                    </div>
                    <div className="HotelSS">
                        <span>Share</span>
                        <span>Save</span>
                    </div>
                </div>
                <div className="HotelImage">
                    <div className="HotelImageMainContainer">
                        <img src={hotel.image} alt="hotelImage" className="HotelImageMain"/>
                    </div>
                    <div className="HotelAlternateImageContainer">
                        <img src={hotel.image} alt="hotelImage" className="HotelAlternateImage"/>
                        <img src={hotel.image} alt="hotelImage" className="HotelAlternateImage"/>
                        <img src={hotel.image} alt="hotelImage" className="HotelAlternateImage"/>
                        <img src={hotel.image} alt="hotelImage" className="HotelAlternateImage"/>
                    </div>
                </div>
                <div className="HotelFacility">Facilities:{hotel.facility}</div>
            </div>
        );
    }
}

export default Hotel;