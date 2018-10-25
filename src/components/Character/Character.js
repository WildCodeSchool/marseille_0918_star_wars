import React, { Component } from 'react'
import "./Character.css";

const Character = props => (
    <div className="container-grid-character">
        <div className="container-avatar"><img src={props.avatar} /></div>
        <div className="container-description"><h1>{props.description}</h1></div>
    </div>
);

export default Character;