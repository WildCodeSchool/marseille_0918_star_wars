import React, {Component} from 'react';
// import {returnId} from '';
import "./Search.scss";



export default class Search extends Component {

constructor() {
    super();
    this.state = { 
        searchValue: '',
        searchResult: [],
        charNames: [],
        isOpen: false,
    };

    this.isOpen = this.isOpen.bind(this);
    
}

async getCharacter(searchValue) {
    // set state to save searchvalue
    this.setState({searchValue: searchValue})
    // run api call
    let response = await fetch(`https://swapi.co/api/people/?search=${searchValue}`);
    // await for convert to json
    response = await response.json();
    // filter api results
    response = response.results.filter((char) => {
        return char.name.toLowerCase().startsWith(searchValue.toLowerCase())
    })
    let charNames = response.map((char) => {
        return char.name
    });
    // set filter result to states
    this.setState({searchResult: response, charNames: charNames});
    // Clear search result if input value is blank
    if(searchValue == "" || searchValue == undefined){
        await this.setState({searchResult: [], charNames: []})
    }
}


isOpen(){
    this.setState({isOpen: !this.state.isOpen });
}

render() {
  console.log("IN RENDER STATE", this.state)
  let {searchResult, searchValue, charNames, isOpen} = this.state;
  let inputClassName = isOpen ? 'input-open' : 'input-close'
  let animButton = isOpen ? 'button-open' : 'button-close'
  let animButtonBody = isOpen ? 'body-open' : 'body-close'
  let animButtonHead = isOpen ? 'head-open' : 'head-close'


  
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
                          
                        </div>
                        <div id="rectangle"></div>
                    </div>
                </div>
            </div>
            </div>
            
                <input
                    className={inputClassName} 
                    type='search'
                    value={searchValue}
                    onChange={(e) => this.getCharacter(e.target.value)}
                    autoComplete='off'
                    placeholder= "May the force be with you"
                />
                {   // display suggestions if exist and if no one is selected 
                    searchResult.length > 0 && 
                    !charNames.includes(searchValue) &&
                    searchValue != "" &&
                    <div>
                        <ul className="suggestion">
                            {
                                searchResult.map((char, index) => {
                                    return (
                                        <li 
                                            key={index}
                                            style={{color: 'black', cursor: 'pointer'}}
                                            onClick={() => this.setState({searchValue: char.name})}
                                        >   
                                            {char.name}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                }
            </div>
            
        </div>
    )
}
}