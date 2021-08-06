import React from 'react';
import HotelOptions from './HotelOptions.js';
import "../../css/Search.css";

class HotelSearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            city:props.match.params.citySearch,
            hotels:[],
            loading:true,
            priceSort:false,
            cancelSort:false,
            bookSort:false,
            moreFilter:false,
            sortArray:[]
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
                    loading:false,
                    sortArray:filterArray
                });
            }
        )
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.cancelSort===true && this.state.cancelSort===false){
            this.setState({
                sortArray:[...this.state.hotels]
            });
        }
      };

    //Price filter
    handlePriceSort=()=>{
        if(this.state.priceSort){
            this.setState((prevState)=>{
                return{
                    priceSort:!prevState.priceSort
                }
            })
        }else{
            this.setState((prevState)=>{
                return {
                    sortArray: prevState.sortArray.sort((a, b) => (a.price > b.price) ? 1 : -1),
                    priceSort:!prevState.priceSort
                }
            });
        }
    }

    //Cancellation filter
    handleCancelFilter=()=>{
        if(this.state.cancelSort){
            this.setState((prevState)=>{
                return{
                    cancelSort:!prevState.cancelSort
                }
            })
        }else{
            this.setState((prevState)=>{
                const filterArray=prevState.hotels.filter(hotel => hotel.cancellation===true);
                return {
                    sortArray:filterArray,
                    cancelSort:!prevState.cancelSort
                }
            });
        }
    }

    handleBookFilter=()=>{
        this.setState((prevState)=>{
            return{
                bookSort:!prevState.bookSort
            }
        })
    }

    handleMoreFilter=()=>{
        this.setState((prevState)=>{
            return{
                moreFilter:!prevState.moreFilter
            }
        })
    }

    render(){
        const {city,loading,sortArray,priceSort,cancelSort,moreFilter,bookSort}=this.state;
        const {render}=this.props;
        return (
            <div className="hotelSearch">
                <div>{sortArray.length} stays</div>
                <div className="cityName"> Stays in {city}</div>
                <div className="sortButton">
                    <button onClick={this.handlePriceSort} className={`${priceSort && "sortSelect" }`} >Price</button>
                    <button onClick={this.handleCancelFilter} className={`${cancelSort && "sortSelect" }`}>Cancellation flexibility</button>
                    <button onClick={this.handleBookFilter} className={`${bookSort && "sortSelect" }`}>Instant Book</button>
                    <button onClick={this.handleMoreFilter} className={`${moreFilter && "sortSelect" }`}>More Filters</button>
                </div>
                {loading && <h2 className="Loading">Hotels Loading </h2>}
                <div className="hotelOptions">
                {sortArray.map((hotel)=>{
                    return (
                      <HotelOptions 
                      hotel={hotel}
                      id={hotel.id}
                      render={render}
                      />  
                    );
                })}
                </div>
            </div>
        );
    }
}

export default HotelSearch;