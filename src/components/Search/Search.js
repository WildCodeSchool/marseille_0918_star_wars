
import React, {Component} from 'react';
import {AutoComplete} from 'primereact/autocomplete';
// import {returnId} from '';
import "./Search.scss";
import Bouton_R2D2 from './Bouton_R2D2.png';



export default class Search extends Component {

  constructor() {
    super();
    this.state = { 
        searchValue: '',
        searchResult: [],
        filteredCharacters: [],
        isOpen: false,
    };

    this.isOpen = this.isOpen.bind(this);
    
}

async getCharacter() {
    let response = await fetch(`https://swapi.co/api/people/?search=${this.state.searchValue}`)
    response = await response.json()
    await this.setState({searchResult: response.results})
}


isOpen(){
    this.setState({isOpen: !this.state.isOpen });
}


filterCharacter() {
    let results = this.state.searchResult.filter((character) => {
        return character.name.toLowerCase().startsWith(this.state.searchValue.toLowerCase())
    });
    this.setState({ filteredCharacters: results });
}

async runRequest(searchValue){
    await this.setState({searchValue})
    await this.getCharacter()
}

render() {
  console.log("IN RENDER STATE", this.state)
  let inputClassName = this.state.isOpen ? 'input-open' : 'input-close'
  let animButton = this.state.isOpen ? 'button-open' : 'button-close'
  let animButtonBody = this.state.isOpen ? 'body-open' : 'body-close'
  let animButtonHead = this.state.isOpen ? 'head-open' : 'head-close'
    return (
        <div>
            <div className="content-section implementation">
            <div className="button_Search" onClick={this.isOpen} className={animButton}>
    
            <div for="bb8_cb" >
                <div id="bb8">
                    <div id="bb8_head" className={animButtonHead}>
                        <div id="half_circle">
                            <div id="or0"></div>
                            <div id="lens1"></div>
                            <div id="lens2"></div>
                            <div id="or1"></div>
                        </div>
                        <div id="dg1"></div>
                    <div id="lg1"></div>
                    </div>
                    <div id="bb8_body" className={animButtonBody}>
                        <div id="lg2"></div>
                        <div id="c1">
                            <div class="s1"></div>
                            <div class="s2"></div>
                        </div>
                        <div id="c2">
                            <div class="s1"></div>
                            <div class="s2"></div>
                        </div>
                        <div id="c3">
                            <div class="s1"></div>
                            <div class="s2"></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
                <AutoComplete inputClassName={inputClassName} value={this.state.searchValue} suggestions={this.state.filteredCharacters}
                completeMethod={() => this.filterCharacter()} field="name" id="id"
                    size={30} placeholder="Countries" minLength={1} onChange={(e) => this.runRequest(e.target.value)} />
            </div>
            
        </div>
    )
}
}

