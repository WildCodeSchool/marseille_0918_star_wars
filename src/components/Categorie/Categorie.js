import React, { Component } from 'react';
import Responsive from 'react-responsive';

    const Desktop = props => <Responsive {...props} minWidth={992} maxWidth={1199} />;
    const Tablet = props => <Responsive {...props} minWidth={767} maxWidth={991} />;
    const Mobile = props => <Responsive {...props}  maxWidth={766} />;
    const LargeDesktop = props => <Responsive {...props} minWidth={1200} />;

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

componentDidMount(){
// Setup isScrolling variable
var isScrolling;
// Listen for scroll events
window.addEventListener('scroll', function( event ) {
    
	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {
        
		// Run the callback
		console.log( 'Scrolling has stopped.' );

	}, 66);

}, false);
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
        
    <div>
        <LargeDesktop>
        <div className="titlecat"
                style={{backgroundImage: background, cursor: 'pointer', backgroundSize: "101%, 101%", backgroundPosition: "center, 50% 23%", backgroundRepeat: "no-repeat"}}
                onMouseEnter={() => this.setState({hover: false})}
                onMouseLeave={() => this.setState({hover: true})}
                >
                <h1
                >{title}
                </h1>
            </div>
        </LargeDesktop>
        <Desktop>
        <div className="titlecat"
                style={{backgroundImage: background, cursor: 'pointer', backgroundSize: "101%, 100%", backgroundPosition: "center, 50% 32%", backgroundRepeat: "no-repeat"}}
                onMouseEnter={() => this.setState({hover: false})}
                onMouseLeave={() => this.setState({hover: true})}
                >
                <h1
                >{title}
                </h1>
            </div>
        </Desktop>
        <Tablet>
        <div className="titlecat"
                style={{backgroundImage: background, cursor: 'pointer', backgroundSize: "102%, 101%", backgroundPosition: "center, 50% 11%", backgroundRepeat: "no-repeat"}}
                onMouseEnter={() => this.setState({hover: false})}
                onMouseLeave={() => this.setState({hover: true})}
                >
                <h1
                >{title}
                </h1>
            </div>
        </Tablet>
        <Mobile>
        <div className="titlecat"
                style={{backgroundImage: background, cursor: 'pointer', backgroundSize: "60%, 59%", backgroundPosition: "center, 50% 25%", backgroundRepeat: "no-repeat"}}
                ScrollOn={() => this.setState({hover: false})}
                ScrollOff={() => this.setState({hover: true})}
                >
                <h1
                >{title}
                </h1>
            </div>
        </Mobile>
        
       
    </div>
    )
    }
}
