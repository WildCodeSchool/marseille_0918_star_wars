import React, { Component } from 'react'


import HeaderNoAnim from '../Header/HeaderNoAnim';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import FooterModal from '../FooterModal/FooterModal';
import Profil from './Profil';
import Character from '../Page2/Character';


export default class Page3 extends Component {

  

  render() {

    // const profil = this.props.location.state.profil;

    return (
      <div>
        <HeaderNoAnim/>
        <Nav/>
        <Profil
          name={this.props.location.state.profil}
          
        />
        <Footer />   
      </div>
    )
  }
}
