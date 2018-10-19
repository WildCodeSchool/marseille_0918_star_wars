import React, { Component } from 'react';
import "./Footer.scss";
import FooterModal from './../FooterModal/FooterModal';

export default class Footer extends Component {
  render() {
    return (
    <div className="footer">
        <div><FooterModal /></div>
        <div className="Socials">
            <a href="">
                <img src={require('./facebook-logo.png')} className="Facebook" alt="Facebook"/>
            </a>
            <a href="">
                <img src={require('./instagram-logo.png')} className="Instagram" alt="Instagram"/>
            </a>
            <a href="">
                <img src={require('./twitter-logo.png')} className="Twitter" alt="Twitter"/>
            </a>
        </div>
    </div>
    )
  }
}
