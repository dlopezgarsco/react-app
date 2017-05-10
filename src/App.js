import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/index'
import Gallery from './scenes/Gallery/index'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Gallery />
      </div>
    );
  }
}

export default App;
