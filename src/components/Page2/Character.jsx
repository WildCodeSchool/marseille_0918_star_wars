import React, { Component } from 'react';


let image1 = require(`./character_bg.png`);

const Character = ({name , url}) => (
    
    <div className="character_card" style={{backgroundImage: `url("${`http://stephanejob.com/img/${imgPeople(url)}.jpg`}")`, cursor: `pointer`}}>
        {/* <img src={require('./StarWars_Characters-17.png')} className="hover_char"/> */}
        <div className="content">
            <h1 className="name">{name}</h1>
        </div>
    </div>
);
function imgPeople(url) {
    const split= url.split("/");
    return split[5];
}
export default Character;


