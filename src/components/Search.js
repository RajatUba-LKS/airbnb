import React from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {DateRangePicker} from 'react-date-range';
import '../css/Navbar.css';
//date picker
class Search extends React.Component{
  constructor(){
    super();
    this.state={
      showDatePicker:false,
      selectionRange : {
        startDate:new Date(),
        endDate: new Date(),
        key:'date_range'
      }
    }
  }
  showDateRange=()=>{
   this.setState((prevState)=>{
     return {
       showDatePicker:!prevState.showDatePicker
     }
   })   
  }
  handleSelect=(ranges)=>{
    console.log(ranges);
  }

  render(){
    
    const {showDatePicker,selectionRange}=this.state;
    return (
      <div className="searchBar">
          <div className="search" onClick={this.showDateRange}>
            <span>Search</span>
            <button className="searchButton">S</button>
          </div>
          
          { showDatePicker &&
          <div className="searchOption">
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={this.handleSelect}
            />
            <div className="guestStyle">
              <label for="guest">Add Guest</label>
              <input type="number" id="guest" placeholder="2" min="1" max="16"/>
            </div>
            <div className="guestStyle">
              <label for="citySearch">Search City</label>
              <input type="text" id="citySearch" placeholder="Seach City" />
            </div>
          </div>
          }

          
      </div>
    );
  }
}

export default Search;