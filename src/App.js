import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Categorie from './components/Categorie';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <body>
        
        <Categorie
        image="https://photos.lci.fr/images/613/344/vador-1-680895-0@1x.jpeg"
        title="Characters"
        />
        </body>
        <footer>
          <Footer
          contact = ""
          copyright = "Star Wars and all associated names and/or images are copyright Lucasfilm Ltd. Images were freely collected from Wookiepedia"
          facebook = ""
          instagram = ""
          twitter = ""
          />
        </footer>
      </div>
    );
  }
}

export default App;
