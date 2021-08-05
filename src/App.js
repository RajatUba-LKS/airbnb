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

  render(){
    return (
      <div className="App">
        <Navbar />
        <div className="mainContent">
          <Router>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/search/:citySearch" component={HotelSearch} />
              <Route exact path='/search/hotel/:id' component={Hotel} />
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
  
}

export default App;
