import React, { Component } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import FooterModal from '../FooterModal/FooterModal';
import Characters from './Characters';


export default class Page2 extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Nav/>
        <Characters/>
        <Footer />   
      </div>
    )
  }
}
