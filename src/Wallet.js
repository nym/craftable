import React, { Component } from 'react';

import ItemCollection from './ItemCollection';
import './Wallet.css';
import Factory from './Factory';
import WalletModel from './WalletModel';

class Wallet extends Component {
  constructor(name) {
    super();
    let f = new Factory();
    // memory model for now
    this.inventory = new WalletModel();
    this.inventory.addItem(f.create("Stone"));
    this.inventory.addItem(f.create("Stone"));
    this.inventory.addItem(f.create("Stone"));
    this.inventory.addItem(f.create("Stone"));
    this.inventory.addItem(f.create("Stone"));
    this.inventory.addItem(f.create("Wood"));
    this.inventory.addItem(f.create("Flint"));
    console.log(this.inventory.listItems());

    this.itemCollections = Object.keys(this.inventory.listItems())
  }
  render() {
    return (
      <div className="Wallet">
        <div className="Wallet-header">
          <h2>Your Items</h2>
        </div>
        <div className="Wallet-contents">
          {this.itemCollections}
        </div>
      </div>
    );
  }

};

export default Wallet;
