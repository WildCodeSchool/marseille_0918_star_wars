import React, { Component } from 'react'
import "./Header.css";

const Header = props => (
    <header className="header">
        <img src={props.logo} className="logo" alt="logo"/>
    </header>
);
export default Header;