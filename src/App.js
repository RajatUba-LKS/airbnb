import React from 'react';
//router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './css/App.css';
//components
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import HotelSearch from './components/HotelSearch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Hotels:[]
    };
  }

  componentDidMount() {
    fetch("https://6108f9f6d71b67001763969f.mockapi.io/api/v1/Hotel")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            Hotels: result
          });
        }
      )
  }
  render(){
    const {Hotels}=this.state;
    console.log('Hotels',Hotels);
    return (
      <div className="App">
        <Navbar />
        <div className="mainContent">
          <Router>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/search/:hotel_id" component={HotelSearch} />
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
  
}

export default App;
