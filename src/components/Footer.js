import React, { Component } from 'react'

const Footer = props => (
    <div>
        <img src={props.contact} />
        <img src={props.facebook} />
        <img src={props.instagram} />
        <img src={props.twitter} />
        <p>{props.copyright}</p>
    </div>

);

export default Footer;