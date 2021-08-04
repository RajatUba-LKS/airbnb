import React from 'react';
import '../css/Homepage.css';
import Explore from './Explore';

class Homepage extends React.Component{
    constructor(){
        super();
        this.state={
            explorePlace:[]
        }
    }
    componentDidMount(){
        fetch("https://6108f9f6d71b67001763969f.mockapi.io/api/v1/ExplorePlaces")
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                explorePlace: result
            });
            }
        )
        /*
        fetch("https://6108f9f6d71b67001763969f.mockapi.io/api/v1/Hotel")
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                Hotels: result
            });
            }
        )*/
    }
    
    render(){
        const {explorePlace}=this.state;
        
        return (
            <div className="Homepage">
                <div className="explore">
                    <h2>Explore Nearby</h2>
                    <div className="explore-places">
                    
                    {explorePlace.map((place)=>{
                        return (
                            <Explore
                                place={place}
                                key ={place.id}
                            />
                        );
                    })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;