import React, { Component } from 'react';
import './HeaderNoAnim.scss';
import logo from './logo.svg';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
            <img src={logo} className="Logo-App" alt="logo" />
        </header>
        
      </div>
    )
  }
}