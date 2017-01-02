import React, { Component } from 'react'

import ItemCollection from './ItemCollection';
import './Wallet.css'
import Factory from './Factory';

class Wallet extends Component {
  constructor(name) {
    super();
    let f = new Factory();
    this.inventory = [f.create("Stone"), f.create("Wood"), f.create("Flint")]
    console.log(this.inventory)
    this.itemCollections = this.inventory.map((item) => (<ItemCollection key={item.name} name={item.name} quantity={1} />))
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
