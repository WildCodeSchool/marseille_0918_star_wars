import React, { Component } from 'react';
import './Error.scss';

export default class Error extends Component {
  render() {
    return (
      <div className="error404">
        <div className="errorImage">
          <img src={require('./yoda.png')} className="Yoda" alt="Yoda" />
        </div>
        <div className="errorText">
          <p>React is the path to the dark side… </p>
          <p>React leads to anger…</p> 
          <p>Anger leads to hate… </p>
          <p>Hate leads to 404 error.</p>
        </div>
      </div>
    )
  }
}
