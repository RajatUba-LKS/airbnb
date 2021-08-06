import React from 'react';
//router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './css/App.css';
//components
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import HotelSearch from './components/Search/HotelSearch';
import Hotel from './components/Hotel/Hotel';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      render:true
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.render!==this.state.render){
      return
    }
  }

  render(){
    const {render}=this.state;
    return (
      <div className="App">
        <Navbar render={render}/>
        <div className="mainContent">
          <Router>
            <Switch>
              <Route exact path="/" component={Homepage} render={render}/>
              <Route exact path="/search/:citySearch" component={HotelSearch} render={render}/>
              <Route exact path='/search/hotel/:id' component={Hotel} render={render}/>
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
  
}

export default App;
