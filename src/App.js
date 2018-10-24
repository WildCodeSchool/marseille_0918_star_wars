import React, { Component } from 'react';
import './App.css';
import Routing from './components/Routing';
import Template from './components/Template';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routing/>
      </div>
    );
  }
}

export default App;
