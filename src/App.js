import React, { Component } from 'react';
import Calculate from './Calculate/Calculate';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Calculate commission={1.2} price={1.2}/>
      </div>
    );
  }
}

export default App;
