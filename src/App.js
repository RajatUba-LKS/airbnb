import React from 'react';
import './css/App.css';
//components
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      Hotels:""
    };
  }

  componentDidMount() {
    fetch("https://6108f9f6d71b67001763969f.mockapi.io/api/v1/Hotel")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
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
        <Homepage />
        <Footer />
      </div>
    );
  }
  
}

export default App;
