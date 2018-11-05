import React, { Component } from 'react';
import './Profil.scss';

export default class Profil extends Component {
  render() {
      return (
          <div className="containerProfil">
              <div className="photoProfil">
                  <img src="https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/1.jpg" />
              </div>
              <div className="holoContainer">
                  <p className="textContainer">
                      TEST<br/>
                  </p>
                  <img src="http://image.noelshack.com/fichiers/2018/43/6/1540646493-screenblue.png" className="screenblue" />
                  <img src="http://image.noelshack.com/fichiers/2018/43/6/1540646493-screengreen.png" className="screengreen" />
                  <img src="http://image.noelshack.com/fichiers/2018/43/6/1540646493-screenred.png" className="screenred" />
              </div>
          </div>
      )
  }
}