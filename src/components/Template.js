import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import './Template.scss';
import './header.scss';

import Categories from './Categorie/Categories';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import FooterModal from './FooterModal/FooterModal';


class Template extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    
        
        <Nav/>
        
       <Categories/>
    
        <footer>
            <Footer />
        </footer>

    </div>
);
}
}

export default Template;