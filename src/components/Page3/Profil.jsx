import React, { Component } from "react";
import "./Profil.scss";


const Profil = ({name}) => (

    // let image1 = require(`./character_bg.png`);

 
    <div className="containerProfil">
    <div className="photoProfil" style={{backgroundImage: `url("${`http://stephanejob.com/img/${imgPeople(name.url)}.jpg`}")`, cursor: `pointer`, backgroundSize: "100%", backgroundPosition: `center`}}>
    </div>
    <div className="holoContainer">
        <p className="textContainer">
        <h1 className="name">{name.name}</h1>
        <h1 className="name">{name.url}</h1>
        <br />
        </p>
        <img
        src="http://image.noelshack.com/fichiers/2018/43/6/1540646493-screenblue.png"
        className="screenblue"
        />
        <img
        src="http://image.noelshack.com/fichiers/2018/43/6/1540646493-screengreen.png"
        className="screengreen"
        />
        <img
        src="http://image.noelshack.com/fichiers/2018/43/6/1540646493-screenred.png"
        className="screenred"
        />
    </div>
    </div>
);

function imgPeople(url) {
    const split= url.split("/");
    return split[5];
}

export default Profil;
