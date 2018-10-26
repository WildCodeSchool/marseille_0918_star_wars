import React, { Component } from 'react'

export default class Character extends Component {
render() {
    
    let image1 = require(`./character_bg.png`)
    // let background = `(url("./character_bg.png")`;

 return (
    <div className='character_card'
        style={{backgroundImage:`url("${image1}")`, cursor: `pointer`, backgroundSize: "120%", backgroundPosition: `center`}}>
        <h1>{this.props.name}</h1>
    </div>
)
}
}
