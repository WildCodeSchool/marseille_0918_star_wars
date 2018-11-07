import React, { Component } from "react";
import "./Profil.scss";

const Profil = ({ name }) => (
  // let image1 = require(`./character_bg.png`);

  <div className="containerProfil">
    <div
      className="photoProfil"
      style={{
        backgroundImage: `url("${`http://stephanejob.com/img/${imgPeople(
          name.url
        )}.jpg`}")`,
        cursor: `pointer`,
        backgroundSize: "cover",
        backgroundPosition: `center`
      }}
    />
    <div className="holoContainer">
      <div className="textContainer">
        <h1 className="profil_title">{name.name}</h1>
        <ul className="profil_text">
          <li><strong> HEIGHT </strong>   <span className="profil_info">{name.height}</span></li>
          <hr/>
          <li> <strong> MASS </strong>   <span className="profil_info">{name.mass}</span></li>
          <hr/>
          <li> <strong> HAIR COLOR </strong>   <span className="profil_info">{name.hair_color}</span> </li>
          <hr/>
          <li> <strong> SKIN COLOR </strong>  <span className="profil_info">{name.skin_color}</span></li>
          <hr/>
          <li> <strong> EYE COLOR </strong>   <span className="profil_info">{name.eye_color}</span></li>
          <hr/>
          <li> <strong> BIRTH YEAR </strong>  <span className="profil_info">{name.birth_year}</span></li>
          <hr/>
          <li> <strong> GENDER </strong>   <span className="profil_info">{name.gender}</span></li>
        </ul>
      </div>

      <img
        src={require('./bluescreen.png')}
        className="screenblue"
      />
      <img
        src={require('./greenscreen.png')}
        className="screengreen"
      />
      <img
        src={require('./redscreen.png')}
        className="screenred"
      />
    </div>
  </div>
);

function imgPeople(url) {
  const split = url.split("/");
  return split[5];
}

export default Profil;
