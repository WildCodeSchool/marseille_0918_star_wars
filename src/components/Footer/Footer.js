import React, { Component } from 'react';
import "./Footer.scss";
import FooterModal from './../FooterModal/FooterModal';

export default class Footer extends Component {
  render() {
    return (
    <div className="footer">
        <div className="container_modal"><FooterModal /></div>
        <div className="Socials">
            <a href="https://www.instagram.com/starwars/?hl=fr">
                <img src={require('./facebook-logo.png')} className="Facebook" alt="Facebook"/>
            </a>
            <a href="https://www.facebook.com/StarWars.fr/?brand_redir=169299103121699">
                <img src={require('./instagram-logo.png')} className="Instagram" alt="Instagram"/>
            </a>
            <a href="https://twitter.com/starwars">
                <img src={require('./twitter-logo.png')} className="Twitter" alt="Twitter"/>
            </a>
        </div>
    </div>
    )
  }
}
