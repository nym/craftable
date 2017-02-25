import React, { Component } from 'react';
import './App.css';
import Wallet from './Wallet';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

class App extends Component {
  componentDidMount() {
    Alert.info("Welcome to craftable.")
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Craftable</h2>
        </div>
        <p className="App-intro">
        </p>
        <Wallet />
        <Alert stack={{limit: 5}} />
      </div>
    );
  }
}

export default App;
