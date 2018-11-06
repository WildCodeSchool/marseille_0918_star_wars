import React, { Component } from "react";
import "./Profil.scss";


const Profil = ({name}) => (

    // let image1 = require(`./character_bg.png`);

 
    <div className="containerProfil">
    <div className="photoProfil" style={{backgroundImage: `url("${`http://stephanejob.com/img/${imgPeople(name.url)}.jpg`}")`, cursor: `pointer`, backgroundSize: "100%", backgroundPosition: `center`}}>
    </div>
    <div className="holoContainer">
        <h1 className="name">{name.name}</h1>
        <ul className="name">
            <li>Height : {name.height}</li>
            <li>Mass : {name.mass}</li>
            <li>Hair color : {name.hair_color}</li>
            <li>Skin color : {name.skin_color}</li>
            <li>Eye color : {name.eye_color}</li>
            <li>Birth year : {name.birth_year}</li>
            <li>Gender : {name.gender}</li>

        </ul>
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
