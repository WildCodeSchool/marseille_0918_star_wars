import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import './Template.scss';
import './header.scss';

import Categorie from './Categorie/Categorie';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';


class Template extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    
        
        <Nav/>
        
        
        
        <div className="cards">
        <Categorie
        title="Characters"
        />
        <Categorie
        title="Characters"
        />
        <Categorie
        title="Characters"
        />
        <Categorie
        title="Characters"
        />
        </div>
    
        <footer>
            <Footer
            contact = ""
            copyright = "Star Wars and all associated names and/or images are copyright Lucasfilm Ltd. Images were freely collected from Wookiepedia"
            facebook = ""
            instagram = ""
            twitter = ""
            />
        </footer>
    </div>
);
}
}

export default Template;