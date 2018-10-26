import React, { Component } from 'react'

export default class Categorie extends Component {
    constructor(props){
        super(props);
            this.state = {
                hover: true
            }
    this.hoverOpen = this.hoverOpen.bind(this);
        }

hoverOpen(){
    this.setState({hover : !this.state.hover})
}
  render() {
    const {title, images} = this.props;
    let image1 = require(`./Pictures/${this.props.images.hover1}`)
    let image2 = require(`./Pictures/${this.props.images.hover2}`)
    let image3 = require(`./Pictures/${this.props.images.blur1}`)
    let image4 = require(`./Pictures/${this.props.images.blur2}`)

    
    let background = "";

    if(this.state.hover){
        background = `url('${image1}'), url('${image2}')`
    } else {
        background = `url('${image3}'), url('${image4}')`
    }
    // let hoverAnim = this.state.hover ? this.props.backgroundBlur : this.props.backgroundOver
    return (
      <div
      className="titlecat"
        style={{backgroundImage: background, cursor: 'pointer', backgroundSize: "101%, 100%", backgroundPosition: "center, 50% 20%", backgroundRepeat: "no-repeat"}}
        onMouseEnter={() => this.setState({hover: false})}
        onMouseLeave={() => this.setState({hover: true})}
      >
        <h1
        >{title}
        </h1>
      </div>
    )
  }
}
