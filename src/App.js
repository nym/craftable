import React, { Component } from 'react';
import './App.css';
import Wallet from './Wallet';
import CraftableItems from './CraftableItems';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Craftable</h2>
        </div>
        <p className="App-intro">
          Wecome to craftable.
        </p>
        <Wallet />
        <CraftableItems />

      </div>
    );
  }
}

export default App;
