import React, { Component } from 'react'
import HeaderNoAnim from '../Header/HeaderNoAnim';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import FooterModal from '../FooterModal/FooterModal';
import Characters from './Characters';


export default class Page2 extends Component {
  render() {
    return (
      <div>
        <HeaderNoAnim/>
        <Nav/>
        <Characters/>
        <Footer />   
      </div>
    )
  }
}
