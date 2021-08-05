import React from 'react';
import HotelOptions from './HotelOptions.js'

class HotelSearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            city:props.match.params.citySearch,
            hotels:[],
            loading:true
        }
    }
    componentDidMount(){
        fetch("https://6108f9f6d71b67001763969f.mockapi.io/api/v1/Hotel")
        .then(res => res.json())
        .then(
            (result) => {
                const filterArray=result.filter(hotel => hotel.city===this.state.city);
                this.setState({
                    hotels:filterArray,
                    loading:false
                });
            }
        )
    }
    render(){
        const {city,hotels,loading}=this.state;
        console.log('city',hotels);
        return (
            <div>
                <div>{hotels.length} stays</div>
                <div> Stays in <span>{city}</span></div>
                <div>
                    <button>Price</button>
                    <button>Cancellation</button>
                    <button>Instant Book</button>
                    <button>More Filters</button>
                </div>
                {loading && <h2>Hotels Loading </h2>}
                <div className="hotelOptions">
                {hotels.map((hotel)=>{
                    return (
                      <HotelOptions 
                      hotel={hotel}
                      id={hotel.id}
                      />  
                    );
                })}
                </div>
            </div>
        );
    }
}

export default HotelSearch;