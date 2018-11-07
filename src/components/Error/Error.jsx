import React, { Component } from 'react';
import './Error.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

export default class Error extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <div className="error">
          <img src={require('./yoda.png')} className="Yoda" alt="Yoda" />
          <div className="errorText">
            <p>React is the path to the dark side… </p>
            <p>React leads to anger…</p> 
            <p>Anger leads to hate… </p>
            <p>Hate leads to 404 error.</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
