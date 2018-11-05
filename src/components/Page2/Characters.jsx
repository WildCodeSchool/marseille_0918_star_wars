import React, { Component } from 'react'
import Character from './Character'
import './Character.scss'


export default class Characters extends Component {
    constructor(props){
        super(props);
        this.state={
            page:1,
            characters:[],
        }
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

render() {

    return (
        <div>
            <div className="container_characters">
        
            { 
            this.state.characters.map((character) => {       
                return(
                
                    <Character
                    {...character}
                    />
                )
            }) 
            } 
            </div>
            <div className="button_character">
                <button onClick={()=>this.fetchApi()}>More</button>
            </div>
        </div>
    )
}
}

