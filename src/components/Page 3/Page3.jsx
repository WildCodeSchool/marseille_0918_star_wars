import React, { Component } from 'react'


import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import FooterModal from '../FooterModal/FooterModal';
import Profil from './Profil';


export default class Page3 extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Nav/>
        <Profil/>
        <Footer />   
      </div>
    )
  }
}
