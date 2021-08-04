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
          <div className="search" onClick={this.showDateRange}>Search</div>
          
          { showDatePicker &&
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={this.handleSelect}
            />
          }

          <button >S</button>
      </div>
    );
  }
}

export default Search;