import React, { Component } from 'react';
import './Header.scss';
import logo from './logo.svg';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
            <img className="logoHeader" src={logo} className="App-logo" alt="logo" />
        </header>
        
      </div>
    )
  }
}
