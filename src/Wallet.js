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

    setTimeout(() => {
      this.inventory.addItem(f.create("Stone"));
    }, 1000);
    setTimeout(() => {
      this.inventory.addItem(f.create("Stone"));
    }, 1100);
        setTimeout(() => {
      this.inventory.addItem(f.create("Stone"));
    }, 1200);
        setTimeout(() => {
      this.inventory.addItem(f.create("Stone"));
    }, 1300);
    setTimeout(() => {
      this.inventory.addItem(f.create("Wood"));
    }, 1400);
    setTimeout(() => {
      this.inventory.addItem(f.create("Wood"));
    }, 1500);    
    setTimeout(() => {
      this.inventory.addItem(f.create("Flint"));
    }, 1600);

    this.itemCollections = this.inventory.listItems()
  }
  render() {
    return (
      <div className="Wallet">
        <div className="Wallet-header">
          <h2>Your Items</h2>
        </div>
        <div className="Wallet-contents">
          {Object.keys(this.itemCollections)}
        </div>
      </div>
    );
  }

};

export default Wallet;
