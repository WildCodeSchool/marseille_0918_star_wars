import React, { Component } from 'react'

const Categorie = props => (
    <div className="containercat" >
        <img className="imgcat" src={props.image} alt={props.title}/>
        <h1 className="titlecat">{props.title}</h1>
    </div>

);

export default Categorie;
    

