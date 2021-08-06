import React from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import {DateRangePicker} from 'react-date-range';
import {addDays} from 'date-fns';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
//date picker
class Search extends React.Component{
  constructor(props){
    super(props);
    this.state={
      showDatePicker:false,
      citySearch:''
    }
  }

  //handling click on search bar
  showDateRange=()=>{
   this.setState((prevState)=>{
     return {
       showDatePicker:!prevState.showDatePicker
     }
   })   
  }

  //start and end date handle
  handleStartEndDate=(ranges)=>{
    console.log(ranges);
  }

  //city search
  handleCitySearch=(city)=>{
    console.log(city);
    this.setState({
      citySearch:city.target.value
    })
  }
  //guest number
  handleGuestNo=(guest)=>{
    this.setState({
      guestNo:guest.target.value
    })
  }

  handleRender=()=>{
    return !this.props.render;
  }


  render(){
    const {showDatePicker,citySearch}=this.state;
    const selectionRange = {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    }
    return (
      <div className="searchBar">
          <div className="search" onClick={this.showDateRange}>{!showDatePicker && 'Start Your Search'}</div>
          
          { showDatePicker &&
          <div className="searchOption">
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={this.handleStartEndDate}
            />
            <div className="guestStyle">
              <label for="guest">Add Guest</label>
              <input type="number" id="guest" placeholder="2" min="1" max="16" onChange={this.handleGuestNo}/>
            </div>
            <div className="guestStyle">
              <label for="citySearch">Search City</label>
              <input type="text" id="citySearch" placeholder="Seach City" onChange={this.handleCitySearch} />
            </div>
          </div>
          }
      <Router>
          <Link to={`/search/${citySearch}`}>
            <button className="searchButton" onClick={this.handleRender()}><SearchOutlinedIcon/></button>
            </Link>
            </Router>
      </div>
    );
  }
}

export default Search;