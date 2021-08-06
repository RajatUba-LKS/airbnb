import React from 'react';
import '../../css/Homepage.css';
import Explore from './Explore';
import Live from './Live';

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            explorePlace:[], 
            exploreLoading:true,
            live:[],
            liveLoading:true,
        }
    }
    componentDidMount(){
        fetch("https://6108f9f6d71b67001763969f.mockapi.io/api/v1/ExplorePlaces")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    explorePlace: result,
                    exploreLoading:false
                });
            }
        )
        
        fetch("https://6108f9f6d71b67001763969f.mockapi.io/api/v1/Live")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    live: result,
                    liveLoading:false
                });
            }
        )
    }
    
    render(){
        const {explorePlace,exploreLoading,live,liveLoading}=this.state;
        const {render}=this.props;
        return (
            <div className="Homepage">
                {/* Explore */}
                <div className="explore">
                    <h2 className="homeHeading">Explore Nearby</h2>
                    <div className="explore-places">
                    {exploreLoading && <h3 className="Loading">Places Loading...</h3>}
                    {explorePlace.map((place)=>{
                        return (
                            <Explore
                                place={place}
                                key ={place.id}
                                render={render}
                            />
                        );
                    })}
                    </div>
                </div>
                
                {/* Anywhere */}
                <div className="live">
                    <h2 className="homeHeading" >Live Anywhere</h2>
                    <div className="live-opt">
                    {liveLoading && <h3>Places Loading...</h3>}
                        {live.map((option)=>{
                            return (
                                <Live
                                    option={option}
                                    key={option.id}
                                />
                            )
                        })}
                    </div>
                </div>

            </div>
        );
    }
}

export default Homepage;