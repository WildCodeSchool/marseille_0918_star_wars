import React, { Component } from 'react';
import {Route,BrowserRouter, Switch, NavLink} from 'react-router-dom';
import Template from './Template';
import Characters from './Characters/Characters';

export default class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Template}/>
                <Route path="/characters" component={Characters}/>
                {/* <Route path="/profile" component={Profile}/> */}
            </Switch>          
        </div>
      </BrowserRouter>
    )
  }
}
