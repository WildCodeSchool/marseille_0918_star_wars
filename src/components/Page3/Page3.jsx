import React, { Component } from 'react'


import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import FooterModal from '../FooterModal/FooterModal';
import Profil from './Profil';
import Character from '../Page2/Character';


export default class Page3 extends Component {

  

  render() {

    const profil = this.props.location.state.profil;

    return (
      <div>
        <Header/>
        <Nav/>
        <Profil
          name={profil}
          
        />
        <Footer />   
      </div>
    )
  }
}
