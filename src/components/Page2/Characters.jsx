import React, { Component } from 'react'
import Character from './Character'
import './Character.scss'
import{NavLink} from 'react-router-dom';
import Spinner from "../Page2/Spinner"


export default class Characters extends Component {

        state={
            page:1,
            characters:[],
            profil:[],

        }
    

    componentDidMount(){
            this.fetchData()
        }
    
        fetchData = () => {
            if (this.state.page <= 9) {
                fetch(`https://swapi.co/api/people/?page=${this.state.page}`)
                    .then(response => response.json())
                    .then(data => {
                        this.setState({characters:[...this.state.characters,...data.results]})
                    });
                this.setState({page:this.state.page +=1})
            }
    
        };
    
        fetchApi = ()=> {
            this.fetchData()
    };

    getCharacter= (character) => {
        this.setState({profil : character})
        console.log(character)
    }

render() {
        if (this.state.characters.length > 0) {
            return (
                <div>
                <div className="container_characters">
    
            
                { 
                this.state.characters.map((character) => {       
                    return(
                        <div onClick={()=>this.getCharacter(character)}>
                        <NavLink to={{pathname:"/profile", state: {profil: character}}}>
                            <Character
                            {...character}
                            />
                        </NavLink>
                        </div>
                    )
                }) 
                } 
                </div>
                <div className="button_character">
                <img className="button_img" src={require('./More_button.png')}  onClick={()=>this.fetchApi()}/>
                </div>
            </div>
            )
            
        }
    return (
        <Spinner/>

    )
}
}

