import React, { Component } from 'react'
import Alert from 'react-s-alert';

import * as items from './items'

import './CraftableItems.css';

class CraftableItems extends Component {
  constructor(name) {
    super();
    this.itemsArray = Object.entries(items).map((item) => (
      <button alt="poof" key={item} onClick={this.handleClick}>
        <strong>{item[0]}</strong><br/>{item[1].cost ? Object.entries(item[1].cost).map((costI) => costI[1] + " " + costI[0]).join(", ") : "n/a" }
      </button>
    ));
  }
  handleClick() {
    Alert.info("click");
  }
  render() {
    return (
      <div className="CraftableItems">
        <div className="CraftableItems-header">
          <h2>Create:</h2>
        </div>
        <div className="CraftableItems-contents">
          {this.itemsArray}          
        </div>
      </div>
    );
  }

};

export default CraftableItems;
