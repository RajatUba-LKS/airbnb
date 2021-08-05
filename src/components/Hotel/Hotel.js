import React from 'react';

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
            <div>
                <div>Property Info : {hotel.info}</div>
                <div>
                    <div>
                        <span>Star {hotel.rating}</span>
                        <span>{hotel.city}</span>
                    </div>
                    <div>
                        <span>Share</span>
                        <span>Save</span>
                    </div>
                </div>
                <div>
                    <img src={hotel.image} alt="hotelImage"></img>
                </div>
                <div>Facilities:{hotel.facility}</div>
            </div>
        );
    }
}

export default Hotel;