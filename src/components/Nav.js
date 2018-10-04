import React, { Component } from 'react'

export class Nav extends React.Component {
    render() {
      return (
        <button onClick={('#nav-container').toggleClass("pushed")}>
          
        </button>
      );
      <div id="nav-container">
  <div className="toggle-icon">
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
  </div>
</div>
    }
  }


export default Nav;