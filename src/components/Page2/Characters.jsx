import React, { Component } from 'react'
import Character from './Character'
import './Character.scss'

const fetchResults = async url => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (!data.next) {
      return data.results;
    }
    return [...data.results, ...(await fetchResults(data.next))];
  };

export default class Characters extends Component {

    constructor(props){
        super(props);
        this.state={
            characters:[],
        }
    }

    async componentDidMount(){
    //     this.fetchData()
    // }

    // // fetchData = async() => {
    // //     for (let index = 1; index <= 88; index++) {
    // //         const element = index;
    // //         const data = await fetch(`https://swapi.co/api/people/${element}`)
    // //         const json = await data.json()
    // //         const results = [...this.state.results,json.results]
    // //         this.setState({results})
    // //     }

    // // }

    // fetchData() {
    //     for (let i = 1; i < 21; i++) {
    //         fetch(`https://swapi.co/api/people/${i}`)
    //         .then( response => response.json())
    //         .then( data => this.setState({results : [...this.state.results, data]}))
    //     }
    // }
    // More(){
    //     let i = this.state.results.length + 1
    //     let j = this.state.results.length + 21
    //     for (i;  i < j; i++) {
    //         fetch(`https://swapi.co/api/people/${i}`)
    //         .then( response => response.json())
    //         .then( data => this.setState({results : [...this.state.results, data]   
    //         }))
    //     }
    // }

    // const fetchResults = async () => {
    //     const response = await fetch(`url`);
    //     const data = await response.json();
    //     console.log(data);
    //         this.setState({characters });
    // https://swapi.co/api/people/?page=2
    // async componentDidMount() {
        const characters = await fetchResults("https://swapi.co/api/people/");
        this.setState({ characters });
      }
    





render() {

return (
    <div>
    <div className="container_characters">
    
    { 
this.state.characters.map((character) => {
            
        return(
            <Character
            name={character.name}
            />
        )
    }) 
    } 
    </div>
    <div className="button_character">
    <button onClick={()=>this.More()}>More</button>
    </div>
    </div>
)
}
}

