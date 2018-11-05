import React, { Component } from 'react';


let image1 = require(`./character_bg.png`);

const Character = ({name , url}) => (
    
    <div className="character_card" style={{backgroundImage: `url("${image1}"),url("${`http://stephanejob.com/img/${imgPeople(url)}.jpg`}")`, cursor: `pointer`, backgroundSize: "100%", backgroundPosition: `center`}}>
        
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


