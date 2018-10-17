import React, { Component } from 'react';
import logo from '../pictures/logo.svg';
import './../App.css';
import './Template.scss';
import './header.scss';
import facebookLogo from '../pictures/facebook-logo.png'
import instragramLogo from '../pictures/instagram-logo.png';
import twitterLogo from '../pictures/twitter-logo.png';
import planet from '../pictures/planet.png';


import Categorie from './Categorie/Categorie';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import Header from './Header/Header';


class Template extends Component {
  render() {
    return (
      <div className="App">
        <Header logo={logo}/>
        
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
            contact = {planet}
            copyright = "copyright"
            facebook = {facebookLogo}
            instagram = {instragramLogo}
            twitter = {twitterLogo}
            />
        </footer>
    </div>
);
}
}

export default Template;