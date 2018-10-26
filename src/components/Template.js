import React, { Component } from 'react';
import './../App.css';
import './Template.scss';

import Header from './Header/Header';
import Categories from './Categorie/Categories';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import FooterModal from './FooterModal/FooterModal';


class Template extends Component {
  render() {
    return (
      <div className="App">
       
    
        <Header/>
        <Nav/>
       <Categories/>
        <Footer />


    </div>
);
}
}

export default Template;