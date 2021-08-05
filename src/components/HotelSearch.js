import React from 'react';

class HotelSearch extends React.Component{
    render(){
        const { hotel_id:hotel } = this.props.match.params;
        return (
            
            <div>Hotel: {hotel}</div>
        );
    }
}

export default HotelSearch;