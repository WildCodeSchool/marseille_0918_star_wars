import React, { Component } from 'react';
import {Route,BrowserRouter, Switch, NavLink} from 'react-router-dom';
import Template from './Template';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';
export default class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Template}/>
                <Route path="/characters" component={Page2}/>
                <Route path="/profile" component={Page3}/>
                {/* <Route path="/profile" component={Profile}/> */}
            </Switch>          
        </div>
      </BrowserRouter>
    )
  }
}
