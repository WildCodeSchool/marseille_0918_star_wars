import React, { Component } from 'react'
import "./Footer.css";

const Footer = props => (
    <div className="container-grid">
        <div className="container-planet"><img src={props.contact} height="32"/></div>
        <div className="container-copyright"><span>{props.copyright}</span></div>
        <div className="container-socials">
            <img src={props.facebook}/>
            <img src={props.instagram}/>
            <img class="last-logo" src={props.twitter}/>
        </div>
    </div>
);

export default Footer;