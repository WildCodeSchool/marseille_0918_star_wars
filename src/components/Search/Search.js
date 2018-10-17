import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import "./Search.css";

export default class Search extends Component {
  state = {
    searchDatas: [
      { label: 'apple', name: "hfduhfud" },
      { label: 'banana' },
      { label: 'pear' }
    ],
    inputSearchValue: '',
    suggestDatas: []
  }

  filterResult(e){
    this.setState({inputSearchValue: e.target.value})

    let filteredResult = this.state.searchDatas.filter((val) => {
      return val.label.startsWith(e.target.value)
    })
    this.setState({suggestDatas: filteredResult})
  }

  render() {
    console.log(this.state)
    return (
      //hide because break responsive design
      <div className="search_bar" hidden>
        <Autocomplete
          inputProps={{placeholder: 'search me'}}
          getItemValue={(item) => item.label}
          items={this.state.suggestDatas}
          renderItem={(item, isHighlighted) =>
            <div key={item.label} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.label}
            </div>
          }
          value={this.state.inputSearchValue}
          onChange={(e) => this.filterResult(e)}
          onSelect={(val) => console.log(val)}
        />
      </div>
    )
  }
}
