import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Nav.scss';
import{NavLink} from 'react-router-dom';

import Search from './../Search/Search';


export class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuBurgerOpen: false,
    }
  }
  toggleMenu(){
    this.setState({menuBurgerOpen: !this.state.menuBurgerOpen})
  }
  toggleNav(){
      this.setState({menuBurgerOpen: !this.state.menuBurgerOpen})
    }

    render() {
      let menuClass = this.state.menuBurgerOpen ? 'pushed' : 
      '' ;
      let navClass = this.state.menuBurgerOpen ? 'show' : 
      '' ;
      
      return (

        <div className="menu">
          <div id="nav-container" className={menuClass}>
            <div className="toggle-icon" onClick={()=> this.toggleMenu() && this.toggleNav()}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div> 
            <nav className={navClass}>
              <ul>
                <li>
                  {/* <a href="#">Home</a> */}
                  <NavLink exact to="/"> Home </NavLink>
                </li>
              </ul>
              <ul>
                <li className="green">
                  {/* <a href="#">Characters</a> */}
                  <NavLink to="/characters"> Characters </NavLink>
                </li>
              </ul>
              <ul>
                <li className="red">
                <NavLink to="/"> Starships </NavLink>
                </li>
              </ul>
              <ul>
                <li className="yellow">
                <NavLink to="/"> Planets </NavLink>
                </li>
              </ul>
              <ul>
                <li className="purple">
                <NavLink to="/"> Species </NavLink>
                </li>
              </ul> 
            </nav>      
          </div>
          <div className="searchBar">
          {/* { <img src={Bouton_R2D2} className="Bouton_R2D2" alt="logo" /> } */}
          <Search/>
          </div>
        </div>
      );
    }
  }


export default Nav;