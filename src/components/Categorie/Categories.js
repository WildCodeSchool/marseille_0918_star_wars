import React, { Component } from 'react';
import './Categories.scss';
import Categorie from './Categorie';

// background1: 'url("./Pictures/StarWars-09.png"),url("http://getwallpapers.com/wallpaper/full/1/3/7/540211.jpg")', background2: 'url("./Pictures/StarWars-09.png"),url("./Pictures/Star.gif")

const categories = [
{title: 'Characters', images: {hover1: "characters.png", hover2: "characters2.png", blur1: "characters.png", blur2: "characters2.gif"}},
{title: 'Starships', images: {hover1: "starships.png", hover2: "starships1.png", blur1: "starships.png", blur2: "starships.gif"}},
{title: 'Planets', images: {hover1: "planets.png", hover2: "planets1.png", blur1: "planets.png", blur2: "planets.gif"}},
{title: 'Species', images: {hover1: "species.png", hover2: "species1.png", blur1: "species.png", blur2: "species1.gif"}}
]

export default class Categories extends Component {

    render() {
        
        return (
    
            <div className="cards" onMouseOver={this.hoverOpen}>
            {
                categories.map((cat) => {
                    return(
                        <Categorie 
                            title={cat.title}
                            images={cat.images}
                        />
                    )
                })
            }
            </div>
    // <div className="containercat" >
        // {/* <img className="imgcat" src={props.image} alt={props.title}/> */}
        
    // </div>
        )
    }
}


    

