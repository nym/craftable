import React, { Component } from 'react'
import Alert from 'react-s-alert';

import * as items from './items'

import './CraftableItems.css';

class CraftableItems extends Component {
  constructor(props) {
    super(props);
    this.onAddItemToWallet = this.onAddItemToWallet.bind(this);
    this.state = {
      craftableItems: items
    }
  }

  onAddItemToWallet(item) {
      this.props.addItem(item);
      Alert.info("click");
  }

  render() {
    const itemsArray = Object.entries(this.state.craftableItems).map((item) => (
      <button alt="poof" key={item} onClick={() => this.onAddItemToWallet(item)}>
        <strong>{item[0]}</strong><br/>{item[1].cost ? Object.entries(item[1].cost).map((costI) => costI[1] + " " + costI[0]).join(", ") : "n/a" }
      </button>
    ));
    return (
      <div className="CraftableItems">
        <div className="CraftableItems-header">
          <h2>Create:</h2>
        </div>
        <div className="CraftableItems-contents">
          {itemsArray}          
        </div>
      </div>
    );
  }

};

export default CraftableItems;
